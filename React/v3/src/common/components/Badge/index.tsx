import { useTheme } from '../../context';
import type { BadgeProps } from '../../interfaces/components/Badge';

const Badge = ({ text, icon }: BadgeProps) => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';
    return (
        <div className="flex items-center">
            <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
                <div className={`inline-flex items-center justify-center w-full px-3 py-1 text-sm rounded-full cursor-pointer backdrop-blur-3xl whitespace-nowrap ${isDark ? 'bg-red-800 text-white/80' : 'bg-blue-800 text-white'}`}>
                    {icon && <span className="mr-2">{icon}</span>} {text}
                </div>
            </span>
        </div>
    );
};

export default Badge