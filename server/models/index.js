const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// --- User Schema (Admin) ---
const userSchema = mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
}, { timestamps: true });

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model('User', userSchema);

// --- Menu Item Schema ---
const menuItemSchema = mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    category: { type: String, required: true, enum: ['Starters', 'Main Course', 'Chinese', 'Continental', 'Breads', 'Beverages', 'Desserts'] },
    image: { type: String }, // URL
    isVeg: { type: Boolean, default: true },
    isAvailable: { type: Boolean, default: true },
}, { timestamps: true });

const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// --- Review Schema ---
const reviewSchema = mongoose.Schema({
    name: { type: String, required: true },
    rating: { type: Number, required: true, min: 1, max: 5 },
    comment: { type: String, required: true },
    source: { type: String, default: 'Website' }, // Website, Google, etc.
    isVisible: { type: Boolean, default: true },
}, { timestamps: true });

const Review = mongoose.model('Review', reviewSchema);

// --- Owner Info Schema ---
const ownerInfoSchema = mongoose.Schema({
    title: { type: String, default: "About the Owner" },
    story: { type: String },
    vision: { type: String },
    image: { type: String }, // URL
}, { timestamps: true });

const OwnerInfo = mongoose.model('OwnerInfo', ownerInfoSchema);

// --- Contact Message Schema ---
const contactMessageSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    isRead: { type: Boolean, default: false },
}, { timestamps: true });

const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);

module.exports = {
    User,
    MenuItem,
    Review,
    OwnerInfo,
    ContactMessage,
};
