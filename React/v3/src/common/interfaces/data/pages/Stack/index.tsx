import type categoryKeys from "../../../../../assets/data/pages/Stack/categoryKeys";

type Category = typeof categoryKeys[number];
type LocalizedString = {
    en: string;
    es: string;
};

type Image = {
    src: string;
    alt: string;
    title: LocalizedString;
    href: string;
    category: Category;
};
type SliderProps = {
    images: Image[];
    lang: "en" | "es";
    theme: string;
};


export type { Category, LocalizedString, Image, SliderProps }