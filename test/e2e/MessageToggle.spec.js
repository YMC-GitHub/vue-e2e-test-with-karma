//----------test-----------
//it is a test file for message-toggle sfc
//----------test-----------
//tasks:
//use vue test-utils
//mount sfc file
//test rendered HTML output of some component
//simulating User Interaction
//mount a component without rendering its child components

//include some lib
import { expect } from 'chai'
import { shallowMount, mount } from '@vue/test-utils'
import Vue from 'vue'
//include some file to test
import MessageToggle from '@/components/MessageToggle.vue'
import Message from '@/components/Message.vue'

describe('MessageToggle.vue', () => {
  it('toggles msg passed to Message when button is clicked with asnc/await', () => {
    //use Vue.nextTick()
    //get value from dom in fact
    //:ok
    //get some wrapper  by wrapper.find()
    const wrapper = mount(MessageToggle)
    const button = wrapper.find('#toggle-message')
    const MessageSFC = wrapper.find(Message)
    button.trigger('click');
    //await Vue.nextTick()
    expect(MessageSFC.text()).to.equal('message')
    expect(MessageSFC.props()).to.deep.equal({ msg: 'message' });
    expect(MessageSFC.vm.msg).equal('message')
    button.trigger('click');
    //await Vue.nextTick()
    expect(MessageSFC.text()).to.equal('toggled message')
    expect(MessageSFC.props()).to.deep.equal({ msg: 'toggled message' })
    expect(MessageSFC.vm.msg).to.equal('toggled message')
  })

})
