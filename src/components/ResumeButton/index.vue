<script setup lang="ts">
import { useResumeButton } from "./useResumeButton";

const { ariaLabel, label } = useResumeButton();
</script>

<template>
  <a
    href="#"
    class="resume-button"
    :aria-label="ariaLabel"
    :title="ariaLabel"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span class="resume-button__label">{{ label }}</span>
  </a>
</template>

<style scoped src="./styles.css"></style>
