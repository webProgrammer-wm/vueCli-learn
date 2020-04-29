<template>
    <div class="photos">
        <div class="header">
            <div class="back iconfont icon-fanhui" @click="back"></div>
            <div class="text">剧照 ({{ photosList.length }})</div>
        </div>
        <div class="photos-list">
            <div v-for="(item, index) in photosList" :key="index">
                <img :src="item" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "Photos",
        data() {
            return {
                photosList: []
            }
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
            div {
                float: left;
                width: 124px;
                height: 124px;
                margin-bottom: 2px;

                img {
                    width: 100%;
                    height: 100%;
                }
            }
        }


    }
</style>
