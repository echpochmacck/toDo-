<template>
  <v-text-field class="custom-text-field" v-bind="$attrs" :model-value="modelValue"
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
.custom-text-field :deep(.v-field__overlay) {
 display: none;
}

.custom-text-field :deep(.v-input__control) {
  background-color: transparent !important;
  border: 1px rgba(168, 168, 168, .4) solid;
  opacity: 1;
  border-radius: 10px !important;
  height: 46px;
  transition: border-color 0.2s;
}

.custom-text-field:focus-within :deep(.v-input__control) {
  border-color: #4f46e5;
}

.custom-text-field :deep(.v-field__field) {
  height: 46px;
  display: flex;
  align-items: center;
}

.custom-text-field :deep(.v-field__outline) {
  display: none;
}

.custom-text-field :deep(input) {
  padding-block: 0 !important;
  padding-inline: 12px !important;
  background-color: transparent;
}

.custom-text-field :deep(input:active),
.custom-text-field :deep(input:focus) {
  outline: none;
}

.custom-text-field :deep(.v-label) {
  display: none;
}
</style>