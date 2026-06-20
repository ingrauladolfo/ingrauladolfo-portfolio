import type { LanguageContextInterface, ThemeType } from "@/common/interfaces/context";
import type { CertificationItem } from "../../pages";
export interface PdfModalInterface {
    isOpen: boolean; onClose: () => void;
    cert: CertificationItem | null;
    theme: ThemeType;
    lang: LanguageContextInterface['lang'];
}