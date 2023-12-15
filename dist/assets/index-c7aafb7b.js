(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function mi(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const ie={},nn=[],je=()=>{},bu=()=>!1,zr=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),gi=t=>t.startsWith("onUpdate:"),ye=Object.assign,_i=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vu=Object.prototype.hasOwnProperty,K=(t,e)=>vu.call(t,e),$=Array.isArray,rn=t=>Kr(t)==="[object Map]",Ga=t=>Kr(t)==="[object Set]",j=t=>typeof t=="function",de=t=>typeof t=="string",vn=t=>typeof t=="symbol",oe=t=>t!==null&&typeof t=="object",Ya=t=>(oe(t)||j(t))&&j(t.then)&&j(t.catch),Xa=Object.prototype.toString,Kr=t=>Xa.call(t),Eu=t=>Kr(t).slice(8,-1),Qa=t=>Kr(t)==="[object Object]",yi=t=>de(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,mr=mi(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qr=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},wu=/-(\w)/g,tt=qr(t=>t.replace(wu,(e,n)=>n?n.toUpperCase():"")),Iu=/\B([A-Z])/g,En=qr(t=>t.replace(Iu,"-$1").toLowerCase()),Jr=qr(t=>t.charAt(0).toUpperCase()+t.slice(1)),ps=qr(t=>t?`on${Jr(t)}`:""),zt=(t,e)=>!Object.is(t,e),gr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Or=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},Ms=t=>{const e=parseFloat(t);return isNaN(e)?t:e},Tu=t=>{const e=de(t)?Number(t):NaN;return isNaN(e)?t:e};let po;const Us=()=>po||(po=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function bi(t){if($(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=de(r)?Cu(r):bi(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(de(t)||oe(t))return t}const Ru=/;(?![^(]*\))/g,Su=/:([^]+)/,Au=/\/\*[^]*?\*\//g;function Cu(t){const e={};return t.replace(Au,"").split(Ru).forEach(n=>{if(n){const r=n.split(Su);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function vi(t){let e="";if(de(t))e=t;else if($(t))for(let n=0;n<t.length;n++){const r=vi(t[n]);r&&(e+=r+" ")}else if(oe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ou="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pu=mi(Ou);function Za(t){return!!t||t===""}const Rt=t=>de(t)?t:t==null?"":$(t)||oe(t)&&(t.toString===Xa||!j(t.toString))?JSON.stringify(t,ec,2):String(t),ec=(t,e)=>e&&e.__v_isRef?ec(t,e.value):rn(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[ms(r,i)+" =>"]=s,n),{})}:Ga(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>ms(n))}:vn(e)?ms(e):oe(e)&&!$(e)&&!Qa(e)?String(e):e,ms=(t,e="")=>{var n;return vn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};let Fe;class ku{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Fe,!e&&Fe&&(this.index=(Fe.scopes||(Fe.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Fe;try{return Fe=this,e()}finally{Fe=n}}}on(){Fe=this}off(){Fe=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Nu(t,e=Fe){e&&e.active&&e.effects.push(t)}function xu(){return Fe}const Ei=t=>{const e=new Set(t);return e.w=0,e.n=0,e},tc=t=>(t.w&Pt)>0,nc=t=>(t.n&Pt)>0,Du=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=Pt},Lu=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];tc(s)&&!nc(s)?s.delete(t):e[n++]=s,s.w&=~Pt,s.n&=~Pt}e.length=n}},Fs=new WeakMap;let kn=0,Pt=1;const Bs=30;let He;const Ht=Symbol(""),$s=Symbol("");class wi{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Nu(this,r)}run(){if(!this.active)return this.fn();let e=He,n=St;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=He,He=this,St=!0,Pt=1<<++kn,kn<=Bs?Du(this):mo(this),this.fn()}finally{kn<=Bs&&Lu(this),Pt=1<<--kn,He=this.parent,St=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){He===this?this.deferStop=!0:this.active&&(mo(this),this.onStop&&this.onStop(),this.active=!1)}}function mo(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let St=!0;const rc=[];function wn(){rc.push(St),St=!1}function In(){const t=rc.pop();St=t===void 0?!0:t}function Ce(t,e,n){if(St&&He){let r=Fs.get(t);r||Fs.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=Ei()),sc(s)}}function sc(t,e){let n=!1;kn<=Bs?nc(t)||(t.n|=Pt,n=!tc(t)):n=!t.has(He),n&&(t.add(He),He.deps.push(t))}function ct(t,e,n,r,s,i){const o=Fs.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&$(t)){const c=Number(r);o.forEach((l,f)=>{(f==="length"||!vn(f)&&f>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":$(t)?yi(n)&&a.push(o.get("length")):(a.push(o.get(Ht)),rn(t)&&a.push(o.get($s)));break;case"delete":$(t)||(a.push(o.get(Ht)),rn(t)&&a.push(o.get($s)));break;case"set":rn(t)&&a.push(o.get(Ht));break}if(a.length===1)a[0]&&Hs(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Hs(Ei(c))}}function Hs(t,e){const n=$(t)?t:[...t];for(const r of n)r.computed&&go(r);for(const r of n)r.computed||go(r)}function go(t,e){(t!==He||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Mu=mi("__proto__,__v_isRef,__isVue"),ic=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(vn)),_o=Uu();function Uu(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=J(this);for(let i=0,o=this.length;i<o;i++)Ce(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(J)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){wn();const r=J(this)[e].apply(this,n);return In(),r}}),t}function Fu(t){const e=J(this);return Ce(e,"has",t),e.hasOwnProperty(t)}class oc{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,r){const s=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?Xu:uc:i?lc:cc).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=$(e);if(!s){if(o&&K(_o,n))return Reflect.get(_o,n,r);if(n==="hasOwnProperty")return Fu}const a=Reflect.get(e,n,r);return(vn(n)?ic.has(n):Mu(n))||(s||Ce(e,"get",n),i)?a:we(a)?o&&yi(n)?a:a.value:oe(a)?s?dc(a):Yr(a):a}}class ac extends oc{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(fn(i)&&we(i)&&!we(r))return!1;if(!this._shallow&&(!Pr(r)&&!fn(r)&&(i=J(i),r=J(r)),!$(e)&&we(i)&&!we(r)))return i.value=r,!0;const o=$(e)&&yi(n)?Number(n)<e.length:K(e,n),a=Reflect.set(e,n,r,s);return e===J(s)&&(o?zt(r,i)&&ct(e,"set",n,r):ct(e,"add",n,r)),a}deleteProperty(e,n){const r=K(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&ct(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!vn(n)||!ic.has(n))&&Ce(e,"has",n),r}ownKeys(e){return Ce(e,"iterate",$(e)?"length":Ht),Reflect.ownKeys(e)}}class Bu extends oc{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const $u=new ac,Hu=new Bu,ju=new ac(!0),Ii=t=>t,Gr=t=>Reflect.getPrototypeOf(t);function cr(t,e,n=!1,r=!1){t=t.__v_raw;const s=J(t),i=J(e);n||(zt(e,i)&&Ce(s,"get",e),Ce(s,"get",i));const{has:o}=Gr(s),a=r?Ii:n?Si:$n;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function lr(t,e=!1){const n=this.__v_raw,r=J(n),s=J(t);return e||(zt(t,s)&&Ce(r,"has",t),Ce(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function ur(t,e=!1){return t=t.__v_raw,!e&&Ce(J(t),"iterate",Ht),Reflect.get(t,"size",t)}function yo(t){t=J(t);const e=J(this);return Gr(e).has.call(e,t)||(e.add(t),ct(e,"add",t,t)),this}function bo(t,e){e=J(e);const n=J(this),{has:r,get:s}=Gr(n);let i=r.call(n,t);i||(t=J(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?zt(e,o)&&ct(n,"set",t,e):ct(n,"add",t,e),this}function vo(t){const e=J(this),{has:n,get:r}=Gr(e);let s=n.call(e,t);s||(t=J(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&ct(e,"delete",t,void 0),i}function Eo(){const t=J(this),e=t.size!==0,n=t.clear();return e&&ct(t,"clear",void 0,void 0),n}function fr(t,e){return function(r,s){const i=this,o=i.__v_raw,a=J(o),c=e?Ii:t?Si:$n;return!t&&Ce(a,"iterate",Ht),o.forEach((l,f)=>r.call(s,c(l),c(f),i))}}function dr(t,e,n){return function(...r){const s=this.__v_raw,i=J(s),o=rn(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),f=n?Ii:e?Si:$n;return!e&&Ce(i,"iterate",c?$s:Ht),{next(){const{value:u,done:p}=l.next();return p?{value:u,done:p}:{value:a?[f(u[0]),f(u[1])]:f(u),done:p}},[Symbol.iterator](){return this}}}}function pt(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Vu(){const t={get(i){return cr(this,i)},get size(){return ur(this)},has:lr,add:yo,set:bo,delete:vo,clear:Eo,forEach:fr(!1,!1)},e={get(i){return cr(this,i,!1,!0)},get size(){return ur(this)},has:lr,add:yo,set:bo,delete:vo,clear:Eo,forEach:fr(!1,!0)},n={get(i){return cr(this,i,!0)},get size(){return ur(this,!0)},has(i){return lr.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:fr(!0,!1)},r={get(i){return cr(this,i,!0,!0)},get size(){return ur(this,!0)},has(i){return lr.call(this,i,!0)},add:pt("add"),set:pt("set"),delete:pt("delete"),clear:pt("clear"),forEach:fr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=dr(i,!1,!1),n[i]=dr(i,!0,!1),e[i]=dr(i,!1,!0),r[i]=dr(i,!0,!0)}),[t,n,e,r]}const[Wu,zu,Ku,qu]=Vu();function Ti(t,e){const n=e?t?qu:Ku:t?zu:Wu;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,i)}const Ju={get:Ti(!1,!1)},Gu={get:Ti(!1,!0)},Yu={get:Ti(!0,!1)},cc=new WeakMap,lc=new WeakMap,uc=new WeakMap,Xu=new WeakMap;function Qu(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Zu(t){return t.__v_skip||!Object.isExtensible(t)?0:Qu(Eu(t))}function Yr(t){return fn(t)?t:Ri(t,!1,$u,Ju,cc)}function fc(t){return Ri(t,!1,ju,Gu,lc)}function dc(t){return Ri(t,!0,Hu,Yu,uc)}function Ri(t,e,n,r,s){if(!oe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=Zu(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function sn(t){return fn(t)?sn(t.__v_raw):!!(t&&t.__v_isReactive)}function fn(t){return!!(t&&t.__v_isReadonly)}function Pr(t){return!!(t&&t.__v_isShallow)}function hc(t){return sn(t)||fn(t)}function J(t){const e=t&&t.__v_raw;return e?J(e):t}function pc(t){return Or(t,"__v_skip",!0),t}const $n=t=>oe(t)?Yr(t):t,Si=t=>oe(t)?dc(t):t;function mc(t){St&&He&&(t=J(t),sc(t.dep||(t.dep=Ei())))}function gc(t,e){t=J(t);const n=t.dep;n&&Hs(n)}function we(t){return!!(t&&t.__v_isRef===!0)}function Me(t){return _c(t,!1)}function ef(t){return _c(t,!0)}function _c(t,e){return we(t)?t:new tf(t,e)}class tf{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:J(e),this._value=n?e:$n(e)}get value(){return mc(this),this._value}set value(e){const n=this.__v_isShallow||Pr(e)||fn(e);e=n?e:J(e),zt(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:$n(e),gc(this))}}function me(t){return we(t)?t.value:t}const nf={get:(t,e,n)=>me(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return we(s)&&!we(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function yc(t){return sn(t)?t:new Proxy(t,nf)}class rf{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new wi(e,()=>{this._dirty||(this._dirty=!0,gc(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=J(this);return mc(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function sf(t,e,n=!1){let r,s;const i=j(t);return i?(r=t,s=je):(r=t.get,s=t.set),new rf(r,s,i||!s,n)}function At(t,e,n,r){let s;try{s=r?t(...r):t()}catch(i){Qn(i,e,n)}return s}function Ve(t,e,n,r){if(j(t)){const i=At(t,e,n,r);return i&&Ya(i)&&i.catch(o=>{Qn(o,e,n)}),i}const s=[];for(let i=0;i<t.length;i++)s.push(Ve(t[i],e,n,r));return s}function Qn(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=n;for(;i;){const l=i.ec;if(l){for(let f=0;f<l.length;f++)if(l[f](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){At(c,null,10,[t,o,a]);return}}of(t,n,s,r)}function of(t,e,n,r=!0){console.error(t)}let Hn=!1,js=!1;const Ee=[];let Xe=0;const on=[];let it=null,Ft=0;const bc=Promise.resolve();let Ai=null;function vc(t){const e=Ai||bc;return t?e.then(this?t.bind(this):t):e}function af(t){let e=Xe+1,n=Ee.length;for(;e<n;){const r=e+n>>>1,s=Ee[r],i=jn(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function Ci(t){(!Ee.length||!Ee.includes(t,Hn&&t.allowRecurse?Xe+1:Xe))&&(t.id==null?Ee.push(t):Ee.splice(af(t.id),0,t),Ec())}function Ec(){!Hn&&!js&&(js=!0,Ai=bc.then(Ic))}function cf(t){const e=Ee.indexOf(t);e>Xe&&Ee.splice(e,1)}function Vs(t){$(t)?on.push(...t):(!it||!it.includes(t,t.allowRecurse?Ft+1:Ft))&&on.push(t),Ec()}function wo(t,e,n=Hn?Xe+1:0){for(;n<Ee.length;n++){const r=Ee[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;Ee.splice(n,1),n--,r()}}}function wc(t){if(on.length){const e=[...new Set(on)];if(on.length=0,it){it.push(...e);return}for(it=e,it.sort((n,r)=>jn(n)-jn(r)),Ft=0;Ft<it.length;Ft++)it[Ft]();it=null,Ft=0}}const jn=t=>t.id==null?1/0:t.id,lf=(t,e)=>{const n=jn(t)-jn(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Ic(t){js=!1,Hn=!0,Ee.sort(lf);const e=je;try{for(Xe=0;Xe<Ee.length;Xe++){const n=Ee[Xe];n&&n.active!==!1&&At(n,null,14)}}finally{Xe=0,Ee.length=0,wc(),Hn=!1,Ai=null,(Ee.length||on.length)&&Ic()}}function uf(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||ie;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:u,trim:p}=r[f]||ie;p&&(s=n.map(g=>de(g)?g.trim():g)),u&&(s=n.map(Ms))}let a,c=r[a=ps(e)]||r[a=ps(tt(e))];!c&&i&&(c=r[a=ps(En(e))]),c&&Ve(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Ve(l,t,6,s)}}function Tc(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!j(t)){const c=l=>{const f=Tc(l,e,!0);f&&(a=!0,ye(o,f))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(oe(t)&&r.set(t,null),null):($(i)?i.forEach(c=>o[c]=null):ye(o,i),oe(t)&&r.set(t,o),o)}function Xr(t,e){return!t||!zr(e)?!1:(e=e.slice(2).replace(/Once$/,""),K(t,e[0].toLowerCase()+e.slice(1))||K(t,En(e))||K(t,e))}let xe=null,Qr=null;function kr(t){const e=xe;return xe=t,Qr=t&&t.type.__scopeId||null,e}function Oi(t){Qr=t}function Pi(){Qr=null}function jt(t,e=xe,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Do(-1);const i=kr(e);let o;try{o=t(...s)}finally{kr(i),r._d&&Do(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function gs(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:f,renderCache:u,data:p,setupState:g,ctx:_,inheritAttrs:v}=t;let k,O;const N=kr(t);try{if(n.shapeFlag&4){const R=s||r,B=R;k=$e(f.call(B,R,u,i,g,p,_)),O=c}else{const R=e;k=$e(R.length>1?R(i,{attrs:c,slots:a,emit:l}):R(i,null)),O=e.props?c:df(c)}}catch(R){Mn.length=0,Qn(R,t,1),k=le(ut)}let F=k;if(O&&v!==!1){const R=Object.keys(O),{shapeFlag:B}=F;R.length&&B&7&&(o&&R.some(gi)&&(O=hf(O,o)),F=hn(F,O))}return n.dirs&&(F=hn(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),k=F,kr(N),k}function ff(t){let e;for(let n=0;n<t.length;n++){const r=t[n];if(Lr(r)){if(r.type!==ut||r.children==="v-if"){if(e)return;e=r}}else return}return e}const df=t=>{let e;for(const n in t)(n==="class"||n==="style"||zr(n))&&((e||(e={}))[n]=t[n]);return e},hf=(t,e)=>{const n={};for(const r in t)(!gi(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function pf(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Io(r,o,l):!!o;if(c&8){const f=e.dynamicProps;for(let u=0;u<f.length;u++){const p=f[u];if(o[p]!==r[p]&&!Xr(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Io(r,o,l):!0:!!o;return!1}function Io(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Xr(n,i))return!0}return!1}function ki({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Rc="components";function Ni(t,e){return gf(Rc,t,!0,e)||t}const mf=Symbol.for("v-ndc");function gf(t,e,n=!0,r=!1){const s=xe||_e;if(s){const i=s.type;if(t===Rc){const a=hd(i,!1);if(a&&(a===e||a===tt(e)||a===Jr(tt(e))))return i}const o=To(s[t]||i[t],e)||To(s.appContext[t],e);return!o&&r?i:o}}function To(t,e){return t&&(t[e]||t[tt(e)]||t[Jr(tt(e))])}const _f=t=>t.__isSuspense,yf={name:"Suspense",__isSuspense:!0,process(t,e,n,r,s,i,o,a,c,l){t==null?vf(e,n,r,s,i,o,a,c,l):Ef(t,e,n,r,s,o,a,c,l)},hydrate:wf,create:xi,normalize:If},bf=yf;function Vn(t,e){const n=t.props&&t.props[e];j(n)&&n()}function vf(t,e,n,r,s,i,o,a,c){const{p:l,o:{createElement:f}}=c,u=f("div"),p=t.suspense=xi(t,s,r,e,u,n,i,o,a,c);l(null,p.pendingBranch=t.ssContent,u,null,r,p,i,o),p.deps>0?(Vn(t,"onPending"),Vn(t,"onFallback"),l(null,t.ssFallback,e,n,r,null,i,o),an(p,t.ssFallback)):p.resolve(!1,!0)}function Ef(t,e,n,r,s,i,o,a,{p:c,um:l,o:{createElement:f}}){const u=e.suspense=t.suspense;u.vnode=e,e.el=t.el;const p=e.ssContent,g=e.ssFallback,{activeBranch:_,pendingBranch:v,isInFallback:k,isHydrating:O}=u;if(v)u.pendingBranch=p,vt(p,v)?(c(v,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0?u.resolve():k&&(c(_,g,n,r,s,null,i,o,a),an(u,g))):(u.pendingId++,O?(u.isHydrating=!1,u.activeBranch=v):l(v,s,u),u.deps=0,u.effects.length=0,u.hiddenContainer=f("div"),k?(c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0?u.resolve():(c(_,g,n,r,s,null,i,o,a),an(u,g))):_&&vt(p,_)?(c(_,p,n,r,s,u,i,o,a),u.resolve(!0)):(c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0&&u.resolve()));else if(_&&vt(p,_))c(_,p,n,r,s,u,i,o,a),an(u,p);else if(Vn(e,"onPending"),u.pendingBranch=p,u.pendingId++,c(null,p,u.hiddenContainer,null,s,u,i,o,a),u.deps<=0)u.resolve();else{const{timeout:N,pendingId:F}=u;N>0?setTimeout(()=>{u.pendingId===F&&u.fallback(g)},N):N===0&&u.fallback(g)}}function xi(t,e,n,r,s,i,o,a,c,l,f=!1){const{p:u,m:p,um:g,n:_,o:{parentNode:v,remove:k}}=l;let O;const N=Rf(t);N&&e!=null&&e.pendingBranch&&(O=e.pendingId,e.deps++);const F=t.props?Tu(t.props.timeout):void 0,R={vnode:t,parent:e,parentComponent:n,isSVG:o,container:r,hiddenContainer:s,anchor:i,deps:0,pendingId:0,timeout:typeof F=="number"?F:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:f,isUnmounted:!1,effects:[],resolve(B=!1,q=!1){const{vnode:se,activeBranch:ee,pendingBranch:ae,pendingId:ue,effects:ge,parentComponent:Pe,container:be}=R;let qe=!1;if(R.isHydrating)R.isHydrating=!1;else if(!B){qe=ee&&ae.transition&&ae.transition.mode==="out-in",qe&&(ee.transition.afterLeave=()=>{ue===R.pendingId&&(p(ae,be,_(ee),0),Vs(ge))});let{anchor:G}=R;ee&&(G=_(ee),g(ee,Pe,R,!0)),qe||p(ae,be,G,0)}an(R,ae),R.pendingBranch=null,R.isInFallback=!1;let ke=R.parent,ce=!1;for(;ke;){if(ke.pendingBranch){ke.effects.push(...ge),ce=!0;break}ke=ke.parent}!ce&&!qe&&Vs(ge),R.effects=[],N&&e&&e.pendingBranch&&O===e.pendingId&&(e.deps--,e.deps===0&&!q&&e.resolve()),Vn(se,"onResolve")},fallback(B){if(!R.pendingBranch)return;const{vnode:q,activeBranch:se,parentComponent:ee,container:ae,isSVG:ue}=R;Vn(q,"onFallback");const ge=_(se),Pe=()=>{R.isInFallback&&(u(null,B,ae,ge,ee,null,ue,a,c),an(R,B))},be=B.transition&&B.transition.mode==="out-in";be&&(se.transition.afterLeave=Pe),R.isInFallback=!0,g(se,ee,null,!0),be||Pe()},move(B,q,se){R.activeBranch&&p(R.activeBranch,B,q,se),R.container=B},next(){return R.activeBranch&&_(R.activeBranch)},registerDep(B,q){const se=!!R.pendingBranch;se&&R.deps++;const ee=B.vnode.el;B.asyncDep.catch(ae=>{Qn(ae,B,0)}).then(ae=>{if(B.isUnmounted||R.isUnmounted||R.pendingId!==B.suspenseId)return;B.asyncResolved=!0;const{vnode:ue}=B;Ys(B,ae,!1),ee&&(ue.el=ee);const ge=!ee&&B.subTree.el;q(B,ue,v(ee||B.subTree.el),ee?null:_(B.subTree),R,o,c),ge&&k(ge),ki(B,ue.el),se&&--R.deps===0&&R.resolve()})},unmount(B,q){R.isUnmounted=!0,R.activeBranch&&g(R.activeBranch,n,B,q),R.pendingBranch&&g(R.pendingBranch,n,B,q)}};return R}function wf(t,e,n,r,s,i,o,a,c){const l=e.suspense=xi(e,r,n,t.parentNode,document.createElement("div"),null,s,i,o,a,!0),f=c(t,l.pendingBranch=e.ssContent,n,l,i,o);return l.deps===0&&l.resolve(!1,!0),f}function If(t){const{shapeFlag:e,children:n}=t,r=e&32;t.ssContent=Ro(r?n.default:n),t.ssFallback=r?Ro(n.fallback):le(ut)}function Ro(t){let e;if(j(t)){const n=dn&&t._c;n&&(t._d=!1,pe()),t=t(),n&&(t._d=!0,e=De,Bc())}return $(t)&&(t=ff(t)),t=$e(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Tf(t,e){e&&e.pendingBranch?$(t)?e.effects.push(...t):e.effects.push(t):Vs(t)}function an(t,e){t.activeBranch=e;const{vnode:n,parentComponent:r}=t,s=n.el=e.el;r&&r.subTree===n&&(r.vnode.el=s,ki(r,s))}function Rf(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const hr={};function _r(t,e,n){return Sc(t,e,n)}function Sc(t,e,{immediate:n,deep:r,flush:s,onTrack:i,onTrigger:o}=ie){var a;const c=xu()===((a=_e)==null?void 0:a.scope)?_e:null;let l,f=!1,u=!1;if(we(t)?(l=()=>t.value,f=Pr(t)):sn(t)?(l=()=>t,r=!0):$(t)?(u=!0,f=t.some(R=>sn(R)||Pr(R)),l=()=>t.map(R=>{if(we(R))return R.value;if(sn(R))return $t(R);if(j(R))return At(R,c,2)})):j(t)?e?l=()=>At(t,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),Ve(t,c,3,[g])}:l=je,e&&r){const R=l;l=()=>$t(R())}let p,g=R=>{p=N.onStop=()=>{At(R,c,4),p=N.onStop=void 0}},_;if(Wn)if(g=je,e?n&&Ve(e,c,3,[l(),u?[]:void 0,g]):l(),s==="sync"){const R=gd();_=R.__watcherHandles||(R.__watcherHandles=[])}else return je;let v=u?new Array(t.length).fill(hr):hr;const k=()=>{if(N.active)if(e){const R=N.run();(r||f||(u?R.some((B,q)=>zt(B,v[q])):zt(R,v)))&&(p&&p(),Ve(e,c,3,[R,v===hr?void 0:u&&v[0]===hr?[]:v,g]),v=R)}else N.run()};k.allowRecurse=!!e;let O;s==="sync"?O=k:s==="post"?O=()=>Se(k,c&&c.suspense):(k.pre=!0,c&&(k.id=c.uid),O=()=>Ci(k));const N=new wi(l,O);e?n?k():v=N.run():s==="post"?Se(N.run.bind(N),c&&c.suspense):N.run();const F=()=>{N.stop(),c&&c.scope&&_i(c.scope.effects,N)};return _&&_.push(F),F}function Sf(t,e,n){const r=this.proxy,s=de(t)?t.includes(".")?Ac(r,t):()=>r[t]:t.bind(r,r);let i;j(e)?i=e:(i=e.handler,n=e);const o=_e;pn(this);const a=Sc(s,i.bind(r),n);return o?pn(o):Vt(),a}function Ac(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function $t(t,e){if(!oe(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),we(t))$t(t.value,e);else if($(t))for(let n=0;n<t.length;n++)$t(t[n],e);else if(Ga(t)||rn(t))t.forEach(n=>{$t(n,e)});else if(Qa(t))for(const n in t)$t(t[n],e);return t}function Ws(t,e){const n=xe;if(n===null)return t;const r=ns(n)||n.proxy,s=t.dirs||(t.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,l=ie]=e[i];o&&(j(o)&&(o={mounted:o,updated:o}),o.deep&&$t(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:l}))}return t}function Lt(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(wn(),Ve(c,n,8,[t.el,a,t,e]),In())}}/*! #__NO_SIDE_EFFECTS__ */function Cc(t,e){return j(t)?(()=>ye({name:t.name},e,{setup:t}))():t}const yr=t=>!!t.type.__asyncLoader,Oc=t=>t.type.__isKeepAlive;function Af(t,e){Pc(t,"a",e)}function Cf(t,e){Pc(t,"da",e)}function Pc(t,e,n=_e){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Zr(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Oc(s.parent.vnode)&&Of(r,e,n,s),s=s.parent}}function Of(t,e,n,r){const s=Zr(e,t,r,!0);Li(()=>{_i(r[e],s)},n)}function Zr(t,e,n=_e,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;wn(),pn(n);const a=Ve(e,n,t,o);return Vt(),In(),a});return r?s.unshift(i):s.push(i),i}}const dt=t=>(e,n=_e)=>(!Wn||t==="sp")&&Zr(t,(...r)=>e(...r),n),Pf=dt("bm"),Di=dt("m"),kf=dt("bu"),Nf=dt("u"),xf=dt("bum"),Li=dt("um"),Df=dt("sp"),Lf=dt("rtg"),Mf=dt("rtc");function Uf(t,e=_e){Zr("ec",t,e)}function Ff(t,e,n,r){let s;const i=n&&n[r];if($(t)||de(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(oe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const zs=t=>t?Vc(t)?ns(t)||t.proxy:zs(t.parent):null,Ln=ye(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>zs(t.parent),$root:t=>zs(t.root),$emit:t=>t.emit,$options:t=>Mi(t),$forceUpdate:t=>t.f||(t.f=()=>Ci(t.update)),$nextTick:t=>t.n||(t.n=vc.bind(t.proxy)),$watch:t=>Sf.bind(t)}),_s=(t,e)=>t!==ie&&!t.__isScriptSetup&&K(t,e),Bf={get({_:t},e){const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const g=o[e];if(g!==void 0)switch(g){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(_s(r,e))return o[e]=1,r[e];if(s!==ie&&K(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&K(l,e))return o[e]=3,i[e];if(n!==ie&&K(n,e))return o[e]=4,n[e];Ks&&(o[e]=0)}}const f=Ln[e];let u,p;if(f)return e==="$attrs"&&Ce(t,"get",e),f(t);if((u=a.__cssModules)&&(u=u[e]))return u;if(n!==ie&&K(n,e))return o[e]=4,n[e];if(p=c.config.globalProperties,K(p,e))return p[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return _s(s,e)?(s[e]=n,!0):r!==ie&&K(r,e)?(r[e]=n,!0):K(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==ie&&K(t,o)||_s(e,o)||(a=i[0])&&K(a,o)||K(r,o)||K(Ln,o)||K(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:K(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function So(t){return $(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ks=!0;function $f(t){const e=Mi(t),n=t.proxy,r=t.ctx;Ks=!1,e.beforeCreate&&Ao(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:f,beforeMount:u,mounted:p,beforeUpdate:g,updated:_,activated:v,deactivated:k,beforeDestroy:O,beforeUnmount:N,destroyed:F,unmounted:R,render:B,renderTracked:q,renderTriggered:se,errorCaptured:ee,serverPrefetch:ae,expose:ue,inheritAttrs:ge,components:Pe,directives:be,filters:qe}=e;if(l&&Hf(l,r,null),o)for(const G in o){const Y=o[G];j(Y)&&(r[G]=Y.bind(n))}if(s){const G=s.call(n,n);oe(G)&&(t.data=Yr(G))}if(Ks=!0,i)for(const G in i){const Y=i[G],rt=j(Y)?Y.bind(n,n):j(Y.get)?Y.get.bind(n,n):je,ht=!j(Y)&&j(Y.set)?Y.set.bind(n):je,Je=Ne({get:rt,set:ht});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>Je.value,set:Re=>Je.value=Re})}if(a)for(const G in a)kc(a[G],r,n,G);if(c){const G=j(c)?c.call(n):c;Reflect.ownKeys(G).forEach(Y=>{br(Y,G[Y])})}f&&Ao(f,t,"c");function ce(G,Y){$(Y)?Y.forEach(rt=>G(rt.bind(n))):Y&&G(Y.bind(n))}if(ce(Pf,u),ce(Di,p),ce(kf,g),ce(Nf,_),ce(Af,v),ce(Cf,k),ce(Uf,ee),ce(Mf,q),ce(Lf,se),ce(xf,N),ce(Li,R),ce(Df,ae),$(ue))if(ue.length){const G=t.exposed||(t.exposed={});ue.forEach(Y=>{Object.defineProperty(G,Y,{get:()=>n[Y],set:rt=>n[Y]=rt})})}else t.exposed||(t.exposed={});B&&t.render===je&&(t.render=B),ge!=null&&(t.inheritAttrs=ge),Pe&&(t.components=Pe),be&&(t.directives=be)}function Hf(t,e,n=je){$(t)&&(t=qs(t));for(const r in t){const s=t[r];let i;oe(s)?"default"in s?i=We(s.from||r,s.default,!0):i=We(s.from||r):i=We(s),we(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Ao(t,e,n){Ve($(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function kc(t,e,n,r){const s=r.includes(".")?Ac(n,r):()=>n[r];if(de(t)){const i=e[t];j(i)&&_r(s,i)}else if(j(t))_r(s,t.bind(n));else if(oe(t))if($(t))t.forEach(i=>kc(i,e,n,r));else{const i=j(t.handler)?t.handler.bind(n):e[t.handler];j(i)&&_r(s,i,t)}}function Mi(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Nr(c,l,o,!0)),Nr(c,e,o)),oe(e)&&i.set(e,c),c}function Nr(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Nr(t,i,n,!0),s&&s.forEach(o=>Nr(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=jf[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const jf={data:Co,props:Oo,emits:Oo,methods:Nn,computed:Nn,beforeCreate:Te,created:Te,beforeMount:Te,mounted:Te,beforeUpdate:Te,updated:Te,beforeDestroy:Te,beforeUnmount:Te,destroyed:Te,unmounted:Te,activated:Te,deactivated:Te,errorCaptured:Te,serverPrefetch:Te,components:Nn,directives:Nn,watch:Wf,provide:Co,inject:Vf};function Co(t,e){return e?t?function(){return ye(j(t)?t.call(this,this):t,j(e)?e.call(this,this):e)}:e:t}function Vf(t,e){return Nn(qs(t),qs(e))}function qs(t){if($(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Te(t,e){return t?[...new Set([].concat(t,e))]:e}function Nn(t,e){return t?ye(Object.create(null),t,e):e}function Oo(t,e){return t?$(t)&&$(e)?[...new Set([...t,...e])]:ye(Object.create(null),So(t),So(e??{})):e}function Wf(t,e){if(!t)return e;if(!e)return t;const n=ye(Object.create(null),t);for(const r in e)n[r]=Te(t[r],e[r]);return n}function Nc(){return{app:null,config:{isNativeTag:bu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let zf=0;function Kf(t,e){return function(r,s=null){j(r)||(r=ye({},r)),s!=null&&!oe(s)&&(s=null);const i=Nc(),o=new WeakSet;let a=!1;const c=i.app={_uid:zf++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:_d,get config(){return i.config},set config(l){},use(l,...f){return o.has(l)||(l&&j(l.install)?(o.add(l),l.install(c,...f)):j(l)&&(o.add(l),l(c,...f))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,f){return f?(i.components[l]=f,c):i.components[l]},directive(l,f){return f?(i.directives[l]=f,c):i.directives[l]},mount(l,f,u){if(!a){const p=le(r,s);return p.appContext=i,f&&e?e(p,l):t(p,l,u),a=!0,c._container=l,l.__vue_app__=c,ns(p.component)||p.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,f){return i.provides[l]=f,c},runWithContext(l){xr=c;try{return l()}finally{xr=null}}};return c}}let xr=null;function br(t,e){if(_e){let n=_e.provides;const r=_e.parent&&_e.parent.provides;r===n&&(n=_e.provides=Object.create(r)),n[t]=e}}function We(t,e,n=!1){const r=_e||xe;if(r||xr){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:xr._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&j(e)?e.call(r&&r.proxy):e}}function qf(t,e,n,r=!1){const s={},i={};Or(i,ts,1),t.propsDefaults=Object.create(null),xc(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:fc(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function Jf(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=J(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let u=0;u<f.length;u++){let p=f[u];if(Xr(t.emitsOptions,p))continue;const g=e[p];if(c)if(K(i,p))g!==i[p]&&(i[p]=g,l=!0);else{const _=tt(p);s[_]=Js(c,a,_,g,t,!1)}else g!==i[p]&&(i[p]=g,l=!0)}}}else{xc(t,e,s,i)&&(l=!0);let f;for(const u in a)(!e||!K(e,u)&&((f=En(u))===u||!K(e,f)))&&(c?n&&(n[u]!==void 0||n[f]!==void 0)&&(s[u]=Js(c,a,u,void 0,t,!0)):delete s[u]);if(i!==a)for(const u in i)(!e||!K(e,u))&&(delete i[u],l=!0)}l&&ct(t,"set","$attrs")}function xc(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(mr(c))continue;const l=e[c];let f;s&&K(s,f=tt(c))?!i||!i.includes(f)?n[f]=l:(a||(a={}))[f]=l:Xr(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=J(n),l=a||ie;for(let f=0;f<i.length;f++){const u=i[f];n[u]=Js(s,c,u,l[u],t,!K(l,u))}}return o}function Js(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=K(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&j(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(pn(s),r=l[n]=c.call(null,e),Vt())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===En(n))&&(r=!0))}return r}function Dc(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!j(t)){const f=u=>{c=!0;const[p,g]=Dc(u,e,!0);ye(o,p),g&&a.push(...g)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!i&&!c)return oe(t)&&r.set(t,nn),nn;if($(i))for(let f=0;f<i.length;f++){const u=tt(i[f]);Po(u)&&(o[u]=ie)}else if(i)for(const f in i){const u=tt(f);if(Po(u)){const p=i[f],g=o[u]=$(p)||j(p)?{type:p}:ye({},p);if(g){const _=xo(Boolean,g.type),v=xo(String,g.type);g[0]=_>-1,g[1]=v<0||_<v,(_>-1||K(g,"default"))&&a.push(u)}}}const l=[o,a];return oe(t)&&r.set(t,l),l}function Po(t){return t[0]!=="$"}function ko(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function No(t,e){return ko(t)===ko(e)}function xo(t,e){return $(e)?e.findIndex(n=>No(n,t)):j(e)&&No(e,t)?0:-1}const Lc=t=>t[0]==="_"||t==="$stable",Ui=t=>$(t)?t.map($e):[$e(t)],Gf=(t,e,n)=>{if(e._n)return e;const r=jt((...s)=>Ui(e(...s)),n);return r._c=!1,r},Mc=(t,e,n)=>{const r=t._ctx;for(const s in t){if(Lc(s))continue;const i=t[s];if(j(i))e[s]=Gf(s,i,r);else if(i!=null){const o=Ui(i);e[s]=()=>o}}},Uc=(t,e)=>{const n=Ui(e);t.slots.default=()=>n},Yf=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=J(e),Or(e,"_",n)):Mc(e,t.slots={})}else t.slots={},e&&Uc(t,e);Or(t.slots,ts,1)},Xf=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=ie;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ye(s,e),!n&&a===1&&delete s._):(i=!e.$stable,Mc(e,s)),o=e}else e&&(Uc(t,e),o={default:1});if(i)for(const a in s)!Lc(a)&&o[a]==null&&delete s[a]};function Gs(t,e,n,r,s=!1){if($(t)){t.forEach((p,g)=>Gs(p,e&&($(e)?e[g]:e),n,r,s));return}if(yr(r)&&!s)return;const i=r.shapeFlag&4?ns(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,f=a.refs===ie?a.refs={}:a.refs,u=a.setupState;if(l!=null&&l!==c&&(de(l)?(f[l]=null,K(u,l)&&(u[l]=null)):we(l)&&(l.value=null)),j(c))At(c,a,12,[o,f]);else{const p=de(c),g=we(c);if(p||g){const _=()=>{if(t.f){const v=p?K(u,c)?u[c]:f[c]:c.value;s?$(v)&&_i(v,i):$(v)?v.includes(i)||v.push(i):p?(f[c]=[i],K(u,c)&&(u[c]=f[c])):(c.value=[i],t.k&&(f[t.k]=c.value))}else p?(f[c]=o,K(u,c)&&(u[c]=o)):g&&(c.value=o,t.k&&(f[t.k]=o))};o?(_.id=-1,Se(_,n)):_()}}}const Se=Tf;function Qf(t){return Zf(t)}function Zf(t,e){const n=Us();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:f,parentNode:u,nextSibling:p,setScopeId:g=je,insertStaticContent:_}=t,v=(d,h,m,y=null,w=null,I=null,P=!1,S=null,A=!!h.dynamicChildren)=>{if(d===h)return;d&&!vt(d,h)&&(y=E(d),Re(d,w,I,!0),d=null),h.patchFlag===-2&&(A=!1,h.dynamicChildren=null);const{type:T,ref:M,shapeFlag:D}=h;switch(T){case es:k(d,h,m,y);break;case ut:O(d,h,m,y);break;case ys:d==null&&N(h,m,y,P);break;case Be:Pe(d,h,m,y,w,I,P,S,A);break;default:D&1?B(d,h,m,y,w,I,P,S,A):D&6?be(d,h,m,y,w,I,P,S,A):(D&64||D&128)&&T.process(d,h,m,y,w,I,P,S,A,C)}M!=null&&w&&Gs(M,d&&d.ref,I,h||d,!h)},k=(d,h,m,y)=>{if(d==null)r(h.el=a(h.children),m,y);else{const w=h.el=d.el;h.children!==d.children&&l(w,h.children)}},O=(d,h,m,y)=>{d==null?r(h.el=c(h.children||""),m,y):h.el=d.el},N=(d,h,m,y)=>{[d.el,d.anchor]=_(d.children,h,m,y,d.el,d.anchor)},F=({el:d,anchor:h},m,y)=>{let w;for(;d&&d!==h;)w=p(d),r(d,m,y),d=w;r(h,m,y)},R=({el:d,anchor:h})=>{let m;for(;d&&d!==h;)m=p(d),s(d),d=m;s(h)},B=(d,h,m,y,w,I,P,S,A)=>{P=P||h.type==="svg",d==null?q(h,m,y,w,I,P,S,A):ae(d,h,w,I,P,S,A)},q=(d,h,m,y,w,I,P,S)=>{let A,T;const{type:M,props:D,shapeFlag:U,transition:V,dirs:W}=d;if(A=d.el=o(d.type,I,D&&D.is,D),U&8?f(A,d.children):U&16&&ee(d.children,A,null,y,w,I&&M!=="foreignObject",P,S),W&&Lt(d,null,y,"created"),se(A,d,d.scopeId,P,y),D){for(const te in D)te!=="value"&&!mr(te)&&i(A,te,null,D[te],I,d.children,y,w,ve);"value"in D&&i(A,"value",null,D.value),(T=D.onVnodeBeforeMount)&&Ye(T,y,d)}W&&Lt(d,null,y,"beforeMount");const re=ed(w,V);re&&V.beforeEnter(A),r(A,h,m),((T=D&&D.onVnodeMounted)||re||W)&&Se(()=>{T&&Ye(T,y,d),re&&V.enter(A),W&&Lt(d,null,y,"mounted")},w)},se=(d,h,m,y,w)=>{if(m&&g(d,m),y)for(let I=0;I<y.length;I++)g(d,y[I]);if(w){let I=w.subTree;if(h===I){const P=w.vnode;se(d,P,P.scopeId,P.slotScopeIds,w.parent)}}},ee=(d,h,m,y,w,I,P,S,A=0)=>{for(let T=A;T<d.length;T++){const M=d[T]=S?yt(d[T]):$e(d[T]);v(null,M,h,m,y,w,I,P,S)}},ae=(d,h,m,y,w,I,P)=>{const S=h.el=d.el;let{patchFlag:A,dynamicChildren:T,dirs:M}=h;A|=d.patchFlag&16;const D=d.props||ie,U=h.props||ie;let V;m&&Mt(m,!1),(V=U.onVnodeBeforeUpdate)&&Ye(V,m,h,d),M&&Lt(h,d,m,"beforeUpdate"),m&&Mt(m,!0);const W=w&&h.type!=="foreignObject";if(T?ue(d.dynamicChildren,T,S,m,y,W,I):P||Y(d,h,S,null,m,y,W,I,!1),A>0){if(A&16)ge(S,h,D,U,m,y,w);else if(A&2&&D.class!==U.class&&i(S,"class",null,U.class,w),A&4&&i(S,"style",D.style,U.style,w),A&8){const re=h.dynamicProps;for(let te=0;te<re.length;te++){const fe=re[te],Ue=D[fe],Xt=U[fe];(Xt!==Ue||fe==="value")&&i(S,fe,Ue,Xt,w,d.children,m,y,ve)}}A&1&&d.children!==h.children&&f(S,h.children)}else!P&&T==null&&ge(S,h,D,U,m,y,w);((V=U.onVnodeUpdated)||M)&&Se(()=>{V&&Ye(V,m,h,d),M&&Lt(h,d,m,"updated")},y)},ue=(d,h,m,y,w,I,P)=>{for(let S=0;S<h.length;S++){const A=d[S],T=h[S],M=A.el&&(A.type===Be||!vt(A,T)||A.shapeFlag&70)?u(A.el):m;v(A,T,M,null,y,w,I,P,!0)}},ge=(d,h,m,y,w,I,P)=>{if(m!==y){if(m!==ie)for(const S in m)!mr(S)&&!(S in y)&&i(d,S,m[S],null,P,h.children,w,I,ve);for(const S in y){if(mr(S))continue;const A=y[S],T=m[S];A!==T&&S!=="value"&&i(d,S,T,A,P,h.children,w,I,ve)}"value"in y&&i(d,"value",m.value,y.value)}},Pe=(d,h,m,y,w,I,P,S,A)=>{const T=h.el=d?d.el:a(""),M=h.anchor=d?d.anchor:a("");let{patchFlag:D,dynamicChildren:U,slotScopeIds:V}=h;V&&(S=S?S.concat(V):V),d==null?(r(T,m,y),r(M,m,y),ee(h.children,m,M,w,I,P,S,A)):D>0&&D&64&&U&&d.dynamicChildren?(ue(d.dynamicChildren,U,m,w,I,P,S),(h.key!=null||w&&h===w.subTree)&&Fc(d,h,!0)):Y(d,h,m,M,w,I,P,S,A)},be=(d,h,m,y,w,I,P,S,A)=>{h.slotScopeIds=S,d==null?h.shapeFlag&512?w.ctx.activate(h,m,y,P,A):qe(h,m,y,w,I,P,A):ke(d,h,A)},qe=(d,h,m,y,w,I,P)=>{const S=d.component=cd(d,y,w);if(Oc(d)&&(S.ctx.renderer=C),ld(S),S.asyncDep){if(w&&w.registerDep(S,ce),!d.el){const A=S.subTree=le(ut);O(null,A,h,m)}return}ce(S,d,h,m,w,I,P)},ke=(d,h,m)=>{const y=h.component=d.component;if(pf(d,h,m))if(y.asyncDep&&!y.asyncResolved){G(y,h,m);return}else y.next=h,cf(y.update),y.update();else h.el=d.el,y.vnode=h},ce=(d,h,m,y,w,I,P)=>{const S=()=>{if(d.isMounted){let{next:M,bu:D,u:U,parent:V,vnode:W}=d,re=M,te;Mt(d,!1),M?(M.el=W.el,G(d,M,P)):M=W,D&&gr(D),(te=M.props&&M.props.onVnodeBeforeUpdate)&&Ye(te,V,M,W),Mt(d,!0);const fe=gs(d),Ue=d.subTree;d.subTree=fe,v(Ue,fe,u(Ue.el),E(Ue),d,w,I),M.el=fe.el,re===null&&ki(d,fe.el),U&&Se(U,w),(te=M.props&&M.props.onVnodeUpdated)&&Se(()=>Ye(te,V,M,W),w)}else{let M;const{el:D,props:U}=h,{bm:V,m:W,parent:re}=d,te=yr(h);if(Mt(d,!1),V&&gr(V),!te&&(M=U&&U.onVnodeBeforeMount)&&Ye(M,re,h),Mt(d,!0),D&&X){const fe=()=>{d.subTree=gs(d),X(D,d.subTree,d,w,null)};te?h.type.__asyncLoader().then(()=>!d.isUnmounted&&fe()):fe()}else{const fe=d.subTree=gs(d);v(null,fe,m,y,d,w,I),h.el=fe.el}if(W&&Se(W,w),!te&&(M=U&&U.onVnodeMounted)){const fe=h;Se(()=>Ye(M,re,fe),w)}(h.shapeFlag&256||re&&yr(re.vnode)&&re.vnode.shapeFlag&256)&&d.a&&Se(d.a,w),d.isMounted=!0,h=m=y=null}},A=d.effect=new wi(S,()=>Ci(T),d.scope),T=d.update=()=>A.run();T.id=d.uid,Mt(d,!0),T()},G=(d,h,m)=>{h.component=d;const y=d.vnode.props;d.vnode=h,d.next=null,Jf(d,h.props,y,m),Xf(d,h.children,m),wn(),wo(d),In()},Y=(d,h,m,y,w,I,P,S,A=!1)=>{const T=d&&d.children,M=d?d.shapeFlag:0,D=h.children,{patchFlag:U,shapeFlag:V}=h;if(U>0){if(U&128){ht(T,D,m,y,w,I,P,S,A);return}else if(U&256){rt(T,D,m,y,w,I,P,S,A);return}}V&8?(M&16&&ve(T,w,I),D!==T&&f(m,D)):M&16?V&16?ht(T,D,m,y,w,I,P,S,A):ve(T,w,I,!0):(M&8&&f(m,""),V&16&&ee(D,m,y,w,I,P,S,A))},rt=(d,h,m,y,w,I,P,S,A)=>{d=d||nn,h=h||nn;const T=d.length,M=h.length,D=Math.min(T,M);let U;for(U=0;U<D;U++){const V=h[U]=A?yt(h[U]):$e(h[U]);v(d[U],V,m,null,w,I,P,S,A)}T>M?ve(d,w,I,!0,!1,D):ee(h,m,y,w,I,P,S,A,D)},ht=(d,h,m,y,w,I,P,S,A)=>{let T=0;const M=h.length;let D=d.length-1,U=M-1;for(;T<=D&&T<=U;){const V=d[T],W=h[T]=A?yt(h[T]):$e(h[T]);if(vt(V,W))v(V,W,m,null,w,I,P,S,A);else break;T++}for(;T<=D&&T<=U;){const V=d[D],W=h[U]=A?yt(h[U]):$e(h[U]);if(vt(V,W))v(V,W,m,null,w,I,P,S,A);else break;D--,U--}if(T>D){if(T<=U){const V=U+1,W=V<M?h[V].el:y;for(;T<=U;)v(null,h[T]=A?yt(h[T]):$e(h[T]),m,W,w,I,P,S,A),T++}}else if(T>U)for(;T<=D;)Re(d[T],w,I,!0),T++;else{const V=T,W=T,re=new Map;for(T=W;T<=U;T++){const Oe=h[T]=A?yt(h[T]):$e(h[T]);Oe.key!=null&&re.set(Oe.key,T)}let te,fe=0;const Ue=U-W+1;let Xt=!1,uo=0;const An=new Array(Ue);for(T=0;T<Ue;T++)An[T]=0;for(T=V;T<=D;T++){const Oe=d[T];if(fe>=Ue){Re(Oe,w,I,!0);continue}let Ge;if(Oe.key!=null)Ge=re.get(Oe.key);else for(te=W;te<=U;te++)if(An[te-W]===0&&vt(Oe,h[te])){Ge=te;break}Ge===void 0?Re(Oe,w,I,!0):(An[Ge-W]=T+1,Ge>=uo?uo=Ge:Xt=!0,v(Oe,h[Ge],m,null,w,I,P,S,A),fe++)}const fo=Xt?td(An):nn;for(te=fo.length-1,T=Ue-1;T>=0;T--){const Oe=W+T,Ge=h[Oe],ho=Oe+1<M?h[Oe+1].el:y;An[T]===0?v(null,Ge,m,ho,w,I,P,S,A):Xt&&(te<0||T!==fo[te]?Je(Ge,m,ho,2):te--)}}},Je=(d,h,m,y,w=null)=>{const{el:I,type:P,transition:S,children:A,shapeFlag:T}=d;if(T&6){Je(d.component.subTree,h,m,y);return}if(T&128){d.suspense.move(h,m,y);return}if(T&64){P.move(d,h,m,C);return}if(P===Be){r(I,h,m);for(let D=0;D<A.length;D++)Je(A[D],h,m,y);r(d.anchor,h,m);return}if(P===ys){F(d,h,m);return}if(y!==2&&T&1&&S)if(y===0)S.beforeEnter(I),r(I,h,m),Se(()=>S.enter(I),w);else{const{leave:D,delayLeave:U,afterLeave:V}=S,W=()=>r(I,h,m),re=()=>{D(I,()=>{W(),V&&V()})};U?U(I,W,re):re()}else r(I,h,m)},Re=(d,h,m,y=!1,w=!1)=>{const{type:I,props:P,ref:S,children:A,dynamicChildren:T,shapeFlag:M,patchFlag:D,dirs:U}=d;if(S!=null&&Gs(S,null,m,d,!0),M&256){h.ctx.deactivate(d);return}const V=M&1&&U,W=!yr(d);let re;if(W&&(re=P&&P.onVnodeBeforeUnmount)&&Ye(re,h,d),M&6)ar(d.component,m,y);else{if(M&128){d.suspense.unmount(m,y);return}V&&Lt(d,null,h,"beforeUnmount"),M&64?d.type.remove(d,h,m,w,C,y):T&&(I!==Be||D>0&&D&64)?ve(T,h,m,!1,!0):(I===Be&&D&384||!w&&M&16)&&ve(A,h,m),y&&Gt(d)}(W&&(re=P&&P.onVnodeUnmounted)||V)&&Se(()=>{re&&Ye(re,h,d),V&&Lt(d,null,h,"unmounted")},m)},Gt=d=>{const{type:h,el:m,anchor:y,transition:w}=d;if(h===Be){Yt(m,y);return}if(h===ys){R(d);return}const I=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:P,delayLeave:S}=w,A=()=>P(m,I);S?S(d.el,I,A):A()}else I()},Yt=(d,h)=>{let m;for(;d!==h;)m=p(d),s(d),d=m;s(h)},ar=(d,h,m)=>{const{bum:y,scope:w,update:I,subTree:P,um:S}=d;y&&gr(y),w.stop(),I&&(I.active=!1,Re(P,d,h,m)),S&&Se(S,h),Se(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},ve=(d,h,m,y=!1,w=!1,I=0)=>{for(let P=I;P<d.length;P++)Re(d[P],h,m,y,w)},E=d=>d.shapeFlag&6?E(d.component.subTree):d.shapeFlag&128?d.suspense.next():p(d.anchor||d.el),x=(d,h,m)=>{d==null?h._vnode&&Re(h._vnode,null,null,!0):v(h._vnode||null,d,h,null,null,null,m),wo(),wc(),h._vnode=d},C={p:v,um:Re,m:Je,r:Gt,mt:qe,mc:ee,pc:Y,pbc:ue,n:E,o:t};let L,X;return e&&([L,X]=e(C)),{render:x,hydrate:L,createApp:Kf(x,L)}}function Mt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ed(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Fc(t,e,n=!1){const r=t.children,s=e.children;if($(r)&&$(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=yt(s[i]),a.el=o.el),n||Fc(o,a)),a.type===es&&(a.el=o.el)}}function td(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const nd=t=>t.__isTeleport,Be=Symbol.for("v-fgt"),es=Symbol.for("v-txt"),ut=Symbol.for("v-cmt"),ys=Symbol.for("v-stc"),Mn=[];let De=null;function pe(t=!1){Mn.push(De=t?null:[])}function Bc(){Mn.pop(),De=Mn[Mn.length-1]||null}let dn=1;function Do(t){dn+=t}function $c(t){return t.dynamicChildren=dn>0?De||nn:null,Bc(),dn>0&&De&&De.push(t),t}function Ae(t,e,n,r,s,i){return $c(Z(t,e,n,r,s,i,!0))}function Dr(t,e,n,r,s){return $c(le(t,e,n,r,s,!0))}function Lr(t){return t?t.__v_isVNode===!0:!1}function vt(t,e){return t.type===e.type&&t.key===e.key}const ts="__vInternal",Hc=({key:t})=>t??null,vr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?de(t)||we(t)||j(t)?{i:xe,r:t,k:e,f:!!n}:t:null);function Z(t,e=null,n=null,r=0,s=null,i=t===Be?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Hc(e),ref:e&&vr(e),scopeId:Qr,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:xe};return a?(Fi(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=de(n)?8:16),dn>0&&!o&&De&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&De.push(c),c}const le=rd;function rd(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===mf)&&(t=ut),Lr(t)){const a=hn(t,e,!0);return n&&Fi(a,n),dn>0&&!i&&De&&(a.shapeFlag&6?De[De.indexOf(t)]=a:De.push(a)),a.patchFlag|=-2,a}if(pd(t)&&(t=t.__vccOpts),e){e=sd(e);let{class:a,style:c}=e;a&&!de(a)&&(e.class=vi(a)),oe(c)&&(hc(c)&&!$(c)&&(c=ye({},c)),e.style=bi(c))}const o=de(t)?1:_f(t)?128:nd(t)?64:oe(t)?4:j(t)?2:0;return Z(t,e,n,r,s,o,i,!0)}function sd(t){return t?hc(t)||ts in t?ye({},t):t:null}function hn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?id(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&Hc(a),ref:e&&e.ref?n&&s?$(s)?s.concat(vr(e)):[s,vr(e)]:vr(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Be?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&hn(t.ssContent),ssFallback:t.ssFallback&&hn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Er(t=" ",e=0){return le(es,null,t,e)}function jc(t="",e=!1){return e?(pe(),Dr(ut,null,t)):le(ut,null,t)}function $e(t){return t==null||typeof t=="boolean"?le(ut):$(t)?le(Be,null,t.slice()):typeof t=="object"?yt(t):le(es,null,String(t))}function yt(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:hn(t)}function Fi(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if($(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Fi(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(ts in e)?e._ctx=xe:s===3&&xe&&(xe.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else j(e)?(e={default:e,_ctx:xe},n=32):(e=String(e),r&64?(n=16,e=[Er(e)]):n=8);t.children=e,t.shapeFlag|=n}function id(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=vi([e.class,r.class]));else if(s==="style")e.style=bi([e.style,r.style]);else if(zr(s)){const i=e[s],o=r[s];o&&i!==o&&!($(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function Ye(t,e,n,r=null){Ve(t,e,7,[n,r])}const od=Nc();let ad=0;function cd(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||od,i={uid:ad++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new ku(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Dc(r,s),emitsOptions:Tc(r,s),emit:null,emitted:null,propsDefaults:ie,inheritAttrs:r.inheritAttrs,ctx:ie,data:ie,props:ie,attrs:ie,slots:ie,refs:ie,setupState:ie,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=uf.bind(null,i),t.ce&&t.ce(i),i}let _e=null,Bi,Qt,Lo="__VUE_INSTANCE_SETTERS__";(Qt=Us()[Lo])||(Qt=Us()[Lo]=[]),Qt.push(t=>_e=t),Bi=t=>{Qt.length>1?Qt.forEach(e=>e(t)):Qt[0](t)};const pn=t=>{Bi(t),t.scope.on()},Vt=()=>{_e&&_e.scope.off(),Bi(null)};function Vc(t){return t.vnode.shapeFlag&4}let Wn=!1;function ld(t,e=!1){Wn=e;const{props:n,children:r}=t.vnode,s=Vc(t);qf(t,n,s,e),Yf(t,r);const i=s?ud(t,e):void 0;return Wn=!1,i}function ud(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=pc(new Proxy(t.ctx,Bf));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?dd(t):null;pn(t),wn();const i=At(r,t,0,[t.props,s]);if(In(),Vt(),Ya(i)){if(i.then(Vt,Vt),e)return i.then(o=>{Ys(t,o,e)}).catch(o=>{Qn(o,t,0)});t.asyncDep=i}else Ys(t,i,e)}else Wc(t,e)}function Ys(t,e,n){j(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:oe(e)&&(t.setupState=yc(e)),Wc(t,n)}let Mo;function Wc(t,e,n){const r=t.type;if(!t.render){if(!e&&Mo&&!r.render){const s=r.template||Mi(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ye(ye({isCustomElement:i,delimiters:a},o),c);r.render=Mo(s,l)}}t.render=r.render||je}{pn(t),wn();try{$f(t)}finally{In(),Vt()}}}function fd(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return Ce(t,"get","$attrs"),e[n]}}))}function dd(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return fd(t)},slots:t.slots,emit:t.emit,expose:e}}function ns(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(yc(pc(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Ln)return Ln[n](t)},has(e,n){return n in e||n in Ln}}))}function hd(t,e=!0){return j(t)?t.displayName||t.name:t.name||e&&t.__name}function pd(t){return j(t)&&"__vccOpts"in t}const Ne=(t,e)=>sf(t,e,Wn);function zc(t,e,n){const r=arguments.length;return r===2?oe(e)&&!$(e)?Lr(e)?le(t,null,[e]):le(t,e):le(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Lr(n)&&(n=[n]),le(t,e,n))}const md=Symbol.for("v-scx"),gd=()=>We(md),_d="3.3.11",yd="http://www.w3.org/2000/svg",Bt=typeof document<"u"?document:null,Uo=Bt&&Bt.createElement("template"),bd={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?Bt.createElementNS(yd,t):Bt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Bt.createTextNode(t),createComment:t=>Bt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Bt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Uo.innerHTML=r?`<svg>${t}</svg>`:t;const a=Uo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},vd=Symbol("_vtc");function Ed(t,e,n){const r=t[vd];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const $i=Symbol("_vod"),wd={beforeMount(t,{value:e},{transition:n}){t[$i]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):Cn(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:r}){!e!=!n&&(r?e?(r.beforeEnter(t),Cn(t,!0),r.enter(t)):r.leave(t,()=>{Cn(t,!1)}):Cn(t,e))},beforeUnmount(t,{value:e}){Cn(t,e)}};function Cn(t,e){t.style.display=e?t[$i]:"none"}function Id(t,e,n){const r=t.style,s=de(n);if(n&&!s){if(e&&!de(e))for(const i in e)n[i]==null&&Xs(r,i,"");for(const i in n)Xs(r,i,n[i])}else{const i=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),$i in t&&(r.display=i)}}const Fo=/\s*!important$/;function Xs(t,e,n){if($(n))n.forEach(r=>Xs(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Td(t,e);Fo.test(n)?t.setProperty(En(r),n.replace(Fo,""),"important"):t[r]=n}}const Bo=["Webkit","Moz","ms"],bs={};function Td(t,e){const n=bs[e];if(n)return n;let r=tt(e);if(r!=="filter"&&r in t)return bs[e]=r;r=Jr(r);for(let s=0;s<Bo.length;s++){const i=Bo[s]+r;if(i in t)return bs[e]=i}return e}const $o="http://www.w3.org/1999/xlink";function Rd(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS($o,e.slice(6,e.length)):t.setAttributeNS($o,e,n);else{const i=Pu(e);n==null||i&&!Za(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function Sd(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const l=a==="OPTION"?t.getAttribute("value"):t.value,f=n??"";l!==f&&(t.value=f),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=Za(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Zt(t,e,n,r){t.addEventListener(e,n,r)}function Ad(t,e,n,r){t.removeEventListener(e,n,r)}const Ho=Symbol("_vei");function Cd(t,e,n,r,s=null){const i=t[Ho]||(t[Ho]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=Od(e);if(r){const l=i[e]=Nd(r,s);Zt(t,a,l,c)}else o&&(Ad(t,a,o,c),i[e]=void 0)}}const jo=/(?:Once|Passive|Capture)$/;function Od(t){let e;if(jo.test(t)){e={};let r;for(;r=t.match(jo);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):En(t.slice(2)),e]}let vs=0;const Pd=Promise.resolve(),kd=()=>vs||(Pd.then(()=>vs=0),vs=Date.now());function Nd(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ve(xd(r,n.value),e,5,[r])};return n.value=t,n.attached=kd(),n}function xd(t,e){if($(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Vo=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Dd=(t,e,n,r,s=!1,i,o,a,c)=>{e==="class"?Ed(t,r,s):e==="style"?Id(t,n,r):zr(e)?gi(e)||Cd(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ld(t,e,r,s))?Sd(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Rd(t,e,r,s))};function Ld(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&Vo(e)&&j(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Vo(e)&&de(n)?!1:e in t}const Wo=t=>{const e=t.props["onUpdate:modelValue"]||!1;return $(e)?n=>gr(e,n):e};function Md(t){t.target.composing=!0}function zo(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Es=Symbol("_assign"),Ko={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Es]=Wo(s);const i=r||s.props&&s.props.type==="number";Zt(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=Ms(a)),t[Es](a)}),n&&Zt(t,"change",()=>{t.value=t.value.trim()}),e||(Zt(t,"compositionstart",Md),Zt(t,"compositionend",zo),Zt(t,"change",zo))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Es]=Wo(i),t.composing)return;const o=s||t.type==="number"?Ms(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},Ud=["ctrl","shift","alt","meta"],Fd={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Ud.some(n=>t[`${n}Key`]&&!e.includes(n))},Bd=(t,e)=>t._withMods||(t._withMods=(n,...r)=>{for(let s=0;s<e.length;s++){const i=Fd[e[s]];if(i&&i(n,e))return}return t(n,...r)}),$d=ye({patchProp:Dd},bd);let qo;function Hd(){return qo||(qo=Qf($d))}const jd=(...t)=>{const e=Hd().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=Vd(r);if(!s)return;const i=e._component;!j(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function Vd(t){return de(t)?document.querySelector(t):t}/*!
  * vue-router v4.2.5
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const en=typeof window<"u";function Wd(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Q=Object.assign;function ws(t,e){const n={};for(const r in e){const s=e[r];n[r]=ze(s)?s.map(t):t(s)}return n}const Un=()=>{},ze=Array.isArray,zd=/\/$/,Kd=t=>t.replace(zd,"");function Is(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Yd(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function qd(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jo(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function Jd(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&mn(e.matched[r],n.matched[s])&&Kc(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function mn(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Kc(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Gd(t[n],e[n]))return!1;return!0}function Gd(t,e){return ze(t)?Go(t,e):ze(e)?Go(e,t):t===e}function Go(t,e){return ze(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Yd(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o-(o===r.length?1:0)).join("/")}var zn;(function(t){t.pop="pop",t.push="push"})(zn||(zn={}));var Fn;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Fn||(Fn={}));function Xd(t){if(!t)if(en){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),Kd(t)}const Qd=/^[^#]+#/;function Zd(t,e){return t.replace(Qd,"#")+e}function eh(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const rs=()=>({left:window.pageXOffset,top:window.pageYOffset});function th(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=eh(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Yo(t,e){return(history.state?history.state.position-e:-1)+t}const Qs=new Map;function nh(t,e){Qs.set(t,e)}function rh(t){const e=Qs.get(t);return Qs.delete(t),e}let sh=()=>location.protocol+"//"+location.host;function qc(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Jo(c,"")}return Jo(n,t)+r+s}function ih(t,e,n,r){let s=[],i=[],o=null;const a=({state:p})=>{const g=qc(t,location),_=n.value,v=e.value;let k=0;if(p){if(n.value=g,e.value=p,o&&o===_){o=null;return}k=v?p.position-v.position:0}else r(g);s.forEach(O=>{O(n.value,_,{delta:k,type:zn.pop,direction:k?k>0?Fn.forward:Fn.back:Fn.unknown})})};function c(){o=n.value}function l(p){s.push(p);const g=()=>{const _=s.indexOf(p);_>-1&&s.splice(_,1)};return i.push(g),g}function f(){const{history:p}=window;p.state&&p.replaceState(Q({},p.state,{scroll:rs()}),"")}function u(){for(const p of i)p();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",f)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",f,{passive:!0}),{pauseListeners:c,listen:l,destroy:u}}function Xo(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?rs():null}}function oh(t){const{history:e,location:n}=window,r={value:qc(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,f){const u=t.indexOf("#"),p=u>-1?(n.host&&document.querySelector("base")?t:t.slice(u))+c:sh()+t+c;try{e[f?"replaceState":"pushState"](l,"",p),s.value=l}catch(g){console.error(g),n[f?"replace":"assign"](p)}}function o(c,l){const f=Q({},e.state,Xo(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,f,!0),r.value=c}function a(c,l){const f=Q({},s.value,e.state,{forward:c,scroll:rs()});i(f.current,f,!0);const u=Q({},Xo(r.value,c,null),{position:f.position+1},l);i(c,u,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function ah(t){t=Xd(t);const e=oh(t),n=ih(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Q({location:"",base:t,go:r,createHref:Zd.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function ch(t){return typeof t=="string"||t&&typeof t=="object"}function Jc(t){return typeof t=="string"||typeof t=="symbol"}const mt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Gc=Symbol("");var Qo;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Qo||(Qo={}));function gn(t,e){return Q(new Error,{type:t,[Gc]:!0},e)}function st(t,e){return t instanceof Error&&Gc in t&&(e==null||!!(t.type&e))}const Zo="[^/]+?",lh={sensitive:!1,strict:!1,start:!0,end:!0},uh=/[.+*?^${}()[\]/\\]/g;function fh(t,e){const n=Q({},lh,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const f=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let u=0;u<l.length;u++){const p=l[u];let g=40+(n.sensitive?.25:0);if(p.type===0)u||(s+="/"),s+=p.value.replace(uh,"\\$&"),g+=40;else if(p.type===1){const{value:_,repeatable:v,optional:k,regexp:O}=p;i.push({name:_,repeatable:v,optional:k});const N=O||Zo;if(N!==Zo){g+=10;try{new RegExp(`(${N})`)}catch(R){throw new Error(`Invalid custom RegExp for param "${_}" (${N}): `+R.message)}}let F=v?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;u||(F=k&&l.length<2?`(?:/${F})`:"/"+F),k&&(F+="?"),s+=F,g+=20,k&&(g+=-8),v&&(g+=-20),N===".*"&&(g+=-50)}f.push(g)}r.push(f)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const f=l.match(o),u={};if(!f)return null;for(let p=1;p<f.length;p++){const g=f[p]||"",_=i[p-1];u[_.name]=g&&_.repeatable?g.split("/"):g}return u}function c(l){let f="",u=!1;for(const p of t){(!u||!f.endsWith("/"))&&(f+="/"),u=!1;for(const g of p)if(g.type===0)f+=g.value;else if(g.type===1){const{value:_,repeatable:v,optional:k}=g,O=_ in l?l[_]:"";if(ze(O)&&!v)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const N=ze(O)?O.join("/"):O;if(!N)if(k)p.length<2&&(f.endsWith("/")?f=f.slice(0,-1):u=!0);else throw new Error(`Missing required param "${_}"`);f+=N}}return f||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function dh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===40+40?-1:1:t.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function hh(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=dh(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(ea(r))return 1;if(ea(s))return-1}return s.length-r.length}function ea(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const ph={type:0,value:""},mh=/[a-zA-Z0-9_]/;function gh(t){if(!t)return[[]];if(t==="/")return[[ph]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(g){throw new Error(`ERR (${n})/"${l}": ${g}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",f="";function u(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:f,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function p(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&u(),o()):c===":"?(u(),n=1):p();break;case 4:p(),n=r;break;case 1:c==="("?n=2:mh.test(c)?p():(u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?f[f.length-1]=="\\"?f=f.slice(0,-1)+c:n=3:f+=c;break;case 3:u(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,f="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),u(),o(),s}function _h(t,e,n){const r=fh(gh(t.path),n),s=Q(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function yh(t,e){const n=[],r=new Map;e=ra({strict:!1,end:!0,sensitive:!1},e);function s(f){return r.get(f)}function i(f,u,p){const g=!p,_=bh(f);_.aliasOf=p&&p.record;const v=ra(e,f),k=[_];if("alias"in f){const F=typeof f.alias=="string"?[f.alias]:f.alias;for(const R of F)k.push(Q({},_,{components:p?p.record.components:_.components,path:R,aliasOf:p?p.record:_}))}let O,N;for(const F of k){const{path:R}=F;if(u&&R[0]!=="/"){const B=u.record.path,q=B[B.length-1]==="/"?"":"/";F.path=u.record.path+(R&&q+R)}if(O=_h(F,u,v),p?p.alias.push(O):(N=N||O,N!==O&&N.alias.push(O),g&&f.name&&!na(O)&&o(f.name)),_.children){const B=_.children;for(let q=0;q<B.length;q++)i(B[q],O,p&&p.children[q])}p=p||O,(O.record.components&&Object.keys(O.record.components).length||O.record.name||O.record.redirect)&&c(O)}return N?()=>{o(N)}:Un}function o(f){if(Jc(f)){const u=r.get(f);u&&(r.delete(f),n.splice(n.indexOf(u),1),u.children.forEach(o),u.alias.forEach(o))}else{const u=n.indexOf(f);u>-1&&(n.splice(u,1),f.record.name&&r.delete(f.record.name),f.children.forEach(o),f.alias.forEach(o))}}function a(){return n}function c(f){let u=0;for(;u<n.length&&hh(f,n[u])>=0&&(f.record.path!==n[u].record.path||!Yc(f,n[u]));)u++;n.splice(u,0,f),f.record.name&&!na(f)&&r.set(f.record.name,f)}function l(f,u){let p,g={},_,v;if("name"in f&&f.name){if(p=r.get(f.name),!p)throw gn(1,{location:f});v=p.record.name,g=Q(ta(u.params,p.keys.filter(N=>!N.optional).map(N=>N.name)),f.params&&ta(f.params,p.keys.map(N=>N.name))),_=p.stringify(g)}else if("path"in f)_=f.path,p=n.find(N=>N.re.test(_)),p&&(g=p.parse(_),v=p.record.name);else{if(p=u.name?r.get(u.name):n.find(N=>N.re.test(u.path)),!p)throw gn(1,{location:f,currentLocation:u});v=p.record.name,g=Q({},u.params,f.params),_=p.stringify(g)}const k=[];let O=p;for(;O;)k.unshift(O.record),O=O.parent;return{name:v,path:_,params:g,matched:k,meta:Eh(k)}}return t.forEach(f=>i(f)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function ta(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function bh(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:vh(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function vh(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function na(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Eh(t){return t.reduce((e,n)=>Q(e,n.meta),{})}function ra(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function Yc(t,e){return e.children.some(n=>n===t||Yc(t,n))}const Xc=/#/g,wh=/&/g,Ih=/\//g,Th=/=/g,Rh=/\?/g,Qc=/\+/g,Sh=/%5B/g,Ah=/%5D/g,Zc=/%5E/g,Ch=/%60/g,el=/%7B/g,Oh=/%7C/g,tl=/%7D/g,Ph=/%20/g;function Hi(t){return encodeURI(""+t).replace(Oh,"|").replace(Sh,"[").replace(Ah,"]")}function kh(t){return Hi(t).replace(el,"{").replace(tl,"}").replace(Zc,"^")}function Zs(t){return Hi(t).replace(Qc,"%2B").replace(Ph,"+").replace(Xc,"%23").replace(wh,"%26").replace(Ch,"`").replace(el,"{").replace(tl,"}").replace(Zc,"^")}function Nh(t){return Zs(t).replace(Th,"%3D")}function xh(t){return Hi(t).replace(Xc,"%23").replace(Rh,"%3F")}function Dh(t){return t==null?"":xh(t).replace(Ih,"%2F")}function Mr(t){try{return decodeURIComponent(""+t)}catch{}return""+t}function Lh(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(Qc," "),o=i.indexOf("="),a=Mr(o<0?i:i.slice(0,o)),c=o<0?null:Mr(i.slice(o+1));if(a in e){let l=e[a];ze(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function sa(t){let e="";for(let n in t){const r=t[n];if(n=Nh(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}(ze(r)?r.map(i=>i&&Zs(i)):[r&&Zs(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Mh(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=ze(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Uh=Symbol(""),ia=Symbol(""),ss=Symbol(""),ji=Symbol(""),ei=Symbol("");function On(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function bt(t,e,n,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=u=>{u===!1?a(gn(4,{from:n,to:e})):u instanceof Error?a(u):ch(u)?a(gn(2,{from:e,to:u})):(i&&r.enterCallbacks[s]===i&&typeof u=="function"&&i.push(u),o())},l=t.call(r&&r.instances[s],e,n,c);let f=Promise.resolve(l);t.length<3&&(f=f.then(c)),f.catch(u=>a(u))})}function Ts(t,e,n,r){const s=[];for(const i of t)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(Fh(a)){const l=(a.__vccOpts||a)[e];l&&s.push(bt(l,n,r,i,o))}else{let c=a();s.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const f=Wd(l)?l.default:l;i.components[o]=f;const p=(f.__vccOpts||f)[e];return p&&bt(p,n,r,i,o)()}))}}return s}function Fh(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function oa(t){const e=We(ss),n=We(ji),r=Ne(()=>e.resolve(me(t.to))),s=Ne(()=>{const{matched:c}=r.value,{length:l}=c,f=c[l-1],u=n.matched;if(!f||!u.length)return-1;const p=u.findIndex(mn.bind(null,f));if(p>-1)return p;const g=aa(c[l-2]);return l>1&&aa(f)===g&&u[u.length-1].path!==g?u.findIndex(mn.bind(null,c[l-2])):p}),i=Ne(()=>s.value>-1&&jh(n.params,r.value.params)),o=Ne(()=>s.value>-1&&s.value===n.matched.length-1&&Kc(n.params,r.value.params));function a(c={}){return Hh(c)?e[me(t.replace)?"replace":"push"](me(t.to)).catch(Un):Promise.resolve()}return{route:r,href:Ne(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Bh=Cc({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:oa,setup(t,{slots:e}){const n=Yr(oa(t)),{options:r}=We(ss),s=Ne(()=>({[ca(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[ca(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:zc("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),$h=Bh;function Hh(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function jh(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!ze(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function aa(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const ca=(t,e,n)=>t??e??n,Vh=Cc({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=We(ei),s=Ne(()=>t.route||r.value),i=We(ia,0),o=Ne(()=>{let l=me(i);const{matched:f}=s.value;let u;for(;(u=f[l])&&!u.components;)l++;return l}),a=Ne(()=>s.value.matched[o.value]);br(ia,Ne(()=>o.value+1)),br(Uh,a),br(ei,s);const c=Me();return _r(()=>[c.value,a.value,t.name],([l,f,u],[p,g,_])=>{f&&(f.instances[u]=l,g&&g!==f&&l&&l===p&&(f.leaveGuards.size||(f.leaveGuards=g.leaveGuards),f.updateGuards.size||(f.updateGuards=g.updateGuards))),l&&f&&(!g||!mn(f,g)||!p)&&(f.enterCallbacks[u]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,f=t.name,u=a.value,p=u&&u.components[f];if(!p)return la(n.default,{Component:p,route:l});const g=u.props[f],_=g?g===!0?l.params:typeof g=="function"?g(l):g:null,k=zc(p,Q({},_,e,{onVnodeUnmounted:O=>{O.component.isUnmounted&&(u.instances[f]=null)},ref:c}));return la(n.default,{Component:k,route:l})||k}}});function la(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const Wh=Vh;function zh(t){const e=yh(t.routes,t),n=t.parseQuery||Lh,r=t.stringifyQuery||sa,s=t.history,i=On(),o=On(),a=On(),c=ef(mt);let l=mt;en&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const f=ws.bind(null,E=>""+E),u=ws.bind(null,Dh),p=ws.bind(null,Mr);function g(E,x){let C,L;return Jc(E)?(C=e.getRecordMatcher(E),L=x):L=E,e.addRoute(L,C)}function _(E){const x=e.getRecordMatcher(E);x&&e.removeRoute(x)}function v(){return e.getRoutes().map(E=>E.record)}function k(E){return!!e.getRecordMatcher(E)}function O(E,x){if(x=Q({},x||c.value),typeof E=="string"){const m=Is(n,E,x.path),y=e.resolve({path:m.path},x),w=s.createHref(m.fullPath);return Q(m,y,{params:p(y.params),hash:Mr(m.hash),redirectedFrom:void 0,href:w})}let C;if("path"in E)C=Q({},E,{path:Is(n,E.path,x.path).path});else{const m=Q({},E.params);for(const y in m)m[y]==null&&delete m[y];C=Q({},E,{params:u(m)}),x.params=u(x.params)}const L=e.resolve(C,x),X=E.hash||"";L.params=f(p(L.params));const d=qd(r,Q({},E,{hash:kh(X),path:L.path})),h=s.createHref(d);return Q({fullPath:d,hash:X,query:r===sa?Mh(E.query):E.query||{}},L,{redirectedFrom:void 0,href:h})}function N(E){return typeof E=="string"?Is(n,E,c.value.path):Q({},E)}function F(E,x){if(l!==E)return gn(8,{from:x,to:E})}function R(E){return se(E)}function B(E){return R(Q(N(E),{replace:!0}))}function q(E){const x=E.matched[E.matched.length-1];if(x&&x.redirect){const{redirect:C}=x;let L=typeof C=="function"?C(E):C;return typeof L=="string"&&(L=L.includes("?")||L.includes("#")?L=N(L):{path:L},L.params={}),Q({query:E.query,hash:E.hash,params:"path"in L?{}:E.params},L)}}function se(E,x){const C=l=O(E),L=c.value,X=E.state,d=E.force,h=E.replace===!0,m=q(C);if(m)return se(Q(N(m),{state:typeof m=="object"?Q({},X,m.state):X,force:d,replace:h}),x||C);const y=C;y.redirectedFrom=x;let w;return!d&&Jd(r,L,C)&&(w=gn(16,{to:y,from:L}),Je(L,L,!0,!1)),(w?Promise.resolve(w):ue(y,L)).catch(I=>st(I)?st(I,2)?I:ht(I):Y(I,y,L)).then(I=>{if(I){if(st(I,2))return se(Q({replace:h},N(I.to),{state:typeof I.to=="object"?Q({},X,I.to.state):X,force:d}),x||y)}else I=Pe(y,L,!0,h,X);return ge(y,L,I),I})}function ee(E,x){const C=F(E,x);return C?Promise.reject(C):Promise.resolve()}function ae(E){const x=Yt.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(E):E()}function ue(E,x){let C;const[L,X,d]=Kh(E,x);C=Ts(L.reverse(),"beforeRouteLeave",E,x);for(const m of L)m.leaveGuards.forEach(y=>{C.push(bt(y,E,x))});const h=ee.bind(null,E,x);return C.push(h),ve(C).then(()=>{C=[];for(const m of i.list())C.push(bt(m,E,x));return C.push(h),ve(C)}).then(()=>{C=Ts(X,"beforeRouteUpdate",E,x);for(const m of X)m.updateGuards.forEach(y=>{C.push(bt(y,E,x))});return C.push(h),ve(C)}).then(()=>{C=[];for(const m of d)if(m.beforeEnter)if(ze(m.beforeEnter))for(const y of m.beforeEnter)C.push(bt(y,E,x));else C.push(bt(m.beforeEnter,E,x));return C.push(h),ve(C)}).then(()=>(E.matched.forEach(m=>m.enterCallbacks={}),C=Ts(d,"beforeRouteEnter",E,x),C.push(h),ve(C))).then(()=>{C=[];for(const m of o.list())C.push(bt(m,E,x));return C.push(h),ve(C)}).catch(m=>st(m,8)?m:Promise.reject(m))}function ge(E,x,C){a.list().forEach(L=>ae(()=>L(E,x,C)))}function Pe(E,x,C,L,X){const d=F(E,x);if(d)return d;const h=x===mt,m=en?history.state:{};C&&(L||h?s.replace(E.fullPath,Q({scroll:h&&m&&m.scroll},X)):s.push(E.fullPath,X)),c.value=E,Je(E,x,C,h),ht()}let be;function qe(){be||(be=s.listen((E,x,C)=>{if(!ar.listening)return;const L=O(E),X=q(L);if(X){se(Q(X,{replace:!0}),L).catch(Un);return}l=L;const d=c.value;en&&nh(Yo(d.fullPath,C.delta),rs()),ue(L,d).catch(h=>st(h,12)?h:st(h,2)?(se(h.to,L).then(m=>{st(m,20)&&!C.delta&&C.type===zn.pop&&s.go(-1,!1)}).catch(Un),Promise.reject()):(C.delta&&s.go(-C.delta,!1),Y(h,L,d))).then(h=>{h=h||Pe(L,d,!1),h&&(C.delta&&!st(h,8)?s.go(-C.delta,!1):C.type===zn.pop&&st(h,20)&&s.go(-1,!1)),ge(L,d,h)}).catch(Un)}))}let ke=On(),ce=On(),G;function Y(E,x,C){ht(E);const L=ce.list();return L.length?L.forEach(X=>X(E,x,C)):console.error(E),Promise.reject(E)}function rt(){return G&&c.value!==mt?Promise.resolve():new Promise((E,x)=>{ke.add([E,x])})}function ht(E){return G||(G=!E,qe(),ke.list().forEach(([x,C])=>E?C(E):x()),ke.reset()),E}function Je(E,x,C,L){const{scrollBehavior:X}=t;if(!en||!X)return Promise.resolve();const d=!C&&rh(Yo(E.fullPath,0))||(L||!C)&&history.state&&history.state.scroll||null;return vc().then(()=>X(E,x,d)).then(h=>h&&th(h)).catch(h=>Y(h,E,x))}const Re=E=>s.go(E);let Gt;const Yt=new Set,ar={currentRoute:c,listening:!0,addRoute:g,removeRoute:_,hasRoute:k,getRoutes:v,resolve:O,options:t,push:R,replace:B,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:ce.add,isReady:rt,install(E){const x=this;E.component("RouterLink",$h),E.component("RouterView",Wh),E.config.globalProperties.$router=x,Object.defineProperty(E.config.globalProperties,"$route",{enumerable:!0,get:()=>me(c)}),en&&!Gt&&c.value===mt&&(Gt=!0,R(s.location).catch(X=>{}));const C={};for(const X in mt)Object.defineProperty(C,X,{get:()=>c.value[X],enumerable:!0});E.provide(ss,x),E.provide(ji,fc(C)),E.provide(ei,c);const L=E.unmount;Yt.add(E),E.unmount=function(){Yt.delete(E),Yt.size<1&&(l=mt,be&&be(),be=null,c.value=mt,Gt=!1,G=!1),L()}}};function ve(E){return E.reduce((x,C)=>x.then(()=>ae(C)),Promise.resolve())}return ar}function Kh(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>mn(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>mn(l,c))||s.push(c))}return[n,r,s]}function qh(){return We(ss)}function nl(){return We(ji)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rl=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Jh=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},sl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,f=i>>2,u=(i&3)<<4|a>>4;let p=(a&15)<<2|l>>6,g=l&63;c||(g=64,o||(p=64)),r.push(n[f],n[u],n[p],n[g])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(rl(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Jh(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const u=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||u==null)throw new Gh;const p=i<<2|a>>4;if(r.push(p),l!==64){const g=a<<4&240|l>>2;if(r.push(g),u!==64){const _=l<<6&192|u;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Gh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Yh=function(t){const e=rl(t);return sl.encodeByteArray(e,!0)},il=function(t){return Yh(t).replace(/\./g,"")},ol=function(t){try{return sl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh=()=>Xh().__FIREBASE_DEFAULTS__,Zh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},ep=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ol(t[1]);return e&&JSON.parse(e)},Vi=()=>{try{return Qh()||Zh()||ep()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},tp=t=>{var e,n;return(n=(e=Vi())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},al=()=>{var t;return(t=Vi())===null||t===void 0?void 0:t.config},cl=t=>{var e;return(e=Vi())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function rp(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ie())}function sp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ip(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function op(){const t=Ie();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function ap(){try{return typeof indexedDB=="object"}catch{return!1}}function cp(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lp="FirebaseError";class kt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=lp,Object.setPrototypeOf(this,kt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zn.prototype.create)}}class Zn{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?up(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new kt(s,a,r)}}function up(t,e){return t.replace(fp,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const fp=/\{\$([^}]+)}/g;function dp(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ur(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(ua(i)&&ua(o)){if(!Ur(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function ua(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function xn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function Dn(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function hp(t,e){const n=new pp(t,e);return n.subscribe.bind(n)}class pp{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");mp(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Rs),s.error===void 0&&(s.error=Rs),s.complete===void 0&&(s.complete=Rs);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function mp(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Rs(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(t){return t&&t._delegate?t._delegate:t}class _n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ut="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gp{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new np;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yp(e))try{this.getOrInitializeService({instanceIdentifier:Ut})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Ut){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ut){return this.instances.has(e)}getOptions(e=Ut){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:_p(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ut){return this.component?this.component.multipleInstances?e:Ut:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _p(t){return t===Ut?void 0:t}function yp(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gp(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ne;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ne||(ne={}));const vp={debug:ne.DEBUG,verbose:ne.VERBOSE,info:ne.INFO,warn:ne.WARN,error:ne.ERROR,silent:ne.SILENT},Ep=ne.INFO,wp={[ne.DEBUG]:"log",[ne.VERBOSE]:"log",[ne.INFO]:"info",[ne.WARN]:"warn",[ne.ERROR]:"error"},Ip=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=wp[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ll{constructor(e){this.name=e,this._logLevel=Ep,this._logHandler=Ip,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ne))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ne.DEBUG,...e),this._logHandler(this,ne.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ne.VERBOSE,...e),this._logHandler(this,ne.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ne.INFO,...e),this._logHandler(this,ne.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ne.WARN,...e),this._logHandler(this,ne.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ne.ERROR,...e),this._logHandler(this,ne.ERROR,...e)}}const Tp=(t,e)=>e.some(n=>t instanceof n);let fa,da;function Rp(){return fa||(fa=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Sp(){return da||(da=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const ul=new WeakMap,ti=new WeakMap,fl=new WeakMap,Ss=new WeakMap,Wi=new WeakMap;function Ap(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Ct(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&ul.set(n,t)}).catch(()=>{}),Wi.set(e,t),e}function Cp(t){if(ti.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});ti.set(t,e)}let ni={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ti.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fl.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ct(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Op(t){ni=t(ni)}function Pp(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(As(this),e,...n);return fl.set(r,e.sort?e.sort():[e]),Ct(r)}:Sp().includes(t)?function(...e){return t.apply(As(this),e),Ct(ul.get(this))}:function(...e){return Ct(t.apply(As(this),e))}}function kp(t){return typeof t=="function"?Pp(t):(t instanceof IDBTransaction&&Cp(t),Tp(t,Rp())?new Proxy(t,ni):t)}function Ct(t){if(t instanceof IDBRequest)return Ap(t);if(Ss.has(t))return Ss.get(t);const e=kp(t);return e!==t&&(Ss.set(t,e),Wi.set(e,t)),e}const As=t=>Wi.get(t);function Np(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Ct(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Ct(o.result),c.oldVersion,c.newVersion,Ct(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const xp=["get","getKey","getAll","getAllKeys","count"],Dp=["put","add","delete","clear"],Cs=new Map;function ha(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Cs.get(e))return Cs.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=Dp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||xp.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Cs.set(e,i),i}Op(t=>({...t,get:(e,n,r)=>ha(e,n)||t.get(e,n,r),has:(e,n)=>!!ha(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Mp(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ri="@firebase/app",pa="0.9.25";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt=new ll("@firebase/app"),Up="@firebase/app-compat",Fp="@firebase/analytics-compat",Bp="@firebase/analytics",$p="@firebase/app-check-compat",Hp="@firebase/app-check",jp="@firebase/auth",Vp="@firebase/auth-compat",Wp="@firebase/database",zp="@firebase/database-compat",Kp="@firebase/functions",qp="@firebase/functions-compat",Jp="@firebase/installations",Gp="@firebase/installations-compat",Yp="@firebase/messaging",Xp="@firebase/messaging-compat",Qp="@firebase/performance",Zp="@firebase/performance-compat",em="@firebase/remote-config",tm="@firebase/remote-config-compat",nm="@firebase/storage",rm="@firebase/storage-compat",sm="@firebase/firestore",im="@firebase/firestore-compat",om="firebase",am="10.7.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const si="[DEFAULT]",cm={[ri]:"fire-core",[Up]:"fire-core-compat",[Bp]:"fire-analytics",[Fp]:"fire-analytics-compat",[Hp]:"fire-app-check",[$p]:"fire-app-check-compat",[jp]:"fire-auth",[Vp]:"fire-auth-compat",[Wp]:"fire-rtdb",[zp]:"fire-rtdb-compat",[Kp]:"fire-fn",[qp]:"fire-fn-compat",[Jp]:"fire-iid",[Gp]:"fire-iid-compat",[Yp]:"fire-fcm",[Xp]:"fire-fcm-compat",[Qp]:"fire-perf",[Zp]:"fire-perf-compat",[em]:"fire-rc",[tm]:"fire-rc-compat",[nm]:"fire-gcs",[rm]:"fire-gcs-compat",[sm]:"fire-fst",[im]:"fire-fst-compat","fire-js":"fire-js",[om]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fr=new Map,ii=new Map;function lm(t,e){try{t.container.addComponent(e)}catch(n){Kt.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Kn(t){const e=t.name;if(ii.has(e))return Kt.debug(`There were multiple attempts to register component ${e}.`),!1;ii.set(e,t);for(const n of Fr.values())lm(n,t);return!0}function dl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const um={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ot=new Zn("app","Firebase",um);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ot.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=am;function hl(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:si,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Ot.create("bad-app-name",{appName:String(s)});if(n||(n=al()),!n)throw Ot.create("no-options");const i=Fr.get(s);if(i){if(Ur(n,i.options)&&Ur(r,i.config))return i;throw Ot.create("duplicate-app",{appName:s})}const o=new bp(s);for(const c of ii.values())o.addComponent(c);const a=new fm(n,r,o);return Fr.set(s,a),a}function dm(t=si){const e=Fr.get(t);if(!e&&t===si&&al())return hl();if(!e)throw Ot.create("no-app",{appName:t});return e}function cn(t,e,n){var r;let s=(r=cm[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Kt.warn(a.join(" "));return}Kn(new _n(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hm="firebase-heartbeat-database",pm=1,qn="firebase-heartbeat-store";let Os=null;function pl(){return Os||(Os=Np(hm,pm,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(qn)}}}).catch(t=>{throw Ot.create("idb-open",{originalErrorMessage:t.message})})),Os}async function mm(t){try{return await(await pl()).transaction(qn).objectStore(qn).get(ml(t))}catch(e){if(e instanceof kt)Kt.warn(e.message);else{const n=Ot.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Kt.warn(n.message)}}}async function ma(t,e){try{const r=(await pl()).transaction(qn,"readwrite");await r.objectStore(qn).put(e,ml(t)),await r.done}catch(n){if(n instanceof kt)Kt.warn(n.message);else{const r=Ot.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Kt.warn(r.message)}}}function ml(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gm=1024,_m=30*24*60*60*1e3;class ym{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new vm(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=ga();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=_m}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=ga(),{heartbeatsToSend:r,unsentEntries:s}=bm(this._heartbeatsCache.heartbeats),i=il(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function ga(){return new Date().toISOString().substring(0,10)}function bm(t,e=gm){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),_a(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),_a(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class vm{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return ap()?cp().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await mm(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ma(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return ma(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function _a(t){return il(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(t){Kn(new _n("platform-logger",e=>new Lp(e),"PRIVATE")),Kn(new _n("heartbeat",e=>new ym(e),"PRIVATE")),cn(ri,pa,t),cn(ri,pa,"esm2017"),cn("fire-js","")}Em("");var wm="firebase",Im="10.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cn(wm,Im,"app");const Tm={apiKey:"AIzaSyB-zLrgSaCrqEo2m4MTBEq5bJHbvTn-Uq8",authDomain:"delishaus-90abe.firebaseapp.com",projectId:"delishaus-90abe",storageBucket:"delishaus-90abe.appspot.com",messagingSenderId:"34542089280",appId:"1:34542089280:web:888816259e1772d66f5ba5"},Rm=hl(Tm);function zi(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function gl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Sm=gl,_l=new Zn("auth","Firebase",gl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Br=new ll("@firebase/auth");function Am(t,...e){Br.logLevel<=ne.WARN&&Br.warn(`Auth (${tr}): ${t}`,...e)}function wr(t,...e){Br.logLevel<=ne.ERROR&&Br.error(`Auth (${tr}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(t,...e){throw Ki(t,...e)}function Ze(t,...e){return Ki(t,...e)}function Cm(t,e,n){const r=Object.assign(Object.assign({},Sm()),{[e]:n});return new Zn("auth","Firebase",r).create(e,{appName:t.name})}function Ki(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return _l.create(t,...e)}function H(t,e,...n){if(!t)throw Ki(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wr(e),new Error(e)}function ft(t,e){t||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oi(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Om(){return ya()==="http:"||ya()==="https:"}function ya(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pm(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Om()||sp()||"connection"in navigator)?navigator.onLine:!0}function km(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n){this.shortDelay=e,this.longDelay=n,ft(n>e,"Short delay should be less than long delay!"),this.isMobile=rp()||ip()}get(){return Pm()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qi(t,e){ft(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yl{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nm={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm=new nr(3e4,6e4);function Jt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function xt(t,e,n,r,s={}){return bl(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=er(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),yl.fetch()(vl(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function bl(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Nm),e);try{const s=new Lm(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw pr(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw pr(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw pr(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw pr(t,"user-disabled",o);const f=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw Cm(t,f,l);Ke(t,f)}}catch(s){if(s instanceof kt)throw s;Ke(t,"network-request-failed",{message:String(s)})}}async function is(t,e,n,r,s={}){const i=await xt(t,e,n,r,s);return"mfaPendingCredential"in i&&Ke(t,"multi-factor-auth-required",{_serverResponse:i}),i}function vl(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?qi(t.config,s):`${t.config.apiScheme}://${s}`}function Dm(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Lm{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ze(this.auth,"network-request-failed")),xm.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function pr(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ze(t,e,r);return s.customData._tokenResponse=n,s}function ba(t){return t!==void 0&&t.enterprise!==void 0}class Mm{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Dm(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Um(t,e){return xt(t,"GET","/v2/recaptchaConfig",Jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fm(t,e){return xt(t,"POST","/v1/accounts:delete",e)}async function Bm(t,e){return xt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bn(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $m(t,e=!1){const n=Nt(t),r=await n.getIdToken(e),s=Ji(r);H(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Bn(Ps(s.auth_time)),issuedAtTime:Bn(Ps(s.iat)),expirationTime:Bn(Ps(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ps(t){return Number(t)*1e3}function Ji(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wr("JWT malformed, contained fewer than 3 sections"),null;try{const s=ol(n);return s?JSON.parse(s):(wr("Failed to decode base64 JWT payload"),null)}catch(s){return wr("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Hm(t){const e=Ji(t);return H(e,"internal-error"),H(typeof e.exp<"u","internal-error"),H(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof kt&&jm(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function jm({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Bn(this.lastLoginAt),this.creationTime=Bn(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Jn(t,Bm(n,{idToken:r}));H(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Km(i.providerUserInfo):[],a=zm(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),f=c?l:!1,u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new El(i.createdAt,i.lastLoginAt),isAnonymous:f};Object.assign(t,u)}async function Wm(t){const e=Nt(t);await $r(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zm(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Km(t){return t.map(e=>{var{providerId:n}=e,r=zi(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qm(t,e){const n=await bl(t,{},async()=>{const r=er({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=vl(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",yl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function Jm(t,e){return xt(t,"POST","/v2/accounts:revokeToken",Jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){H(e.idToken,"internal-error"),H(typeof e.idToken<"u","internal-error"),H(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Hm(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return H(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await qm(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new Gn;return r&&(H(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(H(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(H(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Gn,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(t,e){H(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wt{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=zi(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Vm(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new El(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Jn(this,this.stsTokenManager.getToken(this.auth,e));return H(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $m(this,e)}reload(){return Wm(this)}_assign(e){this!==e&&(H(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){H(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await $r(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Jn(this,Fm(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,f;const u=(r=n.displayName)!==null&&r!==void 0?r:void 0,p=(s=n.email)!==null&&s!==void 0?s:void 0,g=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,k=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,O=(l=n.createdAt)!==null&&l!==void 0?l:void 0,N=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:F,emailVerified:R,isAnonymous:B,providerData:q,stsTokenManager:se}=n;H(F&&se,e,"internal-error");const ee=Gn.fromJSON(this.name,se);H(typeof F=="string",e,"internal-error"),gt(u,e.name),gt(p,e.name),H(typeof R=="boolean",e,"internal-error"),H(typeof B=="boolean",e,"internal-error"),gt(g,e.name),gt(_,e.name),gt(v,e.name),gt(k,e.name),gt(O,e.name),gt(N,e.name);const ae=new Wt({uid:F,auth:e,email:p,emailVerified:R,displayName:u,isAnonymous:B,photoURL:_,phoneNumber:g,tenantId:v,stsTokenManager:ee,createdAt:O,lastLoginAt:N});return q&&Array.isArray(q)&&(ae.providerData=q.map(ue=>Object.assign({},ue))),k&&(ae._redirectEventId=k),ae}static async _fromIdTokenResponse(e,n,r=!1){const s=new Gn;s.updateFromServerResponse(n);const i=new Wt({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await $r(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const va=new Map;function at(t){ft(t instanceof Function,"Expected a class definition");let e=va.get(t);return e?(ft(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,va.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}wl.type="NONE";const Ea=wl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t,e,n){return`firebase:${t}:${e}:${n}`}class ln{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ir(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ir("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ln(at(Ea),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||at(Ea);const o=Ir(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const f=await l._get(o);if(f){const u=Wt._fromJSON(e,f);l!==i&&(a=u),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ln(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ln(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wa(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Rl(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Il(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Al(e))return"Blackberry";if(Cl(e))return"Webos";if(Gi(e))return"Safari";if((e.includes("chrome/")||Tl(e))&&!e.includes("edge/"))return"Chrome";if(Sl(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Il(t=Ie()){return/firefox\//i.test(t)}function Gi(t=Ie()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Tl(t=Ie()){return/crios\//i.test(t)}function Rl(t=Ie()){return/iemobile/i.test(t)}function Sl(t=Ie()){return/android/i.test(t)}function Al(t=Ie()){return/blackberry/i.test(t)}function Cl(t=Ie()){return/webos/i.test(t)}function os(t=Ie()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gm(t=Ie()){var e;return os(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ym(){return op()&&document.documentMode===10}function Ol(t=Ie()){return os(t)||Sl(t)||Cl(t)||Al(t)||/windows phone/i.test(t)||Rl(t)}function Xm(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pl(t,e=[]){let n;switch(t){case"Browser":n=wa(Ie());break;case"Worker":n=`${wa(Ie())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${tr}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qm{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zm(t,e={}){return xt(t,"GET","/v2/passwordPolicy",Jt(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eg=6;class tg{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:eg,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ia(this),this.idTokenSubscription=new Ia(this),this.beforeStateQueue=new Qm(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=_l,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=at(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ln.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return H(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await $r(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=km()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Nt(e):null;return n&&H(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&H(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(at(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Zm(this),n=new tg(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Zn("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await Jm(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&at(e)||this._popupRedirectResolver;H(n,this,"argument-error"),this.redirectPersistenceManager=await ln.create(this,[at(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(H(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return H(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Pl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Am(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Tn(t){return Nt(t)}class Ia{constructor(e){this.auth=e,this.observer=null,this.addObserver=hp(n=>this.observer=n)}get next(){return H(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rg(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function kl(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ze("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",rg().appendChild(r)})}function sg(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const ig="https://www.google.com/recaptcha/enterprise.js?render=",og="recaptcha-enterprise",ag="NO_RECAPTCHA";class cg{constructor(e){this.type=og,this.auth=Tn(e)}async verify(e="verify",n=!1){async function r(i){if(!n){if(i.tenantId==null&&i._agentRecaptchaConfig!=null)return i._agentRecaptchaConfig.siteKey;if(i.tenantId!=null&&i._tenantRecaptchaConfigs[i.tenantId]!==void 0)return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(o,a)=>{Um(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const l=new Mm(c);return i.tenantId==null?i._agentRecaptchaConfig=l:i._tenantRecaptchaConfigs[i.tenantId]=l,o(l.siteKey)}}).catch(c=>{a(c)})})}function s(i,o,a){const c=window.grecaptcha;ba(c)?c.enterprise.ready(()=>{c.enterprise.execute(i,{action:e}).then(l=>{o(l)}).catch(()=>{o(ag)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,o)=>{r(this.auth).then(a=>{if(!n&&ba(window.grecaptcha))s(a,i,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}kl(ig+a).then(()=>{s(a,i,o)}).catch(c=>{o(c)})}}).catch(a=>{o(a)})})}}async function Ta(t,e,n,r=!1){const s=new cg(t);let i;try{i=await s.verify(n)}catch{i=await s.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:i}):Object.assign(o,{captchaResponse:i}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function Ra(t,e,n,r){var s;if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const i=await Ta(t,e,n,n==="getOobCode");return r(t,i)}else return r(t,e).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await Ta(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(i)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lg(t,e){const n=dl(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(Ur(i,e??{}))return s;Ke(s,"already-initialized")}return n.initialize({options:e})}function ug(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(at);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function fg(t,e,n){const r=Tn(t);H(r._canInitEmulator,r,"emulator-config-failed"),H(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=Nl(e),{host:o,port:a}=dg(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||hg()}function Nl(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function dg(t){const e=Nl(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Sa(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Sa(o)}}}function Sa(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hg(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}async function pg(t,e){return xt(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mg(t,e){return is(t,"POST","/v1/accounts:signInWithPassword",Jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gg(t,e){return is(t,"POST","/v1/accounts:signInWithEmailLink",Jt(t,e))}async function _g(t,e){return is(t,"POST","/v1/accounts:signInWithEmailLink",Jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yn extends Yi{constructor(e,n,r,s=null){super("password",r),this._email=e,this._password=n,this._tenantId=s}static _fromEmailAndPassword(e,n){return new Yn(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Yn(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ra(e,n,"signInWithPassword",mg);case"emailLink":return gg(e,{email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ra(e,r,"signUpPassword",pg);case"emailLink":return _g(e,{idToken:n,email:this._email,oobCode:this._password});default:Ke(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function un(t,e){return is(t,"POST","/v1/accounts:signInWithIdp",Jt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg="http://localhost";class qt extends Yi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new qt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ke("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=zi(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new qt(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return un(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,un(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,un(e,n)}buildRequest(){const e={requestUri:yg,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=er(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bg(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function vg(t){const e=xn(Dn(t)).link,n=e?xn(Dn(e)).deep_link_id:null,r=xn(Dn(t)).deep_link_id;return(r?xn(Dn(r)).link:null)||r||n||e||t}class Xi{constructor(e){var n,r,s,i,o,a;const c=xn(Dn(e)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,f=(r=c.oobCode)!==null&&r!==void 0?r:null,u=bg((s=c.mode)!==null&&s!==void 0?s:null);H(l&&f&&u,"argument-error"),this.apiKey=l,this.operation=u,this.code=f,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=vg(e);try{return new Xi(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rn{constructor(){this.providerId=Rn.PROVIDER_ID}static credential(e,n){return Yn._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Xi.parseLink(n);return H(r,"argument-error"),Yn._fromEmailAndCode(e,r.code,r.tenantId)}}Rn.PROVIDER_ID="password";Rn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Rn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr extends xl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends rr{constructor(){super("facebook.com")}static credential(e){return qt._fromParams({providerId:Et.PROVIDER_ID,signInMethod:Et.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Et.credentialFromTaggedObject(e)}static credentialFromError(e){return Et.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Et.credential(e.oauthAccessToken)}catch{return null}}}Et.FACEBOOK_SIGN_IN_METHOD="facebook.com";Et.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt extends rr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return qt._fromParams({providerId:wt.PROVIDER_ID,signInMethod:wt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return wt.credentialFromTaggedObject(e)}static credentialFromError(e){return wt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return wt.credential(n,r)}catch{return null}}}wt.GOOGLE_SIGN_IN_METHOD="google.com";wt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends rr{constructor(){super("github.com")}static credential(e){return qt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return It.credential(e.oauthAccessToken)}catch{return null}}}It.GITHUB_SIGN_IN_METHOD="github.com";It.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends rr{constructor(){super("twitter.com")}static credential(e,n){return qt._fromParams({providerId:Tt.PROVIDER_ID,signInMethod:Tt.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Tt.credentialFromTaggedObject(e)}static credentialFromError(e){return Tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Tt.credential(n,r)}catch{return null}}}Tt.TWITTER_SIGN_IN_METHOD="twitter.com";Tt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await Wt._fromIdTokenResponse(e,r,s),o=Aa(r);return new yn({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Aa(r);return new yn({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Aa(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends kt{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Hr.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new Hr(e,n,r,s)}}function Dl(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Hr._fromErrorAndOperation(t,i,e,r):i})}async function Eg(t,e,n=!1){const r=await Jn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return yn._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wg(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const i=await Jn(t,Dl(r,s,e,t),n);H(i.idToken,r,"internal-error");const o=Ji(i.idToken);H(o,r,"internal-error");const{sub:a}=o;return H(t.uid===a,r,"user-mismatch"),yn._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ke(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ll(t,e,n=!1){const r="signIn",s=await Dl(t,r,e),i=await yn._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}async function Ig(t,e){return Ll(Tn(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(t){const e=Tn(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}function Rg(t,e,n){return Ig(Nt(t),Rn.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Tg(t),r})}function Sg(t,e,n,r){return Nt(t).onIdTokenChanged(e,n,r)}function Ag(t,e,n){return Nt(t).beforeAuthStateChanged(e,n)}function Cg(t){return Nt(t).signOut()}const jr="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ml{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(jr,"1"),this.storage.removeItem(jr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(){const t=Ie();return Gi(t)||os(t)}const Pg=1e3,kg=10;class Ul extends Ml{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Og()&&Xm(),this.fallbackToPolling=Ol(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Ym()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,kg):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Pg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ul.type="LOCAL";const Ng=Ul;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl extends Ml{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Fl.type="SESSION";const Bl=Fl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xg(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new as(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await xg(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}as.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=Qi("",20);s.port1.start();const f=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(u){const p=u;if(p.data.eventId===l)switch(p.data.status){case"ack":clearTimeout(f),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(p.data.response);break;default:clearTimeout(f),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function et(){return window}function Lg(t){et().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $l(){return typeof et().WorkerGlobalScope<"u"&&typeof et().importScripts=="function"}async function Mg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Ug(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Fg(){return $l()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hl="firebaseLocalStorageDb",Bg=1,Vr="firebaseLocalStorage",jl="fbase_key";class sr{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function cs(t,e){return t.transaction([Vr],e?"readwrite":"readonly").objectStore(Vr)}function $g(){const t=indexedDB.deleteDatabase(Hl);return new sr(t).toPromise()}function ai(){const t=indexedDB.open(Hl,Bg);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Vr,{keyPath:jl})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Vr)?e(r):(r.close(),await $g(),e(await ai()))})})}async function Ca(t,e,n){const r=cs(t,!0).put({[jl]:e,value:n});return new sr(r).toPromise()}async function Hg(t,e){const n=cs(t,!1).get(e),r=await new sr(n).toPromise();return r===void 0?null:r.value}function Oa(t,e){const n=cs(t,!0).delete(e);return new sr(n).toPromise()}const jg=800,Vg=3;class Vl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ai(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Vg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $l()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=as._getInstance(Fg()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mg(),!this.activeServiceWorker)return;this.sender=new Dg(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Ug()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ai();return await Ca(e,jr,"1"),await Oa(e,jr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ca(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Hg(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Oa(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=cs(s,!1).getAll();return new sr(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jg)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Vl.type="LOCAL";const Wg=Vl;new nr(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zg(t,e){return e?at(e):(H(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Yi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return un(e,this._buildIdpRequest())}_linkToIdToken(e,n){return un(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return un(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Kg(t){return Ll(t.auth,new Zi(t),t.bypassAuthState)}function qg(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),wg(n,new Zi(t),t.bypassAuthState)}async function Jg(t){const{auth:e,user:n}=t;return H(n,e,"internal-error"),Eg(n,new Zi(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Kg;case"linkViaPopup":case"linkViaRedirect":return Jg;case"reauthViaPopup":case"reauthViaRedirect":return qg;default:Ke(this.auth,"internal-error")}}resolve(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){ft(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gg=new nr(2e3,1e4);class tn extends Wl{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,tn.currentPopupAction&&tn.currentPopupAction.cancel(),tn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return H(e,this.auth,"internal-error"),e}async onExecution(){ft(this.filter.length===1,"Popup operations only handle one event");const e=Qi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ze(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ze(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ze(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Gg.get())};e()}}tn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yg="pendingRedirect",Tr=new Map;class Xg extends Wl{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Tr.get(this.auth._key());if(!e){try{const r=await Qg(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Tr.set(this.auth._key(),e)}return this.bypassAuthState||Tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Qg(t,e){const n=t_(e),r=e_(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function Zg(t,e){Tr.set(t._key(),e)}function e_(t){return at(t._redirectPersistence)}function t_(t){return Ir(Yg,t.config.apiKey,t.name)}async function n_(t,e,n=!1){const r=Tn(t),s=zg(r,e),o=await new Xg(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const r_=10*60*1e3;class s_{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!i_(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!zl(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ze(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=r_&&this.cachedEventUids.clear(),this.cachedEventUids.has(Pa(e))}saveEventToCache(e){this.cachedEventUids.add(Pa(e)),this.lastProcessedEventTime=Date.now()}}function Pa(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function zl({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function i_(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zl(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o_(t,e={}){return xt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,c_=/^https?/;async function l_(t){if(t.config.emulator)return;const{authorizedDomains:e}=await o_(t);for(const n of e)try{if(u_(n))return}catch{}Ke(t,"unauthorized-domain")}function u_(t){const e=oi(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!c_.test(n))return!1;if(a_.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f_=new nr(3e4,6e4);function ka(){const t=et().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function d_(t){return new Promise((e,n)=>{var r,s,i;function o(){ka(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ka(),n(Ze(t,"network-request-failed"))},timeout:f_.get()})}if(!((s=(r=et().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=et().gapi)===null||i===void 0)&&i.load)o();else{const a=sg("iframefcb");return et()[a]=()=>{gapi.load?o():n(Ze(t,"network-request-failed"))},kl(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw Rr=null,e})}let Rr=null;function h_(t){return Rr=Rr||d_(t),Rr}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p_=new nr(5e3,15e3),m_="__/auth/iframe",g_="emulator/auth/iframe",__={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},y_=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function b_(t){const e=t.config;H(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?qi(e,g_):`https://${t.config.authDomain}/${m_}`,r={apiKey:e.apiKey,appName:t.name,v:tr},s=y_.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${er(r).slice(1)}`}async function v_(t){const e=await h_(t),n=et().gapi;return H(n,t,"internal-error"),e.open({where:document.body,url:b_(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:__,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ze(t,"network-request-failed"),a=et().setTimeout(()=>{i(o)},p_.get());function c(){et().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E_={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},w_=500,I_=600,T_="_blank",R_="http://localhost";class Na{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function S_(t,e,n,r=w_,s=I_){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},E_),{width:r.toString(),height:s.toString(),top:i,left:o}),l=Ie().toLowerCase();n&&(a=Tl(l)?T_:n),Il(l)&&(e=e||R_,c.scrollbars="yes");const f=Object.entries(c).reduce((p,[g,_])=>`${p}${g}=${_},`,"");if(Gm(l)&&a!=="_self")return A_(e||"",a),new Na(null);const u=window.open(e||"",a,f);H(u,t,"popup-blocked");try{u.focus()}catch{}return new Na(u)}function A_(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C_="__/auth/handler",O_="emulator/auth/handler",P_=encodeURIComponent("fac");async function xa(t,e,n,r,s,i){H(t.config.authDomain,t,"auth-domain-config-required"),H(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:tr,eventId:s};if(e instanceof xl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",dp(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,u]of Object.entries(i||{}))o[f]=u}if(e instanceof rr){const f=e.getScopes().filter(u=>u!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const f of Object.keys(a))a[f]===void 0&&delete a[f];const c=await t._getAppCheckToken(),l=c?`#${P_}=${encodeURIComponent(c)}`:"";return`${k_(t)}?${er(a).slice(1)}${l}`}function k_({config:t}){return t.emulator?qi(t,O_):`https://${t.authDomain}/${C_}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="webStorageSupport";class N_{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Bl,this._completeRedirectFn=n_,this._overrideRedirectResult=Zg}async _openPopup(e,n,r,s){var i;ft((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await xa(e,n,r,oi(),s);return S_(e,o,Qi())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await xa(e,n,r,oi(),s);return Lg(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(ft(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await v_(e),r=new s_(e);return n.register("authEvent",s=>(H(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ks,{type:ks},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[ks];o!==void 0&&n(!!o),Ke(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=l_(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ol()||Gi()||os()}}const x_=N_;var Da="@firebase/auth",La="1.5.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){H(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L_(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function M_(t){Kn(new _n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;H(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Pl(t)},l=new ng(r,s,i,c);return ug(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Kn(new _n("auth-internal",e=>{const n=Tn(e.getProvider("auth").getImmediate());return(r=>new D_(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),cn(Da,La,L_(t)),cn(Da,La,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U_=5*60,F_=cl("authIdTokenMaxAge")||U_;let Ma=null;const B_=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>F_)return;const s=n==null?void 0:n.token;Ma!==s&&(Ma=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function $_(t=dm()){const e=dl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=lg(t,{popupRedirectResolver:x_,persistence:[Wg,Ng,Bl]}),r=cl("authTokenSyncURL");if(r){const i=B_(r);Ag(n,i,()=>i(n.currentUser)),Sg(n,o=>i(o))}const s=tp("auth");return s&&fg(n,`http://${s}`),n}M_("Browser");function H_(t){const e=Me(t.currentUser),n=Ne(()=>!!e.value);return t.onIdTokenChanged(r=>e.value=r),{isAuthenticated:n,user:e}}const ci=$_(Rm),{isAuthenticated:Ua,user:j_}=H_(ci),eo=()=>({isAuthenticated:Ua,user:j_,login:async(n,r)=>(await Rg(ci,n,r),Ua.value),logout:async()=>{await Cg(ci),lo.push({name:"Home"})}});const Dt=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},V_={},Kl=t=>(Oi("data-v-39836280"),t=t(),Pi(),t),W_={class:"wrapper"},z_=Kl(()=>Z("input",{type:"text",placeholder:"Search Recipe",class:"search"},null,-1)),K_=Kl(()=>Z("span",{class:"icon"},[Z("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"h-6 w-6"},[Z("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"})])],-1)),q_=[z_,K_];function J_(t,e){return pe(),Ae("div",W_,q_)}const G_=Dt(V_,[["render",J_],["__scopeId","data-v-39836280"]]);function ql(t,e){return function(){return t.apply(e,arguments)}}const{toString:Y_}=Object.prototype,{getPrototypeOf:to}=Object,ls=(t=>e=>{const n=Y_.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),nt=t=>(t=t.toLowerCase(),e=>ls(e)===t),us=t=>e=>typeof e===t,{isArray:Sn}=Array,Xn=us("undefined");function X_(t){return t!==null&&!Xn(t)&&t.constructor!==null&&!Xn(t.constructor)&&Le(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Jl=nt("ArrayBuffer");function Q_(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Jl(t.buffer),e}const Z_=us("string"),Le=us("function"),Gl=us("number"),fs=t=>t!==null&&typeof t=="object",ey=t=>t===!0||t===!1,Sr=t=>{if(ls(t)!=="object")return!1;const e=to(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},ty=nt("Date"),ny=nt("File"),ry=nt("Blob"),sy=nt("FileList"),iy=t=>fs(t)&&Le(t.pipe),oy=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||Le(t.append)&&((e=ls(t))==="formdata"||e==="object"&&Le(t.toString)&&t.toString()==="[object FormData]"))},ay=nt("URLSearchParams"),cy=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function ir(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,s;if(typeof t!="object"&&(t=[t]),Sn(t))for(r=0,s=t.length;r<s;r++)e.call(null,t[r],r,t);else{const i=n?Object.getOwnPropertyNames(t):Object.keys(t),o=i.length;let a;for(r=0;r<o;r++)a=i[r],e.call(null,t[a],a,t)}}function Yl(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,s;for(;r-- >0;)if(s=n[r],e===s.toLowerCase())return s;return null}const Xl=(()=>typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global)(),Ql=t=>!Xn(t)&&t!==Xl;function li(){const{caseless:t}=Ql(this)&&this||{},e={},n=(r,s)=>{const i=t&&Yl(e,s)||s;Sr(e[i])&&Sr(r)?e[i]=li(e[i],r):Sr(r)?e[i]=li({},r):Sn(r)?e[i]=r.slice():e[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&ir(arguments[r],n);return e}const ly=(t,e,n,{allOwnKeys:r}={})=>(ir(e,(s,i)=>{n&&Le(s)?t[i]=ql(s,n):t[i]=s},{allOwnKeys:r}),t),uy=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),fy=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},dy=(t,e,n,r)=>{let s,i,o;const a={};if(e=e||{},t==null)return e;do{for(s=Object.getOwnPropertyNames(t),i=s.length;i-- >0;)o=s[i],(!r||r(o,t,e))&&!a[o]&&(e[o]=t[o],a[o]=!0);t=n!==!1&&to(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},hy=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},py=t=>{if(!t)return null;if(Sn(t))return t;let e=t.length;if(!Gl(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},my=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&to(Uint8Array)),gy=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let s;for(;(s=r.next())&&!s.done;){const i=s.value;e.call(t,i[0],i[1])}},_y=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},yy=nt("HTMLFormElement"),by=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Fa=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),vy=nt("RegExp"),Zl=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};ir(n,(s,i)=>{let o;(o=e(s,i,t))!==!1&&(r[i]=o||s)}),Object.defineProperties(t,r)},Ey=t=>{Zl(t,(e,n)=>{if(Le(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(Le(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},wy=(t,e)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return Sn(t)?r(t):r(String(t).split(e)),n},Iy=()=>{},Ty=(t,e)=>(t=+t,Number.isFinite(t)?t:e),Ns="abcdefghijklmnopqrstuvwxyz",Ba="0123456789",eu={DIGIT:Ba,ALPHA:Ns,ALPHA_DIGIT:Ns+Ns.toUpperCase()+Ba},Ry=(t=16,e=eu.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function Sy(t){return!!(t&&Le(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const Ay=t=>{const e=new Array(10),n=(r,s)=>{if(fs(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[s]=r;const i=Sn(r)?[]:{};return ir(r,(o,a)=>{const c=n(o,s+1);!Xn(c)&&(i[a]=c)}),e[s]=void 0,i}}return r};return n(t,0)},Cy=nt("AsyncFunction"),Oy=t=>t&&(fs(t)||Le(t))&&Le(t.then)&&Le(t.catch),b={isArray:Sn,isArrayBuffer:Jl,isBuffer:X_,isFormData:oy,isArrayBufferView:Q_,isString:Z_,isNumber:Gl,isBoolean:ey,isObject:fs,isPlainObject:Sr,isUndefined:Xn,isDate:ty,isFile:ny,isBlob:ry,isRegExp:vy,isFunction:Le,isStream:iy,isURLSearchParams:ay,isTypedArray:my,isFileList:sy,forEach:ir,merge:li,extend:ly,trim:cy,stripBOM:uy,inherits:fy,toFlatObject:dy,kindOf:ls,kindOfTest:nt,endsWith:hy,toArray:py,forEachEntry:gy,matchAll:_y,isHTMLForm:yy,hasOwnProperty:Fa,hasOwnProp:Fa,reduceDescriptors:Zl,freezeMethods:Ey,toObjectSet:wy,toCamelCase:by,noop:Iy,toFiniteNumber:Ty,findKey:Yl,global:Xl,isContextDefined:Ql,ALPHABET:eu,generateString:Ry,isSpecCompliantForm:Sy,toJSONObject:Ay,isAsyncFn:Cy,isThenable:Oy};function z(t,e,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}b.inherits(z,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:b.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const tu=z.prototype,nu={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{nu[t]={value:t}});Object.defineProperties(z,nu);Object.defineProperty(tu,"isAxiosError",{value:!0});z.from=(t,e,n,r,s,i)=>{const o=Object.create(tu);return b.toFlatObject(t,o,function(c){return c!==Error.prototype},a=>a!=="isAxiosError"),z.call(o,t.message,e,n,r,s),o.cause=t,o.name=t.name,i&&Object.assign(o,i),o};const Py=null;function ui(t){return b.isPlainObject(t)||b.isArray(t)}function ru(t){return b.endsWith(t,"[]")?t.slice(0,-2):t}function $a(t,e,n){return t?t.concat(e).map(function(s,i){return s=ru(s),!n&&i?"["+s+"]":s}).join(n?".":""):e}function ky(t){return b.isArray(t)&&!t.some(ui)}const Ny=b.toFlatObject(b,{},null,function(e){return/^is[A-Z]/.test(e)});function ds(t,e,n){if(!b.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=b.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(v,k){return!b.isUndefined(k[v])});const r=n.metaTokens,s=n.visitor||f,i=n.dots,o=n.indexes,c=(n.Blob||typeof Blob<"u"&&Blob)&&b.isSpecCompliantForm(e);if(!b.isFunction(s))throw new TypeError("visitor must be a function");function l(_){if(_===null)return"";if(b.isDate(_))return _.toISOString();if(!c&&b.isBlob(_))throw new z("Blob is not supported. Use a Buffer instead.");return b.isArrayBuffer(_)||b.isTypedArray(_)?c&&typeof Blob=="function"?new Blob([_]):Buffer.from(_):_}function f(_,v,k){let O=_;if(_&&!k&&typeof _=="object"){if(b.endsWith(v,"{}"))v=r?v:v.slice(0,-2),_=JSON.stringify(_);else if(b.isArray(_)&&ky(_)||(b.isFileList(_)||b.endsWith(v,"[]"))&&(O=b.toArray(_)))return v=ru(v),O.forEach(function(F,R){!(b.isUndefined(F)||F===null)&&e.append(o===!0?$a([v],R,i):o===null?v:v+"[]",l(F))}),!1}return ui(_)?!0:(e.append($a(k,v,i),l(_)),!1)}const u=[],p=Object.assign(Ny,{defaultVisitor:f,convertValue:l,isVisitable:ui});function g(_,v){if(!b.isUndefined(_)){if(u.indexOf(_)!==-1)throw Error("Circular reference detected in "+v.join("."));u.push(_),b.forEach(_,function(O,N){(!(b.isUndefined(O)||O===null)&&s.call(e,O,b.isString(N)?N.trim():N,v,p))===!0&&g(O,v?v.concat(N):[N])}),u.pop()}}if(!b.isObject(t))throw new TypeError("data must be an object");return g(t),e}function Ha(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function no(t,e){this._pairs=[],t&&ds(t,this,e)}const su=no.prototype;su.append=function(e,n){this._pairs.push([e,n])};su.toString=function(e){const n=e?function(r){return e.call(this,r,Ha)}:Ha;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function xy(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function iu(t,e,n){if(!e)return t;const r=n&&n.encode||xy,s=n&&n.serialize;let i;if(s?i=s(e,n):i=b.isURLSearchParams(e)?e.toString():new no(e,n).toString(r),i){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+i}return t}class Dy{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){b.forEach(this.handlers,function(r){r!==null&&e(r)})}}const ja=Dy,ou={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Ly=typeof URLSearchParams<"u"?URLSearchParams:no,My=typeof FormData<"u"?FormData:null,Uy=typeof Blob<"u"?Blob:null,Fy={isBrowser:!0,classes:{URLSearchParams:Ly,FormData:My,Blob:Uy},protocols:["http","https","file","blob","url","data"]},au=typeof window<"u"&&typeof document<"u",By=(t=>au&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),$y=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),Hy=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:au,hasStandardBrowserEnv:By,hasStandardBrowserWebWorkerEnv:$y},Symbol.toStringTag,{value:"Module"})),Qe={...Hy,...Fy};function jy(t,e){return ds(t,new Qe.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return Qe.isNode&&b.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},e))}function Vy(t){return b.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Wy(t){const e={},n=Object.keys(t);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],e[i]=t[i];return e}function cu(t){function e(n,r,s,i){let o=n[i++];const a=Number.isFinite(+o),c=i>=n.length;return o=!o&&b.isArray(s)?s.length:o,c?(b.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!a):((!s[o]||!b.isObject(s[o]))&&(s[o]=[]),e(n,r,s[o],i)&&b.isArray(s[o])&&(s[o]=Wy(s[o])),!a)}if(b.isFormData(t)&&b.isFunction(t.entries)){const n={};return b.forEachEntry(t,(r,s)=>{e(Vy(r),s,n,0)}),n}return null}function zy(t,e,n){if(b.isString(t))try{return(e||JSON.parse)(t),b.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const ro={transitional:ou,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=b.isObject(e);if(i&&b.isHTMLForm(e)&&(e=new FormData(e)),b.isFormData(e))return s&&s?JSON.stringify(cu(e)):e;if(b.isArrayBuffer(e)||b.isBuffer(e)||b.isStream(e)||b.isFile(e)||b.isBlob(e))return e;if(b.isArrayBufferView(e))return e.buffer;if(b.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let a;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return jy(e,this.formSerializer).toString();if((a=b.isFileList(e))||r.indexOf("multipart/form-data")>-1){const c=this.env&&this.env.FormData;return ds(a?{"files[]":e}:e,c&&new c,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),zy(e)):e}],transformResponse:[function(e){const n=this.transitional||ro.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(e&&b.isString(e)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(e)}catch(a){if(o)throw a.name==="SyntaxError"?z.from(a,z.ERR_BAD_RESPONSE,this,null,this.response):a}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Qe.classes.FormData,Blob:Qe.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};b.forEach(["delete","get","head","post","put","patch"],t=>{ro.headers[t]={}});const so=ro,Ky=b.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),qy=t=>{const e={};let n,r,s;return t&&t.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||e[n]&&Ky[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Va=Symbol("internals");function Pn(t){return t&&String(t).trim().toLowerCase()}function Ar(t){return t===!1||t==null?t:b.isArray(t)?t.map(Ar):String(t)}function Jy(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Gy=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function xs(t,e,n,r,s){if(b.isFunction(r))return r.call(this,e,n);if(s&&(e=n),!!b.isString(e)){if(b.isString(r))return e.indexOf(r)!==-1;if(b.isRegExp(r))return r.test(e)}}function Yy(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function Xy(t,e){const n=b.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(s,i,o){return this[r].call(this,e,s,i,o)},configurable:!0})})}class hs{constructor(e){e&&this.set(e)}set(e,n,r){const s=this;function i(a,c,l){const f=Pn(c);if(!f)throw new Error("header name must be a non-empty string");const u=b.findKey(s,f);(!u||s[u]===void 0||l===!0||l===void 0&&s[u]!==!1)&&(s[u||c]=Ar(a))}const o=(a,c)=>b.forEach(a,(l,f)=>i(l,f,c));return b.isPlainObject(e)||e instanceof this.constructor?o(e,n):b.isString(e)&&(e=e.trim())&&!Gy(e)?o(qy(e),n):e!=null&&i(n,e,r),this}get(e,n){if(e=Pn(e),e){const r=b.findKey(this,e);if(r){const s=this[r];if(!n)return s;if(n===!0)return Jy(s);if(b.isFunction(n))return n.call(this,s,r);if(b.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=Pn(e),e){const r=b.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||xs(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let s=!1;function i(o){if(o=Pn(o),o){const a=b.findKey(r,o);a&&(!n||xs(r,r[a],a,n))&&(delete r[a],s=!0)}}return b.isArray(e)?e.forEach(i):i(e),s}clear(e){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!e||xs(this,this[i],i,e,!0))&&(delete this[i],s=!0)}return s}normalize(e){const n=this,r={};return b.forEach(this,(s,i)=>{const o=b.findKey(r,i);if(o){n[o]=Ar(s),delete n[i];return}const a=e?Yy(i):String(i).trim();a!==i&&delete n[i],n[a]=Ar(s),r[a]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return b.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=e&&b.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(s=>r.set(s)),r}static accessor(e){const r=(this[Va]=this[Va]={accessors:{}}).accessors,s=this.prototype;function i(o){const a=Pn(o);r[a]||(Xy(s,o),r[a]=!0)}return b.isArray(e)?e.forEach(i):i(e),this}}hs.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);b.reduceDescriptors(hs.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});b.freezeMethods(hs);const lt=hs;function Ds(t,e){const n=this||so,r=e||n,s=lt.from(r.headers);let i=r.data;return b.forEach(t,function(a){i=a.call(n,i,s.normalize(),e?e.status:void 0)}),s.normalize(),i}function lu(t){return!!(t&&t.__CANCEL__)}function or(t,e,n){z.call(this,t??"canceled",z.ERR_CANCELED,e,n),this.name="CanceledError"}b.inherits(or,z,{__CANCEL__:!0});function Qy(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new z("Request failed with status code "+n.status,[z.ERR_BAD_REQUEST,z.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const Zy=Qe.hasStandardBrowserEnv?{write(t,e,n,r,s,i){const o=[t+"="+encodeURIComponent(e)];b.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),b.isString(r)&&o.push("path="+r),b.isString(s)&&o.push("domain="+s),i===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function eb(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function tb(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}function uu(t,e){return t&&!eb(e)?tb(t,e):e}const nb=Qe.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const a=b.isString(o)?s(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function rb(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function sb(t,e){t=t||10;const n=new Array(t),r=new Array(t);let s=0,i=0,o;return e=e!==void 0?e:1e3,function(c){const l=Date.now(),f=r[i];o||(o=l),n[s]=c,r[s]=l;let u=i,p=0;for(;u!==s;)p+=n[u++],u=u%t;if(s=(s+1)%t,s===i&&(i=(i+1)%t),l-o<e)return;const g=f&&l-f;return g?Math.round(p*1e3/g):void 0}}function Wa(t,e){let n=0;const r=sb(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,a=i-n,c=r(a),l=i<=o;n=i;const f={loaded:i,total:o,progress:o?i/o:void 0,bytes:a,rate:c||void 0,estimated:c&&o&&l?(o-i)/c:void 0,event:s};f[e?"download":"upload"]=!0,t(f)}}const ib=typeof XMLHttpRequest<"u",ob=ib&&function(t){return new Promise(function(n,r){let s=t.data;const i=lt.from(t.headers).normalize();let{responseType:o,withXSRFToken:a}=t,c;function l(){t.cancelToken&&t.cancelToken.unsubscribe(c),t.signal&&t.signal.removeEventListener("abort",c)}let f;if(b.isFormData(s)){if(Qe.hasStandardBrowserEnv||Qe.hasStandardBrowserWebWorkerEnv)i.setContentType(!1);else if((f=i.getContentType())!==!1){const[v,...k]=f?f.split(";").map(O=>O.trim()).filter(Boolean):[];i.setContentType([v||"multipart/form-data",...k].join("; "))}}let u=new XMLHttpRequest;if(t.auth){const v=t.auth.username||"",k=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";i.set("Authorization","Basic "+btoa(v+":"+k))}const p=uu(t.baseURL,t.url);u.open(t.method.toUpperCase(),iu(p,t.params,t.paramsSerializer),!0),u.timeout=t.timeout;function g(){if(!u)return;const v=lt.from("getAllResponseHeaders"in u&&u.getAllResponseHeaders()),O={data:!o||o==="text"||o==="json"?u.responseText:u.response,status:u.status,statusText:u.statusText,headers:v,config:t,request:u};Qy(function(F){n(F),l()},function(F){r(F),l()},O),u=null}if("onloadend"in u?u.onloadend=g:u.onreadystatechange=function(){!u||u.readyState!==4||u.status===0&&!(u.responseURL&&u.responseURL.indexOf("file:")===0)||setTimeout(g)},u.onabort=function(){u&&(r(new z("Request aborted",z.ECONNABORTED,t,u)),u=null)},u.onerror=function(){r(new z("Network Error",z.ERR_NETWORK,t,u)),u=null},u.ontimeout=function(){let k=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const O=t.transitional||ou;t.timeoutErrorMessage&&(k=t.timeoutErrorMessage),r(new z(k,O.clarifyTimeoutError?z.ETIMEDOUT:z.ECONNABORTED,t,u)),u=null},Qe.hasStandardBrowserEnv&&(a&&b.isFunction(a)&&(a=a(t)),a||a!==!1&&nb(p))){const v=t.xsrfHeaderName&&t.xsrfCookieName&&Zy.read(t.xsrfCookieName);v&&i.set(t.xsrfHeaderName,v)}s===void 0&&i.setContentType(null),"setRequestHeader"in u&&b.forEach(i.toJSON(),function(k,O){u.setRequestHeader(O,k)}),b.isUndefined(t.withCredentials)||(u.withCredentials=!!t.withCredentials),o&&o!=="json"&&(u.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&u.addEventListener("progress",Wa(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&u.upload&&u.upload.addEventListener("progress",Wa(t.onUploadProgress)),(t.cancelToken||t.signal)&&(c=v=>{u&&(r(!v||v.type?new or(null,t,u):v),u.abort(),u=null)},t.cancelToken&&t.cancelToken.subscribe(c),t.signal&&(t.signal.aborted?c():t.signal.addEventListener("abort",c)));const _=rb(p);if(_&&Qe.protocols.indexOf(_)===-1){r(new z("Unsupported protocol "+_+":",z.ERR_BAD_REQUEST,t));return}u.send(s||null)})},fi={http:Py,xhr:ob};b.forEach(fi,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const za=t=>`- ${t}`,ab=t=>b.isFunction(t)||t===null||t===!1,fu={getAdapter:t=>{t=b.isArray(t)?t:[t];const{length:e}=t;let n,r;const s={};for(let i=0;i<e;i++){n=t[i];let o;if(r=n,!ab(n)&&(r=fi[(o=String(n)).toLowerCase()],r===void 0))throw new z(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([a,c])=>`adapter ${a} `+(c===!1?"is not supported by the environment":"is not available in the build"));let o=e?i.length>1?`since :
`+i.map(za).join(`
`):" "+za(i[0]):"as no adapter specified";throw new z("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:fi};function Ls(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new or(null,t)}function Ka(t){return Ls(t),t.headers=lt.from(t.headers),t.data=Ds.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),fu.getAdapter(t.adapter||so.adapter)(t).then(function(r){return Ls(t),r.data=Ds.call(t,t.transformResponse,r),r.headers=lt.from(r.headers),r},function(r){return lu(r)||(Ls(t),r&&r.response&&(r.response.data=Ds.call(t,t.transformResponse,r.response),r.response.headers=lt.from(r.response.headers))),Promise.reject(r)})}const qa=t=>t instanceof lt?t.toJSON():t;function bn(t,e){e=e||{};const n={};function r(l,f,u){return b.isPlainObject(l)&&b.isPlainObject(f)?b.merge.call({caseless:u},l,f):b.isPlainObject(f)?b.merge({},f):b.isArray(f)?f.slice():f}function s(l,f,u){if(b.isUndefined(f)){if(!b.isUndefined(l))return r(void 0,l,u)}else return r(l,f,u)}function i(l,f){if(!b.isUndefined(f))return r(void 0,f)}function o(l,f){if(b.isUndefined(f)){if(!b.isUndefined(l))return r(void 0,l)}else return r(void 0,f)}function a(l,f,u){if(u in e)return r(l,f);if(u in t)return r(void 0,l)}const c={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:a,headers:(l,f)=>s(qa(l),qa(f),!0)};return b.forEach(Object.keys(Object.assign({},t,e)),function(f){const u=c[f]||s,p=u(t[f],e[f],f);b.isUndefined(p)&&u!==a||(n[f]=p)}),n}const du="1.6.2",io={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{io[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Ja={};io.transitional=function(e,n,r){function s(i,o){return"[Axios v"+du+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,a)=>{if(e===!1)throw new z(s(o," has been removed"+(n?" in "+n:"")),z.ERR_DEPRECATED);return n&&!Ja[o]&&(Ja[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(i,o,a):!0}};function cb(t,e,n){if(typeof t!="object")throw new z("options must be an object",z.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let s=r.length;for(;s-- >0;){const i=r[s],o=e[i];if(o){const a=t[i],c=a===void 0||o(a,i,t);if(c!==!0)throw new z("option "+i+" must be "+c,z.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new z("Unknown option "+i,z.ERR_BAD_OPTION)}}const di={assertOptions:cb,validators:io},_t=di.validators;class Wr{constructor(e){this.defaults=e,this.interceptors={request:new ja,response:new ja}}request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=bn(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&di.assertOptions(r,{silentJSONParsing:_t.transitional(_t.boolean),forcedJSONParsing:_t.transitional(_t.boolean),clarifyTimeoutError:_t.transitional(_t.boolean)},!1),s!=null&&(b.isFunction(s)?n.paramsSerializer={serialize:s}:di.assertOptions(s,{encode:_t.function,serialize:_t.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&b.merge(i.common,i[n.method]);i&&b.forEach(["delete","get","head","post","put","patch","common"],_=>{delete i[_]}),n.headers=lt.concat(o,i);const a=[];let c=!0;this.interceptors.request.forEach(function(v){typeof v.runWhen=="function"&&v.runWhen(n)===!1||(c=c&&v.synchronous,a.unshift(v.fulfilled,v.rejected))});const l=[];this.interceptors.response.forEach(function(v){l.push(v.fulfilled,v.rejected)});let f,u=0,p;if(!c){const _=[Ka.bind(this),void 0];for(_.unshift.apply(_,a),_.push.apply(_,l),p=_.length,f=Promise.resolve(n);u<p;)f=f.then(_[u++],_[u++]);return f}p=a.length;let g=n;for(u=0;u<p;){const _=a[u++],v=a[u++];try{g=_(g)}catch(k){v.call(this,k);break}}try{f=Ka.call(this,g)}catch(_){return Promise.reject(_)}for(u=0,p=l.length;u<p;)f=f.then(l[u++],l[u++]);return f}getUri(e){e=bn(this.defaults,e);const n=uu(e.baseURL,e.url);return iu(n,e.params,e.paramsSerializer)}}b.forEach(["delete","get","head","options"],function(e){Wr.prototype[e]=function(n,r){return this.request(bn(r||{},{method:e,url:n,data:(r||{}).data}))}});b.forEach(["post","put","patch"],function(e){function n(r){return function(i,o,a){return this.request(bn(a||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}Wr.prototype[e]=n(),Wr.prototype[e+"Form"]=n(!0)});const Cr=Wr;class oo{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(a=>{r.subscribe(a),i=a}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},e(function(i,o,a){r.reason||(r.reason=new or(i,o,a),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new oo(function(s){e=s}),cancel:e}}}const lb=oo;function ub(t){return function(n){return t.apply(null,n)}}function fb(t){return b.isObject(t)&&t.isAxiosError===!0}const hi={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(hi).forEach(([t,e])=>{hi[e]=t});const db=hi;function hu(t){const e=new Cr(t),n=ql(Cr.prototype.request,e);return b.extend(n,Cr.prototype,e,{allOwnKeys:!0}),b.extend(n,e,null,{allOwnKeys:!0}),n.create=function(s){return hu(bn(t,s))},n}const he=hu(so);he.Axios=Cr;he.CanceledError=or;he.CancelToken=lb;he.isCancel=lu;he.VERSION=du;he.toFormData=ds;he.AxiosError=z;he.Cancel=he.CanceledError;he.all=function(e){return Promise.all(e)};he.spread=ub;he.isAxiosError=fb;he.mergeConfig=bn;he.AxiosHeaders=lt;he.formToJSON=t=>cu(b.isHTMLForm(t)?new FormData(t):t);he.getAdapter=fu.getAdapter;he.HttpStatusCode=db;he.default=he;const hb=he,pu=Me([]),mu=Me(1),pi=Me(!1),gu=Me(1),_u=Me(12),yu=Me("null"),ao=hb.create({baseURL:"https://final-project-qt8r.onrender.com",auth:{username:"admin",password:"admin"}}),pb=async()=>{pi.value=!0;const{data:t,headers:e}=await ao.get("/api/recipes",{params:{page:gu.value,size:_u.value}});pu.value=t,mu.value=Number(e["x-total-pages"])||1,pi.value=!1},mb=async t=>{const{data:e}=await ao.get(`/api/recipes/${t}`);yu.value=e,console.log(e)},gb=async t=>{const{data:e}=await ao.get(`/api/recipes/${t}`);return e},co=()=>({recipes:pu,pages:mu,activePage:gu,loading:pi,pageSize:_u,getRecipes:pb,getRecipe:gb,fetchRecipe:mb,currentRecipe:yu});const _b={class:"card-image"},yb=["src"],bb={class:"card-details"},vb={class:"card-details-recipe font-poppins"},Eb={class:"card-details-type font-poppins"},wb={__name:"MainCardsSingle",props:{recipe:{type:Object,required:!0,default:()=>({createdAt:"2022-01-01",cookTime:"Forever",recipeID:"123",foodType:"Food",name:"Sandwich",ingredients:"ingredients",instructions:"instructions",updatedAt:"2022-01-01"})}},setup(t){const e=()=>{console.log(`${n.recipe.name} selected`)},n=t;return(r,s)=>{const i=Ni("RouterLink");return n.recipe.recipeID?(pe(),Dr(i,{key:0,to:`/api/recipes/${n.recipe.recipeID}`},{default:jt(()=>[Z("div",{class:"card",onClick:e},[Z("div",_b,[Z("img",{src:n.recipe.image,alt:"",srcset:""},null,8,yb)]),Z("div",bb,[Z("p",vb,Rt(n.recipe.name),1),Z("p",Eb,Rt(n.recipe.foodType),1)])])]),_:1},8,["to"])):jc("",!0)}}},Ib=Dt(wb,[["__scopeId","data-v-65792226"]]);const Tb=t=>(Oi("data-v-550cd5b3"),t=t(),Pi(),t),Rb={class:"sub-wrapper"},Sb=Tb(()=>Z("div",null,"Loading...",-1)),Ab={__name:"MainCards",setup(t){const{recipes:e}=co();return(n,r)=>(pe(),Ae("div",Rb,[(pe(),Dr(bf,null,{fallback:jt(()=>[Sb]),default:jt(()=>[(pe(!0),Ae(Be,null,Ff(me(e),s=>(pe(),Dr(Ib,{key:s.recipeID,recipe:s},null,8,["recipe"]))),128))]),_:1}))]))}},Cb=Dt(Ab,[["__scopeId","data-v-550cd5b3"]]);const Ob={key:0},Pb={key:1,class:"wrapper"},kb={__name:"MainPage",setup(t){const{getRecipes:e,loading:n}=co();return Di(async()=>{await e()}),(r,s)=>me(n)?(pe(),Ae("p",Ob,"Loading...")):(pe(),Ae("div",Pb,[le(G_),le(Cb)]))}},Nb=Dt(kb,[["__scopeId","data-v-5818f76f"]]);const xb=t=>(Oi("data-v-984125fe"),t=t(),Pi(),t),Db=xb(()=>Z("button",{type:"submit",class:"bg-orange-700 px-4 py-2"},"Log In",-1)),Lb={__name:"LoginPage",setup(t){const{login:e,logout:n}=eo(),r=qh(),s=nl(),i=Me(""),o=Me(""),a=async()=>{await e(i.value,o.value)?s.query.redirect?r.push(s.query.redirect):r.push({name:"Home"}):n()};return(c,l)=>(pe(),Ae("form",{class:"login-form",onSubmit:Bd(a,["prevent"])},[Ws(Z("input",{"onUpdate:modelValue":l[0]||(l[0]=f=>i.value=f),type:"text",placeholder:"Username"},null,512),[[Ko,i.value]]),Ws(Z("input",{"onUpdate:modelValue":l[1]||(l[1]=f=>o.value=f),type:"password",placeholder:"Password"},null,512),[[Ko,o.value]]),Db],32))}},Mb=Dt(Lb,[["__scopeId","data-v-984125fe"]]),Ub={};function Fb(t,e){return pe(),Ae("h1",null,"Settings Page")}const Bb=Dt(Ub,[["render",Fb]]);const $b={},Hb={class:"not-found"};function jb(t,e){return pe(),Ae("h2",Hb,"404 - Page not found")}const Vb=Dt($b,[["render",jb],["__scopeId","data-v-b26cf3c0"]]),Wb={class:"min-h-screen bg-neutral-300 font-poppins flex items-center justify-center"},zb={key:0,class:"bg-white p-8 rounded-md shadow-lg text-center"},Kb={class:"text-cyan-900 text-5xl font-bold mb-4"},qb={class:"text-orange-600 text-2xl font-mono mb-4 italic"},Jb=Z("h2",{class:"underline text-left text-neutral-500 text-5xl font-bold mb-4"},"Ingredients:",-1),Gb={class:"text-left text-cyan-900 text-3xl font-medium mb-4"},Yb=Z("h2",{class:"underline text-left text-neutral-500 text-5xl font-bold mb-4"},"Instructions:",-1),Xb={class:"text-left text-cyan-900 text-4xl font-medium mb-4"},Qb={__name:"RecipesPage",setup(t){const{fetchRecipe:e,currentRecipe:n}=co();Me("");const r=nl();return Di(async()=>{await e(r.params.id),console.log(r.params.id)}),Li(()=>{n.value=null}),(s,i)=>(pe(),Ae("main",Wb,[me(n)?(pe(),Ae("div",zb,[Z("h1",Kb,Rt(me(n).name),1),Z("p",qb,"cook time: "+Rt(me(n).cookTime),1),Jb,Z("p",Gb,Rt(me(n).ingredients),1),Yb,Z("p",Xb,Rt(me(n).instructions),1)])):jc("",!0)]))}},{isAuthenticated:Zb}=eo(),ev=[{path:"/final2023/",name:"Home",component:Nb},{path:"/login",name:"Login",component:Mb},{path:"/settings",name:"Settings",component:Bb,meta:{requiresAuth:!0}},{path:"/:pathMatch(.*)*",name:"NotFound",component:Vb},{path:"/api/recipes/:id",name:"Recipe",component:Qb}],lo=zh({history:ah(),routes:ev});lo.beforeEach((t,e,n)=>{t.meta.requiresAuth&&!Zb.value?n({name:"Login",query:{redirect:t.fullPath}}):n()});const tv={class:"wrapper"},nv={class:"brand-title"},rv={class:"menu"},sv={class:"px-2 py-4"},iv={key:0},ov={key:1},av={__name:"NavBar",setup(t){const{isAuthenticated:e,logout:n,user:r}=eo(),s=Me("🍲 delisHAUS");return(i,o)=>{var c;const a=Ni("RouterLink");return pe(),Ae("nav",null,[Z("div",tv,[le(a,{to:{name:"Home"},class:"brand"},{default:jt(()=>[Z("span",nv,Rt(s.value),1)]),_:1}),Z("div",rv,[Ws(Z("p",sv,[Er(" Welcome back "),Z("strong",null,[Z("i",null,Rt((c=me(r))==null?void 0:c.email),1)])],512),[[wd,me(e)]]),me(e)?(pe(),Ae("div",iv,[le(a,{to:{name:"Settings"},href:"#",class:"menu-item"},{default:jt(()=>[Er("Settings")]),_:1}),Z("button",{class:"menu-logout",onClick:o[0]||(o[0]=(...l)=>me(n)&&me(n)(...l))},"Logout")])):(pe(),Ae("div",ov,[le(a,{to:{name:"Login"},href:"#",class:"menu-login"},{default:jt(()=>[Er("Login")]),_:1})]))])])])}}},cv=Dt(av,[["__scopeId","data-v-2f5431ff"]]),lv={__name:"App",setup(t){return(e,n)=>{const r=Ni("RouterView");return pe(),Ae(Be,null,[le(cv),le(r)],64)}}};jd(lv).use(lo).mount("#app");
