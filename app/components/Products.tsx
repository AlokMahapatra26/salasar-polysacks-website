"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { products } from "../data/productData";

export default function Products() {
    return (
        <section id="products" className="py-24 bg-[#f8f8f8]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="w-12 h-[3px] bg-primary"></div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Products</span>
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-extrabold text-secondary uppercase tracking-tight"
                    >
                        Engineered for Excellence
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-gray-600 max-w-2xl"
                    >
                        We manufacture a focused range of high-quality HDPE/PP products tailored to meet the demanding needs of industries worldwide.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-white border border-gray-200 overflow-hidden hover:-translate-y-2 transition-all duration-300 hover:shadow-xl cursor-pointer"
                        >
                            <Link href={`/products/${product.slug}`} className="block">
                                {/* Product Image */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4">
                                        <h4 className="text-xl font-extrabold text-white uppercase tracking-wide">{product.name}</h4>
                                    </div>
                                </div>

                                {/* Product Info */}
                                <div className="p-6 border-l-4 border-l-primary">
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{product.description}</p>

                                    <span className="inline-flex items-center gap-2 text-sm font-bold text-secondary uppercase tracking-wider group-hover:text-primary transition-colors">
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
