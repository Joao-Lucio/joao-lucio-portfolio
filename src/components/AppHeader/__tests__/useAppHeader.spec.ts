import { defineComponent, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { useAppHeader } from "../useAppHeader";
import { useLocale } from "@/composables";

const HeaderHarness = defineComponent({
  setup() {
    return useAppHeader();
  },
  template: "<span>{{ isMobileMenuOpen }}-{{ isScrolled }}-{{ menuLabel }}</span>",
});

describe("useAppHeader", () => {
  beforeEach(() => {
    useLocale().setLocale("en");
    Object.defineProperty(window, "scrollY", { configurable: true, value: 0 });
  });

  it("locks body scroll while the menu is open and releases it when closed", async () => {
    const wrapper = mount(HeaderHarness);
    const vm = wrapper.vm as unknown as ReturnType<typeof useAppHeader>;

    vm.toggleMobileMenu();
    await nextTick();
    expect(document.body.style.overflow).toBe("hidden");
    expect(wrapper.text()).toContain("true");

    vm.closeMobileMenu();
    expect(document.body.style.overflow).toBe("");
    wrapper.unmount();
  });

  it("scrolls to the requested section and updates header state on scrolling", async () => {
    const target = document.createElement("section");
    target.id = "projects";
    target.scrollIntoView = vi.fn();
    document.body.append(target);
    const wrapper = mount(HeaderHarness);
    const vm = wrapper.vm as unknown as ReturnType<typeof useAppHeader>;

    vm.handleNavigate("#projects");
    expect(target.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });

    Object.defineProperty(window, "scrollY", { configurable: true, value: 20 });
    window.dispatchEvent(new Event("scroll"));
    await nextTick();
    expect(wrapper.text()).toContain("true");

    wrapper.unmount();
    expect(document.body.style.overflow).toBe("");
  });
});
