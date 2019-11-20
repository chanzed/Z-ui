## Z-ui，一个Vue UI 组件

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

你还需要设置颜色等变量（后续会改为 SCSS 变量）
```
html {
  --button-height: 32px;
  --font-size: 14px;
  --button-bg: white;
  --button-active-bg: #eee;
  --border-radius: 4px;
  --color: #333;
  --border-color: #999;
  --border-color-hover: #666;
}
```
2. 安装Z-ui

```
npm i --save z-ui-test
```
3. 引入 z-ui
```
import {Button, ButtonGroup, Icon} from 'z-ui-test'
import 'z-ui-test/dist/index.css'

export default {
  name: 'app', 
  components: {
    'z-button': Button,
    'z-icon': Icon
  }
}
```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码