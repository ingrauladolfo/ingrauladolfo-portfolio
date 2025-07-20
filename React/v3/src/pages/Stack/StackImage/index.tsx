import { type FC, useEffect, useRef, useState } from "react";
import { useLanguage, useTheme } from "../../../common/context";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import categoryKeys from "../../../assets/data/pages/Stack/categoryKeys";
import images from "../../../assets/data/pages/Stack/imagesStack";
import type { Category, Image, LocalizedString, SliderProps, } from "../../../common/interfaces/data/pages/Stack";

// Formatea títulos
const formatTitle = (key: string): LocalizedString => ({
  front: { en: "Frontend", es: "Frontend" },
  css: { en: "CSS Frameworks", es: "Frameworks CSS" },
  back: { en: "Backend", es: "Backend" },
  bbdd: { en: "Databases", es: "Base de datos" },
  controlVer: { en: "Version Control", es: "Control de versiones" },
  test: { en: "Testing", es: "Testing" },
  cloud: { en: "Cloud", es: "Nube" },
  containers: { en: "Containers", es: "Contenedores" }
}[key] ?? { en: key, es: key });

const categoryTitles = Object.fromEntries(
  categoryKeys.map((k) => [k, formatTitle(k)])
) as Record<Category, LocalizedString>;

const SlickSlider: FC<SliderProps> = ({ images, lang, theme }) => {
  const slider = useRef<Slider>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const imageCount = images.length;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Inicial
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    infinite: imageCount > 1,
    slidesToShow: Math.min(images.length, 3),
    slidesToScroll: 1,
    autoplay: imageCount > 1,
    speed: 800,
    autoplaySpeed: 3000,
    arrows: false,
    centerMode: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full overflow-visible min-h-[16rem]">
      {isMobile ? (
        <Slider {...settings} className="w-full max-w-md mx-auto py-4">
          {images.map((img, i) => (
            <div key={i} className="px-2">
              <Link
                to={img.href}
                target="_blank"
                className="block h-64 overflow-hidden rounded-lg"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="object-contain w-full h-full rounded-lg"
                />
              </Link>
              <div
                className={`mt-2 text-sm text-center font-medium ${theme === "dark"
                    ? "text-gray-100"
                    : "text-gray-950"
                  }`}
              >
                {img.title[lang]}
              </div>

            </div>
          ))}
        </Slider>
      ) : (
        <Slider ref={slider} {...settings} className="w-full flex justify-center max-w-3xl py-4">
          {images.map((img, i) => {
            const isHover = hovered === i && imageCount > 1;
            const hoverable = imageCount > 1;

            return (
              <div key={i} className="px-2">
                
                <Link
                  to={img.href}
                  target="_blank"
                  onMouseEnter={() => {
                    if (hoverable) {
                      setHovered(i);
                      slider.current?.slickPause();
                    }
                  }}
                  onMouseLeave={() => {
                    if (hoverable) {
                      setHovered(null);
                      slider.current?.slickPlay();
                    }
                  }}
                  className=" block relative h-64 overflow-hidden rounded-lg transition-all duration-300 ease-out"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="object-contain w-fit h-full rounded-lg transition-all duration-300"
                  />

                  <div
                    className={`absolute bottom-0 left-0 w-full px-3 py-1 text-sm transition-opacity duration-300 text-center font-medium ${isHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      } ${theme === "dark"
                        ? "bg-gray-950 text-white hover:text-red-600"
                        : "bg-gray-100 text-gray-900 hover:text-amber-500"
                      }`}
                  >
                    {img.title[lang]}
                  </div>
                </Link>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};

const StackImage: FC = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const grouped = images.reduce<Map<Category, Image[]>>((m, img) => {
    if (!m.has(img.category)) m.set(img.category, []);
    m.get(img.category)!.push(img);
    return m;
  }, new Map());

  return (
    <div
      className={`w-full py-4 ${theme === "dark"
        ? "bg-gray-950 text-gray-100"
        : "bg-gray-100 text-gray-950"
        }`}
    >
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
