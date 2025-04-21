import { Outlet } from 'react-router-dom';
import Footer from '@/components/shared/Footer';
import Navbar from '@/components/shared/Navbar';
const MainLayout = () => {
  return (
    <main className="min-h-svh">
      <Navbar />
      <Outlet />
      <Footer />
    </main>

  );
}

export default MainLayout
