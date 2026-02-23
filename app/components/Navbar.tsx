"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteData } from "../data/siteData";

export default function Navbar() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Process", href: "/process" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Top Contact Bar */}
            <div className="bg-secondary text-white py-2 text-xs font-medium border-b border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a href={`mailto:${siteData.contact.email}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            <span>{siteData.contact.email}</span>
                        </a>
                        <a href={`tel:${siteData.contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-2 hover:text-primary transition-colors">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <span>{siteData.contact.phone}</span>
                        </a>
                    </div>
                    <div className="hidden sm:block text-white/60 font-bold uppercase tracking-wider text-[10px]">
                        ISO 9001:2015 Certified
                    </div>
                </div>
            </div>

            <nav className="bg-white border-b-2 border-primary">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-3">
                            <img src={siteData.global.logo} alt="Salasar Polysacks Logo" className="h-12 w-auto object-contain" />
                            <span className="text-xl font-extrabold tracking-tight text-secondary uppercase">
                                Salasar <span className="text-primary">Polysacks</span>
                            </span>
                        </Link>

                        {/* Mobile Menu Button */}
                        <div className="md:hidden flex items-center gap-4">
                            <Link
                                href="/contact"
                                className="px-4 py-2 bg-primary text-white text-xs font-bold uppercase tracking-wider hover:bg-red-700 transition-colors sm:hidden"
                            >
                                Quote
                            </Link>
                            <button
                                onClick={() => setIsMobileMenuOpen(true)}
                                className="p-2 text-gray-800 hover:text-primary transition-colors"
                            >
                                <Menu size={28} />
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-1">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`relative px-5 py-2 text-sm font-bold tracking-wider uppercase transition-colors z-10 ${isActive ? "text-white" : "text-gray-700 hover:text-primary"
                                            }`}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="navbar-active"
                                                className="absolute inset-0 bg-secondary -z-10"
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                                            />
                                        )}
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <Link
                                href="/contact"
                                className="ml-4 px-6 py-3 bg-primary text-white text-sm font-bold uppercase tracking-wider hover:bg-red-700 transition-colors border-b-4 border-red-900"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        transition={{ type: "tween", duration: 0.3 }}
                        className="fixed inset-0 z-50 bg-secondary text-white md:hidden flex flex-col"
                    >
                        <div className="flex justify-between items-center p-4 border-b border-white/10">
                            <span className="text-xl font-extrabold tracking-tight text-white uppercase">
                                Salasar <span className="text-primary">Polysacks</span>
                            </span>
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="p-2 text-white hover:text-primary transition-colors"
                            >
                                <X size={28} />
                            </button>
                        </div>

                        <div className="flex flex-col items-center justify-center flex-1 gap-8 p-8">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-2xl font-bold tracking-wider hover:text-primary transition-colors uppercase"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="mt-4 px-8 py-3 bg-primary text-white text-lg font-bold uppercase tracking-wider hover:bg-red-700 transition-colors border-b-4 border-red-900"
                            >
                                Get a Quote
                            </Link>
                        </div>

                        <div className="p-6 bg-black/30 text-center text-sm text-gray-500 border-t border-white/5">
                            <p className="font-bold uppercase tracking-wider text-xs">Heavy Industrial Solutions</p>
                            <p className="mt-1">Since 2011</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
