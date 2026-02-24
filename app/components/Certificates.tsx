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

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white border-2 border-gray-200 p-6 hover:border-primary hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="flex items-start gap-4 mb-4">
                                <div className="w-12 h-12 bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                                    <Shield className="w-6 h-6 text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h4 className="font-extrabold text-secondary uppercase tracking-wider text-sm">{cert.name}</h4>
                                    <p className="text-gray-500 text-xs mt-1">{cert.description}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                                <FileText className="w-5 h-5 text-gray-400" />
                                <a
                                    href={cert.pdf}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-sm font-bold text-secondary uppercase tracking-wider hover:text-primary transition-colors cursor-pointer"
                                >
                                    View Certificate
                                    <Download className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
