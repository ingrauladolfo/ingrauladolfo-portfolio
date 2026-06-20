import type { ThemeType } from "@/common/interfaces";

export const getThemeLoadingClasses = (theme: ThemeType) => {
    const textLoading = theme === "light" ? 'text-gray-950' : 'text-gray-100'
    const spinnerLoading = theme === 'light' ? 'border-gray-950 border-t-red-600' : 'border-gray-100 border-t-amber-300'
    return { textLoading, spinnerLoading };
};