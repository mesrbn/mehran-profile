<template>
  <div>This is the main page!</div>
</template>

<script setup>
useSeoMeta({
  title: "Home Page",
  description: "Mehran Sarabchian Home Page",
  ogTitle: "Irade Main Page",
  ogDescription: "Irade is a software company",
  ogImage: "[og:image]",
  ogUrl: "[og:url]",
  twitterTitle: "Main Page",
  twitterDescription: "[twitter:description]",
  twitterImage: "[twitter:image]",
  twitterCard: "summary",
});

useHead({
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon.png",
    },
  ],
});
</script>
