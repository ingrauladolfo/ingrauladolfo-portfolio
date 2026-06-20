import axios from 'axios';
import { create } from 'zustand';
import type { AboutStoreInterface } from '@/common/interfaces';
const API_URL = 'https://github-contributions-api.jogruber.de/v4/ingrauladolfo';
export const useAboutStore = create<AboutStoreInterface & { _loading: Record<string, boolean> }>((set, get) => ({
    years: [],
    contributions: [],
    _loading: {},
    fetchYears: async () => {
        if (get().years.length || get()._loading.years) { return; }
        set(s => ({ _loading: { ...s._loading, years: true } }));
        try {
            const { data } = await axios.get(API_URL);
            set({ years: Object.keys(data?.total ?? {}) });
        } catch (e) { console.error(e); }
        finally {
            set(s => {
                const { years, ...rest } = s._loading;
                return { _loading: rest };
            });
        }
    },
    fetchContributions: async (year: string) => {
        const key = `year-${year}`;
        if (get()._loading[key]) { return; }
        set(s => ({ _loading: { ...s._loading, [key]: true } }));
        try {
            const { data } = await axios.get(API_URL, { params: { y: year } });
            set({ contributions: data?.contributions ?? [] });
        } catch (e) { console.error(e); } finally {
            set(s => {
                const { [key]: _, ...rest } = s._loading;
                return { _loading: rest };
            });
        }
    },
})
);
