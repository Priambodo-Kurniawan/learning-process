import Vue from 'vue'
import VueRouter from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import Dashboard from '../views/Dashboard.vue'
import Detail from '../views/Detail.vue'
import Image from '../components/Image.vue'
import Content from '../components/Content.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/detail/:id',
    component: Detail,
    redirect: {
      name: 'Content'
    },
    children: [
      {
        path: 'image',
        component: Image
      },
      {
        path: 'content',
        name: 'Content',
        component: Content
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
