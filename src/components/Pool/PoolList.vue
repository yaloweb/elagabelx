<script setup>
import { usePoolStore } from '@/stores/pool'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
import PoolCard from '@/components/Pool/PoolCard.vue'

const poolStore = usePoolStore()

const { poolList } = storeToRefs(poolStore)

function loadMore() {
    poolStore.getMorePoolList()
}

onMounted(() => {
    poolStore.getPoolList()
})
</script>

<template>
    <div class="pool-list-wrapper">

        <div class="pool-list">

            <PoolCard
                v-for="(pool, idx) in poolList"
                :key="pool.id"
                :item="pool"
                :style="{transitionDelay: (idx * 0.4 + 1) + 's'}"
            />

        </div>

        <div class="pool-list-more">
            <button
                class="btn btn-block btn-gray"
                @click="loadMore">загрузить еще</button>
        </div>

    </div>
</template>
