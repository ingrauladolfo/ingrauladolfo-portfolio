import { Menu } from 'lucide-react';
import useSidebar from '@/hooks/useSidebar';
import Sidebar from '@/components/shared/Sidebar';
import Links from '@/components/shared/Links';
import { useEffect } from 'react';

export default function Navbar() {
  const { sidebarOpen, toggleSidebar, closeSidebar } = useSidebar();

  // UseEffect para agregar y limpiar el event listener para "Esc"
  useEffect(() => {
    const handleEscKey = e => {
      if (e.key === 'Escape' && sidebarOpen) {
        closeSidebar(); // Cierra el Sidebar si está abierto
      }
    };

    // Agregar el event listener para la tecla "Esc"
    document.addEventListener('keydown', handleEscKey);

    // Limpiar el event listener cuando el componente se desmonte
    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [sidebarOpen, closeSidebar]);

  return (
    <header className="w-full bg-gray-950 text-sm text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-around">
        {/* Sidebar toggle button - a la izquierda */}
        <div className="flex items-center">
          <button
            onClick={toggleSidebar}
            className="text-white focus:outline-none"
          >
            {!sidebarOpen && <Menu size={24} />}
          </button>
        </div>
  
        {/* Right links - a la derecha */}
        <div className="flex items-center ml-auto">
          <Links />
        </div>
      </div>
  
      {/* Sidebar */}
      <Sidebar closeSidebar={closeSidebar} sidebarOpen={sidebarOpen} />
    </header>
  );
}
