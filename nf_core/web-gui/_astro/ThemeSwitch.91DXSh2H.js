import{S as gt,i as pt,s as vt,c as B,e as h,a as M,b as u,d as E,h as b,f as y,g as O,k as s,z as T,l as bt,m as o,o as H,u as F,p as G,q as J,r as K,v as Q,x as kt,$ as wt}from"./index.iRlivRps.js";/* empty css                                */const Et=e=>({}),ut=e=>({}),Ct=e=>({}),_t=e=>({}),It=e=>({}),mt=e=>({}),Lt=e=>({}),ft=e=>({});function Tt(e){let l,n,k,D,v,V,d,C,P='<span class="dropdown-header">Select theme</span>',q,w,a,R,S,at="Light",W,I,c,X,A,lt="Dark",Y,$,_,nt='<i class="fa-solid fa-adjust"></i> <span class="ms-1">System</span>',r,Z,ot;const x=e[2].light,m=B(x,e,e[1],ft),tt=e[2].dark,f=B(tt,e,e[1],mt),et=e[2].light,g=B(et,e,e[1],_t),st=e[2].dark,p=B(st,e,e[1],ut);return{c(){l=h("div"),n=h("button"),k=h("i"),m&&m.c(),D=M(),v=h("i"),f&&f.c(),V=M(),d=h("ul"),C=h("li"),C.innerHTML=P,q=M(),w=h("li"),a=h("div"),g&&g.c(),R=M(),S=h("span"),S.textContent=at,W=M(),I=h("li"),c=h("div"),p&&p.c(),X=M(),A=h("span"),A.textContent=lt,Y=M(),$=h("li"),_=h("div"),_.innerHTML=nt,this.h()},l(t){l=u(t,"DIV",{class:!0,title:!0,"data-bs-toggle":!0,"data-bs-placement":!0});var i=E(l);n=u(i,"BUTTON",{class:!0,type:!0,"data-bs-toggle":!0,"aria-expanded":!0,title:!0});var U=E(n);k=u(U,"I",{class:!0});var it=E(k);m&&m.l(it),it.forEach(b),D=y(U),v=u(U,"I",{class:!0});var rt=E(v);f&&f.l(rt),rt.forEach(b),U.forEach(b),V=y(i),d=u(i,"UL",{class:!0});var L=E(d);C=u(L,"LI",{"data-svelte-h":!0}),O(C)!=="svelte-ul0184"&&(C.innerHTML=P),q=y(L),w=u(L,"LI",{class:!0});var dt=E(w);a=u(dt,"DIV",{class:!0,id:!0,title:!0,role:!0,tabindex:!0});var j=E(a);g&&g.l(j),R=y(j),S=u(j,"SPAN",{class:!0,"data-svelte-h":!0}),O(S)!=="svelte-ie4hvr"&&(S.textContent=at),j.forEach(b),dt.forEach(b),W=y(L),I=u(L,"LI",{class:!0});var ct=E(I);c=u(ct,"DIV",{class:!0,id:!0,title:!0,role:!0,tabindex:!0});var z=E(c);p&&p.l(z),X=y(z),A=u(z,"SPAN",{class:!0,"data-svelte-h":!0}),O(A)!=="svelte-w61h3n"&&(A.textContent=lt),z.forEach(b),ct.forEach(b),Y=y(L),$=u(L,"LI",{class:!0});var ht=E($);_=u(ht,"DIV",{class:!0,id:!0,title:!0,role:!0,tabindex:!0,"data-svelte-h":!0}),O(_)!=="svelte-hncx3b"&&(_.innerHTML=nt),ht.forEach(b),L.forEach(b),i.forEach(b),this.h()},h(){s(k,"class","theme-icon-light"),T(k,"d-none",e[0]!=="light"),s(v,"class","theme-icon-dark"),T(v,"d-none",e[0]!=="dark"),s(n,"class","nav-link dropdown-toggle"),s(n,"type","button"),s(n,"data-bs-toggle","dropdown"),s(n,"aria-expanded","false"),s(n,"title","Change theme"),s(S,"class","ms-1"),s(a,"class","text-decoration-none theme-option w-100 svelte-brh85i"),s(a,"id","theme-light"),s(a,"title","light"),s(a,"role","button"),s(a,"tabindex","0"),s(w,"class","dropdown-item"),T(w,"active",e[0]==="light"),s(A,"class","ms-1"),s(c,"class","text-decoration-none theme-option w-100 svelte-brh85i"),s(c,"id","theme-dark"),s(c,"title","dark"),s(c,"role","button"),s(c,"tabindex","0"),s(I,"class","dropdown-item"),T(I,"active",e[0]==="dark"),s(_,"class","text-decoration-none theme-option w-100 svelte-brh85i"),s(_,"id","theme-auto"),s(_,"title","auto"),s(_,"role","button"),s(_,"tabindex","0"),s($,"class","dropdown-item"),s(d,"class","dropdown-menu dropdown-menu-end"),s(l,"class","dropdown"),s(l,"title","Change theme"),s(l,"data-bs-toggle","tooltip"),s(l,"data-bs-placement","bottom")},m(t,i){bt(t,l,i),o(l,n),o(n,k),m&&m.m(k,null),o(n,D),o(n,v),f&&f.m(v,null),o(l,V),o(l,d),o(d,C),o(d,q),o(d,w),o(w,a),g&&g.m(a,null),o(a,R),o(a,S),o(d,W),o(d,I),o(I,c),p&&p.m(c,null),o(c,X),o(c,A),o(d,Y),o(d,$),o($,_),r=!0,Z||(ot=[H(a,"click",e[3]),H(a,"keydown",e[4]),H(c,"click",e[5]),H(c,"keydown",e[6]),H(_,"click",e[7]),H(_,"keydown",e[8])],Z=!0)},p(t,[i]){m&&m.p&&(!r||i&2)&&F(m,x,t,t[1],r?J(x,t[1],i,Lt):G(t[1]),ft),(!r||i&1)&&T(k,"d-none",t[0]!=="light"),f&&f.p&&(!r||i&2)&&F(f,tt,t,t[1],r?J(tt,t[1],i,It):G(t[1]),mt),(!r||i&1)&&T(v,"d-none",t[0]!=="dark"),g&&g.p&&(!r||i&2)&&F(g,et,t,t[1],r?J(et,t[1],i,Ct):G(t[1]),_t),(!r||i&1)&&T(w,"active",t[0]==="light"),p&&p.p&&(!r||i&2)&&F(p,st,t,t[1],r?J(st,t[1],i,Et):G(t[1]),ut),(!r||i&1)&&T(I,"active",t[0]==="dark")},i(t){r||(K(m,t),K(f,t),K(g,t),K(p,t),r=!0)},o(t){Q(m,t),Q(f,t),Q(g,t),Q(p,t),r=!1},d(t){t&&b(l),m&&m.d(t),f&&f.d(t),g&&g.d(t),p&&p.d(t),Z=!1,kt(ot)}}}function St(e){const l=document.documentElement;e==="auto"?window.matchMedia("(prefers-color-scheme: dark)").matches?l.setAttribute("data-bs-theme","dark"):l.setAttribute("data-bs-theme","light"):l.setAttribute("data-bs-theme",e)}function N(e){const l=e.target;let n="";l.tagName!=="div"||!l.title?n=l.closest("div.theme-option").title:n=e.target.title,localStorage.setItem("theme",n),St(n),window.dispatchEvent(new Event("theme-changed"))}function At(e,l,n){let{$$slots:k={},$$scope:D}=l,v="dark";wt(()=>{n(0,v=document.documentElement.getAttribute("data-bs-theme")||"auto"),window.addEventListener("theme-changed",a=>{n(0,v=document.documentElement.getAttribute("data-bs-theme"))})});const V=a=>N(a),d=a=>N(a),C=a=>N(a),P=a=>N(a),q=a=>N(a),w=a=>N(a);return e.$$set=a=>{"$$scope"in a&&n(1,D=a.$$scope)},[v,D,k,V,d,C,P,q,w]}class Dt extends gt{constructor(l){super(),pt(this,l,At,Tt,vt,{})}}export{Dt as default};
