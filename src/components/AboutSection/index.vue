<script setup lang="ts">
import { useLocale } from "@/composables";

const { t } = useLocale();
</script>

<template>
  <section
    id="about"
    class="about section-shell"
    aria-labelledby="about-title"
  >
    <article class="about__copy surface-card">
      <h2 id="about-title" class="eyebrow">
        {{ t("app", "aboutEyebrow") }}
      </h2>
      <p>{{ t("app", "aboutText") }}</p>
    </article>

    <aside
      class="profile-summary surface-card"
      :aria-label="t('app', 'profileSummaryLabel')"
    >
      <div>
        <h3>{{ t("app", "educationTitle") }}</h3>
        <strong>{{ t("app", "educationCourse") }}</strong>
        <span>{{ t("app", "educationSchool") }}</span>
      </div>
      <div class="profile-summary__language">
        <h3>{{ t("app", "languagesTitle") }}</h3>
        <strong>{{ t("app", "nativeLanguage") }}</strong>
      </div>
    </aside>
  </section>
</template>

<style scoped src="./styles.css"></style>
