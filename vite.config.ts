import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    server: {
      port: 3000,
    },
    preview: {
      port: 3000,
    },
  },
  tanstackStart: {
    server: {
      entry: "server",
    },
  },

  nitro: {
    preset: "node-server",
  },
});