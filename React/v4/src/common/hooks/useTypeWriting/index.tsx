import { useLayoutEffect, useState } from "react";
import type { TypeWritingItemInterface, useTypeWritingResultInterface } from '@/common/interfaces'
import { deleteChar, resetState, addChar } from '@/common/functions'
export const useTypeWriting = (data: TypeWritingItemInterface[]): useTypeWritingResultInterface => {
    const [typedText, setTypedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [index, setIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [cursorVisible, setCursorVisible] = useState(true);
    const [showTitle, setShowTitle] = useState(true);
    useLayoutEffect(() => {
        const { title, speed, delay } = data[currentIndex];
        const timer = setTimeout(() => {
            const updateText = isDeleting ? () => deleteChar({ title, index, isDeleting, delay, setTypedText, setIndex, setIsDeleting, setShowTitle, setCurrentIndex, dataLength: data.length, resetState: () => resetState({ title, index, isDeleting, delay, setTypedText, setIndex, setIsDeleting, setShowTitle, setCurrentIndex, dataLength: data.length }), }) : () => addChar({ title, index, isDeleting, delay, setTypedText, setIndex, setIsDeleting, setShowTitle, setCurrentIndex, dataLength: data.length });
            updateText();
        }, speed);
        return () => clearTimeout(timer);
    }, [index, isDeleting, currentIndex, data]);

    useLayoutEffect(() => {
        const cursorTimer = setInterval(() => { setCursorVisible(prev => !prev); }, 500);
        return () => clearInterval(cursorTimer);
    }, []);

    const output = `${typedText}${cursorVisible ? '|' : ''}`;
    return { output, showTitle };
};