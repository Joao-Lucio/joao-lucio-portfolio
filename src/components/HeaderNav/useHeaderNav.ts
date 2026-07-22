import { computed, type MaybeRefOrGetter, toValue } from "vue";
import { useLocale } from "@/composables";
import { headerNavigationItems } from "@/constants/navigation";

export interface HeaderNavProps {
  activeSection?: string;
}

export type NavigateHandler = (href: string) => void;

export function useHeaderNav(
  activeSection: MaybeRefOrGetter<string | undefined>,
  onNavigate: NavigateHandler,
) {
  const { t } = useLocale();

  const items = computed(() =>
    headerNavigationItems.map((item) => ({
      ...item,
      label: t("nav", item.key),
      isActive: toValue(activeSection) === item.key,
    })),
  );

  return {
    handleNavigate: onNavigate,
    items,
  };
}
