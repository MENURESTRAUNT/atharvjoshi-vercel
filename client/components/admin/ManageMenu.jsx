'use client';
import { useState, useEffect } from 'react';
import api from '@/services/api';
import Button from '@/components/ui/Button';
import { FiEdit2, FiTrash2, FiPlus } from 'react-icons/fi';

export default function ManageMenu() {
    const [items, setItems] = useState([]);
    const [editingItem, setEditingItem] = useState(null); // null = list, {} = create/edit
    const [formData, setFormData] = useState({
        name: '', category: 'Starters', price: '', description: '', image: '', isVeg: true
    });

    const categories = ['Starters', 'Main Course', 'Chinese', 'Continental', 'Breads', 'Beverages', 'Desserts'];

    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const res = await api.get('/menu');
            setItems(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (editingItem && editingItem._id) {
                await api.put(`/menu/${editingItem._id}`, formData);
            } else {
                await api.post('/menu', formData);
            }
            setEditingItem(null);
            fetchItems();
        } catch (error) {
            console.error(error);
            alert('Failed to save');
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure?')) return;
        try {
            await api.delete(`/menu/${id}`);
            fetchItems();
        } catch (error) {
            console.error(error);
        }
    };

    const startEdit = (item) => {
        setEditingItem(item);
        setFormData(item);
    };

    const startCreate = () => {
        setEditingItem({});
        setFormData({ name: '', category: 'Starters', price: '', description: '', image: '', isVeg: true });
    };

    if (editingItem) {
        return (
            <div>
                <div className="flex justify-between mb-6">
                    <h2 className="text-2xl font-bold text-neutral-100">{editingItem._id ? 'Edit Item' : 'Add New Item'}</h2>
                    <button onClick={() => setEditingItem(null)} className="text-neutral-400 hover:text-neutral-200">Cancel</button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4 max-w-xl bg-neutral-900 p-6 rounded">
                    <input className="w-full bg-neutral-950 p-2 rounded border border-neutral-800" placeholder="Name" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} required />
                    <select className="w-full bg-neutral-950 p-2 rounded border border-neutral-800" value={formData.category} onChange={e => setFormData({ ...formData, category: e.target.value })}>
                        {categories.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                    <input className="w-full bg-neutral-950 p-2 rounded border border-neutral-800" type="number" placeholder="Price" value={formData.price} onChange={e => setFormData({ ...formData, price: e.target.value })} required />
                    <textarea className="w-full bg-neutral-950 p-2 rounded border border-neutral-800" placeholder="Description" value={formData.description} onChange={e => setFormData({ ...formData, description: e.target.value })} />
                    <input className="w-full bg-neutral-950 p-2 rounded border border-neutral-800" placeholder="Image URL" value={formData.image} onChange={e => setFormData({ ...formData, image: e.target.value })} />
                    <label className="flex items-center gap-2 text-neutral-300">
                        <input type="checkbox" checked={formData.isVeg} onChange={e => setFormData({ ...formData, isVeg: e.target.checked })} />
                        Is Vegetarian?
                    </label>
                    <Button type="submit">{editingItem._id ? 'Update' : 'Create'}</Button>
                </form>
            </div>
        );
    }

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-neutral-100">Menu Items</h2>
                <Button onClick={startCreate} className="gap-2"><FiPlus /> Add Item</Button>
            </div>
            <div className="grid gap-4">
                {items.map(item => (
                    <div key={item._id} className="flex justify-between items-center bg-neutral-900 p-4 rounded border border-neutral-800">
                        <div>
                            <h4 className="font-bold text-neutral-200">{item.name}</h4>
                            <p className="text-sm text-neutral-500">{item.category} - ₹{item.price}</p>
                        </div>
                        <div className="flex gap-2">
                            <button onClick={() => startEdit(item)} className="p-2 text-blue-400 hover:bg-neutral-800 rounded"><FiEdit2 /></button>
                            <button onClick={() => handleDelete(item._id)} className="p-2 text-red-500 hover:bg-neutral-800 rounded"><FiTrash2 /></button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
