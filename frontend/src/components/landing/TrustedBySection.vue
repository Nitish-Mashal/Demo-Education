<script setup>
const modules = [
  'Student records',
  'Instructor records',
  'Courses & programs',
  'Course enrollments',
  'Attendance',
  'Assessments & grading',
  'Fees & payments',
  'Operations dashboards',
]
</script>

<template>
  <section
    id="about"
    class="border-y border-edu-border bg-edu-bg py-16 lg:py-20"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-body-sm font-bold uppercase tracking-[0.18em] text-edu-purple">
          About the platform
        </p>
        <h2 class="mt-3 text-display-sm font-extrabold text-edu-deep sm:text-display-md">
          One connected system for the entire education lifecycle
        </h2>
        <p class="mt-4 text-body-lg text-edu-muted">
          Built on Frappe&rsquo;s Education module, the platform brings the
          core building blocks of an institution &mdash; people, courses,
          enrollment, academics and administration &mdash; into a single
          workspace with role-based access for everyone involved.
        </p>
      </div>

      <ul class="mx-auto mt-10 flex max-w-4xl flex-wrap items-center justify-center gap-3">
        <li
          v-for="module in modules"
          :key="module"
          class="inline-flex items-center gap-2 rounded-full border border-edu-border bg-white px-4 py-2 text-body-sm font-semibold text-edu-ink shadow-sm"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-3.5 w-3.5 text-edu-pink"
            aria-hidden="true"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>
          {{ module }}
        </li>
      </ul>
    </div>
  </section>
</template>
