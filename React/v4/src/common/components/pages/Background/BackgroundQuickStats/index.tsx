import { backgroundStatThemes } from "@/assets/data/";
import type { FC } from "react";
import { FaBriefcase, FaCheck, FaCode, FaGraduationCap } from "react-icons/fa6";
import { motion } from "framer-motion";

export const BackgroundQuickStats: FC<{ data: any; lang: string; theme: string }> = ({
    data,
    lang,
    theme,
}) => {
    if (!data) return null;

    const workCount = data.work?.items?.length ?? 0;
    const eduCount = data.education?.items?.length ?? 0;

    const currentJobs =
        data.work?.items?.filter((w: any) => {
            const status = (w.workStatus?.[lang] ?? "").toLowerCase();
            return (
                status.includes("vigente") ||
                status.includes("ongoing") ||
                status.includes("actual") ||
                status.includes("current")
            );
        }).length ?? 0;

    const stats = [
        {
            label: lang === "es" ? "Roles profesionales desde el 2019" : "Professional roles since 2019",
            value: workCount,
            icon: <FaBriefcase className="text-base" />,
        },
        {
            label: lang === "es" ? "Formación" : "Education",
            value: eduCount,
            icon: <FaGraduationCap className="text-base" />,
        },
        {
            label: lang === "es" ? "Posición actual" : "Current position",
            value: currentJobs,
            icon: <FaCheck className="text-base" />,
        },
        {
            label: lang === "es" ? "Disponibilidad" : "Availability",
            value: lang === "es" ? "Inmediata" : "Immediate",
            icon: <FaCode className="text-base" />,
        },
    ];

    const isDark = theme === "dark";
    const mode = isDark ? "dark" : "light";

    return (
        <motion.div
            className="mb-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5"
            initial="hidden"
            whileInView="show"
            viewport={{ amount: 0.2 }}
            variants={{
                hidden: {},
                show: {
                    transition: {
                        staggerChildren: 0.12,
                    },
                },
            }}
        >
            {stats.map((stat, idx) => {
                const colors = backgroundStatThemes[idx][mode];

                return (
                    <motion.div
                        key={idx}
                        className={`relative flex flex-col items-center justify-center rounded-2xl border-2 p-5 backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] md:p-6 ${colors.bg} ${colors.border} ${colors.borderHover} ${colors.glow}`}
                        variants={{
                            hidden: { opacity: 0, y: 24, scale: 0.96 },
                            show: {
                                opacity: 1,
                                y: 0,
                                scale: 1,
                                transition: {
                                    duration: 0.5,
                                    ease: "easeOut",
                                },
                            },
                        }}
                        whileHover={{ y: -8, scale: 1.03 }}
                    >
                        <motion.div
                            className={`mb-3 flex h-11 w-11 items-center justify-center rounded-full shadow-lg md:h-12 md:w-12 ${colors.iconBg} ${colors.iconColor}`}
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ amount: 0.2 }}
                            transition={{ duration: 0.35, delay: 0.05 }}
                            whileHover={{ rotate: 6 }}
                        >
                            {stat.icon}
                        </motion.div>

                        <motion.span
                            className={`mb-1 text-3xl font-extrabold tracking-tight md:text-4xl ${colors.value}`}
                            initial={{ opacity: 0, scale: 0.85 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ amount: 0.2 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                        >
                            {stat.value}
                        </motion.span>
                        <span className={`text-center text-xs font-semibold leading-tight md:text-sm ${colors.label}`}>
                            {stat.label}
                        </span>
                        {isDark && (
                            <motion.div className="absolute right-2 top-2 h-2 w-2 rounded-full bg-white/20" animate={{ opacity: [0.35, 1, 0.35] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
                        )}
                    </motion.div>
                );
            })}
        </motion.div>
    );
};