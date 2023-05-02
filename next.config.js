/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "cdn.hashnode.com",
      port: "",
      pathname: "/res/hashnode/image/upload/**",
    }],
  },
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  experimental: {
    // Required:
    appDir: true,
  },
};

module.exports = nextConfig;
