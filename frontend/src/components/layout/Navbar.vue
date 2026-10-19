<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import BrandLogo from '@/components/BrandLogo.vue'
import { useLoginUrl } from '@/composables/useLoginUrl'
import { useSectionScroll } from '@/composables/useSectionScroll'

const { loginUrl } = useLoginUrl()
const { scrollToSection } = useSectionScroll()

const mobileOpen = ref(false)

const navLinks = [
  { label: 'Home', target: 'home' },
  { label: 'Features', target: 'features' },
  { label: 'Benefits', target: 'benefits' },
  { label: 'About', target: 'about' },
]

// const githubUrl = 'https://github.com/Nitish-Mashal/Demo-Education'

function onNavClick(event, target) {
  event.preventDefault()
  mobileOpen.value = false
  scrollToSection(target)
}

function onMobileToggle() {
  mobileOpen.value = !mobileOpen.value
}

function onEscape(event) {
  if (event.key === 'Escape') {
    mobileOpen.value = false
  }
}

function onResize() {
  if (window.innerWidth >= 1024) {
    mobileOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('keydown', onEscape)
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  document.removeEventListener('keydown', onEscape)
  window.removeEventListener('resize', onResize)
})
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-edu-border bg-white/90 backdrop-blur-md">
    <nav class="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[72px] lg:px-8"
      aria-label="Main">
      <a href="#home"
        class="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-edu-pink focus-visible:ring-offset-2"
        @click="onNavClick($event, 'home')">
        <BrandLogo />
      </a>

      <div class="hidden items-center gap-1 lg:flex">
        <a v-for="link in navLinks" :key="link.target" :href="`#${link.target}`"
          class="rounded-lg px-3.5 py-2 text-body-md font-medium text-edu-muted transition-colors hover:text-edu-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-edu-pink focus-visible:ring-offset-1"
          @click="onNavClick($event, link.target)">
          {{ link.label }}
        </a>
        <!-- <a :href="githubUrl" target="_blank" rel="noopener noreferrer"
          class="ml-1 inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-body-md font-medium text-edu-muted transition-colors hover:text-edu-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-edu-pink focus-visible:ring-offset-1">
          <svg viewBox="0 0 24 24" class="h-4 w-4" fill="currentColor" aria-hidden="true">
            <path
              d="M12 .5C5.73.5.99 5.24.99 11.5c0 4.86 3.15 8.98 7.52 10.44.55.1.75-.24.75-.53v-1.86c-3.06.67-3.71-1.48-3.71-1.48-.5-1.27-1.22-1.61-1.22-1.61-1-.68.08-.67.08-.67 1.11.08 1.69 1.14 1.69 1.14.98 1.68 2.57 1.2 3.2.92.1-.71.38-1.2.7-1.48-2.44-.28-5.01-1.22-5.01-5.44 0-1.2.43-2.18 1.13-2.95-.11-.28-.49-1.4.11-2.92 0 0 .92-.3 3.02 1.13a10.5 10.5 0 0 1 5.5 0c2.1-1.43 3.02-1.13 3.02-1.13.6 1.52.22 2.64.11 2.92.7.77 1.13 1.75 1.13 2.95 0 4.23-2.58 5.16-5.03 5.43.4.34.75 1.02.75 2.06v3.05c0 .29.2.64.76.53 4.36-1.46 7.51-5.58 7.51-10.44C23.01 5.24 18.27.5 12 .5z" />
          </svg>
          GitHub
        </a> -->
        <a :href="loginUrl"
          class="ml-2 inline-flex items-center justify-center rounded-xl bg-brand-gradient px-5 py-2.5 text-body-md font-semibold text-white shadow-cta transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-edu-purple focus-visible:ring-offset-2">
          Open Demo App
        </a>
      </div>

      <button type="button"
        class="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-edu-border bg-white text-edu-purple transition-colors hover:bg-edu-bg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-edu-pink focus-visible:ring-offset-2 lg:hidden"
        :aria-expanded="mobileOpen ? 'true' : 'false'" aria-controls="mobile-menu"
        :aria-label="mobileOpen ? 'Close menu' : 'Open menu'" @click="onMobileToggle">
        <svg v-if="!mobileOpen" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          stroke-linecap="round" class="h-5 w-5" aria-hidden="true">
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
        <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
          class="h-5 w-5" aria-hidden="true">
          <path d="M6 6l12 12M18 6L6 18" />
        </svg>
      </button>
    </nav>

    <div v-show="mobileOpen" id="mobile-menu" class="border-t border-edu-border bg-white lg:hidden">
      <div class="space-y-1 px-4 py-4 sm:px-6">
        <a v-for="link in navLinks" :key="`mobile-${link.target}`" :href="`#${link.target}`"
          class="block rounded-xl px-4 py-3 text-body-lg font-medium text-edu-ink transition-colors hover:bg-edu-bg hover:text-edu-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-edu-pink"
          @click="onNavClick($event, link.target)">
          {{ link.label }}
        </a>
        <!-- <a :href="githubUrl" target="_blank" rel="noopener noreferrer"
          class="block rounded-xl px-4 py-3 text-body-lg font-medium text-edu-ink transition-colors hover:bg-edu-bg hover:text-edu-purple focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-edu-pink">
          GitHub
        </a> -->
        <a :href="loginUrl"
          class="mt-2 block rounded-xl bg-brand-gradient px-4 py-3 text-center text-body-lg font-semibold text-white shadow-cta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-edu-purple focus-visible:ring-offset-2"
          @click="mobileOpen = false">
          Open Demo App
        </a>
      </div>
    </div>
  </header>
</template>
