import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import countrieInfo from '../views/countrieInfo.vue'
import errorPage from '../components/Error Page/errorPage.vue'
const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/countrieInfo/:countrieName',
    name: 'countrieInfo',
    component: countrieInfo,
  },
  {
    path: '/:catchAll(.*)',
    name: 'errorPage',
    component: errorPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})



export default router
