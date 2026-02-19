import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-secondary text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/logo.jpg" alt="Salasar Polychem Logo" className="h-10 w-auto object-contain bg-white rounded-md p-0.5" />
                            <span className="text-xl font-bold tracking-tight text-white">Salasar Polychem</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Delivering superior quality HDPE/PP solutions for a global market. Strength in every fiber.
                        </p>
                        <div className="flex gap-4">
                            {/* Social placeholders */}
                            {['Twitter', 'LinkedIn', 'Facebook'].map(tech => (
                                <div key={tech} className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-xs text-gray-400 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                                    {tech[0]}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Products</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li>HDPE Woven Bags</li>
                            <li>Industrial Tarpaulins</li>
                            <li>HDPE Baby Cones</li>
                            <li>Agro Shade Nets</li>
                            <li>PP Woven Fabric</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-6">Contact</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li className="flex items-start gap-3">
                                <span className="text-primary mt-1">📍</span>
                                <span>123 Industrial Area, Phase II,<br />New Delhi, India - 110020</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary">📞</span>
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-primary">✉️</span>
                                <span>info@salasarpolychem.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Salasar Polychem. All rights reserved.
                    </div>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
