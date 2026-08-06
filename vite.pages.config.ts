import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

export default defineConfig({
  root: resolve(__dirname, "github-pages"),
  base: "/prototypev1/",
  plugins: [react()],
  build: {
    outDir: resolve(__dirname, "dist-pages"),
    emptyOutDir: true,
  },
  publicDir: resolve(__dirname, "public"),
});
