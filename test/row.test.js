const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/components/row'
import Col from '../src/components/col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Row', () => {
  it("存在", () => {
    expect(Row).to.exist
  })
  
  it("接受gutter属性", (done) => {
    Vue.component('z-col', Col)
    Vue.component('z-row', Row)
    const div = document.createElement('div')
    document.body.appendChild(div)
    div.innerHTML = `
      <z-row gutter='20'>
        <z-col span="12"></z-col>
        <z-col span="12"></z-col>
      </z-row>
    `
    const vm = new Vue({
      el: div,
    })
    setTimeout(() => {
      const cols = vm.$el.querySelectorAll('.col')
      expect(getComputedStyle(cols[0]).paddingLeft).to.eq('10px')
      expect(getComputedStyle(cols[1]).paddingRight).to.eq('10px')

      const row = vm.$el.querySelector('.row')
      expect(getComputedStyle(row).marginLeft).to.eq('-10px')
      expect(getComputedStyle(row).marginRight).to.eq('-10px')
      vm.$el.remove()
      vm.$destroy()
      done()
    })
  })

  it("接受align属性", () => {
    const div = document.createElement('div')
    document.body.appendChild(div)
    const RowConstructor = Vue.extend(Row)
    const row = new RowConstructor({
      propsData: {
        align: 'center',
      }
    }).$mount(div)
    const element = row.$el
    expect(getComputedStyle(element).justifyContent).to.eq('center')
    row.$el.remove()
    row.$destroy()
  })
})