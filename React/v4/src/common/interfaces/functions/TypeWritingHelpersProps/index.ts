import type { Dispatch, SetStateAction } from "react";

export interface TypeWritingHelpersProps {
    title: string;
    index: number;
    isDeleting: boolean;
    delay: number;
    setTypedText: Dispatch<SetStateAction<string>>;
    setIndex: Dispatch<SetStateAction<number>>;
    setIsDeleting: Dispatch<SetStateAction<boolean>>;
    setShowTitle: Dispatch<SetStateAction<boolean>>;
    setCurrentIndex: Dispatch<SetStateAction<number>>;
    dataLength: number;
}