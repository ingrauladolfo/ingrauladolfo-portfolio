// src/App.jsx
import React, { useContext } from 'react'
import AppRoutes from '@/routes'
import { ThemeProvider, ThemeContext } from './context/ThemeContext'
import { LoadingProvider } from './context/LoadingContext'

const AppContent = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div className={theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}>
      <AppRoutes />
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <LoadingProvider>
        <AppContent />
      </LoadingProvider>
    </ThemeProvider>
  )
}
