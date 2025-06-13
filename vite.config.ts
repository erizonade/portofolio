// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath } from "url";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
// import cartographer from "@replit/vite-plugin-cartographer"; // optional

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Ganti dengan nama repo GitHub kamu
const repoName = "portofolio";

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [
    react(),
    runtimeErrorOverlay(),
    // cartographer(), // optional jika tidak error
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "shared"),
      "@assets": path.resolve(__dirname, "attached_assets"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist"),
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
