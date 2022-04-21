<script setup>
import { ref, onUnmounted } from 'vue'
import MainMenu from '@/components/Common/MainMenu.vue'
import SelectLanguage from '@/components/Common/SelectLanguage.vue'

const props = defineProps({
    whiteLogo: {
        type: Boolean,
        default: false
    }
})

const headerFixed = ref(false)

const menuOpened = ref(false)

const clickOutMenu = e => {
    const tg = e.target

    if (!tg.closest('.header-menu-body') && !tg.closest('.header-menu-open')) {
        menuOpened.value = false
    }
}

function headerScroll() {
    headerFixed.value = window.pageYOffset > 0
}

document.addEventListener('click', clickOutMenu)

window.addEventListener('scroll', headerScroll)

onUnmounted(() => {
    document.removeEventListener('click', clickOutMenu)
    window.removeEventListener('scroll', headerScroll)
})

</script>

<template>
    <header
        class="header"
        :class="{'fixed': headerFixed}"
    >
        <div class="container">

            <div class="header-row">

                <div class="header-logo">
                    <RouterLink
                        to="/"
                        class="logo">
                        <img
                            v-if="whiteLogo"
                            src="/img/logo-white.svg"
                            alt="">
                        <img
                            v-else
                            src="/img/logo.svg"
                            alt="">
                    </RouterLink>
                </div>

                <div
                    class="header-menu-body"
                    :class="{'opened': menuOpened}">

                    <div
                        class="header-menu-close"
                        @click="menuOpened = false"/>

                    <div class="header-mob-logo">
                        <RouterLink
                            to="/"
                            class="logo">
                            <img
                                src="/img/logo.svg"
                                alt="">
                        </RouterLink>
                    </div>

                    <div class="header-menu">
                        <MainMenu @link-click="menuOpened = false"/>
                    </div>

                    <div class="header-language">
                        <SelectLanguage />
                    </div>

                </div>

                <div
                    class="header-menu-open"
                    @click="menuOpened = true"/>

            </div>

        </div>
    </header>
</template>
