import type { TypeWritingHelpersProps } from "@/common/interfaces";
export const addChar = ({ title, index, delay, setTypedText, setIndex, setIsDeleting, setShowTitle, }: TypeWritingHelpersProps) => {
    setTypedText(title.slice(0, index + 1));
    setIndex(prev => prev + 1);
    if (index + 1 === title.length) {
        setTimeout(() => setIsDeleting(true), delay);
    }
    setShowTitle(true);
};