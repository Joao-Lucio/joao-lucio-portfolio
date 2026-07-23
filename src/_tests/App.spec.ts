import { shallowMount } from "@vue/test-utils";
import App from "../App.vue";

describe("App", () => {
  it("composes the header, all main sections and the footer", () => {
    const wrapper = shallowMount(App);

    expect(wrapper.find("app-header-stub").exists()).toBe(true);
    expect(wrapper.find("hero-section-stub").exists()).toBe(true);
    expect(wrapper.find("about-section-stub").exists()).toBe(true);
    expect(wrapper.find("competencies-section-stub").exists()).toBe(true);
    expect(wrapper.find("experience-section-stub").exists()).toBe(true);
    expect(wrapper.find("projects-section-stub").exists()).toBe(true);
    expect(wrapper.find("contact-section-stub").exists()).toBe(true);
    expect(wrapper.find("app-footer-stub").exists()).toBe(true);
    expect(wrapper.find("main").exists()).toBe(true);
  });
});
