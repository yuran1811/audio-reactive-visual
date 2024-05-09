var ky=Object.defineProperty;var zy=(n,e,t)=>e in n?ky(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ie=(n,e,t)=>(zy(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Hg={exports:{}},dc={},Vg={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var al=Symbol.for("react.element"),By=Symbol.for("react.portal"),Hy=Symbol.for("react.fragment"),Vy=Symbol.for("react.strict_mode"),Gy=Symbol.for("react.profiler"),Wy=Symbol.for("react.provider"),Xy=Symbol.for("react.context"),Yy=Symbol.for("react.forward_ref"),jy=Symbol.for("react.suspense"),qy=Symbol.for("react.memo"),$y=Symbol.for("react.lazy"),Bp=Symbol.iterator;function Ky(n){return n===null||typeof n!="object"?null:(n=Bp&&n[Bp]||n["@@iterator"],typeof n=="function"?n:null)}var Gg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Wg=Object.assign,Xg={};function Xo(n,e,t){this.props=n,this.context=e,this.refs=Xg,this.updater=t||Gg}Xo.prototype.isReactComponent={};Xo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Xo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function Yg(){}Yg.prototype=Xo.prototype;function mh(n,e,t){this.props=n,this.context=e,this.refs=Xg,this.updater=t||Gg}var _h=mh.prototype=new Yg;_h.constructor=mh;Wg(_h,Xo.prototype);_h.isPureReactComponent=!0;var Hp=Array.isArray,jg=Object.prototype.hasOwnProperty,gh={current:null},qg={key:!0,ref:!0,__self:!0,__source:!0};function $g(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)jg.call(e,i)&&!qg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:al,type:n,key:s,ref:o,props:r,_owner:gh.current}}function Zy(n,e){return{$$typeof:al,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function vh(n){return typeof n=="object"&&n!==null&&n.$$typeof===al}function Qy(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Vp=/\/+/g;function zc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?Qy(""+n.key):e.toString(36)}function cu(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case al:case By:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+zc(o,0):i,Hp(r)?(t="",n!=null&&(t=n.replace(Vp,"$&/")+"/"),cu(r,e,t,"",function(u){return u})):r!=null&&(vh(r)&&(r=Zy(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Vp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Hp(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+zc(s,a);o+=cu(s,e,t,l,r)}else if(l=Ky(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+zc(s,a++),o+=cu(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function xl(n,e,t){if(n==null)return n;var i=[],r=0;return cu(n,i,"","",function(s){return e.call(t,s,r++)}),i}function Jy(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var ln={current:null},fu={transition:null},eS={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:fu,ReactCurrentOwner:gh};function Kg(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:xl,forEach:function(n,e,t){xl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return xl(n,function(){e++}),e},toArray:function(n){return xl(n,function(e){return e})||[]},only:function(n){if(!vh(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ve.Component=Xo;Ve.Fragment=Hy;Ve.Profiler=Gy;Ve.PureComponent=mh;Ve.StrictMode=Vy;Ve.Suspense=jy;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=eS;Ve.act=Kg;Ve.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=Wg({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=gh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)jg.call(e,l)&&!qg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:al,type:n.type,key:r,ref:s,props:i,_owner:o}};Ve.createContext=function(n){return n={$$typeof:Xy,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Wy,_context:n},n.Consumer=n};Ve.createElement=$g;Ve.createFactory=function(n){var e=$g.bind(null,n);return e.type=n,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(n){return{$$typeof:Yy,render:n}};Ve.isValidElement=vh;Ve.lazy=function(n){return{$$typeof:$y,_payload:{_status:-1,_result:n},_init:Jy}};Ve.memo=function(n,e){return{$$typeof:qy,type:n,compare:e===void 0?null:e}};Ve.startTransition=function(n){var e=fu.transition;fu.transition={};try{n()}finally{fu.transition=e}};Ve.unstable_act=Kg;Ve.useCallback=function(n,e){return ln.current.useCallback(n,e)};Ve.useContext=function(n){return ln.current.useContext(n)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(n){return ln.current.useDeferredValue(n)};Ve.useEffect=function(n,e){return ln.current.useEffect(n,e)};Ve.useId=function(){return ln.current.useId()};Ve.useImperativeHandle=function(n,e,t){return ln.current.useImperativeHandle(n,e,t)};Ve.useInsertionEffect=function(n,e){return ln.current.useInsertionEffect(n,e)};Ve.useLayoutEffect=function(n,e){return ln.current.useLayoutEffect(n,e)};Ve.useMemo=function(n,e){return ln.current.useMemo(n,e)};Ve.useReducer=function(n,e,t){return ln.current.useReducer(n,e,t)};Ve.useRef=function(n){return ln.current.useRef(n)};Ve.useState=function(n){return ln.current.useState(n)};Ve.useSyncExternalStore=function(n,e,t){return ln.current.useSyncExternalStore(n,e,t)};Ve.useTransition=function(){return ln.current.useTransition()};Ve.version="18.3.1";Vg.exports=Ve;var mr=Vg.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tS=mr,nS=Symbol.for("react.element"),iS=Symbol.for("react.fragment"),rS=Object.prototype.hasOwnProperty,sS=tS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,oS={key:!0,ref:!0,__self:!0,__source:!0};function Zg(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)rS.call(e,i)&&!oS.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:nS,type:n,key:s,ref:o,props:r,_owner:sS.current}}dc.Fragment=iS;dc.jsx=Zg;dc.jsxs=Zg;Hg.exports=dc;var Pt=Hg.exports,Qg={exports:{}},On={},Jg={exports:{}},e0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,Y){var j=D.length;D.push(Y);e:for(;0<j;){var ie=j-1>>>1,pe=D[ie];if(0<r(pe,Y))D[ie]=Y,D[j]=pe,j=ie;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var Y=D[0],j=D.pop();if(j!==Y){D[0]=j;e:for(var ie=0,pe=D.length,ze=pe>>>1;ie<ze;){var V=2*(ie+1)-1,ee=D[V],fe=V+1,oe=D[fe];if(0>r(ee,j))fe<pe&&0>r(oe,ee)?(D[ie]=oe,D[fe]=j,ie=fe):(D[ie]=ee,D[V]=j,ie=V);else if(fe<pe&&0>r(oe,j))D[ie]=oe,D[fe]=j,ie=fe;else break e}}return Y}function r(D,Y){var j=D.sortIndex-Y.sortIndex;return j!==0?j:D.id-Y.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,x=!1,_=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(D){for(var Y=t(u);Y!==null;){if(Y.callback===null)i(u);else if(Y.startTime<=D)i(u),Y.sortIndex=Y.expirationTime,e(l,Y);else break;Y=t(u)}}function y(D){if(_=!1,v(D),!x)if(t(l)!==null)x=!0,$(A);else{var Y=t(u);Y!==null&&K(y,Y.startTime-D)}}function A(D,Y){x=!1,_&&(_=!1,d(P),P=-1),p=!0;var j=h;try{for(v(Y),f=t(l);f!==null&&(!(f.expirationTime>Y)||D&&!N());){var ie=f.callback;if(typeof ie=="function"){f.callback=null,h=f.priorityLevel;var pe=ie(f.expirationTime<=Y);Y=n.unstable_now(),typeof pe=="function"?f.callback=pe:f===t(l)&&i(l),v(Y)}else i(l);f=t(l)}if(f!==null)var ze=!0;else{var V=t(u);V!==null&&K(y,V.startTime-Y),ze=!1}return ze}finally{f=null,h=j,p=!1}}var w=!1,E=null,P=-1,M=5,S=-1;function N(){return!(n.unstable_now()-S<M)}function F(){if(E!==null){var D=n.unstable_now();S=D;var Y=!0;try{Y=E(!0,D)}finally{Y?L():(w=!1,E=null)}}else w=!1}var L;if(typeof g=="function")L=function(){g(F)};else if(typeof MessageChannel<"u"){var q=new MessageChannel,X=q.port2;q.port1.onmessage=F,L=function(){X.postMessage(null)}}else L=function(){m(F,0)};function $(D){E=D,w||(w=!0,L())}function K(D,Y){P=m(function(){D(n.unstable_now())},Y)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){x||p||(x=!0,$(A))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(h){case 1:case 2:case 3:var Y=3;break;default:Y=h}var j=h;h=Y;try{return D()}finally{h=j}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,Y){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var j=h;h=D;try{return Y()}finally{h=j}},n.unstable_scheduleCallback=function(D,Y,j){var ie=n.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?ie+j:ie):j=ie,D){case 1:var pe=-1;break;case 2:pe=250;break;case 5:pe=1073741823;break;case 4:pe=1e4;break;default:pe=5e3}return pe=j+pe,D={id:c++,callback:Y,priorityLevel:D,startTime:j,expirationTime:pe,sortIndex:-1},j>ie?(D.sortIndex=j,e(u,D),t(l)===null&&D===t(u)&&(_?(d(P),P=-1):_=!0,K(y,j-ie))):(D.sortIndex=pe,e(l,D),x||p||(x=!0,$(A))),D},n.unstable_shouldYield=N,n.unstable_wrapCallback=function(D){var Y=h;return function(){var j=h;h=Y;try{return D.apply(this,arguments)}finally{h=j}}}})(e0);Jg.exports=e0;var aS=Jg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lS=mr,In=aS;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var t0=new Set,Ua={};function Ps(n,e){Po(n,e),Po(n+"Capture",e)}function Po(n,e){for(Ua[n]=e,n=0;n<e.length;n++)t0.add(e[n])}var Xi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ed=Object.prototype.hasOwnProperty,uS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Gp={},Wp={};function cS(n){return ed.call(Wp,n)?!0:ed.call(Gp,n)?!1:uS.test(n)?Wp[n]=!0:(Gp[n]=!0,!1)}function fS(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function dS(n,e,t,i){if(e===null||typeof e>"u"||fS(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function un(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Vt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Vt[n]=new un(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Vt[e]=new un(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Vt[n]=new un(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Vt[n]=new un(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Vt[n]=new un(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Vt[n]=new un(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Vt[n]=new un(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Vt[n]=new un(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Vt[n]=new un(n,5,!1,n.toLowerCase(),null,!1,!1)});var xh=/[\-:]([a-z])/g;function yh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(xh,yh);Vt[e]=new un(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(xh,yh);Vt[e]=new un(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(xh,yh);Vt[e]=new un(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Vt[n]=new un(n,1,!1,n.toLowerCase(),null,!1,!1)});Vt.xlinkHref=new un("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Vt[n]=new un(n,1,!1,n.toLowerCase(),null,!0,!0)});function Sh(n,e,t,i){var r=Vt.hasOwnProperty(e)?Vt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(dS(e,t,r,i)&&(t=null),i||r===null?cS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Qi=lS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,yl=Symbol.for("react.element"),to=Symbol.for("react.portal"),no=Symbol.for("react.fragment"),Mh=Symbol.for("react.strict_mode"),td=Symbol.for("react.profiler"),n0=Symbol.for("react.provider"),i0=Symbol.for("react.context"),Eh=Symbol.for("react.forward_ref"),nd=Symbol.for("react.suspense"),id=Symbol.for("react.suspense_list"),Th=Symbol.for("react.memo"),ur=Symbol.for("react.lazy"),r0=Symbol.for("react.offscreen"),Xp=Symbol.iterator;function Jo(n){return n===null||typeof n!="object"?null:(n=Xp&&n[Xp]||n["@@iterator"],typeof n=="function"?n:null)}var gt=Object.assign,Bc;function ha(n){if(Bc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);Bc=e&&e[1]||""}return`
`+Bc+n}var Hc=!1;function Vc(n,e){if(!n||Hc)return"";Hc=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Hc=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ha(n):""}function hS(n){switch(n.tag){case 5:return ha(n.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 2:case 15:return n=Vc(n.type,!1),n;case 11:return n=Vc(n.type.render,!1),n;case 1:return n=Vc(n.type,!0),n;default:return""}}function rd(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case no:return"Fragment";case to:return"Portal";case td:return"Profiler";case Mh:return"StrictMode";case nd:return"Suspense";case id:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case i0:return(n.displayName||"Context")+".Consumer";case n0:return(n._context.displayName||"Context")+".Provider";case Eh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case Th:return e=n.displayName||null,e!==null?e:rd(n.type)||"Memo";case ur:e=n._payload,n=n._init;try{return rd(n(e))}catch{}}return null}function pS(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return rd(e);case 8:return e===Mh?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function s0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function mS(n){var e=s0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function Sl(n){n._valueTracker||(n._valueTracker=mS(n))}function o0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=s0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function Cu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function sd(n,e){var t=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Yp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ir(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function a0(n,e){e=e.checked,e!=null&&Sh(n,"checked",e,!1)}function od(n,e){a0(n,e);var t=Ir(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?ad(n,e.type,t):e.hasOwnProperty("defaultValue")&&ad(n,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function jp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function ad(n,e,t){(e!=="number"||Cu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var pa=Array.isArray;function go(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ir(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function ld(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function qp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(pa(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ir(t)}}function l0(n,e){var t=Ir(e.value),i=Ir(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function $p(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function u0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ud(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?u0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ml,c0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(Ml=Ml||document.createElement("div"),Ml.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ml.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function Oa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var Sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},_S=["Webkit","ms","Moz","O"];Object.keys(Sa).forEach(function(n){_S.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),Sa[e]=Sa[n]})});function f0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||Sa.hasOwnProperty(n)&&Sa[n]?(""+e).trim():e+"px"}function d0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=f0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var gS=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function cd(n,e){if(e){if(gS[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function fd(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var dd=null;function wh(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var hd=null,vo=null,xo=null;function Kp(n){if(n=cl(n)){if(typeof hd!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=gc(e),hd(n.stateNode,n.type,e))}}function h0(n){vo?xo?xo.push(n):xo=[n]:vo=n}function p0(){if(vo){var n=vo,e=xo;if(xo=vo=null,Kp(n),e)for(n=0;n<e.length;n++)Kp(e[n])}}function m0(n,e){return n(e)}function _0(){}var Gc=!1;function g0(n,e,t){if(Gc)return n(e,t);Gc=!0;try{return m0(n,e,t)}finally{Gc=!1,(vo!==null||xo!==null)&&(_0(),p0())}}function Fa(n,e){var t=n.stateNode;if(t===null)return null;var i=gc(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var pd=!1;if(Xi)try{var ea={};Object.defineProperty(ea,"passive",{get:function(){pd=!0}}),window.addEventListener("test",ea,ea),window.removeEventListener("test",ea,ea)}catch{pd=!1}function vS(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var Ma=!1,Ru=null,Pu=!1,md=null,xS={onError:function(n){Ma=!0,Ru=n}};function yS(n,e,t,i,r,s,o,a,l){Ma=!1,Ru=null,vS.apply(xS,arguments)}function SS(n,e,t,i,r,s,o,a,l){if(yS.apply(this,arguments),Ma){if(Ma){var u=Ru;Ma=!1,Ru=null}else throw Error(ne(198));Pu||(Pu=!0,md=u)}}function bs(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function v0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Zp(n){if(bs(n)!==n)throw Error(ne(188))}function MS(n){var e=n.alternate;if(!e){if(e=bs(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Zp(r),n;if(s===i)return Zp(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function x0(n){return n=MS(n),n!==null?y0(n):null}function y0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=y0(n);if(e!==null)return e;n=n.sibling}return null}var S0=In.unstable_scheduleCallback,Qp=In.unstable_cancelCallback,ES=In.unstable_shouldYield,TS=In.unstable_requestPaint,St=In.unstable_now,wS=In.unstable_getCurrentPriorityLevel,Ah=In.unstable_ImmediatePriority,M0=In.unstable_UserBlockingPriority,bu=In.unstable_NormalPriority,AS=In.unstable_LowPriority,E0=In.unstable_IdlePriority,hc=null,Mi=null;function CS(n){if(Mi&&typeof Mi.onCommitFiberRoot=="function")try{Mi.onCommitFiberRoot(hc,n,void 0,(n.current.flags&128)===128)}catch{}}var ui=Math.clz32?Math.clz32:bS,RS=Math.log,PS=Math.LN2;function bS(n){return n>>>=0,n===0?32:31-(RS(n)/PS|0)|0}var El=64,Tl=4194304;function ma(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Lu(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=ma(a):(s&=o,s!==0&&(i=ma(s)))}else o=t&~r,o!==0?i=ma(o):s!==0&&(i=ma(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ui(e),r=1<<t,i|=n[t],e&=~r;return i}function LS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function DS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ui(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=LS(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function _d(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function T0(){var n=El;return El<<=1,!(El&4194240)&&(El=64),n}function Wc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function ll(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ui(e),n[e]=t}function NS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ui(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function Ch(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ui(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ke=0;function w0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var A0,Rh,C0,R0,P0,gd=!1,wl=[],Mr=null,Er=null,Tr=null,ka=new Map,za=new Map,dr=[],IS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Jp(n,e){switch(n){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":ka.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":za.delete(e.pointerId)}}function ta(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=cl(e),e!==null&&Rh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function US(n,e,t,i,r){switch(e){case"focusin":return Mr=ta(Mr,n,e,t,i,r),!0;case"dragenter":return Er=ta(Er,n,e,t,i,r),!0;case"mouseover":return Tr=ta(Tr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return ka.set(s,ta(ka.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,za.set(s,ta(za.get(s)||null,n,e,t,i,r)),!0}return!1}function b0(n){var e=us(n.target);if(e!==null){var t=bs(e);if(t!==null){if(e=t.tag,e===13){if(e=v0(t),e!==null){n.blockedOn=e,P0(n.priority,function(){C0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function du(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=vd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);dd=i,t.target.dispatchEvent(i),dd=null}else return e=cl(t),e!==null&&Rh(e),n.blockedOn=t,!1;e.shift()}return!0}function em(n,e,t){du(n)&&t.delete(e)}function OS(){gd=!1,Mr!==null&&du(Mr)&&(Mr=null),Er!==null&&du(Er)&&(Er=null),Tr!==null&&du(Tr)&&(Tr=null),ka.forEach(em),za.forEach(em)}function na(n,e){n.blockedOn===e&&(n.blockedOn=null,gd||(gd=!0,In.unstable_scheduleCallback(In.unstable_NormalPriority,OS)))}function Ba(n){function e(r){return na(r,n)}if(0<wl.length){na(wl[0],n);for(var t=1;t<wl.length;t++){var i=wl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(Mr!==null&&na(Mr,n),Er!==null&&na(Er,n),Tr!==null&&na(Tr,n),ka.forEach(e),za.forEach(e),t=0;t<dr.length;t++)i=dr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<dr.length&&(t=dr[0],t.blockedOn===null);)b0(t),t.blockedOn===null&&dr.shift()}var yo=Qi.ReactCurrentBatchConfig,Du=!0;function FS(n,e,t,i){var r=Ke,s=yo.transition;yo.transition=null;try{Ke=1,Ph(n,e,t,i)}finally{Ke=r,yo.transition=s}}function kS(n,e,t,i){var r=Ke,s=yo.transition;yo.transition=null;try{Ke=4,Ph(n,e,t,i)}finally{Ke=r,yo.transition=s}}function Ph(n,e,t,i){if(Du){var r=vd(n,e,t,i);if(r===null)ef(n,e,i,Nu,t),Jp(n,i);else if(US(r,n,e,t,i))i.stopPropagation();else if(Jp(n,i),e&4&&-1<IS.indexOf(n)){for(;r!==null;){var s=cl(r);if(s!==null&&A0(s),s=vd(n,e,t,i),s===null&&ef(n,e,i,Nu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else ef(n,e,i,null,t)}}var Nu=null;function vd(n,e,t,i){if(Nu=null,n=wh(i),n=us(n),n!==null)if(e=bs(n),e===null)n=null;else if(t=e.tag,t===13){if(n=v0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return Nu=n,null}function L0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wS()){case Ah:return 1;case M0:return 4;case bu:case AS:return 16;case E0:return 536870912;default:return 16}default:return 16}}var _r=null,bh=null,hu=null;function D0(){if(hu)return hu;var n,e=bh,t=e.length,i,r="value"in _r?_r.value:_r.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return hu=r.slice(n,1<i?1-i:void 0)}function pu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function Al(){return!0}function tm(){return!1}function Fn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Al:tm,this.isPropagationStopped=tm,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=Al)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=Al)},persist:function(){},isPersistent:Al}),e}var Yo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Lh=Fn(Yo),ul=gt({},Yo,{view:0,detail:0}),zS=Fn(ul),Xc,Yc,ia,pc=gt({},ul,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Dh,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ia&&(ia&&n.type==="mousemove"?(Xc=n.screenX-ia.screenX,Yc=n.screenY-ia.screenY):Yc=Xc=0,ia=n),Xc)},movementY:function(n){return"movementY"in n?n.movementY:Yc}}),nm=Fn(pc),BS=gt({},pc,{dataTransfer:0}),HS=Fn(BS),VS=gt({},ul,{relatedTarget:0}),jc=Fn(VS),GS=gt({},Yo,{animationName:0,elapsedTime:0,pseudoElement:0}),WS=Fn(GS),XS=gt({},Yo,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),YS=Fn(XS),jS=gt({},Yo,{data:0}),im=Fn(jS),qS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$S={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},KS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ZS(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=KS[n])?!!e[n]:!1}function Dh(){return ZS}var QS=gt({},ul,{key:function(n){if(n.key){var e=qS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=pu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?$S[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Dh,charCode:function(n){return n.type==="keypress"?pu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?pu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),JS=Fn(QS),eM=gt({},pc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=Fn(eM),tM=gt({},ul,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Dh}),nM=Fn(tM),iM=gt({},Yo,{propertyName:0,elapsedTime:0,pseudoElement:0}),rM=Fn(iM),sM=gt({},pc,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),oM=Fn(sM),aM=[9,13,27,32],Nh=Xi&&"CompositionEvent"in window,Ea=null;Xi&&"documentMode"in document&&(Ea=document.documentMode);var lM=Xi&&"TextEvent"in window&&!Ea,N0=Xi&&(!Nh||Ea&&8<Ea&&11>=Ea),sm=" ",om=!1;function I0(n,e){switch(n){case"keyup":return aM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function U0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var io=!1;function uM(n,e){switch(n){case"compositionend":return U0(e);case"keypress":return e.which!==32?null:(om=!0,sm);case"textInput":return n=e.data,n===sm&&om?null:n;default:return null}}function cM(n,e){if(io)return n==="compositionend"||!Nh&&I0(n,e)?(n=D0(),hu=bh=_r=null,io=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return N0&&e.locale!=="ko"?null:e.data;default:return null}}var fM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function am(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!fM[n.type]:e==="textarea"}function O0(n,e,t,i){h0(i),e=Iu(e,"onChange"),0<e.length&&(t=new Lh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var Ta=null,Ha=null;function dM(n){j0(n,0)}function mc(n){var e=oo(n);if(o0(e))return n}function hM(n,e){if(n==="change")return e}var F0=!1;if(Xi){var qc;if(Xi){var $c="oninput"in document;if(!$c){var lm=document.createElement("div");lm.setAttribute("oninput","return;"),$c=typeof lm.oninput=="function"}qc=$c}else qc=!1;F0=qc&&(!document.documentMode||9<document.documentMode)}function um(){Ta&&(Ta.detachEvent("onpropertychange",k0),Ha=Ta=null)}function k0(n){if(n.propertyName==="value"&&mc(Ha)){var e=[];O0(e,Ha,n,wh(n)),g0(dM,e)}}function pM(n,e,t){n==="focusin"?(um(),Ta=e,Ha=t,Ta.attachEvent("onpropertychange",k0)):n==="focusout"&&um()}function mM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return mc(Ha)}function _M(n,e){if(n==="click")return mc(e)}function gM(n,e){if(n==="input"||n==="change")return mc(e)}function vM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var fi=typeof Object.is=="function"?Object.is:vM;function Va(n,e){if(fi(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!ed.call(e,r)||!fi(n[r],e[r]))return!1}return!0}function cm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function fm(n,e){var t=cm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=cm(t)}}function z0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?z0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function B0(){for(var n=window,e=Cu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=Cu(n.document)}return e}function Ih(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function xM(n){var e=B0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&z0(t.ownerDocument.documentElement,t)){if(i!==null&&Ih(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=fm(t,s);var o=fm(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var yM=Xi&&"documentMode"in document&&11>=document.documentMode,ro=null,xd=null,wa=null,yd=!1;function dm(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;yd||ro==null||ro!==Cu(i)||(i=ro,"selectionStart"in i&&Ih(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),wa&&Va(wa,i)||(wa=i,i=Iu(xd,"onSelect"),0<i.length&&(e=new Lh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=ro)))}function Cl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var so={animationend:Cl("Animation","AnimationEnd"),animationiteration:Cl("Animation","AnimationIteration"),animationstart:Cl("Animation","AnimationStart"),transitionend:Cl("Transition","TransitionEnd")},Kc={},H0={};Xi&&(H0=document.createElement("div").style,"AnimationEvent"in window||(delete so.animationend.animation,delete so.animationiteration.animation,delete so.animationstart.animation),"TransitionEvent"in window||delete so.transitionend.transition);function _c(n){if(Kc[n])return Kc[n];if(!so[n])return n;var e=so[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in H0)return Kc[n]=e[t];return n}var V0=_c("animationend"),G0=_c("animationiteration"),W0=_c("animationstart"),X0=_c("transitionend"),Y0=new Map,hm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Hr(n,e){Y0.set(n,e),Ps(e,[n])}for(var Zc=0;Zc<hm.length;Zc++){var Qc=hm[Zc],SM=Qc.toLowerCase(),MM=Qc[0].toUpperCase()+Qc.slice(1);Hr(SM,"on"+MM)}Hr(V0,"onAnimationEnd");Hr(G0,"onAnimationIteration");Hr(W0,"onAnimationStart");Hr("dblclick","onDoubleClick");Hr("focusin","onFocus");Hr("focusout","onBlur");Hr(X0,"onTransitionEnd");Po("onMouseEnter",["mouseout","mouseover"]);Po("onMouseLeave",["mouseout","mouseover"]);Po("onPointerEnter",["pointerout","pointerover"]);Po("onPointerLeave",["pointerout","pointerover"]);Ps("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ps("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ps("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ps("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ps("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _a="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),EM=new Set("cancel close invalid load scroll toggle".split(" ").concat(_a));function pm(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,SS(i,e,void 0,n),n.currentTarget=null}function j0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;pm(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;pm(r,a,u),s=l}}}if(Pu)throw n=md,Pu=!1,md=null,n}function st(n,e){var t=e[wd];t===void 0&&(t=e[wd]=new Set);var i=n+"__bubble";t.has(i)||(q0(e,n,2,!1),t.add(i))}function Jc(n,e,t){var i=0;e&&(i|=4),q0(t,n,i,e)}var Rl="_reactListening"+Math.random().toString(36).slice(2);function Ga(n){if(!n[Rl]){n[Rl]=!0,t0.forEach(function(t){t!=="selectionchange"&&(EM.has(t)||Jc(t,!1,n),Jc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[Rl]||(e[Rl]=!0,Jc("selectionchange",!1,e))}}function q0(n,e,t,i){switch(L0(e)){case 1:var r=FS;break;case 4:r=kS;break;default:r=Ph}t=r.bind(null,e,t,n),r=void 0,!pd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function ef(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=us(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}g0(function(){var u=s,c=wh(t),f=[];e:{var h=Y0.get(n);if(h!==void 0){var p=Lh,x=n;switch(n){case"keypress":if(pu(t)===0)break e;case"keydown":case"keyup":p=JS;break;case"focusin":x="focus",p=jc;break;case"focusout":x="blur",p=jc;break;case"beforeblur":case"afterblur":p=jc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=nm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=HS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=nM;break;case V0:case G0:case W0:p=WS;break;case X0:p=rM;break;case"scroll":p=zS;break;case"wheel":p=oM;break;case"copy":case"cut":case"paste":p=YS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=rm}var _=(e&4)!==0,m=!_&&n==="scroll",d=_?h!==null?h+"Capture":null:h;_=[];for(var g=u,v;g!==null;){v=g;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,d!==null&&(y=Fa(g,d),y!=null&&_.push(Wa(g,y,v)))),m)break;g=g.return}0<_.length&&(h=new p(h,x,null,t,c),f.push({event:h,listeners:_}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==dd&&(x=t.relatedTarget||t.fromElement)&&(us(x)||x[Yi]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(x=t.relatedTarget||t.toElement,p=u,x=x?us(x):null,x!==null&&(m=bs(x),x!==m||x.tag!==5&&x.tag!==6)&&(x=null)):(p=null,x=u),p!==x)){if(_=nm,y="onMouseLeave",d="onMouseEnter",g="mouse",(n==="pointerout"||n==="pointerover")&&(_=rm,y="onPointerLeave",d="onPointerEnter",g="pointer"),m=p==null?h:oo(p),v=x==null?h:oo(x),h=new _(y,g+"leave",p,t,c),h.target=m,h.relatedTarget=v,y=null,us(c)===u&&(_=new _(d,g+"enter",x,t,c),_.target=v,_.relatedTarget=m,y=_),m=y,p&&x)t:{for(_=p,d=x,g=0,v=_;v;v=Ns(v))g++;for(v=0,y=d;y;y=Ns(y))v++;for(;0<g-v;)_=Ns(_),g--;for(;0<v-g;)d=Ns(d),v--;for(;g--;){if(_===d||d!==null&&_===d.alternate)break t;_=Ns(_),d=Ns(d)}_=null}else _=null;p!==null&&mm(f,h,p,_,!1),x!==null&&m!==null&&mm(f,m,x,_,!0)}}e:{if(h=u?oo(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var A=hM;else if(am(h))if(F0)A=gM;else{A=mM;var w=pM}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(A=_M);if(A&&(A=A(n,u))){O0(f,A,t,c);break e}w&&w(n,h,u),n==="focusout"&&(w=h._wrapperState)&&w.controlled&&h.type==="number"&&ad(h,"number",h.value)}switch(w=u?oo(u):window,n){case"focusin":(am(w)||w.contentEditable==="true")&&(ro=w,xd=u,wa=null);break;case"focusout":wa=xd=ro=null;break;case"mousedown":yd=!0;break;case"contextmenu":case"mouseup":case"dragend":yd=!1,dm(f,t,c);break;case"selectionchange":if(yM)break;case"keydown":case"keyup":dm(f,t,c)}var E;if(Nh)e:{switch(n){case"compositionstart":var P="onCompositionStart";break e;case"compositionend":P="onCompositionEnd";break e;case"compositionupdate":P="onCompositionUpdate";break e}P=void 0}else io?I0(n,t)&&(P="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(P="onCompositionStart");P&&(N0&&t.locale!=="ko"&&(io||P!=="onCompositionStart"?P==="onCompositionEnd"&&io&&(E=D0()):(_r=c,bh="value"in _r?_r.value:_r.textContent,io=!0)),w=Iu(u,P),0<w.length&&(P=new im(P,n,null,t,c),f.push({event:P,listeners:w}),E?P.data=E:(E=U0(t),E!==null&&(P.data=E)))),(E=lM?uM(n,t):cM(n,t))&&(u=Iu(u,"onBeforeInput"),0<u.length&&(c=new im("onBeforeInput","beforeinput",null,t,c),f.push({event:c,listeners:u}),c.data=E))}j0(f,e)})}function Wa(n,e,t){return{instance:n,listener:e,currentTarget:t}}function Iu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Fa(n,t),s!=null&&i.unshift(Wa(n,s,r)),s=Fa(n,e),s!=null&&i.push(Wa(n,s,r))),n=n.return}return i}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function mm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Fa(t,s),l!=null&&o.unshift(Wa(t,l,a))):r||(l=Fa(t,s),l!=null&&o.push(Wa(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var TM=/\r\n?/g,wM=/\u0000|\uFFFD/g;function _m(n){return(typeof n=="string"?n:""+n).replace(TM,`
`).replace(wM,"")}function Pl(n,e,t){if(e=_m(e),_m(n)!==e&&t)throw Error(ne(425))}function Uu(){}var Sd=null,Md=null;function Ed(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Td=typeof setTimeout=="function"?setTimeout:void 0,AM=typeof clearTimeout=="function"?clearTimeout:void 0,gm=typeof Promise=="function"?Promise:void 0,CM=typeof queueMicrotask=="function"?queueMicrotask:typeof gm<"u"?function(n){return gm.resolve(null).then(n).catch(RM)}:Td;function RM(n){setTimeout(function(){throw n})}function tf(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),Ba(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);Ba(e)}function wr(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function vm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var jo=Math.random().toString(36).slice(2),gi="__reactFiber$"+jo,Xa="__reactProps$"+jo,Yi="__reactContainer$"+jo,wd="__reactEvents$"+jo,PM="__reactListeners$"+jo,bM="__reactHandles$"+jo;function us(n){var e=n[gi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[Yi]||t[gi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=vm(n);n!==null;){if(t=n[gi])return t;n=vm(n)}return e}n=t,t=n.parentNode}return null}function cl(n){return n=n[gi]||n[Yi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function oo(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function gc(n){return n[Xa]||null}var Ad=[],ao=-1;function Vr(n){return{current:n}}function at(n){0>ao||(n.current=Ad[ao],Ad[ao]=null,ao--)}function it(n,e){ao++,Ad[ao]=n.current,n.current=e}var Ur={},tn=Vr(Ur),dn=Vr(!1),Ss=Ur;function bo(n,e){var t=n.type.contextTypes;if(!t)return Ur;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function hn(n){return n=n.childContextTypes,n!=null}function Ou(){at(dn),at(tn)}function xm(n,e,t){if(tn.current!==Ur)throw Error(ne(168));it(tn,e),it(dn,t)}function $0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,pS(n)||"Unknown",r));return gt({},t,i)}function Fu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Ur,Ss=tn.current,it(tn,n),it(dn,dn.current),!0}function ym(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=$0(n,e,Ss),i.__reactInternalMemoizedMergedChildContext=n,at(dn),at(tn),it(tn,n)):at(dn),it(dn,t)}var ki=null,vc=!1,nf=!1;function K0(n){ki===null?ki=[n]:ki.push(n)}function LM(n){vc=!0,K0(n)}function Gr(){if(!nf&&ki!==null){nf=!0;var n=0,e=Ke;try{var t=ki;for(Ke=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}ki=null,vc=!1}catch(r){throw ki!==null&&(ki=ki.slice(n+1)),S0(Ah,Gr),r}finally{Ke=e,nf=!1}}return null}var lo=[],uo=0,ku=null,zu=0,Vn=[],Gn=0,Ms=null,Hi=1,Vi="";function is(n,e){lo[uo++]=zu,lo[uo++]=ku,ku=n,zu=e}function Z0(n,e,t){Vn[Gn++]=Hi,Vn[Gn++]=Vi,Vn[Gn++]=Ms,Ms=n;var i=Hi;n=Vi;var r=32-ui(i)-1;i&=~(1<<r),t+=1;var s=32-ui(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Hi=1<<32-ui(e)+r|t<<r|i,Vi=s+n}else Hi=1<<s|t<<r|i,Vi=n}function Uh(n){n.return!==null&&(is(n,1),Z0(n,1,0))}function Oh(n){for(;n===ku;)ku=lo[--uo],lo[uo]=null,zu=lo[--uo],lo[uo]=null;for(;n===Ms;)Ms=Vn[--Gn],Vn[Gn]=null,Vi=Vn[--Gn],Vn[Gn]=null,Hi=Vn[--Gn],Vn[Gn]=null}var Dn=null,bn=null,ct=!1,ai=null;function Q0(n,e){var t=Wn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function Sm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Dn=n,bn=wr(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Dn=n,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=Ms!==null?{id:Hi,overflow:Vi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Wn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Dn=n,bn=null,!0):!1;default:return!1}}function Cd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Rd(n){if(ct){var e=bn;if(e){var t=e;if(!Sm(n,e)){if(Cd(n))throw Error(ne(418));e=wr(t.nextSibling);var i=Dn;e&&Sm(n,e)?Q0(i,t):(n.flags=n.flags&-4097|2,ct=!1,Dn=n)}}else{if(Cd(n))throw Error(ne(418));n.flags=n.flags&-4097|2,ct=!1,Dn=n}}}function Mm(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Dn=n}function bl(n){if(n!==Dn)return!1;if(!ct)return Mm(n),ct=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!Ed(n.type,n.memoizedProps)),e&&(e=bn)){if(Cd(n))throw J0(),Error(ne(418));for(;e;)Q0(n,e),e=wr(e.nextSibling)}if(Mm(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){bn=wr(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}bn=null}}else bn=Dn?wr(n.stateNode.nextSibling):null;return!0}function J0(){for(var n=bn;n;)n=wr(n.nextSibling)}function Lo(){bn=Dn=null,ct=!1}function Fh(n){ai===null?ai=[n]:ai.push(n)}var DM=Qi.ReactCurrentBatchConfig;function ra(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function Ll(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Em(n){var e=n._init;return e(n._payload)}function ev(n){function e(d,g){if(n){var v=d.deletions;v===null?(d.deletions=[g],d.flags|=16):v.push(g)}}function t(d,g){if(!n)return null;for(;g!==null;)e(d,g),g=g.sibling;return null}function i(d,g){for(d=new Map;g!==null;)g.key!==null?d.set(g.key,g):d.set(g.index,g),g=g.sibling;return d}function r(d,g){return d=Pr(d,g),d.index=0,d.sibling=null,d}function s(d,g,v){return d.index=v,n?(v=d.alternate,v!==null?(v=v.index,v<g?(d.flags|=2,g):v):(d.flags|=2,g)):(d.flags|=1048576,g)}function o(d){return n&&d.alternate===null&&(d.flags|=2),d}function a(d,g,v,y){return g===null||g.tag!==6?(g=cf(v,d.mode,y),g.return=d,g):(g=r(g,v),g.return=d,g)}function l(d,g,v,y){var A=v.type;return A===no?c(d,g,v.props.children,y,v.key):g!==null&&(g.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ur&&Em(A)===g.type)?(y=r(g,v.props),y.ref=ra(d,g,v),y.return=d,y):(y=Su(v.type,v.key,v.props,null,d.mode,y),y.ref=ra(d,g,v),y.return=d,y)}function u(d,g,v,y){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=ff(v,d.mode,y),g.return=d,g):(g=r(g,v.children||[]),g.return=d,g)}function c(d,g,v,y,A){return g===null||g.tag!==7?(g=_s(v,d.mode,y,A),g.return=d,g):(g=r(g,v),g.return=d,g)}function f(d,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=cf(""+g,d.mode,v),g.return=d,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case yl:return v=Su(g.type,g.key,g.props,null,d.mode,v),v.ref=ra(d,null,g),v.return=d,v;case to:return g=ff(g,d.mode,v),g.return=d,g;case ur:var y=g._init;return f(d,y(g._payload),v)}if(pa(g)||Jo(g))return g=_s(g,d.mode,v,null),g.return=d,g;Ll(d,g)}return null}function h(d,g,v,y){var A=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return A!==null?null:a(d,g,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case yl:return v.key===A?l(d,g,v,y):null;case to:return v.key===A?u(d,g,v,y):null;case ur:return A=v._init,h(d,g,A(v._payload),y)}if(pa(v)||Jo(v))return A!==null?null:c(d,g,v,y,null);Ll(d,v)}return null}function p(d,g,v,y,A){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(v)||null,a(g,d,""+y,A);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case yl:return d=d.get(y.key===null?v:y.key)||null,l(g,d,y,A);case to:return d=d.get(y.key===null?v:y.key)||null,u(g,d,y,A);case ur:var w=y._init;return p(d,g,v,w(y._payload),A)}if(pa(y)||Jo(y))return d=d.get(v)||null,c(g,d,y,A,null);Ll(g,y)}return null}function x(d,g,v,y){for(var A=null,w=null,E=g,P=g=0,M=null;E!==null&&P<v.length;P++){E.index>P?(M=E,E=null):M=E.sibling;var S=h(d,E,v[P],y);if(S===null){E===null&&(E=M);break}n&&E&&S.alternate===null&&e(d,E),g=s(S,g,P),w===null?A=S:w.sibling=S,w=S,E=M}if(P===v.length)return t(d,E),ct&&is(d,P),A;if(E===null){for(;P<v.length;P++)E=f(d,v[P],y),E!==null&&(g=s(E,g,P),w===null?A=E:w.sibling=E,w=E);return ct&&is(d,P),A}for(E=i(d,E);P<v.length;P++)M=p(E,d,P,v[P],y),M!==null&&(n&&M.alternate!==null&&E.delete(M.key===null?P:M.key),g=s(M,g,P),w===null?A=M:w.sibling=M,w=M);return n&&E.forEach(function(N){return e(d,N)}),ct&&is(d,P),A}function _(d,g,v,y){var A=Jo(v);if(typeof A!="function")throw Error(ne(150));if(v=A.call(v),v==null)throw Error(ne(151));for(var w=A=null,E=g,P=g=0,M=null,S=v.next();E!==null&&!S.done;P++,S=v.next()){E.index>P?(M=E,E=null):M=E.sibling;var N=h(d,E,S.value,y);if(N===null){E===null&&(E=M);break}n&&E&&N.alternate===null&&e(d,E),g=s(N,g,P),w===null?A=N:w.sibling=N,w=N,E=M}if(S.done)return t(d,E),ct&&is(d,P),A;if(E===null){for(;!S.done;P++,S=v.next())S=f(d,S.value,y),S!==null&&(g=s(S,g,P),w===null?A=S:w.sibling=S,w=S);return ct&&is(d,P),A}for(E=i(d,E);!S.done;P++,S=v.next())S=p(E,d,P,S.value,y),S!==null&&(n&&S.alternate!==null&&E.delete(S.key===null?P:S.key),g=s(S,g,P),w===null?A=S:w.sibling=S,w=S);return n&&E.forEach(function(F){return e(d,F)}),ct&&is(d,P),A}function m(d,g,v,y){if(typeof v=="object"&&v!==null&&v.type===no&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case yl:e:{for(var A=v.key,w=g;w!==null;){if(w.key===A){if(A=v.type,A===no){if(w.tag===7){t(d,w.sibling),g=r(w,v.props.children),g.return=d,d=g;break e}}else if(w.elementType===A||typeof A=="object"&&A!==null&&A.$$typeof===ur&&Em(A)===w.type){t(d,w.sibling),g=r(w,v.props),g.ref=ra(d,w,v),g.return=d,d=g;break e}t(d,w);break}else e(d,w);w=w.sibling}v.type===no?(g=_s(v.props.children,d.mode,y,v.key),g.return=d,d=g):(y=Su(v.type,v.key,v.props,null,d.mode,y),y.ref=ra(d,g,v),y.return=d,d=y)}return o(d);case to:e:{for(w=v.key;g!==null;){if(g.key===w)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){t(d,g.sibling),g=r(g,v.children||[]),g.return=d,d=g;break e}else{t(d,g);break}else e(d,g);g=g.sibling}g=ff(v,d.mode,y),g.return=d,d=g}return o(d);case ur:return w=v._init,m(d,g,w(v._payload),y)}if(pa(v))return x(d,g,v,y);if(Jo(v))return _(d,g,v,y);Ll(d,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(t(d,g.sibling),g=r(g,v),g.return=d,d=g):(t(d,g),g=cf(v,d.mode,y),g.return=d,d=g),o(d)):t(d,g)}return m}var Do=ev(!0),tv=ev(!1),Bu=Vr(null),Hu=null,co=null,kh=null;function zh(){kh=co=Hu=null}function Bh(n){var e=Bu.current;at(Bu),n._currentValue=e}function Pd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function So(n,e){Hu=n,kh=co=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(fn=!0),n.firstContext=null)}function Zn(n){var e=n._currentValue;if(kh!==n)if(n={context:n,memoizedValue:e,next:null},co===null){if(Hu===null)throw Error(ne(308));co=n,Hu.dependencies={lanes:0,firstContext:n}}else co=co.next=n;return e}var cs=null;function Hh(n){cs===null?cs=[n]:cs.push(n)}function nv(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Hh(e)):(t.next=r.next,r.next=t),e.interleaved=t,ji(n,i)}function ji(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var cr=!1;function Vh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function iv(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Wi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function Ar(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Ye&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,ji(n,t)}return r=i.interleaved,r===null?(e.next=e,Hh(i)):(e.next=r.next,r.next=e),i.interleaved=e,ji(n,t)}function mu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ch(n,t)}}function Tm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Vu(n,e,t,i){var r=n.updateQueue;cr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=n,_=a;switch(h=e,p=t,_.tag){case 1:if(x=_.payload,typeof x=="function"){f=x.call(p,f,h);break e}f=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=_.payload,h=typeof x=="function"?x.call(p,f,h):x,h==null)break e;f=gt({},f,h);break e;case 2:cr=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ts|=o,n.lanes=o,n.memoizedState=f}}function wm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var fl={},Ei=Vr(fl),Ya=Vr(fl),ja=Vr(fl);function fs(n){if(n===fl)throw Error(ne(174));return n}function Gh(n,e){switch(it(ja,e),it(Ya,n),it(Ei,fl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:ud(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=ud(e,n)}at(Ei),it(Ei,e)}function No(){at(Ei),at(Ya),at(ja)}function rv(n){fs(ja.current);var e=fs(Ei.current),t=ud(e,n.type);e!==t&&(it(Ya,n),it(Ei,t))}function Wh(n){Ya.current===n&&(at(Ei),at(Ya))}var ht=Vr(0);function Gu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var rf=[];function Xh(){for(var n=0;n<rf.length;n++)rf[n]._workInProgressVersionPrimary=null;rf.length=0}var _u=Qi.ReactCurrentDispatcher,sf=Qi.ReactCurrentBatchConfig,Es=0,_t=null,Rt=null,Ut=null,Wu=!1,Aa=!1,qa=0,NM=0;function Xt(){throw Error(ne(321))}function Yh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!fi(n[t],e[t]))return!1;return!0}function jh(n,e,t,i,r,s){if(Es=s,_t=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,_u.current=n===null||n.memoizedState===null?FM:kM,n=t(i,r),Aa){s=0;do{if(Aa=!1,qa=0,25<=s)throw Error(ne(301));s+=1,Ut=Rt=null,e.updateQueue=null,_u.current=zM,n=t(i,r)}while(Aa)}if(_u.current=Xu,e=Rt!==null&&Rt.next!==null,Es=0,Ut=Rt=_t=null,Wu=!1,e)throw Error(ne(300));return n}function qh(){var n=qa!==0;return qa=0,n}function hi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ut===null?_t.memoizedState=Ut=n:Ut=Ut.next=n,Ut}function Qn(){if(Rt===null){var n=_t.alternate;n=n!==null?n.memoizedState:null}else n=Rt.next;var e=Ut===null?_t.memoizedState:Ut.next;if(e!==null)Ut=e,Rt=n;else{if(n===null)throw Error(ne(310));Rt=n,n={memoizedState:Rt.memoizedState,baseState:Rt.baseState,baseQueue:Rt.baseQueue,queue:Rt.queue,next:null},Ut===null?_t.memoizedState=Ut=n:Ut=Ut.next=n}return Ut}function $a(n,e){return typeof e=="function"?e(n):e}function of(n){var e=Qn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=Rt,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Es&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,_t.lanes|=c,Ts|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,fi(i,e.memoizedState)||(fn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,_t.lanes|=s,Ts|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function af(n){var e=Qn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);fi(s,e.memoizedState)||(fn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function sv(){}function ov(n,e){var t=_t,i=Qn(),r=e(),s=!fi(i.memoizedState,r);if(s&&(i.memoizedState=r,fn=!0),i=i.queue,$h(uv.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||Ut!==null&&Ut.memoizedState.tag&1){if(t.flags|=2048,Ka(9,lv.bind(null,t,i,r,e),void 0,null),Ft===null)throw Error(ne(349));Es&30||av(t,e,r)}return r}function av(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function lv(n,e,t,i){e.value=t,e.getSnapshot=i,cv(e)&&fv(n)}function uv(n,e,t){return t(function(){cv(e)&&fv(n)})}function cv(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!fi(n,t)}catch{return!0}}function fv(n){var e=ji(n,1);e!==null&&ci(e,n,1,-1)}function Am(n){var e=hi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$a,lastRenderedState:n},e.queue=n,n=n.dispatch=OM.bind(null,_t,n),[e.memoizedState,n]}function Ka(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=_t.updateQueue,e===null?(e={lastEffect:null,stores:null},_t.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function dv(){return Qn().memoizedState}function gu(n,e,t,i){var r=hi();_t.flags|=n,r.memoizedState=Ka(1|e,t,void 0,i===void 0?null:i)}function xc(n,e,t,i){var r=Qn();i=i===void 0?null:i;var s=void 0;if(Rt!==null){var o=Rt.memoizedState;if(s=o.destroy,i!==null&&Yh(i,o.deps)){r.memoizedState=Ka(e,t,s,i);return}}_t.flags|=n,r.memoizedState=Ka(1|e,t,s,i)}function Cm(n,e){return gu(8390656,8,n,e)}function $h(n,e){return xc(2048,8,n,e)}function hv(n,e){return xc(4,2,n,e)}function pv(n,e){return xc(4,4,n,e)}function mv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function _v(n,e,t){return t=t!=null?t.concat([n]):null,xc(4,4,mv.bind(null,e,n),t)}function Kh(){}function gv(n,e){var t=Qn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Yh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function vv(n,e){var t=Qn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&Yh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function xv(n,e,t){return Es&21?(fi(t,e)||(t=T0(),_t.lanes|=t,Ts|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,fn=!0),n.memoizedState=t)}function IM(n,e){var t=Ke;Ke=t!==0&&4>t?t:4,n(!0);var i=sf.transition;sf.transition={};try{n(!1),e()}finally{Ke=t,sf.transition=i}}function yv(){return Qn().memoizedState}function UM(n,e,t){var i=Rr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},Sv(n))Mv(e,t);else if(t=nv(n,e,t,i),t!==null){var r=an();ci(t,n,i,r),Ev(t,e,i)}}function OM(n,e,t){var i=Rr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(Sv(n))Mv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,fi(a,o)){var l=e.interleaved;l===null?(r.next=r,Hh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=nv(n,e,r,i),t!==null&&(r=an(),ci(t,n,i,r),Ev(t,e,i))}}function Sv(n){var e=n.alternate;return n===_t||e!==null&&e===_t}function Mv(n,e){Aa=Wu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function Ev(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,Ch(n,t)}}var Xu={readContext:Zn,useCallback:Xt,useContext:Xt,useEffect:Xt,useImperativeHandle:Xt,useInsertionEffect:Xt,useLayoutEffect:Xt,useMemo:Xt,useReducer:Xt,useRef:Xt,useState:Xt,useDebugValue:Xt,useDeferredValue:Xt,useTransition:Xt,useMutableSource:Xt,useSyncExternalStore:Xt,useId:Xt,unstable_isNewReconciler:!1},FM={readContext:Zn,useCallback:function(n,e){return hi().memoizedState=[n,e===void 0?null:e],n},useContext:Zn,useEffect:Cm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,gu(4194308,4,mv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return gu(4194308,4,n,e)},useInsertionEffect:function(n,e){return gu(4,2,n,e)},useMemo:function(n,e){var t=hi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=hi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=UM.bind(null,_t,n),[i.memoizedState,n]},useRef:function(n){var e=hi();return n={current:n},e.memoizedState=n},useState:Am,useDebugValue:Kh,useDeferredValue:function(n){return hi().memoizedState=n},useTransition:function(){var n=Am(!1),e=n[0];return n=IM.bind(null,n[1]),hi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=_t,r=hi();if(ct){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),Ft===null)throw Error(ne(349));Es&30||av(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Cm(uv.bind(null,i,s,n),[n]),i.flags|=2048,Ka(9,lv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=hi(),e=Ft.identifierPrefix;if(ct){var t=Vi,i=Hi;t=(i&~(1<<32-ui(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=qa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=NM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},kM={readContext:Zn,useCallback:gv,useContext:Zn,useEffect:$h,useImperativeHandle:_v,useInsertionEffect:hv,useLayoutEffect:pv,useMemo:vv,useReducer:of,useRef:dv,useState:function(){return of($a)},useDebugValue:Kh,useDeferredValue:function(n){var e=Qn();return xv(e,Rt.memoizedState,n)},useTransition:function(){var n=of($a)[0],e=Qn().memoizedState;return[n,e]},useMutableSource:sv,useSyncExternalStore:ov,useId:yv,unstable_isNewReconciler:!1},zM={readContext:Zn,useCallback:gv,useContext:Zn,useEffect:$h,useImperativeHandle:_v,useInsertionEffect:hv,useLayoutEffect:pv,useMemo:vv,useReducer:af,useRef:dv,useState:function(){return af($a)},useDebugValue:Kh,useDeferredValue:function(n){var e=Qn();return Rt===null?e.memoizedState=n:xv(e,Rt.memoizedState,n)},useTransition:function(){var n=af($a)[0],e=Qn().memoizedState;return[n,e]},useMutableSource:sv,useSyncExternalStore:ov,useId:yv,unstable_isNewReconciler:!1};function si(n,e){if(n&&n.defaultProps){e=gt({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}function bd(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:gt({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var yc={isMounted:function(n){return(n=n._reactInternals)?bs(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=an(),r=Rr(n),s=Wi(i,r);s.payload=e,t!=null&&(s.callback=t),e=Ar(n,s,r),e!==null&&(ci(e,n,r,i),mu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=an(),r=Rr(n),s=Wi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=Ar(n,s,r),e!==null&&(ci(e,n,r,i),mu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=an(),i=Rr(n),r=Wi(t,i);r.tag=2,e!=null&&(r.callback=e),e=Ar(n,r,i),e!==null&&(ci(e,n,i,t),mu(e,n,i))}};function Rm(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Va(t,i)||!Va(r,s):!0}function Tv(n,e,t){var i=!1,r=Ur,s=e.contextType;return typeof s=="object"&&s!==null?s=Zn(s):(r=hn(e)?Ss:tn.current,i=e.contextTypes,s=(i=i!=null)?bo(n,r):Ur),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=yc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Pm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&yc.enqueueReplaceState(e,e.state,null)}function Ld(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs={},Vh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Zn(s):(s=hn(e)?Ss:tn.current,r.context=bo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bd(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&yc.enqueueReplaceState(r,r.state,null),Vu(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function Io(n,e){try{var t="",i=e;do t+=hS(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function lf(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function Dd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var BM=typeof WeakMap=="function"?WeakMap:Map;function wv(n,e,t){t=Wi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){ju||(ju=!0,Vd=i),Dd(n,e)},t}function Av(n,e,t){t=Wi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){Dd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){Dd(n,e),typeof i!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function bm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new BM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=eE.bind(null,n,e,t),e.then(n,n))}function Lm(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Dm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Wi(-1,1),e.tag=2,Ar(t,e,1))),t.lanes|=1),n)}var HM=Qi.ReactCurrentOwner,fn=!1;function sn(n,e,t,i){e.child=n===null?tv(e,null,t,i):Do(e,n.child,t,i)}function Nm(n,e,t,i,r){t=t.render;var s=e.ref;return So(e,r),i=jh(n,e,t,i,s,r),t=qh(),n!==null&&!fn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qi(n,e,r)):(ct&&t&&Uh(e),e.flags|=1,sn(n,e,i,r),e.child)}function Im(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!rp(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Cv(n,e,s,i,r)):(n=Su(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:Va,t(o,i)&&n.ref===e.ref)return qi(n,e,r)}return e.flags|=1,n=Pr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Cv(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(Va(s,i)&&n.ref===e.ref)if(fn=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(fn=!0);else return e.lanes=n.lanes,qi(n,e,r)}return Nd(n,e,t,i,r)}function Rv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},it(ho,An),An|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,it(ho,An),An|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,it(ho,An),An|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,it(ho,An),An|=i;return sn(n,e,r,t),e.child}function Pv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function Nd(n,e,t,i,r){var s=hn(t)?Ss:tn.current;return s=bo(e,s),So(e,r),t=jh(n,e,t,i,s,r),i=qh(),n!==null&&!fn?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,qi(n,e,r)):(ct&&i&&Uh(e),e.flags|=1,sn(n,e,t,r),e.child)}function Um(n,e,t,i,r){if(hn(t)){var s=!0;Fu(e)}else s=!1;if(So(e,r),e.stateNode===null)vu(n,e),Tv(e,t,i),Ld(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Zn(u):(u=hn(t)?Ss:tn.current,u=bo(e,u));var c=t.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Pm(e,o,i,u),cr=!1;var h=e.memoizedState;o.state=h,Vu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||dn.current||cr?(typeof c=="function"&&(bd(e,t,c,i),l=e.memoizedState),(a=cr||Rm(e,t,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,iv(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:si(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Zn(l):(l=hn(t)?Ss:tn.current,l=bo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Pm(e,o,i,l),cr=!1,h=e.memoizedState,o.state=h,Vu(e,i,o,r);var x=e.memoizedState;a!==f||h!==x||dn.current||cr?(typeof p=="function"&&(bd(e,t,p,i),x=e.memoizedState),(u=cr||Rm(e,t,u,i,h,x,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,x,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,x,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=x),o.props=i,o.state=x,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Id(n,e,t,i,s,r)}function Id(n,e,t,i,r,s){Pv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&ym(e,t,!1),qi(n,e,s);i=e.stateNode,HM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=Do(e,n.child,null,s),e.child=Do(e,null,a,s)):sn(n,e,a,s),e.memoizedState=i.state,r&&ym(e,t,!0),e.child}function bv(n){var e=n.stateNode;e.pendingContext?xm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&xm(n,e.context,!1),Gh(n,e.containerInfo)}function Om(n,e,t,i,r){return Lo(),Fh(r),e.flags|=256,sn(n,e,t,i),e.child}var Ud={dehydrated:null,treeContext:null,retryLane:0};function Od(n){return{baseLanes:n,cachePool:null,transitions:null}}function Lv(n,e,t){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),it(ht,r&1),n===null)return Rd(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Ec(o,i,0,null),n=_s(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Od(t),e.memoizedState=Ud,n):Zh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return VM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Pr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Pr(a,s):(s=_s(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Od(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Ud,i}return s=n.child,n=s.sibling,i=Pr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Zh(n,e){return e=Ec({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function Dl(n,e,t,i){return i!==null&&Fh(i),Do(e,n.child,null,t),n=Zh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function VM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=lf(Error(ne(422))),Dl(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Ec({mode:"visible",children:i.children},r,0,null),s=_s(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Do(e,n.child,null,o),e.child.memoizedState=Od(o),e.memoizedState=Ud,s);if(!(e.mode&1))return Dl(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=lf(s,i,void 0),Dl(n,e,o,i)}if(a=(o&n.childLanes)!==0,fn||a){if(i=Ft,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,ji(n,r),ci(i,n,r,-1))}return ip(),i=lf(Error(ne(421))),Dl(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=tE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,bn=wr(r.nextSibling),Dn=e,ct=!0,ai=null,n!==null&&(Vn[Gn++]=Hi,Vn[Gn++]=Vi,Vn[Gn++]=Ms,Hi=n.id,Vi=n.overflow,Ms=e),e=Zh(e,i.children),e.flags|=4096,e)}function Fm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),Pd(n.return,e,t)}function uf(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Dv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(n,e,i.children,t),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Fm(n,t,e);else if(n.tag===19)Fm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(it(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&Gu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),uf(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&Gu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}uf(e,!0,t,null,s);break;case"together":uf(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function vu(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function qi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),Ts|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=Pr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Pr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function GM(n,e,t){switch(e.tag){case 3:bv(e),Lo();break;case 5:rv(e);break;case 1:hn(e.type)&&Fu(e);break;case 4:Gh(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;it(Bu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(it(ht,ht.current&1),e.flags|=128,null):t&e.child.childLanes?Lv(n,e,t):(it(ht,ht.current&1),n=qi(n,e,t),n!==null?n.sibling:null);it(ht,ht.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Dv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),it(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,Rv(n,e,t)}return qi(n,e,t)}var Nv,Fd,Iv,Uv;Nv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Fd=function(){};Iv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,fs(Ei.current);var s=null;switch(t){case"input":r=sd(n,r),i=sd(n,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=ld(n,r),i=ld(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Uu)}cd(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ua.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ua.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&st("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Uv=function(n,e,t,i){t!==i&&(e.flags|=4)};function sa(n,e){if(!ct)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Yt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function WM(n,e,t){var i=e.pendingProps;switch(Oh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return hn(e.type)&&Ou(),Yt(e),null;case 3:return i=e.stateNode,No(),at(dn),at(tn),Xh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(bl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ai!==null&&(Xd(ai),ai=null))),Fd(n,e),Yt(e),null;case 5:Wh(e);var r=fs(ja.current);if(t=e.type,n!==null&&e.stateNode!=null)Iv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Yt(e),null}if(n=fs(Ei.current),bl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[gi]=e,i[Xa]=s,n=(e.mode&1)!==0,t){case"dialog":st("cancel",i),st("close",i);break;case"iframe":case"object":case"embed":st("load",i);break;case"video":case"audio":for(r=0;r<_a.length;r++)st(_a[r],i);break;case"source":st("error",i);break;case"img":case"image":case"link":st("error",i),st("load",i);break;case"details":st("toggle",i);break;case"input":Yp(i,s),st("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},st("invalid",i);break;case"textarea":qp(i,s),st("invalid",i)}cd(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Pl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Pl(i.textContent,a,n),r=["children",""+a]):Ua.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&st("scroll",i)}switch(t){case"input":Sl(i),jp(i,s,!0);break;case"textarea":Sl(i),$p(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Uu)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=u0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[gi]=e,n[Xa]=i,Nv(n,e,!1,!1),e.stateNode=n;e:{switch(o=fd(t,i),t){case"dialog":st("cancel",n),st("close",n),r=i;break;case"iframe":case"object":case"embed":st("load",n),r=i;break;case"video":case"audio":for(r=0;r<_a.length;r++)st(_a[r],n);r=i;break;case"source":st("error",n),r=i;break;case"img":case"image":case"link":st("error",n),st("load",n),r=i;break;case"details":st("toggle",n),r=i;break;case"input":Yp(n,i),r=sd(n,i),st("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),st("invalid",n);break;case"textarea":qp(n,i),r=ld(n,i),st("invalid",n);break;default:r=i}cd(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?d0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&c0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&Oa(n,l):typeof l=="number"&&Oa(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ua.hasOwnProperty(s)?l!=null&&s==="onScroll"&&st("scroll",n):l!=null&&Sh(n,s,l,o))}switch(t){case"input":Sl(n),jp(n,i,!1);break;case"textarea":Sl(n),$p(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ir(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?go(n,!!i.multiple,s,!1):i.defaultValue!=null&&go(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Uu)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(n&&e.stateNode!=null)Uv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=fs(ja.current),fs(Ei.current),bl(e)){if(i=e.stateNode,t=e.memoizedProps,i[gi]=e,(s=i.nodeValue!==t)&&(n=Dn,n!==null))switch(n.tag){case 3:Pl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Pl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[gi]=e,e.stateNode=i}return Yt(e),null;case 13:if(at(ht),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ct&&bn!==null&&e.mode&1&&!(e.flags&128))J0(),Lo(),e.flags|=98560,s=!1;else if(s=bl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[gi]=e}else Lo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else ai!==null&&(Xd(ai),ai=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||ht.current&1?bt===0&&(bt=3):ip())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return No(),Fd(n,e),n===null&&Ga(e.stateNode.containerInfo),Yt(e),null;case 10:return Bh(e.type._context),Yt(e),null;case 17:return hn(e.type)&&Ou(),Yt(e),null;case 19:if(at(ht),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)sa(s,!1);else{if(bt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=Gu(n),o!==null){for(e.flags|=128,sa(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return it(ht,ht.current&1|2),e.child}n=n.sibling}s.tail!==null&&St()>Uo&&(e.flags|=128,i=!0,sa(s,!1),e.lanes=4194304)}else{if(!i)if(n=Gu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),sa(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ct)return Yt(e),null}else 2*St()-s.renderingStartTime>Uo&&t!==1073741824&&(e.flags|=128,i=!0,sa(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=St(),e.sibling=null,t=ht.current,it(ht,i?t&1|2:t&1),e):(Yt(e),null);case 22:case 23:return np(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function XM(n,e){switch(Oh(e),e.tag){case 1:return hn(e.type)&&Ou(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return No(),at(dn),at(tn),Xh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Wh(e),null;case 13:if(at(ht),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Lo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return at(ht),null;case 4:return No(),null;case 10:return Bh(e.type._context),null;case 22:case 23:return np(),null;case 24:return null;default:return null}}var Nl=!1,$t=!1,YM=typeof WeakSet=="function"?WeakSet:Set,de=null;function fo(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){vt(n,e,i)}else t.current=null}function kd(n,e,t){try{t()}catch(i){vt(n,e,i)}}var km=!1;function jM(n,e){if(Sd=Du,n=B0(),Ih(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=n,h=null;t:for(;;){for(var p;f!==t||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(Md={focusedElem:n,selectionRange:t},Du=!1,de=e;de!==null;)if(e=de,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,de=n;else for(;de!==null;){e=de;try{var x=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var _=x.memoizedProps,m=x.memoizedState,d=e.stateNode,g=d.getSnapshotBeforeUpdate(e.elementType===e.type?_:si(e.type,_),m);d.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){vt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,de=n;break}de=e.return}return x=km,km=!1,x}function Ca(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&kd(e,t,s)}r=r.next}while(r!==i)}}function Sc(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function zd(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Ov(n){var e=n.alternate;e!==null&&(n.alternate=null,Ov(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[gi],delete e[Xa],delete e[wd],delete e[PM],delete e[bM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Fv(n){return n.tag===5||n.tag===3||n.tag===4}function zm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Fv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Bd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Uu));else if(i!==4&&(n=n.child,n!==null))for(Bd(n,e,t),n=n.sibling;n!==null;)Bd(n,e,t),n=n.sibling}function Hd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Hd(n,e,t),n=n.sibling;n!==null;)Hd(n,e,t),n=n.sibling}var zt=null,oi=!1;function nr(n,e,t){for(t=t.child;t!==null;)kv(n,e,t),t=t.sibling}function kv(n,e,t){if(Mi&&typeof Mi.onCommitFiberUnmount=="function")try{Mi.onCommitFiberUnmount(hc,t)}catch{}switch(t.tag){case 5:$t||fo(t,e);case 6:var i=zt,r=oi;zt=null,nr(n,e,t),zt=i,oi=r,zt!==null&&(oi?(n=zt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):zt.removeChild(t.stateNode));break;case 18:zt!==null&&(oi?(n=zt,t=t.stateNode,n.nodeType===8?tf(n.parentNode,t):n.nodeType===1&&tf(n,t),Ba(n)):tf(zt,t.stateNode));break;case 4:i=zt,r=oi,zt=t.stateNode.containerInfo,oi=!0,nr(n,e,t),zt=i,oi=r;break;case 0:case 11:case 14:case 15:if(!$t&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&kd(t,e,o),r=r.next}while(r!==i)}nr(n,e,t);break;case 1:if(!$t&&(fo(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){vt(t,e,a)}nr(n,e,t);break;case 21:nr(n,e,t);break;case 22:t.mode&1?($t=(i=$t)||t.memoizedState!==null,nr(n,e,t),$t=i):nr(n,e,t);break;default:nr(n,e,t)}}function Bm(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new YM),e.forEach(function(i){var r=nE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function ti(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:zt=a.stateNode,oi=!1;break e;case 3:zt=a.stateNode.containerInfo,oi=!0;break e;case 4:zt=a.stateNode.containerInfo,oi=!0;break e}a=a.return}if(zt===null)throw Error(ne(160));kv(s,o,r),zt=null,oi=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)zv(e,n),e=e.sibling}function zv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ti(e,n),di(n),i&4){try{Ca(3,n,n.return),Sc(3,n)}catch(_){vt(n,n.return,_)}try{Ca(5,n,n.return)}catch(_){vt(n,n.return,_)}}break;case 1:ti(e,n),di(n),i&512&&t!==null&&fo(t,t.return);break;case 5:if(ti(e,n),di(n),i&512&&t!==null&&fo(t,t.return),n.flags&32){var r=n.stateNode;try{Oa(r,"")}catch(_){vt(n,n.return,_)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&a0(r,s),fd(a,o);var u=fd(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?d0(r,f):c==="dangerouslySetInnerHTML"?c0(r,f):c==="children"?Oa(r,f):Sh(r,c,f,u)}switch(a){case"input":od(r,s);break;case"textarea":l0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?go(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?go(r,!!s.multiple,s.defaultValue,!0):go(r,!!s.multiple,s.multiple?[]:"",!1))}r[Xa]=s}catch(_){vt(n,n.return,_)}}break;case 6:if(ti(e,n),di(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(_){vt(n,n.return,_)}}break;case 3:if(ti(e,n),di(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{Ba(e.containerInfo)}catch(_){vt(n,n.return,_)}break;case 4:ti(e,n),di(n);break;case 13:ti(e,n),di(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(ep=St())),i&4&&Bm(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?($t=(u=$t)||c,ti(e,n),$t=u):ti(e,n),di(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(de=n,c=n.child;c!==null;){for(f=de=c;de!==null;){switch(h=de,p=h.child,h.tag){case 0:case 11:case 14:case 15:Ca(4,h,h.return);break;case 1:fo(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,x.props=e.memoizedProps,x.state=e.memoizedState,x.componentWillUnmount()}catch(_){vt(i,t,_)}}break;case 5:fo(h,h.return);break;case 22:if(h.memoizedState!==null){Vm(f);continue}}p!==null?(p.return=h,de=p):Vm(f)}c=c.sibling}e:for(c=null,f=n;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=f0("display",o))}catch(_){vt(n,n.return,_)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(_){vt(n,n.return,_)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===n)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===n)break e;for(;f.sibling===null;){if(f.return===null||f.return===n)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ti(e,n),di(n),i&4&&Bm(n);break;case 21:break;default:ti(e,n),di(n)}}function di(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Fv(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Oa(r,""),i.flags&=-33);var s=zm(n);Hd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=zm(n);Bd(n,a,o);break;default:throw Error(ne(161))}}catch(l){vt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function qM(n,e,t){de=n,Bv(n)}function Bv(n,e,t){for(var i=(n.mode&1)!==0;de!==null;){var r=de,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Nl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||$t;a=Nl;var u=$t;if(Nl=o,($t=l)&&!u)for(de=r;de!==null;)o=de,l=o.child,o.tag===22&&o.memoizedState!==null?Gm(r):l!==null?(l.return=o,de=l):Gm(r);for(;s!==null;)de=s,Bv(s),s=s.sibling;de=r,Nl=a,$t=u}Hm(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,de=s):Hm(n)}}function Hm(n){for(;de!==null;){var e=de;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:$t||Sc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!$t)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:si(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&wm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}wm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Ba(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}$t||e.flags&512&&zd(e)}catch(h){vt(e,e.return,h)}}if(e===n){de=null;break}if(t=e.sibling,t!==null){t.return=e.return,de=t;break}de=e.return}}function Vm(n){for(;de!==null;){var e=de;if(e===n){de=null;break}var t=e.sibling;if(t!==null){t.return=e.return,de=t;break}de=e.return}}function Gm(n){for(;de!==null;){var e=de;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{Sc(4,e)}catch(l){vt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{zd(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{zd(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===n){de=null;break}var a=e.sibling;if(a!==null){a.return=e.return,de=a;break}de=e.return}}var $M=Math.ceil,Yu=Qi.ReactCurrentDispatcher,Qh=Qi.ReactCurrentOwner,$n=Qi.ReactCurrentBatchConfig,Ye=0,Ft=null,At=null,Ht=0,An=0,ho=Vr(0),bt=0,Za=null,Ts=0,Mc=0,Jh=0,Ra=null,cn=null,ep=0,Uo=1/0,Oi=null,ju=!1,Vd=null,Cr=null,Il=!1,gr=null,qu=0,Pa=0,Gd=null,xu=-1,yu=0;function an(){return Ye&6?St():xu!==-1?xu:xu=St()}function Rr(n){return n.mode&1?Ye&2&&Ht!==0?Ht&-Ht:DM.transition!==null?(yu===0&&(yu=T0()),yu):(n=Ke,n!==0||(n=window.event,n=n===void 0?16:L0(n.type)),n):1}function ci(n,e,t,i){if(50<Pa)throw Pa=0,Gd=null,Error(ne(185));ll(n,t,i),(!(Ye&2)||n!==Ft)&&(n===Ft&&(!(Ye&2)&&(Mc|=t),bt===4&&hr(n,Ht)),pn(n,i),t===1&&Ye===0&&!(e.mode&1)&&(Uo=St()+500,vc&&Gr()))}function pn(n,e){var t=n.callbackNode;DS(n,e);var i=Lu(n,n===Ft?Ht:0);if(i===0)t!==null&&Qp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Qp(t),e===1)n.tag===0?LM(Wm.bind(null,n)):K0(Wm.bind(null,n)),CM(function(){!(Ye&6)&&Gr()}),t=null;else{switch(w0(i)){case 1:t=Ah;break;case 4:t=M0;break;case 16:t=bu;break;case 536870912:t=E0;break;default:t=bu}t=qv(t,Hv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Hv(n,e){if(xu=-1,yu=0,Ye&6)throw Error(ne(327));var t=n.callbackNode;if(Mo()&&n.callbackNode!==t)return null;var i=Lu(n,n===Ft?Ht:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=$u(n,i);else{e=i;var r=Ye;Ye|=2;var s=Gv();(Ft!==n||Ht!==e)&&(Oi=null,Uo=St()+500,ms(n,e));do try{QM();break}catch(a){Vv(n,a)}while(!0);zh(),Yu.current=s,Ye=r,At!==null?e=0:(Ft=null,Ht=0,e=bt)}if(e!==0){if(e===2&&(r=_d(n),r!==0&&(i=r,e=Wd(n,r))),e===1)throw t=Za,ms(n,0),hr(n,i),pn(n,St()),t;if(e===6)hr(n,i);else{if(r=n.current.alternate,!(i&30)&&!KM(r)&&(e=$u(n,i),e===2&&(s=_d(n),s!==0&&(i=s,e=Wd(n,s))),e===1))throw t=Za,ms(n,0),hr(n,i),pn(n,St()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:rs(n,cn,Oi);break;case 3:if(hr(n,i),(i&130023424)===i&&(e=ep+500-St(),10<e)){if(Lu(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){an(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=Td(rs.bind(null,n,cn,Oi),e);break}rs(n,cn,Oi);break;case 4:if(hr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ui(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=St()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*$M(i/1960))-i,10<i){n.timeoutHandle=Td(rs.bind(null,n,cn,Oi),i);break}rs(n,cn,Oi);break;case 5:rs(n,cn,Oi);break;default:throw Error(ne(329))}}}return pn(n,St()),n.callbackNode===t?Hv.bind(null,n):null}function Wd(n,e){var t=Ra;return n.current.memoizedState.isDehydrated&&(ms(n,e).flags|=256),n=$u(n,e),n!==2&&(e=cn,cn=t,e!==null&&Xd(e)),n}function Xd(n){cn===null?cn=n:cn.push.apply(cn,n)}function KM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!fi(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function hr(n,e){for(e&=~Jh,e&=~Mc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ui(e),i=1<<t;n[t]=-1,e&=~i}}function Wm(n){if(Ye&6)throw Error(ne(327));Mo();var e=Lu(n,0);if(!(e&1))return pn(n,St()),null;var t=$u(n,e);if(n.tag!==0&&t===2){var i=_d(n);i!==0&&(e=i,t=Wd(n,i))}if(t===1)throw t=Za,ms(n,0),hr(n,e),pn(n,St()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,rs(n,cn,Oi),pn(n,St()),null}function tp(n,e){var t=Ye;Ye|=1;try{return n(e)}finally{Ye=t,Ye===0&&(Uo=St()+500,vc&&Gr())}}function ws(n){gr!==null&&gr.tag===0&&!(Ye&6)&&Mo();var e=Ye;Ye|=1;var t=$n.transition,i=Ke;try{if($n.transition=null,Ke=1,n)return n()}finally{Ke=i,$n.transition=t,Ye=e,!(Ye&6)&&Gr()}}function np(){An=ho.current,at(ho)}function ms(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,AM(t)),At!==null)for(t=At.return;t!==null;){var i=t;switch(Oh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ou();break;case 3:No(),at(dn),at(tn),Xh();break;case 5:Wh(i);break;case 4:No();break;case 13:at(ht);break;case 19:at(ht);break;case 10:Bh(i.type._context);break;case 22:case 23:np()}t=t.return}if(Ft=n,At=n=Pr(n.current,null),Ht=An=e,bt=0,Za=null,Jh=Mc=Ts=0,cn=Ra=null,cs!==null){for(e=0;e<cs.length;e++)if(t=cs[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}cs=null}return n}function Vv(n,e){do{var t=At;try{if(zh(),_u.current=Xu,Wu){for(var i=_t.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Wu=!1}if(Es=0,Ut=Rt=_t=null,Aa=!1,qa=0,Qh.current=null,t===null||t.return===null){bt=1,Za=e,At=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Ht,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Lm(o);if(p!==null){p.flags&=-257,Dm(p,o,a,s,e),p.mode&1&&bm(s,u,e),e=p,l=u;var x=e.updateQueue;if(x===null){var _=new Set;_.add(l),e.updateQueue=_}else x.add(l);break e}else{if(!(e&1)){bm(s,u,e),ip();break e}l=Error(ne(426))}}else if(ct&&a.mode&1){var m=Lm(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Dm(m,o,a,s,e),Fh(Io(l,a));break e}}s=l=Io(l,a),bt!==4&&(bt=2),Ra===null?Ra=[s]:Ra.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=wv(s,l,e);Tm(s,d);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Cr===null||!Cr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Av(s,a,e);Tm(s,y);break e}}s=s.return}while(s!==null)}Xv(t)}catch(A){e=A,At===t&&t!==null&&(At=t=t.return);continue}break}while(!0)}function Gv(){var n=Yu.current;return Yu.current=Xu,n===null?Xu:n}function ip(){(bt===0||bt===3||bt===2)&&(bt=4),Ft===null||!(Ts&268435455)&&!(Mc&268435455)||hr(Ft,Ht)}function $u(n,e){var t=Ye;Ye|=2;var i=Gv();(Ft!==n||Ht!==e)&&(Oi=null,ms(n,e));do try{ZM();break}catch(r){Vv(n,r)}while(!0);if(zh(),Ye=t,Yu.current=i,At!==null)throw Error(ne(261));return Ft=null,Ht=0,bt}function ZM(){for(;At!==null;)Wv(At)}function QM(){for(;At!==null&&!ES();)Wv(At)}function Wv(n){var e=jv(n.alternate,n,An);n.memoizedProps=n.pendingProps,e===null?Xv(n):At=e,Qh.current=null}function Xv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=XM(t,e),t!==null){t.flags&=32767,At=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{bt=6,At=null;return}}else if(t=WM(t,e,An),t!==null){At=t;return}if(e=e.sibling,e!==null){At=e;return}At=e=n}while(e!==null);bt===0&&(bt=5)}function rs(n,e,t){var i=Ke,r=$n.transition;try{$n.transition=null,Ke=1,JM(n,e,t,i)}finally{$n.transition=r,Ke=i}return null}function JM(n,e,t,i){do Mo();while(gr!==null);if(Ye&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(NS(n,s),n===Ft&&(At=Ft=null,Ht=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||Il||(Il=!0,qv(bu,function(){return Mo(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=$n.transition,$n.transition=null;var o=Ke;Ke=1;var a=Ye;Ye|=4,Qh.current=null,jM(n,t),zv(t,n),xM(Md),Du=!!Sd,Md=Sd=null,n.current=t,qM(t),TS(),Ye=a,Ke=o,$n.transition=s}else n.current=t;if(Il&&(Il=!1,gr=n,qu=r),s=n.pendingLanes,s===0&&(Cr=null),CS(t.stateNode),pn(n,St()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(ju)throw ju=!1,n=Vd,Vd=null,n;return qu&1&&n.tag!==0&&Mo(),s=n.pendingLanes,s&1?n===Gd?Pa++:(Pa=0,Gd=n):Pa=0,Gr(),null}function Mo(){if(gr!==null){var n=w0(qu),e=$n.transition,t=Ke;try{if($n.transition=null,Ke=16>n?16:n,gr===null)var i=!1;else{if(n=gr,gr=null,qu=0,Ye&6)throw Error(ne(331));var r=Ye;for(Ye|=4,de=n.current;de!==null;){var s=de,o=s.child;if(de.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(de=u;de!==null;){var c=de;switch(c.tag){case 0:case 11:case 15:Ca(8,c,s)}var f=c.child;if(f!==null)f.return=c,de=f;else for(;de!==null;){c=de;var h=c.sibling,p=c.return;if(Ov(c),c===u){de=null;break}if(h!==null){h.return=p,de=h;break}de=p}}}var x=s.alternate;if(x!==null){var _=x.child;if(_!==null){x.child=null;do{var m=_.sibling;_.sibling=null,_=m}while(_!==null)}}de=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,de=o;else e:for(;de!==null;){if(s=de,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ca(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,de=d;break e}de=s.return}}var g=n.current;for(de=g;de!==null;){o=de;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,de=v;else e:for(o=g;de!==null;){if(a=de,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Sc(9,a)}}catch(A){vt(a,a.return,A)}if(a===o){de=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,de=y;break e}de=a.return}}if(Ye=r,Gr(),Mi&&typeof Mi.onPostCommitFiberRoot=="function")try{Mi.onPostCommitFiberRoot(hc,n)}catch{}i=!0}return i}finally{Ke=t,$n.transition=e}}return!1}function Xm(n,e,t){e=Io(t,e),e=wv(n,e,1),n=Ar(n,e,1),e=an(),n!==null&&(ll(n,1,e),pn(n,e))}function vt(n,e,t){if(n.tag===3)Xm(n,n,t);else for(;e!==null;){if(e.tag===3){Xm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Cr===null||!Cr.has(i))){n=Io(t,n),n=Av(e,n,1),e=Ar(e,n,1),n=an(),e!==null&&(ll(e,1,n),pn(e,n));break}}e=e.return}}function eE(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=an(),n.pingedLanes|=n.suspendedLanes&t,Ft===n&&(Ht&t)===t&&(bt===4||bt===3&&(Ht&130023424)===Ht&&500>St()-ep?ms(n,0):Jh|=t),pn(n,e)}function Yv(n,e){e===0&&(n.mode&1?(e=Tl,Tl<<=1,!(Tl&130023424)&&(Tl=4194304)):e=1);var t=an();n=ji(n,e),n!==null&&(ll(n,e,t),pn(n,t))}function tE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Yv(n,t)}function nE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Yv(n,t)}var jv;jv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||dn.current)fn=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return fn=!1,GM(n,e,t);fn=!!(n.flags&131072)}else fn=!1,ct&&e.flags&1048576&&Z0(e,zu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;vu(n,e),n=e.pendingProps;var r=bo(e,tn.current);So(e,t),r=jh(null,e,i,n,r,t);var s=qh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,Fu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Vh(e),r.updater=yc,e.stateNode=r,r._reactInternals=e,Ld(e,i,n,t),e=Id(null,e,i,!0,s,t)):(e.tag=0,ct&&s&&Uh(e),sn(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(vu(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=rE(i),n=si(i,n),r){case 0:e=Nd(null,e,i,n,t);break e;case 1:e=Um(null,e,i,n,t);break e;case 11:e=Nm(null,e,i,n,t);break e;case 14:e=Im(null,e,i,si(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Nd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Um(n,e,i,r,t);case 3:e:{if(bv(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,iv(n,e),Vu(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Io(Error(ne(423)),e),e=Om(n,e,i,t,r);break e}else if(i!==r){r=Io(Error(ne(424)),e),e=Om(n,e,i,t,r);break e}else for(bn=wr(e.stateNode.containerInfo.firstChild),Dn=e,ct=!0,ai=null,t=tv(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Lo(),i===r){e=qi(n,e,t);break e}sn(n,e,i,t)}e=e.child}return e;case 5:return rv(e),n===null&&Rd(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,Ed(i,r)?o=null:s!==null&&Ed(i,s)&&(e.flags|=32),Pv(n,e),sn(n,e,o,t),e.child;case 6:return n===null&&Rd(e),null;case 13:return Lv(n,e,t);case 4:return Gh(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=Do(e,null,i,t):sn(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),Nm(n,e,i,r,t);case 7:return sn(n,e,e.pendingProps,t),e.child;case 8:return sn(n,e,e.pendingProps.children,t),e.child;case 12:return sn(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,it(Bu,i._currentValue),i._currentValue=o,s!==null)if(fi(s.value,o)){if(s.children===r.children&&!dn.current){e=qi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Wi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),Pd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),Pd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,So(e,t),r=Zn(r),i=i(r),e.flags|=1,sn(n,e,i,t),e.child;case 14:return i=e.type,r=si(i,e.pendingProps),r=si(i.type,r),Im(n,e,i,r,t);case 15:return Cv(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:si(i,r),vu(n,e),e.tag=1,hn(i)?(n=!0,Fu(e)):n=!1,So(e,t),Tv(e,i,r),Ld(e,i,r,t),Id(null,e,i,!0,n,t);case 19:return Dv(n,e,t);case 22:return Rv(n,e,t)}throw Error(ne(156,e.tag))};function qv(n,e){return S0(n,e)}function iE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Wn(n,e,t,i){return new iE(n,e,t,i)}function rp(n){return n=n.prototype,!(!n||!n.isReactComponent)}function rE(n){if(typeof n=="function")return rp(n)?1:0;if(n!=null){if(n=n.$$typeof,n===Eh)return 11;if(n===Th)return 14}return 2}function Pr(n,e){var t=n.alternate;return t===null?(t=Wn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function Su(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")rp(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case no:return _s(t.children,r,s,e);case Mh:o=8,r|=8;break;case td:return n=Wn(12,t,e,r|2),n.elementType=td,n.lanes=s,n;case nd:return n=Wn(13,t,e,r),n.elementType=nd,n.lanes=s,n;case id:return n=Wn(19,t,e,r),n.elementType=id,n.lanes=s,n;case r0:return Ec(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case n0:o=10;break e;case i0:o=9;break e;case Eh:o=11;break e;case Th:o=14;break e;case ur:o=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=Wn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function _s(n,e,t,i){return n=Wn(7,n,i,e),n.lanes=t,n}function Ec(n,e,t,i){return n=Wn(22,n,i,e),n.elementType=r0,n.lanes=t,n.stateNode={isHidden:!1},n}function cf(n,e,t){return n=Wn(6,n,null,e),n.lanes=t,n}function ff(n,e,t){return e=Wn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function sE(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wc(0),this.expirationTimes=Wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function sp(n,e,t,i,r,s,o,a,l){return n=new sE(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Wn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Vh(s),n}function oE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:to,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function $v(n){if(!n)return Ur;n=n._reactInternals;e:{if(bs(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(hn(t))return $0(n,t,e)}return e}function Kv(n,e,t,i,r,s,o,a,l){return n=sp(t,i,!0,n,r,s,o,a,l),n.context=$v(null),t=n.current,i=an(),r=Rr(t),s=Wi(i,r),s.callback=e??null,Ar(t,s,r),n.current.lanes=r,ll(n,r,i),pn(n,i),n}function Tc(n,e,t,i){var r=e.current,s=an(),o=Rr(r);return t=$v(t),e.context===null?e.context=t:e.pendingContext=t,e=Wi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=Ar(r,e,o),n!==null&&(ci(n,r,o,s),mu(n,r,o)),o}function Ku(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Ym(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function op(n,e){Ym(n,e),(n=n.alternate)&&Ym(n,e)}function aE(){return null}var Zv=typeof reportError=="function"?reportError:function(n){console.error(n)};function ap(n){this._internalRoot=n}wc.prototype.render=ap.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));Tc(n,e,null,null)};wc.prototype.unmount=ap.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;ws(function(){Tc(null,n,null,null)}),e[Yi]=null}};function wc(n){this._internalRoot=n}wc.prototype.unstable_scheduleHydration=function(n){if(n){var e=R0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<dr.length&&e!==0&&e<dr[t].priority;t++);dr.splice(t,0,n),t===0&&b0(n)}};function lp(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Ac(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function jm(){}function lE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ku(o);s.call(u)}}var o=Kv(e,i,n,0,null,!1,!1,"",jm);return n._reactRootContainer=o,n[Yi]=o.current,Ga(n.nodeType===8?n.parentNode:n),ws(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ku(l);a.call(u)}}var l=sp(n,0,!1,null,null,!1,!1,"",jm);return n._reactRootContainer=l,n[Yi]=l.current,Ga(n.nodeType===8?n.parentNode:n),ws(function(){Tc(e,l,t,i)}),l}function Cc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ku(o);a.call(l)}}Tc(e,o,n,r)}else o=lE(t,e,n,r,i);return Ku(o)}A0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=ma(e.pendingLanes);t!==0&&(Ch(e,t|1),pn(e,St()),!(Ye&6)&&(Uo=St()+500,Gr()))}break;case 13:ws(function(){var i=ji(n,1);if(i!==null){var r=an();ci(i,n,1,r)}}),op(n,1)}};Rh=function(n){if(n.tag===13){var e=ji(n,134217728);if(e!==null){var t=an();ci(e,n,134217728,t)}op(n,134217728)}};C0=function(n){if(n.tag===13){var e=Rr(n),t=ji(n,e);if(t!==null){var i=an();ci(t,n,e,i)}op(n,e)}};R0=function(){return Ke};P0=function(n,e){var t=Ke;try{return Ke=n,e()}finally{Ke=t}};hd=function(n,e,t){switch(e){case"input":if(od(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=gc(i);if(!r)throw Error(ne(90));o0(i),od(i,r)}}}break;case"textarea":l0(n,t);break;case"select":e=t.value,e!=null&&go(n,!!t.multiple,e,!1)}};m0=tp;_0=ws;var uE={usingClientEntryPoint:!1,Events:[cl,oo,gc,h0,p0,tp]},oa={findFiberByHostInstance:us,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},cE={bundleType:oa.bundleType,version:oa.version,rendererPackageName:oa.rendererPackageName,rendererConfig:oa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Qi.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=x0(n),n===null?null:n.stateNode},findFiberByHostInstance:oa.findFiberByHostInstance||aE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ul=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ul.isDisabled&&Ul.supportsFiber)try{hc=Ul.inject(cE),Mi=Ul}catch{}}On.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=uE;On.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!lp(e))throw Error(ne(200));return oE(n,e,null,t)};On.createRoot=function(n,e){if(!lp(n))throw Error(ne(299));var t=!1,i="",r=Zv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=sp(n,1,!1,null,null,t,!1,i,r),n[Yi]=e.current,Ga(n.nodeType===8?n.parentNode:n),new ap(e)};On.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=x0(e),n=n===null?null:n.stateNode,n};On.flushSync=function(n){return ws(n)};On.hydrate=function(n,e,t){if(!Ac(e))throw Error(ne(200));return Cc(null,n,e,!0,t)};On.hydrateRoot=function(n,e,t){if(!lp(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Zv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Kv(e,null,n,1,t??null,r,!1,s,o),n[Yi]=e.current,Ga(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new wc(e)};On.render=function(n,e,t){if(!Ac(e))throw Error(ne(200));return Cc(null,n,e,!1,t)};On.unmountComponentAtNode=function(n){if(!Ac(n))throw Error(ne(40));return n._reactRootContainer?(ws(function(){Cc(null,null,n,!1,function(){n._reactRootContainer=null,n[Yi]=null})}),!0):!1};On.unstable_batchedUpdates=tp;On.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!Ac(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return Cc(n,e,t,!1,i)};On.version="18.3.1-next-f1338f8080-20240426";function Qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Qv)}catch(n){console.error(n)}}Qv(),Qg.exports=On;var fE=Qg.exports,Jv,qm=fE;Jv=qm.createRoot,qm.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const up="164",Is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Us={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},dE=0,$m=1,hE=2,ex=1,pE=2,Ui=3,Or=0,mn=1,Bi=2,br=0,Eo=1,Yd=2,Km=3,Zm=4,mE=5,as=100,_E=101,gE=102,vE=103,xE=104,yE=200,SE=201,ME=202,EE=203,jd=204,qd=205,TE=206,wE=207,AE=208,CE=209,RE=210,PE=211,bE=212,LE=213,DE=214,NE=0,IE=1,UE=2,Zu=3,OE=4,FE=5,kE=6,zE=7,tx=0,BE=1,HE=2,Lr=0,VE=1,GE=2,WE=3,XE=4,YE=5,jE=6,qE=7,nx=300,Oo=301,Fo=302,$d=303,Kd=304,Rc=306,Zd=1e3,ds=1001,Qd=1002,Xn=1003,$E=1004,Ol=1005,li=1006,df=1007,hs=1008,Fr=1009,KE=1010,ZE=1011,ix=1012,rx=1013,ko=1014,vr=1015,Pc=1016,sx=1017,ox=1018,dl=1020,QE=35902,JE=1021,e1=1022,yi=1023,t1=1024,n1=1025,To=1026,Qa=1027,i1=1028,ax=1029,r1=1030,lx=1031,ux=1033,hf=33776,pf=33777,mf=33778,_f=33779,Qm=35840,Jm=35841,e_=35842,t_=35843,n_=36196,i_=37492,r_=37496,s_=37808,o_=37809,a_=37810,l_=37811,u_=37812,c_=37813,f_=37814,d_=37815,h_=37816,p_=37817,m_=37818,__=37819,g_=37820,v_=37821,gf=36492,x_=36494,y_=36495,s1=36283,S_=36284,M_=36285,E_=36286,o1=3200,a1=3201,l1=0,u1=1,pr="",pi="srgb",Wr="srgb-linear",cp="display-p3",bc="display-p3-linear",Qu="linear",ot="srgb",Ju="rec709",ec="p3",Os=7680,T_=519,c1=512,f1=513,d1=514,cx=515,h1=516,p1=517,m1=518,_1=519,w_=35044,A_="300 es",Gi=2e3,tc=2001;class Ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let C_=1234567;const ba=Math.PI/180,Ja=180/Math.PI;function qo(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]).toLowerCase()}function Kt(n,e,t){return Math.max(e,Math.min(t,n))}function fp(n,e){return(n%e+e)%e}function g1(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function v1(n,e,t){return n!==e?(t-n)/(e-n):0}function La(n,e,t){return(1-t)*n+t*e}function x1(n,e,t,i){return La(n,e,1-Math.exp(-t*i))}function y1(n,e=1){return e-Math.abs(fp(n,e*2)-e)}function S1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function M1(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function E1(n,e){return n+Math.floor(Math.random()*(e-n+1))}function T1(n,e){return n+Math.random()*(e-n)}function w1(n){return n*(.5-Math.random())}function A1(n){n!==void 0&&(C_=n);let e=C_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function C1(n){return n*ba}function R1(n){return n*Ja}function P1(n){return(n&n-1)===0&&n!==0}function b1(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function L1(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function D1(n,e,t,i,r){const s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),x=o((i-e)/2);switch(r){case"XYX":n.set(a*c,l*f,l*h,a*u);break;case"YZY":n.set(l*h,a*c,l*f,a*u);break;case"ZXZ":n.set(l*f,l*h,a*c,a*u);break;case"XZX":n.set(a*c,l*x,l*p,a*u);break;case"YXY":n.set(l*p,a*c,l*x,a*u);break;case"ZYZ":n.set(l*x,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function eo(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function nn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const N1={DEG2RAD:ba,RAD2DEG:Ja,generateUUID:qo,clamp:Kt,euclideanModulo:fp,mapLinear:g1,inverseLerp:v1,lerp:La,damp:x1,pingpong:y1,smoothstep:S1,smootherstep:M1,randInt:E1,randFloat:T1,randFloatSpread:w1,seededRandom:A1,degToRad:C1,radToDeg:R1,isPowerOfTwo:P1,ceilPowerOfTwo:b1,floorPowerOfTwo:L1,setQuaternionFromProperEuler:D1,normalize:nn,denormalize:eo};class Ee{constructor(e=0,t=0){Ee.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ne{constructor(e,t,i,r,s,o,a,l,u){Ne.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],x=i[8],_=r[0],m=r[3],d=r[6],g=r[1],v=r[4],y=r[7],A=r[2],w=r[5],E=r[8];return s[0]=o*_+a*g+l*A,s[3]=o*m+a*v+l*w,s[6]=o*d+a*y+l*E,s[1]=u*_+c*g+f*A,s[4]=u*m+c*v+f*w,s[7]=u*d+c*y+f*E,s[2]=h*_+p*g+x*A,s[5]=h*m+p*v+x*w,s[8]=h*d+p*y+x*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,x=t*f+i*h+r*p;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/x;return e[0]=f*_,e[1]=(r*u-c*i)*_,e[2]=(a*i-r*o)*_,e[3]=h*_,e[4]=(c*t-r*l)*_,e[5]=(r*s-a*t)*_,e[6]=p*_,e[7]=(i*l-u*t)*_,e[8]=(o*t-i*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(vf.makeScale(e,t)),this}rotate(e){return this.premultiply(vf.makeRotation(-e)),this}translate(e,t){return this.premultiply(vf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const vf=new Ne;function fx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function nc(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function I1(){const n=nc("canvas");return n.style.display="block",n}const R_={};function U1(n){n in R_||(R_[n]=!0,console.warn(n))}const P_=new Ne().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),b_=new Ne().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Fl={[Wr]:{transfer:Qu,primaries:Ju,toReference:n=>n,fromReference:n=>n},[pi]:{transfer:ot,primaries:Ju,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[bc]:{transfer:Qu,primaries:ec,toReference:n=>n.applyMatrix3(b_),fromReference:n=>n.applyMatrix3(P_)},[cp]:{transfer:ot,primaries:ec,toReference:n=>n.convertSRGBToLinear().applyMatrix3(b_),fromReference:n=>n.applyMatrix3(P_).convertLinearToSRGB()}},O1=new Set([Wr,bc]),et={enabled:!0,_workingColorSpace:Wr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!O1.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Fl[e].toReference,r=Fl[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Fl[n].primaries},getTransfer:function(n){return n===pr?Qu:Fl[n].transfer}};function wo(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Fs;class F1{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Fs===void 0&&(Fs=nc("canvas")),Fs.width=e.width,Fs.height=e.height;const i=Fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Fs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=nc("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=wo(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(wo(t[i]/255)*255):t[i]=wo(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let k1=0;class dx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k1++}),this.uuid=qo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(yf(r[o].image)):s.push(yf(r[o]))}else s=yf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function yf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?F1.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let z1=0;class _n extends Ls{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,i=ds,r=ds,s=li,o=hs,a=yi,l=Fr,u=_n.DEFAULT_ANISOTROPY,c=pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:z1++}),this.uuid=qo(),this.name="",this.source=new dx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ee(0,0),this.repeat=new Ee(1,1),this.center=new Ee(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==nx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Zd:e.x=e.x-Math.floor(e.x);break;case ds:e.x=e.x<0?0:1;break;case Qd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Zd:e.y=e.y-Math.floor(e.y);break;case ds:e.y=e.y<0?0:1;break;case Qd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=nx;_n.DEFAULT_ANISOTROPY=1;class Bt{constructor(e=0,t=0,i=0,r=1){Bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],x=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-_)<.01&&Math.abs(x-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+_)<.1&&Math.abs(x+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(u+1)/2,y=(p+1)/2,A=(d+1)/2,w=(c+h)/4,E=(f+_)/4,P=(x+m)/4;return v>y&&v>A?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=w/i,s=E/i):y>A?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=w/r,s=P/r):A<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(A),i=E/s,r=P/s),this.set(i,r,s,t),this}let g=Math.sqrt((m-x)*(m-x)+(f-_)*(f-_)+(h-c)*(h-c));return Math.abs(g)<.001&&(g=1),this.x=(m-x)/g,this.y=(f-_)/g,this.z=(h-c)/g,this.w=Math.acos((u+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class B1 extends Ls{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Bt(0,0,e,t),this.scissorTest=!1,this.viewport=new Bt(0,0,e,t);const r={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:li,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new _n(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new dx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class As extends B1{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class hx extends _n{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class H1 extends _n{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=ds,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kr{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],x=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=x,e[t+3]=_;return}if(f!==_||l!==h||u!==p||c!==x){let m=1-a;const d=l*h+u*p+c*x+f*_,g=d>=0?1:-1,v=1-d*d;if(v>Number.EPSILON){const A=Math.sqrt(v),w=Math.atan2(A,d*g);m=Math.sin(m*w)/A,a=Math.sin(a*w)/A}const y=a*g;if(l=l*m+h*y,u=u*m+p*y,c=c*m+x*y,f=f*m+_*y,m===1-a){const A=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=A,u*=A,c*=A,f*=A}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],x=s[o+3];return e[t]=a*x+c*f+l*p-u*h,e[t+1]=l*x+c*h+u*f-a*p,e[t+2]=u*x+c*p+a*h-l*f,e[t+3]=c*x-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),x=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*x,this._y=u*p*f-h*c*x,this._z=u*c*x+h*p*f,this._w=u*c*f-h*p*x;break;case"YXZ":this._x=h*c*f+u*p*x,this._y=u*p*f-h*c*x,this._z=u*c*x-h*p*f,this._w=u*c*f+h*p*x;break;case"ZXY":this._x=h*c*f-u*p*x,this._y=u*p*f+h*c*x,this._z=u*c*x+h*p*f,this._w=u*c*f-h*p*x;break;case"ZYX":this._x=h*c*f-u*p*x,this._y=u*p*f+h*c*x,this._z=u*c*x-h*p*f,this._w=u*c*f+h*p*x;break;case"YZX":this._x=h*c*f+u*p*x,this._y=u*p*f+h*c*x,this._z=u*c*x-h*p*f,this._w=u*c*f-h*p*x;break;case"XZY":this._x=h*c*f-u*p*x,this._y=u*p*f-h*c*x,this._z=u*c*x+h*p*f,this._w=u*c*f+h*p*x;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],f=t[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(e=0,t=0,i=0){I.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(L_.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(L_.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*t-s*r),f=2*(s*i-o*t);return this.x=t+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sf.copy(this).projectOnVector(e),this.sub(Sf)}reflect(e){return this.sub(Sf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sf=new I,L_=new kr;class hl{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),kl.copy(i.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),zl.subVectors(this.max,aa),ks.subVectors(e.a,aa),zs.subVectors(e.b,aa),Bs.subVectors(e.c,aa),ir.subVectors(zs,ks),rr.subVectors(Bs,zs),jr.subVectors(ks,Bs);let t=[0,-ir.z,ir.y,0,-rr.z,rr.y,0,-jr.z,jr.y,ir.z,0,-ir.x,rr.z,0,-rr.x,jr.z,0,-jr.x,-ir.y,ir.x,0,-rr.y,rr.x,0,-jr.y,jr.x,0];return!Mf(t,ks,zs,Bs,zl)||(t=[1,0,0,0,1,0,0,0,1],!Mf(t,ks,zs,Bs,zl))?!1:(Bl.crossVectors(ir,rr),t=[Bl.x,Bl.y,Bl.z],Mf(t,ks,zs,Bs,zl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new I,new I,new I,new I,new I,new I,new I,new I],ni=new I,kl=new hl,ks=new I,zs=new I,Bs=new I,ir=new I,rr=new I,jr=new I,aa=new I,zl=new I,Bl=new I,qr=new I;function Mf(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){qr.fromArray(n,s);const a=r.x*Math.abs(qr.x)+r.y*Math.abs(qr.y)+r.z*Math.abs(qr.z),l=e.dot(qr),u=t.dot(qr),c=i.dot(qr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const V1=new hl,la=new I,Ef=new I;class Lc{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):V1.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(la,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ef.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Ef)),this.expandByPoint(la.copy(e.center).sub(Ef))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bi=new I,Tf=new I,Hl=new I,sr=new I,wf=new I,Vl=new I,Af=new I;class dp{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bi.copy(this.origin).addScaledVector(this.direction,t),bi.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Tf.copy(e).add(t).multiplyScalar(.5),Hl.copy(t).sub(e).normalize(),sr.copy(this.origin).sub(Tf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Hl),a=sr.dot(this.direction),l=-sr.dot(Hl),u=sr.lengthSq(),c=Math.abs(1-o*o);let f,h,p,x;if(c>0)if(f=o*l-a,h=o*a-l,x=s*c,f>=0)if(h>=-x)if(h<=x){const _=1/c;f*=_,h*=_,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-x?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=x?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Tf).addScaledVector(Hl,h),p}intersectSphere(e,t){bi.subVectors(e.center,this.origin);const i=bi.dot(this.direction),r=bi.dot(bi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,bi)!==null}intersectTriangle(e,t,i,r,s){wf.subVectors(t,e),Vl.subVectors(i,e),Af.crossVectors(wf,Vl);let o=this.direction.dot(Af),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;sr.subVectors(this.origin,e);const l=a*this.direction.dot(Vl.crossVectors(sr,Vl));if(l<0)return null;const u=a*this.direction.dot(wf.cross(sr));if(u<0||l+u>o)return null;const c=-a*sr.dot(Af);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,i,r,s,o,a,l,u,c,f,h,p,x,_,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,f,h,p,x,_,m)}set(e,t,i,r,s,o,a,l,u,c,f,h,p,x,_,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=x,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Hs.setFromMatrixColumn(e,0).length(),s=1/Hs.setFromMatrixColumn(e,1).length(),o=1/Hs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,x=a*c,_=a*f;t[0]=l*c,t[4]=-l*f,t[8]=u,t[1]=p+x*u,t[5]=h-_*u,t[9]=-a*l,t[2]=_-h*u,t[6]=x+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,x=u*c,_=u*f;t[0]=h+_*a,t[4]=x*a-p,t[8]=o*u,t[1]=o*f,t[5]=o*c,t[9]=-a,t[2]=p*a-x,t[6]=_+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,x=u*c,_=u*f;t[0]=h-_*a,t[4]=-o*f,t[8]=x+p*a,t[1]=p+x*a,t[5]=o*c,t[9]=_-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,x=a*c,_=a*f;t[0]=l*c,t[4]=x*u-p,t[8]=h*u+_,t[1]=l*f,t[5]=_*u+h,t[9]=p*u-x,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,x=a*l,_=a*u;t[0]=l*c,t[4]=_-h*f,t[8]=x*f+p,t[1]=f,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*f+x,t[10]=h-_*f}else if(e.order==="XZY"){const h=o*l,p=o*u,x=a*l,_=a*u;t[0]=l*c,t[4]=-f,t[8]=u*c,t[1]=h*f+_,t[5]=o*c,t[9]=p*f-x,t[2]=x*f-p,t[6]=a*c,t[10]=_*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(G1,e,W1)}lookAt(e,t,i){const r=this.elements;return Tn.subVectors(e,t),Tn.lengthSq()===0&&(Tn.z=1),Tn.normalize(),or.crossVectors(i,Tn),or.lengthSq()===0&&(Math.abs(i.z)===1?Tn.x+=1e-4:Tn.z+=1e-4,Tn.normalize(),or.crossVectors(i,Tn)),or.normalize(),Gl.crossVectors(Tn,or),r[0]=or.x,r[4]=Gl.x,r[8]=Tn.x,r[1]=or.y,r[5]=Gl.y,r[9]=Tn.y,r[2]=or.z,r[6]=Gl.z,r[10]=Tn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],x=i[2],_=i[6],m=i[10],d=i[14],g=i[3],v=i[7],y=i[11],A=i[15],w=r[0],E=r[4],P=r[8],M=r[12],S=r[1],N=r[5],F=r[9],L=r[13],q=r[2],X=r[6],$=r[10],K=r[14],D=r[3],Y=r[7],j=r[11],ie=r[15];return s[0]=o*w+a*S+l*q+u*D,s[4]=o*E+a*N+l*X+u*Y,s[8]=o*P+a*F+l*$+u*j,s[12]=o*M+a*L+l*K+u*ie,s[1]=c*w+f*S+h*q+p*D,s[5]=c*E+f*N+h*X+p*Y,s[9]=c*P+f*F+h*$+p*j,s[13]=c*M+f*L+h*K+p*ie,s[2]=x*w+_*S+m*q+d*D,s[6]=x*E+_*N+m*X+d*Y,s[10]=x*P+_*F+m*$+d*j,s[14]=x*M+_*L+m*K+d*ie,s[3]=g*w+v*S+y*q+A*D,s[7]=g*E+v*N+y*X+A*Y,s[11]=g*P+v*F+y*$+A*j,s[15]=g*M+v*L+y*K+A*ie,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],x=e[3],_=e[7],m=e[11],d=e[15];return x*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+_*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*f-t*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-t*l*f+t*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],x=e[12],_=e[13],m=e[14],d=e[15],g=f*m*u-_*h*u+_*l*p-a*m*p-f*l*d+a*h*d,v=x*h*u-c*m*u-x*l*p+o*m*p+c*l*d-o*h*d,y=c*_*u-x*f*u+x*a*p-o*_*p-c*a*d+o*f*d,A=x*f*l-c*_*l-x*a*h+o*_*h+c*a*m-o*f*m,w=t*g+i*v+r*y+s*A;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/w;return e[0]=g*E,e[1]=(_*h*s-f*m*s-_*r*p+i*m*p+f*r*d-i*h*d)*E,e[2]=(a*m*s-_*l*s+_*r*u-i*m*u-a*r*d+i*l*d)*E,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*E,e[4]=v*E,e[5]=(c*m*s-x*h*s+x*r*p-t*m*p-c*r*d+t*h*d)*E,e[6]=(x*l*s-o*m*s-x*r*u+t*m*u+o*r*d-t*l*d)*E,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*E,e[8]=y*E,e[9]=(x*f*s-c*_*s-x*i*p+t*_*p+c*i*d-t*f*d)*E,e[10]=(o*_*s-x*a*s+x*i*u-t*_*u-o*i*d+t*a*d)*E,e[11]=(c*a*s-o*f*s-c*i*u+t*f*u+o*i*p-t*a*p)*E,e[12]=A*E,e[13]=(c*_*r-x*f*r+x*i*h-t*_*h-c*i*m+t*f*m)*E,e[14]=(x*a*r-o*_*r-x*i*l+t*_*l+o*i*m-t*a*m)*E,e[15]=(o*f*r-c*a*r+c*i*l-t*f*l-o*i*h+t*a*h)*E,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,x=s*f,_=o*c,m=o*f,d=a*f,g=l*u,v=l*c,y=l*f,A=i.x,w=i.y,E=i.z;return r[0]=(1-(_+d))*A,r[1]=(p+y)*A,r[2]=(x-v)*A,r[3]=0,r[4]=(p-y)*w,r[5]=(1-(h+d))*w,r[6]=(m+g)*w,r[7]=0,r[8]=(x+v)*E,r[9]=(m-g)*E,r[10]=(1-(h+_))*E,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Hs.set(r[0],r[1],r[2]).length();const o=Hs.set(r[4],r[5],r[6]).length(),a=Hs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ii.copy(this);const u=1/s,c=1/o,f=1/a;return ii.elements[0]*=u,ii.elements[1]*=u,ii.elements[2]*=u,ii.elements[4]*=c,ii.elements[5]*=c,ii.elements[6]*=c,ii.elements[8]*=f,ii.elements[9]*=f,ii.elements[10]*=f,t.setFromRotationMatrix(ii),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Gi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),f=(t+e)/(t-e),h=(i+r)/(i-r);let p,x;if(a===Gi)p=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===tc)p=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Gi){const l=this.elements,u=1/(t-e),c=1/(i-r),f=1/(o-s),h=(t+e)*u,p=(i+r)*c;let x,_;if(a===Gi)x=(o+s)*f,_=-2*f;else if(a===tc)x=s*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Hs=new I,ii=new Ct,G1=new I(0,0,0),W1=new I(1,1,1),or=new I,Gl=new I,Tn=new I,D_=new Ct,N_=new kr;class $i{constructor(e=0,t=0,i=0,r=$i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return D_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(D_,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return N_.setFromEuler(this),this.setFromQuaternion(N_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$i.DEFAULT_ORDER="XYZ";class px{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let X1=0;const I_=new I,Vs=new kr,Li=new Ct,Wl=new I,ua=new I,Y1=new I,j1=new kr,U_=new I(1,0,0),O_=new I(0,1,0),F_=new I(0,0,1),k_={type:"added"},q1={type:"removed"},Gs={type:"childadded",child:null},Cf={type:"childremoved",child:null};class Qt extends Ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:X1++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new I,t=new $i,i=new kr,r=new I(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ct},normalMatrix:{value:new Ne}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new px,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.multiply(Vs),this}rotateOnWorldAxis(e,t){return Vs.setFromAxisAngle(e,t),this.quaternion.premultiply(Vs),this}rotateX(e){return this.rotateOnAxis(U_,e)}rotateY(e){return this.rotateOnAxis(O_,e)}rotateZ(e){return this.rotateOnAxis(F_,e)}translateOnAxis(e,t){return I_.copy(e).applyQuaternion(this.quaternion),this.position.add(I_.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(U_,e)}translateY(e){return this.translateOnAxis(O_,e)}translateZ(e){return this.translateOnAxis(F_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Wl.copy(e):Wl.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ua.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Li.lookAt(ua,Wl,this.up):Li.lookAt(Wl,ua,this.up),this.quaternion.setFromRotationMatrix(Li),r&&(Li.extractRotation(r.matrixWorld),Vs.setFromRotationMatrix(Li),this.quaternion.premultiply(Vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(k_),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(q1),Cf.child=e,this.dispatchEvent(Cf),Cf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Li.multiply(e.parent.matrixWorld)),e.applyMatrix4(Li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(k_),Gs.child=e,this.dispatchEvent(Gs),Gs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,e,Y1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ua,j1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),x=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),x.length>0&&(i.nodes=x)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new I(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new I,Di=new I,Rf=new I,Ni=new I,Ws=new I,Xs=new I,z_=new I,Pf=new I,bf=new I,Lf=new I;class vi{constructor(e=new I,t=new I,i=new I){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),ri.subVectors(e,t),r.cross(ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){ri.subVectors(r,t),Di.subVectors(i,t),Rf.subVectors(e,t);const o=ri.dot(ri),a=ri.dot(Di),l=ri.dot(Rf),u=Di.dot(Di),c=Di.dot(Rf),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,x=(o*c-a*l)*h;return s.set(1-p-x,x,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Ni)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ni.x),l.addScaledVector(o,Ni.y),l.addScaledVector(a,Ni.z),l)}static isFrontFacing(e,t,i,r){return ri.subVectors(i,t),Di.subVectors(e,t),ri.cross(Di).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ri.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,r,s){return vi.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Ws.subVectors(r,i),Xs.subVectors(s,i),Pf.subVectors(e,i);const l=Ws.dot(Pf),u=Xs.dot(Pf);if(l<=0&&u<=0)return t.copy(i);bf.subVectors(e,r);const c=Ws.dot(bf),f=Xs.dot(bf);if(c>=0&&f<=c)return t.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Ws,o);Lf.subVectors(e,s);const p=Ws.dot(Lf),x=Xs.dot(Lf);if(x>=0&&p<=x)return t.copy(s);const _=p*u-l*x;if(_<=0&&u>=0&&x<=0)return a=u/(u-x),t.copy(i).addScaledVector(Xs,a);const m=c*x-p*f;if(m<=0&&f-c>=0&&p-x>=0)return z_.subVectors(s,r),a=(f-c)/(f-c+(p-x)),t.copy(r).addScaledVector(z_,a);const d=1/(m+_+h);return o=_*d,a=h*d,t.copy(i).addScaledVector(Ws,o).addScaledVector(Xs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ar={h:0,s:0,l:0},Xl={h:0,s:0,l:0};function Df(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=et.workingColorSpace){return this.r=e,this.g=t,this.b=i,et.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=et.workingColorSpace){if(e=fp(e,1),t=Kt(t,0,1),i=Kt(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=Df(o,s,e+1/3),this.g=Df(o,s,e),this.b=Df(o,s,e-1/3)}return et.toWorkingColorSpace(this,r),this}setStyle(e,t=pi){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){const i=mx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wo(e.r),this.g=wo(e.g),this.b=wo(e.b),this}copyLinearToSRGB(e){return this.r=xf(e.r),this.g=xf(e.g),this.b=xf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return et.fromWorkingColorSpace(qt.copy(this),e),Math.round(Kt(qt.r*255,0,255))*65536+Math.round(Kt(qt.g*255,0,255))*256+Math.round(Kt(qt.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.fromWorkingColorSpace(qt.copy(this),t);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=et.workingColorSpace){return et.fromWorkingColorSpace(qt.copy(this),t),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=pi){et.fromWorkingColorSpace(qt.copy(this),e);const t=qt.r,i=qt.g,r=qt.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ar),this.setHSL(ar.h+e,ar.s+t,ar.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ar),e.getHSL(Xl);const i=La(ar.h,Xl.h,t),r=La(ar.s,Xl.s,t),s=La(ar.l,Xl.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new qe;qe.NAMES=mx;let $1=0;class pl extends Ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$1++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=Eo,this.side=Or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jd,this.blendDst=qd,this.blendEquation=as,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qe(0,0,0),this.blendAlpha=0,this.depthFunc=Zu,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=T_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Eo&&(i.blending=this.blending),this.side!==Or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==jd&&(i.blendSrc=this.blendSrc),this.blendDst!==qd&&(i.blendDst=this.blendDst),this.blendEquation!==as&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Zu&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==T_&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class hp extends pl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $i,this.combine=tx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Tt=new I,Yl=new Ee;class Kn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=w_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=vr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return U1("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Yl.fromBufferAttribute(this,t),Yl.applyMatrix3(e),this.setXY(t,Yl.x,Yl.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix3(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyMatrix4(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.applyNormalMatrix(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Tt.fromBufferAttribute(this,t),Tt.transformDirection(e),this.setXYZ(t,Tt.x,Tt.y,Tt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=eo(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=nn(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=eo(t,this.array)),t}setX(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=eo(t,this.array)),t}setY(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=eo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=eo(t,this.array)),t}setW(e,t){return this.normalized&&(t=nn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=nn(t,this.array),i=nn(i,this.array),r=nn(r,this.array),s=nn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==w_&&(e.usage=this.usage),e}}class _x extends Kn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class gx extends Kn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class gn extends Kn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let K1=0;const Bn=new Ct,Nf=new Qt,Ys=new I,wn=new hl,ca=new hl,It=new I;class ei extends Ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:K1++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fx(e)?gx:_x)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Bn.makeRotationFromQuaternion(e),this.applyMatrix4(Bn),this}rotateX(e){return Bn.makeRotationX(e),this.applyMatrix4(Bn),this}rotateY(e){return Bn.makeRotationY(e),this.applyMatrix4(Bn),this}rotateZ(e){return Bn.makeRotationZ(e),this.applyMatrix4(Bn),this}translate(e,t,i){return Bn.makeTranslation(e,t,i),this.applyMatrix4(Bn),this}scale(e,t,i){return Bn.makeScale(e,t,i),this.applyMatrix4(Bn),this}lookAt(e){return Nf.lookAt(e),Nf.updateMatrix(),this.applyMatrix4(Nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new gn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new hl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];wn.setFromBufferAttribute(s),this.morphTargetsRelative?(It.addVectors(this.boundingBox.min,wn.min),this.boundingBox.expandByPoint(It),It.addVectors(this.boundingBox.max,wn.max),this.boundingBox.expandByPoint(It)):(this.boundingBox.expandByPoint(wn.min),this.boundingBox.expandByPoint(wn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){const i=this.boundingSphere.center;if(wn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ca.setFromBufferAttribute(a),this.morphTargetsRelative?(It.addVectors(wn.min,ca.min),wn.expandByPoint(It),It.addVectors(wn.max,ca.max),wn.expandByPoint(It)):(wn.expandByPoint(ca.min),wn.expandByPoint(ca.max))}wn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)It.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(It));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)It.fromBufferAttribute(a,u),l&&(Ys.fromBufferAttribute(e,u),It.add(Ys)),r=Math.max(r,i.distanceToSquared(It))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<i.count;P++)a[P]=new I,l[P]=new I;const u=new I,c=new I,f=new I,h=new Ee,p=new Ee,x=new Ee,_=new I,m=new I;function d(P,M,S){u.fromBufferAttribute(i,P),c.fromBufferAttribute(i,M),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,P),p.fromBufferAttribute(s,M),x.fromBufferAttribute(s,S),c.sub(u),f.sub(u),p.sub(h),x.sub(h);const N=1/(p.x*x.y-x.x*p.y);isFinite(N)&&(_.copy(c).multiplyScalar(x.y).addScaledVector(f,-p.y).multiplyScalar(N),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-x.x).multiplyScalar(N),a[P].add(_),a[M].add(_),a[S].add(_),l[P].add(m),l[M].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let P=0,M=g.length;P<M;++P){const S=g[P],N=S.start,F=S.count;for(let L=N,q=N+F;L<q;L+=3)d(e.getX(L+0),e.getX(L+1),e.getX(L+2))}const v=new I,y=new I,A=new I,w=new I;function E(P){A.fromBufferAttribute(r,P),w.copy(A);const M=a[P];v.copy(M),v.sub(A.multiplyScalar(A.dot(M))).normalize(),y.crossVectors(w,M);const N=y.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,N)}for(let P=0,M=g.length;P<M;++P){const S=g[P],N=S.start,F=S.count;for(let L=N,q=N+F;L<q;L+=3)E(e.getX(L+0)),E(e.getX(L+1)),E(e.getX(L+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Kn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new I,s=new I,o=new I,a=new I,l=new I,u=new I,c=new I,f=new I;if(e)for(let h=0,p=e.count;h<p;h+=3){const x=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,x),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,x),l.fromBufferAttribute(i,_),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)It.fromBufferAttribute(e,t),It.normalize(),e.setXYZ(t,It.x,It.y,It.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,x=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*c;for(let d=0;d<c;d++)h[x++]=u[p++]}return new Kn(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ei,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const B_=new Ct,$r=new dp,jl=new Lc,H_=new I,js=new I,qs=new I,$s=new I,If=new I,ql=new I,$l=new Ee,Kl=new Ee,Zl=new Ee,V_=new I,G_=new I,W_=new I,Ql=new I,Jl=new I;class Yn extends Qt{constructor(e=new ei,t=new hp){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ql.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(If.fromBufferAttribute(f,e),o?ql.addScaledVector(If,c):ql.addScaledVector(If.sub(t),c))}t.add(ql)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),jl.copy(i.boundingSphere),jl.applyMatrix4(s),$r.copy(e.ray).recast(e.near),!(jl.containsPoint($r.origin)===!1&&($r.intersectSphere(jl,H_)===null||$r.origin.distanceToSquared(H_)>(e.far-e.near)**2))&&(B_.copy(s).invert(),$r.copy(e.ray).applyMatrix4(B_),!(i.boundingBox!==null&&$r.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,$r)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const m=h[x],d=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,A=v;y<A;y+=3){const w=a.getX(y),E=a.getX(y+1),P=a.getX(y+2);r=eu(this,d,e,i,u,c,f,w,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=x,d=_;m<d;m+=3){const g=a.getX(m),v=a.getX(m+1),y=a.getX(m+2);r=eu(this,o,e,i,u,c,f,g,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let x=0,_=h.length;x<_;x++){const m=h[x],d=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=g,A=v;y<A;y+=3){const w=y,E=y+1,P=y+2;r=eu(this,d,e,i,u,c,f,w,E,P),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const x=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=x,d=_;m<d;m+=3){const g=m,v=m+1,y=m+2;r=eu(this,o,e,i,u,c,f,g,v,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Z1(n,e,t,i,r,s,o,a){let l;if(e.side===mn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Or,a),l===null)return null;Jl.copy(a),Jl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Jl);return u<t.near||u>t.far?null:{distance:u,point:Jl.clone(),object:n}}function eu(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,js),n.getVertexPosition(l,qs),n.getVertexPosition(u,$s);const c=Z1(n,e,t,i,js,qs,$s,Ql);if(c){r&&($l.fromBufferAttribute(r,a),Kl.fromBufferAttribute(r,l),Zl.fromBufferAttribute(r,u),c.uv=vi.getInterpolation(Ql,js,qs,$s,$l,Kl,Zl,new Ee)),s&&($l.fromBufferAttribute(s,a),Kl.fromBufferAttribute(s,l),Zl.fromBufferAttribute(s,u),c.uv1=vi.getInterpolation(Ql,js,qs,$s,$l,Kl,Zl,new Ee)),o&&(V_.fromBufferAttribute(o,a),G_.fromBufferAttribute(o,l),W_.fromBufferAttribute(o,u),c.normal=vi.getInterpolation(Ql,js,qs,$s,V_,G_,W_,new I),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const f={a,b:l,c:u,normal:new I,materialIndex:0};vi.getNormal(js,qs,$s,f.normal),c.face=f}return c}class ml extends ei{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;x("z","y","x",-1,-1,i,t,e,o,s,0),x("z","y","x",1,-1,i,t,-e,o,s,1),x("x","z","y",1,1,e,i,t,r,o,2),x("x","z","y",1,-1,e,i,-t,r,o,3),x("x","y","z",1,-1,e,t,i,r,s,4),x("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new gn(u,3)),this.setAttribute("normal",new gn(c,3)),this.setAttribute("uv",new gn(f,2));function x(_,m,d,g,v,y,A,w,E,P,M){const S=y/E,N=A/P,F=y/2,L=A/2,q=w/2,X=E+1,$=P+1;let K=0,D=0;const Y=new I;for(let j=0;j<$;j++){const ie=j*N-L;for(let pe=0;pe<X;pe++){const ze=pe*S-F;Y[_]=ze*g,Y[m]=ie*v,Y[d]=q,u.push(Y.x,Y.y,Y.z),Y[_]=0,Y[m]=0,Y[d]=w>0?1:-1,c.push(Y.x,Y.y,Y.z),f.push(pe/E),f.push(1-j/P),K+=1}}for(let j=0;j<P;j++)for(let ie=0;ie<E;ie++){const pe=h+ie+X*j,ze=h+ie+X*(j+1),V=h+(ie+1)+X*(j+1),ee=h+(ie+1)+X*j;l.push(pe,ze,ee),l.push(ze,V,ee),D+=6}a.addGroup(p,D,M),p+=D,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ml(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function rn(n){const e={};for(let t=0;t<n.length;t++){const i=zo(n[t]);for(const r in i)e[r]=i[r]}return e}function Q1(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function vx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const J1={clone:zo,merge:rn};var eT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,tT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class wi extends pl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eT,this.fragmentShader=tT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zo(e.uniforms),this.uniformsGroups=Q1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class xx extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const lr=new I,X_=new Ee,Y_=new Ee;class Rn extends xx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ba*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(ba*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){lr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(lr.x,lr.y).multiplyScalar(-e/lr.z),lr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(lr.x,lr.y).multiplyScalar(-e/lr.z)}getViewSize(e,t){return this.getViewBounds(e,X_,Y_),t.subVectors(Y_,X_)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ba*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ks=-90,Zs=1;class nT extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(Ks,Zs,e,t);r.layers=this.layers,this.add(r);const s=new Rn(Ks,Zs,e,t);s.layers=this.layers,this.add(s);const o=new Rn(Ks,Zs,e,t);o.layers=this.layers,this.add(o);const a=new Rn(Ks,Zs,e,t);a.layers=this.layers,this.add(a);const l=new Rn(Ks,Zs,e,t);l.layers=this.layers,this.add(l);const u=new Rn(Ks,Zs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===tc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,s),e.setRenderTarget(i,1,r),e.render(t,o),e.setRenderTarget(i,2,r),e.render(t,a),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,u),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,r),e.render(t,c),e.setRenderTarget(f,h,p),e.xr.enabled=x,i.texture.needsPMREMUpdate=!0}}class yx extends _n{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Oo,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class iT extends As{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new yx(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:li}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ml(5,5,5),s=new wi({name:"CubemapFromEquirect",uniforms:zo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:br});s.uniforms.tEquirect.value=t;const o=new Yn(r,s),a=t.minFilter;return t.minFilter===hs&&(t.minFilter=li),new nT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Uf=new I,rT=new I,sT=new Ne;class fr{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Uf.subVectors(i,t).cross(rT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Uf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||sT.getNormalMatrix(e),r=this.coplanarPoint(Uf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new Lc,tu=new I;class Sx{constructor(e=new fr,t=new fr,i=new fr,r=new fr,s=new fr,o=new fr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Gi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],x=r[9],_=r[10],m=r[11],d=r[12],g=r[13],v=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-d).normalize(),i[1].setComponents(l+s,h+u,m+p,y+d).normalize(),i[2].setComponents(l+o,h+c,m+x,y+g).normalize(),i[3].setComponents(l-o,h-c,m-x,y-g).normalize(),i[4].setComponents(l-a,h-f,m-_,y-v).normalize(),t===Gi)i[5].setComponents(l+a,h+f,m+_,y+v).normalize();else if(t===tc)i[5].setComponents(a,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(tu.x=r.normal.x>0?e.max.x:e.min.x,tu.y=r.normal.y>0?e.max.y:e.min.y,tu.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(tu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Mx(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function oT(n){const e=new WeakMap;function t(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=n.createBuffer();n.bindBuffer(l,h),n.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=n.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=n.SHORT;else if(u instanceof Uint32Array)p=n.UNSIGNED_INT;else if(u instanceof Int32Array)p=n.INT;else if(u instanceof Int8Array)p=n.BYTE;else if(u instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l._updateRange,h=l.updateRanges;if(n.bindBuffer(u,a),f.count===-1&&h.length===0&&n.bufferSubData(u,0,c),h.length!==0){for(let p=0,x=h.length;p<x;p++){const _=h[p];n.bufferSubData(u,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}f.count!==-1&&(n.bufferSubData(u,f.offset*c.BYTES_PER_ELEMENT,c,f.offset,f.count),f.count=-1),l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(n.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}a.isInterleavedBufferAttribute&&(a=a.data);const u=e.get(a);if(u===void 0)e.set(a,t(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class _l extends ei{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=t/l,p=[],x=[],_=[],m=[];for(let d=0;d<c;d++){const g=d*h-o;for(let v=0;v<u;v++){const y=v*f-s;x.push(y,-g,0),_.push(0,0,1),m.push(v/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let g=0;g<a;g++){const v=g+u*d,y=g+u*(d+1),A=g+1+u*(d+1),w=g+1+u*d;p.push(v,y,w),p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new gn(x,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _l(e.width,e.height,e.widthSegments,e.heightSegments)}}var aT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lT=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,pT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mT=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_T=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,gT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xT=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,yT=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ST=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,MT=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,ET=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,TT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,AT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,CT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,RT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,PT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,bT=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,LT=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,DT=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,NT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,IT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,UT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,OT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,FT="gl_FragColor = linearToOutputTexel( gl_FragColor );",kT=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,zT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,BT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,HT=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,VT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,GT=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,WT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,XT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,YT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qT=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$T=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,KT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ZT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,QT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,JT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ew=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ow=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,aw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lw=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uw=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cw=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,fw=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dw=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,hw=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,_w=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xw=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yw=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mw=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Ew=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Tw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,ww=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Aw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Pw=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,bw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lw=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Nw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Iw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ow=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,kw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,Gw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Ww=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Yw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$w=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Qw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,rA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,aA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,hA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,_A=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yA=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,SA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,EA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,wA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,RA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,PA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,LA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,OA=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,FA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,kA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,De={alphahash_fragment:aT,alphahash_pars_fragment:lT,alphamap_fragment:uT,alphamap_pars_fragment:cT,alphatest_fragment:fT,alphatest_pars_fragment:dT,aomap_fragment:hT,aomap_pars_fragment:pT,batching_pars_vertex:mT,batching_vertex:_T,begin_vertex:gT,beginnormal_vertex:vT,bsdfs:xT,iridescence_fragment:yT,bumpmap_pars_fragment:ST,clipping_planes_fragment:MT,clipping_planes_pars_fragment:ET,clipping_planes_pars_vertex:TT,clipping_planes_vertex:wT,color_fragment:AT,color_pars_fragment:CT,color_pars_vertex:RT,color_vertex:PT,common:bT,cube_uv_reflection_fragment:LT,defaultnormal_vertex:DT,displacementmap_pars_vertex:NT,displacementmap_vertex:IT,emissivemap_fragment:UT,emissivemap_pars_fragment:OT,colorspace_fragment:FT,colorspace_pars_fragment:kT,envmap_fragment:zT,envmap_common_pars_fragment:BT,envmap_pars_fragment:HT,envmap_pars_vertex:VT,envmap_physical_pars_fragment:JT,envmap_vertex:GT,fog_vertex:WT,fog_pars_vertex:XT,fog_fragment:YT,fog_pars_fragment:jT,gradientmap_pars_fragment:qT,lightmap_pars_fragment:$T,lights_lambert_fragment:KT,lights_lambert_pars_fragment:ZT,lights_pars_begin:QT,lights_toon_fragment:ew,lights_toon_pars_fragment:tw,lights_phong_fragment:nw,lights_phong_pars_fragment:iw,lights_physical_fragment:rw,lights_physical_pars_fragment:sw,lights_fragment_begin:ow,lights_fragment_maps:aw,lights_fragment_end:lw,logdepthbuf_fragment:uw,logdepthbuf_pars_fragment:cw,logdepthbuf_pars_vertex:fw,logdepthbuf_vertex:dw,map_fragment:hw,map_pars_fragment:pw,map_particle_fragment:mw,map_particle_pars_fragment:_w,metalnessmap_fragment:gw,metalnessmap_pars_fragment:vw,morphinstance_vertex:xw,morphcolor_vertex:yw,morphnormal_vertex:Sw,morphtarget_pars_vertex:Mw,morphtarget_vertex:Ew,normal_fragment_begin:Tw,normal_fragment_maps:ww,normal_pars_fragment:Aw,normal_pars_vertex:Cw,normal_vertex:Rw,normalmap_pars_fragment:Pw,clearcoat_normal_fragment_begin:bw,clearcoat_normal_fragment_maps:Lw,clearcoat_pars_fragment:Dw,iridescence_pars_fragment:Nw,opaque_fragment:Iw,packing:Uw,premultiplied_alpha_fragment:Ow,project_vertex:Fw,dithering_fragment:kw,dithering_pars_fragment:zw,roughnessmap_fragment:Bw,roughnessmap_pars_fragment:Hw,shadowmap_pars_fragment:Vw,shadowmap_pars_vertex:Gw,shadowmap_vertex:Ww,shadowmask_pars_fragment:Xw,skinbase_vertex:Yw,skinning_pars_vertex:jw,skinning_vertex:qw,skinnormal_vertex:$w,specularmap_fragment:Kw,specularmap_pars_fragment:Zw,tonemapping_fragment:Qw,tonemapping_pars_fragment:Jw,transmission_fragment:eA,transmission_pars_fragment:tA,uv_pars_fragment:nA,uv_pars_vertex:iA,uv_vertex:rA,worldpos_vertex:sA,background_vert:oA,background_frag:aA,backgroundCube_vert:lA,backgroundCube_frag:uA,cube_vert:cA,cube_frag:fA,depth_vert:dA,depth_frag:hA,distanceRGBA_vert:pA,distanceRGBA_frag:mA,equirect_vert:_A,equirect_frag:gA,linedashed_vert:vA,linedashed_frag:xA,meshbasic_vert:yA,meshbasic_frag:SA,meshlambert_vert:MA,meshlambert_frag:EA,meshmatcap_vert:TA,meshmatcap_frag:wA,meshnormal_vert:AA,meshnormal_frag:CA,meshphong_vert:RA,meshphong_frag:PA,meshphysical_vert:bA,meshphysical_frag:LA,meshtoon_vert:DA,meshtoon_frag:NA,points_vert:IA,points_frag:UA,shadow_vert:OA,shadow_frag:FA,sprite_vert:kA,sprite_frag:zA},ae={common:{diffuse:{value:new qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ee(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new qe(16777215)},opacity:{value:1},center:{value:new Ee(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},_i={basic:{uniforms:rn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:rn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new qe(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:rn([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new qe(0)},specular:{value:new qe(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:rn([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:rn([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new qe(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:rn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:rn([ae.points,ae.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:rn([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:rn([ae.common,ae.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:rn([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:rn([ae.sprite,ae.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:rn([ae.common,ae.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:rn([ae.lights,ae.fog,{color:{value:new qe(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};_i.physical={uniforms:rn([_i.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ee(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ee},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new qe(0)},specularColor:{value:new qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ee},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};const nu={r:0,b:0,g:0},Zr=new $i,BA=new Ct;function HA(n,e,t,i,r,s,o){const a=new qe(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function x(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?t:e).get(v)),v}function _(g){let v=!1;const y=x(g);y===null?d(a,l):y&&y.isColor&&(d(y,1),v=!0);const A=n.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||v)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil)}function m(g,v){const y=x(v);y&&(y.isCubeTexture||y.mapping===Rc)?(c===void 0&&(c=new Yn(new ml(1,1,1),new wi({name:"BackgroundCubeMaterial",uniforms:zo(_i.backgroundCube.uniforms),vertexShader:_i.backgroundCube.vertexShader,fragmentShader:_i.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),Zr.copy(v.backgroundRotation),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),c.material.uniforms.envMap.value=y,c.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(BA.makeRotationFromEuler(Zr)),c.material.toneMapped=et.getTransfer(y.colorSpace)!==ot,(f!==y||h!==y.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,p=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(u===void 0&&(u=new Yn(new _l(2,2),new wi({name:"BackgroundMaterial",uniforms:zo(_i.background.uniforms),vertexShader:_i.background.vertexShader,fragmentShader:_i.background.fragmentShader,side:Or,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=y,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=et.getTransfer(y.colorSpace)!==ot,y.matrixAutoUpdate===!0&&y.updateMatrix(),u.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,p=n.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function d(g,v){g.getRGB(nu,vx(n)),i.buffers.color.setClear(nu.r,nu.g,nu.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,d(a,l)},render:_,addToRenderList:m}}function VA(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,N,F,L,q){let X=!1;const $=f(L,F,N);s!==$&&(s=$,u(s.object)),X=p(S,L,F,q),X&&x(S,L,F,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(X||o)&&(o=!1,y(S,N,F,L),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function l(){return n.createVertexArray()}function u(S){return n.bindVertexArray(S)}function c(S){return n.deleteVertexArray(S)}function f(S,N,F){const L=F.wireframe===!0;let q=i[S.id];q===void 0&&(q={},i[S.id]=q);let X=q[N.id];X===void 0&&(X={},q[N.id]=X);let $=X[L];return $===void 0&&($=h(l()),X[L]=$),$}function h(S){const N=[],F=[],L=[];for(let q=0;q<t;q++)N[q]=0,F[q]=0,L[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:F,attributeDivisors:L,object:S,attributes:{},index:null}}function p(S,N,F,L){const q=s.attributes,X=N.attributes;let $=0;const K=F.getAttributes();for(const D in K)if(K[D].location>=0){const j=q[D];let ie=X[D];if(ie===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(ie=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(ie=S.instanceColor)),j===void 0||j.attribute!==ie||ie&&j.data!==ie.data)return!0;$++}return s.attributesNum!==$||s.index!==L}function x(S,N,F,L){const q={},X=N.attributes;let $=0;const K=F.getAttributes();for(const D in K)if(K[D].location>=0){let j=X[D];j===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(j=S.instanceColor));const ie={};ie.attribute=j,j&&j.data&&(ie.data=j.data),q[D]=ie,$++}s.attributes=q,s.attributesNum=$,s.index=L}function _(){const S=s.newAttributes;for(let N=0,F=S.length;N<F;N++)S[N]=0}function m(S){d(S,0)}function d(S,N){const F=s.newAttributes,L=s.enabledAttributes,q=s.attributeDivisors;F[S]=1,L[S]===0&&(n.enableVertexAttribArray(S),L[S]=1),q[S]!==N&&(n.vertexAttribDivisor(S,N),q[S]=N)}function g(){const S=s.newAttributes,N=s.enabledAttributes;for(let F=0,L=N.length;F<L;F++)N[F]!==S[F]&&(n.disableVertexAttribArray(F),N[F]=0)}function v(S,N,F,L,q,X,$){$===!0?n.vertexAttribIPointer(S,N,F,q,X):n.vertexAttribPointer(S,N,F,L,q,X)}function y(S,N,F,L){_();const q=L.attributes,X=F.getAttributes(),$=N.defaultAttributeValues;for(const K in X){const D=X[K];if(D.location>=0){let Y=q[K];if(Y===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),Y!==void 0){const j=Y.normalized,ie=Y.itemSize,pe=e.get(Y);if(pe===void 0)continue;const ze=pe.buffer,V=pe.type,ee=pe.bytesPerElement,fe=V===n.INT||V===n.UNSIGNED_INT||Y.gpuType===rx;if(Y.isInterleavedBufferAttribute){const oe=Y.data,Be=oe.stride,Ue=Y.offset;if(oe.isInstancedInterleavedBuffer){for(let k=0;k<D.locationSize;k++)d(D.location+k,oe.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let k=0;k<D.locationSize;k++)m(D.location+k);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let k=0;k<D.locationSize;k++)v(D.location+k,ie/D.locationSize,V,j,Be*ee,(Ue+ie/D.locationSize*k)*ee,fe)}else{if(Y.isInstancedBufferAttribute){for(let oe=0;oe<D.locationSize;oe++)d(D.location+oe,Y.meshPerAttribute);S.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let oe=0;oe<D.locationSize;oe++)m(D.location+oe);n.bindBuffer(n.ARRAY_BUFFER,ze);for(let oe=0;oe<D.locationSize;oe++)v(D.location+oe,ie/D.locationSize,V,j,ie*ee,ie/D.locationSize*oe*ee,fe)}}else if($!==void 0){const j=$[K];if(j!==void 0)switch(j.length){case 2:n.vertexAttrib2fv(D.location,j);break;case 3:n.vertexAttrib3fv(D.location,j);break;case 4:n.vertexAttrib4fv(D.location,j);break;default:n.vertexAttrib1fv(D.location,j)}}}}g()}function A(){P();for(const S in i){const N=i[S];for(const F in N){const L=N[F];for(const q in L)c(L[q].object),delete L[q];delete N[F]}delete i[S]}}function w(S){if(i[S.id]===void 0)return;const N=i[S.id];for(const F in N){const L=N[F];for(const q in L)c(L[q].object),delete L[q];delete N[F]}delete i[S.id]}function E(S){for(const N in i){const F=i[N];if(F[S.id]===void 0)continue;const L=F[S.id];for(const q in L)c(L[q].object),delete L[q];delete F[S.id]}}function P(){M(),o=!0,s!==r&&(s=r,u(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:P,resetDefaultState:M,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:m,disableUnusedAttributes:g}}function GA(n,e,t){let i;function r(u){i=u}function s(u,c){n.drawArrays(i,u,c),t.update(c,i,1)}function o(u,c,f){f!==0&&(n.drawArraysInstanced(i,u,c,f),t.update(c,i,f))}function a(u,c,f){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let p=0;p<f;p++)this.render(u[p],c[p]);else{h.multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let x=0;x<f;x++)p+=c[x];t.update(p,i,1)}}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let x=0;x<u.length;x++)o(u[x],c[x],h[x]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let x=0;for(let _=0;_<f;_++)x+=c[_];for(let _=0;_<h.length;_++)t.update(x,i,h[_])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function WA(n,e,t,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==yi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const E=w===Pc&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Fr&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==vr&&!E)}function l(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=t.precision!==void 0?t.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=t.logarithmicDepthBuffer===!0,h=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),_=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),d=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),g=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),y=p>0,A=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:d,maxVaryings:g,maxFragmentUniforms:v,vertexTextures:y,maxSamples:A}}function XA(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new fr,a=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=c(f,h,0)},this.setState=function(f,h,p){const x=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,d=n.get(f);if(!r||x===null||x.length===0||s&&!m)s?c(null):u();else{const g=s?0:i,v=g*4;let y=d.clippingState||null;l.value=y,y=c(x,h,v,p);for(let A=0;A!==v;++A)y[A]=t[A];d.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,x){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,x!==!0||m===null){const d=p+_*4,g=h.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<d)&&(m=new Float32Array(d));for(let v=0,y=p;v!==_;++v,y+=4)o.copy(f[v]).applyMatrix4(g,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function YA(n){let e=new WeakMap;function t(o,a){return a===$d?o.mapping=Oo:a===Kd&&(o.mapping=Fo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===$d||a===Kd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new iT(l.height);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class jA extends xx{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const po=4,j_=[.125,.215,.35,.446,.526,.582],ls=20,Of=new jA,q_=new qe;let Ff=null,kf=0,zf=0,Bf=!1;const ss=(1+Math.sqrt(5))/2,Qs=1/ss,$_=[new I(-ss,Qs,0),new I(ss,Qs,0),new I(-Qs,0,ss),new I(Qs,0,ss),new I(0,ss,-Qs),new I(0,ss,Qs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class K_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ff=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=J_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Q_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ff,kf,zf),this._renderer.xr.enabled=Bf,e.scissorTest=!1,iu(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Oo||e.mapping===Fo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ff=this._renderer.getRenderTarget(),kf=this._renderer.getActiveCubeFace(),zf=this._renderer.getActiveMipmapLevel(),Bf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:li,minFilter:li,generateMipmaps:!1,type:Pc,format:yi,colorSpace:Wr,depthBuffer:!1},r=Z_(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Z_(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qA(s)),this._blurMaterial=$A(s,e,t)}return r}_compileMaterial(e){const t=new Yn(this._lodPlanes[0],e);this._renderer.compile(t,Of)}_sceneToCubeUV(e,t,i,r){const a=new Rn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(q_),c.toneMapping=Lr,c.autoClear=!1;const p=new hp({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),x=new Yn(new ml,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(q_),_=!0);for(let d=0;d<6;d++){const g=d%3;g===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):g===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const v=this._cubeSize;iu(r,g*v,d>2?v:0,v,v),c.setRenderTarget(r),_&&c.render(x,a),c.render(e,a)}x.geometry.dispose(),x.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Oo||e.mapping===Fo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=J_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Q_());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Yn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;iu(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Of)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$_[(r-s-1)%$_.length];this._blur(e,s-1,s,o,a)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new Yn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,x=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ls-1),_=s/x,m=isFinite(s)?1+Math.floor(c*_):ls;m>ls&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ls}`);const d=[];let g=0;for(let E=0;E<ls;++E){const P=E/_,M=Math.exp(-P*P/2);d.push(M),E===0?g+=M:E<m&&(g+=2*M)}for(let E=0;E<d.length;E++)d[E]=d[E]/g;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:v}=this;h.dTheta.value=x,h.mipInt.value=v-i;const y=this._sizeLods[r],A=3*y*(r>v-po?r-v+po:0),w=4*(this._cubeSize-y);iu(t,A,w,3*y,2*y),l.setRenderTarget(t),l.render(f,Of)}}function qA(n){const e=[],t=[],i=[];let r=n;const s=n-po+1+j_.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-po?l=j_[o-n+po-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,x=6,_=3,m=2,d=1,g=new Float32Array(_*x*p),v=new Float32Array(m*x*p),y=new Float32Array(d*x*p);for(let w=0;w<p;w++){const E=w%3*2/3-1,P=w>2?0:-1,M=[E,P,0,E+2/3,P,0,E+2/3,P+1,0,E,P,0,E+2/3,P+1,0,E,P+1,0];g.set(M,_*x*w),v.set(h,m*x*w);const S=[w,w,w,w,w,w];y.set(S,d*x*w)}const A=new ei;A.setAttribute("position",new Kn(g,_)),A.setAttribute("uv",new Kn(v,m)),A.setAttribute("faceIndex",new Kn(y,d)),e.push(A),r>po&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Z_(n,e,t){const i=new As(n,e,t);return i.texture.mapping=Rc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function iu(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function $A(n,e,t){const i=new Float32Array(ls),r=new I(0,1,0);return new wi({name:"SphericalGaussianBlur",defines:{n:ls,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function Q_(){return new wi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function J_(){return new wi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:br,depthTest:!1,depthWrite:!1})}function pp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function KA(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===$d||l===Kd,c=l===Oo||l===Fo;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return t===null&&(t=new K_(n)),f=u?t.fromEquirectangular(a,f):t.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(t===null&&(t=new K_(n)),f=u?t.fromEquirectangular(a):t.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function ZA(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function QA(n,e,t,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const x in h.attributes)e.remove(h.attributes[x]);for(const x in h.morphAttributes){const _=h.morphAttributes[x];for(let m=0,d=_.length;m<d;m++)e.remove(_[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const x in h)e.update(h[x],n.ARRAY_BUFFER);const p=f.morphAttributes;for(const x in p){const _=p[x];for(let m=0,d=_.length;m<d;m++)e.update(_[m],n.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,x=f.attributes.position;let _=0;if(p!==null){const g=p.array;_=p.version;for(let v=0,y=g.length;v<y;v+=3){const A=g[v+0],w=g[v+1],E=g[v+2];h.push(A,w,w,E,E,A)}}else if(x!==void 0){const g=x.array;_=x.version;for(let v=0,y=g.length/3-1;v<y;v+=3){const A=v+0,w=v+1,E=v+2;h.push(A,w,w,E,E,A)}}else return;const m=new(fx(h)?gx:_x)(h,1);m.version=_;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function JA(n,e,t){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){n.drawElements(i,p,s,h*o),t.update(p,i,1)}function u(h,p,x){x!==0&&(n.drawElementsInstanced(i,p,s,h*o,x),t.update(p,i,x))}function c(h,p,x){if(x===0)return;const _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<x;m++)this.render(h[m]/o,p[m]);else{_.multiDrawElementsWEBGL(i,p,0,s,h,0,x);let m=0;for(let d=0;d<x;d++)m+=p[d];t.update(m,i,1)}}function f(h,p,x,_){if(x===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,_,0,x);let d=0;for(let g=0;g<x;g++)d+=p[g];for(let g=0;g<_.length;g++)t.update(d,i,_[g])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function eC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function tC(n,e,t){const i=new WeakMap,r=new Bt;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){P.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const x=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let y=0;x===!0&&(y=1),_===!0&&(y=2),m===!0&&(y=3);let A=a.attributes.position.count*y,w=1;A>e.maxTextureSize&&(w=Math.ceil(A/e.maxTextureSize),A=e.maxTextureSize);const E=new Float32Array(A*w*4*f),P=new hx(E,A,w,f);P.type=vr,P.needsUpdate=!0;const M=y*4;for(let N=0;N<f;N++){const F=d[N],L=g[N],q=v[N],X=A*w*4*N;for(let $=0;$<F.count;$++){const K=$*M;x===!0&&(r.fromBufferAttribute(F,$),E[X+K+0]=r.x,E[X+K+1]=r.y,E[X+K+2]=r.z,E[X+K+3]=0),_===!0&&(r.fromBufferAttribute(L,$),E[X+K+4]=r.x,E[X+K+5]=r.y,E[X+K+6]=r.z,E[X+K+7]=0),m===!0&&(r.fromBufferAttribute(q,$),E[X+K+8]=r.x,E[X+K+9]=r.y,E[X+K+10]=r.z,E[X+K+11]=q.itemSize===4?r.w:1)}}h={count:f,texture:P,size:new Ee(A,w)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,t);else{let x=0;for(let m=0;m<u.length;m++)x+=u[m];const _=a.morphTargetsRelative?1:1-x;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",u)}l.getUniforms().setValue(n,"morphTargetsTexture",h.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",h.size)}return{update:s}}function nC(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}class Ex extends _n{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:To,c!==To&&c!==Qa)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===To&&(i=ko),i===void 0&&c===Qa&&(i=dl),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Xn,this.minFilter=l!==void 0?l:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tx=new _n,wx=new Ex(1,1);wx.compareFunction=cx;const Ax=new hx,Cx=new H1,Rx=new yx,eg=[],tg=[],ng=new Float32Array(16),ig=new Float32Array(9),rg=new Float32Array(4);function $o(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=eg[r];if(s===void 0&&(s=new Float32Array(r),eg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Lt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Dt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Dc(n,e){let t=tg[e];t===void 0&&(t=new Int32Array(e),tg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function iC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function rC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2fv(this.addr,e),Dt(t,e)}}function sC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Lt(t,e))return;n.uniform3fv(this.addr,e),Dt(t,e)}}function oC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4fv(this.addr,e),Dt(t,e)}}function aC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;rg.set(i),n.uniformMatrix2fv(this.addr,!1,rg),Dt(t,i)}}function lC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;ig.set(i),n.uniformMatrix3fv(this.addr,!1,ig),Dt(t,i)}}function uC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Lt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Dt(t,e)}else{if(Lt(t,i))return;ng.set(i),n.uniformMatrix4fv(this.addr,!1,ng),Dt(t,i)}}function cC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function fC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2iv(this.addr,e),Dt(t,e)}}function dC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3iv(this.addr,e),Dt(t,e)}}function hC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4iv(this.addr,e),Dt(t,e)}}function pC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function mC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Lt(t,e))return;n.uniform2uiv(this.addr,e),Dt(t,e)}}function _C(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Lt(t,e))return;n.uniform3uiv(this.addr,e),Dt(t,e)}}function gC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Lt(t,e))return;n.uniform4uiv(this.addr,e),Dt(t,e)}}function vC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r);const s=this.type===n.SAMPLER_2D_SHADOW?wx:Tx;t.setTexture2D(e||s,r)}function xC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Cx,r)}function yC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Rx,r)}function SC(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Ax,r)}function MC(n){switch(n){case 5126:return iC;case 35664:return rC;case 35665:return sC;case 35666:return oC;case 35674:return aC;case 35675:return lC;case 35676:return uC;case 5124:case 35670:return cC;case 35667:case 35671:return fC;case 35668:case 35672:return dC;case 35669:case 35673:return hC;case 5125:return pC;case 36294:return mC;case 36295:return _C;case 36296:return gC;case 35678:case 36198:case 36298:case 36306:case 35682:return vC;case 35679:case 36299:case 36307:return xC;case 35680:case 36300:case 36308:case 36293:return yC;case 36289:case 36303:case 36311:case 36292:return SC}}function EC(n,e){n.uniform1fv(this.addr,e)}function TC(n,e){const t=$o(e,this.size,2);n.uniform2fv(this.addr,t)}function wC(n,e){const t=$o(e,this.size,3);n.uniform3fv(this.addr,t)}function AC(n,e){const t=$o(e,this.size,4);n.uniform4fv(this.addr,t)}function CC(n,e){const t=$o(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function RC(n,e){const t=$o(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function PC(n,e){const t=$o(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function bC(n,e){n.uniform1iv(this.addr,e)}function LC(n,e){n.uniform2iv(this.addr,e)}function DC(n,e){n.uniform3iv(this.addr,e)}function NC(n,e){n.uniform4iv(this.addr,e)}function IC(n,e){n.uniform1uiv(this.addr,e)}function UC(n,e){n.uniform2uiv(this.addr,e)}function OC(n,e){n.uniform3uiv(this.addr,e)}function FC(n,e){n.uniform4uiv(this.addr,e)}function kC(n,e,t){const i=this.cache,r=e.length,s=Dc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Tx,s[o])}function zC(n,e,t){const i=this.cache,r=e.length,s=Dc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Cx,s[o])}function BC(n,e,t){const i=this.cache,r=e.length,s=Dc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Rx,s[o])}function HC(n,e,t){const i=this.cache,r=e.length,s=Dc(t,r);Lt(i,s)||(n.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Ax,s[o])}function VC(n){switch(n){case 5126:return EC;case 35664:return TC;case 35665:return wC;case 35666:return AC;case 35674:return CC;case 35675:return RC;case 35676:return PC;case 5124:case 35670:return bC;case 35667:case 35671:return LC;case 35668:case 35672:return DC;case 35669:case 35673:return NC;case 5125:return IC;case 36294:return UC;case 36295:return OC;case 36296:return FC;case 35678:case 36198:case 36298:case 36306:case 35682:return kC;case 35679:case 36299:case 36307:return zC;case 35680:case 36300:case 36308:case 36293:return BC;case 36289:case 36303:case 36311:case 36292:return HC}}class GC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=MC(t.type)}}class WC{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=VC(t.type)}}class XC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Hf=/(\w+)(\])?(\[|\.)?/g;function sg(n,e){n.seq.push(e),n.map[e.id]=e}function YC(n,e,t){const i=n.name,r=i.length;for(Hf.lastIndex=0;;){const s=Hf.exec(i),o=Hf.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){sg(t,u===void 0?new GC(a,n,e):new WC(a,n,e));break}else{let f=t.map[a];f===void 0&&(f=new XC(a),sg(t,f)),t=f}}}class Mu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);YC(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function og(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const jC=37297;let qC=0;function $C(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function KC(n){const e=et.getPrimaries(et.workingColorSpace),t=et.getPrimaries(n);let i;switch(e===t?i="":e===ec&&t===Ju?i="LinearDisplayP3ToLinearSRGB":e===Ju&&t===ec&&(i="LinearSRGBToLinearDisplayP3"),n){case Wr:case bc:return[i,"LinearTransferOETF"];case pi:case cp:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function ag(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+$C(n.getShaderSource(e),o)}else return r}function ZC(n,e){const t=KC(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function QC(n,e){let t;switch(e){case VE:t="Linear";break;case GE:t="Reinhard";break;case WE:t="OptimizedCineon";break;case XE:t="ACESFilmic";break;case jE:t="AgX";break;case qE:t="Neutral";break;case YE:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function JC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ga).join(`
`)}function eR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function tR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function ga(n){return n!==""}function lg(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ug(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const nR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jd(n){return n.replace(nR,rR)}const iR=new Map;function rR(n,e){let t=De[e];if(t===void 0){const i=iR.get(e);if(i!==void 0)t=De[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jd(t)}const sR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cg(n){return n.replace(sR,oR)}function oR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function fg(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function aR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===ex?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===pE?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Ui&&(e="SHADOWMAP_TYPE_VSM"),e}function lR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Oo:case Fo:e="ENVMAP_TYPE_CUBE";break;case Rc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function uR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Fo:e="ENVMAP_MODE_REFRACTION";break}return e}function cR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tx:e="ENVMAP_BLENDING_MULTIPLY";break;case BE:e="ENVMAP_BLENDING_MIX";break;case HE:e="ENVMAP_BLENDING_ADD";break}return e}function fR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function dR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=aR(t),u=lR(t),c=uR(t),f=cR(t),h=fR(t),p=JC(t),x=eR(s),_=r.createProgram();let m,d,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ga).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x].filter(ga).join(`
`),d.length>0&&(d+=`
`)):(m=[fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ga).join(`
`),d=[fg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,x,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Lr?"#define TONE_MAPPING":"",t.toneMapping!==Lr?De.tonemapping_pars_fragment:"",t.toneMapping!==Lr?QC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.colorspace_pars_fragment,ZC("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ga).join(`
`)),o=Jd(o),o=lg(o,t),o=ug(o,t),a=Jd(a),a=lg(a,t),a=ug(a,t),o=cg(o),a=cg(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===A_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===A_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const v=g+m+o,y=g+d+a,A=og(r,r.VERTEX_SHADER,v),w=og(r,r.FRAGMENT_SHADER,y);r.attachShader(_,A),r.attachShader(_,w),t.index0AttributeName!==void 0?r.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function E(N){if(n.debug.checkShaderErrors){const F=r.getProgramInfoLog(_).trim(),L=r.getShaderInfoLog(A).trim(),q=r.getShaderInfoLog(w).trim();let X=!0,$=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(X=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,_,A,w);else{const K=ag(r,A,"vertex"),D=ag(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+N.name+`
Material Type: `+N.type+`

Program Info Log: `+F+`
`+K+`
`+D)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(L===""||q==="")&&($=!1);$&&(N.diagnostics={runnable:X,programLog:F,vertexShader:{log:L,prefix:m},fragmentShader:{log:q,prefix:d}})}r.deleteShader(A),r.deleteShader(w),P=new Mu(r,_),M=tR(r,_)}let P;this.getUniforms=function(){return P===void 0&&E(this),P};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(_,jC)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qC++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=A,this.fragmentShader=w,this}let hR=0;class pR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new mR(e),t.set(e,i)),i}}class mR{constructor(e){this.id=hR++,this.code=e,this.usedTimes=0}}function _R(n,e,t,i,r,s,o){const a=new px,l=new pR,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return u.add(M),M===0?"uv":`uv${M}`}function m(M,S,N,F,L){const q=F.fog,X=L.geometry,$=M.isMeshStandardMaterial?F.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),D=K&&K.mapping===Rc?K.image.height:null,Y=x[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const j=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ie=j!==void 0?j.length:0;let pe=0;X.morphAttributes.position!==void 0&&(pe=1),X.morphAttributes.normal!==void 0&&(pe=2),X.morphAttributes.color!==void 0&&(pe=3);let ze,V,ee,fe;if(Y){const je=_i[Y];ze=je.vertexShader,V=je.fragmentShader}else ze=M.vertexShader,V=M.fragmentShader,l.update(M),ee=l.getVertexShaderID(M),fe=l.getFragmentShaderID(M);const oe=n.getRenderTarget(),Be=L.isInstancedMesh===!0,Ue=L.isBatchedMesh===!0,k=!!M.map,Ze=!!M.matcap,xe=!!K,Qe=!!M.aoMap,Se=!!M.lightMap,He=!!M.bumpMap,Ce=!!M.normalMap,Ge=!!M.displacementMap,lt=!!M.emissiveMap,b=!!M.metalnessMap,C=!!M.roughnessMap,W=M.anisotropy>0,Z=M.clearcoat>0,J=M.dispersion>0,te=M.iridescence>0,ve=M.sheen>0,ue=M.transmission>0,le=W&&!!M.anisotropyMap,Te=Z&&!!M.clearcoatMap,se=Z&&!!M.clearcoatNormalMap,ge=Z&&!!M.clearcoatRoughnessMap,We=te&&!!M.iridescenceMap,ye=te&&!!M.iridescenceThicknessMap,he=ve&&!!M.sheenColorMap,Re=ve&&!!M.sheenRoughnessMap,Oe=!!M.specularMap,Je=!!M.specularColorMap,be=!!M.specularIntensityMap,T=ue&&!!M.transmissionMap,U=ue&&!!M.thicknessMap,z=!!M.gradientMap,Q=!!M.alphaMap,re=M.alphaTest>0,Pe=!!M.alphaHash,Fe=!!M.extensions;let dt=Lr;M.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(dt=n.toneMapping);const Nt={shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:ze,fragmentShader:V,defines:M.defines,customVertexShaderID:ee,customFragmentShaderID:fe,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Ue,instancing:Be,instancingColor:Be&&L.instanceColor!==null,instancingMorph:Be&&L.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:oe===null?n.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Wr,alphaToCoverage:!!M.alphaToCoverage,map:k,matcap:Ze,envMap:xe,envMapMode:xe&&K.mapping,envMapCubeUVHeight:D,aoMap:Qe,lightMap:Se,bumpMap:He,normalMap:Ce,displacementMap:h&&Ge,emissiveMap:lt,normalMapObjectSpace:Ce&&M.normalMapType===u1,normalMapTangentSpace:Ce&&M.normalMapType===l1,metalnessMap:b,roughnessMap:C,anisotropy:W,anisotropyMap:le,clearcoat:Z,clearcoatMap:Te,clearcoatNormalMap:se,clearcoatRoughnessMap:ge,dispersion:J,iridescence:te,iridescenceMap:We,iridescenceThicknessMap:ye,sheen:ve,sheenColorMap:he,sheenRoughnessMap:Re,specularMap:Oe,specularColorMap:Je,specularIntensityMap:be,transmission:ue,transmissionMap:T,thicknessMap:U,gradientMap:z,opaque:M.transparent===!1&&M.blending===Eo&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:re,alphaHash:Pe,combine:M.combine,mapUv:k&&_(M.map.channel),aoMapUv:Qe&&_(M.aoMap.channel),lightMapUv:Se&&_(M.lightMap.channel),bumpMapUv:He&&_(M.bumpMap.channel),normalMapUv:Ce&&_(M.normalMap.channel),displacementMapUv:Ge&&_(M.displacementMap.channel),emissiveMapUv:lt&&_(M.emissiveMap.channel),metalnessMapUv:b&&_(M.metalnessMap.channel),roughnessMapUv:C&&_(M.roughnessMap.channel),anisotropyMapUv:le&&_(M.anisotropyMap.channel),clearcoatMapUv:Te&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:We&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:ye&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:he&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Re&&_(M.sheenRoughnessMap.channel),specularMapUv:Oe&&_(M.specularMap.channel),specularColorMapUv:Je&&_(M.specularColorMap.channel),specularIntensityMapUv:be&&_(M.specularIntensityMap.channel),transmissionMapUv:T&&_(M.transmissionMap.channel),thicknessMapUv:U&&_(M.thicknessMap.channel),alphaMapUv:Q&&_(M.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(Ce||W),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!X.attributes.uv&&(k||Q),fog:!!q,useFog:M.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:L.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:ie,morphTextureStride:pe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:dt,useLegacyLights:n._useLegacyLights,decodeVideoTexture:k&&M.map.isVideoTexture===!0&&et.getTransfer(M.map.colorSpace)===ot,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Bi,flipSided:M.side===mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Fe&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Fe&&M.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Nt.vertexUv1s=u.has(1),Nt.vertexUv2s=u.has(2),Nt.vertexUv3s=u.has(3),u.clear(),Nt}function d(M){const S=[];if(M.shaderID?S.push(M.shaderID):(S.push(M.customVertexShaderID),S.push(M.customFragmentShaderID)),M.defines!==void 0)for(const N in M.defines)S.push(N),S.push(M.defines[N]);return M.isRawShaderMaterial===!1&&(g(S,M),v(S,M),S.push(n.outputColorSpace)),S.push(M.customProgramCacheKey),S.join()}function g(M,S){M.push(S.precision),M.push(S.outputColorSpace),M.push(S.envMapMode),M.push(S.envMapCubeUVHeight),M.push(S.mapUv),M.push(S.alphaMapUv),M.push(S.lightMapUv),M.push(S.aoMapUv),M.push(S.bumpMapUv),M.push(S.normalMapUv),M.push(S.displacementMapUv),M.push(S.emissiveMapUv),M.push(S.metalnessMapUv),M.push(S.roughnessMapUv),M.push(S.anisotropyMapUv),M.push(S.clearcoatMapUv),M.push(S.clearcoatNormalMapUv),M.push(S.clearcoatRoughnessMapUv),M.push(S.iridescenceMapUv),M.push(S.iridescenceThicknessMapUv),M.push(S.sheenColorMapUv),M.push(S.sheenRoughnessMapUv),M.push(S.specularMapUv),M.push(S.specularColorMapUv),M.push(S.specularIntensityMapUv),M.push(S.transmissionMapUv),M.push(S.thicknessMapUv),M.push(S.combine),M.push(S.fogExp2),M.push(S.sizeAttenuation),M.push(S.morphTargetsCount),M.push(S.morphAttributeCount),M.push(S.numDirLights),M.push(S.numPointLights),M.push(S.numSpotLights),M.push(S.numSpotLightMaps),M.push(S.numHemiLights),M.push(S.numRectAreaLights),M.push(S.numDirLightShadows),M.push(S.numPointLightShadows),M.push(S.numSpotLightShadows),M.push(S.numSpotLightShadowsWithMaps),M.push(S.numLightProbes),M.push(S.shadowMapType),M.push(S.toneMapping),M.push(S.numClippingPlanes),M.push(S.numClipIntersection),M.push(S.depthPacking)}function v(M,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),M.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.useLegacyLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.alphaToCoverage&&a.enable(20),M.push(a.mask)}function y(M){const S=x[M.type];let N;if(S){const F=_i[S];N=J1.clone(F.uniforms)}else N=M.uniforms;return N}function A(M,S){let N;for(let F=0,L=c.length;F<L;F++){const q=c[F];if(q.cacheKey===S){N=q,++N.usedTimes;break}}return N===void 0&&(N=new dR(n,S,M,s),c.push(N)),N}function w(M){if(--M.usedTimes===0){const S=c.indexOf(M);c[S]=c[c.length-1],c.pop(),M.destroy()}}function E(M){l.remove(M)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:y,acquireProgram:A,releaseProgram:w,releaseShaderCache:E,programs:c,dispose:P}}function gR(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function vR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function dg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function hg(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(f,h,p,x,_,m){let d=n[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:x,renderOrder:f.renderOrder,z:_,group:m},n[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=x,d.renderOrder=f.renderOrder,d.z=_,d.group=m),e++,d}function a(f,h,p,x,_,m){const d=o(f,h,p,x,_,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(f,h,p,x,_,m){const d=o(f,h,p,x,_,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function u(f,h){t.length>1&&t.sort(f||vR),i.length>1&&i.sort(h||dg),r.length>1&&r.sort(h||dg)}function c(){for(let f=e,h=n.length;f<h;f++){const p=n[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function xR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new hg,n.set(i,[o])):r>=s.length?(o=new hg,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function yR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new qe};break;case"SpotLight":t={position:new I,direction:new I,color:new qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new qe,groundColor:new qe};break;case"RectAreaLight":t={color:new qe,position:new I,halfWidth:new I,halfHeight:new I};break}return n[e.id]=t,t}}}function SR(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ee,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let MR=0;function ER(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function TR(n){const e=new yR,t=SR(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new I);const r=new I,s=new Ct,o=new Ct;function a(u,c){let f=0,h=0,p=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let x=0,_=0,m=0,d=0,g=0,v=0,y=0,A=0,w=0,E=0,P=0;u.sort(ER);const M=c===!0?Math.PI:1;for(let N=0,F=u.length;N<F;N++){const L=u[N],q=L.color,X=L.intensity,$=L.distance,K=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)f+=q.r*X*M,h+=q.g*X*M,p+=q.b*X*M;else if(L.isLightProbe){for(let D=0;D<9;D++)i.probe[D].addScaledVector(L.sh.coefficients[D],X);P++}else if(L.isDirectionalLight){const D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){const Y=L.shadow,j=t.get(L);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,i.directionalShadow[x]=j,i.directionalShadowMap[x]=K,i.directionalShadowMatrix[x]=L.shadow.matrix,v++}i.directional[x]=D,x++}else if(L.isSpotLight){const D=e.get(L);D.position.setFromMatrixPosition(L.matrixWorld),D.color.copy(q).multiplyScalar(X*M),D.distance=$,D.coneCos=Math.cos(L.angle),D.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),D.decay=L.decay,i.spot[m]=D;const Y=L.shadow;if(L.map&&(i.spotLightMap[w]=L.map,w++,Y.updateMatrices(L),L.castShadow&&E++),i.spotLightMatrix[m]=Y.matrix,L.castShadow){const j=t.get(L);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,i.spotShadow[m]=j,i.spotShadowMap[m]=K,A++}m++}else if(L.isRectAreaLight){const D=e.get(L);D.color.copy(q).multiplyScalar(X),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),i.rectArea[d]=D,d++}else if(L.isPointLight){const D=e.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity*M),D.distance=L.distance,D.decay=L.decay,L.castShadow){const Y=L.shadow,j=t.get(L);j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,i.pointShadow[_]=j,i.pointShadowMap[_]=K,i.pointShadowMatrix[_]=L.shadow.matrix,y++}i.point[_]=D,_++}else if(L.isHemisphereLight){const D=e.get(L);D.skyColor.copy(L.color).multiplyScalar(X*M),D.groundColor.copy(L.groundColor).multiplyScalar(X*M),i.hemi[g]=D,g++}}d>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=p;const S=i.hash;(S.directionalLength!==x||S.pointLength!==_||S.spotLength!==m||S.rectAreaLength!==d||S.hemiLength!==g||S.numDirectionalShadows!==v||S.numPointShadows!==y||S.numSpotShadows!==A||S.numSpotMaps!==w||S.numLightProbes!==P)&&(i.directional.length=x,i.spot.length=m,i.rectArea.length=d,i.point.length=_,i.hemi.length=g,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=A+w-E,i.spotLightMap.length=w,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=P,S.directionalLength=x,S.pointLength=_,S.spotLength=m,S.rectAreaLength=d,S.hemiLength=g,S.numDirectionalShadows=v,S.numPointShadows=y,S.numSpotShadows=A,S.numSpotMaps=w,S.numLightProbes=P,i.version=MR++)}function l(u,c){let f=0,h=0,p=0,x=0,_=0;const m=c.matrixWorldInverse;for(let d=0,g=u.length;d<g;d++){const v=u[d];if(v.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(v.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const y=i.rectArea[x];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),x++}else if(v.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(m),h++}else if(v.isHemisphereLight){const y=i.hemi[_];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:i}}function pg(n){const e=new TR(n),t=[],i=[];function r(c){u.camera=c,t.length=0,i.length=0}function s(c){t.push(c)}function o(c){i.push(c)}function a(c){e.setup(t,c)}function l(c){e.setupView(t,c)}const u={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function wR(n){let e=new WeakMap;function t(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new pg(n),e.set(r,[a])):s>=o.length?(a=new pg(n),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:t,dispose:i}}class AR extends pl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=o1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class CR extends pl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const RR=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,PR=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function bR(n,e,t){let i=new Sx;const r=new Ee,s=new Ee,o=new Bt,a=new AR({depthPacking:a1}),l=new CR,u={},c=t.maxTextureSize,f={[Or]:mn,[mn]:Or,[Bi]:Bi},h=new wi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ee},radius:{value:4}},vertexShader:RR,fragmentShader:PR}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const x=new ei;x.setAttribute("position",new Kn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Yn(x,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ex;let d=this.type;this.render=function(w,E,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;const M=n.getRenderTarget(),S=n.getActiveCubeFace(),N=n.getActiveMipmapLevel(),F=n.state;F.setBlending(br),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const L=d!==Ui&&this.type===Ui,q=d===Ui&&this.type!==Ui;for(let X=0,$=w.length;X<$;X++){const K=w[X],D=K.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const Y=D.getFrameExtents();if(r.multiply(Y),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/Y.x),r.x=s.x*Y.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/Y.y),r.y=s.y*Y.y,D.mapSize.y=s.y)),D.map===null||L===!0||q===!0){const ie=this.type!==Ui?{minFilter:Xn,magFilter:Xn}:{};D.map!==null&&D.map.dispose(),D.map=new As(r.x,r.y,ie),D.map.texture.name=K.name+".shadowMap",D.camera.updateProjectionMatrix()}n.setRenderTarget(D.map),n.clear();const j=D.getViewportCount();for(let ie=0;ie<j;ie++){const pe=D.getViewport(ie);o.set(s.x*pe.x,s.y*pe.y,s.x*pe.z,s.y*pe.w),F.viewport(o),D.updateMatrices(K,ie),i=D.getFrustum(),y(E,P,D.camera,K,this.type)}D.isPointLightShadow!==!0&&this.type===Ui&&g(D,P),D.needsUpdate=!1}d=this.type,m.needsUpdate=!1,n.setRenderTarget(M,S,N)};function g(w,E){const P=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new As(r.x,r.y)),h.uniforms.shadow_pass.value=w.map.texture,h.uniforms.resolution.value=w.mapSize,h.uniforms.radius.value=w.radius,n.setRenderTarget(w.mapPass),n.clear(),n.renderBufferDirect(E,null,P,h,_,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value=w.mapSize,p.uniforms.radius.value=w.radius,n.setRenderTarget(w.map),n.clear(),n.renderBufferDirect(E,null,P,p,_,null)}function v(w,E,P,M){let S=null;const N=P.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)S=N;else if(S=P.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const F=S.uuid,L=E.uuid;let q=u[F];q===void 0&&(q={},u[F]=q);let X=q[L];X===void 0&&(X=S.clone(),q[L]=X,E.addEventListener("dispose",A)),S=X}if(S.visible=E.visible,S.wireframe=E.wireframe,M===Ui?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:f[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=P}return S}function y(w,E,P,M,S){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&S===Ui)&&(!w.frustumCulled||i.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,w.matrixWorld);const L=e.update(w),q=w.material;if(Array.isArray(q)){const X=L.groups;for(let $=0,K=X.length;$<K;$++){const D=X[$],Y=q[D.materialIndex];if(Y&&Y.visible){const j=v(w,Y,M,S);w.onBeforeShadow(n,w,E,P,L,j,D),n.renderBufferDirect(P,null,L,j,w,D),w.onAfterShadow(n,w,E,P,L,j,D)}}}else if(q.visible){const X=v(w,q,M,S);w.onBeforeShadow(n,w,E,P,L,X,null),n.renderBufferDirect(P,null,L,X,w,null),w.onAfterShadow(n,w,E,P,L,X,null)}}const F=w.children;for(let L=0,q=F.length;L<q;L++)y(F[L],E,P,M,S)}function A(w){w.target.removeEventListener("dispose",A);for(const P in u){const M=u[P],S=w.target.uuid;S in M&&(M[S].dispose(),delete M[S])}}}function LR(n){function e(){let T=!1;const U=new Bt;let z=null;const Q=new Bt(0,0,0,0);return{setMask:function(re){z!==re&&!T&&(n.colorMask(re,re,re,re),z=re)},setLocked:function(re){T=re},setClear:function(re,Pe,Fe,dt,Nt){Nt===!0&&(re*=dt,Pe*=dt,Fe*=dt),U.set(re,Pe,Fe,dt),Q.equals(U)===!1&&(n.clearColor(re,Pe,Fe,dt),Q.copy(U))},reset:function(){T=!1,z=null,Q.set(-1,0,0,0)}}}function t(){let T=!1,U=null,z=null,Q=null;return{setTest:function(re){re?fe(n.DEPTH_TEST):oe(n.DEPTH_TEST)},setMask:function(re){U!==re&&!T&&(n.depthMask(re),U=re)},setFunc:function(re){if(z!==re){switch(re){case NE:n.depthFunc(n.NEVER);break;case IE:n.depthFunc(n.ALWAYS);break;case UE:n.depthFunc(n.LESS);break;case Zu:n.depthFunc(n.LEQUAL);break;case OE:n.depthFunc(n.EQUAL);break;case FE:n.depthFunc(n.GEQUAL);break;case kE:n.depthFunc(n.GREATER);break;case zE:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}z=re}},setLocked:function(re){T=re},setClear:function(re){Q!==re&&(n.clearDepth(re),Q=re)},reset:function(){T=!1,U=null,z=null,Q=null}}}function i(){let T=!1,U=null,z=null,Q=null,re=null,Pe=null,Fe=null,dt=null,Nt=null;return{setTest:function(je){T||(je?fe(n.STENCIL_TEST):oe(n.STENCIL_TEST))},setMask:function(je){U!==je&&!T&&(n.stencilMask(je),U=je)},setFunc:function(je,Mt,rt){(z!==je||Q!==Mt||re!==rt)&&(n.stencilFunc(je,Mt,rt),z=je,Q=Mt,re=rt)},setOp:function(je,Mt,rt){(Pe!==je||Fe!==Mt||dt!==rt)&&(n.stencilOp(je,Mt,rt),Pe=je,Fe=Mt,dt=rt)},setLocked:function(je){T=je},setClear:function(je){Nt!==je&&(n.clearStencil(je),Nt=je)},reset:function(){T=!1,U=null,z=null,Q=null,re=null,Pe=null,Fe=null,dt=null,Nt=null}}}const r=new e,s=new t,o=new i,a=new WeakMap,l=new WeakMap;let u={},c={},f=new WeakMap,h=[],p=null,x=!1,_=null,m=null,d=null,g=null,v=null,y=null,A=null,w=new qe(0,0,0),E=0,P=!1,M=null,S=null,N=null,F=null,L=null;const q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,$=0;const K=n.getParameter(n.VERSION);K.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(K)[1]),X=$>=1):K.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),X=$>=2);let D=null,Y={};const j=n.getParameter(n.SCISSOR_BOX),ie=n.getParameter(n.VIEWPORT),pe=new Bt().fromArray(j),ze=new Bt().fromArray(ie);function V(T,U,z,Q){const re=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(T,Pe),n.texParameteri(T,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(T,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Fe=0;Fe<z;Fe++)T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY?n.texImage3D(U,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,re):n.texImage2D(U+Fe,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,re);return Pe}const ee={};ee[n.TEXTURE_2D]=V(n.TEXTURE_2D,n.TEXTURE_2D,1),ee[n.TEXTURE_CUBE_MAP]=V(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ee[n.TEXTURE_2D_ARRAY]=V(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ee[n.TEXTURE_3D]=V(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),fe(n.DEPTH_TEST),s.setFunc(Zu),He(!1),Ce($m),fe(n.CULL_FACE),Qe(br);function fe(T){u[T]!==!0&&(n.enable(T),u[T]=!0)}function oe(T){u[T]!==!1&&(n.disable(T),u[T]=!1)}function Be(T,U){return c[T]!==U?(n.bindFramebuffer(T,U),c[T]=U,T===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=U),T===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=U),!0):!1}function Ue(T,U){let z=h,Q=!1;if(T){z=f.get(U),z===void 0&&(z=[],f.set(U,z));const re=T.textures;if(z.length!==re.length||z[0]!==n.COLOR_ATTACHMENT0){for(let Pe=0,Fe=re.length;Pe<Fe;Pe++)z[Pe]=n.COLOR_ATTACHMENT0+Pe;z.length=re.length,Q=!0}}else z[0]!==n.BACK&&(z[0]=n.BACK,Q=!0);Q&&n.drawBuffers(z)}function k(T){return p!==T?(n.useProgram(T),p=T,!0):!1}const Ze={[as]:n.FUNC_ADD,[_E]:n.FUNC_SUBTRACT,[gE]:n.FUNC_REVERSE_SUBTRACT};Ze[vE]=n.MIN,Ze[xE]=n.MAX;const xe={[yE]:n.ZERO,[SE]:n.ONE,[ME]:n.SRC_COLOR,[jd]:n.SRC_ALPHA,[RE]:n.SRC_ALPHA_SATURATE,[AE]:n.DST_COLOR,[TE]:n.DST_ALPHA,[EE]:n.ONE_MINUS_SRC_COLOR,[qd]:n.ONE_MINUS_SRC_ALPHA,[CE]:n.ONE_MINUS_DST_COLOR,[wE]:n.ONE_MINUS_DST_ALPHA,[PE]:n.CONSTANT_COLOR,[bE]:n.ONE_MINUS_CONSTANT_COLOR,[LE]:n.CONSTANT_ALPHA,[DE]:n.ONE_MINUS_CONSTANT_ALPHA};function Qe(T,U,z,Q,re,Pe,Fe,dt,Nt,je){if(T===br){x===!0&&(oe(n.BLEND),x=!1);return}if(x===!1&&(fe(n.BLEND),x=!0),T!==mE){if(T!==_||je!==P){if((m!==as||v!==as)&&(n.blendEquation(n.FUNC_ADD),m=as,v=as),je)switch(T){case Eo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yd:n.blendFunc(n.ONE,n.ONE);break;case Km:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zm:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}else switch(T){case Eo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Yd:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Km:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Zm:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",T);break}d=null,g=null,y=null,A=null,w.set(0,0,0),E=0,_=T,P=je}return}re=re||U,Pe=Pe||z,Fe=Fe||Q,(U!==m||re!==v)&&(n.blendEquationSeparate(Ze[U],Ze[re]),m=U,v=re),(z!==d||Q!==g||Pe!==y||Fe!==A)&&(n.blendFuncSeparate(xe[z],xe[Q],xe[Pe],xe[Fe]),d=z,g=Q,y=Pe,A=Fe),(dt.equals(w)===!1||Nt!==E)&&(n.blendColor(dt.r,dt.g,dt.b,Nt),w.copy(dt),E=Nt),_=T,P=!1}function Se(T,U){T.side===Bi?oe(n.CULL_FACE):fe(n.CULL_FACE);let z=T.side===mn;U&&(z=!z),He(z),T.blending===Eo&&T.transparent===!1?Qe(br):Qe(T.blending,T.blendEquation,T.blendSrc,T.blendDst,T.blendEquationAlpha,T.blendSrcAlpha,T.blendDstAlpha,T.blendColor,T.blendAlpha,T.premultipliedAlpha),s.setFunc(T.depthFunc),s.setTest(T.depthTest),s.setMask(T.depthWrite),r.setMask(T.colorWrite);const Q=T.stencilWrite;o.setTest(Q),Q&&(o.setMask(T.stencilWriteMask),o.setFunc(T.stencilFunc,T.stencilRef,T.stencilFuncMask),o.setOp(T.stencilFail,T.stencilZFail,T.stencilZPass)),lt(T.polygonOffset,T.polygonOffsetFactor,T.polygonOffsetUnits),T.alphaToCoverage===!0?fe(n.SAMPLE_ALPHA_TO_COVERAGE):oe(n.SAMPLE_ALPHA_TO_COVERAGE)}function He(T){M!==T&&(T?n.frontFace(n.CW):n.frontFace(n.CCW),M=T)}function Ce(T){T!==dE?(fe(n.CULL_FACE),T!==S&&(T===$m?n.cullFace(n.BACK):T===hE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):oe(n.CULL_FACE),S=T}function Ge(T){T!==N&&(X&&n.lineWidth(T),N=T)}function lt(T,U,z){T?(fe(n.POLYGON_OFFSET_FILL),(F!==U||L!==z)&&(n.polygonOffset(U,z),F=U,L=z)):oe(n.POLYGON_OFFSET_FILL)}function b(T){T?fe(n.SCISSOR_TEST):oe(n.SCISSOR_TEST)}function C(T){T===void 0&&(T=n.TEXTURE0+q-1),D!==T&&(n.activeTexture(T),D=T)}function W(T,U,z){z===void 0&&(D===null?z=n.TEXTURE0+q-1:z=D);let Q=Y[z];Q===void 0&&(Q={type:void 0,texture:void 0},Y[z]=Q),(Q.type!==T||Q.texture!==U)&&(D!==z&&(n.activeTexture(z),D=z),n.bindTexture(T,U||ee[T]),Q.type=T,Q.texture=U)}function Z(){const T=Y[D];T!==void 0&&T.type!==void 0&&(n.bindTexture(T.type,null),T.type=void 0,T.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function te(){try{n.compressedTexImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ve(){try{n.texSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ue(){try{n.texSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function le(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function Te(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function se(){try{n.texStorage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ge(){try{n.texStorage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function We(){try{n.texImage2D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function ye(){try{n.texImage3D.apply(n,arguments)}catch(T){console.error("THREE.WebGLState:",T)}}function he(T){pe.equals(T)===!1&&(n.scissor(T.x,T.y,T.z,T.w),pe.copy(T))}function Re(T){ze.equals(T)===!1&&(n.viewport(T.x,T.y,T.z,T.w),ze.copy(T))}function Oe(T,U){let z=l.get(U);z===void 0&&(z=new WeakMap,l.set(U,z));let Q=z.get(T);Q===void 0&&(Q=n.getUniformBlockIndex(U,T.name),z.set(T,Q))}function Je(T,U){const Q=l.get(U).get(T);a.get(U)!==Q&&(n.uniformBlockBinding(U,Q,T.__bindingPointIndex),a.set(U,Q))}function be(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},D=null,Y={},c={},f=new WeakMap,h=[],p=null,x=!1,_=null,m=null,d=null,g=null,v=null,y=null,A=null,w=new qe(0,0,0),E=0,P=!1,M=null,S=null,N=null,F=null,L=null,pe.set(0,0,n.canvas.width,n.canvas.height),ze.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:fe,disable:oe,bindFramebuffer:Be,drawBuffers:Ue,useProgram:k,setBlending:Qe,setMaterial:Se,setFlipSided:He,setCullFace:Ce,setLineWidth:Ge,setPolygonOffset:lt,setScissorTest:b,activeTexture:C,bindTexture:W,unbindTexture:Z,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:We,texImage3D:ye,updateUBOMapping:Oe,uniformBlockBinding:Je,texStorage2D:se,texStorage3D:ge,texSubImage2D:ve,texSubImage3D:ue,compressedTexSubImage2D:le,compressedTexSubImage3D:Te,scissor:he,viewport:Re,reset:be}}function DR(n,e,t,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new Ee,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(b,C){return p?new OffscreenCanvas(b,C):nc("canvas")}function _(b,C,W){let Z=1;const J=lt(b);if((J.width>W||J.height>W)&&(Z=W/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const te=Math.floor(Z*J.width),ve=Math.floor(Z*J.height);f===void 0&&(f=x(te,ve));const ue=C?x(te,ve):f;return ue.width=te,ue.height=ve,ue.getContext("2d").drawImage(b,0,0,te,ve),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+te+"x"+ve+")."),ue}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),b;return b}function m(b){return b.generateMipmaps&&b.minFilter!==Xn&&b.minFilter!==li}function d(b){n.generateMipmap(b)}function g(b,C,W,Z,J=!1){if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let te=C;if(C===n.RED&&(W===n.FLOAT&&(te=n.R32F),W===n.HALF_FLOAT&&(te=n.R16F),W===n.UNSIGNED_BYTE&&(te=n.R8)),C===n.RED_INTEGER&&(W===n.UNSIGNED_BYTE&&(te=n.R8UI),W===n.UNSIGNED_SHORT&&(te=n.R16UI),W===n.UNSIGNED_INT&&(te=n.R32UI),W===n.BYTE&&(te=n.R8I),W===n.SHORT&&(te=n.R16I),W===n.INT&&(te=n.R32I)),C===n.RG&&(W===n.FLOAT&&(te=n.RG32F),W===n.HALF_FLOAT&&(te=n.RG16F),W===n.UNSIGNED_BYTE&&(te=n.RG8)),C===n.RG_INTEGER&&(W===n.UNSIGNED_BYTE&&(te=n.RG8UI),W===n.UNSIGNED_SHORT&&(te=n.RG16UI),W===n.UNSIGNED_INT&&(te=n.RG32UI),W===n.BYTE&&(te=n.RG8I),W===n.SHORT&&(te=n.RG16I),W===n.INT&&(te=n.RG32I)),C===n.RGB&&W===n.UNSIGNED_INT_5_9_9_9_REV&&(te=n.RGB9_E5),C===n.RGBA){const ve=J?Qu:et.getTransfer(Z);W===n.FLOAT&&(te=n.RGBA32F),W===n.HALF_FLOAT&&(te=n.RGBA16F),W===n.UNSIGNED_BYTE&&(te=ve===ot?n.SRGB8_ALPHA8:n.RGBA8),W===n.UNSIGNED_SHORT_4_4_4_4&&(te=n.RGBA4),W===n.UNSIGNED_SHORT_5_5_5_1&&(te=n.RGB5_A1)}return(te===n.R16F||te===n.R32F||te===n.RG16F||te===n.RG32F||te===n.RGBA16F||te===n.RGBA32F)&&e.get("EXT_color_buffer_float"),te}function v(b,C){return m(b)===!0||b.isFramebufferTexture&&b.minFilter!==Xn&&b.minFilter!==li?Math.log2(Math.max(C.width,C.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?C.mipmaps.length:1}function y(b){const C=b.target;C.removeEventListener("dispose",y),w(C),C.isVideoTexture&&c.delete(C)}function A(b){const C=b.target;C.removeEventListener("dispose",A),P(C)}function w(b){const C=i.get(b);if(C.__webglInit===void 0)return;const W=b.source,Z=h.get(W);if(Z){const J=Z[C.__cacheKey];J.usedTimes--,J.usedTimes===0&&E(b),Object.keys(Z).length===0&&h.delete(W)}i.remove(b)}function E(b){const C=i.get(b);n.deleteTexture(C.__webglTexture);const W=b.source,Z=h.get(W);delete Z[C.__cacheKey],o.memory.textures--}function P(b){const C=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(C.__webglFramebuffer[Z]))for(let J=0;J<C.__webglFramebuffer[Z].length;J++)n.deleteFramebuffer(C.__webglFramebuffer[Z][J]);else n.deleteFramebuffer(C.__webglFramebuffer[Z]);C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer[Z])}else{if(Array.isArray(C.__webglFramebuffer))for(let Z=0;Z<C.__webglFramebuffer.length;Z++)n.deleteFramebuffer(C.__webglFramebuffer[Z]);else n.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&n.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&n.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let Z=0;Z<C.__webglColorRenderbuffer.length;Z++)C.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(C.__webglColorRenderbuffer[Z]);C.__webglDepthRenderbuffer&&n.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const W=b.textures;for(let Z=0,J=W.length;Z<J;Z++){const te=i.get(W[Z]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(W[Z])}i.remove(b)}let M=0;function S(){M=0}function N(){const b=M;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),M+=1,b}function F(b){const C=[];return C.push(b.wrapS),C.push(b.wrapT),C.push(b.wrapR||0),C.push(b.magFilter),C.push(b.minFilter),C.push(b.anisotropy),C.push(b.internalFormat),C.push(b.format),C.push(b.type),C.push(b.generateMipmaps),C.push(b.premultiplyAlpha),C.push(b.flipY),C.push(b.unpackAlignment),C.push(b.colorSpace),C.join()}function L(b,C){const W=i.get(b);if(b.isVideoTexture&&Ce(b),b.isRenderTargetTexture===!1&&b.version>0&&W.__version!==b.version){const Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{pe(W,b,C);return}}t.bindTexture(n.TEXTURE_2D,W.__webglTexture,n.TEXTURE0+C)}function q(b,C){const W=i.get(b);if(b.version>0&&W.__version!==b.version){pe(W,b,C);return}t.bindTexture(n.TEXTURE_2D_ARRAY,W.__webglTexture,n.TEXTURE0+C)}function X(b,C){const W=i.get(b);if(b.version>0&&W.__version!==b.version){pe(W,b,C);return}t.bindTexture(n.TEXTURE_3D,W.__webglTexture,n.TEXTURE0+C)}function $(b,C){const W=i.get(b);if(b.version>0&&W.__version!==b.version){ze(W,b,C);return}t.bindTexture(n.TEXTURE_CUBE_MAP,W.__webglTexture,n.TEXTURE0+C)}const K={[Zd]:n.REPEAT,[ds]:n.CLAMP_TO_EDGE,[Qd]:n.MIRRORED_REPEAT},D={[Xn]:n.NEAREST,[$E]:n.NEAREST_MIPMAP_NEAREST,[Ol]:n.NEAREST_MIPMAP_LINEAR,[li]:n.LINEAR,[df]:n.LINEAR_MIPMAP_NEAREST,[hs]:n.LINEAR_MIPMAP_LINEAR},Y={[c1]:n.NEVER,[_1]:n.ALWAYS,[f1]:n.LESS,[cx]:n.LEQUAL,[d1]:n.EQUAL,[m1]:n.GEQUAL,[h1]:n.GREATER,[p1]:n.NOTEQUAL};function j(b,C){if(C.type===vr&&e.has("OES_texture_float_linear")===!1&&(C.magFilter===li||C.magFilter===df||C.magFilter===Ol||C.magFilter===hs||C.minFilter===li||C.minFilter===df||C.minFilter===Ol||C.minFilter===hs)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(b,n.TEXTURE_WRAP_S,K[C.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,K[C.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,K[C.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,D[C.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,D[C.minFilter]),C.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,Y[C.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===Xn||C.minFilter!==Ol&&C.minFilter!==hs||C.type===vr&&e.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||i.get(C).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");n.texParameterf(b,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy}}}function ie(b,C){let W=!1;b.__webglInit===void 0&&(b.__webglInit=!0,C.addEventListener("dispose",y));const Z=C.source;let J=h.get(Z);J===void 0&&(J={},h.set(Z,J));const te=F(C);if(te!==b.__cacheKey){J[te]===void 0&&(J[te]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,W=!0),J[te].usedTimes++;const ve=J[b.__cacheKey];ve!==void 0&&(J[b.__cacheKey].usedTimes--,ve.usedTimes===0&&E(C)),b.__cacheKey=te,b.__webglTexture=J[te].texture}return W}function pe(b,C,W){let Z=n.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(Z=n.TEXTURE_2D_ARRAY),C.isData3DTexture&&(Z=n.TEXTURE_3D);const J=ie(b,C),te=C.source;t.bindTexture(Z,b.__webglTexture,n.TEXTURE0+W);const ve=i.get(te);if(te.version!==ve.__version||J===!0){t.activeTexture(n.TEXTURE0+W);const ue=et.getPrimaries(et.workingColorSpace),le=C.colorSpace===pr?null:et.getPrimaries(C.colorSpace),Te=C.colorSpace===pr||ue===le?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let se=_(C.image,!1,r.maxTextureSize);se=Ge(C,se);const ge=s.convert(C.format,C.colorSpace),We=s.convert(C.type);let ye=g(C.internalFormat,ge,We,C.colorSpace,C.isVideoTexture);j(Z,C);let he;const Re=C.mipmaps,Oe=C.isVideoTexture!==!0,Je=ve.__version===void 0||J===!0,be=te.dataReady,T=v(C,se);if(C.isDepthTexture)ye=n.DEPTH_COMPONENT16,C.type===vr?ye=n.DEPTH_COMPONENT32F:C.type===ko?ye=n.DEPTH_COMPONENT24:C.type===dl&&(ye=n.DEPTH24_STENCIL8),Je&&(Oe?t.texStorage2D(n.TEXTURE_2D,1,ye,se.width,se.height):t.texImage2D(n.TEXTURE_2D,0,ye,se.width,se.height,0,ge,We,null));else if(C.isDataTexture)if(Re.length>0){Oe&&Je&&t.texStorage2D(n.TEXTURE_2D,T,ye,Re[0].width,Re[0].height);for(let U=0,z=Re.length;U<z;U++)he=Re[U],Oe?be&&t.texSubImage2D(n.TEXTURE_2D,U,0,0,he.width,he.height,ge,We,he.data):t.texImage2D(n.TEXTURE_2D,U,ye,he.width,he.height,0,ge,We,he.data);C.generateMipmaps=!1}else Oe?(Je&&t.texStorage2D(n.TEXTURE_2D,T,ye,se.width,se.height),be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,se.width,se.height,ge,We,se.data)):t.texImage2D(n.TEXTURE_2D,0,ye,se.width,se.height,0,ge,We,se.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){Oe&&Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,T,ye,Re[0].width,Re[0].height,se.depth);for(let U=0,z=Re.length;U<z;U++)he=Re[U],C.format!==yi?ge!==null?Oe?be&&t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,U,0,0,0,he.width,he.height,se.depth,ge,he.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,U,ye,he.width,he.height,se.depth,0,he.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,U,0,0,0,he.width,he.height,se.depth,ge,We,he.data):t.texImage3D(n.TEXTURE_2D_ARRAY,U,ye,he.width,he.height,se.depth,0,ge,We,he.data)}else{Oe&&Je&&t.texStorage2D(n.TEXTURE_2D,T,ye,Re[0].width,Re[0].height);for(let U=0,z=Re.length;U<z;U++)he=Re[U],C.format!==yi?ge!==null?Oe?be&&t.compressedTexSubImage2D(n.TEXTURE_2D,U,0,0,he.width,he.height,ge,he.data):t.compressedTexImage2D(n.TEXTURE_2D,U,ye,he.width,he.height,0,he.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?be&&t.texSubImage2D(n.TEXTURE_2D,U,0,0,he.width,he.height,ge,We,he.data):t.texImage2D(n.TEXTURE_2D,U,ye,he.width,he.height,0,ge,We,he.data)}else if(C.isDataArrayTexture)Oe?(Je&&t.texStorage3D(n.TEXTURE_2D_ARRAY,T,ye,se.width,se.height,se.depth),be&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ge,We,se.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,ye,se.width,se.height,se.depth,0,ge,We,se.data);else if(C.isData3DTexture)Oe?(Je&&t.texStorage3D(n.TEXTURE_3D,T,ye,se.width,se.height,se.depth),be&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ge,We,se.data)):t.texImage3D(n.TEXTURE_3D,0,ye,se.width,se.height,se.depth,0,ge,We,se.data);else if(C.isFramebufferTexture){if(Je)if(Oe)t.texStorage2D(n.TEXTURE_2D,T,ye,se.width,se.height);else{let U=se.width,z=se.height;for(let Q=0;Q<T;Q++)t.texImage2D(n.TEXTURE_2D,Q,ye,U,z,0,ge,We,null),U>>=1,z>>=1}}else if(Re.length>0){if(Oe&&Je){const U=lt(Re[0]);t.texStorage2D(n.TEXTURE_2D,T,ye,U.width,U.height)}for(let U=0,z=Re.length;U<z;U++)he=Re[U],Oe?be&&t.texSubImage2D(n.TEXTURE_2D,U,0,0,ge,We,he):t.texImage2D(n.TEXTURE_2D,U,ye,ge,We,he);C.generateMipmaps=!1}else if(Oe){if(Je){const U=lt(se);t.texStorage2D(n.TEXTURE_2D,T,ye,U.width,U.height)}be&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ge,We,se)}else t.texImage2D(n.TEXTURE_2D,0,ye,ge,We,se);m(C)&&d(Z),ve.__version=te.version,C.onUpdate&&C.onUpdate(C)}b.__version=C.version}function ze(b,C,W){if(C.image.length!==6)return;const Z=ie(b,C),J=C.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+W);const te=i.get(J);if(J.version!==te.__version||Z===!0){t.activeTexture(n.TEXTURE0+W);const ve=et.getPrimaries(et.workingColorSpace),ue=C.colorSpace===pr?null:et.getPrimaries(C.colorSpace),le=C.colorSpace===pr||ve===ue?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,C.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,C.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,le);const Te=C.isCompressedTexture||C.image[0].isCompressedTexture,se=C.image[0]&&C.image[0].isDataTexture,ge=[];for(let z=0;z<6;z++)!Te&&!se?ge[z]=_(C.image[z],!0,r.maxCubemapSize):ge[z]=se?C.image[z].image:C.image[z],ge[z]=Ge(C,ge[z]);const We=ge[0],ye=s.convert(C.format,C.colorSpace),he=s.convert(C.type),Re=g(C.internalFormat,ye,he,C.colorSpace),Oe=C.isVideoTexture!==!0,Je=te.__version===void 0||Z===!0,be=J.dataReady;let T=v(C,We);j(n.TEXTURE_CUBE_MAP,C);let U;if(Te){Oe&&Je&&t.texStorage2D(n.TEXTURE_CUBE_MAP,T,Re,We.width,We.height);for(let z=0;z<6;z++){U=ge[z].mipmaps;for(let Q=0;Q<U.length;Q++){const re=U[Q];C.format!==yi?ye!==null?Oe?be&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,Q,0,0,re.width,re.height,ye,re.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,Q,Re,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,Q,0,0,re.width,re.height,ye,he,re.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,Q,Re,re.width,re.height,0,ye,he,re.data)}}}else{if(U=C.mipmaps,Oe&&Je){U.length>0&&T++;const z=lt(ge[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,T,Re,z.width,z.height)}for(let z=0;z<6;z++)if(se){Oe?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,ge[z].width,ge[z].height,ye,he,ge[z].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Re,ge[z].width,ge[z].height,0,ye,he,ge[z].data);for(let Q=0;Q<U.length;Q++){const Pe=U[Q].image[z].image;Oe?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,Q+1,0,0,Pe.width,Pe.height,ye,he,Pe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,Q+1,Re,Pe.width,Pe.height,0,ye,he,Pe.data)}}else{Oe?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,ye,he,ge[z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Re,ye,he,ge[z]);for(let Q=0;Q<U.length;Q++){const re=U[Q];Oe?be&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,Q+1,0,0,ye,he,re.image[z]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+z,Q+1,Re,ye,he,re.image[z])}}}m(C)&&d(n.TEXTURE_CUBE_MAP),te.__version=J.version,C.onUpdate&&C.onUpdate(C)}b.__version=C.version}function V(b,C,W,Z,J,te){const ve=s.convert(W.format,W.colorSpace),ue=s.convert(W.type),le=g(W.internalFormat,ve,ue,W.colorSpace);if(!i.get(C).__hasExternalTextures){const se=Math.max(1,C.width>>te),ge=Math.max(1,C.height>>te);J===n.TEXTURE_3D||J===n.TEXTURE_2D_ARRAY?t.texImage3D(J,te,le,se,ge,C.depth,0,ve,ue,null):t.texImage2D(J,te,le,se,ge,0,ve,ue,null)}t.bindFramebuffer(n.FRAMEBUFFER,b),He(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Z,J,i.get(W).__webglTexture,0,Se(C)):(J===n.TEXTURE_2D||J>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Z,J,i.get(W).__webglTexture,te),t.bindFramebuffer(n.FRAMEBUFFER,null)}function ee(b,C,W){if(n.bindRenderbuffer(n.RENDERBUFFER,b),C.depthBuffer&&!C.stencilBuffer){let Z=n.DEPTH_COMPONENT24;if(W||He(C)){const J=C.depthTexture;J&&J.isDepthTexture&&(J.type===vr?Z=n.DEPTH_COMPONENT32F:J.type===ko&&(Z=n.DEPTH_COMPONENT24));const te=Se(C);He(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,te,Z,C.width,C.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,te,Z,C.width,C.height)}else n.renderbufferStorage(n.RENDERBUFFER,Z,C.width,C.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(C.depthBuffer&&C.stencilBuffer){const Z=Se(C);W&&He(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,C.width,C.height):He(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Z,n.DEPTH24_STENCIL8,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,C.width,C.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const Z=C.textures;for(let J=0;J<Z.length;J++){const te=Z[J],ve=s.convert(te.format,te.colorSpace),ue=s.convert(te.type),le=g(te.internalFormat,ve,ue,te.colorSpace),Te=Se(C);W&&He(C)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Te,le,C.width,C.height):He(C)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Te,le,C.width,C.height):n.renderbufferStorage(n.RENDERBUFFER,le,C.width,C.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function fe(b,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),L(C.depthTexture,0);const Z=i.get(C.depthTexture).__webglTexture,J=Se(C);if(C.depthTexture.format===To)He(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,Z,0);else if(C.depthTexture.format===Qa)He(C)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0,J):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function oe(b){const C=i.get(b),W=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!C.__autoAllocateDepthBuffer){if(W)throw new Error("target.depthTexture not supported in Cube render targets");fe(C.__webglFramebuffer,b)}else if(W){C.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer[Z]),C.__webglDepthbuffer[Z]=n.createRenderbuffer(),ee(C.__webglDepthbuffer[Z],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer=n.createRenderbuffer(),ee(C.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function Be(b,C,W){const Z=i.get(b);C!==void 0&&V(Z.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),W!==void 0&&oe(b)}function Ue(b){const C=b.texture,W=i.get(b),Z=i.get(C);b.addEventListener("dispose",A);const J=b.textures,te=b.isWebGLCubeRenderTarget===!0,ve=J.length>1;if(ve||(Z.__webglTexture===void 0&&(Z.__webglTexture=n.createTexture()),Z.__version=C.version,o.memory.textures++),te){W.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(C.mipmaps&&C.mipmaps.length>0){W.__webglFramebuffer[ue]=[];for(let le=0;le<C.mipmaps.length;le++)W.__webglFramebuffer[ue][le]=n.createFramebuffer()}else W.__webglFramebuffer[ue]=n.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){W.__webglFramebuffer=[];for(let ue=0;ue<C.mipmaps.length;ue++)W.__webglFramebuffer[ue]=n.createFramebuffer()}else W.__webglFramebuffer=n.createFramebuffer();if(ve)for(let ue=0,le=J.length;ue<le;ue++){const Te=i.get(J[ue]);Te.__webglTexture===void 0&&(Te.__webglTexture=n.createTexture(),o.memory.textures++)}if(b.samples>0&&He(b)===!1){W.__webglMultisampledFramebuffer=n.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let ue=0;ue<J.length;ue++){const le=J[ue];W.__webglColorRenderbuffer[ue]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,W.__webglColorRenderbuffer[ue]);const Te=s.convert(le.format,le.colorSpace),se=s.convert(le.type),ge=g(le.internalFormat,Te,se,le.colorSpace,b.isXRRenderTarget===!0),We=Se(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,We,ge,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ue,n.RENDERBUFFER,W.__webglColorRenderbuffer[ue])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(W.__webglDepthRenderbuffer=n.createRenderbuffer(),ee(W.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(te){t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture),j(n.TEXTURE_CUBE_MAP,C);for(let ue=0;ue<6;ue++)if(C.mipmaps&&C.mipmaps.length>0)for(let le=0;le<C.mipmaps.length;le++)V(W.__webglFramebuffer[ue][le],b,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,le);else V(W.__webglFramebuffer[ue],b,C,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);m(C)&&d(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ve){for(let ue=0,le=J.length;ue<le;ue++){const Te=J[ue],se=i.get(Te);t.bindTexture(n.TEXTURE_2D,se.__webglTexture),j(n.TEXTURE_2D,Te),V(W.__webglFramebuffer,b,Te,n.COLOR_ATTACHMENT0+ue,n.TEXTURE_2D,0),m(Te)&&d(n.TEXTURE_2D)}t.unbindTexture()}else{let ue=n.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(ue=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ue,Z.__webglTexture),j(ue,C),C.mipmaps&&C.mipmaps.length>0)for(let le=0;le<C.mipmaps.length;le++)V(W.__webglFramebuffer[le],b,C,n.COLOR_ATTACHMENT0,ue,le);else V(W.__webglFramebuffer,b,C,n.COLOR_ATTACHMENT0,ue,0);m(C)&&d(ue),t.unbindTexture()}b.depthBuffer&&oe(b)}function k(b){const C=b.textures;for(let W=0,Z=C.length;W<Z;W++){const J=C[W];if(m(J)){const te=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ve=i.get(J).__webglTexture;t.bindTexture(te,ve),d(te),t.unbindTexture()}}}const Ze=[],xe=[];function Qe(b){if(b.samples>0){if(He(b)===!1){const C=b.textures,W=b.width,Z=b.height;let J=n.COLOR_BUFFER_BIT;const te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ve=i.get(b),ue=C.length>1;if(ue)for(let le=0;le<C.length;le++)t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ve.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglFramebuffer);for(let le=0;le<C.length;le++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(J|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(J|=n.STENCIL_BUFFER_BIT)),ue){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ve.__webglColorRenderbuffer[le]);const Te=i.get(C[le]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,W,Z,0,0,W,Z,J,n.NEAREST),l===!0&&(Ze.length=0,xe.length=0,Ze.push(n.COLOR_ATTACHMENT0+le),b.depthBuffer&&b.resolveDepthBuffer===!1&&(Ze.push(te),xe.push(te),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,xe)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ue)for(let le=0;le<C.length;le++){t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.RENDERBUFFER,ve.__webglColorRenderbuffer[le]);const Te=i.get(C[le]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ve.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+le,n.TEXTURE_2D,Te,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ve.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&l){const C=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[C])}}}function Se(b){return Math.min(r.maxSamples,b.samples)}function He(b){const C=i.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Ce(b){const C=o.render.frame;c.get(b)!==C&&(c.set(b,C),b.update())}function Ge(b,C){const W=b.colorSpace,Z=b.format,J=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||W!==Wr&&W!==pr&&(et.getTransfer(W)===ot?(Z!==yi||J!==Fr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",W)),C}function lt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(u.width=b.naturalWidth||b.width,u.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(u.width=b.displayWidth,u.height=b.displayHeight):(u.width=b.width,u.height=b.height),u}this.allocateTextureUnit=N,this.resetTextureUnits=S,this.setTexture2D=L,this.setTexture2DArray=q,this.setTexture3D=X,this.setTextureCube=$,this.rebindTextures=Be,this.setupRenderTarget=Ue,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=Qe,this.setupDepthRenderbuffer=oe,this.setupFrameBufferTexture=V,this.useMultisampledRTT=He}function NR(n,e){function t(i,r=pr){let s;const o=et.getTransfer(r);if(i===Fr)return n.UNSIGNED_BYTE;if(i===sx)return n.UNSIGNED_SHORT_4_4_4_4;if(i===ox)return n.UNSIGNED_SHORT_5_5_5_1;if(i===QE)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===KE)return n.BYTE;if(i===ZE)return n.SHORT;if(i===ix)return n.UNSIGNED_SHORT;if(i===rx)return n.INT;if(i===ko)return n.UNSIGNED_INT;if(i===vr)return n.FLOAT;if(i===Pc)return n.HALF_FLOAT;if(i===JE)return n.ALPHA;if(i===e1)return n.RGB;if(i===yi)return n.RGBA;if(i===t1)return n.LUMINANCE;if(i===n1)return n.LUMINANCE_ALPHA;if(i===To)return n.DEPTH_COMPONENT;if(i===Qa)return n.DEPTH_STENCIL;if(i===i1)return n.RED;if(i===ax)return n.RED_INTEGER;if(i===r1)return n.RG;if(i===lx)return n.RG_INTEGER;if(i===ux)return n.RGBA_INTEGER;if(i===hf||i===pf||i===mf||i===_f)if(o===ot)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===hf)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===pf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===mf)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_f)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===hf)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===pf)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===mf)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_f)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Qm||i===Jm||i===e_||i===t_)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Qm)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Jm)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===e_)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===t_)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===n_||i===i_||i===r_)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===n_||i===i_)return o===ot?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===r_)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===s_||i===o_||i===a_||i===l_||i===u_||i===c_||i===f_||i===d_||i===h_||i===p_||i===m_||i===__||i===g_||i===v_)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===s_)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===o_)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===a_)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===l_)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===u_)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===c_)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===f_)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===d_)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===h_)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===p_)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===m_)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===__)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===g_)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===v_)return o===ot?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===gf||i===x_||i===y_)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===gf)return o===ot?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===x_)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===y_)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===s1||i===S_||i===M_||i===E_)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===gf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===S_)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===M_)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===E_)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===dl?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}class IR extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class va extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const UR={type:"move"};class Vf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new va,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new va,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new va,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,i),d=this._getHandJoint(u,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,x=.005;u.inputState.pinching&&h>p+x?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-x&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(UR)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new va;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const OR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,FR=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class kR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const r=new _n,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}render(e,t){if(this.texture!==null){if(this.mesh===null){const i=t.cameras[0].viewport,r=new wi({vertexShader:OR,fragmentShader:FR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Yn(new _l(20,20),r)}e.render(this.mesh,t)}}reset(){this.texture=null,this.mesh=null}}class zR extends Ls{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,x=null;const _=new kR,m=t.getContextAttributes();let d=null,g=null;const v=[],y=[],A=new Ee;let w=null;const E=new Rn;E.layers.enable(1),E.viewport=new Bt;const P=new Rn;P.layers.enable(2),P.viewport=new Bt;const M=[E,P],S=new IR;S.layers.enable(1),S.layers.enable(2);let N=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ee=v[V];return ee===void 0&&(ee=new Vf,v[V]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(V){let ee=v[V];return ee===void 0&&(ee=new Vf,v[V]=ee),ee.getGripSpace()},this.getHand=function(V){let ee=v[V];return ee===void 0&&(ee=new Vf,v[V]=ee),ee.getHandSpace()};function L(V){const ee=y.indexOf(V.inputSource);if(ee===-1)return;const fe=v[ee];fe!==void 0&&(fe.update(V.inputSource,V.frame,u||o),fe.dispatchEvent({type:V.type,data:V.inputSource}))}function q(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",q),r.removeEventListener("inputsourceschange",X);for(let V=0;V<v.length;V++){const ee=y[V];ee!==null&&(y[V]=null,v[V].disconnect(ee))}N=null,F=null,_.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,g=null,ze.stop(),i.isPresenting=!1,e.setPixelRatio(w),e.setSize(A.width,A.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(V){u=V},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return x},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",q),r.addEventListener("inputsourceschange",X),m.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(A),r.renderState.layers===void 0){const ee={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new As(p.framebufferWidth,p.framebufferHeight,{format:yi,type:Fr,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ee=null,fe=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=m.stencil?Qa:To,fe=m.stencil?dl:ko);const Be={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(Be),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),g=new As(h.textureWidth,h.textureHeight,{format:yi,type:Fr,depthTexture:new Ex(h.textureWidth,h.textureHeight,fe,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),ze.setContext(r),ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function X(V){for(let ee=0;ee<V.removed.length;ee++){const fe=V.removed[ee],oe=y.indexOf(fe);oe>=0&&(y[oe]=null,v[oe].disconnect(fe))}for(let ee=0;ee<V.added.length;ee++){const fe=V.added[ee];let oe=y.indexOf(fe);if(oe===-1){for(let Ue=0;Ue<v.length;Ue++)if(Ue>=y.length){y.push(fe),oe=Ue;break}else if(y[Ue]===null){y[Ue]=fe,oe=Ue;break}if(oe===-1)break}const Be=v[oe];Be&&Be.connect(fe)}}const $=new I,K=new I;function D(V,ee,fe){$.setFromMatrixPosition(ee.matrixWorld),K.setFromMatrixPosition(fe.matrixWorld);const oe=$.distanceTo(K),Be=ee.projectionMatrix.elements,Ue=fe.projectionMatrix.elements,k=Be[14]/(Be[10]-1),Ze=Be[14]/(Be[10]+1),xe=(Be[9]+1)/Be[5],Qe=(Be[9]-1)/Be[5],Se=(Be[8]-1)/Be[0],He=(Ue[8]+1)/Ue[0],Ce=k*Se,Ge=k*He,lt=oe/(-Se+He),b=lt*-Se;ee.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(b),V.translateZ(lt),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const C=k+lt,W=Ze+lt,Z=Ce-b,J=Ge+(oe-b),te=xe*Ze/W*C,ve=Qe*Ze/W*C;V.projectionMatrix.makePerspective(Z,J,te,ve,C,W),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function Y(V,ee){ee===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ee.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;_.texture!==null&&(V.near=_.depthNear,V.far=_.depthFar),S.near=P.near=E.near=V.near,S.far=P.far=E.far=V.far,(N!==S.near||F!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),N=S.near,F=S.far,E.near=N,E.far=F,P.near=N,P.far=F,E.updateProjectionMatrix(),P.updateProjectionMatrix(),V.updateProjectionMatrix());const ee=V.parent,fe=S.cameras;Y(S,ee);for(let oe=0;oe<fe.length;oe++)Y(fe[oe],ee);fe.length===2?D(S,E,P):S.projectionMatrix.copy(E.projectionMatrix),j(V,S,ee)};function j(V,ee,fe){fe===null?V.matrix.copy(ee.matrixWorld):(V.matrix.copy(fe.matrixWorld),V.matrix.invert(),V.matrix.multiply(ee.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ee.projectionMatrix),V.projectionMatrixInverse.copy(ee.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Ja*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)},this.hasDepthSensing=function(){return _.texture!==null};let ie=null;function pe(V,ee){if(c=ee.getViewerPose(u||o),x=ee,c!==null){const fe=c.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let oe=!1;fe.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Ue=0;Ue<fe.length;Ue++){const k=fe[Ue];let Ze=null;if(p!==null)Ze=p.getViewport(k);else{const Qe=f.getViewSubImage(h,k);Ze=Qe.viewport,Ue===0&&(e.setRenderTargetTextures(g,Qe.colorTexture,h.ignoreDepthValues?void 0:Qe.depthStencilTexture),e.setRenderTarget(g))}let xe=M[Ue];xe===void 0&&(xe=new Rn,xe.layers.enable(Ue),xe.viewport=new Bt,M[Ue]=xe),xe.matrix.fromArray(k.transform.matrix),xe.matrix.decompose(xe.position,xe.quaternion,xe.scale),xe.projectionMatrix.fromArray(k.projectionMatrix),xe.projectionMatrixInverse.copy(xe.projectionMatrix).invert(),xe.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Ue===0&&(S.matrix.copy(xe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(xe)}const Be=r.enabledFeatures;if(Be&&Be.includes("depth-sensing")){const Ue=f.getDepthInformation(fe[0]);Ue&&Ue.isValid&&Ue.texture&&_.init(e,Ue,r.renderState)}}for(let fe=0;fe<v.length;fe++){const oe=y[fe],Be=v[fe];oe!==null&&Be!==void 0&&Be.update(oe,ee,u||o)}_.render(e,S),ie&&ie(V,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),x=null}const ze=new Mx;ze.setAnimationLoop(pe),this.setAnimationLoop=function(V){ie=V},this.dispose=function(){}}}const Qr=new $i,BR=new Ct;function HR(n,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,vx(n)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,g,v,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),x(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),_(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,g,v):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===mn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===mn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const g=e.get(d),v=g.envMap,y=g.envMapRotation;if(v&&(m.envMap.value=v,Qr.copy(y),Qr.x*=-1,Qr.y*=-1,Qr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Qr.y*=-1,Qr.z*=-1),m.envMapRotation.value.setFromMatrix4(BR.makeRotationFromEuler(Qr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const A=n._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*A,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,g,v){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*g,m.scale.value=v*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,g){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===mn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function x(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const g=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function VR(n,e,t,i){let r={},s={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const y=v.program;i.uniformBlockBinding(g,y)}function u(g,v){let y=r[g.id];y===void 0&&(x(g),y=c(g),r[g.id]=y,g.addEventListener("dispose",m));const A=v.program;i.updateUBOMapping(g,A);const w=e.render.frame;s[g.id]!==w&&(h(g),s[g.id]=w)}function c(g){const v=f();g.__bindingPointIndex=v;const y=n.createBuffer(),A=g.__size,w=g.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,w),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,v,y),y}function f(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(g){const v=r[g.id],y=g.uniforms,A=g.__cache;n.bindBuffer(n.UNIFORM_BUFFER,v);for(let w=0,E=y.length;w<E;w++){const P=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,S=P.length;M<S;M++){const N=P[M];if(p(N,w,M,A)===!0){const F=N.__offset,L=Array.isArray(N.value)?N.value:[N.value];let q=0;for(let X=0;X<L.length;X++){const $=L[X],K=_($);typeof $=="number"||typeof $=="boolean"?(N.__data[0]=$,n.bufferSubData(n.UNIFORM_BUFFER,F+q,N.__data)):$.isMatrix3?(N.__data[0]=$.elements[0],N.__data[1]=$.elements[1],N.__data[2]=$.elements[2],N.__data[3]=0,N.__data[4]=$.elements[3],N.__data[5]=$.elements[4],N.__data[6]=$.elements[5],N.__data[7]=0,N.__data[8]=$.elements[6],N.__data[9]=$.elements[7],N.__data[10]=$.elements[8],N.__data[11]=0):($.toArray(N.__data,q),q+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,N.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(g,v,y,A){const w=g.value,E=v+"_"+y;if(A[E]===void 0)return typeof w=="number"||typeof w=="boolean"?A[E]=w:A[E]=w.clone(),!0;{const P=A[E];if(typeof w=="number"||typeof w=="boolean"){if(P!==w)return A[E]=w,!0}else if(P.equals(w)===!1)return P.copy(w),!0}return!1}function x(g){const v=g.uniforms;let y=0;const A=16;for(let E=0,P=v.length;E<P;E++){const M=Array.isArray(v[E])?v[E]:[v[E]];for(let S=0,N=M.length;S<N;S++){const F=M[S],L=Array.isArray(F.value)?F.value:[F.value];for(let q=0,X=L.length;q<X;q++){const $=L[q],K=_($),D=y%A;D!==0&&A-D<K.boundary&&(y+=A-D),F.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=y,y+=K.storage}}}const w=y%A;return w>0&&(y+=A-w),g.__size=y,g.__cache={},this}function _(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function d(){for(const g in r)n.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class Px{constructor(e={}){const{canvas:t=I1(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),x=new Int32Array(4);let _=null,m=null;const d=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=pi,this._useLegacyLights=!1,this.toneMapping=Lr,this.toneMappingExposure=1;const v=this;let y=!1,A=0,w=0,E=null,P=-1,M=null;const S=new Bt,N=new Bt;let F=null;const L=new qe(0);let q=0,X=t.width,$=t.height,K=1,D=null,Y=null;const j=new Bt(0,0,X,$),ie=new Bt(0,0,X,$);let pe=!1;const ze=new Sx;let V=!1,ee=!1;const fe=new Ct,oe=new I,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return E===null?K:1}let k=i;function Ze(R,O){return t.getContext(R,O)}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${up}`),t.addEventListener("webglcontextlost",T,!1),t.addEventListener("webglcontextrestored",U,!1),t.addEventListener("webglcontextcreationerror",z,!1),k===null){const O="webgl2";if(k=Ze(O,R),k===null)throw Ze(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let xe,Qe,Se,He,Ce,Ge,lt,b,C,W,Z,J,te,ve,ue,le,Te,se,ge,We,ye,he,Re,Oe;function Je(){xe=new ZA(k),xe.init(),he=new NR(k,xe),Qe=new WA(k,xe,e,he),Se=new LR(k),He=new eC(k),Ce=new gR,Ge=new DR(k,xe,Se,Ce,Qe,he,He),lt=new YA(v),b=new KA(v),C=new oT(k),Re=new VA(k,C),W=new QA(k,C,He,Re),Z=new nC(k,W,C,He),ge=new tC(k,Qe,Ge),le=new XA(Ce),J=new _R(v,lt,b,xe,Qe,Re,le),te=new HR(v,Ce),ve=new xR,ue=new wR(xe),se=new HA(v,lt,b,Se,Z,h,l),Te=new bR(v,Z,Qe),Oe=new VR(k,He,Qe,Se),We=new GA(k,xe,He),ye=new JA(k,xe,He),He.programs=J.programs,v.capabilities=Qe,v.extensions=xe,v.properties=Ce,v.renderLists=ve,v.shadowMap=Te,v.state=Se,v.info=He}Je();const be=new zR(v,k);this.xr=be,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=xe.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=xe.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(R){R!==void 0&&(K=R,this.setSize(X,$,!1))},this.getSize=function(R){return R.set(X,$)},this.setSize=function(R,O,G=!0){if(be.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,$=O,t.width=Math.floor(R*K),t.height=Math.floor(O*K),G===!0&&(t.style.width=R+"px",t.style.height=O+"px"),this.setViewport(0,0,R,O)},this.getDrawingBufferSize=function(R){return R.set(X*K,$*K).floor()},this.setDrawingBufferSize=function(R,O,G){X=R,$=O,K=G,t.width=Math.floor(R*G),t.height=Math.floor(O*G),this.setViewport(0,0,R,O)},this.getCurrentViewport=function(R){return R.copy(S)},this.getViewport=function(R){return R.copy(j)},this.setViewport=function(R,O,G,B){R.isVector4?j.set(R.x,R.y,R.z,R.w):j.set(R,O,G,B),Se.viewport(S.copy(j).multiplyScalar(K).round())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,O,G,B){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,O,G,B),Se.scissor(N.copy(ie).multiplyScalar(K).round())},this.getScissorTest=function(){return pe},this.setScissorTest=function(R){Se.setScissorTest(pe=R)},this.setOpaqueSort=function(R){D=R},this.setTransparentSort=function(R){Y=R},this.getClearColor=function(R){return R.copy(se.getClearColor())},this.setClearColor=function(){se.setClearColor.apply(se,arguments)},this.getClearAlpha=function(){return se.getClearAlpha()},this.setClearAlpha=function(){se.setClearAlpha.apply(se,arguments)},this.clear=function(R=!0,O=!0,G=!0){let B=0;if(R){let H=!1;if(E!==null){const ce=E.texture.format;H=ce===ux||ce===lx||ce===ax}if(H){const ce=E.texture.type,me=ce===Fr||ce===ko||ce===ix||ce===dl||ce===sx||ce===ox,_e=se.getClearColor(),Me=se.getClearAlpha(),we=_e.r,Le=_e.g,ke=_e.b;me?(p[0]=we,p[1]=Le,p[2]=ke,p[3]=Me,k.clearBufferuiv(k.COLOR,0,p)):(x[0]=we,x[1]=Le,x[2]=ke,x[3]=Me,k.clearBufferiv(k.COLOR,0,x))}else B|=k.COLOR_BUFFER_BIT}O&&(B|=k.DEPTH_BUFFER_BIT),G&&(B|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",T,!1),t.removeEventListener("webglcontextrestored",U,!1),t.removeEventListener("webglcontextcreationerror",z,!1),ve.dispose(),ue.dispose(),Ce.dispose(),lt.dispose(),b.dispose(),Z.dispose(),Re.dispose(),Oe.dispose(),J.dispose(),be.dispose(),be.removeEventListener("sessionstart",je),be.removeEventListener("sessionend",Mt),rt.stop()};function T(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function U(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=He.autoReset,O=Te.enabled,G=Te.autoUpdate,B=Te.needsUpdate,H=Te.type;Je(),He.autoReset=R,Te.enabled=O,Te.autoUpdate=G,Te.needsUpdate=B,Te.type=H}function z(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Q(R){const O=R.target;O.removeEventListener("dispose",Q),re(O)}function re(R){Pe(R),Ce.remove(R)}function Pe(R){const O=Ce.get(R).programs;O!==void 0&&(O.forEach(function(G){J.releaseProgram(G)}),R.isShaderMaterial&&J.releaseShaderCache(R))}this.renderBufferDirect=function(R,O,G,B,H,ce){O===null&&(O=Be);const me=H.isMesh&&H.matrixWorld.determinant()<0,_e=Iy(R,O,G,B,H);Se.setMaterial(B,me);let Me=G.index,we=1;if(B.wireframe===!0){if(Me=W.getWireframeAttribute(G),Me===void 0)return;we=2}const Le=G.drawRange,ke=G.attributes.position;let Et=Le.start*we,Gt=(Le.start+Le.count)*we;ce!==null&&(Et=Math.max(Et,ce.start*we),Gt=Math.min(Gt,(ce.start+ce.count)*we)),Me!==null?(Et=Math.max(Et,0),Gt=Math.min(Gt,Me.count)):ke!=null&&(Et=Math.max(Et,0),Gt=Math.min(Gt,ke.count));const En=Gt-Et;if(En<0||En===1/0)return;Re.setup(H,B,_e,G,Me);let Ri,$e=We;if(Me!==null&&(Ri=C.get(Me),$e=ye,$e.setIndex(Ri)),H.isMesh)B.wireframe===!0?(Se.setLineWidth(B.wireframeLinewidth*Ue()),$e.setMode(k.LINES)):$e.setMode(k.TRIANGLES);else if(H.isLine){let Ae=B.linewidth;Ae===void 0&&(Ae=1),Se.setLineWidth(Ae*Ue()),H.isLineSegments?$e.setMode(k.LINES):H.isLineLoop?$e.setMode(k.LINE_LOOP):$e.setMode(k.LINE_STRIP)}else H.isPoints?$e.setMode(k.POINTS):H.isSprite&&$e.setMode(k.TRIANGLES);if(H.isBatchedMesh)H._multiDrawInstances!==null?$e.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances):$e.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else if(H.isInstancedMesh)$e.renderInstances(Et,En,H.count);else if(G.isInstancedBufferGeometry){const Ae=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Zo=Math.min(G.instanceCount,Ae);$e.renderInstances(Et,En,Zo)}else $e.render(Et,En)};function Fe(R,O,G){R.transparent===!0&&R.side===Bi&&R.forceSinglePass===!1?(R.side=mn,R.needsUpdate=!0,vl(R,O,G),R.side=Or,R.needsUpdate=!0,vl(R,O,G),R.side=Bi):vl(R,O,G)}this.compile=function(R,O,G=null){G===null&&(G=R),m=ue.get(G),m.init(O),g.push(m),G.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),R!==G&&R.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(v._useLegacyLights);const B=new Set;return R.traverse(function(H){const ce=H.material;if(ce)if(Array.isArray(ce))for(let me=0;me<ce.length;me++){const _e=ce[me];Fe(_e,G,H),B.add(_e)}else Fe(ce,G,H),B.add(ce)}),g.pop(),m=null,B},this.compileAsync=function(R,O,G=null){const B=this.compile(R,O,G);return new Promise(H=>{function ce(){if(B.forEach(function(me){Ce.get(me).currentProgram.isReady()&&B.delete(me)}),B.size===0){H(R);return}setTimeout(ce,10)}xe.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let dt=null;function Nt(R){dt&&dt(R)}function je(){rt.stop()}function Mt(){rt.start()}const rt=new Mx;rt.setAnimationLoop(Nt),typeof self<"u"&&rt.setContext(self),this.setAnimationLoop=function(R){dt=R,be.setAnimationLoop(R),R===null?rt.stop():rt.start()},be.addEventListener("sessionstart",je),be.addEventListener("sessionend",Mt),this.render=function(R,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(be.cameraAutoUpdate===!0&&be.updateCamera(O),O=be.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,O,E),m=ue.get(R,g.length),m.init(O),g.push(m),fe.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ze.setFromProjectionMatrix(fe),ee=this.localClippingEnabled,V=le.init(this.clippingPlanes,ee),_=ve.get(R,d.length),_.init(),d.push(_),Ji(R,O,0,v.sortObjects),_.finish(),v.sortObjects===!0&&_.sort(D,Y);const G=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1;G&&se.addToRenderList(_,R),this.info.render.frame++,V===!0&&le.beginShadows();const B=m.state.shadowsArray;Te.render(B,R,O),V===!0&&le.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=_.opaque,ce=_.transmissive;if(m.setupLights(v._useLegacyLights),O.isArrayCamera){const me=O.cameras;if(ce.length>0)for(let _e=0,Me=me.length;_e<Me;_e++){const we=me[_e];er(H,ce,R,we)}G&&se.render(R);for(let _e=0,Me=me.length;_e<Me;_e++){const we=me[_e];kn(_,R,we,we.viewport)}}else ce.length>0&&er(H,ce,R,O),G&&se.render(R),kn(_,R,O);E!==null&&(Ge.updateMultisampleRenderTarget(E),Ge.updateRenderTargetMipmap(E)),R.isScene===!0&&R.onAfterRender(v,R,O),Re.resetDefaultState(),P=-1,M=null,g.pop(),g.length>0?(m=g[g.length-1],V===!0&&le.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?_=d[d.length-1]:_=null};function Ji(R,O,G,B){if(R.visible===!1)return;if(R.layers.test(O.layers)){if(R.isGroup)G=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(O);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ze.intersectsSprite(R)){B&&oe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(fe);const me=Z.update(R),_e=R.material;_e.visible&&_.push(R,me,_e,G,oe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ze.intersectsObject(R))){const me=Z.update(R),_e=R.material;if(B&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),oe.copy(R.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),oe.copy(me.boundingSphere.center)),oe.applyMatrix4(R.matrixWorld).applyMatrix4(fe)),Array.isArray(_e)){const Me=me.groups;for(let we=0,Le=Me.length;we<Le;we++){const ke=Me[we],Et=_e[ke.materialIndex];Et&&Et.visible&&_.push(R,me,Et,G,oe.z,ke)}}else _e.visible&&_.push(R,me,_e,G,oe.z,null)}}const ce=R.children;for(let me=0,_e=ce.length;me<_e;me++)Ji(ce[me],O,G,B)}function kn(R,O,G,B){const H=R.opaque,ce=R.transmissive,me=R.transparent;m.setupLightsView(G),V===!0&&le.setGlobalState(v.clippingPlanes,G),B&&Se.viewport(S.copy(B)),H.length>0&&Ci(H,O,G),ce.length>0&&Ci(ce,O,G),me.length>0&&Ci(me,O,G),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function er(R,O,G,B){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[B.id]===void 0&&(m.state.transmissionRenderTarget[B.id]=new As(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float")?Pc:Fr,minFilter:hs,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const ce=m.state.transmissionRenderTarget[B.id],me=B.viewport||S;ce.setSize(me.z,me.w);const _e=v.getRenderTarget();v.setRenderTarget(ce),v.getClearColor(L),q=v.getClearAlpha(),q<1&&v.setClearColor(16777215,.5),v.clear();const Me=v.toneMapping;v.toneMapping=Lr;const we=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),m.setupLightsView(B),V===!0&&le.setGlobalState(v.clippingPlanes,B),Ci(R,G,B),Ge.updateMultisampleRenderTarget(ce),Ge.updateRenderTargetMipmap(ce),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ke=0,Et=O.length;ke<Et;ke++){const Gt=O[ke],En=Gt.object,Ri=Gt.geometry,$e=Gt.material,Ae=Gt.group;if($e.side===Bi&&En.layers.test(B.layers)){const Zo=$e.side;$e.side=mn,$e.needsUpdate=!0,Ko(En,G,B,Ri,$e,Ae),$e.side=Zo,$e.needsUpdate=!0,Le=!0}}Le===!0&&(Ge.updateMultisampleRenderTarget(ce),Ge.updateRenderTargetMipmap(ce))}v.setRenderTarget(_e),v.setClearColor(L,q),we!==void 0&&(B.viewport=we),v.toneMapping=Me}function Ci(R,O,G){const B=O.isScene===!0?O.overrideMaterial:null;for(let H=0,ce=R.length;H<ce;H++){const me=R[H],_e=me.object,Me=me.geometry,we=B===null?me.material:B,Le=me.group;_e.layers.test(G.layers)&&Ko(_e,O,G,Me,we,Le)}}function Ko(R,O,G,B,H,ce){R.onBeforeRender(v,O,G,B,H,ce),R.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),H.onBeforeRender(v,O,G,B,R,ce),H.transparent===!0&&H.side===Bi&&H.forceSinglePass===!1?(H.side=mn,H.needsUpdate=!0,v.renderBufferDirect(G,O,B,H,R,ce),H.side=Or,H.needsUpdate=!0,v.renderBufferDirect(G,O,B,H,R,ce),H.side=Bi):v.renderBufferDirect(G,O,B,H,R,ce),R.onAfterRender(v,O,G,B,H,ce)}function vl(R,O,G){O.isScene!==!0&&(O=Be);const B=Ce.get(R),H=m.state.lights,ce=m.state.shadowsArray,me=H.state.version,_e=J.getParameters(R,H.state,ce,O,G),Me=J.getProgramCacheKey(_e);let we=B.programs;B.environment=R.isMeshStandardMaterial?O.environment:null,B.fog=O.fog,B.envMap=(R.isMeshStandardMaterial?b:lt).get(R.envMap||B.environment),B.envMapRotation=B.environment!==null&&R.envMap===null?O.environmentRotation:R.envMapRotation,we===void 0&&(R.addEventListener("dispose",Q),we=new Map,B.programs=we);let Le=we.get(Me);if(Le!==void 0){if(B.currentProgram===Le&&B.lightsStateVersion===me)return Fp(R,_e),Le}else _e.uniforms=J.getUniforms(R),R.onBuild(G,_e,v),R.onBeforeCompile(_e,v),Le=J.acquireProgram(_e,Me),we.set(Me,Le),B.uniforms=_e.uniforms;const ke=B.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(ke.clippingPlanes=le.uniform),Fp(R,_e),B.needsLights=Oy(R),B.lightsStateVersion=me,B.needsLights&&(ke.ambientLightColor.value=H.state.ambient,ke.lightProbe.value=H.state.probe,ke.directionalLights.value=H.state.directional,ke.directionalLightShadows.value=H.state.directionalShadow,ke.spotLights.value=H.state.spot,ke.spotLightShadows.value=H.state.spotShadow,ke.rectAreaLights.value=H.state.rectArea,ke.ltc_1.value=H.state.rectAreaLTC1,ke.ltc_2.value=H.state.rectAreaLTC2,ke.pointLights.value=H.state.point,ke.pointLightShadows.value=H.state.pointShadow,ke.hemisphereLights.value=H.state.hemi,ke.directionalShadowMap.value=H.state.directionalShadowMap,ke.directionalShadowMatrix.value=H.state.directionalShadowMatrix,ke.spotShadowMap.value=H.state.spotShadowMap,ke.spotLightMatrix.value=H.state.spotLightMatrix,ke.spotLightMap.value=H.state.spotLightMap,ke.pointShadowMap.value=H.state.pointShadowMap,ke.pointShadowMatrix.value=H.state.pointShadowMatrix),B.currentProgram=Le,B.uniformsList=null,Le}function Op(R){if(R.uniformsList===null){const O=R.currentProgram.getUniforms();R.uniformsList=Mu.seqWithValue(O.seq,R.uniforms)}return R.uniformsList}function Fp(R,O){const G=Ce.get(R);G.outputColorSpace=O.outputColorSpace,G.batching=O.batching,G.instancing=O.instancing,G.instancingColor=O.instancingColor,G.instancingMorph=O.instancingMorph,G.skinning=O.skinning,G.morphTargets=O.morphTargets,G.morphNormals=O.morphNormals,G.morphColors=O.morphColors,G.morphTargetsCount=O.morphTargetsCount,G.numClippingPlanes=O.numClippingPlanes,G.numIntersection=O.numClipIntersection,G.vertexAlphas=O.vertexAlphas,G.vertexTangents=O.vertexTangents,G.toneMapping=O.toneMapping}function Iy(R,O,G,B,H){O.isScene!==!0&&(O=Be),Ge.resetTextureUnits();const ce=O.fog,me=B.isMeshStandardMaterial?O.environment:null,_e=E===null?v.outputColorSpace:E.isXRRenderTarget===!0?E.texture.colorSpace:Wr,Me=(B.isMeshStandardMaterial?b:lt).get(B.envMap||me),we=B.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,Le=!!G.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),ke=!!G.morphAttributes.position,Et=!!G.morphAttributes.normal,Gt=!!G.morphAttributes.color;let En=Lr;B.toneMapped&&(E===null||E.isXRRenderTarget===!0)&&(En=v.toneMapping);const Ri=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,$e=Ri!==void 0?Ri.length:0,Ae=Ce.get(B),Zo=m.state.lights;if(V===!0&&(ee===!0||R!==M)){const zn=R===M&&B.id===P;le.setState(B,R,zn)}let ut=!1;B.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Zo.state.version||Ae.outputColorSpace!==_e||H.isBatchedMesh&&Ae.batching===!1||!H.isBatchedMesh&&Ae.batching===!0||H.isInstancedMesh&&Ae.instancing===!1||!H.isInstancedMesh&&Ae.instancing===!0||H.isSkinnedMesh&&Ae.skinning===!1||!H.isSkinnedMesh&&Ae.skinning===!0||H.isInstancedMesh&&Ae.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ae.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ae.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ae.instancingMorph===!1&&H.morphTexture!==null||Ae.envMap!==Me||B.fog===!0&&Ae.fog!==ce||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==le.numPlanes||Ae.numIntersection!==le.numIntersection)||Ae.vertexAlphas!==we||Ae.vertexTangents!==Le||Ae.morphTargets!==ke||Ae.morphNormals!==Et||Ae.morphColors!==Gt||Ae.toneMapping!==En||Ae.morphTargetsCount!==$e)&&(ut=!0):(ut=!0,Ae.__version=B.version);let Yr=Ae.currentProgram;ut===!0&&(Yr=vl(B,O,H));let kp=!1,Qo=!1,Oc=!1;const Wt=Yr.getUniforms(),tr=Ae.uniforms;if(Se.useProgram(Yr.program)&&(kp=!0,Qo=!0,Oc=!0),B.id!==P&&(P=B.id,Qo=!0),kp||M!==R){Wt.setValue(k,"projectionMatrix",R.projectionMatrix),Wt.setValue(k,"viewMatrix",R.matrixWorldInverse);const zn=Wt.map.cameraPosition;zn!==void 0&&zn.setValue(k,oe.setFromMatrixPosition(R.matrixWorld)),Qe.logarithmicDepthBuffer&&Wt.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&Wt.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),M!==R&&(M=R,Qo=!0,Oc=!0)}if(H.isSkinnedMesh){Wt.setOptional(k,H,"bindMatrix"),Wt.setOptional(k,H,"bindMatrixInverse");const zn=H.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Wt.setValue(k,"boneTexture",zn.boneTexture,Ge))}H.isBatchedMesh&&(Wt.setOptional(k,H,"batchingTexture"),Wt.setValue(k,"batchingTexture",H._matricesTexture,Ge));const Fc=G.morphAttributes;if((Fc.position!==void 0||Fc.normal!==void 0||Fc.color!==void 0)&&ge.update(H,G,Yr),(Qo||Ae.receiveShadow!==H.receiveShadow)&&(Ae.receiveShadow=H.receiveShadow,Wt.setValue(k,"receiveShadow",H.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(tr.envMap.value=Me,tr.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&O.environment!==null&&(tr.envMapIntensity.value=O.environmentIntensity),Qo&&(Wt.setValue(k,"toneMappingExposure",v.toneMappingExposure),Ae.needsLights&&Uy(tr,Oc),ce&&B.fog===!0&&te.refreshFogUniforms(tr,ce),te.refreshMaterialUniforms(tr,B,K,$,m.state.transmissionRenderTarget[R.id]),Mu.upload(k,Op(Ae),tr,Ge)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(Mu.upload(k,Op(Ae),tr,Ge),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&Wt.setValue(k,"center",H.center),Wt.setValue(k,"modelViewMatrix",H.modelViewMatrix),Wt.setValue(k,"normalMatrix",H.normalMatrix),Wt.setValue(k,"modelMatrix",H.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const zn=B.uniformsGroups;for(let kc=0,Fy=zn.length;kc<Fy;kc++){const zp=zn[kc];Oe.update(zp,Yr),Oe.bind(zp,Yr)}}return Yr}function Uy(R,O){R.ambientLightColor.needsUpdate=O,R.lightProbe.needsUpdate=O,R.directionalLights.needsUpdate=O,R.directionalLightShadows.needsUpdate=O,R.pointLights.needsUpdate=O,R.pointLightShadows.needsUpdate=O,R.spotLights.needsUpdate=O,R.spotLightShadows.needsUpdate=O,R.rectAreaLights.needsUpdate=O,R.hemisphereLights.needsUpdate=O}function Oy(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return E},this.setRenderTargetTextures=function(R,O,G){Ce.get(R.texture).__webglTexture=O,Ce.get(R.depthTexture).__webglTexture=G;const B=Ce.get(R);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=G===void 0,B.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,O){const G=Ce.get(R);G.__webglFramebuffer=O,G.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(R,O=0,G=0){E=R,A=O,w=G;let B=!0,H=null,ce=!1,me=!1;if(R){const Me=Ce.get(R);Me.__useDefaultFramebuffer!==void 0?(Se.bindFramebuffer(k.FRAMEBUFFER,null),B=!1):Me.__webglFramebuffer===void 0?Ge.setupRenderTarget(R):Me.__hasExternalTextures&&Ge.rebindTextures(R,Ce.get(R.texture).__webglTexture,Ce.get(R.depthTexture).__webglTexture);const we=R.texture;(we.isData3DTexture||we.isDataArrayTexture||we.isCompressedArrayTexture)&&(me=!0);const Le=Ce.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?H=Le[O][G]:H=Le[O],ce=!0):R.samples>0&&Ge.useMultisampledRTT(R)===!1?H=Ce.get(R).__webglMultisampledFramebuffer:Array.isArray(Le)?H=Le[G]:H=Le,S.copy(R.viewport),N.copy(R.scissor),F=R.scissorTest}else S.copy(j).multiplyScalar(K).floor(),N.copy(ie).multiplyScalar(K).floor(),F=pe;if(Se.bindFramebuffer(k.FRAMEBUFFER,H)&&B&&Se.drawBuffers(R,H),Se.viewport(S),Se.scissor(N),Se.setScissorTest(F),ce){const Me=Ce.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+O,Me.__webglTexture,G)}else if(me){const Me=Ce.get(R.texture),we=O||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Me.__webglTexture,G||0,we)}P=-1},this.readRenderTargetPixels=function(R,O,G,B,H,ce,me){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&me!==void 0&&(_e=_e[me]),_e){Se.bindFramebuffer(k.FRAMEBUFFER,_e);try{const Me=R.texture,we=Me.format,Le=Me.type;if(!Qe.textureFormatReadable(we)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=R.width-B&&G>=0&&G<=R.height-H&&k.readPixels(O,G,B,H,he.convert(we),he.convert(Le),ce)}finally{const Me=E!==null?Ce.get(E).__webglFramebuffer:null;Se.bindFramebuffer(k.FRAMEBUFFER,Me)}}},this.copyFramebufferToTexture=function(R,O,G=0){const B=Math.pow(2,-G),H=Math.floor(O.image.width*B),ce=Math.floor(O.image.height*B);Ge.setTexture2D(O,0),k.copyTexSubImage2D(k.TEXTURE_2D,G,0,0,R.x,R.y,H,ce),Se.unbindTexture()},this.copyTextureToTexture=function(R,O,G,B=0){const H=O.image.width,ce=O.image.height,me=he.convert(G.format),_e=he.convert(G.type);Ge.setTexture2D(G,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,G.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,G.unpackAlignment),O.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,B,R.x,R.y,H,ce,me,_e,O.image.data):O.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,B,R.x,R.y,O.mipmaps[0].width,O.mipmaps[0].height,me,O.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,B,R.x,R.y,me,_e,O.image),B===0&&G.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Se.unbindTexture()},this.copyTextureToTexture3D=function(R,O,G,B,H=0){const ce=R.max.x-R.min.x,me=R.max.y-R.min.y,_e=R.max.z-R.min.z,Me=he.convert(B.format),we=he.convert(B.type);let Le;if(B.isData3DTexture)Ge.setTexture3D(B,0),Le=k.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)Ge.setTexture2DArray(B,0),Le=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,B.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,B.unpackAlignment);const ke=k.getParameter(k.UNPACK_ROW_LENGTH),Et=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Gt=k.getParameter(k.UNPACK_SKIP_PIXELS),En=k.getParameter(k.UNPACK_SKIP_ROWS),Ri=k.getParameter(k.UNPACK_SKIP_IMAGES),$e=G.isCompressedTexture?G.mipmaps[H]:G.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,$e.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,$e.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,R.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,R.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,R.min.z),G.isDataTexture||G.isData3DTexture?k.texSubImage3D(Le,H,O.x,O.y,O.z,ce,me,_e,Me,we,$e.data):B.isCompressedArrayTexture?k.compressedTexSubImage3D(Le,H,O.x,O.y,O.z,ce,me,_e,Me,$e.data):k.texSubImage3D(Le,H,O.x,O.y,O.z,ce,me,_e,Me,we,$e),k.pixelStorei(k.UNPACK_ROW_LENGTH,ke),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Et),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Gt),k.pixelStorei(k.UNPACK_SKIP_ROWS,En),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ri),H===0&&B.generateMipmaps&&k.generateMipmap(Le),Se.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Ge.setTextureCube(R,0):R.isData3DTexture?Ge.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ge.setTexture2DArray(R,0):Ge.setTexture2D(R,0),Se.unbindTexture()},this.resetState=function(){A=0,w=0,E=null,Se.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===cp?"display-p3":"srgb",t.unpackColorSpace=et.workingColorSpace===bc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class bx extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $i,this.environmentIntensity=1,this.environmentRotation=new $i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ru extends Kn{constructor(e,t,i,r=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}class Lx extends pl{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ic=new I,rc=new I,mg=new Ct,fa=new dp,su=new Lc,Gf=new I,_g=new I;class GR extends Qt{constructor(e=new ei,t=new Lx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)ic.fromBufferAttribute(t,r-1),rc.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=ic.distanceTo(rc);e.setAttribute("lineDistance",new gn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),su.copy(i.boundingSphere),su.applyMatrix4(r),su.radius+=s,e.ray.intersectsSphere(su)===!1)return;mg.copy(r).invert(),fa.copy(e.ray).applyMatrix4(mg);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,u=this.isLineSegments?2:1,c=i.index,h=i.attributes.position;if(c!==null){const p=Math.max(0,o.start),x=Math.min(c.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=u){const d=c.getX(_),g=c.getX(_+1),v=ou(this,e,fa,l,d,g);v&&t.push(v)}if(this.isLineLoop){const _=c.getX(x-1),m=c.getX(p),d=ou(this,e,fa,l,_,m);d&&t.push(d)}}else{const p=Math.max(0,o.start),x=Math.min(h.count,o.start+o.count);for(let _=p,m=x-1;_<m;_+=u){const d=ou(this,e,fa,l,_,_+1);d&&t.push(d)}if(this.isLineLoop){const _=ou(this,e,fa,l,x-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function ou(n,e,t,i,r,s){const o=n.geometry.attributes.position;if(ic.fromBufferAttribute(o,r),rc.fromBufferAttribute(o,s),t.distanceSqToSegment(ic,rc,Gf,_g)>i)return;Gf.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Gf);if(!(l<e.near||l>e.far))return{distance:l,point:_g.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,object:n}}class mp extends ei{constructor(e=[],t=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:r};const s=[],o=[];a(r),u(i),c(),this.setAttribute("position",new gn(s,3)),this.setAttribute("normal",new gn(s.slice(),3)),this.setAttribute("uv",new gn(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(g){const v=new I,y=new I,A=new I;for(let w=0;w<t.length;w+=3)p(t[w+0],v),p(t[w+1],y),p(t[w+2],A),l(v,y,A,g)}function l(g,v,y,A){const w=A+1,E=[];for(let P=0;P<=w;P++){E[P]=[];const M=g.clone().lerp(y,P/w),S=v.clone().lerp(y,P/w),N=w-P;for(let F=0;F<=N;F++)F===0&&P===w?E[P][F]=M:E[P][F]=M.clone().lerp(S,F/N)}for(let P=0;P<w;P++)for(let M=0;M<2*(w-P)-1;M++){const S=Math.floor(M/2);M%2===0?(h(E[P][S+1]),h(E[P+1][S]),h(E[P][S])):(h(E[P][S+1]),h(E[P+1][S+1]),h(E[P+1][S]))}}function u(g){const v=new I;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(g),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function c(){const g=new I;for(let v=0;v<s.length;v+=3){g.x=s[v+0],g.y=s[v+1],g.z=s[v+2];const y=m(g)/2/Math.PI+.5,A=d(g)/Math.PI+.5;o.push(y,1-A)}x(),f()}function f(){for(let g=0;g<o.length;g+=6){const v=o[g+0],y=o[g+2],A=o[g+4],w=Math.max(v,y,A),E=Math.min(v,y,A);w>.9&&E<.1&&(v<.2&&(o[g+0]+=1),y<.2&&(o[g+2]+=1),A<.2&&(o[g+4]+=1))}}function h(g){s.push(g.x,g.y,g.z)}function p(g,v){const y=g*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function x(){const g=new I,v=new I,y=new I,A=new I,w=new Ee,E=new Ee,P=new Ee;for(let M=0,S=0;M<s.length;M+=9,S+=6){g.set(s[M+0],s[M+1],s[M+2]),v.set(s[M+3],s[M+4],s[M+5]),y.set(s[M+6],s[M+7],s[M+8]),w.set(o[S+0],o[S+1]),E.set(o[S+2],o[S+3]),P.set(o[S+4],o[S+5]),A.copy(g).add(v).add(y).divideScalar(3);const N=m(A);_(w,S+0,g,N),_(E,S+2,v,N),_(P,S+4,y,N)}}function _(g,v,y,A){A<0&&g.x===1&&(o[v]=g.x-1),y.x===0&&y.z===0&&(o[v]=A/2/Math.PI+.5)}function m(g){return Math.atan2(g.z,-g.x)}function d(g){return Math.atan2(-g.y,Math.sqrt(g.x*g.x+g.z*g.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mp(e.vertices,e.indices,e.radius,e.details)}}class _p extends mp{constructor(e=1,t=0){const i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new _p(e.radius,e.detail)}}class gp extends ei{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new I,h=new I,p=[],x=[],_=[],m=[];for(let d=0;d<=i;d++){const g=[],v=d/i;let y=0;d===0&&o===0?y=.5/t:d===i&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){const w=A/t;f.x=-e*Math.cos(r+w*s)*Math.sin(o+v*a),f.y=e*Math.cos(o+v*a),f.z=e*Math.sin(r+w*s)*Math.sin(o+v*a),x.push(f.x,f.y,f.z),h.copy(f).normalize(),_.push(h.x,h.y,h.z),m.push(w+y,1-v),g.push(u++)}c.push(g)}for(let d=0;d<i;d++)for(let g=0;g<t;g++){const v=c[d][g+1],y=c[d][g],A=c[d+1][g],w=c[d+1][g+1];(d!==0||o>0)&&p.push(v,y,w),(d!==i-1||l<Math.PI)&&p.push(y,A,w)}this.setIndex(p),this.setAttribute("position",new gn(x,3)),this.setAttribute("normal",new gn(_,3)),this.setAttribute("uv",new gn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const gg={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class WR{constructor(e,t,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],x=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return x}return null}}}const XR=new WR;class vp{constructor(e){this.manager=e!==void 0?e:XR,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}vp.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ii={};class YR extends Error{constructor(e,t){super(e),this.response=t}}class Dx extends vp{constructor(e){super(e)}load(e,t,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=gg.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Ii[e]!==void 0){Ii[e].push({onLoad:t,onProgress:i,onError:r});return}Ii[e]=[],Ii[e].push({onLoad:t,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=Ii[e],f=u.body.getReader(),h=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=h?parseInt(h):0,x=p!==0;let _=0;const m=new ReadableStream({start(d){g();function g(){f.read().then(({done:v,value:y})=>{if(v)d.close();else{_+=y.byteLength;const A=new ProgressEvent("progress",{lengthComputable:x,loaded:_,total:p});for(let w=0,E=c.length;w<E;w++){const P=c[w];P.onProgress&&P.onProgress(A)}d.enqueue(y),g()}})}}});return new Response(m)}else throw new YR(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return u.arrayBuffer().then(x=>p.decode(x))}}}).then(u=>{gg.add(e,u);const c=Ii[e];delete Ii[e];for(let f=0,h=c.length;f<h;f++){const p=c[f];p.onLoad&&p.onLoad(u)}}).catch(u=>{const c=Ii[e];if(c===void 0)throw this.manager.itemError(e),u;delete Ii[e];for(let f=0,h=c.length;f<h;f++){const p=c[f];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class jR extends ei{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}let au,Nx=class{static getContext(){return au===void 0&&(au=new(window.AudioContext||window.webkitAudioContext)),au}static setContext(e){au=e}};class qR extends vp{constructor(e){super(e)}load(e,t,i,r){const s=this,o=new Dx(this.manager);o.setResponseType("arraybuffer"),o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){try{const u=l.slice(0);Nx.getContext().decodeAudioData(u,function(f){t(f)}).catch(a)}catch(u){a(u)}},i,r);function a(l){r?r(l):console.error(l),s.manager.itemError(e)}}}class Ix{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vg(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vg();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vg(){return(typeof performance>"u"?Date:performance).now()}const Jr=new I,xg=new kr,$R=new I,es=new I;class KR extends Qt{constructor(){super(),this.type="AudioListener",this.context=Nx.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Ix}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,i=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(Jr,xg,$R),es.set(0,0,-1).applyQuaternion(xg),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(Jr.x,r),t.positionY.linearRampToValueAtTime(Jr.y,r),t.positionZ.linearRampToValueAtTime(Jr.z,r),t.forwardX.linearRampToValueAtTime(es.x,r),t.forwardY.linearRampToValueAtTime(es.y,r),t.forwardZ.linearRampToValueAtTime(es.z,r),t.upX.linearRampToValueAtTime(i.x,r),t.upY.linearRampToValueAtTime(i.y,r),t.upZ.linearRampToValueAtTime(i.z,r)}else t.setPosition(Jr.x,Jr.y,Jr.z),t.setOrientation(es.x,es.y,es.z,i.x,i.y,i.z)}}class ZR extends Qt{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}class QR{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let i=0;i<t.length;i++)e+=t[i];return e/t.length}}class yg{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Kt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:up}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=up);const Sg={type:"change"},Wf={type:"start"},Mg={type:"end"},lu=new dp,Eg=new fr,JR=Math.cos(70*N1.DEG2RAD);class eP extends Ls{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Is.ROTATE,MIDDLE:Is.DOLLY,RIGHT:Is.PAN},this.touches={ONE:Us.ROTATE,TWO:Us.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(T){T.addEventListener("keydown",Te),this._domElementKeyEvents=T},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Te),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Sg),i.update(),s=r.NONE},this.update=function(){const T=new I,U=new kr().setFromUnitVectors(e.up,new I(0,1,0)),z=U.clone().invert(),Q=new I,re=new kr,Pe=new I,Fe=2*Math.PI;return function(Nt=null){const je=i.object.position;T.copy(je).sub(i.target),T.applyQuaternion(U),a.setFromVector3(T),i.autoRotate&&s===r.NONE&&F(S(Nt)),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Mt=i.minAzimuthAngle,rt=i.maxAzimuthAngle;isFinite(Mt)&&isFinite(rt)&&(Mt<-Math.PI?Mt+=Fe:Mt>Math.PI&&(Mt-=Fe),rt<-Math.PI?rt+=Fe:rt>Math.PI&&(rt-=Fe),Mt<=rt?a.theta=Math.max(Mt,Math.min(rt,a.theta)):a.theta=a.theta>(Mt+rt)/2?Math.max(Mt,a.theta):Math.min(rt,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let Ji=!1;if(i.zoomToCursor&&w||i.object.isOrthographicCamera)a.radius=j(a.radius);else{const kn=a.radius;a.radius=j(a.radius*u),Ji=kn!=a.radius}if(T.setFromSpherical(a),T.applyQuaternion(z),je.copy(i.target).add(T),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),i.zoomToCursor&&w){let kn=null;if(i.object.isPerspectiveCamera){const er=T.length();kn=j(er*u);const Ci=er-kn;i.object.position.addScaledVector(y,Ci),i.object.updateMatrixWorld(),Ji=!!Ci}else if(i.object.isOrthographicCamera){const er=new I(A.x,A.y,0);er.unproject(i.object);const Ci=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),i.object.updateProjectionMatrix(),Ji=Ci!==i.object.zoom;const Ko=new I(A.x,A.y,0);Ko.unproject(i.object),i.object.position.sub(Ko).add(er),i.object.updateMatrixWorld(),kn=T.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;kn!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(kn).add(i.object.position):(lu.origin.copy(i.object.position),lu.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(lu.direction))<JR?e.lookAt(i.target):(Eg.setFromNormalAndCoplanarPoint(i.object.up,i.target),lu.intersectPlane(Eg,i.target))))}else if(i.object.isOrthographicCamera){const kn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/u)),kn!==i.object.zoom&&(i.object.updateProjectionMatrix(),Ji=!0)}return u=1,w=!1,Ji||Q.distanceToSquared(i.object.position)>o||8*(1-re.dot(i.object.quaternion))>o||Pe.distanceToSquared(i.target)>o?(i.dispatchEvent(Sg),Q.copy(i.object.position),re.copy(i.object.quaternion),Pe.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",We),i.domElement.removeEventListener("pointerdown",b),i.domElement.removeEventListener("pointercancel",W),i.domElement.removeEventListener("wheel",te),i.domElement.removeEventListener("pointermove",C),i.domElement.removeEventListener("pointerup",W),i.domElement.getRootNode().removeEventListener("keydown",ue,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Te),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new yg,l=new yg;let u=1;const c=new I,f=new Ee,h=new Ee,p=new Ee,x=new Ee,_=new Ee,m=new Ee,d=new Ee,g=new Ee,v=new Ee,y=new I,A=new Ee;let w=!1;const E=[],P={};let M=!1;function S(T){return T!==null?2*Math.PI/60*i.autoRotateSpeed*T:2*Math.PI/60/60*i.autoRotateSpeed}function N(T){const U=Math.abs(T*.01);return Math.pow(.95,i.zoomSpeed*U)}function F(T){l.theta-=T}function L(T){l.phi-=T}const q=function(){const T=new I;return function(z,Q){T.setFromMatrixColumn(Q,0),T.multiplyScalar(-z),c.add(T)}}(),X=function(){const T=new I;return function(z,Q){i.screenSpacePanning===!0?T.setFromMatrixColumn(Q,1):(T.setFromMatrixColumn(Q,0),T.crossVectors(i.object.up,T)),T.multiplyScalar(z),c.add(T)}}(),$=function(){const T=new I;return function(z,Q){const re=i.domElement;if(i.object.isPerspectiveCamera){const Pe=i.object.position;T.copy(Pe).sub(i.target);let Fe=T.length();Fe*=Math.tan(i.object.fov/2*Math.PI/180),q(2*z*Fe/re.clientHeight,i.object.matrix),X(2*Q*Fe/re.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(q(z*(i.object.right-i.object.left)/i.object.zoom/re.clientWidth,i.object.matrix),X(Q*(i.object.top-i.object.bottom)/i.object.zoom/re.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function K(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u/=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function D(T){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?u*=T:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function Y(T,U){if(!i.zoomToCursor)return;w=!0;const z=i.domElement.getBoundingClientRect(),Q=T-z.left,re=U-z.top,Pe=z.width,Fe=z.height;A.x=Q/Pe*2-1,A.y=-(re/Fe)*2+1,y.set(A.x,A.y,1).unproject(i.object).sub(i.object.position).normalize()}function j(T){return Math.max(i.minDistance,Math.min(i.maxDistance,T))}function ie(T){f.set(T.clientX,T.clientY)}function pe(T){Y(T.clientX,T.clientX),d.set(T.clientX,T.clientY)}function ze(T){x.set(T.clientX,T.clientY)}function V(T){h.set(T.clientX,T.clientY),p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const U=i.domElement;F(2*Math.PI*p.x/U.clientHeight),L(2*Math.PI*p.y/U.clientHeight),f.copy(h),i.update()}function ee(T){g.set(T.clientX,T.clientY),v.subVectors(g,d),v.y>0?K(N(v.y)):v.y<0&&D(N(v.y)),d.copy(g),i.update()}function fe(T){_.set(T.clientX,T.clientY),m.subVectors(_,x).multiplyScalar(i.panSpeed),$(m.x,m.y),x.copy(_),i.update()}function oe(T){Y(T.clientX,T.clientY),T.deltaY<0?D(N(T.deltaY)):T.deltaY>0&&K(N(T.deltaY)),i.update()}function Be(T){let U=!1;switch(T.code){case i.keys.UP:T.ctrlKey||T.metaKey||T.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,i.keyPanSpeed),U=!0;break;case i.keys.BOTTOM:T.ctrlKey||T.metaKey||T.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(0,-i.keyPanSpeed),U=!0;break;case i.keys.LEFT:T.ctrlKey||T.metaKey||T.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(i.keyPanSpeed,0),U=!0;break;case i.keys.RIGHT:T.ctrlKey||T.metaKey||T.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):$(-i.keyPanSpeed,0),U=!0;break}U&&(T.preventDefault(),i.update())}function Ue(T){if(E.length===1)f.set(T.pageX,T.pageY);else{const U=Je(T),z=.5*(T.pageX+U.x),Q=.5*(T.pageY+U.y);f.set(z,Q)}}function k(T){if(E.length===1)x.set(T.pageX,T.pageY);else{const U=Je(T),z=.5*(T.pageX+U.x),Q=.5*(T.pageY+U.y);x.set(z,Q)}}function Ze(T){const U=Je(T),z=T.pageX-U.x,Q=T.pageY-U.y,re=Math.sqrt(z*z+Q*Q);d.set(0,re)}function xe(T){i.enableZoom&&Ze(T),i.enablePan&&k(T)}function Qe(T){i.enableZoom&&Ze(T),i.enableRotate&&Ue(T)}function Se(T){if(E.length==1)h.set(T.pageX,T.pageY);else{const z=Je(T),Q=.5*(T.pageX+z.x),re=.5*(T.pageY+z.y);h.set(Q,re)}p.subVectors(h,f).multiplyScalar(i.rotateSpeed);const U=i.domElement;F(2*Math.PI*p.x/U.clientHeight),L(2*Math.PI*p.y/U.clientHeight),f.copy(h)}function He(T){if(E.length===1)_.set(T.pageX,T.pageY);else{const U=Je(T),z=.5*(T.pageX+U.x),Q=.5*(T.pageY+U.y);_.set(z,Q)}m.subVectors(_,x).multiplyScalar(i.panSpeed),$(m.x,m.y),x.copy(_)}function Ce(T){const U=Je(T),z=T.pageX-U.x,Q=T.pageY-U.y,re=Math.sqrt(z*z+Q*Q);g.set(0,re),v.set(0,Math.pow(g.y/d.y,i.zoomSpeed)),K(v.y),d.copy(g);const Pe=(T.pageX+U.x)*.5,Fe=(T.pageY+U.y)*.5;Y(Pe,Fe)}function Ge(T){i.enableZoom&&Ce(T),i.enablePan&&He(T)}function lt(T){i.enableZoom&&Ce(T),i.enableRotate&&Se(T)}function b(T){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(T.pointerId),i.domElement.addEventListener("pointermove",C),i.domElement.addEventListener("pointerup",W)),!Re(T)&&(ye(T),T.pointerType==="touch"?se(T):Z(T)))}function C(T){i.enabled!==!1&&(T.pointerType==="touch"?ge(T):J(T))}function W(T){switch(he(T),E.length){case 0:i.domElement.releasePointerCapture(T.pointerId),i.domElement.removeEventListener("pointermove",C),i.domElement.removeEventListener("pointerup",W),i.dispatchEvent(Mg),s=r.NONE;break;case 1:const U=E[0],z=P[U];se({pointerId:U,pageX:z.x,pageY:z.y});break}}function Z(T){let U;switch(T.button){case 0:U=i.mouseButtons.LEFT;break;case 1:U=i.mouseButtons.MIDDLE;break;case 2:U=i.mouseButtons.RIGHT;break;default:U=-1}switch(U){case Is.DOLLY:if(i.enableZoom===!1)return;pe(T),s=r.DOLLY;break;case Is.ROTATE:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enablePan===!1)return;ze(T),s=r.PAN}else{if(i.enableRotate===!1)return;ie(T),s=r.ROTATE}break;case Is.PAN:if(T.ctrlKey||T.metaKey||T.shiftKey){if(i.enableRotate===!1)return;ie(T),s=r.ROTATE}else{if(i.enablePan===!1)return;ze(T),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Wf)}function J(T){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;V(T);break;case r.DOLLY:if(i.enableZoom===!1)return;ee(T);break;case r.PAN:if(i.enablePan===!1)return;fe(T);break}}function te(T){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(T.preventDefault(),i.dispatchEvent(Wf),oe(ve(T)),i.dispatchEvent(Mg))}function ve(T){const U=T.deltaMode,z={clientX:T.clientX,clientY:T.clientY,deltaY:T.deltaY};switch(U){case 1:z.deltaY*=16;break;case 2:z.deltaY*=100;break}return T.ctrlKey&&!M&&(z.deltaY*=10),z}function ue(T){T.key==="Control"&&(M=!0,i.domElement.getRootNode().addEventListener("keyup",le,{passive:!0,capture:!0}))}function le(T){T.key==="Control"&&(M=!1,i.domElement.getRootNode().removeEventListener("keyup",le,{passive:!0,capture:!0}))}function Te(T){i.enabled===!1||i.enablePan===!1||Be(T)}function se(T){switch(Oe(T),E.length){case 1:switch(i.touches.ONE){case Us.ROTATE:if(i.enableRotate===!1)return;Ue(T),s=r.TOUCH_ROTATE;break;case Us.PAN:if(i.enablePan===!1)return;k(T),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Us.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;xe(T),s=r.TOUCH_DOLLY_PAN;break;case Us.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Qe(T),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Wf)}function ge(T){switch(Oe(T),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Se(T),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;He(T),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ge(T),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;lt(T),i.update();break;default:s=r.NONE}}function We(T){i.enabled!==!1&&T.preventDefault()}function ye(T){E.push(T.pointerId)}function he(T){delete P[T.pointerId];for(let U=0;U<E.length;U++)if(E[U]==T.pointerId){E.splice(U,1);return}}function Re(T){for(let U=0;U<E.length;U++)if(E[U]==T.pointerId)return!0;return!1}function Oe(T){let U=P[T.pointerId];U===void 0&&(U=new Ee,P[T.pointerId]=U),U.set(T.pageX,T.pageY)}function Je(T){const U=T.pointerId===E[0]?E[1]:E[0];return P[U]}i.domElement.addEventListener("contextmenu",We),i.domElement.addEventListener("pointerdown",b),i.domElement.addEventListener("pointercancel",W),i.domElement.addEventListener("wheel",te,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ue,{passive:!0,capture:!0}),this.update()}}class tP{constructor(e,t=8192,i=.8){Ie(this,"audio");Ie(this,"audioContext");Ie(this,"audioSource");Ie(this,"analyser");Ie(this,"frequencyData");Ie(this,"pause",()=>this.audio.pause());this.audio=e,this.audioContext=new AudioContext,this.audioSource=this.audioContext.createMediaElementSource(this.audio),this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=t,this.analyser.smoothingTimeConstant=i,this.frequencyData=new Uint8Array(this.analyser.frequencyBinCount),this.audioSource.connect(this.analyser),this.analyser.connect(this.audioContext.destination)}play(){this.audioContext.resume().then(()=>this.audio.play()).catch(console.error)}get frequency(){return this.analyser.getByteFrequencyData(this.frequencyData),this.frequencyData}}class nP{constructor(e=100,t=4e3,i=60){Ie(this,"geometry");Ie(this,"lineMaterial");Ie(this,"initPositions");Ie(this,"numParticles");Ie(this,"radius");Ie(this,"step");Ie(this,"turns");this.numParticles=t,this.radius=e,this.step=2/t,this.turns=i,this.geometry=new ei,this.lineMaterial=new Lx({color:16777215}),this.initPositions=new Float32Array(t*3),this.init()}init(){const e=new Float32Array(this.numParticles*3);let t=0;for(let i=-1;i<=1;i+=this.step){const r=Math.acos(i),s=2*this.turns*r%(2*Math.PI);e[t++]=this.radius*Math.sin(r)*Math.cos(s),e[t++]=this.radius*Math.sin(r)*Math.sin(s),e[t++]=this.radius*Math.cos(r)}this.initPositions=new Float32Array([...e]),this.geometry.setAttribute("position",new Kn(e,3))}set positionNeedsUpdate(e){this.geometry.getAttribute("position").needsUpdate=e,this.geometry.computeBoundingBox(),this.geometry.computeBoundingSphere()}get lineMesh(){return new GR(this.geometry,this.lineMaterial)}}function Fi(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Ux(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Nn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Bo={duration:.5,overwrite:!1,delay:0},xp,Jt,ft,jn=1e8,nt=1/jn,eh=Math.PI*2,iP=eh/4,rP=0,Ox=Math.sqrt,sP=Math.cos,oP=Math.sin,kt=function(e){return typeof e=="string"},xt=function(e){return typeof e=="function"},Ki=function(e){return typeof e=="number"},yp=function(e){return typeof e>"u"},Ai=function(e){return typeof e=="object"},vn=function(e){return e!==!1},Sp=function(){return typeof window<"u"},uu=function(e){return xt(e)||kt(e)},Fx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},en=Array.isArray,th=/(?:-?\.?\d|\.)+/gi,kx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,mo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Xf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zx=/[+-]=-?[.\d]+/,Bx=/[^,'"\[\]\s]+/gi,aP=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,pt,mi,nh,Mp,Un={},sc={},Hx,Vx=function(e){return(sc=Cs(e,Un))&&Mn},Ep=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},el=function(e,t){return!t&&console.warn(e)},Gx=function(e,t){return e&&(Un[e]=t)&&sc&&(sc[e]=t)||Un},tl=function(){return 0},lP={suppressEvents:!0,isStart:!0,kill:!1},Eu={suppressEvents:!0,kill:!1},uP={suppressEvents:!0},Tp={},Dr=[],ih={},Wx,Cn={},Yf={},Tg=30,Tu=[],wp="",Ap=function(e){var t=e[0],i,r;if(Ai(t)||xt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=Tu.length;r--&&!Tu[r].targetTest(t););i=Tu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new py(e[r],i)))||e.splice(r,1);return e},gs=function(e){return e._gsap||Ap(qn(e))[0]._gsap},Xx=function(e,t,i){return(i=e[t])&&xt(i)?e[t]():yp(i)&&e.getAttribute&&e.getAttribute(t)||i},xn=function(e,t){return(e=e.split(",")).forEach(t)||e},yt=function(e){return Math.round(e*1e5)/1e5||0},Ot=function(e){return Math.round(e*1e7)/1e7||0},Ao=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},cP=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},oc=function(){var e=Dr.length,t=Dr.slice(0),i,r;for(ih={},Dr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Yx=function(e,t,i,r){Dr.length&&!Jt&&oc(),e.render(t,i,Jt&&t<0&&(e._initted||e._startAt)),Dr.length&&!Jt&&oc()},jx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Bx).length<2?t:kt(e)?e.trim():e},qx=function(e){return e},Jn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},fP=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Cs=function(e,t){for(var i in t)e[i]=t[i];return e},wg=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ai(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},ac=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Da=function(e){var t=e.parent||pt,i=e.keyframes?fP(en(e.keyframes)):Jn;if(vn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},dP=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},$x=function(e,t,i,r,s){var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},Nc=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},zr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},vs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},hP=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},rh=function(e,t,i,r){return e._startAt&&(Jt?e._startAt.revert(Eu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},pP=function n(e){return!e||e._ts&&n(e.parent)},Ag=function(e){return e._repeat?Ho(e._tTime,e=e.duration()+e._rDelay)*e:0},Ho=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},lc=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ic=function(e){return e._end=Ot(e._start+(e._tDur/Math.abs(e._ts||e._rts||nt)||0))},Uc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=Ot(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ic(e),i._dirty||vs(i,e)),e},Kx=function(e,t){var i;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(i=lc(e.rawTime(),t),(!t._dur||gl(0,t.totalDuration(),i)-t._tTime>nt)&&t.render(i,!0)),vs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-nt}},xi=function(e,t,i,r){return t.parent&&zr(t),t._start=Ot((Ki(i)?i:i||e!==pt?Hn(e,i,t):e._time)+t._delay),t._end=Ot(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),$x(e,t,"_first","_last",e._sort?"_start":0),sh(t)||(e._recent=t),r||Kx(e,t),e._ts<0&&Uc(e,e._tTime),e},Zx=function(e,t){return(Un.ScrollTrigger||Ep("scrollTrigger",t))&&Un.ScrollTrigger.create(t,e)},Qx=function(e,t,i,r,s){if(Rp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Jt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Wx!==Pn.frame)return Dr.push(e),e._lazy=[s,r],1},mP=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},sh=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},_P=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&mP(e)&&!(!e._initted&&sh(e))||(e._ts<0||e._dp._ts<0)&&!sh(e))?0:1,a=e._rDelay,l=0,u,c,f;if(a&&e._repeat&&(l=gl(0,e._tDur,t),c=Ho(l,a),e._yoyo&&c&1&&(o=1-o),c!==Ho(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Jt||r||e._zTime===nt||!t&&e._zTime){if(!e._initted&&Qx(e,t,r,i,l))return;for(f=e._zTime,e._zTime=t||(i?nt:0),i||(i=t&&!f),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&rh(e,t,i,!0),e._onUpdate&&!i&&Ln(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Ln(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&zr(e,1),!i&&!Jt&&(Ln(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},gP=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},Vo=function(e,t,i,r){var s=e._repeat,o=Ot(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ot(o*(s+1)+e._rDelay*s):o,a>0&&!r&&Uc(e,e._tTime=e._tDur*a),e.parent&&Ic(e),i||vs(e.parent,e),e},Cg=function(e){return e instanceof on?vs(e):Vo(e,e._dur)},vP={_start:0,endTime:tl,totalDuration:tl},Hn=function n(e,t,i){var r=e.labels,s=e._recent||vP,o=e.duration()>=jn?s.endTime(!1):e._dur,a,l,u;return kt(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*(en(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Na=function(e,t,i){var r=Ki(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=vn(l.vars.inherit)&&l.parent;o.immediateRender=vn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new wt(t[0],o,t[s+1])},Xr=function(e,t){return e||e===0?t(e):t},gl=function(e,t,i){return i<e?e:i>t?t:i},Zt=function(e,t){return!kt(e)||!(t=aP.exec(e))?"":t[1]},xP=function(e,t,i){return Xr(i,function(r){return gl(e,t,r)})},oh=[].slice,Jx=function(e,t){return e&&Ai(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ai(e[0]))&&!e.nodeType&&e!==mi},yP=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return kt(r)&&!t||Jx(r,1)?(s=i).push.apply(s,qn(r)):i.push(r)})||i},qn=function(e,t,i){return ft&&!t&&ft.selector?ft.selector(e):kt(e)&&!i&&(nh||!Go())?oh.call((t||Mp).querySelectorAll(e),0):en(e)?yP(e,i):Jx(e)?oh.call(e,0):e?[e]:[]},ah=function(e){return e=qn(e)[0]||el("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return qn(t,i.querySelectorAll?i:i===e?el("Invalid scope")||Mp.createElement("div"):e)}},ey=function(e){return e.sort(function(){return .5-Math.random()})},ty=function(e){if(xt(e))return e;var t=Ai(e)?e:{each:e},i=xs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,f=r;return kt(r)?c=f={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],f=r[1]),function(h,p,x){var _=(x||t).length,m=o[_],d,g,v,y,A,w,E,P,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,jn])[1],!M){for(E=-jn;E<(E=x[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(m=o[_]=[],d=l?Math.min(M,_)*c-.5:r%M,g=M===jn?0:l?_*f/M-.5:r/M|0,E=0,P=jn,w=0;w<_;w++)v=w%M-d,y=g-(w/M|0),m[w]=A=u?Math.abs(u==="y"?y:v):Ox(v*v+y*y),A>E&&(E=A),A<P&&(P=A);r==="random"&&ey(m),m.max=E-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:u?u==="y"?_/M:M:Math.max(M,_/M))||0)*(r==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Zt(t.amount||t.each)||0,i=i&&_<0?fy(i):i}return _=(m[h]-m.min)/m.max||0,Ot(m.b+(i?i(_):_)*m.v)+m.u}},lh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=Ot(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(Ki(i)?0:Zt(i))}},ny=function(e,t){var i=en(e),r,s;return!i&&Ai(e)&&(r=i=e.radius||jn,e.values?(e=qn(e.values),(s=!Ki(e[0]))&&(r*=r)):e=lh(e.increment)),Xr(t,i?xt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=jn,c=0,f=e.length,h,p;f--;)s?(h=e[f].x-a,p=e[f].y-l,h=h*h+p*p):h=Math.abs(e[f]-a),h<u&&(u=h,c=f);return c=!r||u<=r?e[c]:o,s||c===o||Ki(o)?c:c+Zt(o)}:lh(e))},iy=function(e,t,i,r){return Xr(en(e)?!t:i===!0?!!(i=0):!r,function(){return en(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},SP=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},MP=function(e,t){return function(i){return e(parseFloat(i))+(t||Zt(i))}},EP=function(e,t,i){return sy(e,t,0,1,i)},ry=function(e,t,i){return Xr(i,function(r){return e[~~t(r)]})},TP=function n(e,t,i){var r=t-e;return en(e)?ry(e,n(0,e.length),t):Xr(i,function(s){return(r+(s-e)%r)%r+e})},wP=function n(e,t,i){var r=t-e,s=r*2;return en(e)?ry(e,n(0,e.length-1),t):Xr(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},nl=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Bx:th),i+=e.substr(t,r-t)+iy(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},sy=function(e,t,i,r,s){var o=t-e,a=r-i;return Xr(s,function(l){return i+((l-e)/o*a||0)})},AP=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=kt(e),a={},l,u,c,f,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if(en(e)&&!en(t)){for(c=[],f=e.length,h=f-2,u=1;u<f;u++)c.push(n(e[u-1],e[u]));f--,s=function(x){x*=f;var _=Math.min(h,~~x);return c[_](x-_)},i=t}else r||(e=Cs(en(e)?[]:{},e));if(!c){for(l in t)Cp.call(a,e,l,"get",t[l]);s=function(x){return Lp(x,a)||(o?e.p:e)}}}return Xr(i,s)},Rg=function(e,t,i){var r=e.labels,s=jn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Ln=function(e,t,i){var r=e.vars,s=r[t],o=ft,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Dr.length&&oc(),a&&(ft=a),c=l?s.apply(u,l):s.call(u),ft=o,c},xa=function(e){return zr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Jt),e.progress()<1&&Ln(e,"onInterrupt"),e},_o,oy=[],ay=function(e){if(e)if(e=!e.name&&e.default||e,Sp()||e.headless){var t=e.name,i=xt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:tl,render:Lp,add:Cp,kill:VP,modifier:HP,rawVars:0},o={targetTest:0,get:0,getSetter:bp,aliases:{},register:0};if(Go(),e!==r){if(Cn[t])return;Jn(r,Jn(ac(e,s),o)),Cs(r.prototype,Cs(s,ac(e,o))),Cn[r.prop=t]=r,e.targetTest&&(Tu.push(r),Tp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Gx(t,r),e.register&&e.register(Mn,r,yn)}else oy.push(e)},tt=255,ya={aqua:[0,tt,tt],lime:[0,tt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,tt],navy:[0,0,128],white:[tt,tt,tt],olive:[128,128,0],yellow:[tt,tt,0],orange:[tt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[tt,0,0],pink:[tt,192,203],cyan:[0,tt,tt],transparent:[tt,tt,tt,0]},jf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*tt+.5|0},ly=function(e,t,i){var r=e?Ki(e)?[e>>16,e>>8&tt,e&tt]:0:ya.black,s,o,a,l,u,c,f,h,p,x;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ya[e])r=ya[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&tt,r&tt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&tt,e&tt]}else if(e.substr(0,3)==="hsl"){if(r=x=e.match(th),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=jf(l+1/3,s,o),r[1]=jf(l,s,o),r[2]=jf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(kx),i&&r.length<4&&(r[3]=1),r}else r=e.match(th)||ya.transparent;r=r.map(Number)}return t&&!x&&(s=r[0]/tt,o=r[1]/tt,a=r[2]/tt,f=Math.max(s,o,a),h=Math.min(s,o,a),c=(f+h)/2,f===h?l=u=0:(p=f-h,u=c>.5?p/(2-f-h):p/(f+h),l=f===s?(o-a)/p+(o<a?6:0):f===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},uy=function(e){var t=[],i=[],r=-1;return e.split(Nr).forEach(function(s){var o=s.match(mo)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},Pg=function(e,t,i){var r="",s=(e+r).match(Nr),o=t?"hsla(":"rgba(",a=0,l,u,c,f;if(!s)return e;if(s=s.map(function(h){return(h=ly(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=uy(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(Nr,"1").split(mo),f=u.length-1;a<f;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(Nr),f=u.length-1;a<f;a++)r+=u[a]+s[a];return r+u[f]},Nr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ya)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),CP=/hsl[a]?\(/,cy=function(e){var t=e.join(" "),i;if(Nr.lastIndex=0,Nr.test(t))return i=CP.test(t),e[1]=Pg(e[1],i),e[0]=Pg(e[0],i,uy(e[1])),!0},il,Pn=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,f,h,p,x=function _(m){var d=n()-r,g=m===!0,v,y,A,w;if((d>e||d<0)&&(i+=d-t),r+=d,A=r-i,v=A-o,(v>0||g)&&(w=++f.frame,h=A-f.time*1e3,f.time=A=A/1e3,o+=v+(v>=s?4:s-v),y=1),g||(l=u(_)),y)for(p=0;p<a.length;p++)a[p](A,h,w,m)};return f={time:0,frame:0,tick:function(){x(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Hx&&(!nh&&Sp()&&(mi=nh=window,Mp=mi.document||{},Un.gsap=Mn,(mi.gsapVersions||(mi.gsapVersions=[])).push(Mn.version),Vx(sc||mi.GreenSockGlobals||!mi.gsap&&mi||{}),oy.forEach(ay)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),u=c||function(m){return setTimeout(m,o-f.time*1e3+1|0)},il=1,x(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(l),il=0,u=tl},lagSmoothing:function(m,d){e=m||1/0,t=Math.min(d||33,e)},fps:function(m){s=1e3/(m||240),o=f.time*1e3+s},add:function(m,d,g){var v=d?function(y,A,w,E){m(y,A,w,E),f.remove(v)}:m;return f.remove(m),a[g?"unshift":"push"](v),Go(),v},remove:function(m,d){~(d=a.indexOf(m))&&a.splice(d,1)&&p>=d&&p--},_listeners:a},f}(),Go=function(){return!il&&Pn.wake()},Xe={},RP=/^[\d.\-M][\d.\-,\s]/,PP=/["']/g,bP=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(PP,"").trim():+u,r=l.substr(a+1).trim();return t},LP=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},DP=function(e){var t=(e+"").split("("),i=Xe[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[bP(t[1])]:LP(e).split(",").map(jx)):Xe._CE&&RP.test(e)?Xe._CE("",e):i},fy=function(e){return function(t){return 1-e(1-t)}},dy=function n(e,t){for(var i=e._first,r;i;)i instanceof on?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},xs=function(e,t){return e&&(xt(e)?e:Xe[e]||DP(e))||t},Ds=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return xn(e,function(a){Xe[a]=Un[a]=s,Xe[o=a.toLowerCase()]=i;for(var l in s)Xe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Xe[a+"."+l]=s[l]}),s},hy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},qf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/eh*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*oP((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:hy(a);return s=eh/s,l.config=function(u,c){return n(e,u,c)},l},$f=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:hy(i);return r.config=function(s){return n(e,s)},r};xn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;Ds(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});Xe.Linear.easeNone=Xe.none=Xe.Linear.easeIn;Ds("Elastic",qf("in"),qf("out"),qf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};Ds("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ds("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});Ds("Circ",function(n){return-(Ox(1-n*n)-1)});Ds("Sine",function(n){return n===1?1:-sP(n*iP)+1});Ds("Back",$f("in"),$f("out"),$f());Xe.SteppedEase=Xe.steps=Un.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-nt;return function(a){return((r*gl(0,o,a)|0)+s)*i}}};Bo.ease=Xe["quad.out"];xn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return wp+=n+","+n+"Params,"});var py=function(e,t){this.id=rP++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xx,this.set=t?t.getSetter:bp},rl=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Vo(this,+t.duration,1,1),this.data=t.data,ft&&(this._ctx=ft,ft.data.push(this)),il||Pn.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,Vo(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Go(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Uc(this,i),!s._dp||s.parent||Kx(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&xi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===nt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Yx(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Ag(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Ag(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Ho(this._tTime,s)+1:1},e.timeScale=function(i,r){if(!arguments.length)return this._rts===-nt?0:this._rts;if(this._rts===i)return this;var s=this.parent&&this._ts?lc(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-nt?0:this._rts,this.totalTime(gl(-Math.abs(this._delay),this._tDur,s),r!==!1),Ic(this),hP(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Go(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==nt&&(this._tTime-=nt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&xi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(vn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?lc(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=uP);var r=Jt;return Jt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Jt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,Cg(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,Cg(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(Hn(this,i),vn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,vn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-nt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-nt,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-nt)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=xt(i)?i:qx,a=function(){var u=r.then;r.then=null,xt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){xa(this)},n}();Jn(rl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-nt,_prom:0,_ps:!1,_rts:1});var on=function(n){Ux(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=vn(i.sortChildren),pt&&xi(i.parent||pt,Fi(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Zx(Fi(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Na(0,arguments,this),this},t.from=function(r,s,o){return Na(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Na(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Da(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new wt(r,s,Hn(this,o),1),this},t.call=function(r,s,o){return xi(this,wt.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new wt(r,o,Hn(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Da(o).immediateRender=vn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,f){return a.startAt=o,Da(a).immediateRender=vn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,f)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:Ot(r),f=this._zTime<0!=r<0&&(this._initted||!u),h,p,x,_,m,d,g,v,y,A,w,E;if(this!==pt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||f){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,v=this._ts,d=!v,f&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(w=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=Ot(c%m),c===l?(_=this._repeat,h=u):(_=~~(c/m),_&&_===c/m&&(h=u,_--),h>u&&(h=u)),A=Ho(this._tTime,m),!a&&this._tTime&&A!==_&&this._tTime-A*m-this._dur<=0&&(A=_),w&&_&1&&(h=u-h,E=1),_!==A&&!this._lock){var P=w&&A&1,M=P===(w&&_&1);if(_<A&&(P=!P),a=P?0:c%u?u:c,this._lock=1,this.render(a||(E?0:Ot(_*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Ln(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1),a&&a!==this._time||d!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=P?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!d)return this;dy(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(g=gP(this,Ot(a),Ot(h)),g&&(c-=h-(h=g._start))),this._tTime=c,this._time=h,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!_&&(Ln(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(x=p._next,(p._act||h>=p._start)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!d){g=0,x&&(c+=this._zTime=-nt);break}}p=x}else{p=this._last;for(var S=r<0?r:h;p;){if(x=p._prev,(p._act||S<=p._end)&&p._ts&&g!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(S-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(S-p._start)*p._ts,s,o||Jt&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!d){g=0,x&&(c+=this._zTime=S?-nt:nt);break}}p=x}}if(g&&!s&&(this.pause(),g.render(h>=a?0:-nt)._zTime=h>=a?1:-1,this._ts))return this._start=y,Ic(this),this.render(r,s,o);this._onUpdate&&!s&&Ln(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&zr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Ln(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(Ki(s)||(s=Hn(this,s,r)),!(r instanceof rl)){if(en(r))return r.forEach(function(a){return o.add(a,s)}),this;if(kt(r))return this.addLabel(r,s);if(xt(r))r=wt.delayedCall(0,r);else return this}return this!==r?xi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-jn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof wt?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return kt(r)?this.removeLabel(r):xt(r)?this.killTweensOf(r):(Nc(this,r),r===this._recent&&(this._recent=this._last),vs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ot(Pn.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=Hn(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=wt.delayedCall(0,s||tl,o);return a.data="isPause",this._hasPause=1,xi(this,a,Hn(this,r))},t.removePause=function(r){var s=this._first;for(r=Hn(this,r);s;)s._start===r&&s.data==="isPause"&&zr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)xr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=qn(r),l=this._first,u=Ki(s),c;l;)l instanceof wt?cP(l._targets,a)&&(u?(!xr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=Hn(o,r),l=s,u=l.startAt,c=l.onStart,f=l.onStartParams,h=l.immediateRender,p,x=wt.to(o,Jn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||nt,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());x._dur!==m&&Vo(x,m,0,1).render(x._time,!0,!0),p=1}c&&c.apply(x,f||[])}},s));return h?x.render(0):x},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,Jn({startAt:{time:Hn(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),Rg(this,Hn(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),Rg(this,Hn(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+nt)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return vs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),vs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=jn,u,c,f;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(f=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,xi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!f&&!o._dp||f&&f.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;Vo(o,o===pt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(pt._ts&&(Yx(pt,lc(r,pt)),Wx=Pn.frame),Pn.frame>=Tg){Tg+=Nn.autoSleep||120;var s=pt._first;if((!s||!s._ts)&&Nn.autoSleep&&Pn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Pn.sleep()}}},e}(rl);Jn(on.prototype,{_lock:0,_hasPause:0,_forcing:0});var NP=function(e,t,i,r,s,o,a){var l=new yn(this._pt,e,t,0,1,yy,null,s),u=0,c=0,f,h,p,x,_,m,d,g;for(l.b=i,l.e=r,i+="",r+="",(d=~r.indexOf("random("))&&(r=nl(r)),o&&(g=[i,r],o(g,e,t),i=g[0],r=g[1]),h=i.match(Xf)||[];f=Xf.exec(r);)x=f[0],_=r.substring(u,f.index),p?p=(p+1)%5:_.substr(-5)==="rgba("&&(p=1),x!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:_||c===1?_:",",s:m,c:x.charAt(1)==="="?Ao(m,x)-m:parseFloat(x)-m,m:p&&p<4?Math.round:0},u=Xf.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(zx.test(r)||d)&&(l.e=0),this._pt=l,l},Cp=function(e,t,i,r,s,o,a,l,u,c){xt(r)&&(r=r(s||0,e,o));var f=e[t],h=i!=="get"?i:xt(f)?u?e[t.indexOf("set")||!xt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():f,p=xt(f)?u?kP:vy:Pp,x;if(kt(r)&&(~r.indexOf("random(")&&(r=nl(r)),r.charAt(1)==="="&&(x=Ao(h,r)+(Zt(h)||0),(x||x===0)&&(r=x))),!c||h!==r||uh)return!isNaN(h*r)&&r!==""?(x=new yn(this._pt,e,t,+h||0,r-(h||0),typeof f=="boolean"?BP:xy,0,p),u&&(x.fp=u),a&&x.modifier(a,this,e),this._pt=x):(!f&&!(t in e)&&Ep(t,r),NP.call(this,e,t,h,r,p,l||Nn.stringFilter,u))},IP=function(e,t,i,r,s){if(xt(e)&&(e=Ia(e,s,t,i,r)),!Ai(e)||e.style&&e.nodeType||en(e)||Fx(e))return kt(e)?Ia(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Ia(e[a],s,t,i,r);return o},my=function(e,t,i,r,s,o){var a,l,u,c;if(Cn[e]&&(a=new Cn[e]).init(s,a.rawVars?t[e]:IP(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new yn(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==_o))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},xr,uh,Rp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.runBackwards,f=r.yoyoEase,h=r.keyframes,p=r.autoRevert,x=e._dur,_=e._startAt,m=e._targets,d=e.parent,g=d&&d.data==="nested"?d.vars.targets:m,v=e._overwrite==="auto"&&!xp,y=e.timeline,A,w,E,P,M,S,N,F,L,q,X,$,K;if(y&&(!h||!s)&&(s="none"),e._ease=xs(s,Bo.ease),e._yEase=f?fy(xs(f===!0?s:f,Bo.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!y&&!!r.runBackwards,!y||h&&!r.stagger){if(F=m[0]?gs(m[0]).harness:0,$=F&&r[F.prop],A=ac(r,Tp),_&&(_._zTime<0&&_.progress(1),t<0&&c&&a&&!p?_.render(-1,!0):_.revert(c&&x?Eu:lP),_._lazy=0),o){if(zr(e._startAt=wt.set(m,Jn({data:"isStart",overwrite:!1,parent:d,immediateRender:!0,lazy:!_&&vn(l),startAt:null,delay:0,onUpdate:u&&function(){return Ln(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Jt||!a&&!p)&&e._startAt.revert(Eu),a&&x&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(c&&x&&!_){if(t&&(a=!1),E=Jn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&vn(l),immediateRender:a,stagger:0,parent:d},A),$&&(E[F.prop]=$),zr(e._startAt=wt.set(m,E)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Jt?e._startAt.revert(Eu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,nt,nt);else if(!t)return}for(e._pt=e._ptCache=0,l=x&&vn(l)||l&&!x,w=0;w<m.length;w++){if(M=m[w],N=M._gsap||Ap(m)[w]._gsap,e._ptLookup[w]=q={},ih[N.id]&&Dr.length&&oc(),X=g===m?w:g.indexOf(M),F&&(L=new F).init(M,$||A,e,X,g)!==!1&&(e._pt=P=new yn(e._pt,M,L.name,0,1,L.render,L,0,L.priority),L._props.forEach(function(D){q[D]=P}),L.priority&&(S=1)),!F||$)for(E in A)Cn[E]&&(L=my(E,A,e,X,M,g))?L.priority&&(S=1):q[E]=P=Cp.call(e,M,E,"get",A[E],X,g,0,r.stringFilter);e._op&&e._op[w]&&e.kill(M,e._op[w]),v&&e._pt&&(xr=e,pt.killTweensOf(M,q,e.globalTime(t)),K=!e.parent,xr=0),e._pt&&l&&(ih[N.id]=1)}S&&Sy(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!K,h&&t<=0&&y.render(jn,!0,!0)},UP=function(e,t,i,r,s,o,a,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],c,f,h,p;if(!u)for(u=e._ptCache[t]=[],h=e._ptLookup,p=e._targets.length;p--;){if(c=h[p][t],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==t&&c.fp!==t;)c=c._next;if(!c)return uh=1,e.vars[t]="+=0",Rp(e,a),uh=0,l?el(t+" not eligible for reset"):1;u.push(c)}for(p=u.length;p--;)f=u[p],c=f._pt||f,c.s=(r||r===0)&&!s?r:c.s+(r||0)+o*c.c,c.c=i-c.s,f.e&&(f.e=yt(i)+Zt(f.e)),f.b&&(f.b=c.s+Zt(f.b))},OP=function(e,t){var i=e[0]?gs(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Cs({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},FP=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if(en(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ia=function(e,t,i,r,s){return xt(e)?e.call(t,i,r,s):kt(e)&&~e.indexOf("random(")?nl(e):e},_y=wp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",gy={};xn(_y+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return gy[n]=1});var wt=function(n){Ux(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Da(r))||this;var l=a.vars,u=l.duration,c=l.delay,f=l.immediateRender,h=l.stagger,p=l.overwrite,x=l.keyframes,_=l.defaults,m=l.scrollTrigger,d=l.yoyoEase,g=r.parent||pt,v=(en(i)||Fx(i)?Ki(i[0]):"length"in r)?[i]:qn(i),y,A,w,E,P,M,S,N;if(a._targets=v.length?Ap(v):el("GSAP target "+i+" not found. https://gsap.com",!Nn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,x||h||uu(u)||uu(c)){if(r=a.vars,y=a.timeline=new on({data:"nested",defaults:_||{},targets:g&&g.data==="nested"?g.vars.targets:v}),y.kill(),y.parent=y._dp=Fi(a),y._start=0,h||uu(u)||uu(c)){if(E=v.length,S=h&&ty(h),Ai(h))for(P in h)~_y.indexOf(P)&&(N||(N={}),N[P]=h[P]);for(A=0;A<E;A++)w=ac(r,gy),w.stagger=0,d&&(w.yoyoEase=d),N&&Cs(w,N),M=v[A],w.duration=+Ia(u,Fi(a),A,M,v),w.delay=(+Ia(c,Fi(a),A,M,v)||0)-a._delay,!h&&E===1&&w.delay&&(a._delay=c=w.delay,a._start+=c,w.delay=0),y.to(M,w,S?S(A,M,v):0),y._ease=Xe.none;y.duration()?u=c=0:a.timeline=0}else if(x){Da(Jn(y.vars.defaults,{ease:"none"})),y._ease=xs(x.ease||r.ease||"none");var F=0,L,q,X;if(en(x))x.forEach(function($){return y.to(v,$,">")}),y.duration();else{w={};for(P in x)P==="ease"||P==="easeEach"||FP(P,x[P],w,x.easeEach);for(P in w)for(L=w[P].sort(function($,K){return $.t-K.t}),F=0,A=0;A<L.length;A++)q=L[A],X={ease:q.e,duration:(q.t-(A?L[A-1].t:0))/100*u},X[P]=q.v,y.to(v,X,F),F+=X.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!xp&&(xr=Fi(a),pt.killTweensOf(v),xr=0),xi(g,Fi(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(f||!u&&!x&&a._start===Ot(g._time)&&vn(f)&&pP(Fi(a))&&g.data!=="nested")&&(a._tTime=-nt,a.render(Math.max(0,-c)||0)),m&&Zx(Fi(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,f=r>l-nt&&!c?l:r<nt?0:r,h,p,x,_,m,d,g,v,y;if(!u)_P(this,r,s,o);else if(f!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(h=f,v=this.timeline,this._repeat){if(_=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(_*100+r,s,o);if(h=Ot(f%_),f===l?(x=this._repeat,h=u):(x=~~(f/_),x&&x===Ot(f/_)&&(h=u,x--),h>u&&(h=u)),d=this._yoyo&&x&1,d&&(y=this._yEase,h=u-h),m=Ho(this._tTime,_),h===a&&!o&&this._initted&&x===m)return this._tTime=f,this;x!==m&&(v&&this._yEase&&dy(v,d),this.vars.repeatRefresh&&!d&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(Ot(_*x),!0).invalidate()._lock=0))}if(!this._initted){if(Qx(this,c?r:h,o,s,f))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&x!==m))return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=f,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=g=(y||this._ease)(h/u),this._from&&(this.ratio=g=1-g),h&&!a&&!s&&!x&&(Ln(this,"onStart"),this._tTime!==f))return this;for(p=this._pt;p;)p.r(g,p.d),p=p._next;v&&v.render(r<0?r:v._dur*v._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&rh(this,r,s,o),Ln(this,"onUpdate")),this._repeat&&x!==m&&this.vars.onRepeat&&!s&&this.parent&&Ln(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(c&&!this._onUpdate&&rh(this,r,!0,!0),(r||!u)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&zr(this,1),!s&&!(c&&!a)&&(f||a||d)&&(Ln(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a,l){il||Pn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||Rp(this,u),c=this._ease(u/this._dur),UP(this,r,s,o,a,c,u,l)?this.resetTo(r,s,o,a,1):(Uc(this,0),this.parent||$x(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?xa(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,xr&&xr.vars.overwrite!==!0)._first||xa(this),this.parent&&o!==this.timeline.totalDuration()&&Vo(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?qn(r):a,u=this._ptLookup,c=this._pt,f,h,p,x,_,m,d;if((!s||s==="all")&&dP(a,l))return s==="all"&&(this._pt=0),xa(this);for(f=this._op=this._op||[],s!=="all"&&(kt(s)&&(_={},xn(s,function(g){return _[g]=1}),s=_),s=OP(a,s)),d=a.length;d--;)if(~l.indexOf(a[d])){h=u[d],s==="all"?(f[d]=s,x=h,p={}):(p=f[d]=f[d]||{},x=s);for(_ in x)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Nc(this,m,"_pt"),delete h[_]),p!=="all"&&(p[_]=1)}return this._initted&&!this._pt&&c&&xa(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Na(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Na(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return pt.killTweensOf(r,s,o)},e}(rl);Jn(wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xn("staggerTo,staggerFrom,staggerFromTo",function(n){wt[n]=function(){var e=new on,t=oh.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Pp=function(e,t,i){return e[t]=i},vy=function(e,t,i){return e[t](i)},kP=function(e,t,i,r){return e[t](r.fp,i)},zP=function(e,t,i){return e.setAttribute(t,i)},bp=function(e,t){return xt(e[t])?vy:yp(e[t])&&e.setAttribute?zP:Pp},xy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},BP=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},yy=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Lp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},HP=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},VP=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?Nc(this,t,"_pt"):t.dep||(i=1),t=r;return!i},GP=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},Sy=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},yn=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||xy,this.d=l||this,this.set=u||Pp,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=GP,this.m=i,this.mt=s,this.tween=r},n}();xn(wp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return Tp[n]=1});Un.TweenMax=Un.TweenLite=wt;Un.TimelineLite=Un.TimelineMax=on;pt=new on({sortChildren:!1,defaults:Bo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Nn.stringFilter=cy;var ys=[],wu={},WP=[],bg=0,XP=0,Kf=function(e){return(wu[e]||WP).map(function(t){return t()})},ch=function(){var e=Date.now(),t=[];e-bg>2&&(Kf("matchMediaInit"),ys.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=mi.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Kf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),bg=e,Kf("matchMedia"))},My=function(){function n(t,i){this.selector=i&&ah(i),this.data=[],this._r=[],this.isReverted=!1,this.id=XP++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){xt(i)&&(s=r,r=i,i=xt);var o=this,a=function(){var u=ft,c=o.selector,f;return u&&u!==o&&u.data.push(o),s&&(o.selector=ah(s)),ft=o,f=r.apply(o,arguments),xt(f)&&o._r.push(f),ft=u,o.selector=c,o.isReverted=!1,f};return o.last=a,i===xt?a(o,function(l){return o.add(null,l)}):i?o[i]=a:a},e.ignore=function(i){var r=ft;ft=null,i(this),ft=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof wt&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i?function(){for(var a=s.getTweens(),l=s.data.length,u;l--;)u=s.data[l],u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(c){return a.splice(a.indexOf(c),1)}));for(a.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,f){return f.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),l=s.data.length;l--;)u=s.data[l],u instanceof on?u.data!=="nested"&&(u.scrollTrigger&&u.scrollTrigger.revert(),u.kill()):!(u instanceof wt)&&u.revert&&u.revert(i);s._r.forEach(function(c){return c(i,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),r)for(var o=ys.length;o--;)ys[o].id===this.id&&ys.splice(o,1)},e.revert=function(i){this.kill(i||{})},n}(),YP=function(){function n(t){this.contexts=[],this.scope=t,ft&&ft.data.push(this)}var e=n.prototype;return e.add=function(i,r,s){Ai(i)||(i={matches:i});var o=new My(0,s||this.scope),a=o.conditions={},l,u,c;ft&&!o.selector&&(o.selector=ft.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=mi.matchMedia(i[u]),l&&(ys.indexOf(o)<0&&ys.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(ch):l.addEventListener("change",ch)));return c&&r(o,function(f){return o.add(null,f)}),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),uc={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return ay(r)})},timeline:function(e){return new on(e)},getTweensOf:function(e,t){return pt.getTweensOf(e,t)},getProperty:function(e,t,i,r){kt(e)&&(e=qn(e)[0]);var s=gs(e||{}).get,o=i?qx:jx;return i==="native"&&(i=""),e&&(t?o((Cn[t]&&Cn[t].get||s)(e,t,i,r)):function(a,l,u){return o((Cn[a]&&Cn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=qn(e),e.length>1){var r=e.map(function(c){return Mn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var f=s;f--;)r[f](c)}}e=e[0]||{};var o=Cn[t],a=gs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var f=new o;_o._pt=0,f.init(e,i?c+i:c,_o,0,[e]),f.render(1,f),_o._pt&&Lp(1,_o)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=Mn.to(e,Cs((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return pt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=xs(e.ease,Bo.ease)),wg(Bo,e||{})},config:function(e){return wg(Nn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Cn[a]&&!Un[a]&&el(t+" effect requires "+a+" plugin.")}),Yf[t]=function(a,l,u){return i(qn(a),Jn(l||{},s),u)},o&&(on.prototype[t]=function(a,l,u){return this.add(Yf[t](a,Ai(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){Xe[e]=xs(t)},parseEase:function(e,t){return arguments.length?xs(e,t):Xe},getById:function(e){return pt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new on(e),r,s;for(i.smoothChildTiming=vn(e.smoothChildTiming),pt.remove(i),i._dp=0,i._time=i._tTime=pt._time,r=pt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof wt&&r.vars.onComplete===r._targets[0]))&&xi(i,r,r._start-r._delay),r=s;return xi(pt,i,0),i},context:function(e,t){return e?new My(e,t):ft},matchMedia:function(e){return new YP(e)},matchMediaRefresh:function(){return ys.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||ch()},addEventListener:function(e,t){var i=wu[e]||(wu[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=wu[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:TP,wrapYoyo:wP,distribute:ty,random:iy,snap:ny,normalize:EP,getUnit:Zt,clamp:xP,splitColor:ly,toArray:qn,selector:ah,mapRange:sy,pipe:SP,unitize:MP,interpolate:AP,shuffle:ey},install:Vx,effects:Yf,ticker:Pn,updateRoot:on.updateRoot,plugins:Cn,globalTimeline:pt,core:{PropTween:yn,globals:Gx,Tween:wt,Timeline:on,Animation:rl,getCache:gs,_removeLinkedListItem:Nc,reverting:function(){return Jt},context:function(e){return e&&ft&&(ft.data.push(e),e._ctx=ft),ft},suppressOverwrites:function(e){return xp=e}}};xn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return uc[n]=wt[n]});Pn.add(on.updateRoot);_o=uc.to({},{duration:0});var jP=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},qP=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=jP(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Zf=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(kt(s)&&(l={},xn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}qP(a,s)}}}},Mn=uc.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Jt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Zf("roundProps",lh),Zf("modifiers"),Zf("snap",ny))||uc;wt.version=on.version=Mn.version="3.12.5";Hx=1;Sp()&&Go();Xe.Power0;Xe.Power1;Xe.Power2;Xe.Power3;Xe.Power4;Xe.Linear;Xe.Quad;Xe.Cubic;Xe.Quart;Xe.Quint;Xe.Strong;Xe.Elastic;Xe.Back;Xe.SteppedEase;Xe.Bounce;Xe.Sine;Xe.Expo;Xe.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Lg,yr,Co,Dp,ps,Dg,Np,$P=function(){return typeof window<"u"},Zi={},os=180/Math.PI,Ro=Math.PI/180,Js=Math.atan2,Ng=1e8,Ip=/([A-Z])/g,KP=/(left|right|width|margin|padding|x)/i,ZP=/[\s,\(]\S/,Si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},fh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},QP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},JP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},eb=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Ey=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ty=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},tb=function(e,t,i){return e.style[t]=i},nb=function(e,t,i){return e.style.setProperty(t,i)},ib=function(e,t,i){return e._gsap[t]=i},rb=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},sb=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},ob=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},mt="transform",Sn=mt+"Origin",ab=function n(e,t){var i=this,r=this.target,s=r.style,o=r._gsap;if(e in Zi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return i.tfm[a]=zi(r,a)}):this.tfm[e]=o.x?o[e]:zi(r,e),e===Sn&&(this.tfm.zOrigin=o.zOrigin);else return Si.transform.split(",").forEach(function(a){return n.call(i,a,t)});if(this.props.indexOf(mt)>=0)return;o.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(Sn,t,"")),e=mt}(s||t)&&this.props.push(e,t,s[e])},wy=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},lb=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ip,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Np(),(!s||!s.isStart)&&!i[mt]&&(wy(i),r.zOrigin&&i[Sn]&&(i[Sn]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Ay=function(e,t){var i={target:e,props:[],revert:lb,save:ab};return e._gsap||Mn.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},Cy,dh=function(e,t){var i=yr.createElementNS?yr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):yr.createElement(e);return i&&i.style?i:yr.createElement(e)},Ti=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Ip,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Wo(t)||t,1)||""},Ig="O,Moz,ms,Ms,Webkit".split(","),Wo=function(e,t,i){var r=t||ps,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(Ig[o]+e in s););return o<0?null:(o===3?"ms":o>=0?Ig[o]:"")+e},hh=function(){$P()&&window.document&&(Lg=window,yr=Lg.document,Co=yr.documentElement,ps=dh("div")||{style:{}},dh("div"),mt=Wo(mt),Sn=mt+"Origin",ps.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Cy=!!Wo("perspective"),Np=Mn.core.reverting,Dp=1)},Qf=function n(e){var t=dh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(Co.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),Co.removeChild(t),this.style.cssText=s,o},Ug=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},Ry=function(e){var t;try{t=e.getBBox()}catch{t=Qf.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Qf||(t=Qf.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+Ug(e,["x","cx","x1"])||0,y:+Ug(e,["y","cy","y1"])||0,width:0,height:0}:t},Py=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ry(e))},Rs=function(e,t){if(t){var i=e.style,r;t in Zi&&t!==Sn&&(t=mt),i.removeProperty?(r=t.substr(0,2),(r==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(r==="--"?t:t.replace(Ip,"-$1").toLowerCase())):i.removeAttribute(t)}},Sr=function(e,t,i,r,s,o){var a=new yn(e._pt,t,i,0,1,o?Ty:Ey);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},Og={deg:1,rad:1,turn:1},ub={grid:1,flex:1},Br=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ps.style,l=KP.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),f=100,h=r==="px",p=r==="%",x,_,m,d;if(r===o||!s||Og[r]||Og[o])return s;if(o!=="px"&&!h&&(s=n(e,t,i,"px")),d=e.getCTM&&Py(e),(p||o==="%")&&(Zi[t]||~t.indexOf("adius")))return x=d?e.getBBox()[l?"width":"height"]:e[c],yt(p?s/x*f:s/100*x);if(a[l?"width":"height"]=f+(h?o:r),_=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,d&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===yr||!_.appendChild)&&(_=yr.body),m=_._gsap,m&&p&&m.width&&l&&m.time===Pn.time&&!m.uncache)return yt(s/m.width*f);if(p&&(t==="height"||t==="width")){var g=e.style[t];e.style[t]=f+r,x=e[c],g?e.style[t]=g:Rs(e,t)}else(p||o==="%")&&!ub[Ti(_,"display")]&&(a.position=Ti(e,"position")),_===e&&(a.position="static"),_.appendChild(ps),x=ps[c],_.removeChild(ps),a.position="absolute";return l&&p&&(m=gs(_),m.time=Pn.time,m.width=_[c]),yt(h?x*s/f:x&&s?f/x*s:0)},zi=function(e,t,i,r){var s;return Dp||hh(),t in Si&&t!=="transform"&&(t=Si[t],~t.indexOf(",")&&(t=t.split(",")[0])),Zi[t]&&t!=="transform"?(s=ol(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:fc(Ti(e,Sn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=cc[t]&&cc[t](e,t,i)||Ti(e,t)||Xx(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Br(e,t,s,i)+i:s},cb=function(e,t,i,r){if(!i||i==="none"){var s=Wo(t,e,1),o=s&&Ti(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Ti(e,"borderTopColor"))}var a=new yn(this._pt,e.style,t,0,1,yy),l=0,u=0,c,f,h,p,x,_,m,d,g,v,y,A;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(_=e.style[t],e.style[t]=r,r=Ti(e,t)||r,_?e.style[t]=_:Rs(e,t)),c=[i,r],cy(c),i=c[0],r=c[1],h=i.match(mo)||[],A=r.match(mo)||[],A.length){for(;f=mo.exec(r);)m=f[0],g=r.substring(l,f.index),x?x=(x+1)%5:(g.substr(-5)==="rgba("||g.substr(-5)==="hsla(")&&(x=1),m!==(_=h[u++]||"")&&(p=parseFloat(_)||0,y=_.substr((p+"").length),m.charAt(1)==="="&&(m=Ao(p,m)+y),d=parseFloat(m),v=m.substr((d+"").length),l=mo.lastIndex-v.length,v||(v=v||Nn.units[t]||y,l===r.length&&(r+=v,a.e+=v)),y!==v&&(p=Br(e,t,_,v)||0),a._pt={_next:a._pt,p:g||u===1?g:",",s:p,c:d-p,m:x&&x<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?Ty:Ey;return zx.test(r)&&(a.e=0),this._pt=a,a},Fg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},fb=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=Fg[i]||i,t[1]=Fg[r]||r,t.join(" ")},db=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],Zi[a]&&(l=1,a=a==="transformOrigin"?Sn:mt),Rs(i,a);l&&(Rs(i,mt),o&&(o.svg&&i.removeAttribute("transform"),ol(i,1),o.uncache=1,wy(r)))}},cc={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new yn(e._pt,t,i,0,0,db);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},sl=[1,0,0,1,0,0],by={},Ly=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},kg=function(e){var t=Ti(e,mt);return Ly(t)?sl:t.substr(7).match(kx).map(yt)},Up=function(e,t){var i=e._gsap||gs(e),r=e.style,s=kg(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?sl:s):(s===sl&&!e.offsetParent&&e!==Co&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,Co.appendChild(e)),s=kg(e),l?r.display=l:Rs(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):Co.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},ph=function(e,t,i,r,s,o){var a=e._gsap,l=s||Up(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,f=a.xOffset||0,h=a.yOffset||0,p=l[0],x=l[1],_=l[2],m=l[3],d=l[4],g=l[5],v=t.split(" "),y=parseFloat(v[0])||0,A=parseFloat(v[1])||0,w,E,P,M;i?l!==sl&&(E=p*m-x*_)&&(P=y*(m/E)+A*(-_/E)+(_*g-m*d)/E,M=y*(-x/E)+A*(p/E)-(p*g-x*d)/E,y=P,A=M):(w=Ry(e),y=w.x+(~v[0].indexOf("%")?y/100*w.width:y),A=w.y+(~(v[1]||v[0]).indexOf("%")?A/100*w.height:A)),r||r!==!1&&a.smooth?(d=y-u,g=A-c,a.xOffset=f+(d*p+g*_)-d,a.yOffset=h+(d*x+g*m)-g):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=A,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[Sn]="0px 0px",o&&(Sr(o,a,"xOrigin",u,y),Sr(o,a,"yOrigin",c,A),Sr(o,a,"xOffset",f,a.xOffset),Sr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+A)},ol=function(e,t){var i=e._gsap||new py(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Ti(e,Sn)||"0",c,f,h,p,x,_,m,d,g,v,y,A,w,E,P,M,S,N,F,L,q,X,$,K,D,Y,j,ie,pe,ze,V,ee;return c=f=h=_=m=d=g=v=y=0,p=x=1,i.svg=!!(e.getCTM&&Py(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[mt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[mt]!=="none"?l[mt]:"")),r.scale=r.rotate=r.translate="none"),E=Up(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),ph(e,K||u,!!K||i.originIsAbsolute,i.smooth!==!1,E)),A=i.xOrigin||0,w=i.yOrigin||0,E!==sl&&(N=E[0],F=E[1],L=E[2],q=E[3],c=X=E[4],f=$=E[5],E.length===6?(p=Math.sqrt(N*N+F*F),x=Math.sqrt(q*q+L*L),_=N||F?Js(F,N)*os:0,g=L||q?Js(L,q)*os+_:0,g&&(x*=Math.abs(Math.cos(g*Ro))),i.svg&&(c-=A-(A*N+w*L),f-=w-(A*F+w*q))):(ee=E[6],ze=E[7],j=E[8],ie=E[9],pe=E[10],V=E[11],c=E[12],f=E[13],h=E[14],P=Js(ee,pe),m=P*os,P&&(M=Math.cos(-P),S=Math.sin(-P),K=X*M+j*S,D=$*M+ie*S,Y=ee*M+pe*S,j=X*-S+j*M,ie=$*-S+ie*M,pe=ee*-S+pe*M,V=ze*-S+V*M,X=K,$=D,ee=Y),P=Js(-L,pe),d=P*os,P&&(M=Math.cos(-P),S=Math.sin(-P),K=N*M-j*S,D=F*M-ie*S,Y=L*M-pe*S,V=q*S+V*M,N=K,F=D,L=Y),P=Js(F,N),_=P*os,P&&(M=Math.cos(P),S=Math.sin(P),K=N*M+F*S,D=X*M+$*S,F=F*M-N*S,$=$*M-X*S,N=K,X=D),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,d=180-d),p=yt(Math.sqrt(N*N+F*F+L*L)),x=yt(Math.sqrt($*$+ee*ee)),P=Js(X,$),g=Math.abs(P)>2e-4?P*os:0,y=V?1/(V<0?-V:V):0),i.svg&&(K=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Ly(Ti(e,mt)),K&&e.setAttribute("transform",K))),Math.abs(g)>90&&Math.abs(g)<270&&(s?(p*=-1,g+=_<=0?180:-180,_+=_<=0?180:-180):(x*=-1,g+=g<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=f-((i.yPercent=f&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=yt(p),i.scaleY=yt(x),i.rotation=yt(_)+a,i.rotationX=yt(m)+a,i.rotationY=yt(d)+a,i.skewX=g+a,i.skewY=v+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||!t&&i.zOrigin||0)&&(r[Sn]=fc(u)),i.xOffset=i.yOffset=0,i.force3D=Nn.force3D,i.renderTransform=i.svg?pb:Cy?Dy:hb,i.uncache=0,i},fc=function(e){return(e=e.split(" "))[0]+" "+e[1]},Jf=function(e,t,i){var r=Zt(t);return yt(parseFloat(t)+parseFloat(Br(e,"x",i+"px",r)))+r},hb=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Dy(e,t)},ts="0deg",da="0px",ns=") ",Dy=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,f=i.rotationX,h=i.skewX,p=i.skewY,x=i.scaleX,_=i.scaleY,m=i.transformPerspective,d=i.force3D,g=i.target,v=i.zOrigin,y="",A=d==="auto"&&e&&e!==1||d===!0;if(v&&(f!==ts||c!==ts)){var w=parseFloat(c)*Ro,E=Math.sin(w),P=Math.cos(w),M;w=parseFloat(f)*Ro,M=Math.cos(w),o=Jf(g,o,E*M*-v),a=Jf(g,a,-Math.sin(w)*-v),l=Jf(g,l,P*M*-v+v)}m!==da&&(y+="perspective("+m+ns),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(A||o!==da||a!==da||l!==da)&&(y+=l!==da||A?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ns),u!==ts&&(y+="rotate("+u+ns),c!==ts&&(y+="rotateY("+c+ns),f!==ts&&(y+="rotateX("+f+ns),(h!==ts||p!==ts)&&(y+="skew("+h+", "+p+ns),(x!==1||_!==1)&&(y+="scale("+x+", "+_+ns),g.style[mt]=y||"translate(0, 0)"},pb=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,f=i.scaleX,h=i.scaleY,p=i.target,x=i.xOrigin,_=i.yOrigin,m=i.xOffset,d=i.yOffset,g=i.forceCSS,v=parseFloat(o),y=parseFloat(a),A,w,E,P,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=Ro,u*=Ro,A=Math.cos(l)*f,w=Math.sin(l)*f,E=Math.sin(l-u)*-h,P=Math.cos(l-u)*h,u&&(c*=Ro,M=Math.tan(u-c),M=Math.sqrt(1+M*M),E*=M,P*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),A*=M,w*=M)),A=yt(A),w=yt(w),E=yt(E),P=yt(P)):(A=f,P=h,w=E=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Br(p,"x",o,"px"),y=Br(p,"y",a,"px")),(x||_||m||d)&&(v=yt(v+x-(x*A+_*E)+m),y=yt(y+_-(x*w+_*P)+d)),(r||s)&&(M=p.getBBox(),v=yt(v+r/100*M.width),y=yt(y+s/100*M.height)),M="matrix("+A+","+w+","+E+","+P+","+v+","+y+")",p.setAttribute("transform",M),g&&(p.style[mt]=M)},mb=function(e,t,i,r,s){var o=360,a=kt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?os:1),u=l-r,c=r+u+"deg",f,h;return a&&(f=s.split("_")[1],f==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),f==="cw"&&u<0?u=(u+o*Ng)%o-~~(u/o)*o:f==="ccw"&&u>0&&(u=(u-o*Ng)%o-~~(u/o)*o)),e._pt=h=new yn(e._pt,t,i,r,u,QP),h.e=c,h.u="deg",e._props.push(i),h},zg=function(e,t){for(var i in t)e[i]=t[i];return e},_b=function(e,t,i){var r=zg({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,f,h,p,x;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[mt]=t,a=ol(i,1),Rs(i,mt),i.setAttribute("transform",u)):(u=getComputedStyle(i)[mt],o[mt]=t,a=ol(i,1),o[mt]=u);for(l in Zi)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Zt(u),x=Zt(c),f=p!==x?Br(i,l,u,x):parseFloat(u),h=parseFloat(c),e._pt=new yn(e._pt,a,l,f,h-f,fh),e._pt.u=x||0,e._props.push(l));zg(a,r)};xn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});cc[e>1?"border"+n:n]=function(a,l,u,c,f){var h,p;if(arguments.length<4)return h=o.map(function(x){return zi(a,x,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(x,_){return p[x]=h[_]=h[_]||h[(_-1)/2|0]}),a.init(l,p,f)}});var Ny={name:"css",register:hh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,f,h,p,x,_,m,d,g,v,y,A,w,E,P;Dp||hh(),this.styles=this.styles||Ay(e),P=this.styles.props,this.tween=i;for(_ in t)if(_!=="autoRound"&&(c=t[_],!(Cn[_]&&my(_,t,i,r,e,s)))){if(p=typeof c,x=cc[_],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=nl(c)),x)x(this,e,_,c,i)&&(E=1);else if(_.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(_)+"").trim(),c+="",Nr.lastIndex=0,Nr.test(u)||(m=Zt(u),d=Zt(c)),d?m!==d&&(u=Br(e,_,u,d)+d):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,_),o.push(_),P.push(_,0,a[_]);else if(p!=="undefined"){if(l&&_ in l?(u=typeof l[_]=="function"?l[_].call(i,r,e,s):l[_],kt(u)&&~u.indexOf("random(")&&(u=nl(u)),Zt(u+"")||u==="auto"||(u+=Nn.units[_]||Zt(zi(e,_))||""),(u+"").charAt(1)==="="&&(u=zi(e,_))):u=zi(e,_),h=parseFloat(u),g=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),g&&(c=c.substr(2)),f=parseFloat(c),_ in Si&&(_==="autoAlpha"&&(h===1&&zi(e,"visibility")==="hidden"&&f&&(h=0),P.push("visibility",0,a.visibility),Sr(this,a,"visibility",h?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Si[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Zi,v){if(this.styles.save(_),y||(A=e._gsap,A.renderTransform&&!t.parseTransform||ol(e,t.parseTransform),w=t.smoothOrigin!==!1&&A.smooth,y=this._pt=new yn(this._pt,a,mt,0,1,A.renderTransform,A,0,-1),y.dep=1),_==="scale")this._pt=new yn(this._pt,A,"scaleY",A.scaleY,(g?Ao(A.scaleY,g+f):f)-A.scaleY||0,fh),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Sn,0,a[Sn]),c=fb(c),A.svg?ph(e,c,0,w,0,this):(d=parseFloat(c.split(" ")[2])||0,d!==A.zOrigin&&Sr(this,A,"zOrigin",A.zOrigin,d),Sr(this,a,_,fc(u),fc(c)));continue}else if(_==="svgOrigin"){ph(e,c,1,w,0,this);continue}else if(_ in by){mb(this,A,_,h,g?Ao(h,g+c):c);continue}else if(_==="smoothOrigin"){Sr(this,A,"smooth",A.smooth,c);continue}else if(_==="force3D"){A[_]=c;continue}else if(_==="transform"){_b(this,c,e);continue}}else _ in a||(_=Wo(_)||_);if(v||(f||f===0)&&(h||h===0)&&!ZP.test(c)&&_ in a)m=(u+"").substr((h+"").length),f||(f=0),d=Zt(c)||(_ in Nn.units?Nn.units[_]:m),m!==d&&(h=Br(e,_,u,d)),this._pt=new yn(this._pt,v?A:a,_,h,(g?Ao(h,g+f):f)-h,!v&&(d==="px"||_==="zIndex")&&t.autoRound!==!1?eb:fh),this._pt.u=d||0,m!==d&&d!=="%"&&(this._pt.b=u,this._pt.r=JP);else if(_ in a)cb.call(this,e,_,u,g?g+c:c);else if(_ in e)this.add(e,_,u||e[_],g?g+c:c,r,s);else if(_!=="parseTransform"){Ep(_,c);continue}v||(_ in a?P.push(_,0,a[_]):P.push(_,1,u||e[_])),o.push(_)}}E&&Sy(this)},render:function(e,t){if(t.tween._time||!Np())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:zi,aliases:Si,getSetter:function(e,t,i){var r=Si[t];return r&&r.indexOf(",")<0&&(t=r),t in Zi&&t!==Sn&&(e._gsap.x||zi(e,"x"))?i&&Dg===i?t==="scale"?rb:ib:(Dg=i||{})&&(t==="scale"?sb:ob):e.style&&!yp(e.style[t])?tb:~t.indexOf("-")?nb:bp(e,t)},core:{_removeProperty:Rs,_getMatrix:Up}};Mn.utils.checkPrefix=Wo;Mn.core.getStyleSaver=Ay;(function(n,e,t,i){var r=xn(n+","+e+","+t,function(s){Zi[s]=1});xn(e,function(s){Nn.units[s]="deg",by[s]=1}),Si[r[13]]=n+","+e,xn(i,function(s){var o=s.split(":");Si[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Nn.units[n]="px"});Mn.registerPlugin(Ny);var Au=Mn.registerPlugin(Ny)||Mn;Au.core.Tween;const Bg=async({fragmentShaderPath:n,vertexShaderPath:e})=>{const t=new Dx,[i,r]=await Promise.allSettled([t.loadAsync(n),t.loadAsync(e)]);return{fragmentShader:i.status==="fulfilled"?i.value:"",vertexShader:r.status==="fulfilled"?r.value:""}};class gb{constructor({canvas:e,width:t,height:i,cameraPosition:r,fieldOfView:s=75,nearPlane:o=.1,farPlane:a=100}){Ie(this,"data");Ie(this,"width");Ie(this,"height");Ie(this,"pixelRatio");Ie(this,"aspectRatio");Ie(this,"fieldOfView");Ie(this,"angle");Ie(this,"parameters");Ie(this,"time");Ie(this,"isRunning",!1);Ie(this,"audioBtn",null);Ie(this,"sound");Ie(this,"clock");Ie(this,"scene");Ie(this,"camera");Ie(this,"renderer");Ie(this,"analyser",null);Ie(this,"composer");Ie(this,"octas");Ie(this,"spiral");Ie(this,"externalSphere");Ie(this,"extMaterial");Ie(this,"spiralMaterial");Ie(this,"octaGeometry");Ie(this,"instancedGeometry");this.data=0,this.angle={x:0,z:0},this.parameters={count:1500,max:12.5*Math.PI,a:2,c:4.5},this.clock=new Ix,this.time={current:0,t0:0,t1:0,t:0,frequency:5e-4,delta:0,elapsed:0},this.scene=new bx,this.scene.background=new qe("#00101a"),this.width=t||window.innerWidth,this.height=i||window.innerHeight,this.aspectRatio=this.width/this.height,this.pixelRatio=Math.min(window.devicePixelRatio,2),this.fieldOfView=s,this.camera=new Rn(this.fieldOfView,this.aspectRatio,o,a),this.camera.position.set(r.x,r.y,r.z),this.scene.add(this.camera),this.renderer=new Px({canvas:e,powerPreference:"high-performance",antialias:!1,stencil:!1,depth:!1}),this.renderer.setPixelRatio(this.pixelRatio),this.renderer.setSize(this.width,this.height),this.octas=new va,this.generateObjects(),this.generateAudioButton();const l=new KR;this.camera.add(l),this.sound=new ZR(l)}start(){this.render(),this.windowResizeHandler(),this.loop()}stop(){this.sound.pause()}render(){this.renderer.render(this.scene,this.camera),this.composer&&this.composer.render()}loop(){if(this.time.elapsed=this.clock.getElapsedTime(),this.time.delta=Math.min(60,((this.time.current||0)-this.time.elapsed)*1e3),this.analyser&&this.isRunning)if(this.time.t=this.time.elapsed-this.time.t0+this.time.t1,this.data=this.analyser.getAverageFrequency(),this.data*=this.data/2e3,this.angle.x+=this.time.delta*.001*.63,this.angle.z+=this.time.delta*.001*.39,this.isRunning&&!this.sound.isPlaying){this.time.t1=this.time.t,this.audioBtn&&(this.audioBtn.textContent="Play again",this.audioBtn.disabled=!1),this.isRunning=!1;const t=Au.timeline();this.angle.x=0,this.angle.z=0,t.to(this.camera.position,{x:0,z:4.5,duration:4,ease:"expo.in"}),this.audioBtn&&t.to(this.audioBtn,{opacity:()=>1,duration:1,ease:"power1.out"})}else this.camera.position.x=Math.sin(this.angle.x)*this.parameters.a,this.camera.position.z=Math.min(Math.max(Math.cos(this.angle.z)*this.parameters.c,-4.5),4.5);this.camera.lookAt(this.scene.position),this.spiralMaterial&&(this.spiralMaterial.uniforms.uTime.value+=this.time.delta*this.time.frequency*(1+this.data*.2)),this.extMaterial&&(this.extMaterial.uniforms.uTime.value+=this.time.delta*this.time.frequency);for(const e of this.octas.children)e.rotation.y+=this.data?.001*this.time.delta*this.data/5:.001*this.time.delta;this.octas.rotation.y-=2e-4*this.time.delta,this.externalSphere&&(this.externalSphere.rotation.y+=1e-4*this.time.delta),this.render(),this.time.current=this.time.elapsed,requestAnimationFrame(this.loop.bind(this))}windowResizeHandler(){window.addEventListener("resize",()=>{this.width=window.innerWidth,this.height=window.innerHeight,this.camera.aspect=this.width/this.height,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.width,this.height),this.composer.setSize(this.width,this.height)})}async addSpiral(){const e=await Bg({fragmentShaderPath:"shaders/fragmentShader.frag",vertexShaderPath:"shaders/vertexShader.vert"}),{vertexShader:t,fragmentShader:i}=e;this.spiralMaterial=new wi({vertexShader:t,fragmentShader:i,uniforms:{uTime:{value:0},uSize:{value:.045}},depthWrite:!1,blending:Yd});const r=this.parameters.count,s=new Float32Array(r*1),o=new Float32Array(r*3),a=new Float32Array(r),l=new Float32Array(r),u=["pink","green","cyan","wheat","red"],c=new _l(1,1);this.instancedGeometry=new jR,Object.keys(c.attributes).forEach(f=>{this.instancedGeometry&&(this.instancedGeometry.attributes[f]=c.attributes[f])}),this.instancedGeometry.index=c.index,this.instancedGeometry.instanceCount=r;for(let f=0;f<r;f++){const h=3*f,p=Math.floor(Math.random()*u.length),x=new qe(u[p]);a[f]=Math.random()*this.parameters.max,l[f]=Math.random(),s[f]=Math.random(),o[h+0]=x.r,o[h+1]=x.g,o[h+2]=x.b}this.instancedGeometry.setAttribute("phi",new ru(a,1,!1)),this.instancedGeometry.setAttribute("random",new ru(l,1,!1)),this.instancedGeometry.setAttribute("aScale",new ru(s,1,!1)),this.instancedGeometry.setAttribute("aColor",new ru(o,3,!1)),this.spiral=new Yn(this.instancedGeometry,this.spiralMaterial),this.scene.add(this.spiral)}async addExternalSphere(){const e=await Bg({fragmentShaderPath:"shaders/fragmentShaderExt.frag",vertexShaderPath:"shaders/vertexShaderExt.vert"}),{vertexShader:t,fragmentShader:i}=e;this.extMaterial=new wi({vertexShader:t,fragmentShader:i,uniforms:{uTime:{value:0},uColor:{value:new qe("orange")}},wireframe:!0,transparent:!0});const r=new gp(6,128,128);this.externalSphere=new Yn(r,this.extMaterial),this.scene.add(this.externalSphere)}addOctahedron({color:e="white",scale:t=[1,1,1],position:i=[0,0,0]}){var s;const r=new Yn(this.octaGeometry,new hp({wireframe:!0,color:e}));r.scale.set(...t),r.position.set(...i),(s=this.octas)==null||s.add(r)}addOctahedrons(){this.octaGeometry=new _p(.2,0),this.addOctahedron({color:"red",scale:[1,1.4,1]}),this.addOctahedron({color:"tomato",position:[0,.85,0],scale:[.5,.7,.5]}),this.addOctahedron({color:"red",position:[1,-.75,0],scale:[.5,.7,.5]}),this.addOctahedron({color:"tomato",position:[-.75,-1.75,0],scale:[1,1.2,1]}),this.addOctahedron({color:"red",position:[.5,-1.2,.5],scale:[.25,.37,.25]}),this.scene.add(this.octas)}generateObjects(){this.addOctahedrons(),this.addSpiral(),this.addExternalSphere()}generateAudioButton(){this.audioBtn=document.querySelector("button#play-music"),this.audioBtn&&this.audioBtn.addEventListener("click",e=>{this.audioBtn&&(this.audioBtn.disabled=!0,this.analyser?(this.sound.play(),this.isRunning=!0,this.time.t0=this.time.elapsed,this.data=0,Au.to(this.audioBtn,{opacity:0,duration:1,ease:"power1.out"})):(this.audioBtn.textContent="Loading...",this.loadMusic().then(()=>console.log("music loaded"))))})}loadMusic(){return new Promise(e=>{new qR().load("/sounds/xmas-bgm.mp3",i=>{this.sound.setBuffer(i),this.sound.setLoop(!1),this.sound.setVolume(.45),this.sound.play(),this.analyser=new QR(this.sound,32);const r=this.analyser.getAverageFrequency();this.isRunning=!0,this.time.t0=this.time.elapsed,e(r)},i=>{this.audioBtn&&Au.to(this.audioBtn,{opacity:()=>1-i.loaded/i.total,duration:1,ease:"power1.out"})},i=>{console.log(i)})})}}const vb=()=>{const n=mr.useRef(null),e=mr.useRef(null);let t=!1,i=!1,r,s,o,a,l,u,c,f,h=600,p;const x=()=>w(!t),_=()=>w(!1),m=()=>i=!1,d=()=>i=!0,g=E=>{if(!o||!r||!e.current)return;const P=e.current.offsetWidth,M=e.current.offsetHeight;r.aspect=P/M,r.updateProjectionMatrix(),o.setSize(P,M)},v=()=>{const E=e.current;if(!E)return;const P=E.offsetWidth/E.offsetHeight;s=new bx,r=new Rn(45,P,.001,1e3),o=new Px({antialias:!0,alpha:!0}),a=new eP(r,E),r.position.set(0,100,500),o.setPixelRatio(P),o.setSize(E.offsetWidth,E.offsetHeight),Object.assign(a,{enableDamping:!0,enableZoom:!1,enablePan:!1}),f=new nP(100,2e3,30),p=f.lineMesh,c=Math.floor(f.numParticles/2),s.add(p),E.appendChild(o.domElement),E.addEventListener("mousedown",d),E.addEventListener("mouseup",m)},y=()=>{l=requestAnimationFrame(y),i||(p.rotation.y+=.008,p.rotation.x+=.008,p.rotation.z+=.008);const E=u==null?void 0:u.frequency;if(E){const P=f.geometry.getAttribute("position").array;for(let M=0;M<=c;M++){if(M+h>=E.length)continue;const S=E[M+h]/256+1,N=F=>{for(let L=0;L<3;L++)P[F*3+L]=f.initPositions[F*3+L]*S};N(c+M),N(c-M)}f.positionNeedsUpdate=!0}a.update(),o.render(s,r)},A=()=>{if(!l)return;cancelAnimationFrame(l);const E=e.current;E==null||E.removeEventListener("mousedown",d),E==null||E.removeEventListener("mouseup",m)},w=E=>{t=E,u||(u=new tP(n.current)),E?u.play():u.pause()};return mr.useEffect(()=>(document.addEventListener("dblclick",x),()=>document.removeEventListener("dblclick",x)),[]),mr.useEffect(()=>{const E=n.current;try{v(),y()}catch(P){console.error(P)}return w(t),E==null||E.addEventListener("ended",_),window.addEventListener("resize",g),()=>{A(),E==null||E.removeEventListener("ended",_),window.removeEventListener("resize",g)}},[]),Pt.jsxs("div",{className:"relative mx-auto flex h-full w-full flex-col items-center justify-center",children:[Pt.jsx("div",{className:"fixed inset-0",ref:e}),Pt.jsxs("div",{className:"absolute bottom-10 z-10 cursor-pointer",children:[Pt.jsx("p",{className:"animate-pulse text-center text-2xl text-white",children:"Double click anywhere to play/pause"}),Pt.jsx("audio",{className:"hidden",ref:n,src:"./sounds/bgm.mp3",loop:!0})]})]})},xb=()=>(mr.useEffect(()=>{const n=new gb({canvas:document.querySelector("canvas.webgl"),cameraPosition:{x:0,y:0,z:4.5}});return n.start(),()=>n.stop()},[]),Pt.jsxs("div",{className:"fixed inset-0",children:[Pt.jsx("canvas",{className:"webgl"}),Pt.jsx("button",{id:"play-music",type:"button",children:"Play music"}),Pt.jsxs("footer",{children:[Pt.jsx("p",{children:"Built with Three.js and GSAP."}),Pt.jsxs("p",{children:["Inspired by"," ",Pt.jsx("a",{href:"https://threejs-audio-reactive-visual.netlify.app/",children:"this demo by Francesco Michelini"})]})]})]})),yb=()=>{const[n,e]=mr.useState("xmas");return Pt.jsxs("div",{className:"h-screen w-screen overflow-y-auto overflow-x-hidden bg-slate-900",children:[Pt.jsx("div",{className:"fixed left-1/2 top-12 z-50 flex h-20 w-1/2 -translate-x-1/2 items-center justify-center",children:n!=="xmas"?Pt.jsx("button",{className:"view-switcher",onClick:()=>e("xmas"),children:"Xmas"}):Pt.jsx("button",{className:"view-switcher",onClick:()=>e("default"),children:"Audio Sphere"})}),n==="xmas"?Pt.jsx(xb,{}):Pt.jsx(vb,{})]})};Jv(document.getElementById("root")).render(Pt.jsx(yb,{}));
