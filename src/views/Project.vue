<script setup>
import { useProjectStore } from '@/stores/project'
import { storeToRefs } from 'pinia'
import { onMounted, onBeforeUnmount } from 'vue'
import ProjectMain from '@/components/Project/ProjectMain.vue'
import EducationalMaterials from '@/components/Project/EducationalMaterials.vue'
import ProjectAbout from '@/components/Project/ProjectAbout.vue'
import Faq from '@/components/Project/Faq.vue'
import SectionCallback from '@/components/Sections/SectionCallback.vue'

const projectStore = useProjectStore()

const project = storeToRefs(projectStore)

const { faq } = storeToRefs(project)

onMounted(() => {
    projectStore.getProjectData()
})

onBeforeUnmount(() => {
    projectStore.$reset()
})

</script>

<template>

    <div
        class="project-page"
        v-animate="'project-page-animate'">

        <ProjectMain />

        <EducationalMaterials />

        <ProjectAbout />

        <Faq :list="faq"/>

        <SectionCallback />

    </div>

</template>
