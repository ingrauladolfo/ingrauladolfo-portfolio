import { useLocation } from 'react-router-dom';
import { pathToTitle } from '../../../../assets/data/routes/pathToTitle';
import { useTheme } from '../../../context';
import { useLanguage } from '../../../context';  // Importa el contexto de idioma
import { getThemeLoadingClasses } from '../../../../assets/styles/Loading';

const Loading = () => {
  const { pathname } = useLocation();
  const { theme } = useTheme();
  const { lang } = useLanguage();  // Obtiene el idioma desde el contexto
  const { textLoading, spinnerLoading } = getThemeLoadingClasses(theme);

  // Buscar coincidencia en pathToTitle usando el idioma actual
  const matched = pathToTitle.find(p => p.path[lang] === pathname);

  // Extraer título antes del "|"
  const title = matched
    ? matched.title[lang].split('|')[0].trim()
    : lang === 'es' ? 'Inicio' : 'Home';

  return (
    <div className={`flex flex-col items-center justify-center py-16 gap-6 text-center ${theme==='dark'?'bg-gray-950':'bg-gray-100'}`}>
      <div className={`w-12 h-12 border-4 rounded-full animate-spin ${spinnerLoading}`} />
      <p className={`text-lg ${textLoading}`}>
        {lang === 'es' ? 'Cargando' : 'Loading'} {title}...
      </p>
    </div>
  );
};

export default Loading;
