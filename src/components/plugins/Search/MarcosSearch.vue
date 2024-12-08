<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Model from './Model.vue'

let pressedKeys: { code: string, flag: boolean } = {}
const show = ref(true)

const keyDown = (e: KeyboardEvent) => {
    const { code } = e;

    if (show.value) return

    if (['AltRight', 'AltLeft', 'KeyK'].includes(code)) {
        pressedKeys[code] = true
    }

    const isAltPressed = pressedKeys['AltRight'] || pressedKeys['AltLeft']
    console.log('isAltPressed', isAltPressed)
    if (isAltPressed && pressedKeys['KeyK']) {
        show.value = true
    }

    e.preventDefault()
}

const keyUp = (e: KeyboardEvent) => {
    const { code } = e;

    if (['AltRight', 'AltLeft', 'KeyK'].includes(code)) {
        pressedKeys[code] = false
    }

    e.preventDefault()

}

onMounted(() => {
    window.addEventListener('keydown', keyDown)

    window.addEventListener('keyup', keyUp)
})
</script>

<template>
    <div class="marcos-search">
        1
    </div>

    <Teleport to="#app">
        <Model v-model:show="show" />
    </Teleport>
</template>
