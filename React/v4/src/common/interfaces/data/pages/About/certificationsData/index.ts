import type { IconType } from "react-icons";
export interface certificationsDataInterface {
    certificationsId: number;
    certificationsTitle: { es: string; en: string };
    certificationsBuildingName: { es: string; en: string };
    certificationsStartDate: { es: string; en: string };           // ← ahora string simple (ej: "2024-01-15")
    certificationsFinishDate?: { es: string; en: string };         // ← ahora string simple (ej: "2024-03-20")
    certificationsExpiryDate?: { es: string; en: string };          // ← NUEVO: fecha de vencimiento (opcional)
    certificationsType: { es: string; en: string };       // ← NUEVO: tipo de certificación
    certificationsPdfUrl: string;
    certificationsIcon: IconType;
}