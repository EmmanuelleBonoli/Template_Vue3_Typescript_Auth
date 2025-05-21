import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import { PrimeVueResolver } from 'unplugin-vue-components/resolvers';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      vue(),
    Components({
      resolvers: [PrimeVueResolver()],
      extensions: ['vue'],
    }),],
  server: {
    port: 5421
  }
})
