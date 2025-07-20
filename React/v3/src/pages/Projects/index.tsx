import { cloneElement, type FC, useState } from 'react';
import { useLanguage, useTheme } from '../../common/context';
import { projectsData } from '../../assets/data/pages/Projects/projectsData';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { FaCalendar, FaFolder, FaGithub, FaLink, FaMinus, FaPlus } from 'react-icons/fa6';
import usePaginationResponsive from '../../common/hooks/usePaginationResponsive';
import { textProjects } from '../../assets/data/pages/Projects/textProjects';
import { tagColorMap, tagIcons } from '../../assets/data/pages/Projects/tagIcons';
import { getFormatLongDate } from '../../common/hooks/useGetFormatLongDate';

const Projects: FC = () => {
    const { theme } = useTheme();
    const { lang } = useLanguage();
    const t = textProjects[lang] || textProjects.en;
    const [flippedId, setFlippedId] = useState<number | null>(null);
    // Tabs fixed: All, Freelancer, Empresa
    // Translate tab labels
    const tabLabels = { all: lang === 'es' ? 'Todos' : 'All', Freelancer: lang === 'es' ? 'Freelancer' : 'Freelancer', Empresa: lang === 'es' ? 'Empresa' : 'Company', };
    const tabs = ['all', 'Freelancer', 'Empresa'];
    const [selectedTab, setSelectedTab] = useState<string>('all');

    // Filter projects based on selected tab
    const filtered = projectsData.filter(p => {
        if (selectedTab === 'all') { return true; }
        if (selectedTab === 'Freelancer') { return p.typeProject.includes('Freelancer'); }
        if (selectedTab === 'Empresa') { return p.typeProject.includes('Empresa'); }
        return false;
    });

    // Pagination applied on filtered projects
    const { visibleItems, loadMore, showLess, showButton, isExpanded, isMobile } = usePaginationResponsive(filtered, 1, 3);
    const frontBg = theme === 'dark' ? 'bg-gray-950 text-gray-100 border-2 border-red-600' : 'bg-gray-100 text-gray-950 border-2 border-amber-300';
    const backBg = frontBg;
    const buttonWebsiteLinks = `relative overflow-hidden border z-10 transition-colors duration-300  before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:z-[-1]  before:transition-all before:duration-700 before:ease-in-out  hover:before:w-full  ${theme === 'dark' ? 'bg-gray-950 border-red-600 text-gray-100 hover:text-gray-950 hover:border-amber-600 before:bg-amber-300' : 'bg-gray-100 border-amber-300 text-gray-950 hover:text-gray-100 hover:border-red-300 before:bg-red-600'}`;
    const handleMouseEnter = (id: number) => { if (!isMobile) { setFlippedId(id) }; };
    const handleMouseLeave = () => { if (!isMobile) setFlippedId(null); };

    return (
        <section className={`min-h-screen py-16 ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}`}>
            <div className="mx-auto max-w-7xl px-4">
                <h2 className="mb-8 text-center text-5xl font-bold flex items-center justify-center">
                    <FaFolder className={`mr-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} />
                    {t.title}
                </h2>
                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map(tab => (
                        <button key={tab} onClick={() => setSelectedTab(tab)} className={`px-4 py-2 rounded-full font-semibold transition ${theme === 'dark' ? (selectedTab === tab ? 'bg-amber-300 text-gray-950' : 'bg-red-600 text-gray-100') : (selectedTab === tab ? 'bg-red-600 text-gray-100' : 'bg-amber-300 text-gray-950')}`}>
                            {tabLabels[tab as keyof typeof tabLabels]}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
                    {visibleItems.map(project => {
                        const isFlipped = flippedId === project.id;
                        return (
                            <div key={project.id} className="transition-all duration-500" style={{ height: isFlipped ? '40rem' : '16rem' }} onMouseEnter={() => handleMouseEnter(project.id)} onMouseLeave={handleMouseLeave}>
                                <div onClick={() => isMobile && setFlippedId(isFlipped ? null : project.id)} className={`relative h-full w-full rounded-xl shadow-xl transition-transform duration-500 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''} cursor-pointer`}>
                                    {/* Front */}
                                    <div className={`${frontBg} absolute inset-0 h-full overflow-hidden rounded-xl flex flex-col [backface-visibility:hidden]`}>
                                        <img src={project.image.cover.href} alt={project.image.cover.alt} className="h-48 w-full object-cover rounded-t-xl" />
                                        <p className="mt-2 px-4 text-lg font-semibold">
                                            {project.title[lang]} ({project.typeProject})
                                        </p>
                                    </div>

                                    {/* Back */}
                                    <div className={`${backBg} absolute inset-0 h-full flex flex-col justify-between rounded-xl p-4 [transform:rotateY(180deg)] [backface-visibility:hidden]`}>
                                        <Swiper modules={[Autoplay, Pagination]} autoplay={{ delay: 3000, disableOnInteraction: false }} pagination={{ clickable: false }} loop className="w-full h-[18rem] md:h-[20rem] lg:h-[22rem] xl:h-[24rem] rounded-lg shadow-lg">
                                            {project.image.images.map(img => (
                                                <SwiperSlide key={img.id}>
                                                    <img src={img.href} alt={img.alt} className="w-full h-full object-cover rounded-lg" />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>

                                        <div className="mt-3 flex flex-col items-center space-y-2">
                                            <h3 className={`block text-xl text-center font-semibold py-1 px-2 rounded-full mb-2 ${theme === 'dark' ? 'bg-red-600 text-gray-100' : 'bg-amber-300 text-gray-950'}`}>
                                                {project.title[lang]} ({project.typeProject})
                                            </h3>
                                            <p className="text-sm">{project.description[lang]}</p>
                                            <p className={`flex items-center gap-2 text-lg mt-2 ${theme === 'dark' ? 'text-gray-100' : 'text-gray-950'}`}>
                                                <FaCalendar />
                                                {lang === 'es' ? 'Se desarrolló el' : 'Developed on'} {getFormatLongDate(project.year, lang)}
                                            </p>

                                            <div className="flex flex-wrap justify-center gap-2">
                                                {project.tags?.map((tag, i) => {
                                                    const key = tag.toLowerCase();
                                                    const Icon = tagIcons[key];
                                                    const iconColor = tagColorMap[key] || '#ffffff';
                                                    return (
                                                        <span key={i} className={`flex items-center gap-1 rounded-full px-2 py-1 text-sm  border-3 ${theme === 'dark' ? 'bg-gray-950 border-red-600 text-gray-100' : 'bg-gray-100 border-amber-300 text-gray-950'}`}>
                                                            {Icon && cloneElement(Icon, { style: { color: iconColor } })}
                                                            <span>{tag}</span>
                                                        </span>
                                                    );
                                                })}

                                            </div>
                                        </div>

                                        <div className={`mt-4 flex flex-wrap justify-center gap-3  `}>
                                            {project.links?.flatMap(linkObj => {
                                                const items = [];
                                                // GitHub button
                                                if (linkObj.github) {
                                                    items.push(
                                                        <a key={`${linkObj.id}-github`} href={linkObj.github} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 px-4 py-2 text-sm rounded-full font-semibold transition border-3  ${buttonWebsiteLinks}`}>
                                                            <FaGithub />
                                                            {t.github}
                                                        </a>
                                                    );
                                                }

                                                // Website button
                                                if (linkObj.website) {
                                                    const label =
                                                        linkObj.id === 1
                                                            ? (lang === 'es' ? 'Sitio web oficial' : 'Official Website')
                                                            : (lang === 'es'
                                                                ? `Sitio web de respaldo ${linkObj.id}`
                                                                : `Backup Website ${linkObj.id}`);

                                                    items.push(
                                                        <a
                                                            key={`${linkObj.id}-website`}
                                                            href={linkObj.website}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`inline-flex items-center gap-1 px-4 py-2 text-sm rounded-full font-semibold transition border-3 ${buttonWebsiteLinks}`} >
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

                {showButton && (
                    <div className="mt-12 flex justify-center gap-4 flex-wrap">
                        {!isExpanded && (
                            <button onClick={loadMore} className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition ${theme === 'dark' ? 'bg-red-600 text-gray-100' : 'bg-amber-300 text-gray-950'}`}>
                                <FaPlus />
                                {lang === 'es' ? 'Mostrar más' : 'Show More'}
                            </button>
                        )}
                        {visibleItems.length > (isMobile ? 1 : 3) && (
                            <button onClick={showLess} className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition ${theme === 'dark' ? 'bg-amber-300 text-gray-950' : 'bg-red-600 text-gray-100'}`}>
                                <FaMinus />
                                {lang === 'es' ? 'Mostrar menos' : 'Show Less'}
                            </button>
                        )}
                    </div>
                )}

            </div>
        </section >
    );
};

export default Projects;
