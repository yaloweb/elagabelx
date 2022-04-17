<script setup>
import PoolList from '@/components/Pool/PoolList.vue'
</script>

<template>
    <div
        class="pool-page"
        v-animate="'pool-page-animate'">

        <div class="page-title-center">
            <div class="container">
                <h1>POOL</h1>
            </div>
        </div>

        <section class="s-pool">
            <div class="container">

                <PoolList />

            </div>
        </section>

    </div>
</template>
