import type { YearButtonProps } from "@/common/interfaces";

export const YearButton = ({ year, currentYear, onClick, className }: YearButtonProps) => {
    const active = year === currentYear;
    return (
        <button onClick={onClick} className={`rounded-lg px-4 py-2 text-sm font-medium transition hover:cursor-pointer ${active ? "bg-[#33ff76] text-black" : "bg-[#1c0161] text-[#33ff76] hover:border hover:border-[#33ff76]"} ${className ?? ""}`} title={`View Graph for the year ${year}`} >
            {year}
        </button>
    );
};
