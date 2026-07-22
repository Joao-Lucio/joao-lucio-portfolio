<script setup lang="ts">
import { useLocale } from '@/composables'
import { Languages } from 'lucide-vue-next'
import { computed } from 'vue'

const { locale, toggleLocale, t } = useLocale()

const ariaLabel = computed(() => t('ui', 'languageSwitch'))

const currentLabel = computed(() =>
  locale.value === 'en' ? 'EN' : 'PT'
)
</script>

<template>
  <button
    class="language-switch"
    :aria-label="ariaLabel"
    :title="ariaLabel"
    @click="toggleLocale"
  >
    <Languages :size="16" :stroke-width="1.75" class="language-switch__icon" />
    <span class="language-switch__label">{{ currentLabel }}</span>
  </button>
</template>

<style scoped>
.language-switch {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 6px 10px;
  border: 1px solid var(--outline-variant);
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--on-surface-variant);
  cursor: pointer;
  font-family: var(--font-sans);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: color 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
}

.language-switch:hover {
  color: var(--primary);
  border-color: var(--primary);
  background-color: var(--surface-container-high);
}

.language-switch__icon {
  flex-shrink: 0;
}

.language-switch__label {
  line-height: 1;
}
</style>
