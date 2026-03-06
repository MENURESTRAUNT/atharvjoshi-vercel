'use client';
import { useState, useEffect } from 'react';
import api from '@/services/api';
import Button from '@/components/ui/Button';

export default function ManageOwner() {
    const [formData, setFormData] = useState({ title: '', story: '', vision: '', image: '' });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchInfo();
    }, []);

    const fetchInfo = async () => {
        try {
            const res = await api.get('/owner');
            setFormData(res.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.put('/owner', formData);
            alert('Updated Successfully');
        } catch (error) {
            console.error(error);
            alert('Failed to update');
        }
    };

    if (loading) return <div>Loading...</div>;

    return (
        <div>
            <h2 className="text-2xl font-bold text-neutral-100 mb-6">Manage Owner Info</h2>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl bg-neutral-900 p-6 rounded border border-neutral-800">
                <div>
                    <label className="block text-neutral-400 mb-1">Title</label>
                    <input className="w-full bg-neutral-950 p-2 rounded border border-neutral-800 text-neutral-100" value={formData.title} onChange={e => setFormData({ ...formData, title: e.target.value })} />
                </div>
                <div>
                    <label className="block text-neutral-400 mb-1">Story</label>
                    <textarea rows="6" className="w-full bg-neutral-950 p-2 rounded border border-neutral-800 text-neutral-100" value={formData.story} onChange={e => setFormData({ ...formData, story: e.target.value })} />
                </div>
                <div>
                    <label className="block text-neutral-400 mb-1">Vision</label>
                    <textarea rows="4" className="w-full bg-neutral-950 p-2 rounded border border-neutral-800 text-neutral-100" value={formData.vision} onChange={e => setFormData({ ...formData, vision: e.target.value })} />
                </div>
                <div>
                    <label className="block text-neutral-400 mb-1">Image URL</label>
                    <input className="w-full bg-neutral-950 p-2 rounded border border-neutral-800 text-neutral-100" value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} />
                </div>
                <Button type="submit">Save Changes</Button>
            </form>
        </div>
    );
}
