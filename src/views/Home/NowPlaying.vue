<template>
    <div>
        nowPlaying
        <ul>
            <li v-for="data in dataList" :key="data.filmId" @click="toProduct(data)">
                {{ data.name }}
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
                dataList: ['1111', '2222', '3333']
            }
        },
        mounted() {
            axios({
                url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=3737576',
                headers: {
                    'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"15880353302293512536366","bc":"310100"}',
                    'X-Host': 'mall.film-ticket.film.list'
                }
            }).then(res => {
                this.dataList = res.data.data.films
                console.log(res)
            })
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

<style scoped>

</style>
