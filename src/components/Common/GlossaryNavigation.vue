<script setup>
import { ref, watch, computed, onBeforeUpdate, onMounted } from 'vue'
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    list: Array
})

const route = useRoute()
const getWordQuery = route.query.word

const selectedGlossary = ref([0, 0])

function setSelectedGlossary() {
    selectedGlossary.value = [0, 0]
}

function setGlossaryByQuery() {
    if (getWordQuery && props.list.length) {
        props.list.forEach((item, idx) => {
            item.list.forEach((wordItem, wordIdx) => {
                if (wordItem.title === getWordQuery) {
                    selectedGlossary.value = [idx, wordIdx]
                }
            })
        })
    }
}

setGlossaryByQuery()

watch(
    props.list,
    () => {
        setSelectedGlossary()
        setGlossaryByQuery()
        destroyScrollbar()
    }
)

const selectedGlossaryObject = computed(() => {
    let result = props.list[selectedGlossary.value[0]]?.list[selectedGlossary.value[1]]
    return result ? result : false
})

const words = computed(() => {
    let res = []
    if (props.list) {
        res = props.list.map(item => item.word)
    }
    return res
})

const navItem = ref([])

onBeforeUpdate(() => {
    navItem.value = []
})

const glossaryContent = ref(null)

function scrollToNavItem(index) {
    const top = navItem.value[index] ? navItem.value[index].getBoundingClientRect().top : 0
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop

    window.scrollTo({
        top: top + scrollTop - 8,
        behavior: "smooth"
    })

    selectedGlossary.value = [index, 0]
}

function selectGlossary(wordIdx, wordTitleIdx) {
    selectedGlossary.value = [wordIdx, wordTitleIdx]

    if (window.innerWidth < 768) {
        window.scrollTo({
            top: glossaryContent.value.getBoundingClientRect().top + window.pageYOffset - 30,
            left: 0,
            behavior: 'smooth'
        })
    }
}

const scrollbar = ref(null)

function destroyScrollbar() {
    if (window.innerWidth < 992) {
        scrollbar.value?.destroy()
    }
}

onMounted(() => {
    destroyScrollbar()
})

</script>

<template>
    <div class="glossary-block">

        <div
            v-if="list ? !!list.length : false"
            class="glossary-list">

            <div class="glossary-block-nav-words">
                <a
                    v-for="(word, wordIdx) in words"
                    :key="word"
                    href="#"
                    :class="{'active': wordIdx === selectedGlossary[0]}"
                    @click.prevent="scrollToNavItem(wordIdx)">
                    {{ word }}
                </a>
            </div>

            <div class="glossary-nav">

                <PerfectScrollbar ref="scrollbar">

                    <div
                        v-for="(glossaryWord, glossaryWordIdx) in list"
                        :key="glossaryWordIdx"
                        class="glossary-nav-item"
                        :class="{'active': glossaryWordIdx === selectedGlossary[0]}"
                        :ref="el => {navItem[glossaryWordIdx] = el}">

                        <div class="glossary-nav-item-word">
                            {{ glossaryWord.word }}
                        </div>

                        <div class="glossary-nav-item-titles">
                            <div
                                v-for="(glossaryWordTitle, glossaryWordTitleIdx) in glossaryWord.list"
                                :key="`${glossaryWordIdx}-${glossaryWordTitleIdx}`"
                                class="glossary-nav-item-titles-item"
                                :class="{'active': glossaryWordTitleIdx === selectedGlossary[1]}"
                                @click="selectGlossary(glossaryWordIdx, glossaryWordTitleIdx)">
                                {{ glossaryWordTitle.title }}
                            </div>
                        </div>

                    </div>

                </PerfectScrollbar>

                <div class="glossary-nav-end">
                    {{ t('glossary_page.end_of_the_list') }}
                </div>

            </div>

            <div
                class="glossary-content"
                ref="glossaryContent"
            >
                <div class="glossary-content-container">

                    <div
                        v-if="selectedGlossaryObject"
                        class="glossary-content-item">

                        <div class="glossary-content-title">
                            {{ selectedGlossaryObject.title }}
                        </div>

                        <div class="glossary-content-description">
                            {{ selectedGlossaryObject.description }}
                        </div>

                    </div>

                    <div
                        v-else
                        class="glossary-content-undefined">
                        {{ t('glossary_page.select_termin') }}
                    </div>

                </div>
            </div>

        </div>

        <div
            v-else
            class="glossary-empty">
            <div class="glossary-empty-text">
                {{ t('glossary_page.no_results') }}
            </div>
        </div>

    </div>
</template>
