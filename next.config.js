const {withContentlayer} = require('next-contentlayer')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  devIndicators: {
    buildActivity: true,
    buildActivityPosition: "bottom-left",
  },
  compiler: {
    removeConsole: true,
  },
  swcMinify: true,
};

module.exports = withContentlayer(nextConfig);
