/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
      plugins: [
        [
          "@swc/plugin-emotion",
          {
            sourceMap: true,
            autoLabel: "never",
          },
        ],
      ],
    }),
  ],
});
