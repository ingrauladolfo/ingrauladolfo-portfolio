import { FaUser } from 'react-icons/fa6';
import { useLanguage, useTheme } from '../../common/context';
import { aboutPageTitle } from '../../assets/data/pages/About/aboutTextTitle';
import { aboutSectionData } from '../../assets/data/pages/About/aboutSectionData';
import { getLinkColor, getStrongColor, getTextColor } from '../../assets/styles/pages/About';

const About = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  return (
    <section className="min-h-screen py-16 w-full mx-auto lg:w-[740px] pb-32">
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="mb-8 text-center text-3xl md:text-5xl font-bold flex items-center justify-center">
          <FaUser className={`mr-2 ${getTextColor(theme)}`} />
          {aboutPageTitle[lang]}
        </h2>

        <article className="flex flex-col gap-24">
          {aboutSectionData(getLinkColor(theme), getStrongColor(theme)).map(({ id, title, content, image: { href, alt } = {} }, index) => {
            const isReverse = index % 2 !== 0;
            return (
              <div key={id} className={`flex flex-col-reverse md:items-center md:gap-14 md:flex-row ${isReverse ? 'md:flex-row-reverse' : ''}`}>
                {/* Texto */}
                <div className={`flex-1 space-y-4 text-lg leading-relaxed ${getTextColor(theme)}`}>
                  <h3 className="text-2xl font-semibold mb-2">{title[lang]}</h3>
                  {content[lang]}
                </div>

                {/* Imagen */}
                <div className="flex-shrink-0 mb-6 md:mb-0">
                  {href && (<img src={href} alt={alt?.[lang]} loading="lazy" className="w-64 h-64 object-cover rounded-2xl shadow-md ring-1 ring-gray-300 dark:ring-white/10 bg-gray-100 dark:bg-gray-800 transition-transform duration-300 hover:scale-105" />)}
                </div>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default About;
