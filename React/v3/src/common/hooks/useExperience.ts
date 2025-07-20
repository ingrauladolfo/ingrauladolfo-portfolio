import { useState } from "react";
import { educationExperienceData } from "../../assets/data/pages/Experience/educationExperienceData";
import { useLanguage } from "../context";
import { workExperienceData } from "../../assets/data/pages/Experience/workExperienceData";

const useExperienceData = () => {
    const translateTitle={
        education:{
            es:'Educación',
            en:'Education'
        },
        work:{
            es:'Profesional',
            en:'Professional'
        }
    }
    const {lang} = useLanguage();
  const [data] = useState({
    education: {
      title: translateTitle.education[lang],
      items: educationExperienceData,
      color: 'blue'
    },
    work: {
      title: translateTitle.work[lang],
      items: workExperienceData,
      color: 'green'
    }
  });
  return { data };
};

export{ useExperienceData};