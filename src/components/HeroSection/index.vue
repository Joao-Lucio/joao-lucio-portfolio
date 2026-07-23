<script setup lang="ts">
import { computed } from "vue";
import { useLocale, useTheme } from "@/composables";
import darkScrollArrow from "@/assets/dark/scroll-arrow.svg";
import lightScrollArrow from "@/assets/light/scroll-arrow.svg";

const { isDark } = useTheme();
const { t } = useLocale();

const heroTechnologies = [
  "React",
  "React Native",
  "Next.js",
  "TypeScript",
  "Kotlin",
  "Swift",
];

const themeAssets = computed(() =>
  isDark.value
    ? { scrollArrow: darkScrollArrow }
    : { scrollArrow: lightScrollArrow }
);
</script>

<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero__glow" />
    <div class="hero__content">
      <div class="availability">
        <span class="availability__dot" />
        <span>{{ t("app", "availability") }}</span>
      </div>
      <h1 id="hero-title">João Lúcio Almeida da Silva</h1>
      <p class="hero__role">{{ t("app", "heroRole") }}</p>
      <ul
        class="hero__technologies"
        :aria-label="t('app', 'heroTechnologiesLabel')"
      >
        <li v-for="technology in heroTechnologies" :key="technology">
          {{ technology }}
        </li>
      </ul>
      <a
        class="hero__scroll"
        href="#about"
        :aria-label="t('app', 'heroScrollLabel')"
      >
        <img :src="themeAssets.scrollArrow" alt="" />
      </a>
    </div>
  </section>
</template>

<style scoped src="./styles.css"></style>
