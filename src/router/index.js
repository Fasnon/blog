import { createRouter, createWebHistory } from 'vue-router'

// Import your pages
import LandingPage from '@/pages/LandingPage.vue'
import AboutPage from '@/pages/AboutPage.vue'

const routes = [
  { path: '/', name: 'Landing', component: LandingPage },
  { path: '/about', name: 'About', component: AboutPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
