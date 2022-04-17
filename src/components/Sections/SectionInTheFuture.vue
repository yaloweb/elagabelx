<script setup>
import { useInTheFutureStore } from '@/stores/inTheFuture'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import ProjectCard from '@/components/Projects/ProjectCard.vue'

const inTheFutureStore = useInTheFutureStore()

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
                            В ближайшем будущем
                        </div>

                        <p v-animate="'slide-left'">Скоро мы будем операционными нодами для проектов, перечисленных рядом. В этот список мы включили только те проекты, которым мы можем полностью доверять. Ждите от нас объявления в ближайшее время.</p>

                        <RouterLink to="/glossary" class="link-with-circle-arrow">
                            Перейти в глоссарий
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
