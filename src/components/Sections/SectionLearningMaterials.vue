<script setup>
import { useLearningMaterialsStore} from '@/stores/learningMaterials'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import VideoGallery from '@/components/Sliders/VideoGallery.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const learningMaterialStore = useLearningMaterialsStore()

onMounted(() => {
    learningMaterialStore.getLearningMaterials()
})

const { materialsList } = storeToRefs(learningMaterialStore)

</script>

<template>
    <section
        class="s-learning-materials"
        id="educational-materials"
    >
        <div class="container">

            <div class="learning-materials-row">

                <div
                    class="learning-materials-left"
                    v-animate="'slide-up'">
                    <div class="h2">
                        {{ t('home_page.educational_materials.title') }}
                    </div>
                </div>

                <div class="learning-materials-right">
                    <VideoGallery :list="materialsList" />
                </div>

            </div>

        </div>
    </section>
</template>
