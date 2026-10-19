import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
]

let router = createRouter({
  // HTML5 history in both dev and production. In production the bundle is
  // served by Frappe at the site root via `www/index.html`, so the browser
  // stays on `/` — no hash routes, no assets URL in the address bar.
  history: createWebHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 96 }
    }
    return { top: 0 }
  },
})

export default router
