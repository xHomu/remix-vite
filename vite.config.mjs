import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import million from "million/compiler";

export default defineConfig({
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  plugins: [
    million.vite({ auto: true }),
    remix({
      ignoredRouteFiles: ["**/.*"],
      tailwind: true,
      postcss: true,
      // appDirectory: "app",
      // assetsBuildDirectory: "public/build",
      // publicPath: "/build/",
      // serverBuildPath: "build/index.js",
    }),
    tsconfigPaths(),
  ],
});
