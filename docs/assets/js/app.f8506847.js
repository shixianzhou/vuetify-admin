(function(e){function t(t){for(var a,n,c=t[0],s=t[1],l=t[2],u=0,p=[];u<c.length;u++)n=c[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&p.push(o[n][0]),o[n]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);d&&d(t);while(p.length)p.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,n=1;n<r.length;n++){var c=r[n];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},n={app:0},o={app:0},i=[];function c(e){return s.p+"assets/js/"+({about:"about"}[e]||e)+"."+{about:"45ba1684"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={about:1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="assets/css/"+({about:"about"}[e]||e)+"."+{about:"25279b7d"}[e]+".css",o=s.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===o))return t()}var p=document.getElementsByTagName("style");for(c=0;c<p.length;c++){l=p[c],u=l.getAttribute("data-href");if(u===a||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[e],d.parentNode.removeChild(d),r(i)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var p=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",p.name="ChunkLoadError",p.type=a,p.request=n,r[1](p)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var d=u;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-view")},o=[],i={name:"App",data:function(){return{}}},c=i,s=r("2877"),l=Object(s["a"])(c,n,o,!1,null,null,null),u=l.exports,p=r("9483");Object(p["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var d=r("a18c"),m=r("2f62");a["a"].use(m["a"]);var f=new m["a"].Store({state:{drawers:["Default (no property)","Permanent","Temporary"],primaryDrawer:{model:null,type:"default (no property)",clipped:!1,floating:!1,mini:!1},footer:{inset:!1}},mutations:{},actions:{},modules:{}}),v=r("f309");a["a"].use(v["a"]);var b=new v["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:d["a"],store:f,vuetify:b,render:function(e){return e(u)}}).$mount("#app")},a18c:function(e,t,r){"use strict";r("d3b7");var a=r("2b0e"),n=r("8c4f"),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",{attrs:{id:"sandbox"}},[r("v-navigation-drawer",{attrs:{clipped:e.primaryDrawer.clipped,floating:e.primaryDrawer.floating,"mini-variant":e.$store.state.primaryDrawer.mini,app:"",overflow:""},model:{value:e.primaryDrawer.model,callback:function(t){e.$set(e.primaryDrawer,"model",t)},expression:"primaryDrawer.model"}},[r("v-list",[r("v-list-item",[r("v-list-item-avatar",[r("v-img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.png"}})],1)],1),r("v-list-item",{attrs:{link:""}},[r("v-list-item-content",[r("v-list-item-title",{staticClass:"title"},[e._v("John Leider")]),r("v-list-item-subtitle",[e._v("john@vuetifyjs.com")])],1),r("v-list-item-action",[r("v-icon",[e._v("mdi-menu-down")])],1)],1)],1),r("v-divider"),r("v-list",{attrs:{nav:"",dense:""}},[r("v-list-item-group",{attrs:{color:"primary"},model:{value:e.item,callback:function(t){e.item=t},expression:"item"}},e._l(e.items,(function(t,a){return r("v-list-item",{key:a},[r("v-list-item-icon",[r("v-icon",{domProps:{textContent:e._s(t.icon)}})],1),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:e._s(t.text)}})],1)],1)})),1)],1)],1),r("v-app-bar",{attrs:{"clipped-left":e.primaryDrawer.clipped,app:""}},[r("v-app-bar-nav-icon",{on:{click:function(t){t.stopPropagation(),e.primaryDrawer.model=!e.primaryDrawer.model}}}),r("v-toolbar-title",[e._v("Vuetify")])],1),r("v-content",[r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"10"}},[r("v-card",[r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("span",[e._v("Scheme")]),r("v-switch",{attrs:{primary:"",label:"Dark"},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}}),r("v-switch",{attrs:{label:"Mini",primary:""},model:{value:e.primaryDrawer.mini,callback:function(t){e.$set(e.primaryDrawer,"mini",t)},expression:"primaryDrawer.mini"}})],1),r("v-col",{attrs:{cols:"12",md:"6"}})],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{text:""}},[e._v("Cancel")]),r("v-btn",{attrs:{text:"",color:"primary"}},[e._v("Submit")])],1)],1)],1)],1)],1)],1)],1)},i=[],c=(r("a4d3"),r("4de4"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("ade3")),s=r("2f62");function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){Object(c["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p={data:function(){return{item:"",items:[{icon:"mdi-contacts",text:"Contacts"},{icon:"mdi-history",text:"Frequently contacted"},{icon:"mdi-content-copy",text:"Duplicates"},{icon:"mdi-settings",text:"Settings"},{icon:"mdi-message",text:"Send feedback"},{icon:"mdi-help-circle",text:"Help"},{icon:"mdi-cellphone-link",text:"App downloads"},{icon:"mdi-keyboard",text:"Go to the old version"}]}},computed:u({},Object(s["b"])(["primaryDrawer"]))},d=p,m=r("2877"),f=r("6544"),v=r.n(f),b=r("7496"),y=r("40dc"),h=r("5bc1"),w=r("8336"),g=r("b0af"),O=r("99d9"),j=r("62ad"),D=r("a523"),k=r("a75b"),x=r("ce7e"),V=r("132d"),_=r("adda"),P=r("8860"),C=r("da13"),S=r("1800"),$=r("8270"),A=r("5d23"),E=r("1baa"),L=r("34c3"),I=r("f774"),T=r("0fd9"),N=r("2fa4"),B=r("b73d"),F=r("2a7f"),M=Object(m["a"])(d,o,i,!1,null,null,null),q=M.exports;v()(M,{VApp:b["a"],VAppBar:y["a"],VAppBarNavIcon:h["a"],VBtn:w["a"],VCard:g["a"],VCardActions:O["a"],VCardText:O["b"],VCol:j["a"],VContainer:D["a"],VContent:k["a"],VDivider:x["a"],VIcon:V["a"],VImg:_["a"],VList:P["a"],VListItem:C["a"],VListItemAction:S["a"],VListItemAvatar:$["a"],VListItemContent:A["a"],VListItemGroup:E["a"],VListItemIcon:L["a"],VListItemSubtitle:A["b"],VListItemTitle:A["c"],VNavigationDrawer:I["a"],VRow:T["a"],VSpacer:N["a"],VSwitch:B["a"],VToolbarTitle:F["a"]});var R=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:""}},[r("v-row",{attrs:{align:"center",justify:"center"}},[r("v-col",{attrs:{cols:"10"}},[r("v-card",[r("v-card-text",[r("v-row",[r("v-col",{attrs:{cols:"12",md:"6"}},[r("span",[e._v("Scheme")]),r("v-switch",{attrs:{primary:"",label:"Dark"},model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("span",[e._v("Drawer")]),r("v-radio-group",{attrs:{column:""},model:{value:e.primaryDrawer.type,callback:function(t){e.$set(e.primaryDrawer,"type",t)},expression:"primaryDrawer.type"}},e._l(e.drawers,(function(e){return r("v-radio",{key:e,attrs:{label:e,value:e.toLowerCase(),primary:""}})})),1),r("v-switch",{attrs:{label:"Clipped",primary:""},model:{value:e.primaryDrawer.clipped,callback:function(t){e.$set(e.primaryDrawer,"clipped",t)},expression:"primaryDrawer.clipped"}}),r("v-switch",{attrs:{label:"Floating",primary:""},model:{value:e.primaryDrawer.floating,callback:function(t){e.$set(e.primaryDrawer,"floating",t)},expression:"primaryDrawer.floating"}}),r("v-switch",{attrs:{label:"Mini",primary:""},model:{value:e.primaryDrawer.mini,callback:function(t){e.$set(e.primaryDrawer,"mini",t)},expression:"primaryDrawer.mini"}})],1),r("v-col",{attrs:{cols:"12",md:"6"}},[r("span",[e._v("Footer")]),r("v-switch",{attrs:{label:"Inset",primary:""},model:{value:e.footer.inset,callback:function(t){e.$set(e.footer,"inset",t)},expression:"footer.inset"}})],1)],1)],1),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{text:""}},[e._v("Cancel")]),r("v-btn",{attrs:{text:"",color:"primary"}},[e._v("Submit")])],1)],1)],1)],1)],1)},G=[];function J(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function H(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?J(Object(r),!0).forEach((function(t){Object(c["a"])(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):J(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var K={name:"Settings",data:function(){return{}},computed:H({},Object(s["b"])(["primaryDrawer","drawers","footer"]))},U=K,z=r("67b6"),Q=r("43a6"),W=Object(m["a"])(U,R,G,!1,null,"c4f5dca8",null),X=W.exports;v()(W,{VBtn:w["a"],VCard:g["a"],VCardActions:O["a"],VCardText:O["b"],VCol:j["a"],VContainer:D["a"],VRadio:z["a"],VRadioGroup:Q["a"],VRow:T["a"],VSpacer:N["a"],VSwitch:B["a"]}),a["a"].use(n["a"]);var Y=[{path:"/",name:"home",component:q,children:[{path:"settings",name:"settings",component:X},{path:"/about",name:"about",component:function(){return r.e("about").then(r.bind(null,"f820"))}}]},{path:"/login",name:"login",component:function(){return r.e("about").then(r.bind(null,"a55b"))}}],Z=new n["a"]({base:"",routes:Y});Z.beforeEach((function(e,t,r){1?r():(1,r("/login"))}));t["a"]=Z}});
//# sourceMappingURL=app.f8506847.js.map