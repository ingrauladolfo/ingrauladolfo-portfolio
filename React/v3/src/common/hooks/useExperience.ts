
import educationExperienceData from "../../assets/data/pages/Experience/educationExperienceData";
import workExperienceData from "../../assets/data/pages/Experience/workExperienceData";
import { useLanguage } from "../context";

const useExperienceData = () => {
  const { lang } = useLanguage();
  const data = { education: { title: lang === 'es' ? 'Educación' : 'Education', items: educationExperienceData, color: 'blue' }, work: { title: lang === 'es' ? 'Profesional' : 'Professional', items: workExperienceData, color: 'green' }, };
  return { data };
};

export { useExperienceData };
