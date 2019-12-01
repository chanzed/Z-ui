<template>
  <div class="demo">
    <h1>Icon 图标</h1>
    <h2>基本用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-icon name="info"></z-icon>
        <z-icon name="thumbs-up"></z-icon>
        <z-icon name="settings"></z-icon> 
        <z-icon name="download"></z-icon> 
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
  import ZButton from '../../../src/components/button'
  import ZIcon from '../../../src/components/icon'
  import mixin from '../mixin'
  export default {
    name: 'demo',
    mixins: [mixin],
    components: {
      ZButton,
      ZIcon
    },
    data() {
      return {
        codeStr: `
          <z-icon name="info"></z-icon>
          <z-icon name="thumbs-up"></z-icon>
          <z-icon name="settings"></z-icon> 
          <z-icon name="download></z-icon>
        `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>

<style lang="scss" scoped>
.component-wrapper-demo {
  display: flex;
  align-items: center;
  svg {
    font-size: 24px;
    margin: 0 10px;
  }
  button {
    margin: 0 10px;
  }
}
</style>