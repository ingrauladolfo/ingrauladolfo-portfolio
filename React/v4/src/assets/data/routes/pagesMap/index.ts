import { About, Background, Home, Projects, Skills, Contact } from "@/pages";

export const pagesMap: Record<string, () => Promise<{ default: any }>> = {
    '/': () => Promise.resolve({ default: Home }),
    '/about': () => Promise.resolve({ default: About }),
    '/acerca': () => Promise.resolve({ default: About }),
    '/skills': () => Promise.resolve({ default: Skills }),
    '/habilidades': () => Promise.resolve({ default: Skills }),
    '/projects': () => Promise.resolve({ default: Projects }),
    '/proyectos': () => Promise.resolve({ default: Projects }),
    '/background': () => Promise.resolve({ default: Background }),
    '/trayectoria': () => Promise.resolve({ default: Background }),
    '/contact': () => Promise.resolve({ default: Contact }),
    '/contacto': () => Promise.resolve({ default: Contact }),
};