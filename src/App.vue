<template>
    <div id="app">
        <tab-bar></tab-bar>
        <!-- 路由展示的位置 -->
        <router-view/>
    </div>
</template>
<script>
    import TabBar from "./components/TabBar"
    import axios from 'axios'
    export default {
        components: {
            TabBar
        },
        mounted() {
            // axios.get('/ajax/movieOnInfoList?token=').then(res => {
            //   console.log(res.data)
            // })
        },
    }
</script>
<style lang="scss">
    * {
        margin: 0;
        padding: 0;
    }

    html {
        background: #F4F4F4;
        height: 100%;
    }

    li {
        list-style: none;
    }
</style>
