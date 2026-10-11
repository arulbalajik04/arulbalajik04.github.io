import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base: "./" makes all file paths relative.
// This lets the same build work on GitHub Pages, Netlify, or Vercel.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
