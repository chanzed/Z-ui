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
              <td>position</td>
              <td class="des">弹框位置，默认顶部</td>
              <td class="type">String</td>
              <td>top , right , left , bottom</td>
              <td>top</td>
            </tr>
            <tr>
              <td>trigger</td>
              <td class="des">弹框的触发方式，默认点击触发</td>
              <td class="type">String</td>
              <td>click , hover</td>
              <td>click</td>
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