import { nextTick } from "vue";
import { mount } from "@vue/test-utils";
import HeaderLogo from "../HeaderLogo/index.vue";
import HeaderNav from "../HeaderNav/index.vue";
import LanguageSwitch from "../LanguageSwitch/index.vue";
import MobileMenu from "../MobileMenu/index.vue";
import ResumeButton from "../ResumeButton/index.vue";
import ThemeToggle from "../ThemeToggle/index.vue";
import { useLocale, useTheme } from "@/composables";

describe("header controls", () => {
  beforeEach(async () => {
    useLocale().setLocale("en");
    useTheme().setTheme("dark");
    await nextTick();
  });

  it("renders the logo with an accessible home link", () => {
    const wrapper = mount(HeaderLogo);

    expect(wrapper.get("a").attributes("href")).toBe("#");
    expect(wrapper.get("a").attributes("aria-label")).toContain("Home");
  });

  it("renders active navigation and emits its selected href", async () => {
    const wrapper = mount(HeaderNav, { props: { activeSection: "projects" } });

    expect(wrapper.findAll(".header-nav__link")).toHaveLength(4);
    expect(wrapper.get('a[href="#projects"]').classes()).toContain("header-nav__link--active");

    await wrapper.get('a[href="#contact"]').trigger("click");
    expect(wrapper.emitted("navigate")).toEqual([["#contact"]]);
  });

  it("changes language when the switch is clicked", async () => {
    const wrapper = mount(LanguageSwitch);

    expect(wrapper.text()).toContain("EN");
    await wrapper.get("button").trigger("click");

    expect(wrapper.text()).toContain("PT");
    expect(wrapper.get("button").attributes("aria-label")).toBe("Trocar idioma");
  });

  it("uses the localized resume download details", async () => {
    const wrapper = mount(ResumeButton);

    expect(wrapper.get("a").attributes("href")).toBe("/file/curriculo-en.pdf");
    expect(wrapper.get("a").attributes("download")).toBe("resume-joao-lucio-en.pdf");

    useLocale().setLocale("pt");
    await nextTick();
    expect(wrapper.get("a").attributes("href")).toBe("/file/curriculo-ptBr.pdf");
  });

  it("toggles theme and exposes the animation state", async () => {
    vi.useFakeTimers();
    const wrapper = mount(ThemeToggle);

    await wrapper.get("button").trigger("click");
    expect(wrapper.classes()).toContain("theme-toggle--animating");
    expect(document.documentElement.classList.contains("dark")).toBe(false);

    vi.advanceTimersByTime(500);
    await nextTick();
    expect(wrapper.classes()).not.toContain("theme-toggle--animating");
    vi.useRealTimers();
  });

  it("shows and interacts with the mobile navigation", async () => {
    const wrapper = mount(MobileMenu, { props: { isOpen: true, activeSection: "about" } });

    expect(wrapper.get('[role="dialog"]')).toBeTruthy();
    expect(wrapper.get('a[href="#about"]').classes()).toContain("mobile-menu__link--active");

    await wrapper.get('a[href="#experience"]').trigger("click");
    await wrapper.get(".mobile-menu__close").trigger("click");
    expect(wrapper.emitted("navigate")).toEqual([["#experience"]]);
    expect(wrapper.emitted("close")).toHaveLength(1);
  });
});
