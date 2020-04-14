<template>
  <div>
    <ul>
      <!-- 给当前所在路由的按钮添加 class -->
      <router-link to="/home" tag="li" active-class="active">home</router-link>
      <router-link to="/cinema" tag="li" active-class="active">cinema</router-link>
      <router-link to="/center" tag="li" active-class="active">center</router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    data() {
      return {}
    }
  }
</script>

<style scoped>
  .active {
    color: pink;
  }
</style>
