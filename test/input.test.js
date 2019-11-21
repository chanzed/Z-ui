const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/components/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe("Input", () => {
  it("存在", () => {
    expect(Input).to.exist
  })

  describe("props传值", () => {
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(() => {
      vm.$destroy()
    })
    it("接受 value", () => {
      vm = new Constructor({
        propsData: {
          value: '1234'
        }
      })
      vm.$mount()
      const inputElement = vm.$el.querySelector("input")
      expect(inputElement.value).to.equal('1234')
    })

    it("接受 disabled", () => {
      vm = new Constructor({
        propsData: {
          disabled: true
        }
      })
      vm.$mount()
      const inputElement = vm.$el.querySelector("input")
      expect(inputElement.disabled).to.equal(true)
      vm.$destroy()
    })
    it("接受 readonly", () => {
      vm = new Constructor({
        propsData: {
          readonly: true
        }
      })
      vm.$mount()
      const inputElement = vm.$el.querySelector("input")
      expect(inputElement.readOnly).to.equal(true)
      vm.$destroy()
    })
    it("接受 error", () => {
      vm = new Constructor({
        propsData: {
          error: "HelloWorld"
        }
      })
      vm.$mount()
      const useElement = vm.$el.querySelector("use")
      expect(useElement.getAttribute("xlink:href")).to.eq("#i-error")
      const errorMessage = vm.$el.querySelector(".error-message")
      expect(errorMessage.innerText).to.eq("HelloWorld")
      vm.$destroy()
    })
  })
  describe("事件", () => {
    it("支持change/input/blur/focus事件", () => {
      ["input", "change", "blur", "focus"].forEach(eventName => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({})
        vm.$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)

        let event = new Event(eventName)
        let inputElement = vm.$el.querySelector("input")
        inputElement.dispatchEvent(event)
        expect(callback).to.have.been.calledWith(event)
        vm.$destroy()
      })
    })
  })
})