import { menuItems } from "@/assets/data";
import { useTheme } from "@/common/context";
import type { SidebarProps } from "@/common/interfaces"
import { useSidebarStore } from "@/common/stores";
import type { FC } from "react"
import { FaX } from "react-icons/fa6";

export const Sidebar: FC<SidebarProps> = ({ lang, themeSidebar: propTheme }) => {
    // context theme
    const { theme: ctxTheme } = useTheme();
    const { open, closeSidebar } = useSidebarStore()
    const theme = propTheme ?? ctxTheme;

    return (
        <div className={`fixed inset-0 z-50 flex transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            {/* backdrop */}
            <button
                type="button"
                className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
                onClick={closeSidebar}
                aria-label={lang === 'es' ? 'Cerrar menú lateral' : 'Close sidebar'}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); closeSidebar(); } }}
            />
            {/* panel */}
            <aside role="dialog" aria-modal="true" className={`relative z-60 h-full w-full md:w-80 transform transition-transform duration-300 ${open ? 'translate-x-0' : '-translate-x-full'} shadow-2xl ${theme === "dark" ? "bg-[#070713] text-[#d1d1d1]" : "bg-[#d1d1d1] text-[#070713]"}`} >
                {/* header */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-black/5">
                    <div className="text-lg font-semibold">{/* optional title */}</div>
                    <button type="button" aria-label="Cerrar" onClick={closeSidebar} className="p-2 rounded-full hover:bg-black/5 flex items-center justify-center">
                        <FaX className="text-[2rem] md:text-[1.6rem] font-bold" />
                    </button>
                </div>
                {/* nav */}
                <nav className="px-4 py-6">
                    <ul className="list-none p-0 m-0 flex flex-col gap-2">
                        {menuItems.map(({ path, alt, icon }) => {
                            const title = alt?.[lang];
                            const href = path?.[lang];
                            return (
                                <li key={href} className="list-none w-full">
                                    <a href={href} onClick={closeSidebar} className={`flex items-center w-full rounded px-3 py-2 text-[2rem] font-bold transition gap-2                      ${theme === "dark" ? "hover:bg-white/5 hover:text-[#feff66]" : "hover:bg-black/5 hover:text-[#e7000b]"}`}>
                                        {icon} {title}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </aside>
        </div>
    );
};