"use client";

import { motion } from "framer-motion";

import { siteData } from "../data/siteData";

export default function IndustriesWeServe() {
    const industries = siteData.applications;

    return (
        <section className="py-24 bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex items-center justify-center gap-4 mb-4"
                    >
                        <div className="w-12 h-[3px] bg-primary"></div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Applications</span>
                        <div className="w-12 h-[3px] bg-primary"></div>
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-extrabold text-secondary uppercase tracking-tight"
                    >
                        Industries We Serve
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-gray-600"
                    >
                        Our versatile packaging and textile solutions cater to a broad spectrum of heavy industries and agricultural sectors.
                    </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {industries.map((ind, index) => (
                        <motion.div
                            key={ind.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ delay: index * 0.1 }}
                            className="relative h-80 overflow-hidden group cursor-default"
                        >
                            {/* Background Image with Zoom on Hover */}
                            <div className="absolute inset-0 w-full h-full overflow-hidden">
                                <img
                                    src={ind.image}
                                    alt={ind.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Gradient Overlays */}
                            <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-black/10 group-hover:from-primary/95 group-hover:via-primary/70 transition-colors duration-500"></div>

                            {/* Content Block */}
                            <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                <h4 className="text-xl font-extrabold text-white uppercase tracking-wide mb-2 flex items-center gap-3">
                                    {/* Small Accent Line */}
                                    <span className="w-4 h-[2px] bg-white hidden group-hover:block transition-all duration-300"></span>
                                    {ind.name}
                                </h4>

                                <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 group-hover:delay-100 transition-opacity duration-500">
                                    {ind.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
