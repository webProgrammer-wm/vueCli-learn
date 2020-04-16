<template>
  <div>
    nowPlaying
    <ul>
      <li v-for="data in dataList" :key="data" @click="toProduct(data)">
        {{ data }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "NowPlaying",
    data() {
      return {
        dataList: ['1111', '2222', '3333']
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

<style scoped>

</style>
