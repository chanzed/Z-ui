import Toast from '../components/toast'
function createToast({ Vue, message, propsData }) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({
    propsData: propsData,
  })
  toast.$slots.default = [message]
  toast.$mount()
  document.body.appendChild(toast.$el)
  console.log(1)
  return toast
}
let currentToast
export default {
  install(Vue, options) {
    //   console.log('hello')
    Vue.prototype.$toast = function (message, toastOptions) {
      if (currentToast) {
        currentToast.close()
        console.log('hi')
      }
      currentToast = createToast({ Vue: Vue, message: message, propsData: toastOptions })
      console.log(currentToast)
    }
  }
}