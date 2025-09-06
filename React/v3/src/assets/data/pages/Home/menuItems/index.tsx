// src/data/menuItems.ts
import { FaHome, FaUser, FaMedal, FaFolder } from 'react-icons/fa'; // Importa los íconos

import { pathToTitle } from "../../../routes/pathToTitle";
import type { PathToTitle } from "../../../../../common/interfaces/routes";
import type { MenuItem } from "../../../../../common/interfaces/data/pages/Home";
import { FaGear } from 'react-icons/fa6';

const routes = pathToTitle as PathToTitle[];

export const menuItems: MenuItem[] = routes.map(({ path, title }) => {
  const key = path.en === '/' ? 'home' : path.en.slice(1);
  const nameEn = key.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
  const nameEs = title.es.split('|')[0].trim();

  // Aquí asignas el ícono según el path
  let icon = <FaHome className="mr-2" size={16} />; // Valor predeterminado (Home)

  if (key === 'about') {
    icon = <FaUser className="mr-2" size={16} />;
  }
  else if (key === 'experience') {
    icon = <FaMedal className="mr-2" size={16} />;
  }
  else if (key === 'projects') {
    icon = <FaFolder className="mr-2" size={16} />;
  }
  else if (key === 'skills') {
    icon = <FaGear className="mr-2" size={16} />;
  }

  return {
    src: `/img/${key}/${key}.webp`,
    alt: { en: nameEn, es: nameEs },
    content: {
      en: <p className="text-center">{nameEn}</p>,
      es: <p className="text-center">{nameEs}</p>,
    },
    path,
    icon, // Añadimos el ícono
  };
});
