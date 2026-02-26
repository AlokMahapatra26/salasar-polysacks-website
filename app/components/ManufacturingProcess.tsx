"use client";

import { motion } from "framer-motion";
import { siteData } from "../data/siteData";

const commonSteps = siteData.manufacturing.commonSteps;
const finalSteps = siteData.manufacturing.finalSteps;

export default function ManufacturingProcess() {
    return (
        <section className="py-24 relative industrial-grid">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Page Header */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="w-12 h-[3px] bg-primary"></div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">How We Build</span>
                    </motion.div>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl lg:text-5xl font-extrabold text-secondary uppercase tracking-tight"
                    >
                        Our Manufacturing Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-gray-600 max-w-3xl"
                    >
                        From raw granules to finished industrial products — a single streamlined production line ensuring top quality at every stage.
                    </motion.p>
                </div>

                {/* ========== COMMON STEPS ========== */}
                <div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <div className="h-8 w-1 bg-primary"></div>
                        <h3 className="text-lg font-extrabold text-secondary uppercase tracking-wider">Common Production Line</h3>
                        <div className="flex-1 h-[2px] bg-gray-200 hidden md:block"></div>
                        <span className="hidden md:block text-xs text-gray-400 font-bold uppercase tracking-wider">All Products</span>
                    </motion.div>

                    <div className="space-y-0">
                        {commonSteps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <motion.div
                                    key={step.step}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ delay: 0.1 }}
                                    className="flex flex-col md:flex-row items-stretch overflow-hidden group/container"
                                >
                                    <div className={`relative aspect-[3/2] md:aspect-auto overflow-hidden text-white w-full md:w-1/2 transition-all duration-700 ease-in-out cursor-default ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                                        <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-transform duration-700" />

                                        {/* Step Number Badge */}
                                        <div className="absolute top-0 left-0 w-16 h-16 bg-primary flex items-center justify-center z-10 shadow-lg group-hover/container:bg-secondary transition-colors duration-500">
                                            <span className="text-white font-extrabold text-lg">{String(step.step).padStart(2, '0')}</span>
                                        </div>
                                    </div>
                                    <div className={`bg-[#f8f8f8] p-8 lg:p-12 flex flex-col justify-center border border-gray-200 transition-all duration-700 ease-in-out w-full md:flex-1 cursor-default ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                                        <h4 className="text-lg font-extrabold text-secondary uppercase tracking-wider mb-4 transition-colors duration-300">{step.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>




                {/* ========== FINAL COMMON STEPS ========== */}
                <div className="space-y-0">
                    {finalSteps.map((step, index) => {
                        // Offset the index by the number of commonSteps so the left/right pattern continues seamlessly
                        const isEven = (commonSteps.length + index) % 2 === 0;
                        return (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex flex-col md:flex-row items-stretch overflow-hidden group/container"
                            >
                                <div className={`relative aspect-[3/2] md:aspect-auto overflow-hidden text-white w-full md:w-1/2 transition-all duration-700 ease-in-out cursor-default ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                                    <img src={step.image} alt={step.title} className="w-full h-full object-cover transition-transform duration-700" />

                                    {/* Step Number Badge */}
                                    <div className="absolute top-0 left-0 w-16 h-16 bg-primary flex items-center justify-center z-10 shadow-lg group-hover/container:bg-secondary transition-colors duration-500">
                                        <span className="text-white font-extrabold text-lg">{String(step.step).padStart(2, '0')}</span>
                                    </div>
                                </div>
                                <div className={`bg-[#f8f8f8] p-8 lg:p-12 flex flex-col justify-center border border-gray-200 transition-all duration-700 ease-in-out w-full md:flex-1 cursor-default ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                                    <h4 className="text-lg font-extrabold text-secondary uppercase tracking-wider mb-4 transition-colors duration-300">{step.title}</h4>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Quality Commitment */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-secondary text-white p-10 border-l-4 border-primary"
                >
                    <div className="grid md:grid-cols-3 gap-8 items-center">
                        <div className="md:col-span-2">
                            <h3 className="text-xl font-extrabold uppercase tracking-wider mb-3">Our Quality Commitment</h3>
                            <p className="text-gray-400 leading-relaxed">
                                Every product crosses multiple quality checkpoints — from raw material testing to final dispatch inspection. We are ISO 9001:2015 certified and adhere to BIS standards, ensuring our products consistently meet the demanding requirements of industrial and agricultural applications.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row md:flex-col gap-4 md:items-end">
                            <div className="border-l-4 border-primary pl-4">
                                <div className="text-2xl font-black text-primary">ISO 9001</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Certified</div>
                            </div>
                            <div className="border-l-4 border-primary pl-4">
                                <div className="text-2xl font-black text-primary">BIS</div>
                                <div className="text-xs text-gray-500 uppercase tracking-wider">Compliant</div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section >
    );
}
