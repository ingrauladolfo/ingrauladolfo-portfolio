// src/hooks/useTypewriter.ts
import type { useTypeWriterOptionsInterface, useTypeWriterResultInterface } from "@/common/interfaces";
import { useLayoutEffect, useState } from "react";
export const useTypeWriter = ({ lines, speed = 40, delayBetween = 600 }: useTypeWriterOptionsInterface): useTypeWriterResultInterface => {
    const [displayedLines, setDisplayedLines] = useState<string[]>([]);
    const [currentLine, setCurrentLine] = useState(0);
    const [currentChar, setCurrentChar] = useState(0);
    const [isDone, setIsDone] = useState(false);
    useLayoutEffect(() => {
        if (currentLine >= lines.length) { setIsDone(true); return; }
        const text = lines[currentLine];
        // Si aún quedan caracteres por escribir en la línea actual
        if (currentChar < text.length) {
            const timer = setTimeout(() => {
                setDisplayedLines((prev) => { const next = [...prev]; next[currentLine] = (next[currentLine] || "") + text[currentChar]; return next; });
                setCurrentChar((c) => c + 1);
            }, speed);
            return () => clearTimeout(timer);
        }
        // Línea completada → pausa antes de pasar a la siguiente
        const timer = setTimeout(() => { setCurrentLine((l) => l + 1); setCurrentChar(0); }, delayBetween);
        return () => clearTimeout(timer);
    }, [currentLine, currentChar, lines, speed, delayBetween]);
    return { displayedLines, currentLine, currentChar, isDone, isTyping: !isDone };
};