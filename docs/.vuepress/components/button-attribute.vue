<template>
  <div class="base">
    <section>
      <h2>Attributes</h2>
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
              <td>icon</td>
              <td class="des">icon 图标名</td>
              <td class="type">String</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>iconPosition</td>
              <td class="des">icon 位置</td>
              <td class="type">String</td>
              <td>left , right</td>
              <td>left</td>
            </tr>
            <tr>
              <td>loading</td>
              <td class="des">可以用<code>v-bind</code>绑定<code>loading</code>属性，再绑定click事件来改变loading，从而控制是否出现loading图标</td>
              <td class="type">Boolean</td>
              <td>——</td>
              <td>false</td>
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