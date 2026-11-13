/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST || '.next',  // lets a test build run beside the dev server
  trailingSlash: true,          // /portales-inmobiliarios-paraguay/
  poweredByHeader: false,
  reactStrictMode: true,
  // Each country has its own root layout (app/(py), app/(bo)…), so unmatched URLs need app/global-not-found.js.
  experimental: { globalNotFound: true },
};
export default nextConfig;
