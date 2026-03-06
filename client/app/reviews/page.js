'use client';
import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import api from '@/services/api';
import { motion, AnimatePresence } from 'framer-motion';
import { FiStar } from 'react-icons/fi';
import Button from '@/components/ui/Button';

export default function ReviewsPage() {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);

    // Submit Form State
    const [formData, setFormData] = useState({ name: '', rating: 5, comment: '' });
    const [submitting, setSubmitting] = useState(false);
    const [successMsg, setSuccessMsg] = useState('');

    const fetchReviews = async () => {
        try {
            const res = await api.get('/reviews');
            setReviews(res.data);
        } catch (error) {
            console.error("Failed to fetch reviews:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchReviews();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            await api.post('/reviews', formData);
            setSuccessMsg('Thank you! Your review has been submitted.');
            setFormData({ name: '', rating: 5, comment: '' });
            fetchReviews(); // Refresh list
        } catch (error) {
            console.error(error);
        } finally {
            setSubmitting(false);
            setTimeout(() => setSuccessMsg(''), 3000);
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
                    <span className="text-gold-500 text-sm tracking-[0.2em] uppercase mb-2 block">Testimonials</span>
                    <h1 className="text-4xl md:text-6xl font-bold font-playfair text-neutral-50 mb-4">What Our Guests Say</h1>
                </motion.div>

                {/* Submit Review Form */}
                <div className="max-w-xl mx-auto mb-20 bg-neutral-900/50 p-8 rounded-lg border border-neutral-800">
                    <h3 className="text-2xl font-playfair text-neutral-100 mb-6 text-center">Write a Review</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm text-neutral-400 mb-1">Your Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm text-neutral-400 mb-1">Rating</label>
                            <div className="flex gap-2 text-2xl text-gold-500 cursor-pointer">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <FiStar
                                        key={star}
                                        className={star <= formData.rating ? "fill-current" : "opacity-30"}
                                        onClick={() => setFormData({ ...formData, rating: star })}
                                    />
                                ))}
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm text-neutral-400 mb-1">Your Experience</label>
                            <textarea
                                required
                                rows="3"
                                value={formData.comment}
                                onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                                className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-white focus:outline-none focus:border-gold-500"
                            />
                        </div>
                        <Button type="submit" variant="primary" className="w-full" disabled={submitting}>
                            {submitting ? 'Submitting...' : 'Submit Review'}
                        </Button>
                        {successMsg && <p className="text-green-500 text-center text-sm">{successMsg}</p>}
                    </form>
                </div>

                {loading ? (
                    <div className="flex justify-center py-20">
                        <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence>
                            {reviews.map((review, index) => (
                                <motion.div
                                    key={review._id || index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    layout
                                    className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg relative"
                                >
                                    <div className="flex gap-1 mb-4 text-gold-500">
                                        {[...Array(5)].map((_, i) => (
                                            <FiStar key={i} className={i < review.rating ? "fill-current" : "opacity-30"} />
                                        ))}
                                    </div>
                                    <p className="text-neutral-300 italic mb-6 leading-relaxed">"{review.comment}"</p>
                                    <div className="flex items-center justify-between mt-auto">
                                        <div>
                                            <h4 className="font-bold text-neutral-100 font-playfair">{review.name}</h4>
                                            <span className="text-xs text-neutral-500 uppercase tracking-wider">{review.source}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}
            </section>

            <Footer />
        </main>
    );
}
