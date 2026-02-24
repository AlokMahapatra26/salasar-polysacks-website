"use client";

import { useEffect } from "react";
import Lenis from "lenis";

// Extend Window to include lenis
declare global {
    interface Window {
        lenis?: Lenis;
    }
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            touchMultiplier: 2,
        });

        // Store lenis on window so other components can access it
        window.lenis = lenis;

        lenis.on('scroll', (e: any) => {
            window.dispatchEvent(new CustomEvent('lenis-scroll', { detail: { scroll: e.scroll } }));
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
            window.lenis = undefined;
        };
    }, []);

    return <>{children}</>;
}
