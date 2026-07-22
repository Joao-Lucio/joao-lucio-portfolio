<script setup lang="ts">
import { computed } from "vue";
import AppHeader from "@components/AppHeader/index.vue";
import { useLocale, useTheme } from "@/composables";
import darkScrollArrow from "@/assets/dark/scroll-arrow.svg";
import darkBullet from "@/assets/dark/bullet.svg";
import darkExternalLink from "@/assets/dark/external-link.svg";
import darkAndroid from "@/assets/dark/android.svg";
import darkApple from "@/assets/dark/apple.svg";
import darkConfidential from "@/assets/dark/confidential.svg";
import darkEmail from "@/assets/dark/email.svg";
import darkPhone from "@/assets/dark/phone.svg";
import lightScrollArrow from "@/assets/light/scroll-arrow.svg";
import lightBullet from "@/assets/light/bullet.svg";
import lightExternalLink from "@/assets/light/external-link.svg";
import lightAndroid from "@/assets/light/android.svg";
import lightApple from "@/assets/light/apple.svg";
import lightConfidential from "@/assets/light/confidential.svg";
import lightEmail from "@/assets/light/email.svg";
import lightPhone from "@/assets/light/phone.svg";

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

const roles = computed(() => [
  {
    period: t("app", "role1Period"),
    title: t("app", "role1Title"),
    company: t("app", "role1Company"),
    current: true,
    summary: t("app", "role1Summary"),
    highlights: [t("app", "role1Highlight1"), t("app", "role1Highlight2")],
  },
  {
    period: t("app", "role2Period"),
    title: t("app", "role2Title"),
    company: t("app", "role2Company"),
    current: false,
    summary: "",
    highlights: [t("app", "role2Highlight1"), t("app", "role2Highlight2")],
  },
  {
    period: t("app", "role3Period"),
    title: t("app", "role3Title"),
    company: t("app", "role3Company"),
    current: false,
    summary: t("app", "role3Summary"),
    highlights: [],
  },
  {
    period: t("app", "role4Period"),
    title: t("app", "role4Title"),
    company: t("app", "role4Company"),
    current: false,
    summary: t("app", "role4Summary"),
    highlights: [],
  },
]);

const themeAssets = computed(() =>
  isDark.value
    ? {
        scrollArrow: darkScrollArrow,
        bullet: darkBullet,
        externalLink: darkExternalLink,
        android: darkAndroid,
        ios: darkApple,
        confidential: darkConfidential,
        email: darkEmail,
        phone: darkPhone,
      }
    : {
        scrollArrow: lightScrollArrow,
        bullet: lightBullet,
        externalLink: lightExternalLink,
        android: lightAndroid,
        ios: lightApple,
        confidential: lightConfidential,
        email: lightEmail,
        phone: lightPhone,
      },
);
</script>

<template>
  <div class="portfolio-page">
    <AppHeader />

    <main>
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
                href="https://pigz.com.br"
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
                href="https://play.google.com/store/apps/details?id=app.pigz.mart"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Pigz na Google Play"
              >
                <img :src="themeAssets.android" alt="Google Play" />
                <span>Google Play</span>
              </a>
              <a
                class="store-platform"
                href="https://apps.apple.com/br/app/pigz/id1526557835"
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
            href="mailto:joao.silvarrr@gmail.com.br"
          >
            <img :src="themeAssets.email" alt="" />
            joao.silvarrr@gmail.com.br
          </a>
          <a class="button button--secondary" href="tel:+5595991613194">
            <img :src="themeAssets.phone" alt="" />
            (95) 99161-3194
          </a>
        </div>
      </section>
    </main>

    <footer class="footer">
      <div class="footer__inner section-shell">
        <div class="footer__identity">
          <strong>João Lúcio</strong>
          <span>Boa Vista – RR</span>
        </div>
        <p>© 2026 João Lúcio Almeida da Silva.</p>
        <nav :aria-label="t('app', 'socialLabel')">
          <a
            href="https://github.com/Joao-Lucio"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joaolucioalmeida/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.portfolio-page {
  min-width: 0;
  overflow: clip;
}

