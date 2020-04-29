<template>
    <div class="header-wrap">
        <ul>
            <li>
                <router-link to="/film/nowplaying" active-class="active">正在热映</router-link>
            </li>
            <li>
                <router-link to="/film/comingsoon" active-class="active">即将上映</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "FilmHeader",
        data() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
    .active {
        color: #ff5f16;
        border-bottom: 2px solid #ff5f16;
    }
    .header-wrap {
        width: 100%;
        height: 49px;
        background: #FFF;

        ul {
            display: flex;

            li {
                flex: 1;
                text-align: center;
                font-size: 14px;
                line-height: 49px;

                a {
                    padding-bottom: 13px;
                }
            }
        }
    }

    .fixed {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 49px;
        z-index: 10;
        background: #fff;
    }
</style>
