import type { HeroImageProps } from "@/common/interfaces";
import type { CSSProperties, FC } from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";
import { MdOutlineWorkOutline } from "react-icons/md";
import { TiDocument } from "react-icons/ti";

export const HeroImage: FC<HeroImageProps> = ({ theme, lang, responsive, visibility, t, handleBadgeClick, handleDocClick, handleGithubClick, handleLinkedInClick, handleContactClick, downloadCv, openUrl }) => {
    const { isSmallScreen } = responsive;
    const { badge: showBadge, cv: showCv, github: showGithub, linkedIn: showLinkedIn, contact: showContact } = visibility;

    return (
        <div className="w-full md:w-1/2 flex justify-center md:justify-end order-1 md:order-2">
            <div className="relative w-75 sm:w-90 md:w-110 lg:w-130">
                <button type="button" className="w-full rounded-full overflow-hidden border-none p-0 bg-transparent cursor-pointer">
                    <img src="/assets/img/components/pages/Home/home.webp" alt="hero" className="w-full h-auto block" />
                </button>
                {/* Badge (left-click shows brief tooltip) */}
                <div className="flex absolute items-center justify-center p-14 z-20" style={{ ...(isSmallScreen ? { bottom: '-15%', right: '-10%', transform: 'none', animation: 'floating 5s ease-in-out 3.2s infinite', } : { top: '30%', left: '85%', transform: 'translate(-1600px) scale(6.2)', animation: 'from-top 1s ease-in-out forwards .4s,floating 5s ease-in-out 2s infinite', }) as CSSProperties }}>
                    <div className="relative">
                        <button type="button" onClick={e => handleBadgeClick(e)} className={`flex items-center justify-center relative text-sm                                        ${theme === 'light' ? 'text-gray-950 hover:underline hover:text-[#e7000b] ' : 'text-gray-300 hover:underline hover:text-[#ffd230] '}`} aria-label="Badge">
                            <MdOutlineWorkOutline className={`text-[3rem]  ${theme === 'light' ? 'text-[#e7000b] drop-shadow-[0_0_12px_#070713]' : 'text-[#ffd230] drop-shadow-[0_0_12px_#ffd230] '}`} />
                        </button>
                        {showBadge && (
                            <span className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded text-xs z-30 ${theme === 'light' ? 'bg-[#e7000b] text-white' : 'bg-[#ffd230] text-[#070713]'}`}>
                                {t.badgeText}
                            </span>
                        )}
                    </div>
                </div>
                {/* CV (left-click shows brief tooltip) */}
                <div className="flex absolute items-center justify-center p-14 z-20" style={{ ...(isSmallScreen ? { top: '-20%', right: '30%', transform: 'none', animation: 'floating 5s ease-in-out 2s infinite' } : { top: '-15%', right: '31.5%', transform: 'translate(-1600px) scale(6.2)', animation: 'from-top 1s ease-in-out forwards .4s,floating 5s ease-in-out 2s infinite' }) as CSSProperties }}>
                    <div className="relative">
                        <button type="button" onClick={e => handleDocClick(e)} className={`flex items-center justify-center relative text-sm                                        ${theme === 'light' ? 'text-gray-950 hover:underline hover:text-red-600' : 'text-gray-300 hover:underline hover:text-amber-300'}`} aria-label={lang === 'en' ? 'Resume' : 'CV'}>
                            <TiDocument className={`text-[3rem]  ${theme === 'light' ? 'text-[#e7000b] drop-shadow-[0_0_12px_#070713]' : 'text-[#ffd230] drop-shadow-[0_0_12px_#ffd230] '}`} />
                        </button>
                        {showCv && (
                            <button type="button" onClick={() => downloadCv(lang)} className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded text-xs z-30 ${theme === 'light' ? 'bg-[#e7000b] text-white' : 'bg-[#ffd230] text-[#070713]'}`}>
                                {lang === 'en' ? 'Download Resume' : 'Descargar CV'}
                            </button>
                        )}
                    </div>
                </div>
                {/* Github (left-click shows brief tooltip) */}
                <div className="flex absolute items-center justify-center p-14 z-20" style={{ ...(isSmallScreen ? { bottom: '-20%', right: '30%', transform: 'none', animation: 'floating 5s ease-in-out 1.9s infinite normal none running' } : { bottom: '-15%', right: '32%', transform: 'translate(-1600px) scale(6.2)', animation: 'from-top 1s ease-in-out forwards .4s,floating 5s ease-in-out 2s infinite' }) as CSSProperties }}>
                    <div className="relative">
                        <button type="button" onClick={e => handleGithubClick(e)} className={`flex items-center justify-center relative text-sm                                        ${theme === 'light' ? 'text-gray-950 hover:underline hover:text-red-600' : 'text-gray-300 hover:underline hover:text-amber-300'}`} aria-label="Github">
                            <FaGithub className={`text-[3rem]  ${theme === 'light' ? 'text-[#e7000b] drop-shadow-[0_0_12px_#070713]' : 'text-[#ffd230] drop-shadow-[0_0_12px_#ffd230] '}`} />
                        </button>
                        {showGithub && (
                            <button type="button" onClick={() => openUrl('https://github.com/ingrauladolfo/')} className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded text-xs z-30 ${theme === 'light' ? 'bg-[#e7000b] text-white' : 'bg-[#ffd230] text-[#070713]'}`}>
                                Github
                            </button>
                        )}
                    </div>
                </div>
                {/* LinkedIn (left-click shows brief tooltip) */}
                <div className="flex absolute items-center justify-center p-14 z-20" style={{ ...(isSmallScreen ? { top: '30%', left: '-20%', transform: 'none', animation: 'floating 5s ease-in-out 3.2s infinite', } : { top: '30%', left: '-15%', transform: 'translate(-1600px) scale(6.2)', animation: 'from-top 1s ease-in-out forwards .4s,floating 5s ease-in-out 2s infinite' }) as CSSProperties }}>
                    <div className="relative">
                        <button type="button" onClick={e => handleLinkedInClick(e)} className={`flex items-center justify-center relative text-sm                                        ${theme === 'light' ? 'text-gray-950 hover:underline hover:text-red-600' : 'text-gray-300 hover:underline hover:text-amber-300'}`} aria-label="Linkedin">
                            <FaLinkedin className={`text-[3rem]  ${theme === 'light' ? 'text-[#e7000b] drop-shadow-[0_0_12px_#070713]' : 'text-[#ffd230] drop-shadow-[0_0_12px_#ffd230] '}`} />
                        </button>
                        {showLinkedIn && (
                            <button type="button" onClick={() => openUrl('https://www.linkedin.com/in/ingrauladolfotorresvargas/')} className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded text-xs z-30 ${theme === 'light' ? 'bg-[#e7000b] text-white' : 'bg-[#ffd230] text-[#070713]'}`}>
                                LinkedIn
                            </button>
                        )}
                    </div>
                </div>
                {/* Contacto (left-click shows brief tooltip) */}
                <div className="flex absolute items-center justify-center p-14 z-20" style={{ ...(isSmallScreen ? { top: '0', left: '-11%', transform: 'none', animation: 'floating 5s ease-in-out 3.2s infinite' } : { top: '0%', left: '0%', transform: 'translate(-1600px) scale(6.2)', animation: 'from-top 1s ease-in-out forwards .4s,floating 5s ease-in-out 2s infinite' }) as CSSProperties }}>
                    <div className="relative">
                        <button type="button" onClick={e => handleContactClick(e)} className={`flex items-center justify-center relative text-sm                                        ${theme === 'light' ? 'text-gray-950 hover:underline hover:text-red-600' : 'text-gray-300 hover:underline hover:text-amber-300'}`} aria-label="Linkedin"                        >
                            <FaEnvelope className={`text-[3rem]  ${theme === 'light' ? 'text-[#e7000b] drop-shadow-[0_0_12px_#070713]' : 'text-[#ffd230] drop-shadow-[0_0_12px_#ffd230] '}`} />
                        </button>
                        {showContact && (
                            <button type="button" onClick={() => openUrl('mailto:ingrauladolfo.torresvargas@gmail.com')} className={`absolute left-1/2 top-full mt-2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded text-xs z-30 ${theme === 'light' ? 'bg-[#e7000b] text-white' : 'bg-[#ffd230] text-[#070713]'}`}>
                                {lang === 'en' ? 'Contact' : 'Contacto'}
                            </button>
                        )}
                    </div>
                </div>

            </div>
        </div>
    );
};