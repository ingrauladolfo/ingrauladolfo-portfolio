import React from 'react';
import {    X,} from 'lucide-react'; 
import linksDataSidebar from '@/assets/data/dataLinksSidebar';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    if (!sidebarOpen) return null;

    return (
        <aside className="absolute top-0 left-0 w-64 h-screen bg-gray-950 text-white p-4 z-50 shadow-lg">
            <button
                onClick={closeSidebar}
                className="mb-4 text-white"
            >
                <X size={24} />
            </button>
            <ul className="space-y-4">
                {linksDataSidebar.map(({href, icon, title}, index) => {
                    return (
                        <li key={index}>
                            <a href={href} className="flex items-center gap-2 hover:font-semibold hover:text-amber-300 transition" onClick={closeSidebar}>
                                {icon} {title}
                            </a>
                        </li>
                    )
                })}
                
            </ul>
        </aside>
    );
};

export default Sidebar;
