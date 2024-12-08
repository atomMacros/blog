<script setup lang="ts">
import Swiper from './Swiper.vue'
import Personal from './Personal.vue'

</script>

<template>
    <div class="blog-home">
        <div class="blog-info">
            <Swiper />
            <Personal />

        </div>

        <!-- 文章列表 post -->

    </div>
</template>

<style lang="scss" scoped>
.blog-home {
    position: relative;
    z-index: 1;

    .blog-info {
        width: 100%;
        height: 100%;
    }
}
</style>