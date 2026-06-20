import { Fragment, type FC, useState, useRef, useLayoutEffect, useCallback } from "react";
import { FaGear, FaUsers, FaEye, FaListUl } from "react-icons/fa6";
import { AiOutlineClose, AiOutlineMinus, AiOutlineExpand, AiOutlineShrink } from "react-icons/ai";
import { useLanguage, useTheme } from "@/common/context";
import { categoryNames, skills, skillsData, skillsSlides } from "@/assets/data";
import type { LanguageContextInterface } from "@/common/interfaces";
import { RecruiterCTA, ScrollToTopButton, Tabs } from "@/common/components";
import { useTypeWriter } from "@/common/hooks";

/* ============================================================
   DATOS DE SOFT SKILLS — REEMPLAZA CON TUS DATOS REALES
   ============================================================ */

interface SoftSkill {
    name: string;
    description: string;
}

const softSkillsData: SoftSkill[] = [
    { name: "Resolución de problemas", description: "Capacidad para descomponer problemas complejos en soluciones implementables" },
    { name: "Comunicación técnica", description: "Documentación clara, code reviews constructivos, presentaciones a stakeholders" },
    { name: "Trabajo en equipo", description: "Colaboración en equipos ágiles, mentoring a desarrolladores junior" },
    { name: "Aprendizaje continuo", description: "Actualización constante en nuevas tecnologías y mejores prácticas" },
    { name: "Pensamiento de producto", description: "Enfoque en el valor de usuario y métricas de negocio" },
];

/* ============================================================
   COMPONENTE: Skills mejorado
   ============================================================ */
