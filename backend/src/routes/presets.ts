import { Router } from 'express';
import prisma from '../db';
import { authenticateToken, AuthRequest } from '../middleware/auth';

const router = Router();

// Get all presets
router.get('/', async (req, res) => {
  try {
    const presets = await prisma.preset.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(presets);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Create/Share a preset
router.post('/', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { name, level, structure, description } = req.body;
    const userEmail = req.user?.email;

    if (!name || !level || !structure || !description) {
      return res.status(400).json({ error: 'All fields are required (name, level, structure, description)' });
    }

    if (!userEmail) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const preset = await prisma.preset.create({
      data: {
        name,
        level,
        structure,
        description,
        createdBy: userEmail
      }
    });

    res.status(201).json(preset);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

// Delete a custom preset
router.delete('/:id', authenticateToken, async (req: AuthRequest, res) => {
  try {
    const { id } = req.params;
    const userEmail = req.user?.email;

    const preset = await prisma.preset.findUnique({ where: { id } });
    if (!preset) {
      return res.status(404).json({ error: 'Preset not found' });
    }

    if (preset.createdBy !== userEmail) {
      return res.status(403).json({ error: 'You are not authorized to delete this preset' });
    }

    await prisma.preset.delete({ where: { id } });
    res.json({ success: true, message: 'Preset deleted successfully' });
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
