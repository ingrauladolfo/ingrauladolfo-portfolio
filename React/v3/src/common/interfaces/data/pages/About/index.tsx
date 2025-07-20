import type { ReactNode } from "react";

// src/common/interfaces/data/pages/About.ts
interface AboutSection {
  id: number;
  title: {
    es: string;
    en: string;
  };
  image:{
    href:string;
    alt:{es:string, en:string}
  }
  content: {
    es: ReactNode;
    en: ReactNode;
  };
}
// src/common/interfaces/shared/MultilangText.ts
 interface MultilangText {
  es: string;
  en: string;
}

export type {AboutSection,MultilangText}