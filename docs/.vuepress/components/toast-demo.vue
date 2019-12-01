<template>
  <div class="demo">
    <h2>this.$toast</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-button @click="$toast('点击弹出提示', {position:'top'})">上方弹出</z-button>
        <z-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</z-button>
        <z-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</z-button>
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

    <h2>设置关闭按钮</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-button @click="onClickButton">中间弹出</z-button>
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

    <h2>支持 HTML</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-button @click="onClickButton2">上方弹出</z-button>
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
<style>
.wrapper.position-top {
  z-index: 999999 !important;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import plugin from "../../../src/assets/plugin";
import ZButton from "../../../src/components/button";
import Vue from "vue";
import ZIcon from "../../../src/components/icon";
import mixin from "../mixin";
Vue.use(plugin);
export default {
  components: { ZButton, ZIcon },
  mixins: [mixin],
  data() {
    return {
      codeStr: `
          <z-button @click="$toast('点击弹出提示'), {position:'top'}">上方弹出</z-button>
          <z-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</z-button>
          <z-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</z-button>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      codeStr2: `
          </style>
          <div>
            <z-button @click="onClickButton">上方弹出</z-button>
          </div>
          methods: {
            onClickButton () {
              this.$toast('您的余额已不足十元，请及时充值', {
                closeButton: {
                  text: '知道了',
                  callback: () => {
                    alert('用户说知道了')
                  }
                }
              })
            }
          },
        `
        .replace(/^ {8}/gm, "")
        .trim(),
      codeStr3: `
          <div>
            <z-button @click="onClickButton">上方弹出</z-button>
          </div>
          methods: {
    onClickButton2() {
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
          enableHTML: true
      });
    }
          },
        `
        .replace(/^ {8}/gm, "")
        .trim()
    };
  },
  methods: {
    onClickButton() {
      this.$toast("您的余额已不足十元，请及时充值", {
        position: "middle",
        closeButton: {
          text: "知道了",
          callback: () => {
            alert("用户说知道了");
          }
        }
      });
    },
    onClickButton2() {
      this.$toast('<strong style="color:red;">加粗的提示</strong>', {
        enableHTML: true
      });
    }
  }
};
</script>