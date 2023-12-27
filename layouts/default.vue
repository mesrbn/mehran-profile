<!-- Unlike other components, your layouts must have a single root element 
    to allow Nuxt to apply transitions between layout changes - 
    and this root element cannot be a <slot />. -->
<template>
  <div>
    <div>switch language</div>
    <select v-model="language">
      <option v-for="item in locales" :key="item" :value="item.code">
        {{ item.name }}
      </option>
    </select>
    <nav>
      <ul>
        <li>
          <NuxtLink :to="localPath('/')">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink :to="localPath('/about')">About</NuxtLink>
        </li>
      </ul>
    </nav>
    <slot />
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
