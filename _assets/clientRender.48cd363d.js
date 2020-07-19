/** @license React v16.13.0
 * react.production.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const React={};(function(d){function r(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function w(a,b,c){this.props=a;this.context=b;this.refs=ba;this.updater=c||ca;}function da(){}function L(a,b,c){this.props=a;this.context=b;this.refs=ba;this.updater=c||ca;}function ea(a,b,c){var g,e={},fa=null,d=null;if(null!=b)for(g in (void 0!==b.ref&&(d=b.ref), void 0!==b.key&&(fa=""+b.key), b))ha.call(b,g)&&!ia.hasOwnProperty(g)&&(e[g]=b[g]);var h=arguments.length-2;if(1===h)e.children=c;else if(1<h){for(var k=Array(h),f=0;f<h;f++)k[f]=arguments[f+2];e.children=k;}if(a&&a.defaultProps)for(g in (h=a.defaultProps, h))void 0===e[g]&&(e[g]=h[g]);return {$$typeof:x,type:a,key:fa,ref:d,props:e,_owner:M.current}}function va(a,b){return {$$typeof:x,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return "object"===typeof a&&null!==a&&a.$$typeof===x}function wa(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}function ja(a,b,c,g){if(C.length){var e=C.pop();e.result=a;e.keyPrefix=b;e.func=c;e.context=g;e.count=0;return e}return {result:a,keyPrefix:b,func:c,
context:g,count:0}}function ka(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>C.length&&C.push(a);}function O(a,b,c,g){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var d=!1;if(null===a)d=!0;else switch(e){case "string":case "number":d=!0;break;case "object":switch(a.$$typeof){case x:case xa:d=!0;}}if(d)return c(g,a,""===b?"."+P(a,0):b),1;d=0;b=""===b?".":b+":";if(Array.isArray(a))for(var f=0;f<a.length;f++){e=a[f];var h=b+P(e,f);d+=O(e,h,c,g);}else if(null===a||
"object"!==typeof a?h=null:(h=la&&a[la]||a["@@iterator"],h="function"===typeof h?h:null),"function"===typeof h)for(a=h.call(a),f=0;!(e=a.next()).done;)e=e.value,h=b+P(e,f++),d+=O(e,h,c,g);else if("object"===e)throw (c=""+a, Error(r(31,"[object Object]"===c?"object with keys {"+Object.keys(a).join(", ")+"}":c,"")));return d}function Q(a,b,c){return null==a?0:O(a,"",b,c)}function P(a,b){return "object"===typeof a&&null!==a&&null!=a.key?wa(a.key):b.toString(36)}function ya(a,b,c){a.func.call(a.context,b,
a.count++);}function za(a,b,c){var g=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?R(a,g,c,function(a){return a}):null!=a&&(N(a)&&(a=va(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(ma,"$&/")+"/")+c)),g.push(a));}function R(a,b,c,g,e){var d="";null!=c&&(d=(""+c).replace(ma,"$&/")+"/");b=ja(b,d,g,e);Q(a,za,b);ka(b);}function t(){var a=na.current;if(null===a)throw Error(r(321));return a}function S(a,b){var c=a.length;a.push(b);a:for(;;){var g=c-1>>>1,e=a[g];if(void 0!==
e&&0<D(e,b))a[g]=b,a[c]=e,c=g;else break a}}function n(a){a=a[0];return void 0===a?null:a}function E(a){var b=a[0];if(void 0!==b){var c=a.pop();if(c!==b){a[0]=c;a:for(var g=0,e=a.length;g<e;){var d=2*(g+1)-1,f=a[d],h=d+1,k=a[h];if(void 0!==f&&0>D(f,c))void 0!==k&&0>D(k,f)?(a[g]=k,a[h]=c,g=h):(a[g]=f,a[d]=c,g=d);else if(void 0!==k&&0>D(k,c))a[g]=k,a[h]=c,g=h;else break a}}return b}return null}function D(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}function F(a){for(var b=n(u);null!==
b;){if(null===b.callback)E(u);else if(b.startTime<=a)E(u),b.sortIndex=b.expirationTime,S(p,b);else break;b=n(u);}}function T(a){y=!1;F(a);if(!v)if(null!==n(p))v=!0,z(U);else {var b=n(u);null!==b&&G(T,b.startTime-a);}}function U(a,b){v=!1;y&&(y=!1,V());H=!0;var c=m;try{F(b);for(l=n(p);null!==l&&(!(l.expirationTime>b)||a&&!W());){var g=l.callback;if(null!==g){l.callback=null;m=l.priorityLevel;var e=g(l.expirationTime<=b);b=q();"function"===typeof e?l.callback=e:l===n(p)&&E(p);F(b);}else E(p);l=n(p);}if(null!==
l)var d=!0;else {var f=n(u);null!==f&&G(T,f.startTime-b);d=!1;}return d}finally{l=null,m=c,H=!1;}}function oa(a){switch(a){case 1:return -1;case 2:return 250;case 5:return 1073741823;case 4:return 1E4;default:return 5E3}}var f="function"===typeof Symbol&&Symbol.for,x=f?Symbol.for("react.element"):60103,xa=f?Symbol.for("react.portal"):60106,Aa=f?Symbol.for("react.fragment"):60107,Ba=f?Symbol.for("react.strict_mode"):60108,Ca=f?Symbol.for("react.profiler"):60114,Da=f?Symbol.for("react.provider"):60109,
Ea=f?Symbol.for("react.context"):60110,Fa=f?Symbol.for("react.forward_ref"):60112,Ga=f?Symbol.for("react.suspense"):60113,Ha=f?Symbol.for("react.memo"):60115,Ia=f?Symbol.for("react.lazy"):60116,la="function"===typeof Symbol&&Symbol.iterator,pa=Object.getOwnPropertySymbols,Ja=Object.prototype.hasOwnProperty,Ka=Object.prototype.propertyIsEnumerable,I=function(){try{if(!Object.assign)return !1;var a=new String("abc");a[5]="de";if("5"===Object.getOwnPropertyNames(a)[0])return !1;var b={};for(a=0;10>a;a++)b["_"+
String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(b).map(function(a){return b[a]}).join(""))return !1;var c={};"abcdefghijklmnopqrst".split("").forEach(function(a){c[a]=a;});return "abcdefghijklmnopqrst"!==Object.keys(Object.assign({},c)).join("")?!1:!0}catch(g){return !1}}()?Object.assign:function(a,b){if(null===a||void 0===a)throw new TypeError("Object.assign cannot be called with null or undefined");var c=Object(a);for(var g,e=1;e<arguments.length;e++){var d=Object(arguments[e]);
for(var f in d)Ja.call(d,f)&&(c[f]=d[f]);if(pa){g=pa(d);for(var h=0;h<g.length;h++)Ka.call(d,g[h])&&(c[g[h]]=d[g[h]]);}}return c},ca={isMounted:function(a){return !1},enqueueForceUpdate:function(a,b,c){},enqueueReplaceState:function(a,b,c,d){},enqueueSetState:function(a,b,c,d){}},ba={};w.prototype.isReactComponent={};w.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error(r(85));this.updater.enqueueSetState(this,a,b,"setState");};w.prototype.forceUpdate=
function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};da.prototype=w.prototype;f=L.prototype=new da;f.constructor=L;I(f,w.prototype);f.isPureReactComponent=!0;var M={current:null},ha=Object.prototype.hasOwnProperty,ia={key:!0,ref:!0,__self:!0,__source:!0},ma=/\/+/g,C=[],na={current:null},X;if("undefined"===typeof window||"function"!==typeof MessageChannel){var A=null,qa=null,ra=function(){if(null!==A)try{var a=q();A(!0,a);A=null;}catch(b){throw (setTimeout(ra,0), b);}},La=Date.now();var q=
function(){return Date.now()-La};var z=function(a){null!==A?setTimeout(z,0,a):(A=a,setTimeout(ra,0));};var G=function(a,b){qa=setTimeout(a,b);};var V=function(){clearTimeout(qa);};var W=function(){return !1};f=X=function(){};}else {var Y=window.performance,sa=window.Date,Ma=window.setTimeout,Na=window.clearTimeout;"undefined"!==typeof console&&(f=window.cancelAnimationFrame,"function"!==typeof window.requestAnimationFrame&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"),
"function"!==typeof f&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));if("object"===typeof Y&&"function"===typeof Y.now)q=function(){return Y.now()};else {var Oa=sa.now();q=function(){return sa.now()-Oa};}var J=!1,K=null,Z=-1,ta=5,ua=0;W=function(){return q()>=ua};f=function(){};X=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing framerates higher than 125 fps is not unsupported"):
ta=0<a?Math.floor(1E3/a):5;};var B=new MessageChannel,aa=B.port2;B.port1.onmessage=function(){if(null!==K){var a=q();ua=a+ta;try{K(!0,a)?aa.postMessage(null):(J=!1,K=null);}catch(b){throw (aa.postMessage(null), b);}}else J=!1;};z=function(a){K=a;J||(J=!0,aa.postMessage(null));};G=function(a,b){Z=Ma(function(){a(q());},b);};V=function(){Na(Z);Z=-1;};}var p=[],u=[],Pa=1,l=null,m=3,H=!1,v=!1,y=!1,Qa=0;B={ReactCurrentDispatcher:na,ReactCurrentOwner:M,IsSomeRendererActing:{current:!1},assign:I};I(B,{Scheduler:{__proto__:null,
unstable_ImmediatePriority:1,unstable_UserBlockingPriority:2,unstable_NormalPriority:3,unstable_IdlePriority:5,unstable_LowPriority:4,unstable_runWithPriority:function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=m;m=a;try{return b()}finally{m=c;}},unstable_next:function(a){switch(m){case 1:case 2:case 3:var b=3;break;default:b=m;}var c=m;m=b;try{return a()}finally{m=c;}},unstable_scheduleCallback:function(a,b,c){var d=q();if("object"===typeof c&&null!==c){var e=c.delay;
e="number"===typeof e&&0<e?d+e:d;c="number"===typeof c.timeout?c.timeout:oa(a);}else c=oa(a),e=d;c=e+c;a={id:Pa++,callback:b,priorityLevel:a,startTime:e,expirationTime:c,sortIndex:-1};e>d?(a.sortIndex=e,S(u,a),null===n(p)&&a===n(u)&&(y?V():y=!0,G(T,e-d))):(a.sortIndex=c,S(p,a),v||H||(v=!0,z(U)));return a},unstable_cancelCallback:function(a){a.callback=null;},unstable_wrapCallback:function(a){var b=m;return function(){var c=m;m=b;try{return a.apply(this,arguments)}finally{m=c;}}},unstable_getCurrentPriorityLevel:function(){return m},
unstable_shouldYield:function(){var a=q();F(a);var b=n(p);return b!==l&&null!==l&&null!==b&&null!==b.callback&&b.startTime<=a&&b.expirationTime<l.expirationTime||W()},unstable_requestPaint:f,unstable_continueExecution:function(){v||H||(v=!0,z(U));},unstable_pauseExecution:function(){},unstable_getFirstCallbackNode:function(){return n(p)},get unstable_now(){return q},get unstable_forceFrameRate(){return X},unstable_Profiling:null},SchedulerTracing:{__proto__:null,__interactionsRef:null,__subscriberRef:null,
unstable_clear:function(a){return a()},unstable_getCurrent:function(){return null},unstable_getThreadID:function(){return ++Qa},unstable_trace:function(a,b,c){return c()},unstable_wrap:function(a){return a},unstable_subscribe:function(a){},unstable_unsubscribe:function(a){}}});d.Children={map:function(a,b,c){if(null==a)return a;var d=[];R(a,d,null,b,c);return d},forEach:function(a,b,c){if(null==a)return a;b=ja(null,null,b,c);Q(a,ya,b);ka(b);},count:function(a){return Q(a,function(){return null},null)},
toArray:function(a){var b=[];R(a,b,null,function(a){return a});return b},only:function(a){if(!N(a))throw Error(r(143));return a}};d.Component=w;d.Fragment=Aa;d.Profiler=Ca;d.PureComponent=L;d.StrictMode=Ba;d.Suspense=Ga;d.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B;d.cloneElement=function(a,b,c){if(null===a||void 0===a)throw Error(r(267,a));var d=I({},a.props),e=a.key,f=a.ref,m=a._owner;if(null!=b){void 0!==b.ref&&(f=b.ref,m=M.current);void 0!==b.key&&(e=""+b.key);if(a.type&&a.type.defaultProps)var h=
a.type.defaultProps;for(k in b)ha.call(b,k)&&!ia.hasOwnProperty(k)&&(d[k]=void 0===b[k]&&void 0!==h?h[k]:b[k]);}var k=arguments.length-2;if(1===k)d.children=c;else if(1<k){h=Array(k);for(var l=0;l<k;l++)h[l]=arguments[l+2];d.children=h;}return {$$typeof:x,type:a.type,key:e,ref:f,props:d,_owner:m}};d.createContext=function(a,b){void 0===b&&(b=null);a={$$typeof:Ea,_calculateChangedBits:b,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:Da,_context:a};return a.Consumer=
a};d.createElement=ea;d.createFactory=function(a){var b=ea.bind(null,a);b.type=a;return b};d.createRef=function(){return {current:null}};d.forwardRef=function(a){return {$$typeof:Fa,render:a}};d.isValidElement=N;d.lazy=function(a){return {$$typeof:Ia,_ctor:a,_status:-1,_result:null}};d.memo=function(a,b){return {$$typeof:Ha,type:a,compare:void 0===b?null:b}};d.useCallback=function(a,b){return t().useCallback(a,b)};d.useContext=function(a,b){return t().useContext(a,b)};d.useDebugValue=function(a,b){};
d.useEffect=function(a,b){return t().useEffect(a,b)};d.useImperativeHandle=function(a,b,c){return t().useImperativeHandle(a,b,c)};d.useLayoutEffect=function(a,b){return t().useLayoutEffect(a,b)};d.useMemo=function(a,b){return t().useMemo(a,b)};d.useReducer=function(a,b,c){return t().useReducer(a,b,c)};d.useRef=function(a){return t().useRef(a)};d.useState=function(a){return t().useState(a)};d.version="16.13.0";})(React);
const{Children,Component,Fragment,Profiler,PureComponent,StrictMode,Suspense,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cloneElement,createContext,createElement,createFactory,createRef,forwardRef,isValidElement,lazy,memo,useCallback,useContext,useDebugValue,useEffect,useImperativeHandle,useLayoutEffect,useMemo,useReducer,useRef,useState,version}=React;

/** @license React v16.13.0
 * react-dom.production.js
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const ReactDOM={};(function(I,ea){function k(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}
function ji(a,b,c,d,e,f,g,h,m){yb=!1;gc=null;ki.apply(li,arguments);}function mi(a,b,c,d,e,f,g,h,m){ji.apply(this,arguments);if(yb){if(yb){var n=gc;yb=!1;gc=null;}else throw Error(k(198));hc||(hc=!0,pd=n);}}function lf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=mf(c);mi(d,b,void 0,a);a.currentTarget=null;}function zb(a){if(null===a||"object"!==typeof a)return null;a=nf&&a[nf]||a["@@iterator"];return "function"===typeof a?a:null}function ni(a){if(-1===a._status){a._status=0;var b=a._ctor;b=b();
a._result=b;b.then(function(b){0===a._status&&(b=b.default,a._status=1,a._result=b);},function(b){0===a._status&&(a._status=2,a._result=b);});}}function na(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case Ma:return "Fragment";case cb:return "Portal";case ic:return "Profiler";case of:return "StrictMode";case jc:return "Suspense";case qd:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case pf:return "Context.Consumer";
case qf:return "Context.Provider";case rd:var b=a.render;b=b.displayName||b.name||"";return a.displayName||(""!==b?"ForwardRef("+b+")":"ForwardRef");case sd:return na(a.type);case rf:return na(a.render);case sf:if(a=1===a._status?a._result:null)return na(a)}return null}function td(a){var b="";do{a:switch(a.tag){case 3:case 4:case 6:case 7:case 10:case 9:var c="";break a;default:var d=a._debugOwner,e=a._debugSource,f=na(a.type);c=null;d&&(c=na(d.type));d=f;f="";e?f=" (at "+e.fileName.replace(oi,"")+
":"+e.lineNumber+")":c&&(f=" (created by "+c+")");c="\n    in "+(d||"Unknown")+f;}b+=c;a=a.return;}while(a);return b}function tf(){if(kc)for(var a in db){var b=db[a],c=kc.indexOf(a);if(!(-1<c))throw Error(k(96,a));if(!lc[c]){if(!b.extractEvents)throw Error(k(97,a));lc[c]=b;c=b.eventTypes;for(var d in c){var e=void 0;var f=c[d],g=b,h=d;if(ud.hasOwnProperty(h))throw Error(k(99,h));ud[h]=f;var m=f.phasedRegistrationNames;if(m){for(e in m)m.hasOwnProperty(e)&&uf(m[e],g,h);e=!0;}else f.registrationName?(uf(f.registrationName,
g,h),e=!0):e=!1;if(!e)throw Error(k(98,d,a));}}}}function uf(a,b,c){if(eb[a])throw Error(k(100,a));eb[a]=b;vd[a]=b.eventTypes[c].dependencies;}function vf(a){var b=!1,c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(!db.hasOwnProperty(c)||db[c]!==d){if(db[c])throw Error(k(102,c));db[c]=d;b=!0;}}b&&tf();}function wf(a){if(a=xf(a)){if("function"!==typeof wd)throw Error(k(280));var b=a.stateNode;b&&(b=xd(b),wd(a.stateNode,a.type,b));}}function yf(a){fb?gb?gb.push(a):gb=[a]:fb=a;}function zf(){if(fb){var a=
fb,b=gb;gb=fb=null;wf(a);if(b)for(a=0;a<b.length;a++)wf(b[a]);}}function yd(){if(null!==fb||null!==gb)zd(),zf();}function Af(a,b,c){if(Ad)return a(b,c);Ad=!0;try{return Bf(a,b,c)}finally{Ad=!1,yd();}}function pi(a){if(Cf.call(Df,a))return !0;if(Cf.call(Ef,a))return !1;if(qi.test(a))return Df[a]=!0;Ef[a]=!0;return !1}function ri(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,
5);return "data-"!==a&&"aria-"!==a;default:return !1}}function si(a,b,c,d){if(null===b||"undefined"===typeof b||ri(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function L(a,b,c,d,e,f){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;}function Bd(a,b,c,d){var e=E.hasOwnProperty(b)?
E[b]:null;var f=null!==e?0===e.type:d?!1:!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1]?!1:!0;f||(si(b,c,e,d)&&(c=null),d||null===e?pi(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c))));}function va(a){switch(typeof a){case "boolean":case "number":case "object":case "string":case "undefined":return a;
default:return ""}}function Ff(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}function ti(a){var b=Ff(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,
b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=null;delete a[b];}}}}function mc(a){a._valueTracker||(a._valueTracker=ti(a));}function Gf(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ff(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Cd(a,b){var c=b.checked;return M({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=
c?c:a._wrapperState.initialChecked})}function Hf(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=va(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function If(a,b){b=b.checked;null!=b&&Bd(a,"checked",b,!1);}function Dd(a,b){If(a,b);var c=va(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==
""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?Ed(a,b.type,c):b.hasOwnProperty("defaultValue")&&Ed(a,b.type,va(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}function Jf(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=
b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}function Ed(a,b,c){if("number"!==b||a.ownerDocument.activeElement!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}function ui(a){var b="";ea.Children.forEach(a,function(a){null!=a&&(b+=a);});return b}function Fd(a,b){a=M({children:void 0},b);if(b=ui(b.children))a.children=b;return a}function hb(a,b,c,d){a=a.options;if(b){b={};
for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+va(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}function Gd(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(k(91));return M({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}
function Kf(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(k(92));if(Array.isArray(c)){if(!(1>=c.length))throw Error(k(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:va(c)};}function Lf(a,b){var c=va(b.value),d=va(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function Mf(a,b){b=a.textContent;b===a._wrapperState.initialValue&&""!==
b&&null!==b&&(a.value=b);}function Nf(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}function Hd(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?Nf(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}function nc(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}function oc(a){if(Id[a])return Id[a];
if(!ib[a])return a;var b=ib[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Of)return Id[a]=b[c];return a}function Jd(a){var b=Pf.get(a);void 0===b&&(b=new Map,Pf.set(a,b));return b}function Na(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.effectTag&1026)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Qf(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Rf(a){if(Na(a)!==
a)throw Error(k(188));}function vi(a){var b=a.alternate;if(!b){b=Na(a);if(null===b)throw Error(k(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Rf(e),a;if(f===d)return Rf(e),b;f=f.sibling;}throw Error(k(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=
f.child;h;){if(h===c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(k(189));}}if(c.alternate!==d)throw Error(k(190));}if(3!==c.tag)throw Error(k(188));return c.stateNode.current===c?a:b}function Sf(a){a=vi(a);if(!a)return null;for(var b=a;;){if(5===b.tag||6===b.tag)return b;if(b.child)b.child.return=b,b=b.child;else {if(b===a)break;for(;!b.sibling;){if(!b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return null}function jb(a,b){if(null==
b)throw Error(k(30));if(null==a)return b;if(Array.isArray(a)){if(Array.isArray(b))return a.push.apply(a,b),a;a.push(b);return a}return Array.isArray(b)?[a].concat(b):[a,b]}function Kd(a,b,c){Array.isArray(a)?a.forEach(b,c):a&&b.call(c,a);}function pc(a){null!==a&&(Ab=jb(Ab,a));a=Ab;Ab=null;if(a){Kd(a,wi);if(Ab)throw Error(k(95));if(hc)throw (a=pd, hc=!1, pd=null, a);}}function Ld(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:
a}function Tf(a){if(!wa)return !1;a="on"+a;var b=a in document;b||(b=document.createElement("div"),b.setAttribute(a,"return;"),b="function"===typeof b[a]);return b}function Uf(a){a.topLevelType=null;a.nativeEvent=null;a.targetInst=null;a.ancestors.length=0;10>qc.length&&qc.push(a);}function Vf(a,b,c,d){if(qc.length){var e=qc.pop();e.topLevelType=a;e.eventSystemFlags=d;e.nativeEvent=b;e.targetInst=c;return e}return {topLevelType:a,eventSystemFlags:d,nativeEvent:b,targetInst:c,ancestors:[]}}function Wf(a){var b=
a.targetInst,c=b;do{if(!c){a.ancestors.push(c);break}var d=c;if(3===d.tag)d=d.stateNode.containerInfo;else {for(;d.return;)d=d.return;d=3!==d.tag?null:d.stateNode.containerInfo;}if(!d)break;b=c.tag;5!==b&&6!==b||a.ancestors.push(c);c=Bb(d);}while(c);for(c=0;c<a.ancestors.length;c++){b=a.ancestors[c];var e=Ld(a.nativeEvent);d=a.topLevelType;var f=a.nativeEvent,g=a.eventSystemFlags;0===c&&(g|=64);for(var h=null,m=0;m<lc.length;m++){var n=lc[m];n&&(n=n.extractEvents(d,b,f,e,g))&&(h=jb(h,n));}pc(h);}}function Md(a,
b,c){if(!c.has(a)){switch(a){case "scroll":Cb(b,"scroll",!0);break;case "focus":case "blur":Cb(b,"focus",!0);Cb(b,"blur",!0);c.set("blur",null);c.set("focus",null);break;case "cancel":case "close":Tf(a)&&Cb(b,a,!0);break;case "invalid":case "submit":case "reset":break;default:-1===Db.indexOf(a)&&w(a,b);}c.set(a,null);}}function xi(a,b){var c=Jd(b);Nd.forEach(function(a){Md(a,b,c);});yi.forEach(function(a){Md(a,b,c);});}function Od(a,b,c,d,e){return {blockedOn:a,topLevelType:b,eventSystemFlags:c|32,nativeEvent:e,
container:d}}function Xf(a,b){switch(a){case "focus":case "blur":xa=null;break;case "dragenter":case "dragleave":ya=null;break;case "mouseover":case "mouseout":za=null;break;case "pointerover":case "pointerout":Eb.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Fb.delete(b.pointerId);}}function Gb(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a=Od(b,c,d,e,f),null!==b&&(b=Hb(b),null!==b&&Yf(b)),a;a.eventSystemFlags|=d;return a}function zi(a,b,c,d,e){switch(b){case "focus":return xa=
Gb(xa,a,b,c,d,e),!0;case "dragenter":return ya=Gb(ya,a,b,c,d,e),!0;case "mouseover":return za=Gb(za,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Eb.set(f,Gb(Eb.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,Fb.set(f,Gb(Fb.get(f)||null,a,b,c,d,e)),!0}return !1}function Ai(a){var b=Bb(a.target);if(null!==b){var c=Na(b);if(null!==c)if(b=c.tag,13===b){if(b=Qf(c),null!==b){a.blockedOn=b;Pd(a.priority,function(){Bi(c);});return}}else if(3===b&&c.stateNode.hydrate){a.blockedOn=
3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}function rc(a){if(null!==a.blockedOn)return !1;var b=Qd(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);if(null!==b){var c=Hb(b);null!==c&&Yf(c);a.blockedOn=b;return !1}return !0}function Zf(a,b,c){rc(a)&&c.delete(b);}function Ci(){for(Rd=!1;0<fa.length;){var a=fa[0];if(null!==a.blockedOn){a=Hb(a.blockedOn);null!==a&&Di(a);break}var b=Qd(a.topLevelType,a.eventSystemFlags,a.container,a.nativeEvent);null!==b?a.blockedOn=b:fa.shift();}null!==
xa&&rc(xa)&&(xa=null);null!==ya&&rc(ya)&&(ya=null);null!==za&&rc(za)&&(za=null);Eb.forEach(Zf);Fb.forEach(Zf);}function Ib(a,b){a.blockedOn===b&&(a.blockedOn=null,Rd||(Rd=!0,$f(ag,Ci)));}function bg(a){if(0<fa.length){Ib(fa[0],a);for(var b=1;b<fa.length;b++){var c=fa[b];c.blockedOn===a&&(c.blockedOn=null);}}null!==xa&&Ib(xa,a);null!==ya&&Ib(ya,a);null!==za&&Ib(za,a);b=function(b){return Ib(b,a)};Eb.forEach(b);Fb.forEach(b);for(b=0;b<Jb.length;b++)c=Jb[b],c.blockedOn===a&&(c.blockedOn=null);for(;0<Jb.length&&
(b=Jb[0],null===b.blockedOn);)Ai(b),null===b.blockedOn&&Jb.shift();}function Sd(a,b){for(var c=0;c<a.length;c+=2){var d=a[c],e=a[c+1],f="on"+(e[0].toUpperCase()+e.slice(1));f={phasedRegistrationNames:{bubbled:f,captured:f+"Capture"},dependencies:[d],eventPriority:b};Td.set(d,b);cg.set(d,f);dg[e]=f;}}function w(a,b){Cb(b,a,!1);}function Cb(a,b,c){var d=Td.get(b);switch(void 0===d?2:d){case 0:d=Ei.bind(null,b,1,a);break;case 1:d=Fi.bind(null,b,1,a);break;default:d=sc.bind(null,b,1,a);}c?a.addEventListener(b,
d,!0):a.addEventListener(b,d,!1);}function Ei(a,b,c,d){Oa||zd();var e=sc,f=Oa;Oa=!0;try{eg(e,a,b,c,d);}finally{(Oa=f)||yd();}}function Fi(a,b,c,d){Gi(Hi,sc.bind(null,a,b,c,d));}function sc(a,b,c,d){if(tc)if(0<fa.length&&-1<Nd.indexOf(a))a=Od(null,a,b,c,d),fa.push(a);else {var e=Qd(a,b,c,d);if(null===e)Xf(a,d);else if(-1<Nd.indexOf(a))a=Od(e,a,b,c,d),fa.push(a);else if(!zi(e,a,b,c,d)){Xf(a,d);a=Vf(a,d,null,b);try{Af(Wf,a);}finally{Uf(a);}}}}function Qd(a,b,c,d){c=Ld(d);c=Bb(c);if(null!==c){var e=Na(c);if(null===
e)c=null;else {var f=e.tag;if(13===f){c=Qf(e);if(null!==c)return c;c=null;}else if(3===f){if(e.stateNode.hydrate)return 3===e.tag?e.stateNode.containerInfo:null;c=null;}else e!==c&&(c=null);}}a=Vf(a,d,c,b);try{Af(Wf,a);}finally{Uf(a);}return null}function fg(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||Kb.hasOwnProperty(a)&&Kb[a]?(""+b).trim():b+"px"}function gg(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=fg(c,b[c],d);"float"===
c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}function Ud(a,b){if(b){if(Ii[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(k(137,a,""));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(k(60));if(!("object"===typeof b.dangerouslySetInnerHTML&&"__html"in b.dangerouslySetInnerHTML))throw Error(k(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(k(62,""));}}function Vd(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;
default:return !0}}function oa(a,b){a=9===a.nodeType||11===a.nodeType?a:a.ownerDocument;var c=Jd(a);b=vd[b];for(var d=0;d<b.length;d++)Md(b[d],a,c);}function uc(){}function Wd(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}function hg(a){for(;a&&a.firstChild;)a=a.firstChild;return a}function ig(a,b){var c=hg(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,
offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=hg(c);}}function jg(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?jg(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}function kg(){for(var a=window,b=Wd();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Wd(a.document);}return b}
function Xd(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}function lg(a,b){switch(a){case "button":case "input":case "select":case "textarea":return !!b.autoFocus}return !1}function Yd(a,b){return "textarea"===a||"option"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&
null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}function kb(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break}return a}function mg(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if(c===ng||c===Zd||c===$d){if(0===b)return a;b--;}else c===og&&b++;}a=a.previousSibling;}return null}function Bb(a){var b=a[Aa];if(b)return b;for(var c=a.parentNode;c;){if(b=c[Lb]||c[Aa]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=mg(a);null!==
a;){if(c=a[Aa])return c;a=mg(a);}return b}a=c;c=a.parentNode;}return null}function Hb(a){a=a[Aa]||a[Lb];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function Pa(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(k(33));}function ae(a){return a[vc]||null}function pa(a){do a=a.return;while(a&&5!==a.tag);return a?a:null}function pg(a,b){var c=a.stateNode;if(!c)return null;var d=xd(c);if(!d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=
!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==typeof c)throw Error(k(231,b,typeof c));return c}function qg(a,b,c){if(b=pg(a,c.dispatchConfig.phasedRegistrationNames[b]))c._dispatchListeners=jb(c._dispatchListeners,b),c._dispatchInstances=jb(c._dispatchInstances,a);}function Ji(a){if(a&&a.dispatchConfig.phasedRegistrationNames){for(var b=a._targetInst,c=[];b;)c.push(b),b=pa(b);for(b=c.length;0<b--;)qg(c[b],
"captured",a);for(b=0;b<c.length;b++)qg(c[b],"bubbled",a);}}function be(a,b,c){a&&c&&c.dispatchConfig.registrationName&&(b=pg(a,c.dispatchConfig.registrationName))&&(c._dispatchListeners=jb(c._dispatchListeners,b),c._dispatchInstances=jb(c._dispatchInstances,a));}function Ki(a){a&&a.dispatchConfig.registrationName&&be(a._targetInst,null,a);}function lb(a){Kd(a,Ji);}function rg(){if(wc)return wc;var a,b=ce,c=b.length,d,e="value"in Ba?Ba.value:Ba.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=
c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return wc=e.slice(a,1<d?1-d:void 0)}function xc(){return !0}function yc(){return !1}function R(a,b,c,d){this.dispatchConfig=a;this._targetInst=b;this.nativeEvent=c;a=this.constructor.Interface;for(var e in a)a.hasOwnProperty(e)&&((b=a[e])?this[e]=b(c):"target"===e?this.target=d:this[e]=c[e]);this.isDefaultPrevented=(null!=c.defaultPrevented?c.defaultPrevented:!1===c.returnValue)?xc:yc;this.isPropagationStopped=yc;return this}function Li(a,b,c,d){if(this.eventPool.length){var e=
this.eventPool.pop();this.call(e,a,b,c,d);return e}return new this(a,b,c,d)}function Mi(a){if(!(a instanceof this))throw Error(k(279));a.destructor();10>this.eventPool.length&&this.eventPool.push(a);}function sg(a){a.eventPool=[];a.getPooled=Li;a.release=Mi;}function tg(a,b){switch(a){case "keyup":return -1!==Ni.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "blur":return !0;default:return !1}}function ug(a){a=a.detail;return "object"===typeof a&&"data"in
a?a.data:null}function Oi(a,b){switch(a){case "compositionend":return ug(b);case "keypress":if(32!==b.which)return null;vg=!0;return wg;case "textInput":return a=b.data,a===wg&&vg?null:a;default:return null}}function Pi(a,b){if(mb)return "compositionend"===a||!de&&tg(a,b)?(a=rg(),wc=ce=Ba=null,mb=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;
case "compositionend":return xg&&"ko"!==b.locale?null:b.data;default:return null}}function yg(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!Qi[a.type]:"textarea"===b?!0:!1}function zg(a,b,c){a=R.getPooled(Ag.change,a,b,c);a.type="change";yf(c);lb(a);return a}function Ri(a){pc(a);}function zc(a){var b=Pa(a);if(Gf(b))return a}function Si(a,b){if("change"===a)return b}function Bg(){Mb&&(Mb.detachEvent("onpropertychange",Cg),Nb=Mb=null);}function Cg(a){if("value"===a.propertyName&&
zc(Nb))if(a=zg(Nb,a,Ld(a)),Oa)pc(a);else {Oa=!0;try{ee(Ri,a);}finally{Oa=!1,yd();}}}function Ti(a,b,c){"focus"===a?(Bg(),Mb=b,Nb=c,Mb.attachEvent("onpropertychange",Cg)):"blur"===a&&Bg();}function Ui(a,b){if("selectionchange"===a||"keyup"===a||"keydown"===a)return zc(Nb)}function Vi(a,b){if("click"===a)return zc(b)}function Wi(a,b){if("input"===a||"change"===a)return zc(b)}function Xi(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Yi[a])?!!b[a]:!1}function fe(a){return Xi}
function Zi(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}function Ob(a,b){if(Qa(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++)if(!$i.call(b,c[d])||!Qa(a[c[d]],b[c[d]]))return !1;return !0}function Dg(a,b){var c=b.window===b?b.document:9===b.nodeType?b:b.ownerDocument;if(ge||null==nb||nb!==Wd(c))return null;c=nb;"selectionStart"in c&&Xd(c)?c={start:c.selectionStart,
end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset});return Pb&&Ob(Pb,c)?null:(Pb=c,a=R.getPooled(Eg.select,he,a,b),a.type="select",a.target=nb,lb(a),a)}function Ac(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function q(a,b){0>ob||(a.current=ie[ob],ie[ob]=null,ob--);}function y(a,b,c){ob++;
ie[ob]=a.current;a.current=b;}function pb(a,b){var c=a.type.contextTypes;if(!c)return Ca;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}function N(a){a=a.childContextTypes;return null!==a&&void 0!==a}function Fg(a,b,c){if(B.current!==Ca)throw Error(k(168));y(B,b);y(G,c);}
function Gg(a,b,c){var d=a.stateNode;a=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in a))throw Error(k(108,na(b)||"Unknown",e));return M({},c,{},d)}function Bc(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Ca;Ra=B.current;y(B,a);y(G,G.current);return !0}function Hg(a,b,c){var d=a.stateNode;if(!d)throw Error(k(169));c?(a=Gg(a,b,Ra),d.__reactInternalMemoizedMergedChildContext=a,q(G),q(B),y(B,a)):q(G);y(G,c);}function Cc(){switch(aj()){case Dc:return 99;
case Ig:return 98;case Jg:return 97;case Kg:return 96;case Lg:return 95;default:throw Error(k(332));}}function Mg(a){switch(a){case 99:return Dc;case 98:return Ig;case 97:return Jg;case 96:return Kg;case 95:return Lg;default:throw Error(k(332));}}function Da(a,b){a=Mg(a);return bj(a,b)}function Ng(a,b,c){a=Mg(a);return je(a,b,c)}function Og(a){null===qa?(qa=[a],Ec=je(Dc,Pg)):qa.push(a);return Qg}function ha(){if(null!==Ec){var a=Ec;Ec=null;Rg(a);}Pg();}function Pg(){if(!ke&&null!==qa){ke=!0;var a=0;
try{var b=qa;Da(99,function(){for(;a<b.length;a++){var c=b[a];do c=c(!0);while(null!==c)}});qa=null;}catch(c){throw (null!==qa&&(qa=qa.slice(a+1)), je(Dc,ha), c);}finally{ke=!1;}}}function Fc(a,b,c){c/=10;return 1073741821-(((1073741821-a+b/10)/c|0)+1)*c}function aa(a,b){if(a&&a.defaultProps){b=M({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);}return b}function le(){Gc=qb=Hc=null;}function me(a){var b=Ic.current;q(Ic);a.type._context._currentValue=b;}function Sg(a,b){for(;null!==a;){var c=
a.alternate;if(a.childExpirationTime<b)a.childExpirationTime=b,null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);else if(null!==c&&c.childExpirationTime<b)c.childExpirationTime=b;else break;a=a.return;}}function rb(a,b){Hc=a;Gc=qb=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(a.expirationTime>=b&&(ia=!0),a.firstContext=null);}function W(a,b){if(Gc!==a&&!1!==b&&0!==b){if("number"!==typeof b||1073741823===b)Gc=a,b=1073741823;b={context:a,observedBits:b,next:null};if(null===qb){if(null===
Hc)throw Error(k(308));qb=b;Hc.dependencies={expirationTime:0,firstContext:b,responders:null};}else qb=qb.next=b;}return a._currentValue}function ne(a){a.updateQueue={baseState:a.memoizedState,baseQueue:null,shared:{pending:null},effects:null};}function oe(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,baseQueue:a.baseQueue,shared:a.shared,effects:a.effects});}function Ea(a,b){a={expirationTime:a,suspenseConfig:b,tag:Tg,payload:null,callback:null,next:null};return a.next=
a}function Fa(a,b){a=a.updateQueue;if(null!==a){a=a.shared;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}}function Ug(a,b){var c=a.alternate;null!==c&&oe(c,a);a=a.updateQueue;c=a.baseQueue;null===c?(a.baseQueue=b.next=b,b.next=b):(b.next=c.next,c.next=b);}function Qb(a,b,c,d){var e=a.updateQueue;Ga=!1;var f=e.baseQueue,g=e.shared.pending;if(null!==g){if(null!==f){var h=f.next;f.next=g.next;g.next=h;}f=g;e.shared.pending=null;h=a.alternate;null!==h&&(h=h.updateQueue,null!==h&&
(h.baseQueue=g));}if(null!==f){h=f.next;var m=e.baseState,n=0,k=null,ba=null,l=null;if(null!==h){var p=h;do{g=p.expirationTime;if(g<d){var t={expirationTime:p.expirationTime,suspenseConfig:p.suspenseConfig,tag:p.tag,payload:p.payload,callback:p.callback,next:null};null===l?(ba=l=t,k=m):l=l.next=t;g>n&&(n=g);}else {null!==l&&(l=l.next={expirationTime:1073741823,suspenseConfig:p.suspenseConfig,tag:p.tag,payload:p.payload,callback:p.callback,next:null});Vg(g,p.suspenseConfig);a:{var q=a,r=p;g=b;t=c;switch(r.tag){case 1:q=
r.payload;if("function"===typeof q){m=q.call(t,m,g);break a}m=q;break a;case 3:q.effectTag=q.effectTag&-4097|64;case Tg:q=r.payload;g="function"===typeof q?q.call(t,m,g):q;if(null===g||void 0===g)break a;m=M({},m,g);break a;case Jc:Ga=!0;}}null!==p.callback&&(a.effectTag|=32,g=e.effects,null===g?e.effects=[p]:g.push(p));}p=p.next;if(null===p||p===h)if(g=e.shared.pending,null===g)break;else p=f.next=g.next,g.next=h,e.baseQueue=f=g,e.shared.pending=null;}while(1)}null===l?k=m:l.next=ba;e.baseState=k;e.baseQueue=
l;Kc(n);a.expirationTime=n;a.memoizedState=m;}}function Wg(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=e;e=c;if("function"!==typeof d)throw Error(k(191,d));d.call(e);}}}function Lc(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:M({},b,c);a.memoizedState=c;0===a.expirationTime&&(a.updateQueue.baseState=c);}function Xg(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,
f,g):b.prototype&&b.prototype.isPureReactComponent?!Ob(c,d)||!Ob(e,f):!0}function Yg(a,b,c){var d=!1,e=Ca;var f=b.contextType;"object"===typeof f&&null!==f?f=W(f):(e=N(b)?Ra:B.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?pb(a,e):Ca);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Mc;a.stateNode=b;b._reactInternalFiber=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}function Zg(a,
b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Mc.enqueueReplaceState(b,b.state,null);}function pe(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=$g;ne(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=W(f):(f=N(b)?Ra:B.current,e.context=pb(a,f));Qb(a,c,e,d);e.state=a.memoizedState;f=b.getDerivedStateFromProps;
"function"===typeof f&&(Lc(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Mc.enqueueReplaceState(e,e.state,null),Qb(a,c,e,d),e.state=a.memoizedState);"function"===
typeof e.componentDidMount&&(a.effectTag|=4);}function Rb(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(k(309));var d=c.stateNode;}if(!d)throw Error(k(147,a));var e=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===e)return b.ref;b=function(a){var b=d.refs;b===$g&&(b=d.refs={});null===a?delete b[e]:b[e]=a;};b._stringRef=e;return b}if("string"!==typeof a)throw Error(k(284));if(!c._owner)throw Error(k(290,
a));}return a}function Nc(a,b){if("textarea"!==a.type)throw Error(k(31,"[object Object]"===Object.prototype.toString.call(b)?"object with keys {"+Object.keys(b).join(", ")+"}":b,""));}function ah(a){function b(b,c){if(a){var d=b.lastEffect;null!==d?(d.nextEffect=c,b.lastEffect=c):b.firstEffect=b.lastEffect=c;c.nextEffect=null;c.effectTag=8;}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,
b),b=b.sibling;return a}function e(a,b){a=Sa(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.effectTag=2,c):d;b.effectTag=2;return c}function g(b){a&&null===b.alternate&&(b.effectTag=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=qe(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function m(a,b,c,d){if(null!==b&&b.elementType===c.type)return d=e(b,c.props),d.ref=Rb(a,b,c),d.return=a,d;d=Oc(c.type,
c.key,c.props,null,a.mode,d);d.ref=Rb(a,b,c);d.return=a;return d}function n(a,b,c,d){if(null===b||4!==b.tag||b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=re(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function l(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ha(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function ba(a,b,c){if("string"===typeof b||"number"===typeof b)return b=qe(""+b,a.mode,c),b.return=a,b;if("object"===
typeof b&&null!==b){switch(b.$$typeof){case Pc:return c=Oc(b.type,b.key,b.props,null,a.mode,c),c.ref=Rb(a,null,b),c.return=a,c;case cb:return b=re(b,a.mode,c),b.return=a,b}if(Qc(b)||zb(b))return b=Ha(b,a.mode,c,null),b.return=a,b;Nc(a,b);}return null}function p(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case Pc:return c.key===e?c.type===Ma?l(a,b,c.props.children,d,e):m(a,b,c,
d):null;case cb:return c.key===e?n(a,b,c,d):null}if(Qc(c)||zb(c))return null!==e?null:l(a,b,c,d,null);Nc(a,c);}return null}function t(a,b,c,d,e){if("string"===typeof d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case Pc:return a=a.get(null===d.key?c:d.key)||null,d.type===Ma?l(b,a,d.props.children,e,d.key):m(b,a,d,e);case cb:return a=a.get(null===d.key?c:d.key)||null,n(b,a,d,e)}if(Qc(d)||zb(d))return a=a.get(c)||null,l(b,a,d,e,null);
Nc(b,d);}return null}function q(e,g,h,m){for(var n=null,k=null,l=g,r=g=0,C=null;null!==l&&r<h.length;r++){l.index>r?(C=l,l=null):C=l.sibling;var O=p(e,l,h[r],m);if(null===O){null===l&&(l=C);break}a&&l&&null===O.alternate&&b(e,l);g=f(O,g,r);null===k?n=O:k.sibling=O;k=O;l=C;}if(r===h.length)return c(e,l),n;if(null===l){for(;r<h.length;r++)l=ba(e,h[r],m),null!==l&&(g=f(l,g,r),null===k?n=l:k.sibling=l,k=l);return n}for(l=d(e,l);r<h.length;r++)C=t(l,e,r,h[r],m),null!==C&&(a&&null!==C.alternate&&l.delete(null===
C.key?r:C.key),g=f(C,g,r),null===k?n=C:k.sibling=C,k=C);a&&l.forEach(function(a){return b(e,a)});return n}function w(e,g,h,n){var m=zb(h);if("function"!==typeof m)throw Error(k(150));h=m.call(h);if(null==h)throw Error(k(151));for(var l=m=null,r=g,C=g=0,O=null,v=h.next();null!==r&&!v.done;C++,v=h.next()){r.index>C?(O=r,r=null):O=r.sibling;var q=p(e,r,v.value,n);if(null===q){null===r&&(r=O);break}a&&r&&null===q.alternate&&b(e,r);g=f(q,g,C);null===l?m=q:l.sibling=q;l=q;r=O;}if(v.done)return c(e,r),m;
if(null===r){for(;!v.done;C++,v=h.next())v=ba(e,v.value,n),null!==v&&(g=f(v,g,C),null===l?m=v:l.sibling=v,l=v);return m}for(r=d(e,r);!v.done;C++,v=h.next())v=t(r,e,C,v.value,n),null!==v&&(a&&null!==v.alternate&&r.delete(null===v.key?C:v.key),g=f(v,g,C),null===l?m=v:l.sibling=v,l=v);a&&r.forEach(function(a){return b(e,a)});return m}return function(a,d,f,h){var m="object"===typeof f&&null!==f&&f.type===Ma&&null===f.key;m&&(f=f.props.children);var n="object"===typeof f&&null!==f;if(n)switch(f.$$typeof){case Pc:a:{n=
f.key;for(m=d;null!==m;){if(m.key===n){switch(m.tag){case 7:if(f.type===Ma){c(a,m.sibling);d=e(m,f.props.children);d.return=a;a=d;break a}break;default:if(m.elementType===f.type){c(a,m.sibling);d=e(m,f.props);d.ref=Rb(a,m,f);d.return=a;a=d;break a}}c(a,m);break}else b(a,m);m=m.sibling;}f.type===Ma?(d=Ha(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Oc(f.type,f.key,f.props,null,a.mode,h),h.ref=Rb(a,d,f),h.return=a,a=h);}return g(a);case cb:a:{for(m=f.key;null!==d;){if(d.key===m)if(4===d.tag&&d.stateNode.containerInfo===
f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=re(f,a.mode,h);d.return=a;a=d;}return g(a)}if("string"===typeof f||"number"===typeof f)return f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):(c(a,d),d=qe(f,a.mode,h),d.return=a,a=d),g(a);if(Qc(f))return q(a,d,f,h);if(zb(f))return w(a,d,f,h);n&&Nc(a,f);if("undefined"===typeof f&&!m)switch(a.tag){case 1:case 0:throw (a=
a.type, Error(k(152,a.displayName||a.name||"Component")));}return c(a,d)};}function Ta(a){if(a===Sb)throw Error(k(174));return a}function se(a,b){y(Tb,b);y(Ub,a);y(ja,Sb);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:Hd(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=Hd(b,a);}q(ja);y(ja,b);}function tb(a){q(ja);q(Ub);q(Tb);}function bh(a){Ta(Tb.current);var b=Ta(ja.current);var c=Hd(b,a.type);b!==c&&(y(Ub,a),y(ja,c));}function te(a){Ub.current===
a&&(q(ja),q(Ub));}function Rc(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||c.data===$d||c.data===Zd))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.effectTag&64))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}function ue(a,b){return {responder:a,props:b}}
function S(){throw Error(k(321));}function ve(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!Qa(a[c],b[c]))return !1;return !0}function we(a,b,c,d,e,f){Ia=f;z=b;b.memoizedState=null;b.updateQueue=null;b.expirationTime=0;Sc.current=null===a||null===a.memoizedState?dj:ej;a=c(d,e);if(b.expirationTime===Ia){f=0;do{b.expirationTime=0;if(!(25>f))throw Error(k(301));f+=1;J=K=null;b.updateQueue=null;Sc.current=fj;a=c(d,e);}while(b.expirationTime===Ia)}Sc.current=Tc;b=null!==K&&null!==K.next;
Ia=0;J=K=z=null;Uc=!1;if(b)throw Error(k(300));return a}function ub(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===J?z.memoizedState=J=a:J=J.next=a;return J}function vb(){if(null===K){var a=z.alternate;a=null!==a?a.memoizedState:null;}else a=K.next;var b=null===J?z.memoizedState:J.next;if(null!==b)J=b,K=a;else {if(null===a)throw Error(k(310));K=a;a={memoizedState:K.memoizedState,baseState:K.baseState,baseQueue:K.baseQueue,queue:K.queue,next:null};null===J?z.memoizedState=
J=a:J=J.next=a;}return J}function Ua(a,b){return "function"===typeof b?b(a):b}function Vc(a,b,c){b=vb();c=b.queue;if(null===c)throw Error(k(311));c.lastRenderedReducer=a;var d=K,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){e=e.next;d=d.baseState;var h=g=f=null,m=e;do{var n=m.expirationTime;if(n<Ia){var l={expirationTime:m.expirationTime,suspenseConfig:m.suspenseConfig,action:m.action,eagerReducer:m.eagerReducer,eagerState:m.eagerState,
next:null};null===h?(g=h=l,f=d):h=h.next=l;n>z.expirationTime&&(z.expirationTime=n,Kc(n));}else null!==h&&(h=h.next={expirationTime:1073741823,suspenseConfig:m.suspenseConfig,action:m.action,eagerReducer:m.eagerReducer,eagerState:m.eagerState,next:null}),Vg(n,m.suspenseConfig),d=m.eagerReducer===a?m.eagerState:a(d,m.action);m=m.next;}while(null!==m&&m!==e);null===h?f=d:h.next=g;Qa(d,b.memoizedState)||(ia=!0);b.memoizedState=d;b.baseState=f;b.baseQueue=h;c.lastRenderedState=d;}return [b.memoizedState,
c.dispatch]}function Wc(a,b,c){b=vb();c=b.queue;if(null===c)throw Error(k(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);Qa(f,b.memoizedState)||(ia=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function xe(a){var b=ub();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a=b.queue={pending:null,dispatch:null,lastRenderedReducer:Ua,
lastRenderedState:a};a=a.dispatch=ch.bind(null,z,a);return [b.memoizedState,a]}function ye(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=z.updateQueue;null===b?(b={lastEffect:null},z.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function dh(a){return vb().memoizedState}function ze(a,b,c,d){var e=ub();z.effectTag|=a;e.memoizedState=ye(1|b,c,void 0,void 0===d?null:d);}function Ae(a,b,c,d){var e=vb();
d=void 0===d?null:d;var f=void 0;if(null!==K){var g=K.memoizedState;f=g.destroy;if(null!==d&&ve(d,g.deps)){ye(b,c,f,d);return}}z.effectTag|=a;e.memoizedState=ye(1|b,c,f,d);}function eh(a,b){return ze(516,4,a,b)}function Xc(a,b){return Ae(516,4,a,b)}function fh(a,b){return Ae(4,2,a,b)}function gh(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function hh(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;
return Ae(4,2,gh.bind(null,b,a),c)}function Be(a,b){}function ih(a,b){ub().memoizedState=[a,void 0===b?null:b];return a}function Yc(a,b){var c=vb();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ve(b,d[1]))return d[0];c.memoizedState=[a,b];return a}function jh(a,b){var c=vb();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&ve(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Ce(a,b,c){var d=Cc();Da(98>d?98:d,function(){a(!0);});Da(97<d?97:d,function(){var d=
X.suspense;X.suspense=void 0===b?null:b;try{a(!1),c();}finally{X.suspense=d;}});}function ch(a,b,c){var d=ka(),e=Vb.suspense;d=Va(d,a,e);e={expirationTime:d,suspenseConfig:e,action:c,eagerReducer:null,eagerState:null,next:null};var f=b.pending;null===f?e.next=e:(e.next=f.next,f.next=e);b.pending=e;f=a.alternate;if(a===z||null!==f&&f===z)Uc=!0,e.expirationTime=Ia,z.expirationTime=Ia;else {if(0===a.expirationTime&&(null===f||0===f.expirationTime)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,
h=f(g,c);e.eagerReducer=f;e.eagerState=h;if(Qa(h,g))return}catch(m){}finally{}Ja(a,d);}}function kh(a,b){var c=la(5,null,null,0);c.elementType="DELETED";c.type="DELETED";c.stateNode=b;c.return=a;c.effectTag=8;null!==a.lastEffect?(a.lastEffect.nextEffect=c,a.lastEffect=c):a.firstEffect=a.lastEffect=c;}function lh(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?
null:b,null!==b?(a.stateNode=b,!0):!1;case 13:return !1;default:return !1}}function De(a){if(Wa){var b=Ka;if(b){var c=b;if(!lh(a,b)){b=kb(c.nextSibling);if(!b||!lh(a,b)){a.effectTag=a.effectTag&-1025|2;Wa=!1;ra=a;return}kh(ra,c);}ra=a;Ka=kb(b.firstChild);}else a.effectTag=a.effectTag&-1025|2,Wa=!1,ra=a;}}function mh(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;ra=a;}function Zc(a){if(a!==ra)return !1;if(!Wa)return mh(a),Wa=!0,!1;var b=a.type;if(5!==a.tag||"head"!==b&&"body"!==
b&&!Yd(b,a.memoizedProps))for(b=Ka;b;)kh(a,b),b=kb(b.nextSibling);mh(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(k(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if(c===og){if(0===b){Ka=kb(a.nextSibling);break a}b--;}else c!==ng&&c!==Zd&&c!==$d||b++;}a=a.nextSibling;}Ka=null;}}else Ka=ra?kb(a.stateNode.nextSibling):null;return !0}function Ee(){Ka=ra=null;Wa=!1;}function T(a,b,c,d){b.child=null===a?Fe(b,null,c,d):wb(b,a.child,c,d);}function nh(a,
b,c,d,e){c=c.render;var f=b.ref;rb(b,e);d=we(a,b,c,d,f,e);if(null!==a&&!ia)return b.updateQueue=a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),sa(a,b,e);b.effectTag|=1;T(a,b,d,e);return b.child}function oh(a,b,c,d,e,f){if(null===a){var g=c.type;if("function"===typeof g&&!Ge(g)&&void 0===g.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=g,ph(a,b,g,d,e,f);a=Oc(c.type,null,d,null,b.mode,f);a.ref=b.ref;a.return=b;return b.child=a}g=a.child;if(e<
f&&(e=g.memoizedProps,c=c.compare,c=null!==c?c:Ob,c(e,d)&&a.ref===b.ref))return sa(a,b,f);b.effectTag|=1;a=Sa(g,d);a.ref=b.ref;a.return=b;return b.child=a}function ph(a,b,c,d,e,f){return null!==a&&Ob(a.memoizedProps,d)&&a.ref===b.ref&&(ia=!1,e<f)?(b.expirationTime=a.expirationTime,sa(a,b,f)):He(a,b,c,d,f)}function qh(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.effectTag|=128;}function He(a,b,c,d,e){var f=N(c)?Ra:B.current;f=pb(b,f);rb(b,e);c=we(a,b,c,d,f,e);if(null!==a&&!ia)return b.updateQueue=
a.updateQueue,b.effectTag&=-517,a.expirationTime<=e&&(a.expirationTime=0),sa(a,b,e);b.effectTag|=1;T(a,b,c,e);return b.child}function rh(a,b,c,d,e){if(N(c)){var f=!0;Bc(b);}else f=!1;rb(b,e);if(null===b.stateNode)null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),Yg(b,c,d),pe(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var m=g.context,n=c.contextType;"object"===typeof n&&null!==n?n=W(n):(n=N(c)?Ra:B.current,n=pb(b,n));var l=c.getDerivedStateFromProps,k="function"===
typeof l||"function"===typeof g.getSnapshotBeforeUpdate;k||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||m!==n)&&Zg(b,g,d,n);Ga=!1;var p=b.memoizedState;g.state=p;Qb(b,d,g,e);m=b.memoizedState;h!==d||p!==m||G.current||Ga?("function"===typeof l&&(Lc(b,c,l,d),m=b.memoizedState),(h=Ga||Xg(b,c,h,d,p,m,n))?(k||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&
g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.effectTag|=4)):("function"===typeof g.componentDidMount&&(b.effectTag|=4),b.memoizedProps=d,b.memoizedState=m),g.props=d,g.state=m,g.context=n,d=h):("function"===typeof g.componentDidMount&&(b.effectTag|=4),d=!1);}else g=b.stateNode,oe(a,b),h=b.memoizedProps,g.props=b.type===b.elementType?h:aa(b.type,h),m=g.context,n=c.contextType,"object"===typeof n&&null!==
n?n=W(n):(n=N(c)?Ra:B.current,n=pb(b,n)),l=c.getDerivedStateFromProps,(k="function"===typeof l||"function"===typeof g.getSnapshotBeforeUpdate)||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==d||m!==n)&&Zg(b,g,d,n),Ga=!1,m=b.memoizedState,g.state=m,Qb(b,d,g,e),p=b.memoizedState,h!==d||m!==p||G.current||Ga?("function"===typeof l&&(Lc(b,c,l,d),p=b.memoizedState),(l=Ga||Xg(b,c,h,d,m,p,n))?(k||"function"!==typeof g.UNSAFE_componentWillUpdate&&
"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,p,n),"function"===typeof g.UNSAFE_componentWillUpdate&&g.UNSAFE_componentWillUpdate(d,p,n)),"function"===typeof g.componentDidUpdate&&(b.effectTag|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.effectTag|=256)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&m===
a.memoizedState||(b.effectTag|=256),b.memoizedProps=d,b.memoizedState=p),g.props=d,g.state=p,g.context=n,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&m===a.memoizedState||(b.effectTag|=256),d=!1);return Ie(a,b,c,d,f,e)}function Ie(a,b,c,d,e,f){qh(a,b);var g=0!==(b.effectTag&64);if(!d&&!g)return e&&Hg(b,c,!1),sa(a,b,f);d=b.stateNode;gj.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?
null:d.render();b.effectTag|=1;null!==a&&g?(b.child=wb(b,a.child,null,f),b.child=wb(b,null,h,f)):T(a,b,h,f);b.memoizedState=d.state;e&&Hg(b,c,!0);return b.child}function sh(a){var b=a.stateNode;b.pendingContext?Fg(a,b.pendingContext,b.pendingContext!==b.context):b.context&&Fg(a,b.context,!1);se(a,b.containerInfo);}function th(a,b,c){var d=b.mode,e=b.pendingProps,f=D.current,g=!1,h;(h=0!==(b.effectTag&64))||(h=0!==(f&2)&&(null===a||null!==a.memoizedState));h?(g=!0,b.effectTag&=-65):null!==a&&null===
a.memoizedState||void 0===e.fallback||!0===e.unstable_avoidThisFallback||(f|=1);y(D,f&1);if(null===a){void 0!==e.fallback&&De(b);if(g){g=e.fallback;e=Ha(null,d,0,null);e.return=b;if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==a;)a.return=e,a=a.sibling;c=Ha(g,d,c,null);c.return=b;e.sibling=c;b.memoizedState=Je;b.child=e;return c}d=e.children;b.memoizedState=null;return b.child=Fe(b,null,d,c)}if(null!==a.memoizedState){a=a.child;d=a.sibling;if(g){e=e.fallback;
c=Sa(a,a.pendingProps);c.return=b;if(0===(b.mode&2)&&(g=null!==b.memoizedState?b.child.child:b.child,g!==a.child))for(c.child=g;null!==g;)g.return=c,g=g.sibling;d=Sa(d,e);d.return=b;c.sibling=d;c.childExpirationTime=0;b.memoizedState=Je;b.child=c;return d}c=wb(b,a.child,e.children,c);b.memoizedState=null;return b.child=c}a=a.child;if(g){g=e.fallback;e=Ha(null,d,0,null);e.return=b;e.child=a;null!==a&&(a.return=e);if(0===(b.mode&2))for(a=null!==b.memoizedState?b.child.child:b.child,e.child=a;null!==
a;)a.return=e,a=a.sibling;c=Ha(g,d,c,null);c.return=b;e.sibling=c;c.effectTag|=2;e.childExpirationTime=0;b.memoizedState=Je;b.child=e;return c}b.memoizedState=null;return b.child=wb(b,a,e.children,c)}function uh(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);Sg(a.return,b);}function Ke(a,b,c,d,e,f){var g=a.memoizedState;null===g?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailExpiration:0,tailMode:e,
lastEffect:f}:(g.isBackwards=b,g.rendering=null,g.renderingStartTime=0,g.last=d,g.tail=c,g.tailExpiration=0,g.tailMode=e,g.lastEffect=f);}function vh(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;T(a,b,d.children,c);d=D.current;if(0!==(d&2))d=d&1|2,b.effectTag|=64;else {if(null!==a&&0!==(a.effectTag&64))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&uh(a,c);else if(19===a.tag)uh(a,c);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===
a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}y(D,d);if(0===(b.mode&2))b.memoizedState=null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Rc(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);Ke(b,!1,e,c,f,b.lastEffect);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Rc(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}Ke(b,
!0,c,null,f,b.lastEffect);break;case "together":Ke(b,!1,null,null,void 0,b.lastEffect);break;default:b.memoizedState=null;}return b.child}function sa(a,b,c){null!==a&&(b.dependencies=a.dependencies);var d=b.expirationTime;0!==d&&Kc(d);if(b.childExpirationTime<c)return null;if(null!==a&&b.child!==a.child)throw Error(k(153));if(null!==b.child){a=b.child;c=Sa(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Sa(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
function $c(a,b){switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}function hj(a,b,c){var d=b.pendingProps;switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return N(b.type)&&(q(G),q(B)),
null;case 3:return tb(),q(G),q(B),c=b.stateNode,c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),null!==a&&null!==a.child||!Zc(b)||(b.effectTag|=4),null;case 5:te(b);c=Ta(Tb.current);var e=b.type;if(null!==a&&null!=b.stateNode)ij(a,b,e,d,c),a.ref!==b.ref&&(b.effectTag|=128);else {if(!d){if(null===b.stateNode)throw Error(k(166));return null}a=Ta(ja.current);if(Zc(b)){d=b.stateNode;e=b.type;var f=b.memoizedProps;d[Aa]=b;d[vc]=f;switch(e){case "iframe":case "object":case "embed":w("load",
d);break;case "video":case "audio":for(a=0;a<Db.length;a++)w(Db[a],d);break;case "source":w("error",d);break;case "img":case "image":case "link":w("error",d);w("load",d);break;case "form":w("reset",d);w("submit",d);break;case "details":w("toggle",d);break;case "input":Hf(d,f);w("invalid",d);oa(c,"onChange");break;case "select":d._wrapperState={wasMultiple:!!f.multiple};w("invalid",d);oa(c,"onChange");break;case "textarea":Kf(d,f),w("invalid",d),oa(c,"onChange");}Ud(e,f);a=null;for(var g in f)if(f.hasOwnProperty(g)){var h=
f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(a=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(a=["children",""+h]):eb.hasOwnProperty(g)&&null!=h&&oa(c,g);}switch(e){case "input":mc(d);Jf(d,f,!0);break;case "textarea":mc(d);Mf(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=uc);}c=a;b.updateQueue=c;null!==c&&(b.effectTag|=4);}else {g=9===c.nodeType?c:c.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=Nf(e));"http://www.w3.org/1999/xhtml"===
a?"script"===e?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):"string"===typeof d.is?a=g.createElement(e,{is:d.is}):(a=g.createElement(e),"select"===e&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,e);a[Aa]=b;a[vc]=d;jj(a,b,!1);b.stateNode=a;g=Vd(e,d);switch(e){case "iframe":case "object":case "embed":w("load",a);h=d;break;case "video":case "audio":for(h=0;h<Db.length;h++)w(Db[h],a);h=d;break;case "source":w("error",a);
h=d;break;case "img":case "image":case "link":w("error",a);w("load",a);h=d;break;case "form":w("reset",a);w("submit",a);h=d;break;case "details":w("toggle",a);h=d;break;case "input":Hf(a,d);h=Cd(a,d);w("invalid",a);oa(c,"onChange");break;case "option":h=Fd(a,d);break;case "select":a._wrapperState={wasMultiple:!!d.multiple};h=M({},d,{value:void 0});w("invalid",a);oa(c,"onChange");break;case "textarea":Kf(a,d);h=Gd(a,d);w("invalid",a);oa(c,"onChange");break;default:h=d;}Ud(e,h);var m=h;for(f in m)if(m.hasOwnProperty(f)){var n=
m[f];"style"===f?gg(a,n):"dangerouslySetInnerHTML"===f?(n=n?n.__html:void 0,null!=n&&xh(a,n)):"children"===f?"string"===typeof n?("textarea"!==e||""!==n)&&Wb(a,n):"number"===typeof n&&Wb(a,""+n):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(eb.hasOwnProperty(f)?null!=n&&oa(c,f):null!=n&&Bd(a,f,n,g));}switch(e){case "input":mc(a);Jf(a,d,!1);break;case "textarea":mc(a);Mf(a);break;case "option":null!=d.value&&a.setAttribute("value",""+va(d.value));break;case "select":a.multiple=
!!d.multiple;c=d.value;null!=c?hb(a,!!d.multiple,c,!1):null!=d.defaultValue&&hb(a,!!d.multiple,d.defaultValue,!0);break;default:"function"===typeof h.onClick&&(a.onclick=uc);}lg(e,d)&&(b.effectTag|=4);}null!==b.ref&&(b.effectTag|=128);}return null;case 6:if(a&&null!=b.stateNode)kj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(k(166));c=Ta(Tb.current);Ta(ja.current);Zc(b)?(c=b.stateNode,d=b.memoizedProps,c[Aa]=b,c.nodeValue!==d&&(b.effectTag|=4)):(c=(9===c.nodeType?
c:c.ownerDocument).createTextNode(d),c[Aa]=b,b.stateNode=c);}return null;case 13:q(D);d=b.memoizedState;if(0!==(b.effectTag&64))return b.expirationTime=c,b;c=null!==d;d=!1;null===a?void 0!==b.memoizedProps.fallback&&Zc(b):(e=a.memoizedState,d=null!==e,c||null===e||(e=a.child.sibling,null!==e&&(f=b.firstEffect,null!==f?(b.firstEffect=e,e.nextEffect=f):(b.firstEffect=b.lastEffect=e,e.nextEffect=null),e.effectTag=8)));if(c&&!d&&0!==(b.mode&2))if(null===a&&!0!==b.memoizedProps.unstable_avoidThisFallback||
0!==(D.current&1))F===Xa&&(F=ad);else {if(F===Xa||F===ad)F=bd;0!==Xb&&null!==U&&(Ya(U,P),yh(U,Xb));}if(c||d)b.effectTag|=4;return null;case 4:return tb(),null;case 10:return me(b),null;case 17:return N(b.type)&&(q(G),q(B)),null;case 19:q(D);d=b.memoizedState;if(null===d)return null;e=0!==(b.effectTag&64);f=d.rendering;if(null===f)if(e)$c(d,!1);else {if(F!==Xa||null!==a&&0!==(a.effectTag&64))for(f=b.child;null!==f;){a=Rc(f);if(null!==a){b.effectTag|=64;$c(d,!1);e=a.updateQueue;null!==e&&(b.updateQueue=
e,b.effectTag|=4);null===d.lastEffect&&(b.firstEffect=null);b.lastEffect=d.lastEffect;for(d=b.child;null!==d;)e=d,f=c,e.effectTag&=2,e.nextEffect=null,e.firstEffect=null,e.lastEffect=null,a=e.alternate,null===a?(e.childExpirationTime=0,e.expirationTime=f,e.child=null,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null):(e.childExpirationTime=a.childExpirationTime,e.expirationTime=a.expirationTime,e.child=a.child,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,
e.updateQueue=a.updateQueue,f=a.dependencies,e.dependencies=null===f?null:{expirationTime:f.expirationTime,firstContext:f.firstContext,responders:f.responders}),d=d.sibling;y(D,D.current&1|2);return b.child}f=f.sibling;}}else {if(!e)if(a=Rc(f),null!==a){if(b.effectTag|=64,e=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.effectTag|=4),$c(d,!0),null===d.tail&&"hidden"===d.tailMode&&!f.alternate)return b=b.lastEffect=d.lastEffect,null!==b&&(b.nextEffect=null),null}else 2*Y()-d.renderingStartTime>d.tailExpiration&&
1<c&&(b.effectTag|=64,e=!0,$c(d,!1),b.expirationTime=b.childExpirationTime=c-1);d.isBackwards?(f.sibling=b.child,b.child=f):(c=d.last,null!==c?c.sibling=f:b.child=f,d.last=f);}return null!==d.tail?(0===d.tailExpiration&&(d.tailExpiration=Y()+500),c=d.tail,d.rendering=c,d.tail=c.sibling,d.lastEffect=b.lastEffect,d.renderingStartTime=Y(),c.sibling=null,b=D.current,y(D,e?b&1|2:b&1),c):null}throw Error(k(156,b.tag));}function lj(a,b){switch(a.tag){case 1:return N(a.type)&&(q(G),q(B)),b=a.effectTag,b&4096?
(a.effectTag=b&-4097|64,a):null;case 3:tb();q(G);q(B);b=a.effectTag;if(0!==(b&64))throw Error(k(285));a.effectTag=b&-4097|64;return a;case 5:return te(a),null;case 13:return q(D),b=a.effectTag,b&4096?(a.effectTag=b&-4097|64,a):null;case 19:return q(D),null;case 4:return tb(),null;case 10:return me(a),null;default:return null}}function Le(a,b){return {value:a,source:b,stack:td(b)}}function Me(a,b){var c=b.source,d=b.stack;null===d&&null!==c&&(d=td(c));null!==c&&na(c.type);b=b.value;null!==a&&1===a.tag&&
na(a.type);try{console.error(b);}catch(e){setTimeout(function(){throw e;});}}function mj(a,b){try{b.props=a.memoizedProps,b.state=a.memoizedState,b.componentWillUnmount();}catch(c){Za(a,c);}}function zh(a){var b=a.ref;if(null!==b)if("function"===typeof b)try{b(null);}catch(c){Za(a,c);}else b.current=null;}function nj(a,b){switch(b.tag){case 0:case 11:case 15:case 22:return;case 1:if(b.effectTag&256&&null!==a){var c=a.memoizedProps,d=a.memoizedState;a=b.stateNode;b=a.getSnapshotBeforeUpdate(b.elementType===
b.type?c:aa(b.type,c),d);a.__reactInternalSnapshotBeforeUpdate=b;}return;case 3:case 5:case 6:case 4:case 17:return}throw Error(k(163));}function Ah(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.destroy;c.destroy=void 0;void 0!==d&&d();}c=c.next;}while(c!==b)}}function Bh(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function oj(a,b,c,d){switch(c.tag){case 0:case 11:case 15:case 22:Bh(3,
c);return;case 1:a=c.stateNode;c.effectTag&4&&(null===b?a.componentDidMount():(d=c.elementType===c.type?b.memoizedProps:aa(c.type,b.memoizedProps),a.componentDidUpdate(d,b.memoizedState,a.__reactInternalSnapshotBeforeUpdate)));b=c.updateQueue;null!==b&&Wg(c,b,a);return;case 3:b=c.updateQueue;if(null!==b){a=null;if(null!==c.child)switch(c.child.tag){case 5:a=c.child.stateNode;break;case 1:a=c.child.stateNode;}Wg(c,b,a);}return;case 5:a=c.stateNode;null===b&&c.effectTag&4&&lg(c.type,c.memoizedProps)&&
a.focus();return;case 6:return;case 4:return;case 12:return;case 13:null===c.memoizedState&&(c=c.alternate,null!==c&&(c=c.memoizedState,null!==c&&(c=c.dehydrated,null!==c&&bg(c))));return;case 19:case 17:case 20:case 21:return}throw Error(k(163));}function Ch(a,b,c){"function"===typeof Ne&&Ne(b);switch(b.tag){case 0:case 11:case 14:case 15:case 22:a=b.updateQueue;if(null!==a&&(a=a.lastEffect,null!==a)){var d=a.next;Da(97<c?97:c,function(){var a=d;do{var c=a.destroy;if(void 0!==c){var g=b;try{c();}catch(h){Za(g,
h);}}a=a.next;}while(a!==d)});}break;case 1:zh(b);c=b.stateNode;"function"===typeof c.componentWillUnmount&&mj(b,c);break;case 5:zh(b);break;case 4:Dh(a,b,c);}}function Eh(a){var b=a.alternate;a.return=null;a.child=null;a.memoizedState=null;a.updateQueue=null;a.dependencies=null;a.alternate=null;a.firstEffect=null;a.lastEffect=null;a.pendingProps=null;a.memoizedProps=null;a.stateNode=null;null!==b&&Eh(b);}function Fh(a){return 5===a.tag||3===a.tag||4===a.tag}function Gh(a){a:{for(var b=a.return;null!==
b;){if(Fh(b)){var c=b;break a}b=b.return;}throw Error(k(160));}b=c.stateNode;switch(c.tag){case 5:var d=!1;break;case 3:b=b.containerInfo;d=!0;break;case 4:b=b.containerInfo;d=!0;break;default:throw Error(k(161));}c.effectTag&16&&(Wb(b,""),c.effectTag&=-17);a:b:for(c=a;;){for(;null===c.sibling;){if(null===c.return||Fh(c.return)){c=null;break a}c=c.return;}c.sibling.return=c.return;for(c=c.sibling;5!==c.tag&&6!==c.tag&&18!==c.tag;){if(c.effectTag&2)continue b;if(null===c.child||4===c.tag)continue b;
else c.child.return=c,c=c.child;}if(!(c.effectTag&2)){c=c.stateNode;break a}}d?Oe(a,c,b):Pe(a,c,b);}function Oe(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=uc));else if(4!==d&&(a=a.child,null!==a))for(Oe(a,b,c),a=a.sibling;null!==a;)Oe(a,b,c),a=a.sibling;}
function Pe(a,b,c){var d=a.tag,e=5===d||6===d;if(e)a=e?a.stateNode:a.stateNode.instance,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Pe(a,b,c),a=a.sibling;null!==a;)Pe(a,b,c),a=a.sibling;}function Dh(a,b,c){for(var d=b,e=!1,f,g;;){if(!e){e=d.return;a:for(;;){if(null===e)throw Error(k(160));f=e.stateNode;switch(e.tag){case 5:g=!1;break a;case 3:f=f.containerInfo;g=!0;break a;case 4:f=f.containerInfo;g=!0;break a}e=e.return;}e=!0;}if(5===d.tag||6===d.tag){a:for(var h=
a,m=d,n=c,l=m;;)if(Ch(h,l,n),null!==l.child&&4!==l.tag)l.child.return=l,l=l.child;else {if(l===m)break a;for(;null===l.sibling;){if(null===l.return||l.return===m)break a;l=l.return;}l.sibling.return=l.return;l=l.sibling;}g?(h=f,m=d.stateNode,8===h.nodeType?h.parentNode.removeChild(m):h.removeChild(m)):f.removeChild(d.stateNode);}else if(4===d.tag){if(null!==d.child){f=d.stateNode.containerInfo;g=!0;d.child.return=d;d=d.child;continue}}else if(Ch(a,d,c),null!==d.child){d.child.return=d;d=d.child;continue}if(d===
b)break;for(;null===d.sibling;){if(null===d.return||d.return===b)return;d=d.return;4===d.tag&&(e=!1);}d.sibling.return=d.return;d=d.sibling;}}function Qe(a,b){switch(b.tag){case 0:case 11:case 14:case 15:case 22:Ah(3,b);return;case 1:return;case 5:var c=b.stateNode;if(null!=c){var d=b.memoizedProps,e=null!==a?a.memoizedProps:d;a=b.type;var f=b.updateQueue;b.updateQueue=null;if(null!==f){c[vc]=d;"input"===a&&"radio"===d.type&&null!=d.name&&If(c,d);Vd(a,e);b=Vd(a,d);for(e=0;e<f.length;e+=2){var g=f[e],
h=f[e+1];"style"===g?gg(c,h):"dangerouslySetInnerHTML"===g?xh(c,h):"children"===g?Wb(c,h):Bd(c,g,h,b);}switch(a){case "input":Dd(c,d);break;case "textarea":Lf(c,d);break;case "select":b=c._wrapperState.wasMultiple,c._wrapperState.wasMultiple=!!d.multiple,a=d.value,null!=a?hb(c,!!d.multiple,a,!1):b!==!!d.multiple&&(null!=d.defaultValue?hb(c,!!d.multiple,d.defaultValue,!0):hb(c,!!d.multiple,d.multiple?[]:"",!1));}}}return;case 6:if(null===b.stateNode)throw Error(k(162));b.stateNode.nodeValue=b.memoizedProps;
return;case 3:b=b.stateNode;b.hydrate&&(b.hydrate=!1,bg(b.containerInfo));return;case 12:return;case 13:c=b;null===b.memoizedState?d=!1:(d=!0,c=b.child,Re=Y());if(null!==c)a:for(a=c;;){if(5===a.tag)f=a.stateNode,d?(f=f.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(f=a.stateNode,e=a.memoizedProps.style,e=void 0!==e&&null!==e&&e.hasOwnProperty("display")?e.display:null,f.style.display=fg("display",e));else if(6===a.tag)a.stateNode.nodeValue=d?
"":a.memoizedProps;else if(13===a.tag&&null!==a.memoizedState&&null===a.memoizedState.dehydrated){f=a.child.sibling;f.return=a;a=f;continue}else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===c)break;for(;null===a.sibling;){if(null===a.return||a.return===c)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}Hh(b);return;case 19:Hh(b);return;case 17:return}throw Error(k(163));}function Hh(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=
new pj);b.forEach(function(b){var d=qj.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}function Ih(a,b,c){c=Ea(c,null);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){cd||(cd=!0,Se=d);Me(a,b);};return c}function Jh(a,b,c){c=Ea(c,null);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){Me(a,b);return d(e)};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){"function"!==typeof d&&
(null===La?La=new Set([this]):La.add(this),Me(a,b));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}function ka(){return (p&(ca|ma))!==H?1073741821-(Y()/10|0):0!==dd?dd:dd=1073741821-(Y()/10|0)}function Va(a,b,c){b=b.mode;if(0===(b&2))return 1073741823;var d=Cc();if(0===(b&4))return 99===d?1073741823:1073741822;if((p&ca)!==H)return P;if(null!==c)a=Fc(a,c.timeoutMs|0||5E3,250);else switch(d){case 99:a=1073741823;break;case 98:a=Fc(a,150,100);break;case 97:case 96:a=
Fc(a,5E3,250);break;case 95:a=2;break;default:throw Error(k(326));}null!==U&&a===P&&--a;return a}function ed(a,b){a.expirationTime<b&&(a.expirationTime=b);var c=a.alternate;null!==c&&c.expirationTime<b&&(c.expirationTime=b);var d=a.return,e=null;if(null===d&&3===a.tag)e=a.stateNode;else for(;null!==d;){c=d.alternate;d.childExpirationTime<b&&(d.childExpirationTime=b);null!==c&&c.childExpirationTime<b&&(c.childExpirationTime=b);if(null===d.return&&3===d.tag){e=d.stateNode;break}d=d.return;}null!==e&&
(U===e&&(Kc(b),F===bd&&Ya(e,P)),yh(e,b));return e}function fd(a){var b=a.lastExpiredTime;if(0!==b)return b;b=a.firstPendingTime;if(!Kh(a,b))return b;var c=a.lastPingedTime;a=a.nextKnownPendingLevel;a=c>a?c:a;return 2>=a&&b!==a?0:a}function V(a){if(0!==a.lastExpiredTime)a.callbackExpirationTime=1073741823,a.callbackPriority=99,a.callbackNode=Og(Te.bind(null,a));else {var b=fd(a),c=a.callbackNode;if(0===b)null!==c&&(a.callbackNode=null,a.callbackExpirationTime=0,a.callbackPriority=90);else {var d=ka();
1073741823===b?d=99:1===b||2===b?d=95:(d=10*(1073741821-b)-10*(1073741821-d),d=0>=d?99:250>=d?98:5250>=d?97:95);if(null!==c){var e=a.callbackPriority;if(a.callbackExpirationTime===b&&e>=d)return;c!==Qg&&Rg(c);}a.callbackExpirationTime=b;a.callbackPriority=d;b=1073741823===b?Og(Te.bind(null,a)):Ng(d,Lh.bind(null,a),{timeout:10*(1073741821-b)-Y()});a.callbackNode=b;}}}function Lh(a,b){dd=0;if(b)return b=ka(),Ue(a,b),V(a),null;var c=fd(a);if(0!==c){b=a.callbackNode;if((p&(ca|ma))!==H)throw Error(k(327));
xb();a===U&&c===P||$a(a,c);if(null!==t){var d=p;p|=ca;var e=Mh();do try{rj();break}catch(h){Nh(a,h);}while(1);le();p=d;gd.current=e;if(F===hd)throw (b=id, $a(a,c), Ya(a,c), V(a), b);if(null===t)switch(e=a.finishedWork=a.current.alternate,a.finishedExpirationTime=c,d=F,U=null,d){case Xa:case hd:throw Error(k(345));case Oh:Ue(a,2<c?2:c);break;case ad:Ya(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ve(e));if(1073741823===ta&&(e=Re+Ph-Y(),10<e)){if(jd){var f=a.lastPingedTime;if(0===f||f>=c){a.lastPingedTime=
c;$a(a,c);break}}f=fd(a);if(0!==f&&f!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}a.timeoutHandle=We(ab.bind(null,a),e);break}ab(a);break;case bd:Ya(a,c);d=a.lastSuspendedTime;c===d&&(a.nextKnownPendingLevel=Ve(e));if(jd&&(e=a.lastPingedTime,0===e||e>=c)){a.lastPingedTime=c;$a(a,c);break}e=fd(a);if(0!==e&&e!==c)break;if(0!==d&&d!==c){a.lastPingedTime=d;break}1073741823!==Yb?d=10*(1073741821-Yb)-Y():1073741823===ta?d=0:(d=10*(1073741821-ta)-5E3,e=Y(),c=10*(1073741821-c)-e,d=e-d,0>d&&(d=0),d=
(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*sj(d/1960))-d,c<d&&(d=c));if(10<d){a.timeoutHandle=We(ab.bind(null,a),d);break}ab(a);break;case Xe:if(1073741823!==ta&&null!==kd){f=ta;var g=kd;d=g.busyMinDurationMs|0;0>=d?d=0:(e=g.busyDelayMs|0,f=Y()-(10*(1073741821-f)-(g.timeoutMs|0||5E3)),d=f<=e?0:e+d-f);if(10<d){Ya(a,c);a.timeoutHandle=We(ab.bind(null,a),d);break}}ab(a);break;default:throw Error(k(329));}V(a);if(a.callbackNode===b)return Lh.bind(null,a)}}return null}function Te(a){var b=
a.lastExpiredTime;b=0!==b?b:1073741823;if((p&(ca|ma))!==H)throw Error(k(327));xb();a===U&&b===P||$a(a,b);if(null!==t){var c=p;p|=ca;var d=Mh();do try{tj();break}catch(e){Nh(a,e);}while(1);le();p=c;gd.current=d;if(F===hd)throw (c=id, $a(a,b), Ya(a,b), V(a), c);if(null!==t)throw Error(k(261));a.finishedWork=a.current.alternate;a.finishedExpirationTime=b;U=null;ab(a);V(a);}return null}function uj(){if(null!==bb){var a=bb;bb=null;a.forEach(function(a,c){Ue(c,a);V(c);});ha();}}function Qh(a,b){var c=p;p|=1;try{return a(b)}finally{p=
c,p===H&&ha();}}function Rh(a,b){var c=p;p&=-2;p|=Ye;try{return a(b)}finally{p=c,p===H&&ha();}}function $a(a,b){a.finishedWork=null;a.finishedExpirationTime=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,vj(c));if(null!==t)for(c=t.return;null!==c;){var d=c;switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&(q(G),q(B));break;case 3:tb();q(G);q(B);break;case 5:te(d);break;case 4:tb();break;case 13:q(D);break;case 19:q(D);break;case 10:me(d);}c=c.return;}U=a;t=Sa(a.current,null);
P=b;F=Xa;id=null;Yb=ta=1073741823;kd=null;Xb=0;jd=!1;}function Nh(a,b){do{try{le();Sc.current=Tc;if(Uc)for(var c=z.memoizedState;null!==c;){var d=c.queue;null!==d&&(d.pending=null);c=c.next;}Ia=0;J=K=z=null;Uc=!1;if(null===t||null===t.return)return F=hd,id=b,t=null;a:{var e=a,f=t.return,g=t,h=b;b=P;g.effectTag|=2048;g.firstEffect=g.lastEffect=null;if(null!==h&&"object"===typeof h&&"function"===typeof h.then){var m=h;if(0===(g.mode&2)){var n=g.alternate;n?(g.memoizedState=n.memoizedState,g.expirationTime=
n.expirationTime):g.memoizedState=null;}var l=0!==(D.current&1),k=f;do{var p;if(p=13===k.tag){var q=k.memoizedState;if(null!==q)p=null!==q.dehydrated?!0:!1;else {var w=k.memoizedProps;p=void 0===w.fallback?!1:!0!==w.unstable_avoidThisFallback?!0:l?!1:!0;}}if(p){var y=k.updateQueue;if(null===y){var r=new Set;r.add(m);k.updateQueue=r;}else y.add(m);if(0===(k.mode&2)){k.effectTag|=64;g.effectTag&=-2981;if(1===g.tag)if(null===g.alternate)g.tag=17;else {var O=Ea(1073741823,null);O.tag=Jc;Fa(g,O);}g.expirationTime=
1073741823;break a}h=void 0;g=b;var v=e.pingCache;null===v?(v=e.pingCache=new wj,h=new Set,v.set(m,h)):(h=v.get(m),void 0===h&&(h=new Set,v.set(m,h)));if(!h.has(g)){h.add(g);var x=xj.bind(null,e,m,g);m.then(x,x);}k.effectTag|=4096;k.expirationTime=b;break a}k=k.return;}while(null!==k);h=Error((na(g.type)||"A React component")+" suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."+
td(g));}F!==Xe&&(F=Oh);h=Le(h,g);k=f;do{switch(k.tag){case 3:m=h;k.effectTag|=4096;k.expirationTime=b;var A=Ih(k,m,b);Ug(k,A);break a;case 1:m=h;var u=k.type,B=k.stateNode;if(0===(k.effectTag&64)&&("function"===typeof u.getDerivedStateFromError||null!==B&&"function"===typeof B.componentDidCatch&&(null===La||!La.has(B)))){k.effectTag|=4096;k.expirationTime=b;var H=Jh(k,m,b);Ug(k,H);break a}}k=k.return;}while(null!==k)}t=Sh(t);}catch(cj){b=cj;continue}break}while(1)}function Mh(a){a=gd.current;gd.current=
Tc;return null===a?Tc:a}function Vg(a,b){a<ta&&2<a&&(ta=a);null!==b&&a<Yb&&2<a&&(Yb=a,kd=b);}function Kc(a){a>Xb&&(Xb=a);}function tj(){for(;null!==t;)t=Th(t);}function rj(){for(;null!==t&&!yj();)t=Th(t);}function Th(a){var b=zj(a.alternate,a,P);a.memoizedProps=a.pendingProps;null===b&&(b=Sh(a));Uh.current=null;return b}function Sh(a){t=a;do{var b=t.alternate;a=t.return;if(0===(t.effectTag&2048)){b=hj(b,t,P);if(1===P||1!==t.childExpirationTime){for(var c=0,d=t.child;null!==d;){var e=d.expirationTime,
f=d.childExpirationTime;e>c&&(c=e);f>c&&(c=f);d=d.sibling;}t.childExpirationTime=c;}if(null!==b)return b;null!==a&&0===(a.effectTag&2048)&&(null===a.firstEffect&&(a.firstEffect=t.firstEffect),null!==t.lastEffect&&(null!==a.lastEffect&&(a.lastEffect.nextEffect=t.firstEffect),a.lastEffect=t.lastEffect),1<t.effectTag&&(null!==a.lastEffect?a.lastEffect.nextEffect=t:a.firstEffect=t,a.lastEffect=t));}else {b=lj(t);if(null!==b)return b.effectTag&=2047,b;null!==a&&(a.firstEffect=a.lastEffect=null,a.effectTag|=
2048);}b=t.sibling;if(null!==b)return b;t=a;}while(null!==t);F===Xa&&(F=Xe);return null}function Ve(a){var b=a.expirationTime;a=a.childExpirationTime;return b>a?b:a}function ab(a){var b=Cc();Da(99,Aj.bind(null,a,b));return null}function Aj(a,b){do xb();while(null!==Zb);if((p&(ca|ma))!==H)throw Error(k(327));var c=a.finishedWork,d=a.finishedExpirationTime;if(null===c)return null;a.finishedWork=null;a.finishedExpirationTime=0;if(c===a.current)throw Error(k(177));a.callbackNode=null;a.callbackExpirationTime=
0;a.callbackPriority=90;a.nextKnownPendingLevel=0;var e=Ve(c);a.firstPendingTime=e;d<=a.lastSuspendedTime?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:d<=a.firstSuspendedTime&&(a.firstSuspendedTime=d-1);d<=a.lastPingedTime&&(a.lastPingedTime=0);d<=a.lastExpiredTime&&(a.lastExpiredTime=0);a===U&&(t=U=null,P=0);1<c.effectTag?null!==c.lastEffect?(c.lastEffect.nextEffect=c,e=c.firstEffect):e=c:e=c.firstEffect;if(null!==e){var f=p;p|=ma;Uh.current=null;Ze=tc;var g=kg();if(Xd(g)){if("selectionStart"in
g)var h={start:g.selectionStart,end:g.selectionEnd};else a:{h=(h=g.ownerDocument)&&h.defaultView||window;var m=h.getSelection&&h.getSelection();if(m&&0!==m.rangeCount){h=m.anchorNode;var n=m.anchorOffset,q=m.focusNode;m=m.focusOffset;try{h.nodeType,q.nodeType;}catch(sb){h=null;break a}var ba=0,w=-1,y=-1,B=0,D=0,r=g,z=null;b:for(;;){for(var v;;){r!==h||0!==n&&3!==r.nodeType||(w=ba+n);r!==q||0!==m&&3!==r.nodeType||(y=ba+m);3===r.nodeType&&(ba+=r.nodeValue.length);if(null===(v=r.firstChild))break;z=r;
r=v;}for(;;){if(r===g)break b;z===h&&++B===n&&(w=ba);z===q&&++D===m&&(y=ba);if(null!==(v=r.nextSibling))break;r=z;z=r.parentNode;}r=v;}h=-1===w||-1===y?null:{start:w,end:y};}else h=null;}h=h||{start:0,end:0};}else h=null;$e={activeElementDetached:null,focusedElem:g,selectionRange:h};tc=!1;l=e;do try{Bj();}catch(sb){if(null===l)throw Error(k(330));Za(l,sb);l=l.nextEffect;}while(null!==l);l=e;do try{for(g=a,h=b;null!==l;){var x=l.effectTag;x&16&&Wb(l.stateNode,"");if(x&128){var A=l.alternate;if(null!==A){var u=
A.ref;null!==u&&("function"===typeof u?u(null):u.current=null);}}switch(x&1038){case 2:Gh(l);l.effectTag&=-3;break;case 6:Gh(l);l.effectTag&=-3;Qe(l.alternate,l);break;case 1024:l.effectTag&=-1025;break;case 1028:l.effectTag&=-1025;Qe(l.alternate,l);break;case 4:Qe(l.alternate,l);break;case 8:n=l,Dh(g,n,h),Eh(n);}l=l.nextEffect;}}catch(sb){if(null===l)throw Error(k(330));Za(l,sb);l=l.nextEffect;}while(null!==l);u=$e;A=kg();x=u.focusedElem;h=u.selectionRange;if(A!==x&&x&&x.ownerDocument&&jg(x.ownerDocument.documentElement,
x)){null!==h&&Xd(x)&&(A=h.start,u=h.end,void 0===u&&(u=A),"selectionStart"in x?(x.selectionStart=A,x.selectionEnd=Math.min(u,x.value.length)):(u=(A=x.ownerDocument||document)&&A.defaultView||window,u.getSelection&&(u=u.getSelection(),n=x.textContent.length,g=Math.min(h.start,n),h=void 0===h.end?g:Math.min(h.end,n),!u.extend&&g>h&&(n=h,h=g,g=n),n=ig(x,g),q=ig(x,h),n&&q&&(1!==u.rangeCount||u.anchorNode!==n.node||u.anchorOffset!==n.offset||u.focusNode!==q.node||u.focusOffset!==q.offset)&&(A=A.createRange(),
A.setStart(n.node,n.offset),u.removeAllRanges(),g>h?(u.addRange(A),u.extend(q.node,q.offset)):(A.setEnd(q.node,q.offset),u.addRange(A))))));A=[];for(u=x;u=u.parentNode;)1===u.nodeType&&A.push({element:u,left:u.scrollLeft,top:u.scrollTop});"function"===typeof x.focus&&x.focus();for(x=0;x<A.length;x++)u=A[x],u.element.scrollLeft=u.left,u.element.scrollTop=u.top;}tc=!!Ze;$e=Ze=null;a.current=c;l=e;do try{for(x=a;null!==l;){var F=l.effectTag;F&36&&oj(x,l.alternate,l);if(F&128){A=void 0;var E=l.ref;if(null!==
E){var G=l.stateNode;switch(l.tag){case 5:A=G;break;default:A=G;}"function"===typeof E?E(A):E.current=A;}}l=l.nextEffect;}}catch(sb){if(null===l)throw Error(k(330));Za(l,sb);l=l.nextEffect;}while(null!==l);l=null;Cj();p=f;}else a.current=c;if(ld)ld=!1,Zb=a,$b=b;else for(l=e;null!==l;)b=l.nextEffect,l.nextEffect=null,l=b;b=a.firstPendingTime;0===b&&(La=null);1073741823===b?a===af?ac++:(ac=0,af=a):ac=0;"function"===typeof bf&&bf(c.stateNode,d);V(a);if(cd)throw (cd=!1, a=Se, Se=null, a);if((p&Ye)!==H)return null;
ha();return null}function Bj(){for(;null!==l;){var a=l.effectTag;0!==(a&256)&&nj(l.alternate,l);0===(a&512)||ld||(ld=!0,Ng(97,function(){xb();return null}));l=l.nextEffect;}}function xb(){if(90!==$b){var a=97<$b?97:$b;$b=90;return Da(a,Dj)}}function Dj(){if(null===Zb)return !1;var a=Zb;Zb=null;if((p&(ca|ma))!==H)throw Error(k(331));var b=p;p|=ma;for(a=a.current.firstEffect;null!==a;){try{var c=a;if(0!==(c.effectTag&512))switch(c.tag){case 0:case 11:case 15:case 22:Ah(5,c),Bh(5,c);}}catch(d){if(null===
a)throw Error(k(330));Za(a,d);}c=a.nextEffect;a.nextEffect=null;a=c;}p=b;ha();return !0}function Vh(a,b,c){b=Le(c,b);b=Ih(a,b,1073741823);Fa(a,b);a=ed(a,1073741823);null!==a&&V(a);}function Za(a,b){if(3===a.tag)Vh(a,a,b);else for(var c=a.return;null!==c;){if(3===c.tag){Vh(c,a,b);break}else if(1===c.tag){var d=c.stateNode;if("function"===typeof c.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===La||!La.has(d))){a=Le(b,a);a=Jh(c,a,1073741823);Fa(c,a);c=ed(c,1073741823);null!==
c&&V(c);break}}c=c.return;}}function xj(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);U===a&&P===c?F===bd||F===ad&&1073741823===ta&&Y()-Re<Ph?$a(a,P):jd=!0:Kh(a,c)&&(b=a.lastPingedTime,0!==b&&b<c||(a.lastPingedTime=c,V(a)));}function qj(a,b){var c=a.stateNode;null!==c&&c.delete(b);b=0;0===b&&(b=ka(),b=Va(b,a,null));a=ed(a,b);null!==a&&V(a);}function Ej(a){if("undefined"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__)return !1;var b=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(b.isDisabled||!b.supportsFiber)return !0;try{var c=
b.inject(a);bf=function(a,e){try{b.onCommitFiberRoot(c,a,void 0,64===(a.current.effectTag&64));}catch(f){}};Ne=function(a){try{b.onCommitFiberUnmount(c,a);}catch(e){}};}catch(d){}return !0}function Fj(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.effectTag=0;this.lastEffect=this.firstEffect=this.nextEffect=
null;this.childExpirationTime=this.expirationTime=0;this.alternate=null;}function Ge(a){a=a.prototype;return !(!a||!a.isReactComponent)}function Gj(a){if("function"===typeof a)return Ge(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===rd)return 11;if(a===sd)return 14}return 2}function Sa(a,b){var c=a.alternate;null===c?(c=la(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.effectTag=0,c.nextEffect=null,c.firstEffect=
null,c.lastEffect=null);c.childExpirationTime=a.childExpirationTime;c.expirationTime=a.expirationTime;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{expirationTime:b.expirationTime,firstContext:b.firstContext,responders:b.responders};c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}function Oc(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)Ge(a)&&(g=1);else if("string"===typeof a)g=
5;else a:switch(a){case Ma:return Ha(c.children,e,f,b);case Hj:g=8;e|=7;break;case of:g=8;e|=1;break;case ic:return a=la(12,c,b,e|8),a.elementType=ic,a.type=ic,a.expirationTime=f,a;case jc:return a=la(13,c,b,e),a.type=jc,a.elementType=jc,a.expirationTime=f,a;case qd:return a=la(19,c,b,e),a.elementType=qd,a.expirationTime=f,a;default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case qf:g=10;break a;case pf:g=9;break a;case rd:g=11;break a;case sd:g=14;break a;case sf:g=16;d=null;break a;case rf:g=
22;break a}throw Error(k(130,null==a?a:typeof a,""));}b=la(g,c,b,e);b.elementType=a;b.type=d;b.expirationTime=f;return b}function Ha(a,b,c,d){a=la(7,a,d,b);a.expirationTime=c;return a}function qe(a,b,c){a=la(6,a,null,b);a.expirationTime=c;return a}function re(a,b,c){b=la(4,null!==a.children?a.children:[],a.key,b);b.expirationTime=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}function Ij(a,b,c){this.tag=b;this.current=null;this.containerInfo=
a;this.pingCache=this.pendingChildren=null;this.finishedExpirationTime=0;this.finishedWork=null;this.timeoutHandle=-1;this.pendingContext=this.context=null;this.hydrate=c;this.callbackNode=null;this.callbackPriority=90;this.lastExpiredTime=this.lastPingedTime=this.nextKnownPendingLevel=this.lastSuspendedTime=this.firstSuspendedTime=this.firstPendingTime=0;}function Kh(a,b){var c=a.firstSuspendedTime;a=a.lastSuspendedTime;return 0!==c&&c>=b&&a<=b}function Ya(a,b){var c=a.firstSuspendedTime,d=a.lastSuspendedTime;
c<b&&(a.firstSuspendedTime=b);if(d>b||0===c)a.lastSuspendedTime=b;b<=a.lastPingedTime&&(a.lastPingedTime=0);b<=a.lastExpiredTime&&(a.lastExpiredTime=0);}function yh(a,b){b>a.firstPendingTime&&(a.firstPendingTime=b);var c=a.firstSuspendedTime;0!==c&&(b>=c?a.firstSuspendedTime=a.lastSuspendedTime=a.nextKnownPendingLevel=0:b>=a.lastSuspendedTime&&(a.lastSuspendedTime=b+1),b>a.nextKnownPendingLevel&&(a.nextKnownPendingLevel=b));}function Ue(a,b){var c=a.lastExpiredTime;if(0===c||c>b)a.lastExpiredTime=b;}
function md(a,b,c,d){var e=b.current,f=ka(),g=Vb.suspense;f=Va(f,e,g);a:if(c){c=c._reactInternalFiber;b:{if(Na(c)!==c||1!==c.tag)throw Error(k(170));var h=c;do{switch(h.tag){case 3:h=h.stateNode.context;break b;case 1:if(N(h.type)){h=h.stateNode.__reactInternalMemoizedMergedChildContext;break b}}h=h.return;}while(null!==h);throw Error(k(171));}if(1===c.tag){var m=c.type;if(N(m)){c=Gg(c,m,h);break a}}c=h;}else c=Ca;null===b.context?b.context=c:b.pendingContext=c;b=Ea(f,g);b.payload={element:a};d=void 0===
d?null:d;null!==d&&(b.callback=d);Fa(e,b);Ja(e,f);return f}function cf(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function Wh(a,b){a=a.memoizedState;null!==a&&null!==a.dehydrated&&a.retryTime<b&&(a.retryTime=b);}function df(a,b){Wh(a,b);(a=a.alternate)&&Wh(a,b);}function ef(a,b,c){c=null!=c&&!0===c.hydrate;var d=new Ij(a,b,c),e=la(3,null,null,2===b?7:1===b?3:0);d.current=e;e.stateNode=d;ne(e);a[Lb]=d.current;c&&0!==b&&
xi(a,9===a.nodeType?a:a.ownerDocument);this._internalRoot=d;}function bc(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function Jj(a,b){b||(b=a?9===a.nodeType?a.documentElement:a.firstChild:null,b=!(!b||1!==b.nodeType||!b.hasAttribute("data-reactroot")));if(!b)for(var c;c=a.lastChild;)a.removeChild(c);return new ef(a,0,b?{hydrate:!0}:void 0)}function nd(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f._internalRoot;
if("function"===typeof e){var h=e;e=function(){var a=cf(g);h.call(a);};}md(b,g,a,e);}else {f=c._reactRootContainer=Jj(c,d);g=f._internalRoot;if("function"===typeof e){var m=e;e=function(){var a=cf(g);m.call(a);};}Rh(function(){md(b,g,a,e);});}return cf(g)}function Kj(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:cb,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}function Xh(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;
if(!bc(b))throw Error(k(200));return Kj(a,b,null,c)}if(!ea)throw Error(k(227));var ki=function(a,b,c,d,e,f,g,h,m){var n=Array.prototype.slice.call(arguments,3);try{b.apply(c,n);}catch(C){this.onError(C);}},yb=!1,gc=null,hc=!1,pd=null,li={onError:function(a){yb=!0;gc=a;}},xd=null,xf=null,mf=null,da=ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;da.hasOwnProperty("ReactCurrentDispatcher")||(da.ReactCurrentDispatcher={current:null});da.hasOwnProperty("ReactCurrentBatchConfig")||(da.ReactCurrentBatchConfig=
{suspense:null});var oi=/^(.*)[\\\/]/,Q="function"===typeof Symbol&&Symbol.for,Pc=Q?Symbol.for("react.element"):60103,cb=Q?Symbol.for("react.portal"):60106,Ma=Q?Symbol.for("react.fragment"):60107,of=Q?Symbol.for("react.strict_mode"):60108,ic=Q?Symbol.for("react.profiler"):60114,qf=Q?Symbol.for("react.provider"):60109,pf=Q?Symbol.for("react.context"):60110,Hj=Q?Symbol.for("react.concurrent_mode"):60111,rd=Q?Symbol.for("react.forward_ref"):60112,jc=Q?Symbol.for("react.suspense"):60113,qd=Q?Symbol.for("react.suspense_list"):
60120,sd=Q?Symbol.for("react.memo"):60115,sf=Q?Symbol.for("react.lazy"):60116,rf=Q?Symbol.for("react.block"):60121,nf="function"===typeof Symbol&&Symbol.iterator,kc=null,db={},lc=[],ud={},eb={},vd={},wa=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),M=ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.assign,wd=null,fb=null,gb=null,ee=function(a,b){return a(b)},eg=function(a,b,c,d,e){return a(b,c,d,e)},zd=function(){},Bf=
ee,Oa=!1,Ad=!1,Z=ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.Scheduler,Lj=Z.unstable_cancelCallback,ff=Z.unstable_now,$f=Z.unstable_scheduleCallback,Mj=Z.unstable_shouldYield,Yh=Z.unstable_requestPaint,Pd=Z.unstable_runWithPriority,Nj=Z.unstable_getCurrentPriorityLevel,Oj=Z.unstable_ImmediatePriority,Zh=Z.unstable_UserBlockingPriority,ag=Z.unstable_NormalPriority,Pj=Z.unstable_LowPriority,Qj=Z.unstable_IdlePriority,qi=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
Cf=Object.prototype.hasOwnProperty,Ef={},Df={},E={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){E[a]=new L(a,0,!1,a,null,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];E[b]=new L(b,1,!1,a[1],null,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){E[a]=new L(a,
2,!1,a.toLowerCase(),null,!1);});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){E[a]=new L(a,2,!1,a,null,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){E[a]=new L(a,3,!1,a.toLowerCase(),null,!1);});["checked","multiple","muted","selected"].forEach(function(a){E[a]=
new L(a,3,!0,a,null,!1);});["capture","download"].forEach(function(a){E[a]=new L(a,4,!1,a,null,!1);});["cols","rows","size","span"].forEach(function(a){E[a]=new L(a,6,!1,a,null,!1);});["rowSpan","start"].forEach(function(a){E[a]=new L(a,5,!1,a.toLowerCase(),null,!1);});var gf=/[\-:]([a-z])/g,hf=function(a){return a[1].toUpperCase()};"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=
a.replace(gf,hf);E[b]=new L(b,1,!1,a,null,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(gf,hf);E[b]=new L(b,1,!1,a,"http://www.w3.org/1999/xlink",!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(gf,hf);E[b]=new L(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1);});["tabIndex","crossOrigin"].forEach(function(a){E[a]=new L(a,1,!1,a.toLowerCase(),null,!1);});E.xlinkHref=new L("xlinkHref",1,
!1,"xlink:href","http://www.w3.org/1999/xlink",!0);["src","href","action","formAction"].forEach(function(a){E[a]=new L(a,1,!1,a.toLowerCase(),null,!0);});var od,xh=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {od=od||document.createElement("div");od.innerHTML="<svg>"+b.valueOf().toString()+
"</svg>";for(b=od.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}}),Wb=function(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;},ib={animationend:nc("Animation","AnimationEnd"),animationiteration:nc("Animation","AnimationIteration"),animationstart:nc("Animation","AnimationStart"),transitionend:nc("Transition","TransitionEnd")},Id={},Of={};wa&&(Of=document.createElement("div").style,"AnimationEvent"in
window||(delete ib.animationend.animation,delete ib.animationiteration.animation,delete ib.animationstart.animation),"TransitionEvent"in window||delete ib.transitionend.transition);var $h=oc("animationend"),ai=oc("animationiteration"),bi=oc("animationstart"),ci=oc("transitionend"),Db="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
Pf=new ("function"===typeof WeakMap?WeakMap:Map),Ab=null,wi=function(a){if(a){var b=a._dispatchListeners,c=a._dispatchInstances;if(Array.isArray(b))for(var d=0;d<b.length&&!a.isPropagationStopped();d++)lf(a,b[d],c[d]);else b&&lf(a,b,c);a._dispatchListeners=null;a._dispatchInstances=null;a.isPersistent()||a.constructor.release(a);}},qc=[],Rd=!1,fa=[],xa=null,ya=null,za=null,Eb=new Map,Fb=new Map,Jb=[],Nd="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput close cancel copy cut paste click change contextmenu reset submit".split(" "),
yi="focus blur dragenter dragleave mouseover mouseout pointerover pointerout gotpointercapture lostpointercapture".split(" "),dg={},cg=new Map,Td=new Map,Rj=["abort","abort",$h,"animationEnd",ai,"animationIteration",bi,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata",
"loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",ci,"transitionEnd","waiting","waiting"];Sd("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),
0);Sd("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Sd(Rj,2);(function(a,b){for(var c=0;c<a.length;c++)Td.set(a[c],b);})("change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),0);var Hi=Zh,Gi=Pd,tc=!0,Kb={animationIterationCount:!0,
borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,
strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Sj=["Webkit","ms","Moz","O"];Object.keys(Kb).forEach(function(a){Sj.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);Kb[b]=Kb[a];});});var Ii=M({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0}),ng="$",og="/$",$d="$?",Zd="$!",Ze=null,$e=null,We="function"===typeof setTimeout?setTimeout:void 0,vj="function"===
typeof clearTimeout?clearTimeout:void 0,jf=Math.random().toString(36).slice(2),Aa="__reactInternalInstance$"+jf,vc="__reactEventHandlers$"+jf,Lb="__reactContainere$"+jf,Ba=null,ce=null,wc=null;M(R.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&(a.returnValue=!1),this.isDefaultPrevented=xc);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==
typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=xc);},persist:function(){this.isPersistent=xc;},isPersistent:yc,destructor:function(){var a=this.constructor.Interface,b;for(b in a)this[b]=null;this.nativeEvent=this._targetInst=this.dispatchConfig=null;this.isPropagationStopped=this.isDefaultPrevented=yc;this._dispatchInstances=this._dispatchListeners=null;}});R.Interface={type:null,target:null,currentTarget:function(){return null},eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(a){return a.timeStamp||
Date.now()},defaultPrevented:null,isTrusted:null};R.extend=function(a){function b(){return c.apply(this,arguments)}var c=this,d=function(){};d.prototype=c.prototype;d=new d;M(d,b.prototype);b.prototype=d;b.prototype.constructor=b;b.Interface=M({},c.Interface,a);b.extend=c.extend;sg(b);return b};sg(R);var Tj=R.extend({data:null}),Uj=R.extend({data:null}),Ni=[9,13,27,32],de=wa&&"CompositionEvent"in window,cc=null;wa&&"documentMode"in document&&(cc=document.documentMode);var Vj=wa&&"TextEvent"in window&&
!cc,xg=wa&&(!de||cc&&8<cc&&11>=cc),wg=String.fromCharCode(32),ua={beforeInput:{phasedRegistrationNames:{bubbled:"onBeforeInput",captured:"onBeforeInputCapture"},dependencies:["compositionend","keypress","textInput","paste"]},compositionEnd:{phasedRegistrationNames:{bubbled:"onCompositionEnd",captured:"onCompositionEndCapture"},dependencies:"blur compositionend keydown keypress keyup mousedown".split(" ")},compositionStart:{phasedRegistrationNames:{bubbled:"onCompositionStart",captured:"onCompositionStartCapture"},
dependencies:"blur compositionstart keydown keypress keyup mousedown".split(" ")},compositionUpdate:{phasedRegistrationNames:{bubbled:"onCompositionUpdate",captured:"onCompositionUpdateCapture"},dependencies:"blur compositionupdate keydown keypress keyup mousedown".split(" ")}},vg=!1,mb=!1,Wj={eventTypes:ua,extractEvents:function(a,b,c,d,e){var f;if(de)b:{switch(a){case "compositionstart":var g=ua.compositionStart;break b;case "compositionend":g=ua.compositionEnd;break b;case "compositionupdate":g=
ua.compositionUpdate;break b}g=void 0;}else mb?tg(a,c)&&(g=ua.compositionEnd):"keydown"===a&&229===c.keyCode&&(g=ua.compositionStart);g?(xg&&"ko"!==c.locale&&(mb||g!==ua.compositionStart?g===ua.compositionEnd&&mb&&(f=rg()):(Ba=d,ce="value"in Ba?Ba.value:Ba.textContent,mb=!0)),e=Tj.getPooled(g,b,c,d),f?e.data=f:(f=ug(c),null!==f&&(e.data=f)),lb(e),f=e):f=null;(a=Vj?Oi(a,c):Pi(a,c))?(b=Uj.getPooled(ua.beforeInput,b,c,d),b.data=a,lb(b)):b=null;return null===f?b:null===b?f:[f,b]}},Qi={color:!0,date:!0,
datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0},Ag={change:{phasedRegistrationNames:{bubbled:"onChange",captured:"onChangeCapture"},dependencies:"blur change click focus input keydown keyup selectionchange".split(" ")}},Mb=null,Nb=null,kf=!1;wa&&(kf=Tf("input")&&(!document.documentMode||9<document.documentMode));var Xj={eventTypes:Ag,_isInputEventSupported:kf,extractEvents:function(a,b,c,d,e){e=b?Pa(b):window;var f=
e.nodeName&&e.nodeName.toLowerCase();if("select"===f||"input"===f&&"file"===e.type)var g=Si;else if(yg(e))if(kf)g=Wi;else {g=Ui;var h=Ti;}else (f=e.nodeName)&&"input"===f.toLowerCase()&&("checkbox"===e.type||"radio"===e.type)&&(g=Vi);if(g&&(g=g(a,b)))return zg(g,c,d);h&&h(a,e,b);"blur"===a&&(a=e._wrapperState)&&a.controlled&&"number"===e.type&&Ed(e,"number",e.value);}},dc=R.extend({view:null,detail:null}),Yi={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"},di=0,ei=0,fi=!1,gi=!1,ec=dc.extend({screenX:null,
screenY:null,clientX:null,clientY:null,pageX:null,pageY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:fe,button:null,buttons:null,relatedTarget:function(a){return a.relatedTarget||(a.fromElement===a.srcElement?a.toElement:a.fromElement)},movementX:function(a){if("movementX"in a)return a.movementX;var b=di;di=a.screenX;return fi?"mousemove"===a.type?a.screenX-b:0:(fi=!0,0)},movementY:function(a){if("movementY"in a)return a.movementY;var b=ei;ei=a.screenY;return gi?"mousemove"===
a.type?a.screenY-b:0:(gi=!0,0)}}),hi=ec.extend({pointerId:null,width:null,height:null,pressure:null,tangentialPressure:null,tiltX:null,tiltY:null,twist:null,pointerType:null,isPrimary:null}),fc={mouseEnter:{registrationName:"onMouseEnter",dependencies:["mouseout","mouseover"]},mouseLeave:{registrationName:"onMouseLeave",dependencies:["mouseout","mouseover"]},pointerEnter:{registrationName:"onPointerEnter",dependencies:["pointerout","pointerover"]},pointerLeave:{registrationName:"onPointerLeave",dependencies:["pointerout",
"pointerover"]}},Yj={eventTypes:fc,extractEvents:function(a,b,c,d,e){var f="mouseover"===a||"pointerover"===a,g="mouseout"===a||"pointerout"===a;if(f&&0===(e&32)&&(c.relatedTarget||c.fromElement)||!g&&!f)return null;f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window;if(g){if(g=b,b=(b=c.relatedTarget||c.toElement)?Bb(b):null,null!==b){var h=Na(b);if(b!==h||5!==b.tag&&6!==b.tag)b=null;}}else g=null;if(g===b)return null;if("mouseout"===a||"mouseover"===a){var m=ec;var n=fc.mouseLeave;
var l=fc.mouseEnter;var k="mouse";}else if("pointerout"===a||"pointerover"===a)m=hi,n=fc.pointerLeave,l=fc.pointerEnter,k="pointer";a=null==g?f:Pa(g);f=null==b?f:Pa(b);n=m.getPooled(n,g,c,d);n.type=k+"leave";n.target=a;n.relatedTarget=f;c=m.getPooled(l,b,c,d);c.type=k+"enter";c.target=f;c.relatedTarget=a;d=g;k=b;if(d&&k)a:{m=d;l=k;g=0;for(a=m;a;a=pa(a))g++;a=0;for(b=l;b;b=pa(b))a++;for(;0<g-a;)m=pa(m),g--;for(;0<a-g;)l=pa(l),a--;for(;g--;){if(m===l||m===l.alternate)break a;m=pa(m);l=pa(l);}m=null;}else m=
null;l=m;for(m=[];d&&d!==l;){g=d.alternate;if(null!==g&&g===l)break;m.push(d);d=pa(d);}for(d=[];k&&k!==l;){g=k.alternate;if(null!==g&&g===l)break;d.push(k);k=pa(k);}for(k=0;k<m.length;k++)be(m[k],"bubbled",n);for(k=d.length;0<k--;)be(d[k],"captured",c);return 0===(e&64)?[n]:[n,c]}},Qa="function"===typeof Object.is?Object.is:Zi,$i=Object.prototype.hasOwnProperty,Zj=wa&&"documentMode"in document&&11>=document.documentMode,Eg={select:{phasedRegistrationNames:{bubbled:"onSelect",captured:"onSelectCapture"},
dependencies:"blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")}},nb=null,he=null,Pb=null,ge=!1,ak={eventTypes:Eg,extractEvents:function(a,b,c,d,e,f){e=f||(d.window===d?d.document:9===d.nodeType?d:d.ownerDocument);if(!(f=!e)){a:{e=Jd(e);f=vd.onSelect;for(var g=0;g<f.length;g++)if(!e.has(f[g])){e=!1;break a}e=!0;}f=!e;}if(f)return null;e=b?Pa(b):window;switch(a){case "focus":if(yg(e)||"true"===e.contentEditable)nb=e,he=b,Pb=null;break;case "blur":Pb=he=nb=null;
break;case "mousedown":ge=!0;break;case "contextmenu":case "mouseup":case "dragend":return ge=!1,Dg(c,d);case "selectionchange":if(Zj)break;case "keydown":case "keyup":return Dg(c,d)}return null}},bk=R.extend({animationName:null,elapsedTime:null,pseudoElement:null}),ck=R.extend({clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),dk=dc.extend({relatedTarget:null}),ek={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",
Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},fk={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",
224:"Meta"},gk=dc.extend({key:function(a){if(a.key){var b=ek[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=Ac(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?fk[a.keyCode]||"Unidentified":""},location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:fe,charCode:function(a){return "keypress"===a.type?Ac(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
a.type?Ac(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),hk=ec.extend({dataTransfer:null}),ik=dc.extend({touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:fe}),jk=R.extend({propertyName:null,elapsedTime:null,pseudoElement:null}),kk=ec.extend({deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?
-a.wheelDelta:0},deltaZ:null,deltaMode:null}),lk={eventTypes:dg,extractEvents:function(a,b,c,d,e){e=cg.get(a);if(!e)return null;switch(a){case "keypress":if(0===Ac(c))return null;case "keydown":case "keyup":a=gk;break;case "blur":case "focus":a=dk;break;case "click":if(2===c.button)return null;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":a=ec;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":a=
hk;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":a=ik;break;case $h:case ai:case bi:a=bk;break;case ci:a=jk;break;case "scroll":a=dc;break;case "wheel":a=kk;break;case "copy":case "cut":case "paste":a=ck;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":a=hi;break;default:a=R;}b=a.getPooled(e,b,c,d);lb(b);return b}};(function(a){if(kc)throw Error(k(101));
kc=Array.prototype.slice.call(a);tf();})("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" "));(function(a,b,c){xd=a;xf=b;mf=c;})(ae,Hb,Pa);vf({SimpleEventPlugin:lk,EnterLeaveEventPlugin:Yj,ChangeEventPlugin:Xj,SelectEventPlugin:ak,BeforeInputEventPlugin:Wj});var ie=[],ob=-1,Ca={},B={current:Ca},G={current:!1},Ra=Ca,bj=Pd,je=$f,Rg=Lj,aj=Nj,Dc=Oj,Ig=Zh,Jg=ag,Kg=Pj,Lg=Qj,Qg={},yj=Mj,Cj=void 0!==Yh?Yh:function(){},qa=null,
Ec=null,ke=!1,ii=ff(),Y=1E4>ii?ff:function(){return ff()-ii},Ic={current:null},Hc=null,qb=null,Gc=null,Tg=0,Jc=2,Ga=!1,Vb=da.ReactCurrentBatchConfig,$g=(new ea.Component).refs,Mc={isMounted:function(a){return (a=a._reactInternalFiber)?Na(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternalFiber;var d=ka(),e=Vb.suspense;d=Va(d,a,e);e=Ea(d,e);e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Fa(a,e);Ja(a,d);},enqueueReplaceState:function(a,b,c){a=a._reactInternalFiber;var d=ka(),e=Vb.suspense;
d=Va(d,a,e);e=Ea(d,e);e.tag=1;e.payload=b;void 0!==c&&null!==c&&(e.callback=c);Fa(a,e);Ja(a,d);},enqueueForceUpdate:function(a,b){a=a._reactInternalFiber;var c=ka(),d=Vb.suspense;c=Va(c,a,d);d=Ea(c,d);d.tag=Jc;void 0!==b&&null!==b&&(d.callback=b);Fa(a,d);Ja(a,c);}},Qc=Array.isArray,wb=ah(!0),Fe=ah(!1),Sb={},ja={current:Sb},Ub={current:Sb},Tb={current:Sb},D={current:0},Sc=da.ReactCurrentDispatcher,X=da.ReactCurrentBatchConfig,Ia=0,z=null,K=null,J=null,Uc=!1,Tc={readContext:W,useCallback:S,useContext:S,
useEffect:S,useImperativeHandle:S,useLayoutEffect:S,useMemo:S,useReducer:S,useRef:S,useState:S,useDebugValue:S,useResponder:S,useDeferredValue:S,useTransition:S},dj={readContext:W,useCallback:ih,useContext:W,useEffect:eh,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ze(4,2,gh.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ze(4,2,a,b)},useMemo:function(a,b){var c=ub();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=
ub();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a=d.queue={pending:null,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};a=a.dispatch=ch.bind(null,z,a);return [d.memoizedState,a]},useRef:function(a){var b=ub();a={current:a};return b.memoizedState=a},useState:xe,useDebugValue:Be,useResponder:ue,useDeferredValue:function(a,b){var c=xe(a),d=c[0],e=c[1];eh(function(){var c=X.suspense;X.suspense=void 0===b?null:b;try{e(a);}finally{X.suspense=c;}},[a,b]);return d},useTransition:function(a){var b=
xe(!1),c=b[0];b=b[1];return [ih(Ce.bind(null,b,a),[b,a]),c]}},ej={readContext:W,useCallback:Yc,useContext:W,useEffect:Xc,useImperativeHandle:hh,useLayoutEffect:fh,useMemo:jh,useReducer:Vc,useRef:dh,useState:function(a){return Vc(Ua)},useDebugValue:Be,useResponder:ue,useDeferredValue:function(a,b){var c=Vc(Ua),d=c[0],e=c[1];Xc(function(){var c=X.suspense;X.suspense=void 0===b?null:b;try{e(a);}finally{X.suspense=c;}},[a,b]);return d},useTransition:function(a){var b=Vc(Ua),c=b[0];b=b[1];return [Yc(Ce.bind(null,
b,a),[b,a]),c]}},fj={readContext:W,useCallback:Yc,useContext:W,useEffect:Xc,useImperativeHandle:hh,useLayoutEffect:fh,useMemo:jh,useReducer:Wc,useRef:dh,useState:function(a){return Wc(Ua)},useDebugValue:Be,useResponder:ue,useDeferredValue:function(a,b){var c=Wc(Ua),d=c[0],e=c[1];Xc(function(){var c=X.suspense;X.suspense=void 0===b?null:b;try{e(a);}finally{X.suspense=c;}},[a,b]);return d},useTransition:function(a){var b=Wc(Ua),c=b[0];b=b[1];return [Yc(Ce.bind(null,b,a),[b,a]),c]}},ra=null,Ka=null,Wa=
!1,gj=da.ReactCurrentOwner,ia=!1,Je={dehydrated:null,retryTime:0};var jj=function(a,b,c,d){for(c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};var ij=function(a,b,c,d,e){var f=a.memoizedProps;if(f!==d){var g=b.stateNode;Ta(ja.current);a=null;switch(c){case "input":f=
Cd(g,f);d=Cd(g,d);a=[];break;case "option":f=Fd(g,f);d=Fd(g,d);a=[];break;case "select":f=M({},f,{value:void 0});d=M({},d,{value:void 0});a=[];break;case "textarea":f=Gd(g,f);d=Gd(g,d);a=[];break;default:"function"!==typeof f.onClick&&"function"===typeof d.onClick&&(g.onclick=uc);}Ud(c,d);var h,m;c=null;for(h in f)if(!d.hasOwnProperty(h)&&f.hasOwnProperty(h)&&null!=f[h])if("style"===h)for(m in (g=f[h], g))g.hasOwnProperty(m)&&(c||(c={}),c[m]="");else "dangerouslySetInnerHTML"!==h&&"children"!==h&&"suppressContentEditableWarning"!==
h&&"suppressHydrationWarning"!==h&&"autoFocus"!==h&&(eb.hasOwnProperty(h)?a||(a=[]):(a=a||[]).push(h,null));for(h in d){var k=d[h];g=null!=f?f[h]:void 0;if(d.hasOwnProperty(h)&&k!==g&&(null!=k||null!=g))if("style"===h)if(g){for(m in g)!g.hasOwnProperty(m)||k&&k.hasOwnProperty(m)||(c||(c={}),c[m]="");for(m in k)k.hasOwnProperty(m)&&g[m]!==k[m]&&(c||(c={}),c[m]=k[m]);}else c||(a||(a=[]),a.push(h,c)),c=k;else "dangerouslySetInnerHTML"===h?(k=k?k.__html:void 0,g=g?g.__html:void 0,null!=k&&g!==k&&(a=a||
[]).push(h,k)):"children"===h?g===k||"string"!==typeof k&&"number"!==typeof k||(a=a||[]).push(h,""+k):"suppressContentEditableWarning"!==h&&"suppressHydrationWarning"!==h&&(eb.hasOwnProperty(h)?(null!=k&&oa(e,h),a||g===k||(a=[])):(a=a||[]).push(h,k));}c&&(a=a||[]).push("style",c);e=a;if(b.updateQueue=e)b.effectTag|=4;}};var kj=function(a,b,c,d){c!==d&&(b.effectTag|=4);};var pj="function"===typeof WeakSet?WeakSet:Set,wj="function"===typeof WeakMap?WeakMap:Map,sj=Math.ceil,gd=da.ReactCurrentDispatcher,
Uh=da.ReactCurrentOwner,H=0,Ye=8,ca=16,ma=32,Xa=0,hd=1,Oh=2,ad=3,bd=4,Xe=5,p=H,U=null,t=null,P=0,F=Xa,id=null,ta=1073741823,Yb=1073741823,kd=null,Xb=0,jd=!1,Re=0,Ph=500,l=null,cd=!1,Se=null,La=null,ld=!1,Zb=null,$b=90,bb=null,ac=0,af=null,dd=0,Ja=function(a,b){if(50<ac)throw (ac=0, af=null, Error(k(185)));a=ed(a,b);if(null!==a){var c=Cc();1073741823===b?(p&Ye)!==H&&(p&(ca|ma))===H?Te(a):(V(a),p===H&&ha()):V(a);(p&4)===H||98!==c&&99!==c||(null===bb?bb=new Map([[a,b]]):(c=bb.get(a),(void 0===c||c>b)&&bb.set(a,
b)));}};var zj=function(a,b,c){var d=b.expirationTime;if(null!==a){var e=b.pendingProps;if(a.memoizedProps!==e||G.current)ia=!0;else {if(d<c){ia=!1;switch(b.tag){case 3:sh(b);Ee();break;case 5:bh(b);if(b.mode&4&&1!==c&&e.hidden)return b.expirationTime=b.childExpirationTime=1,null;break;case 1:N(b.type)&&Bc(b);break;case 4:se(b,b.stateNode.containerInfo);break;case 10:d=b.memoizedProps.value;e=b.type._context;y(Ic,e._currentValue);e._currentValue=d;break;case 13:if(null!==b.memoizedState){d=b.child.childExpirationTime;
if(0!==d&&d>=c)return th(a,b,c);y(D,D.current&1);b=sa(a,b,c);return null!==b?b.sibling:null}y(D,D.current&1);break;case 19:d=b.childExpirationTime>=c;if(0!==(a.effectTag&64)){if(d)return vh(a,b,c);b.effectTag|=64;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null);y(D,D.current);if(!d)return null}return sa(a,b,c)}ia=!1;}}else ia=!1;b.expirationTime=0;switch(b.tag){case 2:d=b.type;null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;e=pb(b,B.current);rb(b,c);e=we(null,
b,d,a,e,c);b.effectTag|=1;if("object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof){b.tag=1;b.memoizedState=null;b.updateQueue=null;if(N(d)){var f=!0;Bc(b);}else f=!1;b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null;ne(b);var g=d.getDerivedStateFromProps;"function"===typeof g&&Lc(b,d,g,a);e.updater=Mc;b.stateNode=e;e._reactInternalFiber=b;pe(b,d,a,c);b=Ie(null,b,d,!0,f,c);}else b.tag=0,T(null,b,e,c),b=b.child;return b;case 16:a:{e=b.elementType;null!==a&&(a.alternate=
null,b.alternate=null,b.effectTag|=2);a=b.pendingProps;ni(e);if(1!==e._status)throw e._result;e=e._result;b.type=e;f=b.tag=Gj(e);a=aa(e,a);switch(f){case 0:b=He(null,b,e,a,c);break a;case 1:b=rh(null,b,e,a,c);break a;case 11:b=nh(null,b,e,a,c);break a;case 14:b=oh(null,b,e,aa(e.type,a),d,c);break a}throw Error(k(306,e,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:aa(d,e),He(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:aa(d,e),rh(a,b,d,e,c);
case 3:sh(b);d=b.updateQueue;if(null===a||null===d)throw Error(k(282));d=b.pendingProps;e=b.memoizedState;e=null!==e?e.element:null;oe(a,b);Qb(b,d,null,c);d=b.memoizedState.element;if(d===e)Ee(),b=sa(a,b,c);else {if(e=b.stateNode.hydrate)Ka=kb(b.stateNode.containerInfo.firstChild),ra=b,e=Wa=!0;if(e)for(c=Fe(b,null,d,c),b.child=c;c;)c.effectTag=c.effectTag&-3|1024,c=c.sibling;else T(a,b,d,c),Ee();b=b.child;}return b;case 5:return bh(b),null===a&&De(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:
null,g=e.children,Yd(d,e)?g=null:null!==f&&Yd(d,f)&&(b.effectTag|=16),qh(a,b),b.mode&4&&1!==c&&e.hidden?(b.expirationTime=b.childExpirationTime=1,b=null):(T(a,b,g,c),b=b.child),b;case 6:return null===a&&De(b),null;case 13:return th(a,b,c);case 4:return se(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=wb(b,null,d,c):T(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:aa(d,e),nh(a,b,d,e,c);case 7:return T(a,b,b.pendingProps,c),b.child;case 8:return T(a,
b,b.pendingProps.children,c),b.child;case 12:return T(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;g=b.memoizedProps;f=e.value;var h=b.type._context;y(Ic,h._currentValue);h._currentValue=f;if(null!==g)if(h=g.value,f=Qa(h,f)?0:("function"===typeof d._calculateChangedBits?d._calculateChangedBits(h,f):1073741823)|0,0===f){if(g.children===e.children&&!G.current){b=sa(a,b,c);break a}}else for(h=b.child,null!==h&&(h.return=b);null!==h;){var m=h.dependencies;if(null!==
m){g=h.child;for(var l=m.firstContext;null!==l;){if(l.context===d&&0!==(l.observedBits&f)){1===h.tag&&(l=Ea(c,null),l.tag=Jc,Fa(h,l));h.expirationTime<c&&(h.expirationTime=c);l=h.alternate;null!==l&&l.expirationTime<c&&(l.expirationTime=c);Sg(h.return,c);m.expirationTime<c&&(m.expirationTime=c);break}l=l.next;}}else g=10===h.tag?h.type===b.type?null:h.child:h.child;if(null!==g)g.return=h;else for(g=h;null!==g;){if(g===b){g=null;break}h=g.sibling;if(null!==h){h.return=g.return;g=h;break}g=g.return;}h=
g;}T(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,f=b.pendingProps,d=f.children,rb(b,c),e=W(e,f.unstable_observedBits),d=d(e),b.effectTag|=1,T(a,b,d,c),b.child;case 14:return e=b.type,f=aa(e,b.pendingProps),f=aa(e.type,f),oh(a,b,e,f,d,c);case 15:return ph(a,b,b.type,b.pendingProps,d,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:aa(d,e),null!==a&&(a.alternate=null,b.alternate=null,b.effectTag|=2),b.tag=1,N(d)?(a=!0,Bc(b)):a=!1,rb(b,c),Yg(b,d,e),pe(b,d,e,c),Ie(null,
b,d,!0,a,c);case 19:return vh(a,b,c)}throw Error(k(156,b.tag));};var bf=null,Ne=null,la=function(a,b,c,d){return new Fj(a,b,c,d)};ef.prototype.render=function(a){md(a,this._internalRoot,null,null);};ef.prototype.unmount=function(){var a=this._internalRoot,b=a.containerInfo;md(null,a,null,function(){b[Lb]=null;});};var Di=function(a){if(13===a.tag){var b=Fc(ka(),150,100);Ja(a,b);df(a,b);}};var Yf=function(a){13===a.tag&&(Ja(a,3),df(a,3));};var Bi=function(a){if(13===a.tag){var b=ka();b=Va(b,a,null);Ja(a,
b);df(a,b);}};wd=function(a,b,c){switch(b){case "input":Dd(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=ae(d);if(!e)throw Error(k(90));Gf(d);Dd(d,e);}}}break;case "textarea":Lf(a,c);break;case "select":b=c.value,null!=b&&hb(a,!!c.multiple,b,!1);}};(function(a,b,c,d){ee=a;eg=b;zd=c;Bf=d;})(Qh,function(a,b,c,d,e){var f=p;p|=4;
try{return Da(98,a.bind(null,b,c,d,e))}finally{p=f,p===H&&ha();}},function(){(p&(1|ca|ma))===H&&(uj(),xb());},function(a,b){var c=p;p|=2;try{return a(b)}finally{p=c,p===H&&ha();}});var mk={Events:[Hb,Pa,ae,vf,ud,lb,function(a){Kd(a,Ki);},yf,zf,sc,pc,xb,{current:!1}]};(function(a){var b=a.findFiberByHostInstance;return Ej(M({},a,{overrideHookState:null,overrideProps:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:da.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Sf(a);
return null===a?null:a.stateNode},findFiberByHostInstance:function(a){return b?b(a):null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null}))})({findFiberByHostInstance:Bb,bundleType:0,version:"16.13.0",rendererPackageName:"react-dom"});I.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=mk;I.createPortal=Xh;I.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternalFiber;if(void 0===
b){if("function"===typeof a.render)throw Error(k(188));throw Error(k(268,Object.keys(a)));}a=Sf(b);a=null===a?null:a.stateNode;return a};I.flushSync=function(a,b){if((p&(ca|ma))!==H)throw Error(k(187));var c=p;p|=1;try{return Da(99,a.bind(null,b))}finally{p=c,ha();}};I.hydrate=function(a,b,c){if(!bc(b))throw Error(k(200));return nd(null,a,b,!0,c)};I.render=function(a,b,c){if(!bc(b))throw Error(k(200));return nd(null,a,b,!1,c)};I.unmountComponentAtNode=function(a){if(!bc(a))throw Error(k(40));return a._reactRootContainer?
(Rh(function(){nd(null,null,a,!1,function(){a._reactRootContainer=null;a[Lb]=null;});}),!0):!1};I.unstable_batchedUpdates=Qh;I.unstable_createPortal=function(a,b){return Xh(a,b,2<arguments.length&&void 0!==arguments[2]?arguments[2]:null)};I.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!bc(c))throw Error(k(200));if(null==a||void 0===a._reactInternalFiber)throw Error(k(38));return nd(a,b,c,!1,d)};I.version="16.13.0";}(ReactDOM,React));

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function createCommonjsModule(fn, basedir, module) {
	return module = {
	  path: basedir,
	  exports: {},
	  require: function (path, base) {
      return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
    }
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}var AsyncMode=l;var ConcurrentMode=m;var ContextConsumer=k;var ContextProvider=h;var Element=c;var ForwardRef=n;var Fragment$1=e;var Lazy=t;var Memo=r;var Portal=d;
var Profiler$1=g;var StrictMode$1=f;var Suspense$1=p;var isAsyncMode=function(a){return A(a)||z(a)===l};var isConcurrentMode=A;var isContextConsumer=function(a){return z(a)===k};var isContextProvider=function(a){return z(a)===h};var isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};var isForwardRef=function(a){return z(a)===n};var isFragment=function(a){return z(a)===e};var isLazy=function(a){return z(a)===t};
var isMemo=function(a){return z(a)===r};var isPortal=function(a){return z(a)===d};var isProfiler=function(a){return z(a)===g};var isStrictMode=function(a){return z(a)===f};var isSuspense=function(a){return z(a)===p};
var isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};var typeOf=z;

var reactIs_production_min = {
	AsyncMode: AsyncMode,
	ConcurrentMode: ConcurrentMode,
	ContextConsumer: ContextConsumer,
	ContextProvider: ContextProvider,
	Element: Element,
	ForwardRef: ForwardRef,
	Fragment: Fragment$1,
	Lazy: Lazy,
	Memo: Memo,
	Portal: Portal,
	Profiler: Profiler$1,
	StrictMode: StrictMode$1,
	Suspense: Suspense$1,
	isAsyncMode: isAsyncMode,
	isConcurrentMode: isConcurrentMode,
	isContextConsumer: isContextConsumer,
	isContextProvider: isContextProvider,
	isElement: isElement,
	isForwardRef: isForwardRef,
	isFragment: isFragment,
	isLazy: isLazy,
	isMemo: isMemo,
	isPortal: isPortal,
	isProfiler: isProfiler,
	isStrictMode: isStrictMode,
	isSuspense: isSuspense,
	isValidElementType: isValidElementType,
	typeOf: typeOf
};

var reactIs_development = createCommonjsModule(function (module, exports) {
});

var reactIs = createCommonjsModule(function (module) {

{
  module.exports = reactIs_production_min;
}
});

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty$1.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret;

var has = Function.call.bind(Object.prototype.hasOwnProperty);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret_1) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

{
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = factoryWithThrowingShims();
}
});

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function isAbsolute(pathname) {
  return pathname.charAt(0) === '/';
}

// About 1.5x faster than the two-arg version of Array#splice()
function spliceOne(list, index) {
  for (var i = index, k = i + 1, n = list.length; k < n; i += 1, k += 1) {
    list[i] = list[k];
  }

  list.pop();
}

// This implementation is based heavily on node's url.parse
function resolvePathname(to, from) {
  if (from === undefined) from = '';

  var toParts = (to && to.split('/')) || [];
  var fromParts = (from && from.split('/')) || [];

  var isToAbs = to && isAbsolute(to);
  var isFromAbs = from && isAbsolute(from);
  var mustEndAbs = isToAbs || isFromAbs;

  if (to && isAbsolute(to)) {
    // to is absolute
    fromParts = toParts;
  } else if (toParts.length) {
    // to is relative, drop the filename
    fromParts.pop();
    fromParts = fromParts.concat(toParts);
  }

  if (!fromParts.length) return '/';

  var hasTrailingSlash;
  if (fromParts.length) {
    var last = fromParts[fromParts.length - 1];
    hasTrailingSlash = last === '.' || last === '..' || last === '';
  } else {
    hasTrailingSlash = false;
  }

  var up = 0;
  for (var i = fromParts.length; i >= 0; i--) {
    var part = fromParts[i];

    if (part === '.') {
      spliceOne(fromParts, i);
    } else if (part === '..') {
      spliceOne(fromParts, i);
      up++;
    } else if (up) {
      spliceOne(fromParts, i);
      up--;
    }
  }

  if (!mustEndAbs) for (; up--; up) fromParts.unshift('..');

  if (
    mustEndAbs &&
    fromParts[0] !== '' &&
    (!fromParts[0] || !isAbsolute(fromParts[0]))
  )
    fromParts.unshift('');

  var result = fromParts.join('/');

  if (hasTrailingSlash && result.substr(-1) !== '/') result += '/';

  return result;
}

function valueOf(obj) {
  return obj.valueOf ? obj.valueOf() : Object.prototype.valueOf.call(obj);
}

function valueEqual(a, b) {
  // Test for strict equality first.
  if (a === b) return true;

  // Otherwise, if either of them == null they are not equal.
  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return (
      Array.isArray(b) &&
      a.length === b.length &&
      a.every(function(item, index) {
        return valueEqual(item, b[index]);
      })
    );
  }

  if (typeof a === 'object' || typeof b === 'object') {
    var aValue = valueOf(a);
    var bValue = valueOf(b);

    if (aValue !== a || bValue !== b) return valueEqual(aValue, bValue);

    return Object.keys(Object.assign({}, a, b)).every(function(key) {
      return valueEqual(a[key], b[key]);
    });
  }

  return false;
}

var prefix = 'Invariant failed';
function invariant(condition, message) {
    if (condition) {
        return;
    }
    {
        throw new Error(prefix);
    }
}

function addLeadingSlash(path) {
  return path.charAt(0) === '/' ? path : '/' + path;
}
function hasBasename(path, prefix) {
  return path.toLowerCase().indexOf(prefix.toLowerCase()) === 0 && '/?#'.indexOf(path.charAt(prefix.length)) !== -1;
}
function stripBasename(path, prefix) {
  return hasBasename(path, prefix) ? path.substr(prefix.length) : path;
}
function stripTrailingSlash(path) {
  return path.charAt(path.length - 1) === '/' ? path.slice(0, -1) : path;
}
function parsePath(path) {
  var pathname = path || '/';
  var search = '';
  var hash = '';
  var hashIndex = pathname.indexOf('#');

  if (hashIndex !== -1) {
    hash = pathname.substr(hashIndex);
    pathname = pathname.substr(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');

  if (searchIndex !== -1) {
    search = pathname.substr(searchIndex);
    pathname = pathname.substr(0, searchIndex);
  }

  return {
    pathname: pathname,
    search: search === '?' ? '' : search,
    hash: hash === '#' ? '' : hash
  };
}
function createPath(location) {
  var pathname = location.pathname,
      search = location.search,
      hash = location.hash;
  var path = pathname || '/';
  if (search && search !== '?') path += search.charAt(0) === '?' ? search : "?" + search;
  if (hash && hash !== '#') path += hash.charAt(0) === '#' ? hash : "#" + hash;
  return path;
}

function createLocation(path, state, key, currentLocation) {
  var location;

  if (typeof path === 'string') {
    // Two-arg form: push(path, state)
    location = parsePath(path);
    location.state = state;
  } else {
    // One-arg form: push(location)
    location = _extends({}, path);
    if (location.pathname === undefined) location.pathname = '';

    if (location.search) {
      if (location.search.charAt(0) !== '?') location.search = '?' + location.search;
    } else {
      location.search = '';
    }

    if (location.hash) {
      if (location.hash.charAt(0) !== '#') location.hash = '#' + location.hash;
    } else {
      location.hash = '';
    }

    if (state !== undefined && location.state === undefined) location.state = state;
  }

  try {
    location.pathname = decodeURI(location.pathname);
  } catch (e) {
    if (e instanceof URIError) {
      throw new URIError('Pathname "' + location.pathname + '" could not be decoded. ' + 'This is likely caused by an invalid percent-encoding.');
    } else {
      throw e;
    }
  }

  if (key) location.key = key;

  if (currentLocation) {
    // Resolve incomplete/relative pathname relative to current location.
    if (!location.pathname) {
      location.pathname = currentLocation.pathname;
    } else if (location.pathname.charAt(0) !== '/') {
      location.pathname = resolvePathname(location.pathname, currentLocation.pathname);
    }
  } else {
    // When there is no prior location and pathname is empty, set it to /
    if (!location.pathname) {
      location.pathname = '/';
    }
  }

  return location;
}
function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search && a.hash === b.hash && a.key === b.key && valueEqual(a.state, b.state);
}

function createTransitionManager() {
  var prompt = null;

  function setPrompt(nextPrompt) {
    prompt = nextPrompt;
    return function () {
      if (prompt === nextPrompt) prompt = null;
    };
  }

  function confirmTransitionTo(location, action, getUserConfirmation, callback) {
    // TODO: If another transition starts while we're still confirming
    // the previous one, we may end up in a weird state. Figure out the
    // best way to handle this.
    if (prompt != null) {
      var result = typeof prompt === 'function' ? prompt(location, action) : prompt;

      if (typeof result === 'string') {
        if (typeof getUserConfirmation === 'function') {
          getUserConfirmation(result, callback);
        } else {
          callback(true);
        }
      } else {
        // Return false from a transition hook to cancel the transition.
        callback(result !== false);
      }
    } else {
      callback(true);
    }
  }

  var listeners = [];

  function appendListener(fn) {
    var isActive = true;

    function listener() {
      if (isActive) fn.apply(void 0, arguments);
    }

    listeners.push(listener);
    return function () {
      isActive = false;
      listeners = listeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function notifyListeners() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    listeners.forEach(function (listener) {
      return listener.apply(void 0, args);
    });
  }

  return {
    setPrompt: setPrompt,
    confirmTransitionTo: confirmTransitionTo,
    appendListener: appendListener,
    notifyListeners: notifyListeners
  };
}

var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
function getConfirmation(message, callback) {
  callback(window.confirm(message)); // eslint-disable-line no-alert
}
/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/reactjs/react-router/issues/586
 */

