import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Counter from '../src/Counter.vue'

describe('Counter.vue', () => {
  it('increments count when button is clicked', () => {
    const wrapper = shallowMount(Counter)
    let button = wrapper.find('button')
    button.trigger('click')
    let div = wrapper.find('div')
    expect(div.text()).contains('1')
  })
})
