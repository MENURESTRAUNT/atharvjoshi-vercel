'use client';
import { motion } from 'framer-motion';
import Button from './ui/Button';

export default function AboutPreview() {
    return (
        <section className="py-24 bg-neutral-950 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">

                    {/* Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="aspect-[4/5] bg-neutral-800 rounded-lg overflow-hidden relative border border-neutral-800">
                            {/* Fallback/Placeholder Image - Replace with real owner image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                                style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}
                            />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 border-2 border-gold-500/30 -z-10" />
                        <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-gold-500/30 -z-10" />
                    </motion.div>

                    {/* Text Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <span className="text-gold-500 text-sm tracking-[0.2em] uppercase mb-4 block">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-bold font-playfair text-neutral-50 mb-6">
                            A Legacy of <br /><span className="text-gold-500 italic">Sweet Memories</span>
                        </h2>
                        <p className="text-neutral-400 text-lg leading-relaxed mb-8 font-light">
                            "Founded by Mr. Dildar in 1978, Gaylord's Express has been a landmark in Dehradun.
                            From our famous Pineapple Pastries to our hearty Veg Platters, we carry forward a legacy of taste and tradition."
                        </p>
                        <Button href="/about-owner" variant="outline">
                            Read Our Story
                        </Button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
