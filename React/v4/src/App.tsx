import { useTheme } from "./common/context";
import { MainRoute } from "./common/routes"
export const App = () => {
  const { theme } = useTheme();
  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-950 text-gray-100' : 'bg-gray-100 text-gray-950'}`}>
      <MainRoute />
    </div>
  )
}
