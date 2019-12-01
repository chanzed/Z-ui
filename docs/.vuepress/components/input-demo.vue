<template>
  <div class="demo">
    <h1>Input 输入框</h1>
    <h2>基本用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-input></z-input>
        <z-input value="中文"></z-input>
        <z-input value="中文" disabled></z-input>
        <z-input value="a" :error="`用户名不能少于两位`"></z-input>      
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

    <h2>双向绑定</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-input v-model="value"></z-input>
        <div style="margin-top: 20px">
          value: {{value}}
        </div>
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
  import ZInput from '../../../src/components/input'
  import ZIcon from '../../../src/components/icon'
  import mixin from '../mixin'
  export default {
    components: {ZInput, ZIcon},
    mixins: [mixin],
    data () {
      return {
        value: '1',
        selected: '1',
        codeStr: `
          <z-input></z-input>
          <z-input value="中文"></z-input>
          <z-input value="中文" disabled></z-input>
          <z-input value="a" :error="用户名不能少于两位"></z-input>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
          data:{
            value: '1'
          }
          <z-input v-model="value"></z-input>
          <div style="margin-top: 20px">
            value: {{value}}
          </div>
        `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>