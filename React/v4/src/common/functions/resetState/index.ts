import type { TypeWritingHelpersProps } from "@/common/interfaces";

export const resetState = ({ setIsDeleting, setShowTitle, setCurrentIndex, setIndex, dataLength, }: TypeWritingHelpersProps) => {
    setIsDeleting(false);
    setShowTitle(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
    setIndex(0);
};