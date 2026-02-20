export default function TermsOfService() {
    return (
        <main className="pt-[112px] pb-24 bg-[#f8f8f8]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 md:p-16 border border-gray-200">
                    <div className="mb-12 border-b-4 border-primary pb-6 text-center">
                        <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-secondary mb-4">Terms of Service</h1>
                        <p className="text-primary font-bold tracking-wider uppercase text-sm">Effective Date: {new Date().toLocaleDateString()}</p>
                    </div>

                    <div className="space-y-12 text-gray-600 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-extrabold uppercase tracking-wider text-secondary mb-4 flex items-center gap-3">
                                <span className="w-8 h-[3px] bg-primary block"></span>
                                Website Use Disclaimer
                            </h2>
                            <p>By accessing and using the Salasar Polysacks website, you accept and agree to be bound by these terms. The content provided on this website is for general informational purposes relating to our manufacturing capabilities and product offerings. We reserve the right to modify or discontinue any aspect of the website at any time without notice.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-extrabold uppercase tracking-wider text-secondary mb-4 flex items-center gap-3">
                                <span className="w-8 h-[3px] bg-primary block"></span>
                                Product Specifications
                            </h2>
                            <p>While we strive for accuracy, all product images, dimensions, capacities, and specifications listed on this website are approximate and intended for reference only. <strong>Product specifications may change without prior notice</strong> due to continuous manufacturing improvements or variations in raw materials.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-extrabold uppercase tracking-wider text-secondary mb-4 flex items-center gap-3">
                                <span className="w-8 h-[3px] bg-primary block"></span>
                                Quotations & Pricing
                            </h2>
                            <p>Any pricing, quotes, or estimates requested through this website are strictly subject to final confirmation by our sales team. Submitting a quote request does not constitute a binding contract. Prices may fluctuate based on raw material costs and order volume.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-extrabold uppercase tracking-wider text-secondary mb-4 flex items-center gap-3">
                                <span className="w-8 h-[3px] bg-primary block"></span>
                                Limitation of Liability
                            </h2>
                            <p>Salasar Polysacks accepts no liability for any direct, indirect, incidental, or consequential damages arising from the misuse of our products, reliance on website information, or inability to access the website. It is the buyer's responsibility to ensure that the chosen product is fit for their specific industrial or commercial application.</p>
                        </section>

                        <section>
                            <h2 className="text-xl font-extrabold uppercase tracking-wider text-secondary mb-4 flex items-center gap-3">
                                <span className="w-8 h-[3px] bg-primary block"></span>
                                Intellectual Property
                            </h2>
                            <p>All content on this website, including but not limited to images, logos, text, graphics, and structure, is the exclusive intellectual property of Salasar Polysacks. Unauthorized use, reproduction, or distribution of any material from this website without explicit written permission is strictly prohibited.</p>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
