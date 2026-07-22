<script setup lang="ts">
import { useLocale } from '@/composables'
import { FileDown } from 'lucide-vue-next'
import { computed } from 'vue'

const { t } = useLocale()

const label = computed(() => t('nav', 'resume'))
const ariaLabel = computed(() => t('ui', 'downloadResume'))
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
    <FileDown :size="16" :stroke-width="1.75" class="resume-button__icon" />
    <span class="resume-button__label">{{ label }}</span>
  </a>
</template>

<style scoped>
.resume-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 16px;
  border: none;
  border-radius: var(--radius-md);
  background-color: var(--primary-container);
  color: var(--on-primary-container);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  text-decoration: none;
  letter-spacing: 0.01em;
  transition: background-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease;
}

.resume-button:hover {
  background-color: var(--primary);
  color: var(--on-primary);
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(0, 209, 255, 0.25);
}

.resume-button:active {
  transform: translateY(0);
}

.resume-button__icon {
  flex-shrink: 0;
}

.resume-button__label {
  line-height: 1;
}
</style>
