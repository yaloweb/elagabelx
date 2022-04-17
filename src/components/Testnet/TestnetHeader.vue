<script setup>
import { useTestnetStore } from '@/stores/testnet'
import { storeToRefs } from 'pinia'
import InlineSvg from 'vue-inline-svg'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const testnetStore = useTestnetStore()

const { testnet } = storeToRefs(testnetStore)

const levels = [
    { number: 1, code: "low", value: "Низкий" },
    { number: 2, code: "middle", value: "Средний" },
    { number: 3, code: "high", value: "Высокий" },
]

function getLevel(number) {
    const res = levels.filter(item => item.number === number)[0]
    return res ? t(`testnet_page.main.levels.${res.code}`) : ''
}

</script>

<template>

    <div class="testnet-header">

        <div class="testnet-header-row">

            <div class="testnet-header-logo">

                <div
                    v-if="testnet.img_src"
                    class="testnet-header-logo-icon">
                    <InlineSvg :src="testnet.img_src"/>
                </div>

                <h1
                    v-if="testnet.name"
                    class="testnet-header-logo-title">
                    {{ testnet.name }}
                </h1>

            </div>

            <div class="testnet-header-rating">

                <div
                    v-if="testnet.points"
                    class="testnet-header-rating-item">
                    <div class="testnet-header-rating-value">
                        {{ testnet.points }}/10 {{ t('testnet_page.main.score') }}
                    </div>
                    <div class="testnet-header-rating-title">
                        {{ t('testnet_page.main.evaluation_title') }}
                    </div>
                </div>

                <div
                    v-if="testnet.level"
                    class="testnet-header-rating-item">
                    <div class="testnet-header-rating-value">{{ getLevel(testnet.level) }}</div>
                    <div class="testnet-header-rating-title">
                        {{ t('testnet_page.main.levels_title') }}
                    </div>
                </div>

            </div>

        </div>

    </div>

</template>
