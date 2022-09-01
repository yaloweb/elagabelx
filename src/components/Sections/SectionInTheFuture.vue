<script setup>
import { useInTheFutureStore } from '@/stores/inTheFuture'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import ProjectCard from '@/components/Projects/ProjectCard.vue'
import { useI18n } from 'vue-i18n'

const inTheFutureStore = useInTheFutureStore()
const { t } = useI18n()

onMounted(async () => {
    await inTheFutureStore.getInTheFutureProjects()
})

const { inTheFutureProjectsCols } = storeToRefs(inTheFutureStore)

</script>

<template>
    <section
        class="s-in-the-future">
        <div class="container">

            <div
                class="in-the-future-bg-illustration-1"
                v-animate="'slide-right'"/>
            <div
                class="in-the-future-bg-illustration-2"
                v-animate="'slide-up'"/>

            <div class="in-the-future-row">

                <div class="in-the-future-left">
                    <div class="in-the-future-content">

                        <div
                            class="h2"
                            v-animate="'slide-left'"
                        >
                            {{ t('home_page.in_the_future.title') }}
                        </div>

                        <p v-animate="'slide-left'">
                            {{ t('home_page.in_the_future.description') }}
                        </p>

                        <RouterLink to="/glossary" class="link-with-circle-arrow">
                            {{ t('home_page.in_the_future.btn_text') }}
                            <span class="icon-arrow-right-sm" />
                        </RouterLink>

                    </div>
                </div>

                <div class="in-the-future-right">

                    <div class="in-the-future-projects">

                        <div
                            v-for="(col, idx) in inTheFutureProjectsCols"
                            :key="idx"
                            class="in-the-future-projects-col"
                            v-animate="'slide-up'">

                            <ProjectCard
                                v-for="project in col"
                                :key="project.id"
                                :item="project"
                                :announcement="true"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </div>
    </section>
</template>
