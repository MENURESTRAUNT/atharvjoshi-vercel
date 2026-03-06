'use client';
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import api from '@/services/api';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';

export default function ContactPage() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');
        try {
            await api.post('/contact', formData);
            setStatus('success');
            setFormData({ name: '', email: '', message: '' });
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <main className="min-h-screen bg-neutral-950 pt-24">
            <Navbar />

            <section className="container mx-auto px-6 py-12">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold font-playfair text-neutral-50 mb-4">Get in Touch</h1>
                    <p className="text-neutral-400 max-w-2xl mx-auto font-light">
                        We'd love to hear from you. Reach out to us for feedback, inquiries, or just to say hello.
                    </p>
                </motion.div>

                <div className="max-w-2xl mx-auto bg-neutral-900 border border-neutral-800 p-8 md:p-12 rounded-lg">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-neutral-400 mb-2 uppercase tracking-wide">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-400 mb-2 uppercase tracking-wide">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-neutral-400 mb-2 uppercase tracking-wide">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-500 transition-colors"
                            ></textarea>
                        </div>

                        <Button type="submit" variant="primary" className="w-full">
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </Button>

                        {status === 'success' && <p className="text-green-500 text-center mt-4">Message sent successfully!</p>}
                        {status === 'error' && <p className="text-red-500 text-center mt-4">Failed to send message. Try again.</p>}
                    </form>
                </div>
            </section>

            <Footer />
        </main>
    );
}
