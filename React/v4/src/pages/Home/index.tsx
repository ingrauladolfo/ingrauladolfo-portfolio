import { dataTypeWriting, textHome } from "@/assets/data";
import { HeroContent, HeroImage } from "@/common/components";
import { useLanguage, useTheme } from "@/common/context";
import { useTypeWriting } from "@/common/hooks";
import { useHomeStore } from "@/common/stores";
import { useLayoutEffect, useState } from "react";

export const Home = () => {
    const { theme } = useTheme();
    const { lang } = useLanguage();
    const [isSmallScreen, setIsSmallScreen] = useState(false);
    const t = textHome[lang] || textHome.en;
    const localizedData = dataTypeWriting.map(({ title, speed, delay }) => ({ title: title[lang], speed, delay, }));
    // store
    const { selected, showCv, showBadge, showGithub, showLinkedIn, showContact, setSelected, handleDocClick, handleBadgeClick, handleGithubClick, handleLinkedInClick, handleContactClick, downloadCv, openUrl } = useHomeStore();
    useLayoutEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.outerWidth <= 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    const { output, showTitle } = useTypeWriting(localizedData);
    return (
        <section className="w-full min-h-dvh px-8 flex items-center justify-center">
            {/* keyframes injected inline (no external CSS) */}
            <style>
                {`
              @keyframes floating {
                0% { transform: translateY(0px); }
                50% { transform: translateY(-9px); }
                100% { transform: translateY(0px); }
              }
              @keyframes from-top {
                0% { transform: translateY(-40px) scale(0.9); opacity: 0; }
                100% { transform: translateY(0) scale(1); opacity: 1; }
              }
            `}
            </style>
            <div className="w-full max-w-7xl py-20 flex flex-col gap-12">
                {/* HeroWelcome - Texto de bienvenida (typewriter) ARRIBA */}
                <h1 className={`flex items-center text-5xl font-semibold tracking-tight mb-8 text-center justify-center transition-opacity duration-500 ${showTitle ? "opacity-100" : "opacity-0"}${theme === "dark" ? 'text-[#feff66] drop-shadow-[0_0_12px_#feff66]' : 'text-[#e7000b] drop-shadow-[0_0_12px_#070713]'}`}>
                    {theme === "dark" ? (
                        <img src="/assets/img/components/shared/Navbar/logo-dark.webp" alt="Logo" className="size-9 mr-2" />
                    ) : (
                        <img src="/assets/img/components/shared/Navbar/logo-light.webp" alt="Logo" className="size-9 mr-2" />
                    )}
                    {output}
                </h1>

                {/* HeroImage + HeroContent ABAJO, en fila */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                    <HeroImage
                        theme={theme}
                        lang={lang}
                        responsive={{ isSmallScreen }}
                        t={t}
                        visibility={{
                            badge: showBadge,
                            cv: showCv,
                            github: showGithub,
                            linkedIn: showLinkedIn,
                            contact: showContact,
                        }}
                        handleBadgeClick={handleBadgeClick}
                        handleDocClick={handleDocClick}
                        handleGithubClick={handleGithubClick}
                        handleLinkedInClick={handleLinkedInClick}
                        handleContactClick={handleContactClick}
                        downloadCv={downloadCv}
                        openUrl={openUrl}
                    />
                    <HeroContent theme={theme} lang={lang} t={t} selected={selected} setSelected={setSelected} />
                </div>
            </div>
        </section>
    )
}