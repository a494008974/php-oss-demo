!function(t){var n={};function e(o){if(n[o])return n[o].exports;var i=n[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,e),i.l=!0,i.exports}e.m=t,e.c=n,e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:o})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(e.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var i in t)e.d(o,i,function(n){return t[n]}.bind(null,i));return o},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/php-oss-demo/public/dist/",e(e.s=42)}([function(t,n,e){"use strict";function o(t,n,e,o,i,r,s,a){var u,c="function"==typeof t?t.options:t;if(n&&(c.render=n,c.staticRenderFns=e,c._compiled=!0),o&&(c.functional=!0),r&&(c._scopeId="data-v-"+r),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),i&&i.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):i&&(u=a?function(){i.call(this,this.$root.$options.shadowRoot)}:i),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,n){return u.call(n),l(t,n)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}e.d(n,"a",function(){return o})},function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",o=t[3];if(!o)return e;if(n&&"function"==typeof btoa){var i=(s=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),r=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[e].concat(r).concat([i]).join("\n")}var s;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(i=0;i<t.length;i++){var s=t[i];null!=s[0]&&o[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),n.push(s))}},n}},function(t,n,e){var o,i,r={},s=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),a=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var o=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}n[t]=o}return n[t]}}(),u=null,c=0,l=[],f=e(3);function d(t,n){for(var e=0;e<t.length;e++){var o=t[e],i=r[o.id];if(i){i.refs++;for(var s=0;s<i.parts.length;s++)i.parts[s](o.parts[s]);for(;s<o.parts.length;s++)i.parts.push(y(o.parts[s],n))}else{var a=[];for(s=0;s<o.parts.length;s++)a.push(y(o.parts[s],n));r[o.id]={id:o.id,refs:1,parts:a}}}}function p(t,n){for(var e=[],o={},i=0;i<t.length;i++){var r=t[i],s=n.base?r[0]+n.base:r[0],a={css:r[1],media:r[2],sourceMap:r[3]};o[s]?o[s].parts.push(a):e.push(o[s]={id:s,parts:[a]})}return e}function h(t,n){var e=a(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=l[l.length-1];if("top"===t.insertAt)o?o.nextSibling?e.insertBefore(n,o.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),l.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=a(t.insertAt.before,e);e.insertBefore(n,i)}}function v(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=l.indexOf(t);n>=0&&l.splice(n,1)}function b(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return e.nc}();o&&(t.attrs.nonce=o)}return m(n,t.attrs),h(t,n),n}function m(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function y(t,n){var e,o,i,r;if(n.transform&&t.css){if(!(r="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=r}if(n.singleton){var s=c++;e=u||(u=b(n)),o=_.bind(null,e,s,!1),i=_.bind(null,e,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",m(n,t.attrs),h(t,n),n}(n),o=function(t,n,e){var o=e.css,i=e.sourceMap,r=void 0===n.convertToAbsoluteUrls&&i;(n.convertToAbsoluteUrls||r)&&(o=f(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var s=new Blob([o],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,e,n),i=function(){v(e),e.href&&URL.revokeObjectURL(e.href)}):(e=b(n),o=function(t,n){var e=n.css,o=n.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),i=function(){v(e)});return o(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;o(t=n)}else i()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=s()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=p(t,n);return d(e,n),function(t){for(var o=[],i=0;i<e.length;i++){var s=e[i];(a=r[s.id]).refs--,o.push(a)}t&&d(p(t,n),n);for(i=0;i<o.length;i++){var a;if(0===(a=o[i]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete r[a.id]}}}};var g,x=(g=[],function(t,n){return g[t]=n,g.filter(Boolean).join("\n")});function _(t,n,e,o){var i=e?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(n,i);else{var r=document.createTextNode(i),s=t.childNodes;s[n]&&t.removeChild(s[n]),s.length?t.insertBefore(r,s[n]):t.appendChild(r)}}},function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,o=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var i,r=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?t:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?e+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},,,,,function(t,n,e){var o=e(26);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,n,e){var o=e(28);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(2)(o,i);o.locals&&(t.exports=o.locals)},function(t,n,e){var o=e(30);"string"==typeof o&&(o=[[t.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(2)(o,i);o.locals&&(t.exports=o.locals)},,,,,,,,,,,,,,,function(t,n,e){"use strict";var o=e(8);e.n(o).a},function(t,n,e){(t.exports=e(1)(!1)).push([t.i,"\n.layout-navigation{\n    width:100%;\n    height:60px;\n    max-height:60px;\n    overflow:hidden;\n}\n.ivu-menu-primary {\n    background: #363e4f;\n}\n.ivu-menu-primary.ivu-menu-horizontal .ivu-menu-item-active,\n.ivu-menu-primary.ivu-menu-horizontal .ivu-menu-item:hover,\n .ivu-menu-primary.ivu-menu-horizontal .ivu-menu-submenu-active,\n .ivu-menu-primary.ivu-menu-horizontal .ivu-menu-submenu:hover {\n    background: #2d8cf0;\n}\n.layout-logo {\n     background: #303e4f;\n     width:300px;\n     height:60px;\n     padding-top: 10px;\n     box-sizing:border-box;\n}\n.layout-menu {\n      position:absolute;\n      top:0px;\n      right:0px;\n      left:300px;\n      overflow:hidden;\n      height:60px;\n}\n.layout-logo h1 {\n    font-size: 26px;\n    height: 60px;\n    font-weight: bold;\n    display: block;\n    text-align: center;\n}\n",""])},function(t,n,e){"use strict";var o=e(9);e.n(o).a},function(t,n,e){(t.exports=e(1)(!1)).push([t.i,"\n.layout_content{\n\twidth: 100%;\n\tposition: absolute;\n\ttop: 60px;\n\tbottom: 0px;\n\tleft: 0px;\n}\n.layout_silder{\n\tbackground-color: #363e4f;\n\twidth: 300px;\n\theight: 500px;\n\tposition: absolute;\n\ttop: 0px;\n\tbottom: 0px;\n\tleft: 0px;\n\toverflow-x:hidden;\n}\n.layout_silder_content{\n\twidth:318px;\n\theight: 100%;\n\tposition: absolute;\n\ttop: 0px;\n\tbottom: 0px;\n\tleft: 0px;\n\toverflow-x:hidden;\n}\n.layout_main_content{\n\tposition: absolute;\n\ttop: 0px;\n\tbottom: 0px;\n\tright: 0px;\n\tleft: 300px;\n}\n",""])},function(t,n,e){"use strict";var o=e(10);e.n(o).a},function(t,n,e){(t.exports=e(1)(!1)).push([t.i,"\n.ivu-tabs.ivu-tabs-card>.ivu-tabs-bar .ivu-tabs-tab {\n\tmargin: 0;\n\tmargin-right: 1px;\n\theight: 28px;\n\tpadding: 5px 16px 4px;\n\tborder: 1px solid #dddee1;\n\tborder-bottom: 0;\n\ttransition: all .3s ease-in-out;\n\tbackground: #f8f8f9;\n}\n.ivu-tabs-nav {\n\tbottom: 0px;\n\tmargin-left: 4px;\n\tposition: absolute;\n}\n.ivu-tabs-bar {\n\tborder-bottom: 1px solid #dddee1;\n\tmargin-bottom: 0px;\n}\n#app > div.layout_content > div.layout_main_content > div > div > div.ivu-tabs-bar > div > div > div > div > div:nth-child(2) > i{\n\tdisplay: none;\n}\n.layout-iframe{\n\twidth:100%; \n\theight:300px;\n\tframeborder:no;\n\tborder:0px;\n\tmarginwidth:0px;\n\tmarginheight:0px;\n\tallowtransparency:yes;\n}\n",""])},,,,,,,,,,,,function(t,n,e){"use strict";e.r(n);var o={props:{content:null},data:function(){return{}},methods:{menuClick:function(t){this.emitActive(t)},emitActive:function(t){for(var n in this.content.data)if(this.content.data[n].Id==t){this.$bus.emit("selectMenu",this.content.data[n]);break}}},mounted(){this.emitActive(this.content.active)}},i=(e(25),e(0)),r=Object(i.a)(o,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"layout-navigation"},[t._m(0),t._v(" "),e("div",{staticClass:"layout-menu"},[e("Menu",{attrs:{mode:"horizontal",theme:t.content.theme,"active-name":t.content.active},on:{"on-select":t.menuClick}},t._l(t.content.data,function(n){return e("Menu-item",{key:n.Id,attrs:{name:n.Id}},[e("Icon",{attrs:{type:n.icon}}),t._v("\n                "+t._s(n.title)+"\n            ")],1)}),1)],1)])},[function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"layout-logo"},[n("h1",[this._v("BSW战队管理系统")])])}],!1,null,null,null).exports,s={props:{basedata:null},data:function(){return{content:"",contentHeight:{height:"0"}}},created(){this.$bus.on("selectMenu",this.selectMenu)},beforeDestroy(){this.$bus.off("selectMenu",this.selectMenu)},methods:{selectMenu(t){this.content=t}},mounted:function(){this.contentHeight.height=document.body.clientHeight-60;const t=this;window.onresize=function(){t.contentHeight.height=document.body.clientHeight-60}}},a=(e(27),Object(i.a)(s,function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"layout_content"},[n("div",{staticClass:"layout_silder",style:this.contentHeight},[n("div",{staticClass:"layout_silder_content"},[n("nslidernav",{attrs:{content:this.content}})],1)]),this._v(" "),n("div",{staticClass:"layout_main_content"},[n("ncontenttab",{attrs:{height:this.contentHeight.height,basedata:this.basedata}})],1)])},[],!1,null,null,null).exports),u={props:{content:null},data:function(){return{}},mounted:function(){this.$nextTick(function(){this.$refs.leftMenu.updateOpened(),this.$refs.leftMenu.updateActiveName()})},computed:{open2:function(){var t=new Array;for(var n in this.content.submenu)t.push(this.content.Id+"-"+this.content.submenu[n].Id);return t}},methods:{subMenuClick:function(t){this.selectSubActive(t)},selectSubActive:function(t){var n=new Array;if((n=t.split("-")).length>=3)for(var e in this.content.submenu)if(this.content.submenu[e].Id==n[1])for(var o in this.content.submenu[e].submenu)if(this.content.submenu[e].submenu[o].Id==n[2]){this.$bus.emit("selectSubActive",this.content.submenu[e].submenu[o],t);break}}}},c=Object(i.a)(u,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Menu",{ref:"leftMenu",attrs:{theme:"dark",width:"300px","open-names":t.open2},on:{"on-select":t.subMenuClick}},t._l(t.content.submenu,function(n){return e("Submenu",{key:t.content.Id+"-"+n.Id,attrs:{name:t.content.Id+"-"+n.Id}},[e("template",{slot:"title"},[e("Icon",{attrs:{type:n.icon}}),t._v("\n                       "+t._s(n.title)+"\n                    ")],1),t._v(" "),t._l(n.submenu,function(o){return e("Menu-item",{key:t.content.Id+"-"+n.Id+"-"+o.Id,attrs:{name:t.content.Id+"-"+n.Id+"-"+o.Id}},[e("Icon",{attrs:{type:o.icon}}),t._v("\n\t\t\t\t\t\t"+t._s(o.title)+"\n\t\t\t\t\t")],1)})],2)}),1)],1)},[],!1,null,null,null).exports,l={props:{height:0,basedata:null},computed:{contentHeight:function(){return{height:this.height-32}}},data:()=>({showIndex:!0,tabs:null,value:"index"}),methods:{handleTabRemove(t){if("index"==t)this.showIndex=!1;else{for(var n=0;n<this.tabs.length;n++)this.tabs[n].id==t&&(this.tabs[n].visable=!1);for(n=this.tabs.length;n>=0;n--)1==this.tabs[n].visable&&(this.value=this.tabs[n].id)}},selectSubActive(t,n){for(var e=!1,o=0;o<this.tabs.length;o++)this.tabs[o].id==n&&(this.tabs[o].visable=!0,e=!0);if(!e){var i={id:n,name:t,visable:!0};this.tabs.push(i)}this.value=n}},created(){this.tabs=new Array,this.$bus.on("selectSubActive",this.selectSubActive)},beforeDestroy(){this.$bus.off("selectSubActive",this.selectSubActive)},mounted:function(){}},f=(e(29),Object(i.a)(l,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("Tabs",{attrs:{type:"card",closable:"",value:t.value,animated:!1},on:{"on-tab-remove":t.handleTabRemove}},[t.showIndex?e("Tab-pane",{attrs:{label:t.basedata.label,name:"index"}},[e("iframe",{staticClass:"layout-iframe",style:t.contentHeight,attrs:{src:t.basedata.base_url+t.basedata.base_index}})]):t._e(),t._v(" "),t._l(t.tabs,function(n){return n.visable?e("Tab-pane",{key:n.id,attrs:{name:n.id,label:n.name.title}},[e("iframe",{staticClass:"layout-iframe",style:t.contentHeight,attrs:{src:n.name.url}})]):t._e()})],2)],1)},[],!1,null,null,null).exports);Vue.component("znavigation",r),Vue.component("ncontent",a),Vue.component("nslidernav",c),Vue.component("ncontenttab",f);new Vue({el:"#app"})}]);