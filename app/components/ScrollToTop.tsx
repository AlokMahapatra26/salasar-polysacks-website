"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleLenisScroll = (e: any) => {
            const currentScroll = e.detail?.scroll ?? 0;
            setIsVisible(currentScroll > 300);
        };

        const handleNativeScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        window.addEventListener("lenis-scroll", handleLenisScroll as EventListener);
        window.addEventListener("scroll", handleNativeScroll);

        return () => {
            window.removeEventListener("lenis-scroll", handleLenisScroll as EventListener);
            window.removeEventListener("scroll", handleNativeScroll);
        };
    }, []);

    const scrollToTop = () => {
        // Use Lenis scrollTo if available, otherwise fallback to native
        if (window.lenis) {
            window.lenis.scrollTo(0, { duration: 1.2 });
        } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-6 left-6 z-50 p-3 md:p-4 bg-primary text-white rounded-full shadow-lg hover:bg-red-700 transition-colors focus:outline-none cursor-pointer flex items-center justify-center border-b-4 border-red-900 group md:w-16 md:h-16 w-14 h-14"
                    aria-label="Scroll to top"
                >
                    <ChevronUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform" strokeWidth={3} />
                </motion.button>
            )}
        </AnimatePresence>
    );
}
