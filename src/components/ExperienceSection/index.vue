<script setup lang="ts">
import { computed } from "vue";
import { useLocale, useTheme } from "@/composables";
import darkBullet from "@/assets/dark/bullet.svg";
import lightBullet from "@/assets/light/bullet.svg";

const { isDark } = useTheme();
const { t } = useLocale();

const roles = computed(() => [
  {
    period: t("app", "role1Period"),
    title: t("app", "role1Title"),
    company: t("app", "role1Company"),
    current: true,
    summary: "",
    highlights: [
      t("app", "role1Highlight1"),
      t("app", "role1Highlight2"),
      t("app", "role1Highlight3"),
      t("app", "role1Highlight4"),
    ],
  },
  {
    period: t("app", "role2Period"),
    title: t("app", "role2Title"),
    company: t("app", "role2Company"),
    current: false,
    summary: "",
    highlights: [
      t("app", "role2Highlight1"),
      t("app", "role2Highlight2"),
      t("app", "role2Highlight3"),
      t("app", "role2Highlight4"),
      t("app", "role2Highlight5"),
      t("app", "role2Highlight6"),
    ],
  },
  {
    period: t("app", "role3Period"),
    title: t("app", "role3Title"),
    company: t("app", "role3Company"),
    current: false,
    summary: "",
    highlights: [
      t("app", "role3Highlight1"),
      t("app", "role3Highlight2"),
      t("app", "role3Highlight3"),
      t("app", "role3Highlight4"),
    ],
  },
  {
    period: t("app", "role4Period"),
    title: t("app", "role4Title"),
    company: t("app", "role4Company"),
    current: false,
    summary: "",
    highlights: [
      t("app", "role4Highlight1"),
      t("app", "role4Highlight2"),
      t("app", "role4Highlight3"),
    ],
  },
]);

const themeAssets = computed(() =>
  isDark.value
    ? { bullet: darkBullet }
    : { bullet: lightBullet }
);
</script>

<template>
  <section
    id="experience"
    class="experience"
    aria-labelledby="experience-title"
  >
    <div class="section-shell experience__inner">
      <div class="section-heading">
        <h2 id="experience-title">{{ t("app", "experienceTitle") }}</h2>
        <span />
      </div>

      <div class="roles">
        <article
          v-for="(role, index) in roles"
          :key="`${role.period}-${role.title}`"
          class="role"
          :class="{ 'role--previous': index > 0 }"
        >
          <div class="role__summary">
            <p
              class="role__period"
              :class="{ 'role__period--current': role.current }"
            >
              {{ role.period }}
            </p>
            <h3>{{ role.title }}</h3>
            <p class="role__company">{{ role.company }}</p>
          </div>

          <div class="role__details">
            <p v-if="role.summary" class="role__description">
              {{ role.summary }}
            </p>
            <ul v-if="role.highlights.length" class="role__highlights">
              <li v-for="highlight in role.highlights" :key="highlight">
                <img :src="themeAssets.bullet" alt="" />
                <span>{{ highlight }}</span>
              </li>
            </ul>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped src="./styles.css"></style>
