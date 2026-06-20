import { FaArrowUp } from "react-icons/fa6";

export const ScrollToTopButton = ({ visible, theme, lang, onClick }: { visible: boolean; theme: string; lang: string; onClick: () => void }) => {
    if (!visible) return null;
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={lang === 'es' ? 'Volver al inicio' : 'Back to top'}
            className={`fixed bottom-6 right-6 z-50 rounded-full p-3 shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none cursor-pointer ${theme === 'dark' ? 'bg-[#feff66] text-[#070713]' : 'bg-[#e7000b] text-white'}`}
        >
            <FaArrowUp className="text-xl" />
        </button>
    );
};
