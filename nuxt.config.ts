// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["@/assets/css/tailwind.css"],
  routeRules: {
    "/": { redirect: "/posts" },
  },
  modules: ["@pinia/nuxt", "@nuxtjs/tailwindcss", "@vueuse/nuxt", "@nuxt/icon"],
});
