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
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
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
    );
}
