import {
  lazy,
  Suspense,
  useEffect,
  useMemo,
  type ComponentType,
  type LazyExoticComponent,
  type FC,
} from 'react'
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom'

import { pathToTitle } from '../../../assets/data/routes/pathToTitle'
import pagesMap from '../../../assets/data/routes/routeMap'
import { useLanguage } from '../../context'
import { Loading, NotFound, UnderConstruction } from '../../components'
import ProtectedRoute from '../ProtectedRoutes'
import MainLayout from '../../../pages/MainLayout'

const AppRouter: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { lang } = useLanguage()

  const currentPath = location.pathname

  const matchedRoute = useMemo(
    () =>
      pathToTitle.find(entry =>
        Object.values(entry.path).includes(currentPath)
      ),
    [currentPath]
  )

  useEffect(() => {
    document.title = matchedRoute
      ? matchedRoute.title[lang]
      : lang === 'en'
      ? 'Error | Page not found'
      : 'Error | Página no encontrada'
  }, [matchedRoute, lang])

  // ✅ Nuevo efecto: sincroniza el path con el idioma actual
  useEffect(() => {
    if (!matchedRoute) return

    const desiredPath = matchedRoute.path[lang]

    if (currentPath !== desiredPath) {
      navigate(desiredPath, { replace: true })
    }
  }, [lang, matchedRoute, currentPath, navigate])

  const LoaderComponent: LazyExoticComponent<ComponentType<any>> = useMemo(() => {
    if (!matchedRoute)
      return lazy(() => Promise.resolve({ default: NotFound }))

    const loader =
      pagesMap[matchedRoute.path.en] || pagesMap[matchedRoute.path.es]

    if (!loader) {
      return lazy(() => Promise.resolve({ default: UnderConstruction }))
    }

    return lazy(loader)
  }, [matchedRoute, lang])

  const LoadingFallback = useMemo(() => <Loading />, []) // mismo fallback para evitar remounts

  return (
    <Suspense fallback={LoadingFallback}>
      <Routes>
        <Route
          element={
            <ProtectedRoute>
              <MainLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="*"
            element={<LoaderComponent />}
          />
        </Route>
      </Routes>
    </Suspense>
  )
}

export { AppRouter }
