const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const { User, MenuItem, Review, OwnerInfo } = require('./models');

dotenv.config();

connectDB();

const importData = async () => {
    try {
        // Clear existing data to avoid duplicates/conflicts during dev
        await User.deleteMany();
        await MenuItem.deleteMany();
        await Review.deleteMany();
        await OwnerInfo.deleteMany();

        // Create Admin User
        const adminUser = await User.create({
            username: 'admin',
            password: 'adminpassword123',
        });
        console.log('Admin User Created');

        // Real Menu Items based on Gaylords Dehradun
        const menuItems = [
            // Bakery / Desserts
            {
                name: 'Pineapple Pastry',
                description: 'Our signature fresh pineapple pastry, a Dehradun favorite.',
                price: 75,
                category: 'Desserts',
                isVeg: true,
                image: 'https://images.unsplash.com/photo-1535141192574-5d4897c12636?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
            {
                name: 'Chocolate Truffle',
                description: 'Rich, dark chocolate truffle cake slice.',
                price: 90,
                category: 'Desserts',
                isVeg: true,
                image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
            // Chinese
            {
                name: 'Veg Chinese Platter',
                description: 'A complete meal with Noodles, Manchurian, fried rice and momos.',
                price: 190,
                category: 'Chinese',
                isVeg: true,
                image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
            {
                name: 'Veg Momos (Steam)',
                description: 'Fresh vegetables wrapped in soft dough, served with spicy chutney.',
                price: 80,
                category: 'Chinese',
                isVeg: true,
                image: 'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
            // South Indian
            {
                name: 'Masala Dosa',
                description: 'Crispy rice crepe filled with spiced potato mix, served with sambar and chutney.',
                price: 125,
                category: 'Main Course',
                isVeg: true,
                image: 'https://images.unsplash.com/photo-1589301760014-d9296897fba9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
            // Fast Food / Snacks
            {
                name: 'Veggie Burger',
                description: 'Classic vegetable patty burger with cheese and fresh veggies.',
                price: 65,
                category: 'Starters',
                isVeg: true,
                image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            },
            {
                name: 'Cold Coffee with Ice Cream',
                description: 'Thick cold coffee topped with vanilla ice cream.',
                price: 120,
                category: 'Beverages',
                isVeg: true,
                image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
            }
        ];

        await MenuItem.insertMany(menuItems);
        console.log('Menu Items Imported');

        // Reviews
        const reviews = [
            {
                name: 'Anjali Rawat',
                rating: 5,
                comment: 'The Pineapple Pastry is legendary! Have been eating it since childhood.',
                source: 'Google',
            },
            {
                name: 'Rahul Gupta',
                rating: 4,
                comment: 'Great place for quick bites. The Chinese Platter is very filling.',
                source: 'Zomato',
            }
        ];

        await Review.insertMany(reviews);
        console.log('Reviews Imported');

        // Owner Info
        await OwnerInfo.create({
            title: 'A Legacy Since 1978',
            story: 'Established in 1978 by Mr. Dildar, Gaylord Express started as a small bakery and has grown into one of Dehradun\'s most loved cafes. Located in the bustling Paltan Bazaar, we are known for our commitment to quality and taste.\n\nGenerations of Doonites have grown up celebrating birthdays with our cakes and enjoying evening snacks at our cafe. We continue to serve with the same passion and love.',
            vision: 'To keep the tradition of authentic taste alive while embracing modern cafe culture.',
            image: 'https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80' // Placeholder for cafe owner/interior
        });
        console.log('Owner Info Imported');

        console.log('Data Imported!');
        process.exit();
    } catch (error) {
        console.error(`${error}`);
        process.exit(1);
    }
};

importData();
