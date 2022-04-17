<script setup>
import ProjectsGrid from '@/components/Projects/ProjectsGrid.vue'
import { useProjectsStore } from "@/stores/projects"
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const projectsStore = useProjectsStore()

const { projects } = storeToRefs(projectsStore)

onMounted(async () => {
    await projectsStore.getProjects()
})

</script>

<template>
    <section
        class="s-networks"
        id="what-we-do"
    >

        <div class="s-networks-dots">
            <span v-animate="'slide-up'"/>
            <span v-animate="'slide-up'"/>
            <span v-animate="'slide-up'"/>
        </div>

        <div class="container">

            <div class="networks-content">

                <div class="networks-header">

                    <div
                        class="networks-header-title"
                        v-animate="'slide-left'">
                        <div class="h2">
                            {{ t('home_page.networks.title') }}
                        </div>
                    </div>

                    <div
                        class="networks-header-description"
                        v-animate="'slide-up'">
                        <p>
                            {{ t('home_page.networks.description') }}
                        </p>
                    </div>

                </div>

            </div>

            <ProjectsGrid :list="projects"/>

        </div>
    </section>
</template>
