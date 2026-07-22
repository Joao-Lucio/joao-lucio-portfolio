import { computed } from "vue";
import { useLocale } from "@/composables";

export function useResumeButton() {
  const { t } = useLocale();

  const ariaLabel = computed(() => t("ui", "downloadResume"));
  const label = computed(() => t("nav", "resume"));

  return {
    ariaLabel,
    label,
  };
}
