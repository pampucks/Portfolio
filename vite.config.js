import { defineConfig } from 'vite';

export default defineConfig({
  // config options
  define: {
    __APP_VERSION__: JSON.stringify('v1.0.0'),
  },
});
