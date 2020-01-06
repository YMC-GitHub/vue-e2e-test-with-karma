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
import App from '@/App.vue'
import MessageToggle from '@/components/MessageToggle.vue'
import Message from '@/components/Message.vue'
import List from "@/components/List.vue";


describe('MessageToggle.vue', () => {
  it('toggles msg passed to Message when button is clicked with asnc/await', () => {
    //use Vue.nextTick()
    //get value from dom in fact
    //:ok
    //get some wrapper  by wrapper.find()
    const wrapper = mount(App)

    const button = wrapper.find('#toggle-message')
    const MessageSFC = wrapper.find(Message)
    expect(MessageSFC.text()).to.equal('default message')
    expect(MessageSFC.props()).to.deep.equal({ msg: null });
    expect(MessageSFC.vm.msg).equal(null)
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
    //set instance 's data
    //MessageSFC.setData({ msg: 'message' })
    //expect(MessageSFC.vm.msg).to.equal('message')

    const items = ['list item 1', 'listen item 2']
    //test rendered HTML output of some component
    const li = wrapper.findAll('li').at(0)
    expect(li.isVueInstance()).to.equal(false)
    //check ele 's tag
    expect(li.is('li')).to.equal(true)
    expect(li.name()).to.equal('li')
    //check ele 's id
    expect(li.attributes().id).to.equal(undefined)
    //check ele 's class
    expect(li.classes('some name')).to.equal(false)
    //check ele 's content
    expect(li.contains('p')).to.equal(false)
    expect(li.html()).to.equal('<li>list item 1</li>')
    expect(li.text()).to.equal('list item 1')
    //does not contain child node?
    expect(li.isEmpty()).to.equal(false)
    // has display: none or visibility: hidden style?
    expect(li.isVisible()).to.equal(true)
  })

})
