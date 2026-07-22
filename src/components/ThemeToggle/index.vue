<script setup lang="ts">
import { Moon, Sun } from "lucide-vue-next";
import { useThemeToggle } from "./useThemeToggle";

const { ariaLabel, handleToggle, isAnimating, isDark } = useThemeToggle();
</script>

<template>
  <button
    class="theme-toggle"
    :class="{ 'theme-toggle--animating': isAnimating }"
    :aria-label="ariaLabel"
    :title="ariaLabel"
    @click="handleToggle"
  >
    <Transition name="theme-icon" mode="out-in">
      <Moon
        v-if="isDark"
        :size="18"
        :stroke-width="1.75"
        class="theme-toggle__icon"
      />
      <Sun
        v-else
        :size="18"
        :stroke-width="1.75"
        class="theme-toggle__icon"
      />
    </Transition>
  </button>
</template>

<style scoped src="./styles.css"></style>
