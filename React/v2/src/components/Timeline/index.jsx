// src/components/Timeline.jsx
import React from 'react';
import { FaMinus, FaPlus } from "react-icons/fa";
import renderSection from "@/assets/functions/renderSection";
import usePagination from "@/hooks/usePagination";
import useCurrentYear from "@/hooks/useCurrentYear";
import { getDateRange, getWorkHere, getEducation, getReasonLeaving } from "@/assets/functions/getsTimeline";

const Timeline = ({ data, isDark }) => {
  const {
    visibleItems: eduItems,
    loadMore: loadMoreEdu,
    showLess: showLessEdu,
    showButton: showEduButton,
    isExpanded: isEduExpanded
  } = usePagination(data.education.items, 1);

  const {
    visibleItems: workItems,
    loadMore: loadMoreWork,
    showLess: showLessWork,
    showButton: showWorkButton,
    isExpanded: isWorkExpanded
  } = usePagination(data.work.items, 2);

  const getColor = (color) => ({
    blue: 'bg-blue-500',
    green: 'bg-green-500'
  }[color] || 'bg-gray-500');

  const getCurrentDateRange = (start) => useCurrentYear(start);
  const handleDateRange = (start, end) => getDateRange(getCurrentDateRange, start, end, isDark);

  const btnTextClass = isDark ? 'text-purple-300 hover:text-purple-200' : 'text-purple-500 hover:text-purple-400';

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${isDark ? 'text-white' : 'text-gray-900'}`}>
      {[data.education, data.work].map(section => {
        const isWork = section === data.work;
        const items       = isWork ? workItems       : eduItems;
        const showButton  = isWork ? showWorkButton  : showEduButton;
        const isExpanded  = isWork ? isWorkExpanded  : isEduExpanded;
        const loadMore    = isWork ? loadMoreWork    : loadMoreEdu;
        const showLess    = isWork ? showLessWork    : showLessEdu;
        const orderClass  = isWork ? 'md:order-2'     : 'md:order-1';
        const sectionFunc = isWork ? getWorkHere      : getEducation;

        const ButtonIcon = isExpanded ? FaMinus : FaPlus;
        const buttonText = isExpanded ? 'Mostrar menos' : 'Mostrar más';
        const onClick    = () => isExpanded ? showLess() : loadMore();

        return (
          <div key={section.title} className={orderClass}>
            {renderSection(
              { ...section, items },
              getWorkHere,
              handleDateRange,
              getColor,
              sectionFunc,
              getReasonLeaving,
              isDark
            )}

            {showButton && (
              <button
                onClick={onClick}
                className={`cursor-pointer ml-12 py-3 px-4 flex items-center gap-3 ${btnTextClass} transition-colors rounded-lg`}
              >
                <ButtonIcon className="text-lg" />
                <span className="text-sm font-medium">{buttonText}</span>
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Timeline;
