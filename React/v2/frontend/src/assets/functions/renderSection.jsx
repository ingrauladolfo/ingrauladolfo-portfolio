// src/components/Timeline/renderSection.jsx
import React from 'react';
const renderSection = (sectionData, getWorkHere, getDateRange, getColor, getEducation, getReasonLeaving, isDark) => {
    const textBase = isDark ? 'text-gray-200' : 'text-gray-900';
    const borderCol = isDark ? 'border-gray-700' : 'border-gray-200';
    const linkBg = isDark ? 'bg-gray-800 hover:bg-gray-700 text-gray-200' : 'bg-gray-200 hover:bg-gray-300 text-gray-900';

    return (
        <div className={`space-y-8 ${textBase}`}>
            <h2 className={`text-2xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                {sectionData.title}
            </h2>

            {sectionData.items.map((item, idx) => (
                <div key={idx} className={`relative pl-8 border-l-2 ${borderCol}`}>
                    <div className={`absolute w-4 h-4 ${getColor(sectionData.color)} rounded-full -left-[9px] top-4`} />

                    <div className="prose">
                        {(item.type === 'Bootcamp' || item.type === 'Universidad') &&
                            getEducation(item.bootcamp, undefined, undefined, isDark)}
                        {(item.workHere || item.reasonLeaving) &&
                            getWorkHere(item.workHere, item.reasonLeaving, undefined, undefined, isDark)}

                        <h3 className="font-semibold mb-1 text-xl text-green-700 dark:text-green-500">
                            {item.title}
                        </h3>

                        <p className={`mt-1 ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {getDateRange(item.startDate, item.finishDate, isDark)}
                        </p>

                        <div className="mt-2">
                            {item.reasonLeaving &&                               getReasonLeaving(item.reasonLeaving, undefined, isDark)}
                        </div>

                        {item.company && (
                            <p className="mt-2 text-lg font-bold text-yellow-700 dark:text-yellow-500">
                                {item.company}
                                {item.typeWork && <span> ({item.typeWork})</span>}
                            </p>
                        )}

                        {item.description && (
                            <p className={`mt-2 leading-relaxed font-mono ${isDark ? 'text-gray-300' : 'text-gray-700'
                                }`}>
                                {item.description}
                            </p>
                        )}

                        {item.links && (
                            <div className="flex flex-wrap gap-2 mt-3">
                                {item.links.map(link => (
                                    <a key={link.id} href={link.href} target="_blank" rel="noopener noreferrer" className={`px-3 py-1 rounded-full text-sm transition-colors ${linkBg}`}>
                                        Sitio web de {link.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {idx !== sectionData.items.length - 1 && (<hr className={`my-6 border-2 ${isDark ? 'border-blue-700' : 'border-blue-900'}`} />)}
                </div>
            ))}
        </div>
    );
};

export default renderSection;
