import type { ThemeType } from "@/common/interfaces";
export const getTextColor = (theme: ThemeType): string => theme === 'dark' ? 'text-[#ffffff] font-extrabold' : 'text-[#070713] font-extrabold';
