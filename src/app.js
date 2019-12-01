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
import Tabs from './components/tabs'
import TabsHead from './components/tabs-head'
import TabsBody from './components/tabs-body'
import TabsPane from './components/tabs-pane'
import TabsItem from './components/tabs-item'
import Popover from './components/popover'
import Collapse from './components/collapse'
import CollapseItem from './components/collapse-item'

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
Vue.component('z-tabs', Tabs)
Vue.component('z-tabs-head', TabsHead)
Vue.component('z-tabs-body', TabsBody)
Vue.component('z-tabs-item', TabsItem)
Vue.component('z-tabs-pane', TabsPane)
Vue.component('z-popover', Popover)
Vue.component('z-collapse', Collapse)
Vue.component('z-collapse-item', CollapseItem)

var app = new Vue({
  el: '#app',
  data: {
    selectedTag: ['1']
  },
  mounted() {
  },
  methods: {
    showToast() {
      this.$toast(`<a href="https://www.baidu.com">百度一下</a>`, {
        closeButton: {
          text: '你好'
        },
        position: 'bottom',
        enableHTML: false,
      })
    }
  }
})