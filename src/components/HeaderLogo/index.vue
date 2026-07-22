<script setup lang="ts">
import { useHeaderLogo } from "./useHeaderLogo";

const { ariaLabel, logoText } = useHeaderLogo();
</script>

<template>
  <a href="#" class="header-logo" :aria-label="ariaLabel">
    <span class="header-logo__text">{{ logoText }}</span>
  </a>
</template>

<style scoped src="./styles.css"></style>
