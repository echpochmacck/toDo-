<template>
  <v-select class="custom-select" v-bind="$attrs" :model-value="modelValue"
    @update:model-value="$emit('update:modelValue', $event)" />
</template>

<script setup lang="ts">
defineProps<{
  modelValue?: unknown
}>()

defineEmits<{
  'update:modelValue': [value: unknown]
}>()
</script>

<style scoped lang="css">
.custom-select :deep(.v-field__overlay) {
  display: none;
}

.custom-select :deep(.v-input__control) {
  background-color: transparent !important;
  border: 1px rgba(168, 168, 168, .4) solid;
  border-radius: 10px !important;
  height: 46px;
  transition: border-color 0.2s;
}

.custom-select:focus-within :deep(.v-input__control) {
  border-color: #4f46e5;
}

.custom-select :deep(.v-field__field) {
  height: 46px;
  display: flex;
  align-items: center;
}

.custom-select :deep(.v-field__input) {
  padding-block: 0 !important;
  padding-inline: 12px !important;
  min-height: unset !important;
}

.custom-select :deep(.v-field__append-inner) {
  padding-top: 0 !important;
  align-self: center;
}

.custom-select :deep(.v-field__outline) {
  display: none;
}

.custom-select :deep(.v-label) {
  display: none;
}
</style>
