<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useHomeStore } from "@/stores/home"
import { useRoute } from "vue-router"
import Banners from '@/components/Sliders/Banners.vue'
import SectionAbout from '@/components/Sections/SectionAbout.vue'
import SectionNetworks from '@/components/Sections/SectionNetworks.vue'
import SectionInTheFuture from '@/components/Sections/SectionInTheFuture.vue'
import SectionLearningMaterials from '@/components/Sections/SectionLearningMaterials.vue'
import SectionTeams from '@/components/Sections/SectionTeams.vue'
import SectionCallback from '@/components/Sections/SectionCallback.vue'

const homeStore = useHomeStore()
const route = useRoute()

const { banners } = storeToRefs(homeStore)

function scrollToId() {
    const id = route.hash
    if (id) {
        const DOMElement = document.querySelector(id)

        if (DOMElement) {
            window.scrollTo({
                top: DOMElement.getBoundingClientRect().top + window.pageYOffset,
                left: 0,
                behavior: 'smooth'
            })
        }
    }
}

onMounted(async () => {
    await homeStore.getHomePageInfo()
    scrollToId()
})

</script>

<template>

    <div class="page-home">

        <section
            class="s-main-banners"
            v-animate="'main-banners-animate'">
            <div class="container">
                <Banners :list="banners"/>
            </div>
        </section>

        <SectionAbout />

        <SectionNetworks />

        <SectionInTheFuture />

        <SectionLearningMaterials />

        <SectionTeams />

        <SectionCallback />

    </div>

</template>
