(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],d=0,p=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&p.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0bba":function(t,e,n){"use strict";var a=n("fc57"),s=n.n(a);s.a},3159:function(t,e,n){"use strict";var a=n("755f"),s=n.n(a);s.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("task-board")],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"task__board"},[t._l(t.categoryList,(function(e,a){return n("task-template",{key:a,attrs:{taskList:e.list,title:e.name},on:{showModal:t.show}})})),t.showModal?n("modal",{on:{close:function(e){t.showModal=!1},add:t.addTask}}):t._e()],2)])},i=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"modal"}},[n("div",{staticClass:"modal-mask"},[n("div",{staticClass:"modal-wrapper",on:{click:function(e){return e.target!==e.currentTarget?null:t.$emit("close")}}},[n("div",{staticClass:"modal-container"},[n("div",{staticClass:"modal-header",class:{"modal-header-active":t.message}},[t._v(" Введите название задачи ")]),n("div",{staticClass:"modal-body"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.newTask,expression:"newTask"}],ref:"input",staticClass:"modal-input",attrs:{type:"text"},domProps:{value:t.newTask},on:{input:function(e){e.target.composing||(t.newTask=e.target.value)}}})]),n("div",{staticClass:"modal-footer"},[n("button",{staticClass:"modal-default-button",on:{click:t.add}},[t._v(" Add ")])])])])])])},l=[],u=(n("498a"),{name:"Modal",data:function(){return{newTask:"",message:!1}},methods:{add:function(){this.newTask.trim()&&(this.message=!1,this.$emit("add",this.newTask)),this.message=!0,this.$refs["input"].focus()}},mounted:function(){this.$refs["input"].focus()}}),d=u,p=(n("3159"),n("2877")),f=Object(p["a"])(d,c,l,!1,null,"1e1dd48c",null),h=f.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"task"},[n("div",{staticClass:"task__title"},[t._v(t._s(t.title))]),n("draggable",t._b({staticClass:"task__container",attrs:{clone:t.clone},on:{start:function(e){t.drag=!0},end:function(e){t.drag=!1}}},"draggable",t.dragOptions,!1),[n("transition-group",{staticClass:"task__list",attrs:{type:"transition",tag:"div",name:t.drag?null:"flip-list"}},t._l(t.taskList,(function(e,a){return n("div",{key:a,staticClass:"task__item"},[t._v(" "+t._s(e)+" ")])})),0)],1),n("button",{staticClass:"task__button",on:{click:t.showModal}},[n("svg",{staticClass:"button__icon",staticStyle:{"enable-background":"new 0 0 20 20"},attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",id:"Capa_1",x:"0px",y:"0px",viewBox:"0 0 512 512","xml:space":"preserve",width:"15px",height:"15px"}},[n("g",[n("path",{staticClass:"active-path",attrs:{d:"M492,236H276V20c0-11.046-8.954-20-20-20c-11.046,0-20,8.954-20,20v216H20c-11.046,0-20,8.954-20,20s8.954,20,20,20h216    v216c0,11.046,8.954,20,20,20s20-8.954,20-20V276h216c11.046,0,20-8.954,20-20C512,244.954,503.046,236,492,236z","data-original":"#000000","data-old_color":"#000000",fill:"#aeaeae"}})])]),n("span",[t._v("Add another card")])])],1)},v=[],g=(n("b0c0"),n("310e")),b=n.n(g),w={name:"TaskTemplate",props:["title","taskList"],data:function(){return{drag:!1}},computed:{dragOptions:function(){return{animation:200,group:"description",disabled:!1,ghostClass:"ghost"}}},methods:{showModal:function(){this.$emit("showModal",this.title)},clone:function(t){var e=t.name;return{name:e}}},components:{draggable:b.a}},_=w,k=(n("0bba"),Object(p["a"])(_,m,v,!1,null,"3326d8ce",null)),y=k.exports,T={name:"TaskBoard",data:function(){return{showModal:!1,currentTitle:"",categoryList:{"To Do":{name:"To Do",list:["one","two","three"]},"In Progress":{name:"In Progress",list:["one","two","three"]},Done:{name:"Done",list:["one","two","three"]}}}},methods:{addTask:function(t){this.categoryList[this.currentTitle].list.push(t),this.showModal=!1},show:function(t){this.currentTitle=t,this.showModal=!0}},components:{TaskTemplate:y,Modal:h}},x=T,C=(n("a24c"),Object(p["a"])(x,r,i,!1,null,"0928faf9",null)),O=C.exports,M={name:"app",components:{TaskBoard:O}},j=M,P=(n("5c0b"),Object(p["a"])(j,s,o,!1,null,null,null)),$=P.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t($)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("9c0c"),s=n.n(a);s.a},"69e1":function(t,e,n){},"755f":function(t,e,n){},"9c0c":function(t,e,n){},a24c:function(t,e,n){"use strict";var a=n("69e1"),s=n.n(a);s.a},fc57:function(t,e,n){}});
//# sourceMappingURL=app.d34c8c90.js.map