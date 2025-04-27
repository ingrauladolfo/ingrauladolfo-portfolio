import projectsData from "@/assets/data/projectsData";
import { FaGithub, FaLink, FaPlus,FaMinus } from "react-icons/fa6";
import usePagination from "@/hooks/usePagination";

const Card = () => {
  const { visibleItems, loadMore, showLess, showButton, isExpanded } = usePagination(projectsData, 2);

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
        {visibleItems.map((c, index) => (
          <div className="max-w-sm bg-white border border-red-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-red-700" key={index}>
            <a href={c.link}>
              <img className="rounded-t-lg w-full h-48 object-cover" src={c.image} alt={c.imageAlt} />
            </a>
            <div className="px-6 py-4">
              <span className={`text-center flex gap-x-2 mt-2 mb-2 rounded-full text-x py-1 px-2 bg-[#1e1e1e] text-white dark:bg-white dark:text-[#1e1e1e]`}>
                {c.title}
              </span>
              <h4 className="text-lg mt-2 text-red-600 dark:text-yellow-300">
                {c.yearOfDeveloped}
              </h4>
              <h5 className="text-stretch mt-2 text-gray-700 dark:text-gray-400">
                {c.description}
              </h5>
            </div>
            <div className="px-6 pt-4 pb-2">
              {c.tags?.map((tag, tagIndex) => (
                <span key={tagIndex} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                  #{tag}
                </span>
              ))}
            </div>
            <footer className="flex items-center justify-center mt-3 mb-3 gap-x-4">
              {c.github && (
                <a
                  href={c.github}
                  role="link"
                  target={'_blank'}
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border dark:border-red-800 border-blue-800 hover:bg-gradient-to-r from-[#b84242] to-[#d20e0e] group max-w-fit rounded-xl focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2"
                >
                  <FaGithub className="size-6" />
                  GitHub
                </a>
              )}
              {c.link && (
                <a
                  href={c.link}
                  role="link"
                  target={'_blank'}
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 space-x-2 text-base text-white transition bg-gray-800 border dark:border-red-800 border-blue-800 hover:bg-gradient-to-r from-[#b84242] to-[#d20e0e] group max-w-fit rounded-xl focus:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2"
                >
                  <FaLink className="size-6" />
                  Demo
                </a>
              )}
            </footer>
          </div>
        ))}
      </div>

      {showButton && (
        <div className="flex justify-center mt-8">
          <button
            onClick={isExpanded ? showLess : loadMore}
            className="bg-gradient-to-r from-[#b84242] to-[#d20e0e] text-white px-6 py-3 rounded-full hover:from-[#d20e0e] hover:to-[#b84242] transition-all duration-300 font-semibold flex items-center gap-2"
          >
            {isExpanded ? 'Mostrar menos' : 'Mostrar más'}
            {isExpanded ? <FaMinus /> : <FaPlus />}
          </button>
        </div>
      )}
    </div>
  );
};

export default Card;