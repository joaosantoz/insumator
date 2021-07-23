import { shallowMount } from '@vue/test-utils';
import HelloWorld from '@/components/HelloWorld/HelloWorld.vue';


describe('HelloWorld.vue', () => {

  const wrapper = shallowMount(HelloWorld);

  it('A contagem de links está correta', () => {
    expect(wrapper.vm.$data.linkCount).toBe(0);
  });

  it('Após uma filtragem o número de links está correto', () => {

    wrapper.find('button').trigger('click');
    expect(wrapper.vm.$data.linkCount).toBe(105)

  })

});
