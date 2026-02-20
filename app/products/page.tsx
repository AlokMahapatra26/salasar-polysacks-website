import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import Products from "../components/Products";
import Footer from "../components/Footer";

export default function ProductsPage() {
    return (
        <main className="min-h-screen pt-[112px]">
            <Navbar />
            <Breadcrumb />
            <Products />
            <Footer />
        </main>
    );
}
