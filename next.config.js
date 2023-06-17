/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  trailingSlash: false,
  distDir: "dist-export",
  output: "export",
  experimental: {
    appDir: true,
  },
};
