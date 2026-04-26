import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Task, TaskStatus } from './types'

export const useTaskStore = defineStore('task', () => {
  const tasks = ref<Task[]>([])

  const getById = computed(() => (id: string) => tasks.value.find(t => t.id === id))
  const getByStatus = computed(() => (status: TaskStatus) => tasks.value.filter(t => t.status === status))

  function add(payload: Omit<Task, 'id' | 'createdAt'>) {
    tasks.value.push({
      ...payload,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    })
  }

  function update(id: string, patch: Partial<Omit<Task, 'id' | 'createdAt'>>) {
    const task = tasks.value.find(t => t.id === id)
    if (task) Object.assign(task, patch)
  }

  function remove(id: string) {
    tasks.value = tasks.value.filter(t => t.id !== id)
  }

  return { tasks, getById, getByStatus, add, update, remove }
})
