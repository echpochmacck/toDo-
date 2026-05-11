<script setup lang="ts">
import { TaskList } from '@/widgets/task-list'
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12">
        <h1 class="text-h4 mb-4">Tasks</h1>
        <TaskList />
      </v-col>
    </v-row>
  </v-container>
</template>
