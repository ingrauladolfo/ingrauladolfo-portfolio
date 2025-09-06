import { useState } from 'react'
import { useLanguage, useTheme } from '../../common/context';
import { homeContent } from '../../assets/data/pages/Home/HomeContent';
import { dataTypeWriting, menuItems } from '../../assets/data/pages';
import useTypeWriting from '../../common/hooks/useTypeWriting';
import { handleClick } from '../../common/functions/handleClick';
import { FaArrowRight } from 'react-icons/fa6';
import { getBaseButton, getButtonWebsiteLinks } from '../../assets/styles/pages/Home';
import { Badge, ParticleCanvas } from '../../common/components';

const Home = () => {
  const personalImageAlt = "I.S.C. Raúl Adolfo Torres Vargas";
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const [selected, setSelected] = useState<number>(0);
  const { badgeText, subtitle, paragraph } = homeContent;

  const localizedData = dataTypeWriting.map(({ title, speed, delay }) => ({
    title: title[lang],
    speed,
    delay,
  }));
  const { output, showTitle } = useTypeWriting(localizedData);

  return (
    <header
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden text-center"
      aria-label={lang === 'es' ? 'Sección principal' : 'Main hero'}
    >
        {/* Contenido principal */}
      <div className="relative z-30 container mx-auto px-6 flex flex-col items-center justify-center gap-10 min-h-screen">
        <div className="flex flex-col items-center justify-center text-center w-full gap-6">

          {/* Imagen y Badge */}
          <div className="flex flex-row items-center justify-center gap-4">
            <div className="mt-10 md:mt-auto rounded-full shadow-lg size-28 sm:size-36 object-cover border-4 border-gray-300 dark:border-gray-700">
              <img
                src="/img/home/home.webp"
                alt={personalImageAlt}
                className="rounded-full shadow-lg size-28 sm:size-36 object-cover border-4"
              />
            </div>
            <Badge text={badgeText[lang]} icon={<FaArrowRight />} />
          </div>


          {/* Texto principal */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-gray-950 dark:text-white"
            style={{
              textShadow:
                theme === 'dark'
                  ? '0 6px 20px rgba(0,0,0,0.6), 0 0 22px rgba(255,215,0,0.6)'
                  : 'none',
            }}
          >
            <span className={`block ${showTitle ? "opacity-100" : "opacity-0"} ${theme === "dark" ? "text-gray-100" : "text-gray-950"}`}>
              Raúl Adolfo
            </span>
            <span className={`${theme === "dark" ? "text-amber-300" : "text-red-600"}`}>
              Torres Vargas
            </span>
          </h1>

          <span className={`text-3xl font-medium ${theme === "dark" ? "text-amber-300" : "text-red-600"
            }`}>
            {subtitle[lang]}
          </span>
          <p className={`text-xl sm:text-5xl font-bold tracking-tight transition-opacity duration-500 ${showTitle ? "opacity-100" : "opacity-0"} ${theme === "dark" ? "text-gray-100" : "text-gray-950"}`}>
            {output}
          </p>
          <p className={`mt-4 max-w-prose text-lg leading-relaxed ${theme === "dark" ? "text-gray-300" : "text-gray-800"
            }`}>
            {paragraph[lang]}
          </p>



          {/* Botones + menú */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-4">
            {menuItems.slice(0, menuItems.length).map((m, i) => { // Usando menuItems.length
              const label = m.alt?.[lang] || `item-${i}`;
              const isActive = selected === i;
              return (
                <button key={i} onClick={() => { setSelected(i); const t = String(m.path?.[lang] || '').trim(); if (!t) { return; } if (/^https?:\/\//i.test(t)) { handleClick(t); } else { window.location.assign(t); } }} aria-current={isActive ? 'page' : undefined} className={`${getBaseButton()} ${getButtonWebsiteLinks(theme)} w-48 text-center text-xl px-6 py-3`}>
                  {/* Ícono y texto */}
                  <span className="flex items-center justify-center">
                    {m.icon} {/* Muestra el ícono */}
                    <span className="text-xs">{label}</span> {/* Muestra el texto */}
                  </span>
                </button>
              );
            })}

          </div>
        </div>
      </div>
    </header>
  );
};


export default Home