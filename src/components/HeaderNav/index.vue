<script setup lang="ts">
import { toRef } from "vue";
import { useHeaderNav, type HeaderNavProps } from "./useHeaderNav";

const props = defineProps<HeaderNavProps>();
const emit = defineEmits<{
  navigate: [href: string];
}>();

const { handleNavigate, items } = useHeaderNav(
  toRef(props, "activeSection"),
  (href) => emit("navigate", href),
);
</script>

<template>
  <nav class="header-nav" aria-label="Main navigation">
    <ul class="header-nav__list">
      <li v-for="item in items" :key="item.key" class="header-nav__item">
        <a
          :href="item.href"
          class="header-nav__link"
          :class="{ 'header-nav__link--active': item.isActive }"
          @click.prevent="handleNavigate(item.href)"
        >
          {{ item.label }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped src="./styles.css"></style>
