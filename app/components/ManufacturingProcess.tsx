"use client";

import { motion } from "framer-motion";

const commonSteps = [
    {
        step: 1,
        title: "Raw Material Selection",
        description: "High-density polyethylene (HDPE) and polypropylene (PP) granules are sourced from certified suppliers. Each batch is tested for Melt Flow Index (MFI), density, and purity before production begins.",
        image: "https://images.unsplash.com/photo-1635070040884-0adc82b97860?w=600&h=400&fit=crop",
        applies: "All Products",
    },
    {
        step: 2,
        title: "Extrusion",
        description: "Granules are fed into high-capacity extruders where they are melted at 200-250°C. For bags and tarpaulins, the melt is drawn through a flat die to form thin tapes. For baby cones, the melt is injection-molded.",
        image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
        applies: "All Products",
    },
    {
        step: 3,
        title: "Winding",
        description: "Extruded tapes are quenched in a water bath, stretched for orientation, then wound onto individual bobbins at high speed. Proper tension control ensures uniform tape quality for the next stage.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
        applies: "Bags & Tarpaulins",
    },
    {
        step: 4,
        title: "Weaving",
        description: "Bobbins are loaded onto circular or flat looms. Tapes are interwoven in a plain weave pattern to create tubular or flat fabric. The GSM (grams per square meter) is controlled by adjusting tape width and loom settings.",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
        applies: "Bags & Tarpaulins",
    },
];

const branchSteps = {
    bags: {
        title: "HDPE / PP Woven Bags",
        color: "bg-primary",
        steps: [
            {
                step: 5,
                title: "Lamination (Optional)",
                description: "For moisture-resistant bags, woven fabric is coated with a thin LDPE or PP layer through extrusion lamination — creating a waterproof barrier.",
                image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop",
            },
            {
                step: 6,
                title: "Printing",
                description: "Custom branding and regulatory markings are applied using flexographic printing machines. Up to 6-color printing with solvent or water-based inks.",
                image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&h=400&fit=crop",
            },
            {
                step: 7,
                title: "Cutting & Stitching",
                description: "Fabric is cut to bag dimensions and stitched on industrial sewing machines with heavy-duty HDPE threads for secure closure. Valve, open-mouth, and gusseted styles available.",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
            },
        ],
    },
    tarpaulins: {
        title: "Tarpaulins",
        color: "bg-blue-800",
        steps: [
            {
                step: 5,
                title: "Double-Side Lamination",
                description: "Both sides of the woven fabric are coated with LDPE through extrusion lamination, making the tarpaulin fully waterproof with added tear resistance.",
                image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop",
            },
            {
                step: 6,
                title: "Heat Sealing & Hemming",
                description: "Sheets are cut to size with edges heat-sealed or hemmed with reinforced rope folds for maximum durability in outdoor conditions.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
            },
            {
                step: 7,
                title: "Eyelet Punching",
                description: "Aluminum or brass eyelets are punched at regular intervals along the hems for secure rope tie-down during installation.",
                image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop",
            },
        ],
    },
    cones: {
        title: "HDPE Baby Cones",
        color: "bg-amber-800",
        steps: [
            {
                step: 3,
                title: "Injection Molding",
                description: "HDPE granules are melted and injected into precision-engineered steel molds at high pressure. Mold design ensures consistent wall thickness, taper angle, and surface finish.",
                image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop",
            },
            {
                step: 4,
                title: "Cooling & Ejection",
                description: "Molded cones cool inside the mold cavity for dimensional stability, then are automatically ejected. Cooling is optimized to prevent warping or shrinkage.",
                image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=600&h=400&fit=crop",
            },
            {
                step: 5,
                title: "Trimming & Surface Finishing",
                description: "Flash and runner material are trimmed. Each cone surface is polished smooth — even minor imperfections can cause yarn breakage during high-speed winding.",
                image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop",
            },
        ],
    },
};

