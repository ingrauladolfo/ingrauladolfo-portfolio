import type { ReactNode } from "react";

export interface AboutSectionInterface {
    id: number;
    title: {
        es: string;
        en: string;
    };
    image: {
        href: string;
        alt: { es: string, en: string }
    }
    content: {
        es: ReactNode;
        en: ReactNode;
    };
}