<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    default: '',
  },
  index: {
    type: Number,
    default: -1,
  },
  accent: {
    type: String,
    default: 'purple',
  },
})

const accents = {
  purple: 'bg-edu-purple/10 text-edu-purple group-hover:bg-edu-purple',
  pink: 'bg-edu-pink/10 text-edu-pink group-hover:bg-edu-pink',
  blue: 'bg-blue-50 text-blue-600 group-hover:bg-blue-600',
  emerald: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600',
  amber: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600',
  cyan: 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600',
  orange: 'bg-orange-50 text-orange-600 group-hover:bg-orange-600',
  rose: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600',
  indigo: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600',
}
</script>

<template>
  <article
    class="group h-full rounded-2xl bg-brand-gradient p-[2px] shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover focus-within:shadow-card-hover"
  >
    <div class="flex h-full flex-col rounded-[14px] bg-white p-6">
      <div class="flex items-start justify-between gap-3">
        <span
          :class="[
            'inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 group-hover:text-white',
            accents[accent] || accents.purple,
          ]"
        >
          <slot name="icon">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-6 w-6"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
            </svg>
          </slot>
        </span>
        <span
          v-if="index >= 0"
          class="mt-1 text-[12px] font-bold tabular-nums tracking-wide text-edu-muted/70"
        >
          {{ String(index + 1).padStart(2, '0') }}
        </span>
      </div>
      <h3 class="mt-5 text-[17px] font-bold text-edu-deep">
        {{ title }}
      </h3>
      <p v-if="description" class="mt-2 text-body-md text-edu-muted">
        {{ description }}
      </p>
    </div>
  </article>
</template>
