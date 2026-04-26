import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useTaskStore } from './store'

describe('useTaskStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('starts empty', () => {
    expect(useTaskStore().tasks).toHaveLength(0)
  })

  it('adds a task', () => {
    const store = useTaskStore()
    store.add({ title: 'Test', description: '', status: 'todo' })
    expect(store.tasks).toHaveLength(1)
    expect(store.tasks[0].title).toBe('Test')
    expect(store.tasks[0].id).toBeTruthy()
    expect(store.tasks[0].createdAt).toBeTruthy()
  })

  it('updates a task', () => {
    const store = useTaskStore()
    store.add({ title: 'Test', description: '', status: 'todo' })
    const { id } = store.tasks[0]
    store.update(id, { status: 'done' })
    expect(store.tasks[0].status).toBe('done')
  })

  it('removes a task', () => {
    const store = useTaskStore()
    store.add({ title: 'Test', description: '', status: 'todo' })
    const { id } = store.tasks[0]
    store.remove(id)
    expect(store.tasks).toHaveLength(0)
  })

  it('getById returns correct task', () => {
    const store = useTaskStore()
    store.add({ title: 'A', description: '', status: 'todo' })
    const { id } = store.tasks[0]
    expect(store.getById(id)?.title).toBe('A')
  })

  it('getByStatus filters correctly', () => {
    const store = useTaskStore()
    store.add({ title: 'A', description: '', status: 'todo' })
    store.add({ title: 'B', description: '', status: 'done' })
    expect(store.getByStatus('todo')).toHaveLength(1)
    expect(store.getByStatus('done')).toHaveLength(1)
  })
})
