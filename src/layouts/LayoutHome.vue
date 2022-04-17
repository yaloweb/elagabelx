<script setup>
import Header from '@/components/Layout/Header.vue'
import Footer from '@/components/Layout/Footer.vue'
</script>

<template>

    <div class="wrapper">

        <Header
            :whiteLogo="true"
            class="header-home"/>

        <slot />

        <Footer />

    </div>

</template>
