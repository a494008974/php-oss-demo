!function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/php-oss-demo/public/dist/",e(e.s=43)}({0:function(t,n,e){"use strict";function r(t,n,e,r,o,i,s,a){var u,c="function"==typeof t?t.options:t;if(n&&(c.render=n,c.staticRenderFns=e,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),s?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},c._ssrRegister=u):o&&(u=a?function(){o.call(this,this.$root.$options.shadowRoot)}:o),u)if(c.functional){c._injectStyles=u;var l=c.render;c.render=function(t,n){return u.call(n),l(t,n)}}else{var f=c.beforeCreate;c.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:c}}e.d(n,"a",function(){return r})},1:function(t,n,e){"use strict";t.exports=function(t){var n=[];return n.toString=function(){return this.map(function(n){var e=function(t,n){var e=t[1]||"",r=t[3];if(!r)return e;if(n&&"function"==typeof btoa){var o=(s=r,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),i=r.sources.map(function(t){return"/*# sourceURL="+r.sourceRoot+t+" */"});return[e].concat(i).concat([o]).join("\n")}var s;return[e].join("\n")}(n,t);return n[2]?"@media "+n[2]+"{"+e+"}":e}).join("")},n.i=function(t,e){"string"==typeof t&&(t=[[null,t,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];null!=i&&(r[i]=!0)}for(o=0;o<t.length;o++){var s=t[o];null!=s[0]&&r[s[0]]||(e&&!s[2]?s[2]=e:e&&(s[2]="("+s[2]+") and ("+e+")"),n.push(s))}},n}},16:function(t,n){!function(t,n,e,r){var o=function(n,e){this.element=t(n),this.string=t(n).html(),this.defaults={speed:1e3,autorun:!0,delay:0,fixed:"",start:""},this.options=t.extend({},this.defaults,e),this.height=t(n).height()};o.prototype={init:function(){if(this.element.find(".TextAnimate").length<=0){var t=i.getHtml(this.options,this.string);this.element.html(t)}if(this.reset(),this.options.autorun)if(0==this.options.delay)this.run();else{var n=this;setTimeout(function(){n.run()},this.options.delay)}},reset:function(){this.element.find(".TextAnimate").css({overflow:"hidden",display:"inline-block","vertical-align":"top",height:this.height}).find("span").css({display:"inline-block","vertical-align":"top",position:"relative",top:"0px",transform:"translateY(0px)","-ms-transform":"translateY(0px)","-moz-transform":"translateY(0px)","-webkit-transform":"translateY(0px)","-o-transform":"translateY(0px)","-ms-transition":"0s","-moz-transition":"0s","-webkit-transition":"0s","-o-transition":"0s",transition:"0s"}).find("i").css({display:"block","font-style":"normal",height:this.height})},run:function(){var e=this.options.speed,r=this.height;this.reset(),this.element.find("span").each(function(){var o=t(this),i=-o.find("i").index(o.find(".on"))*r+"px";i!=o.css("top")&&(n.applicationCache?o.css({transform:"translateY("+i+")","-ms-transform":"translateY("+i+")","-moz-transform":"translateY("+i+")","-webkit-transform":"translateY("+i+")","-o-transform":"translateY("+i+")","-ms-transition":e/1e3+"s","-moz-transition":e/1e3+"s","-webkit-transition":e/1e3+"s","-o-transition":e/1e3+"s",transition:e/1e3+"s"}):o.animate({top:i},e))})}};var i={getNumber:function(t,n){if(this.inArr(t.fixed,n))return'<span><i class="on">'+n+"</i></span>";var e="<span>";""!==t.start&&(e+="<i>"+t.start+"</i>");for(var r=0;r<10;r++)e+="<i"+(r==n?' class="on"':"")+">"+r+"</i>";return e+"</span>"},getLowerCase:function(t,n,e){if(this.inArr(t.fixed,n))return'<span><i class="on">'+n+"</i></span>";var r="<span>";""!==t.start&&(r+="<i>"+t.start+"</i>");for(var o=0;o<26;o++)r+="<i"+(97+o==e?' class="on"':"")+">"+String.fromCharCode(97+o)+"</i>";return r+"</span>"},getUpperCase:function(t,n,e){if(this.inArr(t.fixed,n))return'<span><i class="on">'+n+"</i></span>";var r="<span>";""!==t.start&&(r+="<i>"+t.start+"</i>");for(var o=0;o<26;o++)r+="<i"+(65+o==e?' class="on"':"")+">"+String.fromCharCode(65+o)+"</i>";return r+"</span>"},getUnicode:function(t,n,e){if(this.inArr(t.fixed,n))return'<span><i class="on">'+n+"</i></span>";var r="<span>";""!==t.start&&(r+="<i>"+t.start+"</i>");for(var o=e-this.getRand(2,7);o<e+this.getRand(3,10);o++)r+="<i"+(o==e?' class="on"':"")+">"+String.fromCharCode(o)+"</i>";return r+"</span>"},getHtml:function(t,n){for(var e='<div class="TextAnimate">',r=0;r<n.length;r++){var o=n.substr(r,1),i=o.charCodeAt();e+=i>47&&i<58?this.getNumber(t,o):i>64&&i<91?this.getUpperCase(t,o,i):i>96&&i<123?this.getLowerCase(t,o,i):this.getUnicode(t,o,i)}return e+"</div>"},getRand:function(t,n){return Math.floor(t+Math.random()*(n-t))},inArr:function(t,n){for(var e=0;e<t.length;e++)if(-1!==t[e].indexOf(n))return!0;return!1}};t.fn.leoTextAnimate=function(n){t(this).each(function(){var e=t._data(this,"leoTextAnimate");if(!e){var r=t.extend(!0,{},t.fn.leoTextAnimate.defaults,"object"==typeof n?n:{});e=new o(this,r),t._data(this,"leoTextAnimate",e)}return e[n]?e[n].apply(e,Array.prototype.slice.call(arguments,1)):"object"!=typeof n&&n?(t.error("Method "+n+" does not exist on jQuery.leoTextAnimate"),this):e.init()})}}(jQuery,window,document)},17:function(t,n,e){"use strict";var r=e(5);e.n(r).a},18:function(t,n,e){(t.exports=e(1)(!1)).push([t.i,'\n.number2,.number3{color:#C40000;font-size:60px;font-family:Impact, Haettenschweiler, "Franklin Gothic Bold", "Arial Black", "sans-serif"}\n',""])},2:function(t,n,e){var r,o,i={},s=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),a=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var r=function(t,n){return n?n.querySelector(t):document.querySelector(t)}.call(this,t,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(t){r=null}n[t]=r}return n[t]}}(),u=null,c=0,l=[],f=e(3);function p(t,n){for(var e=0;e<t.length;e++){var r=t[e],o=i[r.id];if(o){o.refs++;for(var s=0;s<o.parts.length;s++)o.parts[s](r.parts[s]);for(;s<r.parts.length;s++)o.parts.push(b(r.parts[s],n))}else{var a=[];for(s=0;s<r.parts.length;s++)a.push(b(r.parts[s],n));i[r.id]={id:r.id,refs:1,parts:a}}}}function d(t,n){for(var e=[],r={},o=0;o<t.length;o++){var i=t[o],s=n.base?i[0]+n.base:i[0],a={css:i[1],media:i[2],sourceMap:i[3]};r[s]?r[s].parts.push(a):e.push(r[s]={id:s,parts:[a]})}return e}function v(t,n){var e=a(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=l[l.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),l.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=a(t.insertAt.before,e);e.insertBefore(n,o)}}function h(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=l.indexOf(t);n>=0&&l.splice(n,1)}function m(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=function(){0;return e.nc}();r&&(t.attrs.nonce=r)}return _(n,t.attrs),v(t,n),n}function _(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function b(t,n){var e,r,o,i;if(n.transform&&t.css){if(!(i="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=i}if(n.singleton){var s=c++;e=u||(u=m(n)),r=B.bind(null,e,s,!1),o=B.bind(null,e,s,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",_(n,t.attrs),v(t,n),n}(n),r=function(t,n,e){var r=e.css,o=e.sourceMap,i=void 0===n.convertToAbsoluteUrls&&o;(n.convertToAbsoluteUrls||i)&&(r=f(r));o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var s=new Blob([r],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}.bind(null,e,n),o=function(){h(e),e.href&&URL.revokeObjectURL(e.href)}):(e=m(n),r=function(t,n){var e=n.css,r=n.media;r&&t.setAttribute("media",r);if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}.bind(null,e),o=function(){h(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=s()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=d(t,n);return p(e,n),function(t){for(var r=[],o=0;o<e.length;o++){var s=e[o];(a=i[s.id]).refs--,r.push(a)}t&&p(d(t,n),n);for(o=0;o<r.length;o++){var a;if(0===(a=r[o]).refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete i[a.id]}}}};var y,g=(y=[],function(t,n){return y[t]=n,y.filter(Boolean).join("\n")});function B(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=g(n,o);else{var i=document.createTextNode(o),s=t.childNodes;s[n]&&t.removeChild(s[n]),s.length?t.insertBefore(i,s[n]):t.appendChild(i)}}},3:function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,r=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o,i=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?e+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},43:function(t,n,e){"use strict";e.r(n);e(16);var r={props:{},data:function(){return{}},mounted(){}},o=(e(17),e(0)),i=Object(o.a)(r,function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h4",[t._v("Basic")]),t._v(" "),e("br"),e("br"),t._v(" "),e("ButtonGroup",[e("Button",[t._v("Cancel")]),t._v(" "),e("Button",{attrs:{type:"primary"}},[t._v("Confirm")])],1),t._v(" "),e("ButtonGroup",[e("Button",{attrs:{disabled:""}},[t._v("Yesterday")]),t._v(" "),e("Button",{attrs:{disabled:""}},[t._v("Today")]),t._v(" "),e("Button",{attrs:{disabled:""}},[t._v("Tomorrow")])],1),t._v(" "),e("ButtonGroup",[e("Button",{attrs:{type:"primary"}},[t._v("L")]),t._v(" "),e("Button",[t._v("M")]),t._v(" "),e("Button",[t._v("M")]),t._v(" "),e("Button",{attrs:{type:"dashed"}},[t._v("R")])],1),t._v(" "),e("br"),e("br"),t._v(" "),e("h4",[t._v("Icons")]),t._v(" "),e("br"),e("br"),t._v(" "),e("ButtonGroup",[e("Button",{attrs:{type:"primary"}},[e("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("\n            Backward\n        ")],1),t._v(" "),e("Button",{attrs:{type:"primary"}},[t._v("\n            Forward\n            "),e("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1),t._v(" "),e("ButtonGroup",[e("Button",{attrs:{type:"primary",icon:"ios-skip-backward"}}),t._v(" "),e("Button",{attrs:{type:"primary",icon:"ios-skip-forward"}})],1),t._v(" "),e("ButtonGroup",[e("Button",{attrs:{icon:"ios-color-wand-outline"}}),t._v(" "),e("Button",{attrs:{icon:"ios-sunny-outline"}}),t._v(" "),e("Button",{attrs:{icon:"ios-crop"}}),t._v(" "),e("Button",{attrs:{icon:"ios-color-filter-outline"}})],1),t._v(" "),e("br"),e("br"),t._v(" "),e("h4",[t._v("Circle")]),t._v(" "),e("br"),e("br"),t._v(" "),e("ButtonGroup",{attrs:{shape:"circle"}},[e("Button",{attrs:{type:"primary"}},[e("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("\n            Backward\n        ")],1),t._v(" "),e("Button",{attrs:{type:"primary"}},[t._v("\n            Forward\n            "),e("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1),t._v(" "),e("ButtonGroup",{attrs:{shape:"circle"}},[e("Button",{attrs:{type:"primary",icon:"ios-skip-backward"}}),t._v(" "),e("Button",{attrs:{type:"primary",icon:"ios-skip-forward"}})],1),t._v(" "),e("ButtonGroup",{attrs:{shape:"circle"}},[e("Button",{attrs:{icon:"ios-color-wand-outline"}}),t._v(" "),e("Button",{attrs:{icon:"ios-sunny-outline"}}),t._v(" "),e("Button",{attrs:{icon:"ios-crop"}}),t._v(" "),e("Button",{attrs:{icon:"ios-color-filter-outline"}})],1),t._v(" "),e("br"),e("br"),t._v(" "),e("h4",[t._v("Size")]),t._v(" "),e("br"),e("br"),t._v(" "),e("ButtonGroup",{attrs:{size:"large"}},[e("Button",[t._v("Large")]),t._v(" "),e("Button",[t._v("Large")])],1),t._v(" "),e("ButtonGroup",[e("Button",[t._v("Default")]),t._v(" "),e("Button",[t._v("Default")])],1),t._v(" "),e("ButtonGroup",{attrs:{size:"small"}},[e("Button",[t._v("Small")]),t._v(" "),e("Button",[t._v("Small")])],1),t._v(" "),e("br"),e("br"),t._v(" "),e("ButtonGroup",{attrs:{size:"large",shape:"circle"}},[e("Button",[t._v("Large")]),t._v(" "),e("Button",[t._v("Large")])],1),t._v(" "),e("ButtonGroup",{attrs:{shape:"circle"}},[e("Button",[t._v("Default")]),t._v(" "),e("Button",[t._v("Default")])],1),t._v(" "),e("ButtonGroup",{attrs:{size:"small",shape:"circle"}},[e("Button",[t._v("Small")]),t._v(" "),e("Button",[t._v("Small")])],1),t._v(" "),e("ButtonGroup",{attrs:{vertical:""}},[e("Button",{attrs:{icon:"logo-facebook"}}),t._v(" "),e("Button",{attrs:{icon:"logo-twitter"}}),t._v(" "),e("Button",{attrs:{icon:"logo-googleplus"}}),t._v(" "),e("Button",{attrs:{icon:"logo-tumblr"}})],1)],1)},[],!1,null,null,null).exports;Vue.component("Index",i);new Vue({el:"#app",delimiters:["[[","]]"],data:{msg:"Hello Vue!"}})},5:function(t,n,e){var r=e(18);"string"==typeof r&&(r=[[t.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};e(2)(r,o);r.locals&&(t.exports=r.locals)}});