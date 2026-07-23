<script setup lang="ts">
import { useLocale } from "@/composables";
import { profileContact, profileLinks } from "@/constants";

const { t } = useLocale();
</script>

<template>
  <footer class="footer">
    <div class="footer__inner section-shell">
      <div class="footer__identity">
        <strong>João Lúcio</strong>
        <span>{{ profileContact.city }}</span>
      </div>
      <p>© 2026 João Lúcio Almeida da Silva.</p>
      <nav :aria-label="t('app', 'socialLabel')">
        <a
          :href="profileLinks.github"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          :href="profileLinks.linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </nav>
    </div>
  </footer>
</template>

<style scoped src="./styles.css"></style>
