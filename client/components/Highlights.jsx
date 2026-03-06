'use client';
import { motion } from 'framer-motion';
import { FiMinimize2, FiCoffee, FiStar } from 'react-icons/fi';

const features = [
    {
        icon: <FiMinimize2 className="w-8 h-8" />,
        title: "Pure Vegetarian",
        description: "100% Meat-free kitchen ensuring the highest purity and taste."
    },
    {
        icon: <FiCoffee className="w-8 h-8" />,
        title: "Cafe Ambience",
        description: "A perfect blend of modern aesthetics and cozy comfort."
    },
    {
        icon: <FiStar className="w-8 h-8" />,
        title: "Premium Quality",
        description: "Using only the finest ingredients to serve you excellence."
    }
];

export default function Highlights() {
    return (
        <section className="py-20 bg-neutral-900 border-b border-neutral-800">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="text-center p-8 border border-neutral-800 rounded-lg hover:border-gold-500/50 transition-colors group"
                        >
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-neutral-800 text-gold-500 mb-6 group-hover:bg-gold-500 group-hover:text-neutral-950 transition-all duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-neutral-100 mb-3">{feature.title}</h3>
                            <p className="text-neutral-400 leading-relaxed font-light">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
