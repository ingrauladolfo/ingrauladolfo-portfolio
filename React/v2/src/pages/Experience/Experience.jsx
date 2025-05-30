// src/components/Experience.jsx
import React, { useContext } from 'react';
import Timeline from "@/components/Timeline";
import useExperienceData from "@/hooks/useExperience";
import { FaMedal } from "react-icons/fa";
import { ThemeContext } from "@/context/ThemeContext";

const Experience = () => {
  const { data } = useExperienceData();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <section className="py-1 w-full mx-auto lg:w-[740px] pb-32">
      <div className={`max-w-7xl mx-auto px-4 py-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <h2 className="flex items-center font-semibold gap-x-8 text-3xl mb-8 text-center">
          <FaMedal size={18} className={isDark ? 'text-white' : 'text-gray-900'} />
          Trayectoria y Estudios
        </h2>
        <Timeline data={data} isDark={isDark} />
      </div>
    </section>
  );
};

export default Experience;
