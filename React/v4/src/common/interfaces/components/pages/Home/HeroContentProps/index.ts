import type { LanguageContextInterface, ThemeType } from "@/common/interfaces/context";

export interface HeroContentProps {
    theme: ThemeType;
    lang: LanguageContextInterface['lang'];
    t: any;
    selected?: number;
    setSelected?: (i: number) => void;
}