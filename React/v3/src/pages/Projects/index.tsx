import { cloneElement, type FC, type Key, useRef, useEffect, useState } from 'react';
import { useLanguage, useTheme } from '../../common/context';
import { projectsData } from '../../assets/data/pages/Projects/projectsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaCalendar, FaFolder, FaGithub, FaLink, FaMinus, FaPlus } from 'react-icons/fa6';
import usePaginationResponsive from '../../common/hooks/usePaginationResponsive';
import { textProjects } from '../../assets/data/pages/Projects/textProjects';
import { tagColorMap, tagIcons } from '../../assets/data/pages/Projects/tagIcons';
import { getFormatLongDate } from '../../common/hooks/useGetFormatLongDate';
import { getBgClass, getButtonWebsiteLinksClass } from '../../assets/styles/pages/Projects';
import { getBaseButton, getButtonWebsiteLinks } from '../../assets/styles/pages/Home';
import { Tabs } from '../../common/components';

const Projects: FC = () => {
  const { theme } = useTheme();
  const { lang } = useLanguage();
  const t = textProjects[lang] || textProjects.en;
  const [flippedKey, setFlippedKey] = useState<string | null>(null);
  const [selectedTab, setSelectedTab] = useState<string>('all');

  const tabLabels = {
    all: lang === 'es' ? 'Todos' : 'All',
    Freelancer: lang === 'es' ? 'Proyecto Freelancer' : 'Freelancer project',
    Empresa: lang === 'es' ? 'Proyecto en empresa' : 'Project in company',
  };
  const tabs = ['all', 'Freelancer', 'Empresa'];

  const sectionRef = useRef<HTMLElement | null>(null);

  const filtered = (projectsData as any[]).filter((p) => {
    if (selectedTab === 'all') return true;
    const cat =
      typeof p.projectCategory === 'string'
        ? p.projectCategory
        : p.projectCategory?.[lang] ?? p.projectCategory?.es ?? '';
    return String(cat).includes(selectedTab);
  });

  const {
    visibleItems,
    loadMore,
    showLess,
    isExpanded,
    isMobile,
  } = usePaginationResponsive(filtered, 1, 3);

  const handleMouseEnter = (key: string) => {
    if (!isMobile) setFlippedKey(key);
  };
  const handleMouseLeave = () => {
    if (!isMobile) setFlippedKey(null);
  };

  const imageAreaClass =
    'w-full h-[18rem] md:h-[20rem] lg:h-[22rem] xl:h-[24rem] rounded-t-xl overflow-hidden';

  // 👉 Scroll automático al cambiar de tab
  useEffect(() => {
    if (!sectionRef.current) return;

    const top = sectionRef.current.getBoundingClientRect().top + window.pageYOffset;

    window.scrollTo({
      top: top - 100, // Ajusta este valor según tu diseño (header fijo, etc.)
      behavior: 'smooth',
    });
  }, [selectedTab]);

  return (
    <section
      ref={sectionRef}
      className={`min-h-screen py-16 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}`}
    >
      <div className="mx-auto max-w-7xl px-4" data-expanded={isExpanded}>
        <h2 className="mb-8 text-center text-5xl font-bold flex items-center justify-center">
          <FaFolder className={`mr-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
          {t.title}
        </h2>
        <h3 className="mb-8 text-center text-4xl font-bold flex items-center justify-center">
          {t.subtitle}
        </h3>

        <Tabs
          tabs={tabs}
          activeTab={selectedTab}
          labels={tabLabels}
          onChange={setSelectedTab}
          theme={theme}
        />

        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {visibleItems.map((item: any, idx: number) => {
            const {
              projectId,
              projectTitle,
              projectCategory,
              projectImages: {
                projectImageFront: { projectImageFrontHref, projectImageFrontAlt } = {},
                projectImagesBack = [],
              } = {},
              projectDescription,
              projectDevYear,
              projectTechStack,
              projectsURL = [],
            } = item;

            const localKey = `${projectId}-${idx}`;
            const isFlipped = flippedKey === localKey;
            const titleStr = projectTitle?.[lang] ?? projectTitle?.en ?? '';
            const categoryLabel =
              typeof projectCategory === 'string'
                ? projectCategory
                : projectCategory?.[lang] ?? projectCategory?.es ?? '';
            const frontAlt = projectImageFrontAlt?.[lang] ?? projectImageFrontAlt?.es ?? '';

            return (
              <div
                key={localKey}
                className="transition-all duration-500"
                style={{ height: isFlipped ? '40rem' : '16rem' }}
                onMouseEnter={() => handleMouseEnter(localKey)}
                onMouseLeave={handleMouseLeave}
              >
                <div
                  onClick={() => isMobile && setFlippedKey(isFlipped ? null : localKey)}
                  className={`relative h-full w-full rounded-xl shadow-xl transition-transform duration-500 [transform-style:preserve-3d] ${
                    isFlipped ? '[transform:rotateY(180deg)]' : ''
                  } cursor-pointer`}
                >
                  {/* Front */}
                  <div
                    className={`${getBgClass(
                      theme
                    )} absolute inset-0 h-full overflow-hidden rounded-xl flex flex-col [backface-visibility:hidden]`}
                  >
                    <div
                      className={`${imageAreaClass} flex items-center justify-center bg-transparent`}
                    >
                      <img
                        src={projectImageFrontHref}
                        alt={frontAlt}
                        className="max-w-full max-h-full object-cover"
                      />
                    </div>
                    <p className="mt-2 px-4 text-lg font-semibold text-center">
                      {titleStr}&nbsp;-&nbsp;{categoryLabel}
                    </p>
                  </div>

                  {/* Back */}
                  <div
                    className={`${getBgClass(
                      theme
                    )} absolute inset-0 h-full flex flex-col justify-between rounded-xl p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]`}
                  >
                    <div className={imageAreaClass}>
                      <Swiper
                        modules={[Autoplay, Pagination]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        pagination={{ clickable: false }}
                        loop
                        className="w-full h-full rounded-lg shadow-lg"
                      >
                        {projectImagesBack.map((img: any) => (
                          <SwiperSlide
                            key={img.projectImagesBackId}
                            className="flex items-center justify-center"
                          >
                            <img
                              src={img.projectImagesBackHref}
                              alt={
                                img.projectImagesBackAlt?.[lang] ?? img.projectImagesBackAlt?.es ?? ''
                              }
                              className="max-w-full max-h-full object-cover rounded-lg"
                            />
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>

                    <div className="mt-3 flex flex-col items-center space-y-2">
                      <h3
                        className={`block text-xl text-[0.7em] md:text-[1.2em] text-center font-semibold py-1 px-2 rounded-full mb-2 ${
                          theme === 'dark'
                            ? 'bg-gray-950 border-3 border-red-600 text-gray-100'
                            : 'bg-gray-100 border-3 border-amber-300 text-gray-950'
                        }`}
                      >
                        {titleStr}&nbsp;-&nbsp;{categoryLabel}
                      </h3>
                      <div className="text-sm">
                        {(projectDescription?.[lang] ?? projectDescription?.en ?? '')
                          .split('. ')
                          .map((paragraph: string, index: Key | null | undefined) => (
                            <p key={index} className="mb-2">
                              {paragraph.trim() +
                                (index !==
                                (projectDescription?.[lang] ?? projectDescription?.en ?? '').split(
                                  '. '
                                ).length -
                                  1
                                  ? '.'
                                  : '')}
                            </p>
                          ))}
                      </div>
                      <p
                        className={`flex items-center gap-2 text-lg mt-2 ${
                          theme === 'dark' ? 'text-gray-100' : 'text-gray-950'
                        }`}
                      >
                        <FaCalendar />
                        {lang === 'es' ? 'Se desarrolló el' : 'Developed on'}{' '}
                        {getFormatLongDate(projectDevYear, lang)}
                      </p>

                      <div className="flex flex-wrap justify-center gap-2">
                        {projectTechStack?.map((tag: string, i: number) => {
                          const key = tag.toLowerCase();
                          const Icon = tagIcons[key];
                          const iconColor = tagColorMap[key] || '#ffffff';

                          return (
                            <span
                              key={i}
                              className={`flex items-center gap-1 rounded-full px-2 py-1 text-sm border-3 ${
                                theme === 'dark'
                                  ? 'bg-gray-950 border-red-600 text-gray-100'
                                  : 'bg-gray-100 border-amber-300 text-gray-950'
                              }`}
                            >
                              {Icon && cloneElement(Icon, { style: { color: iconColor } })}
                              <span>{tag}</span>
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap justify-center gap-3">
                      {projectsURL?.flatMap((u: any) => {
                        const items: any[] = [];

                        if (u.projectsURLGithubRepo) {
                          items.push(
                            <a
                              key={`${u.projectsURLId}-github`}
                              href={u.projectsURLGithubRepo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1 px-4 py-2 text-sm rounded-full font-semibold transition border-3 ${getBaseButton()} ${getButtonWebsiteLinksClass(theme)}`}
                            >
                              <FaGithub />
                              {t.github}
                            </a>
                          );
                        }

                        if (u.projectsURLWebsiteDeploy) {
                          const label =
                            u.projectsURLId === 1
                              ? lang === 'es'
                                ? 'Sitio web oficial'
                                : 'Official Website'
                              : lang === 'es'
                              ? `Sitio web de respaldo ${u.projectsURLId}`
                              : `Backup Website ${u.projectsURLId}`;

                          items.push(
                            <a
                              key={`${u.projectsURLId}-website`}
                              href={u.projectsURLWebsiteDeploy}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-1 px-4 py-2 text-sm rounded-full font-semibold transition border-3 ${getBaseButton()} ${getButtonWebsiteLinksClass(theme)}`}
                            >
                              <FaLink />
                              {label}
                            </a>
                          );
                        }

                        return items;
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filtered.length > (isMobile ? 1 : 3) && (
          <div className="mt-12 flex justify-center gap-4 flex-wrap" aria-expanded={isExpanded}>
            {visibleItems.length < filtered.length && (
              <button
                onClick={loadMore}
                aria-expanded={isExpanded}
                className={`${getBaseButton()} ${getButtonWebsiteLinks(
                  theme
                )} w-48 text-center text-xl px-6 py-3`}
              >
                <FaPlus />
                {lang === 'es' ? 'Mostrar más' : 'Show More'}
              </button>
            )}
            {visibleItems.length > (isMobile ? 1 : 3) && (
              <button
                onClick={showLess}
                aria-expanded={isExpanded}
                className={`${getBaseButton()} ${getButtonWebsiteLinks(
                  theme
                )} w-48 text-center text-xl px-6 py-3`}
              >
                <FaMinus />
                {lang === 'es' ? 'Mostrar menos' : 'Show Less'}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
