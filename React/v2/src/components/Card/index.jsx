// src/components/Card.jsx
import { FaPlus, FaMinus } from "react-icons/fa";
import usePagination from "@/hooks/usePagination";
import { projectsData } from "@/assets/data/projectsData";
import { CardItem } from "@/hooks/useCardItem";
const Card = () => {
  const { visibleItems, loadMore, showLess, showButton, isExpanded } =    usePagination(projectsData, 2);
  return (
    <div className="p-4 w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {visibleItems.map((project, index) => (
          <CardItem project={project} key={index} />
        ))}
      </div>
      {showButton && (
        <div className="flex justify-center mt-8">
          <button
            onClick={isExpanded ? showLess : loadMore}
            className=" flex items-center gap-2 px-6 py-3 font-semibold text-white bg-gradient-to-r from-[#b84242] to-[#d20e0e] rounded-full hover:from-[#d20e0e] hover:to-[#b84242] transition-all duration-300"
          >
            {isExpanded ? <FaMinus /> : <FaPlus />} {isExpanded ? "Mostrar menos" : "Mostrar más"}
            
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;
