"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Navbar() {
    const pathname = usePathname();

    const navItems = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Products", href: "/products" },
        { name: "Gallery", href: "/gallery" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Top Contact Bar */}
            <div className="bg-primary text-white py-2 text-xs font-medium">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
                    <div className="flex items-center gap-6">
                        <a href="mailto:info@salasarpolysacks.com" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                            {/* Mail Icon SVG since imports might be tricky with replace */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                            <span>info@salasarpolysacks.com</span>
                        </a>
                        <a href="tel:+919876543210" className="flex items-center gap-2 hover:text-white/80 transition-colors">
                            {/* Phone Icon SVG */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                            <span>+91 98765 43210</span>
                        </a>
                    </div>
                    <div className="hidden sm:block text-white/80">
                        ISO 9001:2015 Certified
                    </div>
                </div>
            </div>

            <nav className="bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <img src="/logo.jpg" alt="Salasar Polychem Logo" className="h-12 w-auto object-contain" />
                            <span className="text-xl font-bold tracking-tight text-secondary">
                                Salasar <span className="text-primary">Polychem</span>
                            </span>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center gap-8">
                            {navItems.map((item) => {
                                const isActive = pathname === item.href || (item.href === "/" && pathname === "/");
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`text-sm font-medium transition-colors ${isActive ? "text-primary font-bold" : "text-gray-600 hover:text-primary"
                                            }`}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                            <Link
                                href="/contact"
                                className="px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-red-700 transition-colors shadow-lg shadow-primary/20"
                            >
                                Get a Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}


