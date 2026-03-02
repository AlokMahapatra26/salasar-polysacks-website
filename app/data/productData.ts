export interface ProductSpec {
    label: string;
    value: string;
}

export interface ProductData {
    slug: string;
    name: string;
    tagline: string;
    image: string;
    heroImage: string;
    gallery: string[];
    description: string;
    detailedDescription: string[];
    specifications: ProductSpec[];
    applications: string[];
    features: string[];
    sizes: string[];
    certifications: string[];
}

export const products: ProductData[] = [
    {
        slug: "hdpe-woven-bags",
        name: "HDPE Woven Bags",
        tagline: "Heavy-duty packaging for bulk industrial needs",
        image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827089/71_sonqlg.jpg",
        heroImage: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827089/71_sonqlg.jpg",
        gallery: [
            "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827089/71_sonqlg.jpg",
        ],
        description: "High-strength, UV-stabilized HDPE woven bags designed for heavy-duty industrial packaging — from cement and fertilizer to grains and chemicals.",
        detailedDescription: [
            "Our HDPE Woven Bags are manufactured using premium-grade High-Density Polyethylene and Polypropylene granules, ensuring exceptional tensile strength, puncture resistance, and long-term durability under demanding storage and transport conditions.",
            "Each bag is engineered with a precise weave pattern using circular and flat loom technology. This ensures uniform GSM distribution across the entire fabric surface, resulting in consistent load-bearing capacity and tear resistance.",
            "We offer laminated and non-laminated variants. Laminated bags feature an LDPE coating that provides a moisture barrier, making them ideal for hygroscopic materials like cement, sugar, and chemical powders.",
            "Our in-house flexographic printing facility allows up to 6-color custom printing for branding, product information, and regulatory compliance markings. We support both solvent-based and water-based inks for eco-conscious clients.",
            "Available in open-mouth, valve-type, and gusseted configurations. Bottom sealing options include single fold, double fold, and overlock stitching for maximum seam strength."
        ],
        specifications: [
            { label: "Material", value: "HDPE / PP (Virgin Grade)" },
            { label: "GSM Range", value: "55 – 120 GSM" },
            { label: "Width", value: "14\" – 28\" (customizable)" },
            { label: "Length", value: "20\" – 45\" (customizable)" },
            { label: "Weight Capacity", value: "10 kg – 50 kg" },
            { label: "Weave Type", value: "Plain Weave (Circular / Flat Loom)" },
            { label: "Coating", value: "LDPE Lamination (optional)" },
            { label: "Printing", value: "Up to 6 colors (Flexographic)" },
            { label: "Closure", value: "Open Mouth / Valve / Gusseted" },
            { label: "UV Stabilization", value: "Available (1-3% UV masterbatch)" },
            { label: "Seam Type", value: "Single / Double fold, Overlock" },
            { label: "Color", value: "White, Blue, Red, Green, Custom" },
        ],
        applications: [
            "Cement & Building Materials",
            "Fertilizers & Agro Chemicals",
            "Food Grains (Rice, Wheat, Pulses)",
            "Sugar & Salt",
            "Animal Feed & Poultry Feed",
            "Sand & Gravel",
            "Chemical Powders",
            "Seed Packaging",
            "Mineral Packaging",
            "Export Cargo Packaging",
        ],
        features: [
            "High tensile strength and load-bearing capacity",
            "UV stabilized for outdoor storage",
            "Moisture-resistant with lamination option",
            "Custom printing up to 6 colors",
            "Recyclable and eco-friendly material",
            "Excellent tear and puncture resistance",
            "Consistent GSM across the fabric",
            "Anti-slip surface option available",
            "FDA-grade available for food packaging",
            "Compliant with BIS IS 16396 standards",
        ],
        sizes: [
            "14\" × 20\" (Small)",
            "18\" × 30\" (Medium)",
            "20\" × 36\" (Standard)",
            "24\" × 40\" (Large)",
            "26\" × 42\" (Extra Large)",
            "Custom sizes available on request",
        ],
        certifications: [
            "ISO 9001:2015",
            "BIS IS 16396",
            "FDA Compliant (food-grade variants)",
            "REACH Certified",
        ],
    },
    {
        slug: "tarpaulins",
        name: "Tarpaulins",
        tagline: "Waterproof protection for every industry",
        image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827112/48_t9lkly.jpg",
        heroImage: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827112/48_t9lkly.jpg",
        gallery: [
            "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827112/48_t9lkly.jpg",
            "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827112/73_hrnvgl.jpg",
            "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827105/1_ujkshl.jpg",
        ],
        description: "Waterproof, UV-resistant HDPE/PP tarpaulins for agricultural, industrial, and construction applications. Available in multiple GSM ratings and colors.",
        detailedDescription: [
            "Our tarpaulins are manufactured from high-quality HDPE and PP woven fabric with double-side LDPE lamination, providing complete waterproofing and superior tear resistance. They are engineered to withstand extreme weather conditions — from direct sunlight to heavy monsoons.",
            "The fabric is woven on high-speed circular looms with controlled denier and mesh count, allowing precise GSM customization from 70 GSM for lightweight covers to 200+ GSM for heavy-duty industrial applications.",
            "UV stabilizers are compounded directly into the granules during extrusion, ensuring long-term outdoor durability without degradation. Our tarpaulins maintain their structural integrity and color for 3-5 years under continuous sun exposure.",
            "Each sheet is finished with reinforced hemmed edges and high-quality aluminum or brass eyelets punched at regular intervals for secure rope tie-down. Rope-reinforced edges are available for extra-heavy-duty applications.",
            "Available in standard blue-on-blue, blue-on-white, green, orange, and custom color combinations. Roll and sheet formats available for different application requirements."
        ],
        specifications: [
            { label: "Material", value: "HDPE / PP Woven + LDPE Lamination" },
            { label: "GSM Range", value: "70 – 200+ GSM" },
            { label: "Width", value: "6ft – 40ft (customizable)" },
            { label: "Length", value: "9ft – 60ft (customizable)" },
            { label: "Coating", value: "Double-side LDPE Lamination" },
            { label: "Eyelets", value: "Aluminum / Brass (at regular intervals)" },
            { label: "UV Resistance", value: "3-5 year outdoor life" },
            { label: "Water Resistance", value: "100% Waterproof" },
            { label: "Hem Type", value: "Heat-sealed / Rope-reinforced" },
            { label: "Temperature Range", value: "-20°C to +70°C" },
            { label: "Tear Strength (Warp)", value: "≥ 50 N (varies by GSM)" },
            { label: "Color Options", value: "Blue/Blue, Blue/White, Green, Orange, Custom" },
        ],
        applications: [
            "Agricultural Crop Covering",
            "Truck & Vehicle Covering",
            "Construction Site Protection",
            "Temporary Roofing & Shelter",
            "Warehouse & Inventory Cover",
            "Swimming Pool Covers",
            "Open Storage Protection",
            "Disaster Relief Shelters",
            "Sports Ground Covers",
            "Fumigation Covers",
        ],
        features: [
            "100% waterproof with double-side lamination",
            "UV stabilized for 3-5 years outdoor use",
            "Reinforced eyelet edges for secure fastening",
            "Lightweight yet extremely durable",
            "Resistant to rot, mildew, and fungus",
            "Foldable and easy to transport",
            "Available in custom colors and sizes",
            "High tear and wind resistance",
            "Non-toxic and chemically inert",
            "Temperature resistant (-20°C to +70°C)",
        ],
        sizes: [
            "6ft × 9ft",
            "9ft × 12ft",
            "12ft × 15ft",
            "15ft × 18ft",
            "18ft × 24ft",
            "24ft × 30ft",
            "30ft × 40ft",
            "Custom sizes available",
        ],
        certifications: [
            "ISO 9001:2015",
            "BIS IS 7903",
            "UV Testing Compliant",
            "RoHS Compliant",
        ],
    },
    {
        slug: "hdpe-baby-cones",
        name: "HDPE Baby Cones",
        tagline: "Precision-engineered for the textile industry",
        image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827092/77_cd384c.jpg",
        heroImage: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827092/77_cd384c.jpg",
        gallery: [
            "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827092/77_cd384c.jpg",
            "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827089/78_q1ghxa.jpg",
        ],
        description: "High-precision HDPE baby cones for the textile and yarn winding industry. Engineered for smooth unwinding, dimensional accuracy, and durability on high-speed machines.",
        detailedDescription: [
            "Our HDPE Baby Cones are manufactured using 100% virgin High-Density Polyethylene through precision injection molding. Each cone is engineered to exacting dimensional standards required by modern high-speed yarn winding machines.",
            "The injection molding process ensures consistent wall thickness, precise taper angle, and an ultra-smooth surface finish — critical factors that prevent yarn breakage and ensure uniform unwinding at speeds exceeding 1000 meters per minute.",
            "We use advanced steel molds with mirror-finish cavity surfaces. The cooling cycle is optimized using chilled water systems to prevent warping, shrinkage, and internal stress, ensuring every cone is dimensionally identical.",
            "Our cones undergo 100% inspection for critical dimensions including taper angle, bore diameter, overall length, and wall thickness. Surface quality is checked under magnification to identify even microscopic imperfections.",
            "Available in a wide range of standard sizes and taper angles. Custom dimensions, colors, and branding can be manufactured to order with minimum quantities."
        ],
        specifications: [
            { label: "Material", value: "100% Virgin HDPE" },
            { label: "Manufacturing", value: "Precision Injection Molding" },
            { label: "Taper Angle", value: "3°51', 4°20', 5°57', 9°15'" },
            { label: "Bore Diameter", value: "32mm / 44mm / 48mm / 57mm" },
            { label: "Length Range", value: "100mm – 300mm" },
            { label: "Wall Thickness", value: "1.5mm – 3.0mm (uniform)" },
            { label: "Surface Finish", value: "Mirror-smooth (Ra < 0.4 μm)" },
            { label: "Weight", value: "15g – 80g (varies by size)" },
            { label: "Color", value: "Natural, White, Cream, Custom" },
            { label: "Concentricity", value: "< 0.1mm deviation" },
            { label: "Moisture Absorption", value: "< 0.01%" },
            { label: "Operating Speed", value: "Up to 1500 m/min" },
        ],
        applications: [
            "Cotton Yarn Winding",
            "Synthetic Yarn (Polyester, Nylon)",
            "Viscose & Rayon Yarn",
            "Blended Yarn Winding",
            "Texturizing Mills",
            "Sizing & Warping",
            "Embroidery Thread",
            "Sewing Thread Packaging",
            "Specialty Fiber Winding",
            "Industrial Thread Manufacturing",
        ],
        features: [
            "100% virgin HDPE for consistent quality",
            "Ultra-smooth surface prevents yarn damage",
            "Precision taper for secure yarn grip",
            "Uniform wall thickness for balanced winding",
            "Crack-resistant and impact-tough",
            "Chemical resistant (dye-fast)",
            "Stackable design for efficient storage",
            "Reusable and recyclable",
            "Compatible with all major winding machines",
            "100% dimensional inspection",
        ],
        sizes: [
            "3°51' × 150mm (Standard)",
            "4°20' × 170mm",
            "5°57' × 200mm",
            "9°15' × 240mm (Large)",
            "Custom taper and lengths available",
        ],
        certifications: [
            "ISO 9001:2015",
            "BIS Compliant",
            "Textile Industry Standards",
            "REACH Certified",
        ],
    },
    {
        slug: "hdpe-slitted-rolls",
        name: "HDPE Slitted Rolls",
        tagline: "High-quality slitted rolls for diverse industrial applications",
        image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827092/19_rnm7mt.jpg",
        heroImage: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827092/19_rnm7mt.jpg",
        gallery: [
            "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827092/19_rnm7mt.jpg",
            "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827097/30_x0ry20.jpg",
            "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827090/36_vdhord.jpg"
        ],
        description: "Premium HDPE slitted rolls manufactured with precision for high tensile strength and durability, suitable for various packaging and industrial needs.",
        detailedDescription: [
            "Our HDPE Slitted Rolls are produced using top-grade High-Density Polyethylene to ensure superior strength and flexibility.",
            "These rolls are ideal for manufacturing smaller woven bags, wrapping materials, and specialized packaging solutions.",
            "Available in multiple colors and specifications to meet standard and customized industrial requirements."
        ],
        specifications: [
            { label: "Material", value: "100% Virgin HDPE" },
            { label: "Width", value: "Customizable" },
            { label: "Color", value: "White, Blue, Custom Colors" },
            { label: "Strength", value: "High Tensile Strength" }
        ],
        applications: [
            "Packaging Industry",
            "Wrapping Applications",
            "Woven Sack Manufacturing",
            "Industrial Covers"
        ],
        features: [
            "High tensile strength",
            "Uniform width and thickness",
            "Tear and puncture resistant",
            "Durable and long-lasting"
        ],
        sizes: [
            "Custom sizes available on request"
        ],
        certifications: [
            "ISO 9001:2015",
            "BIS Compliant"
        ],
    },
];

export function getProductBySlug(slug: string): ProductData | undefined {
    return products.find((p) => p.slug === slug);
}
