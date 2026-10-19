<script setup>
import RoleCard from '@/components/landing/RoleCard.vue'

const roles = [
  {
    key: 'students',
    title: 'Students',
    description:
      'A focused workspace for the people at the heart of the institution.',
    bullets: [
      'Access relevant courses and course information',
      'View enrollment and participation records',
      'Keep up with attendance, grades and learning activities',
    ],
    icon: 'student',
  },
  {
    key: 'instructors',
    title: 'Instructors',
    description:
      'Tools that support teaching responsibilities day to day.',
    bullets: [
      'Manage teaching responsibilities and assigned courses',
      'Work with course topics, schedules and student groups',
      'Record attendance and assessment results',
    ],
    icon: 'instructor',
  },
  {
    key: 'administrators',
    title: 'Administrators',
    description:
      'A complete oversight layer for the whole operation.',
    bullets: [
      'Oversee student, instructor and course administration',
      'Coordinate admissions, enrollment and fees',
      'Monitor operations from centralized dashboards',
    ],
    icon: 'admin',
  },
]
</script>

<template>
  <section id="roles" class="scroll-mt-24 bg-white py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-body-sm font-bold uppercase tracking-[0.18em] text-edu-purple">
          Built for every role
        </p>
        <h2 class="mt-3 text-display-sm font-extrabold text-edu-deep sm:text-display-md">
          One platform, three perspectives
        </h2>
        <p class="mt-4 text-body-lg text-edu-muted">
          Each group gets a workspace shaped around what they need &mdash;
          while the underlying records stay connected.
        </p>
      </div>

      <div class="mt-14 grid gap-6 md:grid-cols-3">
        <RoleCard
          v-for="role in roles"
          :key="role.key"
          :title="role.title"
          :description="role.description"
          :bullets="role.bullets"
        >
          <template #icon>
            <svg
              v-if="role.icon === 'student'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M22 10 12 5 2 10l10 5 10-5z" />
              <path d="M6 12.5V17c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-4.5" />
            </svg>
            <svg
              v-else-if="role.icon === 'instructor'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <svg
              v-else
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
              aria-hidden="true"
            >
              <rect x="3" y="3" width="7" height="9" rx="1.5" />
              <rect x="14" y="3" width="7" height="5" rx="1.5" />
              <rect x="14" y="12" width="7" height="9" rx="1.5" />
              <rect x="3" y="16" width="7" height="5" rx="1.5" />
            </svg>
          </template>
        </RoleCard>
      </div>
    </div>
  </section>
</template>
