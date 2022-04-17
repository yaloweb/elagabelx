<script setup>
import InlineSvg from 'vue-inline-svg'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    item: Object
})
</script>

<template>
    <div class="educational-material-card">

        <RouterLink :to="`/educational-materials/${item.id}`" />

        <div class="educational-material-card-left">

            <div class="educational-material-card-title">
                {{ item.title }}
            </div>

            <div class="educational-material-card-rating">
                {{ t('educational_materials_page.card.rating') }}:
                <span>{{ item.rating }}</span>
            </div>

            <div class="educational-material-card-tech">
                {{ t('educational_materials_page.card.platform') }}:
                <span class="educational-material-card-tech-icons">
                    <span
                        v-for="i in item.tech_community"
                        :key="i"
                        class="icon-wrench"></span>
                </span>
            </div>

        </div>

        <div class="educational-material-card-right">

            <div class="educational-material-card-bg-img">
                <InlineSvg
                    v-if="item.img_src"
                    :src="item.img_src" />
            </div>

            <div class="educational-material-card-img">
                <InlineSvg
                    v-if="item.img_src"
                    :src="item.img_src" />
            </div>

        </div>

    </div>
</template>
