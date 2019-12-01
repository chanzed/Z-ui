<template>
  <div class="base">
    <section>
      <h2>x-row Attributes</h2>
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
              <td>gutter</td>
              <td class="des">栅格的间隙，单位为 px</td>
              <td class="type">String, Number</td>
              <td>——</td>
              <td>——</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2>x-rol Attributes</h2>
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
              <td>span</td>
              <td class="des">分栏所占宽度</td>
              <td class="type">String, Number</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>offset</td>
              <td class="des">分栏前空隙所占宽度</td>
              <td class="type">String, Number</td>
              <td>——</td>
              <td>——</td>
            </tr>
            <tr>
              <td>ipad, narrow-pc, pc, wide-pc</td>
              <td class="des">不同屏幕宽度下分栏所占宽度的配置参数，span对应分栏所占宽度，offset对应分栏前空隙宽度。mobile-first，ipad、npc、pc、wpc对应 min-width 分别为 577px、769px、993px、1201px/td
              <td class="type">Object</td>
              <td>——</td>
              <td>——</td>
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