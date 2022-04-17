<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useEducationalMaterialsStore } from '@/stores/educationalMaterials'
import EducationalMaterialCard from '@/components/EducationalMaterials/EducationalMaterialCard.vue'
import EducationalMaterialArticle from '@/components/EducationalMaterials/EducationalMaterialArticle.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const educationalMaterialsStore = useEducationalMaterialsStore()

const { educationalMaterialsList } = storeToRefs(educationalMaterialsStore)

function loadMore() {
    educationalMaterialsStore.loadMoreEducationalMaterials()
}

onMounted(async () => {
    await educationalMaterialsStore.getEducationalMaterials()
})
</script>

<template>
    <div class="educational-material-list">

        <div class="educational-material-list-grid">

            <template
                v-for="(educationalMaterial, idx) in educationalMaterialsList"
                :key="educationalMaterial.id">

                <TransitionGroup name="fade-in" mode="in-out">


                    <div
                        v-if="educationalMaterial.type === 'card'"
                        class="educational-material-list-grid-col">
                        <EducationalMaterialCard
                            :item="educationalMaterial"
                            :style="{transitionDelay: (idx * 0.2 + 1.6) + 's'}"
                        />
                    </div>

                    <div
                        v-if="educationalMaterial.type === 'article'"
                        class="educational-material-list-grid-col">
                        <EducationalMaterialArticle
                            :item="educationalMaterial"
                            :style="{transitionDelay: (idx * 0.2 + 1.6) + 's'}"
                        />
                    </div>

                </TransitionGroup>

            </template>

        </div>

        <div class="educational-material-list-load-more">
            <button
                class="btn btn-block btn-gray"
                @click="loadMore">
                {{ t('educational_materials_page.load_more') }}
            </button>
        </div>

    </div>
</template>
