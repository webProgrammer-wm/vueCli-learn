<template>
    <div class="swiper-container film-swiper">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>

        <div class="swiper-pagination film-swiper-pagination"></div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import 'swiper/css/swiper.css'
    export default {
        name: "Swiper",
        data() {
            return {}
        },
        mounted() {
            new Swiper('.film-swiper', {
                loop: true,
                autoplay: {
                  delay: 1500
                },
                pagination: {
                    el: '.swiper-pagination'
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .swiper-wrap {
    img {
        width: 400px;
        height: 200px;
    }
    }
    .film-swiper-pagination {
        text-align: right;
        margin-left: -10px;
    }
</style>
