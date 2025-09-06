import { Outlet } from 'react-router-dom';
import { Footer, Navbar, ParticleCanvas } from '../common/components';
import { useTheme } from '../common/context';
import { useEffect, useState } from 'react';

const MainLayout = () => {
  const { theme } = useTheme();
    const [interactive, setInteractive] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setInteractive(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className={`relative flex flex-col min-h-screen transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}`}>
      <Navbar />
      {/* Canvas de partículas */}
     <div className={`hidden lg:block absolute inset-0 z-0 ${interactive ? "pointer-events-auto" : "pointer-events-none"}`}>
        <ParticleCanvas />
      </div>
      <div className="flex-1 mt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
