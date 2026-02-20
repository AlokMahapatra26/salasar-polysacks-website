import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import ManufacturingProcess from "../components/ManufacturingProcess";
import Footer from "../components/Footer";

export default function ProcessPage() {
    return (
        <main className="min-h-screen pt-[112px]">
            <Navbar />
            <Breadcrumb />
            <ManufacturingProcess />
            <Footer />
        </main>
    );
}
