(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{335:function(t,e,o){},463:function(t,e,o){"use strict";var n=o(335);o.n(n).a},483:function(t,e,o){"use strict";o.r(e);o(257),o(259);var n=o(289),i=(o(256),{name:"ZPopover",props:{position:{type:String,default:"top",validator:function(t){return-1!==["top","bottom","left","right"].indexOf(t)}},trigger:{type:String,default:"click",validator:function(t){return-1!==["click","hover"].indexOf(t)}}},data:function(){return{visible:!1,timer:""}},mounted:function(){"click"===this.trigger?this.$refs.popover.addEventListener("click",this.onClick):(this.$refs.popover.addEventListener("mouseenter",this.open),this.$refs.popover.addEventListener("mouseleave",this.delayClose))},destroyed:function(){"click"===this.trigger?this.$refs.popover&&this.$refs.popover.removeEventListener("click",this.onClick):(this.$refs.popover&&this.$refs.popover.removeEventListener("mouseenter",this.open),this.$refs.popover&&this.$refs.popover.removeEventListener("mouseleave",this.delayClose))},methods:{positionContent:function(){var t=this.$refs,e=t.contentWrapper,o=t.triggerWrapper;document.body.appendChild(e);var n=o.getBoundingClientRect(),i=n.width,s=n.height,r=n.left,p=n.top,l=e.getBoundingClientRect().height,c={top:{left:r+window.scrollX,top:p+window.scrollY},bottom:{left:r+window.scrollX,top:p+s+window.scrollY},left:{left:r+window.scrollX,top:p+window.scrollY+(s-l)/2},right:{left:r+window.scrollX+i,top:p+window.scrollY+(s-l)/2}};e.style.left=c[this.position].left+"px",e.style.top=c[this.position].top+"px"},onClickDocument:function(){this.$refs.contentWrapper.contains(event.target)||this.$refs.triggerWrapper.contains(event.target)||this.close()},open:function(){var t=this;this.timer&&window.clearTimeout(this.timer),this.visible=!0,this.$nextTick((function(){t.positionContent(),document.addEventListener("click",t.onClickDocument)}))},close:function(){this.visible=!1,document&&document.removeEventListener("click",this.onClickDocument)},delayClose:function(t){var e=this;this.timer=setTimeout((function(){e.close()}),200)},clearTimer:function(){window.clearTimeout(this.timer)},onClick:function(t){this.$refs.triggerWrapper.contains(t.target)&&(this.visible?this.close():this.open())}}}),s=(o(463),o(4)),r=Object(s.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"popover",staticClass:"popover"},[t.visible?o("div",{ref:"contentWrapper",staticClass:"content-wrapper",class:["position-"+t.position],on:{mouseenter:t.clearTimer,mouseleave:t.delayClose}},[t._t("content",null,{close:t.close})],2):t._e(),t._v(" "),o("span",{ref:"triggerWrapper",staticStyle:{display:"inline-block"}},[t._t("default")],2)])}),[],!1,null,"1947fb49",null).exports,p=o(258),l=o(261),c={components:{ZButton:n.a,ZPopover:r,ZIcon:p.a},mixins:[l.a],data:function(){return{codeStr:'\n        <z-popover>\n          <z-button>上方弹出</z-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </z-popover>\n        <z-popover position="bottom">\n          <z-button>下方弹出</z-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </z-popover>\n        <z-popover position="left">\n          <z-button>左边弹出</z-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </z-popover>\n        <z-popover position="right">\n          <z-button>右边弹出</z-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </z-popover>\n    '.replace(/^ {8}/gm,"").trim(),codeStr2:'\n        <z-popover trigger="hover">\n          <z-button>上方弹出</z-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </z-popover>\n        <z-popover position="bottom" trigger="hover">\n          <z-button>下方弹出</z-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </z-popover>\n        <z-popover position="left" trigger="hover">\n          <z-button>左边弹出</z-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </z-popover>\n        <z-popover position="right" trigger="hover">\n          <z-button>右边弹出</z-button>\n          <template slot="content">\n            弹出内容\n          </template>\n        </z-popover>\n    '.replace(/^ {8}/gm,"").trim()}}},a=Object(s.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"demo"},[o("h1",[t._v("popover 弹出层")]),t._v(" "),o("h2",[t._v("基本用法")]),t._v(" "),t._m(0),t._v(" "),o("div",{staticClass:"component-wrapper"},[o("div",{staticClass:"component-wrapper-demo"},[o("z-popover",[o("z-button",[t._v("上方弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("\n          弹出内容\n        ")])],2),t._v(" "),o("z-popover",{attrs:{position:"bottom"}},[o("z-button",[t._v("下方弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("\n          弹出内容\n        ")])],2),t._v(" "),o("z-popover",{attrs:{position:"left"}},[o("z-button",[t._v("左边弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("\n          弹出内容\n        ")])],2),t._v(" "),o("z-popover",{attrs:{position:"right"}},[o("z-button",[t._v("右边弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("\n          弹出内容\n        ")])],2)],1),t._v(" "),o("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[o("div",{staticClass:"code-content-height"},[o("pre",[o("code",{staticClass:"html"},[t._v(t._s(t.codeStr))])])])]),t._v(" "),o("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(0)}}},[o("z-icon",{staticClass:"icon-down",attrs:{name:!1===t.isShow[0]?"down":"up"}}),t._v(" "),o("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[0]?"显示代码":"隐藏代码"))])],1)]),t._v(" "),o("h2",[t._v("将触发方式改为 hover")]),t._v(" "),t._m(1),t._v(" "),o("div",{staticClass:"component-wrapper"},[o("div",{staticClass:"component-wrapper-demo"},[o("z-popover",{attrs:{trigger:"hover"}},[o("z-button",[t._v("上方弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("\n          弹出内容\n        ")])],2),t._v(" "),o("z-popover",{attrs:{position:"bottom",trigger:"hover"}},[o("z-button",[t._v("下方弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("\n          弹出内容\n        ")])],2),t._v(" "),o("z-popover",{attrs:{position:"left",trigger:"hover"}},[o("z-button",[t._v("左边弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("\n          弹出内容\n        ")])],2),t._v(" "),o("z-popover",{attrs:{position:"right",trigger:"hover"}},[o("z-button",[t._v("右边弹出")]),t._v(" "),o("template",{slot:"content"},[t._v("\n          弹出内容\n        ")])],2)],1),t._v(" "),o("div",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"code-content",staticStyle:{height:"0"}},[o("div",{staticClass:"code-content-height"},[o("pre",[o("code",{staticClass:"html"},[t._v(t._s(t.codeStr2))])])])]),t._v(" "),o("div",{ref:"xxx",staticClass:"lock-code",on:{click:function(e){return t.showCode(1)}}},[o("z-icon",{staticClass:"icon-down",attrs:{name:!1===t.isShow[1]?"down":"up"}}),t._v(" "),o("span",{staticClass:"lock-code-word"},[t._v(t._s(!1===t.isShow[1]?"显示代码":"隐藏代码"))])],1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("预览")])])}],!1,null,null,null);e.default=a.exports}}]);