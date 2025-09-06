import type { JSX } from "react";
type Lang = 'en' | 'es';
interface TypewriterText {
  title: { en: string; es: string };
  speed: number;
  delay: number;
}

interface MenuItem {
  src: string;
  alt: Record<Lang, string>;
  content: Record<Lang, JSX.Element>;
  path: Record<Lang, string>;
  icon: JSX.Element; // Agregar la propiedad 'icon' de tipo JSX.Element
}
export type { TypewriterText, MenuItem }