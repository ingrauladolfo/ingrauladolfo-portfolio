import { initialBackgroundData } from "@/assets/data/pages/Background";
import type { BackgroundDataShapeInterface, BackgroundStoreInterface } from "@/common/interfaces";
import { create } from "zustand";
export const useBackgroundStore = create<BackgroundStoreInterface>((set, get) => ({
    data: initialBackgroundData as BackgroundDataShapeInterface,
    setData: d => {
        const current = get().data;
        set({ data: { education: { ...current.education, ...(d.education ?? {}), }, work: { ...current.work, ...(d.work ?? {}), } }, });
    },
    reset: () => set({ data: initialBackgroundData }),
    normalizeLinks: (links?: any[]) => {
        if (!links?.length) { return undefined; }
        const out: { id: number | string; href: string; name?: Record<string, string> }[] = [];
        links.forEach(l => {
            if (!l) return;

            const pushIfValid = (item: any) =>
                item?.id && item?.href && out.push(item);

            if (Array.isArray(l)) {
                l.forEach(pushIfValid);
                return;
            }

            if (l.company) {
                Array.isArray(l.company)
                    ? l.company.forEach(pushIfValid)
                    : pushIfValid(l.company);
                return;
            }

            pushIfValid(l);
        });

        return out.length ? out : undefined;
    },
    downloadCv: lang => {
        const isEn = lang === 'en';
        const href = isEn ? '/cv/english/Resume - Raúl Adolfo Torres Vargas.pdf' : '/cv/spanish/CV - Raúl Adolfo Torres Vargas.pdf';
        const filename = isEn ? 'Resume - Raúl Adolfo Torres Vargas.pdf' : 'CV - Raúl Adolfo Torres Vargas.pdf';
        const a = document.createElement('a');
        a.href = href;
        a.download = filename;
        a.type = 'application/pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    },
}));
