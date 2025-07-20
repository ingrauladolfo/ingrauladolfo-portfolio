import { BrowserRouter } from 'react-router-dom';
import { Footer, Navbar } from '../components';
import { AppRouter } from './AppRouter';

const AppRoutes = () => (
  <BrowserRouter>
    <Navbar />
    <AppRouter />
  <Footer />
  </BrowserRouter>
);

export default AppRoutes;
