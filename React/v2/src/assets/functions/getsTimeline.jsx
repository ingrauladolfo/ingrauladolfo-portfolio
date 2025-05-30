// src/assets/functions/getsTimeline.jsx
import { FaCheck } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { TbSchoolOff } from "react-icons/tb";
import { IoIosSchool } from "react-icons/io";

export const getEducation = (
  study,
  bootcampText = "Bootcamp",
  schoolText = "Universidad",
  isDark
) => {
  const cls = isDark ? "text-purple-400" : "text-purple-800";
  return (
    <div className="flex items-center gap-x-2">
      {study ? (
        <TbSchoolOff className={`${cls} h-8 w-8 font-bold`} />
      ) : (
        <IoIosSchool className={`${cls} h-8 w-8 font-bold`} />
      )}
      <span className={`${cls} text-[1.2em] font-bold`}>
        {study ? bootcampText : schoolText}
      </span>
    </div>
  );
};

export const getWorkHere = (
  workHere,
  reasonLeaving,
  workHereText = "Trabajo aquí actualmente",
  notWorkHereText = "Ya no trabajo aquí",
  isDark
) => {
  const iconCls = isDark ? "text-yellow-400" : "text-purple-800";
  return (
    <div className="flex items-center gap-x-2">
      {workHere && !reasonLeaving ? (
        <FaCheck className={`${iconCls} h-6 w-6`} />
      ) : (
        <FaX className={`${iconCls} h-6 w-6`} />
      )}
      <span className={`${iconCls} text-[1em] font-bold`}>
        {workHere && !reasonLeaving ? workHereText : notWorkHereText}
      </span>
    </div>
  );
};

export const getDateRange = (
  currentYearHandler,
  start,
  end,
  isDark
) => {
  const color = isDark ? "text-gray-300" : "text-gray-600";
  const weight = !end ? "font-extrabold" : "font-bold";
  return (
    <time className={`${weight} italic ${color} block mt-1 text-[1em]`}>
      {!end ? currentYearHandler(start) : `${start} – ${end}`}
    </time>
  );
};

export const getReasonLeaving = (
  reason,
  reasonText = "Razón de salida:",
  isDark
) => {
  if (!reason) return null;
  const cls = isDark ? "text-sky-400" : "text-purple-800";
  return (
    <span className={`${cls} text-[1.2em] font-extrabold`}>
      {reasonText} {reason}
    </span>
  );
};
