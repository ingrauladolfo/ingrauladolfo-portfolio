import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { TbSchoolOff } from "react-icons/tb";
import { IoIosSchool } from "react-icons/io";

export const getEducation = (study, bootcampText = 'Bootcamp', schoolText = "Universidad") => {
    if (study === true) {
        return (
            <div className="flex items-center gap-x-2">
                <TbSchoolOff className="text-purple-800 dark:text-purple-400 h-8 w-8 font-bold" />
                <span className="text-purple-800 dark:text-purple-400 text-[1.2em] font-bold">
                    {bootcampText}
                </span>
            </div>
        );
    }
    return (<div className="flex items-center gap-x-2">
        <IoIosSchool className="text-purple-800 dark:text-purple-400 h-8 w-8 font-bold" />
        <span className="text-purple-800 dark:text-purple-400 text-[1.2em] font-bold">
            {schoolText}
        </span>
    </div>)
}
export const getWorkHere = (wh, rl, workHereText = "Trabajo aquí actualmente", notWorkHereText = "Ya no trabajo aquí") => {
    if (wh && !rl) {
        return (
            <div className="flex items-center gap-x-2">
                <FaCheck className="text-purple-800 dark:text-yellow-400 h-6 w-6" />
                <span className="text-purple-800 dark:text-yellow-400 text-[1em] font-bold">
                    {workHereText}
                </span>
            </div>
        );
    }
    return (
        <div className="flex items-center gap-x-2">
            <FaX className="text-purple-800 dark:text-yellow-400 h-6 w-6" />
            <span className="text-purple-800 dark:text-yellow-400 text-[1em] font-bold">
                {notWorkHereText}
            </span>
        </div>
    );
};

export const getDateRange = (currentYearHandler, start, end) => {
    if (!end) {
        return (
            <time className="font-extrabold text-[1em] italic dark:text-white">
                {currentYearHandler(start)}
            </time>
        );
    }

    return (
        <time className="font-bold text-[1em] italic dark:text-white">
            {start} - {end}
        </time>
    );
};

export const getReasonLeaving = (relea, releaText = 'Razón de salida:') => {
    if (relea) {
        return (
            <span className="text-purple-800  dark:text-sky-400 text-[1.2em] font-extrabold">
                {releaText}{' '}{relea}
            </span>
        )
    }
}