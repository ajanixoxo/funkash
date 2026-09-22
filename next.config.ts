import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      {
        source: "/products",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/essay",
        destination: "/media",
        permanent: true,
      },
      {
        source: "/essays",
        destination: "/media",
        permanent: true,
      },
      {
        source: "/essay/:id",
        destination: "/media/:id",
        permanent: true,
      },
      {
        source: "/leadership",
        destination: "/team",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
