<script setup>
import { ref, onBeforeUnmount, onMounted } from 'vue'
import { useProjectsStore } from '@/stores/projects'
import InlineSvg from 'vue-inline-svg'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const projectsStore = useProjectsStore()

onMounted(async () => {
    await projectsStore.getProjects()
})

const dropdownOpened = ref(false)

const clickOutsideDropdown = () => {
    dropdownOpened.value = false
}

document.addEventListener('click', clickOutsideDropdown)

onBeforeUnmount(() => {
    document.removeEventListener('click', clickOutsideDropdown)
})

</script>

<template>
    <div
        class="projects-menu"
        :class="{'opened': dropdownOpened}"
        @click.stop>

        <div
            class="projects-menu-link"
            @click="dropdownOpened = !dropdownOpened">
            {{ t('global.header.menu.projects')}}
        </div>

        <div
            class="projects-menu-dropdown"
            :class="{'projects-less-4': projectsStore.projects?.length < 4}"
            @click="dropdownOpened = false">

            <div class="projects-menu-dropdown-grid">

                <div
                    v-for="project in projectsStore.projects"
                    :key="project.id"
                    class="projects-menu-dropdown-link">
                    <RouterLink :to="`/projects/${project.id}`">
                        <span class="projects-menu-dropdown-link-img">
                            <InlineSvg :src="project.img_src"/>
                        </span>
                        <span class="projects-menu-dropdown-link-title">
                            {{ project.title }}
                        </span>
                    </RouterLink>
                </div>

                <div
                    v-if="projectsStore.projects?.length >= 10"
                    class="projects-menu-dropdown-more">
                    <RouterLink to="/projects">{{ t('global.header.more')}} <span class="icon-ellipsis" /></RouterLink>
                </div>

            </div>

        </div>

    </div>
</template>
