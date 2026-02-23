"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ProductData } from "../data/productData";
import { siteData } from "../data/siteData";
import ProductGallery from "./ProductGallery";

export default function ProductDetail({ product }: { product: ProductData }) {
    return (
        <div>
            {/* Top Section: Gallery + Product Info */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-10">
                        {/* Left - Gallery */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <ProductGallery images={product.gallery} name={product.name} />
                        </motion.div>

                        {/* Right - Product Info + CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col"
                        >
                            <h1 className="text-3xl lg:text-4xl font-extrabold text-secondary uppercase tracking-tight">{product.name}</h1>
                            <p className="text-primary font-bold uppercase tracking-wider text-sm mt-2">{product.tagline}</p>

                            <p className="text-gray-600 leading-relaxed mt-6">{product.description}</p>

                            {/* Quick Specs */}
                            <div className="mt-6 grid grid-cols-2 gap-3">
                                {product.specifications.slice(0, 6).map((spec, i) => (
                                    <div key={i} className="bg-[#f8f8f8] p-3 border border-gray-200">
                                        <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{spec.label}</div>
                                        <div className="text-sm font-bold text-secondary mt-1">{spec.value}</div>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="mt-8 space-y-3">
                                <a
                                    href="/contact"
                                    className="block w-full text-center px-6 py-4 bg-primary text-white font-bold uppercase tracking-wider text-sm hover:bg-red-700 transition-colors border-b-4 border-red-900"
                                >
                                    Request a Quote
                                </a>
                                <a
                                    href={`https://wa.me/${siteData.contact.phone.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi, I'm interested in your ${product.name}. Could you please provide more details?`)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center px-6 py-3 bg-[#25D366] text-white font-bold uppercase tracking-wider text-sm hover:bg-green-600 transition-colors"
                                >
                                    WhatsApp Us
                                </a>
                            </div>

                            {/* Certifications inline */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {product.certifications.map((cert, i) => (
                                    <span key={i} className="text-xs font-bold text-gray-500 bg-gray-100 border border-gray-200 px-3 py-1 uppercase tracking-wider">{cert}</span>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Detailed Content */}
            <section className="py-16 bg-[#f8f8f8] border-y border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Left Column - Description */}
                        <div className="lg:col-span-2">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-[3px] bg-primary"></div>
                                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Detailed Overview</span>
                                </div>

                                <div className="space-y-4 text-gray-600 leading-relaxed">
                                    {product.detailedDescription.map((para, i) => (
                                        <p key={i}>{para}</p>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Features */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-12"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-[3px] bg-primary"></div>
                                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Key Features</span>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3">
                                    {product.features.map((feature, i) => (
                                        <div key={i} className="flex items-start gap-3 p-3 bg-white border border-gray-200">
                                            <span className="w-5 h-5 bg-primary text-white flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">✓</span>
                                            <span className="text-sm text-gray-700">{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            {/* Applications */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="mt-12"
                            >
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-[3px] bg-primary"></div>
                                    <span className="text-primary font-bold tracking-wider uppercase text-sm">Applications</span>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-3">
                                    {product.applications.map((app, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
                                            <span className="w-2 h-[2px] bg-primary shrink-0"></span>
                                            {app}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Column - Sizes */}
                        <div>

                            {/* Available Sizes */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#f8f8f8] p-6 border border-gray-200 mb-8"
                            >
                                <h4 className="font-extrabold text-secondary uppercase tracking-wider text-xs mb-4 pb-3 border-b-2 border-gray-200">Available Sizes</h4>
                                <ul className="space-y-2">
                                    {product.sizes.map((size, i) => (
                                        <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <span className="w-1.5 h-1.5 bg-primary shrink-0"></span>
                                            {size}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>

                            {/* Certifications */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-[#f8f8f8] p-6 border border-gray-200"
                            >
                                <h4 className="font-extrabold text-secondary uppercase tracking-wider text-xs mb-4 pb-3 border-b-2 border-gray-200">Certifications</h4>
                                <div className="space-y-2">
                                    {product.certifications.map((cert, i) => (
                                        <div key={i} className="flex items-center gap-3 text-sm text-gray-600">
                                            <span className="w-5 h-5 bg-secondary text-white flex items-center justify-center text-[10px] font-bold shrink-0">✓</span>
                                            {cert}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Full Specifications Table */}
            <section className="py-16 bg-[#f8f8f8] border-y-2 border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-12 h-[3px] bg-primary"></div>
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">Technical Specifications</span>
                        </div>

                        <div className="bg-white border-2 border-gray-200 overflow-hidden">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-secondary text-white">
                                        <th className="text-left px-6 py-4 text-xs font-extrabold uppercase tracking-wider w-1/3">Parameter</th>
                                        <th className="text-left px-6 py-4 text-xs font-extrabold uppercase tracking-wider">Value</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {product.specifications.map((spec, i) => (
                                        <tr key={i} className={`border-b border-gray-200 ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
                                            <td className="px-6 py-4 text-sm font-bold text-secondary">{spec.label}</td>
                                            <td className="px-6 py-4 text-sm text-gray-600">{spec.value}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-20 bg-secondary text-white text-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 11px)' }}></div>
                <div className="max-w-3xl mx-auto px-4 relative z-10">
                    <h2 className="text-3xl font-extrabold uppercase tracking-tight mb-4">Need {product.name}?</h2>
                    <p className="text-gray-400 mb-8">Contact our team for custom specifications, bulk pricing, and fast delivery across India.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="/contact"
                            className="px-10 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-colors border-b-4 border-red-900"
                        >
                            Get a Quote
                        </a>
                        <a
                            href={`tel:${siteData.contact.phone.replace(/\s+/g, '')}`}
                            className="px-10 py-4 bg-transparent text-white border-2 border-white/30 font-bold uppercase tracking-wider hover:border-white hover:bg-white/5 transition-all"
                        >
                            Call {siteData.contact.phone}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
