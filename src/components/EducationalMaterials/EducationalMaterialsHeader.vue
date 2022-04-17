<script setup>
import { useEducationalMaterialsStore } from '@/stores/educationalMaterials'
import { storeToRefs } from 'pinia'
import Search from '@/components/Common/Search.vue'
import MaterialsTags from '@/components/EducationalMaterials/MaterialsTags.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const educationalMaterialsStore = useEducationalMaterialsStore()

const { searchResults } = storeToRefs(educationalMaterialsStore)

function getSearchResults(value) {
    educationalMaterialsStore.search(value)
}
</script>

<template>
    <div class="educational-materials-header">
        <div class="container">

            <div class="page-title-center">
                <h1>
                    {{ t('educational_materials_page.title') }}
                </h1>
            </div>

            <div class="educational-materials-header-small-container">

                <Search
                    @search="getSearchResults"
                    :resultList="searchResults"/>

                <MaterialsTags />

            </div>

        </div>
    </div>
</template>
