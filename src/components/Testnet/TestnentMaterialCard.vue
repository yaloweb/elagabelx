<script setup>
import { format } from 'date-fns'
import { computed } from 'vue'
import Rank from '@/components/Common/Rank.vue'

const props = defineProps({
    material: Object
})

const filterDate = computed(() => {
    if (props.material.date) {
        return format(new Date(props.material.date), 'dd.MM.yyyy')
    } else {
        return ''
    }
})

</script>

<template>
    <div class="testnet-material-card">

        <RouterLink
            :to="`/educational-materials/${material.id}`"
            class="testnet-material-card-link"/>

        <div
            v-if="material.rank"
            class="testnet-material-card-rank">
            <Rank :rank="material.rank" />
        </div>

        <div class="testnet-material-card-img">
            <img
                :src="material.img_src"
                alt="">
        </div>

        <div class="testnet-material-card-body">
            <div class="testnet-material-card-date">{{ filterDate }}</div>
            <div class="testnet-material-title">{{ material.title }}</div>
            <div class="testnet-material-description">{{ material.description }}</div>
            <div class="testnet-material-icon">
                <span class="icon-angle-right" />
            </div>
        </div>

    </div>
</template>
