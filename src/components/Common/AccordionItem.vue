<script setup>
import { ref } from 'vue'

const maxHeight = ref('auto')
const content = ref(null)
const opened = ref(false)

function setMaxHeight() {
    maxHeight.value = content.value ? content.value.offsetHeight : 'auto'
}

const props = defineProps({
    item: Object
})

function toggleAccordion() {
    opened.value = !opened.value
    setMaxHeight()
}
</script>

<template>
    <div
        class="accordion-item"
        :class="{'opened': opened}"
        v-animate="'slide-up'">

        <div class="accordion-item-body">

            <div
                class="accordion-item-question"
                @click="toggleAccordion">

                <div class="accordion-item-icon">
                    <span />
                </div>

                <div class="accordion-item-question-value">
                    {{ item.question }}
                </div>
            </div>

            <div
                class="accordion-item-answer"
                :style="{maxHeight: `${maxHeight || 0}px`}">
                <div
                    class="accordion-item-answer-content"
                    ref="content">
                    {{ item.answer }}
                </div>
            </div>

        </div>

    </div>
</template>
