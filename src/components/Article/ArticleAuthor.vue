<script setup>
import Rank from '@/components/Common/Rank.vue'

const props = defineProps({
    name: String,
    imgSrc: String,
    rank: Object
})
</script>

<template>
    <div class="article-author">

        <div
            v-if="imgSrc"
            class="article-author-img">
            <img :src="imgSrc" alt="">
        </div>

        <div class="article-author-info">

            <div class="article-author-name">
                {{ name }}
            </div>

            <div
                v-if="rank"
                class="article-author-rank">
                <Rank :rank="rank"/>
            </div>
        </div>

    </div>
</template>
