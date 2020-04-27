import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/home"
import NowPlaying from "../views/Home/NowPlaying"
import ComingSoon from "../views/Home/CommingSoon"
import Cinema from "../views/Cinema"
import Center from "../views/Center"
import Detail from "../views/Detail"
import Login from "../views/login"

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
  {
    path: '/login',
    name: 'Login',
    component: Login
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

// 全局守卫
// router.beforeEach((to, from, next) => {
//   console.log(to)
//   if (to.path === '/center') {
//     console.log('你登录没')
//     // 如果登录成功，允许进入 center页面
//     if (false) {
//       next()
//     }
//     // 如果未登录，进入 login 页面
//     else {
//       next('/login')
//     }
//   }
//   // 放行
//   else {
//     next()
//   }
// })

export default router
