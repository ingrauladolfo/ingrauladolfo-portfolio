import { BrowserRouter } from 'react-router-dom';
import { Navbar } from '../components';
import { AppRouter } from './AppRouter';

const AppRoutes = () => (
  <BrowserRouter>
        <Navbar />
    <AppRouter />
  </BrowserRouter>
);

export default AppRoutes;
