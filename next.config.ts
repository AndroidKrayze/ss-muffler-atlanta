import type { NextConfig } from "next";

const basePath = "/ss-muffler-atlanta";

const nextConfig: NextConfig = {
  // Static HTML export for GitHub Pages (writes to ./out)
  output: "export",
  basePath,
  assetPrefix: basePath,
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
