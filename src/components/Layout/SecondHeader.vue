<script setup>
import SecondHeaderMenu from '@/components/Common/SecondHeaderMenu.vue'
import SelectLanguage from '@/components/Common/SelectLanguage.vue'
import { useSecondSiteGlobalStore } from '@/stores/secondSiteGlobal'
import { storeToRefs } from 'pinia'
import { ref, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const secondSiteGlobalStore = useSecondSiteGlobalStore()

const { soc } = storeToRefs(secondSiteGlobalStore)
const menuOpened = ref(false)

onMounted(() => {
    secondSiteGlobalStore.getSecondSiteGlobalData()
})

const clickOut = e => {
    if (!e.target.closest('.second-header-menu-block')) {
        menuOpened.value = false
    }
}

onMounted(() => {
    document.addEventListener('click', clickOut)
})
onUnmounted(() => {
    document.removeEventListener('click', clickOut)
})

</script>

<template>
    <header class="second-header">
        <div class="second-container">

            <div class="second-header-row">

                <div class="second-header-logo">
                    <router-link to="/" class="second-logo">
                        <img src="/img/logo.svg" alt="">
                    </router-link>
                </div>

                <div
                    class="second-header-menu-block"
                    :class="{'opened': menuOpened}">

                    <div class="second-header-menu-block-top">

                        <div class="second-header-logo-mob">
                            <router-link to="/" class="second-logo">
                                <img src="/img/logo.svg" alt="">
                            </router-link>
                        </div>

                        <div
                            class="second-header-menu-close"
                            @click="menuOpened = false">
                            <span class="icon-close-small" />
                        </div>

                    </div>

                    <div class="second-header-validator-link">
                        <router-link to="/">
                            <span class="icon-angle-left"/> {{ t('global.second_header.back_to_validator')}}
                        </router-link>
                    </div>

                    <div class="second-header-menu">
                        <SecondHeaderMenu
                            @closeMenu="menuOpened = false"
                        />
                    </div>

                    <div class="second-menu-soc">
                        <a
                            v-for="socLink in soc"
                            :key="socLink.id"
                            :href="socLink.url"
                            class="footer-soc-nav-link"
                            target="_blank">
                            <span class="footer-soc-nav-link-icon">
                                <span :class="`icon-${socLink.name}`" />
                                <span :class="['gradient', `icon-${socLink.name}`]" />
                            </span>
                        </a>
                    </div>

                    <div class="second-menu-languages">
                        <SelectLanguage />
                    </div>

                </div>

                <div
                    class="second-header-menu-btn"
                    @click.stop="menuOpened = true">
                    <span class="icon-bar"></span>
                </div>

            </div>

        </div>
    </header>
</template>
