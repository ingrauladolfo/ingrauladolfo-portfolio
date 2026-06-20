import type { TypeWritingHelpersProps } from '@/common/interfaces'
export const deleteChar = ({ title, index, setTypedText, setIndex, resetState }: TypeWritingHelpersProps & { resetState: () => void }) => {
    setTypedText(title.slice(0, index - 1));
    setIndex(prev => prev - 1);
    if (index - 1 === 0) {
        resetState();
    }
};