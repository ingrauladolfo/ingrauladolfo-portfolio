// src/routes/AppRoutes.jsx
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'
import { useEffect } from 'react'
import { pathToTitle } from '@/assets/data/routesPathToTile'
import LoadingRoutes from './LoadingRoutes'

const RouteTitleHandler = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    document.title =
      pathToTitle[pathname] ||
      'Porfolio de I.S.C. Raúl Adolfo Torres Vargas | Desarrollador y Programador Web'
  }, [pathname])
  return null
}

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <RouteTitleHandler />
      <LoadingRoutes pathToTitle={pathToTitle} />
    </BrowserRouter>
  )
}
