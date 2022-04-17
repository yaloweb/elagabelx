<script setup>
import { useProjectStore } from '@/stores/project'
import { storeToRefs } from 'pinia'
import InlineSvg from 'vue-inline-svg'
import ValidatorInput from '@/components/Form/ValidatorInput.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const projectStore = useProjectStore()

const {
    title,
    img_src,
    validator_name,
    validator_address,
    expected_profit,
    commision,
    payout_frequency,
    delegation_cancellation_period
} = storeToRefs(projectStore)


</script>

<template>
    <section class="s-project-main">

        <div class="project-main-illustrations">
            <div class="project-main-illustrations-item"><img src="/img/illustrations/triangle-1.svg" alt=""></div>
            <div class="project-main-illustrations-item"><img src="/img/illustrations/triangle-2.svg" alt=""></div>
        </div>

        <div class="container">

            <div class="project-main-row">

                <div class="project-main-left">

                    <div class="article-main-back">
                        <RouterLink
                            to="/"
                            class="search-header-back-link">
                            <span class="icon-arrow-left" />{{ t('project_page.back_link') }}
                        </RouterLink>
                    </div>

                    <div class="project-main-info">

                        <div class="project-main-logo">
                            <span>
                                <InlineSvg
                                    v-if="img_src"
                                    :src="img_src" />
                            </span>
                        </div>

                        <div class="project-main-title">
                            <div class="h6">
                                {{ t('project_page.network_validator') }}
                            </div>
                            <h1>{{ title }}</h1>
                        </div>

                    </div>

                    <div class="project-main-validator-address">
                        <ValidatorInput
                            :name="validator_name"
                            :address="validator_address" />
                    </div>

                </div>

                <div class="project-main-right">

                    <div class="project-main-numbers">

                        <div
                            v-if="expected_profit"
                            class="project-main-number">
                            <div class="project-main-number-value">
                                {{ expected_profit }}
                            </div>
                            <div class="project-main-number-title">
                                {{ t('project_page.expected_profit') }}
                            </div>
                        </div>

                        <div
                            v-if="commision"
                            class="project-main-number">
                            <div class="project-main-number-value">
                                {{ commision }}
                            </div>
                            <div class="project-main-number-title">
                                {{ t('project_page.commision') }}
                            </div>
                        </div>

                        <div
                            v-if="payout_frequency"
                            class="project-main-number">
                            <div class="project-main-number-value">
                                {{ payout_frequency }}
                            </div>
                            <div class="project-main-number-title">
                                {{ t('project_page.payout_frequency') }}
                            </div>
                        </div>

                        <div
                            v-if="delegation_cancellation_period"
                            class="project-main-number">
                            <div class="project-main-number-value">
                                {{ delegation_cancellation_period }}
                            </div>
                            <div class="project-main-number-title">
                                {{ t('project_page.delegation_cancellation_period') }}
                            </div>
                        </div>

                    </div>

                    <div class="project-main-start-stacking">
                        <router-link
                            to="/"
                            class="btn btn-with-arrow btn-block"
                        >
                            {{ t('project_page.start_stacking') }} <span class="icon-arrow-right-sm" />
                        </router-link>
                    </div>

                </div>

            </div>

        </div>

    </section>
</template>
