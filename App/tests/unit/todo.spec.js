import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Todo from '@/components/Todo'

describe('Todo.vue', () => {
  const wrapper = shallowMount(Todo, { sync: true })
  it('it contains a button', () => {
    expect(wrapper).contains('button').toBe(true)
  })
})
