<template>
    <div class="swiper-container film-swiper">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <div v-if="pagination" class="swiper-pagination film-swiper-pagination"></div>
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
        props: {
            loop: {
                type: Boolean,
                default: false
            },
            pagination: {
                type: Boolean,
                default: false
            },
            autoplay: {
                type: Boolean,
                default: false
            },
            freeMode: {
                type: Boolean,
                default: false
            },
            slidesPerView: {
                type: String,
                default: ''
            },
            el: {
                type: String,
                default: ''
            }
        },
        mounted() {
            new Swiper(this.el, {
                loop: this.loop,
                autoplay: this.autoplay,
                pagination: {
                    el: '.swiper-pagination'
                },
                freeMode: this.freeMode,
                slidesPerView: this.slidesPerView,
                observeParents: true,
                observer: true
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>
