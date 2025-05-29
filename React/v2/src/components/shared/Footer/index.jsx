import { useContext } from "react";
import useCurrentYear from "@/hooks/useCurrentYear";
import { ThemeContext } from "@/context/ThemeContext";

export default function Footer() {
  const yearRange = useCurrentYear(2019);
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <footer className={`
      w-full text-center text-sm font-extrabold
      ${isDark ? 'bg-gray-950 text-white' : 'bg-gray-100 text-gray-800'}
    `}>
      © {yearRange} ingrauladolfo. Todos los derechos reservados.
    </footer>
  );
}
