export type AboutItemInterface = {
    id: number;
    title: Record<string, string>;
    content: Record<string, any>;
    image?: { href?: string; alt?: Record<string, string>; };
};