(self.webpackChunkreact17_webpack5_cli=self.webpackChunkreact17_webpack5_cli||[]).push([[836],{69604:(e,t,r)=>{"use strict";r.d(t,{Z:()=>Z,$:()=>T});var n=r(67294),i=r(71577),a=r(84785),o=r(44586);const c="carousel--3b9GF";var l=r(90706),s=r(32183),d=e=>{var[t]=(0,s.i)(),[r,i]=(0,n.useState)("auto");return n.createElement(l.Z,{className:c,autoplay:!0},t.banners.map((e=>n.createElement("img",{key:e.src,src:e.src,onLoad:e=>{var{height:t}=e.target;t>r&&i(t)},alt:""}))))};d.defaultProps={banners:[{src:"http://19446153.s61i.faiusr.com/2/AD0IifOiCRACGAAg6_zU5gUowsiZ_AQw7gU46AI!900x900.jpg.webp"},{src:"http://19446153.s61i.faiusr.com/2/AD0IifOiCRACGAAg6_zU5gUoqJOuhwEw7gU46AI!900x900.jpg.webp"}]},d.editFields=["banner"];const u=d;var p=r(18065),g=r(17571);const f="content--1yOKC";function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function v(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){h(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function h(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var y={backgroundColor:"white",padding:"0 10px",textAlign:"center",width:"100%",height:"200",position:"relative"},b=e=>{var t=(0,g.f)(),r=(0,n.useRef)(null),[i,o]=(0,s.i)(),[c,l]=(0,n.useState)(!1),[,d]=(0,a.useDrop)({accept:"item",drop:(e,t)=>{var n,i=null===(n=r.current)||void 0===n?void 0:n.getBoundingClientRect(),{width:a,height:c}=i;if(e.update){var l=t.getDifferenceFromInitialOffset(),s=(e.state.current.left||0)+l.x,d=(e.state.current.top||0)+l.y;if(s<0||d<0||s+e.state.current.width>a||d+e.state.current.height>c)return!1;e.update({left:s,top:d,position:"absolute"})}return{update:o}}}),u=(0,n.useCallback)(((e,t)=>!0),[]),m=(0,n.useCallback)(((e,t)=>{}),[]);return d(r),n.createElement("div",{className:f,style:v(v({},y),{},{background:c?"gray":""}),ref:r},i.children?i.children.map(((e,r)=>{var i=T[e.elementType];return n.createElement(s.Z,{id:e.id,defaultProps:i.defaultProps,needResize:!0,noBorder:!0,isEdit:!1},n.createElement(p.Z,{index:r,type:e.type,containerType:e.containerType,key:e.id,handleSelect:r=>{t({id:e.id,editFields:i.editFields}),r.stopPropagation()},moveCard:m,canDrag:u,isFree:!0},n.createElement(i,null)))})):"")};b.enable={bottom:!0},b.defaultProps={width:"100%"};const w=b;var A=r(5977);const O="wrapper--19KLP",C="item--3VQ09",D="icon--36gPq";function E(){return(E=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var P=e=>{var{id:t,idx:r,text:i,src:a,size:o,color:c,fontSize:l}=e,s=(0,g.f)();return n.createElement("div",{className:C,onClick:e=>{e.stopPropagation(),s({id:t,editFields:["fontSize","color","upload2","text"],ext:{address:"navs."+r}})}},n.createElement("div",{style:{width:o,backgroundColor:c,height:o},className:D},n.createElement("img",{style:{width:o-10},src:a})),n.createElement("span",{style:{fontSize:l}},i))};P.defaultProps={text:"\u5546\u52a1",src:r(62274),width:43,color:"#82BAFF",fontSize:12};var x=e=>{var{id:t,type:r}=e,[{size:i=40,count:a,navs:o=[]}]=(0,s.i)();return n.createElement("div",{className:O},o.slice(0,a).map(((e,r)=>n.createElement(P,E({id:t,idx:r,size:i},e)))))};x.editFields=["size","count"],x.defaultProps={navs:Array(20).fill(1).map((e=>({text:"\u5546\u52a1",src:r(62274),width:43,color:"#82BAFF",fontSize:12}))),count:10};const k=x,j="text--2FxhQ";function U(e){(e=e||window.event).preventDefault();var t=(e.originalEvent||e).clipboardData.getData("text/plain")||"";document.execCommand("insertText",!1,t)}var I=e=>{var[{content:t,color:r,fontSize:i},a]=(0,s.i)(),o=(0,n.useRef)("");return(0,n.useLayoutEffect)((()=>{o.current=t}),[]),n.createElement("div",{className:j,style:{color:r,fontSize:i},contentEditable:!1,onPaste:U,onInput:function(e){var t=e.target.innerHTML;a({content:t})},dangerouslySetInnerHTML:{__html:o.current}})};I.editFields=["color","fontSize"],I.defaultProps={color:"#333",content:"\u70b9\u51fb\u5373\u53ef\u8f93\u5165",height:30,fontSize:12};const B=I;function R(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function S(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?R(Object(r),!0).forEach((function(t){F(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):R(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function M(){var[{width:e,height:t,link:r,src:i}]=(0,s.i)(),a=(0,A.UO)(),o=(0,A.k6)();return n.createElement("img",{src:i,style:{width:e,height:t},onClick:()=>{if(null!==r&&void 0!==r&&r.type)switch(r.type){case 1:o.push("/client/".concat(a.pro,"/").concat(r.url));break;case 2:window.open(r.url)}}})}function K(){var[{text:e="\u6309\u94ae",width:t,height:r,link:a}]=(0,s.i)(),o=(0,A.UO)(),c=(0,A.k6)();return n.createElement(i.Z,{style:{width:t,height:r},onClick:()=>{if(null!==a&&void 0!==a&&a.type)switch(a.type){case 1:c.push("/client/".concat(o.pro,"/").concat(a.url));break;case 2:window.open(a.url)}},type:"primary"},e)}M.editFields=["width","height","link","nocropUpload"],M.defaultProps={width:"100%"},K.editFields=["width","height","text","link"],K.defaultProps={width:64,height:32};var L=()=>{var[{src:e,text:t,width:r,height:i,color:a}]=(0,s.i)();return n.createElement("div",{style:{width:r,height:i}},n.createElement("img",{style:{width:"100%"},src:e}),n.createElement("p",{style:{color:a,textAlign:"center"}},t))};L.defaultProps={src:"http://19446153.s61i.faiusr.com/2/AD0IifOiCRACGAAg6_zU5gUoqJOuhwEw7gU46AI!900x900.jpg.webp",text:"demo",width:"100%",color:"#333"},L.editFields=["width","height","text","color","upload"];var T={ImageCom:L,ButtonDemo:K,FreeContainer:w,Carousel:u,CubeNav:k,TextCom:B,ImageDemo:M};const Z=e=>{var{elementType:t,cardList:r,changeCardList:i,children:c,accept:l,containerType:d}=e,[u,p]=(0,s.i)(),g={type:l||"card",elementType:t,containerType:d||"normal",update:p},[,f]=(0,a.useDrag)({item:g,begin:e=>(r.find((e=>-1===e.id))||i([{bg:"aqua",category:"\u653e\u8fd9\u91cc",id:-1},...r]),g),end(e,t){var n=t.getDropResult(),a=r.findIndex((e=>-1===e.id)),c=[...r];if(n&&n.update)return c.splice(a,1),n.update({children:[S(S({},t.getItem()),{},{id:(0,o.Z)()})]}),void i(c);t.didDrop()?c.splice(a,1,S(S({},t.getItem()),{},{id:(0,o.Z)()})):c.splice(a,1),i(c)}});return n.createElement("div",{ref:f,style:{cursor:"move"}},c)}},18065:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(67294),i=r(84785),a=r(32183),o=0;const c=e=>{var{bg:t,handleSelect:r,index:c,moveCard:l,id:s,children:d,containerType:u,type:p,canDrag:g,isFree:f}=e,m=(0,n.useRef)(null),[v,h]=(0,a.i)(),y=(0,n.useRef)(v);y.current=v;var[{isDragging:b},w,A]=(0,i.useDrag)({collect:e=>({isDragging:e.isDragging()}),canDrag:g&&g.bind(null,m),item:{type:p||"card",index:c,update:h,state:y,isFree:f},end(){}}),[,O]=(0,i.useDrop)({accept:["card","item"],hover(e,t){if(m.current&&!e.isFree){var r=e.index,n=c,i=m.current.getBoundingClientRect(),a=(i.bottom-i.top)/2,s=t.getClientOffset(),d=s.y-i.top,p=s.y-i.bottom+20;r!==n&&("free"===u&&p<0&&d>0||r<n&&d<a||r>n&&d>a||(Date.now()>o+200&&(l(r,n),o=Date.now()),void 0!==e.index&&(e.index=n)))}}}),C=(0,n.useMemo)((()=>({position:"relative",background:t,opacity:-1===s?.4:b?.2:1,verticalAlign:40})),[t,s,b]);return A(O(m)),w(m),n.createElement("div",{ref:m,style:C,onClick:r},d)}},17571:(e,t,r)=>{"use strict";r.d(t,{Z:()=>g,f:()=>p});var n=r(67294),i=r(84785),a=r(18065),o=r(69604),c=r(32183);const l="wrapper--m6xn_",s="inline--1CorS";var d={backgroundColor:"white"},u=(0,n.createContext)((e=>{})),p=()=>(0,n.useContext)(u);const g=e=>{var{cardList:t,changeCardList:r,handleSelect:p}=e,[,g]=(0,i.useDrop)({accept:["card","item"]}),f=(0,n.useCallback)(((e,n)=>{var i=[...t];if(void 0===e){var a=t.findIndex((e=>-1===e.id));i.splice(a,1),i.splice(n,0,{bg:"aqua",category:"\u653e\u8fd9\u91cc",id:-1}),r(i)}else{var o=t[e];i.splice(e,1),i.splice(n,0,o),r(i)}}),[t]);return n.createElement(u.Provider,{value:p},n.createElement("div",{className:l},n.createElement("div",{className:s,style:d,ref:g},t.length<=0?n.createElement("div",{style:{lineHeight:"60px"}},"\u653e\u5165\u7ec4\u4ef6"):t.map(((e,t)=>{return n.createElement(a.Z,{index:t,key:e.id,handleSelect:()=>{p({id:e.id,editFields:o.$[e.elementType].editFields})},moveCard:f},o.$[e.elementType]&&(r=e.id,i=o.$[e.elementType],n.createElement(c.Z,{id:r,defaultProps:i.defaultProps,enable:i.enable},n.createElement(i,null))));var r,i})))))}},76883:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(1931);function i(e,t,r,n,i,a,o){try{var c=e[a](o),l=c.value}catch(s){return void r(s)}c.done?t(l):Promise.resolve(l).then(n,i)}function a(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){i(o,n,a,c,l,"next",e)}function l(e){i(o,n,a,c,l,"throw",e)}c(void 0)}))}}var o="/api/getData",c="24f4e35b-8330-4982-a993-734a95c4fd2b";function l(){return s.apply(this,arguments)}function s(){return(s=a((function*(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c;return n.Z.post(o,{id:e}).then((e=>{try{return JSON.parse(e.data.data)}catch(t){return null}}))}))).apply(this,arguments)}},1931:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(9669),i=r.n(n),a=r(48086),o=i().create({headers:{"Content-Type":"application/json"},timeout:1e4,withCredentials:!0});o.interceptors.request.use((e=>(e.headers.token="token",e))),o.interceptors.response.use((e=>{var t=e.data;return 0===t.code?t:9e3===t.code?(a.ZP.warning(t.err),window.location.href="/login",t):t}),(()=>{a.ZP.error("\u7f51\u7edc\u8bf7\u6c42\u5f02\u5e38\uff0c\u8bf7\u7a0d\u540e\u91cd\u8bd5!")}));const c=o},62274:e=>{"use strict";e.exports="data:image/png;base64,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"}}]);