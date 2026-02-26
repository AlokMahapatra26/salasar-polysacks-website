import Link from "next/link";
import { Twitter, Linkedin, Facebook } from "lucide-react";
import { siteData } from "../data/siteData";
import { products } from "../data/productData";

export default function Footer() {
    return (
        <footer className="bg-[#111] text-white pt-20 pb-10 border-t-4 border-primary">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <img src={siteData.global.logo} alt="Salasar Polysacks Logo" className="h-10 w-auto object-contain bg-white p-0.5" />
                            <span className="text-lg font-extrabold tracking-tight text-white uppercase">Salasar Polysacks</span>
                        </div>
                        <p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Delivering superior quality HDPE/PP solutions for a global market. Strength in every fiber.
                        </p>
                        <div className="flex gap-2">
                            <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                                <Twitter size={16} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                                <Linkedin size={16} />
                            </a>
                            <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-white/10 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors">
                                <Facebook size={16} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-extrabold text-sm mb-6 uppercase tracking-wider border-b border-white/10 pb-3">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-extrabold text-sm mb-6 uppercase tracking-wider border-b border-white/10 pb-3">Products</h4>
                        <ul className="space-y-3 text-sm text-gray-500">
                            {products.map((product) => (
                                <li key={product.slug}>
                                    <Link href={`/products/${product.slug}`} className="hover:text-primary transition-colors">
                                        {product.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-extrabold text-sm mb-6 uppercase tracking-wider border-b border-white/10 pb-3">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-500">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-0.5 text-xs font-bold">▸</span>
                                <span>{siteData.contact.addressLine1}<br />{siteData.contact.addressLine2}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary text-xs font-bold">▸</span>
                                <span>{siteData.contact.phoneSecondary}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary text-xs font-bold">▸</span>
                                <span>{siteData.contact.phone}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary text-xs font-bold">▸</span>
                                <span><span className="text-gray-400">GST:</span> {siteData.contact.gstNumber}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary text-xs font-bold">▸</span>
                                <span>{siteData.contact.email}</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-xs text-gray-600 uppercase tracking-wider">
                        © {new Date().getFullYear()} Salasar Polysacks. All rights reserved.
                    </div>
                    <div className="flex gap-8 text-xs text-gray-600 uppercase tracking-wider">
                        <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
