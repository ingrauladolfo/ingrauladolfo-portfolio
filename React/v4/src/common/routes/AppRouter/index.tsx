import { pagesMap, pathToTitle } from '@/assets/data';
import { Loading, MainLayout } from '@/common/components';
import { useLanguage } from '@/common/context';
import { lazy, Suspense, useLayoutEffect, useMemo, type FC } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router';

export const AppRouter: FC = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const normalizedPath = pathname.split('?')[0];
  const matchedRoute = useMemo(
    () =>
      pathToTitle.find(entry =>
        Object.values(entry.path).some(path => {
          const pathWithoutParams = path.split('?')[0];
          return pathWithoutParams === normalizedPath;
        })
      ),
    [normalizedPath]
  );
  useLayoutEffect(() => { document.title = matchedRoute ? matchedRoute.title[lang] : lang === 'en' ? 'Error | Page not found' : 'Error | Página no encontrada'; }, [matchedRoute, lang]);
  useLayoutEffect(() => {
    if (!matchedRoute) return;
    const newPath = matchedRoute.path[lang];
    if (newPath && normalizedPath !== newPath.split('?')[0]) {
      navigate(newPath, { replace: true });
    }
  }, [matchedRoute, lang, normalizedPath, navigate]);

  const LoaderComponent = useMemo(() => {
    /* if (!matchedRoute) {return () => <NotFound />;} */
    if (!matchedRoute) { return () => 'No encontrado'; }

    const loader = pagesMap[matchedRoute.path.en] || pagesMap[matchedRoute.path.es];
    /* if (!loader) {return () => <UnderConstruction />;} */
    if (!loader) { return () => 'Construyéndose' };


    return lazy(loader);
  }, [matchedRoute]);
  const LoadingFallback = useMemo(() => <Loading />, []) // mismo fallback para evitar remounts
  return (
    <Suspense fallback={LoadingFallback}>
      <Routes>
        {/* Protected layout wraps MainLayout; inner wildcard renders the current page component */}
        {/* <Route element={<ProtectedRoute><MainLayout /> </ProtectedRoute>}> */}
        <Route element={<MainLayout />}>
          <Route
            path="*"
            element={<LoaderComponent />}
          />
        </Route>
      </Routes>
    </Suspense>
  )
}
