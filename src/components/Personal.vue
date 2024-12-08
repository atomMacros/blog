<script setup lang="ts">
import { computed } from 'vue'
import { useData } from 'vitepress'

const { theme } = useData()


const snsList = computed(() => theme.value.personal.sns)
</script>

<template>
    <div class="personal">
        <div class="personal-avatar">
            <img :src="theme.personal.avatar">
        </div>
        <div class="personal-desc">
            <h2>{{ theme.personal.text }}</h2>
            <span>{{ theme.personal.description }}</span>
        </div>

        <div class="sns">
            <div class="sns-item" v-for="v in snsList" :key="v.icon">
                <a :href="v.link" target="_blank">
                    <v-icon :name="v.icon" fill="#fff" scale="1.6"></v-icon>
                </a>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.personal {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);
    width: 40%;
    display: flex;
    align-items: center;
    flex-direction: column;

    .personal-avatar {
        img {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            box-shadow: 0 0 4px 1px #9b9b9b, 0 0 5px 1px #3f3d3d;
            transform: rotate(0deg);
            transition: all 1.5s;

            &:hover {
                transform: rotate(360deg);
            }
        }
    }

    .personal-desc {
        width: 80%;
        height: 70px;
        margin-top: calc(var(--m-padding-large) + var(--m-padding-min));
        padding: var(--m-padding-large);
        background-color: var(--m-personal-bg-color);
        border-radius: var(--m-padding-large);

        h2 {
            margin: var(--m-padding-min);
            text-align: center;
            color: var(--m-search-input-color);

        }

        span {
            display: inline-block;
            width: 100%;
            text-align: center;
            font-size: 20px;
            color: var(--m-search-input-color);
        }
    }

    .sns {
        display: flex;
        margin-top: var(--m-padding-large);

        a {
            margin: var(--m-padding-large);
            width: 40px;
            height: 40px;
            display: flex;
            color: inherit;
            background-color: rgba(0, 0, 0, 0.3);
            justify-content: center;
            align-items: center;
            border-radius: 50%;
            transition: all 0.5s;

            &:hover {
                transform: translateY(-4px);
            }
        }
    }
}
</style>
