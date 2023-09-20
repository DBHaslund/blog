/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [`${process.env.BASE_URL}`]
  }
}

module.exports = nextConfig
