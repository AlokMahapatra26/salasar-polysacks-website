import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-20">
            <Navbar />
            <About detailed={true} />
            <Footer />
        </main>
    );
}
