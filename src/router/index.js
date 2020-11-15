import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutMusic from '../components/AboutMusic'
import AddMusic from '../components/AddMusic'
import Player from '../components/Player'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Player,
    children: [
      {
        path: 'about/:id',
        component: AboutMusic
      },
      {
        path: 'add',
        component: AddMusic
      },
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
