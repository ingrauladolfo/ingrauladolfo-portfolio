import type { LanguageContextInterface } from "@/common/interfaces";
import { createContext, use, useCallback, useLayoutEffect, useMemo, useState, type ReactNode } from "react";
import { i18nInstance } from '../../../../i18n'
const LanguageContext = createContext<LanguageContextInterface>({} as any);
export const useLanguage = () => use(LanguageContext);
export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    // Recupera idioma guardado o usa i18n.language
    const savedLang = localStorage.getItem('lang') as 'en' | 'es' | null;
    const [lang, setLang] = useState<'en' | 'es'>(savedLang || (i18nInstance.language as 'en' | 'es'));

    const toggleLang = useCallback(() => {
        const next = lang === 'es' ? 'en' : 'es';
        i18nInstance.changeLanguage(next);
        setLang(next);
    }, [lang]);

    // Guarda el idioma seleccionado en localStorage y sincroniza i18n
    useLayoutEffect(() => {
        localStorage.setItem('lang', lang);
        i18nInstance.changeLanguage(lang);
        document.documentElement.lang = lang;
    }, [lang]);

    // ✅ Memoize context value to prevent unnecessary re-renders
    const value = useMemo(() => ({ lang, toggleLang, setLang }), [lang, toggleLang]);

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};