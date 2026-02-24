import Link from "next/link";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import ClientSlider from "./components/ClientSlider";
import Certificates from "./components/Certificates";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />

      {/* Certifications Trust Strip */}
      <section className="bg-secondary border-y border-white/10 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /><path d="m9 12 2 2 4-4" /></svg>
              </div>
              <div>
                <p className="text-white font-extrabold uppercase tracking-wider text-sm">Certified Quality</p>
                <p className="text-gray-500 text-xs">Trusted by 500+ businesses across India</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "ISO 9001:2015",
                "BIS Certified",
              ].map((cert) => (
                <div key={cert} className="flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C62828" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /></svg>
                  <span className="text-white text-xs font-bold uppercase tracking-wider">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <About />
      <Products />
      <Gallery limit={6} />
      <ClientSlider />
      <Certificates />
      <Contact />
      <Footer />
    </main>
  );
}
