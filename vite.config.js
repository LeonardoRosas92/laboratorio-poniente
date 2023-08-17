import { defineConfig } from "vite";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "node:path";

const isGitHubPages = true;
const folderName = `${path.basename(process.cwd())}/`;
const mode =
  process.env.NODE_ENV === "production" ? "production" : "development";
const base = mode === "production" && isGitHubPages ? "" : "/";

export default defineConfig({
  root: "src",
  base,
  mode,
  envDir: "../",
  publicDir: "../public",
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname,
    },
  },
  build: {
    outDir: "../dist",
    assetsDir: "./",
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: `${path.resolve(__dirname, "./src/assets")}/[!.]*`, // 1️⃣
          dest: "./assets", // 2️⃣
        },
        {
          src: `${path.resolve(__dirname, "./src/pages")}/[!.]*`, // 1️⃣
          dest: "./pages", // 2️⃣
        },
      ],
    }),
  ]
});
