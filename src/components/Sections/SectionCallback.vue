<script setup>
import { onMounted } from 'vue'
import { useSocStore } from '@/stores/soc'
import { storeToRefs } from 'pinia'
import SocNav from '@/components/Common/SocNav.vue'
import TextInfinitySlider from '@/components/Sliders/TextInfinitySlider.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const socStore = useSocStore()

const { socLinks } = storeToRefs(socStore)

onMounted(() => {
    socStore.getSoc()
})

</script>

<template>
    <section
        class="s-callback"
        id="contacts"
    >

        <div class="callback-bg-sliders">
            <TextInfinitySlider :text="t('callback.slider_bg_text')"/>
            <TextInfinitySlider :text="t('callback.slider_bg_text')" direction="rtl"/>
            <TextInfinitySlider :text="t('callback.slider_bg_text')"/>
        </div>

        <div
            class="container"
            v-animate="'slide-up'">

            <div
                class="h2"
                v-html="t('callback.title')"
            />

            <SocNav :links="socLinks"/>

        </div>
    </section>
</template>
