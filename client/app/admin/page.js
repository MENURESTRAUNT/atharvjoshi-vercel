'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/services/api';
import Button from '@/components/ui/Button';

export default function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await api.post('/auth/login', { username, password });
            localStorage.setItem('token', res.data.token);
            router.push('/admin/dashboard');
        } catch (err) {
            setError('Invalid Credentials');
        }
    };

    return (
        <div className="min-h-screen bg-neutral-950 flex items-center justify-center p-6">
            <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-lg max-w-md w-full">
                <h1 className="text-3xl font-bold font-playfair text-gold-500 mb-6 text-center">Admin Login</h1>
                {error && <p className="text-red-500 mb-4">{error}</p>}
                <form onSubmit={handleLogin} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-neutral-100 focus:outline-none focus:border-gold-500"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-neutral-950 border border-neutral-800 rounded px-4 py-3 text-neutral-100 focus:outline-none focus:border-gold-500"
                    />
                    <Button type="submit" variant="primary" className="w-full">Login</Button>
                </form>
            </div>
        </div>
    );
}
