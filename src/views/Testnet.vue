<script setup>
import { useTestnetStore } from '@/stores/testnet'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { storeToRefs } from 'pinia'
import TestnetHeader from '@/components/Testnet/TestnetHeader.vue'
import TestnetSidebar from '@/components/Testnet/TestnetSidebar.vue'
import TestnetOverview from '@/components/Testnet/TestnetOverview.vue'
import TestnetInstallationGuide from '@/components/Testnet/TestnetInstallationGuide.vue'
import TestnetEducationalMaterials from '@/components/Testnet/TestnetEducationalMaterials.vue'

const route = useRoute()
const testnetId = route.params.id

const testnetStore = useTestnetStore()

const { testnet } = storeToRefs(testnetStore)

const selectedTab = ref('overview')

onMounted(async () => {
    await testnetStore.getTestnet(testnetId)
})
</script>

<template>
    <div
        class="testnet-page"
        v-animate="'testnet-page-animate'">
        <div class="second-container">

            <TestnetHeader />

            <div class="testnet-body-row">

                <div class="testnet-body-sidebar">
                    <TestnetSidebar @change-tab="selectedTab = $event"/>
                </div>

                <div
                    v-if="testnet"
                    class="testnet-body-main">

                    <Transition name="tab">

                        <div
                            v-if="selectedTab === 'overview'"
                            class="testnet-block">
                            <div class="testnet-block-content">

                                <TestnetOverview v-if="testnet.overview"/>

                            </div>
                        </div>

                        <div
                            v-else-if="selectedTab === 'installation_guide'"
                            class="testnet-block">
                            <div class="testnet-block-content">
                                <TestnetInstallationGuide v-if="testnet.installation_guide" />
                            </div>
                        </div>

                        <div
                            v-else-if="selectedTab === 'educational_materials'"
                            class="testnet-block">
                            <div class="testnet-block-content">
                                <TestnetEducationalMaterials v-if="testnet.educational_materials" />
                            </div>
                        </div>

                    </Transition>

                </div>

            </div>

        </div>
    </div>
</template>
