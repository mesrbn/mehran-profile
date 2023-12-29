<template>
  <nav class="font-mono">
    <ul class="flex flex-col md:flex-row md:space-x-4">
      <li>
        <NuxtLink :to="localPath('/')" class="link">Home</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localPath('/projects')" class="link">Projects</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localPath('/about')" class="link">About</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localPath('/resume')" class="link">Resume</NuxtLink>
      </li>
      <li>
        <NuxtLink :to="localPath('/blog')" class="link">Blog</NuxtLink>
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
</template>

<style scoped>
.link {
  @apply p-1 hover:bg-gray-200 dark:hover:bg-gray-900 text-xl md:text-base;
}
</style>

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
