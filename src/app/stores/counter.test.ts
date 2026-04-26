import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCounterStore } from './counter'

describe('useCounterStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('starts at zero', () => {
    const store = useCounterStore()
    expect(store.count).toBe(0)
  })

  it('increments', () => {
    const store = useCounterStore()
    store.increment()
    expect(store.count).toBe(1)
  })

  it('decrements', () => {
    const store = useCounterStore()
    store.decrement()
    expect(store.count).toBe(-1)
  })
})
