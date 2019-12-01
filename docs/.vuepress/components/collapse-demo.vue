<template>
  <div class="demo">
    <h1>Collapse 折叠面板</h1>
    <h2>基本用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-collapse :selected.sync="slectedTabs">
          <z-collapse-item title="标题1" name="1">内容1</z-collapse-item>
          <z-collapse-item title="标题2" name="2">内容2</z-collapse-item>
          <z-collapse-item title="标题3" name="3">内容3</z-collapse-item>
        </z-collapse>
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
    <h2>每次只能展开一个</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-collapse :selected.sync="slectedTabs2" single>
          <z-collapse-item title="标题1" name="1">内容1</z-collapse-item>
          <z-collapse-item title="标题2" name="2">内容2</z-collapse-item>
          <z-collapse-item title="标题3" name="3">内容3</z-collapse-item>
        </z-collapse>
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
  import ZCollapse from '../../../src/components/collapse'
  import ZCollapseItem from '../../../src/components/collapse-item'
  import ZIcon from '../../../src/components/icon'
  import mixin from '../mixin'
  export default {
    components: {
      ZCollapse,
      ZCollapseItem,
      ZIcon
    },
    mixins: [mixin],
    data () {
      return {
        codeStr: `
          <z-collapse :selected.sync="slectedTabs">
            <z-collapse-item title="标题1" name="1">内容1</z-collapse-item>
            <z-collapse-item title="标题2" name="2">内容2</z-collapse-item>
            <z-collapse-item title="标题3" name="3">内容3</z-collapse-item>
          </z-collapse>
      `.replace(/^ {8}/gm, '').trim(),
        slectedTabs: [],
        codeStr2: `
          <z-collapse :selected.sync="slectedTabs" single>
            <z-collapse-item title="标题1" name="1">内容1</z-collapse-item>
            <z-collapse-item title="标题2" name="2">内容2</z-collapse-item>
            <z-collapse-item title="标题3" name="3">内容3</z-collapse-item>
          </z-collapse>
      `.replace(/^ {8}/gm, '').trim(),
        slectedTabs2: []
      }
    }
  }
</script>