"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const galleryImages = [
    { id: 1, title: "Extrusion Line", category: "Production", description: "High-capacity tape extrusion lines ensuring consistent quality.", color: "bg-slate-300", image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" },
    { id: 2, title: "Weaving Loom", category: "Weaving", description: "Advanced circular looms for heavy-duty fabric production.", color: "bg-slate-400", image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800" },
    { id: 3, title: "Storage Warehouse", category: "Storage", description: "Spacious warehousing for raw materials and finished goods.", color: "bg-slate-300", image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800" },
    { id: 4, title: "Quality Lab", category: "Quality Control", description: "State-of-the-art lab for tensile and durability testing.", color: "bg-slate-400", image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800" },
    { id: 5, title: "Printing Unit", category: "Finishing", description: "High-speed printing for customized branding on bags.", color: "bg-slate-300", image: "https://images.unsplash.com/photo-1621252179027-94459d278660?auto=format&fit=crop&q=80&w=800" },
    { id: 6, title: "Dispatch Area", category: "Logistics", description: "Efficient loading bays for timely global shipments.", color: "bg-slate-400", image: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?auto=format&fit=crop&q=80&w=800" },
    { id: 7, title: "Raw Materials", category: "Inventory", description: "Climate-controlled storage for polymer granules.", color: "bg-slate-300", image: "https://images.unsplash.com/photo-1506469717960-433cebe3f181?auto=format&fit=crop&q=80&w=800" },
    { id: 8, title: "Sewing Section", category: "Finishing", description: "Automated sewing lines for precise bag formation.", color: "bg-slate-400", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&q=80&w=800" },
    { id: 9, title: "Research Wing", category: "R&D", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://images.unsplash.com/photo-1581092335397-9583eb92d232?auto=format&fit=crop&q=80&w=800" },
];

const categories = ["All", ...Array.from(new Set(galleryImages.map(img => img.category)))];

export default function Gallery({ limit }: { limit?: number }) {
    const [activeFilter, setActiveFilter] = useState("All");
    const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

    const filteredImages = galleryImages.filter(img => activeFilter === "All" || img.category === activeFilter);
    const displayedImages = limit ? filteredImages.slice(0, limit) : filteredImages;

    return (
        <section id="gallery" className="py-24 bg-secondary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="w-12 h-[3px] bg-primary"></div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Infrastructure</span>
                    </motion.div>

                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                        <div>
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
                    </div>
                </div>

                {/* Filter Buttons */}
                <div className="mb-10 flex flex-wrap gap-3">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveFilter(category)}
                            className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-colors border ${activeFilter === category
                                ? "bg-primary text-white border-primary"
                                : "bg-transparent text-gray-400 border-white/20 hover:border-white hover:text-white"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-1">
                    <AnimatePresence mode="popLayout">
                        {displayedImages.map((item, index) => (
                            <motion.div
                                layout
                                key={item.id}
                                layoutId={`gallery-image-${item.id}`}
                                onClick={() => setSelectedImage(item)}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="group relative overflow-hidden cursor-pointer aspect-[4/3] bg-black"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                                />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>

                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                                    <span className="inline-block px-3 py-1 mb-2 text-[10px] font-bold text-white bg-primary uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                    <h4 className="text-lg font-extrabold text-white mb-1 uppercase tracking-wide">{item.title}</h4>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {limit && limit < filteredImages.length && (
                    <div className="mt-12 text-center">
                        <Link
                            href="/gallery"
                            className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-primary hover:bg-red-700 uppercase tracking-wider transition-colors border-b-4 border-red-900"
                        >
                            View All Photos
                        </Link>
                    </div>
                )}
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 sm:px-12"
                    >
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-6 right-6 text-white hover:text-primary transition-colors z-50 mix-blend-difference"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                        </button>

                        <motion.div
                            layoutId={`gallery-image-${selectedImage.id}`}
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-w-5xl flex flex-col bg-[#111] overflow-hidden border border-white/10"
                        >
                            <div className="relative aspect-video sm:aspect-[21/9] bg-black">
                                <img
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6 md:p-8">
                                <span className="inline-block px-3 py-1 mb-3 text-[10px] font-bold text-white bg-primary uppercase tracking-wider">
                                    {selectedImage.category}
                                </span>
                                <h3 className="text-2xl font-extrabold text-white mb-2 uppercase tracking-wide">{selectedImage.title}</h3>
                                <p className="text-gray-400 leading-relaxed max-w-3xl">{selectedImage.description}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
