// src/components/Experience/ExperienceDetail.tsx

import type { FC } from 'react'
import usePaginationResponsive from '../../../common/hooks/usePaginationResponsive'
import { IoIosSchool } from 'react-icons/io'
import { FaPlus, FaMinus, FaCheck, FaX, FaCertificate } from 'react-icons/fa6'
import type { ExperienceDetailProps } from '../../../common/interfaces/pages'
import { getBaseCardClasses, getNameClasses, getTypeClasses, getVerticalLineColor } from '../../../assets/styles/pages/Experience'
import { getButtonWebsiteLinks } from '../../../assets/styles/pages/Home'

const ExperienceDetail: FC<ExperienceDetailProps> = ({ data, lang, theme }) => {
  const buttonWebsiteLinks = `relative overflow-hidden border z-10 transition-colors duration-300 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:z-[-1] before:transition-all before:duration-700 before:ease-in-out hover:before:w-full ${theme === 'dark'
    ? 'bg-gray-950 border-red-600 text-gray-100 hover:text-gray-950 hover:border-amber-600 before:bg-amber-300'
    : 'bg-gray-100 border-amber-300 text-gray-950 hover:text-gray-100 hover:border-red-600 before:bg-red-600'
    }`

  const { visibleItems: visibleEducation, loadMore: loadMoreEducation, showLess: showLessEducation } = usePaginationResponsive(data.education.items, 1, 1)
  const { visibleItems: visibleWork, loadMore: loadMoreWork, showLess: showLessWork } = usePaginationResponsive(data.work.items, 1, 2)

  const normalizeLinks = (links?: any[]) => {
    if (!links?.length) return undefined
    const out: { id: number | string; href: string; name?: { [k: string]: string } }[] = []
    links.forEach((l) => {
      if (!l) return
      if (Array.isArray(l)) {
        l.forEach((li) => li && out.push(li))
        return
      }
      if (l.company) {
        if (Array.isArray(l.company)) {
          l.company.forEach((li: any) => li && out.push(li))
        } else if (l.company.id && l.company.href) {
          out.push(l.company)
        }
        return
      }
      if (l.id && l.href) out.push(l)
    })
    return out.length ? out : undefined
  }

  const renderLinks = (links?: { id: number | string; href: string; name?: { [k: string]: string } }[] | undefined) =>
    links?.length ? (
      <div className="flex flex-wrap gap-2 mt-3">
        {links.map(({ name, href, id }) => (
          <a key={id} href={href} target="_blank" rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 md:gap-2 px-2 md:px-3 py-2 text-[0.6em] md:text-[1.2em] rounded-full font-semibold transition border-3 break-words max-w-full ${buttonWebsiteLinks}`}>
            <span className="break-words text-center">{name?.[lang] ?? href}</span>
          </a>
        ))}
      </div>
    ) : null

  const renderEducationItems = () =>
    visibleEducation.map((item: any, idx: number) => {
      const isUniversity = !!item.educationType?.university
      const group = isUniversity ? 'university' : 'bootcamp'
      const typeTitle =
        item.educationTypeTitle?.[group]?.[lang] ??
        (isUniversity ? (lang === 'es' ? 'Universidad' : 'University') : (lang === 'es' ? 'Bootcamp' : 'Bootcamp'))
      const start = item.educationDateRange?.[group]?.startDate?.[lang] ?? ''
      const end = item.educationDateRange?.[group]?.finishDate?.[lang] ?? ''
      const name = item.educationName?.[group]?.[lang] ?? ''
      const career = item.educationCourseName?.[group]?.[lang]
      const status = item.educationStatus?.[group]?.[lang] ?? ''
      const description = item.educationDescription?.[group]?.[lang] ?? ''
      const links = normalizeLinks(item.educationLinks?.[group])

      const renderCard = () => (
        <div className="prose">
          <div className={`${getBaseCardClasses(theme)} w-full sm:max-w-lg md:max-w-3xl lg:max-w-4xl xl:max-w-5xl`}>
            <div className={getTypeClasses(theme)}>
              <span>{isUniversity ? <IoIosSchool className="text-xl md:text-2xl font-bold" /> : <FaCertificate className="text-xl md:text-2xl font-bold" />}</span>
              {typeTitle}
            </div>
            <h3 className={getNameClasses(theme)}>{name}</h3>
            <h3 className={`text-[0.8em] md:text-[1em] font-bold mb-2 ${theme === 'dark' ? 'text-red-600' : 'text-yellow-700'
              }`}>
              <span className="whitespace-normal break-words">
                {career}{status && <>&nbsp;({status})</>}
              </span>
            </h3>
            

            <p className={`font-semibold mb-1 text-[.8em] md:text-[1.2em] ${theme === 'dark' ? 'text-red-300' : 'text-purple-600'
              }`}>
              {start} - {end}
            </p>
            <p className={`font-semibold mb-1 text-[.8em] md:text-[1.2em] ${theme === 'dark' ? 'text-gray-100' : 'text-gray-950'
              }`}>
              {description}
            </p>
            {renderLinks(links)}
          </div>
        </div>
      )

      const alignLeft = idx % 2 === 0
      return (
        <div key={item.educationId ?? idx} className="grid grid-cols-9 items-start mb-12">
          <div className="col-span-4">{alignLeft && renderCard()}</div>
          <div className="col-span-1 flex flex-col items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${theme === 'dark' ? 'bg-red-600' : 'bg-amber-300'
              }`}>
              <span className="text-sm font-semibold">{idx + 1}</span>
            </div>
            {idx < visibleEducation.length - 1 && <div className="w-px flex-1" />}
          </div>
          <div className="col-span-4">{!alignLeft && renderCard()}</div>
        </div>
      )
    })

  const renderWorkItems = () =>    visibleWork.map((item: any, idx: number) => {
    console.log('visibleWork ',visibleWork)
      const start = item.workDateRange?.startDate?.[lang] ?? item.workDateRange?.company?.startDate?.[lang] ?? ''
      const end = item.workDateRange?.company?.finishDate?.[lang] ?? (item.workHere ? (lang === 'es' ? 'Actualidad' : 'Present') : '')
      const title = item.workPositionRole?.[lang] ?? item.workPositionRole?.company?.[lang] ?? ''
      const company = item.workCompanyName?.[lang] ?? item.workCompanyName?.company?.[lang] ?? ''
      const description = item.workDescription?.[lang] ?? item.workDescription?.company?.[lang] ?? ''
      const typeWork = item.workMode?.company?.[lang] ?? item.workMode?.freelancer?.[lang] ?? ''
      const reasonLeaving = item.workReasonLeaving?.[lang] ?? item.workReasonLeaving?.company?.[lang] ?? ''

      const isCurrent = item.workHere
      const links = normalizeLinks(item.workLinks)

      const renderCard = () => (
        <div className="prose">
          <div className={`${getBaseCardClasses(theme)} w-full sm:max-w-md md:max-w-3xl lg:max-w-4xl xl:max-w-5xl`}>
            <div className={getTypeClasses(theme)}>
              <span>{isCurrent ? (<FaCheck className="text-lg font-bold" />) : (<FaX className="text-lg font-bold" />)}</span>
              {isCurrent ? (lang === 'es' ? 'Trabajo aquí' : 'I work here') : (lang === 'es' ? 'Ya no trabajo aquí' : 'No longer working here')}
            </div>
            <h3 className={getNameClasses(theme)}>{company}</h3>
            <h3 className={`text-[0.8em] md:text-[1em] font-bold mb-2 ${theme === 'dark' ? 'text-red-600' : 'text-yellow-700'
              }`}>
              <span className="whitespace-normal break-words">
                {title}{typeWork && <>&nbsp;({typeWork})</>}
              </span>
            </h3>
            {!isCurrent && reasonLeaving && (
            <span
              className={`mt-2 text-[0.7em] md:text-[1.2em] font-extrabold ${
                theme === "dark" ? "text-sky-400" : "text-purple-800"
              }`}
            >
             {lang === 'es' ? 'Motivo de salida' : 'Reason for leaving'}:&nbsp;{reasonLeaving}
            </span>
          )}
           
            <p className={`font-semibold mb-1 text-[.8em] md:text-[1em] ${theme === 'dark' ? 'text-red-300' : 'text-purple-600'
              }`}>

              {start} - {end}
            </p>
            <p className={`font-semibold mb-1 text-[.8em] md:text-[1.2em] ${theme === 'dark' ? 'text-gray-100' : 'text-gray-950'
              }`}>
              {description}
            </p>
            {renderLinks(links)}
          </div>
        </div>

      )

      const alignLeft = idx % 2 === 0
      return (
        <div key={item.workId ?? idx} className="grid grid-cols-9 items-start mb-12">
          <div className="col-span-4">{alignLeft && renderCard()}</div>
          <div className="col-span-1 flex flex-col items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${theme === 'dark' ? 'bg-red-600' : 'bg-amber-300'
              }`}>
              <span className="text-sm font-semibold">{idx + 1}</span>
            </div>
            {idx < visibleWork.length - 1 && <div className="w-px flex-1 bg-gray-700 mt-1" />}
          </div>
          <div className="col-span-4">{!alignLeft && renderCard()}</div>
        </div>
      )
    })

  return (
    <div className={`w-full ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}`}>
      {/* EDUCACIÓN */}
      <div className="w-full px-6">
        <h3 className="text-center text-2xl font-semibold mb-6">{data.education.title}</h3>
        <section className="relative wrap overflow-hidden pt-10 pb-6">
          <div className={`absolute left-1/2 top-0 h-full w-[2px] z-0 ${getVerticalLineColor(theme)}`} />
          {renderEducationItems()}
        </section>
        {data.education.items.length > 1 && (
          <div className="flex justify-center gap-4 mt-4">
            {visibleEducation.length < data.education.items.length && (
              <button onClick={loadMoreEducation} className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition ${getButtonWebsiteLinks(theme)}`}>
                <FaPlus />
                {lang === 'es' ? 'Mostrar más' : 'Show more'}
              </button>
            )}
            {visibleEducation.length > 1 && (
              <button onClick={showLessEducation} className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition ${getButtonWebsiteLinks(theme)}`}>
                <FaMinus />
                {lang === 'es' ? 'Mostrar menos' : 'Show less'}
              </button>
            )}
          </div>
        )}
      </div>

      {/* EXPERIENCIA */}
      <div className="w-full px-6 mt-12">
        <h3 className="text-center text-2xl font-semibold mb-6">{data.work.title}</h3>
        <section className="relative wrap overflow-hidden pt-10 pb-6">
          <div className={`absolute left-1/2 top-0 h-full w-[2px] z-0  ${getVerticalLineColor(theme)}`} />
          {renderWorkItems()}
        </section>
        {data.work.items.length > 2 && (
          <div className="flex justify-center gap-4 mt-4">
            {visibleWork.length < data.work.items.length && (
              <button onClick={loadMoreWork} className={`flex items-center gap-2 px-6 py-3 rounded-full  font-semibold transition ${getButtonWebsiteLinks(theme)}`}>
                <FaPlus />
                {lang === 'es' ? 'Mostrar más' : 'Show more'}
              </button>
            )}
            {visibleWork.length > (data.work.items.length > 2 ? 2 : 0) && (
              <button onClick={showLessWork} className={`flex items-center gap-2 px-6 py-3 rounded-full  font-semibold transition ${getButtonWebsiteLinks(theme)}`}>
                <FaMinus />
                {lang === 'es' ? 'Mostrar menos' : 'Show less'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default ExperienceDetail
