<template>
  <v-textarea class="custom-textarea" v-bind="$attrs" :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)" />
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: string
}>()

defineEmits<{
  'update:modelValue': [value: string]
}>()
</script>

<style scoped lang="css">
.custom-textarea :deep(.v-field__overlay) {
  display: none;
}

.custom-textarea :deep(.v-input__control) {
  background-color: transparent !important;
  border: 1px rgba(168, 168, 168, .4) solid;
  opacity: 1;
  border-radius: 10px !important;
  transition: border-color 0.2s;
}

.custom-textarea:focus-within :deep(.v-input__control) {
  border-color: #4f46e5;
}

.custom-textarea :deep(.v-field__outline) {
  display: none;
}

.custom-textarea :deep(textarea) {
  padding-inline: 12px !important;
  background-color: transparent;
}

.custom-textarea :deep(textarea:active),
.custom-textarea :deep(textarea:focus) {
  outline: none;
}

.custom-textarea :deep(.v-label) {
  display: none;
}
</style>
