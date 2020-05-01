<template>
    <div class="cinemas">
        <div class="header">
            <div class="city" @click="toCity">{{ this.$store.state.cityName }}</div>
            <div class="title">影院</div>
            <div class="search">搜索</div>
        </div>
        <div class="cinema-list" :style="{height: listHeight}">
            <ul>
                <li v-for="item in dataList">
                    <div class="left">
                        <p class="name">{{ item.name }}</p>
                        <p class="address">{{ item.address }}</p>
                    </div>
                    <div class="right">
                        <p class="price">￥ {{ item.lowPrice | handlePrice }} 起</p>
                        <p class="distance">距离未知</p>
                    </div>
                </li>
            </ul>
        </div>

        <tab-bar></tab-bar>
    </div>
</template>

<script>
    import TabBar from "../components/TabBar"
    import BScroll from 'better-scroll'
    import axios from 'axios'
    export default {
        name: "Cinema",
        data() {
            return {
                dataList: [],
                listHeight: '0px'
            }
        },
        components: {
            TabBar
        },
        mounted() {
            let cityId = localStorage.getItem('cityId')
            axios({
                url: `https://m.maizuo.com/gateway?cityId=${cityId}&ticketFlag=1&k=3326915`,
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15880353302293512536366","bc":"440300"}',
                    'X-Host': 'mall.film-ticket.cinema.list'
                }
            }).then(res => {
                this.dataList = res.data.data.cinemas

                let cityName = this.dataList[0].cityName.slice(0, -1)
                console.log(this.dataList)
                this.listHeight = (document.documentElement.clientHeight - 95) + 'px'
                this.$nextTick(() => {
                    new BScroll('.cinema-list', {
                        scrollbar: {
                            fade: true,
                            interactive: false
                        }
                    })
                    this.$store.commit('changeCity', cityName)
                })

            })
        },
        filters: {
            handlePrice(price) {
                return price.toString().slice(0, -2) + '.' + price.toString().slice(-2, -1)
            }
        },
        methods: {
            toCity() {
                this.$router.push('/city')
            }
        }
    }
</script>

<style lang="scss" scoped>
    .cinemas {
        .header {
            width: 100%;
            height: 44px;
            line-height: 44px;
            background: #FFF;
            text-align: center;
            font-size: 17px;
            border-bottom: 1px solid #ededed;
            display: flex;
            justify-content: space-between;
            padding: 0 10px;
            box-sizing: border-box;

            .city {
                text-align: left;
                padding-left: 5px;
                width: 60px;
                font-size: 13px;
                color: #191a1b;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .title {
                margin-left: -30px;
            }
        }

        .cinema-list {
            position: relative;
            overflow: hidden;

            ul {
                li {
                    display: flex;
                    justify-content: space-between;
                    background: #FFF;
                    padding: 15px;
                    border-bottom: 1px solid #ededed;

                    .name {
                        font-size: 15px;
                    }
                    .address {
                        margin-top: 5px;
                        width: 210px;
                        font-size: 12px;
                        color: #797d82;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }

                    .right {
                        position: relative;

                        .price {
                            color: #ff5f16;
                            font-size: 15px;
                        }
                        .distance {
                            position: absolute;
                            right: 0;
                            margin-top: 5px;
                            font-size: 12px;
                            color: #797d82;
                        }
                    }
                }
            }
        }
    }
</style>
