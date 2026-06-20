import type { ThemeType } from "@/common/interfaces";
export const getLinkColor = (theme: ThemeType): string => theme === 'dark' ? 'text-[#0ACB57] font-extrabold' : 'text-[#e7000b] font-extrabold';
