'use client';
import { useState, useEffect } from 'react';
import api from '@/services/api';

export default function ManageMessages() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const res = await api.get('/contact');
                setMessages(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchMessages();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold text-neutral-100 mb-6">Contact Messages</h2>
            <div className="grid gap-4">
                {messages.map((msg) => (
                    <div key={msg._id} className="bg-neutral-900 p-4 rounded border border-neutral-800">
                        <div className="flex justify-between">
                            <h4 className="font-bold text-neutral-200">{msg.name}</h4>
                            <span className="text-sm text-neutral-500">{new Date(msg.createdAt).toLocaleDateString()}</span>
                        </div>
                        <a href={`mailto:${msg.email}`} className="text-gold-500 text-sm hover:underline block mb-2">{msg.email}</a>
                        <p className="text-neutral-400">{msg.message}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
