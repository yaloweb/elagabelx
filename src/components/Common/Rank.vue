<script setup>
const props = defineProps({
    rank: Object,
    title: String
})
</script>

<template>
    <div
        class="rank"
        :class="rank.type">
        <img
            v-if="rank.type === 'expert'"
            src="/img/icons/fire.svg" alt="">
        <span>
            {{ title || rank.title }}
        </span>
    </div>
</template>
