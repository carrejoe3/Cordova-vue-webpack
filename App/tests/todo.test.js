import { shallowMount } from '@vue/test-utils'
import Todo from '../src/components/Todo'

describe('Todo.vue', () => {
  it('Does the Todo component exist?', () => {
    const msg = 'The Todo component exists!'
    const wrapper = shallowMount(Todo, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})