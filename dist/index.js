function _(t){return new Promise(e=>{setTimeout(e,t)})}function Vt(t){return t.replace(/'/g,"\\'").replace(/"/g,'\\"')}function Mt(){let t=tt();return t?!t.hasAttribute("if-id")&&t.hasAttribute("config"):!0}var et=null,nt=null;function p(){var t;return et||(et=(t=document.querySelector("[if-step]"))==null?void 0:t.closest("form"),et)}function pt(){var t;return nt||(nt=(t=p())==null?void 0:t.closest(".w-form"),nt)}function W(t,e=p()){return Array.from(e.querySelectorAll(t))}function M(t){return`[if-step='${Vt(t.name)}']`}function N(t){return t?t.type==="radio"?`input[type='radio'][value='${t.name}']`:`input[type='${t.type}'][data-name='${t.name}']`:""}function Nt(t){return function(e){return!!(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)}}function Lt(t,e){let r=Array.from(document.querySelectorAll(e)).find(i=>t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING);return r||null}function It(t,e){let r=Array.from(document.querySelectorAll(e)).find(i=>t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING);return r||null}function X(t,e){return window.getComputedStyle(t).getPropertyValue(e)}function At(t,e){t.forEach(n=>{n&&n.removeAttribute(e)})}function zt(t){let e=[];function n(r){if(r.nodeType===Node.TEXT_NODE)e.push(r);else for(let i=0;i<r.childNodes.length;i++)n(r.childNodes[i])}return n(t),e}function rt(t,e=p()){let n=e.querySelector(M(t));return n||null}function Ht(t,e=p()){if(t.type==="radio group")return null;let n=e.querySelector(N(t));return n||null}function Ft(t){return t.reduce((e,n)=>{var r,i,s,v;return n.nodeType===Node.TEXT_NODE&&e.nodeType===Node.TEXT_NODE&&((i=(r=n.textContent)==null?void 0:r.length)!=null?i:0)>((v=(s=e.textContent)==null?void 0:s.length)!=null?v:0)?n:e},document.createTextNode(""))}function it(t,e=p()){return e.querySelector(`input[type='radio'][data-name='${t}']:checked`)}function tt(){var t,e;return(e=(t=document.currentScript)!=null?t:document.querySelector("script[src^='https://cdn.jsdelivr.net/gh/mikepecha/inputflow']"))!=null?e:document.querySelector("script[src='http://localhost:3002/index.js']")}async function ht(t,e){await ve(t),ge(e)}async function ve(t){let e=p().querySelector(M(t));e.style.opacity="0",await _(250),e.offsetHeight,e.style.display="none"}function ge(t){let e=p().querySelector(M(t)),{initalDisplay:n}=e.dataset;e.style.display=n||"block",e.offsetHeight,e.style.opacity="1"}function Dt(t){let e=t.closest("[if-step]");return e?ye(e)?Lt(t,"[if-element='error']"):It(t,"[if-element='error']"):null}function ye(t){let e=t.querySelector("input"),n=t.querySelector("[if-element='error'");return!n||!e?!1:Nt(n)(e)}function Ot(t){t.forEach(e=>Pt(e))}function qt(t){t.forEach(e=>de(e))}function Pt(t){var s;let e=p().querySelector(N(t.input));((s=t.input)==null?void 0:s.type)==="radio group"&&(e=p().querySelector(`input[type='radio'][data-name='${t.input.name}']`));let n=Dt(e);if(!n)return;let r=zt(n),i=Ft(r);i.textContent=t.error,Se(n)}function de(t){let{input:e,step:n}=t;if(!e||!n)return;let r=Ht(e),i=rt(n);if(!r||!i)return;if(!!i.querySelector("[if-element='error']"))return Pt(t);r.checkValidity()||r.reportValidity()}function Se(t){let e=t.dataset.initalDisplay;t.style.display=e!=null?e:"inline-block",t.offsetHeight,t.style.opacity="1"}function H(t,e=p()){var i;let n=e.querySelector(N(t)),r=(n==null?void 0:n.value)||"";if((t==null?void 0:t.type)==="radio group"){let s=it(t.name,e);r=(i=s==null?void 0:s.value)!=null?i:""}return r}function k(t,e=p()){if(t.type!=="radio"&&t.type!=="checkbox")return!1;let n=e.querySelector(N(t));return(n==null?void 0:n.checked)||!1}function J(){let t=window.location.search;return new URLSearchParams(t).has("if-debug-mode")}function Q(t,e){console.log("[IF-DEBUG]",t,`
`,e)}function mt(t,e){let n=p().querySelector(M(e));Array.from(n.querySelectorAll("[if-element='error']")).forEach(l=>{l.style.display="none",l.style.opacity="0",l.offsetHeight});let i=Ee(t,e).reverse(),s=we(t,e).reverse();return i.length&&(J()&&Q("Invalid Html Validations",i),qt(i)),s.length&&(J()&&Q("Invalid Validations",s),Ot(s)),!(s.length||i.length)}function we(t,e){if(!t.validations)return[];let n=t.validations.filter(r=>{var i;return((i=r.step)==null?void 0:i.name)===e.name});return n==null?void 0:n.filter(r=>xe(r))}function Ee(t,e){let n=t.steps.flatMap(l=>l.inputs),r=rt(e);return r?W("input",r).filter(l=>!l.validity.valid).map(l=>{let g=n.find(a=>a.name===l.getAttribute("data-name")&&a.type===l.getAttribute("type"));return{error:l.validationMessage,input:g,step:e}}):[]}function xe(t){return!be(t)}function be(t){return t.rule?!Te(t.rule):!0}function Te(t){for(let e of t)if(Ce(e))return!0;return!1}function Ce(t){for(let e of t)if(!Ve(e))return!1;return!0}function Ve(t){if(!t.input)return!1;let e=H(t.input),n=k(t.input);if(t.function==="is selected")return n;if(t.function==="is not selected")return!n;if(t.function==="equals")return e===String(t.parameter);if(t.function==="does not equal")return e!==String(t.parameter);if(t.function==="contains")return e.includes(String(t.parameter));if(t.function==="does not contain")return!e.includes(String(t.parameter));if(t.function==="is empty")return!e.length;if(t.function==="is not empty")return!!e.length;if(t.function==="regexp")return!new RegExp(String(t.parameter)).test(e);if(t.function==="greater than"){let r=Number(e),i=Number(t.parameter);return!isNaN(r)&&!isNaN(i)?r>i:e>String(t.parameter)}if(t.function==="smaller than"){let r=Number(e),i=Number(t.parameter);return!isNaN(r)&&!isNaN(i)?r<i:e<String(t.parameter)}return!1}function Ut(t,e){t.style.transition="opacity 250ms ";let n=X(t,"display");if(n==="none"&&(n=X(e,"display")),n==="none"&&(n="block"),t.dataset.initalDisplay=n,t.getAttribute("if-step")===e.getAttribute("if-step")){t.style.opacity="1";return}t.style.opacity="0",t.style.display="none"}function kt(t){if(t.steps.length===1)return t.steps[0];for(let e of t.steps){let n=t.paths.some(i=>i.path.to.name===e.name),r=t.paths.some(i=>i.path.from.name===e.name);if(!n&&r)return e}throw new Error("Could not find first form step")}function Bt(t){let e=X(t,"display");e==="none"&&(e="inline-block"),t.dataset.initalDisplay=e,t.style.transition="opacity .3s ease-out",t.style.opacity="0",t.style.display="none"}var Rt=["text","number","checkbox","radio","radio group","email","password","tel"];function vt(t){let e=t;return!(e.name==null||!e.type||!Rt.includes(e.type))}function ot(t){return t.name==null?!1:!vt(t)}function Gt(t){return typeof t=="string"}function $t(t){return Gt(t)?Number(t):vt(t)?Number(H(t)):ot(t)?Number(t.value):0}function Zt(t,e){var r;let n=(r=t.calculations)==null?void 0:r.filter(i=>{var s;return((s=i.step)==null?void 0:s.name)===e.name});if(n)for(let i of n)Me(i)}function Me(t){if(Le(t.rule))for(let n of t.actions)Ne(n)}function Ne(t){var n,r;if(!t.variable)return;(r=(n=t.variable).value)!=null||(n.value=0);let e=$t(t.parameter);t.operation==="plus"?t.variable.value+=e:t.operation==="minus"?t.variable.value-=e:t.operation==="divide by"?t.variable.value/=e:t.operation==="multiply by"&&(t.variable.value*=e)}function Le(t){for(let e of t)if(Ie(e))return!0;return!1}function Ie(t){for(let e of t)if(!Ae(e))return!1;return!0}function Ae(t){if(!t.input)return!1;let e=H(t.input),n=k(t.input);if(t.function==="is selected")return n;if(t.function==="is not selected")return!n;if(t.function==="equals")return e===String(t.parameter);if(t.function==="does not equal")return e!==String(t.parameter);if(t.function==="contains")return e.includes(String(t.parameter));if(t.function==="does not contain")return!e.includes(String(t.parameter));if(t.function==="is empty")return!e.length;if(t.function==="is not empty")return!!e.length;if(t.function==="regexp")return new RegExp(String(t.parameter)).test(e);if(t.function==="greater than"){let r=Number(e),i=Number(t.parameter);return!isNaN(r)&&!isNaN(i)?r>i:e>String(t.parameter)}if(t.function==="smaller than"){let r=Number(e),i=Number(t.parameter);return!isNaN(r)&&!isNaN(i)?r<i:e<String(t.parameter)}return!1}function jt(t,e){let n=t.paths.filter(i=>i.path.from.name===e.name);if(n.length===1)return n[0].path.to;let r=n.filter(i=>ze(i.rule));return r.sort(i=>De(i.rule,"any other case")?1:0),r[0].path.to}function ze(t){for(let e of t)if(He(e))return!0;return!1}function He(t){for(let e of t)if(!Fe(e))return!1;return!0}function Fe(t){if(t.function==="any other case")return!0;if(!t.input)return!1;let e=H(t.input),n=k(t.input);if(t.function==="is selected")return n;if(t.function==="is not selected")return!n;if(t.function==="equals")return e===String(t.parameter);if(t.function==="does not equal")return e!==String(t.parameter);if(t.function==="contains")return e.includes(String(t.parameter));if(t.function==="does not contain")return!e.includes(String(t.parameter));if(t.function==="is empty")return!e.length;if(t.function==="is not empty")return!!e.length;if(t.function==="regexp")return new RegExp(String(t.parameter)).test(e);if(t.function==="greater than"){let r=Number(e),i=Number(t.parameter);return!isNaN(r)&&!isNaN(i)?r>i:e>String(t.parameter)}if(t.function==="smaller than"){let r=Number(e),i=Number(t.parameter);return!isNaN(r)&&!isNaN(i)?r<i:e<String(t.parameter)}return!1}function De(t,e){for(let n of t)for(let r of n)if(r.function===e)return!0;return!1}function Oe(t,e){Array.from(document.body.querySelectorAll(`[if-show='${t.name}']`)).forEach(r=>{r.innerText=String(Math.round(e*100)/100)})}function Wt(t){let e={};return t.forEach(n=>{var r;e[n.name]=(r=n.value)!=null?r:0}),e}function Xt(t,e){t.forEach(n=>n.value=e[n.name])}function Jt(t){return new Proxy(t,{set(e,n,r){return n==="value"&&(e.value=r,Oe(e,Number(r))),!0}})}var E=Uint8Array,B=Uint16Array,qe=Int32Array,Qt=new E([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Yt=new E([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),Pe=new E([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Kt=function(t,e){for(var n=new B(31),r=0;r<31;++r)n[r]=e+=1<<t[r-1];for(var i=new qe(n[30]),r=1;r<30;++r)for(var s=n[r];s<n[r+1];++s)i[s]=s-n[r]<<5|r;return{b:n,r:i}},_t=Kt(Qt,2),te=_t.b,Ue=_t.r;te[28]=258,Ue[258]=28;var ee=Kt(Yt,0),ke=ee.b,Xn=ee.r,dt=new B(32768);for(c=0;c<32768;++c)L=(c&43690)>>1|(c&21845)<<1,L=(L&52428)>>2|(L&13107)<<2,L=(L&61680)>>4|(L&3855)<<4,dt[c]=((L&65280)>>8|(L&255)<<8)>>1;var L,c,Y=function(t,e,n){for(var r=t.length,i=0,s=new B(e);i<r;++i)t[i]&&++s[t[i]-1];var v=new B(e);for(i=1;i<e;++i)v[i]=v[i-1]+s[i-1]<<1;var l;if(n){l=new B(1<<e);var g=15-e;for(i=0;i<r;++i)if(t[i])for(var S=i<<4|t[i],a=e-t[i],u=v[t[i]-1]++<<a,C=u|(1<<a)-1;u<=C;++u)l[dt[u]>>g]=S}else for(l=new B(r),i=0;i<r;++i)t[i]&&(l[i]=dt[v[t[i]-1]++]>>15-t[i]);return l},K=new E(288);for(c=0;c<144;++c)K[c]=8;var c;for(c=144;c<256;++c)K[c]=9;var c;for(c=256;c<280;++c)K[c]=7;var c;for(c=280;c<288;++c)K[c]=8;var c,ne=new E(32);for(c=0;c<32;++c)ne[c]=5;var c;var Be=Y(K,9,1);var Re=Y(ne,5,1),gt=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},T=function(t,e,n){var r=e/8|0;return(t[r]|t[r+1]<<8)>>(e&7)&n},yt=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},Ge=function(t){return(t+7)/8|0},re=function(t,e,n){(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length);var r=new E(n-e);return r.set(t.subarray(e,n)),r};var $e=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],V=function(t,e,n){var r=new Error(e||$e[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,V),!n)throw r;return r},Ze=function(t,e,n,r){var i=t.length,s=r?r.length:0;if(!i||e.f&&!e.l)return n||new E(0);var v=!n||e.i!=2,l=e.i;n||(n=new E(i*3));var g=function(bt){var Tt=n.length;if(bt>Tt){var Ct=new E(Math.max(Tt*2,bt));Ct.set(n),n=Ct}},S=e.f||0,a=e.p||0,u=e.b||0,C=e.l,R=e.d,I=e.m,A=e.n,F=i*8;do{if(!C){S=T(t,a,1);var D=T(t,a+1,3);if(a+=3,D)if(D==1)C=Be,R=Re,I=9,A=5;else if(D==2){var o=T(t,a,31)+257,m=T(t,a+10,15)+4,y=o+T(t,a+5,31)+1;a+=14;for(var h=new E(y),d=new E(19),f=0;f<m;++f)d[Pe[f]]=T(t,a+f*3,7);a+=m*3;for(var z=gt(d),G=(1<<z)-1,st=Y(d,z,1),f=0;f<y;){var $=st[T(t,a,G)];a+=$&15;var w=$>>4;if(w<16)h[f++]=w;else{var x=0,P=0;for(w==16?(P=3+T(t,a,3),a+=2,x=h[f-1]):w==17?(P=3+T(t,a,7),a+=3):w==18&&(P=11+T(t,a,127),a+=7);P--;)h[f++]=x}}var Z=h.subarray(0,o),b=h.subarray(o);I=gt(Z),A=gt(b),C=Y(Z,I,1),R=Y(b,A,1)}else V(1);else{var w=Ge(a)+4,O=t[w-4]|t[w-3]<<8,q=w+O;if(q>i){l&&V(0);break}v&&g(u+O),n.set(t.subarray(w,q),u),e.b=u+=O,e.p=a=q*8,e.f=S;continue}if(a>F){l&&V(0);break}}v&&g(u+131072);for(var pe=(1<<I)-1,he=(1<<A)-1,lt=a;;lt=a){var x=C[yt(t,a)&pe],U=x>>4;if(a+=x&15,a>F){l&&V(0);break}if(x||V(2),U<256)n[u++]=U;else if(U==256){lt=a,C=null;break}else{var Et=U-254;if(U>264){var f=U-257,j=Qt[f];Et=T(t,a,(1<<j)-1)+te[f],a+=j}var ut=R[yt(t,a)&he],ft=ut>>4;ut||V(3),a+=ut&15;var b=ke[ft];if(ft>3){var j=Yt[ft];b+=yt(t,a)&(1<<j)-1,a+=j}if(a>F){l&&V(0);break}v&&g(u+131072);var ct=u+Et;if(u<b){var xt=s-b,me=Math.min(b,ct);for(xt+u<0&&V(3);u<me;++u)n[u]=r[xt+u]}for(;u<ct;u+=4)n[u]=n[u-b],n[u+1]=n[u+1-b],n[u+2]=n[u+2-b],n[u+3]=n[u+3-b];u=ct}}e.l=C,e.p=lt,e.b=u,e.f=S,C&&(S=1,e.m=I,e.d=R,e.n=A)}while(!S);return u==n.length?n:re(n,0,u)};var je=new E(0);function ie(t,e){return Ze(t,{i:2},e&&e.out,e&&e.dictionary)}var St=typeof TextDecoder!="undefined"&&new TextDecoder,We=0;try{St.decode(je,{stream:!0}),We=1}catch{}var Xe=function(t){for(var e="",n=0;;){var r=t[n++],i=(r>127)+(r>223)+(r>239);if(n+i>t.length)return{s:e,r:re(t,n-1)};i?i==3?(r=((r&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?e+=String.fromCharCode((r&31)<<6|t[n++]&63):e+=String.fromCharCode((r&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(r)}};function oe(t,e){if(e){for(var n="",r=0;r<t.length;r+=16384)n+=String.fromCharCode.apply(null,t.subarray(r,r+16384));return n}else{if(St)return St.decode(t);var i=Xe(t),s=i.s,n=i.r;return n.length&&V(8),s}}var{parse:Je,stringify:Qn}=JSON,{keys:Qe}=Object,at=String,Ye="string",ae={},se="object",Ke=(t,e)=>e,_e=t=>t instanceof at?at(t):t,tn=(t,e)=>typeof e===Ye?new at(e):e,le=(t,e,n,r)=>{let i=[];for(let s=Qe(n),{length:v}=s,l=0;l<v;l++){let g=s[l],S=n[g];if(S instanceof at){let a=t[S];typeof a===se&&!e.has(a)?(e.add(a),n[g]=ae,i.push({k:g,a:[t,e,a,r]})):n[g]=r.call(n,g,a)}else n[g]!==ae&&(n[g]=r.call(n,g,S))}for(let{length:s}=i,v=0;v<s;v++){let{k:l,a:g}=i[v];n[l]=r.call(n,l,le.apply(null,g))}return n};var ue=(t,e)=>{let n=Je(t,tn).map(_e),r=n[0],i=e||Ke,s=typeof r===se&&r?le(n,new Set,r,i):r;return i.call({"":s},"",s)};function fe(t){let e=window.atob(t),n=e.length,r=new Uint8Array(n);for(let i=0;i<n;i++)r[i]=e.charCodeAt(i);return r}function wt(t){let e=fe(t),r=oe(ie(e));return ue(r)}var en="https://cfg.inputflow.io";async function ce(){var i;let t=tt(),e=(i=t==null?void 0:t.getAttribute("config"))!=null?i:"";if(!t)throw new Error("Could not load configuration!");let n=!t.hasAttribute("if-id")&&t.hasAttribute("config"),r;if(e)r=wt(e);else{let s=t==null?void 0:t.getAttribute("if-id");if(!s)throw new Error("wrong script configuration");let l=await(await fetch(`${en}/forms/${s}/config`)).json();r=wt(l.config)}return n&&(delete r.validations,delete r.variables,delete r.calculations,delete r.generalSettings),r}(async()=>{var F,D,w,O,q;let t=Array.from(document.querySelectorAll("[if-step]")),e=document.querySelector("[if-step]");t.forEach(o=>Ut(o,e));let n=await ce();J()&&Q("Config",n);let r=kt(n),i=[];[...p().querySelectorAll("[if-element='error']")].forEach(o=>Bt(o));let v=n.steps.flatMap(o=>o.inputs),l=(D=(F=n.variables)==null?void 0:F.map(o=>Jt(o)))!=null?D:[],g=Mt();(w=n.calculations)==null||w.forEach(o=>{o.actions.forEach(m=>{let y=l.find(d=>{var f;return d.name===((f=m.variable)==null?void 0:f.name)});if(y&&(m.variable=y),!ot(m.parameter))return;let h=l.find(d=>{var f;return d.name===((f=m.parameter)==null?void 0:f.name)});h&&(m.parameter=h)})});let S=v.map(o=>p().querySelector(N(o))).filter(o=>o);p().setAttribute("novalidate","true"),S.filter(o=>o.getAttribute("type")==="number").forEach(o=>{o.hasAttribute("step")||o.setAttribute("step","any")}),W("[if-element='button-next']",p()).forEach(o=>o.addEventListener("click",A)),(O=n.generalSettings)!=null&&O.nextStepWithoutButtonClick&&!g&&n.steps.forEach(o=>{if(o.inputs.filter(f=>f.type==="radio group").length!==1||o.inputs.some(f=>!["radio","radio group"].includes(f.type)))return;let h=p().querySelector(M(o));[...h==null?void 0:h.querySelectorAll("input[type='radio']")].forEach(f=>f.addEventListener("click",async()=>{await _(150),A()}))}),(q=p())==null||q.addEventListener("submit",o=>{if(o instanceof CustomEvent&&o.detail.flag==="ignore"||(o.preventDefault(),o.stopImmediatePropagation(),!g&&!mt(n,r)))return;let m=p().querySelector(M(r)),y=!!m.querySelector("[type='submit']"),h=m.querySelector("[if-element='button-next']"),d=!!h;if(!y){d&&h.click();return}let f=new CustomEvent("submit",{bubbles:!0,cancelable:!0,composed:!0,detail:{flag:"ignore"}});At(S,"required"),p().dispatchEvent(f)}),W("[if-element='button-back']",p()).forEach(o=>{o.addEventListener("click",()=>{if(!i.length)return;let m=i[i.length-1];Xt(l,m.variableState),ht(r,m.step),i.pop(),r=m.step})}),g||I(pt()),Array.from(pt().querySelectorAll("[if-show]")).forEach(o=>{let m=o.getAttribute("if-show"),y=v.find(d=>d.name===m);if(!y)return;(y==null?void 0:y.type)==="radio group"&&Array.from(p().querySelectorAll(`input[type='radio'][data-name='${y.name}']`)).forEach(f=>f.addEventListener("change",()=>{let z=it(y.name,p());o.innerText=(z==null?void 0:z.value)||""}));let h=p().querySelector(N(y));h==null||h.addEventListener("input",()=>o.innerText=h.value)}),l.forEach(o=>{var m;return o.value=(m=o.value)!=null?m:0});function I(o){for(let m=0;m<o.childNodes.length;m++){let y=o.childNodes[m];if(y instanceof HTMLElement){I(y);continue}if(y.nodeType!==Node.TEXT_NODE)continue;let h=y.textContent||"";if(!h.includes("@[")||!h.includes("]"))continue;let d=h.indexOf("@["),f=h.indexOf("]",d),G=h.slice(d+2,f).split(";"),st=G[0].trim(),$="";G.length>1&&($=G.slice(1).join(";").trim());let x=document.createElement("span");x.setAttribute("if-show",st),x.innerText=$;let P=document.createTextNode(h.slice(0,d)),Z=document.createTextNode(h.slice(f+1));o.replaceChild(Z,y),o.insertBefore(x,Z),o.insertBefore(P,x)}}function A(){if(!g&&!mt(n,r))return;let o=jt(n,r);i.push({step:r,variableState:Wt(l)}),Zt(n,r),ht(r,o),r=o}})();
/*! Bundled license information:

flatted/esm/index.js:
  (*! (c) 2020 Andrea Giammarchi *)
*/
