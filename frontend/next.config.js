/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [`${process.env.BASE_URL}`],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: `${process.env.BASE_URL}`,
        port: '',
        pathname: '/wp-content/uploads/*',
      },]
  }
}

module.exports = nextConfig
