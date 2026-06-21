import type { IconType } from "react-icons";
export type CertificationItem = {
    id: number;
    title: string;
    issuer: string;
    startDate: string;           // ← fecha de inicio
    finishDate?: string;         // ← fecha de finalización (opcional)
    expiryDate?: string;         // ← NUEVO: fecha de vencimiento (opcional)
    type: string;     // ← NUEVO: tipo
    pdfUrl: string;
    icon: IconType;
};