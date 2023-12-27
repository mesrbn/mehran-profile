<template>
  <div>This is about me! {{ t("welcome") }}</div>
</template>

<script setup>
import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
