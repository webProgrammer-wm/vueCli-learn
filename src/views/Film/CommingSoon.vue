<template>
    <div>
        <ul>
            <li v-for="data in this.$store.state.comingsoonList" :key="data.filmId" @click="toProduct(data.filmId)">
                <div class="left">
                    <img :src="data.poster" alt="">
                    <div class="content">
                        <p class="title">{{ data.name }}</p>
                        <br />
                        <p class="label actors">主演：{{ data.actors | actorName }}</p>
                        <p class="label">上映日期：{{ data.premiereAt | handleWeek }} {{ data.premiereAt | handleTime }}</p>
                    </div>

                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "CommingSoon",
        data() {
            return {}
        },
        mounted() {
            if (this.$store.state.comingsoonList.length === 0) {
                // ajax 请求
                this.$store.dispatch('getComingList')
                console.log('网络加载即将上映')
            } else {
                console.log('即将上映使用缓存数据')
            }
        },
        filters: {
            // 处理男演员名字
            actorName(data) {
                if (data) {
                    const nameList = data.map(item => item.name)
                    return nameList.join(' ')
                }
            },
            handleTime(time) {
                const newTime = new Date(time*1000)
                                    .toLocaleDateString()
                                    .slice(5)
                                    .replace(/\//g, '月')
                                    + '日'
                return newTime
            },
            handleWeek(date) {
                const newDate = new Date(date * 1000)
                                    .toLocaleDateString()
                let week = new Date(newDate).getDay(),
                    w
                switch (week) {
                    case 0:
                        w = '周日'
                        break
                    case 1:
                        w = '周一'
                        break
                    case 2:
                        w = '周二'
                        break;
                    case 3:
                        w = '周三'
                        break
                    case 4:
                        w = '周四'
                        break
                    case 5:
                        w = '周五'
                        break
                    case 6:
                        w = '周六'
                        break
                }
                return w
            }
        },

        methods: {
            toProduct(id) {
                // 编程式导航 跳转到 detail 页，并携带参数 id
                // 路径跳转
                // this.$router.push(`/detail/${id}`)

                // 使用路由 name 跳转
                this.$router.push({ name: 'Detail', params: { productId: id }})
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
        }
    }
</style>
