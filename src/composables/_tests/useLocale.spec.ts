import { useLocale } from "../useLocale";

describe("useLocale", () => {
  beforeEach(() => {
    useLocale().setLocale("en");
  });

  it("changes locale and persists the selected value", () => {
    const { locale, isEnglish, toggleLocale } = useLocale();

    toggleLocale();

    expect(locale.value).toBe("pt");
    expect(isEnglish.value).toBe(false);
    expect(localStorage.getItem("portfolio-locale")).toBe("pt");
  });

  it("returns the current translation and falls back to the key", () => {
    const { setLocale, t } = useLocale();

    setLocale("pt");

    expect(t("nav", "about")).toBe("Sobre");
    expect(t("ui", "unknownKey")).toBe("unknownKey");
  });
});
