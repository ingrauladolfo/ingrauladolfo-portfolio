import type { InputType } from "@/common/interfaces";
import { useMemo } from "react";
export const useCurrentYear = (input?: InputType): string | number => {
    const currentDate = useMemo(() => { const now = new Date(); const day = String(now.getDate()).padStart(2, '0'); const month = String(now.getMonth() + 1).padStart(2, '0'); const year = now.getFullYear(); return `${day}/${month}/${year}`; }, []);
    const currentYear = useMemo(() => new Date().getFullYear(), []);
    return useMemo(() => { if (typeof input === 'string' && input.includes('/')) { return `${input} - ${currentDate}`; } if (typeof input === 'number') { return `${input}–${currentYear}`; } return currentYear; }, [input, currentYear, currentDate]);
};

