import { getFormatLongDate } from "@/assets/functions/getFormatLongDate";
import { tagColorMap, tagDisplayMap, tagIconMap } from "@/assets/mappers/projectMappers";
import { FaGithub, FaLink } from "react-icons/fa";
export const CardItem = ({ project }) => {
  const longDate = getFormatLongDate(project.year);
  return (
    <div className="max-w-sm bg-white border border-red-200 shadow-sm dark:bg-gray-800 dark:border-red-700" key={project.id}>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        {project.image.map(i => (<img key={i.id} className="rounded-t-lg w-full h-48 object-cover" src={i.href} alt={i.alt} />))}
      </a>
      <div className="px-6 py-4">
        <span className="flex justify-center gap-1 gap-x-2 mt-2 mb-2 rounded-full text-center text-sm py-1 px-2 bg-[#1e1e1e] dark:bg-yellow-700 dark:text-[#ffffff]">
          {project.title} - {project.typeProject}
        </span>
        <h4 className="text-lg mt-2 text-red-600 dark:text-yellow-300">
          Se desarrolló el {longDate}
        </h4>
        <p className="mt-2 dark:text-green-500 text-green-700">
          {project.description}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2 flex flex-wrap gap-2">
        {project.tags?.map((tag, tagIndex) => {
          const Icon = tagIconMap[tag];
          const color = tagColorMap[tag] || 'currentColor';
          const label = tagDisplayMap[tag] || tag;
          return (
            <span
              key={tagIndex}
              className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1 text-sm text-gray-800 dark:text-gray-300"
            >
              {Icon && (
                <Icon
                  className="w-4 h-4"
                  style={{ color }}
                />
              )}
              <span>{label}</span>
            </span>
          );
        })}
      </div>
      <footer className="flex flex-wrap justify-center gap-2 mt-3 mb-3">
        {project.links?.map(linkObj => {
          const elems = [];
          if (linkObj.github) { elems.push(<a key={`${linkObj.id}-github`} href={linkObj.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 text-sm text-white bg-gray-800 border border-blue-800 rounded-xl max-w-fit transition hover:bg-gradient-to-r from-[#b84242] to-[#d20e0e]"><FaGithub /> GitHub</a>); }
          if (linkObj.website) {
            let label;
            if (linkObj.id === 1) { label = 'Sitio Web oficial'; }
            if (linkObj.id >= 2) { label = `Sitio web de respaldo ${linkObj.id}`; }
            elems.push(
              <a
                key={`${linkObj.id}-website`}
                href={linkObj.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2 py-1 text-sm text-white bg-gray-800 border border-blue-800 rounded-xl max-w-fit transition hover:bg-gradient-to-r from-[#b84242] to-[#d20e0e]"
              >
                <FaLink /> {label}
              </a>
            );
          }

          return elems;
        })}
      </footer>

    </div>
  );
};