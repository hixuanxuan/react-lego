(self.webpackChunkreact17_webpack5_cli=self.webpackChunkreact17_webpack5_cli||[]).push([[927],{57096:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.default={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"defs",attrs:{},children:[{tag:"style",attrs:{}}]},{tag:"path",attrs:{d:"M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z"}},{tag:"path",attrs:{d:"M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z"}}]},name:"plus",theme:"outlined"}},20054:(e,t,n)=>{"use strict";var a;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=(a=n(32615))&&a.__esModule?a:{default:a};t.default=r,e.exports=r},92977:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var a=n(67294);const r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M456 231a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0zm0 280a56 56 0 10112 0 56 56 0 10-112 0z"}}]},name:"more",theme:"outlined"};var o=n(59408),i=function(e,t){return a.createElement(o.Z,Object.assign({},e,{ref:t,icon:r}))};i.displayName="MoreOutlined";const c=a.forwardRef(i)},32615:(e,t,n)=>{"use strict";var a=n(95318),r=n(20862);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=r(n(67294)),i=a(n(57096)),c=a(n(92074)),l=function(e,t){return o.createElement(c.default,Object.assign({},e,{ref:t,icon:i.default}))};l.displayName="PlusOutlined";var u=o.forwardRef(l);t.default=u},51752:(e,t,n)=>{"use strict";n.d(t,{Z:()=>te});var a=n(67154),r=n.n(a),o=n(59713),i=n.n(o),c=n(67294),l=n(96156),u=n(28481),s=n(90484),d=n(81253),f=n(28991),v=n(94184),b=n.n(v),m=n(50344),h=n(31131),p=n(21770),y=n(85061),g=n(75164),Z=n(4084);function E(e){var t=(0,c.useRef)(),n=(0,c.useRef)(!1);return(0,c.useEffect)((function(){return function(){n.current=!0,g.Z.cancel(t.current)}}),[]),function(){for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];n.current||(g.Z.cancel(t.current),t.current=(0,g.Z)((function(){e.apply(void 0,r)})))}}var k=n(15105);function w(e,t){var n,a=e.prefixCls,r=e.id,o=e.active,i=e.rtl,u=e.tab,s=u.key,d=u.tab,f=u.disabled,v=u.closeIcon,m=e.tabBarGutter,h=e.tabPosition,p=e.closable,y=e.renderWrapper,g=e.removeAriaLabel,Z=e.editable,E=e.onClick,w=e.onRemove,x=e.onFocus,C="".concat(a,"-tab");c.useEffect((function(){return w}),[]);var N={};"top"===h||"bottom"===h?N[i?"marginLeft":"marginRight"]=m:N.marginBottom=m;var P=Z&&!1!==p&&!f;function T(e){f||E(e)}var S=c.createElement("div",{key:s,ref:t,className:b()(C,(n={},(0,l.Z)(n,"".concat(C,"-with-remove"),P),(0,l.Z)(n,"".concat(C,"-active"),o),(0,l.Z)(n,"".concat(C,"-disabled"),f),n)),style:N,onClick:T},c.createElement("div",{role:"tab","aria-selected":o,id:r&&"".concat(r,"-tab-").concat(s),className:"".concat(C,"-btn"),"aria-controls":r&&"".concat(r,"-panel-").concat(s),"aria-disabled":f,tabIndex:f?null:0,onClick:function(e){e.stopPropagation(),T(e)},onKeyDown:function(e){[k.Z.SPACE,k.Z.ENTER].includes(e.which)&&(e.preventDefault(),T(e))},onFocus:x},d),P&&c.createElement("button",{type:"button","aria-label":g||"remove",tabIndex:0,className:"".concat(C,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),Z.onEdit("remove",{key:s,event:t})}},v||Z.removeIcon||"\xd7"));return y&&(S=y(S)),S}const x=c.forwardRef(w);var C={width:0,height:0,left:0,top:0};var N={width:0,height:0,left:0,top:0,right:0};var P=n(16216),T=n(70271);function S(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?c.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null===r||void 0===r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null}const I=c.forwardRef(S);function R(e,t){var n=e.prefixCls,a=e.id,r=e.tabs,o=e.locale,i=e.mobile,s=e.moreIcon,d=void 0===s?"More":s,f=e.moreTransitionName,v=e.style,m=e.className,h=e.editable,p=e.tabBarGutter,y=e.rtl,g=e.onTabClick,Z=(0,c.useState)(!1),E=(0,u.Z)(Z,2),w=E[0],x=E[1],C=(0,c.useState)(null),N=(0,u.Z)(C,2),S=N[0],R=N[1],M="".concat(a,"-more-popup"),B="".concat(n,"-dropdown"),O=null!==S?"".concat(M,"-").concat(S):null,j=null===o||void 0===o?void 0:o.dropdownAriaLabel,L=c.createElement(P.ZP,{onClick:function(e){var t=e.key,n=e.domEvent;g(t,n),x(!1)},id:M,tabIndex:-1,role:"listbox","aria-activedescendant":O,selectedKeys:[S],"aria-label":void 0!==j?j:"expanded dropdown"},r.map((function(e){return c.createElement(P.sN,{key:e.key,id:"".concat(M,"-").concat(e.key),role:"option","aria-controls":a&&"".concat(a,"-panel-").concat(e.key),disabled:e.disabled},e.tab)})));function _(e){for(var t=r.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===S}))||0,a=t.length,o=0;o<a;o+=1){var i=t[n=(n+e+a)%a];if(!i.disabled)return void R(i.key)}}(0,c.useEffect)((function(){var e=document.getElementById(O);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[S]),(0,c.useEffect)((function(){w||R(null)}),[w]);var A=(0,l.Z)({},y?"marginLeft":"marginRight",p);r.length||(A.visibility="hidden",A.order=1);var D=b()((0,l.Z)({},"".concat(B,"-rtl"),y)),K=i?null:c.createElement(T.Z,{prefixCls:B,overlay:L,trigger:["hover"],visible:w,transitionName:f,onVisibleChange:x,overlayClassName:D,mouseEnterDelay:.1,mouseLeaveDelay:.1},c.createElement("button",{type:"button",className:"".concat(n,"-nav-more"),style:A,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":M,id:"".concat(a,"-more"),"aria-expanded":w,onKeyDown:function(e){var t=e.which;if(w)switch(t){case k.Z.UP:_(-1),e.preventDefault();break;case k.Z.DOWN:_(1),e.preventDefault();break;case k.Z.ESC:x(!1);break;case k.Z.SPACE:case k.Z.ENTER:null!==S&&g(S,e)}else[k.Z.DOWN,k.Z.SPACE,k.Z.ENTER].includes(t)&&(x(!0),e.preventDefault())}},d));return c.createElement("div",{className:b()("".concat(n,"-nav-operations"),m),style:v,ref:t},K,c.createElement(I,{prefixCls:n,locale:o,editable:h}))}const M=c.forwardRef(R),B=(0,c.createContext)(null);var O=Math.pow(.995,20);function j(e,t){var n=c.useRef(e),a=c.useState({}),r=(0,u.Z)(a,2)[1];return[n.current,function(e){var a="function"===typeof e?e(n.current):e;a!==n.current&&t(a,n.current),n.current=a,r({})}]}var L=function(e){var t,n=e.position,a=e.prefixCls,r=e.extra;if(!r)return null;var o=r;return"right"===n&&(t=o.right||!o.left&&o||null),"left"===n&&(t=o.left||null),t?c.createElement("div",{className:"".concat(a,"-extra-content")},t):null};function _(e,t){var n,a=c.useContext(B),r=a.prefixCls,o=a.tabs,i=e.className,s=e.style,d=e.id,v=e.animated,m=e.activeKey,h=e.rtl,p=e.extra,k=e.editable,w=e.locale,P=e.tabPosition,T=e.tabBarGutter,S=e.children,R=e.onTabClick,_=e.onTabScroll,A=(0,c.useRef)(),D=(0,c.useRef)(),K=(0,c.useRef)(),W=(0,c.useRef)(),z=function(){var e=(0,c.useRef)(new Map);return[function(t){return e.current.has(t)||e.current.set(t,c.createRef()),e.current.get(t)},function(t){e.current.delete(t)}]}(),q=(0,u.Z)(z,2),G=q[0],H=q[1],V="top"===P||"bottom"===P,Y=j(0,(function(e,t){V&&_&&_({direction:e>t?"left":"right"})})),F=(0,u.Z)(Y,2),X=F[0],U=F[1],J=j(0,(function(e,t){!V&&_&&_({direction:e>t?"top":"bottom"})})),Q=(0,u.Z)(J,2),$=Q[0],ee=Q[1],te=(0,c.useState)(0),ne=(0,u.Z)(te,2),ae=ne[0],re=ne[1],oe=(0,c.useState)(0),ie=(0,u.Z)(oe,2),ce=ie[0],le=ie[1],ue=(0,c.useState)(0),se=(0,u.Z)(ue,2),de=se[0],fe=se[1],ve=(0,c.useState)(0),be=(0,u.Z)(ve,2),me=be[0],he=be[1],pe=(0,c.useState)(null),ye=(0,u.Z)(pe,2),ge=ye[0],Ze=ye[1],Ee=(0,c.useState)(null),ke=(0,u.Z)(Ee,2),we=ke[0],xe=ke[1],Ce=(0,c.useState)(0),Ne=(0,u.Z)(Ce,2),Pe=Ne[0],Te=Ne[1],Se=(0,c.useState)(0),Ie=(0,u.Z)(Se,2),Re=Ie[0],Me=Ie[1],Be=function(e){var t=(0,c.useRef)([]),n=(0,c.useState)({}),a=(0,u.Z)(n,2)[1],r=(0,c.useRef)("function"===typeof e?e():e),o=E((function(){var e=r.current;t.current.forEach((function(t){e=t(e)})),t.current=[],r.current=e,a({})}));return[r.current,function(e){t.current.push(e),o()}]}(new Map),Oe=(0,u.Z)(Be,2),je=Oe[0],Le=Oe[1],_e=function(e,t,n){return(0,c.useMemo)((function(){for(var n,a=new Map,r=t.get(null===(n=e[0])||void 0===n?void 0:n.key)||C,o=r.left+r.width,i=0;i<e.length;i+=1){var c,l=e[i].key,u=t.get(l);u||(u=t.get(null===(c=e[i-1])||void 0===c?void 0:c.key)||C);var s=a.get(l)||(0,f.Z)({},u);s.right=o-s.left-s.width,a.set(l,s)}return a}),[e.map((function(e){return e.key})).join("_"),t,n])}(o,je,ae),Ae="".concat(r,"-nav-operations-hidden"),De=0,Ke=0;function We(e){return e<De?De:e>Ke?Ke:e}V?h?(De=0,Ke=Math.max(0,ae-ge)):(De=Math.min(0,ge-ae),Ke=0):(De=Math.min(0,we-ce),Ke=0);var ze=(0,c.useRef)(),qe=(0,c.useState)(),Ge=(0,u.Z)(qe,2),He=Ge[0],Ve=Ge[1];function Ye(){Ve(Date.now())}function Fe(){window.clearTimeout(ze.current)}function Xe(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=_e.get(e)||{width:0,height:0,left:0,right:0,top:0};if(V){var n=X;h?t.right<X?n=t.right:t.right+t.width>X+ge&&(n=t.right+t.width-ge):t.left<-X?n=-t.left:t.left+t.width>-X+ge&&(n=-(t.left+t.width-ge)),ee(0),U(We(n))}else{var a=$;t.top<-$?a=-t.top:t.top+t.height>-$+we&&(a=-(t.top+t.height-we)),U(0),ee(We(a))}}!function(e,t){var n=(0,c.useState)(),a=(0,u.Z)(n,2),r=a[0],o=a[1],i=(0,c.useState)(0),l=(0,u.Z)(i,2),s=l[0],d=l[1],f=(0,c.useState)(0),v=(0,u.Z)(f,2),b=v[0],m=v[1],h=(0,c.useState)(),p=(0,u.Z)(h,2),y=p[0],g=p[1],Z=(0,c.useRef)(),E=(0,c.useRef)(),k=(0,c.useRef)(null);k.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;o({x:n,y:a}),window.clearInterval(Z.current)},onTouchMove:function(e){if(r){e.preventDefault();var n=e.touches[0],a=n.screenX,i=n.screenY;o({x:a,y:i});var c=a-r.x,l=i-r.y;t(c,l);var u=Date.now();d(u),m(u-s),g({x:c,y:l})}},onTouchEnd:function(){if(r&&(o(null),g(null),y)){var e=y.x/b,n=y.y/b,a=Math.abs(e),i=Math.abs(n);if(Math.max(a,i)<.1)return;var c=e,l=n;Z.current=window.setInterval((function(){Math.abs(c)<.01&&Math.abs(l)<.01?window.clearInterval(Z.current):t(20*(c*=O),20*(l*=O))}),20)}},onWheel:function(e){var n=e.deltaX,a=e.deltaY,r=0,o=Math.abs(n),i=Math.abs(a);o===i?r="x"===E.current?n:a:o>i?(r=n,E.current="x"):(r=a,E.current="y"),t(-r,-r)&&e.preventDefault()}},c.useEffect((function(){function t(e){k.current.onTouchMove(e)}function n(e){k.current.onTouchEnd(e)}return document.addEventListener("touchmove",t,{passive:!1}),document.addEventListener("touchend",n,{passive:!1}),e.current.addEventListener("touchstart",(function(e){k.current.onTouchStart(e)}),{passive:!1}),e.current.addEventListener("wheel",(function(e){k.current.onWheel(e)})),function(){document.removeEventListener("touchmove",t),document.removeEventListener("touchend",n)}}),[])}(A,(function(e,t){function n(e,t){e((function(e){return We(e+t)}))}if(V){if(ge>=ae)return!1;n(U,e)}else{if(we>=ce)return!1;n(ee,t)}return Fe(),Ye(),!0})),(0,c.useEffect)((function(){return Fe(),He&&(ze.current=window.setTimeout((function(){Ve(0)}),100)),Fe}),[He]);var Ue=function(e,t,n,a,r){var o,i,l,u=r.tabs,s=r.tabPosition,d=r.rtl;["top","bottom"].includes(s)?(o="width",i=d?"right":"left",l=Math.abs(t.left)):(o="height",i="top",l=-t.top);var f=t[o],v=n[o],b=a[o],m=f;return v+b>f&&(m=f-b),(0,c.useMemo)((function(){if(!u.length)return[0,0];for(var t=u.length,n=t,a=0;a<t;a+=1){var r=e.get(u[a].key)||N;if(r[i]+r[o]>l+m){n=a-1;break}}for(var c=0,s=t-1;s>=0;s-=1)if((e.get(u[s].key)||N)[i]<l){c=s+1;break}return[c,n]}),[e,l,m,s,u.map((function(e){return e.key})).join("_"),d])}(_e,{width:ge,height:we,left:X,top:$},{width:de,height:me},{width:Pe,height:Re},(0,f.Z)((0,f.Z)({},e),{},{tabs:o})),Je=(0,u.Z)(Ue,2),Qe=Je[0],$e=Je[1],et=o.map((function(e){var t=e.key;return c.createElement(x,{id:d,prefixCls:r,key:t,rtl:h,tab:e,closable:e.closable,editable:k,active:t===m,tabPosition:P,tabBarGutter:T,renderWrapper:S,removeAriaLabel:null===w||void 0===w?void 0:w.removeAriaLabel,ref:G(t),onClick:function(e){R(t,e)},onRemove:function(){H(t)},onFocus:function(){Xe(t),Ye(),h||(A.current.scrollLeft=0),A.current.scrollTop=0}})})),tt=E((function(){var e,t,n,a,r,i,c,l,u,s=(null===(e=A.current)||void 0===e?void 0:e.offsetWidth)||0,d=(null===(t=A.current)||void 0===t?void 0:t.offsetHeight)||0,f=(null===(n=W.current)||void 0===n?void 0:n.offsetWidth)||0,v=(null===(a=W.current)||void 0===a?void 0:a.offsetHeight)||0,b=(null===(r=K.current)||void 0===r?void 0:r.offsetWidth)||0,m=(null===(i=K.current)||void 0===i?void 0:i.offsetHeight)||0;Ze(s),xe(d),Te(f),Me(v);var h=((null===(c=D.current)||void 0===c?void 0:c.offsetWidth)||0)-f,p=((null===(l=D.current)||void 0===l?void 0:l.offsetHeight)||0)-v;re(h),le(p);var y=null===(u=K.current)||void 0===u?void 0:u.className.includes(Ae);fe(h-(y?0:b)),he(p-(y?0:m)),Le((function(){var e=new Map;return o.forEach((function(t){var n=t.key,a=G(n).current;a&&e.set(n,{width:a.offsetWidth,height:a.offsetHeight,left:a.offsetLeft,top:a.offsetTop})})),e}))})),nt=o.slice(0,Qe),at=o.slice($e+1),rt=[].concat((0,y.Z)(nt),(0,y.Z)(at)),ot=(0,c.useState)(),it=(0,u.Z)(ot,2),ct=it[0],lt=it[1],ut=_e.get(m),st=(0,c.useRef)();function dt(){g.Z.cancel(st.current)}(0,c.useEffect)((function(){var e={};return ut&&(V?(h?e.right=ut.right:e.left=ut.left,e.width=ut.width):(e.top=ut.top,e.height=ut.height)),dt(),st.current=(0,g.Z)((function(){lt(e)})),dt}),[ut,V,h]),(0,c.useEffect)((function(){Xe()}),[m,ut,_e,V]),(0,c.useEffect)((function(){tt()}),[h,T,m,o.map((function(e){return e.key})).join("_")]);var ft,vt,bt,mt,ht=!!rt.length,pt="".concat(r,"-nav-wrap");return V?h?(vt=X>0,ft=X+ge<ae):(ft=X<0,vt=-X+ge<ae):(bt=$<0,mt=-$+we<ce),c.createElement("div",{ref:t,role:"tablist",className:b()("".concat(r,"-nav"),i),style:s,onKeyDown:function(){Ye()}},c.createElement(L,{position:"left",extra:p,prefixCls:r}),c.createElement(Z.Z,{onResize:tt},c.createElement("div",{className:b()(pt,(n={},(0,l.Z)(n,"".concat(pt,"-ping-left"),ft),(0,l.Z)(n,"".concat(pt,"-ping-right"),vt),(0,l.Z)(n,"".concat(pt,"-ping-top"),bt),(0,l.Z)(n,"".concat(pt,"-ping-bottom"),mt),n)),ref:A},c.createElement(Z.Z,{onResize:tt},c.createElement("div",{ref:D,className:"".concat(r,"-nav-list"),style:{transform:"translate(".concat(X,"px, ").concat($,"px)"),transition:He?"none":void 0}},et,c.createElement(I,{ref:W,prefixCls:r,locale:w,editable:k,style:{visibility:ht?"hidden":null}}),c.createElement("div",{className:b()("".concat(r,"-ink-bar"),(0,l.Z)({},"".concat(r,"-ink-bar-animated"),v.inkBar)),style:ct}))))),c.createElement(M,Object.assign({},e,{ref:K,prefixCls:r,tabs:rt,className:!ht&&Ae})),c.createElement(L,{position:"right",extra:p,prefixCls:r}))}const A=c.forwardRef(_);function D(e){var t=e.id,n=e.activeKey,a=e.animated,r=e.tabPosition,o=e.rtl,i=e.destroyInactiveTabPane,u=c.useContext(B),s=u.prefixCls,d=u.tabs,f=a.tabPane,v=d.findIndex((function(e){return e.key===n}));return c.createElement("div",{className:b()("".concat(s,"-content-holder"))},c.createElement("div",{className:b()("".concat(s,"-content"),"".concat(s,"-content-").concat(r),(0,l.Z)({},"".concat(s,"-content-animated"),f)),style:v&&f?(0,l.Z)({},o?"marginRight":"marginLeft","-".concat(v,"00%")):null},d.map((function(e){return c.cloneElement(e.node,{key:e.key,prefixCls:s,tabKey:e.key,id:t,animated:f,active:e.key===n,destroyInactiveTabPane:i})}))))}function K(e){var t=e.prefixCls,n=e.forceRender,a=e.className,r=e.style,o=e.id,i=e.active,l=e.animated,s=e.destroyInactiveTabPane,d=e.tabKey,v=e.children,m=c.useState(n),h=(0,u.Z)(m,2),p=h[0],y=h[1];c.useEffect((function(){i?y(!0):s&&y(!1)}),[i,s]);var g={};return i||(l?(g.visibility="hidden",g.height=0,g.overflowY="hidden"):g.display="none"),c.createElement("div",{id:o&&"".concat(o,"-panel-").concat(d),role:"tabpanel",tabIndex:i?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(d),"aria-hidden":!i,style:(0,f.Z)((0,f.Z)({},g),r),className:b()("".concat(t,"-tabpane"),i&&"".concat(t,"-tabpane-active"),a)},(i||p||n)&&v)}var W=0;function z(e,t){var n,a,r=e.id,o=e.prefixCls,i=void 0===o?"rc-tabs":o,v=e.className,y=e.children,g=e.direction,Z=e.activeKey,E=e.defaultActiveKey,k=e.editable,w=e.animated,x=void 0===w?{inkBar:!0,tabPane:!1}:w,C=e.tabPosition,N=void 0===C?"top":C,P=e.tabBarGutter,T=e.tabBarStyle,S=e.tabBarExtraContent,I=e.locale,R=e.moreIcon,M=e.moreTransitionName,O=e.destroyInactiveTabPane,j=e.renderTabBar,L=e.onChange,_=e.onTabClick,K=e.onTabScroll,z=(0,d.Z)(e,["id","prefixCls","className","children","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll"]),q=function(e){return(0,m.Z)(e).map((function(e){if(c.isValidElement(e)){var t=void 0!==e.key?String(e.key):void 0;return(0,f.Z)((0,f.Z)({key:t},e.props),{},{node:e})}return null})).filter((function(e){return e}))}(y),G="rtl"===g;a=!1===x?{inkBar:!1,tabPane:!1}:!0===x?{inkBar:!0,tabPane:!0}:(0,f.Z)({inkBar:!0,tabPane:!1},"object"===(0,s.Z)(x)?x:{});var H=(0,c.useState)(!1),V=(0,u.Z)(H,2),Y=V[0],F=V[1];(0,c.useEffect)((function(){F((0,h.Z)())}),[]);var X=(0,p.Z)((function(){var e;return null===(e=q[0])||void 0===e?void 0:e.key}),{value:Z,defaultValue:E}),U=(0,u.Z)(X,2),J=U[0],Q=U[1],$=(0,c.useState)((function(){return q.findIndex((function(e){return e.key===J}))})),ee=(0,u.Z)($,2),te=ee[0],ne=ee[1];(0,c.useEffect)((function(){var e,t=q.findIndex((function(e){return e.key===J}));-1===t&&(t=Math.max(0,Math.min(te,q.length-1)),Q(null===(e=q[t])||void 0===e?void 0:e.key));ne(t)}),[q.map((function(e){return e.key})).join("_"),J,te]);var ae=(0,p.Z)(null,{value:r}),re=(0,u.Z)(ae,2),oe=re[0],ie=re[1],ce=N;Y&&!["left","right"].includes(N)&&(ce="top"),(0,c.useEffect)((function(){r||(ie("rc-tabs-".concat(W)),W+=1)}),[]);var le,ue={id:oe,activeKey:J,animated:a,tabPosition:ce,rtl:G,mobile:Y},se=(0,f.Z)((0,f.Z)({},ue),{},{editable:k,locale:I,moreIcon:R,moreTransitionName:M,tabBarGutter:P,onTabClick:function(e,t){null===_||void 0===_||_(e,t),Q(e),null===L||void 0===L||L(e)},onTabScroll:K,extra:S,style:T,panes:y});return le=j?j(se,A):c.createElement(A,Object.assign({},se)),c.createElement(B.Provider,{value:{tabs:q,prefixCls:i}},c.createElement("div",Object.assign({ref:t,id:r,className:b()(i,"".concat(i,"-").concat(ce),(n={},(0,l.Z)(n,"".concat(i,"-mobile"),Y),(0,l.Z)(n,"".concat(i,"-editable"),k),(0,l.Z)(n,"".concat(i,"-rtl"),G),n),v)},z),le,c.createElement(D,Object.assign({destroyInactiveTabPane:O},ue,{animated:a}))))}var q=c.forwardRef(z);q.TabPane=K;const G=q;var H=n(26937),V=n.n(H),Y=n(20054),F=n.n(Y),X=n(40753),U=n.n(X),J=n(21687),Q=n(65632),$=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function ee(e){var t,n,a=e.type,o=e.className,l=e.size,u=e.onEdit,s=e.hideAdd,d=e.centered,f=e.addIcon,v=$(e,["type","className","size","onEdit","hideAdd","centered","addIcon"]),m=v.prefixCls,h=c.useContext(Q.E_),p=h.getPrefixCls,y=h.direction,g=p("tabs",m);return"editable-card"===a&&(n={onEdit:function(e,t){var n=t.key,a=t.event;null===u||void 0===u||u("add"===e?a:n,e)},removeIcon:c.createElement(U(),null),addIcon:f||c.createElement(F(),null),showAdd:!0!==s}),(0,J.Z)(!("onPrevClick"in v)&&!("onNextClick"in v),"Tabs","`onPrevClick` and `onNextClick` has been removed. Please use `onTabScroll` instead."),c.createElement(G,r()({direction:y},v,{moreTransitionName:"slide-up",className:b()((t={},i()(t,"".concat(g,"-").concat(l),l),i()(t,"".concat(g,"-card"),["card","editable-card"].includes(a)),i()(t,"".concat(g,"-editable-card"),"editable-card"===a),i()(t,"".concat(g,"-centered"),d),t),o),editable:n,moreIcon:c.createElement(V(),null),prefixCls:g}))}ee.TabPane=K;const te=ee}}]);