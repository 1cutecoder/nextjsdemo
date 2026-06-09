import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  // 缓存组件(关闭或者不配置)
  cacheComponents: false,
  reactStrictMode: false
};

export default nextConfig;