<!-- Unlike other components, your layouts must have a single root element 
    to allow Nuxt to apply transitions between layout changes - 
    and this root element cannot be a <slot />. -->
<template>
  <div class="container mx-auto max-w-2xl">
    <header class="flex justify-between items-center">
      <div>
        <NuxtLink to="/" class="text-xl font-semibold p-2 hover:bg-gray-200"
          >Mehran Sarabchian</NuxtLink
        >
      </div>
      <nav class="font-mono">
        <ul class="flex space-x-4">
          <li>
            <NuxtLink :to="localPath('/')">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="localPath('/about')">About</NuxtLink>
          </li>
          <li>
            <select v-model="language">
              <option v-for="item in locales" :key="item" :value="item.code">
                {{ item.name }}
              </option>
            </select>
          </li>
        </ul>
      </nav>
    </header>
    <main class="p-2">
      <slot />
    </main>
  </div>
</template>

<script setup>
const { locales, locale, setLocale } = useI18n();
const localPath = useLocalePath();
const language = computed({
  get: () => locale.value,
  set: (value) => {
    setLocale(value);
  },
});
</script>
