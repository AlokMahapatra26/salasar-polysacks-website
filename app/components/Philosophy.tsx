"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
    const values = [
        {
            title: "Quality Products",
            description: "We never compromise on the quality of our HDPE and PP products. Rigorous testing ensures every batch meets global standards.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
            )
        },
        {
            title: "Customer Centricity",
            description: "Our clients are our partners. We work closely with them to understand their unique needs and deliver customized solutions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
            )
        },
        {
            title: "Innovation & Growth",
            description: "We continuously invest in modern technology and research to stay ahead of industry trends and offer cutting-edge packaging.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
            )
        }
    ];

    return (
        <section className="py-24 bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-4 mb-4"
                    >
                        <div className="w-12 h-[3px] bg-primary"></div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Our Philosophy</span>
                        <div className="w-12 h-[3px] bg-primary"></div>
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-extrabold text-secondary uppercase tracking-tight"
                    >
                        Guided By Excellence
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 text-gray-600"
                    >
                        Our core values are the foundation of everything we do, driving us to deliver superior products and build lasting relationships.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((value, index) => (
                        <motion.div
                            key={value.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-white p-8 border-t-4 border-primary shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="w-14 h-14 bg-red-50 text-primary flex items-center justify-center rounded-full mb-6">
                                {value.icon}
                            </div>
                            <h4 className="text-xl font-extrabold text-secondary uppercase tracking-wide mb-3">{value.title}</h4>
                            <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
