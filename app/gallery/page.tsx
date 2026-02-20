import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function GalleryPage() {
    return (
        <main className="min-h-screen pt-[112px]">
            <Navbar />
            <Breadcrumb />
            <Gallery />
            <Footer />
        </main>
    );
}
