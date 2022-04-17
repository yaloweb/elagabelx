<script setup>
import { useTestnetStore } from '@/stores/testnet'
import { storeToRefs } from 'pinia'
import TestnetSoc from '@/components/Testnet/TestnetSoc.vue'

const props = defineProps({
    title: String
})

const testnetStore = useTestnetStore()
const { testnet } = storeToRefs(testnetStore)

</script>

<template>
    <div class="testnet-block-header">

        <div class="testnet-block-header-title">{{ title }}</div>

        <TestnetSoc :list="testnet.soc" />

    </div>
</template>
