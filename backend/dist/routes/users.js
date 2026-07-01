"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const db_1 = __importDefault(require("../db"));
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret-key-123';
// Register
router.post('/register', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }
        const existingUser = await db_1.default.user.findUnique({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this email already exists' });
        }
        const passwordHash = await bcryptjs_1.default.hash(password, 10);
        const user = await db_1.default.user.create({
            data: {
                email,
                passwordHash,
                plan: 'free',
                generationsUsed: 0
            }
        });
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
        res.status(201).json({
            token,
            user: { email: user.email, plan: user.plan, generationsUsed: user.generationsUsed }
        });
    }
    catch (error) {
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
        const user = await db_1.default.user.findUnique({ where: { email } });
        if (!user) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const validPassword = await bcryptjs_1.default.compare(password, user.passwordHash);
        if (!validPassword) {
            return res.status(401).json({ error: 'Invalid email or password' });
        }
        const token = jsonwebtoken_1.default.sign({ userId: user.id, email: user.email }, JWT_SECRET, { expiresIn: '7d' });
        res.json({
            token,
            user: { email: user.email, plan: user.plan, generationsUsed: user.generationsUsed }
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Profile
router.get('/profile', auth_1.authenticateToken, async (req, res) => {
    try {
        const userId = req.user?.userId;
        const user = await db_1.default.user.findUnique({ where: { id: userId } });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json({
            email: user.email,
            plan: user.plan,
            generationsUsed: user.generationsUsed
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Upgrade
router.post('/upgrade', auth_1.authenticateToken, async (req, res) => {
    try {
        const userId = req.user?.userId;
        const user = await db_1.default.user.update({
            where: { id: userId },
            data: { plan: 'pro' }
        });
        res.json({
            email: user.email,
            plan: user.plan,
            generationsUsed: user.generationsUsed
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Increment usage
router.post('/increment-usage', auth_1.authenticateToken, async (req, res) => {
    try {
        const userId = req.user?.userId;
        const user = await db_1.default.user.update({
            where: { id: userId },
            data: { generationsUsed: { increment: 1 } }
        });
        res.json({
            email: user.email,
            plan: user.plan,
            generationsUsed: user.generationsUsed
        });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.default = router;
