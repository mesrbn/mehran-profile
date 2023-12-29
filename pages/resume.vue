<template>
  <div>This is my CV! {{ t("welcome") }}</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
useHead({
  title: "Resume",
});
const { t } = useI18n();
</script>
