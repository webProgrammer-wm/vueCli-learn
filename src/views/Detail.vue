<template>
    <div class="detail" v-if="movieInfo">

        <div class="header-bar" :class="{ fixed: isFixed }">
            <div class="back iconfont icon-fanhui" @click="back()"></div>
            <div class="title" v-show="isFixed">{{ movieInfo.name }}</div>
        </div>
        <div class="img-info">
            <img :src="movieInfo.poster" alt="">
        </div>
        <div class="info">
            <div class="title">
                <p>{{ movieInfo.name }}</p>
                <p>{{ movieInfo.grade }}分</p>
            </div>
            <div class="text">
                <p>{{ movieInfo.category }}</p>
                <p>{{ movieInfo.premiereAt | handleTime }}上映</p>
                <p>{{ movieInfo.nation }} | {{ movieInfo.runtime }}分钟</p>

            </div>
            <div class="synopsis" :class="{hidden: hidden}">
                <p>{{ movieInfo.synopsis }}</p>
            </div>
            <div class="toggle iconfont icon-fanhui" @click="showMoreText"></div>
        </div>

        <div class="actors">
            <div class="title">演职人员</div>
            <swiper class="img-list" :free-mode="true" :slides-per-view="'auto'">
                <div class="swiper-slide item" v-for="(item, index) in actorsList" :key="index">
                    <div class="person-img">
                        <img :src="item.avatarAddress" alt="">
                    </div>

                    <div class="bottom-info">
                        <p class="name">{{ item.name }}</p>
                        <p class="role">{{ item.role }}</p>
                    </div>
                </div>
            </swiper>
        </div>

        <div class="photos">
            <div class="top">
                <div class="title">剧照</div>

                <div class="img-count" @click="goToPhotos">
                    全部({{ movieInfo.photos.length }})
                    <i class="iconfont icon-fanhui all"></i>
                </div>
            </div>
            <swiper class="img-list" :el="'.img-list'" :free-mode="true" :slides-per-view="'auto'">
                <div class="swiper-slide item" v-for="(item, index) in movieInfo.photos" :key="index">
                    <div class="person-img">
                        <img :src="item" alt="">
                    </div>

                    <div class="bottom-info">
                        <p class="name">{{ item.name }}</p>
                        <p class="role">{{ item.role }}</p>
                    </div>
                </div>
            </swiper>

        </div>

        <div class="go-buy">
            <router-link to="../">在线选座</router-link>
        </div>

    </div>
</template>

<script>
    import axios from 'axios'
    import Swiper from "./Film/Swiper"
    import bus from "../bus"

    export default {
        name: "Detail",
        data() {
            return {
                movieInfo: null,
                hidden: true,
                actorsList: [],
                isFixed: false
            }
        },
        components: {
          Swiper
        },
        beforeMount() {
            bus.$emit('maizuo', false)
        },
        mounted() {
            // 在详情页面获取id
            // console.log("要id获取详情信息",this.$route.params.productid)
            axios({
                url: `https://m.maizuo.com/gateway?filmId=${this.$route.params.productId}&k=559072`,
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15880353302293512536366","bc":"440300"}',
                    'X-Host': 'mall.film-ticket.film.info'
                }
            }).then(res => {
                this.movieInfo = res.data.data.film
                this.actorsList = res.data.data.film.actors
                console.log(this.movieInfo)
                // console.log(this.actorsList)
            })

            window.onscroll = this.handleScroll
        },
        methods: {
            back() {
                this.$router.push('../')
            },
            showMoreText() {
                this.hidden = !this.hidden
            },
            handleScroll() {
                let curScroll = document.documentElement.scrollTop
                console.log(curScroll)
                this.isFixed = curScroll > 49;
            },
            goToPhotos() {
                this.$router.push({ name: 'Photos', params: { productId: this.$route.params.productId }})
            }
        },
        filters: {
            handleTime(time) {
                const newTime = new Date(time*1000)
                                .toLocaleDateString()
                                .replace(/\//g, '-')
                return newTime
            }
        },
        beforeDestroy() {
            window.onscroll = null
            bus.$emit('maizuo', true)
        }
    }
