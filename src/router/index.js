import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/home"
import Cinema from "../views/Cinema"
import Center from "../views/Center"

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home,

  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: Cinema
  },
  {
    path: '/center',
    name: 'Center',
    component: Center
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
