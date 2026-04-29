import { describe, expect, it, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import CreateTaskForm from './CreateTaskForm.vue'
import { nextTick } from 'vue'

// vi.mock('@/shared/ui', () => {
//     return {
//         AppTextField: vi.fn(),
//         AppTextarea: vi.fn(),
//         AppSelect: vi.fn()
//     }
// })



describe('Create Task form test', () => {
    it('render Test', async () => {
        const component = await mount(CreateTaskForm)
        expect(component.exists()).toBe(true)
    })
    it('button render Test', async () => {
        const component = await mount(CreateTaskForm)
        const btn = component.find('#form-btn')
        expect(btn.exists()).toBe(true)
    })

    it('empty fields test', async () => {
        const wrapper = await mount(CreateTaskForm)
        const titleField = wrapper.find('#title-field')
        const descriptionField = wrapper.find('#description-field')
        const btn = await wrapper.find('#form-btn')
        await btn.trigger('click')
        await nextTick()
        expect(wrapper.find('#title-field-messages').text()).toEqual("Value is required")

    })
})