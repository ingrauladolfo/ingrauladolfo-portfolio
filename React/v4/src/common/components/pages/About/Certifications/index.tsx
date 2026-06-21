import { useState } from "react";
import { FaFilePdf, FaExternalLinkAlt, FaGraduationCap, FaClock, FaInfoCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import type { CertificationsProps, CertificationItem } from "@/common/interfaces";
import { PdfModal, ButtonPagination } from "@/common/components/shared";
import { isPdfUrl } from "@/common/functions";
import { usePaginationResponsive } from "@/common/hooks";
const typeColors: Record<string, { bg: string; text: string; border: string }> = { curso: { bg: "bg-purple-600/20", text: "text-purple-700", border: "border-purple-600/40" }, course: { bg: "bg-purple-600/20", text: "text-purple-700", border: "border-purple-600/40" }, certificación: { bg: "bg-emerald-600/20", text: "text-emerald-700", border: "border-emerald-600/40" }, certification: { bg: "bg-emerald-600/20", text: "text-emerald-700", border: "border-emerald-600/40" }, preparación: { bg: "bg-amber-600/20", text: "text-amber-700", border: "border-amber-600/40" }, "prep-course": { bg: "bg-amber-600/20", text: "text-amber-700", border: "border-amber-600/40" } };
const isExpired = (expiryDate?: string) => { if (!expiryDate) return false; const [day, month, year] = expiryDate.split("/"); const date = new Date(`${year}-${month}-${day}`); return date < new Date(); };
export const Certifications = ({ sectionTitle, sectionSubtitle, certs, theme, lang }: CertificationsProps) => {
    const safeCerts = certs ?? [];
    const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
    const { visibleItems: visibleCerts, loadMore, showLess, isExpanded, isMobile } = usePaginationResponsive(safeCerts, 1, 2);
    const handleOpenPdf = (cert: CertificationItem) => { setSelectedCert(cert); };
    const handleOpenWeb = (url: string) => { window.open(url, "_blank", "noopener,noreferrer"); };
    const isDark = theme === "dark";
    return (
        <motion.div className="mt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.1 }}>
            <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5 }}>
                <h4 className="inline-block bg-clip-text text-3xl font-bold md:text-4xl">
                    {sectionTitle}
                </h4>
                <p className={`mt-3 ${isMobile ? "text-base" : "text-lg"} ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                    {sectionSubtitle}
                </p>
                <div className="mx-auto mt-4 h-0.5 w-24 rounded-full bg-linear-to-r from-[#00f0ff] to-[#bd00ff]" />
            </motion.div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-2">
                {visibleCerts.map((cert, idx) => {
                    const Icon = cert.icon;
                    const hasPdf = isPdfUrl(cert.pdfUrl);
                    const hasUrl = Boolean(cert.pdfUrl && cert.pdfUrl.trim() !== "");
                    const expired = isExpired(cert.expiryDate);
                    const typeKey = cert.type.toLowerCase();
                    const typeStyle = typeColors[typeKey] || { bg: "bg-gray-600/20", text: "text-gray-700", border: "border-gray-600/40" };
                    const startLabel = lang === "es" ? "Inicio" : "Start";
                    const finishLabel = lang === "es" ? "Fin" : "End";
                    return (
                        <motion.div key={`${cert.id}-${idx}`} initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.55, delay: idx * 0.08 }} whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.98 }} className={`group relative flex flex-col overflow-hidden rounded-2xl p-8 border transition-all duration-300 hover:shadow-2xl hover:shadow-[#00f0ff]/20 ${isDark ? "border-white/15 bg-[#0f1117]" : "border-gray-300 bg-white"}`}>
                            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-[#00f0ff]/0 via-[#bd00ff]/0 to-[#00f0ff]/0 transition-all duration-500 group-hover:from-[#00f0ff]/10 group-hover:via-[#bd00ff]/10 group-hover:to-[#00f0ff]/0" />
                            {/* Header: Icono + Badges */}
                            <div className="mb-5 flex items-center justify-between">
                                <motion.div whileHover={{ rotate: 10, scale: 1.15 }} transition={{ type: "spring", stiffness: 250 }}>
                                    <Icon className={`text-5xl ${isDark ? "text-[#00f0ff]" : "text-[#0066cc]"}`} />
                                </motion.div>
                                <div className="flex items-center gap-2">
                                    <span className={`rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-wider border ${typeStyle.bg} ${typeStyle.text} ${typeStyle.border}`}>
                                        {cert.type}
                                    </span>

                                    {hasPdf ? (
                                        <button onClick={() => handleOpenPdf(cert)} className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-semibold cursor-pointer transition-all duration-200 hover:scale-105 border ${isDark ? "bg-green-500/20 text-green-400 border-green-500/40 hover:bg-green-500/30" : "bg-green-100 text-green-800 border-green-400 hover:bg-green-200"}`}>
                                            <FaFilePdf className="text-xs" />
                                            PDF
                                        </button>
                                    ) : hasUrl ? (
                                        <button onClick={() => handleOpenWeb(cert.pdfUrl)} className={`flex items-center gap-1.5 rounded-lg px-3 py-1 text-xs font-semibold cursor-pointer transition-all duration-200 hover:scale-105 border ${isDark ? "bg-blue-500/20 text-blue-400 border-blue-500/40 hover:bg-blue-500/30" : "bg-blue-100 text-blue-800 border-blue-400 hover:bg-blue-200"}`}>
                                            <FaExternalLinkAlt className="text-xs" />
                                            Web
                                        </button>
                                    ) : null}
                                </div>
                            </div>

                            {/* Título e Issuer */}
                            <h5 className={`mb-2 text-2xl font-bold leading-tight ${isDark ? "text-white" : "text-gray-900"}`}>
                                {cert.title}
                            </h5>
                            <p className={`mb-6 text-sm font-medium ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                                {cert.issuer}
                            </p>
                            {/* Bloque de fechas del curso */}
                            <div className={`mb-4 rounded-xl p-4 border ${isDark ? "bg-white/5 border-white/15" : "bg-gray-50 border-gray-200"}`}>
                                <div className="mb-3 flex items-center gap-2">
                                    <FaGraduationCap className={`text-sm ${isDark ? "text-[#00f0ff]" : "text-[#0066cc]"}`} />
                                    <span className={`text-xs font-bold uppercase tracking-wider ${isDark ? "text-[#00f0ff]" : "text-[#0066cc]"}`}>
                                        {lang === "es" ? "Duración del curso" : "Course duration"}
                                    </span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="flex-1">
                                        <span className={`block text-[10px] font-semibold uppercase tracking-wider mb-1 ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                                            {startLabel}
                                        </span>
                                        <span className={`text-base font-mono font-semibold ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                                            {cert.startDate}
                                        </span>
                                    </div>
                                    {cert.finishDate && (
                                        <>
                                            <div className={`h-8 w-px ${isDark ? "bg-white/25" : "bg-gray-300"}`} />
                                            <div className="flex-1">
                                                <span className={`block text-[10px] font-semibold uppercase tracking-wider mb-1 ${isDark ? "text-gray-500" : "text-gray-500"}`}>
                                                    {finishLabel}
                                                </span>
                                                <span className={`text-base font-mono font-semibold ${isDark ? "text-gray-200" : "text-gray-800"}`}>
                                                    {cert.finishDate}
                                                </span>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            {/* Vigencia */}
                            {cert.expiryDate && (
                                <div className={`mb-4 flex items-center gap-2 rounded-lg px-3 py-2 border ${expired ? (isDark ? "bg-red-500/15 border-red-500/30" : "bg-red-50 border-red-300") : (isDark ? "bg-green-500/15 border-green-500/30" : "bg-green-50 border-green-300")}`}>
                                    <FaClock className={`text-xs ${expired ? (isDark ? "text-red-400" : "text-red-600") : (isDark ? "text-green-400" : "text-green-600")}`} />
                                    <span className={`text-xs font-medium ${expired ? (isDark ? "text-red-400" : "text-red-600") : (isDark ? "text-green-400" : "text-green-600")}`}>
                                        {expired ? (lang === "es" ? "Vencida el " : "Expired on ") : (lang === "es" ? "Vigente hasta " : "Valid until ")}
                                        {cert.expiryDate}
                                    </span>
                                </div>
                            )}
                            <div className="flex-1" />
                            {/* Footer: Mensaje instructivo */}
                            <div className={`flex items-center gap-2 pt-4 mt-2 border-t border-dashed ${isDark ? "border-white/15" : "border-gray-300"}`}>
                                <FaInfoCircle className={`text-xs shrink-0 ${isDark ? "text-gray-500" : "text-gray-500"}`} />
                                <span className={`text-xs italic ${isDark ? "text-white" : "text-black"}`}>
                                    {lang === "es" ? "Para descargar el PDF o ver el sitio web, haz clic en el botón correspondiente" : "To download the PDF or view the website, click on the corresponding button"}
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#00f0ff] to-[#bd00ff] transition-all duration-500 group-hover:w-full" />
                        </motion.div>
                    );
                })}
            </div>
            <ButtonPagination visibleCount={visibleCerts.length} totalCount={safeCerts.length} isMobile={isMobile} isExpanded={isExpanded} onLoadMore={loadMore} onShowLess={showLess} theme={theme} lang={lang} initial={1} step={2} />
            <motion.p className={`mt-10 text-center text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.5 }}>
                {lang === "es" ? "🎓 Siempre aprendiendo — cada certificación representa un nuevo desafío superado." : "🎓 Always learning — every certification represents a new challenge overcome."}
            </motion.p>
            <PdfModal key={selectedCert?.id ?? "closed"} isOpen={!!selectedCert} onClose={() => setSelectedCert(null)} cert={selectedCert} theme={theme} lang={lang} />
        </motion.div>
    );
};