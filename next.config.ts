import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/finite-element-anlaysis-fea",
        destination: "/services/finite-element-analysis-fea",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
