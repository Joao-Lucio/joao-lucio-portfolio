<script setup lang="ts">
import { useLocale } from '@/composables'
import { computed } from 'vue'

interface NavItem {
  key: string
  href: string
}

const props = defineProps<{
  activeSection?: string
}>()

const emit = defineEmits<{
  navigate: [href: string]
}>()

const { t } = useLocale()

const navItems: NavItem[] = [
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
]

const items = computed(() =>
  navItems.map((item) => ({
    ...item,
    label: t('nav', item.key),
    isActive: props.activeSection === item.key,
  }))
)

function handleClick(href: string) {
  emit('navigate', href)
}
</script>

<template>
  <nav class="header-nav" aria-label="Main navigation">
    <ul class="header-nav__list">
      <li
        v-for="item in items"
        :key="item.key"
        class="header-nav__item"
      >
        <a
          :href="item.href"
          class="header-nav__link"
          :class="{ 'header-nav__link--active': item.isActive }"
          @click.prevent="handleClick(item.href)"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.header-nav__list {
  display: flex;
  align-items: center;
  gap: 4px;
  list-style: none;
  margin: 0;
  padding: 0;
}

.header-nav__link {
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 6px 14px;
  font-size: 14px;
  font-weight: 500;
  color: var(--on-surface-variant);
  text-decoration: none;
  border-radius: var(--radius-md);
  transition: color 0.25s ease, background-color 0.25s ease;
}

.header-nav__link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 60%;
  height: 2px;
  background-color: var(--primary-container);
  border-radius: var(--radius-full);
  transition: transform 0.3s ease;
}

.header-nav__link:hover {
  color: var(--on-surface);
  background-color: var(--surface-container-high);
}

.header-nav__link--active {
  color: var(--primary);
}

.header-nav__link--active::after {
  transform: translateX(-50%) scaleX(1);
}
</style>
