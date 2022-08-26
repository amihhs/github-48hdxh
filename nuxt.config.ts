import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  components: {
    dirs: ['components'],
    transform: {
      exclude: [/(\.ts)$/],
    },
  },
  extensions: ['.jsx', '.tsx', '.vue'],
});
