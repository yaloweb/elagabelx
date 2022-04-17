<script setup>
import InlineSvg from 'vue-inline-svg'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    item: Object,
    announcement: Boolean
})
</script>

<template>
    <div
        class="project-card"
        :class="{'announcement': announcement}">

        <RouterLink
            :to="`/projects/${item.id}`"
            class="project-card-link"
        />

        <div
            v-if="!announcement"
            class="project-body-bg-img">
            <InlineSvg :src="item.img_src"/>
        </div>

        <div class="project-body">

            <div class="project-logo">
                <InlineSvg :src="item.img_src"/>
            </div>

            <div class="project-title">
                <div class="h6">{{ item.title }}</div>
                <div
                    v-if="announcement"
                    class="project-annual-announcement-text">
                    {{ item.announcement_text }}
                </div>
            </div>

            <div
                v-if="!announcement"
                class="project-annual-rate">
                <div class="project-annual-rate-title">
                    {{ t('projects_cards.annual_remuneration_rate') }}
                </div>
                <div class="project-annual-rate-title-value">
                    {{ item.annual_rate }}
                </div>
            </div>

            <div
                v-if="announcement"
                class="project-annual-announcement-date">
                {{ t('projects_cards.soon') }}
            </div>

        </div>

        <div
            v-if="!announcement"
            class="project-btn-container">
            <span class="project-btn">
                {{ t('projects_cards.stacking') }}
            </span>
        </div>

    </div>
</template>
