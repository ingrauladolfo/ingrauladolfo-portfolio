import type { LanguageContextInterface, ThemeType } from "@/common/interfaces/context";
import type { CertificationItem } from "../CertificationItem";
export type CertificationsProps = {
    sectionTitle: string;
    sectionSubtitle: string;
    certs: CertificationItem[];
    theme: ThemeType;
    lang: LanguageContextInterface['lang'];
};