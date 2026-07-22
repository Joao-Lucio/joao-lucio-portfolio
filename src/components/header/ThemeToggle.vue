<script setup lang="ts">
import { useTheme } from '@/composables'
import { Sun, Moon } from 'lucide-vue-next'
import { useLocale } from '@/composables'
import { computed, ref } from 'vue'

const { isDark, toggleTheme } = useTheme()
const { t } = useLocale()

const isAnimating = ref(false)

const ariaLabel = computed(() =>
  isDark.value ? t('ui', 'switchToLight') : t('ui', 'switchToDark')
)

function handleToggle() {
  isAnimating.value = true
  toggleTheme()
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}
</script>

<template>
  <button
    class="theme-toggle"
    :class="{ 'theme-toggle--animating': isAnimating }"
    :aria-label="ariaLabel"
    :title="ariaLabel"
    @click="handleToggle"
  >
    <Transition name="theme-icon" mode="out-in">
      <Moon
        v-if="isDark"
        :size="18"
        :stroke-width="1.75"
        class="theme-toggle__icon"
      />
      <Sun
        v-else
        :size="18"
        :stroke-width="1.75"
        class="theme-toggle__icon"
      />
    </Transition>
  </button>
</template>

<style scoped>
.theme-toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  padding: 0;
  border: 1px solid var(--outline-variant);
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--on-surface-variant);
  cursor: pointer;
  transition: color 0.25s ease, border-color 0.25s ease, background-color 0.25s ease;
}

.theme-toggle:hover {
  color: var(--primary);
  border-color: var(--primary);
  background-color: var(--surface-container-high);
}

.theme-toggle--animating {
  animation: theme-pulse 0.5s ease;
}

.theme-toggle__icon {
  display: block;
}

/* Icon transition */
.theme-icon-enter-active,
.theme-icon-leave-active {
  transition: opacity 0.2s ease, transform 0.3s ease;
}

.theme-icon-enter-from {
  opacity: 0;
  transform: rotate(-90deg) scale(0.5);
}

.theme-icon-leave-to {
  opacity: 0;
  transform: rotate(90deg) scale(0.5);
}

@keyframes theme-pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.15); }
  100% { transform: scale(1); }
}
</style>
