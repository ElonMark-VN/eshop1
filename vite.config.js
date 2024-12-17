import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotenv from "dotenv";

dotenv.config();
// eslint-disable-next-line no-undef
var endpoint = process.env.endpoint 

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api/": endpoint ,
      "/uploads/": endpoint ,
    },
  },
});