function supportsHistory() {
  var ua = window.navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) return false;
  return window.history && 'pushState' in window.history;
}
/**
 * Returns true if browser fires popstate on hash change.
 * IE10 and IE11 do not.
 */

function supportsPopStateOnHashChange() {
  return window.navigator.userAgent.indexOf('Trident') === -1;
}
/**
 * Returns true if a given popstate event is an extraneous WebKit event.
 * Accounts for the fact that Chrome on iOS fires real popstate events
 * containing undefined state when pressing the back button.
 */

function isExtraneousPopstateEvent(event) {
  return event.state === undefined && navigator.userAgent.indexOf('CriOS') === -1;
}

var PopStateEvent = 'popstate';
var HashChangeEvent = 'hashchange';

function getHistoryState() {
  try {
    return window.history.state || {};
  } catch (e) {
    // IE 11 sometimes throws when accessing window.history.state
    // See https://github.com/ReactTraining/history/pull/289
    return {};
  }
}
/**
 * Creates a history object that uses the HTML5 history API including
 * pushState, replaceState, and the popstate event.
 */


function createBrowserHistory(props) {
  if (props === void 0) {
    props = {};
  }

  !canUseDOM ?  invariant(false) : void 0;
  var globalHistory = window.history;
  var canUseHistory = supportsHistory();
  var needsHashChangeListener = !supportsPopStateOnHashChange();
  var _props = props,
      _props$forceRefresh = _props.forceRefresh,
      forceRefresh = _props$forceRefresh === void 0 ? false : _props$forceRefresh,
      _props$getUserConfirm = _props.getUserConfirmation,
      getUserConfirmation = _props$getUserConfirm === void 0 ? getConfirmation : _props$getUserConfirm,
      _props$keyLength = _props.keyLength,
      keyLength = _props$keyLength === void 0 ? 6 : _props$keyLength;
  var basename = props.basename ? stripTrailingSlash(addLeadingSlash(props.basename)) : '';

  function getDOMLocation(historyState) {
    var _ref = historyState || {},
        key = _ref.key,
        state = _ref.state;

    var _window$location = window.location,
        pathname = _window$location.pathname,
        search = _window$location.search,
        hash = _window$location.hash;
    var path = pathname + search + hash;
    if (basename) path = stripBasename(path, basename);
    return createLocation(path, state, key);
  }

  function createKey() {
    return Math.random().toString(36).substr(2, keyLength);
  }

  var transitionManager = createTransitionManager();

  function setState(nextState) {
    _extends(history, nextState);

    history.length = globalHistory.length;
    transitionManager.notifyListeners(history.location, history.action);
  }

  function handlePopState(event) {
    // Ignore extraneous popstate events in WebKit.
    if (isExtraneousPopstateEvent(event)) return;
    handlePop(getDOMLocation(event.state));
  }

  function handleHashChange() {
    handlePop(getDOMLocation(getHistoryState()));
  }

  var forceNextPop = false;

  function handlePop(location) {
    if (forceNextPop) {
      forceNextPop = false;
      setState();
    } else {
      var action = 'POP';
      transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
        if (ok) {
          setState({
            action: action,
            location: location
          });
        } else {
          revertPop(location);
        }
      });
    }
  }

  function revertPop(fromLocation) {
    var toLocation = history.location; // TODO: We could probably make this more reliable by
    // keeping a list of keys we've seen in sessionStorage.
    // Instead, we just default to 0 for keys we don't know.

    var toIndex = allKeys.indexOf(toLocation.key);
    if (toIndex === -1) toIndex = 0;
    var fromIndex = allKeys.indexOf(fromLocation.key);
    if (fromIndex === -1) fromIndex = 0;
    var delta = toIndex - fromIndex;

    if (delta) {
      forceNextPop = true;
      go(delta);
    }
  }

  var initialLocation = getDOMLocation(getHistoryState());
  var allKeys = [initialLocation.key]; // Public interface

  function createHref(location) {
    return basename + createPath(location);
  }

  function push(path, state) {
    var action = 'PUSH';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.pushState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.href = href;
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          var nextKeys = allKeys.slice(0, prevIndex + 1);
          nextKeys.push(location.key);
          allKeys = nextKeys;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        window.location.href = href;
      }
    });
  }

  function replace(path, state) {
    var action = 'REPLACE';
    var location = createLocation(path, state, createKey(), history.location);
    transitionManager.confirmTransitionTo(location, action, getUserConfirmation, function (ok) {
      if (!ok) return;
      var href = createHref(location);
      var key = location.key,
          state = location.state;

      if (canUseHistory) {
        globalHistory.replaceState({
          key: key,
          state: state
        }, null, href);

        if (forceRefresh) {
          window.location.replace(href);
        } else {
          var prevIndex = allKeys.indexOf(history.location.key);
          if (prevIndex !== -1) allKeys[prevIndex] = location.key;
          setState({
            action: action,
            location: location
          });
        }
      } else {
        window.location.replace(href);
      }
    });
  }

  function go(n) {
    globalHistory.go(n);
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  var listenerCount = 0;

  function checkDOMListeners(delta) {
    listenerCount += delta;

    if (listenerCount === 1 && delta === 1) {
      window.addEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.addEventListener(HashChangeEvent, handleHashChange);
    } else if (listenerCount === 0) {
      window.removeEventListener(PopStateEvent, handlePopState);
      if (needsHashChangeListener) window.removeEventListener(HashChangeEvent, handleHashChange);
    }
  }

  var isBlocked = false;

  function block(prompt) {
    if (prompt === void 0) {
      prompt = false;
    }

    var unblock = transitionManager.setPrompt(prompt);

    if (!isBlocked) {
      checkDOMListeners(1);
      isBlocked = true;
    }

    return function () {
      if (isBlocked) {
        isBlocked = false;
        checkDOMListeners(-1);
      }

      return unblock();
    };
  }

  function listen(listener) {
    var unlisten = transitionManager.appendListener(listener);
    checkDOMListeners(1);
    return function () {
      checkDOMListeners(-1);
      unlisten();
    };
  }

  var history = {
    length: globalHistory.length,
    action: 'POP',
    location: initialLocation,
    createHref: createHref,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    block: block,
    listen: listen
  };
  return history;
}

