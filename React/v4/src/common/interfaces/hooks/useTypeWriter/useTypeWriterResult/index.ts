/** Resultado devuelto por el hook useTypewriter */
export interface useTypeWriterResultInterface {
    /** Array con el progreso de escritura de cada línea */
    displayedLines: string[];
    /** Índice de la línea que se está escribiendo actualmente */
    currentLine: number;
    /** Índice del carácter actual dentro de la línea activa */
    currentChar: number;
    /** `true` cuando todas las líneas han sido escritas completamente */
    isDone: boolean;
    /** `true` mientras está escribiendo (no ha terminado) */
    isTyping: boolean;
}