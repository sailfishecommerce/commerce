/** @type {import('next').NextConfig} */
const nextSafe = require("next-safe");

const isDev = process.env.NODE_ENV !== "production";

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withBundleAnalyzer({
  images: {
    domains: ["cdn.schema.io"],
  },
  reactStrictMode: true,
  staticPageGenerationTimeout: 240,
  async headers() {
    return [
      {
        source: "/:path*",
        headers: nextSafe({
          contentSecurityPolicy: {
            "style-src": ["'self'", "https://fonts.googleapis.com"],
            "default-src": [
              "'self'",
              "https://sailfish-e-commerce-limited.swell.store",
            ],
            "connect-src": [
              "'self'",
              "https://sailfish-e-commerce-limited.swell.store",
            ],
            "font-src": ["'self'", "https://fonts.gstatic.com/"],
            "script-src": [
              "'self'",
              "https://en.trustmate.io",
              "'https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.0/dist/alpine.min.js",
            ],
            "img-src": [
              "'self'",
              "data:",
              "https://cdn.schema.io",
              "https://pcdn.piiojs.com",
            ],
          },
          isDev,
        }),
      },
    ];
  },
});
