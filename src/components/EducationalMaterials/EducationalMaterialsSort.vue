<script setup>
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useEducationalMaterialsStore } from '@/stores/educationalMaterials'
import Rank from '@/components/Common/Rank.vue'
import FormRadio from '@/components/Form/FormRadio.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const educationalMaterialsStore = useEducationalMaterialsStore()

const { filters, filtersOptions } = storeToRefs(educationalMaterialsStore)

const sortIcons = {
    'cards': 'icon-grid',
    'articles': 'icon-list',
    'all': 'icon-list-full',
}

watch(
    filters,
    async () => {
        await educationalMaterialsStore.getEducationalMaterials()
    },
    {
        deep: true
    }
)

</script>

<template>
    <div class="educational-materials-sort">

        <div class="educational-materials-sort-left">

            <div
                v-if="filters.selectedSort === 'articles'"
                class="educational-materials-sort-ranks">

                <div
                    v-for="(rank, idx) in filtersOptions.ranks"
                    :key="idx"
                    class="educational-materials-sort-rank"
                    :class="{'active': filters.selectedRank === rank.type}"
                    @click="filters.selectedRank = rank.type">

                    <Rank
                        :rank="rank"
                        :title="t(`educational_materials_page.sort.ranks.${rank.type}`)"/>

                </div>

            </div>

            <div
                v-if="filters.selectedSort === 'cards'"
                class="educational-materials-sort-ratings">

                <div class="educational-materials-sort-ratings-item">

                    <div class="h6">
                        {{ t('educational_materials_page.sort.ratings.title') }}:
                    </div>

                    <div class="radio-group">
                        <FormRadio
                            v-for="(rating, idx) in filtersOptions.ratings"
                            :key="idx"
                            name="platform"
                            :title="t(`educational_materials_page.sort.ratings.${rating.value}`)"
                            :value="rating.value"
                            v-model="filters.selectedRating"
                        />
                    </div>

                </div>

                <div class="educational-materials-sort-ratings-item">

                    <div class="radio-group">
                        <FormRadio
                            v-for="(platform, idx) in filtersOptions.platforms"
                            :key="idx"
                            name="rating"
                            :title="t(`educational_materials_page.sort.platforms.${platform.value}`)"
                            :value="platform.value"
                            v-model="filters.selectedPlatform"
                        />
                    </div>

                </div>

            </div>

        </div>

        <div class="educational-materials-sort-right">

            <div class="educational-materials-sort-view">
                <a
                    v-for="(sort, idx) in filtersOptions.sorts"
                    :key="idx"
                    :class="{'active': filters.selectedSort === sort.value}"
                    href="#"
                    @click.prevent="filters.selectedSort = sort.value">
                    <span :class="sortIcons[sort.value]" />{{ sort.title }}
                </a>
            </div>

        </div>

    </div>
</template>
