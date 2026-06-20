import type { ThemeType } from "@/common/interfaces";
export const getVerticalLineColor = (theme: ThemeType): string => theme === 'dark' ? 'bg-[#e7000b]' : 'bg-[#ffd230]'