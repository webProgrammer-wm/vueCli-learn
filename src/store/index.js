import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        showTabBar: true,
        nowPlayingList: [],
        comingsoonList: [],
        tabBarHeight: ''
    },
    // 唯一修改状态的位置
    mutations: {
        hideTabbar(state, status) {
            state.showTabBar = !status
            console.log('hide')
        },
        setTabBarHeight(state, height) {
            state.tabBarHeight = height + 'px'
        }
    },
    actions: {
        getNowPlayingList(store) {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8085848',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15880353302293512536366","bc":"310100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                store.state.nowPlayingList = res.data.data.films
            })
        },
        getComingList(store) {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=2&k=1416578',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15880353302293512536366","bc":"440300"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                console.log(res)
                store.state.comingsoonList = res.data.data.films
            })
        }
    },
    modules: {
    }
})
