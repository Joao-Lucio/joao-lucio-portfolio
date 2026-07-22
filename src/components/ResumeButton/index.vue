<script setup lang="ts">
import { FileDown } from "lucide-vue-next";
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
    <FileDown
      :size="16"
      :stroke-width="1.75"
      class="resume-button__icon"
    />
    <span class="resume-button__label">{{ label }}</span>
  </a>
</template>

<style scoped src="./styles.css"></style>
