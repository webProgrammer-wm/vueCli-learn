<template>
    <nav>
        <ul>
            <!-- 给当前所在路由的按钮添加 class -->
            <router-link to="/home" tag="li" active-class="active">
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
                flex: 1;
                line-height: 50px;
                text-align: center;
            }
        }
    }
</style>
