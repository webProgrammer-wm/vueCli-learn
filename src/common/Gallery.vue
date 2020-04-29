<template>
    <div @click="toggleGallery" class="gallery">
        <i class="back iconfont icon-fanhui" @click="parentsClose()"></i>
        <div class="swiper-container gallery-swiper">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="item in imgList" :key="item">
                    <img :src="item" alt="">
                </div>
            </div>
            <div class="swiper-pagination gallery-swiper-pagination"></div>
        </div>
    </div>
</template>

<script>
    import Swiper from "swiper"
    import 'swiper/css/swiper.css'

    export default {
        name: "Gallery",
        data() {
            return {
                gallerySwiper: null
            }
        },
        components: {
            Swiper,
        },
        mounted() {
            this.gallerySwiper = new Swiper('.gallery-swiper', {
                slidesPerView: 'auto',
                pagination: {
                    el: '.gallery-swiper-pagination',
                    type: 'fraction'
                },
                observeParents: true,
                observer: true
            })
        },
        props: ['imgList', 'curIndex'],
        methods: {
            toggleGallery() {
                this.$emit('toggleGallery')
            },
            toImg(index) {
                this.gallerySwiper.slideTo(index, 100, false)
            },
            parentsClose() {
                this.$emit('close')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .gallery {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: #000;

        .back {
            position: absolute;
            color: #000;
            font-size: 18px;
            top: 15px;
            left: 10px;
            z-index: 100;
            background: rgba(255, 255, 255, .8);
            border-radius: 50%;
            width: 30px;
            height: 30px;
            line-height: 30px;
            text-align: center;
        }

        .gallery-swiper {
            position: relative;
            height: 100%;

            .swiper-slide {
                display: flex;
                align-items: center;

                img {
                    width: 100%;
                }
            }

            .gallery-swiper-pagination {
                position: absolute;
                top: 10px;
                &,span {
                    color: #FFF !important;
                }
            }

        }


    }


</style>
