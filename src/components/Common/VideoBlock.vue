<script setup>
import { ref, defineExpose } from 'vue'
import YouTube from 'vue3-youtube'

const props = defineProps({
    item: Object
})

const video = ref(null)
const openVideo = ref(false)

function openVideoHandler () {
    openVideo.value = true
}

const pauseVideo = () => {
    video.value?.pauseVideo()
}

function onReady() {
    video.value?.playVideo()
}

defineExpose({
    pauseVideo
})

</script>

<template>

    <div class="video-block">
        <div
            class="video-poster"
            :class="{'video-open': openVideo}">
            <img
                :src="item.poster"
                alt="">
            <div
                class="video-play"
                @click="openVideoHandler">
                <span class="icon-play" />
            </div>
        </div>
        <div
            v-if="openVideo"
            class="video-player">
            <YouTube
                :src="item.video"
                @ready="onReady"
                ref="video" />
        </div>
    </div>

</template>
