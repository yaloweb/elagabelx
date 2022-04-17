<script setup>
import { useTestnetStore } from '@/stores/testnet'
import { storeToRefs } from 'pinia'
import TestnetBlockHeader from '@/components/Testnet/TestnetBlockHeader.vue'
import TestnetInstallationStep from '@/components/Testnet/TestnetInstallationStep.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const testnetStore = useTestnetStore()

const { testnet } = storeToRefs(testnetStore)
</script>

<template>
    <div class="testnet-installation-guide">

        <TestnetBlockHeader
            :title="t('testnet_page.installation_guide.title')"
        />

        <div class="testnet-installation-guide-body">

            <div class="testnet-rent">

                <div class="h3">
                    {{ t('testnet_page.overview.rent_title') }}
                </div>

                <ul>
                    <li
                        v-for="rentLink in testnet.rental_sites"
                        :key="rentLink.id">
                        <a
                            :href="rentLink.link"
                            target="_blank">
                            {{ rentLink.name }}
                        </a>
                    </li>
                </ul>

            </div>

            <div
                v-if="testnet.official_documentaions_url"
                class="testnet-official-docs">
                <div class="testnet-official-docs-block">
                    {{ t('testnet_page.installation_guide.official_documentation_title') }}
                    <a :href="testnet.official_documentaions_url[0]" target="_blank">здесь</a> и
                    <a :href="testnet.official_documentaions_url[1]" target="_blank">здесь</a>
                </div>
            </div>

            <div
                v-if="testnet.installation_guide.steps"
                class="testnet-installation-guide-steps">

                <TestnetInstallationStep
                    v-for="(step, stepIdx) in testnet.installation_guide.steps"
                    :key="stepIdx"
                    :stepInfo="step"
                    :index="stepIdx + 1"
                />

            </div>

        </div>

    </div>
</template>
