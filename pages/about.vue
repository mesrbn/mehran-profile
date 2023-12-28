<template>
  <div>This is about me! {{ t("welcome") }}</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
useHead({
  title: "About",
});
const { t } = useI18n();
</script>
