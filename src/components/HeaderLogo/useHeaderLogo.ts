const logoText = "JOÃO LÚCIO";
const ariaLabel = `${logoText} — Home`;

export function useHeaderLogo() {
  return {
    ariaLabel,
    logoText,
  };
}
