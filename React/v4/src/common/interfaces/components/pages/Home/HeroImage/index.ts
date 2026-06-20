import type { LanguageContextInterface, ThemeType } from "@/common/interfaces/context";

interface HeroResponsive {
    isSmallScreen: boolean;
}

interface HeroVisibility {
    badge: boolean;
    cv: boolean;
    github: boolean;
    linkedIn: boolean;
    contact: boolean;
}

export interface HeroImageProps {
    theme: ThemeType;
    lang: LanguageContextInterface['lang'];
    responsive: HeroResponsive;
    visibility: HeroVisibility;
    t: any;
    handleBadgeClick: (e: any) => void;
    handleDocClick: (e: any) => void;
    handleGithubClick: (e: any) => void;
    handleLinkedInClick: (e: any) => void;
    handleContactClick: (e: any) => void;
    downloadCv: (lang: LanguageContextInterface['lang']) => void;
    openUrl: (url: string) => void;
}