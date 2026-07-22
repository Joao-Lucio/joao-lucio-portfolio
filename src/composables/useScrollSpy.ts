import { ref, onMounted, onUnmounted } from 'vue'

const activeSection = ref<string>('')

export function useScrollSpy(sectionIds: string[]) {
  let observer: IntersectionObserver | null = null

  onMounted(() => {
    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            activeSection.value = entry.target.id
          }
        }
      },
      {
        rootMargin: '-80px 0px -60% 0px',
        threshold: 0.1,
      }
    )

    for (const id of sectionIds) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onUnmounted(() => {
    observer?.disconnect()
  })

  return {
    activeSection,
  }
}
