(function(e){function t(t){for(var a,c,o=t[0],f=t[1],i=t[2],j=0,d=[];j<o.length;j++)c=o[j],n[c]&&d.push(n[c][0]),n[c]=0;for(a in f)Object.prototype.hasOwnProperty.call(f,a)&&(e[a]=f[a]);b&&b(t);while(d.length)d.shift()();return r.push.apply(r,i||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],a=!0,o=1;o<s.length;o++){var f=s[o];0!==n[f]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var a={},n={app:0},r=[];function c(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=a,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(s,a,function(t){return e[t]}.bind(null,a));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],f=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var b=f;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("cd49")},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb718","./de-ch.js":"bb718","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"73332","./en-il.js":"73332","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function n(e){var t=r(e);return s(t)}function r(e){var t=a[e];if(!(t+1)){var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}return t}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id="4678"},9143:function(e,t,s){},c25a:function(e,t,s){"use strict";var a=s("9143"),n=s.n(a);n.a},cd49:function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d"),s("db4d");var a=s("a026"),n=s("f23d"),r=(s("3aed"),s("bb71"));s("da64");a["a"].use(r["a"],{iconfont:"md"});var c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-app",[s("v-toolbar",{attrs:{app:""}},[s("v-toolbar-title",{staticClass:"headline text-uppercase"},[s("span",[e._v("Vue")]),s("span",{staticClass:"font-weight-light"},[e._v(" Start Template")])]),s("v-spacer"),s("v-btn",{attrs:{flat:"",href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank"}},[s("span",{staticClass:"mr-2"},[e._v("Latest Release")])])],1),s("v-content",[s("router-view")],1)],1)},o=[],f=s("d225"),i=s("308d"),b=s("6bb5"),j=s("4e2b"),d=s("9ab4"),l=s("60a3"),u=function(e){function t(){return Object(f["a"])(this,t),Object(i["a"])(this,Object(b["a"])(t).apply(this,arguments))}return Object(j["a"])(t,e),t}(l["b"]);u=d["a"]([Object(l["a"])({components:{}})],u);var p=u,v=p,h=s("2877"),m=s("6544"),g=s.n(m),y=s("7496"),k=s("8336"),w=s("549c"),O=s("9910"),_=s("71d9"),z=s("2a7f"),C=Object(h["a"])(v,c,o,!1,null,null,null),T=C.exports;g()(C,{VApp:y["a"],VBtn:k["a"],VContent:w["a"],VSpacer:O["a"],VToolbar:_["a"],VToolbarTitle:z["a"]});var V=T,x=s("8c4f"),S=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("v-container",[s("h1",[e._v("Vue with Vuetify & Ant Design Vue")]),s("div",[s("a-button",{attrs:{type:"primary"}},[e._v("Primary")]),s("a-button",[e._v("Default")]),s("a-button",{attrs:{type:"dashed"}},[e._v("Dashed")]),s("a-button",{attrs:{type:"danger"}},[e._v("Danger")])],1),s("v-divider",{staticClass:"my-5"}),s("p",{staticClass:"display-2"},[e._v("VUETIFY MATERIAL DESIGN")]),s("div",{staticClass:"elevation-2 pa-3"},[s("v-btn",{attrs:{color:"primary"}},[e._v("ACTION")]),s("v-btn",{attrs:{color:"secondary"}},[e._v("ACTION")]),s("v-btn",{attrs:{color:"info"}},[e._v("ACTION")]),s("v-btn",{attrs:{color:"error"}},[e._v("ACTION")])],1)],1)},A=[],N=function(e){function t(){return Object(f["a"])(this,t),Object(i["a"])(this,Object(b["a"])(t).apply(this,arguments))}return Object(j["a"])(t,e),t}(l["b"]);N=d["a"]([Object(l["a"])({components:{}})],N);var D=N,E=D,I=(s("c25a"),s("a523")),P=s("ce7e6"),M=Object(h["a"])(E,S,A,!1,null,"3dbda338",null),F=M.exports;g()(M,{VBtn:k["a"],VContainer:I["a"],VDivider:P["a"]});var q=F;a["a"].use(x["a"]);var B=new x["a"]({mode:"history",base:"/",routes:[{path:"/",name:"main",component:q}]}),G=s("2f62");a["a"].use(G["a"]);var L=new G["a"].Store({state:{},mutations:{},actions:{}}),U=s("9483");Object(U["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}}),a["a"].config.productionTip=!1,a["a"].use(n["a"]),new a["a"]({router:B,store:L,render:function(e){return e(V)}}).$mount("#app")}});
//# sourceMappingURL=app.c31eff5f.js.map