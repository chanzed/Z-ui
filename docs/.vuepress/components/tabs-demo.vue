<template>
  <div class="demo">
    <h1>Tabs 标签</h1>
    <h2>基本用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-tabs selected="2">
          <z-tabs-head>
            <z-tabs-item name="1">1</z-tabs-item>
            <z-tabs-item name="2">2</z-tabs-item>
          </z-tabs-head>
          <z-tabs-body>
            <z-tabs-pane name="1">content 1</z-tabs-pane>
            <z-tabs-pane name="2">content 2</z-tabs-pane>
          </z-tabs-body>
        </z-tabs>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(0)" ref="xxx">
        <z-icon class="icon-down" :name="isShow[0] === false ? 'down' : 'up'"></z-icon>
        <span class="lock-code-word">{{isShow[0] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>
<script>
  import ZTabs from '../../../src/components/tabs'
  import ZTabsBody from '../../../src/components/tabs-body'
  import ZTabsHead from '../../../src/components/tabs-head'
  import ZTabsItem from '../../../src/components/tabs-item'
  import ZTabsPane from '../../../src/components/tabs-pane'
  import ZIcon from '../../../src/components/icon'
  import mixin from '../mixin'
  export default {
    components: {ZTabs, ZTabsBody, ZTabsHead, ZTabsItem, ZTabsPane, ZIcon},
    mixins: [mixin],
    data () {
      return {
        selected: '1',
        codeStr: `
          data:{
            selected: '1'
          }
          <z-tabs :selected="selected">
            <z-tabs-head>
              <z-tabs-item name="1">1</z-tabs-item>
              <z-tabs-item name="2">2</z-tabs-item>
            </z-tabs-head>
            <z-tabs-body>
              <z-tabs-pane name="1">content 1</z-tabs-pane>
              <z-tabs-pane name="2">content 2</z-tabs-pane>
            </z-tabs-body>
          </z-tabs>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>