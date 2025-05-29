import { getFormatLongDate } from "@/assets/functions/getFormatLongDate";
import { tagColorMap, tagDisplayMap, tagIconMap } from "@/assets/mappers/projectMappers";
import { FaGithub, FaLink, FaTimes } from "react-icons/fa";
import { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

export const CardItem = ({ project }) => {
  const longDate = getFormatLongDate(project.year);
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);
  useEffect(() => { if (open) { dialogRef.current.showModal(); } else { dialogRef.current.close(); } }, [open]);
  const handleOpen = () => { setOpen(true); };
  const handleClose = () => {
    setOpen(false);
    setCurrentImageId(images[0].id);
  };
  const images = project.image.images.sort((a, b) => a.id - b.id);
  const [currentImageId, setCurrentImageId] = useState(images[0].id);

  const handlePrev = () => {
    const currentIndex = images.findIndex(i => i.id === currentImageId);
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImageId(images[prevIndex].id);
  };
  const handleNext = () => {
    const currentIndex = images.findIndex(i => i.id === currentImageId);
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImageId(images[nextIndex].id);
  };

  const handleDotClick = id => {
    const index = images.findIndex(image => image.id === id);
    setCurrentImageId(images[index].id);
  };
  return (
    <div className="max-w-sm bg-white border border-red-200 shadow-sm dark:bg-gray-800 dark:border-red-700" key={project.id}>
      <a onClick={handleOpen} className="cursor-pointer">
        <img className="rounded-t-lg w-full h-48 object-cover" src={project.image.cover.href} alt={project.image.cover.alt} />
      </a>
      <dialog title={`Carrusel de imágenes de ${project.title}`} ref={dialogRef} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-4/5 lg:w-3/4 xl:w-2/3 h-screen max-w-screen-lg p-0 rounded-lg shadow-lg" onCancel={handleClose}>
        <div className="flex justify-between items-center p-2 bg-gray-100 dark:bg-gray-700 border-b border-gray-300 dark:border-gray-600">
          <h2 className="text-xl font-bold text-center w-full">
            Carrusel de imágenes de
            <span className="block">{project.title}</span>
          </h2>
          <button onClick={handleClose} className="px-2 py-1 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded"><FaTimes /></button>
        </div>
        <div className="p-4">
          <div className="carousel relative overflow-y-auto h-screen">
            {images.map((i, index) => (
              <img key={index} src={i.href} alt={i.alt} className={`w-full h-auto ${i.id === currentImageId ? 'block' : 'hidden'}`} />
            ))}
            <button onClick={handlePrev} className="fixed top-1/2 -translate-y-1/2 left-4 z-10 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-2">
              <FaChevronLeft className="text-red-500" />
            </button>
            <button onClick={handleNext} className="fixed top-1/2 -translate-y-1/2 right-4 z-10 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full p-2">
              <FaChevronRight className="text-red-500" />
            </button>
            <div className="flex justify-center gap-2 mt-2 flex-row">
              {images.map(image => (
                <button key={image.id} onClick={() => handleDotClick(image.id)} className={`w-2 h-2 rounded-full ${image.id === currentImageId ? 'bg-gray-600' : 'bg-gray-300'}`}></button>
              ))}
            </div>
          </div>
        </div>
      </dialog>
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
            <span key={tagIndex} className="flex items-center gap-1 bg-gray-100 dark:bg-gray-700 rounded-full px-2 py-1 text-sm text-gray-800 dark:text-gray-300">
              {Icon && (<Icon className="w-4 h-4" style={{ color }} />)}
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
              <a key={`${linkObj.id}-website`} href={linkObj.website} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 text-sm text-white bg-gray-800 border border-blue-800 rounded-xl max-w-fit transition hover:bg-gradient-to-r from-[#b84242] to-[#d20e0e]">
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