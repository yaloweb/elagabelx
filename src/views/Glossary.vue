<script setup>
import { useGlossaryStore } from '@/stores/glossary'
import { storeToRefs } from 'pinia'
import { onMounted, computed, ref } from 'vue'
import GlossaryNavigation from '@/components/Common/GlossaryNavigation.vue'
import SearchForm from '@/components/Form/SearchForm.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const glossaryStore = useGlossaryStore()

const { glossary } = storeToRefs(glossaryStore)

const searchValue = ref('')

onMounted(async () => {
    await glossaryStore.getGlossary()
})

const glossaryFiltered = computed(() => {
    const res = []
    const searchValueLowerCase = searchValue.value?.toLowerCase() || ''

    glossary.value?.forEach(glossaryCollection => {
        glossaryCollection.list.forEach(glossaryItem => {

            const title = glossaryItem.title.toLowerCase()
            const description = glossaryItem.description.toLowerCase()

            if (title.indexOf(searchValueLowerCase) !== -1 || description.indexOf(searchValueLowerCase) !== -1) {
                const wordsIsExists = res.filter(item => item.word === glossaryCollection.word)[0]
                if (wordsIsExists) {
                    wordsIsExists.list.push(glossaryItem)
                } else {
                    res.push({
                        word: glossaryCollection.word,
                        list: [glossaryItem]
                    })
                }
            }
        })
    })

    return res
})

</script>

<template>

    <div class="page-glossary">

        <section
            class="s-main-glossary"
            v-animate="'main-glossary-animate'">
            <div class="container">

                <div class="main-glossary-top">

                    <div class="main-glossary-top-left">

                        <div class="main-glossary-top-left-img">
                            <img src="/img/glossary/main-banner.jpg" alt="">
                        </div>

                    </div>

                    <div class="main-glossary-top-right">

                        <h1>
                            {{ t('glossary_page.title') }}
                        </h1>

                    </div>

                </div>

                <div class="main-glossary-body">
                    <div class="main-glossary-body-container">

                        <p>
                            {{ t('glossary_page.description') }}
                        </p>

                        <SearchForm @search-value-change="searchValue = $event"/>

                    </div>
                </div>

            </div>
        </section>

        <section
            class="s-glossary"
            v-animate="'slide-up'">
            <div class="container">

                <GlossaryNavigation :list="glossaryFiltered"/>

            </div>
        </section>

    </div>

</template>