var MAX_SIGNED_31_BIT_INT = 1073741823;
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : {};

function getUniqueId() {
  var key = '__global_unique_id__';
  return commonjsGlobal[key] = (commonjsGlobal[key] || 0) + 1;
}

function objectIs(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function createEventEmitter(value) {
  var handlers = [];
  return {
    on: function on(handler) {
      handlers.push(handler);
    },
    off: function off(handler) {
      handlers = handlers.filter(function (h) {
        return h !== handler;
      });
    },
    get: function get() {
      return value;
    },
    set: function set(newValue, changedBits) {
      value = newValue;
      handlers.forEach(function (handler) {
        return handler(value, changedBits);
      });
    }
  };
}

function onlyChild(children) {
  return Array.isArray(children) ? children[0] : children;
}

function createReactContext(defaultValue, calculateChangedBits) {
  var _Provider$childContex, _Consumer$contextType;

  var contextProp = '__create-react-context-' + getUniqueId() + '__';

  var Provider = /*#__PURE__*/function (_Component) {
    _inheritsLoose(Provider, _Component);

    function Provider() {
      var _this;

      _this = _Component.apply(this, arguments) || this;
      _this.emitter = createEventEmitter(_this.props.value);
      return _this;
    }

    var _proto = Provider.prototype;

    _proto.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextProp] = this.emitter, _ref;
    };

    _proto.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      if (this.props.value !== nextProps.value) {
        var oldValue = this.props.value;
        var newValue = nextProps.value;
        var changedBits;

        if (objectIs(oldValue, newValue)) {
          changedBits = 0;
        } else {
          changedBits = typeof calculateChangedBits === 'function' ? calculateChangedBits(oldValue, newValue) : MAX_SIGNED_31_BIT_INT;

          changedBits |= 0;

          if (changedBits !== 0) {
            this.emitter.set(nextProps.value, changedBits);
          }
        }
      }
    };

    _proto.render = function render() {
      return this.props.children;
    };

    return Provider;
  }(Component);

  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[contextProp] = propTypes.object.isRequired, _Provider$childContex);

  var Consumer = /*#__PURE__*/function (_Component2) {
    _inheritsLoose(Consumer, _Component2);

    function Consumer() {
      var _this2;

      _this2 = _Component2.apply(this, arguments) || this;
      _this2.state = {
        value: _this2.getValue()
      };

      _this2.onUpdate = function (newValue, changedBits) {
        var observedBits = _this2.observedBits | 0;

        if ((observedBits & changedBits) !== 0) {
          _this2.setState({
            value: _this2.getValue()
          });
        }
      };

      return _this2;
    }

    var _proto2 = Consumer.prototype;

    _proto2.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
      var observedBits = nextProps.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentDidMount = function componentDidMount() {
      if (this.context[contextProp]) {
        this.context[contextProp].on(this.onUpdate);
      }

      var observedBits = this.props.observedBits;
      this.observedBits = observedBits === undefined || observedBits === null ? MAX_SIGNED_31_BIT_INT : observedBits;
    };

    _proto2.componentWillUnmount = function componentWillUnmount() {
      if (this.context[contextProp]) {
        this.context[contextProp].off(this.onUpdate);
      }
    };

    _proto2.getValue = function getValue() {
      if (this.context[contextProp]) {
        return this.context[contextProp].get();
      } else {
        return defaultValue;
      }
    };

    _proto2.render = function render() {
      return onlyChild(this.props.children)(this.state.value);
    };

    return Consumer;
  }(Component);

  Consumer.contextTypes = (_Consumer$contextType = {}, _Consumer$contextType[contextProp] = propTypes.object, _Consumer$contextType);
  return {
    Provider: Provider,
    Consumer: Consumer
  };
}

