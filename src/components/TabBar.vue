<template>
    <nav ref="tabBar">
        <ul>
            <!-- 给当前所在路由的按钮添加 class -->
            <router-link to="/film" tag="li" active-class="active">
                <i class="iconfont icon-dianying"></i>
                首页
            </router-link>
            <router-link to="/cinema" tag="li" active-class="active">
                <i class="iconfont icon-yingyuan"></i>
                影院
            </router-link>
            <router-link to="/center" tag="li" active-class="active">
                <i class="iconfont icon-wode"></i>
                我的
            </router-link>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "TabBar",
        data() {
            return {}
        },
        mounted() {
            this.$store.commit('setTabBarHeight', this.$refs.tabBar.offsetHeight)
            console.log(this.$refs.tabBar.offsetHeight)
        }
    }
</script>

<style lang="scss" scoped>
    .active {
        color: #ff5f16;
    }

    nav {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        background: white;

        ul {
            display: flex;

            li {
                width: 33%;
                line-height: 50px;
                text-align: center;
                position: relative;

                i {

                    font-size: 20px;
                }
            }
        }
    }
</style>
