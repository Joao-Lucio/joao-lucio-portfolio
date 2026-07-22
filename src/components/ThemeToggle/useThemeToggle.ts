import { computed, onUnmounted, ref } from "vue";
import { useLocale, useTheme } from "@/composables";

export function useThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useLocale();
  const isAnimating = ref(false);
  let animationTimer: ReturnType<typeof setTimeout> | undefined;

  const ariaLabel = computed(() =>
    isDark.value ? t("ui", "switchToLight") : t("ui", "switchToDark"),
  );

  function handleToggle() {
    isAnimating.value = true;
    toggleTheme();

    clearTimeout(animationTimer);
    animationTimer = setTimeout(() => {
      isAnimating.value = false;
    }, 500);
  }

  onUnmounted(() => clearTimeout(animationTimer));

  return {
    ariaLabel,
    handleToggle,
    isAnimating,
    isDark,
  };
}
