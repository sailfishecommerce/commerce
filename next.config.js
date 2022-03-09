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
  },
  optimization: {
    mergeDuplicateChunks: true,
  },
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
  async headers() {
    return [
      {
        source: "/:path*",
        headers: nextSafe({
          contentSecurityPolicy: {
            "style-src": [
              "'self'",
              "'unsafe-inline'",
              "https://fonts.googleapis.com",
              "https://cdn.jsdelivr.net",
              "https://en.trustmate.io",
            ],
            "default-src": [
              "'self'",
              "https://sailfish-e-commerce-limited.swell.store",
              "https://en.trustmate.io",
              "https://cdn.jsdelivr.net",
            ],
            "connect-src": [
              "'self'",
              "https://sailfish-e-commerce-limited.swell.store",
              "https://czt5ma7jlj-1.algolianet.com",
              "https://czt5ma7jlj-2.algolianet.com",
              "https://czt5ma7jlj-dsn.algolia.net",
              "https://czt5ma7jlj-3.algolianet.com",
              "https://insights.algolia.io",
            ],
            "font-src": [
              "'self'",
              "https://fonts.gstatic.com/",
              "https://cdn.jsdelivr.net",
            ],
            "script-src": [
              "'self'",
              "'unsafe-inline'",
              "'unsafe-eval'",
              "'nonce-QRTYPCVBFGXZ'",
              "https://en.trustmate.io",
              "https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.0/dist/alpine.min.js",
              "'sha256-FohP1sOiMQlzLevJvZ2zFcokm2ikklyNloIpwT8uKqU='",
            ],
            "img-src": [
              "'self'",
              "data:",
              "https://cdn.schema.io",
              "https://pcdn.piiojs.com",
              "https://en.trustmate.io",
            ],
            "frame-src": "https://www.google.com/",
          },
          isDev,
          permissionsPolicy: false,
        }),
      },
    ];
  },
});
