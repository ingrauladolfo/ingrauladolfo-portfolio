// src/components/Experience/ExperienceDetail.tsx
import type { FC } from 'react'
import type { Education, Work } from '../../../common/interfaces/data/pages/Experience'
import usePaginationResponsive from '../../../common/hooks/usePaginationResponsive'
import { TbSchoolOff } from 'react-icons/tb'
import { IoIosSchool } from 'react-icons/io'
import { FaPlus, FaMinus, FaCheck, FaX } from 'react-icons/fa6'

interface Section<T> {
  title: string
  items: T[]
  color: string
}

interface ExperienceData {
  education: Section<Education>
  work: Section<Work>
}

interface ExperienceDetailProps {
  data: ExperienceData
  lang: 'es' | 'en'
  theme: 'dark' | 'light'
}

const ExperienceDetail: FC<ExperienceDetailProps> = ({ data, lang, theme }) => {
  const buttonWebsiteLinks = `relative overflow-hidden border z-10 transition-colors duration-300 before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:z-[-1] before:transition-all before:duration-700 before:ease-in-out hover:before:w-full ${theme === 'dark'
    ? 'bg-gray-950 border-red-600 text-gray-100 hover:text-gray-950 hover:border-amber-600 before:bg-amber-300'
    : 'bg-gray-100 border-amber-300 text-gray-950 hover:text-gray-100 hover:border-red-600 before:bg-red-600'
    }`

  const {
    visibleItems: visibleEducation,
    loadMore: loadMoreEducation,
    showLess: showLessEducation,
    showButton: showButtonEducation,
  } = usePaginationResponsive(data.education.items, 1, 1)

  const {
    visibleItems: visibleWork,
    loadMore: loadMoreWork,
    showLess: showLessWork,
    showButton: showButtonWork,
  } = usePaginationResponsive(data.work.items, 1, 2)

  const renderLinks = (
    links?: { id: number | string; href: string; name?: { [k: string]: string }; alt?: { [k: string]: string } }[]
  ) =>
    links?.length ? (
      <div className="flex flex-wrap gap-2 mt-3">
        {links.map(l => (
          <a
            key={l.id}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 px-4 py-2 text-sm rounded-full font-semibold transition border-3 ${buttonWebsiteLinks}`}
          >
            {l.name?.[lang] ?? l.alt?.[lang] ?? l.href}
          </a>
        ))}
      </div>
    ) : null

  const renderEducationItems = () =>
    visibleEducation.map((item, idx) => {
      const alignLeft = idx % 2 === 0
      const start = item.startDate[lang]
      const end = item.finishDate[lang] || ''
      return (
        <div key={idx} className="grid grid-cols-9 items-start mb-12">
          <div className="col-span-4">
            {alignLeft && (
              <div className="prose">
                <div className={`rounded-lg shadow-xl md:px-6 md:py-6 px-4 py-4 ${theme === 'dark' ? 'bg-gray-950 text-gray-100 border-2 border-red-600' : 'bg-gray-100 text-gray-950 border-2 border-amber-300'}`} >
                  <div className={`flex items-center gap-x-1 md:gap-x-2 text-[0.8em] md:text-[1.2em] font-bold mb-2 ${theme === 'dark' ? 'text-amber-300' : 'text-red-600'}`}>
                    <span className='mr-2'>
                      {item.type[lang] === (lang === 'es' ? 'Universidad' : 'University')
                        ? <IoIosSchool className='size-4 md:size-8 font-bold' />
                        : <TbSchoolOff className='size-4 md:size-8 font-bold' />}
                    </span>
                    {item.type[lang]}
                  </div>
                  <h3 className={`font-semibold mb-1 text-xl ${theme === 'dark' ? 'text-green-500' : 'text-green-700'}`}>
                    {item.name[lang]}
                    {item.status?.[lang] && (
                      <span className="ml-2">– {item.status[lang]}</span>
                    )}
                  </h3>
                  <p className=" mt-1">{start} - {end}</p>
                  {renderLinks(item.links)}
                </div>
              </div>
            )}
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${theme === 'dark' ? 'bg-red-600' : 'bg-amber-300'
                }`}
            >
              <span className="text-sm font-semibold">{idx + 1}</span>
            </div>
            {idx < visibleEducation.length - 1 && <div className="w-px flex-1 mt-1" />}
          </div>
          <div className="col-span-4">
            {!alignLeft && (
              <div className="prose">
                <div className={`rounded-lg shadow-xl md:px-6 md:py-6 px-4 py-4 ${theme === 'dark' ? 'bg-gray-950 text-gray-100 border-2 border-red-600' : 'bg-gray-100 text-gray-950 border-2 border-amber-300'}`} >
                  <div className={`flex items-center gap-x-1 md:gap-x-2 text-[0.8em] md:text-[1.2em] font-bold mb-2 ${theme === 'dark' ? 'text-amber-300' : 'text-red-600'}`}>
                    <span className='mr-2'>
                      {item.type[lang] === (lang === 'es' ? 'Universidad' : 'University')
                        ? <IoIosSchool className='size-4 md:size-8 font-bold' />
                        : <TbSchoolOff className='size-4 md:size-8 font-bold' />}
                    </span>
                    {item.type[lang]}
                  </div>
                  <h3 className={`font-semibold mb-1 text-xl ${theme === 'dark' ? 'text-green-500' : 'text-green-700'}`}>
                    {item.name[lang]}
                    {item.status?.[lang] && (
                      <span className="ml-2">– {item.status[lang]}</span>
                    )}
                  </h3>
                  <p className=" mt-1">{start} - {end}</p>
                  {renderLinks(item.links)}
                </div>
              </div>
            )}
          </div>
        </div>
      )
    })

  const renderWorkItems = () =>
    visibleWork.map((item, idx) => {
      const alignLeft = idx % 2 === 0
      const start = item.startDate[lang]
      const end = item.endDate?.[lang] ?? (lang === 'es' ? 'Actualidad' : 'Present')
      const isCurrent = item.workHere
      return (
        <div key={idx} className="grid grid-cols-9 items-start mb-12">
          <div className="col-span-4">
            {alignLeft && (
              <div className="prose">
                <div className={`rounded-lg shadow-xl px-6 py-6 ${theme === 'dark' ? 'bg-gray-950 text-gray-100 border-2 border-red-600' : 'bg-gray-100 text-gray-950 border-2 border-amber-300'}`} >
                  <div className={`flex items-center gap-x-2 text-[1.2em] font-bold mb-2 ${theme === 'dark' ? 'text-amber-300' : 'text-red-600'}`}>
                    <span className="mr-2">{isCurrent ? <FaCheck className={`h-6 w-6 font-bold`} /> : <FaX className={`h-6 w-6 font-bold`} />}</span>
                    {isCurrent
                      ? (lang === 'es' ? 'Trabajo aquí' : 'I work here')
                      : (lang === 'es' ? 'Ya no trabajo aquí' : 'No longer working here')}
                  </div>
                  <h3 className={`font-semibold mb-1 text-lg md:text-xl ${theme === 'dark' ? 'text-green-500' : 'text-green-700'}`}>{item.title[lang]}</h3>
                  <p className="mt-1">{start} - {end}</p>
                  {!isCurrent && item.reasonLeaving?.[lang] && (
                    <span className={`mt-2text-[1.2em] font-extrabold ${theme === 'dark' ? "text-sky-400" : "text-purple-800"}`}>{item.reasonLeaving[lang]}</span>
                  )}
                  <p className={`mt-2 ${theme === 'dark' ? 'text-amber-500' : 'text-amber-700'}`}>
                    {item.company[lang]}{item.typeWork?.[lang] ? ` (${item.typeWork[lang]})` : ''}
                  </p>
                  <p className="mt-2 leading-relaxed text-pretty whitespace-normal font-bold">
                    {item.description[lang]}
                  </p>
                  {renderLinks(item.links)}
                </div>
              </div>
            )}
          </div>
          <div className="col-span-1 flex flex-col items-center">
            <div
              className={`w-6 h-6 rounded-full flex items-center justify-center z-10 ${theme === 'dark' ? 'bg-red-600' : 'bg-amber-300'
                }`}
            >
              <span className="text-sm font-semibold">{idx + 1}</span>
            </div>
            {idx < visibleWork.length - 1 && <div className="w-px flex-1 bg-gray-700 mt-1" />}
          </div>
          <div className="col-span-4">
            {!alignLeft && (
              <div className="prose">
                <div
                  className={`rounded-lg shadow-xl px-6 py-6 ${theme === 'dark'
                    ? 'bg-gray-950 text-gray-100 border-2 border-red-600'
                    : 'bg-gray-100 text-gray-950 border-2 border-amber-300'
                    }`}
                >
                  <div className={`flex items-center gap-x-2 text-[1.2em] font-bold mb-2 ${theme === 'dark' ? 'text-amber-300' : 'text-red-600'}`}>
                    <span className="mr-2">{isCurrent ? <FaCheck className={`h-6 w-6 font-bold`} /> : <FaX className={`h-6 w-6 font-bold`} />}</span>
                    {isCurrent
                      ? (lang === 'es' ? 'Trabajo aquí' : 'I work here')
                      : (lang === 'es' ? 'Ya no trabajo aquí' : 'No longer working here')}
                  </div>
                  <h3 className={`font-semibold mb-1 text-lg md:text-xl ${theme === 'dark' ? 'text-green-500' : 'text-green-700'}`}>{item.title[lang]}</h3>

                  <p className="mt-1">
                    {start} - {end}
                  </p>
                  {!isCurrent && item.reasonLeaving?.[lang] && (
                    <span
                      className={`mt-2 text-[1.2em] font-extrabold ${theme === 'dark' ? 'text-sky-400' : 'text-purple-800'
                        }`}
                    >
                      {item.reasonLeaving[lang]}
                    </span>
                  )}
                  <p className={`mt-2 ${theme === 'dark' ? 'text-amber-500' : 'text-amber-700'}`}>
                    {item.company[lang]}
                    {item.typeWork?.[lang] ? ` (${item.typeWork[lang]})` : ''}
                  </p>
                  <p className="mt-2 leading-relaxed text-pretty whitespace-normal font-bold">
                    {item.description[lang]}
                  </p>
                  {renderLinks(item.links)}
                </div>
              </div>
            )}
          </div>
        </div>
      )
    })

  const verticalLineColor = theme === 'dark' ? 'bg-amber-300' : 'bg-red-600'

  return (
    <div className={`w-full ${theme === 'dark' ? 'bg-gray-950' : 'bg-gray-100'}`}>
      {/* EDUCACIÓN */}
      <div className="w-full px-6">
        <h3 className="text-center text-2xl font-semibold mb-6">{data.education.title}</h3>
        <section className="relative wrap overflow-hidden pt-10 pb-6">
          <div className={`absolute left-1/2 top-0 h-full w-[2px] z-0 ${verticalLineColor}`} />
          {renderEducationItems()}
        </section>
        {showButtonEducation && (
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={loadMoreEducation}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition ${theme === 'dark' ? 'bg-red-600 text-gray-100' : 'bg-amber-300 text-gray-950'
                }`}
            >
              <FaPlus />
              {lang === 'es' ? 'Mostrar más' : 'Show more'}
            </button>
            <button
              onClick={showLessEducation}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition ${theme === 'dark' ? 'bg-amber-300 text-gray-950' : 'bg-red-600 text-gray-100'
                }`}
            >
              <FaMinus />
              {lang === 'es' ? 'Mostrar menos' : 'Show less'}
            </button>
          </div>
        )}
      </div>

      {/* EXPERIENCIA */}
      <div className="w-full px-6 mt-12">
        <h3 className="text-center text-2xl font-semibold mb-6">{data.work.title}</h3>
        <section className="relative wrap overflow-hidden pt-10 pb-6">
          <div className={`absolute left-1/2 top-0 h-full w-[2px] z-0 ${verticalLineColor}`} />
          {renderWorkItems()}
        </section>
        {showButtonWork && (
          <div className="flex justify-center gap-4 mt-4">
            <button
              onClick={loadMoreWork}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition ${theme === 'dark' ? 'bg-red-600 text-gray-100' : 'bg-amber-300 text-gray-950'
                }`}
            >
              <FaPlus />
              {lang === 'es' ? 'Mostrar más' : 'Show more'}
            </button>
            <button
              onClick={showLessWork}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition ${theme === 'dark' ? 'bg-amber-300 text-gray-950' : 'bg-red-600 text-gray-100'
                }`}
            >
              <FaMinus />
              {lang === 'es' ? 'Mostrar menos' : 'Show less'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ExperienceDetail
