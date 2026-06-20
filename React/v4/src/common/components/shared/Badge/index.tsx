import { useTheme } from "@/common/context";
import type { BadgeProps } from "@/common/interfaces";
export const Badge = ({ text, icon, status }: BadgeProps) => {
    const { theme } = useTheme();
    const defaultVariant = theme === 'dark' ? 'bg-[#FEFF66] text-[#070713]' : 'bg-[#00BCFF] text-[#FEFF66]';
    return (
        <div className="flex items-center">
            <span className="relative inline-flex overflow-hidden rounded-full p-px">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                <div className={`inline-flex items-center justify-center w-full px-3 py-1 text-sm font-extrabold rounded-full cursor-pointer backdrop-blur-3xl whitespace-nowrap ${status && status.trim() ? status : defaultVariant}`}>
                    {icon && <span className="mr-2">{icon}</span>} {text}
                </div>
            </span>
        </div>
    );
};