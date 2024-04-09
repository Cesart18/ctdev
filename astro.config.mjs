import { defineConfig } from 'astro/config';
import icon from "astro-icon";
import react from "@astrojs/react";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://ctdev.online/',
  integrations: [icon(), react({
    experimentalReactChildren: true
  }), sitemap({
    
  })]
});