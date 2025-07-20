import type { FC } from "react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import type { SliderProps } from "../../../common/interfaces/data/pages/Stack";

const CustomSlider: FC<SliderProps> = ({ images, lang, theme }) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const indexRef = useRef(0);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (images.length < 2) return;

    autoplayRef.current = setInterval(() => {
      setHovered(indexRef.current);
      indexRef.current = (indexRef.current + 1) % images.length;
    }, 3000);

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [images]);

  const pauseAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
  };

  const resumeAutoplay = () => {
    if (images.length >= 2) {
      autoplayRef.current = setInterval(() => {
        setHovered(indexRef.current);
        indexRef.current = (indexRef.current + 1) % images.length;
      }, 3000);
    }
  };

  return (
    <div className="relative w-full overflow-x-auto">
      <div className="flex gap-4 transition-all duration-300">
        {images.map((img, i) => {
          const isHover = hovered === i;

          return (
            <div
              key={i}
              className={`transition-all duration-300 flex-shrink-0 h-64 overflow-hidden rounded-lg relative ${
                isHover ? "basis-[60%]" : "basis-[20%]"
              }`}
              onMouseEnter={() => {
                setHovered(i);
                pauseAutoplay();
              }}
              onMouseLeave={() => {
                setHovered(null);
                resumeAutoplay();
              }}
            >
              <Link
                to={img.href}
                target="_blank"
                className="group block w-full h-full"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="object-cover w-full h-full rounded-lg transition-all duration-300 ease-in-out"
                />
                <div
                  className={`absolute bottom-0 left-0 w-full px-3 py-1 text-sm transition-opacity duration-300 ${
                    isHover
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  } ${
                    theme === "dark"
                      ? "bg-gray-950 text-gray-100 hover:text-red-600"
                      : "bg-gray-100 text-gray-950 hover:text-amber-300"
                  }`}
                >
                  {img.title[lang]}
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CustomSlider;
