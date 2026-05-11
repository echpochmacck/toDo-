<script setup lang="ts">
import { useTaskStore, type TaskStatus } from '@/entities/task'

const taskStore = useTaskStore()

const headers = [
  { title: 'Title', key: 'title', sortable: true },
  { title: 'Description', key: 'description', sortable: false },
  { title: 'Status', key: 'status', sortable: true },
  { title: 'Created', key: 'createdAt', sortable: true },
]

const statusConfig: Record<TaskStatus, { label: string; color: string }> = {
  'todo': { label: 'To Do', color: 'warning' },
  'in-progress': { label: 'In Progress', color: 'info' },
  'done': { label: 'Done', color: 'success' },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}
</script>

<template>
  <v-data-table
    :headers="headers"
    :items="taskStore.tasks"
    :items-per-page="-1"
    hide-default-footer
    class="task-table"
    no-data-text="No tasks yet. Create your first task!"
  >
    <template #item.status="{ item }">
      <v-chip
        :color="statusConfig[item.status].color"
        size="small"
        variant="tonal"
      >
        {{ statusConfig[item.status].label }}
      </v-chip>
    </template>

    <template #item.createdAt="{ item }">
      {{ formatDate(item.createdAt) }}
    </template>

    <template #item.description="{ item }">
      <span class="description-cell">{{ item.description }}</span>
    </template>
  </v-data-table>
</template>

<style scoped>
.task-table {
  border-radius: 12px;
}

.description-cell {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  max-width: 320px;
}
</style>
