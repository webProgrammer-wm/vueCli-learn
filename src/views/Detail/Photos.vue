<template>
    <div class="photos">
        <div class="header">
            <div class="back iconfont icon-fanhui" @click="back"></div>
            <div class="text">剧照 ({{ photosList.length }})</div>
        </div>
        <div class="photos-list">
            <div class="item"  v-for="(item, index) in photosList" :key="index">
                <img @click="showGallery(index)" :src="item" alt="">
            </div>
        </div>

        <gallery v-show="isShowGallery"
                 :imgList="photosList"
                 ref="gallery"
                 @close="close()"
        >
        </gallery>
    </div>
</template>

<script>
    import axios from 'axios'
    import Gallery from "../../common/Gallery"
    export default {
        name: "Photos",
        data() {
            return {
                photosList: [],
                isShowGallery: false,
            }
        },
        components: {
            Gallery
        },
        beforeMount() {
            this.$store.commit('hideTabbar', true)
        },
        mounted() {
            axios({
                url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.productId}&k=559072`,
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15880353302293512536366","bc":"440300"}',
                    'X-Host': 'mall.film-ticket.film.info'
                }
            }).then(res => {
                // console.log(res)
                this.photosList = res.data.data.film.photos
                console.log(this.photosList)
            })
        },
        methods: {
            back() {
                this.$router.push('/detail/' + this.$route.params.productId)
            },
            showGallery(index) {
                this.isShowGallery = true
                this.$refs.gallery.toImg(index)
            },
            close() {
                this.isShowGallery = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .photos {
        .header {
            width: 100%;
            height: 49px;
            line-height: 49px;
            background: #FFF;
            text-align: center;
            position: relative;

            .back {
                position: absolute;
                left: 10px;
                font-size: 20px;
                color: #000;
                text-align: center;
            }

            .text {
                font-size: 17px;
            }
        }

        .photos-list {
            display: flex;
            flex-wrap: wrap;
            /*width: 100%;*/
            .item {
                width: 33%;
                height: 124px;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }


    }
</style>
