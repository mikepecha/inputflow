function k(t){return new Promise(e=>{setTimeout(e,t)})}function xt(t){return t.replace(/'/g,"\\'").replace(/"/g,'\\"')}function Et(){let t=bt();return t?!t.hasAttribute("if-id")&&t.hasAttribute("config"):!0}function X(t,e=document.body){return Array.from(e.querySelectorAll(t))}function A(t){return`[if-step='${xt(t.name)}']`}function V(t){return t?t.type==="radio"?`input[type='radio'][value='${t.name}']`:`input[type='${t.type}'][data-name='${t.name}']`:""}function Ct(t){return function(e){return!!(e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING)}}function Tt(t,e){let r=Array.from(document.querySelectorAll(e)).find(i=>t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING);return r||null}function Vt(t,e){let r=Array.from(document.querySelectorAll(e)).find(i=>t.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING);return r||null}function J(t,e){return window.getComputedStyle(t).getPropertyValue(e)}function Nt(t,e){t.forEach(n=>{n&&n.removeAttribute(e)})}function At(t){let e=[];function n(r){if(r.nodeType===Node.TEXT_NODE)e.push(r);else for(let i=0;i<r.childNodes.length;i++)n(r.childNodes[i])}return n(t),e}function _(t){let e=document.querySelector(A(t));return e||null}function It(t){if(t.type==="radio group")return null;let e=document.querySelector(V(t));return e||null}function Mt(t){return t.reduce((e,n)=>{var r,i,s,p;return n.nodeType===Node.TEXT_NODE&&e.nodeType===Node.TEXT_NODE&&((i=(r=n.textContent)==null?void 0:r.length)!=null?i:0)>((p=(s=e.textContent)==null?void 0:s.length)!=null?p:0)?n:e},document.createTextNode(""))}function tt(t,e=document.body){return e.querySelector(`input[type='radio'][data-name='${t}']:checked`)}function bt(){var t,e;return(e=(t=document.currentScript)!=null?t:document.querySelector("script[src^='https://cdn.jsdelivr.net/gh/mikepecha/inputflow']"))!=null?e:document.querySelector("script[src='http://localhost:3002/index.js']")}async function ut(t,e){await le(t),fe(e)}async function le(t){let e=document.querySelector(A(t));e.style.opacity="0",await k(250),e.offsetHeight,e.style.display="none"}function fe(t){let e=document.querySelector(A(t)),{initalDisplay:n}=e.dataset;e.style.display=n||"block",e.offsetHeight,e.style.opacity="1"}function Lt(t){let e=t.closest("[if-step]");return e?ce(e)?Tt(t,"[if-element='error']"):Vt(t,"[if-element='error']"):null}function ce(t){let e=t.querySelector("input"),n=t.querySelector("[if-element='error'");return!n||!e?!1:Ct(n)(e)}function zt(t){t.forEach(e=>Ht(e))}function Ft(t){t.forEach(e=>pe(e))}function Ht(t){var s;let e=document.querySelector(V(t.input));((s=t.input)==null?void 0:s.type)==="radio group"&&(e=document.querySelector(`input[type='radio'][data-name='${t.input.name}']`));let n=Lt(e);if(!n)return;let r=At(n),i=Mt(r);i.textContent=t.error,he(n)}function pe(t){let{input:e,step:n}=t;if(!e||!n)return;let r=It(e),i=_(n);if(!r||!i)return;if(!!i.querySelector("[if-element='error']"))return Ht(t);r.checkValidity()||r.reportValidity()}function he(t){let e=t.dataset.initalDisplay;t.style.display=e!=null?e:"inline-block",t.offsetHeight,t.style.opacity="1"}function I(t){var r;let e=document.querySelector(V(t)),n=(e==null?void 0:e.value)||"";if((t==null?void 0:t.type)==="radio group"){let i=tt(t.name);n=(r=i==null?void 0:i.value)!=null?r:""}return n}function B(t){if(t.type!=="radio"&&t.type!=="checkbox")return!1;let e=document.querySelector(V(t));return(e==null?void 0:e.checked)||!1}function lt(t,e){let n=document.querySelector(A(e));Array.from(n.querySelectorAll("[if-element='error']")).forEach(l=>{l.style.display="none",l.style.opacity="0",l.offsetHeight});let i=me(t,e).reverse(),s=ve(t,e).reverse();return i.length&&Ft(i),s.length&&zt(s),!(s.length||i.length)}function ve(t,e){if(!t.validations)return[];let n=t.validations.filter(r=>{var i;return((i=r.step)==null?void 0:i.name)===e.name});return n==null?void 0:n.filter(r=>ge(r))}function me(t,e){let n=t.steps.flatMap(l=>l.inputs),r=_(e);return r?X("input",r).filter(l=>!l.validity.valid).map(l=>{let v=n.find(a=>a.name===l.getAttribute("data-name")&&a.type===l.getAttribute("type"));return{error:l.validationMessage,input:v,step:e}}):[]}function ge(t){return!ye(t)}function ye(t){return t.rule?!de(t.rule):!0}function de(t){for(let e of t)if(Se(e))return!0;return!1}function Se(t){for(let e of t)if(!we(e))return!1;return!0}function we(t){if(!t.input)return!1;let e=I(t.input),n=B(t.input);if(t.function==="is selected")return n;if(t.function==="is not selected")return!n;if(t.function==="equals")return e===String(t.parameter);if(t.function==="does not equal")return e!==String(t.parameter);if(t.function==="contains")return e.includes(String(t.parameter));if(t.function==="does not contain")return!e.includes(String(t.parameter));if(t.function==="is empty")return!e.length;if(t.function==="is not empty")return!!e.length;if(t.function==="regexp")return!new RegExp(String(t.parameter)).test(e);if(t.function==="greater than"){let r=Number(e),i=Number(t.parameter);return!isNaN(r)&&!isNaN(i)?r>i:e>String(t.parameter)}if(t.function==="smaller than"){let r=Number(e),i=Number(t.parameter);return!isNaN(r)&&!isNaN(i)?r<i:e<String(t.parameter)}return!1}function Dt(t,e){t.style.transition="opacity 250ms ";let n=J(t,"display");if(n==="none"&&(n=J(e,"display")),n==="none"&&(n="block"),t.dataset.initalDisplay=n,t.getAttribute("if-step")===e.getAttribute("if-step")){t.style.opacity="1";return}t.style.opacity="0",t.style.display="none"}function Ot(t){if(t.steps.length===1)return t.steps[0];for(let e of t.steps){let n=t.paths.some(i=>i.path.to.name===e.name),r=t.paths.some(i=>i.path.from.name===e.name);if(!n&&r)return e}throw new Error("Could not find first form step")}function qt(t){let e=J(t,"display");e==="none"&&(e="inline-block"),t.dataset.initalDisplay=e,t.style.transition="opacity .3s ease-out",t.style.opacity="0",t.style.display="none"}var Pt=["text","number","checkbox","radio","radio group","email","password","tel"];function ft(t){let e=t;return!(e.name==null||!e.type||!Pt.includes(e.type))}function et(t){return t.name==null?!1:!ft(t)}function Ut(t){return typeof t=="string"}function kt(t){return Ut(t)?Number(t):ft(t)?Number(I(t)):et(t)?Number(t.value):0}function Bt(t,e){var r;let n=(r=t.calculations)==null?void 0:r.filter(i=>{var s;return((s=i.step)==null?void 0:s.name)===e.name});if(n)for(let i of n)xe(i)}function xe(t){if(be(t.rule))for(let n of t.actions)Ee(n)}function Ee(t){var n,r;if(!t.variable)return;(r=(n=t.variable).value)!=null||(n.value=0);let e=kt(t.parameter);t.operation==="plus"?t.variable.value+=e:t.operation==="minus"?t.variable.value-=e:t.operation==="divide by"?t.variable.value/=e:t.operation==="multiply by"&&(t.variable.value*=e)}function be(t){for(let e of t)if(Ce(e))return!0;return!1}function Ce(t){for(let e of t)if(!Te(e))return!1;return!0}function Te(t){if(!t.input)return!1;let e=I(t.input),n=B(t.input);if(t.function==="is selected")return n;if(t.function==="is not selected")return!n;if(t.function==="equals")return e===String(t.parameter);if(t.function==="does not equal")return e!==String(t.parameter);if(t.function==="contains")return e.includes(String(t.parameter));if(t.function==="does not contain")return!e.includes(String(t.parameter));if(t.function==="is empty")return!e.length;if(t.function==="is not empty")return!!e.length;if(t.function==="regexp")return new RegExp(String(t.parameter)).test(e);if(t.function==="greater than"){let r=Number(e),i=Number(t.parameter);return!isNaN(r)&&!isNaN(i)?r>i:e>String(t.parameter)}if(t.function==="smaller than"){let r=Number(e),i=Number(t.parameter);return!isNaN(r)&&!isNaN(i)?r<i:e<String(t.parameter)}return!1}function Rt(t,e){let n=t.paths.filter(i=>i.path.from.name===e.name);if(n.length===1)return n[0].path.to;let r=n.filter(i=>Ve(i.rule));return r.sort(i=>Ie(i.rule,"any other case")?1:0),r[0].path.to}function Ve(t){for(let e of t)if(Ne(e))return!0;return!1}function Ne(t){for(let e of t)if(!Ae(e))return!1;return!0}function Ae(t){if(t.function==="any other case")return!0;if(!t.input)return!1;let e=I(t.input),n=B(t.input);if(t.function==="is selected")return n;if(t.function==="is not selected")return!n;if(t.function==="equals")return e===String(t.parameter);if(t.function==="does not equal")return e!==String(t.parameter);if(t.function==="contains")return e.includes(String(t.parameter));if(t.function==="does not contain")return!e.includes(String(t.parameter));if(t.function==="is empty")return!e.length;if(t.function==="is not empty")return!!e.length;if(t.function==="regexp")return new RegExp(String(t.parameter)).test(e);if(t.function==="greater than"){let r=Number(e),i=Number(t.parameter);return!isNaN(r)&&!isNaN(i)?r>i:e>String(t.parameter)}if(t.function==="smaller than"){let r=Number(e),i=Number(t.parameter);return!isNaN(r)&&!isNaN(i)?r<i:e<String(t.parameter)}return!1}function Ie(t,e){for(let n of t)for(let r of n)if(r.function===e)return!0;return!1}function Me(t,e){Array.from(document.body.querySelectorAll(`[if-show='${t.name}']`)).forEach(r=>{r.innerText=String(Math.round(e*100)/100)})}function Gt(t){let e={};return t.forEach(n=>{var r;e[n.name]=(r=n.value)!=null?r:0}),e}function $t(t,e){t.forEach(n=>n.value=e[n.name])}function Zt(t){return new Proxy(t,{set(e,n,r){return n==="value"&&(e.value=r,Me(e,Number(r))),!0}})}var x=Uint8Array,R=Uint16Array,Le=Int32Array,jt=new x([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Wt=new x([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),ze=new x([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),Xt=function(t,e){for(var n=new R(31),r=0;r<31;++r)n[r]=e+=1<<t[r-1];for(var i=new Le(n[30]),r=1;r<30;++r)for(var s=n[r];s<n[r+1];++s)i[s]=s-n[r]<<5|r;return{b:n,r:i}},Jt=Xt(jt,2),Qt=Jt.b,Fe=Jt.r;Qt[28]=258,Fe[258]=28;var Yt=Xt(Wt,0),He=Yt.b,Hn=Yt.r,ht=new R(32768);for(c=0;c<32768;++c)N=(c&43690)>>1|(c&21845)<<1,N=(N&52428)>>2|(N&13107)<<2,N=(N&61680)>>4|(N&3855)<<4,ht[c]=((N&65280)>>8|(N&255)<<8)>>1;var N,c,Q=function(t,e,n){for(var r=t.length,i=0,s=new R(e);i<r;++i)t[i]&&++s[t[i]-1];var p=new R(e);for(i=1;i<e;++i)p[i]=p[i-1]+s[i-1]<<1;var l;if(n){l=new R(1<<e);var v=15-e;for(i=0;i<r;++i)if(t[i])for(var g=i<<4|t[i],a=e-t[i],u=p[t[i]-1]++<<a,b=u|(1<<a)-1;u<=b;++u)l[ht[u]>>v]=g}else for(l=new R(r),i=0;i<r;++i)t[i]&&(l[i]=ht[p[t[i]-1]++]>>15-t[i]);return l},Y=new x(288);for(c=0;c<144;++c)Y[c]=8;var c;for(c=144;c<256;++c)Y[c]=9;var c;for(c=256;c<280;++c)Y[c]=7;var c;for(c=280;c<288;++c)Y[c]=8;var c,Kt=new x(32);for(c=0;c<32;++c)Kt[c]=5;var c;var De=Q(Y,9,1);var Oe=Q(Kt,5,1),ct=function(t){for(var e=t[0],n=1;n<t.length;++n)t[n]>e&&(e=t[n]);return e},E=function(t,e,n){var r=e/8|0;return(t[r]|t[r+1]<<8)>>(e&7)&n},pt=function(t,e){var n=e/8|0;return(t[n]|t[n+1]<<8|t[n+2]<<16)>>(e&7)},qe=function(t){return(t+7)/8|0},_t=function(t,e,n){(e==null||e<0)&&(e=0),(n==null||n>t.length)&&(n=t.length);var r=new x(n-e);return r.set(t.subarray(e,n)),r};var Pe=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],T=function(t,e,n){var r=new Error(e||Pe[t]);if(r.code=t,Error.captureStackTrace&&Error.captureStackTrace(r,T),!n)throw r;return r},Ue=function(t,e,n,r){var i=t.length,s=r?r.length:0;if(!i||e.f&&!e.l)return n||new x(0);var p=!n||e.i!=2,l=e.i;n||(n=new x(i*3));var v=function(dt){var St=n.length;if(dt>St){var wt=new x(Math.max(St*2,dt));wt.set(n),n=wt}},g=e.f||0,a=e.p||0,u=e.b||0,b=e.l,G=e.d,L=e.m,z=e.n,F=i*8;do{if(!b){g=E(t,a,1);var H=E(t,a+1,3);if(a+=3,H)if(H==1)b=De,G=Oe,L=9,z=5;else if(H==2){var q=E(t,a,31)+257,$=E(t,a+10,15)+4,Z=q+E(t,a+5,31)+1;a+=14;for(var o=new x(Z),h=new x(19),f=0;f<$;++f)h[ze[f]]=E(t,a+f*3,7);a+=$*3;for(var m=ct(h),w=(1<<m)-1,y=Q(h,m,1),f=0;f<Z;){var M=y[E(t,a,w)];a+=M&15;var S=M>>4;if(S<16)o[f++]=S;else{var C=0,P=0;for(S==16?(P=3+E(t,a,3),a+=2,C=o[f-1]):S==17?(P=3+E(t,a,7),a+=3):S==18&&(P=11+E(t,a,127),a+=7);P--;)o[f++]=C}}var j=o.subarray(0,q),d=o.subarray(q);L=ct(j),z=ct(d),b=Q(j,L,1),G=Q(d,z,1)}else T(1);else{var S=qe(a)+4,D=t[S-4]|t[S-3]<<8,O=S+D;if(O>i){l&&T(0);break}p&&v(u+D),n.set(t.subarray(S,O),u),e.b=u+=D,e.p=a=O*8,e.f=g;continue}if(a>F){l&&T(0);break}}p&&v(u+131072);for(var rt=(1<<L)-1,K=(1<<z)-1,it=a;;it=a){var C=b[pt(t,a)&rt],U=C>>4;if(a+=C&15,a>F){l&&T(0);break}if(C||T(2),U<256)n[u++]=U;else if(U==256){it=a,b=null;break}else{var gt=U-254;if(U>264){var f=U-257,W=jt[f];gt=E(t,a,(1<<W)-1)+Qt[f],a+=W}var ot=G[pt(t,a)&K],at=ot>>4;ot||T(3),a+=ot&15;var d=He[at];if(at>3){var W=Wt[at];d+=pt(t,a)&(1<<W)-1,a+=W}if(a>F){l&&T(0);break}p&&v(u+131072);var st=u+gt;if(u<d){var yt=s-d,ue=Math.min(d,st);for(yt+u<0&&T(3);u<ue;++u)n[u]=r[yt+u]}for(;u<st;u+=4)n[u]=n[u-d],n[u+1]=n[u+1-d],n[u+2]=n[u+2-d],n[u+3]=n[u+3-d];u=st}}e.l=b,e.p=it,e.b=u,e.f=g,b&&(g=1,e.m=L,e.d=G,e.n=z)}while(!g);return u==n.length?n:_t(n,0,u)};var ke=new x(0);function te(t,e){return Ue(t,{i:2},e&&e.out,e&&e.dictionary)}var vt=typeof TextDecoder!="undefined"&&new TextDecoder,Be=0;try{vt.decode(ke,{stream:!0}),Be=1}catch{}var Re=function(t){for(var e="",n=0;;){var r=t[n++],i=(r>127)+(r>223)+(r>239);if(n+i>t.length)return{s:e,r:_t(t,n-1)};i?i==3?(r=((r&15)<<18|(t[n++]&63)<<12|(t[n++]&63)<<6|t[n++]&63)-65536,e+=String.fromCharCode(55296|r>>10,56320|r&1023)):i&1?e+=String.fromCharCode((r&31)<<6|t[n++]&63):e+=String.fromCharCode((r&15)<<12|(t[n++]&63)<<6|t[n++]&63):e+=String.fromCharCode(r)}};function ee(t,e){if(e){for(var n="",r=0;r<t.length;r+=16384)n+=String.fromCharCode.apply(null,t.subarray(r,r+16384));return n}else{if(vt)return vt.decode(t);var i=Re(t),s=i.s,n=i.r;return n.length&&T(8),s}}var{parse:Ge,stringify:On}=JSON,{keys:$e}=Object,nt=String,Ze="string",ne={},re="object",je=(t,e)=>e,We=t=>t instanceof nt?nt(t):t,Xe=(t,e)=>typeof e===Ze?new nt(e):e,ie=(t,e,n,r)=>{let i=[];for(let s=$e(n),{length:p}=s,l=0;l<p;l++){let v=s[l],g=n[v];if(g instanceof nt){let a=t[g];typeof a===re&&!e.has(a)?(e.add(a),n[v]=ne,i.push({k:v,a:[t,e,a,r]})):n[v]=r.call(n,v,a)}else n[v]!==ne&&(n[v]=r.call(n,v,g))}for(let{length:s}=i,p=0;p<s;p++){let{k:l,a:v}=i[p];n[l]=r.call(n,l,ie.apply(null,v))}return n};var oe=(t,e)=>{let n=Ge(t,Xe).map(We),r=n[0],i=e||je,s=typeof r===re&&r?ie(n,new Set,r,i):r;return i.call({"":s},"",s)};function ae(t){let e=window.atob(t),n=e.length,r=new Uint8Array(n);for(let i=0;i<n;i++)r[i]=e.charCodeAt(i);return r}function mt(t){let e=ae(t),r=ee(te(e));return oe(r)}var Je="https://cfg.inputflow.io";async function se(){var i,s,p;let t=(s=(i=document.currentScript)!=null?i:document.querySelector("script[src^='https://cdn.jsdelivr.net/gh/mikepecha/inputflow']"))!=null?s:document.querySelector("script[src='http://localhost:3002/index.js']"),e=(p=t==null?void 0:t.getAttribute("config"))!=null?p:"";if(!t)throw new Error("Could not load configuration!");let n=!t.hasAttribute("if-id")&&t.hasAttribute("config"),r;if(await k(500),e)r=mt(e);else{let l=t==null?void 0:t.getAttribute("if-id");if(!l)throw new Error("wrong script configuration");let g=await(await fetch(`${Je}/forms/${l}/config`)).json();r=mt(g.config)}return n&&(delete r.validations,delete r.variables,delete r.calculations,delete r.generalSettings),r}(async()=>{var S,D,O,q,$,Z;let t=Array.from(document.querySelectorAll("[if-step]")),e=document.querySelector("[if-step]");t.forEach(o=>Dt(o,e));let n=await se(),r=(S=document.querySelector("[if-step]"))==null?void 0:S.closest("form"),i=(D=document.querySelector("[if-step]"))==null?void 0:D.closest(".w-form"),s=Ot(n),p=[];[...r.querySelectorAll("[if-element='error']")].forEach(o=>qt(o));let v=n.steps.flatMap(o=>o.inputs),g=(q=(O=n.variables)==null?void 0:O.map(o=>Zt(o)))!=null?q:[],a=Et();($=n.calculations)==null||$.forEach(o=>{o.actions.forEach(h=>{let f=g.find(w=>{var y;return w.name===((y=h.variable)==null?void 0:y.name)});if(f&&(h.variable=f),!et(h.parameter))return;let m=g.find(w=>{var y;return w.name===((y=h.parameter)==null?void 0:y.name)});m&&(h.parameter=m)})});let u=v.map(o=>r.querySelector(V(o))).filter(o=>o);r.setAttribute("novalidate","true"),u.filter(o=>o.getAttribute("type")==="number").forEach(o=>{o.hasAttribute("step")||o.setAttribute("step","any")}),X("[if-element='button-next']",r).forEach(o=>o.addEventListener("click",H)),(Z=n.generalSettings)!=null&&Z.nextStepWithoutButtonClick&&!a&&n.steps.forEach(o=>{if(o.inputs.filter(y=>y.type==="radio group").length!==1||o.inputs.some(y=>!["radio","radio group"].includes(y.type)))return;let m=document.querySelector(A(o));[...m==null?void 0:m.querySelectorAll("input[type='radio']")].forEach(y=>y.addEventListener("click",async()=>{await k(150),H()}))}),r==null||r.addEventListener("submit",o=>{if(o instanceof CustomEvent&&o.detail.flag==="ignore"||(o.preventDefault(),o.stopImmediatePropagation(),!a&&!lt(n,s)))return;let h=new CustomEvent("submit",{bubbles:!0,cancelable:!0,composed:!0,detail:{flag:"ignore"}});Nt(u,"required"),r.dispatchEvent(h)}),X("[if-element='button-back']",r).forEach(o=>{o.addEventListener("click",()=>{if(!p.length)return;let h=p[p.length-1];$t(g,h.variableState),ut(s,h.step),p.pop(),s=h.step})}),a||F(i),Array.from(i.querySelectorAll("[if-show]")).forEach(o=>{let h=o.getAttribute("if-show"),f=v.find(w=>w.name===h);if(!f)return;(f==null?void 0:f.type)==="radio group"&&Array.from(r.querySelectorAll(`input[type='radio'][data-name='${f.name}']`)).forEach(y=>y.addEventListener("change",()=>{let M=tt(f.name,r);o.innerText=(M==null?void 0:M.value)||""}));let m=r.querySelector(V(f));m==null||m.addEventListener("input",()=>o.innerText=m.value)}),g.forEach(o=>{var h;return o.value=(h=o.value)!=null?h:0});function F(o){for(let h=0;h<o.childNodes.length;h++){let f=o.childNodes[h];if(f instanceof HTMLElement){F(f);continue}if(f.nodeType!==Node.TEXT_NODE)continue;let m=f.textContent||"";if(!m.includes("@[")||!m.includes("]"))continue;let w=m.indexOf("@["),y=m.indexOf("]",w),C=m.slice(w+2,y).split(";"),P=C[0].trim(),j="";C.length>1&&(j=C.slice(1).join(";").trim());let d=document.createElement("span");d.setAttribute("if-show",P),d.innerText=j;let rt=document.createTextNode(m.slice(0,w)),K=document.createTextNode(m.slice(y+1));o.replaceChild(K,f),o.insertBefore(d,K),o.insertBefore(rt,d)}}function H(){if(!a&&!lt(n,s))return;let o=Rt(n,s);p.push({step:s,variableState:Gt(g)}),Bt(n,s),ut(s,o),s=o}})();
/*! Bundled license information:

flatted/esm/index.js:
  (*! (c) 2020 Andrea Giammarchi *)
*/
