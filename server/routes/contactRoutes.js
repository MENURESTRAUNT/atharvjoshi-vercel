const express = require('express');
const router = express.Router();
const { ContactMessage } = require('../models');
const { protect } = require('../middleware/authMiddleware');

// @desc    Submit a contact message
// @route   POST /api/contact
// @access  Public
router.post('/', async (req, res) => {
    try {
        const { name, email, message } = req.body;
        const newMessage = new ContactMessage({ name, email, message });
        await newMessage.save();
        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(400).json({ message: 'Invalid data' });
    }
});

// @desc    Get all messages
// @route   GET /api/contact
// @access  Private/Admin
router.get('/', protect, async (req, res) => {
    try {
        const messages = await ContactMessage.find({}).sort({ createdAt: -1 });
        res.json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Server Error' });
    }
});

module.exports = router;
