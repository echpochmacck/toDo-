import { createTestingPinia } from '@pinia/testing'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { mount, VueWrapper } from '@vue/test-utils'
import CreateTaskForm from './CreateTaskForm.vue'
import { ComponentPublicInstance, nextTick } from 'vue'
import { useTaskStore } from '@/entities/task'
import { setActivePinia } from 'pinia'


describe('Create Task form test', () => {
    let wrapper: VueWrapper<ComponentPublicInstance>
    let taskStore: ReturnType<typeof useTaskStore>
    beforeEach(() => {
        const pinia = createTestingPinia({ stubActions: false })
        setActivePinia(pinia)
        wrapper = mount(CreateTaskForm, {
            global: {
                plugins: [pinia]
            }
        })
        taskStore = useTaskStore()
    })
    it('render Test', async () => {
        expect(wrapper.exists()).toBe(true)
    })
    it('button render Test', async () => {

        const btn = wrapper.find('#form-btn')
        
        expect(btn.exists()).toBe(true)
    })

    it('empty fields test', async () => {
        const btn = await wrapper.find('#form-btn')
        await btn.trigger('click')
        await nextTick()
        expect(wrapper.find('#title-field-messages').text()).toEqual("Value is required")

    })
    it('close emit test',async  () => {
        const btn = wrapper.find('#close-btn')
        await btn.trigger('click')
        await nextTick()
        console.log(wrapper.emitted())
        expect(wrapper.emitted()).toHaveProperty('close')
    })
    it('create task test', async () => {
        const vm = wrapper.vm as any
        vm.form.title = 'Test title'
        vm.form.description = 'Test description'
        await nextTick()
        await vm.submit()
        await nextTick()
        expect(taskStore.tasks[taskStore.tasks.length - 1]).toMatchObject({ title: 'Test title', description: 'Test description' })
    })
    
})