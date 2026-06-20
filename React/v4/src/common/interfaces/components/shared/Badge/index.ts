import type { ReactNode } from "react";
export interface BadgeProps {
    text: string;
    icon?: ReactNode; // ReactNode permite íconos como JSX, SVGs, etc.
    status?: string;
}