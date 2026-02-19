import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Products limit={3} />
      <Gallery limit={6} />
      {/* Contact Link / CTA can go here or just rely on Footer/Navbar */}
      <section className="py-24 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Optimize Your Packaging?</h2>
          <p className="text-red-100 mb-8 max-w-2xl mx-auto">Get in touch with us for quotes, customizations, and bulk orders.</p>
          <a href="/contact" className="inline-block px-8 py-4 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-xl">
            Contact Us Today
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
