"use client";

import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

export default function ProductApplications() {
    const products = siteData.productApplications;

    return (
        <section className="py-24 bg-gray-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="w-12 h-[3px] bg-primary"></div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Product Uses</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-extrabold text-secondary uppercase tracking-tight"
                    >
                        Applications of Our Products
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-gray-600 max-w-3xl"
                    >
                        See how our specialized HDPE packaging and textile products are utilized across varied use-cases to deliver protection and durability.
                    </motion.p>
                </div>

                {/* Alternating Layout */}
                <div className="space-y-12 lg:space-y-24">
                    {products.map((product, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <motion.div
                                key={product.name}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: 0.1, duration: 0.5 }}
                                className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${isEven ? "" : "lg:flex-row-reverse"}`}
                            >
                                {/* Image Container */}
                                <div className="w-full lg:w-1/2 relative group overflow-hidden shadow-2xl rounded-sm">
                                    <div className="aspect-[4/3] overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="absolute top-4 left-4 right-4 bottom-4 border-2 border-white/20 pointer-events-none transition-all duration-500 group-hover:scale-95 group-hover:border-white/40"></div>
                                </div>

                                {/* Content Container */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                                    <h3 className="text-3xl font-extrabold text-secondary uppercase tracking-tight mb-4 flex items-center gap-3">
                                        <span className="w-8 h-1 bg-primary inline-block"></span>
                                        {product.name}
                                    </h3>
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        {product.description}
                                    </p>

                                    <div>
                                        <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Key Applications</h4>
                                        <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                                            {product.applications.map((app, appIdx) => (
                                                <li key={appIdx} className="flex items-center gap-3 text-secondary font-medium">
                                                    <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></div>
                                                    {app}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
