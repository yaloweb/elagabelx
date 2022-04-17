<script setup>
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
</script>

<template>

    <div class="wrapper">

        <Header/>

        <slot />

        <Footer />

    </div>

</template>
