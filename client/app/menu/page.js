'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MenuCard from '@/components/MenuCard';
import api from '@/services/api';
import { motion, AnimatePresence } from 'framer-motion';

export default function MenuPage() {
    const [menuItems, setMenuItems] = useState([]);
    const [activeCategory, setActiveCategory] = useState('All');
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState(['All']);

    useEffect(() => {
        const fetchMenu = async () => {
            try {
                // In a real scenario, use api.get('/menu')
                // For development without running backend strictly, we might fallback or use empty.
                // Assuming backend is running on localhost:5000 as per setup.
                const res = await api.get('/menu');
                setMenuItems(res.data);

                // Extract unique categories
                const uniqueCategories = ['All', ...new Set(res.data.map(item => item.category))];
                setCategories(uniqueCategories);
            } catch (error) {
                console.error("Failed to fetch menu:", error);
                // Fallback data for demo if backend isn't reachable (optional safety)
                setMenuItems([]);
            } finally {
                setLoading(false);
            }
        };

        fetchMenu();
    }, []);

    const filteredItems = activeCategory === 'All'
        ? menuItems
        : menuItems.filter(item => item.category === activeCategory);

    return (
        <main className="min-h-screen bg-neutral-950 pt-24">
            <Navbar />

            <section className="container mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <span className="text-gold-500 text-sm tracking-[0.2em] uppercase mb-2 block">Our Delicacies</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-playfair text-neutral-50 mb-4">Discover Our Menu</h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto font-light">
                        Indulge in a symphony of flavors, crafted with passion and served with elegance.
                    </p>
                </motion.div>

                {/* Category Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${activeCategory === cat
                                ? 'bg-gold-500 text-neutral-950 shadow-lg shadow-gold-500/20'
                                : 'bg-neutral-900 text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Menu Grid */}
                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
                    >
                        <AnimatePresence>
                            {filteredItems.map((item) => (
                                <MenuCard key={item._id} item={item} />
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}

                {!loading && filteredItems.length === 0 && (
                    <div className="text-center text-neutral-500 py-12">No items found in this category.</div>
                )}
            </section>

            <Footer />
        </main>
    );
}
