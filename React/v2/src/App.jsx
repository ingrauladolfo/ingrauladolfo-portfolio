import React, { useContext } from 'react';
import AppRoutes from '@/routes';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';
const AppContent = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}>
      <AppRoutes />
    </div>
  );
};

const App = () => {

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
};

export default App;