var index = React.createContext || createReactContext;

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

/**
 * Expose `pathToRegexp`.
 */
var pathToRegexp_1 = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options), options)
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options && options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}
pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var FORWARD_REF_STATICS = {
  '$$typeof': true,
  render: true,
  defaultProps: true,
  displayName: true,
  propTypes: true
};
var MEMO_STATICS = {
  '$$typeof': true,
  compare: true,
  defaultProps: true,
  displayName: true,
  propTypes: true,
  type: true
};
var TYPE_STATICS = {};
TYPE_STATICS[reactIs.ForwardRef] = FORWARD_REF_STATICS;
TYPE_STATICS[reactIs.Memo] = MEMO_STATICS;

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext = function createNamedContext(name) {
  var context = index();
  context.displayName = name;
  return context;
};

var historyContext =
/*#__PURE__*/
createNamedContext("Router-History");

// TODO: Replace with React.createContext once we can assume React 16+

var createNamedContext$1 = function createNamedContext(name) {
  var context = index();
  context.displayName = name;
  return context;
};

var context =
/*#__PURE__*/
createNamedContext$1("Router");

/**
 * The public API for putting history on context.
 */

var Router =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Router, _React$Component);

  Router.computeRootMatch = function computeRootMatch(pathname) {
    return {
      path: "/",
      url: "/",
      params: {},
      isExact: pathname === "/"
    };
  };

  function Router(props) {
    var _this;

    _this = _React$Component.call(this, props) || this;
    _this.state = {
      location: props.history.location
    }; // This is a bit of a hack. We have to start listening for location
    // changes here in the constructor in case there are any <Redirect>s
    // on the initial render. If there are, they will replace/push when
    // they mount and since cDM fires in children before parents, we may
    // get a new location before the <Router> is mounted.

    _this._isMounted = false;
    _this._pendingLocation = null;

    if (!props.staticContext) {
      _this.unlisten = props.history.listen(function (location) {
        if (_this._isMounted) {
          _this.setState({
            location: location
          });
        } else {
          _this._pendingLocation = location;
        }
      });
    }

    return _this;
  }

  var _proto = Router.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this._isMounted = true;

    if (this._pendingLocation) {
      this.setState({
        location: this._pendingLocation
      });
    }
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.unlisten) this.unlisten();
  };

  _proto.render = function render() {
    return React.createElement(context.Provider, {
      value: {
        history: this.props.history,
        location: this.state.location,
        match: Router.computeRootMatch(this.state.location.pathname),
        staticContext: this.props.staticContext
      }
    }, React.createElement(historyContext.Provider, {
      children: this.props.children || null,
      value: this.props.history
    }));
  };

  return Router;
}(React.Component);

