<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import { useLocale } from "@/composables";
import { useScrollSpy } from "@/composables";
import { Menu } from "lucide-vue-next";
import HeaderLogo from "./HeaderLogo.vue";
import HeaderNav from "./HeaderNav.vue";
import ThemeToggle from "./ThemeToggle.vue";
import LanguageSwitch from "./LanguageSwitch.vue";
import ResumeButton from "./ResumeButton.vue";
import MobileMenu from "./MobileMenu.vue";

const { t } = useLocale();

const sectionIds = ["experience", "projects", "about", "contact"];
const { activeSection } = useScrollSpy(sectionIds);

const isMobileMenuOpen = ref(false);
const isScrolled = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;

  document.body.style.overflow = isMobileMenuOpen.value ? "hidden" : "";
}

function closeMobileMenu() {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = "";
}

function handleNavigate(href: string) {
  closeMobileMenu();
  const id = href.replace("#", "");
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

function handleScroll() {
  isScrolled.value = window.scrollY > 10;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const menuLabel = computed(() => t("ui", "openMenu"));
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

<style scoped>
.app-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 50;
  height: var(--header-height);
  background: var(--header-bg);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid transparent;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.app-header--scrolled {
  border-bottom-color: var(--header-border);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.06);
}

.dark .app-header--scrolled {
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.3);
}

.app-header__container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.app-header__right {
  display: flex;
  align-items: center;
  gap: 8px;
}

.app-header__divider {
  width: 1px;
  height: 24px;
  background-color: var(--outline-variant);
  margin: 0 4px;
}

.app-header__controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.app-header__hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px solid var(--outline-variant);
  border-radius: var(--radius-md);
  background: transparent;
  color: var(--on-surface-variant);
  cursor: pointer;
  transition:
    color 0.25s ease,
    border-color 0.25s ease;
}

.app-header__hamburger:hover {
  color: var(--primary);
  border-color: var(--primary);
}

@media (max-width: 768px) {
  .app-header__container {
    padding: 0 16px;
  }

  .app-header__nav,
  .app-header__divider,
  .app-header__controls {
    display: none;
  }

  .app-header__hamburger {
    display: inline-flex;
  }
}
</style>
