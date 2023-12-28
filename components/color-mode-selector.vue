<template>
  <button @click="toggleMode">{{ nextMode }}</button>
</template>

<script setup>
const colorMode = useColorMode();
const modes = ["system", "light", "dark"];

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference);
  const nextModeIndex = (currentModeIndex + 1) % 3;
  return modes[nextModeIndex];
});

const toggleMode = () => (colorMode.preference = nextMode.value);
</script>
