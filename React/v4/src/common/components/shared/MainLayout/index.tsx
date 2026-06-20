import { useTheme } from "@/common/context"
import { Outlet } from "react-router";
import { Navbar, ParticleCanvas, Footer } from "@/common/components";
import { useLayoutEffect, useState } from "react";
export const MainLayout = () => {
    const { theme } = useTheme();
    const [interactive, setInteractive] = useState(false);
    useLayoutEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") { setInteractive(false); }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    return (
        <div className={`relative flex flex-col min-h-screen transition-colors duration-200 ${theme === 'dark' ? 'bg-[#070713]' : 'bg-[#d1d1d1]'}`}>
            <Navbar />
            {/* Canvas fijo: siempre cubre el viewport, sin importar cuánto crezca Outlet */}
            <div className={`hidden lg:block fixed inset-0 z-0 ${interactive ? "pointer-events-auto" : "pointer-events-none"}`}>
                <ParticleCanvas />
            </div>

            {/* Outlet con z-10 para que el contenido scrolle POR ENCIMA del canvas */}
            <div className="relative z-10 flex-1 mt-16">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}