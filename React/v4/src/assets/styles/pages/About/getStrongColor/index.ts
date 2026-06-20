import type { ThemeType } from "@/common/interfaces";
export const getStrongColor = (theme: ThemeType): string => theme === 'dark' ? 'text-[#ffd230] font-extrabold' : 'text-[#e7000b] font-extrabold';