<template>
    <div id="app">
        <!-- 路由展示的位置 -->
        <router-view/>
        <tab-bar v-show="showTabBar"></tab-bar>
    </div>
</template>
<script>
    import TabBar from "./components/TabBar"
    import axios from 'axios'
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
            }
        },
        components: {
            TabBar
        },
        computed: {
            ...mapState(['showTabBar'])
        },
        mounted() {
            // axios.get('/ajax/movieOnInfoList?token=').then(res => {
            //   console.log(res.data)
            // })
            console.log(mapState(['showTabBar']))
        }
    }
</script>
<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        text-decoration: none;
    }

    html {
        background: #F4F4F4;
        height: 100%;
    }

    li {
        list-style: none;
    }
</style>
