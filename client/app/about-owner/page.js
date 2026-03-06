'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import api from '@/services/api';
import { motion } from 'framer-motion';

export default function AboutOwnerPage() {
    const [ownerInfo, setOwnerInfo] = useState(null);

    useEffect(() => {
        const fetchInfo = async () => {
            try {
                const res = await api.get('/owner');
                setOwnerInfo(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchInfo();
    }, []);

    return (
        <main className="min-h-screen bg-neutral-950 pt-24">
            <Navbar />

            <section className="container mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col md:flex-row items-start gap-12"
                >
                    {/* Image */}
                    <div className="w-full md:w-1/2">
                        <div className="bg-neutral-800 aspect-[3/4] rounded-lg overflow-hidden relative">
                            {ownerInfo?.image ? (
                                <img src={ownerInfo.image} alt="Owner" className="object-cover w-full h-full" />
                            ) : (
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542181961-9590d0c79dab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')" }}
                                />
                            )}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="w-full md:w-1/2">
                        <span className="text-gold-500 text-sm tracking-[0.2em] uppercase mb-4 block">Our Story</span>
                        <h1 className="text-4xl md:text-5xl font-bold font-playfair text-neutral-50 mb-6">{ownerInfo?.title || 'About the Owner'}</h1>

                        <div className="prose prose-invert prose-gold">
                            <p className="text-neutral-300 text-lg leading-relaxed mb-6 whitespace-pre-line">
                                {ownerInfo?.story || "Loading story..."}
                            </p>

                            <h3 className="text-2xl font-playfair text-gold-500 mb-4">Our Vision</h3>
                            <p className="text-neutral-300 leading-relaxed">
                                {ownerInfo?.vision || "Loading vision..."}
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

            <Footer />
        </main>
    );
}
