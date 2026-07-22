<script setup lang="ts">
import { useResumeButton } from "./useResumeButton";

const { ariaLabel, label, resumeFileName, resumeHref } = useResumeButton();
</script>

<template>
  <a
    :href="resumeHref"
    class="resume-button"
    :aria-label="ariaLabel"
    :title="ariaLabel"
    :download="resumeFileName"
  >
    <span class="resume-button__label">{{ label }}</span>
  </a>
</template>

<style scoped src="./styles.css"></style>
