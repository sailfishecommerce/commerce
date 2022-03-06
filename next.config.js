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
            "font-src": ["'self'", "https://fonts.gstatic.com/"],
            "script-src": [
              "'self'",
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
            ],
          },
          isDev,
          permissionsPolicy: false,
        }),
      },
    ];
  },
});
