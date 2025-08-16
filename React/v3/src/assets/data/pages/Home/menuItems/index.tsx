// src/data/menuItems.ts
import { pathToTitle } from "../../../routes/pathToTitle";
import type { PathToTitle } from "../../../../../common/interfaces/routes";
import type { MenuItem } from "../../../../../common/interfaces/data/pages/Home";

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
