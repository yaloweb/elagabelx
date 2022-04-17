<script setup>
import { ref, onBeforeUnmount } from 'vue'
const languages = [
    {title: 'Украiнська', code: 'uk'},
    {title: 'English', code: 'en'},
    {title: 'Русский', code: 'ru'},
    {title: 'Italiano', code: 'it'},
    {title: 'Espanol', code: 'es'},
    {title: 'Catala', code: 'ca'}
]

const currentLang = ref(languages[2])

const langMenuIsOpened = ref(false)

const clickOutsideDropdown = () => {
    langMenuIsOpened.value = false
}

document.addEventListener('click', clickOutsideDropdown)

onBeforeUnmount(() => {
    document.removeEventListener('click', clickOutsideDropdown)
})

</script>

<template>
    <div
        class="select-language"
        :class="{'opened': langMenuIsOpened}"
        @click.stop>

        <div
            class="selected-language-current"
            @click="langMenuIsOpened = !langMenuIsOpened">
            <span class="icon-language" />{{ currentLang.title }}
        </div>

        <div class="selected-language-dropdown">

            <div
                class="selected-language-dropdown-grid"
                :class="{'languages-less-3': languages.length < 3}">

                <div
                    v-for="(lang, idx) in languages"
                    :key="idx"
                    class="selected-language-item">
                    <a
                        href="/"
                        :class="{'active': currentLang.code === lang.code}"
                        @click.prevent="currentLang = lang">
                        {{ lang.title }}
                    </a>
                </div>

            </div>

        </div>

    </div>
</template>
