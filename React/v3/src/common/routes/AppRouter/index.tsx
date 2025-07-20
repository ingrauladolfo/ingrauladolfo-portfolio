import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {
  lazy,
  createElement,
  useEffect,
  useState,
  type JSX,
} from 'react';
import { pathToTitle } from '../../../assets/data/routes/pathToTitle';
import ProtectedRoute from '../ProtectedRoutes';
import { useLanguage } from '../../context';
import { Loading, UnderConstruction } from '../../components';
import pagesMap from '../../../assets/data/routes/routeMap';

const AppRouter = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const currentPath = location.pathname;

  const [isLoading, setIsLoading] = useState(true);
  const [RouteContent, setRouteContent] = useState<JSX.Element | null>(null);
  // 🔁 Busca el match de la ruta actual
  const getMatchedRoute = (path: string) => pathToTitle.find(entry => Object.values(entry.path).includes(path));
  // ✅ Cambiar título del documento al cambiar ruta o idioma
  useEffect(() => {
    const match = getMatchedRoute(currentPath);
    document.title = match ? match.title[lang] : lang === 'en' ? 'Error | Page not found' : 'Error | Página no encontrada';
  }, [currentPath, lang]);

  // ✅ Redirige a la ruta correspondiente si cambia el idioma
  useEffect(() => {
    const match = getMatchedRoute(currentPath);
    if (!match) { return; }
    const newPath = match.path[lang];
    if (newPath && currentPath !== newPath) { navigate(newPath, { replace: true }); }
  }, [lang, currentPath, navigate]);

  // ✅ Cargar contenido dinámicamente o mostrar 404 / en construcción
  useEffect(() => {
    setIsLoading(true);
    const match = getMatchedRoute(currentPath);
    if (!match) {
      // Ruta no válida → 404
      setTimeout(() => {
        setRouteContent(
          <h1>
            Error 404: {lang === 'en' ? 'Page not found' : 'Página no encontrada'} 🚫
          </h1>
        );
        setIsLoading(false);
      }, 300);
      return;
    }

    const en = match.path.en;
    const es = match.path.es;
    const loader = pagesMap[en] || pagesMap[es];

    if (!loader) {
      // Ruta válida pero sin loader → página en construcción
      setTimeout(() => {
        setRouteContent(<UnderConstruction />);
        setIsLoading(false);
      }, 300);
      return;
    }

    // Ruta válida con componente lazy
    const Component = lazy(loader);
    setTimeout(() => {
      setRouteContent(
        <ProtectedRoute>
          {createElement(Component)}
        </ProtectedRoute>
      );
      setIsLoading(false);
    }, 300);
  }, [currentPath, lang]);

  if (isLoading || RouteContent === null) { return <Loading />; }

  return (
    <Routes>
      <Route key={currentPath} path={currentPath} element={RouteContent} />
    </Routes>
  );
};

export { AppRouter };
