<script setup>
const props = defineProps({
    title: String,
    value: String,
    name: String,
    modelValue: String
})

const emit = defineEmits(['update:modelValue'])

const updateValue = (event) => {
    emit('update:modelValue', event.target.value)
}

</script>

<template>
    <div class="form-radio">
        <label>
            <input
                type="radio"
                :name="name"
                :value="value"
                @change="updateValue"
                :checked="modelValue === value">
            <span>{{ title }}</span>
        </label>
    </div>
</template>
