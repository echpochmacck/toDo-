<template>
  <AppTextField
    v-model="query"
    placeholder="Поиск задач..."
    prepend-inner-icon="mdi-magnify"
    hide-details
    density="compact"
    variant="outlined"
    rounded="lg"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AppTextField } from '@/shared/ui'

const query = ref('')
</script>
