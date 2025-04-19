import { defineConfig } from "vite";
import preact from "@preact/preset-vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact(), tailwindcss()],
  server: {
    host: "0.0.0.0", // Listen on all network interfaces
    port: process.env.PORT || 5173, // Use the PORT environment variable if available, otherwise default to 5173
  },
});
