<script setup>
import { useProjectsStore } from '@/stores/projects'
import { useSocStore } from '@/stores/soc'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'
import InlineSvg from 'vue-inline-svg'
import UpButton from '@/components/Common/UpButton.vue'

const route = useRoute()
const router = useRouter()

const { t } = useI18n()

const projectsStore = useProjectsStore()

const { projects } = storeToRefs(projectsStore)

onMounted(() => {
    projectsStore.getProjects()
    socStore.getSoc()
})

const footerMenu = [
    { code: 'about', title: 'О нас', url: '/#about' },
    { code: 'glossary', title: 'Глоссарий', url: '/glossary' },
    { code: 'video_about_us', title: 'Видео про нас', url: '#' },
    { code: 'team', title: 'Команда', url: '/#team' },
    { code: 'contact_us', title: 'Связаться с нами', url: '/#contacts' }
]

const socStore = useSocStore()

const { socLinks } = storeToRefs(socStore)

function scrollTo(url) {
    const id = url.slice(1)
    const DOMElement = document.querySelector(id)

    if (route.path === '/') {
        if (id && DOMElement) {
            window.scrollTo({
                top: DOMElement.getBoundingClientRect().top + window.pageYOffset,
                left: 0,
                behavior: 'smooth'
            })
        }
    } else {
        router.push(url)
    }
}

</script>

<template>
    <footer class="footer">
        <div
            class="container"
            v-animate="'slide-up'">

            <div class="footer-body">

                <div class="footer-projects">
                    <nav class="footer-projects-nav">
                        <div class="footer-col-title">
                            {{ t('global.footer.networks') }}
                        </div>
                        <ul>
                            <li
                                v-for="project in projects"
                                :key="project.id">

                                <RouterLink
                                    :to="'/projects/' + project.id"
                                    class="footer-project">

                                    <span class="footer-project-logo">
                                        <InlineSvg :src="project.img_src"/>
                                    </span>

                                    <span class="footer-project-name">
                                        {{ project.title }}
                                    </span>

                                </RouterLink>

                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="footer-menu">
                     <nav class="footer-menu-nav">
                         <div class="footer-col-title">
                             {{ t('global.footer.company') }}
                         </div>
                         <ul>
                             <li
                                 v-for="(link, idx) in footerMenu"
                                :key="idx">

                                 <a
                                     v-if="link.url.indexOf('#') !== -1"
                                     :href="link.url"
                                     :data-title="link.title"
                                     @click.prevent="scrollTo(link.url)"
                                 >
                                     {{ t(`global.footer.menu.${link.code}`)}}
                                 </a>

                                 <RouterLink
                                     v-else
                                     :to="link.url"
                                     :data-title="link.title"
                                 >
                                     {{ t(`global.footer.menu.${link.code}`)}}
                                 </RouterLink>

                             </li>
                         </ul>
                     </nav>
                </div>

                <div class="footer-soc">
                    <nav class="footer-soc-nav">
                        <div class="footer-col-title">
                            {{ t('global.footer.social') }}
                        </div>
                        <ul>
                            <li
                                v-for="(socLink, idx) in socLinks"
                                :key="idx">
                                <a
                                    :href="socLink.url"
                                    class="footer-soc-nav-link"
                                    target="_blank">
                                    <span class="footer-soc-nav-link-icon">
                                        <span :class="`icon-${socLink.name}`" />
                                        <span :class="['gradient', `icon-${socLink.name}`]" />
                                    </span>
                                    <span
                                        class="footer-soc-nav-link-title"
                                        :data-title="socLink.title">
                                        {{ socLink.title }}
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>

                <div class="footer-logo">

                    <RouterLink
                        to="/"
                        class="footer-logo-link">
                        <img
                            src="/img/footer-logo.svg"
                            alt="">
                    </RouterLink>

                    <div class="footer-up">
                        <UpButton />
                    </div>

                </div>

            </div>

            <div class="footer-copyright">
               {{ t('global.footer.copyright') }}
            </div>

        </div>
    </footer>
</template>
