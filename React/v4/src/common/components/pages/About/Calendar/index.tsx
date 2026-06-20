import { DEFAULT_MONTHS, DEFAULT_WEEKDAYS } from "@/assets/data";
import { ActivityCalendar } from "react-activity-calendar";
import { getTextColor } from "@/assets/styles";
import { useCurrentYear } from "@/common/hooks/";
import type { CalendarProps, TooltipStateProps } from "@/common/interfaces";
import { useAboutStore } from "@/common/stores/";
import { cloneElement, useLayoutEffect, useMemo, useRef, useState, type MouseEvent, type ReactElement, type SVGProps } from "react";
import { motion, type Variants } from "framer-motion";
import { YearButton } from "../YearButton";
const containerVariants: Variants = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, delayChildren: 0.05 } } };
const itemVariants: Variants = { hidden: { opacity: 0, y: 18, scale: 0.98 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } } };
export const Calendar = ({ theme, t, lang }: CalendarProps) => {
    const { years, contributions, fetchYears, fetchContributions } = useAboutStore();
    const currentYear = Number(useCurrentYear());
    const [year, setYear] = useState<number>(currentYear);
    const [loading, setLoading] = useState(false);
    const fetchedYears = useRef(false);
    const [tooltip, setTooltip] = useState<TooltipStateProps>(null);
    const tooltipRef = useRef<HTMLButtonElement | null>(null);
    useLayoutEffect(() => { if (fetchedYears.current) return; fetchedYears.current = true; fetchYears(); }, [fetchYears]);
    useLayoutEffect(() => { if (!year) { return; } let mounted = true; setLoading(true); fetchContributions(String(year)).finally(() => mounted && setLoading(false)); return () => { mounted = false; }; }, [year, fetchContributions]);
    const data = useMemo(() => Array.isArray(contributions) ? contributions.map((c) => ({ date: c.date, count: Number(c.count || 0), level: Number(c.level || 0) })) : [], [contributions]);
    const totalCount = useMemo(() => contributions?.reduce((a, c) => a + Number(c.count || 0), 0) ?? 0, [contributions]);
    useLayoutEffect(() => { const onDocClick = (e: globalThis.MouseEvent) => { if (tooltipRef.current?.contains(e.target as Node)) { return; } setTooltip(null); }; const onEsc = (e: KeyboardEvent) => e.key === "Escape" && setTooltip(null); document.addEventListener("click", onDocClick); document.addEventListener("keydown", onEsc); return () => { document.removeEventListener("click", onDocClick); document.removeEventListener("keydown", onEsc); }; }, []);
    const calendar = t?.calendar;
    const months = Array.isArray(calendar?.months) && calendar.months.length >= 12 ? calendar.months : DEFAULT_MONTHS;
    const weekdays = Array.isArray(calendar?.weekdays) && calendar.weekdays.length >= 7 ? calendar.weekdays : DEFAULT_WEEKDAYS;
    const badgeLabel = calendar?.badgeText ?? "activities on";
    const formatBadge = (count: number, date: string) => {
        const dateObj = new Date(date);
        const formattedDate = lang === "es" ? `${dateObj.getDate().toString().padStart(2, "0")}/${(dateObj.getMonth() + 1).toString().padStart(2, "0")}/${dateObj.getFullYear()}` : `${(dateObj.getMonth() + 1).toString().padStart(2, "0")}/${dateObj.getDate().toString().padStart(2, "0")}/${dateObj.getFullYear()}`;
        return `${count} ${badgeLabel} ${formattedDate}`;
    };
    const renderBlock = (block: ReactElement<SVGProps<SVGRectElement>>, activity: { date: string; count: number }) => {
        const onClick = (e: MouseEvent<SVGRectElement>) => { e.stopPropagation(); const rect = e.currentTarget.getBoundingClientRect(); setTooltip({ date: activity.date, count: activity.count, left: rect.left + rect.width / 2, top: rect.bottom }); };
        return cloneElement(block, { onClick, style: { ...(block.props.style || {}), cursor: "pointer" }, tabIndex: 0, onKeyDown: (e: React.KeyboardEvent) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); const rect = (e.currentTarget as SVGRectElement).getBoundingClientRect(); setTooltip({ date: activity.date, count: activity.count, left: rect.left + rect.width / 2, top: rect.bottom }); } } });
    };
    return (
        <motion.section className="relative mt-12 flex w-full flex-col items-center gap-6 p-[0_2rem]" variants={containerVariants} initial="hidden" whileInView="show" viewport={{ amount: 0.2 }} >
            <motion.div className={`w-full ${getTextColor(theme)}`} variants={itemVariants}>
                <motion.h2 className="mb-8 flex items-center justify-center gap-x-4 text-center text-5xl font-semibold" initial={{ opacity: 0, x: -18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.45 }}>
                    {calendar?.title ?? "Contributions"}
                </motion.h2>
                <motion.p className="mb-8 flex items-center justify-center gap-x-4 text-center text-4xl font-semibold opacity-80" initial={{ opacity: 0, x: 18 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.45 }}>
                    {(calendar?.total ?? "{{count}} contributions in {{year}}").replace("{{count}}", String(totalCount)).replace("{{year}}", String(year))}
                </motion.p>
            </motion.div>
            <motion.div className="w-full max-w-400 rounded-[15px] bg-[#19013a] p-[1rem_2rem] text-white" variants={itemVariants} whileHover={{ y: -4, scale: 1.01 }} transition={{ duration: 0.25 }} >
                {loading ? (
                    <motion.div className="py-12 text-center" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {calendar?.loading ?? "Loading…"}
                    </motion.div>
                ) : data.length === 0 ? (
                    <motion.div className="py-12 text-center opacity-70" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        {calendar?.empty ?? "No data"}
                    </motion.div>
                ) : (
                    <ActivityCalendar data={data} blockSize={12} blockMargin={4} blockRadius={4} showWeekdayLabels showMonthLabels showTotalCount renderBlock={renderBlock} labels={{ months, weekdays, totalCount: calendar?.total ?? "{{count}} contributions in {{year}}", legend: { less: calendar?.less ?? "Less", more: calendar?.more ?? "More" } }} />
                )}
            </motion.div>
            <motion.div className="mt-2 flex flex-wrap gap-2.5" variants={itemVariants}>
                {[...years]
                    .sort((a, b) => Number(b) - Number(a))
                    .map((y) => (
                        <motion.div key={y} whileHover={{ y: -2, scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                            <YearButton year={Number(y)} currentYear={year} onClick={() => setYear(Number(y))} />
                        </motion.div>
                    ))}
            </motion.div>
            {tooltip && (
                <motion.button type="button" ref={tooltipRef} role="status" className="fixed z-50 -translate-x-1/2 whitespace-nowrap rounded px-3 py-1 text-xs shadow-lg" style={{ left: tooltip.left, top: tooltip.top + 10, backgroundColor: theme === "light" ? "#e7000b" : "#ffd230", color: theme === "light" ? "#fff" : "#070713" }} onClick={(e) => e.stopPropagation()} initial={{ opacity: 0, y: 6, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 6, scale: 0.96 }} transition={{ duration: 0.2 }}>
                    {formatBadge(tooltip.count, tooltip.date)}
                </motion.button>
            )}
        </motion.section>
    );
};