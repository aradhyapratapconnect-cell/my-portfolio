import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// base: "./" keeps assets relative so the build works on Netlify,
// Vercel and GitHub Pages (project sub-path) without extra config.
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "./",
  build: {
    target: "es2022",
    cssCodeSplit: true,
  },
});