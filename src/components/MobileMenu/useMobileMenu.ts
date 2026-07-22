import { computed } from "vue";
import { useLocale } from "@/composables";
import { headerNavigationItems } from "@/constants/navigation";

export interface MobileMenuProps {
  isOpen: boolean;
  activeSection?: string;
}

export function useMobileMenu(onNavigate: (href: string) => void) {
  const { t } = useLocale();

  const closeLabel = computed(() => t("ui", "closeMenu"));
  const items = computed(() =>
    headerNavigationItems.map((item) => ({
      ...item,
      label: t("nav", item.key),
    })),
  );

  return {
    closeLabel,
    handleNavigate: onNavigate,
    items,
  };
}
