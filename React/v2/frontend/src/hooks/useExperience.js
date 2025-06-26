// useExperienceData.js
import educationArrayData from '@/assets/data/educationArrayData';
import workArrayData from '@/assets/data/workArrayData';
import { useState } from 'react';

const useExperienceData = () => {
  const [data] = useState({
    education: {
      title: "¿Dónde estudié?",
      items: educationArrayData,
      color: 'blue'
    },
    work: {
      title: "Mi experiencia profesional",
      items: workArrayData,
      color: 'green'
    }
  });
  console.log('data', data)
  return { data };
};

export default useExperienceData;