// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@nuxtjs/color-mode',
  ],
  colorMode: {
    classSuffix: ''
  },
  i18n: {
    /* module options */
    // vueI18n: './nuxt-i18n.js', // custom path example
    lazy: true,
    langDir: "locales",
    strategy: "prefix_except_default",
    locales: [
      {
        code: "en-US",
        iso: "en-US",
        name: "English(US)",
        file: "en.json",
      },
      {
        code: "de",
        iso: "de",
        name: "Deutsch",
        file: "de.json",
      },
    ],
    defaultLocale: "en-US",
  }
})