const finalSteps = [
    {
        step: 8,
        title: "Quality Control & Testing",
        description: "Every batch undergoes rigorous testing — tensile strength, tear resistance, drop test, seam strength, dimensional accuracy, and surface quality. Only products meeting BIS/ISO standards are cleared.",
        image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&h=400&fit=crop",
        applies: "All Products",
    },
    {
        step: 9,
        title: "Packaging & Dispatch",
        description: "Finished products are baled, strapped, and loaded for delivery. Our logistics network ensures timely dispatch across India and to export destinations worldwide.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop",
        applies: "All Products",
    },
];

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
                        From raw granules to finished industrial products — a single streamlined production line that branches into specialized finishing for each product type.
                    </motion.p>
                </div>

                {/* ========== COMMON STEPS ========== */}
                <div className="mb-6">
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
                                    className="grid md:grid-cols-2 items-stretch"
                                >
                                    <div className={`relative aspect-[3/2] md:aspect-auto overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                                        <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                                        <div className="absolute top-0 left-0 w-16 h-16 bg-primary flex items-center justify-center">
                                            <span className="text-white font-extrabold text-lg">{String(step.step).padStart(2, '0')}</span>
                                        </div>
                                        <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/70 text-[10px] text-white font-bold uppercase tracking-wider">
                                            {step.applies}
                                        </div>
                                    </div>
                                    <div className={`bg-[#f8f8f8] p-8 lg:p-12 flex flex-col justify-center border border-gray-200 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                                        <h4 className="text-lg font-extrabold text-secondary uppercase tracking-wider mb-4">{step.title}</h4>
                                        <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

                {/* ========== BRANCHING POINT ========== */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="my-16 text-center relative"
                >
                    {/* Vertical connector */}
                    <div className="w-[3px] h-12 bg-primary mx-auto mb-4"></div>

                    <div className="inline-block bg-secondary text-white px-8 py-4 border-l-4 border-primary">
                        <span className="text-sm font-extrabold uppercase tracking-widest">Process Branches Here</span>
                        <p className="text-gray-400 text-xs mt-1">Each product line goes through specialized finishing</p>
                    </div>

                    {/* Three connectors going down */}
                    <div className="hidden lg:flex justify-center gap-[200px] mt-4">
                        <div className="w-[3px] h-10 bg-primary"></div>
                        <div className="w-[3px] h-10 bg-blue-800"></div>
                        <div className="w-[3px] h-10 bg-amber-800"></div>
                    </div>
                </motion.div>

                {/* ========== BRANCH CARDS ========== */}
                <div className="grid lg:grid-cols-3 gap-6 mb-16">
                    {Object.entries(branchSteps).map(([key, branch], branchIndex) => (
                        <motion.div
                            key={key}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: branchIndex * 0.1 }}
                            className="border-2 border-gray-200 overflow-hidden"
                        >
                            {/* Branch header */}
                            <div className={`${branch.color} text-white px-6 py-4`}>
                                <h4 className="font-extrabold uppercase tracking-wider text-sm">{branch.title}</h4>
                                <p className="text-white/60 text-xs mt-0.5">Specialized Finishing Steps</p>
                            </div>

                            {/* Branch steps */}
                            <div className="divide-y divide-gray-200">
                                {branch.steps.map((step) => (
                                    <div key={step.title} className="group">
                                        {/* Step image */}
                                        <div className="relative aspect-[2/1] overflow-hidden">
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className={`absolute top-0 left-0 w-10 h-10 ${branch.color} flex items-center justify-center`}>
                                                <span className="text-white font-extrabold text-xs">{String(step.step).padStart(2, '0')}</span>
                                            </div>
                                        </div>
                                        {/* Step content */}
                                        <div className="p-5">
                                            <h5 className="font-extrabold text-secondary uppercase tracking-wide text-xs mb-2">{step.title}</h5>
                                            <p className="text-gray-600 text-xs leading-relaxed">{step.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* ========== CONVERGING POINT ========== */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-6 text-center"
                >
                    <div className="hidden lg:flex justify-center gap-[200px] mb-4">
                        <div className="w-[3px] h-10 bg-primary"></div>
                        <div className="w-[3px] h-10 bg-blue-800"></div>
                        <div className="w-[3px] h-10 bg-amber-800"></div>
                    </div>
                    <div className="w-[3px] h-8 bg-primary mx-auto mb-4"></div>
                    <div className="inline-block bg-secondary text-white px-8 py-4 border-l-4 border-primary">
                        <span className="text-sm font-extrabold uppercase tracking-widest">Final Stage — All Products</span>
                    </div>
                    <div className="w-[3px] h-8 bg-primary mx-auto mt-4"></div>
                </motion.div>

                {/* ========== FINAL COMMON STEPS ========== */}
                <div className="mb-16">
                    {finalSteps.map((step, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="grid md:grid-cols-2 items-stretch"
                            >
                                <div className={`relative aspect-[3/2] md:aspect-auto overflow-hidden ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                                    <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
                                    <div className="absolute top-0 left-0 w-16 h-16 bg-primary flex items-center justify-center">
                                        <span className="text-white font-extrabold text-lg">{String(step.step).padStart(2, '0')}</span>
                                    </div>
                                    <div className="absolute bottom-3 right-3 px-3 py-1 bg-black/70 text-[10px] text-white font-bold uppercase tracking-wider">
                                        {step.applies}
                                    </div>
                                </div>
                                <div className={`bg-secondary text-white p-8 lg:p-12 flex flex-col justify-center ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                                    <h4 className="text-lg font-extrabold uppercase tracking-wider mb-4">{step.title}</h4>
                                    <p className="text-gray-400 leading-relaxed">{step.description}</p>
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
        </section>
    );
}
