import { mount } from '@vue/test-utils'
import Todo from '../src/components/Todo.vue'

describe('Todo', () => {
    test('is a Todo', () => {
        const wrapper = mount(Todo)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})