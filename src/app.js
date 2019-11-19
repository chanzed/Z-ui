import Vue from 'vue'
import Button from './components/button'
import Icon from './components/icon'

Vue.component('z-button', Button)
Vue.component('z-icon', Icon)

new Vue({
  el: '#app',
})