<script setup lang="ts">
defineOptions({
    name: 'Navbar'
})

import { ref, computed } from 'vue'
import { useData } from 'vitepress'
import NavbarItem from './NavbarItem.vue'
import MarcosSearch from './MarcosSearch.vue'
const navbar = ref()
const { theme, site } = useData()

const navTitle = computed(() => theme.value.nav.title || '$ cd /home')
const base = site.value.base

console.log('theme', theme)

const navLinkItem = computed(() => theme.value.nav.items)
const hasSearch = computed(() => theme.value.themePlugin.search)
</script>

<template>
    <header ref="navbar" class="navbar filter">
        <span ref="navbarBrand">
            <a :href="base" target="_self">
                <span class="site-name">{{ navTitle }}</span>
            </a>
        </span>

        <div class="navbar-menu">
            <div class="navbar-items">
                <!--link-->
                <div class="navbar-item" v-for="v in navLinkItem" :key="v.link">
                    <NavbarItem :nav-item="v" />
                </div>



            </div>
            <!-- search -->
            <!-- @TODO -->
            <MarcosSearch v-if="hasSearch" />
        </div>


    </header>
</template>

<style lang="scss">
.navbar {
    a {
        text-decoration: none;
        color: initial;
    }
}
</style>
