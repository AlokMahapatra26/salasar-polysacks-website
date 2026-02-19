"use client";

import { motion } from "framer-motion";

const galleryImages = [
    {
        id: 1,
        title: "Extrusion Line",
        category: "Production",
        description: "High-capacity tape extrusion lines ensuring consistent quality.",
        color: "bg-blue-100", // Placeholder color
    },
    {
        id: 2,
        title: "Weaving Loom",
        category: "Weaving",
        description: "Advanced circular looms for heavy-duty fabric production.",
        color: "bg-red-100",
    },
    {
        id: 3,
        title: "Storage Warehouse",
        category: "Storage",
        description: "Spacious warehousing for raw materials and finished goods.",
        color: "bg-gray-200",
    },
    {
        id: 4,
        title: "Quality Testing Lab",
        category: "Quality Control",
        description: "State-of-the-art lab for tensile and durability testing.",
        color: "bg-green-100",
    },
    {
        id: 5,
        title: "Printing Unit",
        category: "Finishing",
        description: "High-speed printing for customized branding on bags.",
        color: "bg-yellow-100",
    },
    {
        id: 6,
        title: "Dispatch Area",
        category: "Logistics",
        description: "Efficient loading bays for timely global shipments.",
        color: "bg-orange-100",
    },
    {
        id: 7,
        title: "Raw Material Storage",
        category: "Inventory",
        description: "Climate-controlled storage for polymer granules.",
        color: "bg-purple-100",
    },
    {
        id: 8,
        title: "Sewing Section",
        category: "Finishing",
        description: "Automated sewing lines for precise bag formation.",
        color: "bg-pink-100",
    },
    {
        id: 9,
        title: "Research Wing",
        category: "R&D",
        description: "Dedicated facility for developing new polymer blends.",
        color: "bg-teal-100",
    },
];

export default function Gallery({ limit }: { limit?: number }) {
    const displayedImages = limit ? galleryImages.slice(0, limit) : galleryImages;

    return (
        <section id="gallery" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wide uppercase text-sm mb-2"
                    >
                        Infrastructure
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold text-secondary"
                    >
                        Inside Our Factory
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-gray-600 max-w-2xl mx-auto"
                    >
                        A glimpse into our advanced manufacturing facility, equipped with modern machinery and rigorous quality control systems.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {displayedImages.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer aspect-[4/3]"
                        >
                            {/* Placeholder for actual image - using colored divs for now */}
                            <div className={`absolute inset-0 ${item.color} group-hover:scale-110 transition-transform duration-500`}></div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                            <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                <span className="inline-block px-2 py-1 mb-2 text-xs font-semibold text-white bg-primary rounded-md">
                                    {item.category}
                                </span>
                                <h4 className="text-xl font-bold text-white mb-1">{item.title}</h4>
                                <p className="text-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
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
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-red-700 md:py-4 md:text-lg transition-colors shadow-lg shadow-red-100"
                        >
                            View More Photos
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
