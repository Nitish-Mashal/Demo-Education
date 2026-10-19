import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
]

let router = createRouter({
  // Hash history keeps the production bundle servable straight from
  // Frappe's assets directory (`/assets/demo_education/frontend/index.html`)
  // without needing any server-side rewrite rules, so the landing page
  // works on local and deployed sites alike.
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 96 }
    }
    return { top: 0 }
  },
})

export default router
