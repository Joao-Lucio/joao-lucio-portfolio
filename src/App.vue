<script setup lang="ts">
import { computed } from "vue";
import AppHeader from "@components/AppHeader/index.vue";
import { useTheme } from "@/composables";
import darkScrollArrow from "@/assets/dark/scroll-arrow.svg";
import darkBullet from "@/assets/dark/bullet.svg";
import darkExternalLink from "@/assets/dark/external-link.svg";
import darkAndroid from "@/assets/dark/android.svg";
import darkIos from "@/assets/dark/ios.svg";
import darkConfidential from "@/assets/dark/confidential.svg";
import darkEmail from "@/assets/dark/email.svg";
import darkPhone from "@/assets/dark/phone.svg";
import lightScrollArrow from "@/assets/light/scroll-arrow.svg";
import lightBullet from "@/assets/light/bullet.svg";
import lightExternalLink from "@/assets/light/external-link.svg";
import lightAndroid from "@/assets/light/android.svg";
import lightIos from "@/assets/light/ios.svg";
import lightConfidential from "@/assets/light/confidential.svg";
import lightEmail from "@/assets/light/email.svg";
import lightPhone from "@/assets/light/phone.svg";

const { isDark } = useTheme();

const heroTechnologies = [
  "React",
  "React Native",
  "Next.js",
  "TypeScript",
  "Kotlin",
  "Swift",
];

const competencies = [
  { title: "Frontend", description: "React • Next.js • TypeScript" },
  { title: "Mobile", description: "React Native • Kotlin • Swift" },
  { title: "Integrations", description: "REST API • Firebase • POS" },
  { title: "Tools", description: "Git • GitHub Actions • Figma" },
];

const roles = [
  {
    period: "2025 — Atual",
    title: "Tech Lead",
    company: "Orange Labs Tecnologia",
    current: true,
    summary: "Liderança técnica focada em soluções de delivery e pagamentos.",
    highlights: [
      "Apoio técnico contínuo ao time de desenvolvimento e planejamento técnico de features.",
      "Revisão rigorosa de código (Code Review) para assegurar qualidade e escalabilidade.",
    ],
  },
  {
    period: "2023 — 2025",
    title: "Front-end / Mobile Dev",
    company: "Orange Labs Tecnologia",
    current: false,
    highlights: [
      "Desenvolvimento com React e React Native utilizando componentes reutilizáveis.",
      "Consumo de APIs, integração com dispositivos POS e publicação em App Store/Play Store.",
    ],
  },
  {
    period: "2023 — 2023",
    title: "QA Analyst",
    company: "Orange Labs Tecnologia",
    current: false,
    summary: "Testes funcionais, rastreamento de bugs e validação de releases.",
    highlights: [],
  },
  {
    period: "2022 — 2023",
    title: "Agente Externo",
    company: "Orange Labs Tecnologia",
    current: false,
    summary:
      "Atendimento ao cliente, suporte operacional e coleta de feedbacks estruturados.",
    highlights: [],
  },
];

