import type { LanguageContextInterface } from "@/common/interfaces/context";
import type { BackgroundDataShapeInterface } from "../BackgroundDataShape";
export type BackgroundStoreInterface = {
    data: BackgroundDataShapeInterface;
    setData: (d: Partial<BackgroundDataShapeInterface>) => void;
    reset: () => void;
    normalizeLinks: (links?: any[]) => any[] | undefined;
    downloadCv: (lang: LanguageContextInterface['lang']) => void;
};