import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/products/hdpe-splitted-rolls',
        destination: '/products/hdpe-slitted-rolls',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
