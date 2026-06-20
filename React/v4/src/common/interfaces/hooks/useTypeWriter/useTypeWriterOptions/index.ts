/** Opciones de configuración para el hook useTypewriter */
export interface useTypeWriterOptionsInterface {
  /** Array de líneas de texto a escribir secuencialmente */
  lines: string[];
  /** Velocidad de escritura en milisegundos por carácter (default: 40) */
  speed?: number;
  /** Pausa entre líneas en milisegundos (default: 600) */
  delayBetween?: number;
}