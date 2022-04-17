<script setup>
import { ref, onUnmounted } from 'vue'

const props = defineProps({
    shareList: Array
})

const opened = ref(false)

const clickOutDropdown = () => {
    opened.value = false
}

document.addEventListener('click', clickOutDropdown)

onUnmounted(() => {
    document.removeEventListener('click', clickOutDropdown)
})

</script>

<template>
    <div
        class="article-share"
        @click.stop>

        <button
            class="article-share-btn"
            @click="opened = !opened">поделиться</button>

        <div
            class="article-share-dropdown"
            :class="{'opened': opened}">
            <a
                v-for="shareLink in shareList"
                :key="shareLink.id"
                :href="shareLink.url"
                target="_blank">
                <span
                    :class="`icon-${shareLink.name}`" />
                {{ shareLink.title }}
            </a>
        </div>

    </div>
</template>
