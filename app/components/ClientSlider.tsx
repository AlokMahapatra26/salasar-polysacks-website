"use client";

import { siteData } from "../data/siteData";

export default function ClientSlider() {
    const clients = siteData.clients;
    // Duplicate list for seamless infinite scroll
    const duplicated = [...clients, ...clients];

    return (
        <section className="py-16 bg-white border-y border-gray-100 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <div className="flex items-center gap-4 mb-2">
                    <div className="w-12 h-[3px] bg-primary"></div>
                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Clients</span>
                </div>
                <h3 className="text-3xl font-extrabold text-secondary uppercase tracking-tight">
                    Trusted by Industry Leaders
                </h3>
            </div>

            <div className="relative">
                <div className="flex animate-marquee whitespace-nowrap">
                    {duplicated.map((client, index) => (
                        <div
                            key={`${client}-${index}`}
                            className="inline-flex items-center justify-center px-10 py-4 mx-3 bg-gray-50 border border-gray-200 hover:border-primary hover:bg-red-50 transition-all duration-300 cursor-default shrink-0"
                        >
                            <span className="text-secondary font-bold uppercase tracking-wider text-sm whitespace-nowrap">
                                {client}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-marquee {
                    animation: marquee 30s linear infinite;
                }
                .animate-marquee:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
}
