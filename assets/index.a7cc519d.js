var se=Object.defineProperty,oe=Object.defineProperties;var ne=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var ae=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable;var U=(e,t,s)=>t in e?se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,m=(e,t)=>{for(var s in t||(t={}))ae.call(t,s)&&U(e,s,t[s]);if(C)for(var s of C(t))ie.call(t,s)&&U(e,s,t[s]);return e},w=(e,t)=>oe(e,ne(t));var T=(e,t,s)=>new Promise((o,r)=>{var n=_=>{try{u(s.next(_))}catch(g){r(g)}},a=_=>{try{u(s.throw(_))}catch(g){r(g)}},u=_=>_.done?o(_.value):Promise.resolve(_.value).then(n,a);u((s=s.apply(e,t)).next())});import{u as ce,a as le,b as ue,d as I,o as d,c as f,w as l,e as c,f as i,N as de,g as _e,h as me,r as pe,i as fe,j as he,k as R,K as ge,l as D,m as ve,n as N,p as b,q as ye,F as z,s as we,t as Te,v as H,x,y as $,z as be,L as Se,A as Oe,B as Pe,C as ke,D as Ee,T as Ae,E as Ie,G as M,H as Re,I as De,J as Ne,M as xe,O as $e,P as Me}from"./vendor.9b72f3b9.js";const Le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const n of r)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(r){const n={};return r.integrity&&(n.integrity=r.integrity),r.referrerpolicy&&(n.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?n.credentials="include":r.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(r){if(r.ep)return;r.ep=!0;const n=s(r);fetch(r.href,n)}};Le();const je={setup(e){const t=ce();class s{removeMessage(r,n=2e3){setTimeout(()=>{r&&(r.destroy(),r=null)},n)}showMessage(r,n,a={}){if(this.loadingMessage&&this.loadingMessage.type==="loading")this.loadingMessage.type=r,this.loadingMessage.content=n,r!=="loading"&&this.removeMessage(this.loadingMessage,a.duration);else{let u=t[r](n,a);r==="loading"&&(this.loadingMessage=u)}}loading(r){this.showMessage("loading",r,{duration:0})}success(r,n={}){this.showMessage("success",r,n)}error(r,n={}){this.showMessage("error",r,n)}info(r,n={}){this.showMessage("info",r,n)}warning(r,n={}){this.showMessage("warning",r,n)}}return window.$message=new s,Object.defineProperty(window,"$message",{configurable:!1,writable:!1}),(o,r)=>null}};function Be(e){return typeof e=="undefined"}function Ce(e){return e===null}function L(e){return Ce(e)||Be(e)}const Ue={setup(e){const t=le();class s{success(r,n){this.showDialog("success",m({title:r},n))}warning(r,n){this.showDialog("warning",m({title:r},n))}error(r,n){this.showDialog("error",m({title:r},n))}showDialog(r="success",n){L(n.title)&&(n.showIcon=!1),t[r](m({positiveText:"OK",closable:!1},n))}confirm(r={}){this.showDialog(r.type||"error",m({positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:r.confirm,onNegativeClick:r.cancel,onMaskClick:r.cancel},r))}}return window.$dialog=new s,Object.freeze(window.$dialog),Object.defineProperty(window,"$dialog",{configurable:!1,writable:!1}),(o,r)=>null}},ze={setup(e){return window.$loadingBar=ue(),Object.defineProperty(window,"$loadingBar",{configurable:!1,writable:!1}),(t,s)=>null}},He=I("app",{state(){return{themeOverrides:{common:{primaryColor:"#316c72",primaryColorSuppl:"#316c72",primaryColorHover:"#316c72",successColorHover:"#316c72",successColorSuppl:"#316c72"}}}}}),qe={setup(e){const t=He();return(s,o)=>(d(),f(i(he),{"theme-overrides":i(t).themeOverrides},{default:l(()=>[c(i(de)),c(i(fe),null,{default:l(()=>[c(ze),c(i(_e),null,{default:l(()=>[c(Ue),c(i(me),null,{default:l(()=>[c(je),pe(s.$slots,"default")]),_:3})]),_:3})]),_:3})]),_:3},8,["theme-overrides"]))}};const Ke={setup(e){return(t,s)=>{const o=R("router-view");return d(),f(o,null,{default:l(({Component:r,route:n})=>[c(qe,null,{default:l(()=>[n.meta&&n.meta.keepAlive?(d(),f(ge,{key:0},[(d(),f(D(r),{key:n.fullPath}))],1024)):(d(),f(D(r),{key:n.fullPath}))]),_:2},1024)]),_:1})}}};function Ve(e){e.beforeEach(()=>{$loadingBar.start()}),e.afterEach(()=>{setTimeout(()=>{$loadingBar.finish()},200)}),e.onError(()=>{$loadingBar.error()})}class Ge{constructor(t){this.storage=t.storage,this.prefixKey=t.prefixKey}getKey(t){return`${this.prefixKey}${t}`.toUpperCase()}set(t,s,o){const r=JSON.stringify({value:s,time:Date.now(),expire:L(o)?null:new Date().getTime()+o*1e3});this.storage.setItem(this.getKey(t),r)}get(t){const{value:s}=this.getItem(t,{});return s}getItem(t,s=null){const o=this.storage.getItem(this.getKey(t));if(!o)return s;try{const r=JSON.parse(o),{value:n,time:a,expire:u}=r;return L(u)||u>new Date().getTime()?{value:n,time:a}:(this.remove(t),s)}catch(r){return this.remove(t),s}}remove(t){this.storage.removeItem(this.getKey(t))}clear(){this.storage.clear()}}function Fe({prefixKey:e="",storage:t=sessionStorage}){return new Ge({prefixKey:e,storage:t})}const We=function(e={}){return Fe({prefixKey:e.prefixKey||"",storage:localStorage})},Kt=e=>k({url:"/auth/login",method:"post",data:e}),Qe=()=>k({url:"/auth/refreshToken",method:"post"}),O="access_token",Je=6*60*60,P=We();function q(){return P.get(O)}function Xe(e){P.set(O,e,Je)}function K(){P.remove(O)}function Ye(){return T(this,null,function*(){const e=P.getItem(O);if(!e)return;const{time:t}=e;if(new Date().getTime()-t>1e3*60*30)try{const s=yield Qe();s.code===0&&Xe(s.data.token)}catch(s){console.error(s)}})}const Ze=[{url:"/auth/login",method:"POST"}];function et({url:e,method:t=""}){return Ze.some(s=>s.url===e&&s.method===t.toUpperCase())}function tt(e){e.interceptors.request.use(t=>T(this,null,function*(){if(t.method==="get"&&(t.params=w(m({},t.params),{t:new Date().getTime()})),et(t))return t;const s=q();if(s)return t.headers.Authorization="Bearer "+s,t;const{currentRoute:o}=A;return A.replace({path:"/login",query:w(m({},o.query),{redirect:o.path})}),Promise.reject({code:"-1",message:"\u672A\u767B\u5F55"})}),t=>Promise.reject(t)),e.interceptors.response.use(t=>t==null?void 0:t.data,t=>{var r;let{code:s,message:o}=(r=t.response)==null?void 0:r.data;return Promise.reject({code:s,message:o})})}function V(e={}){var o;const t=((o=window.__APP__GLOB__CONF__)==null?void 0:o.VITE_APP_GLOB_BASE_API)||"/api-mock",s=ve.create({timeout:e.timeout||12e4,baseURL:e.baseURL||t});return tt(s),s}const k=V();var re;V({baseURL:((re=window.__APP__GLOB__CONF__)==null?void 0:re.VITE_APP_GLOB_BASE_API_TEST)||"/api-test"});function rt(e){return k(e?{url:`/user/${e}`,method:"get"}:{url:"/user",method:"get"})}const G=I("user",{state(){return{userInfo:{}}},getters:{userId(){var e;return(e=this.userInfo)==null?void 0:e.id},name(){var e;return(e=this.userInfo)==null?void 0:e.name},avatar(){var e;return(e=this.userInfo)==null?void 0:e.avatar},role(){var e;return((e=this.userInfo)==null?void 0:e.role)||[]}},actions:{getUserInfo(){return T(this,null,function*(){try{const e=yield rt();if(e.code===0){const{id:t,name:s,avatar:o,role:r}=e.data;return this.userInfo={id:t,name:s,avatar:o,role:r},Promise.resolve(e.data)}else return Promise.reject(e.message)}catch(e){return console.error(e),Promise.reject(e.message)}})},logout(){K(),this.userInfo={}}}}),st="modulepreload",F={},ot="/",v=function(t,s){return!s||s.length===0?t():Promise.all(s.map(o=>{if(o=`${ot}${o}`,o in F)return;F[o]=!0;const r=o.endsWith(".css"),n=r?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${n}`))return;const a=document.createElement("link");if(a.rel=r?"stylesheet":st,r||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),r)return new Promise((u,_)=>{a.addEventListener("load",u),a.addEventListener("error",_)})})).then(()=>t())},nt={setup(e){const t=N(),{currentRoute:s}=t;function o(r){r!==s.value.path&&t.push(r)}return(r,n)=>(d(),f(i(we),null,{default:l(()=>[(d(!0),b(z,null,ye(i(s).matched,a=>(d(),f(i(Te),{key:a.path,onClick:u=>o(a.path)},{default:l(()=>[H(x(a.meta.title),1)]),_:2},1032,["onClick"]))),128))]),_:1}))}};var S=(e,t)=>{const s=e.__vccOpts||e;for(const[o,r]of t)s[o]=r;return s};const at={class:"avatar"},it=["src"],ct={setup(e){const t=G(),s=N(),o=[{label:"\u9000\u51FA\u767B\u5F55",key:"logout"}];function r(n){n==="logout"&&(t.logout(),$message.success("\u5DF2\u9000\u51FA\u767B\u5F55"),s.push({path:"/login"}))}return(n,a)=>(d(),f(i(be),{options:o,onSelect:r},{default:l(()=>[$("div",at,[$("img",{src:i(t).avatar},null,8,it),$("span",null,x(i(t).name),1)])]),_:1}))}};var lt=S(ct,[["__scopeId","data-v-13432c71"]]);const ut={class:"header"},dt={setup(e){return(t,s)=>(d(),b("header",ut,[c(nt),c(lt)]))}};var _t=S(dt,[["__scopeId","data-v-74c945e4"]]);const mt={class:"logo"},pt={setup(e){const t="Vue Naive Admin";return(s,o)=>{const r=R("router-link");return d(),b("div",mt,[c(i(Oe),{size:"36",color:"#316c72"},{default:l(()=>[c(i(Se))]),_:1}),c(r,{to:"/"},{default:l(()=>[c(i(Pe),{type:"primary"},{default:l(()=>[H(x(i(t)),1)]),_:1})]),_:1})])}}};var ft=S(pt,[["__scopeId","data-v-715fd40d"]]);const ht={setup(e){const t=N(),s=Y(),{currentRoute:o}=t,r=s.routes,n=ke(()=>u(r,""));function a(...g){return"/"+g.filter(h=>!!h&&h!=="/").map(h=>h.replace(/(^\/)|(\/$)/g,"")).join("/")}function u(g,h){let B=[];return g.forEach(p=>{if(p.name&&!p.isHidden){let y={label:p.meta&&p.meta.title||p.name,key:p.name,path:a(h,p.path)};p.children&&p.children.length&&(y.children=u(p.children,a(h,p.path))),y.children&&y.children.length<=1&&(y.children.length===1&&(y=m({},y.children[0])),delete y.children),B.push(y)}}),B}function _(g,h){t.push(h.path)}return(g,h)=>(d(),f(i(Ee),{class:"side-menu","root-indent":20,options:i(n),value:i(o).meta&&i(o).meta.activeMenu||i(o).name,"onUpdate:value":_},null,8,["options","value"]))}},gt={setup(e){return(t,s)=>(d(),b(z,null,[c(ft),c(ht)],64))}},vt={};function yt(e,t){const s=R("router-view");return d(),f(s,null,{default:l(({Component:o,route:r})=>[c(Ae,{name:"fade-slide",mode:"out-in",appear:""},{default:l(()=>[(d(),f(D(o),{key:r.fullPath}))]),_:2},1024)]),_:1})}var wt=S(vt,[["render",yt]]);const Tt={class:"layout"},E={setup(e){return(t,s)=>(d(),b("div",Tt,[c(i(M),{"has-sider":"",position:"absolute"},{default:l(()=>[c(i(Ie),{width:200,"collapsed-width":0,"native-scrollbar":!1},{default:l(()=>[c(gt)]),_:1}),c(i(M),null,{default:l(()=>[c(i(Re),{style:{height:"100px","background-color":"#f5f6fb"}},{default:l(()=>[c(_t)]),_:1}),c(i(M),{position:"absolute","content-style":"padding: 0 35px 35px",style:{top:"100px","background-color":"#f5f6fb"},"native-scrollbar":!1},{default:l(()=>[c(wt)]),_:1})]),_:1})]),_:1})]))}};var bt=[{name:"USER_MANAGER",path:"/user",component:E,redirect:"/user/management",meta:{title:"\u7528\u6237\u4E2D\u5FC3",role:["admin"]},children:[{name:"USER",path:"management",component:()=>v(()=>import("./index.041fd2e0.js"),["assets/index.041fd2e0.js","assets/vendor.9b72f3b9.js"]),meta:{title:"\u7528\u6237\u7BA1\u7406",role:["admin"]}},{name:"PERMISSION",path:"permission",component:()=>v(()=>import("./UserPermission.da27f5d0.js"),["assets/UserPermission.da27f5d0.js","assets/vendor.9b72f3b9.js"]),meta:{title:"\u6743\u9650\u7BA1\u7406",role:["admin"]}}]}],St=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:bt});const Ot={};function Pt(e,t){return d(),b("h1",null,"\u9996\u9875")}var kt=S(Ot,[["render",Pt]]);const W=[{name:"404",path:"/404",component:()=>v(()=>import("./404.c50750a1.js"),["assets/404.c50750a1.js","assets/vendor.9b72f3b9.js"]),isHidden:!0},{name:"401",path:"/401",component:()=>v(()=>import("./401.6951a35b.js"),["assets/401.6951a35b.js","assets/vendor.9b72f3b9.js"]),isHidden:!0},{name:"REDIRECT",path:"/redirect",component:E,isHidden:!0,children:[{name:"REDIRECT_NAME",path:"",component:()=>v(()=>import("./index.b32b07da.js"),["assets/index.b32b07da.js","assets/vendor.9b72f3b9.js"])}]},{name:"LOGIN",path:"/login",component:()=>v(()=>import("./index.d0d0fa00.js"),["assets/index.d0d0fa00.js","assets/index.1f2857c5.css","assets/vendor.9b72f3b9.js"]),isHidden:!0,meta:{title:"\u767B\u5F55\u9875"}},{name:"HOME",path:"/",component:E,redirect:"/dashboard",meta:{title:"\u9996\u9875"},children:[{name:"DASHBOARD",path:"dashboard",component:kt,meta:{title:"Dashboard"}}]},{name:"TEST",path:"/test",component:E,redirect:"/test/unocss",meta:{title:"\u6D4B\u8BD5"},children:[{name:"UNOCSS",path:"unocss",component:()=>v(()=>import("./TestUnocss.a01c1005.js"),["assets/TestUnocss.a01c1005.js","assets/TestUnocss.592797e4.css","assets/vendor.9b72f3b9.js"]),meta:{title:"\u6D4B\u8BD5unocss"}},{name:"MESSAGE",path:"message",component:()=>v(()=>import("./TestMessage.25e38a66.js"),["assets/TestMessage.25e38a66.js","assets/vendor.9b72f3b9.js"]),meta:{title:"\u6D4B\u8BD5Message"}},{name:"DIALOG",path:"dialog",component:()=>v(()=>import("./TestDialog.f2a56f86.js"),["assets/TestDialog.f2a56f86.js","assets/vendor.9b72f3b9.js"]),meta:{title:"\u6D4B\u8BD5Dialog"}}]}],Et={name:"NOT_FOUND",path:"/:pathMatch(.*)*",redirect:"/404",isHidden:!0},Q={"./modules/user.js":St},J=[];Object.keys(Q).forEach(e=>{J.push(...Q[e].default)});function At(e,t){var o;const s=((o=e.meta)==null?void 0:o.role)?e.meta.role:[];return!t.length||!s.length?!1:t.some(r=>s.includes(r))}function X(e=[],t){const s=[];return e.forEach(o=>{if(At(o,t)){const r=w(m({},o),{children:[]});o.children&&o.children.length?r.children=X(o.children,t):Reflect.deleteProperty(r,"children"),s.push(r)}}),s}const Y=I("permission",{state(){return{accessRoutes:[]}},getters:{routes(){return W.concat(this.accessRoutes)}},actions:{generateRoutes(e=[]){const t=X(J,e);return this.accessRoutes=t,t}}}),It=["/login","/redirect"];function Rt(e){const t=G(),s=Y();e.beforeEach((o,r,n)=>T(this,null,function*(){if(q())if(o.path==="/login")n({path:"/"});else if(t.userId)Ye(),n();else try{yield t.getUserInfo(),s.generateRoutes(t.role).forEach(_=>{!e.hasRoute(_.name)&&e.addRoute(_)}),e.addRoute(Et),n(w(m({},o),{replace:!0}))}catch(u){K(),$message.error(u),n({path:"/login",query:w(m({},o.query),{redirect:o.path})})}else It.includes(o.path)?n():n({path:"/login",query:w(m({},o.query),{redirect:o.path})})}))}function Dt(e){Ve(e),Rt(e)}const A=De({history:Ne("/"),routes:W,scrollBehavior:()=>({left:0,top:0})});function Nt(e){e.use(A),Dt(A)}function xt(e){e.use(xe())}function j(e){const t=e.split(" ");return t.length===2?t[1]:""}var $t=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",resolveToken:j});const Mt={admin:"admin",editor:"editor"};var Lt=[{url:"/api-mock/auth/login",method:"post",response:({body:e})=>["admin","editor"].includes(e==null?void 0:e.name)?{code:0,data:{token:Mt[e.name]}}:{code:-1,message:"\u6CA1\u6709\u6B64\u7528\u6237"}},{url:"/api-mock/auth/refreshToken",method:"post",response:({headers:e})=>({code:0,data:{token:j(e==null?void 0:e.authorization)}})}],jt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Lt});const Z={admin:{id:1,name:"\u5927\u8138\u602A(admin)",avatar:"https://gitee.com/zclzone/res/raw/master/qs-zone/blob/img/lADPDiQ3QDTwsz3NAarNAaw_428_426.jpg",email:"Ronnie@123.com",role:["admin"]},editor:{id:2,name:"\u5927\u8138\u602A(editor)",avatar:"https://gitee.com/zclzone/res/raw/master/qs-zone/blob/img/lADPDiQ3QDTwsz3NAarNAaw_428_426.jpg",email:"Ronnie@123.com",role:["editor"]},guest:{id:3,name:"\u8BBF\u5BA2(guest)",avatar:"https://gitee.com/zclzone/res/raw/master/qs-zone/blob/img/lADPDiQ3QDTwsz3NAarNAaw_428_426.jpg",role:[]}};var Bt=[{url:"/api-mock/user",method:"get",response:({headers:e})=>{const t=j(e==null?void 0:e.authorization);return{code:0,data:m({},Z[t]||Z.guest)}}}],Ct=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Bt});const ee={"./_utils.js":$t,"./auth/index.js":jt,"./user/index.js":Ct},te=[];Object.keys(ee).forEach(e=>{e.includes("/_")||te.push(...ee[e].default)});function Ut(){$e(te)}function zt(){return T(this,null,function*(){const e=Me(Ke);xt(e),Nt(e),e.mount("#app",!0)})}zt();Ut();export{S as _,We as c,Kt as l,Xe as s};
