<script setup>
import FeatureCard from '@/components/landing/FeatureCard.vue'

const features = [
  {
    title: 'Student Management',
    description:
      'Manage student profiles, admissions and educational information in one organized register.',
    icon: 'students',
  },
  {
    title: 'Instructor Management',
    description:
      'Organize instructor information, department allocation and teaching responsibilities.',
    icon: 'instructors',
  },
  {
    title: 'Course Management',
    description:
      'Create, organize and manage courses and programs, including schedules and course topics.',
    icon: 'courses',
  },
  {
    title: 'Course Enrollment',
    description:
      'Manage student enrollment and course participation with clear enrollment records.',
    icon: 'enrollment',
  },
  {
    title: 'Learning Progress',
    description:
      'Present attendance, assessments and grades so progress stays visible to the right people.',
    icon: 'progress',
  },
  {
    title: 'Centralized Administration',
    description:
      'Give administrators an organized view of students, instructors, courses and daily operations.',
    icon: 'admin',
  },
]
</script>

<template>
  <section id="features" class="scroll-mt-24 bg-white py-20 lg:py-28">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-body-sm font-bold uppercase tracking-[0.18em] text-edu-purple">
          Features
        </p>
        <h2 class="mt-3 text-display-sm font-extrabold text-edu-deep sm:text-display-md">
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
          v-for="feature in features"
          :key="feature.title"
          :title="feature.title"
          :description="feature.description"
        >
          <template #icon>
            <svg
              v-if="feature.icon === 'students'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            <svg
              v-else-if="feature.icon === 'instructors'"
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
              v-else-if="feature.icon === 'courses'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M2 4h6a4 4 0 0 1 4 4v12a3 3 0 0 0-3-3H2z" />
              <path d="M22 4h-6a4 4 0 0 0-4 4v12a3 3 0 0 1 3-3h7z" />
            </svg>
            <svg
              v-else-if="feature.icon === 'enrollment'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            <svg
              v-else-if="feature.icon === 'progress'"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M3 3v18h18" />
              <path d="M7 14l4-4 3 3 5-6" />
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
        </FeatureCard>
      </div>
    </div>
  </section>
</template>
