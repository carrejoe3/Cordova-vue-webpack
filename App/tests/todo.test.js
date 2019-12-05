import { mount } from '@vue/test-utils'
import Todo from '../src/components/Todo.vue'

describe('Todo', () => {
    test('Is Todo a vue instance?', () => {
        const wrapper = mount(Todo)
        expect(wrapper.isVueInstance()).toBeTruthy()
    })
})