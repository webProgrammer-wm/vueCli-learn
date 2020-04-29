import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showTabBar: true
    },
    // 唯一修改状态的位置
    mutations: {
        hideTabbar(state, status) {
            state.showTabBar = !status
            console.log('hide')
        }
    },
    actions: {
    },
    modules: {
    }
})
