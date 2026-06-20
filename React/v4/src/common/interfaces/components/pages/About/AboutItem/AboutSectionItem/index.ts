import type { LanguageContextInterface, ThemeType } from "@/common/interfaces/context";
import type { AboutItemInterface } from "../AboutItem";
export type AboutSectionItemProps = {
    item: AboutItemInterface;
    index: number;
    isOpen: boolean;
    theme: ThemeType
    lang: LanguageContextInterface['lang'];
    onToggle: (id: number) => void;
};