const express = require('express');
const router = express.Router();
const { OwnerInfo } = require('../models');
const { protect } = require('../middleware/authMiddleware');

const mockOwner = {
    title: 'A Legacy Since 1978',
    story: 'Established in 1978 by Mr. Dildar, Gaylord Express started as a small bakery and has grown into one of Dehradun\'s most loved cafes. Located in the bustling Paltan Bazaar, we are known for our commitment to quality and taste.\n\nGenerations of Doonites have grown up celebrating birthdays with our cakes and enjoying evening snacks at our cafe.',
    vision: 'To keep the tradition of authentic taste alive while embracing modern cafe culture.',
    image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?w=800'
};

router.get('/', async (req, res) => {
    try {
        const ownerInfo = await OwnerInfo.findOne();
        if (ownerInfo) {
            res.json(ownerInfo);
        } else {
            res.json(mockOwner);
        }
    } catch (error) {
        console.log('DB Error, returning mock owner');
        res.json(mockOwner);
    }
});

router.put('/', protect, async (req, res) => {
    res.json(mockOwner); // Mock update
});

module.exports = router;
