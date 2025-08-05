import { Outlet } from 'react-router-dom';
import { Footer, Navbar } from '../common/components';
import { useTheme } from '../common/context';

const MainLayout = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen transition-colors duration-200 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}`}>
      <Navbar />
      <div className="flex-1 mt-10">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
