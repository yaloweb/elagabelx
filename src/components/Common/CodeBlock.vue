<script setup>
import { ref } from 'vue'

const props = defineProps({
    code: String
})

const input = ref(null)
const selected = ref(false)

function copyAddress() {
    input.value?.select()
    document.execCommand('copy')
    selected.value = true
    setTimeout(() => {
        selected.value = false
    }, 1000)
}
</script>

<template>
    <div
        class="code-block"
        :class="{'selected': selected}">
        <div class="code-block-value">
            <input
                ref="input"
                type="text"
                :value="code">
            <span>{{ code }}</span>
        </div>
        <div class="code-block-copy">
            <button @click.prevent="copyAddress"><span class="icon-copy"/></button>
        </div>
    </div>
</template>
