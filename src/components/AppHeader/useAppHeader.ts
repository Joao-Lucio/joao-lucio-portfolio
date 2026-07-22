import { computed, onMounted, onUnmounted, ref } from "vue";
import { useLocale, useScrollSpy } from "@/composables";

const sectionIds = ["experience", "projects", "about", "contact"];

export function useAppHeader() {
  const { t } = useLocale();
  const { activeSection } = useScrollSpy(sectionIds);
  const isMobileMenuOpen = ref(false);
  const isScrolled = ref(false);

  const menuLabel = computed(() => t("ui", "openMenu"));

  function setBodyScrollLocked(isLocked: boolean) {
    document.body.style.overflow = isLocked ? "hidden" : "";
  }

  function toggleMobileMenu() {
    isMobileMenuOpen.value = !isMobileMenuOpen.value;
    setBodyScrollLocked(isMobileMenuOpen.value);
  }

  function closeMobileMenu() {
    isMobileMenuOpen.value = false;
    setBodyScrollLocked(false);
  }

  function handleNavigate(href: string) {
    closeMobileMenu();

    const element = document.getElementById(href.replace("#", ""));
    element?.scrollIntoView({ behavior: "smooth" });
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
    setBodyScrollLocked(false);
  });

  return {
    activeSection,
    closeMobileMenu,
    handleNavigate,
    isMobileMenuOpen,
    isScrolled,
    menuLabel,
    toggleMobileMenu,
  };
}
