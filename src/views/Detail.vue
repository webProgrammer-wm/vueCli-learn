<template>
  <div>
    detail
  </div>
</template>

<script>
  export default {
    name: "Detail",
    data() {
      return {}
    },
    mounted() {
      // 在详情页面获取id
      console.log("要id获取详情信息",this.$route.params.productid)
    }
  }
</script>

<style scoped>

</style>
