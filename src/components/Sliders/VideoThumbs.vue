<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'

const props = defineProps({
    list: Array
})

const emit = defineEmits()

const thumbsSlider = ref(null)

const activeIndex = ref(0)

const breakpoints = {
    0: {
        slidesPerView: 2
    },
    576: {
        slidesPerView: 4
    },
    1200: {
        spaceBetween: 16
    },
    1440: {
        spaceBetween: 15
    },
    1600: {
        spaceBetween: 18
    },
    1800: {
        spaceBetween: 22
    }
}

function onSwiper(swiper) {
    thumbsSlider.value = swiper
}

function thumbChange(index) {
    thumbsSlider.value.slideTo(index)
    emit('change', index)
}

function slidePrev() {
    if (activeIndex.value > 0) {
        activeIndex.value--
        thumbChange(activeIndex.value)
    }
}

function slideNext() {
    if (activeIndex.value < props.list?.length - 1) {
        activeIndex.value++
        thumbChange(activeIndex.value)
    }
}

function swiperChange(event) {
    activeIndex.value = event.activeIndex
    thumbChange(event.activeIndex)
}

function slideTo(index) {
    activeIndex.value = index
    thumbChange(activeIndex.value)
}

</script>

<template>
    <div class="video-thumbs-slider">

        <div class="video-thumbs-nav">

                <button
                    class="slider-nav-button slider-prev"
                    @click="slidePrev()"/>

                <button
                    class="slider-nav-button slider-next"
                    @click="slideNext()"/>

        </div>

        <div class="video-thumbs-swiper">
            <swiper
                :slides-per-view="4"
                :space-between="13"
                :breakpoints="breakpoints"
                @swiper="onSwiper"
                @slideChange="swiperChange">

                <swiper-slide
                    v-for="(thumb, idx) in list"
                    :key="idx">
                    <div
                        class="video-thumb"
                        :class="{'active': activeIndex === idx}"
                        @click="slideTo(idx)">
                        <img
                            :src="thumb"
                            alt="">
                    </div>
                </swiper-slide>

            </swiper>
        </div>

    </div>
</template>
