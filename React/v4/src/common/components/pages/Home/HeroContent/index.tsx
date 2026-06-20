import { menuItems } from "@/assets/data";
import { getBaseButton, getButtonWebsiteLinks } from "@/assets/styles";
import { handleClick } from "@/common/functions";
import type { HeroContentProps } from "@/common/interfaces";
import type { FC } from "react";

export const HeroContent: FC<HeroContentProps> = ({ theme, lang, t, selected, setSelected }) => {
    return (
        <div className="w-full flex flex-col justify-center items-start order-2 lg:order-1 text-left">
            <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${theme === "dark" ? 'text-white' : 'text-black'}`}>
                {t.title} {' '}
                <span className={`${theme === "dark" ? 'text-[#feff66] drop-shadow-[0_0_12px_#feff66]' : 'text-[#e7000b] drop-shadow-[0_0_12px_#070713]'}`}>
                    Raúl Adolfo Torres Vargas
                </span>
            </h2>

            <span className={`text-3xl font-medium ${theme === "dark" ? "text-amber-300" : "text-red-600"}`}>
                {t.subtitle}
            </span>

            {/* Bloque ancho, párrafos apilados */}
            <div className={`mt-6 max-w-prose space-y-5 ${theme === "dark" ? "text-gray-200" : "text-gray-800"}`}>
                {t.paragraphs?.map((paragraph: string) => (
                    <p key={paragraph} className="text-lg lg:text-xl leading-relaxed font-normal">
                        {paragraph}
                    </p>
                ))}
            </div>
            <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
                {menuItems.slice(0, menuItems.length).map((m, i) => {
                    const label = m.alt?.[lang] || `item-${i}`;
                    const isActive = selected === i;
                    const href = String(m.path?.[lang] || m.path?.en || '').trim();
                    return (
                        <button type="button" key={href} onClick={() => { setSelected?.(i); const t = String(m.path?.[lang] || '').trim(); if (!t) { return; } if (/^https?:\/\//i.test(t)) { handleClick(t); } else { window.location.assign(t); } }} aria-current={isActive ? 'page' : undefined} className={`${getBaseButton()} ${getButtonWebsiteLinks(theme)} w-48 text-center text-xl px-6 py-3`}>
                            {/* Ícono y texto */}
                            <span className="flex items-center justify-center">
                                {m.icon} {/* Muestra el ícono */}
                                <span className="text-xs">{label}</span> {/* Muestra el texto */}
                            </span>
                        </button>
                    );
                })}

            </div>
        </div>
    )
}