var Lifecycle =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Lifecycle, _React$Component);

  function Lifecycle() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Lifecycle.prototype;

  _proto.componentDidMount = function componentDidMount() {
    if (this.props.onMount) this.props.onMount.call(this, this);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (this.props.onUpdate) this.props.onUpdate.call(this, this, prevProps);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    if (this.props.onUnmount) this.props.onUnmount.call(this, this);
  };

  _proto.render = function render() {
    return null;
  };

  return Lifecycle;
}(React.Component);

var cache = {};
var cacheLimit = 10000;
var cacheCount = 0;

function compilePath(path) {
  if (cache[path]) return cache[path];
  var generator = pathToRegexp_1.compile(path);

  if (cacheCount < cacheLimit) {
    cache[path] = generator;
    cacheCount++;
  }

  return generator;
}
/**
 * Public API for generating a URL pathname from a path and parameters.
 */


function generatePath(path, params) {
  if (path === void 0) {
    path = "/";
  }

  if (params === void 0) {
    params = {};
  }

  return path === "/" ? path : compilePath(path)(params, {
    pretty: true
  });
}

/**
 * The public API for navigating programmatically with a component.
 */

function Redirect(_ref) {
  var computedMatch = _ref.computedMatch,
      to = _ref.to,
      _ref$push = _ref.push,
      push = _ref$push === void 0 ? false : _ref$push;
  return React.createElement(context.Consumer, null, function (context) {
    !context ?  invariant(false) : void 0;
    var history = context.history,
        staticContext = context.staticContext;
    var method = push ? history.push : history.replace;
    var location = createLocation(computedMatch ? typeof to === "string" ? generatePath(to, computedMatch.params) : _extends({}, to, {
      pathname: generatePath(to.pathname, computedMatch.params)
    }) : to); // When rendering in a static context,
    // set the new location immediately.

    if (staticContext) {
      method(location);
      return null;
    }

    return React.createElement(Lifecycle, {
      onMount: function onMount() {
        method(location);
      },
      onUpdate: function onUpdate(self, prevProps) {
        var prevLocation = createLocation(prevProps.to);

        if (!locationsAreEqual(prevLocation, _extends({}, location, {
          key: prevLocation.key
        }))) {
          method(location);
        }
      },
      to: to
    });
  });
}

var cache$1 = {};
var cacheLimit$1 = 10000;
var cacheCount$1 = 0;

function compilePath$1(path, options) {
  var cacheKey = "" + options.end + options.strict + options.sensitive;
  var pathCache = cache$1[cacheKey] || (cache$1[cacheKey] = {});
  if (pathCache[path]) return pathCache[path];
  var keys = [];
  var regexp = pathToRegexp_1(path, keys, options);
  var result = {
    regexp: regexp,
    keys: keys
  };

  if (cacheCount$1 < cacheLimit$1) {
    pathCache[path] = result;
    cacheCount$1++;
  }

  return result;
}
/**
 * Public API for matching a URL pathname to a path.
 */


function matchPath(pathname, options) {
  if (options === void 0) {
    options = {};
  }

  if (typeof options === "string" || Array.isArray(options)) {
    options = {
      path: options
    };
  }

  var _options = options,
      path = _options.path,
      _options$exact = _options.exact,
      exact = _options$exact === void 0 ? false : _options$exact,
      _options$strict = _options.strict,
      strict = _options$strict === void 0 ? false : _options$strict,
      _options$sensitive = _options.sensitive,
      sensitive = _options$sensitive === void 0 ? false : _options$sensitive;
  var paths = [].concat(path);
  return paths.reduce(function (matched, path) {
    if (!path && path !== "") return null;
    if (matched) return matched;

    var _compilePath = compilePath$1(path, {
      end: exact,
      strict: strict,
      sensitive: sensitive
    }),
        regexp = _compilePath.regexp,
        keys = _compilePath.keys;

    var match = regexp.exec(pathname);
    if (!match) return null;
    var url = match[0],
        values = match.slice(1);
    var isExact = pathname === url;
    if (exact && !isExact) return null;
    return {
      path: path,
      // the path used to match
      url: path === "/" && url === "" ? "/" : url,
      // the matched portion of the URL
      isExact: isExact,
      // whether or not we matched exactly
      params: keys.reduce(function (memo, key, index) {
        memo[key.name] = values[index];
        return memo;
      }, {})
    };
  }, null);
}
/**
 * The public API for matching a single path and rendering.
 */


var Route =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Route, _React$Component);

  function Route() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Route.prototype;

  _proto.render = function render() {
    var _this = this;

    return React.createElement(context.Consumer, null, function (context$1) {
      !context$1 ?  invariant(false) : void 0;
      var location = _this.props.location || context$1.location;
      var match = _this.props.computedMatch ? _this.props.computedMatch // <Switch> already computed the match for us
      : _this.props.path ? matchPath(location.pathname, _this.props) : context$1.match;

      var props = _extends({}, context$1, {
        location: location,
        match: match
      });

      var _this$props = _this.props,
          children = _this$props.children,
          component = _this$props.component,
          render = _this$props.render; // Preact uses an empty array as children by
      // default, so use null if that's the case.

      if (Array.isArray(children) && children.length === 0) {
        children = null;
      }

      return React.createElement(context.Provider, {
        value: props
      }, props.match ? children ? typeof children === "function" ?  children(props) : children : component ? React.createElement(component, props) : render ? render(props) : null : typeof children === "function" ?  children(props) : null);
    });
  };

  return Route;
}(React.Component);

/**
 * The public API for rendering the first <Route> that matches.
 */

var Switch =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Switch, _React$Component);

  function Switch() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Switch.prototype;

  _proto.render = function render() {
    var _this = this;

    return React.createElement(context.Consumer, null, function (context) {
      !context ?  invariant(false) : void 0;
      var location = _this.props.location || context.location;
      var element, match; // We use React.Children.forEach instead of React.Children.toArray().find()
      // here because toArray adds keys to all child elements and we do not want
      // to trigger an unmount/remount for two <Route>s that render the same
      // component at different URLs.

      React.Children.forEach(_this.props.children, function (child) {
        if (match == null && React.isValidElement(child)) {
          element = child;
          var path = child.props.path || child.props.from;
          match = path ? matchPath(location.pathname, _extends({}, child.props, {
            path: path
          })) : context.match;
        }
      });
      return match ? React.cloneElement(element, {
        location: location,
        computedMatch: match
      }) : null;
    });
  };

  return Switch;
}(React.Component);

/**
 * The public API for a <Router> that uses HTML5 history.
 */

var BrowserRouter =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(BrowserRouter, _React$Component);

  function BrowserRouter() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.history = createBrowserHistory(_this.props);
    return _this;
  }

  var _proto = BrowserRouter.prototype;

  _proto.render = function render() {
    return React.createElement(Router, {
      history: this.history,
      children: this.props.children
    });
  };

  return BrowserRouter;
}(React.Component);

var resolveToLocation = function resolveToLocation(to, currentLocation) {
  return typeof to === "function" ? to(currentLocation) : to;
};
var normalizeToLocation = function normalizeToLocation(to, currentLocation) {
  return typeof to === "string" ? createLocation(to, null, null, currentLocation) : to;
};

var forwardRefShim = function forwardRefShim(C) {
  return C;
};

var forwardRef$1 = React.forwardRef;

if (typeof forwardRef$1 === "undefined") {
  forwardRef$1 = forwardRefShim;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var LinkAnchor = forwardRef$1(function (_ref, forwardedRef) {
  var innerRef = _ref.innerRef,
      navigate = _ref.navigate,
      _onClick = _ref.onClick,
      rest = _objectWithoutPropertiesLoose(_ref, ["innerRef", "navigate", "onClick"]);

  var target = rest.target;

  var props = _extends({}, rest, {
    onClick: function onClick(event) {
      try {
        if (_onClick) _onClick(event);
      } catch (ex) {
        event.preventDefault();
        throw ex;
      }

      if (!event.defaultPrevented && // onClick prevented default
      event.button === 0 && ( // ignore everything but left clicks
      !target || target === "_self") && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) // ignore clicks with modifier keys
      ) {
          event.preventDefault();
          navigate();
        }
    }
  }); // React 15 compat


  if (forwardRefShim !== forwardRef$1) {
    props.ref = forwardedRef || innerRef;
  } else {
    props.ref = innerRef;
  }
  /* eslint-disable-next-line jsx-a11y/anchor-has-content */


  return React.createElement("a", props);
});
/**
 * The public API for rendering a history-aware <a>.
 */


var Link = forwardRef$1(function (_ref2, forwardedRef) {
  var _ref2$component = _ref2.component,
      component = _ref2$component === void 0 ? LinkAnchor : _ref2$component,
      replace = _ref2.replace,
      to = _ref2.to,
      innerRef = _ref2.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref2, ["component", "replace", "to", "innerRef"]);

  return React.createElement(context.Consumer, null, function (context) {
    !context ?  invariant(false) : void 0;
    var history = context.history;
    var location = normalizeToLocation(resolveToLocation(to, context.location), context.location);
    var href = location ? history.createHref(location) : "";

    var props = _extends({}, rest, {
      href: href,
      navigate: function navigate() {
        var location = resolveToLocation(to, context.location);
        var method = replace ? history.replace : history.push;
        method(location);
      }
    }); // React 15 compat


    if (forwardRefShim !== forwardRef$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return React.createElement(component, props);
  });
});

var forwardRefShim$1 = function forwardRefShim(C) {
  return C;
};

var forwardRef$1$1 = React.forwardRef;

if (typeof forwardRef$1$1 === "undefined") {
  forwardRef$1$1 = forwardRefShim$1;
}

function joinClassnames() {
  for (var _len = arguments.length, classnames = new Array(_len), _key = 0; _key < _len; _key++) {
    classnames[_key] = arguments[_key];
  }

  return classnames.filter(function (i) {
    return i;
  }).join(" ");
}
/**
 * A <Link> wrapper that knows if it's "active" or not.
 */


var NavLink = forwardRef$1$1(function (_ref, forwardedRef) {
  var _ref$ariaCurrent = _ref["aria-current"],
      ariaCurrent = _ref$ariaCurrent === void 0 ? "page" : _ref$ariaCurrent,
      _ref$activeClassName = _ref.activeClassName,
      activeClassName = _ref$activeClassName === void 0 ? "active" : _ref$activeClassName,
      activeStyle = _ref.activeStyle,
      classNameProp = _ref.className,
      exact = _ref.exact,
      isActiveProp = _ref.isActive,
      locationProp = _ref.location,
      sensitive = _ref.sensitive,
      strict = _ref.strict,
      styleProp = _ref.style,
      to = _ref.to,
      innerRef = _ref.innerRef,
      rest = _objectWithoutPropertiesLoose(_ref, ["aria-current", "activeClassName", "activeStyle", "className", "exact", "isActive", "location", "sensitive", "strict", "style", "to", "innerRef"]);

  return React.createElement(context.Consumer, null, function (context) {
    !context ?  invariant(false) : void 0;
    var currentLocation = locationProp || context.location;
    var toLocation = normalizeToLocation(resolveToLocation(to, currentLocation), currentLocation);
    var path = toLocation.pathname; // Regex taken from: https://github.com/pillarjs/path-to-regexp/blob/master/index.js#L202

    var escapedPath = path && path.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
    var match = escapedPath ? matchPath(currentLocation.pathname, {
      path: escapedPath,
      exact: exact,
      sensitive: sensitive,
      strict: strict
    }) : null;
    var isActive = !!(isActiveProp ? isActiveProp(match, currentLocation) : match);
    var className = isActive ? joinClassnames(classNameProp, activeClassName) : classNameProp;
    var style = isActive ? _extends({}, styleProp, {}, activeStyle) : styleProp;

    var props = _extends({
      "aria-current": isActive && ariaCurrent || null,
      className: className,
      style: style,
      to: toLocation
    }, rest); // React 15 compat


    if (forwardRefShim$1 !== forwardRef$1$1) {
      props.ref = forwardedRef || innerRef;
    } else {
      props.innerRef = innerRef;
    }

    return React.createElement(Link, props);
  });
});

/**
 * dynamic import don't work in ssr
 * to work around that, in ssr, we pass all the data needed by App
 * with this ctx
 * so the App can render the page data directly
 * instead of render the loading state
 */
const dataCacheCtx = createContext({ pages: {} });
const setDataCacheCtx = createContext(() => {
    throw new Error(`setDataCacheCtx not found`);
});

const PageLoader = ({ pages, path, theme }) => {
    const { _importFn, staticData } = pages[path];
    staticData._path = path;
    const dataCache = useContext(dataCacheCtx);
    const setDataCache = useContext(setDataCacheCtx);
    const [loadState, setLoadState] = useState(() => {
        if (dataCache.pages[path]) {
            // we already have the data in ssr
            // don't need to dynamic load it
            return {
                type: 'loaded',
                pageData: { ...staticData, ...dataCache.pages[path] },
            };
        }
        return {
            type: 'initial-loading',
            pageStaticData: staticData,
        };
    });
    useEffect(() => {
        if (dataCache.pages[path]) {
            // we already have the data in ssr
            // don't need to dynamic load it
            setLoadState({
                type: 'loaded',
                pageData: { ...staticData, ...dataCache.pages[path] },
            });
            return;
        }
        // state machine transition
        switch (loadState.type) {
            case 'initial-loading':
                setLoadState({
                    type: 'initial-loading',
                    pageStaticData: staticData,
                });
                break;
            case 'loaded':
                setLoadState({
                    type: 'transition-loading',
                    prevPageData: loadState.pageData,
                    pageStaticData: staticData,
                });
                break;
            case 'transition-loading':
                setLoadState({
                    type: 'transition-loading',
                    prevPageData: loadState.prevPageData,
                    pageStaticData: staticData,
                });
                break;
            case 'load-error':
                setLoadState({
                    type: 'initial-loading',
                    pageStaticData: staticData,
                });
                break;
            default:
                throw new Error(`unknown loadState.type`);
        }
        // FIXME handle race condition of this async setState
        _importFn()
            .then((pageLoaded) => {
            setDataCache((prev) => ({
                ...prev,
                pages: {
                    ...prev.pages,
                    [path]: pageLoaded.pageData,
                },
            }));
            setLoadState({
                type: 'loaded',
                pageData: { ...staticData, ...pageLoaded.pageData },
            });
        })
            .catch((error) => {
            setLoadState({
                type: 'load-error',
                pageStaticData: staticData,
                error,
            });
            throw error;
        });
    }, [path]);
    switch (loadState.type) {
        case 'initial-loading':
            if (theme.initialLoading)
                return theme.initialLoading(loadState.pageStaticData);
            return React.createElement("p", null, "Loading...");
        case 'loaded':
            return theme.loaded(loadState.pageData);
        case 'transition-loading':
            if (theme.transitionLoading)
                return theme.transitionLoading(loadState.pageStaticData, loadState.prevPageData);
            if (theme.initialLoading)
                return theme.initialLoading(loadState.pageStaticData);
            return React.createElement("p", null, "Loading...");
        case 'load-error':
            if (theme.loadError)
                return theme.loadError(loadState.error, loadState.pageStaticData);
            return React.createElement("p", null, "Load Page Error");
        default:
            throw new Error(`unknown loadState.type`);
    }
};

function wrap(promise) {
  return promise.then((pageData) => ({pageData}));
}

const pages = {};

pages["/"] = {
    _importFn: () => wrap(import('./$.3065f0a6.js')),
    staticData: {"title":"Introduction","sort":0,"sourceType":"md"}
};

pages["/404"] = {
    _importFn: () => wrap(import('./404$.7492297f.js')),
    staticData: {"sourceType":"js"}
};

pages["/advanced-fs-routing"] = {
    _importFn: () => wrap(import('./advanced-fs-routing$.40e93568.js')),
    staticData: {"title":"Advanced FS Routing","sort":5,"sourceType":"md"}
};

pages["/fs-routing"] = {
    _importFn: () => wrap(import('./fs-routing$.12367e87.js')),
    staticData: {"title":"FS Routing","sort":1,"sourceType":"md"}
};

pages["/magic-import"] = {
    _importFn: () => wrap(import('./magic-import$.bcd46ba0.js')),
    staticData: {"title":"Magic Import","sort":4,"sourceType":"md"}
};

pages["/page-data"] = {
    _importFn: () => wrap(import('./page-data$.4dbb65e4.js')),
    staticData: {"title":"Page data","sort":3,"sourceType":"md"}
};

pages["/theme"] = {
    _importFn: () => wrap(import('./theme$.cebdaf38.js')),
    staticData: {"title":"Theme","sort":2,"sourceType":"md"}
};

