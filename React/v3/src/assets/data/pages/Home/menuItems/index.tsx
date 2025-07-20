// src/data/menuItems.ts
import type { JSX } from "react";
import { pathToTitle } from "../../../routes/pathToTitle";
import type { PathToTitle } from "../../../../../common/interfaces/routes";
type Lang = 'en' | 'es';

export interface MenuItem {
  src: string;
  alt: Record<Lang, string>;
  content: Record<Lang, JSX.Element>;
  path: Record<Lang, string>;
}

const routes = pathToTitle as PathToTitle[];

export const menuItems: MenuItem[] = routes.map(({ path, title }) => {
  const key = path.en === '/' ? 'home' : path.en.slice(1);
  const nameEn = key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const nameEs = title.es.split('|')[0].trim();

  return {
    src: `/img/${key}/${key}.webp`,
    alt: { en: nameEn, es: nameEs },
    content: {
      en: <p className="text-center">{nameEn}</p>,
      es: <p className="text-center">{nameEs}</p>,
    },
    path,
  };
});
