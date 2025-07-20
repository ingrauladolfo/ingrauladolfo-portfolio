import { useLanguage, useTheme } from "../../../context";


const UnderConstruction = () => {
  const { lang } = useLanguage();
  const { theme } = useTheme();

  const title = lang === 'es' ? '🚧 Página en construcción' : '🚧 Page Under Construction';
  const message =
    lang === 'es'
      ? 'Estamos trabajando en esta sección. Vuelve pronto.'
      : 'We are working on this section. Please check back soon.';

  const textPrimary = theme === 'dark' ? 'text-gray-100' : 'text-gray-950';
  const textSecondary = theme === 'dark' ? 'text-gray-200' : 'text-gray-900';

  return (
    <div className="flex flex-col items-center justify-center py-20 text-center space-y-6">
      <h1 className={`text-3xl font-semibold ${textPrimary}`}>
        {title}
      </h1>
      <p className={`text-lg ${textSecondary}`}>
        {message}
      </p>
    </div>
  );
};

export default UnderConstruction;
