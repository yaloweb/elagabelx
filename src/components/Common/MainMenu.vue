<script setup>
import ProjectsDropdown from '@/components/Common/ProjectsDropdown.vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const { t } = useI18n()

const menu = [
    {key: 'about', title: 'О нас', url: '/#about'},
    'projects',
    {key: 'educational_materials', title: 'Обучающие материалы', url: '/#educational-materials'},
    // {key: 'what_we_do', title: 'Что мы делаем', url: '/#what-we-do'},
    {key: 'glossary', title: 'Глоссарий', url: '/glossary'},
    {key: 'contacts', title: 'Контакты', url: '/#contacts'}
]

const emit = defineEmits()

function scrollTo(url) {
    const id = url.slice(1)
    const DOMElement = document.querySelector(id)

    if (route.path === '/') {
        if (id && DOMElement) {
            window.scrollTo({
                top: DOMElement.getBoundingClientRect().top + window.pageYOffset - 60,
                left: 0,
                behavior: 'smooth'
            })
        }
    } else {
        router.push(url)
    }

    emit('link-click')
}
</script>

<template>
    <nav class="main-menu">
        <template
            v-for="(link, idx) in menu">

            <ProjectsDropdown
                v-if="link === 'projects'"
                :key="link"
                @closeMenu="emit('link-click')"
            />

            <a
                v-else-if="link.url.indexOf('#') !== -1"
                :key="idx + '-scroll'"
                :href="link.url"
                class="main-menu-link"
                @click.prevent="scrollTo(link.url)"
            >
                {{ t(`global.header.menu.${link.key}`) }}
            </a>

            <div
                v-else
                :key="idx"
                @click="emit('link-click')"
            >
                <RouterLink
                    :to="link.url"
                    class="main-menu-link"
                >
                    {{ t(`global.header.menu.${link.key}`) }}
                </RouterLink>
            </div>

        </template>

    </nav>
</template>
