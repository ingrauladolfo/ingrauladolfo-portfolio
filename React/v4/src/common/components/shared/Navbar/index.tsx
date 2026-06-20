// Navbar.tsx
import { FaMoon, FaSun, FaBars } from "react-icons/fa6";
import { MX as MxFlag, US as UsFlag } from "country-flag-icons/react/3x2";
import { Sidebar } from "./Sidebar";
import { useLanguage, useTheme } from "@/common/context";
import { useSidebarStore } from "@/common/stores";
import { menuItems } from "@/assets/data";

export const Navbar = () => {
    const { toggleTheme, theme } = useTheme();
    const { toggleLang, lang } = useLanguage();
    const { openSidebar } = useSidebarStore();

    return (
        <header className="absolute inset-x-0 top-6 z-50">
            <div className="max-w-7xl mx-auto px-6">
                <nav className={`flex items-center border-4 border-solid justify-between rounded-full px-4 py-3 backdrop-blur-[18px] shadow-[0_8px_30px_rgba(2,6,23,0.4)]            ${theme === "dark" ? "bg-[#070713] border-[#feff66] shadow-[0_0_15px_#feff66]" : "bg-[#d1d1d1] border-[#e7000b] shadow-[0_0_15px_#e7000b]"}`}>
                    {/* logo + mobile/tablet menu button */}
                    <div className={`flex items-center gap-3 pr-4 ${theme === "dark" ? "border-r-4 border-[#feff66]" : "border-r-4 border-[#e7000b]"}`}>
                        {theme === "dark" ? (
                            <img src="/assets/img/components/shared/Navbar/logo-dark.webp" alt="Logo" className="size-9" />
                        ) : (
                            <img src="/assets/img/components/shared/Navbar/logo-light.webp" alt="Logo" className="size-9" />
                        )}

                        {/* show FaBars on mobile + tablet (hidden on large and up) */}
                        <button type="button" onClick={openSidebar} aria-label="Open menu" className="lg:hidden p-2 rounded flex items-center justify-center">
                            <FaBars className={`text-[2rem] md:text-[1.6rem] font-bold ${theme === "dark" ? "text-[#d1d1d1]" : "text-[#070713]"}`} />
                        </button>
                    </div>
                    {/* links (desktop only: large and up) */}
                    <ul className={`hidden lg:flex items-center gap-8 text-[16px] ${theme === "dark" ? "text-[#ffd230]" : "text-[#e7000b]"}`}>
                        {menuItems.map(({ path, alt }) => {
                            const title = alt?.[lang] ?? alt.en;
                            const href = path?.[lang] ?? path.en;
                            return (
                                <li key={href}>
                                    <a href={href} className={`flex items-center text-[2rem] md:text-[1.6rem] font-bold hover:underline capitalize cursor-pointer transition ${theme === "dark" ? "hover:text-[#e7000b]" : "hover:text-[#070713]"}`}>
                                        {title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    {/* mobile/tablet controls (always visible) */}
                    <div className="flex items-center gap-2">
                        <button type="button" onClick={toggleTheme} className={`p-2 size-10 rounded flex items-center justify-center transition ${theme === "dark" ? "hover:font-black text-[#d1d1d1] hover:text-[#feff66]" : "hover:font-black hover:text-[#e7000b] text-[#070713]"}`} aria-label="Toggle theme">
                            {theme === "dark" ? <FaMoon className="text-[2rem] md:text-[1.6rem] font-bold" /> : <FaSun className="text-[2rem] md:text-[1.6rem] font-bold" />}
                        </button>
                        <button type="button" onClick={toggleLang} aria-label="Toggle language" className={`p-2 size-10 rounded flex items-center justify-center transition ${theme === "dark" ? "hover:font-black text-[#d1d1d1] hover:text-[#feff66]" : "hover:font-black hover:text-[#e7000b] text-[#070713]"}`}>
                            {lang === "es" ? <MxFlag className="text-[2rem] md:text-[1.6rem] font-bold" /> : <UsFlag className="text-[2rem] md:text-[1.6rem] font-bold" />}
                        </button>
                    </div>
                </nav>
            </div>
            {/* Sidebar */}
            <Sidebar lang={lang} themeSidebar={theme} />
        </header>
    );
};