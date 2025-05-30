// src/components/Projects/Projects.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import Card from '@/components/Card';
import { FaFolder } from 'react-icons/fa';

const Projects = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';

  return (
    <section className="py-1 w-full mx-auto lg:w-[740px] pb-32">
      <div className={`max-w-7xl mx-auto px-4 py-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <h2 className="flex items-center font-semibold gap-x-8 text-3xl mb-8 text-center">
          <FaFolder size={18} className={isDark ? 'text-white' : 'text-gray-900'} />
          Proyectos
        </h2>
        <Card isDark={isDark} />
      </div>
    </section>
  );
};

export default Projects;
