import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/home"
import NowPlaying from "../views/Home/NowPlaying"
import ComingSoon from "../views/Home/CommingSoon"
import Cinema from "../views/Cinema"
import Center from "../views/Center"
import Detail from "../views/Detail"

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: home,
    children: [
      {
        path: '/home/nowplaying',
        component: NowPlaying
      },
      {
        path: '/home/comingsoon',
        component: ComingSoon
      }
    ],
    // 跳转到 home 页的话 重定向到 nowplaying页
    redirect: '/home/nowplaying'
  },
  {
    path: '/cinema',
    name: 'Cinema',
    component: Cinema
  },
  {
    // 动态路由，参数id 在此获取
    path: '/detail/:productid', // /detail/123
    name: 'Detail',
    component: Detail,

  },
  {
    path: '/center',
    name: 'Center',
    component: Center
  },
  // 路由重定向，如果路由跳转的不是以上配置好的路由，那么自动跳转到 /home 页
  {
    path: '*',
    redirect: '/home'
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
