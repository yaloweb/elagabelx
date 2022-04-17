<script setup>
import { useTestnetStore } from '@/stores/testnet'
import { storeToRefs } from 'pinia'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const testnetStore = useTestnetStore()

const { testnet } = storeToRefs(testnetStore)

const selectedMenu = ref('overview')

const checkTelegram = computed(() => {
    const telegram = testnet.value.soc?.filter(soc => soc.name === 'telegram')[0]
    if (telegram) {
        return telegram.url
    } else {
        return false
    }
})

const emit = defineEmits()

function changeSelectedMenu(value) {
    selectedMenu.value = value
    emit('change-tab', value)
}


</script>

<template>
    <div class="testnet-sidebar">

        <nav
            v-if="testnet"
            class="testnet-sidebar-menu">
            <a
                v-if="testnet.overview"
                href="#"
                class="testnet-sidebar-menu-link"
                :class="{'active': selectedMenu === 'overview'}"
                @click.prevent="changeSelectedMenu('overview')"
            >
                {{ t('testnet_page.sidebar_menu.overview') }}
            </a>
            <a
                v-if="testnet.installation_guide"
                href="#"
                class="testnet-sidebar-menu-link"
                :class="{'active': selectedMenu === 'installation_guide'}"
                @click.prevent="changeSelectedMenu('installation_guide')"
            >
                {{ t('testnet_page.sidebar_menu.installation_guide') }}
            </a>
            <a
                v-if="testnet.official_documentaions_url"
                :href="testnet.official_documentaions_url[0]"
                class="testnet-sidebar-menu-link"
                target="_blank"
            >
                {{ t('testnet_page.sidebar_menu.official_documentaions') }}
            </a>
            <a
                v-if="testnet.site"
                :href="testnet.site"
                class="testnet-sidebar-menu-link"
                target="_blank"
            >
                {{ t('testnet_page.sidebar_menu.site') }}
            </a>
            <a
                v-if="testnet.educational_materials"
                href="#"
                class="testnet-sidebar-menu-link"
                :class="{'active': selectedMenu === 'educational_materials'}"
                @click.prevent="changeSelectedMenu('educational_materials')"
            >
                {{ t('testnet_page.sidebar_menu.educational_materials') }}
            </a>
        </nav>

        <div
            v-if="checkTelegram"
            class="testnet-sidebar-telegram">
            <a
                :href="checkTelegram"
                class="soc-link"
                target="_blank">
                <span class="icon-telegram" />
            </a>
        </div>

    </div>
</template>
