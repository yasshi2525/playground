import{d as i,p as l,z as _,c as s,a,b as p,w as u,o as n,e as r,h as w,i as m,_ as f}from"./index-bae31a55.js";import{u as h,a as g,b as y,B as v,c as B,d as D}from"./useGameJSONResolver-ed557dbe.js";const S=e=>(w("data-v-4c1929dc"),e=e(),m(),e),k={class:"message"},x=S(()=>a("p",null,"Trying to download the game.",-1)),C={key:0},I={key:1},N={class:"button"},P=i({__name:"DownloadPage",props:{gameJsonUri:{},name:{},autoStartDownload:{type:Boolean,default:!0},autoCloseWindow:{type:Boolean,default:!1}},setup(e){const o=e,t=h();l(B,t),l(y,g());const d=async()=>{await D(o.name,t.pseudoFiles)};return _(async()=>{await t.fetchPseudoFilesFromUri(o.gameJsonUri),o.autoStartDownload&&(await d(),o.autoCloseWindow&&window.close())}),(c,G)=>(n(),s("div",null,[a("div",k,[x,c.autoStartDownload?(n(),s("p",C,"If the download doesn't start automatically, please click the following:")):(n(),s("p",I,"To start the download, please click the following:"))]),a("div",N,[a("p",null,[p(v,{"on-click":d},{default:u(()=>[r(" Download ")]),_:1})])])]))}});const F=f(P,[["__scopeId","data-v-4c1929dc"],["__file","DownloadPage.vue"]]);export{F as default};
