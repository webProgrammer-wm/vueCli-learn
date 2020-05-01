<template>
    <div class="city">
        <div class="header">
            <div class="back iconfont icon-fanhui" @click="back()"></div>
            <div class="title">选择城市</div>
        </div>
        <div class="search">
            <input type="text" placeholder="输入城市名或拼音">
        </div>
        <div class="city-list">
            <div class="hot">热门城市</div>
            <div class="city-header">
                <div class="hot-list">
                    <div class="city-item" v-for="city in hotList" @click="selectCity(city.cityId, city)">{{ city.name }}</div>
                </div>
            </div>
        </div>

        <van-index-bar id="index-list" :index-list="letters">
            <div v-for="data in cityList">
                <van-index-anchor class="index-area" :index="data.index" />
                <van-cell class="city-item"
                          v-for="item in data.list"
                          :key="item.cityId"
                          @click="selectCity(item.cityId, item)"
                          :title="item.name"
                />
            </div>
        </van-index-bar>

    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        name: "City",
        data() {
            return {
                letters: [],
                hotList: [],
                cityList: []
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
                this.handleCity(res.data.data.cities)
                this.hotCity(res.data.data.cities)
            })

        },

        methods: {
            back() {
                this.$router.push('/cinema')
            },
            selectCity(id, item) {
                console.log(id)
                localStorage.setItem('cityId', id)
                this.$store.commit('changeCity', item.name)
                this.$router.push('/cinema')
            },

            // 处理城市列表
            handleCity(list) {
                const letters = []
                for (let i = 65; i < 91; i ++) {
                    letters.push(String.fromCharCode(i))
                }

                const newList = []
                // 遍历26个字母列表
                for (let i = 0, len = letters.length; i < len; i ++) {
                    // 如果
                    const arr = list.filter(item => {
                        return item.pinyin[0] === letters[i].toLowerCase()
                    })
                    if (arr.length) {
                        this.cityList.push({
                            index: letters[i],
                            list: arr
                        })
                        this.letters.push(letters[i])
                    }
                }
                console.log(this.cityList)
            },

            hotCity(cityList) {
                cityList.filter(item => {
                    if (item.isHot === 1) {
                        this.hotList.push(item)
                    }
                })
            }
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
                outline: none;
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
                box-sizing: border-box;
                font-size: 12px;
                background: #f4f4f4;
                height: 30px;
                line-height: 30px;
                color: #797d82;
                border-right: 18px solid #FFF;
            }
            .van-index-anchor {
                transform: none!important;
            }

            .city-item {
                box-sizing: border-box;
                height: 48px;
                line-height: 48px;
                background: #FFF;
                padding-left: 15px;
                font-size: 14px;
                border-bottom: 1px solid #f4f4f4;
                border-right: 32px solid #FFF;
            }
        }
    }
</style>
