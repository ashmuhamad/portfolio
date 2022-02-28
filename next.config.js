/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  assetPrefix: "/portfolio",
  basePath: "/portfolio",
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
