<script setup>
import { useTestnetStore } from '@/stores/testnet'
import { storeToRefs } from 'pinia'
import TestnetBlockHeader from '@/components/Testnet/TestnetBlockHeader.vue'
import TestnetMaterialCard from '@/components/Testnet/TestnentMaterialCard.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const testnetStore = useTestnetStore()

const { testnet } = storeToRefs(testnetStore)
</script>

<template>
    <div class="testnet-educational-materials">

        <TestnetBlockHeader :title="t('testnet_page.educational_materials.title')" />

        <div class="testnet-educational-materials-list">

            <TestnetMaterialCard
                v-for="material in testnet.educational_materials"
                :key="material"
                :material="material"
            />

        </div>

    </div>
</template>