;

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose$1(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose$1(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/React.createContext({});
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = React.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/React.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/React.createElement(React.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/React.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/React.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/React.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement$1 (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return React.createElement.apply(null, createElementArgArray);
  }

  return React.createElement.apply(null, args);
}

;

var s = {"topBar":"style-module_topBar__3WEff","logo":"style-module_logo__16CxJ","navs":"style-module_navs__3mkCj","navsList":"style-module_navsList__1kcqL","navsListItem":"style-module_navsListItem__27xDP"};

const TopBar = ({ topNavs, logo }) => {
    return (React.createElement("div", { className: s.topBar },
        React.createElement("div", { className: s.logo }, logo),
        React.createElement("div", { className: s.navs },
            React.createElement("ul", { className: s.navsList }, topNavs === null || topNavs === void 0 ? void 0 : topNavs.map((item, index) => {
                let content;
                if ('href' in item) {
                    content = (React.createElement("a", { href: item.href, target: "_blank", className: s.navsListItem }, item.text));
                }
                else {
                    content = (React.createElement(Link, { to: item.path, className: s.navsListItem }, item.text));
                }
                return React.createElement("li", { key: index }, content);
            })))));
};

var s$1 = {"sideMenu":"style-module_sideMenu__i12Ug"};

const SideMenu = ({ data }) => {
    return (React.createElement("ul", { className: s$1.sideMenu }, data.map((item, index) => {
        return (React.createElement("li", { key: index },
            React.createElement(Link, { to: item.path }, item.text)));
    })));
};

var s$2 = {"layout":"style-module_layout__3vPKW","body":"style-module_body__AAr1H","content":"style-module_content__2Czcn"};

/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license http://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */

/**
 * prism-react-renderer:
 * This file has been modified to remove:
 * - globals and window dependency
 * - worker support
 * - highlightAll and other element dependent methods
 * - _.hooks helpers
 * - UMD/node-specific hacks
 * It has also been run through prettier
 */
var Prism = function () {
  var uniqueId = 0;
  var _ = {
    util: {
      encode: function (tokens) {
        if (tokens instanceof Token) {
          return new Token(tokens.type, _.util.encode(tokens.content), tokens.alias);
        } else if (_.util.type(tokens) === "Array") {
          return tokens.map(_.util.encode);
        } else {
          return tokens.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ");
        }
      },
      type: function (o) {
        return Object.prototype.toString.call(o).match(/\[object (\w+)\]/)[1];
      },
      objId: function (obj) {
        if (!obj["__id"]) {
          Object.defineProperty(obj, "__id", {
            value: ++uniqueId
          });
        }

        return obj["__id"];
      },
      // Deep clone a language definition (e.g. to extend it)
      clone: function (o, visited) {
        var type = _.util.type(o);

        visited = visited || {};

        switch (type) {
          case "Object":
            if (visited[_.util.objId(o)]) {
              return visited[_.util.objId(o)];
            }

            var clone = {};
            visited[_.util.objId(o)] = clone;

            for (var key in o) {
              if (o.hasOwnProperty(key)) {
                clone[key] = _.util.clone(o[key], visited);
              }
            }

            return clone;

          case "Array":
            if (visited[_.util.objId(o)]) {
              return visited[_.util.objId(o)];
            }

            var clone = [];
            visited[_.util.objId(o)] = clone;
            o.forEach(function (v, i) {
              clone[i] = _.util.clone(v, visited);
            });
            return clone;
        }

        return o;
      }
    },
    languages: {
      extend: function (id, redef) {
        var lang = _.util.clone(_.languages[id]);

        for (var key in redef) {
          lang[key] = redef[key];
        }

        return lang;
      },

      /**
       * Insert a token before another token in a language literal
       * As this needs to recreate the object (we cannot actually insert before keys in object literals),
       * we cannot just provide an object, we need anobject and a key.
       * @param inside The key (or language id) of the parent
       * @param before The key to insert before. If not provided, the function appends instead.
       * @param insert Object with the key/value pairs to insert
       * @param root The object that contains `inside`. If equal to Prism.languages, it can be omitted.
       */
      insertBefore: function (inside, before, insert, root) {
        root = root || _.languages;
        var grammar = root[inside];

        if (arguments.length == 2) {
          insert = arguments[1];

          for (var newToken in insert) {
            if (insert.hasOwnProperty(newToken)) {
              grammar[newToken] = insert[newToken];
            }
          }

          return grammar;
        }

        var ret = {};

        for (var token in grammar) {
          if (grammar.hasOwnProperty(token)) {
            if (token == before) {
              for (var newToken in insert) {
                if (insert.hasOwnProperty(newToken)) {
                  ret[newToken] = insert[newToken];
                }
              }
            }

            ret[token] = grammar[token];
          }
        } // Update references in other language definitions


        _.languages.DFS(_.languages, function (key, value) {
          if (value === root[inside] && key != inside) {
            this[key] = ret;
          }
        });

        return root[inside] = ret;
      },
      // Traverse a language definition with Depth First Search
      DFS: function (o, callback, type, visited) {
        visited = visited || {};

        for (var i in o) {
          if (o.hasOwnProperty(i)) {
            callback.call(o, i, o[i], type || i);

            if (_.util.type(o[i]) === "Object" && !visited[_.util.objId(o[i])]) {
              visited[_.util.objId(o[i])] = true;

              _.languages.DFS(o[i], callback, null, visited);
            } else if (_.util.type(o[i]) === "Array" && !visited[_.util.objId(o[i])]) {
              visited[_.util.objId(o[i])] = true;

              _.languages.DFS(o[i], callback, i, visited);
            }
          }
        }
      }
    },
    plugins: {},
    highlight: function (text, grammar, language) {
      var env = {
        code: text,
        grammar: grammar,
        language: language
      };
      env.tokens = _.tokenize(env.code, env.grammar);
      return Token.stringify(_.util.encode(env.tokens), env.language);
    },
    matchGrammar: function (text, strarr, grammar, index, startPos, oneshot, target) {
      var Token = _.Token;

      for (var token in grammar) {
        if (!grammar.hasOwnProperty(token) || !grammar[token]) {
          continue;
        }

        if (token == target) {
          return;
        }

        var patterns = grammar[token];
        patterns = _.util.type(patterns) === "Array" ? patterns : [patterns];

        for (var j = 0; j < patterns.length; ++j) {
          var pattern = patterns[j],
              inside = pattern.inside,
              lookbehind = !!pattern.lookbehind,
              greedy = !!pattern.greedy,
              lookbehindLength = 0,
              alias = pattern.alias;

          if (greedy && !pattern.pattern.global) {
            // Without the global flag, lastIndex won't work
            var flags = pattern.pattern.toString().match(/[imuy]*$/)[0];
            pattern.pattern = RegExp(pattern.pattern.source, flags + "g");
          }

          pattern = pattern.pattern || pattern; // Don’t cache length as it changes during the loop

          for (var i = index, pos = startPos; i < strarr.length; pos += strarr[i].length, ++i) {
            var str = strarr[i];

            if (strarr.length > text.length) {
              // Something went terribly wrong, ABORT, ABORT!
              return;
            }

            if (str instanceof Token) {
              continue;
            }

            if (greedy && i != strarr.length - 1) {
              pattern.lastIndex = pos;
              var match = pattern.exec(text);

              if (!match) {
                break;
              }

              var from = match.index + (lookbehind ? match[1].length : 0),
                  to = match.index + match[0].length,
                  k = i,
                  p = pos;

              for (var len = strarr.length; k < len && (p < to || !strarr[k].type && !strarr[k - 1].greedy); ++k) {
                p += strarr[k].length; // Move the index i to the element in strarr that is closest to from

                if (from >= p) {
                  ++i;
                  pos = p;
                }
              } // If strarr[i] is a Token, then the match starts inside another Token, which is invalid


              if (strarr[i] instanceof Token) {
                continue;
              } // Number of tokens to delete and replace with the new match


              delNum = k - i;
              str = text.slice(pos, p);
              match.index -= pos;
            } else {
              pattern.lastIndex = 0;
              var match = pattern.exec(str),
                  delNum = 1;
            }

            if (!match) {
              if (oneshot) {
                break;
              }

              continue;
            }

            if (lookbehind) {
              lookbehindLength = match[1] ? match[1].length : 0;
            }

            var from = match.index + lookbehindLength,
                match = match[0].slice(lookbehindLength),
                to = from + match.length,
                before = str.slice(0, from),
                after = str.slice(to);
            var args = [i, delNum];

            if (before) {
              ++i;
              pos += before.length;
              args.push(before);
            }

            var wrapped = new Token(token, inside ? _.tokenize(match, inside) : match, alias, match, greedy);
            args.push(wrapped);

            if (after) {
              args.push(after);
            }

            Array.prototype.splice.apply(strarr, args);

            if (delNum != 1) {
              _.matchGrammar(text, strarr, grammar, i, pos, true, token);
            }

            if (oneshot) {
              break;
            }
          }
        }
      }
    },
    hooks: {
      add: function () {}
    },
    tokenize: function (text, grammar, language) {
      var strarr = [text];
      var rest = grammar.rest;

      if (rest) {
        for (var token in rest) {
          grammar[token] = rest[token];
        }

        delete grammar.rest;
      }

      _.matchGrammar(text, strarr, grammar, 0, 0, false);

      return strarr;
    }
  };

  var Token = _.Token = function (type, content, alias, matchedStr, greedy) {
    this.type = type;
    this.content = content;
    this.alias = alias; // Copy of the full string this token was created from

    this.length = (matchedStr || "").length | 0;
    this.greedy = !!greedy;
  };

  Token.stringify = function (o, language, parent) {
    if (typeof o == "string") {
      return o;
    }

    if (_.util.type(o) === "Array") {
      return o.map(function (element) {
        return Token.stringify(element, language, o);
      }).join("");
    }

    var env = {
      type: o.type,
      content: Token.stringify(o.content, language, parent),
      tag: "span",
      classes: ["token", o.type],
      attributes: {},
      language: language,
      parent: parent
    };

    if (o.alias) {
      var aliases = _.util.type(o.alias) === "Array" ? o.alias : [o.alias];
      Array.prototype.push.apply(env.classes, aliases);
    }

    var attributes = Object.keys(env.attributes).map(function (name) {
      return name + '="' + (env.attributes[name] || "").replace(/"/g, "&quot;") + '"';
    }).join(" ");
    return "<" + env.tag + ' class="' + env.classes.join(" ") + '"' + (attributes ? " " + attributes : "") + ">" + env.content + "</" + env.tag + ">";
  };

  return _;
}();

/* This content is auto-generated to include some prismjs language components: */

/* "prismjs/components/prism-markup" */

Prism.languages.markup = {
  'comment': /<!--[\s\S]*?-->/,
  'prolog': /<\?[\s\S]+?\?>/,
  'doctype': /<!DOCTYPE[\s\S]+?>/i,
  'cdata': /<!\[CDATA\[[\s\S]*?]]>/i,
  'tag': {
    pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,
    greedy: true,
    inside: {
      'tag': {
        pattern: /^<\/?[^\s>\/]+/i,
        inside: {
          'punctuation': /^<\/?/,
          'namespace': /^[^\s>\/:]+:/
        }
      },
      'attr-value': {
        pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,
        inside: {
          'punctuation': [/^=/, {
            pattern: /^(\s*)["']|["']$/,
            lookbehind: true
          }]
        }
      },
      'punctuation': /\/?>/,
      'attr-name': {
        pattern: /[^\s>\/]+/,
        inside: {
          'namespace': /^[^\s>\/:]+:/
        }
      }
    }
  },
  'entity': /&#?[\da-z]{1,8};/i
};
Prism.languages.markup['tag'].inside['attr-value'].inside['entity'] = Prism.languages.markup['entity']; // Plugin to make entity title show the real entity, idea by Roman Komarov

Prism.hooks.add('wrap', function (env) {
  if (env.type === 'entity') {
    env.attributes['title'] = env.content.replace(/&amp;/, '&');
  }
});
Object.defineProperty(Prism.languages.markup.tag, 'addInlined', {
  /**
   * Adds an inlined language to markup.
   *
   * An example of an inlined language is CSS with `<style>` tags.
   *
   * @param {string} tagName The name of the tag that contains the inlined language. This name will be treated as
   * case insensitive.
   * @param {string} lang The language key.
   * @example
   * addInlined('style', 'css');
   */
  value: function addInlined(tagName, lang) {
    var includedCdataInside = {};
    includedCdataInside['language-' + lang] = {
      pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
      lookbehind: true,
      inside: Prism.languages[lang]
    };
    includedCdataInside['cdata'] = /^<!\[CDATA\[|\]\]>$/i;
    var inside = {
      'included-cdata': {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        inside: includedCdataInside
      }
    };
    inside['language-' + lang] = {
      pattern: /[\s\S]+/,
      inside: Prism.languages[lang]
    };
    var def = {};
    def[tagName] = {
      pattern: RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g, tagName), 'i'),
      lookbehind: true,
      greedy: true,
      inside: inside
    };
    Prism.languages.insertBefore('markup', 'cdata', def);
  }
});
Prism.languages.xml = Prism.languages.extend('markup', {});
Prism.languages.html = Prism.languages.markup;
Prism.languages.mathml = Prism.languages.markup;
Prism.languages.svg = Prism.languages.markup;
/* "prismjs/components/prism-bash" */

(function (Prism) {
  // $ set | grep '^[A-Z][^[:space:]]*=' | cut -d= -f1 | tr '\n' '|'
  // + LC_ALL, RANDOM, REPLY, SECONDS.
  // + make sure PS1..4 are here as they are not always set,
  // - some useless things.
  var envVars = '\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b';
  var insideString = {
    'environment': {
      pattern: RegExp("\\$" + envVars),
      alias: 'constant'
    },
    'variable': [// [0]: Arithmetic Environment
    {
      pattern: /\$?\(\([\s\S]+?\)\)/,
      greedy: true,
      inside: {
        // If there is a $ sign at the beginning highlight $(( and )) as variable
        'variable': [{
          pattern: /(^\$\(\([\s\S]+)\)\)/,
          lookbehind: true
        }, /^\$\(\(/],
        'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee]-?\d+)?/,
        // Operators according to https://www.gnu.org/software/bash/manual/bashref.html#Shell-Arithmetic
        'operator': /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
        // If there is no $ sign at the beginning highlight (( and )) as punctuation
        'punctuation': /\(\(?|\)\)?|,|;/
      }
    }, // [1]: Command Substitution
    {
      pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
      greedy: true,
      inside: {
        'variable': /^\$\(|^`|\)$|`$/
      }
    }, // [2]: Brace expansion
    {
      pattern: /\$\{[^}]+\}/,
      greedy: true,
      inside: {
        'operator': /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
        'punctuation': /[\[\]]/,
        'environment': {
          pattern: RegExp("(\\{)" + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      }
    }, /\$(?:\w+|[#?*!@$])/],
    // Escape sequences from echo and printf's manuals, and escaped quotes.
    'entity': /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/
  };
  Prism.languages.bash = {
    'shebang': {
      pattern: /^#!\s*\/.*/,
      alias: 'important'
    },
    'comment': {
      pattern: /(^|[^"{\\$])#.*/,
      lookbehind: true
    },
    'function-name': [// a) function foo {
    // b) foo() {
    // c) function foo() {
    // but not “foo {”
    {
      // a) and c)
      pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
      lookbehind: true,
      alias: 'function'
    }, {
      // b)
      pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/,
      alias: 'function'
    }],
    // Highlight variable names as variables in for and select beginnings.
    'for-or-select': {
      pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
      alias: 'variable',
      lookbehind: true
    },
    // Highlight variable names as variables in the left-hand part
    // of assignments (“=” and “+=”).
    'assign-left': {
      pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
      inside: {
        'environment': {
          pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + envVars),
          lookbehind: true,
          alias: 'constant'
        }
      },
      alias: 'variable',
      lookbehind: true
    },
    'string': [// Support for Here-documents https://en.wikipedia.org/wiki/Here_document
    {
      pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\2/,
      lookbehind: true,
      greedy: true,
      inside: insideString
    }, // Here-document with quotes around the tag
    // → No expansion (so no “inside”).
    {
      pattern: /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s*(?:\r?\n|\r)(?:[\s\S])*?(?:\r?\n|\r)\3/,
      lookbehind: true,
      greedy: true
    }, // “Normal” string
    {
      pattern: /(["'])(?:\\[\s\S]|\$\([^)]+\)|`[^`]+`|(?!\1)[^\\])*\1/,
      greedy: true,
      inside: insideString
    }],
    'environment': {
      pattern: RegExp("\\$?" + envVars),
      alias: 'constant'
    },
    'variable': insideString.variable,
    'function': {
      pattern: /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'keyword': {
      pattern: /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    // https://www.gnu.org/software/bash/manual/html_node/Shell-Builtin-Commands.html
    'builtin': {
      pattern: /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
      lookbehind: true,
      // Alias added to make those easier to distinguish from strings.
      alias: 'class-name'
    },
    'boolean': {
      pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
      lookbehind: true
    },
    'file-descriptor': {
      pattern: /\B&\d\b/,
      alias: 'important'
    },
    'operator': {
      // Lots of redirections here, but not just that.
      pattern: /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
      inside: {
        'file-descriptor': {
          pattern: /^\d/,
          alias: 'important'
        }
      }
    },
    'punctuation': /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
    'number': {
      pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
      lookbehind: true
    }
  };
  /* Patterns in command substitution. */

  var toBeCopied = ['comment', 'function-name', 'for-or-select', 'assign-left', 'string', 'environment', 'function', 'keyword', 'builtin', 'boolean', 'file-descriptor', 'operator', 'punctuation', 'number'];
  var inside = insideString.variable[1].inside;

  for (var i = 0; i < toBeCopied.length; i++) {
    inside[toBeCopied[i]] = Prism.languages.bash[toBeCopied[i]];
  }

  Prism.languages.shell = Prism.languages.bash;
})(Prism);
/* "prismjs/components/prism-clike" */


Prism.languages.clike = {
  'comment': [{
    pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
    lookbehind: true
  }, {
    pattern: /(^|[^\\:])\/\/.*/,
    lookbehind: true,
    greedy: true
  }],
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  'class-name': {
    pattern: /((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[\w.\\]+/i,
    lookbehind: true,
    inside: {
      punctuation: /[.\\]/
    }
  },
  'keyword': /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
  'boolean': /\b(?:true|false)\b/,
  'function': /\w+(?=\()/,
  'number': /\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,
  'operator': /--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,
  'punctuation': /[{}[\];(),.:]/
};
/* "prismjs/components/prism-c" */

Prism.languages.c = Prism.languages.extend('clike', {
  'class-name': {
    pattern: /(\b(?:enum|struct)\s+)\w+/,
    lookbehind: true
  },
  'keyword': /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
  'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
  'number': /(?:\b0x(?:[\da-f]+\.?[\da-f]*|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?)[ful]*/i
});
Prism.languages.insertBefore('c', 'string', {
  'macro': {
    // allow for multiline macro definitions
    // spaces after the # character compile fine with gcc
    pattern: /(^\s*)#\s*[a-z]+(?:[^\r\n\\]|\\(?:\r\n|[\s\S]))*/im,
    lookbehind: true,
    alias: 'property',
    inside: {
      // highlight the path of the include statement as a string
      'string': {
        pattern: /(#\s*include\s*)(?:<.+?>|("|')(?:\\?.)+?\2)/,
        lookbehind: true
      },
      // highlight macro directives as keywords
      'directive': {
        pattern: /(#\s*)\b(?:define|defined|elif|else|endif|error|ifdef|ifndef|if|import|include|line|pragma|undef|using)\b/,
        lookbehind: true,
        alias: 'keyword'
      }
    }
  },
  // highlight predefined macros as constants
  'constant': /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/
});
delete Prism.languages.c['boolean'];
/* "prismjs/components/prism-cpp" */

Prism.languages.cpp = Prism.languages.extend('c', {
  'class-name': {
    pattern: /(\b(?:class|enum|struct)\s+)\w+/,
    lookbehind: true
  },
  'keyword': /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
  'number': {
    pattern: /(?:\b0b[01']+|\b0x(?:[\da-f']+\.?[\da-f']*|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+\.?[\d']*|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]*/i,
    greedy: true
  },
  'operator': />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
  'boolean': /\b(?:true|false)\b/
});
Prism.languages.insertBefore('cpp', 'string', {
  'raw-string': {
    pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
    alias: 'string',
    greedy: true
  }
});
/* "prismjs/components/prism-css" */

(function (Prism) {
  var string = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
  Prism.languages.css = {
    'comment': /\/\*[\s\S]*?\*\//,
    'atrule': {
      pattern: /@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,
      inside: {
        'rule': /@[\w-]+/ // See rest below

      }
    },
    'url': {
      pattern: RegExp('url\\((?:' + string.source + '|[^\n\r()]*)\\)', 'i'),
      inside: {
        'function': /^url/i,
        'punctuation': /^\(|\)$/
      }
    },
    'selector': RegExp('[^{}\\s](?:[^{};"\']|' + string.source + ')*?(?=\\s*\\{)'),
    'string': {
      pattern: string,
      greedy: true
    },
    'property': /[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,
    'important': /!important\b/i,
    'function': /[-a-z0-9]+(?=\()/i,
    'punctuation': /[(){};:,]/
  };
  Prism.languages.css['atrule'].inside.rest = Prism.languages.css;
  var markup = Prism.languages.markup;

  if (markup) {
    markup.tag.addInlined('style', 'css');
    Prism.languages.insertBefore('inside', 'attr-value', {
      'style-attr': {
        pattern: /\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,
        inside: {
          'attr-name': {
            pattern: /^\s*style/i,
            inside: markup.tag.inside
          },
          'punctuation': /^\s*=\s*['"]|['"]\s*$/,
          'attr-value': {
            pattern: /.+/i,
            inside: Prism.languages.css
          }
        },
        alias: 'language-css'
      }
    }, markup.tag);
  }
})(Prism);
/* "prismjs/components/prism-css-extras" */


Prism.languages.css.selector = {
  pattern: Prism.languages.css.selector,
  inside: {
    'pseudo-element': /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
    'pseudo-class': /:[-\w]+/,
    'class': /\.[-:.\w]+/,
    'id': /#[-:.\w]+/,
    'attribute': {
      pattern: /\[(?:[^[\]"']|("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1)*\]/,
      greedy: true,
      inside: {
        'punctuation': /^\[|\]$/,
        'case-sensitivity': {
          pattern: /(\s)[si]$/i,
          lookbehind: true,
          alias: 'keyword'
        },
        'namespace': {
          pattern: /^(\s*)[-*\w\xA0-\uFFFF]*\|(?!=)/,
          lookbehind: true,
          inside: {
            'punctuation': /\|$/
          }
        },
        'attribute': {
          pattern: /^(\s*)[-\w\xA0-\uFFFF]+/,
          lookbehind: true
        },
        'value': [/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/, {
          pattern: /(=\s*)[-\w\xA0-\uFFFF]+(?=\s*$)/,
          lookbehind: true
        }],
        'operator': /[|~*^$]?=/
      }
    },
    'n-th': [{
      pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
      lookbehind: true,
      inside: {
        'number': /[\dn]+/,
        'operator': /[+-]/
      }
    }, {
      pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
      lookbehind: true
    }],
    'punctuation': /[()]/
  }
};
Prism.languages.insertBefore('css', 'property', {
  'variable': {
    pattern: /(^|[^-\w\xA0-\uFFFF])--[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*/i,
    lookbehind: true
  }
});
Prism.languages.insertBefore('css', 'function', {
  'operator': {
    pattern: /(\s)[+\-*\/](?=\s)/,
    lookbehind: true
  },
  'hexcode': /#[\da-f]{3,8}/i,
  'entity': /\\[\da-f]{1,8}/i,
  'unit': {
    pattern: /(\d)(?:%|[a-z]+)/,
    lookbehind: true
  },
  'number': /-?[\d.]+/
});
/* "prismjs/components/prism-javascript" */

Prism.languages.javascript = Prism.languages.extend('clike', {
  'class-name': [Prism.languages.clike['class-name'], {
    pattern: /(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,
    lookbehind: true
  }],
  'keyword': [{
    pattern: /((?:^|})\s*)(?:catch|finally)\b/,
    lookbehind: true
  }, {
    pattern: /(^|[^.])\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
    lookbehind: true
  }],
  'number': /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
  // Allow for all non-ASCII characters (See http://stackoverflow.com/a/2008444)
  'function': /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
  'operator': /-[-=]?|\+[+=]?|!=?=?|<<?=?|>>?>?=?|=(?:==?|>)?|&[&=]?|\|[|=]?|\*\*?=?|\/=?|~|\^=?|%=?|\?|\.{3}/
});
Prism.languages.javascript['class-name'][0].pattern = /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/;
Prism.languages.insertBefore('javascript', 'keyword', {
  'regex': {
    pattern: /((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=\s*($|[\r\n,.;})\]]))/,
    lookbehind: true,
    greedy: true
  },
  // This must be declared before keyword because we use "function" inside the look-forward
  'function-variable': {
    pattern: /#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,
    alias: 'function'
  },
  'parameter': [{
    pattern: /(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,
    inside: Prism.languages.javascript
  }, {
    pattern: /(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }, {
    pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,
    lookbehind: true,
    inside: Prism.languages.javascript
  }],
  'constant': /\b[A-Z](?:[A-Z_]|\dx?)*\b/
});
Prism.languages.insertBefore('javascript', 'string', {
  'template-string': {
    pattern: /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
    greedy: true,
    inside: {
      'template-punctuation': {
        pattern: /^`|`$/,
        alias: 'string'
      },
      'interpolation': {
        pattern: /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
        lookbehind: true,
        inside: {
          'interpolation-punctuation': {
            pattern: /^\${|}$/,
            alias: 'punctuation'
          },
          rest: Prism.languages.javascript
        }
      },
      'string': /[\s\S]+/
    }
  }
});

if (Prism.languages.markup) {
  Prism.languages.markup.tag.addInlined('script', 'javascript');
}

Prism.languages.js = Prism.languages.javascript;
/* "prismjs/components/prism-jsx" */

(function (Prism) {
  var javascript = Prism.util.clone(Prism.languages.javascript);
  Prism.languages.jsx = Prism.languages.extend('markup', javascript);
  Prism.languages.jsx.tag.pattern = /<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}))*\s*\/?)?>/i;
  Prism.languages.jsx.tag.inside['tag'].pattern = /^<\/?[^\s>\/]*/i;
  Prism.languages.jsx.tag.inside['attr-value'].pattern = /=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i;
  Prism.languages.jsx.tag.inside['tag'].inside['class-name'] = /^[A-Z]\w*(?:\.[A-Z]\w*)*$/;
  Prism.languages.insertBefore('inside', 'attr-name', {
    'spread': {
      pattern: /\{\.{3}[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\}/,
      inside: {
        'punctuation': /\.{3}|[{}.]/,
        'attr-value': /\w+/
      }
    }
  }, Prism.languages.jsx.tag);
  Prism.languages.insertBefore('inside', 'attr-value', {
    'script': {
      // Allow for two levels of nesting
      pattern: /=(\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,
      inside: {
        'script-punctuation': {
          pattern: /^=(?={)/,
          alias: 'punctuation'
        },
        rest: Prism.languages.jsx
      },
      'alias': 'language-javascript'
    }
  }, Prism.languages.jsx.tag); // The following will handle plain text inside tags

  var stringifyToken = function (token) {
    if (!token) {
      return '';
    }

    if (typeof token === 'string') {
      return token;
    }

    if (typeof token.content === 'string') {
      return token.content;
    }

    return token.content.map(stringifyToken).join('');
  };

  var walkTokens = function (tokens) {
    var openedTags = [];

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];
      var notTagNorBrace = false;

      if (typeof token !== 'string') {
        if (token.type === 'tag' && token.content[0] && token.content[0].type === 'tag') {
          // We found a tag, now find its kind
          if (token.content[0].content[0].content === '</') {
            // Closing tag
            if (openedTags.length > 0 && openedTags[openedTags.length - 1].tagName === stringifyToken(token.content[0].content[1])) {
              // Pop matching opening tag
              openedTags.pop();
            }
          } else {
            if (token.content[token.content.length - 1].content === '/>') ; else {
              // Opening tag
              openedTags.push({
                tagName: stringifyToken(token.content[0].content[1]),
                openedBraces: 0
              });
            }
          }
        } else if (openedTags.length > 0 && token.type === 'punctuation' && token.content === '{') {
          // Here we might have entered a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces++;
        } else if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces > 0 && token.type === 'punctuation' && token.content === '}') {
          // Here we might have left a JSX context inside a tag
          openedTags[openedTags.length - 1].openedBraces--;
        } else {
          notTagNorBrace = true;
        }
      }

      if (notTagNorBrace || typeof token === 'string') {
        if (openedTags.length > 0 && openedTags[openedTags.length - 1].openedBraces === 0) {
          // Here we are inside a tag, and not inside a JSX context.
          // That's plain text: drop any tokens matched.
          var plainText = stringifyToken(token); // And merge text with adjacent text

          if (i < tokens.length - 1 && (typeof tokens[i + 1] === 'string' || tokens[i + 1].type === 'plain-text')) {
            plainText += stringifyToken(tokens[i + 1]);
            tokens.splice(i + 1, 1);
          }

          if (i > 0 && (typeof tokens[i - 1] === 'string' || tokens[i - 1].type === 'plain-text')) {
            plainText = stringifyToken(tokens[i - 1]) + plainText;
            tokens.splice(i - 1, 1);
            i--;
          }

          tokens[i] = new Prism.Token('plain-text', plainText, null, plainText);
        }
      }

      if (token.content && typeof token.content !== 'string') {
        walkTokens(token.content);
      }
    }
  };

  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'jsx' && env.language !== 'tsx') {
      return;
    }

    walkTokens(env.tokens);
  });
})(Prism);
/* "prismjs/components/prism-javadoclike" */


(function (Prism) {
  var javaDocLike = Prism.languages.javadoclike = {
    'parameter': {
      pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*@(?:param|arg|arguments)\s+)\w+/m,
      lookbehind: true
    },
    'keyword': {
      // keywords are the first word in a line preceded be an `@` or surrounded by curly braces.
      // @word, {@word}
      pattern: /(^\s*(?:\/{3}|\*|\/\*\*)\s*|\{)@[a-z][a-zA-Z-]+\b/m,
      lookbehind: true
    },
    'punctuation': /[{}]/
  };
  /**
   * Adds doc comment support to the given language and calls a given callback on each doc comment pattern.
   *
   * @param {string} lang the language add doc comment support to.
   * @param {(pattern: {inside: {rest: undefined}}) => void} callback the function called with each doc comment pattern as argument.
   */

  function docCommentSupport(lang, callback) {
    var tokenName = 'doc-comment';
    var grammar = Prism.languages[lang];

    if (!grammar) {
      return;
    }

    var token = grammar[tokenName];

    if (!token) {
      // add doc comment: /** */
      var definition = {};
      definition[tokenName] = {
        pattern: /(^|[^\\])\/\*\*[^/][\s\S]*?(?:\*\/|$)/,
        alias: 'comment'
      };
      grammar = Prism.languages.insertBefore(lang, 'comment', definition);
      token = grammar[tokenName];
    }

    if (token instanceof RegExp) {
      // convert regex to object
      token = grammar[tokenName] = {
        pattern: token
      };
    }

    if (Array.isArray(token)) {
      for (var i = 0, l = token.length; i < l; i++) {
        if (token[i] instanceof RegExp) {
          token[i] = {
            pattern: token[i]
          };
        }

        callback(token[i]);
      }
    } else {
      callback(token);
    }
  }
  /**
   * Adds doc-comment support to the given languages for the given documentation language.
   *
   * @param {string[]|string} languages
   * @param {Object} docLanguage
   */


  function addSupport(languages, docLanguage) {
    if (typeof languages === 'string') {
      languages = [languages];
    }

    languages.forEach(function (lang) {
      docCommentSupport(lang, function (pattern) {
        if (!pattern.inside) {
          pattern.inside = {};
        }

        pattern.inside.rest = docLanguage;
      });
    });
  }

  Object.defineProperty(javaDocLike, 'addSupport', {
    value: addSupport
  });
  javaDocLike.addSupport(['java', 'javascript', 'php'], javaDocLike);
})(Prism);
/* "prismjs/components/prism-java" */


(function (Prism) {
  var keywords = /\b(?:abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while|var|null|exports|module|open|opens|provides|requires|to|transitive|uses|with)\b/; // based on the java naming conventions

  var className = /\b[A-Z](?:\w*[a-z]\w*)?\b/;
  Prism.languages.java = Prism.languages.extend('clike', {
    'class-name': [className, // variables and parameters
    // this to support class names (or generic parameters) which do not contain a lower case letter (also works for methods)
    /\b[A-Z]\w*(?=\s+\w+\s*[;,=())])/],
    'keyword': keywords,
    'function': [Prism.languages.clike.function, {
      pattern: /(\:\:)[a-z_]\w*/,
      lookbehind: true
    }],
    'number': /\b0b[01][01_]*L?\b|\b0x[\da-f_]*\.?[\da-f_p+-]+\b|(?:\b\d[\d_]*\.?[\d_]*|\B\.\d[\d_]*)(?:e[+-]?\d[\d_]*)?[dfl]?/i,
    'operator': {
      pattern: /(^|[^.])(?:<<=?|>>>?=?|->|([-+&|])\2|[?:~]|[-+*/%&|^!=<>]=?)/m,
      lookbehind: true
    }
  });
  Prism.languages.insertBefore('java', 'class-name', {
    'annotation': {
      alias: 'punctuation',
      pattern: /(^|[^.])@\w+/,
      lookbehind: true
    },
    'namespace': {
      pattern: /(\b(?:exports|import(?:\s+static)?|module|open|opens|package|provides|requires|to|transitive|uses|with)\s+)[a-z]\w*(\.[a-z]\w*)+/,
      lookbehind: true,
      inside: {
        'punctuation': /\./
      }
    },
    'generics': {
      pattern: /<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<(?:[\w\s,.&?]|<[\w\s,.&?]*>)*>)*>)*>/,
      inside: {
        'class-name': className,
        'keyword': keywords,
        'punctuation': /[<>(),.:]/,
        'operator': /[?&|]/
      }
    }
  });
})(Prism);
/* "prismjs/components/prism-markup-templating" */


(function (Prism) {
  /**
   * Returns the placeholder for the given language id and index.
   *
   * @param {string} language
   * @param {string|number} index
   * @returns {string}
   */
  function getPlaceholder(language, index) {
    return '___' + language.toUpperCase() + index + '___';
  }

  Object.defineProperties(Prism.languages['markup-templating'] = {}, {
    buildPlaceholders: {
      /**
       * Tokenize all inline templating expressions matching `placeholderPattern`.
       *
       * If `replaceFilter` is provided, only matches of `placeholderPattern` for which `replaceFilter` returns
       * `true` will be replaced.
       *
       * @param {object} env The environment of the `before-tokenize` hook.
       * @param {string} language The language id.
       * @param {RegExp} placeholderPattern The matches of this pattern will be replaced by placeholders.
       * @param {(match: string) => boolean} [replaceFilter]
       */
      value: function (env, language, placeholderPattern, replaceFilter) {
        if (env.language !== language) {
          return;
        }

        var tokenStack = env.tokenStack = [];
        env.code = env.code.replace(placeholderPattern, function (match) {
          if (typeof replaceFilter === 'function' && !replaceFilter(match)) {
            return match;
          }

          var i = tokenStack.length;
          var placeholder; // Check for existing strings

          while (env.code.indexOf(placeholder = getPlaceholder(language, i)) !== -1) {
            ++i;
          } // Create a sparse array


          tokenStack[i] = match;
          return placeholder;
        }); // Switch the grammar to markup

        env.grammar = Prism.languages.markup;
      }
    },
    tokenizePlaceholders: {
      /**
       * Replace placeholders with proper tokens after tokenizing.
       *
       * @param {object} env The environment of the `after-tokenize` hook.
       * @param {string} language The language id.
       */
      value: function (env, language) {
        if (env.language !== language || !env.tokenStack) {
          return;
        } // Switch the grammar back


        env.grammar = Prism.languages[language];
        var j = 0;
        var keys = Object.keys(env.tokenStack);

        function walkTokens(tokens) {
          for (var i = 0; i < tokens.length; i++) {
            // all placeholders are replaced already
            if (j >= keys.length) {
              break;
            }

            var token = tokens[i];

            if (typeof token === 'string' || token.content && typeof token.content === 'string') {
              var k = keys[j];
              var t = env.tokenStack[k];
              var s = typeof token === 'string' ? token : token.content;
              var placeholder = getPlaceholder(language, k);
              var index = s.indexOf(placeholder);

              if (index > -1) {
                ++j;
                var before = s.substring(0, index);
                var middle = new Prism.Token(language, Prism.tokenize(t, env.grammar), 'language-' + language, t);
                var after = s.substring(index + placeholder.length);
                var replacement = [];

                if (before) {
                  replacement.push.apply(replacement, walkTokens([before]));
                }

                replacement.push(middle);

                if (after) {
                  replacement.push.apply(replacement, walkTokens([after]));
                }

                if (typeof token === 'string') {
                  tokens.splice.apply(tokens, [i, 1].concat(replacement));
                } else {
                  token.content = replacement;
                }
              }
            } else if (token.content
            /* && typeof token.content !== 'string' */
            ) {
                walkTokens(token.content);
              }
          }

          return tokens;
        }

        walkTokens(env.tokens);
      }
    }
  });
})(Prism);
/* "prismjs/components/prism-php" */

/**
 * Original by Aaron Harun: http://aahacreative.com/2012/07/31/php-syntax-highlighting-prism/
 * Modified by Miles Johnson: http://milesj.me
 *
 * Supports the following:
 * 		- Extends clike syntax
 * 		- Support for PHP 5.3+ (namespaces, traits, generators, etc)
 * 		- Smarter constant and function matching
 *
 * Adds the following new token classes:
 * 		constant, delimiter, variable, function, package
 */


(function (Prism) {
  Prism.languages.php = Prism.languages.extend('clike', {
    'keyword': /\b(?:__halt_compiler|abstract|and|array|as|break|callable|case|catch|class|clone|const|continue|declare|default|die|do|echo|else|elseif|empty|enddeclare|endfor|endforeach|endif|endswitch|endwhile|eval|exit|extends|final|finally|for|foreach|function|global|goto|if|implements|include|include_once|instanceof|insteadof|interface|isset|list|namespace|new|or|parent|print|private|protected|public|require|require_once|return|static|switch|throw|trait|try|unset|use|var|while|xor|yield)\b/i,
    'boolean': {
      pattern: /\b(?:false|true)\b/i,
      alias: 'constant'
    },
    'constant': [/\b[A-Z_][A-Z0-9_]*\b/, /\b(?:null)\b/i],
    'comment': {
      pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    }
  });
  Prism.languages.insertBefore('php', 'string', {
    'shell-comment': {
      pattern: /(^|[^\\])#.*/,
      lookbehind: true,
      alias: 'comment'
    }
  });
  Prism.languages.insertBefore('php', 'comment', {
    'delimiter': {
      pattern: /\?>$|^<\?(?:php(?=\s)|=)?/i,
      alias: 'important'
    }
  });
  Prism.languages.insertBefore('php', 'keyword', {
    'variable': /\$+(?:\w+\b|(?={))/i,
    'package': {
      pattern: /(\\|namespace\s+|use\s+)[\w\\]+/,
      lookbehind: true,
      inside: {
        punctuation: /\\/
      }
    }
  }); // Must be defined after the function pattern

  Prism.languages.insertBefore('php', 'operator', {
    'property': {
      pattern: /(->)[\w]+/,
      lookbehind: true
    }
  });
  var string_interpolation = {
    pattern: /{\$(?:{(?:{[^{}]+}|[^{}]+)}|[^{}])+}|(^|[^\\{])\$+(?:\w+(?:\[.+?]|->\w+)*)/,
    lookbehind: true,
    inside: {
      rest: Prism.languages.php
    }
  };
  Prism.languages.insertBefore('php', 'string', {
    'nowdoc-string': {
      pattern: /<<<'([^']+)'(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;/,
      greedy: true,
      alias: 'string',
      inside: {
        'delimiter': {
          pattern: /^<<<'[^']+'|[a-z_]\w*;$/i,
          alias: 'symbol',
          inside: {
            'punctuation': /^<<<'?|[';]$/
          }
        }
      }
    },
    'heredoc-string': {
      pattern: /<<<(?:"([^"]+)"(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\1;|([a-z_]\w*)(?:\r\n?|\n)(?:.*(?:\r\n?|\n))*?\2;)/i,
      greedy: true,
      alias: 'string',
      inside: {
        'delimiter': {
          pattern: /^<<<(?:"[^"]+"|[a-z_]\w*)|[a-z_]\w*;$/i,
          alias: 'symbol',
          inside: {
            'punctuation': /^<<<"?|[";]$/
          }
        },
        'interpolation': string_interpolation // See below

      }
    },
    'single-quoted-string': {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true,
      alias: 'string'
    },
    'double-quoted-string': {
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      alias: 'string',
      inside: {
        'interpolation': string_interpolation // See below

      }
    }
  }); // The different types of PHP strings "replace" the C-like standard string

  delete Prism.languages.php['string'];
  Prism.hooks.add('before-tokenize', function (env) {
    if (!/<\?/.test(env.code)) {
      return;
    }

    var phpPattern = /<\?(?:[^"'/#]|\/(?![*/])|("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|(?:\/\/|#)(?:[^?\n\r]|\?(?!>))*|\/\*[\s\S]*?(?:\*\/|$))*?(?:\?>|$)/ig;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'php', phpPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'php');
  });
})(Prism);
/* "prismjs/components/prism-jsdoc" */


(function (Prism) {
  var javascript = Prism.languages.javascript;
  var type = /{(?:[^{}]|{(?:[^{}]|{[^{}]*})*})+}/.source;
  var parameterPrefix = '(@(?:param|arg|argument|property)\\s+(?:' + type + '\\s+)?)';
  Prism.languages.jsdoc = Prism.languages.extend('javadoclike', {
    'parameter': {
      // @param {string} foo - foo bar
      pattern: RegExp(parameterPrefix + /[$\w\xA0-\uFFFF.]+(?=\s|$)/.source),
      lookbehind: true,
      inside: {
        'punctuation': /\./
      }
    }
  });
  Prism.languages.insertBefore('jsdoc', 'keyword', {
    'optional-parameter': {
      // @param {string} [baz.foo="bar"] foo bar
      pattern: RegExp(parameterPrefix + /\[[$\w\xA0-\uFFFF.]+(?:=[^[\]]+)?\](?=\s|$)/.source),
      lookbehind: true,
      inside: {
        'parameter': {
          pattern: /(^\[)[$\w\xA0-\uFFFF\.]+/,
          lookbehind: true,
          inside: {
            'punctuation': /\./
          }
        },
        'code': {
          pattern: /(=)[\s\S]*(?=\]$)/,
          lookbehind: true,
          inside: javascript,
          alias: 'language-javascript'
        },
        'punctuation': /[=[\]]/
      }
    },
    'class-name': [{
      pattern: RegExp('(@[a-z]+\\s+)' + type),
      lookbehind: true,
      inside: {
        'punctuation': /[.,:?=<>|{}()[\]]/
      }
    }, {
      pattern: /(@(?:augments|extends|class|interface|memberof!?|this)\s+)[A-Z]\w*(?:\.[A-Z]\w*)*/,
      lookbehind: true,
      inside: {
        'punctuation': /\./
      }
    }],
    'example': {
      pattern: /(@example\s+)[^@]+?(?=\s*(?:\*\s*)?(?:@\w|\*\/))/,
      lookbehind: true,
      inside: {
        'code': {
          pattern: /^(\s*(?:\*\s*)?).+$/m,
          lookbehind: true,
          inside: javascript,
          alias: 'language-javascript'
        }
      }
    }
  });
  Prism.languages.javadoclike.addSupport('javascript', Prism.languages.jsdoc);
})(Prism);
/* "prismjs/components/prism-actionscript" */


Prism.languages.actionscript = Prism.languages.extend('javascript', {
  'keyword': /\b(?:as|break|case|catch|class|const|default|delete|do|else|extends|finally|for|function|if|implements|import|in|instanceof|interface|internal|is|native|new|null|package|private|protected|public|return|super|switch|this|throw|try|typeof|use|var|void|while|with|dynamic|each|final|get|include|namespace|native|override|set|static)\b/,
  'operator': /\+\+|--|(?:[+\-*\/%^]|&&?|\|\|?|<<?|>>?>?|[!=]=?)=?|[~?@]/
});
Prism.languages.actionscript['class-name'].alias = 'function';

if (Prism.languages.markup) {
  Prism.languages.insertBefore('actionscript', 'string', {
    'xml': {
      pattern: /(^|[^.])<\/?\w+(?:\s+[^\s>\/=]+=("|')(?:\\[\s\S]|(?!\2)[^\\])*\2)*\s*\/?>/,
      lookbehind: true,
      inside: {
        rest: Prism.languages.markup
      }
    }
  });
}
/* "prismjs/components/prism-coffeescript" */


(function (Prism) {
  // Ignore comments starting with { to privilege string interpolation highlighting
  var comment = /#(?!\{).+/,
      interpolation = {
    pattern: /#\{[^}]+\}/,
    alias: 'variable'
  };
  Prism.languages.coffeescript = Prism.languages.extend('javascript', {
    'comment': comment,
    'string': [// Strings are multiline
    {
      pattern: /'(?:\\[\s\S]|[^\\'])*'/,
      greedy: true
    }, {
      // Strings are multiline
      pattern: /"(?:\\[\s\S]|[^\\"])*"/,
      greedy: true,
      inside: {
        'interpolation': interpolation
      }
    }],
    'keyword': /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
    'class-member': {
      pattern: /@(?!\d)\w+/,
      alias: 'variable'
    }
  });
  Prism.languages.insertBefore('coffeescript', 'comment', {
    'multiline-comment': {
      pattern: /###[\s\S]+?###/,
      alias: 'comment'
    },
    // Block regexp can contain comments and interpolation
    'block-regex': {
      pattern: /\/{3}[\s\S]*?\/{3}/,
      alias: 'regex',
      inside: {
        'comment': comment,
        'interpolation': interpolation
      }
    }
  });
  Prism.languages.insertBefore('coffeescript', 'string', {
    'inline-javascript': {
      pattern: /`(?:\\[\s\S]|[^\\`])*`/,
      inside: {
        'delimiter': {
          pattern: /^`|`$/,
          alias: 'punctuation'
        },
        rest: Prism.languages.javascript
      }
    },
    // Block strings
    'multiline-string': [{
      pattern: /'''[\s\S]*?'''/,
      greedy: true,
      alias: 'string'
    }, {
      pattern: /"""[\s\S]*?"""/,
      greedy: true,
      alias: 'string',
      inside: {
        interpolation: interpolation
      }
    }]
  });
  Prism.languages.insertBefore('coffeescript', 'keyword', {
    // Object property
    'property': /(?!\d)\w+(?=\s*:(?!:))/
  });
  delete Prism.languages.coffeescript['template-string'];
  Prism.languages.coffee = Prism.languages.coffeescript;
})(Prism);
/* "prismjs/components/prism-js-extras" */


(function (Prism) {
  Prism.languages.insertBefore('javascript', 'function-variable', {
    'method-variable': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function-variable'].pattern.source),
      lookbehind: true,
      alias: ['function-variable', 'method', 'function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'function', {
    'method': {
      pattern: RegExp('(\\.\\s*)' + Prism.languages.javascript['function'].source),
      lookbehind: true,
      alias: ['function', 'property-access']
    }
  });
  Prism.languages.insertBefore('javascript', 'constant', {
    'known-class-name': [{
      // standard built-ins
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
      pattern: /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
      alias: 'class-name'
    }, {
      // errors
      pattern: /\b(?:[A-Z]\w*)Error\b/,
      alias: 'class-name'
    }]
  });
  Prism.languages.javascript['keyword'].unshift({
    pattern: /\b(?:as|default|export|from|import)\b/,
    alias: 'module'
  }, {
    pattern: /\bnull\b/,
    alias: ['null', 'nil']
  }, {
    pattern: /\bundefined\b/,
    alias: 'nil'
  });
  Prism.languages.insertBefore('javascript', 'operator', {
    'spread': {
      pattern: /\.{3}/,
      alias: 'operator'
    },
    'arrow': {
      pattern: /=>/,
      alias: 'operator'
    }
  });
  Prism.languages.insertBefore('javascript', 'punctuation', {
    'property-access': {
      pattern: /(\.\s*)#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*/,
      lookbehind: true
    },
    'maybe-class-name': {
      pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
      lookbehind: true
    },
    'dom': {
      // this contains only a few commonly used DOM variables
      pattern: /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
      alias: 'variable'
    },
    'console': {
      pattern: /\bconsole(?=\s*\.)/,
      alias: 'class-name'
    }
  }); // add 'maybe-class-name' to tokens which might be a class name

  var maybeClassNameTokens = ['function', 'function-variable', 'method', 'method-variable', 'property-access'];

  for (var i = 0; i < maybeClassNameTokens.length; i++) {
    var token = maybeClassNameTokens[i];
    var value = Prism.languages.javascript[token]; // convert regex to object

    if (Prism.util.type(value) === 'RegExp') {
      value = Prism.languages.javascript[token] = {
        pattern: value
      };
    } // keep in mind that we don't support arrays


    var inside = value.inside || {};
    value.inside = inside;
    inside['maybe-class-name'] = /^[A-Z][\s\S]*/;
  }
})(Prism);
/* "prismjs/components/prism-flow" */


(function (Prism) {
  Prism.languages.flow = Prism.languages.extend('javascript', {});
  Prism.languages.insertBefore('flow', 'keyword', {
    'type': [{
      pattern: /\b(?:[Nn]umber|[Ss]tring|[Bb]oolean|Function|any|mixed|null|void)\b/,
      alias: 'tag'
    }]
  });
  Prism.languages.flow['function-variable'].pattern = /[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=\s*(?:function\b|(?:\([^()]*\)(?:\s*:\s*\w+)?|[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/i;
  delete Prism.languages.flow['parameter'];
  Prism.languages.insertBefore('flow', 'operator', {
    'flow-punctuation': {
      pattern: /\{\||\|\}/,
      alias: 'punctuation'
    }
  });

  if (!Array.isArray(Prism.languages.flow.keyword)) {
    Prism.languages.flow.keyword = [Prism.languages.flow.keyword];
  }

  Prism.languages.flow.keyword.unshift({
    pattern: /(^|[^$]\b)(?:type|opaque|declare|Class)\b(?!\$)/,
    lookbehind: true
  }, {
    pattern: /(^|[^$]\B)\$(?:await|Diff|Exact|Keys|ObjMap|PropertyType|Shape|Record|Supertype|Subtype|Enum)\b(?!\$)/,
    lookbehind: true
  });
})(Prism);
/* "prismjs/components/prism-n4js" */


Prism.languages.n4js = Prism.languages.extend('javascript', {
  // Keywords from N4JS language spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html
  'keyword': /\b(?:any|Array|boolean|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|module|new|null|number|package|private|protected|public|return|set|static|string|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/
});
Prism.languages.insertBefore('n4js', 'constant', {
  // Annotations in N4JS spec: https://numberfour.github.io/n4js/spec/N4JSSpec.html#_annotations
  'annotation': {
    pattern: /@+\w+/,
    alias: 'operator'
  }
});
Prism.languages.n4jsd = Prism.languages.n4js;
/* "prismjs/components/prism-typescript" */

Prism.languages.typescript = Prism.languages.extend('javascript', {
  // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
  'keyword': /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
  'builtin': /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/
});
Prism.languages.ts = Prism.languages.typescript;
/* "prismjs/components/prism-js-templates" */

(function (Prism) {
  var templateString = Prism.languages.javascript['template-string']; // see the pattern in prism-javascript.js

  var templateLiteralPattern = templateString.pattern.source;
  var interpolationObject = templateString.inside['interpolation'];
  var interpolationPunctuationObject = interpolationObject.inside['interpolation-punctuation'];
  var interpolationPattern = interpolationObject.pattern.source;
  /**
   * Creates a new pattern to match a template string with a special tag.
   *
   * This will return `undefined` if there is no grammar with the given language id.
   *
   * @param {string} language The language id of the embedded language. E.g. `markdown`.
   * @param {string} tag The regex pattern to match the tag.
   * @returns {object | undefined}
   * @example
   * createTemplate('css', /\bcss/.source);
   */

  function createTemplate(language, tag) {
    if (!Prism.languages[language]) {
      return undefined;
    }

    return {
      pattern: RegExp('((?:' + tag + ')\\s*)' + templateLiteralPattern),
      lookbehind: true,
      greedy: true,
      inside: {
        'template-punctuation': {
          pattern: /^`|`$/,
          alias: 'string'
        },
        'embedded-code': {
          pattern: /[\s\S]+/,
          alias: language
        }
      }
    };
  }

  Prism.languages.javascript['template-string'] = [// styled-jsx:
  //   css`a { color: #25F; }`
  // styled-components:
  //   styled.h1`color: red;`
  createTemplate('css', /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source), // html`<p></p>`
  // div.innerHTML = `<p></p>`
  createTemplate('html', /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source), // svg`<path fill="#fff" d="M55.37 ..."/>`
  createTemplate('svg', /\bsvg/.source), // md`# h1`, markdown`## h2`
  createTemplate('markdown', /\b(?:md|markdown)/.source), // gql`...`, graphql`...`, graphql.experimental`...`
  createTemplate('graphql', /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source), // vanilla template string
  templateString].filter(Boolean);
  /**
   * Returns a specific placeholder literal for the given language.
   *
   * @param {number} counter
   * @param {string} language
   * @returns {string}
   */

  function getPlaceholder(counter, language) {
    return '___' + language.toUpperCase() + '_' + counter + '___';
  }
  /**
   * Returns the tokens of `Prism.tokenize` but also runs the `before-tokenize` and `after-tokenize` hooks.
   *
   * @param {string} code
   * @param {any} grammar
   * @param {string} language
   * @returns {(string|Token)[]}
   */


  function tokenizeWithHooks(code, grammar, language) {
    var env = {
      code: code,
      grammar: grammar,
      language: language
    };
    Prism.hooks.run('before-tokenize', env);
    env.tokens = Prism.tokenize(env.code, env.grammar);
    Prism.hooks.run('after-tokenize', env);
    return env.tokens;
  }
  /**
   * Returns the token of the given JavaScript interpolation expression.
   *
   * @param {string} expression The code of the expression. E.g. `"${42}"`
   * @returns {Token}
   */


  function tokenizeInterpolationExpression(expression) {
    var tempGrammar = {};
    tempGrammar['interpolation-punctuation'] = interpolationPunctuationObject;
    /** @type {Array} */

    var tokens = Prism.tokenize(expression, tempGrammar);

    if (tokens.length === 3) {
      /**
       * The token array will look like this
       * [
       *     ["interpolation-punctuation", "${"]
       *     "..." // JavaScript expression of the interpolation
       *     ["interpolation-punctuation", "}"]
       * ]
       */
      var args = [1, 1];
      args.push.apply(args, tokenizeWithHooks(tokens[1], Prism.languages.javascript, 'javascript'));
      tokens.splice.apply(tokens, args);
    }

    return new Prism.Token('interpolation', tokens, interpolationObject.alias, expression);
  }
  /**
   * Tokenizes the given code with support for JavaScript interpolation expressions mixed in.
   *
   * This function has 3 phases:
   *
   * 1. Replace all JavaScript interpolation expression with a placeholder.
   *    The placeholder will have the syntax of a identify of the target language.
   * 2. Tokenize the code with placeholders.
   * 3. Tokenize the interpolation expressions and re-insert them into the tokenize code.
   *    The insertion only works if a placeholder hasn't been "ripped apart" meaning that the placeholder has been
   *    tokenized as two tokens by the grammar of the embedded language.
   *
   * @param {string} code
   * @param {object} grammar
   * @param {string} language
   * @returns {Token}
   */


  function tokenizeEmbedded(code, grammar, language) {
    // 1. First filter out all interpolations
    // because they might be escaped, we need a lookbehind, so we use Prism

    /** @type {(Token|string)[]} */
    var _tokens = Prism.tokenize(code, {
      'interpolation': {
        pattern: RegExp(interpolationPattern),
        lookbehind: true
      }
    }); // replace all interpolations with a placeholder which is not in the code already


    var placeholderCounter = 0;
    /** @type {Object<string, string>} */

    var placeholderMap = {};

    var embeddedCode = _tokens.map(function (token) {
      if (typeof token === 'string') {
        return token;
      } else {
        var interpolationExpression = token.content;
        var placeholder;

        while (code.indexOf(placeholder = getPlaceholder(placeholderCounter++, language)) !== -1) {}

        placeholderMap[placeholder] = interpolationExpression;
        return placeholder;
      }
    }).join(''); // 2. Tokenize the embedded code


    var embeddedTokens = tokenizeWithHooks(embeddedCode, grammar, language); // 3. Re-insert the interpolation

    var placeholders = Object.keys(placeholderMap);
    placeholderCounter = 0;
    /**
     *
     * @param {(Token|string)[]} tokens
     * @returns {void}
     */

    function walkTokens(tokens) {
      for (var i = 0; i < tokens.length; i++) {
        if (placeholderCounter >= placeholders.length) {
          return;
        }

        var token = tokens[i];

        if (typeof token === 'string' || typeof token.content === 'string') {
          var placeholder = placeholders[placeholderCounter];
          var s = typeof token === 'string' ? token :
          /** @type {string} */
          token.content;
          var index = s.indexOf(placeholder);

          if (index !== -1) {
            ++placeholderCounter;
            var before = s.substring(0, index);
            var middle = tokenizeInterpolationExpression(placeholderMap[placeholder]);
            var after = s.substring(index + placeholder.length);
            var replacement = [];

            if (before) {
              replacement.push(before);
            }

            replacement.push(middle);

            if (after) {
              var afterTokens = [after];
              walkTokens(afterTokens);
              replacement.push.apply(replacement, afterTokens);
            }

            if (typeof token === 'string') {
              tokens.splice.apply(tokens, [i, 1].concat(replacement));
              i += replacement.length - 1;
            } else {
              token.content = replacement;
            }
          }
        } else {
          var content = token.content;

          if (Array.isArray(content)) {
            walkTokens(content);
          } else {
            walkTokens([content]);
          }
        }
      }
    }

    walkTokens(embeddedTokens);
    return new Prism.Token(language, embeddedTokens, 'language-' + language, code);
  }
  /**
   * The languages for which JS templating will handle tagged template literals.
   *
   * JS templating isn't active for only JavaScript but also related languages like TypeScript, JSX, and TSX.
   */


  var supportedLanguages = {
    'javascript': true,
    'js': true,
    'typescript': true,
    'ts': true,
    'jsx': true,
    'tsx': true
  };
  Prism.hooks.add('after-tokenize', function (env) {
    if (!(env.language in supportedLanguages)) {
      return;
    }
    /**
     * Finds and tokenizes all template strings with an embedded languages.
     *
     * @param {(Token | string)[]} tokens
     * @returns {void}
     */


    function findTemplateStrings(tokens) {
      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (typeof token === 'string') {
          continue;
        }

        var content = token.content;

        if (!Array.isArray(content)) {
          if (typeof content !== 'string') {
            findTemplateStrings([content]);
          }

          continue;
        }

        if (token.type === 'template-string') {
          /**
           * A JavaScript template-string token will look like this:
           *
           * ["template-string", [
           *     ["template-punctuation", "`"],
           *     (
           *         An array of "string" and "interpolation" tokens. This is the simple string case.
           *         or
           *         ["embedded-code", "..."] This is the token containing the embedded code.
           *                                  It also has an alias which is the language of the embedded code.
           *     ),
           *     ["template-punctuation", "`"]
           * ]]
           */
          var embedded = content[1];

          if (content.length === 3 && typeof embedded !== 'string' && embedded.type === 'embedded-code') {
            // get string content
            var code = stringContent(embedded);
            var alias = embedded.alias;
            var language = Array.isArray(alias) ? alias[0] : alias;
            var grammar = Prism.languages[language];

            if (!grammar) {
              // the embedded language isn't registered.
              continue;
            }

            content[1] = tokenizeEmbedded(code, grammar, language);
          }
        } else {
          findTemplateStrings(content);
        }
      }
    }

    findTemplateStrings(env.tokens);
  });
  /**
   * Returns the string content of a token or token stream.
   *
   * @param {string | Token | (string | Token)[]} value
   * @returns {string}
   */

  function stringContent(value) {
    if (typeof value === 'string') {
      return value;
    } else if (Array.isArray(value)) {
      return value.map(stringContent).join('');
    } else {
      return stringContent(value.content);
    }
  }
})(Prism);
/* "prismjs/components/prism-graphql" */


Prism.languages.graphql = {
  'comment': /#.*/,
  'string': {
    pattern: /"(?:\\.|[^\\"\r\n])*"/,
    greedy: true
  },
  'number': /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
  'boolean': /\b(?:true|false)\b/,
  'variable': /\$[a-z_]\w*/i,
  'directive': {
    pattern: /@[a-z_]\w*/i,
    alias: 'function'
  },
  'attr-name': {
    pattern: /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
    greedy: true
  },
  'class-name': {
    pattern: /(\b(?:enum|implements|interface|on|scalar|type|union)\s+)[a-zA-Z_]\w*/,
    lookbehind: true
  },
  'fragment': {
    pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
    lookbehind: true,
    alias: 'function'
  },
  'keyword': /\b(?:enum|fragment|implements|input|interface|mutation|on|query|scalar|schema|type|union)\b/,
  'operator': /[!=|]|\.{3}/,
  'punctuation': /[!(){}\[\]:=,]/,
  'constant': /\b(?!ID\b)[A-Z][A-Z_\d]*\b/
};
/* "prismjs/components/prism-markdown" */

(function (Prism) {
  // Allow only one line break
  var inner = /(?:\\.|[^\\\n\r]|(?:\r?\n|\r)(?!\r?\n|\r))/.source;
  /**
   * This function is intended for the creation of the bold or italic pattern.
   *
   * This also adds a lookbehind group to the given pattern to ensure that the pattern is not backslash-escaped.
   *
   * _Note:_ Keep in mind that this adds a capturing group.
   *
   * @param {string} pattern
   * @param {boolean} starAlternative Whether to also add an alternative where all `_`s are replaced with `*`s.
   * @returns {RegExp}
   */

  function createInline(pattern, starAlternative) {
    pattern = pattern.replace(/<inner>/g, inner);

    if (starAlternative) {
      pattern = pattern + '|' + pattern.replace(/_/g, '\\*');
    }

    return RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + '(?:' + pattern + ')');
  }

  var tableCell = /(?:\\.|``.+?``|`[^`\r\n]+`|[^\\|\r\n`])+/.source;
  var tableRow = /\|?__(?:\|__)+\|?(?:(?:\r?\n|\r)|$)/.source.replace(/__/g, tableCell);
  var tableLine = /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\r?\n|\r)/.source;
  Prism.languages.markdown = Prism.languages.extend('markup', {});
  Prism.languages.insertBefore('markdown', 'prolog', {
    'blockquote': {
      // > ...
      pattern: /^>(?:[\t ]*>)*/m,
      alias: 'punctuation'
    },
    'table': {
      pattern: RegExp('^' + tableRow + tableLine + '(?:' + tableRow + ')*', 'm'),
      inside: {
        'table-data-rows': {
          pattern: RegExp('^(' + tableRow + tableLine + ')(?:' + tableRow + ')*$'),
          lookbehind: true,
          inside: {
            'table-data': {
              pattern: RegExp(tableCell),
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        },
        'table-line': {
          pattern: RegExp('^(' + tableRow + ')' + tableLine + '$'),
          lookbehind: true,
          inside: {
            'punctuation': /\||:?-{3,}:?/
          }
        },
        'table-header-row': {
          pattern: RegExp('^' + tableRow + '$'),
          inside: {
            'table-header': {
              pattern: RegExp(tableCell),
              alias: 'important',
              inside: Prism.languages.markdown
            },
            'punctuation': /\|/
          }
        }
      }
    },
    'code': [{
      // Prefixed by 4 spaces or 1 tab and preceded by an empty line
      pattern: /(^[ \t]*(?:\r?\n|\r))(?: {4}|\t).+(?:(?:\r?\n|\r)(?: {4}|\t).+)*/m,
      lookbehind: true,
      alias: 'keyword'
    }, {
      // `code`
      // ``code``
      pattern: /``.+?``|`[^`\r\n]+`/,
      alias: 'keyword'
    }, {
      // ```optional language
      // code block
      // ```
      pattern: /^```[\s\S]*?^```$/m,
      greedy: true,
      inside: {
        'code-block': {
          pattern: /^(```.*(?:\r?\n|\r))[\s\S]+?(?=(?:\r?\n|\r)^```$)/m,
          lookbehind: true
        },
        'code-language': {
          pattern: /^(```).+/,
          lookbehind: true
        },
        'punctuation': /```/
      }
    }],
    'title': [{
      // title 1
      // =======
      // title 2
      // -------
      pattern: /\S.*(?:\r?\n|\r)(?:==+|--+)(?=[ \t]*$)/m,
      alias: 'important',
      inside: {
        punctuation: /==+$|--+$/
      }
    }, {
      // # title 1
      // ###### title 6
      pattern: /(^\s*)#+.+/m,
      lookbehind: true,
      alias: 'important',
      inside: {
        punctuation: /^#+|#+$/
      }
    }],
    'hr': {
      // ***
      // ---
      // * * *
      // -----------
      pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'list': {
      // * item
      // + item
      // - item
      // 1. item
      pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
      lookbehind: true,
      alias: 'punctuation'
    },
    'url-reference': {
      // [id]: http://example.com "Optional title"
      // [id]: http://example.com 'Optional title'
      // [id]: http://example.com (Optional title)
      // [id]: <http://example.com> "Optional title"
      pattern: /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
      inside: {
        'variable': {
          pattern: /^(!?\[)[^\]]+/,
          lookbehind: true
        },
        'string': /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
        'punctuation': /^[\[\]!:]|[<>]/
      },
      alias: 'url'
    },
    'bold': {
      // **strong**
      // __strong__
      // allow one nested instance of italic text using the same delimiter
      pattern: createInline(/__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__/.source, true),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^..)[\s\S]+(?=..$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /\*\*|__/
      }
    },
    'italic': {
      // *em*
      // _em_
      // allow one nested instance of bold text using the same delimiter
      pattern: createInline(/_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_/.source, true),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^.)[\s\S]+(?=.$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /[*_]/
      }
    },
    'strike': {
      // ~~strike through~~
      // ~strike~
      pattern: createInline(/(~~?)(?:(?!~)<inner>)+?\2/.source, false),
      lookbehind: true,
      greedy: true,
      inside: {
        'content': {
          pattern: /(^~~?)[\s\S]+(?=\1$)/,
          lookbehind: true,
          inside: {} // see below

        },
        'punctuation': /~~?/
      }
    },
    'url': {
      // [example](http://example.com "Optional title")
      // [example][id]
      // [example] [id]
      pattern: createInline(/!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)| ?\[(?:(?!\])<inner>)+\])/.source, false),
      lookbehind: true,
      greedy: true,
      inside: {
        'variable': {
          pattern: /(\[)[^\]]+(?=\]$)/,
          lookbehind: true
        },
        'content': {
          pattern: /(^!?\[)[^\]]+(?=\])/,
          lookbehind: true,
          inside: {} // see below

        },
        'string': {
          pattern: /"(?:\\.|[^"\\])*"(?=\)$)/
        }
      }
    }
  });
  ['url', 'bold', 'italic', 'strike'].forEach(function (token) {
    ['url', 'bold', 'italic', 'strike'].forEach(function (inside) {
      if (token !== inside) {
        Prism.languages.markdown[token].inside.content.inside[inside] = Prism.languages.markdown[inside];
      }
    });
  });
  Prism.hooks.add('after-tokenize', function (env) {
    if (env.language !== 'markdown' && env.language !== 'md') {
      return;
    }

    function walkTokens(tokens) {
      if (!tokens || typeof tokens === 'string') {
        return;
      }

      for (var i = 0, l = tokens.length; i < l; i++) {
        var token = tokens[i];

        if (token.type !== 'code') {
          walkTokens(token.content);
          continue;
        }
        /*
         * Add the correct `language-xxxx` class to this code block. Keep in mind that the `code-language` token
         * is optional. But the grammar is defined so that there is only one case we have to handle:
         *
         * token.content = [
         *     <span class="punctuation">```</span>,
         *     <span class="code-language">xxxx</span>,
         *     '\n', // exactly one new lines (\r or \n or \r\n)
         *     <span class="code-block">...</span>,
         *     '\n', // exactly one new lines again
         *     <span class="punctuation">```</span>
         * ];
         */


        var codeLang = token.content[1];
        var codeBlock = token.content[3];

        if (codeLang && codeBlock && codeLang.type === 'code-language' && codeBlock.type === 'code-block' && typeof codeLang.content === 'string') {
          // this might be a language that Prism does not support
          var alias = 'language-' + codeLang.content.trim().split(/\s+/)[0].toLowerCase(); // add alias

          if (!codeBlock.alias) {
            codeBlock.alias = [alias];
          } else if (typeof codeBlock.alias === 'string') {
            codeBlock.alias = [codeBlock.alias, alias];
          } else {
            codeBlock.alias.push(alias);
          }
        }
      }
    }

    walkTokens(env.tokens);
  });
  Prism.hooks.add('wrap', function (env) {
    if (env.type !== 'code-block') {
      return;
    }

    var codeLang = '';

    for (var i = 0, l = env.classes.length; i < l; i++) {
      var cls = env.classes[i];
      var match = /language-(.+)/.exec(cls);

      if (match) {
        codeLang = match[1];
        break;
      }
    }

    var grammar = Prism.languages[codeLang];

    if (!grammar) {
      if (codeLang && codeLang !== 'none' && Prism.plugins.autoloader) {
        var id = 'md-' + new Date().valueOf() + '-' + Math.floor(Math.random() * 1e16);
        env.attributes['id'] = id;
        Prism.plugins.autoloader.loadLanguages(codeLang, function () {
          var ele = document.getElementById(id);

          if (ele) {
            ele.innerHTML = Prism.highlight(ele.textContent, Prism.languages[codeLang], codeLang);
          }
        });
      }
    } else {
      // reverse Prism.util.encode
      var code = env.content.replace(/&lt;/g, '<').replace(/&amp;/g, '&');
      env.content = Prism.highlight(code, grammar, codeLang);
    }
  });
  Prism.languages.md = Prism.languages.markdown;
})(Prism);
/* "prismjs/components/prism-diff" */


(function (Prism) {
  Prism.languages.diff = {
    'coord': [// Match all kinds of coord lines (prefixed by "+++", "---" or "***").
    /^(?:\*{3}|-{3}|\+{3}).*$/m, // Match "@@ ... @@" coord lines in unified diff.
    /^@@.*@@$/m, // Match coord lines in normal diff (starts with a number).
    /^\d+.*$/m] // deleted, inserted, unchanged, diff

  };
  /**
   * A map from the name of a block to its line prefix.
   *
   * @type {Object<string, string>}
   */

  var PREFIXES = {
    'deleted-sign': '-',
    'deleted-arrow': '<',
    'inserted-sign': '+',
    'inserted-arrow': '>',
    'unchanged': ' ',
    'diff': '!'
  }; // add a token for each prefix

  Object.keys(PREFIXES).forEach(function (name) {
    var prefix = PREFIXES[name];
    var alias = [];

    if (!/^\w+$/.test(name)) {
      // "deleted-sign" -> "deleted"
      alias.push(/\w+/.exec(name)[0]);
    }

    if (name === "diff") {
      alias.push("bold");
    }

    Prism.languages.diff[name] = {
      // pattern: /^(?:[_].*(?:\r\n?|\n|(?![\s\S])))+/m
      pattern: RegExp('^(?:[' + prefix + '].*(?:\r\n?|\n|(?![\\s\\S])))+', 'm'),
      alias: alias
    };
  }); // make prefixes available to Diff plugin

  Object.defineProperty(Prism.languages.diff, 'PREFIXES', {
    value: PREFIXES
  });
})(Prism);
/* "prismjs/components/prism-git" */


Prism.languages.git = {
  /*
   * A simple one line comment like in a git status command
   * For instance:
   * $ git status
   * # On branch infinite-scroll
   * # Your branch and 'origin/sharedBranches/frontendTeam/infinite-scroll' have diverged,
   * # and have 1 and 2 different commits each, respectively.
   * nothing to commit (working directory clean)
   */
  'comment': /^#.*/m,

  /*
   * Regexp to match the changed lines in a git diff output. Check the example below.
   */
  'deleted': /^[-–].*/m,
  'inserted': /^\+.*/m,

  /*
   * a string (double and simple quote)
   */
  'string': /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,

  /*
   * a git command. It starts with a random prompt finishing by a $, then "git" then some other parameters
   * For instance:
   * $ git add file.txt
   */
  'command': {
    pattern: /^.*\$ git .*$/m,
    inside: {
      /*
       * A git command can contain a parameter starting by a single or a double dash followed by a string
       * For instance:
       * $ git diff --cached
       * $ git log -p
       */
      'parameter': /\s--?\w+/m
    }
  },

  /*
   * Coordinates displayed in a git diff command
   * For instance:
   * $ git diff
   * diff --git file.txt file.txt
   * index 6214953..1d54a52 100644
   * --- file.txt
   * +++ file.txt
   * @@ -1 +1,2 @@
   * -Here's my tetx file
   * +Here's my text file
   * +And this is the second line
   */
  'coord': /^@@.*@@$/m,

  /*
   * Match a "commit [SHA1]" line in a git log output.
   * For instance:
   * $ git log
   * commit a11a14ef7e26f2ca62d4b35eac455ce636d0dc09
   * Author: lgiraudel
   * Date:   Mon Feb 17 11:18:34 2014 +0100
   *
   *     Add of a new line
   */
  'commit_sha1': /^commit \w{40}$/m
};
/* "prismjs/components/prism-go" */

Prism.languages.go = Prism.languages.extend('clike', {
  'keyword': /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
  'builtin': /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
  'boolean': /\b(?:_|iota|nil|true|false)\b/,
  'operator': /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
  'number': /(?:\b0x[a-f\d]+|(?:\b\d+\.?\d*|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
  'string': {
    pattern: /(["'`])(\\[\s\S]|(?!\1)[^\\])*\1/,
    greedy: true
  }
});
delete Prism.languages.go['class-name'];
/* "prismjs/components/prism-handlebars" */

(function (Prism) {
  Prism.languages.handlebars = {
    'comment': /\{\{![\s\S]*?\}\}/,
    'delimiter': {
      pattern: /^\{\{\{?|\}\}\}?$/i,
      alias: 'punctuation'
    },
    'string': /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
    'number': /\b0x[\dA-Fa-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:[Ee][+-]?\d+)?/,
    'boolean': /\b(?:true|false)\b/,
    'block': {
      pattern: /^(\s*~?\s*)[#\/]\S+?(?=\s*~?\s*$|\s)/i,
      lookbehind: true,
      alias: 'keyword'
    },
    'brackets': {
      pattern: /\[[^\]]+\]/,
      inside: {
        punctuation: /\[|\]/,
        variable: /[\s\S]+/
      }
    },
    'punctuation': /[!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~]/,
    'variable': /[^!"#%&'()*+,.\/;<=>@\[\\\]^`{|}~\s]+/
  };
  Prism.hooks.add('before-tokenize', function (env) {
    var handlebarsPattern = /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g;
    Prism.languages['markup-templating'].buildPlaceholders(env, 'handlebars', handlebarsPattern);
  });
  Prism.hooks.add('after-tokenize', function (env) {
    Prism.languages['markup-templating'].tokenizePlaceholders(env, 'handlebars');
  });
})(Prism);
/* "prismjs/components/prism-json" */


Prism.languages.json = {
  'property': {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
    greedy: true
  },
  'string': {
    pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
    greedy: true
  },
  'comment': /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/,
  'number': /-?\d+\.?\d*(e[+-]?\d+)?/i,
  'punctuation': /[{}[\],]/,
  'operator': /:/,
  'boolean': /\b(?:true|false)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  }
};
/* "prismjs/components/prism-less" */

/* FIXME :
 :extend() is not handled specifically : its highlighting is buggy.
 Mixin usage must be inside a ruleset to be highlighted.
 At-rules (e.g. import) containing interpolations are buggy.
 Detached rulesets are highlighted as at-rules.
 A comment before a mixin usage prevents the latter to be properly highlighted.
 */

Prism.languages.less = Prism.languages.extend('css', {
  'comment': [/\/\*[\s\S]*?\*\//, {
    pattern: /(^|[^\\])\/\/.*/,
    lookbehind: true
  }],
  'atrule': {
    pattern: /@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,
    inside: {
      'punctuation': /[:()]/
    }
  },
  // selectors and mixins are considered the same
  'selector': {
    pattern: /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,
    inside: {
      // mixin parameters
      'variable': /@+[\w-]+/
    }
  },
  'property': /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
  'operator': /[+\-*\/]/
});
Prism.languages.insertBefore('less', 'property', {
  'variable': [// Variable declaration (the colon must be consumed!)
  {
    pattern: /@[\w-]+\s*:/,
    inside: {
      "punctuation": /:/
    }
  }, // Variable usage
  /@@?[\w-]+/],
  'mixin-usage': {
    pattern: /([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,
    lookbehind: true,
    alias: 'function'
  }
});
/* "prismjs/components/prism-makefile" */

Prism.languages.makefile = {
  'comment': {
    pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
    lookbehind: true
  },
  'string': {
    pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
    greedy: true
  },
  // Built-in target names
  'builtin': /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
  // Targets
  'symbol': {
    pattern: /^[^:=\r\n]+(?=\s*:(?!=))/m,
    inside: {
      'variable': /\$+(?:[^(){}:#=\s]+|(?=[({]))/
    }
  },
  'variable': /\$+(?:[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
  'keyword': [// Directives
  /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/, // Functions
  {
    pattern: /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
    lookbehind: true
  }],
  'operator': /(?:::|[?:+!])?=|[|@]/,
  'punctuation': /[:;(){}]/
};
/* "prismjs/components/prism-objectivec" */

Prism.languages.objectivec = Prism.languages.extend('c', {
  'keyword': /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
  'string': /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
  'operator': /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/
});
delete Prism.languages.objectivec['class-name'];
/* "prismjs/components/prism-ocaml" */

Prism.languages.ocaml = {
  'comment': /\(\*[\s\S]*?\*\)/,
  'string': [{
    pattern: /"(?:\\.|[^\\\r\n"])*"/,
    greedy: true
  }, {
    pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
    greedy: true
  }],
  'number': /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*\.?[\d_]*(?:e[+-]?[\d_]+)?)/i,
  'type': {
    pattern: /\B['`]\w*/,
    alias: 'variable'
  },
  'directive': {
    pattern: /\B#\w+/,
    alias: 'function'
  },
  'keyword': /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|object|of|open|prefix|private|rec|then|sig|struct|to|try|type|val|value|virtual|where|while|with)\b/,
  'boolean': /\b(?:false|true)\b/,
  // Custom operators are allowed
  'operator': /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lxor|lsl|lsr|mod|nor|or)\b/,
  'punctuation': /[(){}\[\]|_.,:;]/
};
/* "prismjs/components/prism-python" */

Prism.languages.python = {
  'comment': {
    pattern: /(^|[^\\])#.*/,
    lookbehind: true
  },
  'string-interpolation': {
    pattern: /(?:f|rf|fr)(?:("""|''')[\s\S]+?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
    greedy: true,
    inside: {
      'interpolation': {
        // "{" <expression> <optional "!s", "!r", or "!a"> <optional ":" format specifier> "}"
        pattern: /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
        lookbehind: true,
        inside: {
          'format-spec': {
            pattern: /(:)[^:(){}]+(?=}$)/,
            lookbehind: true
          },
          'conversion-option': {
            pattern: /![sra](?=[:}]$)/,
            alias: 'punctuation'
          },
          rest: null
        }
      },
      'string': /[\s\S]+/
    }
  },
  'triple-quoted-string': {
    pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]+?\1/i,
    greedy: true,
    alias: 'string'
  },
  'string': {
    pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
    greedy: true
  },
  'function': {
    pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
    lookbehind: true
  },
  'class-name': {
    pattern: /(\bclass\s+)\w+/i,
    lookbehind: true
  },
  'decorator': {
    pattern: /(^\s*)@\w+(?:\.\w+)*/i,
    lookbehind: true,
    alias: ['annotation', 'punctuation'],
    inside: {
      'punctuation': /\./
    }
  },
  'keyword': /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
  'builtin': /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
  'boolean': /\b(?:True|False|None)\b/,
  'number': /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,
  'operator': /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
  'punctuation': /[{}[\];(),.:]/
};
Prism.languages.python['string-interpolation'].inside['interpolation'].inside.rest = Prism.languages.python;
Prism.languages.py = Prism.languages.python;
/* "prismjs/components/prism-reason" */

Prism.languages.reason = Prism.languages.extend('clike', {
  'comment': {
    pattern: /(^|[^\\])\/\*[\s\S]*?\*\//,
    lookbehind: true
  },
  'string': {
    pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
    greedy: true
  },
  // 'class-name' must be matched *after* 'constructor' defined below
  'class-name': /\b[A-Z]\w*/,
  'keyword': /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
  'operator': /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/
});
Prism.languages.insertBefore('reason', 'class-name', {
  'character': {
    pattern: /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
    alias: 'string'
  },
  'constructor': {
    // Negative look-ahead prevents from matching things like String.capitalize
    pattern: /\b[A-Z]\w*\b(?!\s*\.)/,
    alias: 'variable'
  },
  'label': {
    pattern: /\b[a-z]\w*(?=::)/,
    alias: 'symbol'
  }
}); // We can't match functions property, so let's not even try.

delete Prism.languages.reason.function;
/* "prismjs/components/prism-sass" */

(function (Prism) {
  Prism.languages.sass = Prism.languages.extend('css', {
    // Sass comments don't need to be closed, only indented
    'comment': {
      pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t]+.+)*/m,
      lookbehind: true
    }
  });
  Prism.languages.insertBefore('sass', 'atrule', {
    // We want to consume the whole line
    'atrule-line': {
      // Includes support for = and + shortcuts
      pattern: /^(?:[ \t]*)[@+=].+/m,
      inside: {
        'atrule': /(?:@[\w-]+|[+=])/m
      }
    }
  });
  delete Prism.languages.sass.atrule;
  var variable = /\$[-\w]+|#\{\$[-\w]+\}/;
  var operator = [/[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/, {
    pattern: /(\s+)-(?=\s)/,
    lookbehind: true
  }];
  Prism.languages.insertBefore('sass', 'property', {
    // We want to consume the whole line
    'variable-line': {
      pattern: /^[ \t]*\$.+/m,
      inside: {
        'punctuation': /:/,
        'variable': variable,
        'operator': operator
      }
    },
    // We want to consume the whole line
    'property-line': {
      pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s]+.*)/m,
      inside: {
        'property': [/[^:\s]+(?=\s*:)/, {
          pattern: /(:)[^:\s]+/,
          lookbehind: true
        }],
        'punctuation': /:/,
        'variable': variable,
        'operator': operator,
        'important': Prism.languages.sass.important
      }
    }
  });
  delete Prism.languages.sass.property;
  delete Prism.languages.sass.important; // Now that whole lines for other patterns are consumed,
  // what's left should be selectors

  Prism.languages.insertBefore('sass', 'punctuation', {
    'selector': {
      pattern: /([ \t]*)\S(?:,?[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,?[^,\r\n]+)*)*/,
      lookbehind: true
    }
  });
})(Prism);
/* "prismjs/components/prism-scss" */


Prism.languages.scss = Prism.languages.extend('css', {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
    lookbehind: true
  },
  'atrule': {
    pattern: /@[\w-]+(?:\([^()]+\)|[^(])*?(?=\s+[{;])/,
    inside: {
      'rule': /@[\w-]+/ // See rest below

    }
  },
  // url, compassified
  'url': /(?:[-a-z]+-)?url(?=\()/i,
  // CSS selector regex is not appropriate for Sass
  // since there can be lot more things (var, @ directive, nesting..)
  // a selector must start at the end of a property or after a brace (end of other rules or nesting)
  // it can contain some characters that aren't used for defining rules or end of selector, & (parent selector), or interpolated variable
  // the end of a selector is found when there is no rules in it ( {} or {\s}) or if there is a property (because an interpolated var
  // can "pass" as a selector- e.g: proper#{$erty})
  // this one was hard to do, so please be careful if you edit this one :)
  'selector': {
    // Initial look-ahead is used to prevent matching of blank selectors
    pattern: /(?=\S)[^@;{}()]?(?:[^@;{}()]|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}]+[:{][^}]+))/m,
    inside: {
      'parent': {
        pattern: /&/,
        alias: 'important'
      },
      'placeholder': /%[-\w]+/,
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  },
  'property': {
    pattern: /(?:[\w-]|\$[-\w]+|#\{\$[-\w]+\})+(?=\s*:)/,
    inside: {
      'variable': /\$[-\w]+|#\{\$[-\w]+\}/
    }
  }
});
Prism.languages.insertBefore('scss', 'atrule', {
  'keyword': [/@(?:if|else(?: if)?|for|each|while|import|extend|debug|warn|mixin|include|function|return|content)/i, {
    pattern: /( +)(?:from|through)(?= )/,
    lookbehind: true
  }]
});
Prism.languages.insertBefore('scss', 'important', {
  // var and interpolated vars
  'variable': /\$[-\w]+|#\{\$[-\w]+\}/
});
Prism.languages.insertBefore('scss', 'function', {
  'placeholder': {
    pattern: /%[-\w]+/,
    alias: 'selector'
  },
  'statement': {
    pattern: /\B!(?:default|optional)\b/i,
    alias: 'keyword'
  },
  'boolean': /\b(?:true|false)\b/,
  'null': {
    pattern: /\bnull\b/,
    alias: 'keyword'
  },
  'operator': {
    pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
    lookbehind: true
  }
});
Prism.languages.scss['atrule'].inside.rest = Prism.languages.scss;
/* "prismjs/components/prism-sql" */

Prism.languages.sql = {
  'comment': {
    pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
    lookbehind: true
  },
  'variable': [{
    pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/,
    greedy: true
  }, /@[\w.$]+/],
  'string': {
    pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
    greedy: true,
    lookbehind: true
  },
  'function': /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
  // Should we highlight user defined functions too?
  'keyword': /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURNS?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
  'boolean': /\b(?:TRUE|FALSE|NULL)\b/i,
  'number': /\b0x[\da-f]+\b|\b\d+\.?\d*|\B\.\d+\b/i,
  'operator': /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
  'punctuation': /[;[\]()`,.]/
};
/* "prismjs/components/prism-stylus" */

(function (Prism) {
  var inside = {
    'url': /url\((["']?).*?\1\)/i,
    'string': {
      pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
      greedy: true
    },
    'interpolation': null,
    // See below
    'func': null,
    // See below
    'important': /\B!(?:important|optional)\b/i,
    'keyword': {
      pattern: /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
      lookbehind: true
    },
    'hexcode': /#[\da-f]{3,6}/i,
    'number': /\b\d+(?:\.\d+)?%?/,
    'boolean': /\b(?:true|false)\b/,
    'operator': [// We want non-word chars around "-" because it is
    // accepted in property names.
    /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.+|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/],
    'punctuation': /[{}()\[\];:,]/
  };
  inside['interpolation'] = {
    pattern: /\{[^\r\n}:]+\}/,
    alias: 'variable',
    inside: {
      'delimiter': {
        pattern: /^{|}$/,
        alias: 'punctuation'
      },
      rest: inside
    }
  };
  inside['func'] = {
    pattern: /[\w-]+\([^)]*\).*/,
    inside: {
      'function': /^[^(]+/,
      rest: inside
    }
  };
  Prism.languages.stylus = {
    'comment': {
      pattern: /(^|[^\\])(\/\*[\s\S]*?\*\/|\/\/.*)/,
      lookbehind: true
    },
    'atrule-declaration': {
      pattern: /(^\s*)@.+/m,
      lookbehind: true,
      inside: {
        'atrule': /^@[\w-]+/,
        rest: inside
      }
    },
    'variable-declaration': {
      pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:(?:\{[^}]*\}|.+)|$)/m,
      lookbehind: true,
      inside: {
        'variable': /^\S+/,
        rest: inside
      }
    },
    'statement': {
      pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t]+.+/m,
      lookbehind: true,
      inside: {
        keyword: /^\S+/,
        rest: inside
      }
    },
    // A property/value pair cannot end with a comma or a brace
    // It cannot have indented content unless it ended with a semicolon
    'property-declaration': {
      pattern: /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(\r?\n|\r)(?:\{|\2[ \t]+)))/m,
      lookbehind: true,
      inside: {
        'property': {
          pattern: /^[^\s:]+/,
          inside: {
            'interpolation': inside.interpolation
          }
        },
        rest: inside
      }
    },
    // A selector can contain parentheses only as part of a pseudo-element
    // It can span multiple lines.
    // It must end with a comma or an accolade or have indented content.
    'selector': {
      pattern: /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\))?|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
      lookbehind: true,
      inside: {
        'interpolation': inside.interpolation,
        'punctuation': /[{},]/
      }
    },
    'func': inside.func,
    'string': inside.string,
    'interpolation': inside.interpolation,
    'punctuation': /[{}()\[\];:.]/
  };
})(Prism);
/* "prismjs/components/prism-tsx" */


var typescript = Prism.util.clone(Prism.languages.typescript);
Prism.languages.tsx = Prism.languages.extend('jsx', typescript);
/* "prismjs/components/prism-wasm" */

Prism.languages.wasm = {
  'comment': [/\(;[\s\S]*?;\)/, {
    pattern: /;;.*/,
    greedy: true
  }],
  'string': {
    pattern: /"(?:\\[\s\S]|[^"\\])*"/,
    greedy: true
  },
  'keyword': [{
    pattern: /\b(?:align|offset)=/,
    inside: {
      'operator': /=/
    }
  }, {
    pattern: /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
    inside: {
      'punctuation': /\./
    }
  }, /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/],
  'variable': /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
  'number': /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
  'punctuation': /[()]/
};
/* "prismjs/components/prism-yaml" */

Prism.languages.yaml = {
  'scalar': {
    pattern: /([\-:]\s*(?:![^\s]+)?[ \t]*[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)[^\r\n]+(?:\2[^\r\n]+)*)/,
    lookbehind: true,
    alias: 'string'
  },
  'comment': /#.*/,
  'key': {
    pattern: /(\s*(?:^|[:\-,[{\r\n?])[ \t]*(?:![^\s]+)?[ \t]*)[^\r\n{[\]},#\s]+?(?=\s*:\s)/,
    lookbehind: true,
    alias: 'atrule'
  },
  'directive': {
    pattern: /(^[ \t]*)%.+/m,
    lookbehind: true,
    alias: 'important'
  },
  'datetime': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?)(?=[ \t]*(?:$|,|]|}))/m,
    lookbehind: true,
    alias: 'number'
  },
  'boolean': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:true|false)[ \t]*(?=$|,|]|})/im,
    lookbehind: true,
    alias: 'important'
  },
  'null': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)(?:null|~)[ \t]*(?=$|,|]|})/im,
    lookbehind: true,
    alias: 'important'
  },
  'string': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)("|')(?:(?!\2)[^\\\r\n]|\\.)*\2(?=[ \t]*(?:$|,|]|}|\s*#))/m,
    lookbehind: true,
    greedy: true
  },
  'number': {
    pattern: /([:\-,[{]\s*(?:![^\s]+)?[ \t]*)[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+\.?\d*|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)[ \t]*(?=$|,|]|})/im,
    lookbehind: true
  },
  'tag': /![^\s]+/,
  'important': /[&*][\w]+/,
  'punctuation': /---|[:[\]{}\-,|>?]|\.\.\./
};
Prism.languages.yml = Prism.languages.yaml;

// Duotone Dark
// Author: Simurai, adapted from DuoTone themes for Atom (http://simurai.com/projects/2016/01/01/duotone-themes)
// Conversion: Bram de Haan (http://atelierbram.github.io/Base2Tone-prism/output/prism/prism-base2tone-evening-dark.css)
// Generated with Base16 Builder (https://github.com/base16-builder/base16-builder)
var theme = {
  plain: {
    backgroundColor: "#2a2734",
    color: "#9a86fd"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata", "punctuation"],
    style: {
      color: "#6c6783"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["tag", "operator", "number"],
    style: {
      color: "#e09142"
    }
  }, {
    types: ["property", "function"],
    style: {
      color: "#9a86fd"
    }
  }, {
    types: ["tag-id", "selector", "atrule-id"],
    style: {
      color: "#eeebff"
    }
  }, {
    types: ["attr-name"],
    style: {
      color: "#c4b9fe"
    }
  }, {
    types: ["boolean", "string", "entity", "url", "attr-value", "keyword", "control", "directive", "unit", "statement", "regex", "at-rule", "placeholder", "variable"],
    style: {
      color: "#ffcc99"
    }
  }, {
    types: ["deleted"],
    style: {
      textDecorationLine: "line-through"
    }
  }, {
    types: ["inserted"],
    style: {
      textDecorationLine: "underline"
    }
  }, {
    types: ["italic"],
    style: {
      fontStyle: "italic"
    }
  }, {
    types: ["important", "bold"],
    style: {
      fontWeight: "bold"
    }
  }, {
    types: ["important"],
    style: {
      color: "#c4b9fe"
    }
  }]
};

var index_cjs = theme;

var defaultProps = {
  // $FlowFixMe
  Prism: Prism,
  theme: index_cjs
};

function _defineProperty$1(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends$1() {
  _extends$1 = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends$1.apply(this, arguments);
}

var newlineRe = /\r\n|\r|\n/; // Empty lines need to contain a single empty token, denoted with { empty: true }

var normalizeEmptyLines = function (line) {
  if (line.length === 0) {
    line.push({
      types: ["plain"],
      content: "",
      empty: true
    });
  } else if (line.length === 1 && line[0].content === "") {
    line[0].empty = true;
  }
};

var appendTypes = function (types, add) {
  var typesSize = types.length;

  if (typesSize > 0 && types[typesSize - 1] === add) {
    return types;
  }

  return types.concat(add);
}; // Takes an array of Prism's tokens and groups them by line, turning plain
// strings into tokens as well. Tokens can become recursive in some cases,
// which means that their types are concatenated. Plain-string tokens however
// are always of type "plain".
// This is not recursive to avoid exceeding the call-stack limit, since it's unclear
// how nested Prism's tokens can become


var normalizeTokens = function (tokens) {
  var typeArrStack = [[]];
  var tokenArrStack = [tokens];
  var tokenArrIndexStack = [0];
  var tokenArrSizeStack = [tokens.length];
  var i = 0;
  var stackIndex = 0;
  var currentLine = [];
  var acc = [currentLine];

  while (stackIndex > -1) {
    while ((i = tokenArrIndexStack[stackIndex]++) < tokenArrSizeStack[stackIndex]) {
      var content = void 0;
      var types = typeArrStack[stackIndex];
      var tokenArr = tokenArrStack[stackIndex];
      var token = tokenArr[i]; // Determine content and append type to types if necessary

      if (typeof token === "string") {
        types = stackIndex > 0 ? types : ["plain"];
        content = token;
      } else {
        types = appendTypes(types, token.type);

        if (token.alias) {
          types = appendTypes(types, token.alias);
        }

        content = token.content;
      } // If token.content is an array, increase the stack depth and repeat this while-loop


      if (typeof content !== "string") {
        stackIndex++;
        typeArrStack.push(types);
        tokenArrStack.push(content);
        tokenArrIndexStack.push(0);
        tokenArrSizeStack.push(content.length);
        continue;
      } // Split by newlines


      var splitByNewlines = content.split(newlineRe);
      var newlineCount = splitByNewlines.length;
      currentLine.push({
        types: types,
        content: splitByNewlines[0]
      }); // Create a new line for each string on a new line

      for (var i$1 = 1; i$1 < newlineCount; i$1++) {
        normalizeEmptyLines(currentLine);
        acc.push(currentLine = []);
        currentLine.push({
          types: types,
          content: splitByNewlines[i$1]
        });
      }
    } // Decreate the stack depth


    stackIndex--;
    typeArrStack.pop();
    tokenArrStack.pop();
    tokenArrIndexStack.pop();
    tokenArrSizeStack.pop();
  }

  normalizeEmptyLines(currentLine);
  return acc;
};

var themeToDict = function (theme, language) {
  var plain = theme.plain; // $FlowFixMe

  var base = Object.create(null);
  var themeDict = theme.styles.reduce(function (acc, themeEntry) {
    var languages = themeEntry.languages;
    var style = themeEntry.style;

    if (languages && !languages.includes(language)) {
      return acc;
    }

    themeEntry.types.forEach(function (type) {
      // $FlowFixMe
      var accStyle = _extends$1({}, acc[type], style);

      acc[type] = accStyle;
    });
    return acc;
  }, base); // $FlowFixMe

  themeDict.root = plain; // $FlowFixMe

  themeDict.plain = _extends$1({}, plain, {
    backgroundColor: null
  });
  return themeDict;
};

function objectWithoutProperties(obj, exclude) {
  var target = {};

  for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k];

  return target;
}

var Highlight =
/*@__PURE__*/
function (Component) {
  function Highlight() {
    var this$1 = this;
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    Component.apply(this, args);

    _defineProperty$1(this, "getThemeDict", function (props) {
      if (this$1.themeDict !== undefined && props.theme === this$1.prevTheme && props.language === this$1.prevLanguage) {
        return this$1.themeDict;
      }

      this$1.prevTheme = props.theme;
      this$1.prevLanguage = props.language;
      var themeDict = props.theme ? themeToDict(props.theme, props.language) : undefined;
      return this$1.themeDict = themeDict;
    });

    _defineProperty$1(this, "getLineProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "line"]);
      var rest = rest$1;

      var output = _extends$1({}, rest, {
        className: "token-line",
        style: undefined,
        key: undefined
      });

      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict !== undefined) {
        output.style = themeDict.plain;
      }

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends$1({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });

    _defineProperty$1(this, "getStyleForToken", function (ref) {
      var types = ref.types;
      var empty = ref.empty;
      var typesSize = types.length;
      var themeDict = this$1.getThemeDict(this$1.props);

      if (themeDict === undefined) {
        return undefined;
      } else if (typesSize === 1 && types[0] === "plain") {
        return empty ? {
          display: "inline-block"
        } : undefined;
      } else if (typesSize === 1 && !empty) {
        return themeDict[types[0]];
      }

      var baseStyle = empty ? {
        display: "inline-block"
      } : {}; // $FlowFixMe

      var typeStyles = types.map(function (type) {
        return themeDict[type];
      });
      return Object.assign.apply(Object, [baseStyle].concat(typeStyles));
    });

    _defineProperty$1(this, "getTokenProps", function (ref) {
      var key = ref.key;
      var className = ref.className;
      var style = ref.style;
      var token = ref.token;
      var rest$1 = objectWithoutProperties(ref, ["key", "className", "style", "token"]);
      var rest = rest$1;

      var output = _extends$1({}, rest, {
        className: "token " + token.types.join(" "),
        children: token.content,
        style: this$1.getStyleForToken(token),
        key: undefined
      });

      if (style !== undefined) {
        output.style = output.style !== undefined ? _extends$1({}, output.style, style) : style;
      }

      if (key !== undefined) {
        output.key = key;
      }

      if (className) {
        output.className += " " + className;
      }

      return output;
    });
  }

  if (Component) Highlight.__proto__ = Component;
  Highlight.prototype = Object.create(Component && Component.prototype);
  Highlight.prototype.constructor = Highlight;

  Highlight.prototype.render = function render() {
    var ref = this.props;
    var Prism = ref.Prism;
    var language = ref.language;
    var code = ref.code;
    var children = ref.children;
    var themeDict = this.getThemeDict(this.props);
    var grammar = Prism.languages[language];
    var mixedTokens = grammar !== undefined ? Prism.tokenize(code, grammar, language) : [code];
    var tokens = normalizeTokens(mixedTokens);
    return children({
      tokens: tokens,
      className: "prism-code language-" + language,
      style: themeDict !== undefined ? themeDict.root : {},
      getLineProps: this.getLineProps,
      getTokenProps: this.getTokenProps
    });
  };

  return Highlight;
}(Component);

// Original: https://raw.githubusercontent.com/PrismJS/prism-themes/master/themes/prism-ghcolors.css
var theme$1 = {
  plain: {
    color: "#393A34",
    backgroundColor: "#f6f8fa"
  },
  styles: [{
    types: ["comment", "prolog", "doctype", "cdata"],
    style: {
      color: "#999988",
      fontStyle: "italic"
    }
  }, {
    types: ["namespace"],
    style: {
      opacity: 0.7
    }
  }, {
    types: ["string", "attr-value"],
    style: {
      color: "#e3116c"
    }
  }, {
    types: ["punctuation", "operator"],
    style: {
      color: "#393A34"
    }
  }, {
    types: ["entity", "url", "symbol", "number", "boolean", "variable", "constant", "property", "regex", "inserted"],
    style: {
      color: "#36acaa"
    }
  }, {
    types: ["atrule", "keyword", "attr-name", "selector"],
    style: {
      color: "#00a4db"
    }
  }, {
    types: ["function", "deleted", "tag"],
    style: {
      color: "#d73a49"
    }
  }, {
    types: ["function-variable"],
    style: {
      color: "#6f42c1"
    }
  }, {
    types: ["tag", "selector", "keyword"],
    style: {
      color: "#00009f"
    }
  }]
};

var index_cjs$1 = theme$1;

const CodeBlock = ({ children = '', className = '' }) => {
    const language = className === null || className === void 0 ? void 0 : className.replace(/language-/, '');
    return (React.createElement(Highlight, Object.assign({}, defaultProps, { theme: index_cjs$1, code: children.trim(), language: language }), ({ className, style, tokens, getLineProps, getTokenProps }) => (React.createElement("pre", { className: className, style: style }, tokens.map((line, i) => (React.createElement("div", Object.assign({ key: i }, getLineProps({ line, key: i })), line.map((token, key) => (React.createElement("span", Object.assign({ key: key }, getTokenProps({ token, key }))))))))))));
};

const components = {
    pre: (props) => React.createElement("div", Object.assign({}, props)),
    code: CodeBlock,
};
const MDX = ({ children }) => {
    return React.createElement(MDXProvider, { components: components }, children);
};

const Layout = ({ sideMenuData, topNavs, logo, applyMdStyle, path, children, }) => {
    return (React.createElement("div", { className: s$2.layout },
        React.createElement(TopBar, { topNavs: topNavs, logo: logo }),
        React.createElement("div", { className: s$2.body },
            React.createElement(SideMenu, { data: sideMenuData }),
            React.createElement("div", { className: s$2.content + (applyMdStyle ? ` markdown-body` : ''), key: path }, applyMdStyle ? React.createElement(MDX, null, children) : children))));
};

function createTheme({ topNavs, logo, sideMenuData, } = {}) {
    return (pages) => {
        const menu = sideMenuData !== null && sideMenuData !== void 0 ? sideMenuData : defaultMenu(pages);
        return {
            initialLoading(pageStaticData) {
                return (React.createElement(Layout, { sideMenuData: menu, topNavs: topNavs !== null && topNavs !== void 0 ? topNavs : [], logo: logo, applyMdStyle: pageStaticData.sourceType === 'md', path: pageStaticData._path },
                    React.createElement("p", null, "initial Loading...")));
            },
            loaded(pageData) {
                if (pageData.isComposedPage) {
                    const composeModules = pageData.default;
                    return (React.createElement(Layout, { sideMenuData: menu, topNavs: topNavs !== null && topNavs !== void 0 ? topNavs : [], logo: logo, path: pageData._path }, composeModules.map((module, idx) => {
                        const part = pageData.parts[idx];
                        const ContentComp = module.default;
                        return (React.createElement("section", { style: { marginBottom: '40px' }, key: idx },
                            React.createElement("h2", null, part.title),
                            React.createElement(ContentComp, null)));
                    })));
                }
                const ContentComp = pageData.default;
                return (React.createElement(Layout, { sideMenuData: menu, topNavs: topNavs !== null && topNavs !== void 0 ? topNavs : [], logo: logo, applyMdStyle: pageData.sourceType === 'md', path: pageData._path },
                    React.createElement(ContentComp, null)));
            },
            transitionLoading(pageStaticData, prevPageData) {
                return (React.createElement(Layout, { sideMenuData: menu, topNavs: topNavs !== null && topNavs !== void 0 ? topNavs : [], logo: logo, applyMdStyle: pageStaticData.sourceType === 'md', path: pageStaticData._path },
                    React.createElement("p", null, "transition Loading...")));
            },
            loadError(error, pageStaticData) {
                return (React.createElement(Layout, { sideMenuData: menu, topNavs: topNavs !== null && topNavs !== void 0 ? topNavs : [], logo: logo, applyMdStyle: pageStaticData.sourceType === 'md', path: pageStaticData._path },
                    React.createElement("p", null, "Load error")));
            },
            noPageMatch(renderPage) {
                if (pages['/404']) {
                    return renderPage('/404');
                }
                return (React.createElement(Layout, { sideMenuData: menu, topNavs: topNavs !== null && topNavs !== void 0 ? topNavs : [], logo: logo },
                    React.createElement("p", null, "Page Not Found.")));
            },
        };
    };
}
function defaultMenu(pages) {
    return Object.entries(pages)
        .filter(([path]) => path !== '/404')
        .sort((a, b) => {
        const [pathA, { staticData: staticDataA }] = a;
        const [pathB, { staticData: staticDataB }] = b;
        let ASort;
        let BSort;
        if (staticDataA.sort)
            ASort = Number(staticDataA.sort);
        else
            ASort = 1;
        if (staticDataB.sort)
            BSort = Number(staticDataB.sort);
        else
            BSort = 1;
        if (ASort !== BSort)
            return ASort - BSort;
        return pathA.localeCompare(pathB);
    })
        .map(([path, { staticData }]) => {
        return {
            path,
            text: staticData.title || path,
        };
    });
}

var createTheme$1 = createTheme({
  topNavs: [
    {
      text: "⭐ Github",
      href: "https://github.com/vitejs/vite-plugin-react-pages"
    }
  ],
  logo: "Vite Pages"
});

/// <reference types="vite/dist/importMeta" />
let theme$2 = createTheme$1(pages);
const App = () => {
    return useMemo(() => {
        const renderPage = (path) => {
            if (!pages[path]) {
                throw new Error(`page not exist. path: ${path}`);
            }
            return React.createElement(PageLoader, { theme: theme$2, pages: pages, path: path });
        };
        const pageRoutes = Object.keys(pages)
            .filter((path) => path !== '/404')
            .map((path) => getPageRoute(path, renderPage));
        return (React.createElement(Switch, null,
            pageRoutes,
            React.createElement(Route, { path: "*", render: () => {
                    if (theme$2.noPageMatch) {
                        return theme$2.noPageMatch(renderPage);
                    }
                    return React.createElement("p", null, "Page Not Found");
                } })));
    }, [pages]);
};
function getPageRoute(path, renderPage) {
    return (React.createElement(Route
    // avoid re-mount layout component
    // https://github.com/ReactTraining/react-router/issues/3928#issuecomment-284152397
    , { 
        // avoid re-mount layout component
        // https://github.com/ReactTraining/react-router/issues/3928#issuecomment-284152397
        key: "same", exact: true, path: path }, renderPage(path)));
}

const Client = ({ initCache }) => {
    var _a;
    const [dataCache, setDataCache] = useState(initCache !== null && initCache !== void 0 ? initCache : { pages: {} });
    return (React.createElement(BrowserRouter, { basename: (_a = "/vite-plugin-react-pages/") === null || _a === void 0 ? void 0 : _a.replace(/\/$/, '') },
        React.createElement(dataCacheCtx.Provider, { value: dataCache },
            React.createElement(setDataCacheCtx.Provider, { value: setDataCache },
                React.createElement(App, null)))));
};

if (!window._vitePagesSSR) {
    throw new Error(`window._vitePagesSSRPath should be defined`);
}
import(window._vitePagesSSR.pageData).then((pageData) => {
    const initCache = {
        pages: {
            [window._vitePagesSSR.pagePublicPath]: { ...pageData },
        },
    };
    ReactDOM.hydrate(React.createElement(Client, { initCache: initCache }), document.getElementById('root'));
});

export { Link as L, React as R, Redirect as a, createElement$1 as c };
