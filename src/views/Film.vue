<template>
    <div>
        <!-- 通过key值来解决 swiper 初始化过早的问题，
             如果这次初始化前没拿到数据，那么在初始化后才拿到数据，
             递归算法因为 imgList 的长度变化而重新渲染
         -->
        <swiper class="swiper-wrap" :key="imgList.length">
            <div class="swiper-slide" v-for="item in imgList" :key="item">
                <img :src="item" alt="">
            </div>
        </swiper>
        <router-view></router-view>
    </div>
</template>

<script>
    import Navbar from "../components/Navbar"
    import CommingSoon from "./Film/CommingSoon"
    import NowPlaying from "./Film/NowPlaying"
    import Swiper from "@/views/Film/Swiper"
    import axios from 'axios'

    export default {
        name: "Film",
        data() {
            return {
                imgList: [
                  'http://img5.imgtn.bdimg.com/it/u=523331786,452711451&fm=15&gp=0.jpg',
                  'http://img3.imgtn.bdimg.com/it/u=1761607809,3289570738&fm=15&gp=0.jpg',
                  'http://img5.imgtn.bdimg.com/it/u=4088829828,869036217&fm=15&gp=0.jpg'
                ]
            }
        },
        components: {
            Navbar,
            CommingSoon,
            NowPlaying,
            Swiper
        },
        mounted() {

        }
    }
</script>

<style lang="scss" scoped>

</style>
