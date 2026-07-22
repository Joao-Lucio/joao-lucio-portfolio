<script setup lang="ts">
import { useLocale } from "@/composables";
import { X } from "lucide-vue-next";
import { computed } from "vue";
import ThemeToggle from "./ThemeToggle.vue";
import LanguageSwitch from "./LanguageSwitch.vue";
import ResumeButton from "./ResumeButton.vue";

interface NavItem {
  key: string;
  href: string;
}

defineProps<{
  isOpen: boolean;
  activeSection?: string;
}>();

const emit = defineEmits<{
  close: [];
  navigate: [href: string];
}>();

const { t } = useLocale();

const navItems: NavItem[] = [
  { key: "experience", href: "#experience" },
  { key: "projects", href: "#projects" },
  { key: "about", href: "#about" },
  { key: "contact", href: "#contact" },
];

const items = computed(() =>
  navItems.map((item) => ({
    ...item,
    label: t("nav", item.key),
  })),
);

function handleNavigate(href: string) {
  emit("navigate", href);
  emit("close");
}

const closeLabel = computed(() => t("ui", "closeMenu"));
</script>

<template>
  <Transition name="mobile-menu">
    <div v-if="isOpen" class="mobile-menu" role="dialog" aria-modal="true">
      <div class="mobile-menu__backdrop" @click="$emit('close')" />
      <div class="mobile-menu__panel">
        <div class="mobile-menu__header">
          <span class="mobile-menu__title">Menu</span>
          <button
            class="mobile-menu__close"
            :aria-label="closeLabel"
            @click="$emit('close')"
          >
            <X :size="20" :stroke-width="1.75" />
          </button>
        </div>

        <nav class="mobile-menu__nav" aria-label="Mobile navigation">
          <ul class="mobile-menu__list">
            <li v-for="item in items" :key="item.key">
              <a
                :href="item.href"
                class="mobile-menu__link"
                :class="{
                  'mobile-menu__link--active': activeSection === item.key,
                }"
                @click.prevent="handleNavigate(item.href)"
              >
                {{ item.label }}
              </a>
            </li>
          </ul>
        </nav>

        <div class="mobile-menu__controls">
          <div class="mobile-menu__controls-row">
            <ThemeToggle />
            <LanguageSwitch />
          </div>
          <ResumeButton />
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.mobile-menu {
  position: fixed;
  inset: 0;
  z-index: 100;
}

.mobile-menu__backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
}

.mobile-menu__panel {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(320px, 85vw);
  background: var(--surface);
  border-left: 1px solid var(--elevation-1-border);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.mobile-menu__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid var(--elevation-1-border);
  height: var(--header-height);
}

.mobile-menu__title {
  font-size: 16px;
  font-weight: 600;
  color: var(--on-surface);
}

.mobile-menu__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border: 1px solid var(--outline-variant);
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--on-surface-variant);
  cursor: pointer;
  transition:
    color 0.25s ease,
    border-color 0.25s ease;
}

.mobile-menu__close:hover {
  color: var(--error);
  border-color: var(--error);
}

.mobile-menu__nav {
  flex: 1;
  padding: 16px 0;
}

.mobile-menu__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-menu__link {
  display: flex;
  align-items: center;
  padding: 14px 24px;
  font-size: 15px;
  font-weight: 500;
  color: var(--on-surface-variant);
  text-decoration: none;
  transition:
    color 0.25s ease,
    background-color 0.25s ease,
    padding-left 0.25s ease;
}

.mobile-menu__link:hover {
  color: var(--on-surface);
  background-color: var(--surface-container-high);
  padding-left: 28px;
}

.mobile-menu__link--active {
  color: var(--primary);
  border-right: 3px solid var(--primary-container);
  background-color: var(--surface-container);
}

.mobile-menu__controls {
  padding: 20px;
  border-top: 1px solid var(--elevation-1-border);
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.mobile-menu__controls-row {
  display: flex;
  gap: 8px;
}

.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.3s ease;
}

.mobile-menu-enter-active .mobile-menu__panel,
.mobile-menu-leave-active .mobile-menu__panel {
  transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
}

.mobile-menu-enter-from .mobile-menu__panel,
.mobile-menu-leave-to .mobile-menu__panel {
  transform: translateX(100%);
}
</style>
