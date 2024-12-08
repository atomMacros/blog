<script setup lang="ts">
defineOptions({
    name: 'Model'
})
import { ref, onMounted } from 'vue'
import { useData } from 'vitepress'
const show = defineModel('show')

const data = useData()

const searchRef = ref()
const inputValue = ref()

const { isDark } = data
console.log('data', data)

onMounted(() => {
    searchRef.value.focus()
})
const onMaskClick = () => {
    console.log('?')
    show.value = false
}
</script>

<template>
    <div class="minisearch-model" :data-show="show">
        <div class="model-mask" @click.self="onMaskClick"></div>

        <div class="search-content">
            <div class="search-title">
                <div class="title">
                    <v-icon name="hi-search" :scale="1.2" :fill="isDark ? '#000' : '#fff'"></v-icon>
                    <!-- <span>全局搜索</span> -->
                    <input placeholder="全局搜索" :value="inputValue" type="text" ref="searchRef" />
                </div>
                <div class="close">
                    <v-icon name="io-close" :scale="1.2" :fill="isDark ? '#000' : '#fff'"></v-icon>
                </div>
            </div>
        </div>
    </div>
</template>
