<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { ref } from 'vue'
import TeamMember from '@/components/Common/TeamMember.vue'

const props = defineProps({
    list: Array
})

const teamsSlider = ref()

function onSwiper(swiper) {
    teamsSlider.value = swiper
}

const breakpoints = {
    0: {
        slidesPerView: 2,
        spaceBetween: 17
    },
    576: {
        slidesPerView: 3
    },
    768: {
        slidesPerView: 4
    },
    1200: {
        spaceBetween: 30
    },
    1440: {
        spaceBetween: 36
    },
    1600: {
        spaceBetween: 40
    },
    1800: {
        spaceBetween: 48
    }
}

</script>

<template>
    <div
        class="teams-slider"
        v-animate="'teams-slider-animate'">

        <swiper
            :slides-per-view="4"
            :space-between="17"
            :breakpoints="breakpoints"
            @swiper="onSwiper">

            <swiper-slide
                v-for="(member, idx) in list"
                :key="member.id">

                <TeamMember
                    :member="member"
                    :style="{transitionDelay: (idx * 0.2) + 's'}"/>

            </swiper-slide>

        </swiper>

        <div class="teams-slider-nav">

            <button
                class="slider-nav-button slider-prev"
                @click="teamsSlider.slidePrev()"/>

            <button
                class="slider-nav-button slider-next"
                @click="teamsSlider.slideNext()"/>
        </div>

    </div>
</template>
