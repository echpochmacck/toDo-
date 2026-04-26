<template>
  <AppTextField
    v-model="query"
    placeholder="Поиск..."
    hide-details
    density="compact"
    variant="outlined"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { AppTextField } from '@/shared/ui'

const query = ref('')
</script>
