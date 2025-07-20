import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // leer localStorage en la inicialización, para que al montar (o remapear rutas) conserve el valor
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {return 'dark'}
    return localStorage.getItem('theme') || 'dark'
  })

  // cada vez que cambie theme, actualizar localStorage y clase en <body>
  useEffect(() => {
    localStorage.setItem('theme', theme)
    document.body.classList.remove('dark', 'light')
    document.body.classList.add(theme)
  }, [theme])
  const toggleTheme = () =>    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
};

export { ThemeProvider, ThemeContext };