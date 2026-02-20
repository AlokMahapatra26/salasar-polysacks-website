export default function About({ detailed }: { detailed?: boolean }) {
    return (
        <section id="about" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="relative">
                        <div className="aspect-video bg-gray-200 overflow-hidden border-2 border-gray-300">
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 font-bold uppercase tracking-widest text-sm">
                                State-of-the-art Facility
                            </div>
                        </div>
                        {/* Red accent bar */}
                        <div className="h-1 bg-primary"></div>
                    </div>

                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-[3px] bg-primary"></div>
                            <span className="text-primary font-bold tracking-wider uppercase text-sm">About Us</span>
                        </div>
                        <h3 className="text-3xl font-extrabold text-secondary mb-6 uppercase tracking-tight">Innovative Manufacturing Solutions Since 1998</h3>

                        <div className="space-y-5 text-gray-600 leading-relaxed">
                            <p>
                                Salasar Polysacks is a premier manufacturer specializing in high-density polyethylene (HDPE) and polypropylene (PP) products. With decades of experience, we have established ourselves as a trusted partner for industries requiring robust packaging and textile solutions.
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
                                    className="inline-flex items-center justify-center px-6 py-3 text-sm font-bold text-secondary bg-white border-2 border-secondary hover:bg-secondary hover:text-white transition-colors uppercase tracking-wider"
                                >
                                    Read Full Story
                                </a>
                            </div>
                        )}

                        <div className="mt-8 pt-8 border-t-2 border-gray-200 grid grid-cols-2 gap-8">
                            <div className="border-l-4 border-primary pl-4">
                                <div className="font-extrabold text-secondary text-lg uppercase tracking-wide">Modern Tech</div>
                                <div className="text-gray-500 text-sm mt-1">Advanced weaving and extrusion lines.</div>
                            </div>
                            <div className="border-l-4 border-primary pl-4">
                                <div className="font-extrabold text-secondary text-lg uppercase tracking-wide">Quality Control</div>
                                <div className="text-gray-500 text-sm mt-1">Rigorous testing at every stage.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
