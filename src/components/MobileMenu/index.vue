<script setup lang="ts">
import { X } from "lucide-vue-next";
import LanguageSwitch from "@components/LanguageSwitch/index.vue";
import ResumeButton from "@components/ResumeButton/index.vue";
import ThemeToggle from "@components/ThemeToggle/index.vue";
import { useMobileMenu, type MobileMenuProps } from "./useMobileMenu";

defineProps<MobileMenuProps>();

const emit = defineEmits<{
  close: [];
  navigate: [href: string];
}>();

const { closeLabel, handleNavigate, items } = useMobileMenu((href) =>
  emit("navigate", href),
);
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

<style scoped src="./styles.css"></style>
