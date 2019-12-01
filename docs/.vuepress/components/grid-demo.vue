<template>
  <div class="demo">
    <h1>Grid 网格</h1>
    <div>通过基础的24格分栏，快速构建网页布局。</div>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-row class="demoRow">
          <z-col span="8">
            <div class="demoCol">8</div>
          </z-col>
          <z-col span="8">
            <div class="demoCol">8</div>
          </z-col>
          <z-col span="8">
            <div class="demoCol">8</div>
          </z-col>
        </z-row>
        <z-row class="demoRow">
          <z-col span="6">
            <div class="demoCol">6</div>
          </z-col>
          <z-col span="6">
            <div class="demoCol">6</div>
          </z-col>
          <z-col span="6">
            <div class="demoCol">6</div>
          </z-col>
          <z-col span="6">
            <div class="demoCol">6</div>
          </z-col>
        </z-row>
        <z-row class="demoRow">
          <z-col span="4">
            <div class="demoCol">4</div>
          </z-col>
          <z-col span="4">
            <div class="demoCol">4</div>
          </z-col>
          <z-col span="4">
            <div class="demoCol">4</div>
          </z-col>
          <z-col span="4">
            <div class="demoCol">4</div>
          </z-col>
          <z-col span="4">
            <div class="demoCol">4</div>
          </z-col>
          <z-col span="4">
            <div class="demoCol">4</div>
          </z-col>
        </z-row>
        <z-row class="demoRow">
          <z-col span="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2">
            <div class="demoCol">2</div>
          </z-col>
        </z-row>
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

    <h2>设置 gutter</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-row class="demoRow" gutter="10">
          <z-col span="8">
            <div class="demoCol">8</div>
          </z-col>
          <z-col span="8">
            <div class="demoCol">8</div>
          </z-col>
          <z-col span="8">
            <div class="demoCol">8</div>
          </z-col>
        </z-row>
        <z-row class="demoRow" gutter="10">
          <z-col span="6">
            <div class="demoCol">6</div>
          </z-col>
          <z-col span="6">
            <div class="demoCol">6</div>
          </z-col>
          <z-col span="6">
            <div class="demoCol">6</div>
          </z-col>
          <z-col span="6">
            <div class="demoCol">6</div>
          </z-col>
        </z-row>
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

    <h2>设置空隙</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-row class="demoRow" gutter="10">
          <z-col span="8">
            <div class="demoCol">8</div>
          </z-col>
          <z-col span="8" offset="8">
            <div class="demoCol">8</div>
          </z-col>
        </z-row>
        <z-row class="demoRow" gutter="10">
          <z-col span="6" offset="6">
            <div class="demoCol">6</div>
          </z-col>
          <z-col span="6" offset="6">
            <div class="demoCol">6</div>
          </z-col>
        </z-row>
        <z-row class="demoRow" gutter="10">
          <z-col span="4">
            <div class="demoCol">4</div>
          </z-col>
          <z-col span="4" offset="4">
            <div class="demoCol">4</div>
          </z-col>
          <z-col span="4" offset="8">
            <div class="demoCol">4</div>
          </z-col>
        </z-row>
        <z-row class="demoRow" gutter="10">
          <z-col span="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2" offset="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2" offset="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2" offset="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2">
            <div class="demoCol">2</div>
          </z-col>
          <z-col span="2" offset="2">
            <div class="demoCol">2</div>
          </z-col>
        </z-row>
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

    <h2>响应式布局</h2>
    <p>
      <strong>预览</strong>
    </p>
    <div class="component-wrapper">
      <div class="component-wrapper-demo">
        <z-row class="demoRow">
          <z-col :ipad="{span: 6}" :pc="{span: 3}" span="12">
            <div class="demoCol">内容1</div>
          </z-col>
          <z-col :ipad="{span: 6}" :pc="{span: 3}" span="12">
            <div class="demoCol">内容2</div>
          </z-col>
          <z-col :ipad="{span: 6}" :pc="{span: 3}" span="12">
            <div class="demoCol">内容3</div>
          </z-col>
          <z-col :ipad="{span: 6}" :pc="{span: 3}" span="12">
            <div class="demoCol">内容4</div>
          </z-col>
          <z-col :ipad="{span: 6}" :pc="{span: 3}" span="12">
            <div class="demoCol">内容5</div>
          </z-col>
          <z-col :ipad="{span: 6}" :pc="{span: 3}" span="12">
            <div class="demoCol">内容6</div>
          </z-col>
          <z-col :ipad="{span: 6}" :pc="{span: 3}" span="12">
            <div class="demoCol">内容7</div>
          </z-col>
          <z-col :ipad="{span: 6}" :pc="{span: 3}" span="12">
            <div class="demoCol">内容8</div>
          </z-col>
        </z-row>
      </div>
      <div class="code-content" v-highlight style="height: 0;">
        <div class="code-content-height">
          <pre><code class="html">{{codeStr4}}</code></pre>
        </div>
      </div>
      <div class="lock-code" @click="showCode(3)" ref="xxx">
        <z-icon class="icon-down" :name="isShow[3] === false ? 'down' : 'up'"></z-icon>
        <span class="lock-code-word">{{isShow[3] === false ? '显示代码' : '隐藏代码'}}</span>
      </div>
    </div>
  </div>
