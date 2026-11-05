// `npm run build:app` produces plain HTML in `out/` for the iOS app
// (Capacitor). The normal `npm run build` stays a regular Next app.
const isStaticExport = process.env.npm_lifecycle_event === "build:app" || process.env.STATIC_EXPORT === "1";

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: process.cwd(),
  ...(isStaticExport && {
    output: "export",
    trailingSlash: true,
    images: { unoptimized: true },
  }),
};

module.exports = nextConfig;
