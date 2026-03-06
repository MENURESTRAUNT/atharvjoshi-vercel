const menuData = [
    {
        category: "Ice Cream Sodas",
        items: [
            { name: "Vanilla Rainbow", price: null, description: "Classic vanilla soda with rainbow sprinkles" },
            { name: "Pineapple", price: null, description: "Refreshing pineapple soda" },
            { name: "Butter Scotch", price: null, description: "Creamy butterscotch soda" }
        ]
    },
    {
        category: "Chocolate Soft Serve",
        items: [
            { name: "Chocolate", price: 20 },
            { name: "Gems Delight", price: 30 },
            { name: "Nuts Delight", price: 30 },
            { name: "Choco Fudge", price: 30 },
            { name: "Choco Nut", price: 30 }
        ]
    },
    {
        category: "Burgers & Sandwiches",
        items: [
            { name: "Veg Burger", price: 40 },
            { name: "Cheese Burger", price: 50 },
            { name: "Chicken Burger", price: 60 },
            { name: "Paneer Burger", price: 50 },
            { name: "Chicken Tikka Burger", price: 60 },
            { name: "Veg Sandwich (2 jumbo pcs)", price: 50 },
            { name: "Veg Cheese Sandwich (2 jumbo pcs)", price: 60 },
            { name: "Veg Cheese & Chutney Sandwich", price: 60 },
            { name: "Chicken Sandwich", price: 70 },
            { name: "Grilled Cheese Sandwich", price: 60 },
            { name: "Grilled Veg Sandwich", price: 60 },
            { name: "Cheese Grill Sandwich", price: 70 },
            { name: "Chicken Hot Dog", price: 70 },
            { name: "Chicken Hot Dog with Cheese", price: 80 }
        ]
    },
    {
        category: "Chicken & Sides",
        items: [
            { name: "Chicken Pop Corn", price: 80 },
            { name: "Chicken Nuggets", price: 80 },
            { name: "Chicken Sizzler", price: 150 },
            { name: "Chicken Seekh Kebab (Plate)", price: 120 },
            { name: "Omelette (2 Eggs)", price: 40 },
            { name: "Cheese Omelette", price: 50 },
            { name: "Chicken Salad", price: 70 }
        ]
    },
    {
        category: "Pastries & Puddings",
        items: [
            { name: "Pineapple", price: 35 },
            { name: "Chocolate", price: 35 },
            { name: "Forest Gump", price: 40 },
            { name: "Black Forest", price: 40 },
            { name: "Butterscotch", price: 40 },
            { name: "Chocolate Truffle", price: 45 },
            { name: "Chocolate Pudding", price: 35 }
        ]
    },
    {
        category: "Eggless Pastries & Pudding",
        items: [
            { name: "Pineapple Eggless", price: 35 },
            { name: "Black Forest Eggless", price: 40 },
            { name: "Chocolate Eggless", price: 40 },
            { name: "Butterscotch Eggless", price: 40 },
            { name: "Chocolate Pudding", price: 35 }
        ]
    },
    {
        category: "Mocktails",
        items: [
            { name: "Kala Khatta", price: "40-50" },
            { name: "Green Mint", price: "40-50" },
            { name: "Strawberry", price: "40-50" },
            { name: "Mojito", price: "40-50" },
            { name: "Pineapple", price: "40-50" },
            { name: "Orange", price: "40-50" }
        ]
    },
    {
        category: "Coops (Hot Beverages)",
        items: [
            { name: "Vanilla", price: null },
            { name: "Strawberry", price: null },
            { name: "Three-in-One", price: null },
            { name: "Butter Scotch", price: null },
            { name: "Tutti Frutti", price: null },
            { name: "Mango", price: null },
            { name: "Chocolate", price: null },
            { name: "Nuts", price: null },
            { name: "Choco Chips", price: null },
            { name: "Kesar", price: null },
            { name: "Coffee", price: null },
            { name: "Mixed Fruit", price: null }
        ]
    },
    {
        category: "Sundaes",
        items: [
            { name: "Single Sundae", price: null },
            { name: "Pineapple", price: null },
            { name: "Strawberry", price: null },
            { name: "Black Currant", price: null },
            { name: "Tutti Frutti", price: null },
            { name: "Vanilla", price: null },
            { name: "Butterscotch", price: null },
            { name: "Chocolate Fudge", price: null },
            { name: "Hot Chocolate Sundae", price: null },
            { name: "Chocolate Brownie Sundae", price: null }
        ]
    },
    {
        category: "Chaat / Papdi Chaat",
        items: [
            { name: "Golgappa (Atta)", price: null },
            { name: "Golgappa (Suji)", price: null },
            { name: "Dahi Bhalla", price: null },
            { name: "Dahi Papdi Chaat", price: null },
            { name: "Aloo Tikki", price: null },
            { name: "Extra Golgappa (5 pcs)", price: null },
            { name: "Bhel Puri", price: null }
        ]
    },
    {
        category: "Oven Fresh Bakes",
        items: [
            { name: "Veg Patty", price: 15 },
            { name: "Paneer Patty", price: 25 },
            { name: "Cheese Patty", price: 25 },
            { name: "Chicken Patty", price: 35 },
            { name: "Paneer Roll", price: 40 },
            { name: "Cheese Roll", price: 40 },
            { name: "Paneer Toast", price: 35 },
            { name: "Corn Toast", price: 35 },
            { name: "Italian Stuffed Bun", price: 40 },
            { name: "Spanish Roll", price: 40 },
            { name: "Cheese Ball", price: 35 },
            { name: "Stuffed Bun", price: 40 },
            { name: "Cheese Roll Chicken", price: 45 },
            { name: "Chapata Aloo Roll", price: 30 }
        ]
    },
    {
        category: "Cool Treats",
        items: [
            { name: "Fresh Lime Soda", price: null },
            { name: "Fresh Lime Water", price: null },
            { name: "Cold Coffee", price: null },
            { name: "Cold Coffee with Ice Cream", price: null },
            { name: "Cold Coffee with Chocolate", price: null },
            { name: "Flavour Milk (All flavours)", price: null },
            { name: "Sugarcane Juice", price: null },
            { name: "Cold Fruit Punch", price: null }
        ]
    },
    {
        category: "Ice Cream Shakes",
        items: [
            { name: "Vanilla", price: null },
            { name: "Strawberry", price: null },
            { name: "Chocolate", price: null },
            { name: "Butterscotch", price: null },
            { name: "Pineapple", price: null },
            { name: "Mango", price: null },
            { name: "Banana", price: null },
            { name: "Black Currant", price: null },
            { name: "Oreo", price: null },
            { name: "KitKat", price: null }
        ]
    },
    {
        category: "Indian Combos",
        items: [
            { name: "Choley Bhature", price: null },
            { name: "Choley Chawal", price: null },
            { name: "Rajma Chawal", price: null },
            { name: "Paneer Chawal", price: null },
            { name: "Chawal Rajma", price: null },
            { name: "Veg Biryani", price: null },
            { name: "Paneer Biryani", price: null },
            { name: "Veg Fried Rice", price: null },
            { name: "Egg Fried Rice", price: null },
            { name: "Veg Hakka Noodles", price: null },
            { name: "Paneer Hakka Noodles", price: null },
            { name: "Veg Chinese Combo", price: null },
            { name: "Veg Fried Rice + Manchurian", price: null },
            { name: "Veg Fried Rice + Chilli Paneer", price: null }
        ]
    },
    {
        category: "South Indian",
        items: [
            { name: "Plain Dosa", price: null },
            { name: "Butter Dosa", price: null },
            { name: "Masala Dosa", price: null },
            { name: "Butter Masala Dosa", price: null },
            { name: "Rava Dosa", price: null },
            { name: "Onion Rava Dosa", price: null },
            { name: "Paper Dosa", price: null },
            { name: "Cheese Dosa", price: null },
            { name: "Cheese Masala Dosa", price: null },
            { name: "South Indian Platter", price: null }
        ]
    },
    {
        category: "Rolls",
        items: [
            { name: "Veg Spring Roll (2 pcs)", price: null },
            { name: "Paneer Spring Roll (2 pcs)", price: null },
            { name: "Cheese Roll", price: null },
            { name: "Paneer Roll", price: null },
            { name: "Egg Roll", price: null },
            { name: "Chicken Roll", price: null }
        ]
    },
    {
        category: "Momos",
        items: [
            { name: "Steamed Veg Momos (6 pcs)", price: null },
            { name: "Fried Veg Momos (6 pcs)", price: null },
            { name: "Steamed Paneer Momos (6 pcs)", price: null },
            { name: "Fried Paneer Momos (6 pcs)", price: null }
        ]
    },
    {
        category: "Chinese",
        items: [
            { name: "Veg Chowmein", price: null },
            { name: "Chicken Chowmein", price: null },
            { name: "Veg Fried Rice", price: null },
            { name: "Chicken Fried Rice", price: null },
            { name: "Veg Manchurian", price: null },
            { name: "Chicken Manchurian", price: null }
        ]
    },
    {
        category: "Pizzas & Pastas",
        items: [
            { name: "Veg Cheese Pizza", price: null, category: "Pizzas" },
            { name: "Paneer Tikka Pizza", price: null, category: "Pizzas" },
            { name: "Veg Supreme Pizza", price: null, category: "Pizzas" },
            { name: "Farmhouse Pizza", price: null, category: "Pizzas" },
            { name: "White Sauce Pasta", price: null, category: "Pastas" },
            { name: "Red Sauce Pasta", price: null, category: "Pastas" },
            { name: "Mix Sauce Pasta", price: null, category: "Pastas" }
        ]
    },
    {
        category: "Hot Sips",
        items: [
            { name: "Espresso Coffee", price: null },
            { name: "Cappuccino", price: null },
            { name: "Cafe Latte", price: null }
        ]
    }
];

module.exports = menuData;
