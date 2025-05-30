import { FaChevronRight, FaX, FaMoon, FaSun } from 'react-icons/fa6';
import { useState, useContext } from 'react';
import linksData from '@/assets/data/dataLinksSidebar';
import { ThemeContext } from '@/context/ThemeContext';

const Sidebar = ({ sidebarOpen, closeSidebar }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [activeMenu, setActiveMenu] = useState([]);
    const handleMenuMouseEnter = (item, level) => {
        if (activeMenu[level] !== item.title) { setActiveMenu([...activeMenu.slice(0, level), item.title]); }
    };
    const handleMenuMouseLeave = level => { setActiveMenu(activeMenu.filter((_, idx) => idx < level)); };
    const renderLinks = (links, level = 0) => (
        <ul className="space-y-4">
            {links.map((item, idx) => (
                <li key={idx} className={item.children ? 'relative group' : ''} onMouseEnter={() => item.children && handleMenuMouseEnter(item, level)} onMouseLeave={() => item.children && handleMenuMouseLeave(level)}>
                    <div className="flex items-center gap-2">
                        {item.icon}
                        <a href={item.href} className={`text-left flex-1 hover:font-semibold transition ${theme === 'dark' ? 'text-white hover:text-[#E9C46A]' : 'text-gray-800 hover:text-red-600'} ${activeMenu[level] === item.title ? 'font-semibold text-[#E9C46A]' : ''}`} onClick={closeSidebar}>
                            {item.title}
                        </a>
                        {item.children && (
                            <span className="ml-auto">
                                <FaChevronRight />
                            </span>
                        )}
                    </div>
                    {item.children && activeMenu[level] === item.title && (
                        <div className={`absolute top-0 left-full w-64 p-4 space-y-4 shadow-lg ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-800'}`}>
                            {renderLinks(item.children, level + 1)}
                        </div>
                    )}
                </li>
            ))}
        </ul>
    );

    return (
        <aside className={`fixed top-0 left-0 w-64 h-screen p-4 z-50 shadow-lg flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${theme === 'dark' ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-800'}`}>
            <div className="flex justify-between items-center mb-4">
                <button onClick={closeSidebar} className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>
                    <FaX />
                </button>
                <button onClick={toggleTheme} className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>
                    {theme === 'light' ? <FaSun /> : <FaMoon />}
                </button>
            </div>
            {renderLinks(linksData)}
        </aside>
    );
};

export default Sidebar;