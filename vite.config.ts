import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdx from "@mdx-js/rollup";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  // `base` is the URL prefix for all built asset paths, and it must match the
  // router `basename` in src/main.tsx.
  //   - Custom domain served from the root (thevrindavan.org): use "/" (current).
  //   - GitHub Pages project site (<user>.github.io/vrindavan-wiki/): use
  //     "/vrindavan-wiki/" and set the router basename to "/vrindavan-wiki".
  base: "/",
  plugins: [
    { enforce: "pre", ...mdx({ providerImportSource: "@mdx-js/react" }) },
    react(),
    tailwindcss(),
  ],
});
