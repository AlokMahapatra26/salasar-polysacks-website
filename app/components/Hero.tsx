export default function Hero() {
    return (
        <section className="relative pt-36 pb-20 lg:pt-52 lg:pb-32 overflow-hidden bg-[#111] text-white">
            {/* Subtle Grain/Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8">

                        <h1 className="text-6xl lg:text-8xl font-black leading-[0.9] tracking-tighter uppercase">
                            Quality That <br />
                            <span className="text-primary relative inline-block">
                                Endures
                                <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-900/50 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="text-xl text-gray-400 max-w-lg leading-relaxed font-medium">
                            Leading manufacturer of high-grade Tarpaulin, HDPE Bags, and industrial packaging solutions. Engineered for strength, reliability, and performance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#products"
                                className="px-8 py-4 bg-white text-black font-bold uppercase tracking-wider rounded-sm hover:bg-gray-200 transition-all transform hover:-translate-y-1 shadow-xl shadow-white/5"
                            >
                                Explore Products
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 bg-transparent text-white border border-white/20 font-bold uppercase tracking-wider rounded-sm hover:bg-white/10 transition-colors"
                            >
                                Contact Us
                            </a>
                        </div>

                        <div className="pt-8 grid grid-cols-3 gap-8 border-t border-white/10">
                            {[
                                { label: "Years Exp.", value: "25+" },
                                { label: "Clients", value: "500+" },
                                { label: "Quality", value: "100%" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-4xl font-black text-primary tracking-tight">{stat.value}</div>
                                    <div className="text-sm text-gray-500 font-bold uppercase tracking-wide">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="aspect-[4/5] rounded-sm bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden relative shadow-2xl shadow-black/50 skew-y-1 border border-white/5">
                            {/* Abstract representation of manufacturing/fabric */}
                            <div className="absolute inset-0 opacity-30 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                            <div className="absolute inset-0 flex items-center justify-center text-white/10 font-black text-4xl uppercase tracking-widest -rotate-90">
                                Manufacturing <br /> Excellence
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
