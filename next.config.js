/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  webpack5: true,
  strictPostcssConfiguration: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  compress: true,
};
