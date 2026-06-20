import { pathToTitle } from "@/assets/data";
import { getThemeLoadingClasses } from "@/assets/styles";
import { useLanguage, useTheme } from "@/common/context";
import { useLocation } from "react-router"
export const Loading = () => {
    const { pathname } = useLocation();
    const { theme } = useTheme();
    const { lang } = useLanguage();
    const { textLoading, spinnerLoading } = getThemeLoadingClasses(theme);
    const matched = pathToTitle.find(p => Object.values(p.path).includes(pathname));
    const title = matched ? matched.title[lang].split('|')[0].trim() : 'Error';
    return (
        <div className={`flex flex-col items-center justify-center w-full h-screen gap-6 text-center  bg-transparent`}>
            <div className={`w-12 h-12 border-4 rounded-full animate-spin ${spinnerLoading}`} />
            <p className={`text-lg ${textLoading}`}>
                {lang === 'es' ? 'Cargando' : 'Loading'} {title}...
            </p>
        </div>)
}
