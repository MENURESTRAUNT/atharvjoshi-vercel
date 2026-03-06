'use client';
import { motion } from 'framer-motion';
import Button from './ui/Button';

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed z-0"
                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')" }}
            >
                <div className="absolute inset-0 bg-neutral-950/60" />
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="block text-gold-400 text-sm md:text-base tracking-[0.2em] uppercase mb-4"
                >
                    Est. 1978 • Paltan Bazaar, Dehradun
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-bold font-playfair text-neutral-50 mb-6 leading-tight"
                >
                    Dehradun's Favorite <br />
                    <span className="text-gold-500 italic">Cafe & Bakery</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-neutral-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light"
                >
                    Serving legendary Pastries, South Indian delicacies, and Chinese platters in the heart of the city since 1978.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <Button href="/menu" variant="primary">
                        View Menu
                    </Button>
                    <Button href="https://www.zomato.com/dehradun/gaylord-xpress-paltan-bazaar" target="_blank" variant="outline">
                        Order Online
                    </Button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gold-400"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </motion.div>
        </section>
    );
}
