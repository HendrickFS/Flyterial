"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../db"));
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// Get all presets
router.get('/', async (req, res) => {
    try {
        const presets = await db_1.default.preset.findMany({
            orderBy: { createdAt: 'desc' }
        });
        res.json(presets);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Create/Share a preset
router.post('/', auth_1.authenticateToken, async (req, res) => {
    try {
        const { name, level, structure, description } = req.body;
        const userEmail = req.user?.email;
        if (!name || !level || !structure || !description) {
            return res.status(400).json({ error: 'All fields are required (name, level, structure, description)' });
        }
        if (!userEmail) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        const preset = await db_1.default.preset.create({
            data: {
                name,
                level,
                structure,
                description,
                createdBy: userEmail
            }
        });
        res.status(201).json(preset);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
// Delete a custom preset
router.delete('/:id', auth_1.authenticateToken, async (req, res) => {
    try {
        const { id } = req.params;
        const userEmail = req.user?.email;
        const preset = await db_1.default.preset.findUnique({ where: { id } });
        if (!preset) {
            return res.status(404).json({ error: 'Preset not found' });
        }
        if (preset.createdBy !== userEmail) {
            return res.status(403).json({ error: 'You are not authorized to delete this preset' });
        }
        await db_1.default.preset.delete({ where: { id } });
        res.json({ success: true, message: 'Preset deleted successfully' });
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});
exports.default = router;