const themeAssets = computed(() =>
  isDark.value
    ? {
        scrollArrow: darkScrollArrow,
        bullet: darkBullet,
        externalLink: darkExternalLink,
        android: darkAndroid,
        ios: darkIos,
        confidential: darkConfidential,
        email: darkEmail,
        phone: darkPhone,
      }
    : {
        scrollArrow: lightScrollArrow,
        bullet: lightBullet,
        externalLink: lightExternalLink,
        android: lightAndroid,
        ios: lightIos,
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
            <span>Boa Vista – RR | Open for Opportunities</span>
          </div>
          <h1 id="hero-title">João Lúcio Almeida da Silva</h1>
          <p class="hero__role">Front-end &amp; Mobile Engineer</p>
          <ul class="hero__technologies" aria-label="Principais tecnologias">
            <li v-for="technology in heroTechnologies" :key="technology">
              {{ technology }}
            </li>
          </ul>
          <a
            class="hero__scroll"
            href="#about"
            aria-label="Ir para a seção sobre mim"
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
          <h2 id="about-title" class="eyebrow">01. Sobre mim</h2>
          <p>
            Desenvolvedor Front-end e Mobile com vasta experiência no
            desenvolvimento e manutenção de aplicações web e mobile de alta
            escala utilizando React, React Native, TypeScript e Next.js. Com
            foco em arquitetura limpa e performance, entrego soluções robustas
            que unem design refinado a uma engenharia sólida. Atualmente exerço
            a função de Tech Lead, orientando decisões técnicas e garantindo a
            excelência em todas as fases do ciclo de desenvolvimento de
            software.
          </p>
        </article>

        <aside
          class="profile-summary surface-card"
          aria-label="Formação e idiomas"
        >
          <div>
            <h3>Formação</h3>
            <strong>Sistemas de Informação</strong>
            <span>Estácio da Amazônia (2020)</span>
          </div>
          <div class="profile-summary__language">
            <h3>Idiomas</h3>
            <strong>Português (Nativo)</strong>
          </div>
        </aside>
      </section>

      <section
        class="competencies section-shell"
        aria-label="Competências técnicas"
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
            <h2 id="experience-title">Experiência Profissional</h2>
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
        id="products"
        class="products section-shell"
        aria-labelledby="products-title"
      >
        <h2 id="products-title">Produtos</h2>

        <div class="products__grid">
          <article class="product-card product-card--web">
            <div class="product-card__heading">
              <h3>Pigz Delivery (Web)</h3>
              <a href="#" aria-label="Abrir Pigz Delivery em uma nova aba">
                <img :src="themeAssets.externalLink" alt="" />
              </a>
            </div>
            <p>
              Desenvolvimento de novas funcionalidades, manutenção evolutiva e
              integrações complexas.
            </p>
            <ul class="tag-list" aria-label="Tecnologias do Pigz Delivery">
              <li>React</li>
              <li>Next.js</li>
              <li>TypeScript</li>
            </ul>
          </article>

          <article class="product-card product-card--app">
            <div>
              <h3>Pigz (Android | iOS)</h3>
              <p>
                Desenvolvimento, manutenção, correções de bugs e gestão de
                publicação em ambas as stores.
              </p>
              <ul class="tag-list" aria-label="Tecnologias do aplicativo Pigz">
                <li>Kotlin</li>
                <li>Swift</li>
                <li>React Native</li>
              </ul>
            </div>
            <div class="store-platforms" aria-label="Plataformas disponíveis">
              <img :src="themeAssets.android" alt="Android" />
              <img :src="themeAssets.ios" alt="iOS" />
            </div>
          </article>

          <article class="product-card product-card--confidential">
            <div class="confidential-icon">
              <img :src="themeAssets.confidential" alt="" />
            </div>
            <div>
              <h3>Sistemas Corporativos Internos</h3>
              <p>
                Por questões de confidencialidade contratual, detalhes sobre
                sistemas de gestão e dispositivos POS não podem ser divulgados
                publicamente.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section
        id="contact"
        class="contact section-shell"
        aria-labelledby="contact-title"
      >
        <h2 id="contact-title">Conecte-se Comigo</h2>
        <p>
          Disponível para projetos desafiadores e parcerias técnicas. Vamos
          transformar ideias em software de alta performance.
        </p>
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
        <nav aria-label="Redes sociais">
          <a href="#">GitHub</a>
          <a href="#">LinkedIn</a>
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
.products > h2,
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

.products {
  padding-block: 96px;
}

.products > h2 {
  margin-bottom: 48px;
}

.products__grid {
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

.store-platforms img:first-child {
  width: 22px;
  height: 14px;
}

.store-platforms img:last-child {
  width: 15px;
  height: 22px;
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
  width: 20px;
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

  .products__grid {
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
  .products {
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
