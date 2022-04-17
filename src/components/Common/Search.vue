<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useSearchStore } from '@/stores/search'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const searchStore = useSearchStore()

const emit = defineEmits()

const props = defineProps({
    resultList: Array,
    keyword: String
})
const router = useRouter()
const route = useRoute()

const searchValue = ref('')
const resultDropdownVisible = ref(false)

function inputHandler() {
    emit('search', searchValue.value)
    resultDropdownVisible.value = true
}

function goToSearchResults(value) {
    if (route.path === '/search') {
        searchStore.getSearchResults(value)
    }
    router.push(`/search?keyword=${value}`)
    searchValue.value = value
    resultDropdownVisible.value = false
}

const clickOutSearch = () => {
    resultDropdownVisible.value = false
}

document.addEventListener('click', clickOutSearch);

onMounted(() => {
    if (props.keyword) {
        searchValue.value = props.keyword
    }
})
</script>

<template>
    <form class="search-blog-form">

        <div class="search-blog-form-input">
            <input
                type="text"
                @input="inputHandler"
                v-model="searchValue"
                :placeholder="t('search_page.search_input_placeholder')"
                @click.stop>
            <span class="icon-search" />
        </div>

        <div
            class="search-blog-form-results"
            :class="{'opened': resultDropdownVisible && searchValue.trim().length > 0}"
            @click.stop>

            <ul v-if="resultList.length">
                <li
                    v-for="(resultListItem, idx) in resultList"
                    :key="idx"
                >
                    <a
                        href="#"
                        @click.prevent="goToSearchResults(resultListItem.value)">
                        {{ resultListItem.value }}
                    </a>
                </li>
            </ul>

            <div
                v-else
                class="search-blog-form-results-empty">
                {{ t('search_page.no_results') }}
            </div>

        </div>

    </form>
</template>
