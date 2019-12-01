const path = require('path')
module.exports = {
  base: '/Z-ui/',
  title: 'Zed-Wheel UI',
  description: '一套为开发者学习准备的基于 Vue 2.0 的移动端和 PC 端组件库',
  head: [
    ['link', { rel: 'icon', href: '/img/wheel.png', type: 'image/png' }]
  ],
  themeConfig: {
    repo: 'chanzed/z-ui',// 默认是 false, 设置为 true 来启用
    lastUpdated: 'Last Updated',
    // editLinks: true,
    nav: [
      {text: '主页', link: '/'},
      {text: '指南', link: '/guide/'},
    ],
    sidebarDepth: 2,
    sidebar: [
      {
        title: '介绍',
        collapsable: false,
        childred: [
          '/guide/'
        ]
      },
      {
        title: '入门',
        collapsable: false,
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          '/components/icon',
          '/components/button',
          '/components/tabs',
          '/components/input',
          '/components/layout',
          '/components/grid',
          '/components/toast',
          '/components/popover',
          '/components/collapse',
        ]
      },
    ]
  },
  markdown: {
    lineNumbers: true
  }
}