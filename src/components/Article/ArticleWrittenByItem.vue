<script setup>
const props = defineProps({
    item: Object
})
</script>

<template>
    <div class="article-written-by-item">

        <div class="article-written-by-item-img">
            <img
                :src="item.img_src"
                alt="">
        </div>

        <div class="article-written-by-item-content">
            <div class="article-written-by-item-title">
                {{ item.title }}
            </div>
            <div class="article-written-by-item-description">
                {{ item.description }}
            </div>
        </div>

        <div class="article-written-by-item-link">
            <a
                :href="item.url"
                target="_blank">
                <span class="icon-angle-right" />
            </a>
        </div>

    </div>
</template>