.section-shell {
  width: min(1104px, calc(100% - 48px));
  margin-inline: auto;
}

.hero {
  position: relative;
  display: grid;
  min-height: 664px;
  padding-top: var(--header-height);
  place-items: center;
  isolation: isolate;
}

.hero__glow {
  position: absolute;
  inset: var(--header-height) 0 0;
  z-index: -1;
  background: radial-gradient(
    circle at center,
    color-mix(
        in srgb,
        var(--primary-container) var(--hero-glow-strength),
        transparent
      )
      0,
    transparent 47%
  );
}

.hero__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 24px;
  text-align: center;
}

.availability {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 32px;
  padding: 5px 13px;
  border: 1px solid var(--outline-variant);
  border-radius: 12px;
  background: var(--surface-container-low);
  color: var(--on-surface-variant);
  font: 500 12px/14px var(--font-sans);
}

.availability__dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--primary-container);
}

.hero h1 {
  margin-bottom: 16px;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: -1.2px;
  text-transform: uppercase;
}

.hero__role {
  margin-bottom: 32px;
  color: var(--primary);
  font-size: 32px;
  font-weight: 600;
  line-height: 40px;
  letter-spacing: -0.32px;
}

.hero__technologies {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 16px;
  list-style: none;
}

.hero__technologies li {
  padding: 9px 17px;
  border: 1px solid var(--outline-variant);
  border-radius: 2px;
  background: var(--hero-tag-bg);
  box-shadow: var(--card-shadow);
  color: var(--on-surface);
  font: 500 14px/16px var(--font-sans);
  letter-spacing: 0.28px;
}

.hero__scroll {
  display: grid;
  width: 36px;
  height: 68px;
  padding-top: 48px;
  place-items: start center;
}

.hero__scroll img {
  width: 12px;
  height: 20px;
  object-fit: contain;
  animation: hero-scroll-float 2.4s cubic-bezier(0.37, 0, 0.63, 1) infinite;
  transform-origin: center;
  will-change: transform;
}

@keyframes hero-scroll-float {
  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(8px);
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__scroll img {
    animation: none;
  }
}

.surface-card,
.competency-card,
.product-card {
  border: 1px solid var(--outline-variant);
  border-radius: 4px;
  box-shadow: var(--card-shadow);
}

.about {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 24px;
  padding-top: 96px;
}

.about__copy {
  min-height: 262px;
  padding: 32px;
  background: var(--card-bg);
}

.eyebrow {
  color: var(--primary);
  font: 500 14px/16px var(--font-sans);
  letter-spacing: 1.4px;
  text-transform: uppercase;
}

.about__copy .eyebrow {
  margin-bottom: 24px;
}

.about__copy p {
  color: var(--on-surface-variant);
  line-height: 26px;
}

.profile-summary {
  display: grid;
  min-height: 262px;
  padding: 32px;
  place-content: center;
  background: var(--card-elevated-bg);
  text-align: center;
}

.profile-summary > div {
  display: grid;
  justify-items: center;
  gap: 8px;
}

