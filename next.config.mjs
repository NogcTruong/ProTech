/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imagor.owtg.one",
      },
      {
        protocol: "https",
        hostname: "d28jzcg6y4v9j1.cloudfront.net",
      },
      {
        protocol: "https",
        hostname: "imagor.owtg.one",
      },
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
    ],
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // SEO optimizations
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "X-DNS-Prefetch-Control",
            value: "on",
          },
        ],
      },
    ];
  },
  // Compression
  compress: true,
  // Package optimization
  experimental: {
    optimizePackageImports: ["@clerk/nextjs", "lucide-react"],
  },
};

export default nextConfig;
