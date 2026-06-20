import { FaChevronDown } from "react-icons/fa6";
import { getTextColor } from "@/assets/styles";
import type { AboutSectionItemProps } from "@/common/interfaces";
import { AnimatePresence, motion, type Variants } from "framer-motion";
const wrapperVariants: Variants = { hidden: { opacity: 0, x: -24, rotate: -0.5 }, show: { opacity: 1, x: 0, rotate: 0, transition: { duration: 0.45, ease: "easeOut" } } };
const panelVariants: Variants = { hidden: { opacity: 0, height: 0 }, show: { opacity: 1, height: "auto", transition: { duration: 0.35, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.08 } }, exit: { opacity: 0, height: 0, transition: { duration: 0.25, ease: "easeIn", when: "afterChildren" } } };
const contentVariants: Variants = { hidden: { opacity: 0, x: -18 }, show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: "easeOut" } } };
const imageVariants: Variants = { hidden: { opacity: 0, x: 18, scale: 0.94, rotate: 2 }, show: { opacity: 1, x: 0, scale: 1, rotate: 0, transition: { duration: 0.35, ease: "easeOut" } } };
export const AboutSectionItem = ({ item, index, isOpen, theme, lang, onToggle }: AboutSectionItemProps) => {
    const { id, title, content, image: { href, alt } = {} } = item;
    const isReverse = index % 2 !== 0;
    return (
        <motion.div className="w-full" variants={wrapperVariants} initial="hidden" whileInView="show" viewport={{ amount: 0.25 }}        >
            <motion.div className={`relative flex w-full items-center justify-between overflow-hidden rounded-full border-4 px-4 py-3 text-center ${theme === "dark" ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`} whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.995 }} transition={{ duration: 0.2 }}            >
                <motion.div className={`absolute left-0 top-0 h-full w-1 ${theme === "dark" ? "bg-[#00f0ff]" : "bg-[#bd00ff]"}`} initial={{ scaleY: 0 }} animate={{ scaleY: 1 }} transition={{ duration: 0.35, ease: "easeOut" }} style={{ transformOrigin: "top" }} />
                <div className="flex-1 text-left">
                    <motion.button type="button" onClick={() => onToggle(id)} aria-expanded={isOpen} aria-controls={`about-panel-${id}`} id={`about-header-${id}`} className="flex w-full items-center justify-between gap-4 text-left" whileTap={{ scale: 0.99 }}>
                        <div>
                            <motion.h3 className={`text-xl font-semibold ${theme === "dark" ? "text-[#FEFF66]" : "text-[#070713]"}`} animate={isOpen ? { x: 2 } : { x: 0 }} transition={{ duration: 0.2 }}>
                                {title?.[lang]}
                            </motion.h3>
                            <div className="mt-1 text-sm">
                                {typeof content?.[lang] === "string" ? content[lang] : ""}
                            </div>
                        </div>
                        <motion.span aria-hidden animate={{ rotate: isOpen ? 180 : 0 }} transition={{ type: "spring", stiffness: 260, damping: 18 }}>
                            <FaChevronDown />
                        </motion.span>
                    </motion.button>
                </div>
            </motion.div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div id={`about-panel-${id}`} role="region" aria-labelledby={`about-header-${id}`} className="mt-3 overflow-hidden" variants={panelVariants} initial="hidden" animate="show" exit="exit"                    >
                        <div
                            className={`flex flex-col-reverse md:items-center md:gap-14 md:flex-row ${isReverse ? "md:flex-row-reverse" : ""}`}>
                            <motion.div className={`flex-1 flex flex-col justify-center space-y-4 text-lg leading-relaxed ${getTextColor(theme)}`} variants={contentVariants}                            >
                                <p className="mb-2 text-base font-semibold">{content?.[lang]}</p>
                            </motion.div>
                            <motion.div className="mb-6 flex shrink-0 items-center justify-center md:mb-0" variants={imageVariants} whileHover={{ scale: 1.04, rotate: 0.5 }}                            >
                                {href && (
                                    <img src={href} alt={alt?.[lang] ?? ""} loading="lazy" className="h-40 w-40 rounded-2xl object-cover shadow-md ring-1 ring-gray-300 transition-transform duration-300 hover:scale-105 md:h-48 md:w-48 lg:h-56 lg:w-56" />
                                )}
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};