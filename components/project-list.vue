<template>
  <p class="mb-10">Take a look at my GitHub projects</p>
  <section v-if="pending">Loading...</section>
  <section v-else-if="error">Something went wrong...Try again!</section>
  <section v-else>
    <ul class="grid grid-cols-1 gap-4">
      <li
        v-for="repo in repos"
        class="border border-gray-200 rounded-sm p-4 hover:bg-gray-100 font-mono"
        :key="repo.id"
      >
        <a :href="repo.html_url" target="_blank"
          ><div class="flex items-center justify-between text-sm">
            <div class="font-semibold">{{ repo.name }}</div>
            <div>{{ repo.stargazers_count }} *</div>
          </div>
          <p class="text-sm">{{ repo.description }}</p>
        </a>
      </li>
    </ul>
  </section>
</template>

<script setup>
const { error, pending, data } = await useFetch(
  "https://api.github.com/users/mesrbn/repos",
);
const repos = computed(() =>
  data.value
    .filter((repo) => repo.description)
    .sort((a, b) => b.stargazers_count - a.stargazers_count),
);
</script>
‚
