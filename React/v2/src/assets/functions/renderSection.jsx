// src/components/Timeline/renderSection.jsx
import React from 'react';

const renderSection = (sectionData, getWorkHere, getDateRange, getColor, getEducation, getReasonLeaving) => {
    return (
        <div className="space-y-8 text-white">
            <h2 className="text-2xl font-semibold mb-4">{sectionData.title}</h2>
            {sectionData.items.map((item, itemIndex) => (
                <div key={itemIndex} className="relative pl-8 border-l-2 border-gray-200">
                    <div className={`absolute w-4 h-4 ${getColor(sectionData.color)} rounded-full -left-[9px] top-4`}></div>
                    <div className="prose">
                        {(item.type === 'Bootcamp' || item.type === 'Universidad') && getEducation(item.bootcamp)}
                        {(item.workHere || item.reasonLeaving) && getWorkHere(item.workHere, item.reasonLeaving)}
                        <h3 className="font-semibold mb-1 text-xl text-green-700 dark:text-green-500">{item.title}</h3>
                        {getDateRange(item.startDate, item.finishDate)}
                        <div className="mt-2">
                        {(item.reasonLeaving) && getReasonLeaving(item.reasonLeaving)}
                        </div>
                        {item.company && (
                            <div className="mt-2">
                                <p className="text-lg font-bold text-yellow-700 dark:text-yellow-500">
                                    {item.company}
                                    {item.typeWork && (
                                        <span className="text-yellow-700 dark:text-yellow-500 text-medium">
                                            {' '} ({item.typeWork})
                                        </span>
                                    )}
                                </p>
                            </div>
                        )}

                        {item.description && (<p className=" text-normal font-mono text-black dark:text-white  mt-2 leading-relaxed">{item.description}</p>)}
                        {item.links && (
                            <div className=" flex-col md:flex-row justify-between space-x-0 md:space-x-4 flex flex-wrap gap-2 mt-3">
                                {item.links.map(link => (
                                    <a
                                        key={link.id}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex justify-center items-center mb-4 md:mb-0 px-3 py-1 bg-gray-800 rounded-full text-sm hover:bg-gray-700 transition-colors"
                                    >
                                        Sitio web de {link.name}
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Separador entre elementos */}
                    {itemIndex !== sectionData.items.length - 1 && (<hr className="mb-4 border-blue-900 dark:border-blue-900 border-2 my-6" />)}
                </div>
            ))}
        </div>
    );
};

export default renderSection;