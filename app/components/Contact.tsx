"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useState, FormEvent } from "react";
import { siteData } from "../data/siteData";
import { products } from "../data/productData";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [subject, setSubject] = useState("General Inquiry");

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            email: formData.get("email"),
            subject: formData.get("subject"),
            product: formData.get("product"),
            message: formData.get("message"),
        };

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
                setSubject("General Inquiry"); // Reset subject
            } else {
                setStatus("error");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            setStatus("error");
        }

        setTimeout(() => setStatus("idle"), 5000);
    };

    return (
        <section className="py-24 relative industrial-grid overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-4 mb-4"
                    >
                        <div className="w-12 h-[3px] bg-primary"></div>
                        <span className="text-primary font-bold tracking-wider uppercase text-sm">Get In Touch</span>
                    </motion.div>
                    <motion.h3
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl font-extrabold text-secondary uppercase tracking-tight"
                    >
                        Contact Us
                    </motion.h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Details */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-secondary p-8 text-white border-l-4 border-primary">
                            <h4 className="text-xl font-extrabold mb-6 uppercase tracking-wider">Contact Information</h4>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm uppercase tracking-wider">Head Office</div>
                                        <p className="text-gray-400 mt-1 leading-relaxed">
                                            {siteData.contact.addressLine1}<br />
                                            {siteData.contact.addressLine2}<br />
                                            {siteData.contact.addressCountry}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-primary shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm uppercase tracking-wider">Phone</div>
                                        <p className="text-gray-400 mt-1">{siteData.contact.phone}</p>
                                        <p className="text-gray-400">{siteData.contact.phoneSecondary}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-primary shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm uppercase tracking-wider">Email</div>
                                        <p className="text-gray-400 mt-1">{siteData.contact.email}</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-primary shrink-0">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm uppercase tracking-wider">Business Hours</div>
                                        <p className="text-gray-400 mt-1">{siteData.contact.businessHours}</p>
                                        <p className="text-gray-400">{siteData.contact.businessHoursSunday}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-[#f8f8f8] p-8 border-2 border-gray-200"
                    >
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary outline-none transition-colors bg-white text-sm"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary outline-none transition-colors bg-white text-sm"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary outline-none transition-colors bg-white text-sm"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Subject</label>
                                <select
                                    id="subject"
                                    name="subject"
                                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary outline-none transition-colors bg-white text-sm appearance-none"
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}
                                >
                                    <option>General Inquiry</option>
                                    <option>Quote Request</option>
                                    <option>Bulk Order</option>
                                    <option>Partnership</option>
                                </select>
                            </div>

                            {subject === "Bulk Order" && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                >
                                    <label htmlFor="product" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Interested Product</label>
                                    <select
                                        id="product"
                                        name="product"
                                        className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary outline-none transition-colors bg-white text-sm appearance-none"
                                    >
                                        <option value="">Select a product...</option>
                                        {products.map(p => (
                                            <option key={p.slug} value={p.name}>{p.name}</option>
                                        ))}
                                    </select>
                                </motion.div>
                            )}

                            <div>
                                <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary outline-none transition-colors bg-white resize-none text-sm"
                                    placeholder="Tell us about your requirements..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                className="w-full px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-colors border-b-4 border-red-900 flex items-center justify-center gap-2 disabled:bg-gray-400 disabled:border-gray-500"
                            >
                                {status === "submitting" ? "Sending..." : "Send Message"}
                            </button>

                            {status === "success" && (
                                <div className="p-4 bg-green-100 text-green-800 text-sm font-bold text-center border-l-4 border-green-500">
                                    Message sent successfully! We'll get back to you soon.
                                </div>
                            )}
                            {status === "error" && (
                                <div className="p-4 bg-red-100 text-red-800 text-sm font-bold text-center border-l-4 border-red-500">
                                    There was an error sending your message. Please try again.
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>

                {/* Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="mt-20 overflow-hidden border-2 border-gray-200 h-[400px] relative bg-gray-100"
                >
                    <iframe
                        src={siteData.contact.mapIframeSrc}
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
}
