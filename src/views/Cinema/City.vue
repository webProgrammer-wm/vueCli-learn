<template>
    <div class="city">
        <div class="header">
            <div class="back iconfont icon-fanhui"></div>
            <div class="title">选择城市</div>
        </div>
        <div class="search">
            <input type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="city-list">
            <div class="hot">热门城市</div>
            <div class="city-header">

                <div class="hot-list">
                    <div class="city-item">北京</div>
                    <div class="city-item">上海</div>
                    <div class="city-item">广州</div>
                    <div class="city-item">深圳</div>
                </div>

            </div>
        </div>

        <van-index-bar id="index-list" :index-list="indexList">
            <van-index-anchor class="index-area" index="A"/>
            <van-cell class="city-item" v-for="item in cityList.a" :title="item" />

            <van-index-anchor class="index-area" index="B" />
            <van-cell class="city-item" v-for="item in cityList.b" :title="item" />

            <van-index-anchor class="index-area" index="C" />
            <van-cell class="city-item" v-for="item in cityList.c" :title="item" />

            <van-index-anchor class="index-area" index="D" />
            <van-cell class="city-item" v-for="item in cityList.d" :title="item" />

            <van-index-anchor class="index-area" index="E" />
            <van-cell class="city-item" v-for="item in cityList.e" :title="item" />

            <van-index-anchor class="index-area" index="F" />
            <van-cell class="city-item" v-for="item in cityList.f" :title="item" />

            <van-index-anchor class="index-area" index="G" />
            <van-cell class="city-item" v-for="item in cityList.g" :title="item" />

            <van-index-anchor class="index-area" index="H" />
            <van-cell class="city-item" v-for="item in cityList.h" :title="item" />

            <van-index-anchor class="index-area" index="J" />
            <van-cell class="city-item" v-for="item in cityList.j" :title="item" />

            <van-index-anchor class="index-area" index="K" />
            <van-cell class="city-item" v-for="item in cityList.k" :title="item" />

            <van-index-anchor class="index-area" index="L" />
            <van-cell class="city-item" v-for="item in cityList.l" :title="item" />

            <van-index-anchor class="index-area" index="M" />
            <van-cell class="city-item" v-for="item in cityList.m" :title="item" />

            <van-index-anchor class="index-area" index="N" />
            <van-cell class="city-item" v-for="item in cityList.n" :title="item" />

            <van-index-anchor class="index-area" index="P" />
            <van-cell class="city-item" v-for="item in cityList.p" :title="item" />

            <van-index-anchor class="index-area" index="Q" />
            <van-cell class="city-item" v-for="item in cityList.q" :title="item" />

            <van-index-anchor class="index-area" index="R" />
            <van-cell class="city-item" v-for="item in cityList.r" :title="item" />

            <van-index-anchor class="index-area" index="S" />
            <van-cell class="city-item" v-for="item in cityList.s" :title="item" />

            <van-index-anchor class="index-area" index="T" />
            <van-cell class="city-item" v-for="item in cityList.t" :title="item" />

            <van-index-anchor class="index-area" index="W" />
            <van-cell class="city-item" v-for="item in cityList.w" :title="item" />

            <van-index-anchor class="index-area" index="X" />
            <van-cell class="city-item" v-for="item in cityList.x" :title="item" />

            <van-index-anchor class="index-area" index="Y" />
            <van-cell class="city-item" v-for="item in cityList.y" :title="item" />

            <van-index-anchor class="index-area" index="Z" />
            <van-cell class="city-item" v-for="item in cityList.z" :title="item" />


        </van-index-bar>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "City",
        data() {
            return {
                baseCityList: [],
                indexList: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'W', 'X', 'Y', 'Z'],
                cityList: {}
            }
        },
        beforeMount() {
            // 第一个参数是 mutation 名字
            this.$store.commit('hideTabbar', true)
        },
        mounted() {
            axios({
                url: 'https://m.maizuo.com/gateway?k=6988104',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15880353302293512536366","bc":"610900"}',
                    'X-Host': 'mall.film-ticket.city.list'
                }
            }).then(res => {
                console.log(res.data.data.cities)
                this.baseCityList = res.data.data.cities

                // 将以拼音f开头的,以f作为键名,
                if (this.baseCityList) {
                    this.$forceUpdate();

                    this.baseCityList.forEach(item => {
                        if (!this.cityList.hasOwnProperty(item.pinyin[0])) {
                            this.cityList[item.pinyin[0]] = []
                        }
                        if (item.pinyin[0] in this.cityList) {
                            this.cityList[item.pinyin[0]].push(item.name)
                            // this.cityList[item.pinyin[0]].push(item.name)
                        }
                    })
                    console.log(this.cityList)
                    this.cityList = Object.assign(this.cityList)
                }
            })

        }
    }
</script>

<style lang="scss" scoped>
    .city {
        .header {
            position: relative;
            background: #FFF;
            height: 44px;
            .back {
                position: absolute;
                left: 10px;
                font-size: 20px;
                line-height: 44px;
            }
            .title {
                text-align: center;
                line-height: 44px;
            }
        }

        .search {
            border-left: 15px solid #F4F4F4;
            border-right: 15px solid #F4F4F4;
            border-top: 10px solid #F4F4F4;
            border-bottom: 10px solid #F4F4F4;
            input {
                color: #2c3e50;
                width: 100%;
                height: 30px;
                font-size: 12px;
                box-sizing: border-box;
                padding: 10px 15px;
                padding-left: 30px;
                background: #FFF;
                border: none;

            }
        }

        .city-list {
            background: #FFF;
            overflow: hidden;

            .hot {
                font-size: 13px;
                margin-left: 15px;
                padding-top: 10px;
                color: #797d82;
            }

            .city-header {
                padding: 10px 0;
                padding-bottom: 15px;
                background: #FFF;

                .hot-list {
                    padding: 0 10px;
                    box-sizing: border-box;

                    .city-item {
                        display: inline-block;
                        background: #F4F4F4;
                        font-size: 13px;
                        padding: 5px 40px;
                        margin: 3px 6px;
                    }
                }

            }
        }

        ::v-deep #index-list {
            .van-index-bar__sidebar {
                position: fixed;
                top: 30%;
                right: 2px;
                span {
                    margin-top: 1px;
                    text-align: center;
                    font-size: 12px;
                    display: block;
                }
            }

            .index-area {
                margin-left: 15px;
                margin-right: 15px;
                box-sizing: border-box;
                font-size: 12px;
                background: #f4f4f4;
                height: 30px;
                line-height: 30px;
                padding-right: 15px;
                color: #797d82;
            }

            .city-item {
                box-sizing: border-box;
                height: 48px;
                line-height: 48px;
                background: #FFF;
                padding-left: 15px;
                padding-right: 15px;
                font-size: 14px;
                border-bottom: 1px solid #f4f4f4;
            }
        }
    }
</style>
