<script setup>
import { useSecondSiteGlobalStore } from '@/stores/secondSiteGlobal'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import UpButton from '@/components/Common/UpButton.vue'
import { useI18n } from 'vue-i18n'
import { useRoute } from 'vue-router'

const route = useRoute()
const { t } = useI18n()

const secondSiteGlobalStore = useSecondSiteGlobalStore()

const { menu, soc } = storeToRefs(secondSiteGlobalStore)

onMounted(() => {
    if (soc.length === 0) {
        secondSiteGlobalStore.getSecondSiteGlobalData()
    }
})

</script>

<template>
    <footer class="second-footer">
        <div class="second-container">

            <div class="second-footer-body">

                <div class="second-footer-logo">
                    <RouterLink
                        to="/"
                        class="footer-logo-link">
                        <img
                            src="/img/footer-logo.svg"
                            alt="">
                    </RouterLink>
                </div>

                <div
                    v-for="(menuItem, menuIdx) in menu"
                    :key="menuIdx"
                    class="second-footer-menu-col">

                    <div class="second-footer-menu-col-title">

                        <RouterLink
                            v-if="menuItem.url"
                            :to="menuItem.url">
                            {{ t(`global.second_header.menu.${menuItem.code}`) }}
                        </RouterLink>

                        <span v-else>
                            {{ t(`global.second_header.menu.${menuItem.code}`) }}
                        </span>

                    </div>

                    <nav
                        v-if="menuItem.childrens"
                        class="second-footer-menu-nav">
                        <ul>
                            <li
                                v-for="(subMenuItem, subMenuIdx) in menuItem.childrens"
                                :key="`${menuIdx}-${subMenuIdx}`">

                                <RouterLink
                                    :to="{path: subMenuItem.url, query: subMenuItem.query}"
                                    custom
                                    v-slot="{ isActive, href, navigate }"
                                >
                                    <a
                                        :href="href"
                                        :class="{'router-link-active': subMenuItem.query ? subMenuItem.query.sort === route.query.sort : isActive}"
                                        @click="navigate"
                                    >
                                        {{ subMenuItem.code ? t(`global.second_header.menu.${subMenuItem.code}`) : subMenuItem.title }}
                                    </a>
                                </RouterLink>

                            </li>
                        </ul>
                    </nav>

                </div>

                <div class="second-footer-soc">

                    <div class="second-footer-soc-title">
                        {{ t('global.footer.social') }}
                    </div>

                    <nav class="second-footer-soc-nav">
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
                            <span
                                class="footer-soc-nav-link-title"
                                :data-title="socLink.title">
                                {{ socLink.title }}
                            </span>
                        </a>
                    </nav>

                </div>

            </div>

            <div class="second-footer-copyright">

                <div class="second-footer-copyright-text">
                    {{ t('global.footer.copyright') }}
                </div>

                <div class="second-footer-up-btn">
                    <UpButton />
                </div>

            </div>

        </div>
    </footer>
</template>
