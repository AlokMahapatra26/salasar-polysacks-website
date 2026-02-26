import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import About from "../components/About";
import Philosophy from "../components/Philosophy";
import IndustryImpact from "../components/IndustryImpact";
import IndustriesWeServe from "../components/IndustriesWeServe";
import ProductApplications from "../components/ProductApplications";
import Footer from "../components/Footer";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-[112px]">
            <Navbar />
            <Breadcrumb />
            <About detailed={true} />
            <IndustriesWeServe />
            <ProductApplications />
            <IndustryImpact />
            <Philosophy />
            <Footer />
        </main>
    );
}
