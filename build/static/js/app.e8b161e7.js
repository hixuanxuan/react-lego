(self.webpackChunkreact17_webpack5_cli=self.webpackChunkreact17_webpack5_cli||[]).push([[143],{70887:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Be});var n=r(67294),a=r(53231),l=r(69026),o=r(46919),c=r(71577);const i="content--3mdbB",s="title--1maEG",u="section--v5l-I";var p=r(91952);const d="content--XaW2K",m="input--2ufMD",f="title--1iVp6";const v=e=>{var{unit:t,value:r,id:a,title:l,placeholder:o,onChange:c}=e,i=(0,n.useCallback)((e=>{c(a,e.target.value)}),[a,c]);return n.createElement(n.Fragment,null,n.createElement("div",{className:f},l),n.createElement("div",{className:d},n.createElement("input",{value:r,className:m,onChange:i,placeholder:o})))};var g=r(19650);const h="title--1iWMG",b="url--2SlCv",E="btn--llDa9";var y=r(46675),O=r(61606),w=r(84283),j=r(74261),k=r(47933);const C="modal--1jwFq",x="btn--wPbmw",P="item--3yWZa",N="content--1Vp6k";var{Option:I}=y.Z,Z=e=>{var{value:t,onChange:r}=e,l=(0,a.L)((e=>e)),o=Object.keys(l).filter((e=>"type"!==e));return n.createElement(y.Z,{value:t,onChange:r,style:{width:180}},o.map((e=>n.createElement(I,{key:e,value:e},l[e].pageName))))},S=e=>{var{value:t,onChange:r}=e,[a,l]=(0,n.useState)("http://"),[o,c]=(0,n.useState)(""),i=n.createElement(y.Z,{onChange:e=>{l(e)},defaultValue:"http://",className:"select-before"},n.createElement(I,{value:"http://"},"http://"),n.createElement(I,{value:"https://"},"https://"));return n.createElement("div",{style:{marginBottom:16}},n.createElement(O.Z,{value:o,onChange:e=>{var t=e.target.value;c(t),r(a+t)},addonBefore:i,placeholder:"\u8bf7\u8f93\u5165\u7f51\u5740"}))},D={1:{com:n.createElement(Z,null),name:"select",label:"\u5185\u94fe\u9875\u9762",rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u94fe\u63a5\u9875\u9762"}]},2:{com:n.createElement(S,null),name:"input",label:"\u5916\u94feurl",rules:[{required:!0,pattren:/(http|https):\/\/([\w.]+\/?)\S*/,message:"\u8bf7\u8f93\u5165\u6b63\u786e\u5916\u94fe\u7684url"}]}};const B=e=>{var{visible:t,onOk:r,setVisible:a}=e,[l,o]=(0,n.useState)(1),i=(e=>{var t=D[e]||{};return[n.createElement("div",{className:N},n.createElement(w.Z.Item,{label:t.label,rules:t.rules,name:t.name},t.com))]})(l);return n.createElement(j.Z,{title:"\u6dfb\u52a0\u94fe\u63a5",footer:null,onCancel:()=>{a(!1)},visible:t,className:C},n.createElement("div",{className:P},n.createElement(g.Z,{size:2},n.createElement("span",null,"\u9009\u94fe\u63a5\u7c7b\u578b\uff1a"),n.createElement(k.ZP.Group,{onChange:e=>{o(e.target.value)},value:l},n.createElement(k.ZP,{value:1},"\u7ad9\u5185\u94fe\u63a5"),n.createElement(k.ZP,{value:2},"\u7ad9\u5916\u94fe\u63a5")))),n.createElement(w.Z,{onFinish:e=>{(e=>{var t;r(l,e[null===(t=D[l])||void 0===t?void 0:t.name])})(e)}},i,n.createElement(w.Z.Item,null,n.createElement("div",{className:x},n.createElement(c.Z,{type:"primary",htmlType:"submit"},"\u786e\u8ba4\u6dfb\u52a0")))))};const F=e=>{var{value:t={},id:r,onChange:l}=e,[o,i]=n.useState(!1),s=(0,a.L)((e=>e)),u=(0,n.useCallback)((()=>{i(!0)}),[]),p=1===t.type?s[t.url].pageName:t.url;return n.createElement(n.Fragment,null,n.createElement("div",{className:h},"\u8bbe\u7f6e\u94fe\u63a5"),n.createElement(g.Z,{size:8},n.createElement("div",{className:b},p),n.createElement(c.Z,{onClick:u,className:E,type:"primary"},"\u8bbe\u7f6e\u94fe\u63a5"),n.createElement(B,{onOk:(e,t)=>{l(r,{type:e,url:t}),i(!1)},visible:o,setVisible:i})))},z="relative--1E8zX",M="changeImg--2N1Lu",L="addone--1v4ju";var G=r(48086),A=r(93064),H=r(74688),U=r(26139),K=r(21059),W=r(8212),R=r(73171),V=r(49101);function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){Y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var X=e=>{var{link:t,onChange:r,src:a}=e,[l,o]=(0,n.useState)(a),[i,s]=(0,n.useState)(t);return n.createElement(n.Fragment,null,n.createElement("div",{className:z},n.createElement(A.Z,{accept:"image/*",action:"/api/upload",onChange:e=>{var{file:t}=e;if("done"===t.status){var{path:n}=t.response;r("src",n),o(n)}},itemRender:()=>""},n.createElement("img",{style:{width:350,cursor:"pointer",marginBottom:20},src:l,alt:""}),n.createElement("div",{className:M},"\u66f4\u6362\u56fe\u7247"))),n.createElement("div",{style:{display:"flex"}},n.createElement(w.Z.Item,{name:"\u94fe\u63a5\u5730\u5740",label:"\u94fe\u63a5\u5730\u5740"},n.createElement(O.Z,{value:i,onChange:e=>{s(e.target.value)}})),n.createElement(c.Z,{onClick:()=>{r("link",i),G.ZP.success("\u8bbe\u7f6e\u6210\u529f")},style:{marginLeft:20},type:"primary"},"\u8bbe\u7f6e\u94fe\u63a5")))};const J=e=>{var{value:t,onChange:r,id:a}=e,l=[{title:"\u56fe\u7247",width:80,dataIndex:"src",render:e=>n.createElement("img",{src:e,height:28,alt:""})},{title:"\u94fe\u63a5",width:80,dataIndex:"link",render:e=>e||"\u65e0"},{title:"\u6392\u5e8f",width:80,dataIndex:"address",render:(e,l,o)=>o>0?n.createElement(U.Z,{onClick:()=>{var e=[...t];e.splice(o,1),e.splice(o-1,0,l),r(a,e)}}):n.createElement(K.Z,{onClick:()=>{var e=[...t];e.splice(o,1),e.splice(o+1,0,l),r(a,e)}})},{title:"\u64cd\u4f5c",width:80,dataIndex:"oprate",render:(e,l,o)=>{var c=l.link,i=(e,n)=>{var c=[...t];c.splice(o,1,T(T({},l),{[e]:n})),r(a,c)};return n.createElement(n.Fragment,null,n.createElement(W.Z,{onClick:()=>{j.Z.confirm({title:"\u7f16\u8f91",icon:"",content:n.createElement(X,{link:c,onChange:i,src:l.src})})},style:{cursor:"pointer"}}),"\xa0",n.createElement(R.Z,{onClick:()=>{var e=[...t];e.splice(o,1),r(a,e)},style:{cursor:"pointer"}}))}}];return n.createElement(n.Fragment,null,n.createElement(H.Z,{columns:l,dataSource:t,pagination:!1}),n.createElement("div",{className:L},n.createElement(A.Z,{accept:"image/*",action:"/api/upload",onChange:e=>{var{file:n}=e;if("done"===n.status){var{path:l}=n.response;r(a,[...t,{src:l}])}},itemRender:()=>""},n.createElement(V.Z,null),"\u6dfb\u52a0\u6a2a\u5e45")))};var Q=r(71794);const $="wrapper--1TgWk",ee="title--bLRcG",te="left--19Vpk",re="right--2o0g0";function ne(e,t,r,n,a,l,o){try{var c=e[l](o),i=c.value}catch(s){return void r(s)}c.done?t(i):Promise.resolve(i).then(n,a)}const ae=e=>{var{value:t,onChange:r,id:a,aspect:l=2,needCrop:o=!0}=e,c=[];t&&c.push({url:t});var[i,s]=(0,n.useState)(c),[u,p]=(0,n.useState)(c.length),d=function(){var e,t=(e=function*(e){var t=e.url;t||(t=yield new Promise((t=>{var r=new FileReader;r.readAsDataURL(e.originFileObj),r.onload=()=>t(r.result)})));var r=new Image;r.src=t,window.open(t).document.write(r.outerHTML)},function(){var t=this,r=arguments;return new Promise((function(n,a){var l=e.apply(t,r);function o(e){ne(l,n,a,o,c,"next",e)}function c(e){ne(l,n,a,o,c,"throw",e)}o(void 0)}))});return function(e){return t.apply(this,arguments)}}(),m=o?Q.Z:n.Fragment;return n.createElement("div",{className:$},n.createElement("div",{className:ee},n.createElement("p",{className:te},"\u6dfb\u52a0\u56fe\u7247"),n.createElement("p",{className:re},"\u5df2\u9009\u62e9",u,"\u5f20")),n.createElement(m,{rotate:!0,aspect:l},n.createElement(A.Z,{action:"/api/upload",listType:"picture-card",fileList:i,onChange:e=>{var t,{fileList:n}=e;if("done"===(null===(t=n[0])||void 0===t?void 0:t.status)){var{path:l}=n[0].response;r(a,l),s(n),p(null===n||void 0===n?void 0:n.length)}},onPreview:d,onRemove:()=>{r(a,""),s([]),p(0)}},i.length<1&&"+ Upload")))};var le=r(63144),oe=r(55241),ce=r(6767),ie=r.n(ce),se=r(6554),ue=r.n(se);const pe="color-picker-container--1kXYJ",de="color-picker-label--2-0NP",me="color-picker-input-wrap--3n8Py",fe="color-picker-box--OYQE7",ve="color-picker-input--3fzxo",ge="color-picker-value--31eHT",he="color-picker-opacity--3Xh9r",be="popover--2nG50";function Ee(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function ye(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?Ee(Object(r),!0).forEach((function(t){Oe(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):Ee(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Oe(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var we=e=>{var{onChange:t,id:r,value:a}=e,l=ie()(a).object(),[o,c]=n.useState({rgb:{r:l.r,g:l.g,b:l.b,a:l.alpha}}),[i,s]=n.useState(ie()(a).hex()),[u,p]=n.useState(1);return n.createElement("div",{className:pe},n.createElement("div",{className:ge},n.createElement("div",{className:de},"\u989c\u8272"),n.createElement("div",{className:"".concat(me)},n.createElement(oe.Z,{content:n.createElement(le.xS,{color:o.rgb,onChange:e=>{var{hex:n,rgb:a}=e;c({rgb:a}),s(n),p(a.a),t(r,"rgba(".concat(a.r,", ").concat(a.g,", ").concat(a.b,", ").concat(a.a,")"))}}),overlayClassName:be,trigger:"click"},n.createElement("i",{className:fe,style:{background:"rgba(".concat(o.rgb.r,",").concat(o.rgb.g,",").concat(o.rgb.b,",").concat(o.rgb.a||1,")")}})),n.createElement("input",{type:"text",className:ve,value:i,onChange:e=>{var{value:n}=e.target;if(s(n),ue()(n)){var{r:a,g:l,b:o,alpha:i}=ie()(n).object();c({rgb:{r:a,g:l,b:o,a:i||1}}),t(r,"rgba(".concat(a,", ").concat(l,", ").concat(o,", ").concat(i,")"))}}}))),n.createElement("div",{className:he},n.createElement("div",{className:de},"\u4e0d\u900f\u660e\u5ea6"),n.createElement("div",{className:"".concat(me)},n.createElement("input",{type:"number",className:ve,value:u,onChange:e=>{var{value:n}=e.target,{rgb:a}=o;c({rgb:ye(ye({},a),{},{a:n})}),p(n),t(r,"rgba(".concat(a.r,", ").concat(a.g,", ").concat(a.b,", ").concat(n,")"))}}))))};we.defaultProps={defaultColor:"#333",onChange:e=>{}};const je=we;var _e=r(75454);const ke="wrapper--1fVKT",Ce="title--2QwJY",xe="wrap--3EFaE",Pe="slid--2yKy3",Ne="text--AFsqv";const Ie=e=>{var{id:t,value:r,min:a=1,max:l=20,onChange:o,title:c="\u56fe\u6807\u5927\u5c0f"}=e;return n.createElement("div",{className:ke},n.createElement("p",{className:Ce},c),n.createElement("div",{className:xe},n.createElement("div",{className:Pe},n.createElement(_e.Z,{value:r,step:1,max:l,min:a,onChange:e=>o(t,e)})),n.createElement("span",{className:Ne},r)))},Ze={width:{group:"w-h",Component:p.Z,valueKey:"width",props:{unit:"W",id:"width"}},height:{group:"w-h",Component:p.Z,valueKey:"height",props:{unit:"H",id:"height"}},text:{group:"text",Component:v,valueKey:"text",props:{id:"text",title:"\u6587\u672c",placeholder:"\u8bf7\u8f93\u5165\u6587\u5b57"}},link:{group:"link",Component:F,valueKey:"link",props:{id:"link",title:"\u94fe\u63a5",placeholder:"\u8bf7\u8f93\u5165\u8df3\u8f6c\u94fe\u63a5"}},banner:{group:"banner",Component:J,valueKey:"banners",props:{id:"banners"}},upload:{group:"upload",Component:ae,valueKey:"src",props:{id:"src"}},upload2:{group:"upload",Component:ae,valueKey:"src",props:{id:"src",aspect:1}},color:{group:"color",Component:je,valueKey:"color",props:{id:"color"}},size:{group:"size",Component:Ie,valueKey:"size",props:{id:"size",title:"\u56fe\u6807\u5927\u5c0f",min:40,max:100}},count:{group:"count",Component:Ie,valueKey:"count",props:{id:"count",title:"\u4e2a\u6570",min:1,max:20}},fontSize:{group:"fontSize",Component:Ie,valueKey:"fontSize",props:{id:"fontSize",title:"\u5b57\u4f53\u5927\u5c0f",min:12,max:40}},nocropUpload:{group:"upload",Component:ae,valueKey:"src",props:{id:"src",needCrop:!1}}};function Se(){return(Se=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var De={};function Be(e){var{id:t,editFields:r,ext:p=De,selectSection:d}=e,m=(0,a.q)(),f=(0,l.Z)((e=>{var r;return null===e||void 0===e||null===(r=e[m])||void 0===r?void 0:r[t]}))||{},v={},g=[];r&&r.forEach((e=>{var t=Ze[e];t&&(v[t.group]||(g.push(t.group),v[t.group]=[]),v[t.group].push(t))}));var h=(0,o.I0)(),b=(0,n.useCallback)((e=>{h({type:"update_section",id:t,page:m,data:e})}),[t,m]),E=(0,n.useCallback)(((e,t)=>{p.address&&(e="".concat(p.address,".").concat(e)),b({[e]:t})}),[b,p]),y=(0,n.useCallback)((()=>{h({type:"delete_section_data",id:t,pageId:m}),d({id:"",editFields:[]})}),[t,m]);return n.createElement("div",{className:i},n.createElement("div",{className:s},"\u5c5e\u6027"),n.createElement("div",{key:t},g.map((e=>{var t=v[e];return n.createElement("div",{className:u},t.map((e=>{var{Component:t,valueKey:r,props:a}=e;return n.createElement(t,Se({key:p.address?"".concat(p.address,".").concat(r):r,value:_.get(f,p.address?"".concat(p.address,".").concat(r):r),onChange:E},a,{ext:p}))})))})),!!t&&n.createElement(c.Z,{type:"dashed",onClick:y},"\u5220\u9664\u8be5\u7ec4\u4ef6")))}},91952:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(67294);const a="content--3Fifo",l="input--138j3",o="surffix--26fn6";const c=e=>{var{unit:t,value:r,id:c,onChange:i}=e,s=(0,n.useCallback)((e=>{i(c,+e.target.value)}),[c,i]);return[n.createElement("div",{className:a},n.createElement("input",{value:r,className:l,onChange:s,type:"number"}),n.createElement("div",{className:o},t))]}},32183:(e,t,r)=>{"use strict";r.d(t,{Z:()=>j,i:()=>v});var n=r(67294),a=r(29119),l=r(53231),o=r(94184),c=r.n(o),i=r(69026),s=r(46919),u={width:200,height:200};function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var f=(0,n.createContext)((()=>[]));function v(){return(0,n.useContext)(f)()}const g="resizable--1rYtm",h="noBorder--3yFZ7",b="resizing--4x7YT";function E(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function O(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){w(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e){var{children:t,id:r,defaultProps:o,needResize:p,noBorder:m,enable:v,isEdit:y=!0}=e,[w,j]=(0,n.useState)(!1),_={page:(0,l.q)(),id:r};!function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=(0,s.I0)(),a=(0,i.Z)((t=>t[e.page][e.id]));(0,n.useMemo)((()=>{r(d(d({type:"init_section"},e),{},{data:d(d(d({},u),t),a)}))}),Object.values(e))}(_,o);var[k,C]=function(e){var{id:t,page:r}=e,a=(0,l.L)((e=>e[r][t])),o=(0,s.I0)(),c=(0,n.useCallback)((e=>{o({type:"update_section",id:t,page:r,data:e})}),[t,r]),i=(0,n.useCallback)((()=>[a,c]),[a,c]);return[f.Provider,i]}(_),[x,P]=C(),{width:N,height:I}=x,Z=E(x,["width","height"]);return y?n.createElement("div",{style:Z},n.createElement(k,{value:C},v||p?n.createElement(a.e,{className:c()(g,{[h]:m},{[b]:w}),size:{width:N,height:I},onResize:e=>{e.preventDefault(),j(!0)},enable:v,onResizeStop:(e,t,r,n)=>{j(!1),P({width:N+n.width,height:I+n.height})}},n.cloneElement(t,{id:r})):n.cloneElement(t,{id:r}))):n.createElement("div",{style:O(O({},Z),v||p?{width:N,height:I}:{})},n.createElement(k,{value:C},n.cloneElement(t,{id:r})))}},75858:(e,t,r)=>{"use strict";r.d(t,{Y2:()=>o.Z,pH:()=>l});var n=r(67294),a=r(11382);const l=e=>{var{children:t,showLoading:r=!0}=e;return n.createElement(n.Suspense,{fallback:r?n.createElement(a.Z,null):""},(0,n.cloneElement)(t))};var o=r(32183);r(70887);r(91952)},53231:(e,t,r)=>{"use strict";r.d(t,{q:()=>n.Z,L:()=>a.Z});var n=r(24019),a=r(69026)},24019:(e,t,r)=>{"use strict";r.d(t,{I:()=>l,Z:()=>o});var n=r(67294),a=(0,n.createContext)("");function l(e){return[(0,n.useCallback)((t=>{var{children:r}=t;return n.createElement(a.Provider,{value:e},r)}),[e]),e]}function o(){return(0,n.useContext)(a)}},69026:(e,t,r)=>{"use strict";r.d(t,{t:()=>o,Z:()=>c});var n=r(67294),a=r(46919),l=(0,n.createContext)("global"),o=l.Provider;function c(e){var t=(0,n.useContext)(l);return(0,a.v9)((r=>"function"===typeof e?e(r[t].present||r[t]):r[t].present||r[t]),a.wU)}},35302:(e,t,r)=>{"use strict";var n=r(67294),a=r(73935),l=r(14890),o=r(89862),c=r(57865),i=r(46919),s=r(21090),u=r(32121),p=r(18172),d={a:1,b:222};var m=r(73727),f=r(5977);function v(){return(v=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var g=n.createElement("defs",null,n.createElement("filter",{x:"-28.8%",y:"-50.8%",width:"157.5%",height:"201.6%",filterUnits:"objectBoundingBox",id:"lego_svg__l"},n.createElement("feGaussianBlur",{stdDeviation:.5,in:"SourceGraphic"})),n.createElement("filter",{x:"-53.4%",y:"-94.4%",width:"206.7%",height:"288.7%",filterUnits:"objectBoundingBox",id:"lego_svg__k"},n.createElement("feGaussianBlur",{stdDeviation:1,in:"SourceGraphic"})),n.createElement("filter",{x:"-33.3%",y:"-50%",width:"183.3%",height:"183.3%",filterUnits:"objectBoundingBox",id:"lego_svg__b"},n.createElement("feOffset",{dx:1,dy:-1,in:"SourceAlpha",result:"shadowOffsetOuter1"}),n.createElement("feGaussianBlur",{stdDeviation:1.5,in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),n.createElement("feColorMatrix",{values:"0 0 0 0 0.116932191 0 0 0 0 0.27425329 0 0 0 0 0.722830068 0 0 0 0.518838095 0",in:"shadowBlurOuter1"})),n.createElement("filter",{x:"-29.2%",y:"-45.8%",width:"175%",height:"175%",filterUnits:"objectBoundingBox",id:"lego_svg__e"},n.createElement("feGaussianBlur",{stdDeviation:1,in:"SourceAlpha",result:"shadowBlurInner1"}),n.createElement("feOffset",{dx:-1,dy:1,in:"shadowBlurInner1",result:"shadowOffsetInner1"}),n.createElement("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:-1,k3:1,result:"shadowInnerInner1"}),n.createElement("feColorMatrix",{values:"0 0 0 0 0.0323667688 0 0 0 0 0.207740148 0 0 0 0 0.707790209 0 0 0 1 0",in:"shadowInnerInner1",result:"shadowMatrixInner1"}),n.createElement("feGaussianBlur",{stdDeviation:1,in:"SourceAlpha",result:"shadowBlurInner2"}),n.createElement("feOffset",{dx:-1,dy:1,in:"shadowBlurInner2",result:"shadowOffsetInner2"}),n.createElement("feComposite",{in:"shadowOffsetInner2",in2:"SourceAlpha",operator:"arithmetic",k2:-1,k3:1,result:"shadowInnerInner2"}),n.createElement("feColorMatrix",{values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.732179442 0",in:"shadowInnerInner2",result:"shadowMatrixInner2"}),n.createElement("feMerge",null,n.createElement("feMergeNode",{in:"shadowMatrixInner1"}),n.createElement("feMergeNode",{in:"shadowMatrixInner2"}))),n.createElement("filter",{x:"-50%",y:"-33.3%",width:"183.3%",height:"183.3%",filterUnits:"objectBoundingBox",id:"lego_svg__f"},n.createElement("feOffset",{dx:-1,dy:1,in:"SourceAlpha",result:"shadowOffsetOuter1"}),n.createElement("feGaussianBlur",{stdDeviation:1.5,in:"shadowOffsetOuter1",result:"shadowBlurOuter1"}),n.createElement("feColorMatrix",{values:"0 0 0 0 0.116932191 0 0 0 0 0.27425329 0 0 0 0 0.722830068 0 0 0 0.518838095 0",in:"shadowBlurOuter1"})),n.createElement("filter",{x:"-45.8%",y:"-29.2%",width:"175%",height:"175%",filterUnits:"objectBoundingBox",id:"lego_svg__i"},n.createElement("feGaussianBlur",{stdDeviation:1,in:"SourceAlpha",result:"shadowBlurInner1"}),n.createElement("feOffset",{dx:1,dy:1,in:"shadowBlurInner1",result:"shadowOffsetInner1"}),n.createElement("feComposite",{in:"shadowOffsetInner1",in2:"SourceAlpha",operator:"arithmetic",k2:-1,k3:1,result:"shadowInnerInner1"}),n.createElement("feColorMatrix",{values:"0 0 0 0 0.0323667688 0 0 0 0 0.207740148 0 0 0 0 0.707790209 0 0 0 1 0",in:"shadowInnerInner1",result:"shadowMatrixInner1"}),n.createElement("feGaussianBlur",{stdDeviation:1,in:"SourceAlpha",result:"shadowBlurInner2"}),n.createElement("feOffset",{dx:1,dy:1,in:"shadowBlurInner2",result:"shadowOffsetInner2"}),n.createElement("feComposite",{in:"shadowOffsetInner2",in2:"SourceAlpha",operator:"arithmetic",k2:-1,k3:1,result:"shadowInnerInner2"}),n.createElement("feColorMatrix",{values:"0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.732179442 0",in:"shadowInnerInner2",result:"shadowMatrixInner2"}),n.createElement("feMerge",null,n.createElement("feMergeNode",{in:"shadowMatrixInner1"}),n.createElement("feMergeNode",{in:"shadowMatrixInner2"}))),n.createElement("filter",{x:"-78%",y:"-137.9%",width:"255.9%",height:"375.9%",filterUnits:"objectBoundingBox",id:"lego_svg__j"},n.createElement("feGaussianBlur",{stdDeviation:1.5,in:"SourceGraphic"})),n.createElement("linearGradient",{x1:"50%",y1:"2.345%",x2:"50%",y2:"100%",id:"lego_svg__a"},n.createElement("stop",{stopColor:"#34A8FF",offset:"0%"}),n.createElement("stop",{stopColor:"#1D54F0",offset:"100%"})),n.createElement("linearGradient",{x1:"55.86%",y1:"66.197%",x2:"4.456%",y2:"46.912%",id:"lego_svg__h"},n.createElement("stop",{stopColor:"#FFF",offset:"0%"}),n.createElement("stop",{stopColor:"#CED6EF",offset:"100%"})),n.createElement("linearGradient",{x1:"27.307%",y1:"62.295%",x2:"100%",y2:"26.134%",id:"lego_svg__d"},n.createElement("stop",{stopColor:"#E9EBF2",offset:"0%"}),n.createElement("stop",{stopColor:"#BFCAEC",offset:"100%"})),n.createElement("path",{d:"M6.495 9.626c2.857 0 7.065 7.719 5.715 10.104-1.349 2.385-9.923 2.667-11.431 0C-.73 17.063 3.637 9.626 6.495 9.626z",id:"lego_svg__c"}),n.createElement("path",{d:"M14.054.374c2.858 0 7.065 7.719 5.716 10.104-1.35 2.385-9.923 2.667-11.432 0C6.83 7.811 11.196.374 14.054.374z",id:"lego_svg__g"})),h=n.createElement("g",{fill:"none",fillRule:"evenodd"},n.createElement("path",{d:"M11.537 0h8.926c4.011 0 5.466.418 6.933 1.202a8.178 8.178 0 013.402 3.402C31.582 6.071 32 7.526 32 11.537v8.926c0 4.011-.418 5.466-1.202 6.933a8.178 8.178 0 01-3.402 3.402C25.929 31.582 24.474 32 20.463 32h-8.926c-4.011 0-5.466-.418-6.933-1.202a8.178 8.178 0 01-3.402-3.402C.418 25.929 0 24.474 0 20.463v-8.926c0-4.011.418-5.466 1.202-6.933a8.178 8.178 0 013.402-3.402C6.071.418 7.526 0 11.537 0z",fill:"url(#lego_svg__a)"}),n.createElement("g",{transform:"rotate(90 10.75 16.5)"},n.createElement("use",{fill:"#000",filter:"url(#lego_svg__b)",xlinkHref:"#lego_svg__c"}),n.createElement("use",{fill:"url(#lego_svg__d)",xlinkHref:"#lego_svg__c"}),n.createElement("use",{fill:"#000",filter:"url(#lego_svg__e)",xlinkHref:"#lego_svg__c"})),n.createElement("g",{transform:"rotate(-90 24.156 9.654)"},n.createElement("use",{fill:"#000",filter:"url(#lego_svg__f)",xlinkHref:"#lego_svg__g"}),n.createElement("use",{fill:"url(#lego_svg__h)",xlinkHref:"#lego_svg__g"}),n.createElement("use",{fill:"#000",filter:"url(#lego_svg__i)",xlinkHref:"#lego_svg__g"})),n.createElement("path",{d:"M1.245 17.333c-.159.577-.153 1.453.337 2.06s.978.868 1.9 1.072c.92.204 2.988.382 3.764.283",stroke:"#FFF",strokeWidth:.5,strokeLinecap:"round",filter:"url(#lego_svg__j)",transform:"rotate(90 10.75 16.5)"}),n.createElement("path",{d:"M1.245 17.333c-.159.577-.153 1.453.337 2.06s.978.868 1.9 1.072c.92.204 2.988.382 3.764.283",stroke:"#FFF",strokeWidth:.5,strokeLinecap:"round",filter:"url(#lego_svg__k)",transform:"rotate(90 10.75 16.5)"}),n.createElement("path",{d:"M1.245 17.333c-.159.577-.153 1.453.337 2.06s.978.868 1.9 1.072c.92.204 2.988.382 3.764.283",stroke:"#FFF",strokeWidth:.5,strokeLinecap:"round",filter:"url(#lego_svg__l)",transform:"rotate(90 10.75 16.5)"}));const b=function(e){return n.createElement("svg",v({width:32,height:33,xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e),g,h)};function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var y=n.createElement("path",{d:"M10.64 17.57a.77.77 0 011-.02.755.755 0 01.102 1.069A3.559 3.559 0 018.956 20l-.217-.01a3.557 3.557 0 01-2.56-1.371l-.065-.092a.755.755 0 01.167-.978.77.77 0 011.078.102 1.99 1.99 0 003.194 0h.01zM8.966 0c3.07 0 6.512 2.165 6.903 5.64v1.813c.133.654.439 1.261.887 1.76.026.03.05.062.07.096a4.06 4.06 0 01.675 2.05l-.027.185a4.14 4.14 0 01-.94 2.754 4.886 4.886 0 01-3.123 1.54 40.656 40.656 0 01-8.872 0 4.832 4.832 0 01-3.07-1.54 4.08 4.08 0 01-.967-2.736v-.123a4.2 4.2 0 01.728-2.103l.07-.088c.445-.5.751-1.107.888-1.76V5.675l.049-.1a.765.765 0 011.415.259v1.812a.454.454 0 010 .097 5.263 5.263 0 01-1.225 2.446 2.528 2.528 0 00-.39 1.25v.193c-.02.623.188 1.233.586 1.716a3.32 3.32 0 002.076.985 40.03 40.03 0 008.588 0 3.329 3.329 0 002.12-1.029c.378-.472.576-1.06.56-1.663v-.202a2.624 2.624 0 00-.382-1.259 5.265 5.265 0 01-1.296-2.446.454.454 0 010-.097v-1.82c-.257-2.658-2.927-4.304-5.252-4.304a5.76 5.76 0 00-2.821.73l-.106.053a.769.769 0 01-.67-.047.755.755 0 01.03-1.325A7.25 7.25 0 018.966 0z",fill:"#131746",fillRule:"nonzero",opacity:.7});const O=function(e){return n.createElement("svg",E({width:18,height:20,xmlns:"http://www.w3.org/2000/svg"},e),y)};var w=r(62529),j=r(51890),_=r(51908),k=r(94184),C=r.n(k);const x="wrappers--aot64",P="hide--1ohv1",N="left-fix--Dpgny",I="legotext--3oibW",Z="right-fix--33zpe",S="notice--2SVqF",D="avatar--2cLHq";const B=e=>{var{showHeader:t=!0}=e;(0,f.UO)();return n.createElement("div",{className:C()(x,{[P]:!t})},n.createElement("div",{className:N},n.createElement(b,null),n.createElement("span",{className:I},"\u697d\u9ad8"),n.createElement("span",{className:I},"Legao")),n.createElement("div",{className:Z},n.createElement("div",null,n.createElement(w.Z,{count:5,size:"small",offset:[-3,5]},n.createElement("div",{className:S},n.createElement(O,null)))),n.createElement("div",{className:D},n.createElement(j.C,{size:40,src:n.createElement(_.Z,{src:"https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"})}))))};var F=r(75858),z=r(69026),M=r(85585),L=[{name:"demo",path:"/demo/:tabs",Component:()=>(0,M.Z)(r.e(577).then(r.bind(r,55031))),showLayout:!0},{name:"editContent",path:"/edit/:pro/:uid",Component:()=>(0,M.Z)(Promise.all([r.e(669),r.e(688),r.e(836),r.e(429)]).then(r.bind(r,15895))),showLayout:!0},{name:"login",path:"/login",Component:()=>(0,M.Z)(Promise.all([r.e(669),r.e(535)]).then(r.bind(r,40939))),showLayout:!1,showHeader:!1},{name:"addproject",path:"/addproject",Component:()=>(0,M.Z)(Promise.all([r.e(669),r.e(927),r.e(300)]).then(r.bind(r,13140))),showLayout:!0,showHeader:!0},{name:"manage",path:"/manage",Component:()=>(0,M.Z)(r.e(975).then(r.bind(r,95050))),showLayout:!1,showHeader:!1}],G=e=>((0,n.useEffect)((()=>{}),[]),n.createElement(f.rs,null,L.map((e=>n.createElement(f.AW,{key:e.path,exact:!e.exact||e.exact,path:e.path,render:()=>(e=>{var t,{showLayout:r=!0,showLoading:a,Component:l,name:o,showHeader:c}=e;return t="function"===typeof l?l():l,n.createElement(n.Fragment,null,r&&n.createElement(z.t,{value:"layout/header/"},n.createElement(B,{showHeader:c})),n.createElement(z.t,{value:"pages/".concat(o,"/")},n.createElement(F.pH,{showLoading:a},n.createElement(t,null))))})(e)}))),n.createElement(f.AW,{render:()=>"no match"})));const A=()=>n.createElement(m.VK,null,n.createElement(G,null));function H(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function U(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var K=["layout/header/","pages/editContent/",false].filter(Boolean),W=(0,l.MT)((0,l.UY)(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?H(Object(r),!0).forEach((function(t){U(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):H(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({global:(0,s.ZP)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:d,t=arguments.length>1?arguments[1]:void 0;return(0,p.Uy)(e,(e=>{var{type:r}=t;switch(r){case"add":e.a++;default:return e}}))}))},(0,u._I)(K))),{});a.render(n.createElement(i.zt,{store:W},n.createElement(o.W,{backend:c.PD},n.createElement(A,null))),document.getElementById("root"))},63932:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>a});var n={hha:1};function a(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:n;return e}},67093:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>p});var n=r(18172),a=r(21090),l=r(32121);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s={"1111-2222-333":{pageName:"\u9ed8\u8ba4\u9875\u9762",list:[]}};function u(e,t){Object.keys(e).forEach((r=>{["width","height","left","top","size","fontSize"].includes(r)&&+e[r]&&(e[r]=(0,l.jz)(e[r],t)),"object"===typeof e[r]&&u(e[r],t)}))}const p=(0,a.ZP)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;return(0,n.Uy)(e,(r=>{var{type:n}=t;switch(n){case"reset_project_data":var{data:a}=t;return u(a,a.type),document.body.style.fontSize="".concat((0,l.jz)(12,n),"px"),a;case"create_page_data":var{key:o,data:i}=t;r[o]=i;break;case"delete_page_data":var{key:s}=t;delete r[s];break;case"init_section":var{page:p,id:d,data:m}=t;r[p][d]=m;break;case"update_page_name":var{pageName:f,page:v}=t;r[v].pageName=f;break;case"update_section":var{page:g,id:h,data:b}=t;if(b.children){var E=e[g][h].children||[];b.children=[...E,...b.children]}r[g][h]=c(c({},e[g][h]),b);break;case"update_list":var{page:y,data:O}=t;r[y]=c(c({},r[y]),{},{list:O});break;default:return r}}))}))},89036:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var n=r(18172),a=r(21090),l=r(96486),o=r.n(l),c=r(44586);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var p={"1111-2222-333":{pageName:"\u9ed8\u8ba4\u9875\u9762",list:[]}};const d=(0,a.ZP)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;return(0,n.Uy)(e,(r=>{var{type:n}=t;switch(n){case"reset_project_data":var{data:a}=t;return Object.keys(a).forEach((e=>{"tmp"===e&&(a[(0,c.Z)()]=a[e],delete a.tmp)})),a;case"create_page_data":var{key:l,data:i}=t;r[l]=i;break;case"delete_page_data":var{key:u}=t;delete r[u];break;case"delete_section_data":var{id:p,pageId:d}=t,m=r[d].list.filter((e=>e.id!==p));delete r[d][p],r[d].list=m;break;case"init_section":var{page:f,id:v,data:g}=t;r[f][v]=g;break;case"update_page_name":var{pageName:h,page:b}=t;r[b].pageName=h;break;case"update_section":var{page:E,id:y,data:O}=t;if(O.children){var w=e[E][y].children||[];O.children=[...w,...O.children]}Object.keys(O).map((e=>o().set(r[E][y],e,O[e])));break;case"update_list":var{page:j,data:_}=t;r[j]=s(s({},r[j]),{},{list:_});break;default:return r}}))}))},32121:(e,t,r)=>{"use strict";r.d(t,{jz:()=>l,_I:()=>n});const n=e=>{var t={};return e.forEach((e=>{var n=r(77543)("./".concat(e,"reducer"));t[e]=n.default||n})),t};r(85585);var a={iphone:324,h5:324,"iphone-11":410,"iphone-se":375,mbp:479,mbp2:438,"mbp-1024":386};function l(e,t){return e*document.body.clientWidth/a[t]}},85585:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(67294);const a=e=>{var t=e.default||e;return!t||"object"!==typeof t&&"function"!==typeof t||"function"!==typeof t.then?t:(0,n.lazy)((()=>t))}},77543:(e,t,r)=>{var n={"./layout/header/reducer":63932,"./pages/client/reducer":67093,"./pages/editContent/reducer":89036};function a(e){var t=l(e);return r(t)}function l(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=l,e.exports=a,a.id=77543}},0,[[35302,523,673]]]);