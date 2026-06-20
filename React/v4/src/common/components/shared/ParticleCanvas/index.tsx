import { useTheme } from "@/common/context";
import { useEffectEvent, useLayoutEffect, useRef, type FC } from "react";
type Particle = { x: number; y: number; vx: number; vy: number; selected?: boolean; };
export const ParticleCanvas: FC = () => {
    const { theme } = useTheme();
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const particlesRef = useRef<Particle[]>([]);
    const draggingIndex = useRef<number | null>(null);
    const mouseRef = useRef({ x: -9999, y: -9999 });
    const roRef = useRef<ResizeObserver | null>(null);
    const rafRef = useRef<number | null>(null);
    const sizeRef = useRef({ w: 1, h: 1 });

    const initParticles = useEffectEvent((cssW: number, cssH: number) => {
        const area = Math.max(1, cssW * cssH);
        const count = Math.max(20, Math.min(140, Math.floor(area / 15000)));

        particlesRef.current = Array.from({ length: count }, () => ({
            x: Math.random() * cssW,
            y: Math.random() * cssH,
            vx: (Math.random() - 0.5) * 0.6,
            vy: (Math.random() - 0.5) * 0.6,
        }));
    });

    useLayoutEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const setSize = () => {
            const rect = canvas.getBoundingClientRect();
            const dpr = Math.max(1, window.devicePixelRatio || 1);

            const cssW = Math.max(1, rect.width);
            const cssH = Math.max(1, rect.height);

            sizeRef.current = { w: cssW, h: cssH };

            canvas.style.cssText = `width:${cssW}px;height:${cssH}px;display:block;`;
            canvas.width = Math.floor(cssW * dpr);
            canvas.height = Math.floor(cssH * dpr);
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

            initParticles(cssW, cssH);
        };

        roRef.current = new ResizeObserver(() => {
            setSize();
        });

        roRef.current.observe(canvas);

        const initialRaf = requestAnimationFrame(setSize);

        const onMouseDown = (e: MouseEvent) => {
            const { w, h } = sizeRef.current;
            if (w <= 0 || h <= 0) return;

            const rect = canvas.getBoundingClientRect();
            const mouseX = e.clientX - rect.left;
            const mouseY = e.clientY - rect.top;
            mouseRef.current = { x: mouseX, y: mouseY };

            const index = particlesRef.current.findIndex((p) => {
                const dx = p.x - mouseX;
                const dy = p.y - mouseY;
                return Math.sqrt(dx * dx + dy * dy) < 8;
            });

            if (index !== -1) {
                draggingIndex.current = index;
                particlesRef.current[index].selected = true;
            }
        };

        const onMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current.x = e.clientX - rect.left;
            mouseRef.current.y = e.clientY - rect.top;

            const index = draggingIndex.current;
            if (index !== null) {
                particlesRef.current[index].x = mouseRef.current.x;
                particlesRef.current[index].y = mouseRef.current.y;
            }
        };

        const onMouseUp = () => {
            if (draggingIndex.current !== null) {
                particlesRef.current[draggingIndex.current].selected = false;
            }
            draggingIndex.current = null;
        };

        canvas.addEventListener("mousedown", onMouseDown);
        window.addEventListener("mousemove", onMouseMove, { passive: true });
        window.addEventListener("mouseup", onMouseUp);

        const draw = () => {
            const { w, h } = sizeRef.current;
            ctx.clearRect(0, 0, w, h);

            const particles = particlesRef.current;
            if (!particles.length) {
                ctx.beginPath();
                ctx.fillStyle = theme === "dark" ? "#fff" : "#000";
                ctx.arc(w / 2, h / 2, 6, 0, Math.PI * 2);
                ctx.fill();
            }

            const lineColor = theme === "dark" ? "255,255,255" : "0,0,0";
            const dotColor = theme === "dark" ? "#f3f4f6" : "#030712";

            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                if (!p.selected) {
                    p.x += p.vx;
                    p.y += p.vy;

                    if (p.x < 0) {
                        p.x = 0;
                        p.vx *= -1;
                    }
                    if (p.x > w) {
                        p.x = w;
                        p.vx *= -1;
                    }
                    if (p.y < 0) {
                        p.y = 0;
                        p.vy *= -1;
                    }
                    if (p.y > h) {
                        p.y = h;
                        p.vy *= -1;
                    }
                }

                ctx.beginPath();
                ctx.fillStyle = dotColor;
                ctx.arc(p.x, p.y, 2, 0, Math.PI * 2);
                ctx.fill();

                let connections = 0;
                for (let j = i + 1; j < particles.length && connections < 4; j++) {
                    const q = particles[j];
                    const dx = p.x - q.x;
                    const dy = p.y - q.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < 100) {
                        const alpha = 1 - dist / 100;
                        ctx.strokeStyle = `rgba(${lineColor},${theme === "dark" ? alpha * 0.7 : alpha * 0.6})`;
                        ctx.lineWidth = 0.5;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(q.x, q.y);
                        ctx.stroke();
                        connections++;
                    }
                }

                const mx = mouseRef.current.x;
                const my = mouseRef.current.y;
                const mdx = p.x - mx;
                const mdy = p.y - my;
                const mdist = Math.sqrt(mdx * mdx + mdy * mdy);

                if (mdist < 150) {
                    const alpha = 1 - mdist / 150;
                    ctx.strokeStyle = `rgba(${lineColor},${alpha})`;
                    ctx.lineWidth = 0.7;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(mx, my);
                    ctx.stroke();
                }
            }

            rafRef.current = requestAnimationFrame(draw);
        };

        rafRef.current = requestAnimationFrame(draw);

        return () => {
            roRef.current?.disconnect();
            canvas.removeEventListener("mousedown", onMouseDown);
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);

            if (rafRef.current) cancelAnimationFrame(rafRef.current);
            cancelAnimationFrame(initialRaf);
        };
    }, [theme]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 z-0 h-full w-full"
            style={{ display: "block" }}
        />
    );
};