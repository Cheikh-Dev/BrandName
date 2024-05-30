import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/Cheikh-Dev/",
  // build: {
  //   rollupOptions: {
  //     output: {
  //       assetFileNames: "[name]-[hash].[ext]",
  //       chunkFileNames: "[name]-[hash].js",
  //       entryFileNames: "[name]-[hash].js",
  //     },
  //   },
  // },
});
