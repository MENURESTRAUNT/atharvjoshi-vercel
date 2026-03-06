'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';
import ManageMenu from '@/components/admin/ManageMenu';
import ManageReviews from '@/components/admin/ManageReviews';
import ManageMessages from '@/components/admin/ManageMessages';
import ManageOwner from '@/components/admin/ManageOwner';

export default function AdminDashboard() {
    const [activeTab, setActiveTab] = useState('menu');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('/admin');
        } else {
            setIsAuthenticated(true);
        }
    }, []);

    if (!isAuthenticated) return null; // or loading spinner

    const renderContent = () => {
        switch (activeTab) {
            case 'menu': return <ManageMenu />;
            case 'reviews': return <ManageReviews />;
            case 'messages': return <ManageMessages />;
            case 'owner': return <ManageOwner />;
            default: return <ManageMenu />;
        }
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen bg-neutral-950 text-neutral-100 font-sans">
            <AdminSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <main className="flex-1 p-8 overflow-y-auto h-screen">
                {renderContent()}
            </main>
        </div>
    );
}
