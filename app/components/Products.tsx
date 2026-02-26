"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "../data/productData";

export default function Products() {
    return (
        <section id="products" className="py-24 relative industrial-grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="w-12 h-[3px] bg-primary"></div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Products</span>
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-extrabold text-secondary uppercase tracking-tight"
                    >
                        Engineered for Excellence
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-gray-600 max-w-2xl"
                    >
                        We manufacture a focused range of high-quality HDPE/PP products tailored to meet the demanding needs of industries worldwide.
                    </motion.p>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Link href={`/products/${product.slug}`} className="relative block h-96 overflow-hidden group cursor-pointer">
                                {/* Background Image with Zoom on Hover */}
                                <div className="absolute inset-0 w-full h-full overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>

                                {/* Gradient Overlays */}
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/40 to-black/10 group-hover:from-primary/95 group-hover:via-primary/70 transition-colors duration-500"></div>

                                {/* Content Block */}
                                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                                    <h4 className="text-2xl font-extrabold text-white uppercase tracking-wide mb-2 flex items-center gap-3">
                                        {/* Small Accent Line */}
                                        <span className="w-4 h-[2px] bg-white hidden group-hover:block transition-all duration-300"></span>
                                        {product.name}
                                    </h4>

                                    <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 group-hover:delay-100 transition-opacity duration-500 mb-6">
                                        {product.description}
                                    </p>

                                    <span className="inline-flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                                        View Details
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
