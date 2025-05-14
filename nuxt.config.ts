export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@vueuse/nuxt",
  ],
  ui: {
    icons: ["heroicons", "lucide", "simple-icons", "mdi"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
      meta: [
        {
          name: "description",
          content:
            "Portfolio of Krishnapal Jadeja - Developer, Designer, and Creator.",
        },
        { property: "og:title", content: "Krishnapal Jadeja Portfolio" },
        {
          property: "og:description",
          content:
            "Portfolio of Krishnapal Jadeja - Developer, Designer, and Creator.",
        },
        {
          property: "og:image",
          content: "https://krishnapaljadeja.com/krishnapal_jadeja.jpg",
        },
        { property: "og:url", content: "https://krishnapaljadeja.com" },
        { property: "og:type", content: "website" },
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
});
