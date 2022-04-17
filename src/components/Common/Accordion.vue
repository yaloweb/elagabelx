<script setup>
import AccordionItem from '@/components/Common/AccordionItem.vue'

const props = defineProps({
    list: Array
})
</script>

<template>
    <div class="accordion">

        <AccordionItem
            v-for="(item, idx) in list"
            :key="idx"
            :item="item" />

    </div>
</template>
