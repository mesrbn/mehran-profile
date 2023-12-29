<!-- Unlike other components, your layouts must have a single root element 
    to allow Nuxt to apply transitions between layout changes - 
    and this root element cannot be a <slot />. -->
<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-start md:items-center">
      <div class="hidden md:block">
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200"
          >Mehran Sarabchian</NuxtLink
        >
      </div>
      <Menu />
      <ClientOnly>
        <ColorModeSelector />
      </ClientOnly>
    </header>
    <main class="p-2 mt-10">
      <slot />
    </main>
  </div>
</template>

<script setup>
useHead({
  titleTemplate: "%s - Mehran Sarabchian",
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
      crossorigin: "",
    },
  ],
});
const { locales, locale, setLocale } = useI18n();
//const colorMode = useColorMode();
//console.log("the color mode is taken from: ", colorMode.preference);
// changing manually
//colorMode.preference = "light";
const localPath = useLocalePath();
const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>

<style>
body {
  font-family: "Roboto";
}

body {
  @apply bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300;
}
</style>
