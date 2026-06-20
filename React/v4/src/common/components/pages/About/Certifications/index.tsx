import { useState } from "react";
import { FaCalendarAlt, FaFilePdf, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import type { CertificationsProps, CertificationItem } from "@/common/interfaces";
import { PdfModal, ButtonPagination } from "@/common/components/shared";
import { isPdfUrl } from "@/common/functions";
import { usePaginationResponsive } from "@/common/hooks";
export const Certifications = ({ sectionTitle, sectionSubtitle, certs, theme, lang }: CertificationsProps) => {
    const safeCerts = certs ?? [];
    const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);
    const { visibleItems: visibleCerts, loadMore, showLess, isExpanded, isMobile } = usePaginationResponsive(safeCerts, 1, 3);
    return (
        <motion.div className="mt-16" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ amount: 0.1 }}>
            <motion.div className="mb-12 text-center" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.5 }}>
                <h4 className="inline-block bg-clip-text text-3xl font-bold md:text-4xl">
                    {sectionTitle}
                </h4>
                <p className={`mt-3 ${isMobile ? "text-base" : "text-lg"} ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                    {sectionSubtitle}
                </p>
                <div className="mx-auto mt-4 h-0.5 w-24 rounded-full bg-linear-to-r from-[#00f0ff] to-[#bd00ff]" />
            </motion.div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {visibleCerts.map((cert, idx) => {
                    const Icon = cert.icon;
                    const hasPdf = isPdfUrl(cert.pdfUrl);
                    const hasUrl = Boolean(cert.pdfUrl && cert.pdfUrl.trim() !== "");
                    return (
                        <motion.div key={`${cert.id}-${idx}`} initial={{ opacity: 0, y: 40, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ amount: 0.2 }} transition={{ duration: 0.55, delay: idx * 0.08 }} whileHover={{ y: -8, scale: 1.02 }} whileTap={{ scale: 0.98 }} onClick={() => setSelectedCert(cert)} className={`group relative cursor-pointer overflow-hidden rounded-2xl p-6 ${theme === "dark" ? "border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10" : "border border-black/10 bg-black/5 backdrop-blur-sm hover:bg-black/10"} hover:shadow-2xl hover:shadow-[#00f0ff]/20`} >
                            <div className="pointer-events-none absolute inset-0 rounded-2xl bg-linear-to-r from-[#00f0ff]/0 via-[#bd00ff]/0 to-[#00f0ff]/0 transition-all duration-500 group-hover:from-[#00f0ff]/30 group-hover:via-[#bd00ff]/30 group-hover:to-[#00f0ff]/0" />

                            <div className="mb-4 flex items-center justify-between">
                                <motion.div whileHover={{ rotate: 10, scale: 1.15 }} transition={{ type: "spring", stiffness: 250 }}>
                                    <Icon className={`text-4xl ${theme === "dark" ? "text-[#00f0ff]" : "text-[#bd00ff]"}`} />
                                </motion.div>
                                <div className="flex items-center gap-2">
                                    {hasPdf ? (
                                        <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${theme === "dark" ? "bg-green-500/10 text-green-400" : "bg-green-500/10 text-green-600"}`} >
                                            <FaFilePdf className="text-[10px]" />
                                            PDF
                                        </span>
                                    ) : hasUrl ? (
                                        <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${theme === "dark" ? "bg-blue-500/10 text-blue-400" : "bg-blue-500/10 text-blue-600"}`} >
                                            <FaExternalLinkAlt className="text-[10px]" />
                                            Web
                                        </span>
                                    ) : (
                                        <span className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-xs font-medium ${theme === "dark" ? "bg-yellow-500/10 text-yellow-400" : "bg-yellow-500/10 text-yellow-600"}`}>
                                            <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
                                            N/A
                                        </span>
                                    )}
                                    <FaCalendarAlt className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} />
                                </div>
                            </div>
                            <h5 className={`mb-1 text-xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                                {cert.title}
                            </h5>
                            <p className={`mb-3 text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                                {cert.issuer}
                            </p>
                            <div className="mt-4 flex items-center justify-between">
                                <span className={`text-xs font-mono ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                                    {cert.date}
                                </span>

                                <span className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 ${theme === "dark" ? "bg-white/10 text-[#00f0ff] hover:bg-white/20" : "bg-black/10 text-[#bd00ff] hover:bg-black/20"}`}>
                                    {hasPdf ? lang === "es" ? "Ver PDF →" : "View PDF →" : hasUrl ? lang === "es" ? "Ver credencial →" : "View credential →" : lang === "es" ? "Ver detalles →" : "View details →"}
                                </span>
                            </div>
                            <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-[#00f0ff] to-[#bd00ff] transition-all duration-500 group-hover:w-full" />
                        </motion.div>
                    );
                })}
            </div>
            <ButtonPagination visibleCount={visibleCerts.length} totalCount={safeCerts.length} isMobile={isMobile} isExpanded={isExpanded} onLoadMore={loadMore} onShowLess={showLess} theme={theme} lang={lang} initial={1} step={3} />
            <motion.p className={`mt-10 text-center text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`} initial={{ opacity: 0, y: 20, }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3, }} transition={{ duration: 0.5, }}>
                {lang === "es" ? "🎓 Siempre aprendiendo — cada certificación representa un nuevo desafío superado." : "🎓 Always learning — every certification represents a new challenge overcome."}
            </motion.p>
            <PdfModal key={selectedCert?.id ?? "closed"} isOpen={!!selectedCert} onClose={() => setSelectedCert(null)} cert={selectedCert} theme={theme} lang={lang} />
        </motion.div>
    );
};