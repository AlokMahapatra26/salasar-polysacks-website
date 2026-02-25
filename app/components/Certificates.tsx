"use client";

import { motion } from "framer-motion";
import { siteData } from "../data/siteData";
import { FileText, Download, Shield } from "lucide-react";

export default function Certificates() {
    const certificates = siteData.certificates;

    return (
        <section className="py-24 bg-gray-50 relative industrial-grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="w-12 h-[3px] bg-primary"></div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Quality Assurance</span>
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-extrabold text-secondary uppercase tracking-tight"
                    >
                        Our Certifications
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-gray-600 max-w-2xl"
                    >
                        Our products meet the highest international quality and safety standards, backed by recognized certifications.
                    </motion.p>
                </div>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 lg:gap-8">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-3 shadow-xl border-2 border-gray-100 flex flex-col group w-full max-w-[280px]"
                        >
                            <div className="relative w-full overflow-hidden border border-gray-200" style={{ paddingBottom: '120%' /* Shorter Aspect Ratio */ }}>
                                {/* Using iframe with pointer-events-none or specific toolbar params to disable download UI until they click the link, but showing the actual PDF inline */}
                                <iframe
                                    src={`${cert.pdf}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`}
                                    className="absolute inset-0 w-full h-full object-cover"
                                    title={cert.name}
                                    style={{ border: 'none' }}
                                />
                                {/* Overlay to prevent internal nested scrolling over the iframe in some browsers */}
                                <div className="absolute inset-0 z-10 hidden group-hover:block bg-black/5 transition-colors"></div>
                            </div>

                            <div className="pt-4 pb-2 text-center flex-1 flex flex-col justify-end">
                                <h4 className="font-extrabold text-secondary uppercase tracking-wider text-base mb-1">{cert.name}</h4>
                                <p className="text-gray-500 text-xs mb-4 line-clamp-2">{cert.description}</p>

                                <a
                                    href={cert.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 text-xs font-bold text-white bg-primary px-4 py-2 uppercase tracking-wider hover:bg-red-700 transition-colors w-full border-b-4 border-red-900"
                                >
                                    <FileText className="w-3 h-3" />
                                    View Full
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
