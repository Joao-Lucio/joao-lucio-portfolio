<script setup lang="ts">
import AppHeader from "@components/AppHeader/index.vue";
import HeroSection from "@components/HeroSection/index.vue";
import AboutSection from "@components/AboutSection/index.vue";
import CompetenciesSection from "@components/CompetenciesSection/index.vue";
import ExperienceSection from "@components/ExperienceSection/index.vue";
import ProjectsSection from "@components/ProjectsSection/index.vue";
import ContactSection from "@components/ContactSection/index.vue";
import AppFooter from "@components/AppFooter/index.vue";
</script>

<template>
  <div class="portfolio-page">
    <AppHeader />

    <main>
      <HeroSection />
      <AboutSection />
      <CompetenciesSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </main>

    <AppFooter />
  </div>
</template>

<style scoped>
.portfolio-page {
  min-width: 0;
  overflow: clip;
}
</style>
