// src/components/Stack/StackImage.jsx
import React, { useContext } from 'react';
import useIntersectionObserver from "@/hooks/useIntersectionObserver";
import { ThemeContext } from '@/context/ThemeContext';
const StackImage = ({ skill }) => {
  const { isVisible, elementRef } = useIntersectionObserver();
  const { theme } = useContext(ThemeContext);
  const isDark = theme === 'dark';
  return (
    <div className="flex gap-4 h-fit transition-all" key={skill.name}>
      <span className="flex flex-col gap-2 items-center">
        <img ref={elementRef} className={`hover:scale-95 hover:shadow-md rounded-3xl transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} height="150" width="150" src={isVisible ? skill.link : ''} alt={skill.alt} loading="lazy" />
        <h3 className={isDark ? 'text-white' : 'text-gray-900'}>
          {skill.name}
        </h3>
      </span>
    </div>
  );
};

export default StackImage;
