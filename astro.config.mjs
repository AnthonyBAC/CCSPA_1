// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
      plugins: [tailwindcss()]
  },

  devToolbar:{
      enabled: false
  },
  

  adapter: vercel(),
  output: 'server',



});