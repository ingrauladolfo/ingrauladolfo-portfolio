import { create } from "zustand";
import type { SidebarStoreType } from '@/common/interfaces'
export const useSidebarStore = create<SidebarStoreType>((set, get) => ({
    open: false,
    openSidebar: () => set({ open: true }),
    closeSidebar: () => set({ open: false }),
    toggleSidebar: () => set({ open: !get().open }),
}));
