<template>
  <div>
    <navbar></navbar>
    home
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from "../components/Navbar"
  import CommingSoon from "./Home/CommingSoon"
  import NowPlaying from "./Home/NowPlaying"

  export default {
    name: "home",
    data() {
      return {
      }
    },
    components: {
      Navbar,
      CommingSoon,
      NowPlaying
    }
  }
</script>

<style lang="scss" scoped>
</style>
