<script setup lang="ts">
import { Languages } from "lucide-vue-next";
import { useLanguageSwitch } from "./useLanguageSwitch";

const { ariaLabel, currentLabel, toggleLocale } = useLanguageSwitch();
</script>

<template>
  <button
    class="language-switch"
    :aria-label="ariaLabel"
    :title="ariaLabel"
    @click="toggleLocale"
  >
    <Languages
      :size="16"
      :stroke-width="1.75"
      class="language-switch__icon"
    />
    <span class="language-switch__label">{{ currentLabel }}</span>
  </button>
</template>

<style scoped src="./styles.css"></style>
