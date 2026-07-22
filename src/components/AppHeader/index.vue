<script setup lang="ts">
import { Menu } from "lucide-vue-next";
import HeaderLogo from "@components/HeaderLogo/index.vue";
import HeaderNav from "@components/HeaderNav/index.vue";
import LanguageSwitch from "@components/LanguageSwitch/index.vue";
import MobileMenu from "@components/MobileMenu/index.vue";
import ResumeButton from "@components/ResumeButton/index.vue";
import ThemeToggle from "@components/ThemeToggle/index.vue";
import { useAppHeader } from "./useAppHeader";

const {
  activeSection,
  closeMobileMenu,
  handleNavigate,
  isMobileMenuOpen,
  isScrolled,
  menuLabel,
  toggleMobileMenu,
} = useAppHeader();
</script>

<template>
  <header
    class="app-header"
    :class="{ 'app-header--scrolled': isScrolled }"
    role="banner"
  >
    <div class="app-header__container">
      <HeaderLogo />

      <div class="app-header__right">
        <HeaderNav
          :active-section="activeSection"
          class="app-header__nav"
          @navigate="handleNavigate"
        />

        <div class="app-header__divider" />

        <div class="app-header__controls">
          <ThemeToggle />
          <LanguageSwitch />
          <ResumeButton />
        </div>

        <button
          class="app-header__hamburger"
          :aria-label="menuLabel"
          @click="toggleMobileMenu"
        >
          <Menu :size="22" :stroke-width="1.75" />
        </button>
      </div>
    </div>
  </header>

  <MobileMenu
    :is-open="isMobileMenuOpen"
    :active-section="activeSection"
    @close="closeMobileMenu"
    @navigate="handleNavigate"
  />
</template>

<style scoped src="./styles.css"></style>
