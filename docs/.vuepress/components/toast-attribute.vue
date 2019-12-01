<template>
  <div class="base">
    <section>
      <h2>toast Options</h2>
      <p class="des">
        <span class="code">toast</span>与其他组件不同，采用插件的形式开发，因此可以在方法中直接调用
        <span class="code">this.$toast(MESSAGE, OPTIONS)</span>, 其中<span class="code">MESSAGE</span>是提示内容，传字符串，<span class="code">OPTIONS</span>是配置选项，是一个<span class="code">Object</span>
      </p>
      <div class="attr">
        <table>
          <thead>
            <tr>
              <th>参数</th>
              <th class="des">说明</th>
              <th class="type">类型</th>
              <th>可选值</th>
              <th>默认值</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>autoClose</td>
              <td class="des">消息提示显示时间，单位是 s,也可以直接传布尔值，表示是否自动关闭</td>
              <td class="type">Boolean,Number</td>
              <td>——</td>
              <td>3</td>
            </tr>
            <tr>
              <td>closeButton</td>
              <td class="des">有两个字段，text 以及 callback，前者表示关闭按钮的文字内容，后者表示点击了关闭之后的回调</td>
              <td class="type">Object</td>
              <td>text, callback</td>
              <td>{text: '', callback: undefined}</td>
            </tr>
            <tr>
              <td>enableHTML</td>
              <td class="des">表示 message 是否支持 html</td>
              <td class="type">Boolean</td>
              <td>true, false</td>
              <td>false</td>
            </tr>
            <tr>
              <td>position</td>
              <td class="des">表示提示框位置</td>
              <td class="type">String</td>
              <td>top, middle, bottom</td>
              <td>middle</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<style>
.code {
  background-color: rgba(27, 31, 35, 0.05);
  border-radius: 3px;
  font-size: 85%;
  margin: 0;
  padding: 0.2em 0.4em;
}
</style>