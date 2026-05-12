// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://munitrip.com',
  output: 'static',
  compressHTML: true,
  scopedStyleStrategy: 'where',
  trailingSlash: 'never',
  vite: {
    plugins: [tailwindcss()]
  }
});