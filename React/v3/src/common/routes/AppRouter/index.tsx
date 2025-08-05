import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import { lazy, Suspense, useEffect, useMemo } from 'react'
import { pathToTitle } from '../../../assets/data/routes/pathToTitle'
import ProtectedRoute from '../ProtectedRoutes'
import { useLanguage } from '../../context'
import { Loading, NotFound, UnderConstruction } from '../../components'
import pagesMap from '../../../assets/data/routes/routeMap'
import MainLayout from '../../../pages/MainLayout'
import type { ComponentType, LazyExoticComponent } from 'react'

const AppRouter = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { lang } = useLanguage()
  const currentPath = location.pathname

  const getMatchedRoute = (path: string) =>
    pathToTitle.find(entry => Object.values(entry.path).includes(path))

  // update document.title
  useEffect(() => {
    const match = getMatchedRoute(currentPath)
    document.title = match
      ? match.title[lang]
      : lang === 'en'
      ? 'Error | Page not found'
      : 'Error | Página no encontrada'
  }, [currentPath, lang])

  // sync URL with lang-specific path
  useEffect(() => {
    const match = getMatchedRoute(currentPath)
    if (!match) return
    const newPath = match.path[lang]
    if (newPath && currentPath !== newPath) {
      navigate(newPath, { replace: true })
    }
  }, [lang, currentPath, navigate])

  // decide which component to render
  const RouteComp: LazyExoticComponent<ComponentType> | ComponentType = useMemo(() => {
    const match = getMatchedRoute(currentPath)
    if (!match) return NotFound

    const loader = pagesMap[match.path.en] || pagesMap[match.path.es]
    if (!loader) return UnderConstruction

    return lazy(loader)
  }, [currentPath, lang])

  return (
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
          element={
            <Suspense fallback={<Loading />}>
              <RouteComp />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  )
}

export { AppRouter }
