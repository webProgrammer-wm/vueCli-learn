<template>
    <div id="app">
        <!-- 路由展示的位置 -->
        <router-view/>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        components: {
            // TabBar
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
