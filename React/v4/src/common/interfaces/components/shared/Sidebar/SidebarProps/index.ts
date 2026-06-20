import type { LanguageContextInterface } from "@/common/interfaces/"

export type SidebarProps = {
    lang: LanguageContextInterface['lang'];
    open?: boolean;
    onCloseSidebar?: () => void;
    themeSidebar?: string; // 'dark' | 'light' o string, opcional
}