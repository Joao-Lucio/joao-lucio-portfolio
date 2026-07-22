<script setup lang="ts">
import { AppHeader } from "@/components/header";
import { useTheme } from "@/composables";

useTheme();
</script>

<template>
  <AppHeader />

  <main class="main-content">
    <section id="experience" class="section">
      <div class="section__container">
        <h2 class="section__title">Experience</h2>
        <p class="section__placeholder">Content coming soon...</p>
      </div>
    </section>

    <section id="projects" class="section">
      <div class="section__container">
        <h2 class="section__title">Projects</h2>
        <p class="section__placeholder">Content coming soon...</p>
      </div>
    </section>

    <section id="about" class="section">
      <div class="section__container">
        <h2 class="section__title">About Me</h2>
        <p class="section__placeholder">Content coming soon...</p>
      </div>
    </section>

    <section id="contact" class="section">
      <div class="section__container">
        <h2 class="section__title">Contact</h2>
        <p class="section__placeholder">Content coming soon...</p>
      </div>
    </section>
  </main>
</template>

<style scoped>
.main-content {
  padding-top: var(--header-height);
}

.section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--elevation-1-border);
}

.section__container {
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  padding: 64px 24px;
  text-align: center;
}

.section__title {
  margin-bottom: 16px;
}

.section__placeholder {
  color: var(--on-surface-variant);
  font-size: 16px;
}

@media (max-width: 768px) {
  .section__container {
    padding: 48px 16px;
  }
}
</style>
