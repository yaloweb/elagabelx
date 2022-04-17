<script setup>
import { useHomeStore } from "@/stores/home"
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const homeStore = useHomeStore()

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
