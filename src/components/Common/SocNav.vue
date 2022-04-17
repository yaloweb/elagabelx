<script setup>
const props = defineProps({
    links: Array
})
</script>

<template>
    <nav class="soc-nav">
        <a
            v-for="(link, idx) in links"
            :key="idx"
            :href="link.url"
            class="soc-link"
            target="_blank">
            <span :class="`icon-${link.name}`" />
        </a>
    </nav>
</template>
