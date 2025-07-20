import type { ReactNode } from "react";

interface BadgeProps {
  text: string;
  icon?: ReactNode; // ReactNode permite íconos como JSX, SVGs, etc.
}
export type {BadgeProps}