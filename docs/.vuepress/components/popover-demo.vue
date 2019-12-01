<template>
  <div class="demo">
    <h1>popover 弹出层</h1>
    <h2>基本用法</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">   
        <z-popover>
          <z-button>上方弹出</z-button>
          <template slot="content">
            弹出内容
          </template>
        </z-popover>
        <z-popover position="bottom">
          <z-button>下方弹出</z-button>
          <template slot="content">
            弹出内容
          </template>
        </z-popover>
        <z-popover position="left">
          <z-button>左边弹出</z-button>
          <template slot="content">
            弹出内容
          </template>
        </z-popover>
        <z-popover position="right">
          <z-button>右边弹出</z-button>
          <template slot="content">
            弹出内容
          </template>
        </z-popover> 
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

    <h2>将触发方式改为 hover</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">   
        <z-popover trigger="hover">
          <z-button>上方弹出</z-button>
          <template slot="content">
            弹出内容
          </template>
        </z-popover>
        <z-popover position="bottom" trigger="hover">
          <z-button>下方弹出</z-button>
          <template slot="content">
            弹出内容
          </template>
        </z-popover>
        <z-popover position="left" trigger="hover">
          <z-button>左边弹出</z-button>
          <template slot="content">
            弹出内容
          </template>
        </z-popover>
        <z-popover position="right" trigger="hover">
          <z-button>右边弹出</z-button>
          <template slot="content">
            弹出内容
          </template>
        </z-popover>
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
  import ZPopover from '../../../src/components/popover'
  import ZIcon from '../../../src/components/icon'
  import mixin from '../mixin'
  export default {
    components: {ZButton, ZPopover, ZIcon},
    mixins: [mixin],
    data () {
      return {
        codeStr: `
          <z-popover>
            <z-button>上方弹出</z-button>
            <template slot="content">
              弹出内容
            </template>
          </z-popover>
          <z-popover position="bottom">
            <z-button>下方弹出</z-button>
            <template slot="content">
              弹出内容
            </template>
          </z-popover>
          <z-popover position="left">
            <z-button>左边弹出</z-button>
            <template slot="content">
              弹出内容
            </template>
          </z-popover>
          <z-popover position="right">
            <z-button>右边弹出</z-button>
            <template slot="content">
              弹出内容
            </template>
          </z-popover>
      `.replace(/^ {8}/gm, '').trim(),
        codeStr2: `
          <z-popover trigger="hover">
            <z-button>上方弹出</z-button>
            <template slot="content">
              弹出内容
            </template>
          </z-popover>
          <z-popover position="bottom" trigger="hover">
            <z-button>下方弹出</z-button>
            <template slot="content">
              弹出内容
            </template>
          </z-popover>
          <z-popover position="left" trigger="hover">
            <z-button>左边弹出</z-button>
            <template slot="content">
              弹出内容
            </template>
          </z-popover>
          <z-popover position="right" trigger="hover">
            <z-button>右边弹出</z-button>
            <template slot="content">
              弹出内容
            </template>
          </z-popover>
      `.replace(/^ {8}/gm, '').trim()
      }
    }
  }
</script>