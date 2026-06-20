import type { ThemeType } from "@/common/interfaces";
import { createContext, use, useLayoutEffect, useMemo, useState, type ReactNode } from "react";

const ThemeContext = createContext<{ theme: ThemeType; toggleTheme: () => void } | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    // Inicializa con preferencia del sistema o 'light'
    const getInitialTheme = (): ThemeType => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('theme') as ThemeType | null;
            if (saved === 'dark' || saved === 'light') return saved;
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
        }
        return 'light';
    };

    const [theme, setTheme] = useState<ThemeType>(getInitialTheme);

    // Y en useLayoutEffect donde cambias el tema:
    useLayoutEffect(() => {
        const root = window.document.documentElement;
        root.classList.remove(theme === 'light' ? 'dark' : 'light');
        root.classList.add(theme);
        localStorage.setItem('theme', theme); // Guardar elección
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
    };

    // ✅ Memoize context value to prevent unnecessary re-renders
    const value = useMemo(() => ({ theme, toggleTheme }), [theme]);

    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => {
    const ctx = use(ThemeContext);
    if (!ctx) { throw new Error('useTheme must be used within ThemeProvider'); }
    return ctx;
};