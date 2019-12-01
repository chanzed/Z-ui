
# 快速开始
### 使用之前
在使用Zed-Wheel UI之前，我们假设您已经了解Vue、Vue组件等基础知识

### 在项目中引入Zed-Wheel UI 
```js
import {Button} from 'zed-wheel'
import 'zed-wheel/dist/index.css'
import Vue from 'vue'

new Vue({
  el: '#app',
  components: {
    'z-button':Button
  }
})
```
需要注意的是，样式文件需要单独引入。
### 特别提醒
在使用`Zed-Wheel UI`时，您需要使用`border-box`盒模型，否则会影响样式。CSS代码示例：
```css
*, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
```