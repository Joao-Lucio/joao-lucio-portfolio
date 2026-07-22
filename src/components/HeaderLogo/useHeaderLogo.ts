const logoText = "João Lúcio";
const ariaLabel = `${logoText} — Home`;

export function useHeaderLogo() {
  return {
    ariaLabel,
    logoText,
  };
}
