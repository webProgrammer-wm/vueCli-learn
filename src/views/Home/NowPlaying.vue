<template>
    <div>
        nowPlaying
        <ul>
            <li v-for="data in dataList" :key="data.filmId" @click="toProduct(data)">
                <div class="left">
                    <img :src="data.poster" alt="">
                    <div class="content">
                        <p class="title">{{ data.name }}</p>
                        <p class="label score">观众评分<span> {{ data.grade }}</span></p>
                        <p class="label actors">主演：{{ data.actors | actorName }}</p>
                        <p class="label">{{ data.nation }} | {{ data.runtime }}分钟</p>
                    </div>

                </div>
                <div class="right">
                    <div class="buy">购票</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "NowPlaying",
        data() {
            return {
                dataList: []
            }
        },
        mounted() {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=440300&pageNum=1&pageSize=10&type=1&k=8085848',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15880353302293512536366","bc":"310100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                this.dataList = res.data.data.films
                console.log(res)
            })
        },
        filters: {
            // 处理男演员名字
            actorName(data) {
                if (data) {
                    const nameList = data.map(item => item.name)
                    return nameList.join(' ')
                }

            }
        },
        methods: {
            toProduct(id) {
                // 编程式导航 跳转到 detail 页，并携带参数 id
                // 路径跳转
                // this.$router.push(`/detail/${id}`)

                // 使用路由 name 跳转
                this.$router.push({ name: 'Detail', params: { productid: 1234 }})
            }
        }
    }
</script>

<style lang="scss" scoped>
    ul {
        li {
            border-top: 1px solid #F4F4F4;
            position: relative;
            overflow: hidden;
            padding: 15px 15px 15px 0;
            display: flex;
            background: #FFF;

            .left {
                flex: 1;
                overflow: hidden;
                margin-left: 15px;

                img {
                    float: left;
                    width: 66px;
                    margin-right: 8px;
                }

                .content {
                    float: left;

                    .title {
                        color: #191a1b;
                        font-size: 16px;
                        height: 22px;
                    }

                    .label{
                        font-size: 13px;
                        margin-top: 4px;
                        color: #797d82;

                        &.actors {
                            width: 209px;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                        }

                        &.score span {
                            color: #ffb232;
                            font-size: 14px;
                        }
                    }
                }
            }

            .right {
                .buy {
                    font-size: 13px;
                    height: 25px;
                    width: 50px;
                    line-height: 25px;
                    text-align: center;
                    color: #ff5f16;
                    border: 1px solid #ff5f16;
                    border-radius: 2px;
                    position: absolute;
                    top: 50%;
                    right: 15px;
                    transform: translateY(-50%);
                }
            }
        }
    }
</style>
