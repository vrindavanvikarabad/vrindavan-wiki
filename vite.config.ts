import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // The site is hosted at https://<user>.github.io/vrindavan-wiki/, so all
  // built asset URLs need that prefix. If we ever move to a custom domain
  // served from the repo root, change this back to "/".
  base: "/vrindavan-wiki/",
  plugins: [
    { enforce: "pre", ...mdx({ providerImportSource: "@mdx-js/react" }) },
    react(),
    tailwindcss(),
  ],
});
