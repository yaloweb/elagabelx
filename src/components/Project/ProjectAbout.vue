<script setup>
import { useProjectStore } from '@/stores/project'
import { storeToRefs } from 'pinia'
import InlineSvg from 'vue-inline-svg'

const projectStore = useProjectStore()

const { about, img_src } = storeToRefs(projectStore)

</script>

<template>
    <section class="s-project-about">

        <div
            class="project-about-illustration"
            v-animate="'mosaic-animate'"
        >
            <span
                v-for="i in 16"
                :key="i"
            />
        </div>

        <div class="container">

            <div class="project-about">

                <div
                    class="h2"
                    v-animate="'slide-left'"
                >
                    {{ about?.title }}
                </div>

                <div class="project-about-info">

                    <div
                        class="project-about-logo"
                        v-animate="'slide-up'"
                    >
                        <div class="project-main-logo">
                            <span>
                                <InlineSvg
                                    v-if="img_src"
                                    :src="img_src" />
                            </span>
                        </div>
                    </div>

                    <div
                        class="project-about-content"
                        v-html="about?.description"
                        v-animate="'slide-up'"
                    />

                </div>

            </div>

        </div>
    </section>
</template>
