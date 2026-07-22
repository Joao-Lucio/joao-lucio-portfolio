import { computed } from "vue";
import { useLocale } from "@/composables";

export function useResumeButton() {
  const { isEnglish, t } = useLocale();

  const ariaLabel = computed(() => t("ui", "downloadResume"));
  const label = computed(() => t("nav", "resume"));
  const resumeHref = computed(() =>
    isEnglish.value ? "/curriculo-en.pdf" : "/curriculo-ptBr.pdf",
  );
  const resumeFileName = computed(() =>
    isEnglish.value
      ? "resume-joao-lucio-en.pdf"
      : "curriculo-joao-lucio-pt-br.pdf",
  );

  return {
    ariaLabel,
    label,
    resumeFileName,
    resumeHref,
  };
}
