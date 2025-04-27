// Timeline.jsx
import { FaMinus, FaPlus } from "react-icons/fa";
import renderSection from "@/assets/functions/renderSection";
import usePagination from "@/hooks/usePagination";
import useCurrentYear from "@/hooks/useCurrentYear";
import { getDateRange, getWorkHere, getEducation, getReasonLeaving } from "@/assets/functions/getsTimeline";

const Timeline = ({ data }) => {
    const { visibleItems: eduItems, loadMore: loadMoreEdu, showLess: showLessEdu, showButton: showEduButton, isExpanded: isEduExpanded } = usePagination(data.education.items, 1);
    const { visibleItems: workItems, loadMore: loadMoreWork, showLess: showLessWork, showButton: showWorkButton, isExpanded: isWorkExpanded } = usePagination(data.work.items, 2);
    
    const getColor = (color) => { 
        const colors = { blue: 'bg-blue-500', green: 'bg-green-500' }; 
        return colors[color] || 'bg-gray-500'; 
    };
    
    const getCurrentDateRange = (start) => useCurrentYear(start);
    const handleDateRange = (start, end) => getDateRange(getCurrentDateRange, start, end);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[data.education, data.work].map(section => {
                const isWorkSection = section === data.work;
                
                // Asignaciones condicionales
                let items = eduItems;
                let showButton = showEduButton;
                let isExpanded = isEduExpanded;
                let loadMore = loadMoreEdu;
                let showLess = showLessEdu;
                let orderClass = 'md:order-1';
                let sectionFunction = getEducation;
                let ButtonIcon = FaPlus;
                let buttonText = 'Mostrar más';

                if (isWorkSection) {
                    items = workItems;
                    showButton = showWorkButton;
                    isExpanded = isWorkExpanded;
                    loadMore = loadMoreWork;
                    showLess = showLessWork;
                    orderClass = 'md:order-2';
                    sectionFunction = getWorkHere;
                }

                if (isExpanded) {
                    ButtonIcon = FaMinus;
                    buttonText = 'Mostrar menos';
                }

                const handleClick = () => {
                    if (isExpanded) {
                        showLess();
                    } else {
                        loadMore();
                    }
                };

                return (
                    <div key={section.title} className={orderClass}>
                        {renderSection(
                            { ...section, items },
                            getWorkHere,
                            handleDateRange,
                            getColor,
                            sectionFunction,
                            getReasonLeaving
                        )}

                        {showButton && (
                            <button
                                onClick={handleClick}
                                className="ml-12 py-3 px-4 flex items-center gap-3 text-purple-500 hover:text-purple-400 transition-colors rounded-lg"
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