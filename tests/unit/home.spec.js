import { createLocalVue, mount } from '@vue/test-utils'
import Home from '../../src/components/HomeContainer/HomeContainer'
import Vuex from 'vuex'
import store from '../../src/store/index'

describe('Testes de store e renderização do componente HomeContainer', () => {
  const localVue = createLocalVue()
  localVue.use(Vuex)
  const HomeComponent = mount(Home, {
    store,
    localVue,
  })

  it('O componente foi criado corretamente', () => {
    expect(HomeComponent.vm.$options.computed).toBeTruthy();
  })

  it('A store do componente foi criada', () => {
    expect(HomeComponent.vm.$store.state).toBeTruthy()
  })

  it('Valores iniciais da store estão corretos', () => {
    expect(HomeComponent.vm.$store.state.regex).toBeFalsy();
    expect(HomeComponent.vm.$store.state.rectIsChecked).toBeFalsy();
  })

  it('Valores data iniciais estão corretos', () => {
    expect(HomeComponent.vm.$data.allLinksList).toBeNull();
    expect(HomeComponent.vm.$data.iconFinderLinks).toStrictEqual([]);
  })

  it('Os itens estão sendo salvos na store após filtragem', () => {
    HomeComponent.find('button').trigger('click')

    expect(HomeComponent.vm.$store.state.allLinksInfo.list).not.toBeNull();
  })

})
