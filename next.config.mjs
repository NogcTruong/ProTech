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
  },
};

export default nextConfig;
