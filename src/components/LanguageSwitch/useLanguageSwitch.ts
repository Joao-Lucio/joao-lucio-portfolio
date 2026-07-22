import { computed } from "vue";
import { useLocale } from "@/composables";

export function useLanguageSwitch() {
  const { locale, t, toggleLocale } = useLocale();

  const ariaLabel = computed(() => t("ui", "languageSwitch"));
  const currentLabel = computed(() => (locale.value === "en" ? "EN" : "PT"));

  return {
    ariaLabel,
    currentLabel,
    toggleLocale,
  };
}
