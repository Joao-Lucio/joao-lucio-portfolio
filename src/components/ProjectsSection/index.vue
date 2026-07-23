<script setup lang="ts">
import { computed } from "vue";
import { useLocale, useTheme } from "@/composables";
import { profileLinks } from "@/constants";
import darkExternalLink from "@/assets/dark/external-link.svg";
import darkAndroid from "@/assets/dark/android.svg";
import darkApple from "@/assets/dark/apple.svg";
import darkConfidential from "@/assets/dark/confidential.svg";
import lightExternalLink from "@/assets/light/external-link.svg";
import lightAndroid from "@/assets/light/android.svg";
import lightApple from "@/assets/light/apple.svg";
import lightConfidential from "@/assets/light/confidential.svg";

const { isDark } = useTheme();
const { t } = useLocale();

const themeAssets = computed(() =>
  isDark.value
    ? {
        externalLink: darkExternalLink,
        android: darkAndroid,
        ios: darkApple,
        confidential: darkConfidential,
      }
    : {
        externalLink: lightExternalLink,
        android: lightAndroid,
        ios: lightApple,
        confidential: lightConfidential,
      }
);
</script>

<template>
  <section
    id="projects"
    class="projects section-shell"
    aria-labelledby="projects-title"
  >
    <h2 id="projects-title">{{ t("app", "projectsTitle") }}</h2>

    <div class="projects__grid">
      <article class="product-card product-card--web">
        <div class="product-card__heading">
          <h3>{{ t("app", "productWebTitle") }}</h3>

          <a
            :href="profileLinks.pigzWebsite"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="t('app', 'productWebLinkLabel')"
          >
            <img :src="themeAssets.externalLink" alt="" />
          </a>
        </div>
        <p>{{ t("app", "productWebDescription") }}</p>
        <ul class="tag-list" :aria-label="t('app', 'productWebTagsLabel')">
          <li>React</li>
          <li>Next.js</li>
          <li>TypeScript</li>
        </ul>
      </article>

      <article class="product-card product-card--app">
        <div>
          <h3>{{ t("app", "productAppTitle") }}</h3>
          <p>{{ t("app", "productAppDescription") }}</p>
          <ul
            class="tag-list"
            :aria-label="t('app', 'productAppTagsLabel')"
          >
            <li>React Native</li>
            <li>Kotlin</li>
            <li>Swift</li>
          </ul>
        </div>
        <div
          class="store-platforms"
          :aria-label="t('app', 'availablePlatformsLabel')"
        >
          <a
            class="store-platform"
            :href="profileLinks.pigzPlayStore"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Pigz na Google Play"
          >
            <img :src="themeAssets.android" alt="Google Play" />
            <span>Google Play</span>
          </a>
          <a
            class="store-platform"
            :href="profileLinks.pigzAppStore"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Abrir Pigz na App Store"
          >
            <img :src="themeAssets.ios" alt="App Store" />
            <span>App Store</span>
          </a>
        </div>
      </article>

      <article class="product-card product-card--confidential">
        <div class="confidential-icon">
          <img :src="themeAssets.confidential" alt="" />
        </div>
        <div>
          <h3>{{ t("app", "confidentialTitle") }}</h3>
          <p>{{ t("app", "confidentialDescription") }}</p>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped src="./styles.css"></style>
