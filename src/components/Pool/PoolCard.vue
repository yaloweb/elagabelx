<script setup>
import { computed } from 'vue'
import InlineSvg from 'vue-inline-svg'
import TestnetSoc from '@/components/Testnet/TestnetSoc.vue'

const props = defineProps({
    item: Object
})

const getTotal = computed(() => {
    const total = props.item.total_stake
    const parts = total ? total.toString().split('.') : '.'
    return parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + (parts[1] ? '.' + parts[1] : '')
})
</script>

<template>
    <div class="pool-card">

        <div class="pool-card-img">
            <img
                :src="item.img_src"
                alt="">
        </div>

        <div class="pool-card-body">

            <div class="pool-card-service">

                <div class="h3">
                    {{ item.title }}
                </div>

                <p v-html="item.description" />

                <div class="pool-card-cases">

                    <div class="h6">Наши кейсы</div>

                    <nav class="pool-card-cases-list">
                        <RouterLink
                            v-for="caseItem in item.cases"
                            :key="caseItem.id"
                            :to="`/projects/${caseItem.id}`"
                            class="pool-card-cases-item"
                        >
                            <InlineSvg :src="caseItem.img_src" />
                        </RouterLink>
                    </nav>

                </div>

            </div>

            <div class="pool-card-stake">

                <div class="pool-card-stake-title">Total Stake</div>

                <div class="pool-card-stake-total">
                    {{ getTotal }} $
                </div>

                <div class="pool-card-stake-site-url">
                    <a
                        :href="item.site_url"
                        target="_blank">
                        {{ item.site_url }}
                    </a>
                </div>

                <div class="pool-card-stake-soc">
                    <TestnetSoc
                        v-if="item.soc"
                        :list="item.soc"
                    />
                </div>

            </div>

        </div>

    </div>
</template>
