## Zed-Wheel UI，一个Vue UI 组件

[![Build Status](https://travis-ci.com/chanzed/Z-ui.svg?branch=master)](https://travis-ci.com/chanzed/Z-ui)

## 介绍

这是我都学习Vue过程中做的一个 UI 框架。

## 开始使用

1. 添加 CSS 样式
使用本框架前，请在 CSS 中开启 border-box

```
*, *::before, *::after{box-sizing: border-box;}
```

IE8 及以上浏览器都支持此样式。


```
2. 安装Z-ui

```
npm i --save zed-wheel
```
3. 引入 Zed-Wheel UI
```
import {Button, ButtonGroup, Icon} from 'zed-wheel'
import 'zed-wheel/dist/index.css'

export default {
  name: 'app', 
  components: {
    'z-button': Button,
    'z-icon': Icon
  }
}
```