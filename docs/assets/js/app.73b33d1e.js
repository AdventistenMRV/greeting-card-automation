(function(e){function t(t){for(var r,c,u=t[0],i=t[1],s=t[2],f=0,d=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return u.p+"assets/js/"+({about:"about"}[e]||e)+"."+{about:"fdb08f92"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var s=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("cd49")},"1f32":function(e,t,n){},cd49:function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},a=Object(r["f"])("Home"),c=Object(r["f"])(" | "),u=Object(r["f"])("About");function i(e,t){var n=Object(r["t"])("router-link"),i=Object(r["t"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",o,[Object(r["g"])(n,{to:"/"},{default:Object(r["y"])((function(){return[a]})),_:1}),c,Object(r["g"])(n,{to:"/about"},{default:Object(r["y"])((function(){return[u]})),_:1})]),Object(r["g"])(i)],64)}n("f4c1");var s=n("6b0d"),f=n.n(s);const l={},d=f()(l,[["render",i]]);var p=d,b=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),h={class:"home"},v=Object(r["e"])("h1",null,"Hello World",-1),m=["src"];function j(e,t,n,o,a,c){return Object(r["p"])(),Object(r["d"])("div",h,[v,Object(r["z"])(Object(r["e"])("iframe",{src:e.base64PDF},null,8,m),[[r["w"],e.showPDF]])])}var O=n("1da1"),g=(n("96cf"),n("d4ec")),y=n("bee2"),w=n("e198"),P=function(){function e(){Object(g["a"])(this,e),this.templateName="hello"}return Object(y["a"])(e,[{key:"sayHello",value:function(e){console.log("Hello "+e)}},{key:"createPdf",value:function(){var e=Object(O["a"])(regeneratorRuntime.mark((function e(){var t,n,r,o,a,c,u,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://pdf-lib.js.org/assets/with_update_sections.pdf",e.next=3,fetch(t).then((function(e){return e.arrayBuffer()}));case 3:return n=e.sent,e.next=6,w["PDFDocument"].load(n);case 6:return r=e.sent,e.next=9,r.embedFont(w["StandardFonts"].Helvetica);case 9:o=e.sent,a=r.getPages(),c=a[0],u=c.getSize(),u.width,i=u.height,c.drawText("This text was added with JavaScript!",{x:5,y:i/2+300,size:50,font:o,color:Object(w["rgb"])(.95,.1,.1),rotate:Object(w["degrees"])(-45)}),r.saveAsBase64({dataUri:!0}).then((function(e){return console.log(e)}));case 15:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}]),e}(),x=Object(r["h"])({name:"Home",data:function(){return{card:new P,showPDF:!1,base64PDF:""}},components:{},mounted:function(){var e=this;return Object(O["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.card.sayHello("Vivian"),t.next=3,e.card.createPdf().then((function(t){e.showPDF=!0,console.log(t)}));case 3:case"end":return t.stop()}}),t)})))()}});const k=f()(x,[["render",j]]);var _=k,F=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],H=Object(b["a"])({history:Object(b["b"])(),routes:F}),S=H;Object(r["c"])(p).use(S).mount("#app")},f4c1:function(e,t,n){"use strict";n("1f32")}});
//# sourceMappingURL=app.73b33d1e.js.map