</template>
<style scoped>
* {
  box-sizing: border-box;
}
.demoRow {
  margin: 10px 0;
}
.demoCol {
  height: 50px;
  border: 1px solid #ccc;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
<script>
import ZRow from "../../../src/components/row";
import ZCol from "../../../src/components/col";
import ZIcon from "../../../src/components/icon";
import mixin from "../mixin";
export default {
  components: { ZRow, ZCol, ZIcon },
  mixins: [mixin],
  data() {
    return {
      codeStr: `
          <z-row >
            <z-col span="8">
              <div >8</div>
            </z-col>
            <z-col span="8">
              <div >8</div>
            </z-col>
            <z-col span="8">
              <div >8</div>
            </z-col>
          </z-row>
          <z-row >
            <z-col span="6">
              <div >6</div>
            </z-col>
            <z-col span="6">
              <div >6</div>
            </z-col>
            <z-col span="6">
              <div >6</div>
            </z-col>
            <z-col span="6">
              <div >6</div>
            </z-col>
          </z-row>
          .
          .
          .
          </z-row>
        `
        .replace(/^ {8}/gm, "")
        .trim(),
      codeStr2: `
          <z-row  gutter="10">
            <z-col span="8">
              <div >8</div>
            </z-col>
            <z-col span="8">
              <div >8</div>
            </z-col>
            <z-col span="8">
              <div >8</div>
            </z-col>
          </z-row>
          <z-row  gutter="10">
            <z-col span="6">
              <div >6</div>
            </z-col>
            <z-col span="6">
              <div >6</div>
            </z-col>
            <z-col span="6">
              <div >6</div>
            </z-col>
            <z-col span="6">
              <div >6</div>
            </z-col>
            .
            .
            .
          </z-row>
        `
        .replace(/^ {8}/gm, "")
        .trim(),
      codeStr3: `
          <z-row  gutter="10">
            <z-col span="8">
              <div >8</div>
            </z-col>
            <z-col span="8" offset="8">
              <div >8</div>
            </z-col>
          </z-row>
          <z-row  gutter="10">
            <z-col span="6" offset="6">
              <div >6</div>
            </z-col>
            <z-col span="6" offset="6">
              <div >6</div>
            </z-col>
          </z-row>
          <z-row  gutter="10">
            <z-col span="4">
              <div >4</div>
            </z-col>
            <z-col span="4" offset="4">
              <div >4</div>
            </z-col>
            <z-col span="4" offset="8">
              <div >4</div>
            </z-col>
          </z-row>
          <z-row  gutter="10">
            <z-col span="2">
              <div >2</div>
            </z-col>
            <z-col span="2" offset="2">
              <div >2</div>
            </z-col>
            <z-col span="2">
              <div >2</div>
            </z-col>
            <z-col span="2" offset="2">
              <div >2</div>
            </z-col>
            <z-col span="2">
              <div >2</div>
            </z-col>
            <z-col span="2" offset="2">
              <div >2</div>
            </z-col>
            <z-col span="2">
              <div >2</div>
            </z-col>
            <z-col span="2" offset="2">
              <div >2</div>
            </z-col>
          </z-row>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
      codeStr4: `
        <z-row class="demoRow">
          <z-col :ipad="{span: 6}" :pc="{span: 3}" span="12">
            <div >内容1</div>
          </z-col>
          <z-col :ipad="{span: 6}" :pc="{span: 3}" span="12">
            <div >内容2</div>
          </z-col>
          <z-col :ipad="{span: 6}" :pc="{span: 3}" span="12">
            <div >内容3</div>
          </z-col>
          <z-col :ipad="{span: 6}" :pc="{span: 3}" span="12">
            <div >内容4</div>
          </z-col>
          <z-col :ipad="{span: 6}" :pc="{span: 3}" span="12">
            <div >内容5</div>
          </z-col>
          <z-col :ipad="{span: 6}" :pc="{span: 3}" span="12">
            <div >内容6</div>
          </z-col>
          <z-col :ipad="{span: 6}" :pc="{span: 3}" span="12">
            <div >内容7</div>
          </z-col>
          <z-col :ipad="{span: 6}" :pc="{span: 3}" span="12">
            <div >内容8</div>
          </z-col>
        </z-row>
      `
        .replace(/^ {8}/gm, "")
        .trim(),
    };
  }
};
</script>