import { Routes, Route, BrowserRouter, useLocation } from 'react-router-dom';
import { About, Experience, Home, Projects, Stack } from '@/pages';
import MainLayout from '../MainLayout';
import ProtectedRoutes from './ProtectedRoutes';
import { useEffect } from 'react';

const RouteTitleHandler = () => {
  const location = useLocation();

  useEffect(() => {
    const pathToTitle = {
      '/': 'Inicio | Porfolio de I.S.C. Raúl Adolfo Torres Vargas | Desarrollador y Programador Web con más de 5 años de Experiencia',
      '/about': 'Sobre mí | Porfolio de I.S.C. Raúl Adolfo Torres Vargas | Desarrollador y Programador Web con más de 5 años de Experiencia',
      '/experience': 'Experiencia | Porfolio de I.S.C. Raúl Adolfo Torres Vargas | Desarrollador y Programador Web con más de 5 años de Experiencia',
      '/projects': 'Proyectos | Porfolio de I.S.C. Raúl Adolfo Torres Vargas | Desarrollador y Programador Web con más de 5 años de Experiencia',
      '/stack': 'Stack Tecnológico | Porfolio de I.S.C. Raúl Adolfo Torres Vargas | Desarrollador y Programador Web con más de 5 años de Experiencia',
    };

    document.title = pathToTitle[location.pathname] || 'Porfolio de I.S.C. Raúl Adolfo Torres Vargas | Desarrollador y Programador Web con más de 5 años de Experiencia';
  }, [location.pathname]);

  return null;
};

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <RouteTitleHandler /> {/* 👈 Aquí actualizamos el título */}
      <Routes>
        <Route
          element={
              <MainLayout />
          }
        >
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/stack" element={<Stack />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
