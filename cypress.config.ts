import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "cxg4sg",
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },

  e2e: {
    experimentalRunAllSpecs: true,
  },
});