.profile-summary h3 {
  color: var(--primary);
  font: 500 12px/14px var(--font-sans);
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.profile-summary strong {
  color: var(--on-surface);
  font-size: 14px;
  font-weight: var(--profile-value-weight);
  line-height: 20px;
}

.profile-summary span {
  color: var(--on-surface-variant);
  font: 500 12px/14px var(--font-sans);
}

.profile-summary__language {
  margin-top: 8px;
  padding-top: 17px;
  border-top: 1px solid var(--outline-variant);
}

.competencies {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  padding-top: 144px;
}

.competency-card {
  min-height: 102px;
  padding: 24px;
  background: var(--competency-bg);
}

.competency-card h3 {
  margin-bottom: 16px;
  color: var(--primary);
  font: 500 14px/16px var(--font-sans);
  letter-spacing: 0.28px;
}

.competency-card p {
  color: var(--on-surface-variant);
  font-size: 14px;
  line-height: 20px;
}

.experience {
  margin-top: 0;
  background: var(--surface-container-lowest);
}

.experience__inner {
  padding-block: 144px 96px;
}

.section-heading {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
}

.section-heading h2,
.projects > h2,
.contact h2 {
  font-size: 32px;
  line-height: 40px;
  letter-spacing: -0.32px;
}

.section-heading span {
  flex: 1;
  height: 1px;
  background: var(--outline-variant);
}

.role {
  display: grid;
  grid-template-columns: 258px 1fr;
  gap: 24px;
  min-height: 104px;
}

.role--previous {
  margin-top: 64px;
  padding-top: 64px;
  border-top: 1px solid var(--outline-variant);
}

.role__period {
  margin-bottom: 7px;
  color: var(--on-surface-variant);
  font: 500 14px/16px var(--font-sans);
  letter-spacing: 0.28px;
  opacity: 0.6;
}

.role__period--current {
  color: var(--primary);
  opacity: 1;
}

.role__summary h3,
.product-card h3 {
  font-size: 24px;
  line-height: 32px;
}

.role__company {
  margin-top: 7px;
  color: var(--on-surface-variant);
  font: 500 12px/14px var(--font-sans);
  letter-spacing: 1.2px;
  text-transform: uppercase;
}

.role__details {
  color: var(--on-surface-variant);
}

.role__description {
  font-size: 14px;
  line-height: 20px;
}

.role__highlights {
  display: grid;
  gap: 16px;
  margin-top: 16px;
  list-style: none;
}

.role__highlights li {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 14px;
  line-height: 20px;
}

.role__highlights img {
  width: 12px;
  height: 10px;
  margin-top: 5px;
  object-fit: contain;
  flex: none;
}

.projects {
  padding-block: 96px;
}

.projects > h2 {
  margin-bottom: 48px;
}

.projects__grid {
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 24px;
}

.product-card {
  padding: 32px;
  background: var(--card-bg);
}

.product-card--web,
.product-card--app {
  min-height: 258px;
}

.product-card--app {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: var(--card-elevated-bg);
}

.product-card__heading {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
}

.product-card__heading a,
.product-card__heading img {
  display: block;
  width: 18px;
  height: 24px;
}

.product-card h3 {
  margin-bottom: 16px;
  color: var(--primary);
  font-weight: var(--product-heading-weight);
}

.product-card p {
  color: var(--on-surface-variant);
  line-height: 24px;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 24px;
  list-style: none;
}

.tag-list li {
  padding: 5px 9px;
  border: 1px solid var(--tag-border);
  border-radius: 2px;
  background: var(--tag-bg);
  color: var(--on-surface);
  font: 400 12px/16px var(--font-sans);
}

.product-card--app .tag-list {
  gap: 8px;
  margin-top: 16px;
}

.store-platforms {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 24px;
}

.store-platform {
  display: inline-flex;
  align-items: center;
  min-height: 42px;
  gap: 8px;
  padding: 10px 12px;
  border: 1px solid var(--outline-variant);
  border-radius: 999px;
  background: var(--surface-container-low);
  color: var(--on-surface);
  font: 500 12px/14px var(--font-sans);
  text-decoration: none;
  transition:
    border-color 0.25s ease,
    color 0.25s ease,
    transform 0.2s ease;
}

.store-platform:hover {
  border-color: var(--primary);
  color: var(--primary);
  transform: translateY(-1px);
}

.store-platform img {
  display: block;
  width: auto;
  flex: none;
  object-fit: contain;
}

.store-platform:first-child img {
  height: 14px;
}

.store-platform:last-child img {
  height: 18px;
}

.product-card--confidential {
  grid-column: 1 / -1;
  display: flex;
  min-height: 154px;
  align-items: center;
  gap: 32px;
}

.product-card--confidential h3 {
  margin-bottom: 8px;
  color: var(--on-surface);
}

.product-card--confidential p {
  font-style: italic;
}

.product-card--confidential > div:last-child {
  min-width: 0;
}

.confidential-icon {
  display: grid;
  width: 57px;
  height: 64px;
  flex: none;
  border: 1px solid var(--outline-variant);
  border-radius: 12px;
  place-items: center;
  background: var(--confidential-icon-bg);
}

.confidential-icon img {
  display: block;
  width: auto;
  height: 27px;
  object-fit: contain;
}

.contact {
  padding-block: 128px;
  text-align: center;
}

.contact p {
  max-width: 576px;
  margin: 16px auto 0;
  color: var(--on-surface-variant);
  line-height: 24px;
}

.contact__actions {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 32px;
}

.button {
  display: inline-flex;
  min-height: 56px;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 16px 32px;
  border: 1px solid transparent;
  border-radius: 2px;
  font: 500 14px/16px var(--font-sans);
  letter-spacing: 0.28px;
}

.button img {
  width: 20px;
  height: 22px;
  object-fit: contain;
}

.button--primary {
  background: var(--primary-container);
  box-shadow:
    0 4px 6px -1px rgb(0 209 255 / 20%),
    0 2px 4px -2px rgb(0 209 255 / 20%);
  color: var(--on-primary-container);
  font-weight: var(--primary-button-weight);
}

.button--primary:hover {
  color: var(--on-primary-container);
  filter: brightness(1.05);
}

.button--secondary {
  border-color: var(--outline-variant);
  background: var(--secondary-button-bg);
  box-shadow: var(--card-shadow);
  color: var(--on-surface);
}

.button--secondary:hover {
  border-color: var(--primary);
  color: var(--primary);
}

.footer {
  min-height: 131px;
  border-top: 1px solid var(--outline-variant);
  background: var(--footer-bg);
}

.footer__inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  min-height: 131px;
  gap: 24px;
}

