import { dataFooter } from "@/assets/data";
import { useLanguage, useTheme } from "@/common/context";
import { useCurrentYear } from "@/common/hooks";
export const Footer = () => {
    const { theme } = useTheme()
    const { lang } = useLanguage()
    const yearRange = useCurrentYear(2019);
    const t = dataFooter[lang] || dataFooter.en;
    return (
        <footer className={`w-full text-center text-balance font-extrabold py-4 ${theme == 'dark' ? 'bg-[#070713] text-white' : 'bg-[#d1d1d1] text-[#070713]'}`}>
            © {yearRange} ingrauladolfo. {t.title}
        </footer>
    )
}