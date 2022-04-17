<script setup>
import { ref } from 'vue'
import { useProjectStore } from '@/stores/project'
import { storeToRefs } from 'pinia'
import TextInfinitySlider from '@/components/Sliders/TextInfinitySlider.vue'
import VideoGallery from '@/components/Sliders/VideoGallery.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const projectStore = useProjectStore()

const { title, educational_materials } = storeToRefs(projectStore)

const selectedMaterial = ref(0)

function setSelectedMaterial(index) {
    if (educational_materials.value?.length > 0) {
        selectedMaterial.value = index
    }
}

</script>

<template>
    <section class="s-educational-materials">

        <TextInfinitySlider
            :text="title"
            :speed="6000"/>

        <div class="container">

            <div class="educational-materials-row">

                <div class="educational-materials-left">

                    <div
                        class="h2"
                        v-animate="'slide-left'"
                    >
                        {{ t('project_page.educational_materials.title') }}
                    </div>

                    <div class="educational-materials-list">

                        <div
                            v-for="(material, idx) in educational_materials"
                            :key="material.id"
                            class="educational-materials-list-item">

                            <div
                                v-if="selectedMaterial === idx"
                                class="educational-materials-list-item-content">

                                <div
                                    class="h6"
                                    v-animate="'slide-left'"
                                >
                                    {{ t('project_page.educational_materials.video_training') }} №{{ idx + 1 }}
                                </div>

                                <div
                                    class="educational-materials-list-item-material"
                                    v-animate="'slide-up'"
                                >
                                    <div class="educational-materials-list-item-material-title">
                                        {{ t('project_page.educational_materials.instructional_video') }} -
                                    </div>
                                    <div class="educational-materials-list-item-material-url">
                                        <a :href="material.video" target="_blank">
                                            {{ material.video }}
                                        </a>
                                    </div>
                                </div>

                                <div
                                    class="educational-materials-list-item-material"
                                    v-animate="'slide-up'"
                                >
                                    <div class="educational-materials-list-item-material-title">
                                        {{ t('project_page.educational_materials.tutorial_article') }} -
                                    </div>
                                    <div class="educational-materials-list-item-material-url">
                                        <a :href="material.article_link" target="_blank">
                                            {{ material.article_link }}
                                        </a>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

                <div class="educational-materials-right">

                    <VideoGallery
                        :list="educational_materials"
                        @slide-change="setSelectedMaterial($event)"/>

                </div>

            </div>

        </div>

    </section>
</template>