.footer__identity {
  display: grid;
  gap: 4px;
}

.footer__identity strong {
  color: var(--on-surface);
  font: 700 14px/16px var(--font-sans);
  letter-spacing: 0.28px;
  text-transform: uppercase;
}

.footer__identity span {
  color: var(--on-surface-variant);
  font: 500 12px/14px var(--font-sans);
  opacity: 0.7;
}

.footer p {
  color: var(--on-surface-variant);
  font-size: 14px;
  line-height: 20px;
  opacity: var(--footer-copy-opacity);
}

.footer nav {
  display: flex;
  justify-self: end;
  gap: 32px;
  font: 500 12px/14px var(--font-sans);
}

.footer nav a {
  color: var(--footer-link-color);
}

@media (max-width: 900px) {
  .hero h1 {
    max-width: 760px;
  }

  .about {
    grid-template-columns: 1fr;
  }

  .competencies {
    grid-template-columns: repeat(2, 1fr);
  }

  .projects__grid {
    grid-template-columns: 1fr;
  }

  .product-card--confidential {
    grid-column: auto;
  }

  .footer__inner {
    grid-template-columns: 1fr auto;
  }

  .footer p {
    grid-column: 1 / -1;
    grid-row: 2;
    padding-bottom: 24px;
  }
}

@media (max-width: 700px) {
  .section-shell {
    width: min(100% - 32px, 1104px);
  }

  .hero {
    min-height: 700px;
  }

  .hero__content {
    padding-inline: 16px;
  }

  .availability {
    white-space: normal;
  }

  .hero h1 {
    max-width: 100%;
    font-size: 32px;
    line-height: 40px;
    overflow-wrap: anywhere;
  }

  .hero__role {
    font-size: 24px;
    line-height: 32px;
  }

  .about,
  .competencies,
  .experience__inner,
  .projects {
    padding-top: 72px;
  }

  .competencies {
    grid-template-columns: 1fr;
  }

  .role {
    grid-template-columns: 1fr;
    gap: 24px;
  }

  .role--previous {
    margin-top: 48px;
    padding-top: 48px;
  }

  .product-card,
  .about__copy,
  .profile-summary {
    padding: 24px;
  }

  .product-card--confidential {
    align-items: flex-start;
  }

  .product-card--confidential h3 {
    overflow-wrap: anywhere;
  }

  .contact {
    padding-block: 96px;
  }

  .contact__actions {
    flex-direction: column;
  }

  .button {
    width: 100%;
    padding-inline: 16px;
    overflow-wrap: anywhere;
  }

  .footer__inner {
    display: flex;
    padding-block: 32px;
    flex-direction: column;
    align-items: flex-start;
  }

  .footer p {
    order: 3;
    padding: 0;
  }
}
</style>
