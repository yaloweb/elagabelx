<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper'

const props = defineProps({
    text: String,
    speed: {
        type: Number,
        default: 20000
    },
    direction: {
        type: String,
        default: 'ltr'
    }
})
</script>

<template>
    <div class="infinity-text-slider">
        <swiper
            :modules="[Autoplay]"
            slides-per-view="auto"
            :autoplay="{
                delay: 0,
                disableOnInteraction: false
            }"
            :loop="true"
            :dir="direction"
            :allow-touch-move="false"
            :speed="speed"
        >

            <swiper-slide
                v-for="(slide, idx) in 3"
                :key="idx">
                <div
                    class="infinity-text-slider-slide">
                    {{ text }}
                </div>
            </swiper-slide>

        </swiper>
    </div>
</template>
