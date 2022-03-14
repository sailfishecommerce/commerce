/** @type {import('next').NextConfig} */
const nextSafe = require("next-safe");
const path = require("path");
const DuplicatePackageCheckerPlugin = require("@cerner/duplicate-package-checker-webpack-plugin");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const isDev = process.env.NODE_ENV !== "production";

module.exports = withBundleAnalyzer({
  images: {
    domains: ["cdn.schema.io"],
    formats: ["image/webp"],
  },
  optimization: {
    mergeDuplicateChunks: true,
  },
  swcMinify: true,
  reactStrictMode: true,
  staticPageGenerationTimeout: 240,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(new DuplicatePackageCheckerPlugin());
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-is": path.resolve(__dirname, "node_modules/react-is"),
      "strip-ansi": path.resolve(__dirname, "node_modules/strip-ansi"),
      "react-fast-compare": path.resolve(
        __dirname,
        "node_modules/react-fast-compare"
      ),
      "regenerator-runtime": path.resolve(
        __dirname,
        "node_modules/regenerator-runtime"
      ),
      deepmerge: path.resolve(__dirname, "node_modules/deepmerge"),
      "@babel/runtime": path.resolve(__dirname, "node_modules/@babel/runtime"),
    };
    return config;
  },
 
});
