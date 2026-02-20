import { notFound } from "next/navigation";
import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import ProductDetail from "../../components/ProductDetail";
import { products, getProductBySlug } from "../../data/productData";

// Generate static params for all products
export function generateStaticParams() {
    return products.map((product) => ({
        slug: product.slug,
    }));
}

// Generate metadata for each product page
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);
    if (!product) return { title: "Product Not Found" };

    return {
        title: `${product.name} | Salasar Polysacks`,
        description: product.description,
    };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const product = getProductBySlug(slug);

    if (!product) {
        notFound();
    }

    return (
        <main className="min-h-screen pt-[112px]">
            <Navbar />
            <Breadcrumb items={[
                { label: "Products", href: "/products" },
                { label: product.name },
            ]} />
            <ProductDetail product={product} />
            <Footer />
        </main>
    );
}
