import type { Image } from "../../../../../common/interfaces/data/pages/Stack";

const containers:Image[]=[
     {
    id: 1,
    src: "/img/skills/docker.webp",
    alt: "Docker logo in a web development stack",
    title: { en: "Docker", es: "Docker" },
    href: "https://docs.docker.com/",
    category: "containers",
  },
  {
    id: 2,
    src: "/img/skills/kubernetes.webp",
    alt: "Kubernetes logo in a web development stack",
    title: { en: "Kubernetes", es: "Kubernetes" },
    href: "https://kubernetes.io/es/docs/home/",
    category: "containers",
  },
]
export default containers