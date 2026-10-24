<script setup>
import FeatureCard from '@/components/landing/FeatureCard.vue'

const features = [
  {
    title: 'Student Management',
    icon: 'students',
    accent: 'purple',
  },
  {
    title: 'Fees & Finance Management',
    icon: 'fees',
    accent: 'emerald',
  },
  {
    title: 'Examination Management',
    icon: 'exam',
    accent: 'pink',
  },
  {
    title: 'Faculty Management',
    icon: 'faculty',
    accent: 'blue',
  },
  {
    title: 'Library Management',
    icon: 'library',
    accent: 'amber',
  },
  {
    title: 'Timetable Management',
    icon: 'timetable',
    accent: 'cyan',
  },
  {
    title: 'Transport Management',
    icon: 'transport',
    accent: 'orange',
  },
  {
    title: 'Hostel Management',
    icon: 'hostel',
    accent: 'rose',
  },
  {
    title: 'Analytics & Reports',
    icon: 'analytics',
    accent: 'indigo',
  },
]
</script>

<template>
  <section class="scroll-mt-24 bg-white pb-5">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-body-sm font-bold uppercase tracking-[0.18em] text-edu-purple">
          Features
        </p>
        <h2 id="features" class="mt-3 text-display-sm font-extrabold text-edu-deep sm:text-display-md">
          Everything you need to run
          <span class="bg-brand-gradient bg-clip-text text-transparent">
            education operations
          </span>
        </h2>
        <p class="mt-4 text-body-lg text-edu-muted">
          Practical capabilities mapped to the way institutions actually work
          &mdash; from the student register to the classroom and the
          administrator&rsquo;s desk.
        </p>
      </div>

      <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <FeatureCard
          v-for="(feature, index) in features"
          :key="feature.title"
          :title="feature.title"
          :accent="feature.accent"
          :index="index"
        >
          <template #icon>
            <svg v-if="feature.icon === 'students'" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <svg v-else-if="feature.icon === 'fees'" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
              <rect x="2" y="5" width="20" height="14" rx="2" />
              <line x1="2" y1="10" x2="22" y2="10" />
              <line x1="6" y1="15" x2="10" y2="15" />
            </svg>
            <svg v-else-if="feature.icon === 'exam'" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <path d="M14 2v6h6" />
              <path d="M9 15l2 2 4-4" />
            </svg>
            <svg v-else-if="feature.icon === 'faculty'" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <svg v-else-if="feature.icon === 'library'" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
            </svg>
            <svg v-else-if="feature.icon === 'timetable'" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
              <rect x="3" y="4" width="18" height="18" rx="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            <svg v-else-if="feature.icon === 'transport'" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
              <path d="M8 6v6" />
              <path d="M15 6v6" />
              <path d="M2 12h19.6" />
              <path
                d="M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3" />
              <circle cx="7" cy="18" r="2" />
              <circle cx="16" cy="18" r="2" />
            </svg>
            <svg v-else-if="feature.icon === 'hostel'" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
              <path d="M2 4v16" />
              <path d="M2 8h18a2 2 0 0 1 2 2v10" />
              <path d="M2 17h20" />
              <path d="M6 8v9" />
            </svg>
            <svg v-else viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round" class="h-6 w-6" aria-hidden="true">
              <line x1="18" y1="20" x2="18" y2="10" />
              <line x1="12" y1="20" x2="12" y2="4" />
              <line x1="6" y1="20" x2="6" y2="14" />
            </svg>
          </template>
        </FeatureCard>
      </div>
    </div>
  </section>
</template>
