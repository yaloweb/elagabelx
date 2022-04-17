<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useSearchStore } from '@/stores/search'
import { useRoute } from 'vue-router'
import EducationalMaterialCard from '@/components/EducationalMaterials/EducationalMaterialCard.vue'
import EducationalMaterialArticle from '@/components/EducationalMaterials/EducationalMaterialArticle.vue'

const route = useRoute()
const keyword = route.query.keyword

const searchStore = useSearchStore()

const { searchList } = storeToRefs(searchStore)

onMounted(async () => {
    if (keyword) {
        await searchStore.getSearchResults(keyword)
    }
})
</script>

<template>
    <div class="educational-material-list">

        <div class="educational-material-list-grid">

            <template
                v-for="searchItem in searchList"
                :key="searchItem.id">

                <TransitionGroup name="fade-in" mode="in-out">

                    <EducationalMaterialCard
                        v-if="searchItem.type === 'card'"
                        :item="searchItem" />

                    <EducationalMaterialArticle
                        v-if="searchItem.type === 'article'"
                        :item="searchItem" />

                </TransitionGroup>

            </template>

        </div>

    </div>
</template>
