import type { LanguageContextInterface } from "@/common/interfaces/context";

export type HomeStore = {
    selected: number;
    showCv: boolean;
    showBadge: boolean;
    showGithub: boolean;
    showLinkedIn: boolean;
    showContact: boolean;
    setSelected: (n: number) => void;
    handleDocClick: (e: MouseEvent) => void;
    handleBadgeClick: (e: MouseEvent) => void;
    handleGithubClick: (e: MouseEvent) => void;
    handleLinkedInClick: (e: MouseEvent) => void;
    handleContactClick: (e: MouseEvent) => void;
    downloadCv: (lang: LanguageContextInterface['lang']) => void;
    openUrl: (rawUrl: string) => void;
};