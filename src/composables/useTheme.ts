import { ref, computed, watchEffect } from 'vue'
import type { Theme } from '../types'

const STORAGE_KEY = 'portfolio-theme'

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'dark'

  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'light' || stored === 'dark') return stored

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

const theme = ref<Theme>(getInitialTheme())

export function useTheme() {
  const isDark = computed(() => theme.value === 'dark')

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  function setTheme(value: Theme) {
    theme.value = value
  }

  watchEffect(() => {
    const root = document.documentElement

    if (theme.value === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    localStorage.setItem(STORAGE_KEY, theme.value)
  })

  return {
    theme,
    isDark,
    toggleTheme,
    setTheme,
  }
}
