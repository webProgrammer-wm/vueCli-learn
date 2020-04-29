<template>
    <div>
        <!-- 通过key值来解决 swiper 初始化过早的问题，
             如果这次初始化前没拿到数据，那么在初始化后才拿到数据，
             递归算法因为 imgList 的长度变化而重新渲染
         -->
        <swiper class="swiper-wrap banner-swiper"
                :el="'.banner-swiper'"
                :key="imgList.length"
                ref="swiper"
                :loop="true"
                :autoplay="true"
                :slidesPerView="'auto'"
                :pagination="true"
        >
            <div class="swiper-slide" v-for="item in imgList" :key="item">
                <img :src="item" alt="">
            </div>
        </swiper>
        <film-header :class="isFixed? 'fixed' : ''"></film-header>
        <!-- 防止header栏吸顶后，下面内容出现一次抖动问题 -->
        <router-view :style="{paddingTop:isFixed?'49px' : ''}"></router-view>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>

        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>

        <p>1</p>
        <p>1</p><p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>

        <p>1</p>
        <p>1</p>

        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>

        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>

    </div>
</template>

<script>
    import Navbar from "../components/Navbar"
    import CommingSoon from "./Film/CommingSoon"
    import NowPlaying from "./Film/NowPlaying"
    import Swiper from "@/views/Film/Swiper"
    import FilmHeader from "./Film/FilmHeader"
    import axios from 'axios'

    export default {
        name: "Film",
        data() {
            return {
                imgList: [
                  'http://img5.imgtn.bdimg.com/it/u=523331786,452711451&fm=15&gp=0.jpg',
                  'http://img3.imgtn.bdimg.com/it/u=1761607809,3289570738&fm=15&gp=0.jpg',
                  'http://img5.imgtn.bdimg.com/it/u=4088829828,869036217&fm=15&gp=0.jpg'
                ],
                isFixed: false
            }
        },
        components: {
            Navbar,
            // TabBar,
            CommingSoon,
            NowPlaying,
            FilmHeader,
            Swiper
        },
        beforeMount() {
            this.$store.state.showTabBar = true
        },
        mounted() {
            window.onscroll = this.touchScroll
        },
        methods: {
            touchScroll() {
                // console.log(document.documentElement.scrollTop, this.$refs.swiper)
                if (document.documentElement.scrollTop >= this.$refs.swiper.$el.offsetHeight) {
                    this.isFixed = true
                } else {
                    this.isFixed = false
                }
            }
        },
        beforeDestroy() {
            window.onscroll = null
        }
    }
</script>

<style lang="scss" scoped>
    .swiper-wrap {
        height: 200px;
        img {
            width: 400px;
            height: 200px;
        }
    }
</style>
