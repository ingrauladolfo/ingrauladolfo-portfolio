import type { LanguageContextInterface } from "@/common/interfaces/context";
import type { JSX } from "react";

export interface MenuItem {
    src: string;
    alt: Record<LanguageContextInterface['lang'], string>;
    content: Record<LanguageContextInterface['lang'], JSX.Element>;
    path: Record<LanguageContextInterface['lang'], string>;
    icon: JSX.Element;
}