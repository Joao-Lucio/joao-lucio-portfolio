<script setup lang="ts">
import { computed } from "vue";
import { useLocale, useTheme } from "@/composables";
import { profileContact } from "@/constants";
import { formatPhone } from "@/utils/formatPhone";
import darkEmail from "@/assets/dark/email.svg";
import darkPhone from "@/assets/dark/phone.svg";
import lightEmail from "@/assets/light/email.svg";
import lightPhone from "@/assets/light/phone.svg";

const { isDark } = useTheme();
const { t } = useLocale();

const formattedPhone = formatPhone(profileContact.phone);

const themeAssets = computed(() =>
  isDark.value
    ? {
        email: darkEmail,
        phone: darkPhone,
      }
    : {
        email: lightEmail,
        phone: lightPhone,
      }
);
</script>

<template>
  <section
    id="contact"
    class="contact section-shell"
    aria-labelledby="contact-title"
  >
    <h2 id="contact-title">{{ t("app", "contactTitle") }}</h2>
    <p>{{ t("app", "contactDescription") }}</p>
    <div class="contact__actions">
      <a
        class="button button--primary"
        :href="`mailto:${profileContact.email}`"
      >
        <img :src="themeAssets.email" alt="" />
        {{ profileContact.email }}
      </a>
      <a
        class="button button--secondary"
        :href="`https://wa.me/${profileContact.phone.replace(/\D/g, '')}`"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img :src="themeAssets.phone" alt="" />
        {{ formattedPhone }}
      </a>
    </div>
  </section>
</template>

<style scoped src="./styles.css"></style>
