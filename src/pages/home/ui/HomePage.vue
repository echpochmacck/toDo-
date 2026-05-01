<script setup lang="ts">
import { useTaskStore } from '@/entities/task';

const taskStore = useTaskStore()
</script>

<template>
  {{ taskStore.tasks }}
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="8">
        <h1 class="text-h4 mb-4">Home</h1>
      </v-col>
    </v-row>
  </v-container>
</template>
