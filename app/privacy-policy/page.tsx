export default function PrivacyPolicy() {
    return (
        <main className="pt-[112px] pb-24 bg-[#f8f8f8]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white p-8 md:p-16 border border-gray-200">
                    <div className="mb-12 border-b-4 border-primary pb-6 text-center">
                        <h1 className="text-3xl md:text-5xl font-extrabold uppercase tracking-tight text-secondary mb-4">Privacy Policy</h1>
                        <p className="text-primary font-bold tracking-wider uppercase text-sm">Effective Date: {new Date().toLocaleDateString()}</p>
                    </div>

                    <div className="space-y-12 text-gray-600 leading-relaxed">
                        <section>
                            <h2 className="text-xl font-extrabold uppercase tracking-wider text-secondary mb-4 flex items-center gap-3">
                                <span className="w-8 h-[3px] bg-primary block"></span>
                                Information We Collect
                            </h2>
                            <p className="mb-4">When you interact with our website to request quotes or information, we may collect the following personal and business details:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>Name</li>
                                <li>Phone number</li>
                                <li>Email address</li>
                                <li>Company name</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-extrabold uppercase tracking-wider text-secondary mb-4 flex items-center gap-3">
                                <span className="w-8 h-[3px] bg-primary block"></span>
                                How We Use It
                            </h2>
                            <p className="mb-4">The information we collect is strictly used for business purposes to serve you better:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li>To respond to your inquiries promptly</li>
                                <li>To provide accurate product quotations and pricing</li>
                                <li>To improve our services and user experience</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-extrabold uppercase tracking-wider text-secondary mb-4 flex items-center gap-3">
                                <span className="w-8 h-[3px] bg-primary block"></span>
                                Data Protection
                            </h2>
                            <p className="mb-4">Your privacy is important to us. We maintain strict data security protocols:</p>
                            <ul className="list-disc list-inside space-y-2 ml-4">
                                <li><strong>We do not sell, rent, or trade your data to third parties.</strong></li>
                                <li>All collected data is stored securely and accessed only by authorized personnel for business communication.</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-xl font-extrabold uppercase tracking-wider text-secondary mb-4 flex items-center gap-3">
                                <span className="w-8 h-[3px] bg-primary block"></span>
                                Cookies
                            </h2>
                            <p>Our website may use cookies and similar tracking technologies (such as Google Analytics) to analyze website traffic, understand user behavior, and improve our website's performance. You can disable cookies through your browser settings if you prefer.</p>
                        </section>

                        <section className="bg-gray-50 p-6 border border-gray-200 mt-12">
                            <h2 className="text-lg font-extrabold uppercase tracking-wider text-secondary mb-4">Contact Information</h2>
                            <p className="mb-2">If you have any questions regarding this Privacy Policy, please contact us at:</p>
                            <div className="font-bold text-secondary">
                                <p>Email: info@salasarpolysacks.com</p>
                                <p>Phone: +91 98765 43210</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </main>
    );
}
