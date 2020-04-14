<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  import axios from 'axios'
  export default {
    mounted() {
      axios.get('/ajax/movieOnInfoList?token=').then(res => {
        console.log(res.data)
      })
    }
  }
</script>
<style lang="scss">
</style>
