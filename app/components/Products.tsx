"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Tent, Cone } from "lucide-react";

const products = [
    {
        id: 1,
        name: "HDPE Woven Bags",
        description: "High-strength, durable bags perfect for industrial packaging (cement, fertilizer, grains). Customizable sizes and printing available.",
        Icon: ShoppingBag,
        features: ["Heavy Duty", "UV Stabilized", "Custom Printing"],
    },
    {
        id: 2,
        name: "Tarpaulins",
        description: "Waterproof, weather-resistant tarpaulins for agricultural and industrial protection. Available in various GSM and colors.",
        Icon: Tent,
        features: ["Waterproof", "Tear Resistant", "All-Weather"],
    },
    {
        id: 3,
        name: "HDPE Baby Cones",
        description: "Precision-engineered cones for the textile industry. Ensuring smooth yarn unwinding and high stability.",
        Icon: Cone,
        features: ["High Precision", "Durable", "Smooth Surface"],
    },
];

const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
};

export default function Products({ limit }: { limit?: number }) {
    // Add more products to demonstrate the "View More" functionality
    const allProducts = [
        ...products,
        {
            id: 4,
            name: "PP Woven Fabrics",
            description: "Strong, lightweight fabrics for diverse applications including packaging and geotextiles.",
            Icon: ShoppingBag, // Using reusable icon for now
            features: ["High Tensile Strength", "Lightweight", "Customizable"],
        },
        {
            id: 5,
            name: "Laminated Fabrics",
            description: "Coated fabrics offering superior moisture protection and durability.",
            Icon: Tent,
            features: ["Moisture Proof", "Durable Coating", "Versatile"],
        },
        {
            id: 6,
            name: "BOPP Bags",
            description: "Biaxially Oriented Polypropylene bags for high-quality printing and aesthetic appeal.",
            Icon: ShoppingBag,
            features: ["Excellent Clarity", "High Gloss", "Premium Look"],
        }
    ];

    const displayedProducts = limit ? allProducts.slice(0, limit) : allProducts;

    return (
        <section id="products" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary font-bold tracking-wide uppercase text-sm mb-2"
                    >
                        Our Products
                    </motion.h2>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-bold text-secondary"
                    >
                        Engineered for Excellence
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-gray-600 max-w-2xl mx-auto"
                    >
                        We manufacture a wide range of high-quality HDPE/PP products tailored to meet the diverse needs of industries worldwide.
                    </motion.p>
                </div>

                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {displayedProducts.map((product) => (
                        <motion.div
                            key={product.id}
                            variants={item}
                            className="group relative bg-gray-50 rounded-2xl p-8 transition-all hover:-translate-y-2 hover:shadow-xl border border-gray-100"
                        >
                            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                <product.Icon
                                    strokeWidth={1.5}
                                    className="w-8 h-8 group-hover:scale-110 transition-transform duration-300"
                                />
                            </div>

                            <h4 className="text-xl font-bold text-secondary mb-3">{product.name}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed mb-6">{product.description}</p>

                            <ul className="space-y-2">
                                {product.features.map((feature) => (
                                    <li key={feature} className="flex items-center text-xs text-gray-500 font-medium">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="absolute inset-0 border-2 border-transparent group-hover:border-red-50 rounded-2xl pointer-events-none transition-colors duration-300"></div>
                        </motion.div>
                    ))}
                </motion.div>

                {limit && limit < allProducts.length && (
                    <div className="mt-12 text-center">
                        <a
                            href="/products"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-red-700 md:py-4 md:text-lg transition-colors shadow-lg shadow-red-100"
                        >
                            View All Products
                        </a>
                    </div>
                )}
            </div>
        </section>
    );
}
