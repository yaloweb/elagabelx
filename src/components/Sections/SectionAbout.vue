<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useHomeStore } from "@/stores/home"
import { useI18n } from 'vue-i18n'
import tippy, { inlinePositioning } from 'tippy.js'

const router = useRouter()

const { t } = useI18n()

const homeStore = useHomeStore()

const aboutDescription = ref(null)

function checkLinksInDescr() {
    aboutDescription.value?.querySelectorAll('[data-title]').forEach(tooltip => {
        tippy(tooltip, {
            content: tooltip.dataset.title,
            inlinePositioning: true,
            plugins: [inlinePositioning]
        })
    })
    aboutDescription.value?.querySelectorAll('a').forEach(link => {
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
    <section
        class="s-about"
        id="about"
    >
        <div class="container">

            <div class="about-row">

                <div
                    class="about-left"
                    v-animate="'slide-left'">
                    <div class="h2">
                        {{ t('home_page.about.title') }}
                    </div>
                </div>

                <div class="about-right">

                    <p
                        ref="aboutDescription"
                        v-animate="'slide-up'"
                        v-html="t('home_page.about.description')"
                    />

                    <div
                        v-if="homeStore.about"
                        class="about-quantities"
                        v-animate="'slide-up'">

                        <div
                            v-if="homeStore.about.delivered_assets"
                            class="about-quantities-item">
                            <div class="about-quantities-item-title">
                                {{ t('home_page.about.delivered_assets') }}
                            </div>
                            <div class="about-quantities-item-value">
                                {{ homeStore.about.delivered_assets }}
                            </div>
                        </div>

                        <div
                            v-if="homeStore.about.awards_pald"
                            class="about-quantities-item">
                            <div class="about-quantities-item-title">
                                {{ t('home_page.about.awards_pald') }}
                            </div>
                            <div class="about-quantities-item-value">
                                {{ homeStore.about.awards_pald }}
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    </section>
</template>
