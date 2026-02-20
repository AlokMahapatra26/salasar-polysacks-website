"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
    label: string;
    href?: string;
}

const routeLabels: Record<string, string> = {
    about: "About Us",
    products: "Products",
    process: "Manufacturing Process",
    gallery: "Gallery",
    contact: "Contact",
};

export default function Breadcrumb({ items }: { items?: BreadcrumbItem[] }) {
    const pathname = usePathname();

    // Auto-generate breadcrumbs from path if not provided
    const breadcrumbs: BreadcrumbItem[] = items || (() => {
        const segments = pathname.split("/").filter(Boolean);
        return segments.map((seg, i) => ({
            label: routeLabels[seg] || seg.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
            href: i < segments.length - 1 ? "/" + segments.slice(0, i + 1).join("/") : undefined,
        }));
    })();

    return (
        <div className="bg-[#f8f8f8] border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <nav className="flex items-center gap-2 text-sm">
                    <Link href="/" className="text-gray-500 hover:text-primary transition-colors font-medium">
                        Home
                    </Link>
                    {breadcrumbs.map((crumb, i) => (
                        <span key={i} className="flex items-center gap-2">
                            <span className="text-gray-300">/</span>
                            {crumb.href ? (
                                <Link href={crumb.href} className="text-gray-500 hover:text-primary transition-colors font-medium">
                                    {crumb.label}
                                </Link>
                            ) : (
                                <span className="text-secondary font-bold uppercase tracking-wider text-xs">{crumb.label}</span>
                            )}
                        </span>
                    ))}
                </nav>
            </div>
        </div>
    );
}
