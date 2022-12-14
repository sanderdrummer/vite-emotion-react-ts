/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "plugin-react-swc-emotion";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
