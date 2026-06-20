import type { IconType } from "react-icons";
export type CertificationItem = {
    id: number | string;
    title: string;
    issuer: string;
    date: string;
    pdfUrl?: string;
    icon: IconType;
};