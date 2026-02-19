import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";

export default function ProductsPage() {
    return (
        <main className="min-h-screen pt-32">
            <Navbar />
            <Products />
            <Footer />
        </main>
    );
}
