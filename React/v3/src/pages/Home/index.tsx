
import { Badge } from "../../common/components";
import { useTheme, useLanguage } from "../../common/context";
import useTypeWriting from "../../common/hooks/useTypeWriting";

import { useState } from "react";
import { Link } from "react-router-dom";
import { FaHandPointUp } from "react-icons/fa6";
import { dataTypeWriting, menuItems } from '../../assets/data/pages'

const Home = () => {
  const personalImageAlt = "I.S.C. Raúl Adolfo Torres Vargas";
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const [selected, setSelected] = useState(0);
  const badgeText = {
    en: "Available for work",
    es: "Disponible para trabajar",
  };

  const localizedData = dataTypeWriting.map((item) => ({
    title: item.title[lang],
    speed: item.speed,
    delay: item.delay,
  }));
  const { output, showTitle } = useTypeWriting(localizedData);
  const subtitle = {
    en: "Frontend Software Developer",
    es: "Desarrollador de Software Frontend",
  };

  const paragraph = {
    en: (
      <>
        +5 years of experience.{" "}
        <strong className={`font-semibold ${theme === "dark" ? "text-amber-300" : "text-red-600"}`}>
          Software Developer and founder of ESDMX
        </strong>{" "}
        from Lázaro Cárdenas, Michoacán, México. Specialized in building unique web applications using JavaScript as frontend.
      </>
    ),
    es: (
      <>
        +5 años de experiencia.{" "}
        <strong className={`font-semibold ${theme === "dark" ? "text-amber-300" : "text-red-600"}`}>
          Desarrollador de Software y fundador de ESDMX
        </strong>{" "}
        originario de Lázaro Cárdenas Michoacán, México. Especializado en el desarrollo de aplicaciones web únicas con JavaScript como Frontend.
      </>
    ),
  };

  return (
    <>
      <section className="pt-8 pb-32 w-full mx-auto lg:w-[740px]">
        <div className="max-w-svh">
          <div className="flex gap-4 mb-4">
            <img src="/img/home/home.webp" alt={personalImageAlt} className="rounded-full shadow-lg size-16" />
            <a href="https://www.linkedin.com/in/ingrauladolfotorresvargas/" target="_blank" rel="noopener" className="flex justify-center items-center transition md:hover:scale-105">
              <Badge text={badgeText[lang]} />
            </a>
          </div>

          <div className="h-[70px] sm:h-[90px] relative">
            <h1 className={`text-2xl mb-1 font-bold tracking-tight sm:text-5xl transition-opacity duration-300 ${showTitle ? "opacity-100" : "opacity-0"} ${theme === "dark" ? "text-gray-100" : "text-gray-950"}`}>
              {output}
            </h1>
            <span className={`text-xl text-semibold w-full text-start ${theme === "dark" ? "text-amber-300" : "text-red-600"}`}>
              {subtitle[lang]}
            </span>

            <p className={`mt-4 text-xl ${theme === "dark" ? "text-gray-100" : "text-gray-950"}`}>
              {paragraph[lang]}
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 pt-40 md:pt-20 pb-32 md:pb-0 w-full mx-auto lg:w-[740px]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {menuItems.map((item, i) => {
            const isBig = i === 0;
            return (
              <Link key={i} to={item.path[lang]} onClick={() => setSelected(i)} className={`relative group overflow-hidden rounded-lg shadow-md transition-transform duration-300 ${isBig ? "row-span-2 h-80" : "h-36"} ${selected === i ? (theme === "dark" ? "ring-2 ring-yellow-300 scale-[1.02]" : "ring-2 ring-red-700 scale-[1.02]") : ""}`} >
                <div className="relative w-full h-full overflow-hidden">
                  <img src={item.src} alt={item.alt[lang]} className="w-full h-full object-cover transition-transform duration-500 md:group-hover:-translate-y-6" />
                  {/* Overlay que aparece de abajo hacia arriba solo en md+ */}
                  <div className={`hidden md:flex absolute inset-0 flex-col items-center justify-center transition-transform duration-500 translate-y-full group-hover:translate-y-0 ${theme === "dark" ? "bg-gray-950" : "bg-gray-100"}`}>
                    <span className={`text-lg font-semibold text-center mb-2 ${theme === "light" ? "text-gray-950" : "text-gray-100"}`}>
                      {item.alt[lang]}
                    </span>
                    <FaHandPointUp className={`text-2xl animate-bounce ${theme === "light" ? "text-gray-950 hover:underline hover:text-red-600" : "text-gray-100 hover:underline hover:text-amber-300"}`} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>

  );
};

export default Home;
