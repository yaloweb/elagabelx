<script setup>
import { ref, computed } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    list: Array
})

const bannersSlider = ref()
const activeSlide = ref(0)

const currentBanner = computed(() => {
    return props.list[activeSlide.value]
})

function onSwiper(swiper) {
    bannersSlider.value = swiper
}

function bannerSlideChange(e) {
    activeSlide.value = e.activeIndex
}

</script>

<template>
    <div
        v-if="list && list.length"
        class="banners">

        <div class="banners-slider">

            <swiper
                :slides-per-view="1"
                :allow-touch-move="false"
                @swiper="onSwiper"
                @slideChange="bannerSlideChange"
            >

                <swiper-slide
                    v-for="(banner, idx) in list"
                    :key="idx"
                >
                    <div class="banners-slide">
                        <div
                            v-if="banner.subtitle"
                            class="banners-slide-subtitle">
                            {{ banner.subtitle }}
                        </div>
                        <div
                            v-if="banner.title"
                            class="banners-slide-title">
                            <div class="h1">
                                {{ banner.title }}
                            </div>
                        </div>
                        <div
                            v-if="banner.description"
                            class="banners-slide-descr">
                            {{ banner.description}}
                        </div>
                    </div>
                </swiper-slide>

            </swiper>

            <div class="banners-slider-nav">

                <button
                    class="slider-nav-button slider-prev"
                    @click="bannersSlider.slidePrev()"/>

                <button
                    class="slider-nav-button slider-next"
                    @click="bannersSlider.slideNext()"/>
            </div>

            <div class="banners-more">
                <router-link
                    :to="currentBanner.url"
                    class="btn btn-with-arrow btn-block"
                    >
                    {{ t('home_page.banners.read_more')}} <span class="icon-arrow-right-sm" />
                </router-link>
            </div>

        </div>

        <div class="banners-images">
            <div class="banners-images-container">
                <div class="banners-image-texture">
                    <img src="/img/main-page/banner-texture.svg" alt="">
                </div>
                <div class="banners-image">
                    <img
                        v-for="(banner, idx) in list"
                        :key="banner.id"
                        :src="banner.img"
                        :class="{'active': idx === activeSlide}"
                        alt=""
                    >
                </div>
<!--                <div class="banners-image-hand">-->
<!--                    <img src="/img/main-page/banner-hand.png" alt="">-->
<!--                </div>-->
<!--                <div class="banners-image-gift">-->
<!--                    <img src="/img/main-page/banner-gift.png" alt="">-->
<!--                </div>-->
            </div>
        </div>

    </div>
</template>
