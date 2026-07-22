import { ref, computed } from 'vue'
import type { Locale } from '../types'
import { translations } from '../i18n'

const STORAGE_KEY = 'portfolio-locale'

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'en'

  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'pt') return stored

  return 'en'
}

const locale = ref<Locale>(getInitialLocale())

export function useLocale() {
  const isEnglish = computed(() => locale.value === 'en')

  function toggleLocale() {
    locale.value = locale.value === 'en' ? 'pt' : 'en'
    localStorage.setItem(STORAGE_KEY, locale.value)
  }

  function setLocale(value: Locale) {
    locale.value = value
    localStorage.setItem(STORAGE_KEY, value)
  }

  function t(section: 'nav' | 'ui', key: string): string {
    return translations[locale.value]?.[section]?.[key] ?? key
  }

  return {
    locale,
    isEnglish,
    toggleLocale,
    setLocale,
    t,
  }
}
