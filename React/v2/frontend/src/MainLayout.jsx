import { Outlet } from 'react-router-dom';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default MainLayout;
