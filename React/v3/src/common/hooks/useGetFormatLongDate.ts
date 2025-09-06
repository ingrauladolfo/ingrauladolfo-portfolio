// utils/getFormatLongDate.ts
import type { Projects } from "../interfaces/data/pages/Projects";

export const getFormatLongDate = (
  yearObj: Projects["projectDevYear"] | string | undefined,
  lang: "es" | "en" = "es"
): string => {
  if (!yearObj) return "";

  // si ya es string (ej: "2023" o "12/08/2023" o "2023-08-12")
  let dateStr: string | undefined;
  if (typeof yearObj === "string") {
    dateStr = yearObj;
  } else {
    dateStr = yearObj[lang] ?? yearObj.es ?? undefined;
  }
  if (!dateStr) return "";

  // normalizar separadores
  const normalized = dateStr.trim().replace(/[-.]/g, "/");
  const parts = normalized.split("/").map(p => p.trim());

  let day: number, month: number, year: number;

  if (parts.length === 3) {
    const [a, b, c] = parts;
    // detectar YYYY/MM/DD
    if (a.length === 4 && !isNaN(Number(a))) {
      year = Number(a);
      month = Number(b);
      day = Number(c);
    }
    // detectar DD/MM/YYYY
    else if (c.length === 4 && !isNaN(Number(c))) {
      day = Number(a);
      month = Number(b);
      year = Number(c);
    }
    // fallback basado en idioma
    else {
      const n1 = Number(a), n2 = Number(b), n3 = Number(c);
      day = lang === "es" ? n1 : n2;
      month = lang === "es" ? n2 : n1;
      year = n3;
    }
  } else if (parts.length === 1 && parts[0].length === 4) {
    // sólo año
    year = Number(parts[0]);
    month = 1;
    day = 1;
  } else {
    // no se puede parsear, devolver original
    return dateStr;
  }

  const date = new Date(year, (month || 1) - 1, day || 1);
  if (isNaN(date.getTime())) return dateStr;

  return date.toLocaleDateString(lang === "es" ? "es-ES" : "en-US", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
};
