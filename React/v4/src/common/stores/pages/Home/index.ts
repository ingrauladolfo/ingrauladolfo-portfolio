import type { HomeStore } from "@/common/interfaces";
import { create } from "zustand";

export const useHomeStore = create<HomeStore>((set, get) => ({
    selected: 0,
    showCv: false,
    showBadge: false,
    showGithub: false,
    showLinkedIn: false,
    showContact: false,
    setSelected:n => set({ selected: n }),
    handleDocClick: e => {
        if (e.button !== 0) {return;}
        if (get().showCv) {return;}
        set({ showCv: true });
        window.setTimeout(() => { if (get().showCv) set({ showCv: false }); }, 1600);
    },
    handleBadgeClick: e => {
        if (e.button !== 0) {return;}
        if (get().showBadge) {return;}
        set({ showBadge: true });
        window.setTimeout(() => { if (get().showBadge) set({ showBadge: false }); }, 1600);
    },
    handleGithubClick: e => {
        if (e.button !== 0) {return;}
        if (get().showGithub){ return;}
        set({ showGithub: true });
        window.setTimeout(() => { if (get().showGithub) set({ showGithub: false }); }, 1600);
    },
    handleLinkedInClick: e => {
        if (e.button !== 0) {return;}
        if (get().showLinkedIn){ return;}
        set({ showLinkedIn: true });
        window.setTimeout(() => { if (get().showLinkedIn) set({ showLinkedIn: false }); }, 1600);
    },
    handleContactClick: e => {
        if (e.button !== 0) {return;}
        if (get().showContact) {return;}
        set({ showContact: true });
        window.setTimeout(() => { if (get().showContact) set({ showContact: false }); }, 1600);
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
    openUrl: rawUrl => {
        const url = String(rawUrl || '').trim();
        if (!url) return;
        try {
            const parsed = new URL(url, window.location.href);
            const proto = parsed.protocol;
            if (proto === 'mailto:' || proto === 'tel:') {
                window.location.href = parsed.href;
                return;
            }
            if (proto === 'http:' || proto === 'https:') {
                window.open(parsed.href, '_blank', 'noopener,noreferrer');
                return;
            }
            window.open(parsed.href, '_blank', 'noopener,noreferrer');
        } catch {
            if (url.startsWith('/')) {
                window.location.assign(url);
            } else if (/^mailto:/i.test(url) || /^tel:/i.test(url)) {
                window.location.href = url;
            } else if (/^https?:\/\//i.test(url)) {
                window.open(url, '_blank', 'noopener,noreferrer');
            } else {
                window.open(url, '_blank', 'noopener,noreferrer');
            }
        }
    },
}));