</script>

<style lang="scss" scoped>
    .detail {
        padding-bottom: 59px;

        .header-bar {
            position: fixed;
            top: 0;
            left: 0;
            z-index: 100;

            .title {
                text-align: center;
                line-height: 49px;
            }

            .back {
                position: fixed;
                top: 10px;
                left: 10px;
                font-size: 20px;
                background: #FFF;
                color: #000;
                border-radius: 50%;
                width: 30px;
                height: 30px;
                text-align: center;
                line-height: 30px;
            }
        }

        .img-info {
            height: 200px;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .info {
            position: relative;
            background: #fff;
            width: 100%;
            padding: 15px;
            padding-bottom: 30px;
            box-sizing: border-box;

            .title {
                width: 100%;
                display: flex;
                justify-content: space-between;

                p {
                    font-size: 18px;

                    &:first-child {
                        color: #191a1b;
                        height: 24px;
                        line-height: 24px;
                    }

                    &:last-child {
                        color: #ffb232;
                    }
                }
            }

            .text {
                p {
                    font-size: 13px;
                    color: #797d82;
                    margin-top: 4px;
                }
            }

            .synopsis {
                transition: all .3s;
                height: 60px;
                p {
                    margin-top: 10px;
                    font-size: 13px;
                    color: #797d82;
                }
                &.hidden {
                    height: 42px;
                    overflow: hidden;

                    &~.toggle {
                        transform: rotate(-90deg);
                    }
                }
            }

            .toggle {
                position: absolute;
                left: 50%;
                bottom: 5px;
                font-size: 12px;
                line-height: normal;
                transform: rotate(90deg);
            }
        }

        .actors {
            margin-top: 10px;
            background: #fff;
            padding: 15px;
            box-sizing: border-box;

            .title {
                font-size: 16px;
                margin-bottom: 15px;
            }

            .img-list {
                display: flex;

                .item {
                    /*flex: 1;*/
                    width: 85px !important;
                    height: 85px;
                    overflow: hidden;
                    margin-right: 10px;
                    padding-bottom: 50px;

                    .person-img {
                        width: 85px !important;
                        height: 85px;
                        overflow: hidden;
                        img {
                            width: 100%;
                            margin-top: -15px;
                        }
                    }

                    .bottom-info {
                        padding-top: 10px;
                        text-align: center;
                        .name {
                            color: #191a1b;
                            font-size: 12px;
                        }
                        .role {
                            font-size: 10px;
                            color: #797d82;
                        }
                    }

                }
            }

        }

        .photos {
            margin-top: 10px;
            background: #fff;
            padding: 15px;

            .top {
                display: flex;
                justify-content: space-between;

                .title {
                    font-size: 16px;
                }
                .img-count {
                    font-size: 13px;
                    color: #797d82;

                    .all {
                        display: inline-block;
                        font-size: 10px;
                        margin-left: -2px;
                        transform: rotate(180deg);
                    }
                }

            }

            .img-list {
                margin-top: 20px;
                display: flex;

                .item {
                    /*flex: 1;*/
                    width: 150px;
                    height: 100px;
                    overflow: hidden;
                    margin-right: 10px;

                    .person-img {
                        /*width: 150px !important;*/
                        height: 100px;
                        overflow: hidden;
                        img {
                            width: 100%;
                            margin-top: -15px;
                        }
                    }

                    .bottom-info {
                        padding-top: 10px;
                        text-align: center;
                        .name {
                            color: #191a1b;
                            font-size: 12px;
                        }
                        .role {
                            font-size: 10px;
                            color: #797d82;
                        }
                    }

                }
            }
        }

        .go-buy {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 49px;
            line-height: 49px;
            background: #ff5f16;
            z-index: 10;
            text-align: center;

            a {
                color: #FFF;
            }
        }
    }

    .fixed {
        background: #FFF;
        height: 49px;
        width: 100%;
        border-bottom: 1px solid #ededed;
    }
</style>
