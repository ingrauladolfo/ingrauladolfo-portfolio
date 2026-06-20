import { getBaseCardClasses, getButtonWebsiteLinks, getNameClasses, getTypeClasses, getVerticalLineColor } from '@/assets/styles';
import { Badge, ButtonPagination, RecruiterCTA, TimelineList } from '@/common/components/shared';
import { usePaginationResponsive } from '@/common/hooks';
import type { BackgroundDetailProps } from '@/common/interfaces'
import { useBackgroundStore } from '@/common/stores';
import { useLayoutEffect } from 'react';
import { type FC } from 'react'
import { FaBriefcase, FaCertificate, FaCheck, FaDove, FaGraduationCap, FaX } from 'react-icons/fa6';
import { IoIosSchool } from "react-icons/io";
import { BackgroundQuickStats } from '../BackgroundQuickStats';
import { getStatusBadgeColor } from '@/common/functions';
import { HiOutlineOfficeBuilding } from "react-icons/hi";
export const BackgroundTimeLine: FC<BackgroundDetailProps & { activeTab?: string }> = ({ data: incomingData, lang, theme, activeTab }) => {
  const { data: storeData, setData, normalizeLinks } = useBackgroundStore();
  const data = storeData ?? { education: { title: '', items: [] }, work: { title: '', items: [] } };
  const { visibleItems: visibleEducation, loadMore: loadMoreEducation, showLess: showLessEducation, isExpanded: isEducationExpanded, isMobile: isEducationMobile } = usePaginationResponsive(data.education.items, 1, 1);
  const { visibleItems: visibleWork, loadMore: loadMoreWork, showLess: showLessWork, isExpanded: isWorkExpanded, isMobile: isWorkMobile } = usePaginationResponsive(data.work.items, 1, 2);
  useLayoutEffect(() => { if (incomingData) { setData(incomingData); } }, [incomingData, setData]);
  const renderLinks = (links?: { id: number | string; href: string; name?: { [k: string]: string } }[] | undefined) => links?.length ? (
    <div className="flex flex-wrap gap-2 mt-3">
      {links.map(({ name, href, id }) => (
        <a key={id} href={href} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-2 text-[0.6em] md:text-[1.2em] rounded-full font-semibold transition border-3 wrap-break-word max-w-full ${getButtonWebsiteLinks(theme)}`}>
          <span className="wrap-break-word text-center">{name?.[lang] ?? href}</span>
        </a>
      ))}
    </div>
  ) : null;
  const educationCard = (item: any, _idx: number) => {
    const educationBuildingName = item?.educationBuildingName?.[lang] ?? "";
    const educationCourseName = item?.educationCourseName?.[lang] ?? "";
    const educationTypeIsUniversity = item?.educationType?.university === true;
    const educationTypeName = item?.educationTypeName?.[lang] ?? "";
    const educationStatus = item?.educationStatus?.[lang] ?? "";
    const educationMode = item?.educationMode?.[lang] ?? "";
    const educationStartDate = item?.educationStartDate?.[lang] ?? '';
    const educationStatusCompleted = item?.educationStatusCompleted === true;
    const educationFinishDate = item?.educationFinishDate?.[lang] ?? (!educationStatusCompleted ? (lang === 'es' ? 'Actualidad' : 'Present') : '');
    const educationDescription = item?.educationDescription?.[lang] ?? '';
    const educationLinks = normalizeLinks(item?.educationLinks);
    return (
      <div className="prose">
        <div className={`group relative transition-all duration-300 hover:-translate-y-1 w-full sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl`}>
          <div className={`${getBaseCardClasses(theme)} relative overflow-hidden`}>
            <div className={`absolute top-0 left-0 w-1 h-full ${theme === 'dark' ? 'bg-[#e7000b]' : 'bg-[#ffd230]'}`} />
            <div className="pl-4">
              <div className={`flex flex-col sm:flex-row items-center justify-between gap-2 mb-2 ${getTypeClasses(theme)}`}>
                <div className="flex items-center gap-x-2 md:mt-2">
                  <span className={` ${getTypeClasses(theme)}`}>
                    {educationTypeIsUniversity ? <IoIosSchool className="text-lg" /> : <FaCertificate className="text-lg" />}
                  </span>
                  <span className={`tracking-wider ${getTypeClasses(theme)}`}>{educationTypeName}</span>
                </div>
                <div className="flex items-center">
                  <Badge
                    text={educationStatus}
                    icon={educationStatusCompleted ? <FaX /> : <FaCheck />}
                    status={getStatusBadgeColor({
                      isActual: !educationStatusCompleted,  // false = Finalizado, true = Cursando
                      theme
                    })}
                  />
                </div>
              </div>
              <h3 className={`text-[0.8em] md:text-xl font-bold mb-2 ${theme === 'dark' ? 'text-red-600' : 'text-yellow-700'} `}>
                <span className="whitespace-normal wrap-break-word">
                  {educationCourseName}
                </span>
              </h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                <h4 className={getNameClasses(theme)}>{educationBuildingName}</h4>
                <div className="flex items-center">
                  <Badge
                    text={educationMode}
                    status={getStatusBadgeColor({ isStatus: educationMode, theme })}
                  />
                </div>
              </div>
              <div className={`flex items-center gap-2 text-xs md:text-sm font-medium mb-3 ${theme === 'dark' ? 'text-red-300' : 'text-purple-600'}`}>
                <span className={`inline-block w-1 h-1 rounded-full bg-current opacity-60 ${theme === 'dark' ? 'text-red-300' : 'text-purple-600'}`} />
                <p className={`font-semibold mb-1 text-[.8em] md:text-[1.2em] ${theme === 'dark' ? 'text-red-300' : 'text-purple-600'}`}>
                  {educationStartDate} - {educationFinishDate}
                </p>
              </div>
              <p className={`font-semibold mb-1 text-[.8em] md:text-[1.2em] ${theme === 'dark' ? 'text-gray-100' : 'text-gray-950'}`}>
                {educationDescription}
              </p>
            </div>
            {renderLinks(educationLinks)}
          </div>
        </div>
      </div>
    )
  }
  const workCard = (item: any, _idx: number) => {
    const workBuildingName = item?.workBuildingName?.[lang] ?? "";
    const workPositionRoleName = item?.workPositionRoleName?.[lang] ?? "";
    const workTypeIsFreelancer = item?.workType?.freelancer === true;
    const workTypeName = item?.workTypeName?.[lang] ?? "";
    const workStatus = item?.workStatus?.[lang] ?? "";
    const workMode = item?.workMode?.[lang] ?? "";
    const workStartDate = item?.workStartDate?.[lang] ?? '';
    const workStatusCompleted = item?.workStatusCompleted === true;
    const workFinishDate = item?.workFinishDate?.[lang] ?? (!workStatusCompleted ? (lang === 'es' ? 'Actualidad' : 'Present') : '');
    const workDescription = item?.workDescription?.[lang] ?? '';
    const workLinks = normalizeLinks(item?.workLinks);
    const workReasonLeaving = item?.workReasonLeaving?.[lang] ?? '';
    return (
      <div className="prose">
        <div className={`group relative transition-all duration-300 hover:-translate-y-1 w-full sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl`}>
          <div className={`${getBaseCardClasses(theme)} relative overflow-hidden`}>
            <div className={`absolute top-0 left-0 w-1 h-full ${theme === 'dark' ? 'bg-[#e7000b]' : 'bg-[#ffd230]'}`} />
            <div className="pl-4">
              <div className={`flex flex-col sm:flex-row items-center justify-between gap-2 mb-2 ${getTypeClasses(theme)}`}>
                <div className="flex items-center gap-x-2 md:mt-2">
                  <span className={` ${getTypeClasses(theme)}`}>
                    {workTypeIsFreelancer ? <FaDove className="text-lg" /> : <HiOutlineOfficeBuilding className="text-lg" />}
                  </span>
                  <span className={`tracking-wider ${getTypeClasses(theme)}`}>{workTypeName}</span>
                </div>
                <div className="flex items-center">
                  <Badge text={workStatus} icon={workStatusCompleted ? <FaX /> : <FaCheck />} status={getStatusBadgeColor({ isActual: !workStatusCompleted, theme })} />
                </div>
              </div>
              <h3 className={`text-[0.8em] md:text-xl font-bold mb-2 ${theme === 'dark' ? 'text-red-600' : 'text-yellow-700'} `}>
                <span className="whitespace-normal wrap-break-word">
                  {workPositionRoleName}
                </span>
              </h3>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-3">
                <h4 className={getNameClasses(theme)}>{workBuildingName}</h4>
                <div className="flex items-center">
                  <Badge text={workMode} status={getStatusBadgeColor({ isStatus: workMode, theme })} />
                </div>
              </div>
              <div className={`flex items-center gap-2 text-xs md:text-sm font-medium mb-3 ${theme === 'dark' ? 'text-red-300' : 'text-purple-600'}`}>
                <span className={`inline-block w-1 h-1 rounded-full bg-current opacity-60 ${theme === 'dark' ? 'text-red-300' : 'text-purple-600'}`} />
                <p className={`font-semibold mb-1 text-[.8em] md:text-[1.2em] ${theme === 'dark' ? 'text-red-300' : 'text-purple-600'}`}>
                  {workStartDate} - {workFinishDate}
                </p>
              </div>
              {workStatusCompleted && workReasonLeaving && (
                <div className={`mb-3 p-2 rounded-lg text-[0.7em] md:text-[1.2em] font-extrabold  ${theme === 'dark' ? 'bg-[#EDE9FE] text-purple-800' : 'bg-[#1e2939] text-sky-400'
                  }`}>
                  <span >{lang === 'es' ? 'Motivo de salida' : 'Reason for leaving'}:</span> {workReasonLeaving}
                </div>
              )}
              <p className={`font-semibold mb-1 text-[.8em] md:text-[1.2em] ${theme === 'dark' ? 'text-gray-100' : 'text-gray-950'}`}>
                {workDescription}
              </p>
            </div>
            {renderLinks(workLinks)}
          </div>
        </div>
      </div>)
  }
  const showEducation = !activeTab || activeTab === 'all' || activeTab === 'education';
  const showWork = !activeTab || activeTab === 'all' || activeTab === 'work';
  return (
    <div>
      {/* STATS BAR: escaneo de 3 segundos */}
      {(showWork || showEducation) && (<BackgroundQuickStats data={data} lang={lang} theme={theme} />)}
      {/* EDUCACIÓN */}
      {showEducation && (
        <div className="w-full px-4 md:px-6 mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className={`w-100 h-1 flex-1 rounded-full max-w-25 bg-linear-to-r from-[#00f0ff] to-[#bd00ff]`} />
            <h3 className="text-center text-xl md:text-2xl font-bold flex items-center gap-2">
              <FaGraduationCap className={`${theme === 'dark' ? 'text-[#e7000b]' : 'text-[#ffd230]'}`} />
              {data.education.title}
            </h3>
            <div className={`w-100 h-1 flex-1 rounded-full max-w-25 bg-linear-to-r from-[#00f0ff] to-[#bd00ff]`} />
          </div>
          <section className="relative wrap overflow-hidden pt-6 pb-6">
            <div className={`absolute left-1/2 top-0 h-full w-px z-0 -translate-x-1/2 ${getVerticalLineColor(theme)}`} />
            <TimelineList items={visibleEducation} lang={lang} theme={theme} renderCard={educationCard} />
          </section>
          <ButtonPagination visibleCount={visibleEducation.length} totalCount={data.education.items.length} isMobile={isEducationMobile} isExpanded={isEducationExpanded} onLoadMore={loadMoreEducation} onShowLess={showLessEducation} theme={theme} lang={lang} initial={1} step={1} />
        </div>
      )}
      {/* EXPERIENCIA */}
      {showWork && (
        <div className="w-full px-4 md:px-6 mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className={`w-100 h-1 flex-1 rounded-full max-w-25 bg-linear-to-r from-[#00f0ff] to-[#bd00ff]`} />
            <h3 className="text-center text-xl md:text-2xl font-bold flex items-center gap-2">
              <FaBriefcase className={theme === 'dark' ? 'text-yellow-400' : 'text-yellow-600'} />
              {data.work.title}
            </h3>
            <div className={`w-100 h-1 flex-1 rounded-full max-w-25 bg-linear-to-r from-[#00f0ff] to-[#bd00ff]`} />
          </div>
          <section className="relative wrap overflow-hidden pt-6 pb-6">
            <div className={`absolute left-1/2 top-0 h-full w-px z-0 -translate-x-1/2 ${getVerticalLineColor(theme)}`} />
            <TimelineList items={visibleWork} lang={lang} theme={theme} renderCard={workCard} />
          </section>
          <ButtonPagination visibleCount={visibleWork.length} totalCount={data.work.items.length} isMobile={isWorkMobile} isExpanded={isWorkExpanded} onLoadMore={loadMoreWork} onShowLess={showLessWork} theme={theme} lang={lang} initial={1} step={1} />
        </div>
      )}
      <RecruiterCTA lang={lang} theme={theme} />
    </div>)
}
