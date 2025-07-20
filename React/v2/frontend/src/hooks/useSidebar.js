import { useState, useCallback } from 'react';

export default function useSidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = useCallback(() => {
    setSidebarOpen(prev => !prev);
  }, []);

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false);
  }, []);

  return { sidebarOpen, toggleSidebar, closeSidebar };
}
