<script setup>
function pageUp() {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
}
</script>

<template>
    <a
        href="#"
        class="footer-up-btn"
        @click.prevent="pageUp">
        <span class="icon-arrow-up" />
    </a>
</template>
