import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "./components/WhatsAppButton";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Salasar Polysacks | Quality Manufacturing",
  description: "Leading manufacturer of Tarpaulin, HDPE bags, HDPE baby cones, and more. Quality and durability you can trust.",
  keywords: ["HDPE Bags", "Tarpaulin", "Manufacturing", "Baby Cones", "Industrial Packaging", "Salasar Polysacks"],
  openGraph: {
    title: "Salasar Polysacks | Quality Manufacturing",
    description: "Leading manufacturer of high-grade Tarpaulin, HDPE Bags, and industrial packaging solutions.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased`}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
