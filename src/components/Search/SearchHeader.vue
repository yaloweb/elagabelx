<script setup>
import { useRoute } from 'vue-router'
import { useEducationalMaterialsStore } from '@/stores/educationalMaterials'
import { storeToRefs } from 'pinia'
import Search from '@/components/Common/Search.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const route = useRoute()

const educationalMaterialsStore = useEducationalMaterialsStore()

const { searchResults } = storeToRefs(educationalMaterialsStore)

function getSearchResults(value) {
    educationalMaterialsStore.search(value)
}

</script>

<template>
    <div class="search-header">
        <div class="container">

            <div class="search-header-back">
                <RouterLink
                    to="/educational-materials"
                    class="search-header-back-link">
                    <span class="icon-arrow-left" />{{ t('search_page.back_link')}}
                </RouterLink>
            </div>

            <h1>
                {{ t('search_page.title') }}
            </h1>

            <Search
                @search="getSearchResults"
                :resultList="searchResults"
                :keyword="route.query.keyword"/>

        </div>
    </div>
</template>
