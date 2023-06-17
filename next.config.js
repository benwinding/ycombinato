/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  trailingSlash: false,
  distDir: "dist-export",
  output: "export",
  experimental: {
    appDir: true,
  },
};
