"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Contact() {
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
                                            123 Industrial Area, Phase II,<br />
                                            Okhla, New Delhi - 110020<br />
                                            India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-primary shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm uppercase tracking-wider">Phone</div>
                                        <p className="text-gray-400 mt-1">+91 98765 43210</p>
                                        <p className="text-gray-400">+91 11 2345 6789</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-primary shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm uppercase tracking-wider">Email</div>
                                        <p className="text-gray-400 mt-1">info@salasarpolysacks.com</p>
                                        <p className="text-gray-400">sales@salasarpolysacks.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-10 h-10 bg-white/10 flex items-center justify-center text-primary shrink-0">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-sm uppercase tracking-wider">Business Hours</div>
                                        <p className="text-gray-400 mt-1">Mon - Sat: 9:00 AM - 6:00 PM</p>
                                        <p className="text-gray-400">Sunday: Closed</p>
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
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
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
                                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary outline-none transition-colors bg-white text-sm"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Subject</label>
                                <select
                                    id="subject"
                                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary outline-none transition-colors bg-white text-sm appearance-none"
                                >
                                    <option>General Inquiry</option>
                                    <option>Quote Request</option>
                                    <option>Bulk Order</option>
                                    <option>Partnership</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-xs font-bold text-gray-700 mb-2 uppercase tracking-wider">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 border-2 border-gray-300 focus:border-primary outline-none transition-colors bg-white resize-none text-sm"
                                    placeholder="Tell us about your requirements..."
                                    required
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-4 bg-primary text-white font-bold uppercase tracking-wider hover:bg-red-700 transition-colors border-b-4 border-red-900 flex items-center justify-center gap-2"
                            >
                                Send Message
                            </button>
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
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.966774653303!2d77.2599222!3d28.5355161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c545555555%3A0x6b728c892b5123d8!2sOkhla%20Industrial%20Estate%2C%20New%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709280000000!5m2!1sen!2sin"
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
