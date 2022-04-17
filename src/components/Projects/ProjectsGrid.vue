<script setup>
import { ref, onUnmounted } from 'vue'
import ProjectCard from '@/components/Projects/ProjectCard.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    list: Array
})

const isMob = ref(false)
const openFull = ref(false)

function checkMob() {
    isMob.value = window.innerWidth < 768
}

checkMob()

window.addEventListener('resize', checkMob)

onUnmounted(() => {
    window.removeEventListener('resize', checkMob)
})
</script>

<template>
    <div
        class="projects-grid"
        v-animate="'animate-cards'">

        <ProjectCard
            v-for="(project, idx) in list"
            v-show="isMob ? (openFull ? true : idx < 4) : true"
            :key="idx"
            :item="project"
            :style="{transitionDelay: (idx * 0.2) + 's'}"
        />

        <button
            v-if="isMob && !openFull"
            class="btn btn-block open-full-projects-btn"
            @click="openFull = true">
            {{ t('projects_cards.open_all') }}
        </button>

    </div>
</template>
