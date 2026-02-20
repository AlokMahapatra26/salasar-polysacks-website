"use client";

import { motion } from "framer-motion";

const galleryImages = [
    {
        id: 1,
        title: "Extrusion Line",
        category: "Production",
        description: "High-capacity tape extrusion lines ensuring consistent quality.",
        color: "bg-slate-300",
    },
    {
        id: 2,
        title: "Weaving Loom",
        category: "Weaving",
        description: "Advanced circular looms for heavy-duty fabric production.",
        color: "bg-slate-400",
    },
    {
        id: 3,
        title: "Storage Warehouse",
        category: "Storage",
        description: "Spacious warehousing for raw materials and finished goods.",
        color: "bg-slate-300",
    },
    {
        id: 4,
        title: "Quality Testing Lab",
        category: "Quality Control",
        description: "State-of-the-art lab for tensile and durability testing.",
        color: "bg-slate-400",
    },
    {
        id: 5,
        title: "Printing Unit",
        category: "Finishing",
        description: "High-speed printing for customized branding on bags.",
        color: "bg-slate-300",
    },
    {
        id: 6,
        title: "Dispatch Area",
        category: "Logistics",
        description: "Efficient loading bays for timely global shipments.",
        color: "bg-slate-400",
    },
    {
        id: 7,
        title: "Raw Material Storage",
        category: "Inventory",
        description: "Climate-controlled storage for polymer granules.",
        color: "bg-slate-300",
    },
    {
        id: 8,
        title: "Sewing Section",
        category: "Finishing",
        description: "Automated sewing lines for precise bag formation.",
        color: "bg-slate-400",
    },
    {
        id: 9,
        title: "Research Wing",
        category: "R&D",
        description: "Dedicated facility for developing new polymer blends.",
        color: "bg-slate-300",
    },
];

export default function Gallery({ limit }: { limit?: number }) {
    const displayedImages = limit ? galleryImages.slice(0, limit) : galleryImages;

    return (
        <section id="gallery" className="py-24 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="w-12 h-[3px] bg-primary"></div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Infrastructure</span>
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-extrabold text-white uppercase tracking-tight"
                    >
                        Inside Our Factory
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-gray-400 max-w-2xl"
                    >
                        A glimpse into our advanced manufacturing facility, equipped with modern machinery and rigorous quality control systems.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-1">
                    {displayedImages.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                            className="group relative overflow-hidden cursor-pointer aspect-[4/3]"
                        >
                            <div className={`absolute inset-0 ${item.color} group-hover:scale-110 transition-transform duration-500`}></div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="inline-block px-3 py-1 mb-2 text-[10px] font-bold text-white bg-primary uppercase tracking-wider">
                                    {item.category}
                                </span>
                                <h4 className="text-lg font-extrabold text-white mb-1 uppercase tracking-wide">{item.title}</h4>
                                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                    {item.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {limit && limit < galleryImages.length && (
                    <div className="mt-12 text-center">
                        <a
                            href="/gallery"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary hover:bg-red-700 uppercase tracking-wider transition-colors border-b-4 border-red-900"
                        >
                            View More Photos
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
