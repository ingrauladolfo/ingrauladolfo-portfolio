type Project = {
    id: number;
    title: { es: string, en: string };
    typeProject: string;
    description: { es: string, en: string };
    year: { es: string, en: string };
    image: {
        cover: {
            href: string;
            alt: string;
        };
        images: {
            id: number;
            href: string;
            alt: string;
        }[];
    };
    tags: string[];
    links: {
        id: number;
        github?: string;
        website?: string;
    }[];
};

export type{Project}