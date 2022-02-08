/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    test: {
      global: true,
      environment: "jsdom",
      setupFiles: ["./src/setupTests.ts"],
    },
    esbuild: {
      jsxFactory: "jsx",
      jsxInject: `import { jsx } from '@emotion/react'`,
    },
    plugins: [
      react({
        jsxImportSource: "@emotion/react",
        babel: {
          plugins: ["@emotion/babel-plugin"],
        },
      }),
    ],
  };
});
