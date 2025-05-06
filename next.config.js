/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    domains: [
      'images.pexels.com',
      'cdn.jsdelivr.net'
    ]
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  trailingSlash: true,
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.output.pathinfo = false;
    }
    return config;
  }
};

module.exports = nextConfig;
