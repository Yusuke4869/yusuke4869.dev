import partytown from "@astrojs/partytown";
import react from "@astrojs/react";
import icon from "astro-icon";
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), icon(), partytown()],
  vite: {
    plugins: [tailwindcss()],
  },
});
