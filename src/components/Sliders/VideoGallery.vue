<script setup>
import { ref, watch } from 'vue'
import VideoBlock from '@/components/Common/VideoBlock.vue'
import VideoThumbs from '@/components/Sliders/VideoThumbs.vue'

const props = defineProps({
    list: Array
})
const activeIndex = ref(0)
const videoBlock = ref([])
const emit = defineEmits()

function thumbChange(event) {
    activeIndex.value = event
    emit('slide-change', event)
}

watch(activeIndex, (newVal, lastVal) => {
    videoBlock.value ? videoBlock.value[lastVal]?.pauseVideo() : false
})

</script>

<template>
    <div class="video-gallery">

        <div class="video-gallery-container">

            <div
                v-animate="'slide-up'"
                class="video-gallery-videos">
                <VideoBlock
                    v-for="(item, idx) in list"
                    :key="item.id"
                    :ref="el => videoBlock[idx] = el"
                    :item="item"
                    :class="{'active': activeIndex === idx}"/>
            </div>

            <div
                class="video-gallery-thumbs"
                v-animate="'slide-long-left'">
                <VideoThumbs
                    :list="list?.map(item => item.poster)"
                    @change="thumbChange"/>
            </div>

        </div>

    </div>
</template>
