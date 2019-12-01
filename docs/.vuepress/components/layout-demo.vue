<template>
  <div class="demo">
    <h1>Layout 布局</h1>
    <p>容器布局，可快速搭建页面的基本结构，需浏览器支持flex布局。在使用容器布局时，container组件的子组件只能是header，main，footer，sider或container，同时，上述子组件的父组件也只能是container。</p>
    <h2>普通上中下三栏布局</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-layout style="color: white; margin-bottom:50px;">
          <z-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
            header
          </z-header>
          <z-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
            content
          </z-content>
          <z-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
            footer
          </z-footer>
        </z-layout>        
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

    <h2>上中下三栏布局，主体部分带侧边栏</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-layout style="color: white; overflow:hidden; margin-bottom:50px;">
          <z-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
            header
          </z-header>
          <z-layout>
            <z-sider style="display:flex;justify-content: center;align-items: center;height: 100px; background:#03a9f4d9; width:200px; color: white;">
              sider
            </z-sider>
            <z-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
              content
            </z-content>
          </z-layout>
          <z-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
            footer
          </z-footer>
        </z-layout>
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


    <h2>左右布局，主体部分分为上中下三部分</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-layout style="color: white; overflow:hidden; margin-bottom:50px;">
          <z-sider style=" display:flex;justify-content: center;align-items: center;background:#03a9f4d9; width:200px; color: white;">
            sider
          </z-sider>
          <z-layout>
            <z-header style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              header
            </z-header>
            <z-content style="display:flex;justify-content: center;align-items: center;height: 100px; background:deepskyblue;">
              content
            </z-content>
            <z-footer style="display:flex;justify-content: center;align-items: center;height: 50px; background:lightskyblue;">
              footer
            </z-footer>
          </z-layout>
        </z-layout>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr3}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(2)" ref="xxx">
        <z-icon class="icon-down" :name="isShow[2] === false ? 'down' : 'up'"></z-icon>
        <span class="lock-code-word">{{isShow[2] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import ZLayout from '../../../src/components/layout'
  import ZHeader from '../../../src/components/header'
  import ZFooter from '../../../src/components/footer'
  import ZContent from '../../../src/components/content'
  import ZSider from '../../../src/components/sider'
  import ZIcon from '../../../src/components/icon'
  import mixin from '../mixin'
  export default {
    components: {ZLayout, ZHeader, ZFooter, ZContent, ZSider, ZIcon},
    mixins: [mixin],
    data () {
      return {
        codeStr: `
          <z-container>
            <z-header></z-header>
            <z-main></z-main>
            <z-footer></z-footer>
          </z-container>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
          <z-container>
            <z-header></z-header>
            <z-container>
              <z-sider></z-sider>
              <z-main></z-main>
            </z-container>
            <z-footer></z-footer>
          </z-container>
        `.replace(/^ {8}/gm, '').trim(),
        codeStr3: `
          <z-container>
            <z-sider close-button></z-sider>
            <z-container>
                <z-header></z-header>
                <z-main></z-main>
                <z-footer></z-footer>
            </z-container>
          </z-container>
        `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>