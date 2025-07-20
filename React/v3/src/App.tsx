// App.tsx
import { useTheme } from "./common/context";
import AppRoutes from "./common/routes";

function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen mt-16 flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-950 text-gray-100' : 'bg-gray-100 text-gray-950'}`}>
      <AppRoutes />
     
    </div>
  );
}

export default App;
