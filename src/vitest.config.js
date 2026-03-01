import { defineConfig } from "vite";

export default defineConfig( {
    test: {
        environtment: "jsdom",
        globals: true,
        setupFiles: "./vitest-setup.js"
    },
});