<script setup lang="ts">
import { shallowRef } from 'vue'
import NavbarDropdown from './NavbarDropdown.vue'
import type { ResolvedNavbarItem } from '../types/nav'
defineOptions({
    name: 'NavbarItem'
})

// @TODO use withDefaults
const props = defineProps({
    navItem: {
        type: Object,
        default: () => { }
    }
})

const navItem = shallowRef(props.navItem) as unknown as ResolvedNavbarItem

console.log('navItem', navItem)
</script>

<template>
    <div class="navbar-link" v-if="!navItem.children">
        <v-icon :name="navItem.icon"></v-icon>
        <a :href="navItem.link" :target="navItem.rel ?? '_self'">{{ navItem.text }}</a>
    </div>
    <template v-else>
        <NavbarDropdown :navItem="navItem" />
    </template>
</template>

<style lang="scss" scoped>
.navbar-link {
    a {
        margin-left: var(--m-padding-min);
    }
}
</style>