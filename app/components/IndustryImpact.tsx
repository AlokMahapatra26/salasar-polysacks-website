"use client";

import { motion } from "framer-motion";

export default function IndustryImpact() {
    const impacts = [
        {
            title: "Built for Extremes",
            value: "100%",
            description: "Weather-Resistant",
            detail: "HDPE and PP woven fabrics are engineered to withstand harsh UV rays, extreme temperatures, and heavy rainfall, ensuring your cargo remains pristine whether in transit or long-term storage."
        },
        {
            title: "Sustainable Lifecycle",
            value: "100%",
            description: "Recyclable Material",
            detail: "Polymers like HDPE are highly recyclable. Our efficient manufacturing processes minimize waste, and the end-products can be repurposed, contributing to a circular industrial economy."
        },
        {
            title: "Global Supply Chain",
            value: "Zero",
            description: "Compromise",
            detail: "From agricultural staples to heavy industrial chemicals, high-grade polymer packaging is the invisible backbone of global trade, protecting millions of tons of goods every single day."
        }
    ];

    return (
        <section className="py-24 bg-secondary text-white relative overflow-hidden">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 md:flex justify-between items-end gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 mb-4"
                        >
                            <div className="w-12 h-[3px] bg-primary"></div>
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">Industry Impact</span>
                        </motion.div>
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-5xl font-extrabold uppercase tracking-tight"
                        >
                            The Backbone of Global Trade
                        </motion.h3>
                    </div>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/70 max-w-md mt-6 md:mt-0 text-sm leading-relaxed"
                    >
                        Industrial packaging is more than just wrapping. It's a highly engineered science designed to protect vital resources, food supplies, and chemical assets across continents.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {impacts.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ delay: index * 0.1 }}
                            className="border border-white/10 bg-white/5 p-8 relative overflow-hidden group hover:border-primary/50 transition-colors"
                        >
                            {/* Accent line */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                            <h4 className="text-xl font-bold uppercase tracking-wide text-white mb-6 border-b border-white/10 pb-4">{item.title}</h4>

                            <div className="mb-6 flex items-baseline gap-2">
                                <span className="text-5xl font-extrabold text-primary">{item.value}</span>
                                <span className="text-white/60 font-bold uppercase tracking-wider text-xs">{item.description}</span>
                            </div>

                            <p className="text-white/70 text-sm leading-relaxed">
                                {item.detail}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
