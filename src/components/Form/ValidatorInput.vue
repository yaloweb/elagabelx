<script setup>
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
    name: String,
    address: String
})

const input = ref(null)

const selected = ref(false)

function copyAddress() {
    input.value?.select()
    document.execCommand('copy')
    selected.value = true
    setTimeout(() => {
        selected.value = false
    }, 1000)
}

</script>

<template>
    <div class="validator-input">

        <div class="validator-input-head">
            <div class="validator-input-head-name">
                {{ t('project_page.validator_name') }} <span>{{ name }}</span>
            </div>
            <div class="validator-input-head-address">
                {{ t('project_page.validator_address') }}
            </div>
        </div>

        <div class="validator-input-body">

            <div class="validator-input-body-name">
                {{ name }}
            </div>

            <div
                class="validator-input-body-address"
                :data-title="t('project_page.validator_address')">
                <div class="validator-input-body-address-row">
                    <input
                        ref="input"
                        type="text"
                        :value="address"
                        class="validator-input-body-address-input"
                    >
                    <div
                        class="validator-input-body-address-value"
                        :class="{'selected': selected}">
                        {{ address }}
                    </div>
                    <button
                        class="validator-input-body-address-btn"
                        @click="copyAddress">
                        <span class="icon-copy" />
                    </button>
                </div>
            </div>

        </div>

    </div>
</template>
