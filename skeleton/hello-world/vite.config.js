import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';
import netlifyPlugin from '@netlify/hydrogen-platform'

export default defineConfig({
  plugins: [hydrogen(), netlifyPlugin()],
});
