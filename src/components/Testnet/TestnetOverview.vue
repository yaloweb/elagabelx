<script setup>
import { useTestnetStore } from '@/stores/testnet'
import { storeToRefs } from 'pinia'
import { computed, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import TestnetBlockHeader from '@/components/Testnet/TestnetBlockHeader.vue'
import { useI18n } from 'vue-i18n'
import tippy, { inlinePositioning } from 'tippy.js'

const { t } = useI18n()

const testnetStore = useTestnetStore()
const { testnet } = storeToRefs(testnetStore)
const router = useRouter()
const overviewDescription = ref(null)

const statusList = [
    {
        value: 1,
        name: 'Активный',
        code: 'active',
        type: 'green'
    },
    {
        value: 2,
        name: 'Не активный',
        code: 'not_active',
        type: 'red'
    }
]

const getStatus = computed(() => {
    return statusList.filter(item => item.value === testnet.value.overview.status)[0]
})

function checkLinksInDescr() {
    overviewDescription.value?.querySelectorAll('[data-title]').forEach(tooltip => {
        tippy(tooltip, {
            content: tooltip.dataset.title,
            inlinePositioning: true,
            plugins: [inlinePositioning]
        })
    })
    overviewDescription.value?.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href')
        if (href.charAt(0) === '/') {
            link.addEventListener('click', e => {
                e.preventDefault()
                router.push(href)
            })
        }
    })
}

onMounted(checkLinksInDescr)

</script>

<template>
    <div class="testnet-overview">

        <TestnetBlockHeader
            :title="`${ t('testnet_page.overview.title') } ${testnet.name}`"
        />

        <div class="testnet-overview-main-info">

            <ul>
                <li class="testnet-status">
                    {{ t('testnet_page.overview.info.status') }}: <span :class="getStatus.type">{{ t(`testnet_page.overview.statuses.${getStatus?.code}`) }}</span>
                </li>
                <li class="testnet-date">
                    {{ t('testnet_page.overview.info.dates') }}: <span>{{ testnet.overview.dates.join(' - ') }}</span>
                </li>
                <li class="testnet-type">
                    {{ t('testnet_page.overview.info.type') }}: <span>{{ testnet.overview.type }}</span>
                </li>
            </ul>

            <p
                v-html="testnet.overview.description"
                ref="overviewDescription"
            />

        </div>

        <div class="testnet-characteristics">
            <ul>
                <li
                    v-if="testnet.overview.rating"
                    class="testnet-rating">
                    {{ t('testnet_page.overview.info.rating') }}:
                    <span>{{ testnet.overview.rating }}</span>
                </li>
                <li
                    v-if="testnet.overview.hardware"
                    class="testnet-hardware">
                    {{ t('testnet_page.overview.info.hardware') }}:
                    <span class="testnet-icon-list">
                        <i
                            v-for="i in testnet.overview.hardware"
                            :key="i"
                            class="icon-chipset" />
                    </span>
                </li>
                <li
                    v-if="testnet.overview.awards"
                    class="testnet-awards">
                    {{ t('testnet_page.overview.info.awards') }}:
                    <span>{{ testnet.overview.awards }}</span>
                </li>
                <li
                    v-if="testnet.overview.complexity"
                    class="testnet-complexity">
                    {{ t('testnet_page.overview.info.complexity') }}:
                    <span class="testnet-icon-list">
                        <i
                            v-for="i in testnet.overview.complexity"
                            :key="i"
                            class="icon-wrench" />
                    </span>
                </li>
                <li
                    v-if="testnet.overview.lock"
                    class="testnet-lock">
                    {{ t('testnet_page.overview.info.lock') }}:
                    <span>{{ testnet.overview.lock }}</span>
                </li>
            </ul>
        </div>

        <div class="testnet-system-requirements">

            <div class="h3">
                {{ t('testnet_page.overview.system_requirements_title') }}
            </div>

            <div
                class="testnet-system-requirements-info"
                v-html="testnet.overview.system_requirements"/>

        </div>

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

    </div>
</template>
