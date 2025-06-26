// src/components/Stack/Stack.jsx
import React, { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import SKILLS from '@/assets/data/SkillsData';
import StackImage from './StackImage';
import { FaGear } from 'react-icons/fa6';
const Stack = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  return (
    <section className="py-1 w-full mx-auto lg:w-[740px] pb-32">
      <div className={`h-full mt-2 max-w-7xl mx-auto px-4 py-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
        <h2 className="flex items-center font-semibold gap-x-8 text-3xl mb-8 text-center">
          <FaGear size={18} className={isDark ? 'text-white' : 'text-gray-900'} />
          Stack Tecnológico
        </h2>
        <div className="h-fit grid grid-cols-3 md:grid-cols-4 xl:grid-cols-6 w-full gap-4">
          {SKILLS.map(skill => (<StackImage key={skill.name} skill={skill} isDark={isDark} />))}
        </div>
      </div>
    </section>
  );
};

export default Stack;
