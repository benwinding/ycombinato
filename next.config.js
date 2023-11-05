/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  trailingSlash: false,
  distDir: "dist-export",
  output: "export",
  experimental: {
    appDir: true,
  },
  webpack(config, context) {
    config.module.rules.push({
      test: /\.txt$/,
      use: "raw-loader",
    });
    return config;
  },
};
