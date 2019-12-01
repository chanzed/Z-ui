<template>
  <div class="demo">
    <h1>Button 按钮</h1>
    <h2>基本用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-button>默认按钮</z-button>
        <z-button icon="settings">带 icon 按钮</z-button>
        <z-button :loading="true">加载按钮</z-button>
        <z-button disabled>禁用按钮</z-button>
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

    <h2>按钮组</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-button-group>
          <z-button icon="left">
            上一页
          </z-button>
          <z-button>
            更多
          </z-button>
          <z-button icon="right" iconPosition="right">
            下一页
          </z-button>
        </z-button-group>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr2}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(1)" ref="xxx">
        <z-icon class="icon-down" :name="isShow[1] === false ? 'down' : 'up'"></z-icon>
        <span class="lock-code-word">{{isShow[1] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import ZButton from '../../../src/components/button'
  import ZButtonGroup from '../../../src/components/button-group'
  import ZIcon from '../../../src/components/icon'
  import mixin from '../mixin'
  export default {
    name: 'demo',
    mixins: [mixin],
    components: {
      ZButton,
      ZIcon,
      ZButtonGroup
    },
    data() {
      return {
        codeStr: `
          <z-button>默认按钮</z-button>
          <z-button icon="settings">带icon按钮</z-button>
          <z-button :loading="true">加载按钮</z-button>
          <z-button disabled>禁用按钮</z-button>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
          <z-button-group>
            <z-button icon="left">
              上一页
            </z-button>
            <z-button>
              更多
            </z-button>
            <z-button icon="right" iconPosition="right">
              下一页
            </z-button>
          </z-button-group>
          `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>

<style lang="scss" scoped>
</style>