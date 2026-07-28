import { mount } from "@vue/test-utils";
import AboutSection from "../AboutSection/index.vue";
import AppFooter from "../AppFooter/index.vue";
import CompetenciesSection from "../CompetenciesSection/index.vue";
import ContactSection from "../ContactSection/index.vue";
import ExperienceSection from "../ExperienceSection/index.vue";
import HeroSection from "../HeroSection/index.vue";
import ProjectsSection from "../ProjectsSection/index.vue";
import { useLocale, useTheme } from "@/composables";
import { profileContact, profileLinks } from "@/constants";

describe("portfolio sections", () => {
  beforeEach(() => {
    useLocale().setLocale("en");
    useTheme().setTheme("dark");
  });

  it("renders the about and competencies content", () => {
    const about = mount(AboutSection);
    const competencies = mount(CompetenciesSection);

    expect(about.get("section").attributes("id")).toBe("about");
    expect(about.text()).toContain("About me");
    expect(competencies.findAll(".competency-card")).toHaveLength(4);
    expect(competencies.text()).toContain("Frontend");
  });

  it("renders contact actions with usable destinations", () => {
    const wrapper = mount(ContactSection);
    const links = wrapper.findAll("a");

    expect(links[0].attributes("href")).toBe(`mailto:${profileContact.email}`);
    expect(links[1].attributes("href")).toBe("https://wa.me/5595991613194");
    expect(wrapper.text()).toContain("(95) 99161-3194");
  });

  it("renders the hero technologies and section anchor", () => {
    const wrapper = mount(HeroSection);

    expect(wrapper.findAll(".hero__technologies li")).toHaveLength(6);
    expect(wrapper.get(".hero__scroll").attributes("href")).toBe("#about");
  });

  it("renders every professional role and its highlights", () => {
    const wrapper = mount(ExperienceSection);

    expect(wrapper.findAll(".role")).toHaveLength(4);
    expect(wrapper.findAll(".role--previous")).toHaveLength(3);
    expect(wrapper.findAll(".role__highlights li")).toHaveLength(17);
  });

  it("renders all projects with their external destinations", () => {
    const wrapper = mount(ProjectsSection);

    expect(wrapper.findAll(".product-card")).toHaveLength(3);
    expect(wrapper.get(`a[href="${profileLinks.pigzWebsite}"]`).attributes("target")).toBe("_blank");
    expect(wrapper.get(`a[href="${profileLinks.pigzPlayStore}"]`).text()).toContain("Google Play");
    expect(wrapper.get(`a[href="${profileLinks.pigzAppStore}"]`).text()).toContain("App Store");
  });

  it("renders social links with safe external-link attributes", () => {
    const wrapper = mount(AppFooter);

    const github = wrapper.get(`a[href="${profileLinks.github}"]`);
    const linkedin = wrapper.get(`a[href="${profileLinks.linkedin}"]`);
    expect(github.attributes("rel")).toBe("noopener noreferrer");
    expect(linkedin.attributes("target")).toBe("_blank");
  });
});
