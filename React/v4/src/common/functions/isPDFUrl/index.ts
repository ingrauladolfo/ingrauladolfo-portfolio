/* ═══════════════════════════════════════════════════════════
   UTILIDAD: detecta si una URL apunta a un PDF
   ═══════════════════════════════════════════════════════════ */
export const isPdfUrl = (url?: string): boolean => {
    if (!url || url.trim() === "") return false;
    const lower = url.toLowerCase().trim();
    return (
        lower.endsWith(".pdf") ||
        lower.includes(".pdf?") ||
        (lower.includes("/download?") && lower.includes("pdf"))
    );
};