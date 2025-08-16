type Project = {
    id: number;
    title: { es: string, en: string };
    typeProject: string;
    description: { es: string, en: string };
    year: { es: string, en: string };
    image: {
        cover: {
            coverHref: string;
            coverAlt: string;
        };
        images: {
            imagesId: number;
            imagesHref: string;
            imagesAlt: string;
        }[];
    };
    tags: string[];
    links: {
        linksId: number;
        linksGithub?: string;
        linksWebsite?: string;
    }[];
};

export type{Project}