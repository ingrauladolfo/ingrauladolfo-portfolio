import { isPdfUrl } from "@/common/functions";
import { useLayoutEffect, useRef } from "react";
import type { PdfModalInterface } from '@/common/interfaces'
import { FaFilePdf, FaX } from "react-icons/fa6";
import { modalKeyFrames } from "@/assets/styles";
import { FaExternalLinkAlt } from "react-icons/fa";
/* ═══════════════════════════════════════════════════════════
   MODAL: Solo se cierra con el botón FaX
   ═══════════════════════════════════════════════════════════ */
export const PdfModal = ({ isOpen, onClose, cert, theme, lang, }: PdfModalInterface) => {
    const modalRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!isOpen) return;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    if (!isOpen || !cert) return null;

    const hasPdf = isPdfUrl(cert.pdfUrl);
    const hasUrl = cert.pdfUrl && cert.pdfUrl.trim() !== "";

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6" style={{ animation: "fadeIn 0.3s ease" }} >
            {/* Backdrop — sin onClick para evitar cierre al hacer click fuera */}
            <div className={`absolute inset-0 backdrop-blur-sm transition-opacity ${theme === "dark" ? "bg-black/70" : "bg-white/40"}`} />
            {/* Modal Container — sin onClick para evitar cierre */}
            <div ref={modalRef} tabIndex={-1} className={`relative w-full max-w-5xl max-h-[90vh] flex flex-col rounded-2xl shadow-2xl overflow-hidden outline-none ${theme === "dark" ? "bg-[#0f0f23] border border-gray-700" : "bg-white border border-gray-200"}`} style={{ animation: "slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)" }}>
                {/* Header — SOLO el botón FaX cierra el modal */}
                <div className={`flex items-center justify-between px-6 py-4 border-b ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`}>
                    <div className="flex items-center gap-3 min-w-0">
                        <div className={`w-2 h-2 rounded-full shrink-0 ${theme === "dark" ? "bg-[#00f0ff]" : "bg-[#0066cc]"}`} />
                        <h3 className={`text-lg font-semibold truncate ${theme === "dark" ? "text-white" : "text-[#070713]"}`} title={cert.title} >
                            {cert.title}
                        </h3>
                    </div>
                    <button onClick={onClose} className={`p-2 rounded-lg transition-colors ${theme === "dark" ? "text-gray-400 hover:text-white hover:bg-gray-800" : "text-gray-500 hover:text-gray-800 hover:bg-gray-100"}`} aria-label="Close">
                        <FaX className="text-xl" />
                    </button>
                </div>
                {/* ═══ CONTENIDO ═══ */}
                {hasPdf ? (
                    /* ─── PDF VÁLIDO (local o remoto) ─── */
                    <>
                        <div className="flex-1 overflow-hidden bg-[#1a1a2e]" style={{ minHeight: "60vh" }}>
                            <iframe src={cert.pdfUrl} title={cert.title} className="w-full h-full" style={{ minHeight: "60vh", border: "none" }} />
                        </div>
                        <div className={`flex items-center justify-between px-6 py-2 text-xs border-t ${theme === "dark" ? "border-gray-700 text-gray-500" : "border-gray-200 text-gray-400"}`}>
                            <span>
                                {lang === "es" ? "Usa el botón X para cerrar" : "Use the X button to close"}
                            </span>
                            <a href={cert.pdfUrl} download className={`hover:underline ${theme === "dark" ? "text-[#00f0ff]" : "text-[#0066cc]"}`}>
                                {lang === "es" ? "Descargar PDF" : "Download PDF"}
                            </a>
                        </div>
                    </>
                ) : hasUrl ? (
                    /* ─── URL VÁLIDA PERO NO ES PDF (página de verificación) ─── */
                    <div className={`flex-1 flex flex-col items-center justify-center px-8 py-16 ${theme === "dark" ? "bg-[#0a0a1a]" : "bg-gray-50"}`} style={{ minHeight: "40vh" }}>
                        <div className={`mb-6 p-6 rounded-full ${theme === "dark" ? "bg-blue-500/10" : "bg-blue-500/10"}`}>
                            <FaExternalLinkAlt className={`text-4xl ${theme === "dark" ? "text-[#00f0ff]" : "text-[#0066cc]"}`} />
                        </div>
                        <h4 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`} >
                            {lang === "es" ? "Credencial en plataforma externa" : "Credential on external platform"}
                        </h4>
                        <p className={`text-center max-w-md mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                            {lang === "es" ? "Este certificado está alojado en la plataforma oficial del emisor. Puedes verificarlo directamente en su sitio web." : "This certificate is hosted on the official issuer's platform. You can verify it directly on their website."}
                        </p>
                        <a href={cert.pdfUrl} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all duration-300 ${theme === "dark" ? "bg-[#00f0ff]/10 text-[#00f0ff] border border-[#00f0ff]/30 hover:bg-[#00f0ff]/20" : "bg-[#0066cc]/10 text-[#0066cc] border border-[#0066cc]/30 hover:bg-[#0066cc]/20"}`}>
                            <FaExternalLinkAlt className="text-sm" />
                            {lang === "es" ? "Ver credencial en sitio oficial →" : "View credential on official site →"}
                        </a>
                    </div>
                ) : (
                    /* ─── SIN URL (no disponible) ─── */
                    <div className={`flex-1 flex flex-col items-center justify-center px-8 py-16 ${theme === "dark" ? "bg-[#0a0a1a]" : "bg-gray-50"}`} style={{ minHeight: "40vh" }}>
                        <div className={`mb-6 p-6 rounded-full ${theme === "dark" ? "bg-gray-800/50" : "bg-gray-200/50"}`}>
                            <FaFilePdf className={`text-5xl ${theme === "dark" ? "text-gray-600" : "text-gray-400"}`} />
                        </div>
                        <h4 className={`text-xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                            {lang === "es" ? "Certificado no disponible" : "Certificate not available"}
                        </h4>
                        <p className={`text-center max-w-md ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                            {lang === "es" ? "No se ha proporcionado un enlace para este certificado." : "No link has been provided for this certificate."}
                        </p>
                    </div>
                )}
            </div>
            <style dangerouslySetInnerHTML={{ __html: modalKeyFrames }} />
        </div>
    );
};
