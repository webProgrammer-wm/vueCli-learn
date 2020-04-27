<template>
    <div>
        center
    </div>
</template>

<script>
    export default {
        name: "Center",
        beforeRouteEnter(to, from, next) {
            console.log('局部盘查')
            if (false) {
                next()
            } else {
                next('/login')
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped>

</style>
