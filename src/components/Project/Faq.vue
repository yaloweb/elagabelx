<script setup>
import Accordion from '@/components/Common/Accordion.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    list: Array
})
</script>

<template>
    <section class="s-faq">
        <div class="container">

            <div class="faq-row">

                <div
                    class="faq-title"
                    v-animate="'slide-up'"
                >
                    <div class="h2">
                        {{ t('project_page.faq.title') }}
                    </div>
                </div>

                <div class="faq-content">

                    <Accordion :list="list"/>

                </div>

            </div>

        </div>
    </section>
</template>
