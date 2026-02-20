export default function Hero() {
    return (
        <section className="relative pt-36 pb-16 lg:pt-48 lg:pb-28 overflow-hidden bg-secondary text-white">
            {/* Dark industrial diagonal pattern */}
            <div
                className="absolute inset-0 z-0 opacity-[0.07] pointer-events-none"
                style={{
                    backgroundImage: `repeating-linear-gradient(
                        -45deg,
                        transparent,
                        transparent 10px,
                        rgba(255,255,255,0.1) 10px,
                        rgba(255,255,255,0.1) 11px
                    )`,
                }}
            ></div>

            {/* Red accent line top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    <div className="space-y-8">

                        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
                            HDPE Tarpaulin <br className="hidden lg:block" />
                            & Woven Bags <br className="hidden lg:block" />
                            <span className="text-primary">Manufacturer</span>
                        </h1>

                        <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                            Leading manufacturer of high-grade Tarpaulin, HDPE Bags, and industrial packaging solutions. Engineered for strength, reliability, and performance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="/products"
                                className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-colors text-center border-b-4 border-red-900"
                            >
                                Explore Products
                            </a>
                            <a
                                href="/contact"
                                className="px-8 py-4 bg-transparent text-white border-2 border-white/30 font-bold uppercase tracking-wider hover:border-white hover:bg-white/5 transition-all text-center"
                            >
                                Get a Quote
                            </a>
                        </div>

                        <div className="pt-8 grid grid-cols-3 gap-8 border-t border-white/10">
                            {[
                                { label: "Years Exp.", value: "25+" },
                                { label: "Clients", value: "500+" },
                                { label: "Quality", value: "100%" },
                            ].map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl lg:text-4xl font-black text-primary tracking-tight">{stat.value}</div>
                                    <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mt-1">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative mt-8 lg:mt-0">
                        <div className="aspect-video bg-black overflow-hidden relative border-2 border-white/10">
                            <iframe
                                className="absolute inset-0 w-full h-full"
                                src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&mute=1&controls=0&loop=1&playlist=M7lc1UVf-VE&showinfo=0&rel=0&modestbranding=1"
                                title="Industrial Manufacturing"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                        {/* Red accent bar below video */}
                        <div className="h-1 bg-primary"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
