import type { JSX } from "react";

 interface NavLink {
  href: { en: string; es: string };
  icon: JSX.Element;
  title: { en: string; es: string };
}
export type {NavLink};