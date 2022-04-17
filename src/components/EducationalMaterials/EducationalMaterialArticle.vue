<script setup>
import { format } from 'date-fns'
import { computed } from 'vue'
import Rank from '@/components/Common/Rank.vue'

const props = defineProps({
    item: Object
})

const filterDate = computed(() => {
    if (props.item.date) {
        return format(new Date(props.item.date), 'dd.MM.yyyy')
    } else {
        return ''
    }
})

</script>

<template>
    <div class="educational-material-article">

        <RouterLink :to="`/educational-materials/${item.id}`" />

        <div class="educational-material-article-rank">
            <Rank
                v-if="item.rank"
                :rank="item.rank" />
        </div>

        <div class="educational-material-article-date">
            {{ filterDate }}
        </div>

        <div class="educational-material-article-title">
            {{ item.title}}
        </div>

        <div class="educational-material-article-description">
            {{ item.description }}
        </div>

        <div class="educational-material-article-link-icon">
            <span class="icon-angle-right" />
        </div>

    </div>
</template>
