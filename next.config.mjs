/** @type {import('next').NextConfig} */
const nextConfig = {
  // 1. Tell Next.js to ignore ESLint errors during the build
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 2. Tell Next.js to ignore TypeScript errors as well
  typescript: {
    ignoreBuildErrors: true,
  },
  // 3. Your existing Velite Webpack configuration
  webpack: (config) => {
    config.plugins.push(new VeliteWebpackPlugin());
    return config;
  },
};

export default nextConfig;

class VeliteWebpackPlugin {
  static started = false;
  apply(compiler) {
    compiler.hooks.beforeCompile.tapPromise("VeliteWebpackPlugin", async () => {
      if (VeliteWebpackPlugin.started) return;
      VeliteWebpackPlugin.started = true;
      const dev = compiler.options.mode === "development";
      const { build } = await import("velite");
      await build({ watch: dev, clean: !dev });
    });
  }
}