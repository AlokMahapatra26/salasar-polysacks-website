export default function About({ detailed }: { detailed?: boolean }) {
    return (
        <section id="about" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-video rounded-2xl bg-gray-200 overflow-hidden shadow-lg">
                            {/* Placeholder for factory image */}
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 font-bold uppercase tracking-widest">
                                State-of-the-art Facility
                            </div>
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-8 -left-8 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
                    </div>

                    <div>
                        <h2 className="text-primary font-bold tracking-wide uppercase text-sm mb-2">About Us</h2>
                        <h3 className="text-4xl font-bold text-secondary mb-6">Innovative Manufacturing Solutions Since 1998</h3>

                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                Salasar Polychem is a premier manufacturer specializing in high-density polyethylene (HDPE) and polypropylene (PP) products. With decades of experience, we have established ourselves as a trusted partner for industries requiring robust packaging and textile solutions.
                            </p>
                            <p>
                                Our facility is equipped with cutting-edge machinery, allowing us to maintain strict quality control and meet large-scale demands with precision. We are committed to sustainability, innovation, and customer satisfaction.
                            </p>
                            {detailed && (
                                <>
                                    <p>
                                        Our journey began with a vision to redefine the standards of industrial packaging. Over the years, we have expanded our product portfolio to include a diverse range of solutions, from heavy-duty sacks to precision-engineered components for the textile industry.
                                    </p>
                                    <p>
                                        We pride ourselves on our agile manufacturing processes, which enable us to adapt quickly to market trends and customer requirements. Our dedicated team of engineers and quality assurance experts ensure that every product leaving our factory meets the highest international standards.
                                    </p>
                                </>
                            )}
                        </div>

                        {!detailed && (
                            <div className="mt-8">
                                <a
                                    href="/about"
                                    className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-secondary bg-white hover:bg-gray-50 transition-colors shadow-sm"
                                >
                                    Read Full Story
                                </a>
                            </div>
                        )}

                        <div className="mt-8 pt-8 border-t border-gray-200 grid grid-cols-2 gap-8">
                            <div>
                                <div className="font-bold text-secondary text-xl mb-1">Modern Tech</div>
                                <div className="text-gray-500 text-sm">Advanced weaving and extrusion lines.</div>
                            </div>
                            <div>
                                <div className="font-bold text-secondary text-xl mb-1">Quality Control</div>
                                <div className="text-gray-500 text-sm">Rigorous testing at every stage.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
