<script setup>
import CodeBlock from '@/components/Common/CodeBlock.vue'

const props = defineProps({
    stepInfo: Object,
    index: Number
})
</script>

<template>
    <div class="testnet-installation-guide-step">

        <div class="h3">{{ index }}. {{ stepInfo.title }}</div>

        <div
            v-if="stepInfo.help_text"
            class="testnet-installation-guide-step-help">
            <div
                class="testnet-installation-guide-step-help-content"
                v-html="stepInfo.help_text"
            />
        </div>

        <div class="testnet-installation-guide-step-codes">

            <div
                v-for="code in stepInfo.codes"
                :key="code.id"
                class="testnet-installation-guide-code">

                <div class="h5">{{ code.title }}</div>

                <CodeBlock :code="code.code"/>

            </div>

        </div>

    </div>
</template>
