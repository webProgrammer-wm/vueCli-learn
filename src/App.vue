<template>
    <div id="app">
        <!-- 路由展示的位置 -->
        <router-view/>
        <tab-bar v-show="showTabbar"></tab-bar>
    </div>
</template>
<script>
    import TabBar from "./components/TabBar"
    import axios from 'axios'
    import bus from "./bus"
    export default {
        data() {
            return {
                showTabbar: true
            }
        },
        components: {
            TabBar
        },
        beforeMount() {
            bus.$on('maizuo', (data) => {
                console.log('订阅了', data)
                this.showTabbar = data
            })
        },
        mounted() {
            // axios.get('/ajax/movieOnInfoList?token=').then(res => {
            //   console.log(res.data)
            // })
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
