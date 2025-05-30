// src/components/CardItem.jsx
import React, { useState, useRef, useEffect } from "react";
import { FaGithub, FaLink, FaTimes } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { getFormatLongDate } from "@/assets/functions/getFormatLongDate";
import { tagColorMap, tagDisplayMap, tagIconMap } from "@/assets/mappers/projectMappers";

export const CardItem = ({ project, isDark }) => {
  const longDate = getFormatLongDate(project.year);
  const [open, setOpen] = useState(false);
  const dialogRef = useRef(null);

  useEffect(() => {
    open ? dialogRef.current.showModal() : dialogRef.current.close();
  }, [open]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setCurrentImageId(images[0].id);
  };

  const images = [...project.image.images].sort((a, b) => a.id - b.id);
  const [currentImageId, setCurrentImageId] = useState(images[0].id);

  const handlePrev = () => {
    const idx = images.findIndex(i => i.id === currentImageId);
    setCurrentImageId(images[(idx - 1 + images.length) % images.length].id);
  };
  const handleNext = () => {
    const idx = images.findIndex(i => i.id === currentImageId);
    setCurrentImageId(images[(idx + 1) % images.length].id);
  };
  const handleDotClick = id => setCurrentImageId(id);

  const bgClass = isDark ? "bg-gray-800 border-gray-700" : "bg-white border-red-200";
  const textBase = isDark ? "text-gray-200" : "text-gray-900";

  return (
    <div className={`max-w-sm border shadow-sm ${bgClass}`}>
      <a onClick={handleOpen} className="cursor-pointer block">
        <img
          className="rounded-t-lg w-full h-48 object-cover"
          src={project.image.cover.href}
          alt={project.image.cover.alt}
        />
      </a>

      <dialog
        ref={dialogRef}
        title={`Carrusel de imágenes de ${project.title}`}
        className="fixed inset-0 m-auto w-full md:w-4/5 lg:w-3/4 xl:w-2/3 h-screen max-w-screen-lg p-0 rounded-lg shadow-lg"
        onCancel={handleClose}
      >
        <div className={`flex justify-between items-center p-2 ${isDark ? "bg-gray-700 border-b border-gray-600" : "bg-gray-100 border-b border-gray-300"}`}>
          <h2 className={`text-xl font-bold w-full text-center ${textBase}`}>
            Carrusel de imágenes de
            <span className="block">{project.title}</span>
          </h2>
          <button
            onClick={handleClose}
            className={`${textBase} px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-600`}
          >
            <FaTimes />
          </button>
        </div>
        <div className="relative h-full overflow-y-auto">
          {images.map((i) => (
            <img
              key={i.id}
              src={i.href}
              alt={i.alt}
              className={`w-full h-auto ${i.id === currentImageId ? "block" : "hidden"}`}
            />
          ))}
          <button
            onClick={handlePrev}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <FaChevronLeft className={isDark ? "text-gray-200" : "text-gray-900"} />
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600"
          >
            <FaChevronRight className={isDark ? "text-gray-200" : "text-gray-900"} />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((img) => (
              <button
                key={img.id}
                onClick={() => handleDotClick(img.id)}
                className={`w-2 h-2 rounded-full ${img.id === currentImageId ? (isDark ? "bg-gray-400" : "bg-gray-700") : "bg-gray-300"}`}
              />
            ))}
          </div>
        </div>
      </dialog>

      <div className={`px-6 py-4 ${textBase}`}>
        <span className={`block text-center text-sm py-1 px-2 rounded-full mb-2 ${isDark ? "bg-yellow-700 text-white" : "bg-gray-100 text-gray-800"}`}>
          {project.title} – {project.typeProject}
        </span>

        <h4 className={`${isDark ? "text-yellow-300" : "text-red-600"} text-lg mt-2`}>
          Se desarrolló el {longDate}
        </h4>

        <p className={`${isDark ? "text-green-500" : "text-green-700"} mt-2`}>
          {project.description}
        </p>
      </div>

      <div className="px-6 pt-4 pb-2 flex flex-wrap gap-2">
        {project.tags?.map((tag, i) => {
          const Icon = tagIconMap[tag];
          const label = tagDisplayMap[tag] || tag;
          return (
            <span
              key={i}
              className={`flex items-center gap-1 rounded-full px-2 py-1 text-sm ${isDark ? "bg-gray-700 text-gray-300" : "bg-gray-100 text-gray-800"}`}
            >
              {Icon && <Icon className="w-4 h-4" style={{ color: tagColorMap[tag] }} />}
              <span>{label}</span>
            </span>
          );
        })}
      </div>

      <footer className="flex flex-wrap justify-center gap-2 mt-3 mb-3">
        {project.links?.map((linkObj) => {
          const items = [];
          if (linkObj.github) {
            items.push(
              <a
                key={`${linkObj.id}-github`}
                href={linkObj.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 px-2 py-1 text-sm rounded-xl border transition ${
                  isDark
                    ? "bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
                    : "bg-gray-800 border-blue-800 text-white hover:bg-gradient-to-r from-[#b84242] to-[#d20e0e]"
                }`}
              >
                <FaGithub /> GitHub
              </a>
            );
          }
          if (linkObj.website) {
            const label = linkObj.id === 1 ? "Sitio Web oficial" : `Sitio web de respaldo ${linkObj.id}`;
            items.push(
              <a
                key={`${linkObj.id}-website`}
                href={linkObj.website}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1 px-2 py-1 text-sm rounded-xl border transition ${
                  isDark
                    ? "bg-gray-800 border-gray-600 text-white hover:bg-gray-700"
                    : "bg-gray-800 border-blue-800 text-white hover:bg-gradient-to-r from-[#b84242] to-[#d20e0e]"
                }`}
              >
                <FaLink /> {label}
              </a>
            );
          }
          return items;
        })}
      </footer>
    </div>
  );
};
