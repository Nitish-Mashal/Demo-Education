import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/HomeView.vue'),
  },
]

let router = createRouter({
  // `yarn dev` uses HTML5 history so the root page is `/` instead of `/#/`.
  // Hash history is kept for the production bundle so it stays servable
  // straight from Frappe's assets directory
  // (`/assets/demo_education/frontend/index.html`) without needing any
  // server-side rewrite rules, so the landing page works on local and
  // deployed sites alike. `import.meta.env.DEV` is inlined as `false` at
  // build time, so `yarn build` output is unchanged.
  history: import.meta.env.DEV ? createWebHistory() : createWebHashHistory(),
  routes,
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, top: 96 }
    }
    return { top: 0 }
  },
})

export default router
