import useCurrentYear from "@/hooks/useCurrentYear";

export default function Footer() {
  const yearRange = useCurrentYear();

  return (
    <footer className="w-full text-center bg-gray-950 text-sm text-white">
      © {yearRange} ingrauladolfo. Todos los derechos reservados.
    </footer>
  );
}
