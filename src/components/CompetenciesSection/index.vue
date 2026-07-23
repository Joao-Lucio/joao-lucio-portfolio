<script setup lang="ts">
import { computed } from "vue";
import { useLocale } from "@/composables";

const { t } = useLocale();

const competencies = computed(() => [
  {
    title: t("app", "competencyFrontendTitle"),
    description: t("app", "competencyFrontendDescription"),
  },
  {
    title: t("app", "competencyMobileTitle"),
    description: t("app", "competencyMobileDescription"),
  },
  {
    title: t("app", "competencyIntegrationsTitle"),
    description: t("app", "competencyIntegrationsDescription"),
  },
  {
    title: t("app", "competencyToolsTitle"),
    description: t("app", "competencyToolsDescription"),
  },
]);
</script>

<template>
  <section
    class="competencies section-shell"
    :aria-label="t('app', 'competenciesLabel')"
  >
    <article
      v-for="item in competencies"
      :key="item.title"
      class="competency-card"
    >
      <h3>{{ item.title }}</h3>
      <p>{{ item.description }}</p>
    </article>
  </section>
</template>

<style scoped src="./styles.css"></style>
