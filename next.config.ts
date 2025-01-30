import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'localhost', // Localhost domain
      'next-ecommerce-template-4.vercel.app', // Remote domain
    ],
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://ceaso4ex.apicdn.sanity.io/:path*', // Sanity API URL
      },
    ];
  },
};

export default nextConfig;
