const expect = chai.expect;
import Vue from 'vue'
import Toast from '../src/components/toast'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('', () => {
  it('存在', () => {
    expect(Toast).to.exist
  })
  describe('props', () => {
    it('接受 autoClose', (done) => {
      let div = document.createElement('div')
      document.body.appendChild(div)
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          autoClose: 1,
        }
      }).$mount(div)
      setTimeout(() => {
        expect(document.body.contains(vm.$el)).to.eq(false)
        done()
      }, 1500)
    })

    it('接受 closeButton', (done) => {
      const callback = sinon.fake()
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          closeButton: {
            text: '关闭吧',
            callback: callback,
          }
        }
      }).$mount()
      let closeButton = vm.$el.querySelector('.close')
      expect(closeButton.textContent.trim()).to.eq('关闭吧')
      setTimeout(() => {
        closeButton.click()
        expect(callback).to.have.been.called
        done()
      }, 200)
    })

    it('接受 enableHTML', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          enableHTML: true,
        }
      })
      vm.$slots.default = [`<strong id="hihi">hi</strong>`]
      vm.$mount()
      let strong = vm.$el.querySelector('#hihi')
      expect(strong).to.exist
    })
    it('接受 position', () => {
      const Constructor = Vue.extend(Toast)
      const vm = new Constructor({
        propsData: {
          position: 'bottom',
        }
      })
      vm.$mount()
      expect(vm.$el.classList.contains('position-bottom')).to.eq(true)
    })


  })
})