import Todo from '../components/Todo'
import { shallowMount } from '@vue/test-utils'
import { expect } from 'chai'

describe('Todo Component', () => {
  let component

  beforeEach(() => {
    component = shallowMount(Todo)
  })

  it('Should render a Todo component on mount', () => {
    expect(component.exists()).to.be.true
  })
})
