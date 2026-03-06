'use client';
import { useState, useEffect } from 'react';
import api from '@/services/api';
import { FiTrash2 } from 'react-icons/fi';

export default function ManageReviews() {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, []);

    const fetchReviews = async () => {
        try {
            const res = await api.get('/reviews');
            setReviews(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Start deletion?')) return;
        try {
            await api.delete(`/reviews/${id}`);
            fetchReviews();
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <h2 className="text-2xl font-bold text-neutral-100 mb-6">Manage Reviews</h2>
            <div className="grid gap-4">
                {reviews.map(review => (
                    <div key={review._id} className="bg-neutral-900 p-4 rounded border border-neutral-800 flex justify-between items-start">
                        <div>
                            <div className="flex gap-2">
                                <span className="font-bold text-neutral-200">{review.name}</span>
                                <span className="text-gold-500">★ {review.rating}</span>
                            </div>
                            <p className="text-neutral-400 mt-1">{review.comment}</p>
                            <span className="text-xs text-neutral-600 uppercase mt-2 block">{review.source}</span>
                        </div>
                        <button onClick={() => handleDelete(review._id)} className="text-red-500 hover:text-red-400 p-2"><FiTrash2 /></button>
                    </div>
                ))}
            </div>
        </div>
    );
}
