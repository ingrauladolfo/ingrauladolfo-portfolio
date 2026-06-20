import { useLayoutEffect, useMemo, useRef, useState, useEffect } from "react";
import { useLanguage, useTheme } from "@/common/context";
import { getLinkColor, getTextColor } from "@/assets/styles";
import { Calendar, ScrollToTopButton, AboutSectionItem } from '@/common/components';
import { FaUser } from "react-icons/fa6";
import { aboutPageTitle, aboutSectionData, certificationsData } from "@/assets/data";
import { Certifications } from "@/common/components/pages/About/Certifications";
export const About = () => {
    const { theme } = useTheme();
    const { lang } = useLanguage();
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const t = aboutPageTitle[lang] || aboutPageTitle.en;
    const [openIds, setOpenIds] = useState<Record<number, boolean>>({});
    const toggle = (id: number) => setOpenIds(prev => ({ ...prev, [id]: !prev[id] }));
    const memoizedAboutSectionData = useMemo(() => aboutSectionData(getLinkColor(theme)), [theme]);
    const certs = certificationsData[lang as keyof typeof certificationsData] || certificationsData.en;
    // Animación de entrada para las tarjetas
    const [visibleCards, setVisibleCards] = useState<number[]>([]);
    const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
    useEffect(() => { const observer = new IntersectionObserver((entries) => { entries.forEach((entry) => { const id = Number(entry.target.getAttribute("data-id")); if (entry.isIntersecting && !visibleCards.includes(id)) { setVisibleCards((prev) => [...prev, id]); } }); }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" }); cardsRef.current.forEach((card) => { if (card) { observer.observe(card); } }); return () => observer.disconnect(); }, [visibleCards]);
    useLayoutEffect(() => { const handleScroll = () => { setShowScrollTop(window.scrollY > 200); }; handleScroll(); window.addEventListener('scroll', handleScroll); return () => window.removeEventListener('scroll', handleScroll); }, []);
    const scrollToTitle = () => { titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }); };
    // Textos según idioma
    const sectionTitle = lang === "es" ? "Cursos y Certificaciones" : "Courses & Certifications";
    const sectionSubtitle = lang === "es" ? "Formación continua para mantenerme a la vanguardia" : "Continuous learning to stay at the forefront";
    return (
        <section className="min-h-screen py-16 w-full mx-auto lg:w-185 pb-32">
            <div className="mx-auto max-w-7xl px-4">
                {/* Título principal (sin cambios) */}
                <div className="mb-10 flex flex-col items-center text-center">
                    <h2 ref={titleRef} className={`flex items-center font-semibold gap-x-4 text-5xl mb-4 text-center justify-center ${getTextColor(theme)} ${theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#070713]'}`}>
                        <FaUser className={`mr-2 ${theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#070713]'}`} />
                        {t.title}
                    </h2>
                    <div className="w-100 h-1 rounded-full bg-linear-to-r from-[#00f0ff] to-[#bd00ff]" />
                </div>
                <h3 className={`flex items-center font-semibold gap-x-4 text-4xl mb-8 text-center justify-center ${theme === 'dark' ? 'text-[#FFFFFF]' : 'text-[#070713]'}`}>
                    {t.subtitle}
                </h3>
                <article className="flex flex-col gap-6">
                    {memoizedAboutSectionData.map((item, index) => (<AboutSectionItem key={item.id} item={item} index={index} isOpen={Boolean(openIds[item.id])} theme={theme} lang={lang} onToggle={toggle} />))}
                    {/* 🚀 NUEVA SECCIÓN: Cursos y Certificaciones - Animada e innovadora */}
                    <Certifications sectionTitle={sectionTitle} sectionSubtitle={sectionSubtitle} certs={certs} theme={theme} lang={lang} />
                    {/* Calendario (se mantiene) */}
                    <div className="mt-6"> <Calendar theme={theme} t={t} lang={lang} /> </div>

                </article>
            </div>
            <ScrollToTopButton visible={showScrollTop} theme={theme} lang={lang} onClick={scrollToTitle} />
        </section>
    );
};