<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    list: Array
})

const selectedLink = ref('')
const DOMElements = {}

function setSelectedLink(blockId) {
    selectedLink.value = blockId
}

setSelectedLink(props.list?.[0].block_id)

function navScrollTo(link) {
    const DOMElement = document.querySelector('#' + link.block_id)
    selectedLink.value = link.block_id

    if (DOMElement) {
        const top = DOMElement.getBoundingClientRect().top
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop

        window.scrollTo({
            top: top + scrollTop - 30,
            behavior: 'smooth'
        })
    }
}

function checkDOMElements() {
    props.list.forEach(prop => {
        const DOMElement = document.querySelector('#' + prop.block_id)

        if (DOMElement) {
            const elTop = DOMElement.getBoundingClientRect().top
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop
            const top = elTop + scrollTop - 31

            DOMElements[prop.block_id] = top
        }
    })
}

function checkScrollElements() {
    if (window.innerWidth >= 992) {
        checkDOMElements()
        for (let i = props.list.length - 1; i >= 0; i--) {
            let item = props.list[i].block_id
            const DOMItem = DOMElements[item]
            if (window.pageYOffset > DOMItem) {
                selectedLink.value = item
                return false
            }
        }
    }
}

window.addEventListener('scroll', checkScrollElements)

onMounted(() => {
    setSelectedLink(props.list?.[0].block_id)
    checkDOMElements()
})

onUnmounted(() => {
    window.removeEventListener('scroll', checkScrollElements)
})
</script>

<template>
    <nav class="article-content-navigation">
        <div class="article-content-navigation-title">
            {{ t('educational_materials_article_page.navigation_content_title') }}
        </div>
        <a
            v-for="link in list"
            :key="link.id"
            :href="'#' + link.block_id"
            class="article-content-navigation-link"
            :class="{'active': selectedLink === link.block_id}"
            @click.prevent="navScrollTo(link)">
            <span :data-text="link.title">{{ link.title }}</span>
        </a>
    </nav>
</template>
