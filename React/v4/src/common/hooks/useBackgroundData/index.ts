import { educationBackgroundData, workBackgroundData } from "@/assets/data";
import { useLanguage } from "@/common/context";
export const useBackgroundData = () => {
    const { lang } = useLanguage();
    const data = { education: { title: lang === 'es' ? 'Formación académica' : 'Academic background', items: educationBackgroundData, color: 'blue' }, work: { title: lang === 'es' ? 'Trayectoria profesional' : 'Professional background', items: workBackgroundData, color: 'green' }, };
    return { data };
};