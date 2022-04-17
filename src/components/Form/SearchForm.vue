<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const searchValue = ref('')

const emit = defineEmits()

function inputHandler() {
    emit('search-value-change', searchValue.value)
}

</script>

<template>
    <form
        class="search-form"
        @submit.prevent="false">
        <input
            type="text"
            v-model="searchValue"
            :placeholder="t('glossary_page.search_form_placeholder')"
            class="search-form-input"
            @input="inputHandler">
        <button
            type="submit"
            class="search-form-btn">
            <span class="icon-arrow-right-sm" />
        </button>
    </form>
</template>
