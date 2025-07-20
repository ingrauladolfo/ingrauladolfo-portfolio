import { type FC, useEffect, useRef, useState } from "react";
import { useLanguage, useTheme } from "../../../common/context";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import type { Category, Image, LocalizedString, SliderProps, } from "../../../common/interfaces/data/pages/Stack";
import { categoryKeys, images } from "../../../assets/data/pages/Stack";

// Formatea títulos
const formatTitle = (key: string): LocalizedString => ({ front: { en: "Frontend", es: "Frontend" }, css: { en: "CSS Frameworks", es: "Frameworks CSS" }, back: { en: "Backend", es: "Backend" }, bbdd: { en: "Databases", es: "Base de datos" }, controlVer: { en: "Version Control", es: "Control de versiones" }, test: { en: "Testing", es: "Testing" }, cloud: { en: "Cloud Services", es: "Servicios en la nube" }, containers: { en: "Containers", es: "Contenedores" }, }[key] ?? { en: key, es: key });
const categoryTitles = Object.fromEntries(categoryKeys.map((k) => [k, formatTitle(k)])) as Record<Category, LocalizedString>;
const SlickSlider: FC<SliderProps> = ({ images, lang, theme }) => {
  const slider = useRef<Slider>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const imageCount = images.length;

  useEffect(() => {
    const handleResize = () => { setIsMobile(window.innerWidth < 768); };
    handleResize(); // Inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = { infinite: imageCount > 1, slidesToShow: Math.min(images.length, 3), slidesToScroll: 1, autoplay: imageCount > 1, speed: 800, autoplaySpeed: 3000, arrows: false, centerMode: false, responsive: [{ breakpoint: 768, settings: { slidesToShow: 1, }, },], };
  const imageContainerClass = `flex items-center justify-center h-64 min-h-[10rem] max-h-[18rem] border-3 w-full rounded-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-100 border-amber-600 text-gray-950' : 'bg-transparent border-red-600 text-gray-950'}`;
  const imageClass = "object-contain max-h-full max-w-full transition-all duration-300";
  return (
    <div className="w-full overflow-visible min-h-[16rem]">
      <Slider ref={slider} {...settings} className={`w-full ${isMobile ? "max-w-md mx-auto" : "max-w-3xl"} py-4`}>
        {images.map(img => {
          const isHover = hovered === img.id && imageCount > 1;
          const hoverable = imageCount > 1;

          return (
            <div key={img.id} className="px-2">
              <Link to={img.href} target="_blank" onMouseEnter={() => { if (hoverable) { setHovered(img.id); slider.current?.slickPause(); } }} onMouseLeave={() => { if (hoverable) { setHovered(null); slider.current?.slickPlay(); } }} className="block group relative transition-all duration-300 ease-out">
                <div className={imageContainerClass}>
                  <img src={img.src} alt={img.alt} loading="lazy" className={imageClass} />
                </div>
                <div className={`mt-2 text-lg text-center font-bold transition-opacity duration-300 ${theme === "dark" ? "text-gray-100" : "text-gray-950"} ${!isMobile ? (isHover ? "opacity-100" : "opacity-0 group-hover:opacity-100") : ""}`}>
                  {img.title[lang]}
                </div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

const StackImage: FC = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const grouped = images.reduce<Map<Category, Image[]>>((m, img) => {
    if (!m.has(img.category)) { m.set(img.category, []); }
    m.get(img.category)!.push(img);
    return m;
  }, new Map());

  return (
    <div className={`w-full py-4 ${theme === "dark" ? "bg-gray-950 text-gray-100" : "bg-gray-100 text-gray-950"}`}>
      <div className="flex flex-col gap-12 w-full">
        {[...grouped.entries()].map(([cat, imgs]) => (
          <section key={cat} className="w-full overflow-visible px-4 md:px-8">
            <h3 className="text-2xl font-semibold mb-4 text-center w-full">
              {categoryTitles[cat][lang]}
            </h3>
            <SlickSlider images={imgs} lang={lang} theme={theme} />
          </section>
        ))}
      </div>
    </div>
  );
};

export default StackImage;
