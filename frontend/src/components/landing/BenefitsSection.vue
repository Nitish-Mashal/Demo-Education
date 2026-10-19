<script setup>
import DashboardPreview from '@/components/landing/DashboardPreview.vue'

const benefits = [
  {
    title: 'Centralized education operations',
    description:
      'Students, instructors, courses and enrollment live in one system instead of scattered spreadsheets.',
  },
  {
    title: 'Better student–instructor coordination',
    description:
      'Everyone works from the same course, schedule and enrollment information.',
  },
  {
    title: 'Simplified course administration',
    description:
      'Create courses, run enrollments and manage groups without repeating the same data entry.',
  },
  {
    title: 'Easier access to relevant information',
    description:
      'Role-based workspaces surface what students, instructors and administrators actually need.',
  },
  {
    title: 'Less repetitive administrative work',
    description:
      'Attendance, assessments and fees flow through connected records rather than manual re-entry.',
  },
]
</script>

<template>
  <section id="benefits" class="scroll-mt-24 bg-edu-bg py-20 lg:py-28">
    <div class="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20 lg:px-8">
      <div class="relative order-2 lg:order-1">
        <div class="rounded-[26px] bg-brand-gradient p-1.5 shadow-panel">
          <DashboardPreview />
        </div>
      </div>

      <div class="order-1 lg:order-2">
        <p class="text-body-sm font-bold uppercase tracking-[0.18em] text-edu-purple">
          Benefits
        </p>
        <h2 class="mt-3 text-display-sm font-extrabold text-edu-deep sm:text-display-md">
          Run the institution with
          <span class="bg-brand-gradient bg-clip-text text-transparent">
            less friction
          </span>
        </h2>
        <p class="mt-4 text-body-lg text-edu-muted">
          The platform is designed around the daily rhythm of an education
          institution &mdash; so coordination improves and routine
          administrative work takes less effort.
        </p>

        <ul class="mt-8 space-y-5">
          <li
            v-for="benefit in benefits"
            :key="benefit.title"
            class="flex gap-4"
          >
            <span
              class="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-3.5 w-3.5"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <div>
              <h3 class="text-[16px] font-bold text-edu-deep">
                {{ benefit.title }}
              </h3>
              <p class="mt-1 text-body-md text-edu-muted">
                {{ benefit.description }}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
