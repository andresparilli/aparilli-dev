import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // images.unoptimized = true only needed for static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
