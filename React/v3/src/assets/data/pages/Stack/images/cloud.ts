import type { Image } from "../../../../../common/interfaces/data/pages/Stack";

const cloud: Image[] = [
    {
        id: 1,
        src: "/img/skills/aws.webp",
        alt: "Amazon Web Services logo in a web development stack",
        title: { en: "Amazon Web Services (AWS)", es: "Amazon Web Services (AWS)" },
        href: "https://aws.amazon.com/es/",
        category: "cloud",
    },
    {
        id: 2,
        src: "/img/skills/gcp.webp",
        alt: "Google Cloud Platform logo in a web development stack",
        title: { en: "Google Cloud Platform (GCP)", es: "Google Cloud Platform (GCP)" },
        href: "https://cloud.google.com/?hl=es",
        category: "cloud",
    },
    {
        id: 3,
        src: "/img/skills/azure.webp",
        alt: "Azure logo in a web development stack",
        title: { en: "Azure", es: "Azure" },
        href: "https://azure.microsoft.com/es-mx",
        category: "cloud",
    },
]
export default cloud