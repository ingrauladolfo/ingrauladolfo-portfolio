import type { LanguageContextInterface, ThemeType } from "@/common/interfaces/context";
import type { ReactNode } from "react";
export interface TimelineListProps {
    items: any[];
    lang: LanguageContextInterface['lang'];
    theme: ThemeType;
    renderCard: (item: any, idx: number) => ReactNode;
}

