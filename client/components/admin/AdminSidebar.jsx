export default function AdminSidebar({ activeTab, setActiveTab }) {
    const tabs = [
        { id: 'menu', label: 'Manage Menu' },
        { id: 'reviews', label: 'Manage Reviews' },
        { id: 'messages', label: 'Messages' },
        { id: 'owner', label: 'Owner Info' },
    ];

    return (
        <div className="w-full md:w-64 bg-neutral-900 border-r border-neutral-800 p-6 flex flex-col h-full">
            <h2 className="text-xl font-bold font-playfair text-gold-500 mb-8">Admin Panel</h2>
            <nav className="space-y-2 flex-1">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full text-left px-4 py-3 rounded transition-colors ${activeTab === tab.id
                                ? 'bg-gold-500 text-neutral-950 font-medium'
                                : 'text-neutral-400 hover:bg-neutral-800 hover:text-neutral-200'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>
            <button
                onClick={() => {
                    localStorage.removeItem('token');
                    window.location.href = '/admin';
                }}
                className="text-red-500 hover:text-red-400 text-sm mt-auto"
            >
                Logout
            </button>
        </div>
    );
}
