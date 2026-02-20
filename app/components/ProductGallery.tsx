"use client";

import { useState } from "react";

interface ProductGalleryProps {
    images: string[];
    name: string;
}

export default function ProductGallery({ images, name }: ProductGalleryProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="space-y-3">
            {/* Main Image */}
            <div className="relative aspect-[4/3] overflow-hidden border-2 border-gray-200 bg-gray-100 group">
                <img
                    src={images[activeIndex]}
                    alt={`${name} - Image ${activeIndex + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary"></div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={() => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
                            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-primary text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                            aria-label="Previous image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
                        </button>
                        <button
                            onClick={() => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
                            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-primary text-white flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                            aria-label="Next image"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
                        </button>
                    </>
                )}

                {/* Image Counter */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-black/70 text-white text-xs font-bold tracking-wider">
                    {activeIndex + 1} / {images.length}
                </div>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
                <div className="grid grid-cols-5 gap-2">
                    {images.map((img, i) => (
                        <button
                            key={i}
                            onClick={() => setActiveIndex(i)}
                            className={`relative aspect-square overflow-hidden border-2 transition-all cursor-pointer ${i === activeIndex
                                    ? "border-primary ring-1 ring-primary"
                                    : "border-gray-200 hover:border-gray-400 opacity-70 hover:opacity-100"
                                }`}
                        >
                            <img
                                src={img}
                                alt={`${name} - Thumbnail ${i + 1}`}
                                className="w-full h-full object-cover"
                            />
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
