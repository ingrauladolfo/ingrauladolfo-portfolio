// utils/getFormatLongDate.ts

import type { Project } from "../interfaces/data/pages/Projects";


export const getFormatLongDate = (yearObj: Project["year"], lang: "es" | "en" = "es"): string => {
  const dateStr = yearObj[lang]; // Obtener la fecha según el idioma
  const [part1, part2, part3] = dateStr.split('/').map(Number);

  // Detectar orden de fecha según idioma
  const day = lang === "es" ? part1 : part2;
  const month = lang === "es" ? part2 : part1;
  const year = part3;

  const date = new Date(year, month - 1, day);

  return date.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", {
    day: '2-digit',
    month: 'long',
    year: 'numeric'
  });
};
