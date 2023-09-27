/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [`${process.env.BASE_URL}`],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: `${process.env.BASE_URL}`,
        port: '',
        pathname: '/wp-content/uploads/*',
      },
    ],
  },
  webpack: (config) => {
    config.externals = [...config.externals, 'canvas', 'jsdom'];
    return config;
  },
};

module.exports = nextConfig;
