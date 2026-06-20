import type { FC } from "react";
import { pathToTitle } from "@/assets/data";
import { FaPaperPlane, FaFileArrowDown } from "react-icons/fa6";
import { useBackgroundStore } from "@/common/stores"; // ← Ajusta el nombre del store según tu proyecto
import type { BackgroundDetailProps } from "@/common/interfaces";
import { FaLinkedin } from "react-icons/fa";
export const RecruiterCTA: FC<Pick<BackgroundDetailProps, 'lang' | 'theme'>> = ({ lang, theme }) => {
    const { downloadCv } = useBackgroundStore(); // ← Función que viene del store    
    // ─── Detectar entry de contacto dinámicamente ───
    const contactEntry = pathToTitle.find((p) => p.path.en === '/contact');
    // Path según idioma actual (fallback a /contacto o /contact)
    const contactPath = contactEntry?.path[lang as 'en' | 'es'] ?? (lang === 'es' ? '/contacto' : '/contact');
    // Título limpio: solo lo que está antes del "|"
    const rawTitle = contactEntry?.title[lang as 'en' | 'es'] ?? (lang === 'es' ? 'Contacto' : 'Contact');
    const cleanTitle = rawTitle.split('|')[0].trim();
    return (
        <div className={`relative mt-16 p-8 md:p-10 rounded-3xl text-center border-2 overflow-hidden transition-all duration-500 hover:scale-[1.01] ${theme === 'dark' ? 'bg-linear-to-br from-yellow-500/10 via-orange-500/5 to-transparent border-yellow-500/30 hover:border-yellow-400/60 hover:shadow-[0_0_40px_rgba(251,191,36,0.15)]' : 'bg-linear-to-br from-amber-50 via-yellow-50 to-transparent border-amber-300 hover:border-amber-400 hover:shadow-[0_8px_40px_rgba(245,158,11,0.2)]'}`}>
            {/* Decoración: círculos de fondo sutiles */}
            <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full blur-3xl opacity-40 ${theme === 'dark' ? 'bg-yellow-500' : 'bg-amber-400'}`} />
            <div className={`absolute -bottom-10 -left-10 w-24 h-24 rounded-full blur-3xl opacity-30 ${theme === 'dark' ? 'bg-orange-500' : 'bg-yellow-500'}`} />

            <div className="relative z-10">
                <h4 className={`text-2xl md:text-3xl font-extrabold mb-3 tracking-tight ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {lang === 'es' ? '¿Interesado en mi perfil?' : 'Interested in my profile?'}
                </h4>
                <p className={`text-base md:text-lg max-w-xl mx-auto mb-8 leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {lang === 'es'
                        ? 'Estoy abierto a nuevas oportunidades y colaboraciones freelance. ¡Hablemos!'
                        : 'I am open to new opportunities and freelance collaborations. Let\'s talk!'}
                </p>

                <div className="flex flex-wrap justify-center gap-4">
                    {/* Botón principal: Contactar */}
                    <a
                        href={contactPath}
                        title={cleanTitle}
                        aria-label={cleanTitle}
                        className={`
                            group flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-base
                            transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl
                            ${theme === 'dark'
                                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-300 shadow-[0_0_20px_rgba(250,204,21,0.3)]'
                                : 'bg-amber-500 text-white hover:bg-amber-600 shadow-[0_4px_20px_rgba(245,158,11,0.35)]'
                            }
                        `}
                    >
                        <FaPaperPlane className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                        {cleanTitle}
                    </a>

                    {/* Botón secundario: Descargar CV — ahora usa la función del store */}
                    <button
                        type="button" onClick={() => downloadCv(lang)}
                        className={`
                            group flex items-center gap-2.5 px-7 py-3.5 rounded-full font-bold text-base border-2 backdrop-blur-sm
                            transition-all duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-xl
                            ${theme === 'dark'
                                ? 'border-yellow-400/40 text-yellow-300 hover:bg-yellow-400/10 hover:border-yellow-300'
                                : 'border-amber-400 text-amber-700 hover:bg-amber-50 hover:border-amber-500'
                            }
                        `}
                    >
                        <FaFileArrowDown className="transition-transform group-hover:translate-y-0.5" />
                        {lang === 'es' ? 'Descargar CV' : 'Download CV'}
                    </button>
                    <a
                        href="https://linkedin.com/in/tuusuario"
                        target="_blank"
                        rel="noreferrer"
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium border transition-all duration-300 hover:scale-105 ${theme === "dark"
                            ? "border-[#233554] text-[#94a3b8] hover:border-[#00f0ff] hover:text-[#00f0ff]"
                            : "border-gray-200 text-gray-600 hover:border-[#0066ff] hover:text-[#0066ff]"
                            }`}
                    >
                        <FaLinkedin />
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    );
};