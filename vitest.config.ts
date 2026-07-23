import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";
import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: "jsdom",
      globals: true,
      setupFiles: ["./src/_tests/setup.ts"],
      coverage: {
        provider: "v8",
        reporter: ["text", "html"],
        include: [
          "src/App.vue",
          "src/components/**/*.vue",
          "src/components/**/*.ts",
          "src/composables/**/*.ts",
        ],
      },
    },
  }),
);
