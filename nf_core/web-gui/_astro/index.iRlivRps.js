function b(){}function V(t,e){for(const n in e)t[n]=e[n];return t}function B(t){return t()}function H(){return Object.create(null)}function y(t){t.forEach(B)}function I(t){return typeof t=="function"}function yt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function W(t){return Object.keys(t).length===0}function J(t,...e){if(t==null){for(const i of e)i(void 0);return b}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function xt(t,e,n){t.$$.on_destroy.push(J(e,n))}function $t(t,e,n,i){if(t){const s=D(t,e,n,i);return t[0](s)}}function D(t,e,n,i){return t[1]&&i?V(n.ctx.slice(),t[1](i(e))):n.ctx}function bt(t,e,n,i){if(t[2]&&i){const s=t[2](i(n));if(e.dirty===void 0)return s;if(typeof s=="object"){const o=[],r=Math.max(e.dirty.length,s.length);for(let u=0;u<r;u+=1)o[u]=e.dirty[u]|s[u];return o}return e.dirty|s}return e.dirty}function wt(t,e,n,i,s,o){if(s){const r=D(e,n,i,o);t.p(r,s)}}function vt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Et(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Tt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Nt(t){return t??""}let v=!1;function K(){v=!0}function Q(){v=!1}function X(t,e,n,i){for(;t<e;){const s=t+(e-t>>1);n(s)<=i?t=s+1:e=s}return t}function Y(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let c=0;c<e.length;c++){const a=e[c];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let s=0;for(let l=0;l<e.length;l++){const c=e[l].claim_order,a=(s>0&&e[n[s]].claim_order<=c?s+1:X(1,s,x=>e[n[x]].claim_order,c))-1;i[l]=n[a]+1;const f=a+1;n[f]=l,s=Math.max(f,s)}const o=[],r=[];let u=e.length-1;for(let l=n[s]+1;l!=0;l=i[l-1]){for(o.push(e[l-1]);u>=l;u--)r.push(e[u]);u--}for(;u>=0;u--)r.push(e[u]);o.reverse(),r.sort((l,c)=>l.claim_order-c.claim_order);for(let l=0,c=0;l<r.length;l++){for(;c<o.length&&r[l].claim_order>=o[c].claim_order;)c++;const a=c<o.length?o[c]:null;t.insertBefore(r[l],a)}}function Z(t,e){if(v){for(Y(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function tt(t,e,n){t.insertBefore(e,n||null)}function et(t,e,n){v&&!n?Z(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function At(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function G(t){return document.createElement(t)}function R(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function L(t){return document.createTextNode(t)}function St(){return L(" ")}function Lt(){return L("")}function Mt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function M(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const nt=["width","height"];function it(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const i in e)e[i]==null?t.removeAttribute(i):i==="style"?t.style.cssText=e[i]:i==="__value"?t.value=t[i]=e[i]:n[i]&&n[i].set&&nt.indexOf(i)===-1?t[i]=e[i]:M(t,i,e[i])}function jt(t,e){for(const n in e)M(t,n,e[n])}function st(t,e){Object.keys(e).forEach(n=>{rt(t,n,e[n])})}function rt(t,e,n){const i=e.toLowerCase();i in t?t[i]=typeof t[i]=="boolean"&&n===""?!0:n:e in t?t[e]=typeof t[e]=="boolean"&&n===""?!0:n:M(t,e,n)}function Ct(t){return/-/.test(t)?st:it}function Ot(t){return t.dataset.svelteH}function lt(t){return Array.from(t.childNodes)}function q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function z(t,e,n,i,s=!1){q(t);const o=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const u=t[r];if(e(u)){const l=n(u);return l===void 0?t.splice(r,1):t[r]=l,s||(t.claim_info.last_index=r),u}}for(let r=t.claim_info.last_index-1;r>=0;r--){const u=t[r];if(e(u)){const l=n(u);return l===void 0?t.splice(r,1):t[r]=l,s?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function F(t,e,n,i){return z(t,s=>s.nodeName===e,s=>{const o=[];for(let r=0;r<s.attributes.length;r++){const u=s.attributes[r];n[u.name]||o.push(u.name)}o.forEach(r=>s.removeAttribute(r))},()=>i(e))}function Ht(t,e,n){return F(t,e,n,G)}function Pt(t,e,n){return F(t,e,n,R)}function ct(t,e){return z(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>L(e),!0)}function kt(t){return ct(t," ")}function P(t,e,n){for(let i=n;i<t.length;i+=1){const s=t[i];if(s.nodeType===8&&s.textContent.trim()===e)return i}return-1}function Bt(t,e){const n=P(t,"HTML_TAG_START",0),i=P(t,"HTML_TAG_END",n+1);if(n===-1||i===-1)return new E(e);q(t);const s=t.splice(n,i-n+1);w(s[0]),w(s[s.length-1]);const o=s.slice(1,s.length-1);if(o.length===0)return new E(e);for(const r of o)r.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1;return new E(e,o)}function It(t,e){e=""+e,t.data!==e&&(t.data=e)}function Dt(t,e){t.value=e??""}function Gt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,"")}function Rt(t,e,n){for(let i=0;i<t.options.length;i+=1){const s=t.options[i];if(s.__value===e){s.selected=!0;return}}t.selectedIndex=-1}function qt(t,e,n){t.classList.toggle(e,!!n)}class ot{is_svg=!1;e=void 0;n=void 0;t=void 0;a=void 0;constructor(e=!1){this.is_svg=e,this.e=this.n=null}c(e){this.h(e)}m(e,n,i=null){this.e||(this.is_svg?this.e=R(n.nodeName):this.e=G(n.nodeType===11?"TEMPLATE":n.nodeName),this.t=n.tagName!=="TEMPLATE"?n:n.content,this.c(e)),this.i(i)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.nodeName==="TEMPLATE"?this.e.content.childNodes:this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)tt(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(w)}}class E extends ot{l=void 0;constructor(e=!1,n){super(e),this.e=this.n=null,this.l=n}c(e){this.l?this.n=this.l:super.c(e)}i(e){for(let n=0;n<this.n.length;n+=1)et(this.t,this.n[n],e)}}function zt(t,e){return new t(e)}let g;function p(t){g=t}function j(){if(!g)throw new Error("Function called outside component initialization");return g}function Ft(t){j().$$.on_mount.push(t)}function Ut(t,e){return j().$$.context.set(t,e),e}function Vt(t){return j().$$.context.get(t)}const h=[],k=[];let m=[];const N=[],ut=Promise.resolve();let A=!1;function ft(){A||(A=!0,ut.then(U))}function S(t){m.push(t)}function Wt(t){N.push(t)}const T=new Set;let d=0;function U(){if(d!==0)return;const t=g;do{try{for(;d<h.length;){const e=h[d];d++,p(e),at(e.$$)}}catch(e){throw h.length=0,d=0,e}for(p(null),h.length=0,d=0;k.length;)k.pop()();for(let e=0;e<m.length;e+=1){const n=m[e];T.has(n)||(T.add(n),n())}m.length=0}while(h.length);for(;N.length;)N.pop()();A=!1,T.clear(),p(t)}function at(t){if(t.fragment!==null){t.update(),y(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function _t(t){const e=[],n=[];m.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),m=e}const $=new Set;let _;function Jt(){_={r:0,c:[],p:_}}function Kt(){_.r||y(_.c),_=_.p}function dt(t,e){t&&t.i&&($.delete(t),t.i(e))}function Qt(t,e,n,i){if(t&&t.o){if($.has(t))return;$.add(t),_.c.push(()=>{$.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}function Xt(t,e,n){const i=t.$$.props[e];i!==void 0&&(t.$$.bound[i]=n,n(t.$$.ctx[i]))}function Yt(t){t&&t.c()}function Zt(t,e){t&&t.l(e)}function ht(t,e,n){const{fragment:i,after_update:s}=t.$$;i&&i.m(e,n),S(()=>{const o=t.$$.on_mount.map(B).filter(I);t.$$.on_destroy?t.$$.on_destroy.push(...o):y(o),t.$$.on_mount=[]}),s.forEach(S)}function mt(t,e){const n=t.$$;n.fragment!==null&&(_t(n.after_update),y(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function pt(t,e){t.$$.dirty[0]===-1&&(h.push(t),ft(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function te(t,e,n,i,s,o,r=null,u=[-1]){const l=g;p(t);const c=t.$$={fragment:null,ctx:[],props:o,update:b,not_equal:s,bound:H(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:H(),dirty:u,skip_bound:!1,root:e.target||l.$$.root};r&&r(c.root);let a=!1;if(c.ctx=n?n(t,e.props||{},(f,x,...C)=>{const O=C.length?C[0]:x;return c.ctx&&s(c.ctx[f],c.ctx[f]=O)&&(!c.skip_bound&&c.bound[f]&&c.bound[f](O),a&&pt(t,f)),x}):[],c.update(),a=!0,y(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){K();const f=lt(e.target);c.fragment&&c.fragment.l(f),f.forEach(w)}else c.fragment&&c.fragment.c();e.intro&&dt(t.$$.fragment),ht(t,e.target,e.anchor),Q(),U()}p(l)}class ee{$$=void 0;$$set=void 0;$destroy(){mt(this,1),this.$destroy=b}$on(e,n){if(!I(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const s=i.indexOf(n);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!W(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const gt="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(gt);export{Ft as $,It as A,xt as B,b as C,Ut as D,Vt as E,Lt as F,Tt as G,V as H,Et as I,R as J,Pt as K,jt as L,Jt as M,Kt as N,Yt as O,Zt as P,ht as Q,mt as R,ee as S,zt as T,Ct as U,Rt as V,E as W,Bt as X,k as Y,Xt as Z,Wt as _,St as a,Gt as a0,Ht as b,$t as c,lt as d,G as e,kt as f,Ot as g,w as h,te as i,ct as j,M as k,et as l,Z as m,Nt as n,Mt as o,vt as p,bt as q,dt as r,yt as s,L as t,wt as u,Qt as v,At as w,y as x,Dt as y,qt as z};
