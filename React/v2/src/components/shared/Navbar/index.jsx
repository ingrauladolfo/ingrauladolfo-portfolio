import { Menu } from 'lucide-react';
import useSidebar from '@/hooks/useSidebar';
import Sidebar from '@/components/shared/Sidebar';
import Links from '@/components/shared/Links';
import { useEffect, useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';

export default function Navbar() {
  const { sidebarOpen, toggleSidebar, closeSidebar } = useSidebar();
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const handleEscKey = (e) => { if (e.key === 'Escape' && sidebarOpen) closeSidebar(); };
    document.addEventListener('keydown', handleEscKey);
    return () => document.removeEventListener('keydown', handleEscKey);
  }, [sidebarOpen, closeSidebar]);
  const isDark = theme === 'dark';
  return (
    <header      className={`w-full text-sm shadow-md sticky top-0 z-40 h-16 ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between h-full">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className={`focus:outline-none ${isDark ? 'text-white' : 'text-gray-950'}`}>
            {!sidebarOpen && <Menu size={24} />}
          </button>
        </div>
        <div className="flex items-center ml-auto">
          <Links />
        </div>
      </div>
      <Sidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen} />
    </header>
  );
}
