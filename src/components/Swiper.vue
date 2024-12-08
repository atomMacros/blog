<script setup lang="ts">
import { useData } from 'vitepress'
import { ref } from 'vue'
const { theme } = useData()
const banner = theme.value.banner as unknow as string[]
const bannerIndex = ref(0)

const next = (next: number) => {
    const max = banner.length
    let nextVal = bannerIndex.value + next
    bannerIndex.value = nextVal <= -1 ? max - 1 : nextVal >= max ? 0 : nextVal
}
</script>

<template>
    <div class="swiper">
        <div class="preview action" @click="next(-1)">
            <v-icon name="md-arrowbackios" fill="#fff"></v-icon>
        </div>
        <div class="swiper-item" :style="{ backgroundImage: `url(${banner[bannerIndex]})` }"></div>
        <div class="next action" @click="next(1)">
            <v-icon name="md-arrowforwardios" fill="#fff"></v-icon>
        </div>

        <div class="arrow-link">
            <v-icon name="ri-arrow-down-s-fill" fill="#fff" scale="2"></v-icon>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.swiper {
    width: 100vw;
    height: 100vh;

    .swiper-item {
        width: 100%;
        height: 100%;
        background-size: cover;
        transition: all 0.5s ease-in-out;
    }

    .action {
        position: absolute;
        top: 50%;
        width: 32px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        background-color: var(--m-swiper-bg-color);

        &.preview {
            left: 0;
            border-top-right-radius: var(--m-padding-large);
            border-bottom-right-radius: var(--m-padding-large);
        }

        &.next {
            right: 0;
            border-top-left-radius: var(--m-padding-large);
            border-bottom-left-radius: var(--m-padding-large);
        }
    }

    .arrow-link {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translate(-50%, 0);
        cursor: pointer;
        animation: runArrowLink 1s linear infinite;
        transition: 0.5s;
    }
}

@keyframes runArrowLink {

    0% {
        bottom: 20px;
    }

    50% {
        bottom: 16px;
    }

    100% {
        bottom: 20px;
    }
}
</style>