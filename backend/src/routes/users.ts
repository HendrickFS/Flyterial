import { Router } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import prisma from '../db';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key-123';

// Register
router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User with this email already exists' });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const user = await prisma.user.create({
      data: {
        email,
        passwordHash,
        plan: 'free',
        generationsUsed: 0
      }
    });

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.status(201).json({
      token,
      user: { email: user.email, plan: user.plan, generationsUsed: user.generationsUsed }
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }

    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const validPassword = await bcrypt.compare(password, user.passwordHash);
    if (!validPassword) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const token = jwt.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
    res.json({
      token,
      user: { email: user.email, plan: user.plan, generationsUsed: user.generationsUsed }
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Profile
router.get('/profile', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user?.userId;
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json({
      email: user.email,
      plan: user.plan,
      generationsUsed: user.generationsUsed
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Upgrade
router.post('/upgrade', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user?.userId;
    const user = await prisma.user.update({
      where: { id: userId },
      data: { plan: 'pro' }
    });

    res.json({
      email: user.email,
      plan: user.plan,
      generationsUsed: user.generationsUsed
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Increment usage
router.post('/increment-usage', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const userId = req.user?.userId;
    const user = await prisma.user.update({
      where: { id: userId },
      data: { generationsUsed: { increment: 1 } }
    });

    res.json({
      email: user.email,
      plan: user.plan,
      generationsUsed: user.generationsUsed
    });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
