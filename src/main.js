import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { IndexBar, IndexAnchor } from 'vant'

import { Cell } from 'vant';

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(IndexBar);
Vue.use(IndexAnchor);
Vue.use(Cell)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
