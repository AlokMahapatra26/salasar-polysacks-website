export const siteData = {
    global: {
        logo: "/logo.jpg",
    },
    hero: {
        sliderProducts: [
            { name: "Woven Bags", href: "/products/hdpe-woven-bags", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827089/71_sonqlg.jpg" },
            {
                name: "Tarpaulins", href: "/products/tarpaulins", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827112/48_t9lkly.jpg"
            },
            { name: "Baby Cones", href: "/products/hdpe-baby-cones", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827092/77_cd384c.jpg" },
            { name: "Splitted Rolls", href: "/products/hdpe-splitted-rolls", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827092/19_rnm7mt.jpg" },
        ],
        video: {
            videoUrl: "https://res.cloudinary.com/dsjgnpsjv/video/upload/v1771833899/FINAL_yjeaev.mp4",
            thumbnailUrl: "https://img.youtube.com/vi/M7lc1UVf-VE/hqdefault.jpg"
        }
    },
    about: {
        image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827113/8_g4eont.jpg",
    },
    manufacturing: {
        commonSteps: [
            {
                step: 1,
                title: "Raw Material Selection",
                description: "High-density polyethylene (HDPE) and polypropylene (PP) granules are sourced from certified suppliers. Each batch is tested for Melt Flow Index (MFI), density, and purity before production begins.",
                image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827163/59_ji102g.jpg",
                applies: "All Products",
            },
            {
                step: 2,
                title: "Extrusion",
                description: "Granules are fed into high-capacity extruders where they are melted at 200-250°C. For bags and tarpaulins, the melt is drawn through a flat die to form thin tapes. For baby cones, the melt is injection-molded.",
                image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827092/24_lklupv.jpg",
                applies: "All Products",
            },
            {
                step: 3,
                title: "Winding",
                description: "Extruded tapes are quenched in a water bath, stretched for orientation, then wound onto individual bobbins at high speed. Proper tension control ensures uniform tape quality for the next stage.",
                image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827113/25_h612tr.jpg",
                applies: "Bags & Tarpaulins",
            },
            {
                step: 4,
                title: "Weaving",
                description: "Bobbins are loaded onto circular or flat looms. Tapes are interwoven in a plain weave pattern to create tubular or flat fabric. The GSM (grams per square meter) is controlled by adjusting tape width and loom settings.",
                image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827114/9_rnftv4.jpg",
                applies: "Bags & Tarpaulins",
            },
            {
                step: 5,
                title: "Lamination",
                description: "For moisture-resistant properties, woven fabric is coated with a thin LDPE or PP layer through extrusion lamination — creating a waterproof barrier.",
                image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827098/55_jh37dx.jpg",
            },
            {
                step: 6,
                title: "Printing",
                description: "Custom branding and regulatory markings are applied using flexographic printing machines. Up to 6-color printing with solvent or water-based inks.",
                image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827112/15_ccji9d.jpg",
            },
            {
                step: 7,
                title: "Cutting & Stitching",
                description: "Fabric is cut to dimensions and stitched on industrial sewing machines with heavy-duty HDPE threads for secure closure.",
                image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827100/10_fbrcsx.jpg",
            },
        ],
        branchSteps: {},
        finalSteps: [
            {
                step: 8,
                title: "Quality Control & Testing",
                description: "Every batch undergoes rigorous testing — tensile strength, tear resistance, drop test, seam strength, dimensional accuracy, and surface quality. Only products meeting BIS/ISO standards are cleared.",
                image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827105/1_ujkshl.jpg",
                applies: "All Products",
            },
            {
                step: 9,
                title: "Packaging & Dispatch",
                description: "Finished products are baled, strapped, and loaded for delivery. Our logistics network ensures timely dispatch across India and to export destinations worldwide.",
                image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827105/38_gizzqm.jpg",
                applies: "All Products",
            },
        ]
    },
    gallery: {
        images: [
            { id: 1, title: "Extrusion Line", category: "Production", description: "High-capacity tape extrusion lines ensuring consistent quality.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827164/13_adtqir.jpg" },
            { id: 2, title: "Weaving Loom", category: "Quality", description: "Advanced circular looms for heavy-duty fabric production.", color: "bg-slate-400", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827162/3_de38hh.jpg" },
            { id: 3, title: "Storage Warehouse", category: "Production", description: "Spacious warehousing for raw materials and finished goods.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827163/56_elxmhe.jpg" },
            { id: 4, title: "Quality Lab", category: "Production", description: "State-of-the-art lab for tensile and durability testing.", color: "bg-slate-400", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827114/9_rnftv4.jpg" },
            { id: 5, title: "Printing Unit", category: "Production", description: "High-speed printing for customized branding on bags.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827114/69_job43w.jpg" },
            { id: 6, title: "Dispatch Area", category: "Production", description: "Efficient loading bays for timely global shipments.", color: "bg-slate-400", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827114/66_ul1xoy.jpg" },
            { id: 41, title: "Research Wing", category: "Outdoor", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827106/37_dlrdcc.jpg" },
            { id: 7, title: "Raw Materials", category: "Production", description: "Climate-controlled storage for polymer granules.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827113/25_h612tr.jpg" },
            { id: 8, title: "Sewing Section", category: "Dispatch", description: "Automated sewing lines for precise bag formation.", color: "bg-slate-400", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827106/12_jbhvki.jpg" },
            { id: 9, title: "Research Wing", category: "Production", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827106/27_wll3yz.jpg" },
            { id: 10, title: "Research Wing", category: "Raw Material", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827106/76_cn4wxm.jpg" },
            { id: 11, title: "Research Wing", category: "Machinery", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827106/57_hoxpzi.jpg" },
            { id: 12, title: "Research Wing", category: "Machinery", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827106/58_hf2gvr.jpg" },
            { id: 13, title: "Research Wing", category: "Dispatch", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827105/38_gizzqm.jpg" },
            { id: 14, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827105/1_ujkshl.jpg" },
            { id: 15, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827102/61_ykstxd.jpg" },
            { id: 16, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827102/5_trpafg.jpg" },
            { id: 17, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827100/10_fbrcsx.jpg" },
            { id: 18, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827100/68_p504rf.jpg" },
            { id: 19, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827098/18_fdzfru.jpg" },
            { id: 20, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827098/55_jh37dx.jpg" },
            { id: 21, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827097/67_zgn5x4.jpg" },
            { id: 22, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827097/49_usgorf.jpg" },
            { id: 23, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827097/30_x0ry20.jpg" },
            { id: 24, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827097/53_qjl8vc.jpg" },
            { id: 25, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827096/21_t3l7xj.jpg" },
            { id: 26, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827096/11_v49rrn.jpg" },
            { id: 28, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827093/6_jq3kuz.jpg" },
            { id: 29, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827092/54_qunofd.jpg" },
            { id: 30, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827092/19_rnm7mt.jpg" },
            { id: 31, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827092/24_lklupv.jpg" },
            { id: 32, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827092/29_mv3eni.jpg" },
            { id: 33, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827091/14_nmw15f.jpg" },
            { id: 34, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827090/63_wb2bwt.jpg" },
            { id: 35, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827090/36_vdhord.jpg" },
            { id: 36, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827090/31_ch6dny.jpg" },
            { id: 37, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827090/32_byojtv.jpg" },
            { id: 38, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827090/22_jjnrh3.jpg" },
            { id: 39, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827090/34_dqczal.jpg" },
            { id: 40, title: "Research Wing", category: "More", description: "Dedicated facility for developing new polymer blends.", color: "bg-slate-300", image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827089/23_hdnkze.jpg" },

        ]
    },
    applications: [
        {
            name: "Agriculture",
            description: "Packaging for fertilizers, seeds, grains, and animal feed. Ensuring moisture resistance and breathability where needed.",
            image: "https://4.imimg.com/data4/QT/LA/MY-4469236/agricultural-tarpaulins-500x500.jpg"
        },
        {
            name: "Construction",
            description: "Heavy-duty bags for cement, wall putty, and building materials. Designed for extreme weight tolerance and rough handling.",
            image: "https://cdn.shopify.com/s/files/1/0727/8303/6698/files/acae323fb87c3a0bba67e3e1a450a34_480x480.jpg?v=1714484782"
        },
        {
            name: "Chemicals & Minerals",
            description: "Safe, non-reactive, and durable packaging tailored for industrial chemicals, polymers, and raw mineral resources.",
            image: "https://media.istockphoto.com/id/946876888/photo/transparent-polyethylene-granules-on-dark-hdpe-plastic-pellets-plastic-raw-material-idpe.jpg?s=612x612&w=0&k=20&c=Y2oSMFLuXkSCgrAo0pdQ0VbU2C7r_SCEoUr8OKKha3Y="
        },
        {
            name: "Logistics & Transport",
            description: "Weather-resistant tarpaulins and wrapping solutions that protect cargo across global rail, road, and sea networks.",
            image: "https://t4.ftcdn.net/jpg/17/14/04/49/360_F_1714044975_rGXdqRfaHjhcKTWtjKAVv84IGGOlVXCy.jpg"
        },
        {
            name: "Textile & Yarn",
            description: "Precision-molded HDPE baby cones and bobbins designed for high-speed winding in modern textile mills.",
            image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827092/77_cd384c.jpg"
        },
        {
            name: "Retail & FMCG",
            description: "Custom-printed, visually appealing bags for wholesale and retail distribution of rice, sugar, flour, and FMCG goods.",
            image: "https://yasmapolysacks.com/wp-content/uploads/2023/12/hdpe-bags-500x500-1.webp"
        }
    ],
    productApplications: [
        {
            name: "HDPE Tarpaulins",
            description: "Heavy-duty waterproof and weather-resistant covers designed to protect valuable industrial and agricultural goods from extreme conditions.",
            applications: ["Transportation & Truck Covers", "Monsoon Storage Sheds", "Construction Site Protection", "Agricultural Produce Covering", "Temporary Pond Liners"],
            image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827112/48_t9lkly.jpg"
        },
        {
            name: "HDPE Polysack Bags",
            description: "High-strength, durable woven packaging solutions engineered for the safe bulk handling and transit of dry granules and powders.",
            applications: ["Cement & Wall Putty Packaging", "Fertilizers & Agro-Chemicals", "Food Grains, Rice & Sugar", "Poultry & Animal Feed", "Mining & Mineral Resources"],
            image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827089/71_sonqlg.jpg"
        },
        {
            name: "HDPE Woven Fabric Baby Rolls",
            description: "Precision-molded HDPE cones and rolls crafted for high-speed yarn winding, ensuring seamless operations in modern textile manufacturing.",
            applications: ["Cotton Yarn Winding", "Synthetic Yarn Processing", "Commercial Textile Mills", "High-Speed Spinning", "Dyeing Operations"],
            image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827092/77_cd384c.jpg"
        },
        {
            name: "HDPE Splitted Rolls",
            description: "Continuous woven fabric rolls slit to specific, customizable widths for automated wrapping machinery and custom fabrications.",
            applications: ["Heavy Steel Coil Wrapping", "Industrial Paper Roll Packaging", "Automotive Tyre Wrapping", "Custom Bag Making", "Construction Site Curtains"],
            image: "https://res.cloudinary.com/dsjgnpsjv/image/upload/v1771827092/19_rnm7mt.jpg"
        }
    ],
    contact: {
        phone: "+91 6358811335",
        phoneSecondary: " +91 8238619900",
        email: "info@salasarpolysacks.com",
        gstNumber: "26ABDFS2230C1ZR",
        addressLine1: "Plot No, 4, Sr. No. 46/1-P , Daman Ganga Ind, Estate ",
        addressLine2: "Naroli Road , Athal , Silvassa (U.T.) ",
        addressCountry: "India",
        businessHours: "Mon - Sat: 9:00 AM - 6:00 PM",
        businessHoursSunday: "Sunday: Closed",
        mapIframeSrc: "https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d2714.5642048243058!2d72.9802693497988!3d20.268039753950838!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e0!4m3!3m2!1d20.2679752!2d72.97848069999999!4m3!3m2!1d20.267958399999998!2d72.9782175!5e1!3m2!1sen!2sin!4v1771836990203!5m2!1sen!2sin",
    },
    clients: [
        "Anjani plastic House",
        "Agriflex Polynet",
        "Aquaproof plastics",
        "Avdhoot Tarpaulin",
        "Bansal wire industries Ltd",
        "Bansal steels and Power Ltd",
        "Prince pipes & Fittings Ltd",
    ],
    certificates: [
        { name: "ISO 9001:2015", description: "Quality Management System Certification", pdf: "/certificates/iso.pdf" },
        { name: "Pollution Control", description: "Environmental Compliance Certification", pdf: "/certificates/pollution-control.pdf" },
    ],
};
