import { useLoading } from "@/context/LoadingContext"
import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import ProtectedRoutes from "../ProtectedRoutes"
import MainLayout from "@/MainLayout"
import { About, Experience, Home, Projects, Stack } from "@/pages"
import Loading from "@/components/shared/Loading"

const LoadingRoutes = ({ pathToTitle }) => {
  const { isLoading, setIsLoading } = useLoading()
  const { pathname } = useLocation()
  useEffect(() => {
    setIsLoading(true)
    const t = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(t)
  }, [pathname, setIsLoading])

  if (isLoading) { return <Loading pathToTitle={pathToTitle} /> }
  return (
    <Routes>
      <Route element={<ProtectedRoutes> <MainLayout /></ProtectedRoutes>}      >
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stack" element={<Stack />} />
      </Route>
    </Routes>
  )
}
export default LoadingRoutes