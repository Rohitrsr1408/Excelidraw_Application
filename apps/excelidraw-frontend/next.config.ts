// apps/excelidraw-frontend/next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // CRITICAL: This bundles the app and its dependencies into a minimal folder.
  output: "standalone",
  /* other config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
