import { defineComponent, nextTick } from "vue";
import { mount } from "@vue/test-utils";
import { useScrollSpy } from "../useScrollSpy";

class IntersectionObserverMock {
  static callback: IntersectionObserverCallback;
  static instances: IntersectionObserverMock[] = [];
  observe = vi.fn();
  disconnect = vi.fn();

  constructor(callback: IntersectionObserverCallback) {
    IntersectionObserverMock.callback = callback;
    IntersectionObserverMock.instances.push(this);
  }
}

describe("useScrollSpy", () => {
  it("observes existing sections, tracks the visible one and disconnects", async () => {
    vi.stubGlobal("IntersectionObserver", IntersectionObserverMock);
    document.body.innerHTML = '<section id="about"></section><section id="contact"></section>';

    const TestComponent = defineComponent({
      setup() {
        return useScrollSpy(["about", "missing", "contact"]);
      },
      template: "<span>{{ activeSection }}</span>",
    });
    const wrapper = mount(TestComponent);
    const observer = IntersectionObserverMock.instances[0];

    expect(observer.observe).toHaveBeenCalledTimes(2);

    IntersectionObserverMock.callback(
      [{ isIntersecting: true, target: document.getElementById("contact")! } as IntersectionObserverEntry],
      {} as IntersectionObserver,
    );
    await nextTick();
    expect(wrapper.text()).toBe("contact");

    wrapper.unmount();
    expect(observer.disconnect).toHaveBeenCalledTimes(1);
  });
});
