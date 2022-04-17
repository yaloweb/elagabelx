<script setup>
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useTeamsStore} from '@/stores/teams'
import Teams from '@/components/Sliders/Teams.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const teamsStore = useTeamsStore()

const { teams } = storeToRefs(teamsStore)

onMounted(() => {
    teamsStore.getTeams()
})

</script>

<template>
    <section
        class="s-teams"
        id="team"
    >
        <div class="container">

            <div class="teams-header">

                <div
                    class="teams-header-left"
                    v-animate="'slide-left'">
                    <div class="h2">
                        {{ t('home_page.team.title') }}
                    </div>
                </div>

                <div
                    class="teams-header-right"
                    v-animate="'slide-up'">
                    <p>
                        {{ t('home_page.team.description') }}
                    </p>
                </div>

            </div>

            <div class="teams-body">

                <Teams :list="teams"/>

            </div>

        </div>
    </section>
</template>
