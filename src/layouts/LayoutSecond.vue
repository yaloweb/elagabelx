<script setup>
import SecondHeader from '@/components/Layout/SecondHeader.vue'
import SecondFooter from '@/components/Layout/SecondFooter.vue'
</script>

<template>

    <div class="second-wrapper">

        <SecondHeader/>

        <slot />

        <SecondFooter />

    </div>

</template>
