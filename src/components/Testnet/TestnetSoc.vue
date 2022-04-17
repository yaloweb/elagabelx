<script setup>
const props = defineProps({
    list: Array
})
</script>

<template>
    <nav class="testnet-block-soc">
        <a
            v-for="socLink in list"
            :key="socLink.id"
            :href="socLink.url"
            class="footer-soc-nav-link"
            target="_blank">
            <span class="footer-soc-nav-link-icon">
                <span :class="`icon-${socLink.name}`" />
                <span :class="['gradient', `icon-${socLink.name}`]" />
            </span>
        </a>
    </nav>
</template>
