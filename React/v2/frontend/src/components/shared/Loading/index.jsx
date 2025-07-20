// src/components/shared/Loading.jsx
import { useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { ThemeContext } from '@/context/ThemeContext'

export default function Loading({ pathToTitle }) {
  const { pathname } = useLocation()
  const { theme } = useContext(ThemeContext)
  const isDark = theme === 'dark'
  const fullTitle = pathToTitle?.[pathname] || 'página'
  const label = pathname === '/' ? 'portfolio' : fullTitle.split('|')[0]?.trim() || 'página'

  return (
    <div className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center transition-colors duration-300 ${isDark ? 'bg-gray-950 text-white' : 'bg-white text-gray-800'}`}>
      <div className={`animate-spin rounded-full h-12 w-12 border-4 border-t-transparent mb-6 ${isDark ? 'border-yellow-400' : 'border-red-500'}`} />
      <p className="text-lg font-extrabold animate-pulse">
        Cargando <span className="inline-block animate-fade-in">{label}...</span>
      </p>
    </div>
  )
}
