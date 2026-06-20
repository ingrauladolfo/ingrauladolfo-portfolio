import type { LanguageContextInterface } from "@/common/interfaces/context";
import type { ImageProps } from "../Image";
export type SliderProps = { images: ImageProps[]; lang: LanguageContextInterface['lang']; theme: string; };