(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&u(h)}).observe(document,{childList:!0,subtree:!0});function s(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(r){if(r.ep)return;r.ep=!0;const o=s(r);fetch(r.href,o)}})();var L=typeof window<"u"&&window.document!==void 0,a=L?window:{},y=t=>t,w="use hash (#) in href. (requires config hash)",H=class{constructor(t={}){this._route={},this._head="",this._data=()=>({}),this.render=y,this.base="",this.origin="",this.hash=!1,this.isHydrate=!1,this.wares=[],this.vNow="?v="+Date.now(),this.cFile=e=>e.indexOf("?")!==-1?e.split("?")[0]:e,this.controller={},this._onError=(e,s)=>"Error: "+e.message,t.render!==void 0&&(this.render=t.render),t.base!==void 0&&(this.base=t.base),this.base==="/"&&(this.base=""),t.hash!==void 0&&(this.hash=t.hash),this.add=this.on.bind(this,"GET")}on(t,e){const s=[].slice.call(arguments,2);if(this._route[t]=this._route[t]||[],e instanceof RegExp){const o=this.base===""?e:new RegExp(new RegExp(this.base).source+e.source);return this._route[t].push({fns:s,regex:o,path:e}),this}e=this.base+e;const u=e.replace(/\/$/,"").replace(/:(\w+)(\?)?(\.)?/g,"$2(?<$1>[^/]+)$2$3").replace(/(\/?)\*/g,(o,h)=>`(${h}.*)?`).replace(/\.(?=[\w(])/,"\\."),r=new RegExp(`^${u}/*$`);return this._route[t].push({fns:s,regex:r,path:e}),this}match(t,e="GET"){let s,u={},r,o=0,h,d=this._route[e]||[];this._route.ANY&&(d=this._route.ANY.concat(d));const f=d.length;for(;o<f;){if(h=d[o],h.regex&&h.regex.test(t)){try{t=decodeURI(t)}catch(v){console.warn(v.message)}u=h.regex.exec(t).groups||{},s=h.fns,r=h.path;break}o++}return{fns:s,params:u,path:r}}use(){return this.wares=this.wares.concat([].slice.call(arguments)),this}handle(t={}){const e=this;e.cleanup!==void 0&&(e.cleanup(),e.cleanup=void 0);const s=t.request!==void 0;let u;if(s){const n=t.__url||t.request.url;u=new URL((n[0]==="/"?"http://a.b":"")+n),e.origin=u.origin}let{pathname:r,search:o,hash:h}=u||a.location,d=0,f;if(h?(r[r.length-1]==="/"&&(r=r.slice(0,-1)),r=(r==="/"?"/":r+"/")+h.substring(2),e.current=h+o):e.current=r+o,e.current!=="/"){if(e.hash&&e.current[0]!=="#"){console.error(w);return}if(!e.hash&&e.current[0]==="#"){console.error("don't "+w);return}}const v=t.__method||(t.request||{}).method||"GET";let{fns:_,params:b,path:E}=e.match(r,v);t.route={url:e.current,pathname:r,params:b,path:E},t.route.go=(n,c)=>{s||e.goPath(n,c)},t.isHydrate=e.isHydrate||s,t.useAfter=n=>{f=n},t.getHandler=(n,c)=>{if(s)return e._ctx.__url=n[0]==="/"?e.origin+n:n,e._ctx.__method=c,e.handle(e._ctx)},t.setHead=n=>{const c=n.replace(/title>|>|\/>/g,i=>(i=="title>"?"":" van-head")+i);if(!s){if(n.indexOf("</title>")!==-1){const i=a.document.querySelector("title");i&&i.remove()}a.document.querySelectorAll("[van-head]").forEach(i=>i.remove()),a.document.head.insertAdjacentHTML("beforeend",c)}e._head=c},t.useData=n=>{if(s)return e._data=n();{const c="__VAN_DATA__",i=a[c];return i?(delete a[c],i):n()}},t.isServer=s,t.html=e.html;const m=n=>{const c=s?t.render?t.render(n):y(n):e.render(n);if(e.listenLink(s),f&&!s){const i=f();typeof i=="function"&&(e.cleanup=i)}return c},l=n=>{let c;try{c=n?e._onError(n,t):_[d++](t,l)}catch(i){return l(i)}if(c)return typeof c.then=="function"?c.then(i=>{if(i)return m(i)}).catch(l):m(c)};return t.lazy=n=>{n=e.cFile(n);const c=n.substring(n.lastIndexOf("/")+1).replace(".js","");if(e.controller[n]){const p=a[c](t,l);p&&m(p);return}e.controller[n]=!0;const i=a.document.createElement("script");i.src=n+e.vNow,i.type="text/javascript",a.document.head.appendChild(i),i.onload=()=>{const p=a[c](t,l);p&&m(p)}},_||(_=[()=>"404 not found"]),t.__url||(_=e.wares.concat(_)),e.isHydrate=!0,l()}resolve(t={}){a.__uHandler||(a.__uHandler=u=>this.handle(u));const e=t.request!==void 0;this._ctx=t;const s=a.__uHandler(t);return this.listenLink(e),e||a.addEventListener("popstate",()=>{this.current!==a.location.hash&&a.__uHandler(t)}),{out:()=>s,head:()=>this._head,data:()=>this._data}}html(t){const e=[].slice.call(arguments,1);return t.reduce(function(s,u,r){let o=e[r-1];return o==null&&(o=""),s+String(o)+u})}onError(t){return this._onError=t,this}listenLink(t){t||a.document.querySelectorAll("[van-link]").forEach(e=>{e.handle=s=>{s.preventDefault(),s.stopPropagation();const u=e.getAttribute("href")||e.getAttribute("van-link");this.current!==u&&(a.history.pushState({},"",u),a.__uHandler(this._ctx))},e.addEventListener("click",e.handle)})}goPath(t,e="pushState"){a.history[e]({},"",(this.hash?"#":"")+t),a.__uHandler(this._ctx)}},A=t=>new H(t);const g=A({render:t=>{document.getElementById("content").innerHTML=t}});g.add("/",()=>fetch("./../pages/home.html").then(e=>e.text()).then(e=>e));g.add("/nosotros",()=>fetch("./../pages/about.html").then(e=>e.text()).then(e=>e));g.add("/contactanos",()=>fetch("./../pages/contact.html").then(e=>e.text()).then(e=>e));g.add("/estudios",()=>fetch("./../pages/estudios.html").then(e=>e.text()).then(e=>e));addEventListener("load",()=>{g.resolve()});
