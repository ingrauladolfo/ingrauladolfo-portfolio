import { getBaseButton, getButtonWebsiteLinks } from "@/assets/styles";
import type { FC } from "react";
import { FaMinus, FaPlus } from "react-icons/fa6";
import type { ButtonPaginationProps } from '@/common/interfaces'

export const ButtonPagination: FC<ButtonPaginationProps> = ({ visibleCount, totalCount, isMobile, isExpanded, onLoadMore, onShowLess, theme, lang, initial, step }) => {
    const threshold = isMobile ? initial : step;
    if (totalCount <= threshold) { return null; }
    return (
        <div className="mt-12 flex justify-center gap-4 flex-wrap" aria-expanded={isExpanded}>
            {visibleCount < totalCount && (
                <button onClick={onLoadMore} aria-expanded={isExpanded} className={`${getBaseButton()} ${getButtonWebsiteLinks(theme)} w-48 text-center text-xl px-6 py-3`}>
                    <FaPlus /> {lang === "es" ? "Mostrar más" : "Show More"}
                </button>
            )}
            {visibleCount > threshold && (
                <button onClick={onShowLess} aria-expanded={isExpanded} className={`${getBaseButton()} ${getButtonWebsiteLinks(theme)} w-48 text-center text-xl px-6 py-3`}>
                    <FaMinus /> {lang === "es" ? "Mostrar menos" : "Show Less"}
                </button>
            )}
        </div>
    );
};