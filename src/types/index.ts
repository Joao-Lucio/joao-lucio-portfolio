export type Theme = 'light' | 'dark'

export type Locale = 'en' | 'pt'

export interface NavItem {
  key: string
  href: string
}

export interface TranslationMap {
  nav: Record<string, string>
  ui: Record<string, string>
  app: Record<string, string>
}

export type Translations = Record<Locale, TranslationMap>
