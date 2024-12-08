<script setup lang="ts">
import { shallowRef } from 'vue'
import type { ResolvedNavbarItem } from '../types/nav'

defineOptions({
    name: 'NavbarDropdown'
})

const props = defineProps({
    navItem: {
        type: Object,
        default: () => { }
    }
})

const navItem = shallowRef(props.navItem) as unknown as ResolvedNavbarItem

</script>

<template>
    <div class="navbar-dropdown-wrapper">
        <a class="navbar-dropdown-trigger">
            <v-icon :name="navItem?.icon"></v-icon>
            {{ navItem.text }}
            <v-icon name="md-keyboardarrowdown"></v-icon>
        </a>

        <ul>
            <li v-for="v in navItem.children">
                <a :href="v?.link" :target="v.rel">
                    <span v-if="v.icon">
                        <v-icon :name="v.icon"></v-icon>
                    </span>
                    <span>
                        {{ v.text }}
                    </span>
                </a>
            </li>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.navbar-dropdown-wrapper {
    position: relative;

    &:hover {
        >ul {
            display: block;
        }
    }

    a {
        cursor: pointer;
        border: none;
    }

    ul {
        display: none;
        position: absolute;
        top: var(--navbar-line-height);
        left: 0;
        background-color: var(--m-filter-color);
        padding: var(--m-padding-large);
        border-radius: calc(var(--m-padding-min) * 3);

        a {
            display: inline-block;
            display: flex;
            align-items: center;

            span {
                flex: 1;
                text-align: center;
            }

            svg {
                margin-right: 0.5rem
            }
        }
    }
}
</style>