<script setup>
import AppLayoutDefault from './layouts/LayoutDefault.vue'
import { markRaw, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

const layout = ref()
const route = useRoute()
const pageLoaded = ref(false)
const pageLoadedAnimate = ref(false)

watch(
    () => route.meta?.layout,
    async (metaLayout) => {
        try {
            const component = metaLayout && await import(`./layouts/${metaLayout}.vue`)
            layout.value = markRaw(component?.default || AppLayoutDefault)
        } catch (e) {
            layout.value = markRaw(AppLayoutDefault)
        }
        setTimeout(() => {
            pageLoaded.value = true
        }, 500)
        setTimeout(() => {
            pageLoadedAnimate.value = true
        }, 600)
    },
    { immediate: true }
)
</script>

<template>
    <div
        v-if="pageLoaded"
        class="app-root"
        :class="{'app-loaded': pageLoadedAnimate}"
    >
        <Transition name="scale-slide">
            <Component :is="layout">

                <Transition name="scale-slide">
                    <RouterView />
                </Transition>

            </Component>
        </Transition>
    </div>
</template>
