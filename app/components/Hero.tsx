export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-gray-50">
            <div className="absolute inset-0 z-0 opacity-10">
                <div className="absolute inset-0 bg-[radial-gradient(#D32F2F_1px,transparent_1px)] [background-size:16px_16px]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">

                        <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-secondary">
                            Quality That <br />
                            <span className="text-primary relative inline-block">
                                Endures
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-100 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                            Leading manufacturer of high-grade Tarpaulin, HDPE Bags, and industrial packaging solutions. Engineered for strength, reliability, and performance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#products"
                                className="px-8 py-4 bg-secondary text-white font-semibold rounded-lg hover:bg-black transition-all transform hover:-translate-y-1 shadow-xl shadow-gray-200"
                            >
                                Explore Products
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-white text-secondary border border-gray-200 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>

                        <div className="pt-8 grid grid-cols-3 gap-8">
                            {[
                                { label: "Years Exp.", value: "25+" },
                                { label: "Clients", value: "500+" },
                                { label: "Quality", value: "100%" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-bold text-primary">{stat.value}</div>
                                    <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden relative shadow-2xl skew-y-1">
                            {/* Abstract representation of manufacturing/fabric */}
                            <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400 font-bold text-2xl uppercase tracking-widest">
                                Manufacturing <br /> Excellence
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
}
