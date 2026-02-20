"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const products = [
    { name: "Woven Bags", href: "/products/hdpe-woven-bags", image: "https://5.imimg.com/data5/SELLER/Default/2025/4/502261733/RN/AU/WR/2375730/white-hdpe-bags-500x500.jpg" },
    { name: "Tarpaulins", href: "/products/tarpaulins", image: "https://3.imimg.com/data3/JJ/WO/GLADMIN-145051/hdpe-woven-fabrics-250x250.jpg" },
    { name: "Baby Cones", href: "/products/hdpe-baby-cones", image: "https://www.paperbagsindia.in/assets/images/hm-hdpe-ldpe-liners3.jpg" },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-slide every 3 seconds on mobile
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % products.length);
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative pt-36 pb-0 lg:pt-48 lg:pb-0 overflow-hidden bg-secondary text-white">
            {/* Dark industrial diagonal pattern */}
            <div
                className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
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

            {/* Skewed Background Product Images */}
            <div className="absolute inset-0 z-0 overflow-hidden">
                {/* Expanded left and right to ensure all 3 images cover the screen evenly after skewing */}
                <div className="absolute top-0 bottom-0 -left-[10%] w-[120%] flex opacity-30 -skew-x-12">
                    {products.map((product, index) => (
                        <div key={index} className="flex-1 relative border-r-2 border-white/5 group transition-all duration-700 hover:z-10 cursor-default">
                            <img
                                src={product.image}
                                alt=""
                                className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-700"
                            />
                            {/* Dark gradient overlay to fade images down into the background color. Lightens slightly on hover. */}
                            <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-secondary/80 to-secondary group-hover:from-secondary/10 group-hover:via-secondary/60 transition-colors duration-700 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Red accent line top */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-primary z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pointer-events-none">
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center pb-8 lg:pb-16 pointer-events-auto">
                    <div className="flex flex-col gap-6 lg:gap-8 order-1">

                        <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
                            HDPE Tarpaulin <br className="hidden lg:block" />
                            & Woven Bags <br className="hidden lg:block" />
                            <span className="text-primary">Manufacturer</span>
                        </h1>

                        {/* Mobile Product Slider - one product at a time */}
                        <div className="lg:hidden">
                            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.25em] mb-3">Our Products</p>
                            <Link href={products[currentSlide].href} className="block relative aspect-[16/9] overflow-hidden border border-white/10">
                                {products.map((product, i) => (
                                    <div
                                        key={product.name}
                                        className="absolute inset-0 transition-opacity duration-700"
                                        style={{ opacity: i === currentSlide ? 1 : 0 }}
                                    >
                                        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                        <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                                            <span className="font-extrabold text-white text-sm uppercase tracking-wider">{product.name}</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                        </div>
                                    </div>
                                ))}
                            </Link>
                            {/* Slide dots */}
                            <div className="flex justify-center gap-2 mt-3">
                                {products.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setCurrentSlide(i)}
                                        className={`h-1 transition-all duration-300 ${i === currentSlide ? "w-6 bg-primary" : "w-3 bg-white/30"}`}
                                    />
                                ))}
                            </div>
                        </div>

                        <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                            Leading manufacturer of high-grade Tarpaulin, HDPE Bags, and industrial packaging solutions. Engineered for strength, reliability, and performance.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link
                                href="/products"
                                className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-colors text-center border-b-4 border-red-900"
                            >
                                Explore Products
                            </Link>
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-transparent text-white border-2 border-white/30 font-bold uppercase tracking-wider hover:border-white hover:bg-white/5 transition-all text-center"
                            >
                                Get a Quote
                            </Link>
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

                    {/* Video - Desktop: iframe with autoplay */}
                    <div className="relative order-2 hidden lg:block">
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
                        <div className="h-1 bg-primary"></div>
                    </div>

                    {/* Video - Mobile: thumbnail with play button (autoplay blocked on mobile) */}
                    <div className="relative order-2 lg:hidden">
                        <a
                            href="https://www.youtube.com/watch?v=M7lc1UVf-VE"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block aspect-video bg-black overflow-hidden relative border-2 border-white/10 group"
                        >
                            <img
                                src="https://img.youtube.com/vi/M7lc1UVf-VE/hqdefault.jpg"
                                alt="Watch our manufacturing process"
                                className="absolute inset-0 w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors"></div>
                            {/* Play button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="white" stroke="none"><polygon points="5 3 19 12 5 21 5 3" /></svg>
                                </div>
                            </div>
                            <div className="absolute bottom-3 left-3">
                                <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider">▶ Watch Manufacturing Process</span>
                            </div>
                        </a>
                        <div className="h-1 bg-primary"></div>
                    </div>
                </div>

                {/* What We Manufacture - Desktop only (mobile has slider above) */}
                <div className="hidden lg:block border-t border-white/10 py-8 pointer-events-auto">
                    <p className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.25em] mb-5">What We Manufacture</p>
                    <div className="grid grid-cols-3 gap-3">
                        {products.map((product) => (
                            <Link key={product.name} href={product.href} className="group relative aspect-[4/3] overflow-hidden block border border-white/10">
                                <img src={product.image} alt={product.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
                                    <span className="font-extrabold text-white text-sm uppercase tracking-wider">{product.name}</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
