import{n as o}from"./vendor.9b72f3b9.js";const c={setup(a){const{currentRoute:t,replace:s}=o(),{query:r}=t.value;let{redirect:e}=r;return Reflect.deleteProperty(r,"redirect"),Array.isArray(e)&&(e=e.join("/")),e.startsWith("/redirect")&&(e="/"),s({path:e.startsWith("/")?e:"/"+e,query:r}),()=>{}}};export{c as default};
