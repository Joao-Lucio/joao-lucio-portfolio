import { nextTick } from "vue";
import { useTheme } from "../useTheme";

describe("useTheme", () => {
  beforeEach(async () => {
    useTheme().setTheme("dark");
    await nextTick();
  });

  it("updates the document class and local storage when switching theme", async () => {
    const { isDark, toggleTheme } = useTheme();

    toggleTheme();
    await nextTick();

    expect(isDark.value).toBe(false);
    expect(document.documentElement.classList.contains("dark")).toBe(false);
    expect(localStorage.getItem("portfolio-theme")).toBe("light");
  });

  it("sets dark theme explicitly", async () => {
    const { setTheme } = useTheme();

    setTheme("dark");
    await nextTick();

    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("portfolio-theme")).toBe("dark");
  });
});