export const Skills: FC = () => {
    const { theme } = useTheme();
    const { lang } = useLanguage();
    const titleRef = useRef<HTMLHeadingElement>(null);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [isMinimized, setIsMinimized] = useState(false);
    const [isClosed, setIsClosed] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [tooltip, setTooltip] = useState<{ text: string; left: number; top: number; visible: boolean; }>({ text: "", left: 0, top: 0, visible: false });
    const [recruiterMode, setRecruiterMode] = useState(false);
    const [activeCategory, setActiveCategory] = useState("all");
    const t = skillsData[lang] || skillsData.en;

    /* Scroll listener */
    useLayoutEffect(() => {
        const handleScroll = () => setShowScrollTop(window.scrollY > 200);
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* Bloquear body en fullscreen */
    useLayoutEffect(() => {
        if (!isFullScreen) { return; }
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => { document.body.style.overflow = prev; };
    }, [isFullScreen]);

    const scrollToTitle = () => { titleRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }); };

    const getCategoryName = (category: string, l: LanguageContextInterface["lang"]) => {
        const categoryName = categoryNames[l];
        return categoryName[category as keyof typeof categoryName] || category;
    };

    /* ============================================================
       TERMINAL: Preparar líneas para typewriter
       ============================================================ */
    const terminalLines = Object.keys(skills).map((category) => {
        const list = skills[category as keyof typeof skills];
        const joined = list.length ? list.join(", ") : "";
        return `${t.skills?.terminalCategory || ""} ${getCategoryName(category, lang)}:\n${joined}`;
    });
    const { displayedLines, isDone } = useTypeWriter({ lines: terminalLines, speed: 35, delayBetween: 500 });

    /* ============================================================
       SLIDER
       ============================================================ */
    const slides = [...skillsSlides, ...skillsSlides];
    const SLIDER_DURATION = 28;

    const handleEnter = useCallback((e: React.MouseEvent, title: string | { en?: string; es?: string }) => {
        const el = e.currentTarget as HTMLElement;
        const rect = el.getBoundingClientRect();
        const text = typeof title === "object" ? (title as any)[lang] ?? (title as any).en ?? "" : title ?? "";
        setTooltip({ text, left: rect.left + rect.width / 2, top: rect.top - 12, visible: true });
        setIsPaused(true);
    }, [lang]);

    const handleLeave = useCallback(() => {
        setTooltip((t) => ({ ...t, visible: false }));
        setIsPaused(false);
    }, []);

    /* ============================================================
       PALETA DE COLORES POR CATEGORÍA (para glow del slider)
       ============================================================ */
    const categoryColors: Record<string, string> = {
        frontend: "#61dafb",
        backend: "#68a063",
        database: "#f0db4f",
        testing: "#c21325",
        devops: "#ff9900",
        cloud: "#00a4ef",
        mobile: "#a855f7",
        tools: "#10b981"
    };

    const getGlowColor = (category?: string) => {
        if (!category) return "#00f0ff";
        const key = category.toLowerCase();
        for (const [k, v] of Object.entries(categoryColors)) { if (key.includes(k)) { return v; } }
        return "#00f0ff";
    };

    /* ============================================================
       RENDER: VISTA RECRUITER (lista limpia, sin seniority)
       ============================================================ */
    const renderRecruiterView = () => {
        const allCategories = Object.keys(skills);
        const tabs = ["all", ...allCategories];
        const labels: Record<string, string> = {};
        tabs.forEach((cat) => {
            labels[cat] = cat === "all" ? (lang === "es" ? "Todas" : "All") : getCategoryName(cat, lang);
        });
        const filteredCategories = activeCategory === "all" ? allCategories : allCategories.filter((cat) => cat === activeCategory);

        return (
            <div className="w-full space-y-8 animate-[fadeIn_0.5s_ease-out]">
                {/* Filtros de categoría vía componente Tabs */}
                <Tabs
                    tabs={tabs}
                    activeTab={activeCategory}
                    labels={labels}
                    onChange={setActiveCategory}
                    theme={theme}
                />

                {/* Categorías como tarjetas limpias */}
                <div className="grid gap-6 md:grid-cols-2">
                    {filteredCategories.map((category) => {
                        const list = skills[category as keyof typeof skills];
                        const glow = getGlowColor(category);
                        return (
                            <div
                                key={category}
                                className={`rounded-xl border p-6 transition-all duration-300 hover:scale-[1.01] ${theme === "dark"
                                    ? "bg-[#0a0a1a] border-[#233554] hover:border-[#00f0ff]/30"
                                    : "bg-white border-gray-200 hover:border-[#0066ff]/30"
                                    }`}
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: glow, boxShadow: `0 0 10px ${glow}` }} />
                                    <h4 className={`text-lg font-bold ${theme === "dark" ? "text-[#d1d1d1]" : "text-[#070713]"}`}>
                                        {getCategoryName(category, lang)}
                                    </h4>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {list.map((skillName: string) => (
                                        <span
                                            key={skillName}
                                            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 cursor-default ${theme === "dark"
                                                ? "bg-[#1a1a2e] text-[#94a3b8] border border-[#233554] hover:border-[#00f0ff]/50 hover:text-[#00f0ff]"
                                                : "bg-gray-50 text-gray-600 border border-gray-200 hover:border-[#0066ff]/50 hover:text-[#0066ff]"
                                                }`}
                                        >
                                            {skillName}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Soft Skills */}
                <div className={`rounded-xl border p-6 ${theme === "dark" ? "bg-[#0a0a1a] border-[#233554]" : "bg-white border-gray-200"}`}>
                    <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${theme === "dark" ? "text-[#d1d1d1]" : "text-[#070713]"}`}>
                        <FaUsers className={theme === "dark" ? "text-[#00f0ff]" : "text-[#0066ff]"} />
                        {lang === "es" ? "Habilidades Blandas" : "Soft Skills"}
                    </h3>
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {softSkillsData.map((soft) => (
                            <div
                                key={soft.name}
                                className={`p-4 rounded-lg border transition-all duration-300 hover:scale-[1.02] ${theme === "dark"
                                    ? "bg-[#1a1a2e] border-[#233554] hover:border-[#00f0ff]/30"
                                    : "bg-gray-50 border-gray-200 hover:border-[#0066ff]/30"
                                    }`}
                            >
                                <div className={`font-medium text-sm mb-1 ${theme === "dark" ? "text-[#d1d1d1]" : "text-[#070713]"}`}>
                                    {soft.name}
                                </div>
                                <p className={`text-xs ${theme === "dark" ? "text-[#94a3b8]" : "text-gray-500"}`}>
                                    {soft.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <RecruiterCTA lang={lang} theme={theme} />
            </div>
        );
    };

    /* ============================================================
       RENDER: VISTA INTERACTIVA (terminal + slider)
       ============================================================ */
    const renderInteractiveView = () => (
        <div className="flex flex-col md:flex-row md:items-start md:gap-8">
            {/* TERMINAL (left on desktop, top on mobile) */}
            {!isClosed && !isMinimized && (
                <div className={`${isFullScreen ? `fixed inset-0 z-[1000] rounded-none` : `w-full md:w-1/2`}`} role="dialog" aria-modal={isFullScreen ? "true" : "false"}>
                    <div className={`mx-auto rounded-2xl shadow-2xl overflow-hidden border p-1 ${theme === "dark" ? "bg-[#070713] border-[#d1d1d1]" : "bg-[#d1d1d1] border-gray-200"}`}>
                        <div className={`flex items-center justify-between px-4 py-3 ${theme === "dark" ? "bg-[#070713]" : "bg-[#d1d1d1]"}`} style={isFullScreen ? { position: "sticky", top: 0, zIndex: 60 } : {}}>
                            <div className="flex items-center gap-2">
                                <button type="button" className="w-3 h-3 rounded-full bg-[#e7000b] text-[#070713] flex items-center justify-center group/btn" aria-label="Close terminal">
                                    <AiOutlineClose onClick={() => { setIsClosed(true); setIsMinimized(false); setIsFullScreen(false); }} className="opacity-0 group-hover/btn:opacity-100 transition font-extrabold" size={15} />
                                </button>
                                <button type="button" className="w-3 h-3 rounded-full bg-[#ffd230] text-[#070713] flex items-center justify-center group/btn" aria-label="Minimize terminal">
                                    <AiOutlineMinus onClick={() => { setIsMinimized(true); setIsFullScreen(false); }} className="opacity-0 group-hover/btn:opacity-100 transition font-extrabold" size={15} />
                                </button>
                                <button type="button" onClick={() => setIsFullScreen((v) => !v)} className="w-3 h-3 rounded-full bg-[#27c93f] text-[#070713] flex items-center justify-center group/btn" aria-label="Toggle fullscreen">
                                    {isFullScreen ? <AiOutlineShrink className="opacity-0 group-hover/btn:opacity-100 transition font-extrabold" size={15} /> : <AiOutlineExpand className="opacity-0 group-hover/btn:opacity-100 transition font-extrabold" size={10} />}
                                </button>
                            </div>
                            <div className={`text-sm font-mono tracking-wide ${theme === "dark" ? "text-[#D1D1D1]" : "text-[#030712]"}`}>root@ingrauladolfo-ubuntu: ~</div>
                            <div className="w-6" />
                        </div>
                        <div className={`${theme === 'dark' ? 'bg-[#070713]' : 'bg-[#d1d1d1]'} p-6 font-mono text-[1.6rem] leading-relaxed`} style={isFullScreen ? { height: "calc(100vh - 56px)", overflow: "auto" } : { maxHeight: "calc(100vh - 180px)", overflow: "auto" }}>
                            <pre className={`m-0 whitespace-pre-wrap break-words ${theme === 'dark' ? 'text-[#d1d1d1]' : 'text-[#070713]'}`}>
                                {terminalLines.map((_, i) => {
                                    const lineText = displayedLines[i] || "";
                                    const isActive = i === displayedLines.length - 1 && !isDone;
                                    return (
                                        <Fragment key={i}>
                                            <span className={`inline-block w-8 text-right mr-3 select-none ${theme === 'dark' ? 'text-[#233554]' : 'text-[#94a3b8]'}`}>
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                            <span className={theme === 'dark' ? 'text-[#00f0ff]' : 'text-[#0066ff]'}>$&nbsp;</span>
                                            <span>
                                                {lineText.split("\n").map((part, idx) => (
                                                    <Fragment key={idx}>
                                                        {idx > 0 && (
                                                            <>
                                                                <br />
                                                                <span className="inline-block w-8 mr-3" />
                                                                <span className={theme === 'dark' ? 'text-[#00f0ff]' : 'text-[#0066ff]'}>&gt;&nbsp;</span>
                                                            </>
                                                        )}
                                                        <span className={idx === 0 ? (theme === 'dark' ? 'text-[#bd00ff] font-semibold' : 'text-[#7c3aed] font-semibold') : ''}>
                                                            {part}
                                                        </span>
                                                    </Fragment>
                                                ))}
                                                {isActive && (<span className={`inline-block w-2 h-5 ml-1 align-middle ${theme === 'dark' ? 'bg-[#00f0ff]' : 'bg-[#0066ff]'} animate-pulse`} />)}
                                            </span>
                                            <br />
                                            <br />
                                        </Fragment>
                                    );
                                })}
                                {isDone && (
                                    <>
                                        <span className={`inline-block w-8 text-right mr-3 select-none ${theme === 'dark' ? 'text-[#233554]' : 'text-[#94a3b8]'}`}>
                                            {String(terminalLines.length + 1).padStart(2, "0")}
                                        </span>
                                        <span className={theme === 'dark' ? 'text-[#00f0ff]' : 'text-[#0066ff]'}>$&nbsp;</span>
                                        <span className={`inline-block w-2 h-5 align-middle ${theme === 'dark' ? 'bg-[#00f0ff]' : 'bg-[#0066ff]'} animate-pulse`} />
                                    </>
                                )}
                            </pre>
                        </div>
                    </div>
                </div>
            )}
            {/* SLIDER (right on desktop, below on mobile) */}
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
                <section className={`py-0 ${theme === 'dark' ? 'bg-[#070713]' : 'bg-[#d1d1d1]'}`}>
                    <div className="max-w-full mx-auto px-0 overflow-hidden relative">
                        <style>{`@keyframes scroll-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
                        <div className="flex gap-6 items-center w-max" style={{ animation: `scroll-left ${SLIDER_DURATION}s linear infinite`, animationPlayState: isPaused ? "paused" : "running" }}>
                            {slides.map((img, i) => {
                                const glow = getGlowColor(img.category);
                                return (
                                    <div key={`${img.id}-${i}`} className="relative group shrink-0 w-28 h-28 md:w-32 md:h-32 p-2 cursor-pointer" onMouseEnter={(e) => handleEnter(e, img.title)} onMouseLeave={handleLeave} onTouchStart={(e) => handleEnter(e as any, img.title)} onTouchEnd={handleLeave}>
                                        <div className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-all duration-500 scale-75 group-hover:scale-110" style={{ background: glow }} />
                                        <a href={img.href} target="_blank" rel="noreferrer noopener" className="relative block w-full h-full p-2 rounded-xl bg-white/5 border border-white/5 group-hover:border-white/20 transition-all duration-300">
                                            <img src={img.src} alt={img.alt} draggable={false} className="w-full h-full object-contain rounded-lg transition-all duration-500 grayscale group-hover:grayscale-0 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]" loading="lazy" />
                                        </a>
                                        <div className="absolute bottom-[-30%] left-0 right-0 h-full opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" style={{ backgroundImage: `url(${img.src})`, backgroundSize: "contain", backgroundRepeat: "no-repeat", backgroundPosition: "center", transform: "scaleY(-1)", maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)", WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent)" }} />
                                    </div>
                                );
                            })}
                        </div>
                        {/* fixed tooltip */}
                        {tooltip.visible && (
                            <div className="fixed z-[9999] pointer-events-none" style={{ left: tooltip.left, top: tooltip.top, transform: "translate(-50%, -120%)" }}>
                                <div className="relative">
                                    <div className="whitespace-nowrap rounded-lg bg-black/90 backdrop-blur-md px-4 py-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(0,0,0,0.5)] border border-white/10 animate-[tooltipIn_0.2s_ease-out]">
                                        {tooltip.text}
                                    </div>
                                    <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-black/90 rotate-45 border-r border-b border-white/10" />
                                </div>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </div>
    );

    /* ============================================================
       RENDER PRINCIPAL
       ============================================================ */
    return (
        <div>
            <section ref={titleRef} className={`min-h-screen py-16`}>
                <div className="max-w-6xl mx-auto px-4">
                    <div className="mb-6 flex flex-col items-center">
                        <h2 className="text-4xl font-bold flex items-center gap-3">
                            <FaGear className={theme === "dark" ? "text-[#d1d1d1]" : "text-[#070713]"} />
                            <span className={theme === "dark" ? "text-[#d1d1d1]" : "text-[#070713]"}>{t.skills?.title}</span>
                        </h2>
                        <h3 className="text-2xl font-bold text-center mt-4">{t.skills?.subtitle}</h3>

                        {/* Toggle Recruiter / Interactive */}
                        <div className={`mt-6 flex items-center gap-2 p-1 rounded-xl ${theme === "dark" ? "bg-[#1a1a2e]" : "bg-gray-100"}`}>
                            <button
                                onClick={() => setRecruiterMode(false)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${!recruiterMode
                                    ? theme === "dark"
                                        ? "bg-[#070713] text-[#00f0ff] shadow-lg"
                                        : "bg-white text-[#0066ff] shadow-lg"
                                    : theme === "dark"
                                        ? "text-[#94a3b8] hover:text-[#d1d1d1]"
                                        : "text-gray-500 hover:text-gray-700"
                                    }`}
                                aria-pressed={!recruiterMode}
                            >
                                <FaEye size={14} />
                                {lang === "es" ? "Interactivo" : "Interactive"}
                            </button>
                            <button
                                onClick={() => setRecruiterMode(true)}
                                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${recruiterMode
                                    ? theme === "dark"
                                        ? "bg-[#070713] text-[#00f0ff] shadow-lg"
                                        : "bg-white text-[#0066ff] shadow-lg"
                                    : theme === "dark"
                                        ? "text-[#94a3b8] hover:text-[#d1d1d1]"
                                        : "text-gray-500 hover:text-gray-700"
                                    }`}
                                aria-pressed={recruiterMode}
                            >
                                <FaListUl size={14} />
                                {lang === "es" ? "Para Reclutadores" : "Recruiter View"}
                            </button>
                        </div>

                        {recruiterMode && (
                            <p className={`mt-3 text-sm text-center max-w-lg ${theme === "dark" ? "text-[#94a3b8]" : "text-gray-500"}`}>
                                {lang === "es"
                                    ? "Vista limpia y rápida de mis tecnologías. Sin etiquetas de nivel — tú decides."
                                    : "Clean and quick view of my tech stack. No level labels — you decide."}
                            </p>
                        )}

                    </div>

                    {/* Contenido según modo */}
                    {recruiterMode ? renderRecruiterView() : renderInteractiveView()}
                </div>
                {/* minimized taskbar estilo dock */}
                {isMinimized && !isClosed && (
                    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50" onClick={() => { setIsMinimized(false); setIsClosed(false); }} role="button" tabIndex={0} onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { setIsMinimized(false); setIsClosed(false); } }}>
                        <div className="flex items-center gap-3 bg-black/60 backdrop-blur-xl border border-white/10 rounded-2xl px-5 py-3 shadow-2xl cursor-pointer hover:bg-black/70 transition-all hover:scale-105 group">
                            <span className="w-3 h-3 rounded-full bg-[#27c93f] shadow-[0_0_10px_#27c93f] animate-pulse" />
                            <span className={`text-sm font-mono group-hover:text-white transition ${theme === "dark" ? "text-[#D1D1D1]" : "text-[#E7000B]"}`}>root@ingrauladolfo-ubuntu</span>
                            <span className={`text-xs ml-1 ${theme === "dark" ? "text-[#D1D1D1]" : "text-white"}`}>{lang === "es" ? "Click para restaurar" : "Click to restore"}</span>
                        </div>
                    </div>
                )}

            </section>
            <ScrollToTopButton visible={showScrollTop} theme={theme} lang={lang} onClick={scrollToTitle} />
            <style>{`
                @keyframes tooltipIn { from { opacity: 0; transform: translate(-50%, -110%) scale(0.9); } to { opacity: 1; transform: translate(-50%, -120%) scale(1); } }
                @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
            `}</style>
        </div>
    );
};