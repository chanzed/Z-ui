import Vue from 'vue'
import Button from './components/button'
import Icon from './components/icon'
import ButtonGroup from './components/button-group'
import Input from './components/input'
import Row from './components/row'
import Col from './components/col'
import plugin from './assets/plugin'

import Layout from './components/layout'
import Header from './components/header'
import Content from './components/content'
import Sider from './components/sider'
import Footer from './components/footer'

Vue.component('z-button', Button)
Vue.component('z-icon', Icon)
Vue.component('z-button-group', ButtonGroup)
Vue.component('z-input', Input)
Vue.component('z-row', Row)
Vue.component('z-col', Col)

Vue.component('z-layout', Layout)
Vue.component('z-header', Header)
Vue.component('z-content',Content)
Vue.component('z-sider', Sider)
Vue.component('z-footer', Footer)
Vue.use(plugin)
var app = new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: false,
    message: '我是toast'
  },
  methods: {
    showToast() {
      this.$toast(this.message)
    }
  }
})