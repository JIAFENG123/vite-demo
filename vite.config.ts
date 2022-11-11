import { defineConfig } from "vite";
import myPlugin from "./plugins/test";

export default defineConfig({
  plugins: [
    myPlugin()
  ],
  server: {
    port: 3030,
  },
});
