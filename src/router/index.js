import { createWebHistory, createRouter } from 'vue-router'

import Home from '../pages/Home/Home.vue'
import About from '../pages/About/About.vue'
import Terms from '../pages/Terms/Terms.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/terms', name:'Terms', component: Terms }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router