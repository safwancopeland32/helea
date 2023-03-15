!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("angular")):"function"==typeof define&&define.amd?define(["exports","angular"],e):e(t["@uirouter/angularjs"]={},t.angular)}(this,function(t,e){"use strict";var r=angular,n=e&&e.module?e:r;function i(t){var e=[].slice.apply(arguments,[1]),r=t.length;return function e(n){return n.length>=r?t.apply(null,n):function(){return e(n.concat([].slice.apply(arguments)))}}(e)}function o(){var t=arguments,e=t.length-1;return function(){for(var r=e,n=t[e].apply(this,arguments);r--;)n=t[r].call(this,n);return n}}function a(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return o.apply(null,[].slice.call(arguments).reverse())}var u=function(t){return function(e){return e&&e[t]}},s=i(function(t,e,r){return r&&r[t]===e}),c=function(t){return a.apply(null,t.split(".").map(u))},f=function(t){return function(){for(var e=[],r=0;r<arguments.length;r++)e[r]=arguments[r];return!t.apply(null,e)}};function l(t,e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.apply(null,r)&&e.apply(null,r)}}function h(t,e){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return t.apply(null,r)||e.apply(null,r)}}var p=function(t){return function(e){return e.reduce(function(e,r){return e&&!!t(r)},!0)}},v=function(t){return function(e){return e.reduce(function(e,r){return e||!!t(r)},!1)}},d=function(t){return function(e){return null!=e&&e.constructor===t||e instanceof t}},m=function(t){return function(e){return t===e}},y=function(t){return function(){return t}};function g(t,e){return function(r){return r[t].apply(r,e)}}function _(t){return function(e){for(var r=0;r<t.length;r++)if(t[r][0](e))return t[r][1](e)}}var w=function(){function t(t){this.text=t,this.glob=t.split(".");var e=this.text.split(".").map(function(t){return"**"===t?"(?:|(?:\\.[^.]*)*)":"*"===t?"\\.[^.]*":"\\."+t}).join("");this.regexp=new RegExp("^"+e+"$")}return t.is=function(t){return!!/[!,*]+/.exec(t)},t.fromString=function(e){return t.is(e)?new t(e):null},t.prototype.matches=function(t){return this.regexp.test("."+t)},t}(),$=function(){function t(e){return t.create(e||{})}return t.create=function(e){e=t.isStateClass(e)?new e:e;var r=K(K(e,t.prototype));return e.$$state=function(){return r},r.self=e,r.__stateObjectCache={nameGlob:w.fromString(r.name)},r},t.prototype.is=function(t){return this===t||this.self===t||this.fqn()===t},t.prototype.fqn=function(){if(!(this.parent&&this.parent instanceof this.constructor))return this.name;var t=this.parent.fqn();return t?t+"."+this.name:this.name},t.prototype.root=function(){return this.parent&&this.parent.root()||this},t.prototype.parameters=function(t){return((t=it(t,{inherit:!0,matchingKeys:null})).inherit&&this.parent&&this.parent.parameters()||[]).concat(vt(this.params)).filter(function(e){return!t.matchingKeys||t.matchingKeys.hasOwnProperty(e.id)})},t.prototype.parameter=function(t,e){return void 0===e&&(e={}),this.url&&this.url.parameter(t,e)||lt(vt(this.params),s("id",t))||e.inherit&&this.parent&&this.parent.parameter(t)},t.prototype.toString=function(){return this.fqn()},t.isStateClass=function(t){return P(t)&&!0===t.__uiRouterState},t.isState=function(t){return x(t.__stateObjectCache)},t}(),S=Object.prototype.toString,b=function(t){return function(e){return typeof e===t}},R=b("undefined"),E=f(R),C=function(t){return null===t},T=h(C,R),P=b("function"),k=b("number"),O=b("string"),x=function(t){return null!==t&&"object"==typeof t},I=Array.isArray,V=function(t){return"[object Date]"===S.call(t)},j=function(t){return"[object RegExp]"===S.call(t)},A=$.isState;function H(t){if(I(t)&&t.length){var e=t.slice(0,-1),r=t.slice(-1);return!(e.filter(f(O)).length||r.filter(f(P)).length)}return P(t)}var D=l(x,a(u("then"),P)),q=function(t){return function(){throw new Error(t+"(): No coreservices implementation for UI-Router is loaded.")}},N={$q:void 0,$injector:void 0},F="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global||void 0,U=F.angular||{},L=U.fromJson||JSON.parse.bind(JSON),M=U.toJson||JSON.stringify.bind(JSON),B=U.forEach||function(t,e,r){if(I(t))return t.forEach(e,r);Object.keys(t).forEach(function(r){return e(t[r],r)})},G=Object.assign||xt,W=U.equals||It;function z(t){return t}function J(){}function Q(t,e,r,n,i){void 0===i&&(i=!1);var o=function(e){return t()[e].bind(r())};return(n=n||Object.keys(t())).reduce(function(t,r){var n;return t[r]=i?(n=r,function(){return e[n]=o(n),e[n].apply(null,arguments)}):o(r),t},e)}var K=function(t,e){return G(Object.create(t),e)},Y=i(Z);function Z(t,e){return-1!==t.indexOf(e)}var X=i(tt);function tt(t,e){var r=t.indexOf(e);return r>=0&&t.splice(r,1),t}var et=i(rt);function rt(t,e){return t.push(e),e}var nt=function(t){return t.slice().forEach(function(e){"function"==typeof e&&e(),X(t,e)})};function it(t){for(var e=[],r=1;r<arguments.length;r++)e[r-1]=arguments[r];var n=e.concat({}).reverse(),i=G.apply(null,n);return G({},i,ut(t||{},Object.keys(i)))}var ot=function(t,e){return G(t,e)};function at(t,e){var r=[];for(var n in t.path){if(t.path[n]!==e.path[n])break;r.push(t.path[n])}return r}function ut(t,e){var r={};for(var n in t)-1!==e.indexOf(n)&&(r[n]=t[n]);return r}function st(t,e){return Object.keys(t).filter(f(Y(e))).reduce(function(e,r){return e[r]=t[r],e},{})}function ct(t,e){return pt(t,u(e))}function ft(t,e){var r=I(t),n=r?[]:{},i=r?function(t){return n.push(t)}:function(t,e){return n[e]=t};return B(t,function(t,r){e(t,r)&&i(t,r)}),n}function lt(t,e){var r;return B(t,function(t,n){r||e(t,n)&&(r=t)}),r}var ht=pt;function pt(t,e,r){return r=r||(I(t)?[]:{}),B(t,function(t,n){return r[n]=e(t,n)}),r}var vt=function(t){return Object.keys(t).map(function(e){return t[e]})},dt=function(t,e){return t&&e},mt=function(t,e){return t||e},yt=function(t,e){return t.concat(e)},gt=function(t,e){return I(e)?t.concat(e.reduce(gt,[])):_t(t,e)};function _t(t,e){return t.push(e),t}var wt=function(t,e){return Y(t,e)?t:_t(t,e)},$t=function(t){return t.reduce(yt,[])},St=function(t){return t.reduce(gt,[])},bt=Et,Rt=Et;function Et(t,e){return void 0===e&&(e="assert failure"),function(r){var n=t(r);if(!n)throw new Error(P(e)?e(r):e);return n}}var Ct=function(t){return Object.keys(t).map(function(e){return[e,t[e]]})};function Tt(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(0===t.length)return[];for(var r=t.reduce(function(t,e){return Math.min(e.length,t)},9007199254740991),n=[],i=function(e){switch(t.length){case 1:n.push([t[0][e]]);break;case 2:n.push([t[0][e],t[1][e]]);break;case 3:n.push([t[0][e],t[1][e],t[2][e]]);break;case 4:n.push([t[0][e],t[1][e],t[2][e],t[3][e]]);break;default:n.push(t.map(function(t){return t[e]}))}},o=0;o<r;o++)i(o);return n}function Pt(t,e){var r,n;if(I(e)&&(r=e[0],n=e[1]),!O(r))throw new Error("invalid parameters to applyPairs");return t[r]=n,t}function kt(t){return t.length&&t[t.length-1]||void 0}function Ot(t,e){return e&&Object.keys(e).forEach(function(t){return delete e[t]}),e||(e={}),G(e,t)}function xt(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];if(r)for(var n=Object.keys(r),i=0;i<n.length;i++)t[n[i]]=r[n[i]]}return t}function It(t,e){if(t===e)return!0;if(null===t||null===e)return!1;if(t!=t&&e!=e)return!0;var r=typeof t;if(r!==typeof e||"object"!==r)return!1;var n,i,o=[t,e];if(p(I)(o))return i=e,(n=t).length===i.length&&Tt(n,i).reduce(function(t,e){return t&&It(e[0],e[1])},!0);if(p(V)(o))return t.getTime()===e.getTime();if(p(j)(o))return t.toString()===e.toString();if(p(P)(o))return!0;if([P,I,V,j].map(v).reduce(function(t,e){return t||!!e(o)},!1))return!1;var a={};for(var u in t){if(!It(t[u],e[u]))return!1;a[u]=!0}for(var u in e)if(!a[u])return!1;return!0}var Vt,jt=function(t){return t.catch(function(t){return 0})&&t},At=function(t){return jt(N.$q.reject(t))},Ht=function(){function t(t,e){void 0===t&&(t=[]),void 0===e&&(e=null),this._items=t,this._limit=e,this._evictListeners=[],this.onEvict=et(this._evictListeners)}return t.prototype.enqueue=function(t){var e=this._items;return e.push(t),this._limit&&e.length>this._limit&&this.evict(),t},t.prototype.evict=function(){var t=this._items.shift();return this._evictListeners.forEach(function(e){return e(t)}),t},t.prototype.dequeue=function(){if(this.size())return this._items.splice(0,1)[0]},t.prototype.clear=function(){var t=this._items;return this._items=[],t},t.prototype.size=function(){return this._items.length},t.prototype.remove=function(t){var e=this._items.indexOf(t);return e>-1&&this._items.splice(e,1)[0]},t.prototype.peekTail=function(){return this._items[this._items.length-1]},t.prototype.peekHead=function(){if(this.size())return this._items[0]},t}();(Vt=t.RejectType||(t.RejectType={}))[Vt.SUPERSEDED=2]="SUPERSEDED",Vt[Vt.ABORTED=3]="ABORTED",Vt[Vt.INVALID=4]="INVALID",Vt[Vt.IGNORED=5]="IGNORED",Vt[Vt.ERROR=6]="ERROR";var Dt=0,qt=function(){function e(t,e,r){this.$id=Dt++,this.type=t,this.message=e,this.detail=r}return e.isRejectionPromise=function(t){return t&&"function"==typeof t.then&&d(e)(t._transitionRejection)},e.superseded=function(r,n){var i=new e(t.RejectType.SUPERSEDED,"The transition has been superseded by a different transition",r);return n&&n.redirected&&(i.redirected=!0),i},e.redirected=function(t){return e.superseded(t,{redirected:!0})},e.invalid=function(r){return new e(t.RejectType.INVALID,"This transition is invalid",r)},e.ignored=function(r){return new e(t.RejectType.IGNORED,"The transition was ignored",r)},e.aborted=function(r){return new e(t.RejectType.ABORTED,"The transition has been aborted",r)},e.errored=function(r){return new e(t.RejectType.ERROR,"The transition errored",r)},e.normalize=function(t){return d(e)(t)?t:e.errored(t)},e.prototype.toString=function(){var t,e=(t=this.detail)&&t.toString!==Object.prototype.toString?t.toString():ke(t);return"Transition Rejection($id: "+this.$id+" type: "+this.type+", message: "+this.message+", detail: "+e+")"},e.prototype.toPromise=function(){return G(At(this),{_transitionRejection:this})},e}();function Nt(t){if(!t)return"ui-view (defunct)";var e=t.creationContext?t.creationContext.name||"(root)":"(none)";return"[ui-view#"+t.id+" "+t.$type+":"+t.fqn+" ("+t.name+"@"+e+")]"}function Ft(e){return k(e)?t.Category[e]:t.Category[t.Category[e]]}var Ut,Lt=Function.prototype.bind.call(console.log,console),Mt=P(console.table)?console.table.bind(console):Lt.bind(console);(Ut=t.Category||(t.Category={}))[Ut.RESOLVE=0]="RESOLVE",Ut[Ut.TRANSITION=1]="TRANSITION",Ut[Ut.HOOK=2]="HOOK",Ut[Ut.UIVIEW=3]="UIVIEW",Ut[Ut.VIEWCONFIG=4]="VIEWCONFIG";var Bt,Gt,Wt=c("$id"),zt=c("router.$id"),Jt=function(t){return"Transition #"+Wt(t)+"-"+zt(t)},Qt=function(){function e(){this._enabled={},this.approximateDigests=0}return e.prototype._set=function(e,r){var n=this;r.length||(r=Object.keys(t.Category).map(function(t){return parseInt(t,10)}).filter(function(t){return!isNaN(t)}).map(function(e){return t.Category[e]})),r.map(Ft).forEach(function(t){return n._enabled[t]=e})},e.prototype.enable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._set(!0,t)},e.prototype.disable=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._set(!1,t)},e.prototype.enabled=function(t){return!!this._enabled[Ft(t)]},e.prototype.traceTransitionStart=function(e){this.enabled(t.Category.TRANSITION)&&console.log(Jt(e)+": Started  -> "+ke(e))},e.prototype.traceTransitionIgnored=function(e){this.enabled(t.Category.TRANSITION)&&console.log(Jt(e)+": Ignored  <> "+ke(e))},e.prototype.traceHookInvocation=function(e,r,n){if(this.enabled(t.Category.HOOK)){var i=c("traceData.hookType")(n)||"internal",o=c("traceData.context.state.name")(n)||c("traceData.context")(n)||"unknown",a=Ee(e.registeredHook.callback);console.log(Jt(r)+":   Hook -> "+i+" context: "+o+", "+Se(200,a))}},e.prototype.traceHookResult=function(e,r,n){this.enabled(t.Category.HOOK)&&console.log(Jt(r)+":   <- Hook returned: "+Se(200,ke(e)))},e.prototype.traceResolvePath=function(e,r,n){this.enabled(t.Category.RESOLVE)&&console.log(Jt(n)+":         Resolving "+e+" ("+r+")")},e.prototype.traceResolvableResolved=function(e,r){this.enabled(t.Category.RESOLVE)&&console.log(Jt(r)+":               <- Resolved  "+e+" to: "+Se(200,ke(e.data)))},e.prototype.traceError=function(e,r){this.enabled(t.Category.TRANSITION)&&console.log(Jt(r)+": <- Rejected "+ke(r)+", reason: "+e)},e.prototype.traceSuccess=function(e,r){this.enabled(t.Category.TRANSITION)&&console.log(Jt(r)+": <- Success  "+ke(r)+", final state: "+e.name)},e.prototype.traceUIViewEvent=function(e,r,n){void 0===n&&(n=""),this.enabled(t.Category.UIVIEW)&&console.log("ui-view: "+be(30,e)+" "+Nt(r)+n)},e.prototype.traceUIViewConfigUpdated=function(e,r){this.enabled(t.Category.UIVIEW)&&this.traceUIViewEvent("Updating",e," with ViewConfig from context='"+r+"'")},e.prototype.traceUIViewFill=function(e,r){this.enabled(t.Category.UIVIEW)&&this.traceUIViewEvent("Fill",e," with: "+Se(200,r))},e.prototype.traceViewSync=function(e){if(this.enabled(t.Category.VIEWCONFIG)){var r="uiview component fqn",n=e.map(function(t){var e,n=t.uiView,i=t.viewConfig,o=n&&n.fqn,a=i&&i.viewDecl.$context.name+": ("+i.viewDecl.$name+")";return(e={})[r]=o,e["view config state (view name)"]=a,e}).sort(function(t,e){return(t[r]||"").localeCompare(e[r]||"")});Mt(n)}},e.prototype.traceViewServiceEvent=function(e,r){this.enabled(t.Category.VIEWCONFIG)&&console.log("VIEWCONFIG: "+e+" "+function(t){var e=t.viewDecl,r=e.$context.name||"(root)";return"[View#"+t.$id+" from '"+r+"' state]: target ui-view: '"+e.$uiViewName+"@"+e.$uiViewContextAnchor+"'"}(r))},e.prototype.traceViewServiceUIViewEvent=function(e,r){this.enabled(t.Category.VIEWCONFIG)&&console.log("VIEWCONFIG: "+e+" "+Nt(r))},e}(),Kt=new Qt;(Bt=t.TransitionHookPhase||(t.TransitionHookPhase={}))[Bt.CREATE=0]="CREATE",Bt[Bt.BEFORE=1]="BEFORE",Bt[Bt.RUN=2]="RUN",Bt[Bt.SUCCESS=3]="SUCCESS",Bt[Bt.ERROR=4]="ERROR",(Gt=t.TransitionHookScope||(t.TransitionHookScope={}))[Gt.TRANSITION=0]="TRANSITION",Gt[Gt.STATE=1]="STATE";var Yt=function(){function t(t,e,r,n){this._stateRegistry=t,this._identifier=e,this._identifier=e,this._params=G({},r||{}),this._options=G({},n||{}),this._definition=t.matcher.find(e,this._options.relative)}return t.prototype.name=function(){return this._definition&&this._definition.name||this._identifier},t.prototype.identifier=function(){return this._identifier},t.prototype.params=function(){return this._params},t.prototype.$state=function(){return this._definition},t.prototype.state=function(){return this._definition&&this._definition.self},t.prototype.options=function(){return this._options},t.prototype.exists=function(){return!(!this._definition||!this._definition.self)},t.prototype.valid=function(){return!this.error()},t.prototype.error=function(){var t=this.options().relative;if(!this._definition&&t){var e=t.name?t.name:t;return"Could not resolve '"+this.name()+"' from state '"+e+"'"}return this._definition?this._definition.self?void 0:"State '"+this.name()+"' has an invalid definition":"No such state '"+this.name()+"'"},t.prototype.toString=function(){return"'"+this.name()+"'"+ke(this.params())},t.prototype.withState=function(e){return new t(this._stateRegistry,e,this._params,this._options)},t.prototype.withParams=function(e,r){void 0===r&&(r=!1);var n=r?e:G({},this._params,e);return new t(this._stateRegistry,this._identifier,n,this._options)},t.prototype.withOptions=function(e,r){void 0===r&&(r=!1);var n=r?e:G({},this._options,e);return new t(this._stateRegistry,this._identifier,this._params,n)},t.isDef=function(t){return t&&t.state&&(O(t.state)||O(t.state.name))},t}(),Zt={current:J,transition:null,traceData:{},bind:null},Xt=function(){function e(e,r,n,i){var o=this;this.transition=e,this.stateContext=r,this.registeredHook=n,this.options=i,this.isSuperseded=function(){return o.type.hookPhase===t.TransitionHookPhase.RUN&&!o.options.transition.isActive()},this.options=it(i,Zt),this.type=n.eventType}return e.chain=function(t,e){return t.reduce(function(t,e){return t.then(function(){return e.invokeHook()})},e||N.$q.when())},e.invokeHooks=function(t,r){for(var n=0;n<t.length;n++){var i=t[n].invokeHook();if(D(i)){var o=t.slice(n+1);return e.chain(o,i).then(r)}}return r()},e.runAllHooks=function(t){t.forEach(function(t){return t.invokeHook()})},e.prototype.logError=function(t){this.transition.router.stateService.defaultErrorHandler()(t)},e.prototype.invokeHook=function(){var t=this,e=this.registeredHook;if(!e._deregistered){var r=this.getNotCurrentRejection();if(r)return r;var n=this.options;Kt.traceHookInvocation(this,this.transition,n);var i=function(r){return e.eventType.getErrorHandler(t)(r)},o=function(r){return e.eventType.getResultHandler(t)(r)};try{var a=e.callback.call(n.bind,t.transition,t.stateContext);return!this.type.synchronous&&D(a)?a.catch(function(t){return qt.normalize(t).toPromise()}).then(o,i):o(a)}catch(t){return i(qt.normalize(t))}finally{e.invokeLimit&&++e.invokeCount>=e.invokeLimit&&e.deregister()}}},e.prototype.handleHookResult=function(t){var e=this,r=this.getNotCurrentRejection();return r||(D(t)?t.then(function(t){return e.handleHookResult(t)}):(Kt.traceHookResult(t,this.transition,this.options),!1===t?qt.aborted("Hook aborted transition").toPromise():d(Yt)(t)?qt.redirected(t).toPromise():void 0))},e.prototype.getNotCurrentRejection=function(){var t=this.transition.router;return t._disposed?qt.aborted("UIRouter instance #"+t.$id+" has been stopped (disposed)").toPromise():this.transition._aborted?qt.aborted().toPromise():this.isSuperseded()?qt.superseded(this.options.current()).toPromise():void 0},e.prototype.toString=function(){var t=this.options,e=this.registeredHook;return(c("traceData.hookType")(t)||"internal")+" context: "+(c("traceData.context.state.name")(t)||c("traceData.context")(t)||"unknown")+", "+Se(200,Ce(e.callback))},e.HANDLE_RESULT=function(t){return function(e){return t.handleHookResult(e)}},e.LOG_REJECTED_RESULT=function(t){return function(e){D(e)&&e.catch(function(e){return t.logError(qt.normalize(e))})}},e.LOG_ERROR=function(t){return function(e){return t.logError(e)}},e.REJECT_ERROR=function(t){return function(t){return At(t)}},e.THROW_ERROR=function(t){return function(t){throw t}},e}();function te(t,e){var r=O(e)?[e]:e;return!!(P(r)?r:function(t){for(var e=r,n=0;n<e.length;n++){var i=new w(e[n]);if(i&&i.matches(t.name)||!i&&e[n]===t.name)return!0}return!1})(t)}var ee=function(){function e(t,e,r,n,i,o){void 0===o&&(o={}),this.tranSvc=t,this.eventType=e,this.callback=r,this.matchCriteria=n,this.removeHookFromRegistry=i,this.invokeCount=0,this._deregistered=!1,this.priority=o.priority||0,this.bind=o.bind||null,this.invokeLimit=o.invokeLimit}return e.prototype._matchingNodes=function(t,e){if(!0===e)return t;var r=t.filter(function(t){return te(t.state,e)});return r.length?r:null},e.prototype._getDefaultMatchCriteria=function(){return ht(this.tranSvc._pluginapi._getPathTypes(),function(){return!0})},e.prototype._getMatchingNodes=function(e){var r=this,n=G(this._getDefaultMatchCriteria(),this.matchCriteria);return vt(this.tranSvc._pluginapi._getPathTypes()).reduce(function(i,o){var a=o.scope===t.TransitionHookScope.STATE,u=e[o.name]||[],s=a?u:[kt(u)];return i[o.name]=r._matchingNodes(s,n[o.name]),i},{})},e.prototype.matches=function(t){var e=this._getMatchingNodes(t);return vt(e).every(z)?e:null},e.prototype.deregister=function(){this.removeHookFromRegistry(this),this._deregistered=!0},e}();function re(t,e,r){var n=(t._registeredHooks=t._registeredHooks||{})[r.name]=[],i=X(n);function o(t,o,a){void 0===a&&(a={});var u=new ee(e,r,o,t,i,a);return n.push(u),u.deregister.bind(u)}return t[r.name]=o,o}var ne=function(){function e(t){this.transition=t}return e.prototype.buildHooksForPhase=function(t){var e=this;return this.transition.router.transitionService._pluginapi._getEvents(t).map(function(t){return e.buildHooks(t)}).reduce(yt,[]).filter(z)},e.prototype.buildHooks=function(e){var r=this.transition,n=r.treeChanges(),i=this.getMatchingHooks(e,n);if(!i)return[];var o={transition:r,current:r.options().current};return i.map(function(i){return i.matches(n)[e.criteriaMatchPath.name].map(function(n){var a=G({bind:i.bind,traceData:{hookType:e.name,context:n}},o),u=e.criteriaMatchPath.scope===t.TransitionHookScope.STATE?n.state.self:null,s=new Xt(r,u,i,a);return{hook:i,node:n,transitionHook:s}})}).reduce(yt,[]).sort(function(t){void 0===t&&(t=!1);return function(e,r){var n=t?-1:1,i=(e.node.state.path.length-r.node.state.path.length)*n;return 0!==i?i:r.hook.priority-e.hook.priority}}(e.reverseSort)).map(function(t){return t.transitionHook})},e.prototype.getMatchingHooks=function(e,r){var n=e.hookPhase===t.TransitionHookPhase.CREATE,i=this.transition.router.transitionService;return(n?[i]:[this.transition,i]).map(function(t){return t.getHooks(e.name)}).filter(bt(I,"broken event named: "+e.name)).reduce(yt,[]).filter(function(t){return t.matches(r)})},e}();var ie=function(){function t(t){this.pattern=/.*/,this.inherit=!0,G(this,t)}return t.prototype.is=function(t,e){return!0},t.prototype.encode=function(t,e){return t},t.prototype.decode=function(t,e){return t},t.prototype.equals=function(t,e){return t==e},t.prototype.$subPattern=function(){var t=this.pattern.toString();return t.substr(1,t.length-2)},t.prototype.toString=function(){return"{ParamType:"+this.name+"}"},t.prototype.$normalize=function(t){return this.is(t)?t:this.decode(t)},t.prototype.$asArray=function(t,e){if(!t)return this;if("auto"===t&&!e)throw new Error("'auto' array mode is for query parameters only");return new function(t,e){var r=this;function n(t){return I(t)?t:E(t)?[t]:[]}function i(t,r){return function(i){if(I(i)&&0===i.length)return i;var o=n(i),a=pt(o,t);return!0===r?0===ft(a,function(t){return!t}).length:function(t){switch(t.length){case 0:return;case 1:return"auto"===e?t[0]:t;default:return t}}(a)}}function o(t){return function(e,r){var i=n(e),o=n(r);if(i.length!==o.length)return!1;for(var a=0;a<i.length;a++)if(!t(i[a],o[a]))return!1;return!0}}["encode","decode","equals","$normalize"].forEach(function(e){var n=t[e].bind(t),a="equals"===e?o:i;r[e]=a(n)}),G(this,{dynamic:t.dynamic,name:t.name,pattern:t.pattern,inherit:t.inherit,is:i(t.is.bind(t),!0),$arrayMode:e})}(this,t)},t}();var oe,ae=Object.prototype.hasOwnProperty,ue=function(t){return 0===["value","type","squash","array","dynamic"].filter(ae.bind(t||{})).length};(oe=t.DefType||(t.DefType={}))[oe.PATH=0]="PATH",oe[oe.SEARCH=1]="SEARCH",oe[oe.CONFIG=2]="CONFIG";var se=function(){function e(e,r,n,i,o){r=function(e,r,n,i,o){if(e.type&&r&&"string"!==r.name)throw new Error("Param '"+i+"' has two type configurations.");if(e.type&&r&&"string"===r.name&&o.type(e.type))return o.type(e.type);if(r)return r;if(!e.type){var a=n===t.DefType.CONFIG?"any":n===t.DefType.PATH?"path":n===t.DefType.SEARCH?"query":"string";return o.type(a)}return e.type instanceof ie?e.type:o.type(e.type)}(n=function(t){function e(){return t.value}return t=ue(t)&&{value:t}||t,e.__cacheable=!0,G(t,{$$fn:H(t.value)?t.value:e})}(n),r,i,e,o.paramTypes);var a,s,c=(a={array:i===t.DefType.SEARCH&&"auto"},s=e.match(/\[\]$/)?{array:!0}:{},G(a,s,n).array);r=c?r.$asArray(c,i===t.DefType.SEARCH):r;var f=void 0!==n.value||i===t.DefType.SEARCH,l=E(n.dynamic)?!!n.dynamic:!!r.dynamic,h=E(n.raw)?!!n.raw:!!r.raw,p=function(t,e,r){var n=t.squash;if(!e||!1===n)return!1;if(!E(n)||null==n)return r;if(!0===n||O(n))return n;throw new Error("Invalid squash policy: '"+n+"'. Valid policies: false, true, or arbitrary string")}(n,f,o.defaultSquashPolicy()),v=function(t,e,r,n){var i=[{from:"",to:r||e?void 0:""},{from:null,to:r||e?void 0:""}],o=I(t.replace)?t.replace:[];O(n)&&o.push({from:n,to:void 0});var a=pt(o,u("from"));return ft(i,function(t){return-1===a.indexOf(t.from)}).concat(o)}(n,c,f,p),d=E(n.inherit)?!!n.inherit:!!r.inherit;G(this,{id:e,type:r,location:i,isOptional:f,dynamic:l,raw:h,squash:p,replace:v,inherit:d,array:c,config:n})}return e.values=function(t,e){void 0===e&&(e={});for(var r={},n=0,i=t;n<i.length;n++){var o=i[n];r[o.id]=o.value(e[o.id])}return r},e.changed=function(t,e,r){return void 0===e&&(e={}),void 0===r&&(r={}),t.filter(function(t){return!t.type.equals(e[t.id],r[t.id])})},e.equals=function(t,r,n){return void 0===r&&(r={}),void 0===n&&(n={}),0===e.changed(t,r,n).length},e.validates=function(t,e){return void 0===e&&(e={}),t.map(function(t){return t.validates(e[t.id])}).reduce(dt,!0)},e.prototype.isDefaultValue=function(t){return this.isOptional&&this.type.equals(this.value(),t)},e.prototype.value=function(t){var e=this;return t=function(t){for(var r=0,n=e.replace;r<n.length;r++){var i=n[r];if(i.from===t)return i.to}return t}(t),R(t)?function(){if(e._defaultValueCache)return e._defaultValueCache.defaultValue;if(!N.$injector)throw new Error("Injectable functions cannot be called at configuration time");var t=N.$injector.invoke(e.config.$$fn);if(null!==t&&void 0!==t&&!e.type.is(t))throw new Error("Default value ("+t+") for parameter '"+e.id+"' is not an instance of ParamType ("+e.type.name+")");return e.config.$$fn.__cacheable&&(e._defaultValueCache={defaultValue:t}),t}():this.type.$normalize(t)},e.prototype.isSearch=function(){return this.location===t.DefType.SEARCH},e.prototype.validates=function(t){if((R(t)||null===t)&&this.isOptional)return!0;var e=this.type.$normalize(t);if(!this.type.is(e))return!1;var r=this.type.encode(e);return!(O(r)&&!this.type.pattern.exec(r))},e.prototype.toString=function(){return"{Param:"+this.id+" "+this.type+" squash: '"+this.squash+"' optional: "+this.isOptional+"}"},e}(),ce=function(){function t(e){if(e instanceof t){var r=e;this.state=r.state,this.paramSchema=r.paramSchema.slice(),this.paramValues=G({},r.paramValues),this.resolvables=r.resolvables.slice(),this.views=r.views&&r.views.slice()}else{var n=e;this.state=n,this.paramSchema=n.parameters({inherit:!1}),this.paramValues={},this.resolvables=n.resolvables.map(function(t){return t.clone()})}}return t.prototype.clone=function(){return new t(this)},t.prototype.applyRawParams=function(t){return this.paramValues=this.paramSchema.reduce(function(e,r){return Pt(e,[(n=r).id,n.value(t[n.id])]);var n},{}),this},t.prototype.parameter=function(t){return lt(this.paramSchema,s("id",t))},t.prototype.equals=function(t,e){var r=this.diff(t,e);return r&&0===r.length},t.prototype.diff=function(t,e){if(this.state!==t.state)return!1;var r=e?e(this):this.paramSchema;return se.changed(r,this.paramValues,t.paramValues)},t.clone=function(t){return t.clone()},t}(),fe=function(){function t(){}return t.makeTargetState=function(t,e){var r=kt(e).state;return new Yt(t,r,e.map(u("paramValues")).reduce(ot,{}),{})},t.buildPath=function(t){var e=t.params();return t.$state().path.map(function(t){return new ce(t).applyRawParams(e)})},t.buildToPath=function(e,r){var n=t.buildPath(r);return r.options().inherit?t.inheritParams(e,n,Object.keys(r.params())):n},t.applyViewConfigs=function(e,r,n){r.filter(function(t){return Y(n,t.state)}).forEach(function(n){var i=vt(n.state.views||{}),o=t.subPath(r,function(t){return t===n}),a=i.map(function(t){return e.createViewConfig(o,t)});n.views=a.reduce(yt,[])})},t.inheritParams=function(t,e,r){void 0===r&&(r=[]);var n=t.map(function(t){return t.paramSchema}).reduce(yt,[]).filter(function(t){return!t.inherit}).map(u("id"));return e.map(function(e){var i=G({},e&&e.paramValues),o=ut(i,r);i=st(i,r);var a,u,c,f=st((a=t,u=e.state,c=lt(a,s("state",u)),G({},c&&c.paramValues)||{}),n),l=G(i,f,o);return new ce(e.state).applyRawParams(l)})},t.treeChanges=function(e,r,n){for(var i,o,a,u,s,c,f=Math.min(e.length,r.length),l=0;l<f&&e[l].state!==n&&(i=e[l],o=r[l],i.equals(o,t.nonDynamicParams));)l++;u=(a=e).slice(0,l),s=a.slice(l);var h=u.map(function(t,e){var n=t.clone();return n.paramValues=r[e].paramValues,n});return c=r.slice(l),{from:a,to:h.concat(c),retained:u,retainedWithToParams:h,exiting:s,entering:c}},t.matching=function(t,e,r){var n=!1;return Tt(t,e).reduce(function(t,e){var i=e[0],o=e[1];return(n=n||!i.equals(o,r))?t:t.concat(i)},[])},t.equals=function(e,r,n){return e.length===r.length&&t.matching(e,r,n).length===e.length},t.subPath=function(t,e){var r=lt(t,e),n=t.indexOf(r);return-1===n?void 0:t.slice(0,n+1)},t.nonDynamicParams=function(t){return t.state.parameters({inherit:!1}).filter(function(t){return!t.dynamic})},t.paramValues=function(t){return t.reduce(function(t,e){return G(t,e.paramValues)},{})},t}(),le={when:"LAZY",async:"WAIT"},he=function(){function t(e,r,n,i,o){if(this.resolved=!1,this.promise=void 0,e instanceof t)G(this,e);else if(P(r)){if(T(e))throw new Error("new Resolvable(): token argument is required");if(!P(r))throw new Error("new Resolvable(): resolveFn argument must be a function");this.token=e,this.policy=i,this.resolveFn=r,this.deps=n||[],this.data=o,this.resolved=void 0!==o,this.promise=this.resolved?N.$q.when(this.data):void 0}else if(x(e)&&e.token&&(e.hasOwnProperty("resolveFn")||e.hasOwnProperty("data"))){var a=e;return new t(a.token,a.resolveFn,a.deps,a.policy,a.data)}}return t.prototype.getPolicy=function(t){var e=this.policy||{},r=t&&t.resolvePolicy||{};return{when:e.when||r.when||le.when,async:e.async||r.async||le.async}},t.prototype.resolve=function(t,e){var r=this,n=N.$q,i=t.findNode(this),o=i&&i.state,a="RXWAIT"===this.getPolicy(o).async?function(t){var e=t.cache(1);return e.take(1).toPromise().then(function(){return e})}:z;return this.promise=n.when().then(function(){return n.all(t.getDependencies(r).map(function(r){return r.get(t,e)}))}).then(function(t){return r.resolveFn.apply(null,t)}).then(a).then(function(t){return r.data=t,r.resolved=!0,r.resolveFn=null,Kt.traceResolvableResolved(r,e),r.data})},t.prototype.get=function(t,e){return this.promise||this.resolve(t,e)},t.prototype.toString=function(){return"Resolvable(token: "+ke(this.token)+", requires: ["+this.deps.map(ke)+"])"},t.prototype.clone=function(){return new t(this)},t.fromData=function(e,r){return new t(e,function(){return r},null,null,r)},t}(),pe={when:{LAZY:"LAZY",EAGER:"EAGER"},async:{WAIT:"WAIT",NOWAIT:"NOWAIT",RXWAIT:"RXWAIT"}},ve=pe.when,de=[ve.EAGER,ve.LAZY],me=[ve.EAGER],ye="Native Injector",ge=function(){function t(t){this._path=t}return t.prototype.getTokens=function(){return this._path.reduce(function(t,e){return t.concat(e.resolvables.map(function(t){return t.token}))},[]).reduce(wt,[])},t.prototype.getResolvable=function(t){return kt(this._path.map(function(t){return t.resolvables}).reduce(yt,[]).filter(function(e){return e.token===t}))},t.prototype.getPolicy=function(t){var e=this.findNode(t);return t.getPolicy(e.state)},t.prototype.subContext=function(e){return new t(fe.subPath(this._path,function(t){return t.state===e}))},t.prototype.addResolvables=function(t,e){var r=lt(this._path,s("state",e)),n=t.map(function(t){return t.token});r.resolvables=r.resolvables.filter(function(t){return-1===n.indexOf(t.token)}).concat(t)},t.prototype.resolvePath=function(t,e){var r=this;void 0===t&&(t="LAZY");var n=(Y(de,t)?t:"LAZY")===pe.when.EAGER?me:de;Kt.traceResolvePath(this._path,t,e);var i=function(t,e){return function(n){return Y(t,r.getPolicy(n)[e])}},o=this._path.reduce(function(t,o){var a=o.resolvables.filter(i(n,"when")),u=a.filter(i(["NOWAIT"],"async")),s=a.filter(f(i(["NOWAIT"],"async"))),c=r.subContext(o.state),l=function(t){return t.get(c,e).then(function(e){return{token:t.token,value:e}})};return u.forEach(l),t.concat(s.map(l))},[]);return N.$q.all(o)},t.prototype.injector=function(){return this._injector||(this._injector=new _e(this))},t.prototype.findNode=function(t){return lt(this._path,function(e){return Y(e.resolvables,t)})},t.prototype.getDependencies=function(t){var e=this,r=this.findNode(t),n=(fe.subPath(this._path,function(t){return t===r})||this._path).reduce(function(t,e){return t.concat(e.resolvables)},[]).filter(function(e){return e!==t});return t.deps.map(function(t){var r=n.filter(function(e){return e.token===t});if(r.length)return kt(r);var i=e.injector().getNative(t);if(R(i))throw new Error("Could not find Dependency Injection token: "+ke(t));return new he(t,function(){return i},[],i)})},t}(),_e=function(){function t(t){this.context=t,this.native=this.get(ye)||N.$injector}return t.prototype.get=function(t){var e=this.context.getResolvable(t);if(e){if("NOWAIT"===this.context.getPolicy(e).async)return e.get(this.context);if(!e.resolved)throw new Error("Resolvable async .get() not complete:"+ke(e.token));return e.data}return this.getNative(t)},t.prototype.getAsync=function(t){var e=this.context.getResolvable(t);return e?e.get(this.context):N.$q.when(this.native.get(t))},t.prototype.getNative=function(t){return this.native&&this.native.get(t)},t}(),we=u("self"),$e=function(){function e(e,r,n){var i=this;if(this._deferred=N.$q.defer(),this.promise=this._deferred.promise,this._registeredHooks={},this._hookBuilder=new ne(this),this.isActive=function(){return i.router.globals.transition===i},this.router=n,this._targetState=r,!r.valid())throw new Error(r.error());this._options=G({current:y(this)},r.options()),this.$id=n.transitionService._transitionCount++;var o=fe.buildToPath(e,r);this._treeChanges=fe.treeChanges(e,o,this._options.reloadState),this.createTransitionHookRegFns();var a=this._hookBuilder.buildHooksForPhase(t.TransitionHookPhase.CREATE);Xt.invokeHooks(a,function(){return null}),this.applyViewConfigs(n)}return e.prototype.onBefore=function(t,e,r){},e.prototype.onStart=function(t,e,r){},e.prototype.onExit=function(t,e,r){},e.prototype.onRetain=function(t,e,r){},e.prototype.onEnter=function(t,e,r){},e.prototype.onFinish=function(t,e,r){},e.prototype.onSuccess=function(t,e,r){},e.prototype.onError=function(t,e,r){},e.prototype.createTransitionHookRegFns=function(){var e=this;this.router.transitionService._pluginapi._getEvents().filter(function(e){return e.hookPhase!==t.TransitionHookPhase.CREATE}).forEach(function(t){return re(e,e.router.transitionService,t)})},e.prototype.getHooks=function(t){return this._registeredHooks[t]},e.prototype.applyViewConfigs=function(t){var e=this._treeChanges.entering.map(function(t){return t.state});fe.applyViewConfigs(t.transitionService.$view,this._treeChanges.to,e)},e.prototype.$from=function(){return kt(this._treeChanges.from).state},e.prototype.$to=function(){return kt(this._treeChanges.to).state},e.prototype.from=function(){return this.$from().self},e.prototype.to=function(){return this.$to().self},e.prototype.targetState=function(){return this._targetState},e.prototype.is=function(t){return t instanceof e?this.is({to:t.$to().name,from:t.$from().name}):!(t.to&&!te(this.$to(),t.to)||t.from&&!te(this.$from(),t.from))},e.prototype.params=function(t){return void 0===t&&(t="to"),Object.freeze(this._treeChanges[t].map(u("paramValues")).reduce(ot,{}))},e.prototype.injector=function(t,e){void 0===e&&(e="to");var r=this._treeChanges[e];return t&&(r=fe.subPath(r,function(e){return e.state===t||e.state.name===t})),new ge(r).injector()},e.prototype.getResolveTokens=function(t){return void 0===t&&(t="to"),new ge(this._treeChanges[t]).getTokens()},e.prototype.addResolvable=function(t,e){void 0===e&&(e=""),t=d(he)(t)?t:new he(t);var r="string"==typeof e?e:e.name,n=this._treeChanges.to,i=lt(n,function(t){return t.state.name===r});new ge(n).addResolvables([t],i.state)},e.prototype.redirectedFrom=function(){return this._options.redirectedFrom||null},e.prototype.originalTransition=function(){var t=this.redirectedFrom();return t&&t.originalTransition()||this},e.prototype.options=function(){return this._options},e.prototype.entering=function(){return pt(this._treeChanges.entering,u("state")).map(we)},e.prototype.exiting=function(){return pt(this._treeChanges.exiting,u("state")).map(we).reverse()},e.prototype.retained=function(){return pt(this._treeChanges.retained,u("state")).map(we)},e.prototype.views=function(t,e){void 0===t&&(t="entering");var r=this._treeChanges[t];return(r=e?r.filter(s("state",e)):r).map(u("views")).filter(z).reduce(yt,[])},e.prototype.treeChanges=function(t){return t?this._treeChanges[t]:this._treeChanges},e.prototype.redirect=function(t){for(var e=1,r=this;null!=(r=r.redirectedFrom());)if(++e>20)throw new Error("Too many consecutive Transition redirects (20+)");var n={redirectedFrom:this,source:"redirect"};"url"===this.options().source&&!1!==t.options().location&&(n.location="replace");var i=G({},this.options(),t.options(),n);t=t.withOptions(i,!0);var o,a=this.router.transitionService.create(this._treeChanges.from,t),u=this._treeChanges.entering,s=a._treeChanges.entering;return fe.matching(s,u,fe.nonDynamicParams).filter(f((o=t.options().reloadState,function(t){return o&&t.state.includes[o.name]}))).forEach(function(t,e){t.resolvables=u[e].resolvables}),a},e.prototype._changedParams=function(){var t=this._treeChanges;if(!this._options.reload&&(!t.exiting.length&&!t.entering.length&&t.to.length===t.from.length&&!Tt(t.to,t.from).map(function(t){return t[0].state!==t[1].state}).reduce(mt,!1))){var e=t.to.map(function(t){return t.paramSchema}),r=[t.to,t.from].map(function(t){return t.map(function(t){return t.paramValues})});return Tt(e,r[0],r[1]).map(function(t){var e=t[0],r=t[1],n=t[2];return se.changed(e,r,n)}).reduce(yt,[])}},e.prototype.dynamic=function(){var t=this._changedParams();return!!t&&t.map(function(t){return t.dynamic}).reduce(mt,!1)},e.prototype.ignored=function(){return!!this._ignoredReason()},e.prototype._ignoredReason=function(){var t=this.router.globals.transition,e=this._options.reloadState,r=function(t,r){if(t.length!==r.length)return!1;var n=fe.matching(t,r);return t.length===n.filter(function(t){return!e||!t.state.includes[e.name]}).length},n=this.treeChanges(),i=t&&t.treeChanges();return i&&r(i.to,n.to)&&r(i.exiting,n.exiting)?"SameAsPending":0===n.exiting.length&&0===n.entering.length&&r(n.from,n.to)?"SameAsCurrent":void 0},e.prototype.run=function(){var e=this,r=Xt.runAllHooks,n=function(t){return e._hookBuilder.buildHooksForPhase(t)},i=n(t.TransitionHookPhase.BEFORE);return Xt.invokeHooks(i,function(){var t=e.router.globals;return t.lastStartedTransitionId=e.$id,t.transition=e,t.transitionHistory.enqueue(e),Kt.traceTransitionStart(e),N.$q.when(void 0)}).then(function(){var e=n(t.TransitionHookPhase.RUN);return Xt.invokeHooks(e,function(){return N.$q.when(void 0)})}).then(function(){Kt.traceSuccess(e.$to(),e),e.success=!0,e._deferred.resolve(e.to()),r(n(t.TransitionHookPhase.SUCCESS))},function(i){Kt.traceError(i,e),e.success=!1,e._deferred.reject(i),e._error=i,r(n(t.TransitionHookPhase.ERROR))}),this.promise},e.prototype.valid=function(){return!this.error()||void 0!==this.success},e.prototype.abort=function(){R(this.success)&&(this._aborted=!0)},e.prototype.error=function(){var t=this.$to();if(t.self.abstract)return"Cannot transition to abstract state '"+t.name+"'";var e=t.parameters(),r=this.params(),n=e.filter(function(t){return!t.validates(r[t.id])});return n.length?"Param values not valid for state '"+t.name+"'. Invalid params: [ "+n.map(function(t){return t.id}).join(", ")+" ]":!1===this.success?this._error:void 0},e.prototype.toString=function(){var t=this.from(),e=this.to(),r=function(t){return null!==t["#"]&&void 0!==t["#"]?t:st(t,["#"])};return"Transition#"+this.$id+"( '"+(x(t)?t.name:t)+"'"+ke(r(this._treeChanges.from.map(u("paramValues")).reduce(ot,{})))+" -> "+(this.valid()?"":"(X) ")+"'"+(x(e)?e.name:e)+"'"+ke(r(this.params()))+" )"},e.diToken=e,e}();function Se(t,e){return e.length<=t?e:e.substr(0,t-3)+"..."}function be(t,e){for(;e.length<t;)e+=" ";return e}function Re(t){return t.replace(/^([A-Z])/,function(t){return t.toLowerCase()}).replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function Ee(t){var e=Ce(t),r=e.match(/^(function [^ ]+\([^)]*\))/),n=r?r[1]:e,i=t.name||"";return i&&n.match(/function \(/)?"function "+i+n.substr(9):n}function Ce(t){var e=I(t)?t.slice(-1)[0]:t;return e&&e.toString()||"undefined"}var Te=null,Pe=function(t){var e=qt.isRejectionPromise;return(Te=Te||_([[f(E),y("undefined")],[C,y("null")],[D,y("[Promise]")],[e,function(t){return t._transitionRejection.toString()}],[d(qt),g("toString")],[d($e),g("toString")],[d(he),g("toString")],[H,Ee],[y(!0),z]]))(t)};function ke(t){var e=[];return JSON.stringify(t,function(t,r){return function(t){if(x(t)){if(-1!==e.indexOf(t))return"[circular ref]";e.push(t)}return Pe(t)}(r)}).replace(/\\"/g,'"')}var Oe=function(t){return function(e){if(!e)return["",""];var r=e.indexOf(t);return-1===r?[e,""]:[e.substr(0,r),e.substr(r+1)]}},xe=new RegExp("^(?:[a-z]+:)?//[^/]+/"),Ie=function(t){return t.replace(/\/[^/]*$/,"")},Ve=Oe("#"),je=Oe("?"),Ae=Oe("="),He=function(t){return t?t.replace(/^#/,""):""};function De(t){var e=new RegExp("("+t+")","g");return function(t){return t.split(e).filter(z)}}function qe(t,e){return O(kt(t))&&O(e)?t.slice(0,-1).concat(kt(t)+e):_t(t,e)}var Ne,Fe=function(){function t(){this.enqueue=!0,this.typeQueue=[],this.defaultTypes=ut(t.prototype,["hash","string","query","path","int","bool","date","json","any"]);this.types=K(pt(this.defaultTypes,function(t,e){return new ie(G({name:e},t))}),{})}return t.prototype.dispose=function(){this.types={}},t.prototype.type=function(t,e,r){if(!E(e))return this.types[t];if(this.types.hasOwnProperty(t))throw new Error("A type named '"+t+"' has already been defined.");return this.types[t]=new ie(G({name:t},e)),r&&(this.typeQueue.push({name:t,def:r}),this.enqueue||this._flushTypeQueue()),this},t.prototype._flushTypeQueue=function(){for(;this.typeQueue.length;){var t=this.typeQueue.shift();if(t.pattern)throw new Error("You cannot override a type's .pattern at runtime.");G(this.types[t.name],N.$injector.invoke(t.def))}},t}();Ne=function(t){var e=function(t){return null!=t?t.toString():t},r={encode:e,decode:e,is:d(String),pattern:/.*/,equals:function(t,e){return t==e}};return G({},r,t)},G(Fe.prototype,{string:Ne({}),path:Ne({pattern:/[^/]*/}),query:Ne({}),hash:Ne({inherit:!1}),int:Ne({decode:function(t){return parseInt(t,10)},is:function(t){return!T(t)&&this.decode(t.toString())===t},pattern:/-?\d+/}),bool:Ne({encode:function(t){return t?1:0},decode:function(t){return 0!==parseInt(t,10)},is:d(Boolean),pattern:/0|1/}),date:Ne({encode:function(t){return this.is(t)?[t.getFullYear(),("0"+(t.getMonth()+1)).slice(-2),("0"+t.getDate()).slice(-2)].join("-"):void 0},decode:function(t){if(this.is(t))return t;var e=this.capture.exec(t);return e?new Date(e[1],e[2]-1,e[3]):void 0},is:function(t){return t instanceof Date&&!isNaN(t.valueOf())},equals:function(t,e){return["getFullYear","getMonth","getDate"].reduce(function(r,n){return r&&t[n]()===e[n]()},!0)},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/}),json:Ne({encode:M,decode:L,is:d(Object),equals:W,pattern:/[^/]*/}),any:Ne({encode:z,decode:z,is:function(){return!0},equals:W})});var Ue=function(){function t(t){void 0===t&&(t={}),G(this,t)}return t.prototype.$inherit=function(t,e,r){var n,i=at(e,r),o={},a=[];for(var u in i)if(i[u]&&i[u].params&&(n=Object.keys(i[u].params)).length)for(var s in n)a.indexOf(n[s])>=0||(a.push(n[s]),o[n[s]]=this[n[s]]);return G({},o,t)},t}();function Le(t){return t.name}function Me(t){return t.self.$$state=function(){return t},t.self}function Be(t){return t.parent&&t.parent.data&&(t.data=t.self.data=K(t.parent.data,t.data)),t.data}var Ge=function(t,e){return function(r){var n=r;n&&n.url&&n.name&&n.name.match(/\.\*\*$/)&&(n.url+="{remainder:any}");var i=function(t){if(!O(t))return!1;var e="^"===t.charAt(0);return{val:e?t.substring(1):t,root:e}}(n.url),o=r.parent,a=i?t.compile(i.val,{params:r.params||{},paramMap:function(t,e){return!1===n.reloadOnSearch&&e&&(t=G(t||{},{dynamic:!0})),t}}):n.url;if(!a)return null;if(!t.isMatcher(a))throw new Error("Invalid url '"+a+"' in state '"+r+"'");return i&&i.root?a:(o&&o.navigable||e()).url.append(a)}},We=function(t){return function(e){return!t(e)&&e.url?e:e.parent?e.parent.navigable:null}},ze=function(t){return function(e){var r=e.url&&e.url.parameters({inherit:!1})||[],n=vt(ht(st(e.params||{},r.map(u("id"))),function(e,r){return t.fromConfig(r,null,e)}));return r.concat(n).map(function(t){return[t.id,t]}).reduce(Pt,{})}};function Je(t){return t.parent?t.parent.path.concat(t):[t]}function Qe(t){var e=t.parent?G({},t.parent.includes):{};return e[t.name]=!0,e}function Ke(t){var e,r,n=function(t){return t.provide||t.token},i=_([[u("resolveFn"),function(t){return new he(n(t),t.resolveFn,t.deps,t.policy)}],[u("useFactory"),function(t){return new he(n(t),t.useFactory,t.deps||t.dependencies,t.policy)}],[u("useClass"),function(t){return new he(n(t),function(){return new t.useClass},[],t.policy)}],[u("useValue"),function(t){return new he(n(t),function(){return t.useValue},[],t.policy,t.useValue)}],[u("useExisting"),function(t){return new he(n(t),z,[t.useExisting],t.policy)}]]),o=_([[a(u("val"),O),function(t){return new he(t.token,z,[t.val],t.policy)}],[a(u("val"),I),function(t){return new he(t.token,kt(t.val),t.val.slice(0,-1),t.policy)}],[a(u("val"),P),function(t){return new he(t.token,t.val,(e=t.val,r=N.$injector,e.$inject||r&&r.annotate(e,r.strictDi)||"deferred"),t.policy);var e,r}]]),s=_([[d(he),function(t){return t}],[function(t){return!(!t.token||!t.resolveFn)},i],[function(t){return!(!t.provide&&!t.token||!(t.useValue||t.useFactory||t.useExisting||t.useClass))},i],[function(t){return!!(t&&t.val&&(O(t.val)||I(t.val)||P(t.val)))},o],[y(!0),function(t){throw new Error("Invalid resolve value: "+ke(t))}]]),c=t.resolve;return(I(c)?c:(e=c,r=t.resolvePolicy||{},Object.keys(e||{}).map(function(t){return{token:t,val:e[t],deps:void 0,policy:r[t]}}))).map(s)}var Ye=function(){function t(t,e){this.matcher=t;var r=this,n=function(){return t.find("")},i=function(t){return""===t.name};this.builders={name:[Le],self:[Me],parent:[function(e){return i(e)?null:t.find(r.parentName(e))||n()}],data:[Be],url:[Ge(e,n)],navigable:[We(i)],params:[ze(e.paramFactory)],views:[],path:[Je],includes:[Qe],resolvables:[Ke]}}return t.prototype.builder=function(t,e){var r=this.builders,n=r[t]||[];return O(t)&&!E(e)?n.length>1?n:n[0]:O(t)&&P(e)?(r[t]=n,r[t].push(e),function(){return r[t].splice(r[t].indexOf(e,1))&&null}):void 0},t.prototype.build=function(t){var e=this.matcher,r=this.builders,n=this.parentName(t);if(n&&!e.find(n,void 0,!1))return null;for(var i in r)if(r.hasOwnProperty(i)){var o=r[i].reduce(function(t,e){return function(r){return e(r,t)}},J);t[i]=o(t)}return t},t.prototype.parentName=function(t){var e=t.name||"",r=e.split(".");if("**"===r.pop()&&r.pop(),r.length){if(t.parent)throw new Error("States that specify the 'parent:' property should not have a '.' in their name ("+e+")");return r.join(".")}return t.parent?O(t.parent)?t.parent:t.parent.name:""},t.prototype.name=function(t){var e=t.name;if(-1!==e.indexOf(".")||!t.parent)return e;var r=O(t.parent)?t.parent:t.parent.name;return r?r+"."+e:e},t}(),Ze=function(){function t(t){this._states=t}return t.prototype.isRelative=function(t){return 0===(t=t||"").indexOf(".")||0===t.indexOf("^")},t.prototype.find=function(t,e,r){if(void 0===r&&(r=!0),t||""===t){var n=O(t),i=n?t:t.name;this.isRelative(i)&&(i=this.resolvePath(i,e));var o=this._states[i];if(o&&(n||!(n||o!==t&&o.self!==t)))return o;if(n&&r){var a=vt(this._states).filter(function(t){return t.__stateObjectCache.nameGlob&&t.__stateObjectCache.nameGlob.matches(i)});return a.length>1&&console.log("stateMatcher.find: Found multiple matches for "+i+" using glob: ",a.map(function(t){return t.name})),a[0]}}},t.prototype.resolvePath=function(t,e){if(!e)throw new Error("No reference point given for path '"+t+"'");for(var r=this.find(e),n=t.split("."),i=n.length,o=0,a=r;o<i;o++)if(""!==n[o]||0!==o){if("^"!==n[o])break;if(!a.parent)throw new Error("Path '"+t+"' not valid for state '"+r.name+"'");a=a.parent}else a=r;var u=n.slice(o).join(".");return a.name+(a.name&&u?".":"")+u},t}(),Xe=function(){function t(t,e,r,n,i){this.$registry=t,this.$urlRouter=e,this.states=r,this.builder=n,this.listeners=i,this.queue=[],this.matcher=t.matcher}return t.prototype.dispose=function(){this.queue=[]},t.prototype.register=function(t){var e=this.queue,r=$.create(t),n=r.name;if(!O(n))throw new Error("State must have a valid name");if(this.states.hasOwnProperty(n)||Y(e.map(u("name")),n))throw new Error("State '"+n+"' is already defined");return e.push(r),this.flush(),r},t.prototype.flush=function(){for(var t=this,e=this.queue,r=this.states,n=this.builder,i=[],o=[],a={},u=function(e){return t.states.hasOwnProperty(e)&&t.states[e]};e.length>0;){var s=e.shift(),c=s.name,f=n.build(s),l=o.indexOf(s);if(f){var h=u(c);if(h&&h.name===c)throw new Error("State '"+c+"' is already defined");var p=u(c+".**");p&&this.$registry.deregister(p),r[c]=s,this.attachRoute(s),l>=0&&o.splice(l,1),i.push(s)}else{var v=a[c];if(a[c]=e.length,l>=0&&v===e.length)return e.push(s),r;l<0&&o.push(s),e.push(s)}}return i.length&&this.listeners.forEach(function(t){return t("registered",i.map(function(t){return t.self}))}),r},t.prototype.attachRoute=function(t){!t.abstract&&t.url&&this.$urlRouter.rule(this.$urlRouter.urlRuleFactory.create(t))},t}(),tr=function(){function t(t){this._router=t,this.states={},this.listeners=[],this.matcher=new Ze(this.states),this.builder=new Ye(this.matcher,t.urlMatcherFactory),this.stateQueue=new Xe(this,t.urlRouter,this.states,this.builder,this.listeners),this._registerRoot()}return t.prototype._registerRoot=function(){(this._root=this.stateQueue.register({name:"",url:"^",views:null,params:{"#":{value:null,type:"hash",dynamic:!0}},abstract:!0})).navigable=null},t.prototype.dispose=function(){var t=this;this.stateQueue.dispose(),this.listeners=[],this.get().forEach(function(e){return t.get(e)&&t.deregister(e)})},t.prototype.onStatesChanged=function(t){return this.listeners.push(t),function(){X(this.listeners)(t)}.bind(this)},t.prototype.root=function(){return this._root},t.prototype.register=function(t){return this.stateQueue.register(t)},t.prototype._deregisterTree=function(t){var e=this,r=this.get().map(function(t){return t.$$state()}),n=function(t){var e=r.filter(function(e){return-1!==t.indexOf(e.parent)});return 0===e.length?e:e.concat(n(e))},i=n([t]),o=[t].concat(i).reverse();return o.forEach(function(t){var r=e._router.urlRouter;r.rules().filter(s("state",t)).forEach(r.removeRule.bind(r)),delete e.states[t.name]}),o},t.prototype.deregister=function(t){var e=this.get(t);if(!e)throw new Error("Can't deregister state; not found: "+t);var r=this._deregisterTree(e.$$state());return this.listeners.forEach(function(t){return t("deregistered",r.map(function(t){return t.self}))}),r},t.prototype.get=function(t,e){var r=this;if(0===arguments.length)return Object.keys(this.states).map(function(t){return r.states[t].self});var n=this.matcher.find(t,e);return n&&n.self||null},t.prototype.decorator=function(t,e){return this.builder.builder(t,e)},t}();function er(t,e){var r=["",""],n=t.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!e)return n;switch(e.squash){case!1:r=["(",")"+(e.isOptional?"?":"")];break;case!0:n=n.replace(/\/$/,""),r=["(?:/(",")|/)?"];break;default:r=["("+e.squash+"|",")?"]}return n+r[0]+e.type.pattern.source+r[1]}var rr=De("/"),nr=function(){function e(t,r,n,i){var o=this;this.config=i,this._cache={path:[this]},this._children=[],this._params=[],this._segments=[],this._compiled=[],this.pattern=t,this.config=it(this.config,{params:{},strict:!0,caseInsensitive:!1,paramMap:z});for(var a,u,c,f=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,h=[],p=0,v=function(r){if(!e.nameValidator.test(r))throw new Error("Invalid parameter name '"+r+"' in pattern '"+t+"'");if(lt(o._params,s("id",r)))throw new Error("Duplicate parameter name '"+r+"' in pattern '"+t+"'")},d=function(e,n){var i,a=e[2]||e[3],u=n?e[4]:e[4]||("*"===e[1]?"[\\s\\S]*":null);return{id:a,regexp:u,cfg:o.config.params[a],segment:t.substring(p,e.index),type:u?r.type(u)||(i=u,K(r.type(n?"query":"path"),{pattern:new RegExp(i,o.config.caseInsensitive?"i":void 0)})):null}};(a=f.exec(t))&&!((u=d(a,!1)).segment.indexOf("?")>=0);)v(u.id),this._params.push(n.fromPath(u.id,u.type,this.config.paramMap(u.cfg,!1))),this._segments.push(u.segment),h.push([u.segment,kt(this._params)]),p=f.lastIndex;var m=(c=t.substring(p)).indexOf("?");if(m>=0){var y=c.substring(m);if(c=c.substring(0,m),y.length>0)for(p=0;a=l.exec(y);)v((u=d(a,!0)).id),this._params.push(n.fromSearch(u.id,u.type,this.config.paramMap(u.cfg,!0))),p=f.lastIndex}this._segments.push(c),this._compiled=h.map(function(t){return er.apply(null,t)}).concat(er(c))}return e.encodeDashes=function(t){return encodeURIComponent(t).replace(/-/g,function(t){return"%5C%"+t.charCodeAt(0).toString(16).toUpperCase()})},e.pathSegmentsAndParams=function(e){return Tt(e._segments,e._params.filter(function(e){return e.location===t.DefType.PATH}).concat(void 0)).reduce(yt,[]).filter(function(t){return""!==t&&E(t)})},e.queryParams=function(e){return e._params.filter(function(e){return e.location===t.DefType.SEARCH})},e.compare=function(t,r){var n=function(t){return t._cache.weights=t._cache.weights||function(t){return t._cache.segments=t._cache.segments||t._cache.path.map(e.pathSegmentsAndParams).reduce(yt,[]).reduce(qe,[]).map(function(t){return O(t)?rr(t):t}).reduce(yt,[])}(t).map(function(t){return"/"===t?1:O(t)?2:t instanceof se?3:void 0})},i=n(t),o=n(r);!function(t,e,r){for(var n=Math.max(t.length,e.length);t.length<n;)t.push(r);for(;e.length<n;)e.push(r)}(i,o,0);var a,u,s=Tt(i,o);for(u=0;u<s.length;u++)if(0!==(a=s[u][0]-s[u][1]))return a;return 0},e.prototype.append=function(t){return this._children.push(t),t._cache={path:this._cache.path.concat(t),parent:this,pattern:null},t},e.prototype.isRoot=function(){return this._cache.path[0]===this},e.prototype.toString=function(){return this.pattern},e.prototype.exec=function(t,e,r,n){var i=this;void 0===e&&(e={}),void 0===n&&(n={});var o,a,s,c=(o=this._cache,a="pattern",s=function(){return new RegExp(["^",$t(i._cache.path.map(u("_compiled"))).join(""),!1===i.config.strict?"/?":"","$"].join(""),i.config.caseInsensitive?"i":void 0)},o[a]=o[a]||s()).exec(t);if(!c)return null;var f,l=this.parameters(),h=l.filter(function(t){return!t.isSearch()}),p=l.filter(function(t){return t.isSearch()}),v=this._cache.path.map(function(t){return t._segments.length-1}).reduce(function(t,e){return t+e}),d={};if(v!==c.length-1)throw new Error("Unbalanced capture group in route '"+this.pattern+"'");for(var m=0;m<v;m++){for(var y=h[m],g=c[m+1],_=0;_<y.replace.length;_++)y.replace[_].from===g&&(g=y.replace[_].to);g&&!0===y.array&&(void 0,g=pt(pt((f=function(t){return t.split("").reverse().join("")})(g).split(/-(?!\\)/),f),function(t){return t.replace(/\\-/g,"-")}).reverse()),E(g)&&(g=y.type.decode(g)),d[y.id]=y.value(g)}return p.forEach(function(t){for(var r=e[t.id],n=0;n<t.replace.length;n++)t.replace[n].from===r&&(r=t.replace[n].to);E(r)&&(r=t.type.decode(r)),d[t.id]=t.value(r)}),r&&(d["#"]=r),d},e.prototype.parameters=function(t){return void 0===t&&(t={}),!1===t.inherit?this._params:$t(this._cache.path.map(function(t){return t._params}))},e.prototype.parameter=function(t,e){var r=this;void 0===e&&(e={});var n=this._cache.parent;return function(){for(var e=0,n=r._params;e<n.length;e++){var i=n[e];if(i.id===t)return i}}()||!1!==e.inherit&&n&&n.parameter(t,e)||null},e.prototype.validates=function(t){return t=t||{},this.parameters().filter(function(e){return t.hasOwnProperty(e.id)}).map(function(e){return r=e,n=t[e.id],!r||r.validates(n);var r,n}).reduce(dt,!0)},e.prototype.format=function(t){void 0===t&&(t={});var r=this._cache.path,n=r.map(e.pathSegmentsAndParams).reduce(yt,[]).map(function(t){return O(t)?t:o(t)}),i=r.map(e.queryParams).reduce(yt,[]).map(o);if(n.concat(i).filter(function(t){return!1===t.isValid}).length)return null;function o(e){var r=e.value(t[e.id]),n=e.validates(r),i=e.isDefaultValue(r);return{param:e,value:r,isValid:n,isDefaultValue:i,squash:!!i&&e.squash,encoded:e.type.encode(r)}}var a=n.reduce(function(t,r){if(O(r))return t+r;var n=r.squash,i=r.encoded,o=r.param;return!0===n?t.match(/\/$/)?t.slice(0,-1):t:O(n)?t+n:!1!==n?t:null==i?t:I(i)?t+pt(i,e.encodeDashes).join("-"):o.raw?t+i:t+encodeURIComponent(i)},""),u=i.map(function(t){var e=t.param,r=t.squash,n=t.encoded,i=t.isDefaultValue;if(!(null==n||i&&!1!==r)&&(I(n)||(n=[n]),0!==n.length))return e.raw||(n=pt(n,encodeURIComponent)),n.map(function(t){return e.id+"="+t})}).filter(z).reduce(yt,[]).join("&");return a+(u?"?"+u:"")+(t["#"]?"#"+t["#"]:"")},e.nameValidator=/^\w+([-.]+\w+)*(?:\[\])?$/,e}(),ir=function(){function e(){var e=this;this.paramTypes=new Fe,this._isCaseInsensitive=!1,this._isStrictMode=!0,this._defaultSquashPolicy=!1,this.paramFactory={fromConfig:function(r,n,i){return new se(r,n,i,t.DefType.CONFIG,e)},fromPath:function(r,n,i){return new se(r,n,i,t.DefType.PATH,e)},fromSearch:function(r,n,i){return new se(r,n,i,t.DefType.SEARCH,e)}},this._getConfig=function(t){return G({strict:e._isStrictMode,caseInsensitive:e._isCaseInsensitive},t)},G(this,{UrlMatcher:nr,Param:se})}return e.prototype.caseInsensitive=function(t){return this._isCaseInsensitive=E(t)?t:this._isCaseInsensitive},e.prototype.strictMode=function(t){return this._isStrictMode=E(t)?t:this._isStrictMode},e.prototype.defaultSquashPolicy=function(t){if(E(t)&&!0!==t&&!1!==t&&!O(t))throw new Error("Invalid squash policy: "+t+". Valid policies: false, true, arbitrary-string");return this._defaultSquashPolicy=E(t)?t:this._defaultSquashPolicy},e.prototype.compile=function(t,e){return new nr(t,this.paramTypes,this.paramFactory,this._getConfig(e))},e.prototype.isMatcher=function(t){if(!x(t))return!1;var e=!0;return B(nr.prototype,function(r,n){P(r)&&(e=e&&E(t[n])&&P(t[n]))}),e},e.prototype.type=function(t,e,r){var n=this.paramTypes.type(t,e,r);return E(e)?this:n},e.prototype.$get=function(){return this.paramTypes.enqueue=!1,this.paramTypes._flushTypeQueue(),this},e.prototype.dispose=function(){this.paramTypes.dispose()},e}(),or=function(){function t(t){this.router=t}return t.prototype.compile=function(t){return this.router.urlMatcherFactory.compile(t)},t.prototype.create=function(t,e){var r=this,n=_([[O,function(t){return n(r.compile(t))}],[d(nr),function(t){return r.fromUrlMatcher(t,e)}],[A,function(t){return r.fromState(t,r.router)}],[d(RegExp),function(t){return r.fromRegExp(t,e)}],[P,function(t){return new ar(t,e)}]]),i=n(t);if(!i)throw new Error("invalid 'what' in when()");return i},t.prototype.fromUrlMatcher=function(t,e){var r=e;O(e)&&(e=this.router.urlMatcherFactory.compile(e)),d(nr)(e)&&(r=function(t){return e.format(t)});var n={urlMatcher:t,matchPriority:function(e){var r=t.parameters().filter(function(t){return t.isOptional});return r.length?r.filter(function(t){return e[t.id]}).length/r.length:1e-6},type:"URLMATCHER"};return G(new ar(function(e){var r=t.exec(e.path,e.search,e.hash);return t.validates(r)&&r},r),n)},t.prototype.fromState=function(t,e){var r={state:t,type:"STATE"};return G(this.fromUrlMatcher(t.url,function(r){var n=e.stateService,i=e.globals;n.href(t,r)!==n.href(i.current,i.params)&&n.transitionTo(t,r,{inherit:!0,source:"url"})}),r)},t.prototype.fromRegExp=function(t,e){if(t.global||t.sticky)throw new Error("Rule RegExp must not be global or sticky");var r=O(e)?function(t){return e.replace(/\$(\$|\d{1,2})/,function(e,r){return t["$"===r?0:Number(r)]})}:e,n={regexp:t,type:"REGEXP"};return G(new ar(function(e){return t.exec(e.path)},r),n)},t.isUrlRule=function(t){return t&&["type","match","handler"].every(function(e){return E(t[e])})},t}(),ar=function(){return function(t,e){var r=this;this.match=t,this.type="RAW",this.matchPriority=function(t){return 0-r.$id},this.handler=e||z}}();var ur;ur=function(t,e){var r=function(t,e){return(e.priority||0)-(t.priority||0)}(t,e);return 0!==r?r:0!==(r=function(t,e){var r={STATE:4,URLMATCHER:4,REGEXP:3,RAW:2,OTHER:1};return(r[t.type]||0)-(r[e.type]||0)}(t,e))?r:0!==(r=function(t,e){return t.urlMatcher&&e.urlMatcher?nr.compare(t.urlMatcher,e.urlMatcher):0}(t,e))?r:function(t,e){var r={STATE:!0,URLMATCHER:!0};return r[t.type]&&r[e.type]?0:(t.$id||0)-(e.$id||0)}(t,e)};var sr=function(){function t(e){this._sortFn=ur,this._rules=[],this.interceptDeferred=!1,this._id=0,this._sorted=!1,this._router=e,this.urlRuleFactory=new or(e),Q(y(t.prototype),this,y(this))}return t.prototype.dispose=function(){this.listen(!1),this._rules=[],delete this._otherwiseFn},t.prototype.sort=function(t){this._rules=this.stableSort(this._rules,this._sortFn=t||this._sortFn),this._sorted=!0},t.prototype.ensureSorted=function(){this._sorted||this.sort()},t.prototype.stableSort=function(t,e){var r=t.map(function(t,e){return{elem:t,idx:e}});return r.sort(function(t,r){var n=e(t.elem,r.elem);return 0===n?t.idx-r.idx:n}),r.map(function(t){return t.elem})},t.prototype.match=function(t){var e=this;this.ensureSorted(),t=G({path:"",search:{},hash:""},t);var r=this.rules();this._otherwiseFn&&r.push(this._otherwiseFn);for(var n,i,o,a=0;a<r.length&&(!n||0===this._sortFn(r[a],n.rule));a++){var u=(i=r[a],void 0,(o=i.match(t,e._router))&&{match:o,rule:i,weight:i.matchPriority(o)});n=!n||u&&u.weight>n.weight?u:n}return n},t.prototype.sync=function(t){if(!t||!t.defaultPrevented){var e=this._router,r=e.urlService,n=e.stateService,i={path:r.path(),search:r.search(),hash:r.hash()},o=this.match(i);_([[O,function(t){return r.url(t,!0)}],[Yt.isDef,function(t){return n.go(t.state,t.params,t.options)}],[d(Yt),function(t){return n.go(t.state(),t.params(),t.options())}]])(o&&o.rule.handler(o.match,i,e))}},t.prototype.listen=function(t){var e=this;if(!1!==t)return this._stopFn=this._stopFn||this._router.urlService.onChange(function(t){return e.sync(t)});this._stopFn&&this._stopFn(),delete this._stopFn},t.prototype.update=function(t){var e=this._router.locationService;t?this.location=e.url():e.url()!==this.location&&e.url(this.location,!0)},t.prototype.push=function(t,e,r){var n=r&&!!r.replace;this._router.urlService.url(t.format(e||{}),n)},t.prototype.href=function(t,e,r){var n=t.format(e);if(null==n)return null;r=r||{absolute:!1};var i=this._router.urlService.config,o=i.html5Mode();if(o||null===n||(n="#"+i.hashPrefix()+n),n=function(t,e,r,n){return"/"===n?t:e?Ie(n)+t:r?n.slice(1)+t:t}(n,o,r.absolute,i.baseHref()),!r.absolute||!n)return n;var a=!o&&n?"/":"",u=i.port(),s=80===u||443===u?"":":"+u;return[i.protocol(),"://",i.host(),s,a,n].join("")},t.prototype.rule=function(t){var e=this;if(!or.isUrlRule(t))throw new Error("invalid rule");return t.$id=this._id++,t.priority=t.priority||0,this._rules.push(t),this._sorted=!1,function(){return e.removeRule(t)}},t.prototype.removeRule=function(t){X(this._rules,t)},t.prototype.rules=function(){return this.ensureSorted(),this._rules.slice()},t.prototype.otherwise=function(t){var e=cr(t);this._otherwiseFn=this.urlRuleFactory.create(y(!0),e),this._sorted=!1},t.prototype.initial=function(t){var e=cr(t);this.rule(this.urlRuleFactory.create(function(t,e){return 0===e.globals.transitionHistory.size()&&!!/^\/?$/.exec(t.path)},e))},t.prototype.when=function(t,e,r){var n=this.urlRuleFactory.create(t,e);return E(r&&r.priority)&&(n.priority=r.priority),this.rule(n),n},t.prototype.deferIntercept=function(t){void 0===t&&(t=!0),this.interceptDeferred=t},t}();function cr(t){if(!(P(t)||O(t)||d(Yt)(t)||Yt.isDef(t)))throw new Error("'handler' must be a string, function, TargetState, or have a state: 'newtarget' property");return P(t)?t:y(t)}var fr=function(){function t(){var t=this;this._uiViews=[],this._viewConfigs=[],this._viewConfigFactories={},this._listeners=[],this._pluginapi={_rootViewContext:this._rootViewContext.bind(this),_viewConfigFactory:this._viewConfigFactory.bind(this),_registeredUIViews:function(){return t._uiViews},_activeViewConfigs:function(){return t._viewConfigs},_onSync:function(e){return t._listeners.push(e),function(){return X(t._listeners,e)}}}}return t.normalizeUIViewTarget=function(t,e){void 0===e&&(e="");var r=e.split("@"),n=r[0]||"$default",i=O(r[1])?r[1]:"^",o=/^(\^(?:\.\^)*)\.(.*$)/.exec(n);o&&(i=o[1],n=o[2]),"!"===n.charAt(0)&&(n=n.substr(1),i="");/^(\^(?:\.\^)*)$/.exec(i)?i=i.split(".").reduce(function(t,e){return t.parent},t).name:"."===i&&(i=t.name);return{uiViewName:n,uiViewContextAnchor:i}},t.prototype._rootViewContext=function(t){return this._rootContext=t||this._rootContext},t.prototype._viewConfigFactory=function(t,e){this._viewConfigFactories[t]=e},t.prototype.createViewConfig=function(t,e){var r=this._viewConfigFactories[e.$type];if(!r)throw new Error("ViewService: No view config factory registered for type "+e.$type);var n=r(t,e);return I(n)?n:[n]},t.prototype.deactivateViewConfig=function(t){Kt.traceViewServiceEvent("<- Removing",t),X(this._viewConfigs,t)},t.prototype.activateViewConfig=function(t){Kt.traceViewServiceEvent("-> Registering",t),this._viewConfigs.push(t)},t.prototype.sync=function(){var e=this,r=this._uiViews.map(function(t){return[t.fqn,t]}).reduce(Pt,{});function n(t){for(var e=t.viewDecl.$context,r=0;++r&&e.parent;)e=e.parent;return r}var o=i(function(t,e,r,n){return e*(t(r)-t(n))}),a=this._uiViews.sort(o(function(t){var e=function(t){return t&&t.parent?e(t.parent)+1:1};return 1e4*t.fqn.split(".").length+e(t.creationContext)},1)).map(function(i){var a=e._viewConfigs.filter(t.matches(r,i));return a.length>1&&a.sort(o(n,-1)),{uiView:i,viewConfig:a[0]}}),u=a.map(function(t){return t.viewConfig}),s=this._viewConfigs.filter(function(t){return!Y(u,t)}).map(function(t){return{uiView:void 0,viewConfig:t}});a.forEach(function(t){-1!==e._uiViews.indexOf(t.uiView)&&t.uiView.configUpdated(t.viewConfig)});var c=a.concat(s);this._listeners.forEach(function(t){return t(c)}),Kt.traceViewSync(c)},t.prototype.registerUIView=function(t){Kt.traceViewServiceUIViewEvent("-> Registering",t);var e=this._uiViews;return e.filter(function(e){return e.fqn===t.fqn&&e.$type===t.$type}).length&&Kt.traceViewServiceUIViewEvent("!!!! duplicate uiView named:",t),e.push(t),this.sync(),function(){-1!==e.indexOf(t)?(Kt.traceViewServiceUIViewEvent("<- Deregistering",t),X(e)(t)):Kt.traceViewServiceUIViewEvent("Tried removing non-registered uiView",t)}},t.prototype.available=function(){return this._uiViews.map(u("fqn"))},t.prototype.active=function(){return this._uiViews.filter(u("$config")).map(u("name"))},t.matches=function(t,e){return function(r){if(e.$type!==r.viewDecl.$type)return!1;var n=r.viewDecl,i=n.$uiViewName.split("."),o=e.fqn.split(".");if(!W(i,o.slice(0-i.length)))return!1;var a=1-i.length||void 0,u=o.slice(0,a).join("."),s=t[u].creationContext;return n.$uiViewContextAnchor===(s&&s.name)}},t}(),lr=function(){function t(){this.params=new Ue,this.lastStartedTransitionId=-1,this.transitionHistory=new Ht([],1),this.successfulTransitions=new Ht([],1)}return t.prototype.dispose=function(){this.transitionHistory.clear(),this.successfulTransitions.clear(),this.transition=null},t}(),hr=function(t){return t.reduce(function(t,e){return t[e]=q(e),t},{dispose:J})},pr=["url","path","search","hash","onChange"],vr=["port","protocol","host","baseHref","html5Mode","hashPrefix"],dr=["type","caseInsensitive","strictMode","defaultSquashPolicy"],mr=["sort","when","initial","otherwise","rules","rule","removeRule"],yr=["deferIntercept","listen","sync","match"],gr=function(){function t(t,e){void 0===e&&(e=!0),this.router=t,this.rules={},this.config={};var r=function(){return t.locationService};Q(r,this,r,pr,e);var n=function(){return t.locationConfig};Q(n,this.config,n,vr,e);var i=function(){return t.urlMatcherFactory};Q(i,this.config,i,dr);var o=function(){return t.urlRouter};Q(o,this.rules,o,mr),Q(o,this,o,yr)}return t.prototype.url=function(t,e,r){},t.prototype.path=function(){},t.prototype.search=function(){},t.prototype.hash=function(){},t.prototype.onChange=function(t){},t.prototype.parts=function(){return{path:this.path(),search:this.search(),hash:this.hash()}},t.prototype.dispose=function(){},t.prototype.sync=function(t){},t.prototype.listen=function(t){},t.prototype.deferIntercept=function(t){},t.prototype.match=function(t){},t.locationServiceStub=hr(pr),t.locationConfigStub=hr(vr),t}(),_r=0,wr=function(){function t(t,e){void 0===t&&(t=gr.locationServiceStub),void 0===e&&(e=gr.locationConfigStub),this.locationService=t,this.locationConfig=e,this.$id=_r++,this._disposed=!1,this._disposables=[],this.trace=Kt,this.viewService=new fr,this.globals=new lr,this.transitionService=new Lr(this),this.urlMatcherFactory=new ir,this.urlRouter=new sr(this),this.stateRegistry=new tr(this),this.stateService=new Mr(this),this.urlService=new gr(this),this._plugins={},this.viewService._pluginapi._rootViewContext(this.stateRegistry.root()),this.globals.$current=this.stateRegistry.root(),this.globals.current=this.globals.$current.self,this.disposable(this.globals),this.disposable(this.stateService),this.disposable(this.stateRegistry),this.disposable(this.transitionService),this.disposable(this.urlRouter),this.disposable(t),this.disposable(e)}return t.prototype.disposable=function(t){this._disposables.push(t)},t.prototype.dispose=function(t){var e=this;t&&P(t.dispose)?t.dispose(this):(this._disposed=!0,this._disposables.slice().forEach(function(t){try{"function"==typeof t.dispose&&t.dispose(e),X(e._disposables,t)}catch(t){}}))},t.prototype.plugin=function(t,e){void 0===e&&(e={});var r=new t(this,e);if(!r.name)throw new Error("Required property `name` missing on plugin: "+r);return this._disposables.push(r),this._plugins[r.name]=r},t.prototype.getPlugin=function(t){return t?this._plugins[t]:vt(this._plugins)},t}();function $r(t){t.addResolvable(he.fromData(wr,t.router),""),t.addResolvable(he.fromData($e,t),""),t.addResolvable(he.fromData("$transition$",t),""),t.addResolvable(he.fromData("$stateParams",t.params()),""),t.entering().forEach(function(e){t.addResolvable(he.fromData("$state$",e),e)})}var Sr=Y(["$transition$",$e]),br=function(t){var e=function(t){return Sr(t.token)?he.fromData(t.token,null):t};vt(t.treeChanges()).reduce(yt,[]).reduce(wt,[]).forEach(function(t){t.resolvables=t.resolvables.map(e)})},Rr=function(t){var e=t.to().redirectTo;if(e){var r=t.router.stateService;return P(e)?N.$q.when(e(t)).then(n):n(e)}function n(e){if(e)return e instanceof Yt?e:O(e)?r.target(e,t.params(),t.options()):e.state||e.params?r.target(e.state||t.to(),e.params||t.params(),t.options()):void 0}};function Er(t){return function(e,r){return(0,r.$$state()[t])(e,r)}}var Cr=Er("onExit"),Tr=Er("onRetain"),Pr=Er("onEnter"),kr=function(t){return new ge(t.treeChanges().to).resolvePath("EAGER",t).then(J)},Or=function(t,e){return new ge(t.treeChanges().to).subContext(e.$$state()).resolvePath("LAZY",t).then(J)},xr=function(t){return new ge(t.treeChanges().to).resolvePath("LAZY",t).then(J)},Ir=function(t){var e=N.$q,r=t.views("entering");if(r.length)return e.all(r.map(function(t){return e.when(t.load())})).then(J)},Vr=function(t){var e=t.views("entering"),r=t.views("exiting");if(e.length||r.length){var n=t.router.viewService;r.forEach(function(t){return n.deactivateViewConfig(t)}),e.forEach(function(t){return n.activateViewConfig(t)}),n.sync()}},jr=function(t){var e=t.router.globals,r=function(){e.transition===t&&(e.transition=null)};t.onSuccess({},function(){e.successfulTransitions.enqueue(t),e.$current=t.$to(),e.current=e.$current.self,Ot(t.params(),e.params)},{priority:1e4}),t.promise.then(r,r)},Ar=function(t){var e=t.options(),r=t.router.stateService,n=t.router.urlRouter;if("url"!==e.source&&e.location&&r.$current.navigable){var i={replace:"replace"===e.location};n.push(r.$current.navigable.url,r.params,i)}n.update(!0)},Hr=function(t){var e=t.router;var r=t.entering().filter(function(t){return!!t.$$state().lazyLoad}).map(function(e){return Dr(t,e)});return N.$q.all(r).then(function(){if("url"!==t.originalTransition().options().source){var r=t.targetState();return e.stateService.target(r.identifier(),r.params(),r.options())}var n=e.urlService,i=n.match(n.parts()),o=i&&i.rule;if(o&&"STATE"===o.type){var a=o.state,u=i.match;return e.stateService.target(a,u,t.options())}e.urlService.sync()})};function Dr(t,e){var r=e.$$state().lazyLoad,n=r._promise;if(!n){n=r._promise=N.$q.when(r(t,e)).then(function(e){e&&Array.isArray(e.states)&&e.states.forEach(function(e){return t.router.stateRegistry.register(e)});return e}).then(function(t){return delete e.lazyLoad,delete e.$$state().lazyLoad,delete r._promise,t},function(t){return delete r._promise,N.$q.reject(t)})}return n}var qr=function(){return function(t,e,r,n,i,o,a,u){void 0===i&&(i=!1),void 0===o&&(o=Xt.HANDLE_RESULT),void 0===a&&(a=Xt.REJECT_ERROR),void 0===u&&(u=!1),this.name=t,this.hookPhase=e,this.hookOrder=r,this.criteriaMatchPath=n,this.reverseSort=i,this.getResultHandler=o,this.getErrorHandler=a,this.synchronous=u}}();function Nr(t){var e=t._ignoredReason();if(e){Kt.traceTransitionIgnored(t);var r=t.router.globals.transition;return"SameAsCurrent"===e&&r&&r.abort(),qt.ignored().toPromise()}}function Fr(t){if(!t.valid())throw new Error(t.error())}var Ur={location:!0,relative:null,inherit:!1,notify:!0,reload:!1,custom:{},current:function(){return null},source:"unknown"},Lr=function(){function e(t){this._transitionCount=0,this._eventTypes=[],this._registeredHooks={},this._criteriaPaths={},this._router=t,this.$view=t.viewService,this._deregisterHookFns={},this._pluginapi=Q(y(this),{},y(this),["_definePathType","_defineEvent","_getPathTypes","_getEvents","getHooks"]),this._defineCorePaths(),this._defineCoreEvents(),this._registerCoreTransitionHooks(),t.globals.successfulTransitions.onEvict(br)}return e.prototype.onCreate=function(t,e,r){},e.prototype.onBefore=function(t,e,r){},e.prototype.onStart=function(t,e,r){},e.prototype.onExit=function(t,e,r){},e.prototype.onRetain=function(t,e,r){},e.prototype.onEnter=function(t,e,r){},e.prototype.onFinish=function(t,e,r){},e.prototype.onSuccess=function(t,e,r){},e.prototype.onError=function(t,e,r){},e.prototype.dispose=function(t){vt(this._registeredHooks).forEach(function(t){return t.forEach(function(e){e._deregistered=!0,X(t,e)})})},e.prototype.create=function(t,e){return new $e(t,e,this._router)},e.prototype._defineCoreEvents=function(){var e=t.TransitionHookPhase,r=Xt,n=this._criteriaPaths;this._defineEvent("onCreate",e.CREATE,0,n.to,!1,r.LOG_REJECTED_RESULT,r.THROW_ERROR,!0),this._defineEvent("onBefore",e.BEFORE,0,n.to),this._defineEvent("onStart",e.RUN,0,n.to),this._defineEvent("onExit",e.RUN,100,n.exiting,!0),this._defineEvent("onRetain",e.RUN,200,n.retained),this._defineEvent("onEnter",e.RUN,300,n.entering),this._defineEvent("onFinish",e.RUN,400,n.to),this._defineEvent("onSuccess",e.SUCCESS,0,n.to,!1,r.LOG_REJECTED_RESULT,r.LOG_ERROR,!0),this._defineEvent("onError",e.ERROR,0,n.to,!1,r.LOG_REJECTED_RESULT,r.LOG_ERROR,!0)},e.prototype._defineCorePaths=function(){var e=t.TransitionHookScope.STATE,r=t.TransitionHookScope.TRANSITION;this._definePathType("to",r),this._definePathType("from",r),this._definePathType("exiting",e),this._definePathType("retained",e),this._definePathType("entering",e)},e.prototype._defineEvent=function(t,e,r,n,i,o,a,u){void 0===i&&(i=!1),void 0===o&&(o=Xt.HANDLE_RESULT),void 0===a&&(a=Xt.REJECT_ERROR),void 0===u&&(u=!1);var s=new qr(t,e,r,n,i,o,a,u);this._eventTypes.push(s),re(this,this,s)},e.prototype._getEvents=function(t){return(E(t)?this._eventTypes.filter(function(e){return e.hookPhase===t}):this._eventTypes.slice()).sort(function(t,e){var r=t.hookPhase-e.hookPhase;return 0===r?t.hookOrder-e.hookOrder:r})},e.prototype._definePathType=function(t,e){this._criteriaPaths[t]={name:t,scope:e}},e.prototype._getPathTypes=function(){return this._criteriaPaths},e.prototype.getHooks=function(t){return this._registeredHooks[t]},e.prototype._registerCoreTransitionHooks=function(){var t=this._deregisterHookFns;t.addCoreResolves=this.onCreate({},$r),t.ignored=function(t){return t.onBefore({},Nr,{priority:-9999})}(this),t.invalid=function(t){return t.onBefore({},Fr,{priority:-1e4})}(this),t.redirectTo=function(t){return t.onStart({to:function(t){return!!t.redirectTo}},Rr)}(this),t.onExit=function(t){return t.onExit({exiting:function(t){return!!t.onExit}},Cr)}(this),t.onRetain=function(t){return t.onRetain({retained:function(t){return!!t.onRetain}},Tr)}(this),t.onEnter=function(t){return t.onEnter({entering:function(t){return!!t.onEnter}},Pr)}(this),t.eagerResolve=function(t){return t.onStart({},kr,{priority:1e3})}(this),t.lazyResolve=function(t){return t.onEnter({entering:y(!0)},Or,{priority:1e3})}(this),t.resolveAll=function(t){return t.onFinish({},xr,{priority:1e3})}(this),t.loadViews=function(t){return t.onFinish({},Ir)}(this),t.activateViews=function(t){return t.onSuccess({},Vr)}(this),t.updateGlobals=function(t){return t.onCreate({},jr)}(this),t.updateUrl=function(t){return t.onSuccess({},Ar,{priority:9999})}(this),t.lazyLoad=function(t){return t.onBefore({entering:function(t){return!!t.lazyLoad}},Hr)}(this)},e}(),Mr=function(){function e(t){this.router=t,this.invalidCallbacks=[],this._defaultErrorHandler=function(t){t instanceof Error&&t.stack?(console.error(t),console.error(t.stack)):t instanceof qt?(console.error(t.toString()),t.detail&&t.detail.stack&&console.error(t.detail.stack)):console.error(t)};var r=Object.keys(e.prototype).filter(f(Y(["current","$current","params","transition"])));Q(y(e.prototype),this,y(this),r)}return Object.defineProperty(e.prototype,"transition",{get:function(){return this.router.globals.transition},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"params",{get:function(){return this.router.globals.params},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"current",{get:function(){return this.router.globals.current},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"$current",{get:function(){return this.router.globals.$current},enumerable:!0,configurable:!0}),e.prototype.dispose=function(){this.defaultErrorHandler(J),this.invalidCallbacks=[]},e.prototype._handleInvalidTargetState=function(t,e){var r=this,n=fe.makeTargetState(this.router.stateRegistry,t),i=this.router.globals,o=function(){return i.transitionHistory.peekTail()},a=o(),u=new Ht(this.invalidCallbacks.slice()),s=new ge(t).injector(),c=function(t){if(t instanceof Yt){var e=t;return(e=r.target(e.identifier(),e.params(),e.options())).valid()?o()!==a?qt.superseded().toPromise():r.transitionTo(e.identifier(),e.params(),e.options()):qt.invalid(e.error()).toPromise()}};return function t(){var r=u.dequeue();return void 0===r?qt.invalid(e.error()).toPromise():N.$q.when(r(e,n,s)).then(c).then(function(e){return e||t()})}()},e.prototype.onInvalid=function(t){return this.invalidCallbacks.push(t),function(){X(this.invalidCallbacks)(t)}.bind(this)},e.prototype.reload=function(t){return this.transitionTo(this.current,this.params,{reload:!E(t)||t,inherit:!1,notify:!1})},e.prototype.go=function(t,e,r){var n=it(r,{relative:this.$current,inherit:!0},Ur);return this.transitionTo(t,e,n)},e.prototype.target=function(t,e,r){if(void 0===r&&(r={}),x(r.reload)&&!r.reload.name)throw new Error("Invalid reload state object");var n=this.router.stateRegistry;if(r.reloadState=!0===r.reload?n.root():n.matcher.find(r.reload,r.relative),r.reload&&!r.reloadState)throw new Error("No such reload state '"+(O(r.reload)?r.reload:r.reload.name)+"'");return new Yt(this.router.stateRegistry,t,e,r)},e.prototype.getCurrentPath=function(){var t=this,e=this.router.globals.successfulTransitions.peekTail();return e?e.treeChanges().to:[new ce(t.router.stateRegistry.root())]},e.prototype.transitionTo=function(e,r,n){var i=this;void 0===r&&(r={}),void 0===n&&(n={});var o=this.router,a=o.globals;n=it(n,Ur);n=G(n,{current:function(){return a.transition}});var u=this.target(e,r,n),s=this.getCurrentPath();if(!u.exists())return this._handleInvalidTargetState(s,u);if(!u.valid())return At(u.error());var c=function(e){return function(r){if(r instanceof qt){var n=o.globals.lastStartedTransitionId===e.$id;if(r.type===t.RejectType.IGNORED)return n&&o.urlRouter.update(),N.$q.when(a.current);var u=r.detail;if(r.type===t.RejectType.SUPERSEDED&&r.redirected&&u instanceof Yt){var s=e.redirect(u);return s.run().catch(c(s))}if(r.type===t.RejectType.ABORTED)return n&&o.urlRouter.update(),N.$q.reject(r)}return i.defaultErrorHandler()(r),N.$q.reject(r)}},f=this.router.transitionService.create(s,u),l=f.run().catch(c(f));return jt(l),G(l,{transition:f})},e.prototype.is=function(t,e,r){r=it(r,{relative:this.$current});var n=this.router.stateRegistry.matcher.find(t,r.relative);if(E(n)){if(this.$current!==n)return!1;if(!e)return!0;var i=n.parameters({inherit:!0,matchingKeys:e});return se.equals(i,se.values(i,e),this.params)}},e.prototype.includes=function(t,e,r){r=it(r,{relative:this.$current});var n=O(t)&&w.fromString(t);if(n){if(!n.matches(this.$current.name))return!1;t=this.$current.name}var i=this.router.stateRegistry.matcher.find(t,r.relative),o=this.$current.includes;if(E(i)){if(!E(o[i.name]))return!1;if(!e)return!0;var a=i.parameters({inherit:!0,matchingKeys:e});return se.equals(a,se.values(a,e),this.params)}},e.prototype.href=function(t,e,r){r=it(r,{lossy:!0,inherit:!0,absolute:!1,relative:this.$current}),e=e||{};var n=this.router.stateRegistry.matcher.find(t,r.relative);if(!E(n))return null;r.inherit&&(e=this.params.$inherit(e,this.$current,n));var i=n&&r.lossy?n.navigable:n;return i&&void 0!==i.url&&null!==i.url?this.router.urlRouter.href(i.url,e,{absolute:r.absolute}):null},e.prototype.defaultErrorHandler=function(t){return this._defaultErrorHandler=t||this._defaultErrorHandler},e.prototype.get=function(t,e){var r=this.router.stateRegistry;return 0===arguments.length?r.get():r.get(t,e||this.$current)},e.prototype.lazyLoad=function(t,e){var r=this.get(t);if(!r||!r.lazyLoad)throw new Error("Can not lazy load "+t);var n=this.getCurrentPath(),i=fe.makeTargetState(this.router.stateRegistry,n);return Dr(e=e||this.router.transitionService.create(n,i),r)},e}(),Br={when:function(t){return new Promise(function(e,r){return e(t)})},reject:function(t){return new Promise(function(e,r){r(t)})},defer:function(){var t={};return t.promise=new Promise(function(e,r){t.resolve=e,t.reject=r}),t},all:function(t){if(I(t))return Promise.all(t);if(x(t)){var e=Object.keys(t).map(function(e){return t[e].then(function(t){return{key:e,val:t}})});return Br.all(e).then(function(t){return t.reduce(function(t,e){return t[e.key]=e.val,t},{})})}}},Gr={},Wr=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/gm,zr=/([^\s,]+)/g,Jr={get:function(t){return Gr[t]},has:function(t){return null!=Jr.get(t)},invoke:function(t,e,r){var n=G({},Gr,r||{}),i=Jr.annotate(t),o=bt(function(t){return n.hasOwnProperty(t)},function(t){return"DI can't find injectable: '"+t+"'"}),a=i.filter(o).map(function(t){return n[t]});return P(t)?t.apply(e,a):t.slice(-1)[0].apply(e,a)},annotate:function(t){if(!H(t))throw new Error("Not an injectable function: "+t);if(t&&t.$inject)return t.$inject;if(I(t))return t.slice(0,-1);var e=t.toString().replace(Wr,"");return e.slice(e.indexOf("(")+1,e.indexOf(")")).match(zr)||[]}},Qr=function(t,e){var r=e[0],n=e[1];return t.hasOwnProperty(r)?I(t[r])?t[r].push(n):t[r]=[t[r],n]:t[r]=n,t},Kr=function(t){return t.split("&").filter(z).map(Ae).reduce(Qr,{})};function Yr(t){var e=function(t){return t||""},r=Ve(t).map(e),n=r[0],i=r[1],o=je(n).map(e);return{path:o[0],search:o[1],hash:i,url:t}}var Zr=function(t){var e=t.path(),r=t.search(),n=t.hash(),i=Object.keys(r).map(function(t){var e=r[t];return(I(e)?e:[e]).map(function(e){return t+"="+e})}).reduce(yt,[]).join("&");return e+(i?"?"+i:"")+(n?"#"+n:"")};function Xr(t,e,r,n){return function(i){var o=i.locationService=new r(i),a=i.locationConfig=new n(i,e);return{name:t,service:o,configuration:a,dispose:function(t){t.dispose(o),t.dispose(a)}}}}var tn,en=function(){function t(t,e){var r=this;this.fireAfterUpdate=e,this._listeners=[],this._listener=function(t){return r._listeners.forEach(function(e){return e(t)})},this.hash=function(){return Yr(r._get()).hash},this.path=function(){return Yr(r._get()).path},this.search=function(){return Kr(Yr(r._get()).search)},this._location=F.location,this._history=F.history}return t.prototype.url=function(t,e){return void 0===e&&(e=!0),E(t)&&t!==this._get()&&(this._set(null,null,t,e),this.fireAfterUpdate&&this._listeners.forEach(function(e){return e({url:t})})),Zr(this)},t.prototype.onChange=function(t){var e=this;return this._listeners.push(t),function(){return X(e._listeners,t)}},t.prototype.dispose=function(t){nt(this._listeners)},t}(),rn=(tn=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])},function(t,e){function r(){this.constructor=t}tn(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}),nn=function(t){function e(e){var r=t.call(this,e,!1)||this;return F.addEventListener("hashchange",r._listener,!1),r}return rn(e,t),e.prototype._get=function(){return He(this._location.hash)},e.prototype._set=function(t,e,r,n){this._location.hash=r},e.prototype.dispose=function(e){t.prototype.dispose.call(this,e),F.removeEventListener("hashchange",this._listener)},e}(en),on=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),an=function(t){function e(e){return t.call(this,e,!0)||this}return on(e,t),e.prototype._get=function(){return this._url},e.prototype._set=function(t,e,r,n){this._url=r},e}(en),un=function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}(),sn=function(t){function e(e){var r=t.call(this,e,!0)||this;return r._config=e.urlService.config,F.addEventListener("popstate",r._listener,!1),r}return un(e,t),e.prototype._getBasePrefix=function(){return Ie(this._config.baseHref())},e.prototype._get=function(){var t=this._location,e=t.pathname,r=t.hash,n=t.search;n=je(n)[1],r=Ve(r)[1];var i=this._getBasePrefix(),o=e===this._config.baseHref(),a=e.substr(0,i.length)===i;return(e=o?"/":a?e.substring(i.length):e)+(n?"?"+n:"")+(r?"#"+r:"")},e.prototype._set=function(t,e,r,n){var i=this._getBasePrefix(),o=r&&"/"!==r[0]?"/":"",a=""===r||"/"===r?this._config.baseHref():i+o+r;n?this._history.replaceState(t,e,a):this._history.pushState(t,e,a)},e.prototype.dispose=function(e){t.prototype.dispose.call(this,e),F.removeEventListener("popstate",this._listener)},e}(en),cn=function(){return function(){var t=this;this.dispose=J,this._baseHref="",this._port=80,this._protocol="http",this._host="localhost",this._hashPrefix="",this.port=function(){return t._port},this.protocol=function(){return t._protocol},this.host=function(){return t._host},this.baseHref=function(){return t._baseHref},this.html5Mode=function(){return!1},this.hashPrefix=function(e){return E(e)?t._hashPrefix=e:t._hashPrefix}}}(),fn=function(){function t(t,e){void 0===e&&(e=!1),this._isHtml5=e,this._baseHref=void 0,this._hashPrefix=""}return t.prototype.port=function(){return location.port?Number(location.port):"https"===this.protocol()?443:80},t.prototype.protocol=function(){return location.protocol.replace(/:/g,"")},t.prototype.host=function(){return location.hostname},t.prototype.html5Mode=function(){return this._isHtml5},t.prototype.hashPrefix=function(t){return E(t)?this._hashPrefix=t:this._hashPrefix},t.prototype.baseHref=function(t){return E(t)?this._baseHref=t:E(this._baseHref)?this._baseHref:this.applyDocumentBaseHref()},t.prototype.applyDocumentBaseHref=function(){var t=document.getElementsByTagName("base")[0];return this._baseHref=t?t.href.substr(location.origin.length):location.pathname||"/"},t.prototype.dispose=function(){},t}();function ln(t){return N.$injector=Jr,N.$q=Br,{name:"vanilla.services",$q:Br,$injector:Jr,dispose:function(){return null}}}var hn=Xr("vanilla.hashBangLocation",!1,nn,fn),pn=Xr("vanilla.pushStateLocation",!0,sn,fn),vn=Xr("vanilla.memoryLocation",!1,an,cn),dn=function(){function t(){}return t.prototype.dispose=function(t){},t}(),mn=Object.freeze({root:F,fromJson:L,toJson:M,forEach:B,extend:G,equals:W,identity:z,noop:J,createProxyFunctions:Q,inherit:K,inArray:Y,_inArray:Z,removeFrom:X,_removeFrom:tt,pushTo:et,_pushTo:rt,deregAll:nt,defaults:it,mergeR:ot,ancestors:at,pick:ut,omit:st,pluck:ct,filter:ft,find:lt,mapObj:ht,map:pt,values:vt,allTrueR:dt,anyTrueR:mt,unnestR:yt,flattenR:gt,pushR:_t,uniqR:wt,unnest:$t,flatten:St,assertPredicate:bt,assertMap:Rt,assertFn:Et,pairs:Ct,arrayTuples:Tt,applyPairs:Pt,tail:kt,copy:Ot,_extend:xt,silenceUncaughtInPromise:jt,silentRejection:At,notImplemented:q,services:N,Glob:w,curry:i,compose:o,pipe:a,prop:u,propEq:s,parse:c,not:f,and:l,or:h,all:p,any:v,is:d,eq:m,val:y,invoke:g,pattern:_,isUndefined:R,isDefined:E,isNull:C,isNullOrUndefined:T,isFunction:P,isNumber:k,isString:O,isObject:x,isArray:I,isDate:V,isRegExp:j,isState:A,isInjectable:H,isPromise:D,Queue:Ht,maxLength:Se,padString:be,kebobString:Re,functionToString:Ee,fnToString:Ce,stringify:ke,beforeAfterSubstr:Oe,hostRegex:xe,stripLastPathElement:Ie,splitHash:Ve,splitQuery:je,splitEqual:Ae,trimHashVal:He,splitOnDelim:De,joinNeighborsR:qe,get Category(){return t.Category},Trace:Qt,trace:Kt,get DefType(){return t.DefType},Param:se,ParamTypes:Fe,StateParams:Ue,ParamType:ie,PathNode:ce,PathUtils:fe,resolvePolicies:pe,defaultResolvePolicy:le,Resolvable:he,NATIVE_INJECTOR_TOKEN:ye,ResolveContext:ge,resolvablesBuilder:Ke,StateBuilder:Ye,StateObject:$,StateMatcher:Ze,StateQueueManager:Xe,StateRegistry:tr,StateService:Mr,TargetState:Yt,get TransitionHookPhase(){return t.TransitionHookPhase},get TransitionHookScope(){return t.TransitionHookScope},HookBuilder:ne,matchState:te,RegisteredHook:ee,makeEvent:re,get RejectType(){return t.RejectType},Rejection:qt,Transition:$e,TransitionHook:Xt,TransitionEventType:qr,defaultTransOpts:Ur,TransitionService:Lr,UrlMatcher:nr,UrlMatcherFactory:ir,UrlRouter:sr,UrlRuleFactory:or,BaseUrlRule:ar,UrlService:gr,ViewService:fr,UIRouterGlobals:lr,UIRouter:wr,$q:Br,$injector:Jr,BaseLocationServices:en,HashLocationService:nn,MemoryLocationService:an,PushStateLocationService:sn,MemoryLocationConfig:cn,BrowserLocationConfig:fn,keyValsToObjectR:Qr,getParams:Kr,parseUrl:Yr,buildUrl:Zr,locationPluginFactory:Xr,servicesPlugin:ln,hashLocationPlugin:hn,pushStateLocationPlugin:pn,memoryLocationPlugin:vn,UIRouterPluginBase:dn});function yn(){var t=null;return function(e,r){return t=t||N.$injector.get("$templateFactory"),[new $n(e,r,t)]}}var gn=function(t,e){return t.reduce(function(t,r){return t||E(e[r])},!1)};function _n(t){if(!t.parent)return{};var e=["component","bindings","componentProvider"],r=["templateProvider","templateUrl","template","notify","async"].concat(["controller","controllerProvider","controllerAs","resolveAs"]),n=e.concat(r);if(E(t.views)&&gn(n,t))throw new Error("State '"+t.name+"' has a 'views' object. It cannot also have \"view properties\" at the state level.  Move the following properties into a view (in the 'views' object):  "+n.filter(function(e){return E(t[e])}).join(", "));var i={},o=t.views||{$default:ut(t,n)};return B(o,function(n,o){if(o=o||"$default",O(n)&&(n={component:n}),n=G({},n),gn(e,n)&&gn(r,n))throw new Error("Cannot combine: "+e.join("|")+" with: "+r.join("|")+" in stateview: '"+o+"@"+t.name+"'");n.resolveAs=n.resolveAs||"$resolve",n.$type="ng1",n.$context=t,n.$name=o;var a=fr.normalizeUIViewTarget(n.$context,n.$name);n.$uiViewName=a.uiViewName,n.$uiViewContextAnchor=a.uiViewContextAnchor,i[o]=n}),i}var wn=0,$n=function(){function t(t,e,r){var n=this;this.path=t,this.viewDecl=e,this.factory=r,this.$id=wn++,this.loaded=!1,this.getTemplate=function(t,e){return n.component?n.factory.makeComponentTemplate(t,e,n.component,n.viewDecl.bindings):n.template}}return t.prototype.load=function(){var t=this,e=N.$q,r=new ge(this.path),n=this.path.reduce(function(t,e){return G(t,e.paramValues)},{}),i={template:e.when(this.factory.fromConfig(this.viewDecl,n,r)),controller:e.when(this.getController(r))};return e.all(i).then(function(e){return Kt.traceViewServiceEvent("Loaded",t),t.controller=e.controller,G(t,e.template),t})},t.prototype.getController=function(t){var e=this.viewDecl.controllerProvider;if(!H(e))return this.viewDecl.controller;var r=N.$injector.annotate(e),n=I(e)?kt(e):e;return new he("",n,r).get(t)},t}(),Sn=function(){function t(){var t=this;this._useHttp=n.version.minor<3,this.$get=["$http","$templateCache","$injector",function(e,r,n){return t.$templateRequest=n.has&&n.has("$templateRequest")&&n.get("$templateRequest"),t.$http=e,t.$templateCache=r,t}]}return t.prototype.useHttpService=function(t){this._useHttp=t},t.prototype.fromConfig=function(t,e,r){var n=function(t){return N.$q.when(t).then(function(t){return{template:t}})},i=function(t){return N.$q.when(t).then(function(t){return{component:t}})};return E(t.template)?n(this.fromString(t.template,e)):E(t.templateUrl)?n(this.fromUrl(t.templateUrl,e)):E(t.templateProvider)?n(this.fromProvider(t.templateProvider,e,r)):E(t.component)?i(t.component):E(t.componentProvider)?i(this.fromComponentProvider(t.componentProvider,e,r)):n("<ui-view></ui-view>")},t.prototype.fromString=function(t,e){return P(t)?t(e):t},t.prototype.fromUrl=function(t,e){return P(t)&&(t=t(e)),null==t?null:this._useHttp?this.$http.get(t,{cache:this.$templateCache,headers:{Accept:"text/html"}}).then(function(t){return t.data}):this.$templateRequest(t)},t.prototype.fromProvider=function(t,e,r){var n=N.$injector.annotate(t),i=I(t)?kt(t):t;return new he("",i,n).get(r)},t.prototype.fromComponentProvider=function(t,e,r){var n=N.$injector.annotate(t),i=I(t)?kt(t):t;return new he("",i,n).get(r)},t.prototype.makeComponentTemplate=function(t,e,r,i){i=i||{};var o=n.version.minor>=3?"::":"",a=function(t){var e=Re(t);return/^(x|data)-/.exec(e)?"x-"+e:e},u=function(t){var e=N.$injector.get(t+"Directive");if(!e||!e.length)throw new Error("Unable to find component named '"+t+"'");return e.map(bn).reduce(yt,[])}(r).map(function(r){var n=r.name,u=r.type,s=a(n);if(t.attr(s)&&!i[n])return s+"='"+t.attr(s)+"'";var c=i[n]||n;if("@"===u)return s+"='{{"+o+"$resolve."+c+"}}'";if("&"===u){var f=e.getResolvable(c),l=f&&f.data,h=l&&N.$injector.annotate(l)||[];return s+"='$resolve."+c+(I(l)?"["+(l.length-1)+"]":"")+"("+h.join(",")+")'"}return s+"='"+o+"$resolve."+c+"'"}).join(" "),s=a(r);return"<"+s+" "+u+"></"+s+">"},t}();var bn=function(t){return x(t.bindToController)?Rn(t.bindToController):Rn(t.scope)},Rn=function(t){return Object.keys(t||{}).map(function(e){return[e,/^([=<@&])[?]?(.*)/.exec(t[e])]}).filter(function(t){return E(t)&&I(t[1])}).map(function(t){return{name:t[1][2]||t[0],type:t[1][1]}})},En=function(){function t(e,r){this.stateRegistry=e,this.stateService=r,Q(y(t.prototype),this,y(this))}return t.prototype.decorator=function(t,e){return this.stateRegistry.decorator(t,e)||this},t.prototype.state=function(t,e){return x(t)?e=t:e.name=t,this.stateRegistry.register(e),this},t.prototype.onInvalid=function(t){return this.stateService.onInvalid(t)},t}(),Cn=function(t){return function(e,r){var n=e[t],i="onExit"===t?"from":"to";return n?function(t,e){var r=new ge(t.treeChanges(i)).subContext(e.$$state()),o=G(Mn(r),{$state$:e,$transition$:t});return N.$injector.invoke(n,this,o)}:void 0}},Tn=function(){function t(t){this._urlListeners=[],this.$locationProvider=t;var e=y(t);Q(e,this,e,["hashPrefix"])}return t.monkeyPatchPathParameterType=function(t){var e=t.urlMatcherFactory.type("path");e.encode=function(t){return null!=t?t.toString().replace(/(~|\/)/g,function(t){return{"~":"~~","/":"~2F"}[t]}):t},e.decode=function(t){return null!=t?t.toString().replace(/(~~|~2F)/g,function(t){return{"~~":"~","~2F":"/"}[t]}):t}},t.prototype.dispose=function(){},t.prototype.onChange=function(t){var e=this;return this._urlListeners.push(t),function(){return X(e._urlListeners)(t)}},t.prototype.html5Mode=function(){var t=this.$locationProvider.html5Mode();return(t=x(t)?t.enabled:t)&&this.$sniffer.history},t.prototype.url=function(t,e,r){return void 0===e&&(e=!1),E(t)&&this.$location.url(t),e&&this.$location.replace(),r&&this.$location.state(r),this.$location.url()},t.prototype._runtimeServices=function(t,e,r,n){var i=this;this.$location=e,this.$sniffer=r,t.$on("$locationChangeSuccess",function(t){return i._urlListeners.forEach(function(e){return e(t)})});var o=y(e),a=y(n);Q(o,this,o,["replace","path","search","hash"]),Q(o,this,o,["port","protocol","host"]),Q(a,this,a,["baseHref"])},t}(),Pn=function(){function t(t){this._router=t,this._urlRouter=t.urlRouter}return t.injectableHandler=function(t,e){return function(r){return N.$injector.invoke(e,null,{$match:r,$stateParams:t.globals.params})}},t.prototype.$get=function(){var t=this._urlRouter;return t.update(!0),t.interceptDeferred||t.listen(),t},t.prototype.rule=function(t){var e=this;if(!P(t))throw new Error("'rule' must be a function");var r=new ar(function(){return t(N.$injector,e._router.locationService)},z);return this._urlRouter.rule(r),this},t.prototype.otherwise=function(t){var e=this,r=this._urlRouter;if(O(t))r.otherwise(t);else{if(!P(t))throw new Error("'rule' must be a string or function");r.otherwise(function(){return t(N.$injector,e._router.locationService)})}return this},t.prototype.when=function(e,r){return(I(r)||P(r))&&(r=t.injectableHandler(this._router,r)),this._urlRouter.when(e,r),this},t.prototype.deferIntercept=function(t){this._urlRouter.deferIntercept(t)},t}();n.module("ui.router.angular1",[]);var kn=n.module("ui.router.init",[]),On=n.module("ui.router.util",["ng","ui.router.init"]),xn=n.module("ui.router.router",["ui.router.util"]),In=n.module("ui.router.state",["ui.router.router","ui.router.util","ui.router.angular1"]),Vn=n.module("ui.router",["ui.router.init","ui.router.state","ui.router.angular1"]),jn=(n.module("ui.router.compat",["ui.router"]),null);function An(t){(jn=this.router=new wr).stateProvider=new En(jn.stateRegistry,jn.stateService),jn.stateRegistry.decorator("views",_n),jn.stateRegistry.decorator("onExit",Cn("onExit")),jn.stateRegistry.decorator("onRetain",Cn("onRetain")),jn.stateRegistry.decorator("onEnter",Cn("onEnter")),jn.viewService._pluginapi._viewConfigFactory("ng1",yn());var e=jn.locationService=jn.locationConfig=new Tn(t);function r(t,r,n,i,o,a){return e._runtimeServices(i,t,n,r),delete jn.router,delete jn.$get,jn}return Tn.monkeyPatchPathParameterType(jn),jn.router=jn,jn.$get=r,r.$inject=["$location","$browser","$sniffer","$rootScope","$http","$templateCache"],jn}An.$inject=["$locationProvider"];var Hn=function(t){return["$uiRouterProvider",function(e){var r=e.router[t];return r.$get=function(){return r},r}]};function Dn(t,e,r){N.$injector=t,N.$q=e,r.stateRegistry.get().map(function(t){return t.$$state().resolvables}).reduce(yt,[]).filter(function(t){return"deferred"===t.deps}).forEach(function(e){return e.deps=t.annotate(e.resolveFn,t.strictDi)})}Dn.$inject=["$injector","$q","$uiRouter"];function qn(t){t.$watch(function(){Kt.approximateDigests++})}qn.$inject=["$rootScope"],kn.provider("$uiRouter",An),xn.provider("$urlRouter",["$uiRouterProvider",function(t){return t.urlRouterProvider=new Pn(t)}]),On.provider("$urlService",Hn("urlService")),On.provider("$urlMatcherFactory",["$uiRouterProvider",function(){return jn.urlMatcherFactory}]),On.provider("$templateFactory",function(){return new Sn}),In.provider("$stateRegistry",Hn("stateRegistry")),In.provider("$uiRouterGlobals",Hn("globals")),In.provider("$transitions",Hn("transitionService")),In.provider("$state",["$uiRouterProvider",function(){return G(jn.stateProvider,{$get:function(){return jn.stateService}})}]),In.factory("$stateParams",["$uiRouter",function(t){return t.globals.params}]),Vn.factory("$view",function(){return jn.viewService}),Vn.service("$trace",function(){return Kt}),Vn.run(qn),On.run(["$urlMatcherFactory",function(t){}]),In.run(["$state",function(t){}]),xn.run(["$urlRouter",function(t){}]),kn.run(Dn);var Nn,Fn,Un,Ln,Mn=function(t){return t.getTokens().filter(O).map(function(e){var r=t.getResolvable(e);return[e,"NOWAIT"===t.getPolicy(r).async?r.promise:r.data]}).reduce(Pt,{})};function Bn(t){var e,r=t.match(/^\s*({[^}]*})\s*$/);if(r&&(t="("+r[1]+")"),!(e=t.replace(/\n/g," ").match(/^\s*([^(]*?)\s*(\((.*)\))?\s*$/))||4!==e.length)throw new Error("Invalid state ref '"+t+"'");return{state:e[1]||null,paramExpr:e[3]||null}}function Gn(t){var e=t.parent().inheritedData("$uiView"),r=c("$cfg.path")(e);return r?kt(r).state.name:void 0}function Wn(t,e,r){var n=r.uiState||t.current.name,i=G(function(t,e){return{relative:Gn(t)||e.$current,inherit:!0,source:"sref"}}(e,t),r.uiStateOpts||{}),o=t.href(n,r.uiStateParams,i);return{uiState:n,uiStateParams:r.uiStateParams,uiStateOpts:i,href:o}}function zn(t){var e="[object SVGAnimatedString]"===Object.prototype.toString.call(t.prop("href")),r="FORM"===t[0].nodeName;return{attr:r?"action":e?"xlink:href":"href",isAnchor:"A"===t.prop("tagName").toUpperCase(),clickable:!r}}function Jn(t,e,r,n,i){return function(o){var a=o.which||o.button,u=i();if(!(a>1||o.ctrlKey||o.metaKey||o.shiftKey||t.attr("target"))){var s=r(function(){e.go(u.uiState,u.uiStateParams,u.uiStateOpts)});o.preventDefault();var c=n.isAnchor&&!u.href?1:0;o.preventDefault=function(){c--<=0&&r.cancel(s)}}}}function Qn(t,e,r,n){var i;n&&(i=n.events),I(i)||(i=["click"]);for(var o=t.on?"on":"bind",a=0,u=i;a<u.length;a++){var s=u[a];t[o](s,r)}e.$on("$destroy",function(){for(var e=t.off?"off":"unbind",n=0,o=i;n<o.length;n++){var a=o[n];t[e](a,r)}})}function Kn(t){var e=function(e,r,n){return t.is(e,r,n)};return e.$stateful=!0,e}function Yn(t){var e=function(e,r,n){return t.includes(e,r,n)};return e.$stateful=!0,e}function Zn(t,e,r,i,o,a){var u=c("viewDecl.controllerAs"),s=c("viewDecl.resolveAs");return{restrict:"ECA",priority:-400,compile:function(i){var a=i.html();return i.empty(),function(i,c){var f=c.data("$uiView");if(!f)return c.html(a),void t(c.contents())(i);var l=f.$cfg||{viewDecl:{},getTemplate:J},h=l.path&&new ge(l.path);c.html(l.getTemplate(c,h)||a),Kt.traceUIViewFill(f.$uiView,c.html());var p=t(c.contents()),v=l.controller,d=u(l),m=s(l),y=h&&Mn(h);if(i[m]=y,v){var g=e(v,G({},y,{$scope:i,$element:c}));d&&(i[d]=g,i[d][m]=y),c.data("$ngControllerController",g),c.children().data("$ngControllerController",g),ei(o,r,g,i,l)}if(O(l.viewDecl.component))var _=l.viewDecl.component,w=Re(_),$=new RegExp("^(x-|data-)?"+w+"$","i"),S=i.$watch(function(){var t=[].slice.call(c[0].children).filter(function(t){return t&&t.tagName&&$.exec(t.tagName)});return t&&n.element(t).data("$"+_+"Controller")},function(t){t&&(ei(o,r,t,i,l),S())});p(i)}}}}Nn=["$uiRouter","$timeout",function(t,e){var r=t.stateService;return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,i,o,a){var u,s=zn(i),c=a[1]||a[0],f=null,l={},h=function(){return Wn(r,i,l)},p=Bn(o.uiSref);function v(){var t=h();f&&f(),c&&(f=c.$$addStateInfo(t.uiState,t.uiStateParams)),null!=t.href&&o.$set(s.attr,t.href)}l.uiState=p.state,l.uiStateOpts=o.uiSrefOpts?n.$eval(o.uiSrefOpts):{},p.paramExpr&&(n.$watch(p.paramExpr,function(t){l.uiStateParams=G({},t),v()},!0),l.uiStateParams=G({},n.$eval(p.paramExpr))),v(),n.$on("$destroy",t.stateRegistry.onStatesChanged(v)),n.$on("$destroy",t.transitionService.onSuccess({},v)),s.clickable&&(u=Jn(i,r,e,s,h),Qn(i,n,u,l.uiStateOpts))}}}],Fn=["$uiRouter","$timeout",function(t,e){var r=t.stateService;return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(n,i,o,a){var u,s=zn(i),c=a[1]||a[0],f=null,l={},h=function(){return Wn(r,i,l)},p=["uiState","uiStateParams","uiStateOpts"],v=p.reduce(function(t,e){return t[e]=J,t},{});function d(){var t=h();f&&f(),c&&(f=c.$$addStateInfo(t.uiState,t.uiStateParams)),null!=t.href&&o.$set(s.attr,t.href)}p.forEach(function(t){l[t]=o[t]?n.$eval(o[t]):null,o.$observe(t,function(e){v[t](),v[t]=n.$watch(e,function(e){l[t]=e,d()},!0)})}),d(),n.$on("$destroy",t.stateRegistry.onStatesChanged(d)),n.$on("$destroy",t.transitionService.onSuccess({},d)),s.clickable&&(u=Jn(i,r,e,s,h),Qn(i,n,u,l.uiStateOpts))}}}],Un=["$state","$stateParams","$interpolate","$uiRouter",function(t,e,r,n){return{restrict:"A",controller:["$scope","$element","$attrs",function(e,i,o){var a,u,s,c,f,l=[];a=r(o.uiSrefActiveEq||"",!1)(e);try{u=e.$eval(o.uiSrefActive)}catch(t){}function h(t){t.promise.then(m,J)}function p(){v(u)}function v(t){x(t)&&(l=[],B(t,function(t,r){var n=function(t,r){var n=Bn(t);d(n.state,e.$eval(n.paramExpr),r)};O(t)?n(t,r):I(t)&&B(t,function(t){n(t,r)})}))}function d(e,r,n){var o={state:t.get(e,Gn(i))||{name:e},params:r,activeClass:n};return l.push(o),function(){X(l)(o)}}function m(){var r=function(t){return t.split(/\s/).filter(z)},n=function(t){return t.map(function(t){return t.activeClass}).map(r).reduce(yt,[])},o=n(l).concat(r(a)).reduce(wt,[]),u=n(l.filter(function(e){return t.includes(e.state.name,e.params)})),s=!!l.filter(function(e){return t.is(e.state.name,e.params)}).length?r(a):[],c=u.concat(s).reduce(wt,[]),f=o.filter(function(t){return!Y(c,t)});e.$evalAsync(function(){c.forEach(function(t){return i.addClass(t)}),f.forEach(function(t){return i.removeClass(t)})})}v(u=u||r(o.uiSrefActive||"",!1)(e)),this.$$addStateInfo=function(t,e){if(!(x(u)&&l.length>0)){var r=d(t,e,u);return m(),r}},e.$on("$destroy",(s=n.stateRegistry.onStatesChanged(p),c=n.transitionService.onStart({},h),f=e.$on("$stateChangeSuccess",m),function(){s(),c(),f()})),n.globals.transition&&h(n.globals.transition),m()}]}}],n.module("ui.router.state").directive("uiSref",Nn).directive("uiSrefActive",Un).directive("uiSrefActiveEq",Un).directive("uiState",Fn),Kn.$inject=["$state"],Yn.$inject=["$state"],n.module("ui.router.state").filter("isState",Kn).filter("includedByState",Yn),Ln=["$view","$animate","$uiViewScroll","$interpolate","$q",function(t,e,r,i,o){var a={$cfg:{viewDecl:{$context:t._pluginapi._rootViewContext()}},$uiView:{}},u={count:0,restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(s,f,l){return function(s,f,h){var p,v,d,m,y,g=h.onload||"",_=h.autoscroll,w={enter:function(t,r,i){n.version.minor>2?e.enter(t,null,r).then(i):e.enter(t,null,r,i)},leave:function(t,r){n.version.minor>2?e.leave(t).then(r):e.leave(t,r)}},$=f.inheritedData("$uiView")||a,S=i(h.uiView||h.name||"")(s)||"$default",b={$type:"ng1",id:u.count++,name:S,fqn:$.$uiView.fqn?$.$uiView.fqn+"."+S:S,config:null,configUpdated:function(t){if(t&&!(t instanceof $n))return;if(e=m,r=t,e===r)return;var e,r;Kt.traceUIViewConfigUpdated(b,t&&t.viewDecl&&t.viewDecl.$context),m=t,R(t)},get creationContext(){var t=c("$cfg.viewDecl.$context")($),e=c("$uiView.creationContext")($);return t||e}};function R(t){var e=s.$new(),n=o.defer(),i=o.defer(),a={$cfg:t,$uiView:b},u={$animEnter:n.promise,$animLeave:i.promise,$$animLeave:i};e.$emit("$viewContentLoading",S);var c=l(e,function(t){t.data("$uiViewAnim",u),t.data("$uiView",a),w.enter(t,f,function(){n.resolve(),d&&d.$emit("$viewContentAnimationEnded"),(E(_)&&!_||s.$eval(_))&&r(t)}),function(){if(p&&(Kt.traceUIViewEvent("Removing (previous) el",p.data("$uiView")),p.remove(),p=null),d&&(Kt.traceUIViewEvent("Destroying scope",b),d.$destroy(),d=null),v){var t=v.data("$uiViewAnim");Kt.traceUIViewEvent("Animate out",t),w.leave(v,function(){t.$$animLeave.resolve(),p=null}),p=v,v=null}}()});v=c,(d=e).$emit("$viewContentLoaded",t||m),d.$eval(g)}Kt.traceUIViewEvent("Linking",b),f.data("$uiView",{$uiView:b}),R(),y=t.registerUIView(b),s.$on("$destroy",function(){Kt.traceUIViewEvent("Destroying/Unregistering",b),y()})}}};return u}],Zn.$inject=["$compile","$controller","$transitions","$view","$q","$timeout"];var Xn="function"==typeof n.module("ui.router").component,ti=0;function ei(t,e,r,n,i){!P(r.$onInit)||i.viewDecl.component&&Xn||r.$onInit();var o=kt(i.path).state.self,a={bind:r};if(P(r.uiOnParamsChanged)){var u=new ge(i.path).getResolvable("$transition$").data;n.$on("$destroy",e.onSuccess({},function(t){if(t!==u&&-1===t.exiting().indexOf(o)){var e=t.params("to"),n=t.params("from"),i=t.treeChanges().to.map(function(t){return t.paramSchema}).reduce(yt,[]),a=t.treeChanges().from.map(function(t){return t.paramSchema}).reduce(yt,[]),s=i.filter(function(t){var r=a.indexOf(t);return-1===r||!a[r].type.equals(e[t.id],n[t.id])});if(s.length){var c=s.map(function(t){return t.id}),f=ft(e,function(t,e){return-1!==c.indexOf(e)});r.uiOnParamsChanged(f,t)}}},a))}if(P(r.uiCanExit)){var s=ti++,c=function(t){return!!t&&(t._uiCanExitIds&&!0===t._uiCanExitIds[s]||c(t.redirectedFrom()))},f={exiting:o.name};n.$on("$destroy",e.onBefore(f,function(e){var n,i=e._uiCanExitIds=e._uiCanExitIds||{};return c(e)||(n=t.when(r.uiCanExit(e))).then(function(t){return i[s]=!1!==t}),n},a))}}n.module("ui.router.state").directive("uiView",Ln),n.module("ui.router.state").directive("uiView",Zn),n.module("ui.router.state").provider("$uiViewScroll",function(){var t=!1;this.useAnchorScroll=function(){t=!0},this.$get=["$anchorScroll","$timeout",function(e,r){return t?e:function(t){return r(function(){t[0].scrollIntoView()},0,!1)}}]});t.default="ui.router",t.core=mn,t.watchDigests=qn,t.getLocals=Mn,t.getNg1ViewConfigFactory=yn,t.ng1ViewsBuilder=_n,t.Ng1ViewConfig=$n,t.StateProvider=En,t.UrlRouterProvider=Pn,t.root=F,t.fromJson=L,t.toJson=M,t.forEach=B,t.extend=G,t.equals=W,t.identity=z,t.noop=J,t.createProxyFunctions=Q,t.inherit=K,t.inArray=Y,t._inArray=Z,t.removeFrom=X,t._removeFrom=tt,t.pushTo=et,t._pushTo=rt,t.deregAll=nt,t.defaults=it,t.mergeR=ot,t.ancestors=at,t.pick=ut,t.omit=st,t.pluck=ct,t.filter=ft,t.find=lt,t.mapObj=ht,t.map=pt,t.values=vt,t.allTrueR=dt,t.anyTrueR=mt,t.unnestR=yt,t.flattenR=gt,t.pushR=_t,t.uniqR=wt,t.unnest=$t,t.flatten=St,t.assertPredicate=bt,t.assertMap=Rt,t.assertFn=Et,t.pairs=Ct,t.arrayTuples=Tt,t.applyPairs=Pt,t.tail=kt,t.copy=Ot,t._extend=xt,t.silenceUncaughtInPromise=jt,t.silentRejection=At,t.notImplemented=q,t.services=N,t.Glob=w,t.curry=i,t.compose=o,t.pipe=a,t.prop=u,t.propEq=s,t.parse=c,t.not=f,t.and=l,t.or=h,t.all=p,t.any=v,t.is=d,t.eq=m,t.val=y,t.invoke=g,t.pattern=_,t.isUndefined=R,t.isDefined=E,t.isNull=C,t.isNullOrUndefined=T,t.isFunction=P,t.isNumber=k,t.isString=O,t.isObject=x,t.isArray=I,t.isDate=V,t.isRegExp=j,t.isState=A,t.isInjectable=H,t.isPromise=D,t.Queue=Ht,t.maxLength=Se,t.padString=be,t.kebobString=Re,t.functionToString=Ee,t.fnToString=Ce,t.stringify=ke,t.beforeAfterSubstr=Oe,t.hostRegex=xe,t.stripLastPathElement=Ie,t.splitHash=Ve,t.splitQuery=je,t.splitEqual=Ae,t.trimHashVal=He,t.splitOnDelim=De,t.joinNeighborsR=qe,t.Trace=Qt,t.trace=Kt,t.Param=se,t.ParamTypes=Fe,t.StateParams=Ue,t.ParamType=ie,t.PathNode=ce,t.PathUtils=fe,t.resolvePolicies=pe,t.defaultResolvePolicy=le,t.Resolvable=he,t.NATIVE_INJECTOR_TOKEN=ye,t.ResolveContext=ge,t.resolvablesBuilder=Ke,t.StateBuilder=Ye,t.StateObject=$,t.StateMatcher=Ze,t.StateQueueManager=Xe,t.StateRegistry=tr,t.StateService=Mr,t.TargetState=Yt,t.HookBuilder=ne,t.matchState=te,t.RegisteredHook=ee,t.makeEvent=re,t.Rejection=qt,t.Transition=$e,t.TransitionHook=Xt,t.TransitionEventType=qr,t.defaultTransOpts=Ur,t.TransitionService=Lr,t.UrlMatcher=nr,t.UrlMatcherFactory=ir,t.UrlRouter=sr,t.UrlRuleFactory=or,t.BaseUrlRule=ar,t.UrlService=gr,t.ViewService=fr,t.UIRouterGlobals=lr,t.UIRouter=wr,t.$q=Br,t.$injector=Jr,t.BaseLocationServices=en,t.HashLocationService=nn,t.MemoryLocationService=an,t.PushStateLocationService=sn,t.MemoryLocationConfig=cn,t.BrowserLocationConfig=fn,t.keyValsToObjectR=Qr,t.getParams=Kr,t.parseUrl=Yr,t.buildUrl=Zr,t.locationPluginFactory=Xr,t.servicesPlugin=ln,t.hashLocationPlugin=hn,t.pushStateLocationPlugin=pn,t.memoryLocationPlugin=vn,t.UIRouterPluginBase=dn,Object.defineProperty(t,"__esModule",{value:!0})});(function(){var serverRoutes=["/category","/categories","/shift-design-system","/cf-login-error","/users","/tags","/account","/admin","/affiliate","/offers","/affiliates","/terms","/privacy-policy","/licensing","/cookie-policy","/connect",];angular.module("UI8SPA",["ngResource","ngCookies","express-csrf","ui.router","UI8.filters","UI8.services","UI8.resources","UI8.directives","UI8.controllers","UI8.components","credit-cards","ngFileUpload","relativeDate","ngSanitize",]).config(["$locationProvider",function($locationProvider){$locationProvider.html5Mode(true);},]).config(function($httpProvider){$httpProvider.defaults.headers.common["X-Requested-With"]="XMLHttpRequest";$httpProvider.defaults.withCredentials=true;}).config(function($stateProvider){var home={name:"home",url:"^/",component:"home",resolve:{data:function(ProductService){return ProductService.homeDigest();},user:function(SessionService){return SessionService.user();},},onEnter:revealPage,};var authors={name:"openShop",url:"^/authors",component:"openShop",resolve:{user:function(SessionService){return SessionService.user();},},onEnter:scrollTopAndReveal,};var affiliates={name:"Affiliates",url:"^/affiliates",component:"affiliates",resolve:{user:function(SessionService){return SessionService.user();},},onEnter:scrollTopAndReveal,};var pass={name:"pass",url:"^/products/all-access-pass",component:"productPage",resolve:{data:function(ProductService){console.log("app_spa -> product page data");return ProductService.passPage();},user:function(SessionService){return SessionService.user();},},onEnter:revealPage,};var rootwireframekit={name:"rootwireframekit",url:"^/products/root-wireframe-system",component:"rootwireframekitPage",resolve:{data:function(ProductService){return ProductService.passPage();},user:function(SessionService){return SessionService.user();},},onEnter:revealPage,};var sale={name:"sale",url:"^/sale",component:"category",resolve:{data:function(CategoryService){var page=sessionStorage.getItem("page:sale")||1;return CategoryService.findBySlug("sale",{page:page,ff:page>1?true:false,});},user:function(SessionService){return SessionService.user();},},onEnter:revealPage,};var trending={name:"trending",url:"^/trending",component:"category",resolve:{data:function(CategoryService){var page=sessionStorage.getItem("page:sale")||1;return CategoryService.findBySlug("trending",{page:page,ff:page>1?true:false,});},user:function(SessionService){return SessionService.user();},},onEnter:revealPage,};var topProducts={name:"topProducts",url:"^/category/featured-products",component:"topProducts",resolve:{data:function(CategoryService){return CategoryService.findBySlug("featured-products",{});},user:function(SessionService){return SessionService.user();},},onEnter:scrollTopAndReveal,};var categories={name:"categories",url:"/categories/{slug}",component:"category",resolve:{data:function(CategoryService,$transition$){var slug=$transition$.params().slug;var page=sessionStorage.getItem("page:"+slug)||1;return CategoryService.findBySlug(slug,{page:page,ff:page>1?true:false,});},user:function(SessionService){return SessionService.user();},},};var category={name:"category",url:"/category/{slug}",component:"category",resolve:{data:function(CategoryService,$transition$){var slug=$transition$.params().slug;var page=sessionStorage.getItem("page:"+slug)||1;return CategoryService.findBySlug(slug,{page:page,ff:page>1?true:false,});},user:function(SessionService){return SessionService.user();},},};var purchases={name:"purchases",url:"^/account/purchases",component:"accountPurchases",resolve:{data:function(SessionService){return SessionService.purchases();},},onEnter:function(data){if(!data.user)
return(window.location="/account/signin?from=_account_purchases");scrollTopAndReveal();},};var profile={name:"profile",url:"/users/{id}",component:"userProfile",resolve:{data:function(UserService,$transition$){return UserService.show($transition$.params().id);},followers:function(UserService,$transition$){return UserService.followers($transition$.params().id);},following:function(UserService,$transition$){return UserService.following($transition$.params().id);},user:function(SessionService){return SessionService.user();},},onEnter:scrollTopAndReveal,};var authorProfile={name:"authorProfile",url:"/{id}/products",component:"userProfile",resolve:{data:function(UserService,$transition$){return UserService.show($transition$.params().id);},followers:function(UserService,$transition$){return UserService.followers($transition$.params().id);},following:function(UserService,$transition$){return UserService.following($transition$.params().id);},user:function(SessionService){return SessionService.user();},},onEnter:scrollTopAndReveal,};var authorPage={name:"authorPage",url:"/{id}",component:"userProfile",resolve:{data:function(UserService,$transition$){return UserService.show($transition$.params().id);},followers:function(UserService,$transition$){return UserService.followers($transition$.params().id);},following:function(UserService,$transition$){return UserService.following($transition$.params().id);},user:function(SessionService){return SessionService.user();},},onEnter:scrollTopAndReveal,};var userSettings={name:"userSettings",url:"^/account/settings",component:"accountSettings",resolve:{data:function(AccountService){return AccountService.settings();},},onEnter:function(data){if(!data.user)
return(window.location="/account/signin?from=_account_settings");scrollTopAndReveal();},};$stateProvider.state(home).state(authors).state(affiliates).state(pass).state(rootwireframekit).state(sale).state(trending).state(topProducts).state(category).state(categories).state(purchases).state(authorProfile).state(profile).state(userSettings).state(authorPage);function scrollToTop(){window.scrollTo(0,0);}
function revealPage(){angular.element(document.querySelector(".page-loader-container")).addClass("ng-hide");angular.element(document.querySelector(".body-container")).removeClass("ng-hide");}
function scrollTopAndReveal(){scrollToTop();revealPage();}}).config(function($urlRouterProvider){$urlRouterProvider.when("/category/all","/category/featured-products");$urlRouterProvider.when("/categories/all","/category/featured-products");$urlRouterProvider.when("/category/top-products","/category/featured-products");$urlRouterProvider.when("/categories/top-products","/category/featured-products");$urlRouterProvider.when("/categories/featured-products","/category/featured-products");$urlRouterProvider.when("/products/ultimate-pass","/products/all-access-pass");$urlRouterProvider.when("/product/ultimate-pass","/products/all-access-pass");$urlRouterProvider.when("/product/unlimited-pass","/products/all-access-pass");$urlRouterProvider.when("/product/ui8/all-access-pass","/products/all-access-pass");$urlRouterProvider.when("/products/ui8/all-access-pass","/products/all-access-pass");$urlRouterProvider.when("/robowolf/products/root-wireframe-system","/products/root-wireframe-system");$urlRouterProvider.when("/account","/account/purchases");for(var i=0;i<serverRoutes.length;i++){var serverPath=serverRoutes[i];$urlRouterProvider.when(serverPath,function(){location.reload();});}
$urlRouterProvider.otherwise(function(){location.reload();});}).config(["$compileProvider",function($compileProvider){$compileProvider.debugInfoEnabled(false);},]).run(function($rootScope,SessionService,$transitions,$location,$timeout){if("scrollRestoration"in history){history.scrollRestoration="manual";}else{window.addEventListener("unload",function(){window.scrollTo(0,0);});}
if(!$rootScope.user){SessionService.setCurrentUser();}
function openSearch(letter){$rootScope.showSearch=true;if(letter!=null){$rootScope.searchTerm=letter;sessionStorage.setItem("search:term",letter);}
$timeout(function(){$rootScope.$digest();});$location.search("search",1);$("body").css("overflow-y","hidden");}
window.openSearch=openSearch;document.addEventListener("keydown",function(e){var invalids=["input","select","textarea"];if(invalids.indexOf(e.target.nodeName.toLowerCase())!==-1)return;if($rootScope.showSearch){$("#search-input").focus();}
if(e.altKey||e.ctrlKey||e.metaKey)return;if(e.keyCode<48||e.keyCode>90)return;var letter=String.fromCharCode(e.keyCode);if(!e.shiftKey)letter=letter.toLowerCase();if(!$rootScope.showSearch){return openSearch(letter);}});$transitions.onSuccess({},function(){if(window.Intercom)Intercom("update");if($location.search().search)openSearch();if($location.search().support)Intercom("show");if(UI8.passLevel||UI8.passLevel===0){setTimeout(function(){$("a").each(function(){var href=$(this).attr("href");if(href&&!/status=/.test(href)&&!/#preview/.test(href)&&!/info@ui8.net/.test(href)){href+=(href.match(/\?/)?"&":"?")+"status="+UI8.passLevel;$(this).attr("href",href);}});},50);}});});angular.module("UI8.filters",[]);angular.module("UI8.services",[]);angular.module("UI8.resources",[]);angular.module("UI8.directives",[]);angular.module("UI8.controllers",[]);angular.module("UI8.components",[]);})();angular.module("UI8.filters").filter("ui8CapitalizeAll",[function(){return function(string){var words=(string||"").split(" ");var _string="";words.forEach(function(word){_string+=word.charAt(0).toUpperCase()+word.slice(1)+" ";});return _string;};},]);angular.module("UI8.filters").filter("ui8Capitalize",[function(){return function(input){return input?input.replace(/([^\W_]+[^\s-]*) */g,function(txt){return txt.charAt(0).toUpperCase()+txt.substr(1).toLowerCase();}):"";};},]);angular.module("UI8.filters").filter("ui8Currency",["$filter",function($filter){return function(value,symbol){return $filter("currency")(Math.abs(parseInt(value,10)/100),symbol).replace(".00","");};},]);angular.module("UI8.filters").filter("ui8Filesize",[function(){return function(bytes){if(!bytes)return;var thresh=1000;if(Math.abs(bytes)<thresh){return bytes+" B";}
var units=["kB","MB","GB","TB"];var u=-1;do{bytes/=thresh;++u;}while(Math.abs(bytes)>=thresh&&u<units.length-1);return bytes.toFixed(1)+" "+units[u];};},]);angular.module("UI8.filters").filter("ui8FormatNumber",["$filter",function(){return function(value){return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");};},]);angular.module("UI8.filters").filter("ui8GetMentions",["$sce",function($sce){var mentions={};function getUserHandle(user){if(!user)return "";return("@"+
(user.display_name||(user.first_name||"")+" "+user.last_name));}
function getMentionMarkup(user,handleOnly){return handleOnly?getUserHandle(user):'<a href="/users/'+
(user.display_name_slug||user._id)+
'" class="mention">'+
getUserHandle(user)+
"</a>";}
function findUserInArray(id,users){if(users.length){users.forEach(function(user){if(mentions[user._id]||!user._id)return;mentions[user._id]=user;});}
return mentions[id];}
return function(comment,handleOnly,commenters){return $sce.trustAsHtml(comment.message.replace(/\[USER\:([0-9A-z]+)\]/gi,function(match,_id){return(getMentionMarkup(findUserInArray(_id,commenters),handleOnly)||"");}).substr(0,500));};},]);angular.module("UI8.filters").filter("ui8Pluralize",[function(){return function(input,count){var regex=/s$/gi,startedPlural=!!input.match(regex,""),shouldBePlural=count!==1;if(startedPlural&&shouldBePlural){return input;}else if(startedPlural&&!shouldBePlural){return input.replace(regex,"");}else if(shouldBePlural){return input+"s";}
return input;};},]);angular.module("UI8.filters").filter("ui8Slugify",[function(){return function(input){return(input||"").toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");};},]);angular.module("UI8.filters").filter("ui8Trusted",["$sce",function($sce){return function(text){return $sce.trustAsHtml(text);};},]);angular.module("UI8.services").service("AccountService",["$http",function($http){this.settings=function(){return $http.get("/api/account/settings").then(function successCallback(res){return res.data;},function errorCallback(){return null;});};this.listCards=function(callback){return $http.get("/api/account/cards").then(function successCallback(res){if(callback)return callback(null,res.data);return res.data;},function errorCallback(){if(callback)
return callback("Unable to retrieve payment cards",null);return new Error("Unable to retrieve payment cards");});};},]);angular.module("UI8.services").service("CartService",["$rootScope","$http","FlashService",function($rootScope,$http,FlashService){this.getCart=function(callback){$http.get("/api/cart").then(function(res){return callback(null,res.data.cart);},function(){FlashService.set("error","Unable to retrieve cart");});};this.addToCart=function($event,callback){var _id=$event?$($event.currentTarget).find("input[name='product']").val()||$($event.currentTarget).data("id")||angular.element("#product_id").val()||$event.currentTarget.dataset.id:angular.element("#product_id").val()||$event.currentTarget.dataset.id;if(!_id)return FlashService.set("error","Unable to add item to cart");return $http.post("/api/cart/add",{product:_id}).then(function successCallback(res){if(res.data.error)console.log(res.data.error);$rootScope.cart=res.data.cart;if(callback)return callback(null,res.data.cart);return res.data.cart;},function errorCallback(){FlashService.set("error","Unable to add item to cart");if(callback)return callback("Unable to add item to cart",null);});};this.addPassToCart=function(id,seats,callback,addSeats,originalOrder){if(!id)return FlashService.set("error","Unable to add item to cart");if(!seats)seats=1;var body={product:id,seats:seats};if(addSeats){body.addSeats=true;body.originalOrder=originalOrder;}
return $http.post("/api/cart/add",body).then(function successCallback(res){if(res.data.error)console.log(res.data.error);$rootScope.cart=res.data.cart;if(callback)return callback(null,res.data.cart);return res.data.cart;},function errorCallback(){FlashService.set("error","Unable to add item to cart");if(callback)return callback("Unable to add item to cart",null);});};this.passUpsellToCart=function(product,keepProducts,callback){return $http.post("/api/cart/add",{product:product?product:"5accb700555e9baf1531d411",seats:1,upsell:true,keepProducts:!!keepProducts,}).then(function successCallback(res){if(res.data.error)console.log(res.data.error);$rootScope.cart=res.data.cart;if(callback)return callback(null,res.data.cart);return res.data.cart;},function errorCallback(){FlashService.set("error","Unable to add item to cart");if(callback)return callback("Unable to add item to cart",null);});};this.removeFromCart=function(itemId,callback){$http.post("/api/cart/rem",{item:itemId}).then(function successCallback(res){if(!callback)return res.data;return callback(null,res.data);},function errorCallback(){FlashService.set("error","Unable to remove item from cart");});};},]);angular.module("UI8.services").service("CategoryService",["$http",function($http){this.list=function(){return $http.get("/api/categories").then(function(response){if(response.error)return[];return response.data;},function(){return[];});};this.findBySlug=function(slug,options){return new Promise(function(resolve){var queryString="";var sessionSoftware=sessionStorage.getItem(slug+":category-software-filter");var sessionFeatured=sessionStorage.getItem(slug+":category-featured-filter");var sessionSort=sessionStorage.getItem(slug+":category-sort");if(!options&&(sessionSoftware||sessionFeatured||sessionSort)){options={};}
if(!options.compatibility&&sessionSoftware&&sessionSoftware!=="Any Platform")
options.compatibility=sessionSoftware;if(!options.featured&&sessionFeatured)
options.featured=options.featured===false?null:sessionFeatured;if(!options.sort&&sessionSort)options.sort=sessionSort;if(options){var params=new URLSearchParams(options).toString();queryString="?"+params;}
return $http.get("/api/categories/"+slug+queryString).then(function(response){if(response.error)return resolve({});return resolve(response.data.data);},function(){return resolve({});});});};},]);angular.module("UI8.services").service("DiscussionService",["$http",function($http){this.create=function(discussionId,msg){return $http.post("/discussion/"+discussionId,{message:msg});};this.update=function(discussionId,commentId,msg){return $http.post("/discussion/"+discussionId+"/"+commentId+"/update",{message:msg});};this.listComments=function(discussionId,query){return $http.get("/discussion/"+discussionId,{params:query});};this.delete=function(discussionId,commentId){return $http.delete("/discussion/"+discussionId+"/"+commentId);};this.adminDelete=function(commentId){return $http.delete("/admin/comments/"+commentId);};this.toggleLike=function(action,discussionId,commentId){return $http[action]("/discussion/"+discussionId+"/"+commentId+"/likes");};this.whoLikesThis=function(discussionId,commentId){return $http.get("/discussion/"+discussionId+"/"+commentId).then(function(response){return Promise.resolve(response.likes);},function(error){return Promise.resolve({error:error});});};},]);angular.module("UI8.services").service("DownloadService",["$http","$q",function($http,$q){this.get=function(product,fileIndex,dropbox){var file=product.files[fileIndex];if(!file)return Promise.reject("Invalid file");var url=window.location.origin+
"/account/download/"+
product._id+
"/"+
file._id;if(window.ga)
window.ga("send","pageview","/virtual/download/"+product.slug);if(dropbox)return transferToDropbox(url,product.name);return directDownload(url);};function dispatchEvent(remainingCount){document.body.dispatchEvent(new CustomEvent("download-success",{detail:{downloadsRemaining:remainingCount},}));}
function transferToDropbox(url,productName){var DBOX=window.Dropbox;var deferred=$q.defer();if(!DBOX){return deferred.reject("Dropbox not available. Please try again later.");}else{url=url.replace("/account","");$.ajax({url:url,dataType:"json",async:false,success:function(res){if(res.error){return deferred.reject(res.error);}else{DBOX.save(res.signedLink,productName+".zip",{success:function(){dispatchEvent(res.downloadsRemaining);deferred.resolve("btn-dropbox-success");},progress:function(){deferred.resolve("btn-dropbox-loading");},cancel:function(){deferred.resolve("");},error:function(){deferred.resolve("btn-dropbox-error");},});}},error:function(xhr,e,msg){console.error(e);console.error(msg);deferred.reject(msg);},});}
return deferred.promise;}
function directDownload(url){var deferred=$q.defer();$http.get(url,{async:true}).then(function(res){if(res.data.error){deferred.reject(res.data.error);}else{dispatchEvent(res.data.downloadsRemaining);window.location=res.data.signedLink;deferred.resolve();}},function(e){console.log(e);deferred.reject(e.message);});return deferred.promise;}},]);angular.module("UI8.services").service("FlashService",["$timeout","$rootScope",function($timeout,$rootScope){var delay=4000;var type="";var showFlash=false;var message="";return{get:function(){return{type:type,message:message,showFlash:showFlash,};},set:function(newType,newMessage){return $timeout(function(){type=newType;message=newMessage;$rootScope.flashMessage=message;showFlash=newMessage?true:false;return $timeout(function(){showFlash=false;},delay);},1);},};},]);angular.module("UI8.services").service("HistoryService",["$rootScope",function($rootScope){this.rememberScrollPosition=function(checkFn,pageKey,getTopPosition){$rootScope.$on("$locationChangeStart",function(event,newUrl,oldUrl){var newPath=new URL(newUrl).pathname;var oldPath=new URL(oldUrl).pathname;if(checkFn(oldPath,oldUrl)&&newPath.includes("/products/")){const topPosition=getTopPosition?getTopPosition():window.scrollY;sessionStorage.setItem("top:"+pageKey,topPosition);}});};},]);angular.module("UI8.services").service("LikeService",["$http","$window",function($http,$window){var likes=[],unlikes=[],loggedIn=false,newLikes=[],ogLikes=[];function init(){if(!$window.UI8.loggedIn)return;loggedIn=true;return $http.get("/account/favorites?json=1",{cache:true}).then(function(res){likes=res.data.favorites||[];ogLikes=angular.copy(res.data.favorites)||[];}).catch(function(){likes=[];});}
function getCountModifier(id){id=String(id);var newLike=newLikes.filter(function(el){return id===el;}).length,ogLike=ogLikes.filter(function(el){return id===el;}).length,like=likes.filter(function(el){return id===el;}).length;if(!like&&ogLike){return-1;}else if(newLike&&!ogLike){return 1;}else{return 0;}}
function isLiked(_id){if(!loggedIn){return;}
return likes.filter(function(el){return el===_id;}).length;}
function unLiked(_id){if(!loggedIn){return;}
return unlikes.filter(function(el){if(!likes.length){likes=["null"];return $window.location.reload();}
return el===_id;}).length;}
function likeProduct(_id,isFavoritePage){if(!loggedIn){return;}
if(isLiked(_id)>0){if(isFavoritePage){unlikes.push(_id);}
likes=likes.filter(function(el){return el!==_id;});newLikes=newLikes.filter(function(el){return el!==_id;});$http.delete("/account/favorite/"+_id+"?json=1");return;}
newLikes.push(_id);likes.push(_id);$http.put("/account/favorite/"+_id+"?json=1");}
init();return{isLiked:isLiked,unLiked:unLiked,toggleLike:likeProduct,getCountModifier:getCountModifier,};},]);angular.module("UI8.services").service("PaymentService",["$http",function($http){function submitStripeForm(err,formData,callback){if(err)return callback(err,null);var submission={email:formData.email,name:formData.name,password:formData.password,save_card:formData.saveCard,stripeType:formData.stripeType,stripeSource:formData.stripeSource,stripeToken:formData.stripeToken,rcToken:formData.rcToken,idempotencyKey:formData.idempotencyKey,};return $http.post("/api/checkout/process/stripe",submission).then(function successCallback(res){callback(null,res.data);},function errorCallback(){callback("Unable to process payment",null);});}
this.stripe=function(formData,callback){if(!formData.stripeToken&&!formData.stripeSource){var card={name:formData.name,number:formData.card_number,exp_month:formData.exp_month,exp_year:formData.exp_year,cvc:formData.cvc,};return Stripe.card.createToken(card,function(status,res){if(status!==200||res.error||!res){if(window.bugsnagClient)
window.bugsnagClient.notify(res.error||"Stripe createToken failure");return submitStripeForm("Unable to process Stripe payment",null,callback);}
formData.stripeToken=res.id;return submitStripeForm(null,formData,callback);});}
submitStripeForm(null,formData,callback);};this.paypal=function(formData,callback){var submission={email:formData.email,name:formData.name,password:formData.password,rcToken:formData.rcToken,};return $http.post("/api/checkout/process/paypal",submission).then(function successCallback(res){callback(null,res.data);},function errorCallback(e){console.log(e);callback("Unable to process payment",null);});};this.stripeCardRemove=function(customer,card){return $http.post("/account/payment/remove",{customer,card});};},]);angular.module("UI8.services").service("ProductService",["$http",function($http){this.homeDigest=function(){return $http.get("/api/home").then(function(response){if(response.error){return Promise.resolve({});}
return Promise.resolve(response.data);},function(){return Promise.resolve({});});};this.passPage=function(){return $http.get("/api/pass").then(function(response){if(response.error){return Promise.resolve({});}
return Promise.resolve(response.data);},function(){return Promise.resolve({});});};this.list=function(query){return $http.get("/api/products",{params:query}).then(function(response){if(response.error){return Promise.resolve({});}
return Promise.resolve(response.data);},function(){return Promise.resolve({});});};},]);angular.module("UI8.services").service("PromoService",["$http",function($http){this.applyPromo=function(promoCode){return $http.post("/api/promo",{code:promoCode}).then(function(response){if(response.error){return Promise.resolve();}
return Promise.resolve(response.data);},function(){return Promise.resolve();});};this.disablePromo=function(){return $http.post("/api/promo/disable").then(function(){return Promise.resolve(true);},function(){return Promise.resolve(true);});};},]);angular.module("UI8.services").service("PushService",[function(){function urlBase64ToUint8Array(base64String){var padding="=".repeat((4-(base64String.length%4))%4);var base64=(base64String+padding).replace(/\-/g,"+").replace(/_/g,"/");var rawData=window.atob(base64);var outputArray=new Uint8Array(rawData.length);for(var i=0;i<rawData.length;++i){outputArray[i]=rawData.charCodeAt(i);}
return outputArray;}
function registerServiceWorker(){return navigator.serviceWorker.register("/cached/push-worker.js");}
function askPermission(){return new Promise(function(resolve,reject){var permissionResult=Notification.requestPermission(function(result){resolve(result);});if(permissionResult){permissionResult.then(resolve,reject);}}).then(function(permissionResult){if(permissionResult!=="granted"){throw new Error("We weren't granted permission.");}});}
function getNotificationPermissionState(){if(navigator.permissions){return navigator.permissions.query({name:"notifications"}).then(function(result){return result.state;});}
return new Promise(function(resolve){resolve(Notification.permission);});}
function subscribeUserToPush(){return navigator.serviceWorker.register("/cached/push-worker.js").then(function(reg){var subscribeOptions={userVisibleOnly:true,applicationServerKey:urlBase64ToUint8Array("BAwk96YHLBpOTZ_b4Q3i7h8V5IIepV_9JWVKGx_BRpOkmSbHNdmLhHVESGBBhkgx3xO-7tJzX19_vOnJj4OgjWQ"),};return reg.pushManager.subscribe(subscribeOptions);}).then(function(pushSubscription){return pushSubscription;});}
function sendSubscriptionToBackEnd(subscription,action){action=action?action.toLowerCase():"subscribe";return fetch("/api/push-"+action,{method:"POST",headers:{"Content-Type":"application/json",},credentials:"same-origin",body:JSON.stringify(subscription.toJSON()),});}
this.setUpPush=function(){return Promise.all([registerServiceWorker(),getNotificationPermissionState(),]).then(function(results){var registration=results[0];var currentPermissionState=results[1];if(currentPermissionState==="denied")return;return registration.pushManager.getSubscription().then(function(subscription){return new Promise(function(resolve){resolve(subscription);});});}).catch(function(err){console.error("Unable to register the service worker: "+err);});};this.subscribe=function(){return new Promise(function(res){var promiseChain;var sub;getNotificationPermissionState().then(function(currentPermissionState){if(currentPermissionState!=="granted"){promiseChain=askPermission().then(subscribeUserToPush);}else{promiseChain=subscribeUserToPush();}
return promiseChain.then(function(subscription){sub=subscription;if(subscription){return sendSubscriptionToBackEnd(subscription);}else{return new Promise(function(resolve){resolve(subscription);});}}).then(function(subscription){res(sub||subscription);}).catch(function(err){console.error("Failed to subscribe the user.",err);return res(null);});});});};this.unsubscribe=function(){return new Promise(function(res){var subscription;return navigator.serviceWorker.register("/cached/push-worker.js").then(function(reg){return reg.pushManager.getSubscription();}).then(function(sub){subscription=sub;return sub.unsubscribe();}).then(function(success){if(success){return sendSubscriptionToBackEnd(subscription,"unsubscribe");}else{return new Promise(function(resolve){resolve(subscription);});}}).then(function(){res({success:true});}).catch(function(err){console.error("Failed to unsubscribe the user.",err);getNotificationPermissionState().then(function(permissionState){res(permissionState);});});});};},]);angular.module("UI8.services").service("SessionService",["$http","$rootScope",function($http,$rootScope){function getRandomString(){return Math.random().toString(36).replace(/[^a-z]+/g,"");}
this.user=function(){if(!UI8.loggedIn)return null;return $http.get("/api/me?"+getRandomString()).then(function(response){return response.data.user;},function(){return null;});};this.setCurrentUser=function(){if(!UI8.loggedIn)return null;return $http.get("/api/me?"+getRandomString()).then(function(response){if(!response.data||!response.data.user){$rootScope.user=null;return;}
$rootScope.user=response.data.user;},function(){$rootScope.user=null;});};this.purchases=function(){if(!UI8.loggedIn)return null;return $http.get("/api/purchases").then(function(response){return response.data;},function(){return null;});};},]);angular.module("UI8.services").service("UserService",["$http",function($http){this.show=function(identifier){return $http.get("/api/users/"+identifier+"?json=1").then(function(response){return response.data;},function(){return null;});};this.sendHireMessage=function(identifier,data){return $http.post("/api/users/"+identifier+"/hire",data).then(function(response){return response.data;},function(){return null;});};this.followers=function(identifier,page){var toPage=page||1;return $http.get("/api/users/"+identifier+"/followers?count=40&page="+toPage).then(function(response){return response.data;},function(){return null;});};this.following=function(identifier,page){var toPage=page||1;return $http.get("/api/users/"+identifier+"/following?count=40&page="+toPage).then(function(response){return response.data;},function(){return null;});};this.favorites=function(identifier,page){var toPage=page||1;return $http.get("/api/users/"+identifier+"/favorites/page/"+toPage).then(function(response){return response.data.products;},function(){return null;});};this.userExists=function(email,callback){if(!email)return callback(null,false);$http.get(`/api/users/${email}/exists`).then(function successCallback(res){if(!callback)return!!res.data.userExists;return callback(null,!!res.data.userExists);},function errorCallback(){if(!callback)return false;return callback(null,false);});};},]);angular.module("UI8.services").service("WhoLikesService",["$timeout",function($timeout){var open,users,change;return{open:function(){return open;},users:function(){return users;},change:function(){return change;},toggle:function(o){open=o||!open;change=+new Date();$timeout(function(){},2);},setUsers:function(u){users=u;change=+new Date();$timeout(function(){},2);},};},]);angular.module("UI8.directives").directive("ui8Avatar",[function(){function link(scope,elem,attrs){scope.user=scope.user||{};const S3_IMAGE_SERVER="https://images.ui8.net";function cacheValue(name,fn){if(window[name]!=null){return window[name];}
window[name]=fn();return window[name];}
const isHighDensity=cacheValue("isHighDensity",()=>{if(window.matchMedia){if(window.matchMedia("only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)").matches){return true;}
if(window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)").matches){return true;}}
return window.devicePixelRatio&&window.devicePixelRatio>1.3;});const isRetina=cacheValue("isRetina",()=>{if(window.matchMedia){if(window.matchMedia("only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)").matches){return true;}
if(window.matchMedia("only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)").matches){return true;}}
if(window.devicePixelRatio&&window.devicePixelRatio>=2){return true;}
return /(iPad|iPhone|iPod)/g.test(navigator.userAgent);});const isWebpSupported=cacheValue("isWebpSupported",()=>{const elem=document.createElement("canvas");if(elem.getContext&&elem.getContext("2d")){return elem.toDataURL("image/webp").indexOf("data:image/webp")==0;}
return false;});if(scope.user.avatar_url){let avatarUrl=scope.user.avatar_url;let avatarUrlVersion=scope.user.avatar_url_version;const resizeTo=attrs.resizeTo||"width=96,height=96";if(!scope.user.has_resized_avatar){const match=avatarUrl.match(/(http(?:s?):\/\/images\.ui8\.net)(.*)/);if(match){avatarUrl=match[1]+"/cdn-cgi/image/"+resizeTo+match[2];}}else{const dim=resizeTo.match(/width=(\d+),height=(\d+)/);let resolution={width:96,height:96};if(dim){resolution.width=parseInt(dim[1]);resolution.height=parseInt(dim[2]);}
if(isHighDensity||isRetina){resolution.width=resolution.width*2;resolution.height=resolution.height*2;}
const postfix=avatarUrlVersion?`_${avatarUrlVersion}`:"";const extension=isWebpSupported?"webp":"png";avatarUrl=`${S3_IMAGE_SERVER}/avatar/${scope.user._id}/${resolution.width}_${resolution.height}${postfix}.${extension}`;}
return elem.addClass("ui8-avatar").css("background","url("+avatarUrl+") center center/contain");}}
return{link:link,restrict:"A",scope:{user:"=ui8Avatar",},};},]);angular.module("UI8.directives").directive("ui8Compare",[function(){function link(scope,elem,attrs,ngModel){ngModel.$validators.ui8Compare=function(modelValue){return modelValue===scope.ui8Compare;};scope.$watch("ui8Compare",function(){ngModel.$validate();});}
return{link:link,restrict:"A",require:"ngModel",scope:{ui8Compare:"=ui8Compare",},};},]);angular.module("UI8.directives").directive("ui8Discussion",["$document",function($document){function getFullName(user,respectCase){var name=user.display_name||(user.first_name||"")+" "+user.last_name;return respectCase?name:name.toLowerCase();}
function link(scope,elem){function keydownHandler(e){if(e.keyCode===13&&(e.metaKey||e.ctrlKey)){$(this).closest("form").find("[type=submit]").click();}}
$document.on("keydown","textarea",keydownHandler);scope.$on("$destroy",function(){$document.off("keydown",keydownHandler);});var textarea=elem.find("textarea"),autocomplete;autocomplete=$(textarea).autocomplete({data:[],minLength:3,appendTo:scope.appendListTo||"#post-comment .comment-wrapper",_lastMention:function(t){var e=t.prop("selectionEnd"),i=t.val().substring(0,e),s=i.lastIndexOf("@");return-1==s?null:(i=i.substring(s+1));},create:function(){},source:function(req,res){var result=[],mention=(this.options._lastMention($(this.element[0]))||"").toLowerCase();if(!mention){return res(result);}
for(var i=0;i<this.options.data.length;i++){var user=this.options.data[i],name=getFullName(user);if(name.indexOf(mention)===0){result.push(user);}}
return res(result);},select:function(event,user){var l=0,i=$(this).prop("selectionEnd"),n=$(this).val(),o=n.slice(0,i),a=o.lastIndexOf("@"),r=n.slice(i);event.preventDefault();o=o.slice(0,a+1);l=l===r.length?" ":"";$(this).val(o+getFullName(user.item,true)+l+r).prop("selectionEnd",(o+getFullName(user.item,true)+l).length+1);},focus:function(e){return e.preventDefault();},}).autocomplete("instance");autocomplete._renderItem=function(ul,item){return $('<li class="ui8-autocomplete-result">').append($('<div class="figure">').append(item.avatar_url?$('<img src="'+item.avatar_url+'"/>'):$())).append($('<div class="contnet">').text("@"+getFullName(item,true))).appendTo(ul);};scope.$watch("ui8Discussion",function(n){if(n){$(textarea).autocomplete("option",{data:n});}});if(scope.submitCallback){angular.element("form",elem).on("submit",function(e){e.preventDefault();scope.submitCallback.call(this,elem.find("textarea").val(),$(this));});}else if(scope.submitHandler){var click=$(".discussion-edit-submit",elem.parent());if(!click.data("bound")){click.data("bound",1).on("click touchstart",function(e){e.stopPropagation();e.preventDefault();scope.submitHandler.call(this,angular.element(".discussion-edit-textarea").val(),$(this));});}}
elem.on("click","[data-user]",function(e){var textarea=elem.find("textarea");e.preventDefault();angular.element("body").animate({scrollTop:textarea.offset().top-180,},500,"linear");var username=$(this).data("user");textarea.val(function(index,value){if(!value.endsWith(" ")){return value+" @"+username+" ";}
return value+"@"+username+" ";}).focus().trigger("input");});}
return{link:link,restrict:"A",scope:{ui8Discussion:"=",submitCallback:"=",submitHandler:"=",appendListTo:"=",},};},]);angular.module("UI8.directives").directive("ui8DownloadButton",["$window","$document","PushService",function(PushService){function link(scope,elem,attrs){var num=0,modal=angular.element("<div class='modal modal--download'></div>"),container=angular.element("<div class='modal__container'></div>"),download=angular.element("<div class='download'></div>"),downloadList=angular.element("<ul class='download__buttons'></ul>"),product=scope.ui8DownloadButton,user;scope.$on("$destroy",function(){elem.off();modal.remove();});function initPushNotificationHandler(){if(!("serviceWorker"in navigator)){return;}
if(!("PushManager"in window)){return;}
PushService.setUpPush().then(function(subscription){if(!subscription){return PushService.subscribe();}}).then(function(){}).catch(function(){});}
function open(){window.scrollLock.disablePageScroll();modal.addClass("open");}
function close(e){if(e){e.preventDefault();}
window.scrollLock.enablePageScroll();modal.removeClass("open");initPushNotificationHandler();}
elem.on("click",function(e){e.preventDefault();return open();});product.files=scope.free?product.free_files:product.files;if(!product||!product.files){return elem.addClass("ng-hide");}
container.append(download);download.append(`<div class="download__preview">
            <img src="${product.card_image}" alt="Preview" />
          </div>`);download.append(downloadList);product.files.forEach(function(i){var link="";if(!i.name||!i._id)return;user=scope.user?"?t="+scope.user:"";if(!user){user=attrs.theUser?"?t="+attrs.theUser:"";}
num=num+1;var queryString=user?user+"&redirect=1":"?redirect=1";link="/account/download/"+product._id+"/"+i._id+queryString;downloadList.append(angular.element("<li></li>").append(angular.element(`<a
                class="btn btn--submit"
                target="_blank"
                filename="${i.name}"
                href="${link}"
                ui8-track-event="Product,Direct Download"
                onClick="if(typeof ga !== 'undefined'){ga('send', 'pageview', '/virtual/download/${product.slug}')}">
                  ${i.name}
                  <svg><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 6a1 1 0 0 1 1 1v5.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 13.586V8a1 1 0 0 1 1-1z"></path></svg>
              </a>`)));});if(!num){return elem.addClass("ng-hide");}
return modal.append(container,angular.element('<button class="modal__close"></button>').on("click touchstart",close),angular.element('<div class="modal__backdrop"></div>').on("click",close)).appendTo(document.body);}
return{link:link,restrict:"A",scope:{user:"=",free:"=",bundle:"=",ui8DownloadButton:"=",},};},]);angular.module("UI8.directives").directive("ui8FloatingFilter",[function(){return{restrict:"A",scope:true,link:function(scope,elem){var $window=$(window);var $menu=elem.find("#menu");var $menuWrap=elem.find(".menu__wrap");var $previews=elem.find(".section_previews");var $images;var menuTop,containerBottom,lastImageTop;var MutationObserver=window.MutationObserver||window.WebkitMutationObserver;var scroll=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||window.oRequestAnimationFrame||function(callback){setTimeout(callback,1000/60);};var scrolling;var recalcMenuBounds=_.debounce(function(){menuTop=$menu.offset().top+40;containerBottom=$previews.offset().top+$previews.height();toggleFixedMenu();},50);var onScroll=function(){if(!scrolling)scroll(toggleFixedMenu);scrolling=true;};var toggleFixedMenu=function(){$images=elem.find(".previews__col");var $lastImage=$images.last();if($lastImage.offset()){lastImageTop=$lastImage.offset().top+
$lastImage.height()-
$window.scrollTop()-
100;}
if($window.scrollTop()>=menuTop&&$window.scrollTop()<=containerBottom){$menu.addClass("fixed");if(lastImageTop&&lastImageTop<0&&lastImageTop>-1000){$menuWrap.css({top:lastImageTop});}else{$menuWrap.removeAttr("style");}}else{$menu.removeClass("fixed");}
scroll(toggleFixedMenu);};var elemObserver=new MutationObserver(recalcMenuBounds);elemObserver.observe(elem[0],{childList:false,attributes:true,characterData:false,});$window.ready(recalcMenuBounds);$window.on("scroll",onScroll);$window.on("resize",recalcMenuBounds);scope.$on("$destroy",function(){$window.off("scroll",onScroll);$window.off("resize",recalcMenuBounds);});},};},]);angular.module("UI8.directives").directive("ui8FollowButton",["$http",function($http){function link(scope,elem,attrs){var user=attrs.ui8FollowButton,defaultClass=attrs.ui8DefaultClass||"btn",positiveClass=attrs.ui8PositiveClass||"btn--stroke",isFavorited,requesting,initialState=0;scope.$on("$destroy",function(){elem.off();});var positiveIcon='<svg><path d="M17.113 15.21l.094.083L19 17.085l1.793-1.792a1 1 0 0 1 1.497 1.32l-.083.094-1.792 1.793 1.792 1.793a1 1 0 0 1-1.32 1.497l-.094-.083L19 19.915l-1.793 1.792a1 1 0 0 1-1.497-1.32l.083-.094 1.792-1.793-1.792-1.793a1 1 0 0 1 1.32-1.497zM12 14.5a1 1 0 0 1 .117 1.993L12 16.5l-5.174.002-.557.007-.414.014-.213.015-.175.019-.147.024-.129.03-.061.018a3 3 0 0 0-2 2l-.034.124-.027.137-.012.076-.019.175-.02.338-.012.458-.005.613L3 21a1 1 0 0 1-1.993.117L1 21l.004-.971.012-.575.014-.309.02-.264.013-.118.032-.217.041-.201.024-.098.056-.198a5 5 0 0 1 3.333-3.333l.1-.029.196-.05.201-.041.217-.032.245-.024.285-.017.336-.011.626-.009L12 14.5zM10 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 1 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z"/></svg>';var negativeIcon='<svg><path d="M12 14.5a1 1 0 0 1 .117 1.993L12 16.5l-5.174.002-.557.007-.414.014-.213.015-.175.019-.147.024-.129.03-.061.018a3 3 0 0 0-2 2l-.034.124-.027.137-.012.076-.019.175-.02.338-.012.458-.005.613L3 21a1 1 0 0 1-1.993.117L1 21l.004-.971.012-.575.014-.309.02-.264.013-.118.032-.217.041-.201.024-.098.056-.198a5 5 0 0 1 3.333-3.333l.1-.029.196-.05.201-.041.217-.032.245-.024.285-.017.336-.011.626-.009L12 14.5zm7-.5a1 1 0 0 1 .993.883L20 15v2h2a1 1 0 0 1 .117 1.993L22 19h-2v2a1 1 0 0 1-1.993.117L18 21v-2h-2a1 1 0 0 1-.117-1.993L16 17h2v-2a1 1 0 0 1 1-1zM10 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 1 0 0-11zm0 2a3.5 3.5 0 1 1 0 7 3.5 3.5 0 1 1 0-7z"/></svg>';function getButtonText(isFavorited,positive){if(!positive){return attrs.negativeText||"Unfollow"+positiveIcon;}
return((isFavorited?attrs.positiveText||"Following":attrs.defaultText||"Follow")+
(isFavorited?attrs.positiveText||positiveIcon:attrs.defaultText||negativeIcon));}
function updateButton(isFavorited){isFavorited?elem.addClass(positiveClass):defaultClass!==positiveClass&&elem.removeClass(positiveClass);return elem.html(getButtonText(isFavorited,true));}
$http.get("/account/favorite/"+user,{params:{json:"true",type:"user",},cache:true,}).then(function(res){initialState=!!res.data.favorited;isFavorited=!!res.data.favorited;return updateButton(isFavorited,true);});elem.addClass("btn--follow").on("click",function(e){if(requesting||isFavorited===undefined)return;e.preventDefault();requesting=true;$http[isFavorited?"delete":"put"]("/account/favorite/"+user+"?json=1&type=user").then(function(){requesting=false;isFavorited=!isFavorited;scope.offset=initialState>0?(isFavorited?0:-1):isFavorited?1:0;return updateButton(isFavorited);}).catch(function(){requesting=false;});}).on("mouseover",function(){if(!isFavorited||elem.hovered)return;elem.hovered=true;return elem.html(getButtonText(isFavorited,false));}).on("mouseout",function(){elem.hovered=false;return updateButton(isFavorited);});}
return{link:link,restrict:"A",};},]);angular.module("UI8.directives").directive("ui8FormControl",["$timeout",function($timeout){return{restrict:"A",link:function(scope,elem,attrs){var form=scope[attrs.name];var fields=elem.find("input, textarea");$timeout(function(){$.each(fields,function(index,el){var $this=$(el);if($this.val()){$this.parent().addClass("focused");if($this.attr("name")==="email"){$("input[name=password]").parent().addClass("focused");}}});fields.parent().addClass("loaded");$timeout(function(){fields.parent().addClass("animate");},100);},100);elem.find("input, textarea").bind("focus change",function changeAction(){var $this=$(this);setTimeout(function(){$this.parent().addClass("focused");},100);}).blur(function(){var $this=$(this);var remove=true;var siblings=$this.siblings("input");if(siblings.length){$.each(siblings,function(index,el){if($(el).val())remove=false;});}
if(remove&&!$this.val()){$(this).parent().removeClass("focused");}});if(!attrs.noAction){elem.find('[type="submit"]').bind("click",function(e){if(!form)return elem[0].submit();e.preventDefault();form.$submitted=true;scope.$apply();if(form.$valid){if(attrs.ui8FormControl){scope[attrs.ui8FormControl](e,form);}else{elem[0].submit();}}});}else{elem.find('[type="submit"]').bind("click",function(e){e.preventDefault();});}},};},]);angular.module("UI8.directives").directive("ui8GoTab",[function(){return{restrict:"A",scope:true,link:function(scope,elem,attrs){elem.focus(function(){$(attrs.ui8GoTab).focus();});scope.$on("$destroy",function(){elem.off("focus");});},};},]);angular.module("UI8.directives").directive("ui8HeaderDropdown",["$injector",function(){return{restrict:"A",scope:true,link:function(scope,elem){const isTouchDevice=()=>"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;scope.$on("$destroy",function(){elem.find("a").off();elem.off();});var $body=$("body"),$head=elem.find(".header__head"),$dropdown=elem.find(".header__dropdown"),$close=elem.find(".header__logo, .header__close");$head.on("click",function(e){e.stopPropagation();if($body.hasClass("cart")){$body.removeClass("cart");window.scrollLock.enablePageScroll();$body.find(".header__cell--cart.active").removeClass("active");}
if(elem.hasClass("active-touch")){elem.removeClass("active-touch");isTouchDevice()&&window.scrollLock.enablePageScroll();}else{$body.find(".header__cell.active-touch").removeClass("active-touch");elem.toggleClass("active-touch");isTouchDevice()&&window.scrollLock.disablePageScroll();}});$(document).on("click",function(){elem.removeClass("active-touch");isTouchDevice()&&window.scrollLock.enablePageScroll();});$dropdown.on("click",function(e){e.stopPropagation();});$dropdown.on("scroll",function(){if($dropdown.scrollTop()>0){$dropdown.addClass("active");}else{$dropdown.removeClass("active");}});$close.on("click",function(){elem.removeClass("active-touch");isTouchDevice()&&window.scrollLock.enablePageScroll();});elem.on("mouseleave",function(){elem.removeClass("active");});elem.on("mouseenter",function(){if(!$body.hasClass("cart")){$body.find(".header__cell.active").removeClass("active");elem.addClass("active");}});},};},]);angular.module("UI8.directives").directive("ui8Image",["$timeout","$window",function($timeout,$window){return{restrict:"A",link:function(_,elem,attrs){attrs.$observe("ui8Image",function(value){buildImage(value);});$timeout(function(){buildImage();},0);function buildImage(img){var image=img||attrs.ui8Image;var isCSS=attrs.ui8ImageSrc?false:true;var hasScaled=attrs.ui8ImageScaled==="true";var srcSet=false;if(attrs.ui8ResizeTo){const match=image.match(/(http(?:s?):\/\/images\.ui8\.net)(.*)/)
if(match){const resizeTo=attrs.ui8ResizeTo.split(';')
srcSet=resizeTo.length>1
image=resizeTo.map((resizeTo,idx)=>{return match[1]+'/cdn-cgi/image/'+resizeTo+match[2]})}}else{image=[image]}
if(srcSet){console.log('>>>>> srcset')
console.log(image)
if(isCSS){console.log('>>>> css')
const imageSet=image.map((url,idx)=>{return "url("+url+") "+(idx+1)+"x"}).join(', ')
console.log(imageSet)
elem.css({"background-image":"image-set("+imageSet+")"});}else{elem.attr("srcset",image.map((url,idx)=>{return url+(idx+1)+'x'}).join(', '));}}else{image=image[0]
if(isCSS){elem.css({"background-image":"url('"+image+"')"});}else{elem.attr("src",image);}}}},};},]);angular.module("UI8.directives").directive("ui8InjectCsrf",[function(){function link(scope,elem){var token=elem.attr("value"),input=angular.element('<input type="hidden" name="_csrf" value="'+token+'">');angular.element("form").append(input);}
return{link:link,restrict:"A",};},]);angular.module("UI8.directives").directive("ui8LazyLoad",[function(){var $win=$(window);function linker(scope,element){var el=scope.container?scope.container:$win;function scrollHandler(){if(scope.disable)return;if(elementIsVisible())return scope.whenVisible();}
scope.$on("$destroy",function(){el.off("scroll.cdlazyload");});el.on("scroll.cdlazyload",scrollHandler);function elementIsVisible(){var containerTop,containerBottom,elemTop,elemBottom;if(scope.container){containerTop=scope.container.offset().top;containerBottom=containerTop+scope.container.height();elemTop=element.offset().top-50;elemBottom=elemTop+element.height();}else{containerTop=$win.scrollTop();containerBottom=containerTop+$win.height();elemTop=element.offset().top;elemBottom=elemTop+element.height();}
return elemBottom<=containerBottom&&elemTop>=containerTop;}}
return{link:linker,scope:{disable:"=",container:"=",whenVisible:"&",},restrict:"A",};},]);angular.module("UI8.directives").directive("ui8MobileNav",["$window",function($window){return{restrict:"A",link:function link(scope,elem){scope.$on("$destroy",function(){elem.off("change");});elem.on("change",function(){$window.location=elem.val();});},};},]);angular.module("UI8.directives").directive("ui8NumbersOnly",[function(){return{restrict:"A",link:function(scope,element){element.bind("input",function(){var position=this.selectionStart-1;var fixed=this.value.replace(/[^0-9]/g,"");if(this.value!==fixed){this.value=fixed;this.selectionStart=position;this.selectionEnd=position;}});},};},]);angular.module("UI8.directives").directive("ui8Odometer",[function(){return{restrict:"A",link:function(scope,elem,attrs){var start=parseInt(elem.text(),10)||0;var end=parseInt(attrs.ui8Odometer,10);var elem_top=elem.offset().top;var $window=$(window);var trigger=$window.height()-150;var completed=false;var FRAMERATE=30;var DURATION=750;var MS_PER_FRAME=1000/FRAMERATE;var triggerAnimation=_.debounce(function(){if(completed){return;}
trigger=$window.height();elem_top=elem.offset().top-$window.scrollTop();if(elem_top<trigger){if(!completed){completed=true;changeNumber(elem,start,end);}}},1000/60);function changeNumber(elem,start,end){var skip=1;var interval=Math.floor(DURATION/(end-start));if(interval<MS_PER_FRAME){skip=Math.floor((end-start)/(DURATION/FRAMERATE));interval=FRAMERATE;}
setInterval(function(){if(start<end){start+=skip;if(start>end){start=end;}
elem.html(start);}else{clearTimeout();}},interval);}
$window.ready(triggerAnimation);$window.on("scroll resize",triggerAnimation);scope.$on("$destroy",function(){$window.off("scroll resize",triggerAnimation);});},};},]);angular.module("UI8.directives").directive("onLoad",[function(){return{restrict:"A",link:function(scope,elem,attrs){elem.ready(function(){scope.$eval(attrs.onLoad);});},};},]);(function(){function clamp(input,min,max){return Math.min(Math.max(input,min),max);}
function ui8Animation(element,name){var face,container,scene,camera,renderer,mouseX,mouseY,theTween;var $win=$(window);var $el=$(element);var width=$el.outerWidth(true);var height=$el.outerHeight(true);var halfWidth=width/2;var halfHeight=width/2;var top=$el.offset().top;var left=$el.offset().left;var easeOut=TWEEN.Easing.Sinusoidal.Out;function onProgress(){}
function onError(){}
function init(){var manager,texture;var parent=element;var $parent=$(parent);container=document.createElement("div");parent.appendChild(container);scene=new THREE.Scene();texture=new THREE.Texture();texture.minFilter=THREE.LinearFilter;scene.add(new THREE.AmbientLight(0xffffff));camera=new THREE.PerspectiveCamera(45,$parent.outerWidth(true)/$parent.outerHeight(true),1,10000);camera.position.y=-10;camera.position.z=185;manager=new THREE.LoadingManager();manager.onProgress=function(){};new THREE.ImageLoader(manager).load("/json/models/"+name+".jpg",function(image){texture.image=image;texture.needsUpdate=true;});if(["bill","anton","denis"].indexOf(name)>-1){new THREE.FBXLoader(manager).load("/json/models/"+name+".fbx",function(object){object.traverse(function(child){if(child instanceof THREE.Mesh){child.material.map=texture;}});object.scale.x=object.scale.y=object.scale.z=0.5;face=scene.add(object);face.rotation.x=0.25;},onProgress,onError);}else{new THREE.OBJLoader(manager).load("/json/models/"+name+".obj",function(object){object.traverse(function(child){if(child instanceof THREE.Mesh){child.material.map=texture;}});object.scale.x=object.scale.y=object.scale.z=0.5;face=scene.add(object);face.rotation.x=0.25;},onProgress,onError);}
renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});renderer.setPixelRatio(window.devicePixelRatio);renderer.setSize($parent.outerWidth(true),$parent.outerHeight(true));renderer.setClearColor(0xffffff,0);if(["bill","anton","denis"].indexOf(name)>-1){renderer.toneMappingExposure=1.35;}
container.appendChild(renderer.domElement);var elem=$(parent.parentElement),details=elem.find(".details");elem.on("mousemove",mouseHandler);details.on("mousemove",mouseHandler);elem.on("mouseout",mouseReset);details.on("mouseout",mouseReset);window.addEventListener("scroll",resizeHandler,false);window.addEventListener("resize",resizeHandler,false);}
function resizeHandler(){width=$el.outerWidth(true);height=$el.outerHeight(true);halfWidth=width/2;halfHeight=width/2;top=$el.offset().top;left=$el.offset().left;camera.aspect=width/height;camera.updateProjectionMatrix();renderer.setSize(width,height);}
function mouseHandler(e){mouseX=(e.clientX-left-halfWidth)/halfWidth;mouseY=(e.clientY+$win.scrollTop()-top-halfHeight)/halfHeight;mouseX=clamp(mouseX,-0.25,0.45);mouseY=clamp(mouseY,-0.25,0.65);camera.position.z=165;if(!face||!face.rotation)return;theTween=new TWEEN.Tween({x:face.rotation.x,y:face.rotation.y}).to({x:mouseY,y:mouseX},150).easing(easeOut).onUpdate(function(){face.rotation.x=this.x;face.rotation.y=this.y;}).start();}
function mouseReset(){mouseX=0;mouseY=0;camera.position.z=185;if(!face||!face.rotation)return;theTween=new TWEEN.Tween({x:face.rotation.x,y:face.rotation.y}).to({x:0.25,y:0},150).easing(easeOut).onUpdate(function(){face.rotation.x=this.x;face.rotation.y=this.y;}).start();}
function animate(frame){requestAnimationFrame(animate);if(frame==="init"){renderer.render(scene,camera);return;}
if(!face)return;TWEEN.update(frame);renderer.render(scene,camera);}
init();animate("init");}
angular.module("UI8.directives").directive("ui8Personnel",[function(){function link(scope,elem,attrs){return new ui8Animation(elem[0],attrs.ui8Personnel);}
return{link:link,restrict:"A",};},]);})();angular.module("UI8.directives").directive("ui8ProductSubnav",["$window",function($window){return{restrict:"A",link:function(scope,elem){var $win=angular.element($window);function scrollHandler(){var mobile=parseInt($win.width(),10)<768;if(mobile)return;var scrolltop=$win.scrollTop();if(scrolltop>=550){elem.addClass("show");}else{elem.removeClass("show");}}
$win.on("scroll resize",scrollHandler);scope.$on("$destroy",function(){$win.off("scroll resize",scrollHandler);});},};},]);angular.module("UI8.directives").directive("ui8ProductVideo",["$timeout",function($timeout){return{restrict:"A",link:function(scope,elem,attrs){$timeout(function(){var video=attrs.ui8ProductVideo;var poster=attrs.ui8VideoPoster;function cacheValue(name,fn){if(window[name]!=null){return window[name];}
window[name]=fn();return window[name];}
const isWebpSupported=cacheValue("isWebpSupported",()=>{const elem=document.createElement("canvas");if(!!(elem.getContext&&elem.getContext("2d"))){return elem.toDataURL("image/webp").indexOf("data:image/webp")==0;}
return false;});const S3_IMAGE_SERVER="https://images.ui8.net";const posterDetails=JSON.parse(attrs.ui8PosterDetails||"{}");const productId=attrs.ui8ProductId;const extension=isWebpSupported?"webp":"png";if(poster){elem.attr("poster",poster);}else if(posterDetails.has_video_poster){elem.attr("poster",`${S3_IMAGE_SERVER}/product/${productId}/poster-${posterDetails._id}_${posterDetails.video_poster_version}.${extension}`);}else{elem.attr("poster",video.replace(/\.mp4$/,".jpg"));}
elem.append('<source src="'+video+'" type="video/mp4">');elem.attr("loop","");},0);},};},]);angular.module("UI8.directives").directive("ui8Select",[function(){return{require:"ngModel",restrict:"A",link:function(scope,elem,attrs,ngModel){var label=elem.find(".active-option");var option=elem.find(".option");var selected=elem.find(".selected");scope.$on("$destroy",function(){option.off("click");});option.on("click",function(e){setActive($(e.currentTarget));});if(selected)setActive(selected);function setActive($this){var value=$this.attr("value")||$this.text();$this.addClass("selected");$this.siblings().removeClass("selected");ngModel.$setViewValue(value);label.text($this.text());}},};},]);angular.module("UI8.directives").directive("ui8SmartHeader",["$window",function($window){return{restrict:"A",link:function(scope){var $win=angular.element($window),$header=$(".header");function scrollHandler(){var winTop=$win.scrollTop();if(winTop>=24){$header.addClass("scrolled");}else{$header.removeClass("scrolled");}}
$win.on("scroll resize",scrollHandler);scope.$on("$destroy",function(){$win.off("scroll resize",scrollHandler);});},};},]);angular.module("UI8.directives").directive("ui8TallHeader",[function(){return{restrict:"A",scope:true,link:function(scope,elem){var $window=$(window);var resizeHero=_.debounce(function(){elem.removeAttr("style");var marginTop=parseInt(elem.css("margin-top"),10);var winHeight=$window.height();if(marginTop>winHeight){elem.css({"margin-top":winHeight-80});}},50);$window.ready(resizeHero);$window.on("resize",resizeHero);scope.$on("$destroy",function(){$window.off("resize",resizeHero);});},};},]);angular.module("UI8.directives").directive("ui8ToggleClass",[function(){var $doc=$(document),elements={};function link(scope,elem,attrs){scope.$on("$destroy",function(){elem.off("click");});elem.on("click",function(e){if(!attrs.allowDefault)e.preventDefault();if(!attrs.element)attrs.element="body";if(/modal/.test(attrs.ui8ToggleClass)){$doc.find("body").trigger("open-modal",[attrs.ui8ToggleClass]);}
if($(this).data("action")&&window.ga){window.ga("send","event",$(this).data("category")||undefined,$(this).data("action")||undefined,$(this).data("label")||undefined);}
if(elements[attrs.element]){elements[attrs.element].toggleClass(attrs.ui8ToggleClass);}else{elements[attrs.element]=angular.element(attrs.element).toggleClass(attrs.ui8ToggleClass);}
$doc.trigger(attrs.ui8ToggleClass,elements[attrs.element].hasClass(attrs.ui8ToggleClass));});}
return{link:link,restrict:"A",};},]);angular.module("UI8.directives").directive("ui8TrackEvent",["$window",function($window){return{restrict:"A",link:function(scope,elem){scope.$on("$destroy",function(){elem.off("click touchstart");});elem.on("click touchstart",function(){if(!$window.ga)return;return ga.apply($window,["send","event"].concat($(this).attr("ui8-track-event").split(",").map(function(el){return el||undefined;})));});},};},]);angular.module("UI8.directives").directive("ui8Upload",["Upload","$http","$compile",function(Upload,$http,$compile){return{restrict:"A",link:function(scope,elem,attrs){var videoPattern=/\.mp4$/i;var maxSize=attrs.ui8UploadMaxSize||10000;elem.attr("ngf-select","");elem.attr("ngf-change","uploadSelected($files, $event)");elem.attr("nfg-max-size",maxSize);elem.removeAttr("ui8-upload");elem.removeAttr("data-ui8-upload");$compile(elem)(scope);scope.uploadSelected=function($files){uploadImages($files);};function s3Policy(options,callback){options._csrf=$('input[name="_csrf"]').val();$http.post("/api/policy/s3",options).then(function(res){callback(res.data);}).catch(function(err){callback(err);});}
function uploadImages(files){if(!files.length)return;files.forEach(function(file,index){files[index].processing=true;files[index].progress=1;files[index].error=false;var opts={file:files[index].name};opts.image=!videoPattern.test(files[index].name);opts.video=videoPattern.test(files[index].name);s3Policy(opts,function(policy){if(!policy||policy==={}){console.log("Policy error");files[index].error=true;return;}
var headers={"Content-Type":"multipart/form-data",Authorization:"",};if(opts.csrf)headers["X-CSRF-Token"]=opts.csrf;var upload=Upload.upload({url:policy.bucket_url,method:"POST",headers:headers,fields:{key:policy.folder+policy.filename,AWSAccessKeyId:policy.s3key,acl:policy.acl,policy:policy.policy,signature:policy.signature,"Content-Type":policy.mimetype,},file:files[index],});upload.then(function(){files[index].processing=false;files[index].url="https://images.ui8.net/"+policy.folder+policy.filename;files[index].completed=true;if(attrs.ui8UploadComplete){var executable=scope;attrs.ui8UploadComplete.split(".").forEach(function(a){executable=executable[a];});executable();}},function(){files[index].processing=false;files[index].error=true;},function(e){var percent=parseInt((100.0*e.loaded)/e.total);if(percent<100){files[index].progress=percent;}else{files[index].progress=100;}});});});}},};},]);angular.module("UI8.directives").directive("ui8Modal",["$rootScope",function($rootScope){return{restrict:"A",scope:true,link:function(scope,elem,attrs){var bodyClass=attrs.modalBodyClass;var $window=$(window);var $body=$(document).find("body");var $modal=elem;var $close;var $focusedOnOpen;var $focusable;var lastFocusableIndex;var focusedIndex;function openHandler(event,addClass){if(addClass===bodyClass){setTimeout(function(){unbindListeners();return onOpen();},100);}}
$body.on("open-modal",openHandler);scope.$on("$destroy",function(){$body.off("open-modal",openHandler);});$rootScope.$watch("modalState",function(){setTimeout(function(){unbindListeners();return onOpen();},100);});function onOpen(){$focusedOnOpen=$window.find(":focus");$close=$modal.find(".modal__close, .modal__backdrop");$modal.keydown(function(e){if(e.which===9||e.which===13||e.which===27){e.preventDefault();}else{e.stopPropagation();}
if(e.shiftKey&&e.which===9){focusedIndex=focusedIndex!==0?focusedIndex-1:lastFocusableIndex;$($focusable[focusedIndex]).focus();}else if(e.which===9){focusedIndex=focusedIndex!==lastFocusableIndex?focusedIndex+1:0;$($focusable[focusedIndex]).focus();}else if(e.which===13){$body.trigger("keydown-enter");}else if(e.which===27){return onClose();}});$close.on("click",onClose);$focusable=$modal.find('input[type!="hidden"]:not(".ng-hide"), textarea');lastFocusableIndex=$focusable.length-1;focusedIndex=0;$($focusable[focusedIndex]).focus();}
function onClose(){unbindListeners();$focusedOnOpen.blur();$body.removeClass(bodyClass);}
function unbindListeners(){if($modal)$modal.unbind("keydown");if($close)$close.unbind("click");}},};},]);angular.module("UI8.directives").directive("ui8VideoOverlay",["$document",function($document){function link(scope,elem){var source=elem.find("pre").text();function showVideoHandler(e,enabled){if(!enabled){return elem.removeClass("active").find(".video-wrapper").html("");}
source=elem.find("pre").text()||elem.find("pre").html()||source;return elem.addClass("active").find(".video-wrapper").html(source);}
$document.on("show-video",showVideoHandler);scope.$on("$destroy",function(){$document.off("show-video",showVideoHandler);});}
return{link:link,restrict:"A",scope:{ui8VideoOverlay:"="},};},]);angular.module("UI8.directives").directive("ui8WhoLikesThis",["$http","WhoLikesService",function($http,WLT){function link(scope,elem){var config=scope.ui8WhoLikesThis;scope.$on("$destroy",function(){elem.off("click touchstart");});function handleClick(){if(config.type!=="comment")return;$http.get("/discussion/"+config.parent+"/"+config.object+"/?json=1").then(function(res){WLT.toggle(true);WLT.setUsers(res.data.likes);});}
elem.on("click touchstart",handleClick);}
return{link:link,restrict:"A",scope:{ui8WhoLikesThis:"=",},};},]);angular.module("UI8.controllers").controller("SellerSignupController",["$http","$scope","$timeout",function($http,$scope){$scope.init=initialize;$scope.submit=submit;$scope.seller={};function initialize(user){if(!user)return;$scope.seller=user;}
function submit(e,form){if(form.$invalid)return e.preventDefault();}},]);angular.module("UI8.controllers").controller("NotificationsListController",["$http","$scope",function($http,$scope){var noResults;$scope.page=1;$scope.done=done;$scope.next=next;$scope.canNext=canNext;function init(){if($scope.loading)return;$scope.loading=true;$http.get("/account/notifications?json=1&limit=10&page="+$scope.page).then(function(res){res=res.data;if(!res||!res.length)noResults=true;$scope.loading=false;$scope.notifications=($scope.notifications||[]).concat(res);}).catch(function(){$scope.loading=false;$scope.notifications=[];});}
function done(){return typeof $scope.notifications!=="undefined";}
function next(){if(!canNext())return;$scope.page=$scope.page+1;return init();}
function canNext(){return(!noResults&&!$scope.loading&&($scope.notifications||[]).length%10===0);}
return init();},]);angular.module("UI8.controllers").controller("CalloutDropdownController",["$scope",function($scope){$scope.init=function(products,user){products=JSON.parse(products);user=JSON.parse(user);$scope.products=products;$scope.user=user;};},]);angular.module("UI8.controllers").controller("CartController",["$scope","$rootScope","AccountService","CartService","FlashService","PaymentService","UserService","PromoService",function($scope,$rootScope,AccountService,CartService,FlashService,PaymentService,UserService,PromoService){var $body;var $groupCart;var $groupDropdown;var $groupClose;var $groupNext;var $groupLayout;var $groupBack;$scope.passInCart=false;function updateScope(cart){if(cart&&cart.items)cart.items.reverse();$scope.cart=cart?cart:{items:[]};$scope.itemCount=cart&&cart.items_sum?cart.items_sum:0;$scope.totalCart=cart&&(cart.discounted||cart.total)?cart.discounted||cart.total:0;$scope.passInCart=cart&&cart.items?!!cart.items.filter(function(item){return!!item.product.is_subscription;}).length:false;$scope.addSeats=cart&&cart.items?!!cart.items.filter(function(item){return!!item.add_seats;}).length:false;}
function setUserParams(user){if(!user)return;$scope.payment_details.email=$scope.currentUserEmail=user.email||undefined;$scope.payment_details.name=user.first_name?user.first_name+" "+user.last_name:undefined;AccountService.listCards(function(err,cardData){if(err)console.log(err);var defaultCard=cardData.defaultCard||undefined;$scope.default_card=defaultCard;});}
function bodyClickHandler(){if($groupCart.hasClass("active")){$body.removeClass("cart");$groupCart.removeClass("active");window.scrollLock.enablePageScroll();}}
$scope.payment_details={};$scope.userExists=false;$scope.enteringPromotion=false;$scope.cardPlaceholder="Card Number";$scope.cvcPlaceholder="CVC";$scope.newPromoCode="";$scope.useNewCard=false;$scope.init=function(){$scope.processor="stripe";$scope.saveCard=true;$scope.passwordHidden=true;$body=$("body");$groupCart=$(".header__cell--cart");if($rootScope.user)setUserParams($rootScope.user);CartService.getCart(function(err,cart){updateScope(cart);setTimeout(function(){$("body").addClass("loaded");if($scope.itemCount){$groupNext=$groupCart.find(".payup__sidebar .payup__btn");$groupLayout=$groupCart.find(".payup__layout");$groupBack=$groupCart.find(".payup__back");$groupNext.on("click",function(){$groupLayout.addClass("step-checkout");});$groupBack.on("click",function(){$groupLayout.removeClass("step-checkout");});}},10);});if(window&&window.location.search&&/showCart/.test(window.location.search)){$groupCart.addClass("active");$body.addClass("cart");}
$groupCart.find(".header__head").on("click",function(e){e.stopPropagation();$body.find(".header__cell:not(.header__cell--cart)").removeClass("active-touch");if($scope.itemCount)$body.toggleClass("cart");if($groupCart.hasClass("active")){$groupCart.removeClass("active");window.scrollLock.enablePageScroll();}else{$groupCart.addClass("active");window.scrollLock.disablePageScroll();}});$groupCart.on("click",function(e){e.stopPropagation();});$groupClose=$groupCart.find(".header__logo, .header__close");$groupClose.on("click",function(){$body.removeClass("cart");$groupCart.removeClass("active");window.scrollLock.enablePageScroll();});$groupDropdown=$groupCart.find(".header__dropdown");$groupDropdown.on("scroll",function(){if($groupDropdown.scrollTop()>0){$groupDropdown.addClass("active");}else{$groupDropdown.removeClass("active");}});$groupCart.on("mouseleave",function(){if(!$scope.itemCount){$groupCart.removeClass("active");$body.removeClass("cart");window.scrollLock.enablePageScroll();}});$body.on("click",bodyClickHandler);};$scope.$on("$destroy",function(){$groupCart.off();$body.off("click",bodyClickHandler);});$scope.togglePasswordVisibility=function($event){$event.stopPropagation();var input=$($event.currentTarget).siblings("input");if(input.attr("type")==="password"){input.attr("type","text");$scope.passwordHidden=false;}else{input.attr("type","password");$scope.passwordHidden=true;}};$scope.checkUserEmail=function(){if($scope.currentUserEmail)return;UserService.userExists($scope.payment_details.email,function(err,exists){$scope.userExists=exists;});};$scope.removeItem=function(itemId){if($scope.cart.items.length<=1){$scope.itemCount=0;$scope.cart.items=[];$body.removeClass("cart");window.scrollLock.enablePageScroll();}else{$scope.cart.items=$scope.cart.items.filter(function(item){return String(item._id)!==itemId;});}
CartService.removeFromCart(itemId,function(error,cart){updateScope(cart);});};$scope.updateProcessor=function(processor){$scope.processor=processor;};$scope.toggleCardSave=function(){if($scope.default_card)return;$scope.saveCard=!$scope.saveCard;};$scope.toggleUseNewCard=function(){$scope.useNewCard=!$scope.useNewCard;};function processPayment(){$scope.processing=true;var rc=grecaptcha||window.grecaptcha;var rcKey=UI8.recaptchaSiteKey;if(!rc||!rcKey){if(window.bugsnagClient)
window.bugsnagClient.notify("Checkout error: no recaptcha found");FlashService.set("error","Unable to process login. Please try again later.");}
rc.execute(rcKey,{action:"checkout"}).then(function(token){sendCheckoutToServer(token);}).catch(function(error){console.log(error);if(window.bugsnagClient)window.bugsnagClient.notify(error);});}
function trackPurchase(){try{window.gtag("event","conversion",{send_to:"AW-620864518/SoEKCMfMla0DEIbIhqgC",value:$scope.totalCart!=null?$scope.totalCart/100:0,currency:"USD",transaction_id:$scope.processor+"_"+UI8.idempotencyKey,});window.tap("create","37299-95e588",{integration:"javascript"});window.tap("conversion",$scope.processor+"_"+UI8.idempotencyKey,$scope.totalCart!=null?$scope.totalCart/100:0);}catch(e){console.log(`Unable to track purchase: ${e.message}`);console.log(e);}}
function removePromo(location){PromoService.disablePromo().then(function(){UI8.promo=null;UI8.isRenewal=false;var event=new Event("promo-updated");document.body.dispatchEvent(event);window.location=location;});}
function sendCheckoutToServer(token){$scope.payment_details.rcToken=token;$scope.payment_details.idempotencyKey=UI8.idempotencyKey;trackPurchase();if($scope.processor==="stripe"){if($scope.default_card&&!$scope.payment_details.card_number){$scope.payment_details.stripeType="existing";$scope.payment_details.stripeSource=$scope.default_card.id;}else{$scope.payment_details.stripeType="new";$scope.payment_details.saveCard=$scope.saveCard.toString();}
PaymentService.stripe($scope.payment_details,function(err,res){if(err||res.error){if($scope.payment_details.stripeToken)
delete $scope.payment_details.stripeToken;$scope.processing=false;console.log(err||res.error);if(window.bugsnagClient)
window.bugsnagClient.notify(err||res.error);return FlashService.set("error",err||res.error);}
return removePromo("/account/purchases");});}else if($scope.processor==="paypal"){PaymentService.paypal($scope.payment_details,function(err,res){if(err||res.error)
return FlashService.set("error",err||res.error);if(res.link){return removePromo(res.link);}
$scope.processing=false;FlashService.set("error","Unable to submit payment");});}else{$scope.processing=false;FlashService.set("error","Unable to submit payment");}}
$scope.submitPayment=function(){$scope.submitted=true;if($scope.userExists||$scope.PaymentForm.$invalid)return;return processPayment();};$scope.closeCart=function(e){$groupCart.removeClass("active");if($scope.itemCount)$body.removeClass("cart");if(e)e.stopPropagation();};$scope.getPlaceholders=function(){if($scope.cart&&$scope.cart.items){if($scope.cart.items.length>1)return[];return new Array(3-$scope.cart.items.length);}
return[];};$scope.advanceCursor=function(e){if(e.target.value.length<2)return;if(["TAB","SHIFT"].includes(e.key.toUpperCase()))return;if(e.target.name==="exp_month"){$("input[name='exp_year']").focus();}else if(e.target.name==="exp_year"){$("input[name='cvc").focus();}};$scope.subscriptionAccess=function(sub_term,lifetime){if(lifetime){return "Lifetime access";}else if(sub_term){return sub_term+" month access";}else{return "";}};$rootScope.$watch("cart",function(cart){if(cart){updateScope(cart);$groupCart.addClass("active");if(cart.items&&cart.items.length){$body.addClass("cart");}else{$body.removeClass("cart");}}});$rootScope.$watch("user",function(user){setUserParams(user);});var targetNode=document.getElementsByClassName("header__cell--cart")[0];var searchKeydown;var active;var observer=new MutationObserver(function(mutations){mutations.forEach(function(mutation){if(mutation.attributeName!=="class")return;var classes=[];if(Array.from){classes=Array.from(targetNode.classList);}else{classes=[].slice.apply(targetNode.classList);}
if(classes.indexOf("active")>-1&&!active){active=true;$(targetNode).find('input[name="email"]').focus();}else if(searchKeydown){active=false;}});});observer.observe(targetNode,{attributes:true});},]);angular.module("UI8.controllers").controller("DiscussionController",["$scope","DiscussionService",function($scope,DiscussionService){var submitting=false;var discussionComponent=angular.element(document.querySelector("#ui8-discussion"));$scope.editing=false;$scope.submit=submit;$scope.prev=prev;$scope.next=next;$scope.whoLikesThis=whoLikesThis;$scope.comments=[];$scope.initialize=init;$scope.delete=deleteComment;$scope.toggleLike=toggleLike;$scope.userLikesComment=userLikesComment;$scope.paginationDisabled=paginationDisabled;$scope.getHandle=getFullName;$scope.sort="newest";$scope.disabled=true;$scope.loading=false;$scope.loadingMore=false;$scope.messageEditing="";$scope.getLikers=function(comment){var likes=(comment.likes||[]).filter(function(l){return!l.hide;});return{list:likes.slice(0,4),more:likes.length-4>0?likes.length-4:false,};};$scope.setEditing=function(index,value){if(value){$scope.messageEditing=value;}
$scope.error=false;$scope.editing=isNaN(index)?false:index;};$scope.saveEdit=function(updated){var index=angular.copy($scope.editing),comment=$scope.comments[index];$scope.error=false;DiscussionService.update($scope.$parent.product.discussion._id,comment._id,replaceUserEntities(updated)).then(function(response){response=response.data;$scope.editing=false;$scope.comments[index].message=updated;$scope.comments[index].message=response.message;}).catch(function(response){$scope.error=response.error||"Unable to save comment.";});};$scope.discussion={};$scope.$watch("message",function(n){$scope.error=false;$scope.htmlerror=!!String(n).match(/(<([^>]+)>)/gi);if((n||"").length>500){$scope.error="Your comment is "+(n.length-500)+" characters too many.";}});$scope.$watch(function(){return $scope.sort;},function(n,o){if(n===o)return;$scope.paginating=false;$scope.disabled=false;$scope.page=1;return getCommentsPage();});$scope.$watch(function(){return $scope.$parent.product._id;},function(n,o){if(n===o)return;$scope.page=1;return getCommentsPage();});function init(user){$scope.user=user?JSON.parse(user):false;$scope.sort="newest";return getCommentsPage();}
function userLikesComment(c){if(!$scope.user)return false;return(c.likes||[]).filter(function(l){return l._id===$scope.user._id;}).length;}
function toggleLike(c){var liked=userLikesComment(c);c.likes=c.likes||[];c.likes_sum=c.likes_sum||0;DiscussionService.toggleLike(liked?"delete":"post",$scope.$parent.product.discussion._id,c._id).then(function(){if(liked){c.likes_sum=Math.max(c.likes_sum-1,0);c.likes=(c.likes||[]).filter(function(l){return l._id!==$scope.user._id;});return;}
c.likes_sum=c.likes_sum+1;return c.likes.push({_id:$scope.user._id,hide:true,});}).catch(function(){});}
function next(){if(paginationDisabled("next"))return;return getCommentsPage($scope.page+1,true);}
function prev(){if(paginationDisabled("prev"))return;return getCommentsPage($scope.page-1);}
function paginationDisabled(direction){return direction==="next"?$scope.page+1>$scope.pages:$scope.page-1<1;}
function getCommentsPage(page,loadMore){if($scope.loading||$scope.loadingMore)return;if(loadMore){$scope.loadingMore=true;}else{$scope.loading=true;}
var seller=$scope.$parent.product.author?$scope.$parent.product.author._id:null;var query={page:page||1,order_by:$scope.sort,count:30};if(seller)query.seller=seller;DiscussionService.listComments($scope.$parent.product.discussion._id,query).then(function(response){response=response.data;$scope.qd=true;$scope.page=response.page;$scope.pages=response.pages;$scope.autocomplete=response.commenters;$scope.discussion=response;$scope.loading=false;$scope.loadingMore=false;$scope.disabled=true;if(!loadMore){$scope.comments=response.comments;}else{$scope.comments=$scope.comments.concat(response.comments);}
$scope.$parent.comments=$scope.discussion.total_comments;}).catch(function(response){$scope.discussion=false;$scope.loading=false;$scope.loadingMore=false;$scope.disabled=true;console.error(response);});}
function getFullName(user,respectCase){var name=user.display_name||(user.first_name||"")+" "+user.last_name;name=name===" "?"Anon":name;return respectCase?name:name.toLowerCase();}
function replaceUserEntities(message){angular.forEach($scope.autocomplete,function(el){var handle="@"+getFullName(el,true);if(message.split(handle).length>1){message=message.split(handle).join("[USER:"+el._id+"]");}});return message;}
function submit(message){if(submitting)return;submitting=true;$scope.submitting=true;$scope.accountError=false;$scope.error=false;$scope.errorLink=null;if(!$scope.user||(!$scope.user.display_name&&!$scope.user.first_name&&!$scope.user.last_name)){submitting=false;$scope.$apply(function(){$scope.error=true;$scope.accountError=true;$scope.submitting=false;});return;}
DiscussionService.create($scope.$parent.product.discussion._id,replaceUserEntities(message)).then(function(){submitting=false;$scope.message="";$scope.submitting=false;$scope.discussion.total_comments=($scope.discussion.total_comments||0)+1;$scope.$parent.comments=$scope.discussion.total_comments;window.scrollTo(0,discussionComponent.offset().top-156);if($scope.sort==="newest"){$scope.page=1;getCommentsPage();}else{$scope.sort="newest";}}).catch(function(response){submitting=false;$scope.submitting=false;$scope.error=response.error||"Unable to save comment.";});}
function deleteComment(c,index){DiscussionService.delete($scope.$parent.product.discussion._id,c._id).then(function(){$scope.comments.splice(index,1);$scope.discussion.total_comments=Math.max(($scope.discussion.total_comments||0)-1,0);$scope.$parent.comments=$scope.discussion.total_comments;});}
$scope.adminDeleteComment=function(commentId,index){DiscussionService.adminDelete(commentId).then(function(){$scope.comments.splice(index,1);$scope.discussion.total_comments=Math.max(($scope.discussion.total_comments||0)-1,0);$scope.$parent.comments=$scope.discussion.total_comments;});};function whoLikesThis(discussion,comment){DiscussionService.whoLikesThis(discussion,comment).then(function(response){$scope.users=response.data.likes;}).catch(function(response){console.error("There was an error",response.error);});}},]);angular.module("UI8.controllers").controller("DownloadCountController",["$scope","$interval","PromoService",function($scope,$interval,PromoService){function initializeCountdown(){var DateTime=window.luxon.DateTime;var Interval=window.luxon.Interval;var end=DateTime.local().setZone("America/Los_Angeles").endOf("day").plus({days:1});var now=DateTime.local().setZone("America/Los_Angeles");var interval=Interval.fromDateTimes(now,end).toDuration("seconds");var elapsed=Interval.fromDateTimes(now,end).toDuration("minutes");if(!interval.isValid)return;$scope.timeUntilReset=interval.toFormat("h:mm:ss");$scope.minutesElapsed=Math.floor(elapsed.minutes);var intervalPromise=$interval(function(){interval=interval.minus({seconds:1});if(!interval.isValid){$interval.cancel(intervalPromise);return;}
$scope.timeUntilReset=interval.toFormat("h:mm:ss");if(Math.floor(interval.seconds)%60===0){elapsed=elapsed.plus({minutes:1});$scope.minutesElapsed=Math.floor(elapsed.minutes);}},1000);}
function downloadSuccessListener(event){if(!event.detail||!Object.prototype.hasOwnProperty.call(event.detail,"downloadsRemaining")||$scope.downloadsRemaining===event.detail.downloadsRemaining)
return;$scope.downloadsRemaining=event.detail.downloadsRemaining;if($scope.downloadsRemaining<=0){initializeCountdown();}}
$scope.init=function(remainingCount){$scope.downloadsRemaining=parseInt(remainingCount)||0;document.body.addEventListener("download-success",downloadSuccessListener);if(!$scope.downloadsRemaining&&window.luxon){initializeCountdown();}};$scope.triggerRenew=function(){PromoService.applyPromo("passrenew15").then(function(promo){UI8.promo=promo;UI8.isRenewal=true;var event=new Event("promo-updated");document.body.dispatchEvent(event);$("body").addClass("pass-pricing-modal");});};$scope.triggerUpgrade=function(){PromoService.applyPromo("passupgrade15").then(function(promo){UI8.promo=promo;var event=new Event("promo-updated");document.body.dispatchEvent(event);$("body").addClass("pass-pricing-modal");});};$scope.$on("$destroy",function(){document.body.removeEventListener("download-success",downloadSuccessListener);});},]);angular.module("UI8.controllers").controller("FlashController",["$scope","$timeout","FlashService",function($scope,$timeout,FlashService){window.FS=FlashService;$scope.clear=clear;$scope.initialize=init;$scope.type=$scope.message="";$scope.$watch(FlashService.get,function(msg){$scope.type=msg.type;$scope.message=msg.message;$scope.showFlash=msg.showFlash;},true);function init(json){var flash=JSON.parse(json);var type=flash["error"]?"error":"message";var message=flash["error"]?flash["error"]:flash["message"];var output=angular.element("<span>"+message+"</span>").html();if(!message)return;$timeout(function(){FlashService.set(type,output);},500);}
function clear(){$scope.showFlash=false;}},]);angular.module("UI8.controllers").controller("FooterController",["$http","$scope",function($http,$scope){$scope.subscribeNewsletter=function(){$scope.pending=true;return $http.post("/api/newsletter",{email:$scope.email}).then(function(){$scope.success=true;$scope.error=false;$scope.pending=false;}).catch(function(response){if(response.code===214||response.error.match(/already/i)){$scope.success=true;$scope.error=false;$scope.pending=false;$scope.exists=true;}else{$scope.error=true;$scope.success=false;$scope.pending=false;}});};$scope.subscribeSlack=function(){$scope.slackPending=true;if(!validateEmail($scope.slackEmail)){$scope.slackSuccess=false;$scope.slackError=true;$scope.slackPending=false;return;}
return $http.post("/api/slack-invite",{email:$scope.slackEmail}).then(function(){$scope.slackSuccess=true;$scope.slackError=false;$scope.slackPending=false;}).catch(function(){$scope.slackError=true;$scope.slackSuccess=false;$scope.slackPending=false;});};$scope.clearError=function(){if($scope.error){$scope.error=false;}};$scope.clearSlackError=function(){if($scope.slackError){$scope.slackError=false;}};function validateEmail(email){var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(email);}},]);angular.module("UI8.controllers").controller("HeaderController",["$scope","$rootScope","$location","$timeout",function(){},]);angular.module("UI8.controllers").controller("MnmlController",["$scope","$http",function($scope,$http){var win=$(window);$scope.filter="camera";$scope.email="";$scope.grouped_images={};$scope.images={};$scope.error=false;$scope.init=function(images){angular.copy(images,$scope.grouped_images);$scope.images=images[$scope.filter];var $hero=$(".hero");win.scroll(function(){if(win.scrollTop()>2048){$hero.css("visibility","hidden");}else{$hero.css("visibility","visible");}});};$scope.$watch(function(){return $scope.filter;},function(n,o){if(n===o)return;var containerTop=$(".section_previews").offset().top-123;win.scrollTop(containerTop);for(var i=0;i<16;i++){$scope.images[i]=$scope.grouped_images[$scope.filter][i];}});$scope.subscribeNewsletter=function(){$scope.pending=true;return $http.post("/api/newsletter",{email:$scope.email}).then(function(){$scope.success=true;$scope.error=false;$scope.pending=false;}).catch(function(response){if(response.code===214||response.error.match(/already/i)){$scope.success=true;$scope.error=false;$scope.pending=false;$scope.exists=true;}else{$scope.error=true;$scope.success=false;$scope.pending=false;}});};$scope.clearError=function(){if($scope.error)$scope.error=false;};},]);angular.module("UI8.controllers").controller("NotificationsController",["$http","$scope",function($http,$scope){var unread,read,currentPage;$scope.read=markRead;$scope.notifications=[];$scope.disabled=false;$scope.next=loadMore;$scope.loading=false;currentPage=1;unread=function(notification){return!!notification.unread;};function fetchNotifications(page){page=page||1;return $http.get("/account/notifications?json=1&limit=50&page="+page).then(function(res){res=res.data||[];$scope.notifications=$scope.notifications.concat(res);$scope.unread=res.filter(unread).length;$scope.loading=false;$scope.disabled=false;}).catch(function(){$scope.loading=false;$scope.disabled=false;});}
function loadMore(){if($scope.notifications.length>=50&&!$scope.disabled){$scope.loading=true;$scope.disabled=true;currentPage+=1;fetchNotifications(currentPage);}}
function markRead(){if(read)return;read=true;return $http.get("/account/notifications/read?json=1").then(function(){$scope.unread=false;});}
fetchNotifications(currentPage);},]);angular.module("UI8.controllers").controller("ProductController",["$http","$scope","$window","$timeout","$sce","$document","LikeService","CartService","FlashService",function($http,$scope,$window,$timeout,$sce,$document,LikeService,CartService,FlashService){var pushLink;$scope.getFreebie=getFreebie;$scope.like=LikeService.toggleLike;$scope.isLiked=LikeService.isLiked;$scope.getCountModifier=LikeService.getCountModifier;$scope.browsable=false;$scope.browseStart=true;$scope.browseEnd=false;$scope.isMp4=function(i){return /\.mp4$/i.test(i.url);};$scope.addToCart=function(e){return CartService.addToCart(e).then(function(){setTimeout(function(){window.scrollLock.disablePageScroll();var groupCart=$(".header__cell--cart"),groupNext=groupCart.find(".payup__sidebar .payup__btn"),groupLayout=groupCart.find(".payup__layout"),groupBack=groupCart.find(".payup__back");groupNext.on("click",function(){groupLayout.addClass("step-checkout");});groupBack.on("click",function(){groupLayout.removeClass("step-checkout");});},10);});};$scope.formData={};$scope.showDownloadModal=false;$scope.init=function(data,user,pass){if(user)$scope.user=user;if(user&&pass)$scope.user.pass_holder=pass;$scope.product=data.product;$scope.secondaryProduct=data.secondaryProduct;$scope.author=data.author;$scope.products=data.products;$scope.previews=data.previews;$scope.user_owns=data.user_owns;$scope.valid_pass=data.valid_pass;$scope.videoEmbed=$sce.trustAsHtml(unescape(data.videoEmbed));var composedSlug="";if($scope.author&&$scope.author.display_name_slug){composedSlug=$scope.author.display_name_slug+"/products/"+$scope.product.slug;}else{composedSlug="/products/"+$scope.product.slug;}
if(!$scope.browsable&&((data.browse&&data.browse.length)||(data.products&&data.products.length))){$scope.browsable=data.browse||data.products.map(function(p){if(!p||!p.slug||p.slug==="undefined")return null;if(p.author&&p.author.display_name_slug){return p.author.display_name_slug+"/products/"+p.slug;}else{return "products/"+p.slug;}}).filter(function(p){return!!p;});currentProductIndex=$scope.browsable.indexOf(composedSlug);if(currentProductIndex===-1){$scope.browsable.unshift(composedSlug);currentProductIndex=0;$scope.browseStart=true;}else if(currentProductIndex!==0){$scope.browseStart=false;if(currentProductIndex===$scope.browsable.length-1){$scope.browseEnd=true;}}}
var title=data.subtitle?data.subtitle:"";title+=data.title?(data.subtitle?" — ":"")+data.title:"";title+=" on UI8";document.title=title;if(window.location.search.length){popHistory(composedSlug);}
if(window.ga)window.ga("author.remove");if(window.ga&&data.author_ga_code){window.ga("create",data.author_ga_code,"auto",{name:"author"});window.ga("author.send","pageview");}
$scope.isVideo=data.product.type==="video";$scope.hasCategory=data.product.category&&data.product.category.length;$scope.hasCompatibility=data.product.compatibility_string&&data.product.compatibility_string.length;$scope.hasDetailImages=data.product.detail_images&&data.product.detail_images.length;$scope.hasFullPreview=data.product.full_preview_images&&data.product.full_preview_images.length;$scope.hasFeatures=data.product.features&&data.product.features.length;$scope.hasRelated=data.products&&data.products.length<4;$scope.freeFilesData={name:data.product.name+" (demo)",slug:data.product.slug,files:data.product.free_files,_id:data.product._id,};$scope.freebieData={name:data.product.name,card_image:data.product.card_image,slug:data.product.slug,files:data.product.rel?data.product.files:data.product.free_files,_id:data.product._id,};$scope.heroBackground=getHeroBackground(data.product);$scope.vimeoEmbed=getVimeoEmbed(data.product.video_source||data.product.video_intro);$scope.formattedDescription=$sce.trustAsHtml(data.product.description.replace(/\n/g,"<br/>").replace(/\[([0-9A-Za-z ]+)\]\(([0-9a-z\.\-\/\:]+)\)/gi,"<a target='_blank' href='$2'>$1</a>"));if(data.author){$scope.authorAvatar=data.author.avatar_url;$scope.authorName=getAuthorName(data.author);$scope.authorId=data.author.display_name_slug||data.author._id;}
window.UI8=window.UI8||{};UI8.product=data.product;if(data.author)UI8.author=data.author;$(".product-full-preview").on("click",clickHandler);$document.on("keydown",keydownHandler);$document.on("show-modal",showModalHandler);$.fn.isInViewport=function(){var elementTop=$(this).offset().top;var elementBottom=elementTop+$(this).outerHeight();var viewportTop=$(window).scrollTop();var viewportBottom=viewportTop+$(window).height();return elementBottom>viewportTop&&elementTop<viewportBottom;};const $header=$(".header"),$nav=$(".pnav"),$window=$(window);$window.scroll(function(){const scrollTop=$window.scrollTop();if(scrollTop+$header.outerHeight()>=$nav.offset().top){$nav.addClass("scrolled");}else{$nav.removeClass("scrolled");}
if($window.width()<1024){var discussion=$(".discussion"),intercomContainer=$(".intercom-lightweight-app");if(discussion&&intercomContainer){var discussionTop=discussion.offset().top,winHeight=$window.height();if(scrollTop+winHeight>discussionTop){intercomContainer.fadeOut();}else{intercomContainer.fadeIn();}}}});};$scope.toggleDownloadModal=function(){if(!$scope.product&&window.UI8){$scope.product=window.UI8.product||null;$scope.secondaryProduct=window.UI8.secondaryProduct||null;$scope.userOwns=window.UI8.user_owns||false;$scope.userOwnsSecondary=window.UI8.user_owns_secondary||false;}
$scope.dlProduct=$scope.userOwnsSecondary||$scope.valid_pass?$scope.secondaryProduct:$scope.product;$scope.showDownloadModal=!$scope.showDownloadModal;};$timeout(function(){var $win=$(window);var videos=$("video");if(!videos.length)return;var playPromises=new Array(videos.length);function videoToggle(){$.each(videos,function(i,v){if($(v).isInViewport()){if(videos[i]&&videos[i].paused){if(!videos[i].ended){try{playPromises[i]=videos[i].play();playPromises[i].catch(function(){});}catch(e){}}}}else{if(playPromises[i]!==undefined){playPromises[i].then(function(){videos[i].pause();}).catch(function(){});}}});}
$win.scroll(videoToggle);videoToggle();},50);function containerClick(e){if($(e.target).hasClass("product-full-preview")){$("body").removeClass("show-modal");}}
function showModalHandler(e,v){if(v){$(".product-full-preview").on("click",containerClick);}else{$(".product-full-preview").off();}
$scope.full_preview=v;$scope.$apply();}
$scope.$on("$destroy",function(){$document.on("keydown",keydownHandler);$document.off("show-modal",showModalHandler);$(".product-full-preview").on("click",clickHandler);});$scope.scrollTo=function(target){$("html, body").animate({scrollTop:$("[name='"+target+"']").offset().top-156},1000);};$scope.toggleNewsletter=function(){$scope.newsletter=!$scope.newsletter;};$scope.toggleVideo=function(){$scope.showVideo=!$scope.showVideo;};function getFreebie(e,form){e.preventDefault();form=form||{};if(form.$invalid){return;}
form.sending=true;return $timeout(function(){return $http.post($window.location.pathname+"/freebie",{email:$scope.email,}).then(function(){form.sent=true;form.errored=false;form.$setPristine();$timeout(function(){$scope.newsletter=false;},500);}).catch(function(){form.errored=true;$timeout(function(){form.sending=false;form.$setPristine();},350);});},300);}
$scope.subscribeNewsletter=function(){$scope.pending=true;return $http.post("/api/newsletter",{email:$scope.email}).then(function(){$scope.success=true;$scope.error=false;$scope.pending=false;}).catch(function(response){if(response.code===214||response.error.match(/already/i)){$scope.success=true;$scope.error=false;$scope.pending=false;$scope.exists=true;}else{$scope.error=true;$scope.success=false;$scope.pending=false;}});};$scope.clearError=function(){if($scope.error){$scope.error=false;}};$scope.confirmPush=function(event){event.preventDefault();pushLink=event.currentTarget.getAttribute("href");$("body").addClass("push-modal");};$scope.sendPush=function(){$("body").removeClass("push-modal");window.location=window.location.origin+pushLink;};function getHeroBackground(product){var out;if(product.hide_hero)return false;if(product.hero_image){out=product.hero_image;}else if(product.detail_images.length){out=product.detail_images[0].url;}else{out=product.card_image;}
return "background-image: url("+out+");";}
function getVimeoEmbed(source){var url;if(source&&typeof source==="string")
url=source.match(/https\:\/\/vimeo\.com\/[A-z0-9]+/);if(!url)return "";url=(url[0]||"").replace("://vimeo.com/","://player.vimeo.com/video/");return('<iframe src="'+
url+
'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');}
function getAuthorName(author){if(author.display_name)return author.display_name;if(author.first_name){var authorName=author.firstName;if(author.last_name){authorName+=" "+author.last_name;}
return authorName;}
return null;}
var host=window.location.origin;var currentProductIndex=0;var productDataLoading=false;function handleResponseError(error){console.error(error);FlashService.set("error","Unable to navigate with keyboard controls.");}
function updateProductData(response,slug,navForward){$scope.init(response.data);$scope.$apply();if(navForward){pushHistory(slug);}else{popHistory(slug);}}
function pushHistory(slug){var _query=window.location.search;var params=new URLSearchParams(_query);params.delete("browse");params=params.toString();var queryString=params.length?"?"+params:"";history.pushState(null,"",host+"/"+slug+queryString);}
function popHistory(slug){var _query=window.location.search;var params=new URLSearchParams(_query);params.delete("browse");params=params.toString();var queryString=params.length?"?"+params:"";history.replaceState(null,"",host+"/"+slug+queryString);}
function loadProduct(productId,navForward){if(typeof productId==="undefined"||productId==="undefined")return;productDataLoading=true;$.ajax(host+"/api/"+productId).done(function(res){if(res.error)return handleResponseError(res.error);updateProductData(res,productId,navForward);productDataLoading=false;}).fail(function(_,status,error){productDataLoading=false;return handleResponseError(error);});}
function previousProduct(){if(productDataLoading)return;if(currentProductIndex<=0)return;if(currentProductIndex===1){$scope.browseStart=true;}else{$scope.browseStart=false;}
$scope.browseEnd=false;return loadProduct($scope.browsable[--currentProductIndex]);}
function nextProduct(){if(productDataLoading)return;if(currentProductIndex>=$scope.browsable.length-1)return;if(currentProductIndex===$scope.browsable.length-2){$scope.browseEnd=true;}else{$scope.browseEnd=false;}
$scope.browseStart=false;return loadProduct($scope.browsable[++currentProductIndex],true);}
function keydownHandler(e){if(e.key==="Escape"||e.keyCode===27){$("body").removeClass("full-preview-modal");$("body").removeClass("full-preview-modal");$("body").trigger("show-video",[false]);$("body").trigger("show-video",[false]);return;}
let ignore=false;switch(e.target.tagName.toLowerCase()){case "input":case "textarea":case "select":case "button":ignore=true;return;}
if(!ignore&&e.which===37){previousProduct();}else if(!ignore&&e.which===39){nextProduct();}}
function clickHandler(e){if($(e.target).hasClass("product-full-preview")){$("body").removeClass("show-modal");}}
$scope.previousProduct=previousProduct;$scope.nextProduct=nextProduct;},]);angular.module("UI8.controllers").controller("ProductsController",["$http","$scope","$window","$timeout","LikeService","CartService",function($http,$scope,$window,$timeout,LikeService,CartService){var PRODUCTS_COUNT=24;$scope.addToCart=CartService.addToCart;$scope.loading=true;$scope.init=init;$scope.homeInit=homeInit;$scope.next=nextPage;$scope.disabled=false;$scope.likes=[];$scope.products=[];$scope.selectTag=selectTag;$scope.productGroup={featured:[],trending:[],new_releases:[],freebies:[],};$scope.freebieProduct={name:"",};$scope.getFreebie=getFreebie;$scope.setFreebie=setFreebie;$scope.isLiked=LikeService.isLiked;$scope.unLiked=LikeService.unLiked;$scope.likeProduct=LikeService.toggleLike;$scope.getCountModifier=LikeService.getCountModifier;$scope.cardHover=function(){this.hoverTarget=true;};$scope.cardLeave=function(){this.hoverTarget=false;this.signInMessage=false;};$scope.likeHover=function(){this.signInMessage=true;};$scope.$watch(function(){return $scope.sort;},function(n,o){if(n===o){return;}
$scope.paginating=false;return rebuild();});angular.element($window).bind("beforeunload",function(){if(location.pathname==="/"){sessionStorage.setItem("homeTab",$scope.filter);}
return setTop(document.body.scrollTop);});$("document").ready(function(){var top=getTop();if(top)document.body.scrollTop=parseInt(top,10);});$scope.updateFilter=function(filter){$scope.filter=filter;for(var id=0;id<24;id++){if($scope.productGroup[filter][id]){$scope.products[id]=$scope.productGroup[filter][id];}else{if(id===0){$scope.products=[];}else{$scope.products=$scope.products.slice(0,id);}
break;}}};function init(query,products,loggedIn,favorites){$scope.author=query.author;$scope.sort=query.sort;$scope.type=query.type||false;$scope.page=query.page===0?0:query.page||1;$scope.category=query.category;$scope.tag=query.tags;$scope.favorites=favorites||false;$scope.exclude=query.exclude||false;$scope.products=products||[];$scope.sale=query.sale;$scope.hideButton=query.count<PRODUCTS_COUNT;$scope.loading=false;}
function homeInit(filter,products){filter=sessionStorage.getItem("homeTab")||filter;angular.copy(products,$scope.productGroup);$scope.updateFilter(filter);$scope.loading=false;}
function rebuild(){$scope.page=1;$scope.products=[];$scope.loading=false;$scope.disabled=false;$scope.rebuilding=true;setTimeout(function(){$scope.destroy=true;return getPage(1);},$scope.destroy?0:200);}
function nextPage(){if($scope.productGroup.featured.length>0){return;}
$scope.paginating=true;return getPage($scope.page+1);}
function getPage(pageNumber){if($scope.loading){return;}
$scope.loading=true;return getProducts(pageNumber);}
function getProducts(page,callback){var url="/products/api/page/"+page,wait_at_least,then;if($scope.favorites&&!!$scope.favorites.match(/users\//)){url=$scope.favorites+"/favorites/page/"+page;}else if($scope.favorites){url="/account/favorites/page/"+page;}
$scope.page=page;$scope.disabled=true;url=url+"?json=1";url=window.location.pathname.match(/freebies/)?url+"&freebie=true":url;url=$scope.sort?url+"&sort="+$scope.sort:url;url=$scope.author?url+"&author="+$scope.author:url;url=$scope.exclude?url+"&exclude="+$scope.exclude:url;url=$scope.tag?url+"&tag="+$scope.tag:url;url=$scope.activeTag?url+"&tag="+$scope.activeTag:url;url=$scope.type?url+"&type="+$scope.type:url;url=$scope.category?url+"&category="+$scope.category:url;url=$scope.sale?url+"&sale=true":url;url=url.replace(/\/\//g,"/");angular.element($window).resize();if($scope.paginating){wait_at_least=500;then=new Date().getTime();}
$http.get(url,{cache:true}).then(function(response){var data=response.data;if(callback)return callback(data);if(!$scope.paginating){renderProducts(data);}else{var now=new Date().getTime();var time=then-now;if(time<wait_at_least){$timeout(function(){updateQueryStringParam("page",page);renderProducts(data);},wait_at_least-time);}else{updateQueryStringParam("page",page);renderProducts(data);}}});}
function renderProducts(fetch){$scope.disabled=false;$scope.rebuilding=false;$scope.hideButton=fetch.query.count<PRODUCTS_COUNT;$scope.no_results=!(fetch.products||[]).length;if(!fetch.products||fetch.products.length<PRODUCTS_COUNT){$scope.disabled=true;}
$scope.hideFilters=false;angular.forEach(fetch.products,function(p){$scope.products.push(p);});$scope.loading=false;}
function selectTag(tag){$scope.activeTag=tag?tag:false;return rebuild();}
function getFreebie(e,form){e.preventDefault();form=form||{};if(form.$invalid){return;}
form.sending=true;return $timeout(function(){return $http.post("/products/"+$scope.freebieProduct.slug+"/freebie",{email:$scope.email,}).then(function(){form.sent=true;form.errored=false;form.$setPristine();$timeout(function(){$scope.newsletter=false;},500);}).catch(function(){form.errored=true;$timeout(function(){form.sending=false;form.$setPristine();},350);});},300);}
function setFreebie(product){$scope.freebieProduct=product;}
function setTop(top){sessionStorage.setItem("top:"+location.pathname,top);}
function getTop(){return sessionStorage.getItem("top:"+location.pathname)||0;}
function updateQueryStringParam(key,value,callback){var baseUrl=[location.protocol,"//",location.host,location.pathname,].join(""),urlQueryString=document.location.search,newParam=value!==""?key+"="+value:"",params="?"+newParam;if(urlQueryString){var keyRegex=new RegExp("([?&])"+key+"[^&]*");if(urlQueryString.match(keyRegex)!==null){params=urlQueryString.replace(keyRegex,"$1"+newParam);}else{params=urlQueryString+"&"+newParam;}
window.history.replaceState({},"",baseUrl+params);if(callback)callback();}else{window.history.pushState({},"",[location.protocol,"//",location.host,location.pathname].join("")+
params);if(callback)callback();}}},]);angular.module("UI8.controllers").controller("SessionController",["$scope",function($scope){$scope.account={};var parseLocation=function(location){var pairs=location.substring(1).split("&");var obj={};var pair;var i;for(i in pairs){if(pairs[i]==="")continue;pair=pairs[i].split("=");obj[decodeURIComponent(pair[0])]=decodeURIComponent(pair[1]);}
return obj;};var queryEmail=parseLocation(window.location.search)["email"];if(queryEmail){$scope.account.email=queryEmail;}},]);angular.module("UI8.controllers").controller("UpsellController",["CartService","$scope",function(CartService,$scope){$scope.addPassUpsellToCart=function(){$("body").removeClass("upsell-modal");CartService.passUpsellToCart($scope.pass,false);};$scope.learnMore=function(){$("body").removeClass("upsell-modal");window.location="/products/all-access-pass";};},]);angular.module("UI8.controllers").controller("WhoLikesThisController",["$scope","WhoLikesService",function($scope,WLT){$scope.$watch(WLT.change,function(){$scope.open=WLT.open();$scope.wltUsers=WLT.users();});},]);angular.module("UI8.components").component("affiliates",{template:`
    <div class="seller">
      <img class="seller__background" src="/img/affiliate.jpg" alt="Background" />
      <div class="seller__container container">
        <div class="seller__head">
          <h1 class="seller__title">Become an affiliate</h1>
          <div class="seller__description">Join our affiliate program by applying using the form below.</div>
        </div>
        <div class="seller__auth auth auth--author">
          <div class="auth__background">
            <img src="/img/auth-affiliate.jpg" alt="Sign in" />
          </div>
          <div class="auth__container" ng-if="!$ctrl.isSuccess">
            <div class="auth__title">Apply to join</div>
            <div class="field">
              <div class="field__label">Email</div>
              <input class="field__input tab-email" ng-class="{error: $ctrl.emailError}" placeholder="designer@example.com" ng-keydown="$ctrl.emailError = false" type="email" name="email" ng-model="$ctrl.seller.email" ng-pattern="/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$/i" required>
            </div>
            <div class="field">
              <div class="field__label">Full name</div>
              <input class="field__input" ng-class="{error: $ctrl.fullNameError}" placeholder="Jamie Davis" ng-keydown="$ctrl.fullNameError = false" type="text" name="full_name" ng-model="$ctrl.seller.full_name" required>
            </div>
            <div class="field">
              <div class="field__label">Link to website promoting UI8</div>
              <input class="field__input" ng-class="{error: $ctrl.promotingLinkError}" placeholder="https://mywebsite.com" ng-keydown="$ctrl.promotingLinkError = false" type="text" name="promoting_link" ng-model="$ctrl.seller.promoting_link" required>
            </div>
            <div class="field">
              <div class="field__label">Website description</div>
              <textarea class="field__textarea" ng-class="{error: $ctrl.websiteDescriptionError}" placeholder="What is your website about?" ng-keydown="$ctrl.websiteDescriptionError = false" name="website_description" ng-model="$ctrl.seller.website_description" required></textarea>
              <input type="text" ui8-go-tab='.tab-email' />
            </div>
            <button class="btn btn--submit" ng-if="!$ctrl.isSubmitting" ng-click="$ctrl.submit()">Apply</button>
            <div class="loader" ng-if="$ctrl.isSubmitting"></div>
          </div>
          <div class="auth__container" ng-if="$ctrl.isSuccess">
            <div class="auth__title">Application under review</div>
            <div class="auth__content">
              <p>Thank you for submitting your application to become a part of the UI8 family.</p>
              <p>Your application is undergoing a thorough review, and we will be in touch with you via email within the next 1-3 business days with our decision and any subsequent steps.</p>
            </div>
          </div>
        </div>
        <div class="faq">
          <h2 class="faq__title">Frequently asked questions</h2>
          <div class="faq__list">
            <div class="faq__item">
              <h3 class="faq__head">What is the acceptance criteria?</h3>
              <div class="faq__body">You must have an industry-relevant website online.</div>
            </div>
            <div class="faq__item">
              <h3 class="faq__head">How much do I earn for sales?</h3>
              <div class="faq__body">You earn 40% commission on individual product sales. Subscription sales such as All-Access pass are excluded and not counted as part of revenue sharing.</div>
            </div>
            <div class="faq__item">
              <h3 class="faq__head">When and how do I get paid?</h3>
              <div class="faq__body">Payments are fully automated via PayPal, taking place at the end of each month as long as you have a minimum balance of $100.00 in your account. Please be sure to update your payment settings with a valid PayPal email address to avoid delays.</div>
            </div>
            <div class="faq__item">
              <h3 class="faq__head">For how long do you track referrals?</h3>
              <div class="faq__body">We track referrals for up to 6 months in order to maximize your earning potential.</div>
            </div>
            <div class="faq__item">
              <h3 class="faq__head">How long will it take to review my application?</h3>
              <div class="faq__body">Our review process could take 1-2 business days upon submission. After the review process we will reach out to you via email with our decision and subsequent steps to open your affiliate account.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,controller:function($timeout){var ctrl=this;ctrl.isSubmitting=false;ctrl.$onInit=function(){if(ctrl.user){ctrl.seller=ctrl.user;ctrl.seller.full_name=ctrl.user.first_name&&ctrl.user.last_name?`${ctrl.user.first_name} ${ctrl.user.last_name}`:"";}else{ctrl.seller={};}
window.scrollTo(0,0);$(".faq__head").on("click",function(){$(this).toggleClass("active");$(this).next().slideToggle();});};ctrl.$destroy=function(){$(".faq__head").off();};ctrl.submit=function(){if(!validateEmail(ctrl.seller.email))return(ctrl.emailError=true);if(!ctrl.seller.full_name)return(ctrl.fullNameError=true);if(!ctrl.seller.promoting_link)return(ctrl.promotingLinkError=true);if(!ctrl.seller.website_description)return(ctrl.websiteDescriptionError=true);ctrl.isSubmitting=true;var config={emailjs_service_id:"service_pfngzjf",emailjs_template_id:"template_gaz69yk",emailjs_public_key:"QW-V0faGeGNDpoc_p",};var params={full_name:ctrl.seller.full_name,email:ctrl.seller.email,promoting_link:ctrl.seller.promoting_link,website_description:ctrl.seller.website_description,};return window.emailjs.send(config.emailjs_service_id,config.emailjs_template_id,params,config.emailjs_public_key).then(function(){$timeout(function(){ctrl.isSubmitting=false;ctrl.isSuccess=true;});},function(){$timeout(function(){ctrl.isError=true;});});};function validateEmail(email){var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(email);}},bindings:{user:"<",},});angular.module("UI8.components").component("categoryFilter",{template:'<div class="filters__container" ng-class=\'{ fonts: $ctrl.categoryName === "Fonts", "no-sort": !$ctrl.showSort || $ctrl.currentSale }\'>'+
'  <tag-filter ng-if="::$ctrl.showTags" filters="$ctrl.filterTags" on-update="$ctrl.applyTagFilter(value)" category-name="::$ctrl.categoryName"></tag-filter>'+
'  <software-filter ng-if="::$ctrl.showApps" show-apps="$ctrl.filterApps" on-update="$ctrl.applySoftwareFilter(value)" limit-apps="$ctrl.showTags"></software-filter>'+
'  <div class="filters__sorting" ng-if="::($ctrl.showSort && !$ctrl.currentSale)">'+
'    <product-filter update-sort="$ctrl.applySort(value)" update-featured="$ctrl.applyFeatured(value)" update-exclusive="$ctrl.applyExclusive(value)" price-filter="::$ctrl.priceFilter" has-exclusives="$ctrl.hasExclusives" has-featured="$ctrl.hasFeatured"></product-filter>'+
"  </div>"+
"</div>",controller:function(){var ctrl=this;ctrl.applyTagFilter=function(val){return ctrl.updateTag({value:val});};ctrl.applySoftwareFilter=function(val){return ctrl.updateSoftware({value:val});};ctrl.applySort=function(val){return ctrl.updateSort({value:val});};ctrl.applyFeatured=function(val){return ctrl.updateFeatured({value:val});};ctrl.applyExclusive=function(val){return ctrl.updateExclusive({value:val});};},bindings:{categoryName:"<",currentSale:"<",priceFilter:"<",showTags:"<",filterTags:"<",updateTag:"&",showApps:"<",filterApps:"<",updateSoftware:"&",showSort:"<",updateSort:"&",updateFeatured:"&",updateExclusive:"&",hasExclusives:"<",hasFeatured:"<",},});angular.module("UI8.components").component("category",{template:'<div class="page">'+
'  <div class="page__background">'+
'     <img src="https://images.ui8.net/redesign/{{ $ctrl.backgroundImage }}.jpg" alt="Hero" />'+
"  </div>"+
'  <div class="page__container container">'+
'    <div class="page__hero">'+
'      <h1 class="page__title">{{ ::$ctrl.categoryName}}{{ ::$ctrl.data.category.name === "Sketch" ? " Resources" : "" }}</h1>'+
'      <div class="page__description">{{ ::$ctrl.subtitle }}</div>'+
"    </div>"+
"  </div>"+
'  <div class="page__trigger"></div>'+
'  <div class="page__filters page__filters--sticky">'+
'    <div class="page__container container">'+
'      <div class="filters">'+
"        <category-filter category-name='::$ctrl.categoryName' current-sale='::$ctrl.data.current_sale' price-filter='::$ctrl.priceFilter' show-tags='::$ctrl.showTagFilter' filter-tags='$ctrl.data.filterTags' update-tag='$ctrl.updateTag(value)' show-apps='::$ctrl.showAppFilter' filter-apps='$ctrl.showApps' update-software='$ctrl.updateSoftware(value)' show-sort='::$ctrl.showSort' update-sort='$ctrl.updateSort(value)' update-featured='$ctrl.updateFeatured(value)' update-exclusive='$ctrl.updateExclusive(value)' has-featured='$ctrl.hasFeatured' has-exclusives='$ctrl.hasExclusives'></category-filter>"+
"      </div>"+
"    </div>"+
"  </div>"+
'  <div class="page__container container">'+
'    <div class="page__catalog catalog">'+
'      <new-product-card ng-repeat="product in $ctrl.data.products track by product._id" product="::product" user="::$ctrl.user" link-query="\'?browse=\' + $ctrl.data.category._id"></new-product-card>'+
"    </div>"+
'    <div class="page__foot">'+
'      <button class="btn ng-cloak" ng-if="!$ctrl.loading && ($ctrl.data.meta.page < $ctrl.data.meta.pages)" ng-click="$ctrl.next()">View more</button>'+
'      <div class="loader loader--small" ng-if="$ctrl.loading"></div>'+
"    </div>"+
"  </div>"+
"</div>",controller:function($scope,$timeout,CategoryService,HistoryService){var ctrl=this;var isSaleOrTrending=false;ctrl.attention=false;ctrl.attentionText="End Of Year Sale - Save 40% on all products until the end of the month during checkout";ctrl.$onInit=function(){const $header=$(".header"),$trigger=$(".page__trigger"),$filters=$(".page__filters");$(window).scroll(function(){const posScroll=$(window).scrollTop();if(posScroll+$header.outerHeight()>=$trigger.offset().top){$filters.addClass("scrolled");}else{$filters.removeClass("scrolled");}});if(ctrl.data.category.slug==="sale"||ctrl.data.category.slug==="trending"){isSaleOrTrending=true;}
document.title=(ctrl.data.lunacy?"Lunacy":ctrl.data.category.name)+" — UI8";ctrl.backgroundImage="hero-home";switch(ctrl.data.category.slug){case "coded-templates":ctrl.backgroundImage="hero-coded-templates";break;case "wireframe-kits":ctrl.backgroundImage="hero-wireframe-kits";break;case "illustrations":ctrl.backgroundImage="hero-illustrations";break;case "fonts":ctrl.backgroundImage="hero-fonts";break;case "presentation":ctrl.backgroundImage="hero-presentation";break;case "mockups":ctrl.backgroundImage="hero-mockups";break;case "3d-assets":ctrl.backgroundImage="hero-3d-assets";break;case "icons":ctrl.backgroundImage="hero-icons";break;case "themes":ctrl.backgroundImage="hero-themes";break;case "freebies":ctrl.backgroundImage="hero-freebies";break;default:ctrl.backgroundImage="hero-home";break;}
ctrl.showSort=!isSaleOrTrending;ctrl.priceFilter=ctrl.data.category.slug!=="freebies";var sort=getPageSort();ctrl.sort=sort?sort:ctrl.data.current_sale?"sale":"recent";ctrl.softwareFilter="Any Platform";ctrl.featured=ctrl.data.query.featured||false;ctrl.exclusive=ctrl.data.query.exclusive||false;ctrl.page=getPageNumber();ctrl.top=getTop();ctrl.categoryName=ctrl.data.lunacy?"Lunacy":ctrl.data.category.name;ctrl.subtitle=ctrl.data.lunacy?`${ctrl.data.category.count} premium Lunacy resources for UX/UI projects`:ctrl.data.settings.category_subtitle[ctrl.data.category.slug]?ctrl.data.settings.category_subtitle[ctrl.data.category.slug].replace("[count]",ctrl.data.category.count):ctrl.data.category.subtitle;ctrl.showAppFilter=["fonts","sketch","lunacy","figma"].indexOf(ctrl.data.category.slug)<0;ctrl.showTagFilter=true;ctrl.showApps=ctrl.data.compatibleApps;$(document).ready(function(){setTimeout(function(){window.scroll(0,ctrl.top);},0);});angular.element(document.querySelector(".page-loader-container")).addClass("ng-hide");angular.element(document.querySelector(".body-container")).removeClass("ng-hide");function isGoingToProduct(oldPath,oldUrl){return oldPath.startsWith("/category")&&!oldUrl.includes("?search=1");}
HistoryService.rememberScrollPosition(isGoingToProduct,ctrl.data.category.slug);};ctrl.updateSort=function(sortBy){setPageSort(sortBy);ctrl.sort=sortBy;return rebuild();};ctrl.updateSoftware=function(app){if(ctrl.softwareFilter===app)return;ctrl.softwareFilter=app;return rebuild();};ctrl.updateTag=function(tagId){if(isSaleOrTrending){if(ctrl.secondaryCategory===tagId)return;ctrl.secondaryCategory=tagId;}else{if(ctrl.tagFilter===tagId)return;ctrl.tagFilter=tagId;}
if(ctrl.top>0&&ctrl.page>1){return rebuild(ctrl.page);}
return rebuild();};ctrl.updateFeatured=function(featured){if(ctrl.featured===featured)return;ctrl.featured=featured;$timeout(function(){return rebuild();},200);};ctrl.updateExclusive=function(exclusive){if(ctrl.exclusive===exclusive)return;ctrl.exclusive=exclusive;$timeout(function(){return rebuild();},200);};ctrl.next=function(){ctrl.paginating=true;return getPage(ctrl.page+1);};function rebuild(pages=1){ctrl.rebuilding=true;ctrl.loading=false;if(pages===1){return getPage(1);}
return getPage(1,pages);}
function getPage(page,pages=0){if(ctrl.loading)return;ctrl.loading=true;ctrl.page=page;var options={sort:ctrl.sort,page:ctrl.page,};if(ctrl.sort==="salefirst"){options.sort="recent";options.sale=true;}
if(ctrl.featured)options.featured=!!ctrl.featured;if(ctrl.exclusive)options.exclusive=!!ctrl.exclusive;if(!/Any/.test(ctrl.softwareFilter))
options.compatibility=ctrl.softwareFilter;if(ctrl.tagFilter)options.tag=ctrl.tagFilter;if(ctrl.secondaryCategory)options.category=ctrl.secondaryCategory;CategoryService.findBySlug(ctrl.data.category.slug,options).then(function(response){$scope.$evalAsync(function(){if(page===1){if(!response.products||!response.products.length){var filterResetEvent=new Event("reset-category-filters");document.body.dispatchEvent(filterResetEvent);}
ctrl.data.products=response.products;}else{ctrl.data.products=ctrl.data.products.concat(response.products);}
ctrl.showApps=response.compatibleApps;ctrl.hasExclusives=response.hasExclusives;ctrl.hasFeatured=response.hasFeatured;ctrl.data.meta.page=response.meta.page;ctrl.data.meta.pages=response.meta.pages;setPageNumber(ctrl.page);ctrl.loading=false;ctrl.rebuilding=false;ctrl.paginating=false;if($("body").scrollTop()>225){$("html, body").stop().animate({scrollTop:185},500,"swing");}
if(page<pages){getPage(++page,pages);}});}).catch(function(){ctrl.loading=false;ctrl.rebuilding=false;ctrl.paginating=false;});}
function getTop(){var top=sessionStorage.getItem("top:"+ctrl.data.category.slug)||0;sessionStorage.removeItem("top:"+ctrl.data.category.slug);return parseInt(top,10);}
function setPageNumber(page){sessionStorage.setItem("page:"+ctrl.data.category.slug,page);}
function getPageNumber(){var page=sessionStorage.getItem("page:"+ctrl.data.category.slug)||1;sessionStorage.removeItem("page:"+ctrl.data.category.slug);return+page;}
function setPageSort(sortBy){sessionStorage.setItem("sort:"+ctrl.data.category.slug,sortBy);}
function getPageSort(){return sessionStorage.getItem("sort:"+ctrl.data.category.slug);}},bindings:{data:"<",user:"<",},});angular.module("UI8.components").component("discountItem",{template:'<div class="purchase item item-item">'+
'   <div class="wrapper">'+
'       <div class="top clearfix">'+
'           <a ng-href="{{$ctrl.discount.discount_url}}" ng-style="$ctrl.cardImage" class="image" target="_blank" >'+
'             <span ng-if="!$ctrl.discount.discount_icon">{{ $ctrl.discount.partner_name[0] }}</span>'+
"           </a>"+
'           <div class="pull-left">'+
"               <h4>{{ $ctrl.discount.partner_name }}</h4>"+
"               <span>{{ $ctrl.discount.discount_description }}</span>"+
"           </div>"+
"       </div>"+
'       <div class="bottom clearfix">'+
'           <div class="pull-left">'+
"               <p>Discount code: {{ $ctrl.discount.discount_code }}</p>"+
"           </div>"+
'           <div class="pull-right">'+
'               <a ng-href="{{$ctrl.discount.discount_url}}" target="_blank" class="btn btn-outline btn-blue btn-med">Redeem</a>'+
"           </div>"+
"       </div>"+
"   </div>"+
"</div>",controller:function(){var ctrl=this;ctrl.$onInit=function(){if(ctrl.discount.discount_icon){ctrl.cardImage={"background-image":"url("+ctrl.discount.discount_icon+")","background-size":"contain","background-repeat":"no-repeat","background-color":"#ffffff",};}else{ctrl.cardImage={color:"#ffffff","background-color":"#1e9b59",display:"flex","justify-content":"center","align-items":"center","font-size":"48px",};}};},bindings:{discount:"<",},});angular.module("UI8.components").component("downloadModal",{template:`<div class="modal modal--download open" ng-if="$ctrl.display" ng-click="$ctrl.closeModal()">
      <button class="modal__close" ng-click="$ctrl.closeModal()"></button>
      <div class="modal__container">
        <div class="download">
          <div class="download__preview">
            <img ng-src="{{ $ctrl.product.card_image }}" alt="Preview" />
          </div>
          <ul class="download__buttons" ng-if="$ctrl.product.files.length && !$ctrl.showVerification" onclick="event.stopPropagation()">
            <li ng-repeat='file in $ctrl.product.files track by $index'>
              <button class="btn btn--submit" ng-click="$ctrl.initDownload($index)">
                <span>{{ file.name }}</span>
                <span ng-if="file.size">{{ $ctrl.convertToMb(file.size) }}</span>
                <svg><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 6a1 1 0 0 1 1 1v5.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 13.586V8a1 1 0 0 1 1-1z"/></svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="modal__backdrop"></div>
    </div>
    <verification-modal display='$ctrl.showVerification'></verification-modal>`,controller:function(DownloadService,FlashService,PushService){var ctrl=this;ctrl.closeModal=closeModal;ctrl.showVerification=false;ctrl.convertToMb=function(bytes){return `(${(bytes/(1024*1024)).toFixed(2)}mb)`;};ctrl.initDownload=function(fileIndex,dropbox){DownloadService.get(ctrl.product,fileIndex,dropbox).then(function(result){if(dropbox&&result)ctrl.dropboxClass=result;},function(err){console.log("error:",err);if(/New device/.test(err)){ctrl.display=true;ctrl.showVerification=true;}else{return FlashService.set("error",err);}});};function closeModal(){ctrl.display=false;initPushNotificationHandler();}
function initPushNotificationHandler(){if(!("serviceWorker"in navigator))return;if(!("PushManager"in window))return;PushService.setUpPush().then(function(subscription){if(!subscription){return PushService.subscribe();}}).catch(function(){});}},bindings:{product:"<?",display:"=?",},});angular.module("UI8.components").component("hireModal",{template:`<div ng-class="{success: $ctrl.isSubmitted}" class="modal modal--hire">
      <button class="modal__close" ui8-toggle-class="hire-modal" ui8-track-event="Close Hire Modal"></button>
      <div class="modal__container">
        <div class="hire">

          <div class="hire__step" ng-if="!$ctrl.isSubmitted">
            <div class="hire__title">Hire {{ $ctrl.authorName }}</div>
            <div class="hire__form" ui8-form-control>
              <div class="field">
                <div class="field__label">Subject</div>
                <input class="field__input tab-subject" ng-model="$ctrl.hireSubject" type="text" name="hire-subject" placeholder="ie. Need help with an app design" />
              </div>
              <div class="field">
                <div class="field__label">Project details</div>
                <textarea class="field__textarea" ng-model="$ctrl.hireMessage" name="hire-message" placeholder="Tell us what your project is about, provide as many details as possible..."></textarea>
                <input type="text" ui8-go-tab=".tab-subject" />
              </div>
              <button class="btn btn--submit" ng-if="!$ctrl.isSubmitting" ng-click="$ctrl.submitMessage()">Send inquiry</button>
              <div class="loader" ng-if="$ctrl.isSubmitting"></div>
            </div>
          </div>

          <div class="hire__step" ng-if="$ctrl.isSubmitted && !$ctrl.confirmed">
            <div class="hire__title">Check your inbox</div>
            <div class="hire__content">
              <p>Kindly confirm your inquiry by checking your inbox and completing the steps to finish delivering your message.</p>
              <p>Confirmation should arrive promptly, but in case of any delay, reach out to our support team for assistance.</p>
            </div>
            <button class="btn btn--submit" ng-click="$ctrl.resetForm()">Send new inquiry</button>
          </div>
          
          <div class="hire__step" ng-if="$ctrl.success === 1">
            <div class="hire__title">Message sent</div>
            <div class="hire__content">
              <p>Your email has been confirmed and your message has been delivered to {{ $ctrl.authorName }}.</p>
            </div>
            <button class="btn btn--submit" ng-click="$ctrl.resetForm()">Send new inquiry</button>
          </div>

          <div class="hire__step" ng-if="$ctrl.success === 0">
            <div class="hire__title">Unable to deliver message</div>
            <div class="hire__content">
              <p>We were unable to deliver your message to {{ $ctrl.authorName }}.</p>
              <p>Please contact support.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="modal__backdrop" ui8-toggle-class="hire-modal" ui8-track-event="Close Hire Modal"></div>
    </div>`,controller:function(UserService,FlashService){var ctrl=this;ctrl.hireSubject="";ctrl.hireMessage="";ctrl.isSubmitting=false;ctrl.isSubmitted=false;ctrl.$onInit=function(){ctrl.authorName=ctrl.author.display_name||ctrl.author.first_name+" "+ctrl.author.last_name;if(ctrl.success===0||ctrl.success===1){ctrl.isSubmitted=true;ctrl.confirmed=true;}};ctrl.submitMessage=function(){ctrl.isSubmitting=true;UserService.sendHireMessage(ctrl.author._id,{subject:ctrl.hireSubject,message:ctrl.hireMessage,}).then(function(response){ctrl.isSubmitting=false;if(response.error){return FlashService.set("error","Unable to send message");}
ctrl.isSubmitted=true;});};ctrl.resetForm=function(){ctrl.hireSubject="";ctrl.hireMessage="";ctrl.isSubmitted=false;ctrl.success=false;ctrl.confirmed=false;};},bindings:{author:"<",success:"<",},});angular.module("UI8.components").component("home",{template:'<div class="page">'+
'  <div class="page__background">'+
'     <img src="https://images.ui8.net/redesign/hero-home.jpg" alt="Hero" />'+
"  </div>"+
'  <div class="page__container container">'+
'    <div class="page__hero">'+
"      <h1 class=\"page__title\">{{ ::$ctrl.data.settings.home.title.replace('[count]', $ctrl.data.count) }}</h1>"+
"      <div class=\"page__description\">{{ ::$ctrl.data.settings.home.subtitle.replace('[users]', $ctrl.data.users) }}</div>"+
"    </div>"+
"  </div>"+
'  <div class="page__filters">'+
'    <div class="page__container container">'+
'      <div class="filters filters--home">'+
'        <div class="filters__btns">'+
"          <button class=\"filters__btn\" ng-class=\"{'active': $ctrl.filter === 'featured'}\" ng-click=\"$ctrl.updateFilter('featured')\">Featured</button>"+
"          <button class=\"filters__btn\" ng-class=\"{'active': $ctrl.filter === 'trending'}\" ng-click=\"$ctrl.updateFilter('trending')\">Trending</button>"+
"          <button class=\"filters__btn\" ng-class=\"{'active': $ctrl.filter === 'new_releases'}\" ng-click=\"$ctrl.updateFilter('new_releases')\">Latest</button>"+
"        </div>"+
"      </div>"+
"    </div>"+
"  </div>"+
'  <div class="page__container container">'+
'    <div class="page__catalog catalog">'+
'      <new-product-card ng-repeat="product in $ctrl.products track by product._id" product="product" user="$ctrl.user" link-query="\'?browse=\' + $ctrl.filter"></new-product-card>'+
"    </div>"+
'    <div class="page__foot ng-cloak" ng-if="!$ctrl.loading && $ctrl.filter === \'featured\'">'+
'      <a class="btn" ui-sref="topProducts">View more</a>'+
"    </div>"+
'    <div class="page__foot ng-cloak" ng-if="!$ctrl.loading && $ctrl.filter === \'trending\'">'+
'      <a class="btn" href="/trending">View more</a>'+
"    </div>"+
"  </div>"+
"</div>",controller:function($scope,$rootScope,$location,HistoryService){var ctrl=this;ctrl.products=[];ctrl.productGroup={featured:[],trending:[],new_releases:[],freebies:[],seasonal_sale:[],};ctrl.seasonalSaleTitle=false;ctrl.attention=false;ctrl.attentionText="End Of Year Sale - Save 40% on all products until the end of the month during checkout";ctrl.$onInit=function(){ctrl.loading=true;ctrl.productGroup.featured=ctrl.data.products.featured.products;ctrl.productGroup.trending=ctrl.data.products.trending.products;ctrl.productGroup.new_releases=ctrl.data.products.new_releases.products;ctrl.productGroup.freebies=ctrl.data.products.freebies.products;ctrl.productGroup.seasonal_sale=ctrl.data.products.seasonal_sale.products;ctrl.seasonalSaleTitle=ctrl.data.current_sale&&ctrl.data.current_sale.promo_title;ctrl.updateFilter(getFilter());ctrl.loading=false;ctrl.data.count=formatNumber(UI8.stats.products)||ctrl.data.count;ctrl.data.users=formatNumber(UI8.stats.members)||ctrl.data.users;var top=getTop();$(document).ready(function(){window.scroll(0,top);});window.addEventListener("beforeunload",function(){setFilter(ctrl.filter);},false);$scope.$on("$destroy",function(){sessionStorage.setItem("homeTab",ctrl.filter);});function isGoingToProduct(oldPath,oldUrl){return oldPath==="/"&&!oldUrl.includes("?search=1");}
HistoryService.rememberScrollPosition(isGoingToProduct,"home");};ctrl.updateFilter=function(filter){ctrl.filter=filter;var max=48;for(var id=0;id<max;id++){if(ctrl.productGroup[filter][id]){ctrl.products[id]=ctrl.productGroup[filter][id];}else{if(id===0){ctrl.products=[];}else{ctrl.products=ctrl.products.slice(0,id);}
break;}}
if(ctrl.products.length>max){ctrl.products=ctrl.products.slice(0,max);}};function formatNumber(num){return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",");}
function getTop(){var top=sessionStorage.getItem("top:home")||0;sessionStorage.removeItem("top:home");return parseInt(top,10);}
function setFilter(filter){sessionStorage.setItem("homeTab",filter);}
function getFilter(){var filter=sessionStorage.getItem("homeTab")||"featured";sessionStorage.removeItem("homeTab");return filter;}},bindings:{data:"<",user:"<",},});angular.module("UI8.components").component("jobItem",{template:'<div class="purchase job">'+
'    <div class="wrapper">'+
'        <div class="middle clearfix">'+
'            <div class="ui8-jobs-listing angular-listing">'+
'                <ul class="jobs white-list thick">'+
'                    <li class="job list-item ng-cloak">'+
'                        <div class="wrapper">'+
'                            <a ng-href="/jobs/redirect/{{::$ctrl.id}}" target="_blank" class="permalink"></a>'+
'                            <div ng-if="$ctrl.job.image" ng-style="::$ctrl.jobImage" class="figure">'+
'                                <a ng-href="/jobs/redirect/{{::$ctrl.id}}" target="_blank" class="perma"></a>'+
"                            </div>"+
'                            <div class="content">'+
'                                <div class="upper">'+
'                                    <span ng-if="$ctrl.job.company" class="company">{{ ::$ctrl.job.company }}</span>'+
'                                    <span ng-if="$ctrl.job.location" class="location">{{ ::$ctrl.job.location }}</span>'+
'                                    <span ng-if="$ctrl.job.availability" class="availability">{{ ::$ctrl.job.availability | ui8CapitalizeAll }}</span>'+
'                                    <span class="created">{{ ::$ctrl.job.created_at | relativeDate }}</span>'+
"                                </div>"+
'                                <a ng-href="/jobs/redirect/{{::$ctrl.id}}" target="_blank" class="role">{{ ::$ctrl.job.role | ui8CapitalizeAll }} <svg-icon-arrow-right></svg-icon-arrow-right></a>'+
"                            </div>"+
"                        </div>"+
"                    </li>"+
"                </ul>"+
"            </div>"+
"        </div>"+
'        <div class="bottom clearfix">'+
'            <div ng-if="$ctrl.job.expired" class="pull-left expired">Expired</div>'+
'            <div ng-if="!$ctrl.job.expired" class="pull-left not-expired">Expires {{ ::$ctrl.job.expires_from_now }}</div>'+
'            <div class="pull-right">'+
'                <a ng-href="/account/invoice/{{::$ctrl.job.order}}" target="_blank" class="btn btn-outline btn-blue btn-med">Invoice</a>'+
"            </div>"+
"        </div>"+
"    </div>"+
"</div>",controller:function(){var ctrl=this;ctrl.$onInit=function(){ctrl.jobImage={"background-image":ctrl.job.image};ctrl.id=ctrl.job.job._id;};},bindings:{job:"<",},});angular.module("UI8.components").component("listUser",{template:`<div class="user">
      <div class="user__cell">
        <a class="user__avatar" href="/users/{{::$ctrl.profile.display_name_slug || $ctrl.profile._id}}" ui8-avatar="::$ctrl.profile"></a>
      </div>
      <div class="user__cell">
        <a class="user__title" href="/users/{{::$ctrl.profile.display_name_slug || $ctrl.profile._id}}">{{::$ctrl.profile.display_name || ($ctrl.profile.first_name + " " + $ctrl.profile.last_name)}}</a>
        <div class="user__content" ng-if="$ctrl.profile.biography">{{ $ctrl.profile.biography || "" }}</div>
      </div>
      <div class="user__cell">
        <div class="user__title">{{ ::$ctrl.profile.followers_sum }}</div>
        <div class="user__content">Followers</div>
      </div>
      <div class="user__cell">
        <div class="user__title">{{ ::$ctrl.profile.following_sum }}</div>
        <div class="user__content">Following</div>
      </div>
      <div class="user__cell">
        <button class="btn" ng-if="::(($ctrl.user && ($ctrl.user._id !== $ctrl.profile._id)))" ui8-follow-button="{{$ctrl.profile._id}}" ui8-positive-class="btn--stroke">Follow</button>
        <button class="btn" ng-if="::!$ctrl.user" ng-click="$root.modalState = 'signup'" ui8-toggle-class="session-modal">Follow</button>
      </div>
    </div>
  `,bindings:{profile:"<",user:"<",},});angular.module("UI8.components").component("newProductCard",{template:'<div class="product ng-cloak" on-load="$ctrl.attachClickHandler()">'+
'  <div class="product__preview">'+
'    <div ng-if="!$ctrl.product.card_video" class="product__media" ui8-resize-to="{{::$ctrl.resizeTo}}" ui8-image="{{::$ctrl.cardImage}}" ui8-image-scaled="{{::$ctrl.product.has_scaled_images}}" style="background-color: {{::$ctrl.product.card_primary}}"></div>'+
'    <div ng-if="$ctrl.product.card_video" class="product__media">'+
'      <video muted playsinline ui8-product-video="{{::$ctrl.product.card_video}}" ui8-video-poster="{{::$ctrl.product.card_image}}" on-load="$ctrl.playVideo()"></video>'+
"    </div>"+
'    <div class="product__over">'+
'      <div class="product__like">'+
'        <div class="product__counter ng-cloak">{{$ctrl.getCountModifier($ctrl.product._id) + $ctrl.product.likes}}</div>'+
'        <button class="product__btn" ng-class="{active: $ctrl.isLiked($ctrl.product._id)}" ng-if="$ctrl.user" ng-click="$ctrl.likeProduct($ctrl.product._id)">'+
'          <svg><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'+
"        </button>"+
'        <button class="product__btn" ng-if="!$ctrl.user" ng-click="$root.modalState = \'signup\'" ui8-toggle-class="session-modal">'+
'          <svg><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9932 5.13581C9.9938 2.7984 6.65975 2.16964 4.15469 4.31001C1.64964 6.45038 1.29697 10.029 3.2642 12.5604C4.89982 14.6651 9.84977 19.1041 11.4721 20.5408C11.6536 20.7016 11.7444 20.7819 11.8502 20.8135C11.9426 20.8411 12.0437 20.8411 12.1361 20.8135C12.2419 20.7819 12.3327 20.7016 12.5142 20.5408C14.1365 19.1041 19.0865 14.6651 20.7221 12.5604C22.6893 10.029 22.3797 6.42787 19.8316 4.31001C17.2835 2.19216 13.9925 2.7984 11.9932 5.13581Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'+
"        </button>"+
"      </div>"+
'      <a class="product__btn" ng-href="{{::$ctrl.productLink}}">'+
'        <svg><path d="M12 3c3.167 0 5.748 1.423 7.661 3.046s3.22 3.495 3.876 4.551h0l.027.043c.13.208.299.479.385.858a2.47 2.47 0 0 1 0 1.005c-.085.379-.255.649-.385.858h0l-.027.043c-.656 1.056-1.966 2.93-3.876 4.551S15.167 21 12 21s-5.748-1.423-7.661-3.046-3.22-3.495-3.876-4.551h0l-.027-.043c-.13-.208-.299-.479-.385-.858a2.47 2.47 0 0 1 0-1.005c.085-.379.254-.649.385-.858h0l.027-.043c.656-1.056 1.966-2.93 3.876-4.551S8.833 3 12 3zm0 4.5c-2.445 0-4.426 2.015-4.426 4.5S9.555 16.5 12 16.5s4.426-2.015 4.426-4.5S14.445 7.5 12 7.5zm0 2.25c1.222 0 2.213 1.007 2.213 2.25s-.991 2.25-2.213 2.25S9.787 13.243 9.787 12 10.778 9.75 12 9.75z"/></svg>'+
"      </a>"+
'      <button class="product__btn" ng-if="::($ctrl.user && $ctrl.user.pass_holder && $ctrl.product.type !== \'bundle\' && $ctrl.product.files && $ctrl.product.files.length && $ctrl.product.price)" ng-click="$ctrl.toggleDownloadModal()">'+
'        <svg><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 6a1 1 0 0 1 1 1v5.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 13.586V8a1 1 0 0 1 1-1z"/></svg>'+
"      </button>"+
'      <button class="product__btn" ng-if="::($ctrl.user && $ctrl.product.type !== \'bundle\' && $ctrl.product.files && $ctrl.product.files.length && !$ctrl.product.price)" ng-click="$ctrl.toggleDownloadModal()">'+
'        <svg><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 6a1 1 0 0 1 1 1v5.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 13.586V8a1 1 0 0 1 1-1z"/></svg>'+
"      </button>"+
'      <button class="product__btn" ng-if="::(!$ctrl.user && $ctrl.product.type !== \'bundle\' && $ctrl.product.files && $ctrl.product.files.length && !$ctrl.product.price)" ng-click="$root.modalState = \'signup\'" ui8-toggle-class="session-modal" element="body">'+
'        <svg><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 6a1 1 0 0 1 1 1v5.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 13.586V8a1 1 0 0 1 1-1z"/></svg>'+
"      </button>"+
'      <button class="product__btn" ng-if="::((!$ctrl.user || $ctrl.user.role === \'admin\' || ($ctrl.user && !$ctrl.user.pass_holder)) && $ctrl.product.price && !$ctrl.product.subscription_product && !$ctrl.user.pass_holder)" data-partial="angular_card" data-id="{{::$ctrl.product.base_subscription_id || $ctrl.product._id}}" ng-click="$ctrl.addToCart($event)">'+
'        <svg><path fill-rule="evenodd" d="M8.377 2.001h7.245l1.869.04c.527.042 1.012.131 1.475.352a4 4 0 0 1 1.726 1.588c.259.443.388.919.473 1.44.082.501.133 1.116.195 1.859l.707 8.482.131 2.158c-.001.601-.063 1.158-.295 1.686a4 4 0 0 1-1.759 1.912c-.508.275-1.057.383-1.656.434-.578.049-1.293.049-2.161.049H7.673c-.869 0-1.583 0-2.161-.049-.599-.05-1.148-.159-1.656-.434a4 4 0 0 1-1.759-1.912c-.232-.529-.294-1.085-.295-1.686-.001-.581.059-1.292.131-2.158L2.64 7.28l.195-1.859c.085-.522.214-.998.473-1.44a4 4 0 0 1 1.726-1.588c.463-.221.948-.31 1.475-.352.506-.04 1.123-.04 1.869-.04zm.623 6a1 1 0 1 0-2 0 5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 1 0-2 0 3 3 0 0 1-3 3 3 3 0 0 1-3-3z"/></svg>'+
"      </button>"+
'      <button class="product__btn" ng-if="$ctrl.product.subscription_product && !$ctrl.userHasLifetime" ui8-toggle-class="pass-pricing-modal">'+
'        <svg><path fill-rule="evenodd" d="M8.377 2.001h7.245l1.869.04c.527.042 1.012.131 1.475.352a4 4 0 0 1 1.726 1.588c.259.443.388.919.473 1.44.082.501.133 1.116.195 1.859l.707 8.482.131 2.158c-.001.601-.063 1.158-.295 1.686a4 4 0 0 1-1.759 1.912c-.508.275-1.057.383-1.656.434-.578.049-1.293.049-2.161.049H7.673c-.869 0-1.583 0-2.161-.049-.599-.05-1.148-.159-1.656-.434a4 4 0 0 1-1.759-1.912c-.232-.529-.294-1.085-.295-1.686-.001-.581.059-1.292.131-2.158L2.64 7.28l.195-1.859c.085-.522.214-.998.473-1.44a4 4 0 0 1 1.726-1.588c.463-.221.948-.31 1.475-.352.506-.04 1.123-.04 1.869-.04zm.623 6a1 1 0 1 0-2 0 5 5 0 0 0 5 5 5 5 0 0 0 5-5 1 1 0 1 0-2 0 3 3 0 0 1-3 3 3 3 0 0 1-3-3z"/></svg>'+
"      </button>"+
'      <a ng-href="{{::$ctrl.productLink}}" class="product__link"></a>'+
"    </div>"+
"  </div>"+
'  <div class="product__inner">'+
'    <div class="product__head">'+
'      <a class="product__title" ng-href="{{::$ctrl.productLink}}">{{::$ctrl.product.name}}</a>'+
'      <div class="product__price" ng-if="::$ctrl.product.price" ng-class="::{\'on-sale\': ($ctrl.product.on_sale || $ctrl.product.site_promo) && !$ctrl.pass, \'custom-price\': $ctrl.product.is_subscription}">'+
'        <span ng-if="::($ctrl.product.on_sale || $ctrl.product.site_promo) && !$ctrl.pass">{{::$ctrl.product.price | ui8Currency}}</span>'+
'        <span ng-if="$ctrl.product.subscription_product">from {{::$ctrl.product.base_subscription_price | ui8Currency}}</span>'+
"        <span ng-if='::!$ctrl.product.subscription_product'>{{::($ctrl.product.site_promo ? $ctrl.product.seasonal_promo_price : ($ctrl.product.on_sale ? $ctrl.product.sale_price : $ctrl.product.price)) | ui8Currency}}</span>"+
"      </div>"+
'      <div class="product__price" ng-if="::!$ctrl.product.price">Free</div>'+
"    </div>"+
'    <div class="product__meta">'+
'      <div class="product__author" ng-if="::$ctrl.product.author && !$ctrl.product.is_subscription">'+
'        <a class="product__avatar" ng-href="/{{::$ctrl.product.author.display_name_slug || $ctrl.product.author._id}}/products" ui8-resize-to="{{::$ctrl.resizeAvatarTo}}" ui8-image="{{::$ctrl.authorAvatar}}"></a>'+
'        <a ng-href="/{{::$ctrl.product.author.display_name_slug || $ctrl.product.author._id}}/products">{{::$ctrl.product.author.display_name ? $ctrl.product.author.display_name : ($ctrl.product.author.first_name + " " + $ctrl.product.author.last_name)}}</a>'+
"      </div>"+
'      <div class="product__arrow" ng-if="::$ctrl.product.category.length && !$ctrl.product.is_subscription"></div>'+
'      <div ng-if="::$ctrl.product.category.length && !$ctrl.product.is_subscription">'+
'        <a ng-href="/categories/{{::$ctrl.product.category[0].slug}}">{{::$ctrl.product.category[0].name}}</a>'+
"      </div>"+
'      <div class="product__featured" ng-if="::$ctrl.product.featured"><span>Featured product</span></div>'+
"    </div>"+
"  </div>"+
'  <download-modal ng-if="$ctrl.showDownloadModal" product="$ctrl.product" display="$ctrl.showDownloadModal"></download-modal>'+
"</div>",controller:function(LikeService,CartService,$element,$rootScope,$location){this.addToCart=function(e){$rootScope.showSearch=false;CartService.addToCart(e);};this.isLiked=LikeService.isLiked;this.unLiked=LikeService.unLiked;this.likeProduct=LikeService.toggleLike;this.getCountModifier=LikeService.getCountModifier;this.showDownloadModal=false;this.movedModal=false;this.$onInit=function(){this.userHasLifetime=window.UI8.userHasLifetime;function cacheValue(name,fn){if(window[name]!=null){return window[name];}
window[name]=fn();return window[name];}
const isWebpSupported=cacheValue("isWebpSupported",()=>{const elem=document.createElement("canvas");if(elem.getContext&&elem.getContext("2d")){return elem.toDataURL("image/webp").indexOf("data:image/webp")==0;}
return false;});const resolution={width:604,height:420};const avatarResolution={width:40,height:40};const extension=isWebpSupported?"webp":"png";const avatarExtension=isWebpSupported?"png":"png";const S3_IMAGE_SERVER="https://images.ui8.net";if(this.product.has_resized_card_image){const postfix=this.product.card_image_version?`_${this.product.card_image_version}`:"";this.cardImage=`${S3_IMAGE_SERVER}/product/${this.product._id}/${resolution.width}_${resolution.height}${postfix}.${extension}`;this.resizeTo="";}else{this.cardImage=this.product.card_image;this.resizeTo=`width=${resolution.width},height=${resolution.height}`;}
if(this.product.author.has_resized_avatar){const postfix=this.product.author.avatar_url_version?`_${this.product.author.avatar_url_version}`:"";this.authorAvatar=`${S3_IMAGE_SERVER}/avatar/${this.product.author._id}/${avatarResolution.width}_${avatarResolution.height}${postfix}.${avatarExtension}`;this.resizeAvatarTo="";}else{this.authorAvatar=this.product.author.avatar_url||"//d1v8dk3ka6obgr.cloudfront.net/v5/assets/global/default_avatar_v2.png";this.resizeAvatarTo=`with=${avatarResolution.width},height=${avatarResolution.height}`;}
var productLink="/";if(!this.product.permalink){if(this.product.slug!=="all-access-pass"&&this.product.author&&this.product.author.display_name_slug){productLink+=this.product.author.display_name_slug+"/";}
productLink+="products/"+this.product.slug;if(this.linkQuery){productLink+=this.linkQuery;}
this.productLink=productLink;}else{this.productLink=this.product.permalink;}};this.toggleDownloadModal=function(){this.showDownloadModal=!this.showDownloadModal;if(!this.movedModal){this.movedModal=true;setTimeout(function(){$("download-modal").appendTo("body");},0);}};this.playVideo=function(){var video=$element.find(".prod video")[0];if(video)video.play();};this.attachClickHandler=function(){$element.find(".product__meta a").on("click",function(){if(!$rootScope.showSearch)return;$rootScope.showSearch=false;$location.search("search",null);});};this.$destroy=function(){$element.find(".product__meta a").off();};},bindings:{product:"<",user:"<",pass:"<?",linkQuery:"<?",},});angular.module("UI8.components").component("newsletterSignup",{template:`<div class="footer__subscribe">
      <div ng-if="!$ctrl.success" class="footer__title">Join our newsletter, get free products.</div>
      <div ng-if="$ctrl.success" class="footer__title">Thanks for joining, check your inbox.</div>
      <div class="field" ng-if="!$ctrl.success">
        <div class="field__label">Email</div>
        <input class="field__input" ng-class="{ error: $ctrl.errorServer || $ctrl.errorEmail || $ctrl.errorExists }" ng-keyup="$ctrl.pressEnter($event)" type="email" name="email" ng-model="$ctrl.email" placeholder="designer@example.com">
        <button class="field__action" ng-click="$ctrl.subscribeNewsletter()" ng-if="!$ctrl.pending">
          <svg width="24" height="24"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm.613 4.81l.094.083 4.4 4.4c.028.028.055.059.08.09l-.08-.09a1.01 1.01 0 0 1 .097.112 1.03 1.03 0 0 1 .05.075.87.87 0 0 1 .021.037c.011.02.021.04.031.061a.96.96 0 0 1 .022.052.99.99 0 0 1 .022.06 1.07 1.07 0 0 1 .014.046c.006.022.011.043.016.065s.007.035.009.052.005.041.007.061a1.05 1.05 0 0 1 .003.055c0 .01.001.021.001.032l-.001.033c-.001.017-.002.035-.003.052L17.4 12a1.01 1.01 0 0 1-.011.149c-.003.017-.006.034-.009.052a.94.94 0 0 1-.015.065 1.11 1.11 0 0 1-.014.046.95.95 0 0 1-.021.059c-.007.018-.015.035-.023.052a1.02 1.02 0 0 1-.031.061.88.88 0 0 1-.021.036c-.016.026-.032.05-.05.074a.7.7 0 0 1-.013.018l-.083.094-4.4 4.4a1 1 0 0 1-1.497-1.32l.083-.094L13.985 13H7.6a1 1 0 0 1-.117-1.993L7.6 11h6.385l-2.692-2.693a1 1 0 0 1 1.32-1.497z"/></svg>
        </button>
        <div class="loader" ng-if="$ctrl.pending"></div>
        <div class="field__error" ng-if="$ctrl.errorServer">Server error. Please try again later.</div>
        <div class="field__error" ng-if="$ctrl.errorEmail">Invalid email address.</div>
        <div class="field__error" ng-if="$ctrl.errorExists">Email address already subscribed.</div>
      </div>
      <div class="footer__message" ng-if="$ctrl.success">Be sure to double opt-in to claim your free products.</div>
    </div>`,controller:function($http){var ctrl=this;ctrl.$onInit=function(){ctrl.errorServer=false;ctrl.errorEmail=false;ctrl.errorExists=false;ctrl.pending=false;ctrl.success=false;};ctrl.subscribeNewsletter=function(){ctrl.pending=true;if(!validateEmail(ctrl.email)){ctrl.errorEmail=true;ctrl.pending=false;return;}
ctrl.errorEmail=false;return $http.post("/api/newsletter",{email:ctrl.email}).then(function(){ctrl.errorServer=false;ctrl.errorEmail=false;ctrl.errorExists=false;ctrl.pending=false;ctrl.success=true;}).catch(function(res){ctrl.pending=false;if(res.data.code===214||res.data.error.match(/already/i)){ctrl.errorExists=true;}else{ctrl.errorServer=true;}});};ctrl.pressEnter=function(e){if(e.keyCode===13){ctrl.subscribeNewsletter();}};function validateEmail(email){var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(email);}},});angular.module("UI8.components").component("openShop",{template:`
    <div class="seller">
      <img class="seller__background" src="/img/seller.jpg" alt="Background" />
      <div class="seller__container container">
        <div class="seller__head">
          <h1 class="seller__title">Become an author</h1>
          <div class="seller__description">Authors can join UI8 by invitation or by applying using the form below.</div>
        </div>
        <div class="seller__auth auth auth--author">
          <div class="auth__background">
            <img src="/img/auth-seller.jpg" alt="Sign in" />
          </div>
          <div class="auth__container" ng-if="!$ctrl.isSuccess">
            <div class="auth__title">Apply to open a shop</div>
            <div class="field">
              <div class="field__label">Email</div>
              <input class="field__input tab-email" ng-class="{error: $ctrl.emailError}" placeholder="designer@example.com" ng-keydown="$ctrl.emailError = false" type="email" name="email" ng-model="$ctrl.seller.email" ng-pattern="/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$/i" required>
            </div>
            <div class="field">
              <div class="field__label">Full name</div>
              <input class="field__input" ng-class="{error: $ctrl.fullNameError}" placeholder="Jamie Davis" ng-keydown="$ctrl.fullNameError = false" type="text" name="full_name" ng-model="$ctrl.seller.full_name" required>
            </div>
            <div class="field">
              <div class="field__label">Link to portfolio or product example</div>
              <input class="field__input" ng-class="{error: $ctrl.portfolioLinkError}" placeholder="https://mywebsite.com" ng-keydown="$ctrl.portfolioLinkError = false" type="text" name="portfolio_link" ng-model="$ctrl.seller.portfolio_link" required>
            </div>
            <div class="field">
              <div class="field__label">Additional information</div>
              <textarea class="field__textarea" placeholder="Write a short message (optional)..." name="additional_info" ng-model="$ctrl.seller.additional_info"></textarea>
              <input type="text" ui8-go-tab='.tab-email' />
            </div>
            <button class="btn btn--submit" ng-if="!$ctrl.isSubmitting" ng-click="$ctrl.submit()">Apply</button>
            <div class="loader" ng-if="$ctrl.isSubmitting"></div>
          </div>
          <div class="auth__container" ng-if="$ctrl.isSuccess">
            <div class="auth__title">Application under review</div>
            <div class="auth__content">
              <p>Thank you for submitting your application to become a part of the UI8 family.</p>
              <p>Your application is undergoing a thorough review, and we will be in touch with you via email within the next 1-3 business days with our decision and any subsequent steps.</p>
            </div>
          </div>
        </div>
        <div class="faq">
          <h2 class="faq__title">Frequently asked questions</h2>
          <div class="faq__list">
            <div class="faq__item">
              <h3 class="faq__head">What is the acceptance criteria?</h3>
              <div class="faq__body">New product submissions are accepted based on the overall level of quality, polish, usability and value. Please browse some of our featured products to get a better sense of the type of products we typically approved to be released on our platform.</div>
            </div>
            <div class="faq__item">
              <h3 class="faq__head">How much do I earn for sales?</h3>
              <div class="faq__body">Your products will be available to customers through two options: by purchasing it individually or with an all-access pass. For individual purchases, you earn 70% on each sale and 2% of the value of your product for each unique download. Typically, individual purchases generate 85-95% of your revenue.</div>
            </div>
            <div class="faq__item">
              <h3 class="faq__head">When and how do I get paid?</h3>
              <div class="faq__body">Payments are fully automated via PayPal, taking place at the end of each month as long as you have a minimum balance of $100.00 in your account. Please be sure to update your payment settings with a valid PayPal email address to avoid delays.</div>
            </div>
            <div class="faq__item">
              <h3 class="faq__head">How long will it take to review my application?</h3>
              <div class="faq__body">Our review process could take 1-2 business days upon submission. After the review process we will reach out to you via email with our decision and subsequent steps to open your author account.</div>
            </div>
            <div class="faq__item">
              <h3 class="faq__head">How long does it take to review new product submissions?</h3>
              <div class="faq__body">New product submission reviews are typically done within 24 hours. You will receive a notification in case the product is approved or denied. The same applies to existing product updates.</div>
            </div>
            <div class="faq__item">
              <h3 class="faq__head">Can my product be excluded from the All-Access Pass?</h3>
              <div class="faq__body">All products on our platform are accessible with the All-Access Pass and cannot be excluded. If you wish to permanently remove your products please contact support.</div>
            </div>
            <div class="faq__item">
              <h3 class="faq__head">Can I sell on other marketplaces?</h3>
              <div class="faq__body">We do not require products to be exclusively available on our platform. You’re welcome and encouraged to release products across multiple marketplaces to maximize your exposure and earning potential.</div>
            </div>
            <div class="faq__item">
              <h3 class="faq__head">How do I get my product featured?</h3>
              <div class="faq__body">Featured products are hand-picked by our internal design team. Our selection is based on the general level of quality, polish, usability and value. You may not submit requests to get your product featured.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,controller:function($timeout){var ctrl=this;ctrl.isSubmitting=false;ctrl.$onInit=function(){if(ctrl.user){ctrl.seller=ctrl.user;ctrl.seller.full_name=ctrl.user.first_name&&ctrl.user.last_name?`${ctrl.user.first_name} ${ctrl.user.last_name}`:"";}else{ctrl.seller={};}
window.scrollTo(0,0);$(".faq__head").on("click",function(){$(this).toggleClass("active");$(this).next().slideToggle();});};ctrl.$destroy=function(){$(".faq__head").off();};ctrl.submit=function(){if(!validateEmail(ctrl.seller.email))return(ctrl.emailError=true);if(!ctrl.seller.full_name)return(ctrl.fullNameError=true);if(!ctrl.seller.portfolio_link)return(ctrl.portfolioLinkError=true);ctrl.isSubmitting=true;var config={emailjs_service_id:"service_pfngzjf",emailjs_template_id:"template_cg0ace9",emailjs_public_key:"QW-V0faGeGNDpoc_p",};var params={full_name:ctrl.seller.full_name,email:ctrl.seller.email,portfolio_link:ctrl.seller.portfolio_link,additional_info:ctrl.seller.additional_info,};return window.emailjs.send(config.emailjs_service_id,config.emailjs_template_id,params,config.emailjs_public_key).then(function(){$timeout(function(){ctrl.isSubmitting=false;ctrl.isSuccess=true;});},function(){$timeout(function(){ctrl.isError=true;});});};function validateEmail(email){var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(email);}},bindings:{user:"<",},});angular.module("UI8.components").component("orderItem",{template:`<div class="purchases__item">
    <a class="purchases__preview" href="/product/{{$ctrl.item.product.slug}}">
      <img ng-src="{{ $ctrl.item.product.card_image }}" alt="{{ $ctrl.item.product.name }}">
    </a>
    <div class="purchases__inner">
      <div class="purchases__head">
        <a class="purchases__title" href="/product/{{$ctrl.item.product.slug}}">{{ $ctrl.item.product.name }}</a>
        <div class="purchases__price">{{ $ctrl.item.product.price | ui8Currency }}</div>
      </div>
      <div class="purchases__description">{{ $ctrl.item.license | ui8Capitalize }} license</div>
      <div class="purchases__actions">
        <button class="btn btn--stroke btn--icon-only" ng-if="$ctrl.item.product.type === \'item\'" ng-click="$ctrl.toggleDownloadModal()">
          <svg><path fill-rule="evenodd" d="M12 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm0 6a1 1 0 0 1 1 1v5.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L11 13.586V8a1 1 0 0 1 1-1z"></path></svg>
        </button>
        <a class="btn btn--stroke btn--icon-only" ng-href="/account/invoice/{{ $ctrl.item.order }}" target="_blank">
          <svg><path fill-rule="evenodd" d="M15.241 1H8.759l-2.011.044c-.562.046-1.079.144-1.564.392a4 4 0 0 0-1.748 1.748c-.247.485-.346 1.002-.392 1.564C3 5.289 3 5.954 3 6.759v10.483l.044 2.011c.046.562.144 1.079.392 1.564a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392C7.289 23 7.954 23 8.759 23h6.483l2.01-.044c.562-.046 1.079-.145 1.564-.392a4 4 0 0 0 1.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.011V6.759l-.044-2.011c-.046-.562-.145-1.079-.392-1.564a4 4 0 0 0-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C16.711 1 16.046 1 15.241 1zM8 6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8zm-1 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1z"/></svg>
        </a>
      </div>
    </div>
  </div>
  <download-modal product="$ctrl.item.product" display="$ctrl.showDownloadModal"></download-modal>`,controller:function(){var ctrl=this;ctrl.$onInit=function(){ctrl.showDownloadModal=false;};ctrl.toggleDownloadModal=function(){ctrl.showDownloadModal=!ctrl.showDownloadModal;};},bindings:{item:"<",user:"<",},});angular.module("UI8.components").component("passModal",{template:`<div class="modal modal--pass">
      <button class="modal__close" ui8-toggle-class="pass-pricing-modal" ui8-track-event="Close Pass Modal"></button>
      <div class="modal__container">
        <div class="modal__head">
          <div class="modal__title">All-Access Pass</div>
          <div class="modal__description">Unlock instant access to all existing products and daily new releases.</div>
        </div>
        <pass-pricing subscriptions="::$ctrl.subscriptions" lifetime="::$ctrl.lifetime" promo="::$ctrl.promo" close-modal="true"></pass-pricing>
      </div>
      <div class="modal__backdrop" ui8-toggle-class="pass-pricing-modal" ui8-track-event="Close Pass Modal"></div>
    </div>`,controller:function(){var ctrl=this;ctrl.$onInit=function(){if(!ctrl.subscriptions)ctrl.subscriptions=UI8.subscriptions;if(!ctrl.lifetime)ctrl.lifetime=UI8.lifetime;if(!ctrl.promo)ctrl.promo=UI8.promo;if(!ctrl.renew)ctrl.renew=UI8.renew;};},bindings:{subscriptions:"<?",lifetime:"<?",promo:"<?",},});angular.module("UI8.components").component("productCard",{template:'<div class="card ng-cloak" on-load="$ctrl.attachClickHandler()" ng-class="{faded: $ctrl.rebuilding, liked: $ctrl.isLiked($ctrl.product._id), unliked: $ctrl.unLiked($ctrl.product._id), free: !$ctrl.product.price}">'+
'  <div class="card-wrapper">'+
'    <div ng-if="!$ctrl.product.card_video" class="card-figure" ng-class="{\'hovered\': $ctrl.hoverTarget, \'anon-like\': $ctrl.signInMessage}" ng-mouseenter="$ctrl.cardHover()" ng-mouseleave="$ctrl.cardLeave()" ui8-resize-to="{{::$ctrl.resizeTo}}" ui8-image="{{::$ctrl.cardImage}}" ui8-image-scaled="{{::$ctrl.product.has_scaled_images}}" style="background-color: {{::$ctrl.product.card_primary}}">'+
'      <a ng-href="{{::$ctrl.productLink}}" class="card-permalink"></a>'+
'      <div class="likes">'+
'        <span class="count ng-cloak">{{$ctrl.getCountModifier($ctrl.product._id) + $ctrl.product.likes}}</span>'+
'        <a class="btn btn-white btn-circle btn-small" ng-if="$ctrl.user" ng-click="$ctrl.likeProduct($ctrl.product._id)">'+
"          <svg-icon-like></svg-icon-like>"+
"        </a>"+
'        <a class="btn btn-white btn-circle btn-small" ng-if="!$ctrl.user" ng-click="$root.modalState = \'signup\'" ui8-toggle-class="session-modal" element="body">'+
"          <svg-icon-like></svg-icon-like>"+
"        </a>"+
"      </div>"+
'      <div class="hover">'+
'        <div class="group">'+
'          <a class="btn btn-green btn-square btn-med" ng-if="::($ctrl.user && $ctrl.user.pass_holder && $ctrl.product.type !== \'bundle\' && $ctrl.product.files && $ctrl.product.files.length && $ctrl.product.price)" ng-click="$ctrl.toggleDownloadModal()">'+
"            <svg-icon-download></svg-icon-download>"+
"          </a><!--"+
'          --><a class="btn btn-green btn-square btn-med" ng-if="::($ctrl.user && $ctrl.product.type !== \'bundle\' && $ctrl.product.files && $ctrl.product.files.length && !$ctrl.product.price)" ng-click="$ctrl.toggleDownloadModal()">'+
"            <svg-icon-download></svg-icon-download>"+
"          </a><!--"+
'          --><a class="btn btn-green btn-square btn-med" ng-if="::(!$ctrl.user && $ctrl.product.type !== \'bundle\' && $ctrl.product.files && $ctrl.product.files.length && !$ctrl.product.price)" ng-click="$root.modalState = \'signup\'" ui8-toggle-class="session-modal" element="body">'+
"            <svg-icon-download></svg-icon-download>"+
"          </a><!--"+
'          --><a class="btn btn-white btn-square btn-med" ng-if="::($ctrl.user && $ctrl.user.pass_holder && ($ctrl.product.type === \'bundle\' || !$ctrl.product.price))" ng-href="{{::$ctrl.productLink}}">'+
"            <svg-icon-view></svg-icon-view>"+
"          </a><!--"+
'          --><a class="btn btn-white btn-square btn-med" ng-if="::(!$ctrl.user || ($ctrl.user && !$ctrl.user.pass_holder))" ng-href="{{::$ctrl.productLink}}">'+
"            <svg-icon-view></svg-icon-view>"+
"          </a><!--"+
'          --><a class="btn btn-white btn-square btn-med" ng-if="::((!$ctrl.user || $ctrl.user.role === \'admin\' || ($ctrl.user && !$ctrl.user.pass_holder)) && $ctrl.product.price && !$ctrl.product.subscription_product)" data-partial="angular_card" data-id="{{::$ctrl.product.base_subscription_id || $ctrl.product._id}}" ng-click="$ctrl.addToCart($event)">'+
"            <svg-icon-cart></svg-icon-cart>"+
"          </a><!--"+
'          --><a class="btn btn-white btn-square btn-med" ng-if="::$ctrl.product.subscription_product" ui8-toggle-class="pass-pricing-modal" element="body">'+
"            <svg-icon-cart></svg-icon-cart>"+
"          </a><!--"+
"        --></div>"+
'        <div class="sign-in">'+
'          <h4 class="prompt">Like this?</h4>'+
'          <p class="message">Log in to share your opinion.</p>'+
'          <a ng-click="$root.modalState = \'login\'" ui8-toggle-class="session-modal" element="body" class="btn btn-blue btn-med">Log in</a>'+
"        </div>"+
'        <a ng-href="{{::$ctrl.productLink}}" class="card-permalink"></a>'+
"      </div>"+
"    </div>"+
'    <div ng-if="$ctrl.product.card_video" class="card-figure" ng-class="{\'hovered\': $ctrl.hoverTarget, \'anon-like\': $ctrl.signInMessage}" ng-mouseenter="$ctrl.cardHover()" ng-mouseleave="$ctrl.cardLeave()">'+
'      <video muted playsinline ui8-product-video="{{::$ctrl.product.card_video}}" ui8-video-poster="{{::$ctrl.product.card_image}}" on-load="$ctrl.playVideo()" style="height: 210px; border-radius: 4px;"></video>'+
'      <a ng-href="{{::$ctrl.productLink}}" class="card-permalink"></a>'+
'      <div class="likes">'+
'        <span class="count ng-cloak">{{$ctrl.getCountModifier($ctrl.product._id) + $ctrl.product.likes}}</span>'+
'        <a class="btn btn-white btn-circle btn-small" ng-if="$ctrl.user" ng-click="$ctrl.likeProduct($ctrl.product._id)">'+
"          <svg-icon-like></svg-icon-like>"+
"        </a>"+
'        <a class="btn btn-white btn-circle btn-small" ng-if="!$ctrl.user" ng-click="$root.modalState = \'signup\'" ui8-toggle-class="session-modal" element="body">'+
"          <svg-icon-like></svg-icon-like>"+
"        </a>"+
"      </div>"+
'      <div class="hover">'+
'        <div class="group">'+
'          <a class="btn btn-green btn-square btn-med" ng-if="::($ctrl.user && $ctrl.user.pass_holder && $ctrl.product.type !== \'bundle\' && $ctrl.product.files && $ctrl.product.files.length && $ctrl.product.price)" ng-click="$ctrl.toggleDownloadModal()">'+
"            <svg-icon-download></svg-icon-download>"+
"          </a><!--"+
'          --><a class="btn btn-green btn-square btn-med" ng-if="::($ctrl.user && $ctrl.product.type !== \'bundle\' && $ctrl.product.files && $ctrl.product.files.length && !$ctrl.product.price)" ng-click="$ctrl.toggleDownloadModal()">'+
"            <svg-icon-download></svg-icon-download>"+
"          </a><!--"+
'          --><a class="btn btn-green btn-square btn-med" ng-if="::(!$ctrl.user && $ctrl.product.type !== \'bundle\' && $ctrl.product.files && $ctrl.product.files.length && !$ctrl.product.price)" ng-click="$root.modalState = \'signup\'" ui8-toggle-class="session-modal" element="body">'+
"            <svg-icon-download></svg-icon-download>"+
"          </a><!--"+
'          --><a class="btn btn-white btn-square btn-med" ng-if="::($ctrl.user && $ctrl.user.pass_holder && ($ctrl.product.type === \'bundle\' || !$ctrl.product.price))" ng-href="{{::$ctrl.productLink}}">'+
"            <svg-icon-view></svg-icon-view>"+
"          </a><!--"+
'          --><a class="btn btn-white btn-square btn-med" ng-if="::(!$ctrl.user || ($ctrl.user && !$ctrl.user.pass_holder))" ng-href="{{::$ctrl.productLink}}">'+
"            <svg-icon-view></svg-icon-view>"+
"          </a><!--"+
'          --><a class="btn btn-white btn-square btn-med" ng-if="::((!$ctrl.user || $ctrl.user.role === \'admin\' || ($ctrl.user && !$ctrl.user.pass_holder)) && $ctrl.product.price && !$ctrl.product.subscription_product)" data-partial="angular_card" data-id="{{::$ctrl.product.base_subscription_id || $ctrl.product._id}}" ng-click="$ctrl.addToCart($event)">'+
"            <svg-icon-cart></svg-icon-cart>"+
"          </a><!--"+
'          --><a class="btn btn-white btn-square btn-med" ng-if="::$ctrl.product.subscription_product" ui8-toggle-class="pass-pricing-modal" element="body">'+
"            <svg-icon-cart></svg-icon-cart>"+
"          </a><!--"+
"        --></div>"+
'        <div class="sign-in">'+
'          <h4 class="prompt">Like this?</h4>'+
'          <p class="message">Log in to share your opinion.</p>'+
'          <a ng-click="$root.modalState = \'login\'" ui8-toggle-class="session-modal" element="body" class="btn btn-blue btn-med">Log in</a>'+
"        </div>"+
'        <a ng-href="{{::$ctrl.productLink}}" class="card-permalink"></a>'+
"      </div>"+
"    </div>"+
'    <div class="card-content">'+
'      <a ng-href="{{::$ctrl.productLink}}" class="card-title">{{::$ctrl.product.name}}</a>'+
'      <span class="card-price" ng-if="::$ctrl.product.price" ng-class="::{\'on-sale\': ($ctrl.product.on_sale || $ctrl.product.site_promo) && !$ctrl.pass, \'custom-price\': $ctrl.product.is_subscription}">'+
'        <em ng-if="::($ctrl.product.on_sale || $ctrl.product.site_promo) && !$ctrl.pass">{{::$ctrl.product.price | ui8Currency}}</em>'+
'        <span ng-if="$ctrl.product.subscription_product">{{::$ctrl.product.base_subscription_price | ui8Currency}}</span>'+
"        <span ng-if='::!$ctrl.product.subscription_product'>{{::($ctrl.product.site_promo ? $ctrl.product.seasonal_promo_price : ($ctrl.product.on_sale ? $ctrl.product.sale_price : $ctrl.product.price)) | ui8Currency}}</span>"+
"      </span>"+
'      <span class="card-price" ng-if="::!$ctrl.product.price"><span>Free</span></span>'+
'      <div class="meta-container">'+
'        <div class="meta">'+
'          <span ng-if="::$ctrl.product.author && !$ctrl.product.is_subscription">'+
'            <a ng-href="/{{::$ctrl.product.author.display_name_slug || $ctrl.product.author._id}}/products" class="avatar" ui8-resize-to="{{::$ctrl.resizeAvatarTo}}" ui8-image="{{::$ctrl.authorAvatar}}"></a> by <a ng-href="/{{::$ctrl.product.author.display_name_slug || $ctrl.product.author._id}}/products">{{::$ctrl.product.author.display_name ? $ctrl.product.author.display_name : ($ctrl.product.author.first_name + \' \' + $ctrl.product.author.last_name)}}</a>'+
"          </span>"+
'          <span ng-if="$ctrl.product.is_subscription">'+
'            <a ng-href="/{{::$ctrl.product.author.display_name_slug || $ctrl.product.author._id}}/products" class="avatar" ui8-resize-to="width=48,height=48" ui8-image="https://images.ui8.net/uploads/all_access_pass_icon.png"></a> Unlock instant access to all products'+
"          </span>"+
'          <span ng-if="::!$ctrl.product.author && !$ctrl.product.price">'+
'            <span class="avatar freebie">'+
"              <svg-icon-download-small></svg-icon-download-small>"+
"            </span>"+
"          </span>"+
'          <span ng-if="::$ctrl.product.category.length && !$ctrl.product.is_subscription"> in <a ng-href="/categories/{{::$ctrl.product.category[0].slug}}">{{::$ctrl.product.category[0].name}}</a></span>'+
"        </div>"+
'        <span ng-if="::$ctrl.product.featured" class="card-featured">Featured</span>'+
"      </div>"+
"    </div>"+
"  </div>"+
'  <download-modal ng-if="$ctrl.showDownloadModal" product="$ctrl.product" display="$ctrl.showDownloadModal"></download-modal>'+
"</div>",controller:function(LikeService,CartService,$element,$rootScope,$location){this.addToCart=CartService.addToCart;this.isLiked=LikeService.isLiked;this.unLiked=LikeService.unLiked;this.likeProduct=LikeService.toggleLike;this.getCountModifier=LikeService.getCountModifier;this.showDownloadModal=false;this.$onInit=function(){function cacheValue(name,fn){if(window[name]!=null){return window[name]}
window[name]=fn()
return window[name]}
const isHighDensity=cacheValue('isHighDensity',()=>{if(window.matchMedia){if(window.matchMedia('only screen and (min-resolution: 124dpi), only screen and (min-resolution: 1.3dppx), only screen and (min-resolution: 48.8dpcm)').matches){return true;}
if(window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (min-device-pixel-ratio: 1.3)').matches){return true;}}
return(window.devicePixelRatio&&window.devicePixelRatio>1.3);})
const isRetina=cacheValue('isRetina',()=>{if(window.matchMedia){if(window.matchMedia('only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx), only screen and (min-resolution: 75.6dpcm)').matches){return true;}
if(window.matchMedia('only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min--moz-device-pixel-ratio: 2), only screen and (min-device-pixel-ratio: 2)').matches){return true;}}
if(window.devicePixelRatio&&window.devicePixelRatio>=2){return true;}
return /(iPad|iPhone|iPod)/g.test(navigator.userAgent);})
const isWebpSupported=cacheValue('isWebpSupported',()=>{const elem=document.createElement('canvas');if(!!(elem.getContext&&elem.getContext('2d'))){return elem.toDataURL('image/webp').indexOf('data:image/webp')==0;}
return false;})
const resolution=isHighDensity||isRetina?{width:604,height:420}:{width:302,height:210};const avatarResolution=isHighDensity||isRetina?{width:40,height:40}:{width:20,height:20};const extension=isWebpSupported?'webp':'png';const avatarExtension=isWebpSupported?'png':'png';const S3_IMAGE_SERVER="https://images.ui8.net";if(this.product.has_resized_card_image){const postfix=this.product.card_image_version?`_${this.product.card_image_version}`:''
this.cardImage=`${S3_IMAGE_SERVER}/product/${this.product._id}/${resolution.width}_${resolution.height}${postfix}.${extension}`;this.resizeTo="";}else{this.cardImage=this.product.card_image;this.resizeTo=`width=${resolution.width},height=${resolution.height}`;}
if(this.product.author.has_resized_avatar){const postfix=this.product.author.avatar_url_version?`_${this.product.author.avatar_url_version}`:''
this.authorAvatar=`${S3_IMAGE_SERVER}/avatar/${this.product.author._id}/${avatarResolution.width}_${avatarResolution.height}${postfix}.${avatarExtension}`
this.resizeAvatarTo=""}else{this.authorAvatar=this.product.author.avatar_url||"//d1v8dk3ka6obgr.cloudfront.net/v5/assets/global/default_avatar_v2.png"
this.resizeAvatarTo=`with=${avatarResolution.width},height=${avatarResolution.height}`}
var productLink="/";if(!this.product.permalink){if(this.product.slug!=="all-access-pass"&&this.product.author&&this.product.author.display_name_slug){productLink+=this.product.author.display_name_slug+"/";}
productLink+="products/"+this.product.slug;if(this.linkQuery){productLink+=this.linkQuery;}
this.productLink=productLink;}else{this.productLink=this.product.permalink;}};this.cardHover=function(){this.hoverTarget=true;};this.cardLeave=function(){this.hoverTarget=false;this.signInMessage=false;};this.likeHover=function(){this.signInMessage=true;};this.toggleDownloadModal=function(){this.showDownloadModal=!this.showDownloadModal;};this.playVideo=function(){var video=$element.find(".card video")[0];if(video)video.play();};this.attachClickHandler=function(){$element.find(".card-content a").on("click",function(){if(!$rootScope.showSearch)return;$rootScope.showSearch=false;$(document).trigger("close-dl");$location.search("search",null);$(".ui8-dl").removeClass("open");$("body").css("overflow-y","scroll");});};this.$destroy=function(){$element.find(".card-content a").off();};},bindings:{product:"<",user:"<",pass:"<?",linkQuery:"<?",},});angular.module("UI8.components").component("progressBar",{template:'<div class="progress-bar"><div class="fill-bar"></div></div>',controller:function($element){var ctrl=this;ctrl.$onInit=function(){if(ctrl.color)$element.find(".progress-bar").addClass(ctrl.color);$element.find(".fill-bar").css("width",String((ctrl.count/ctrl.max)*100)+"%");};ctrl.$onChanges=function(changes){$element.find(".fill-bar").css("width",String((changes.count.currentValue/ctrl.max)*100)+"%");};},bindings:{count:"<",max:"<",color:"@",},});angular.module("UI8.components").component("rootwireframekitPage",{template:`
    <iframe src="/rootwireframekit/" style="margin-top: 78px; width:100%; height:calc(100vh - 78px); border: none; background-color: rgb(250, 232, 221);"></iframe>
    <button id="buy-btn" ng-click="$ctrl.buyOrDownload()" class="btn" style="display: none"></button>
    <download-modal ng-if="$ctrl.showDownloadModal" product="product" display="$ctrl.showDownloadModal"></download-modal>
  `,controller:function($scope,$sce,CartService,FlashService){var ctrl=this;var rootwireframekitId="5ef4ef3489ef6d0038fe941b";var productDataLoading;ctrl.showDownloadModal=false;ctrl.$onInit=function(){window.scrollTo(0,0);const backup={};backup.sectionJoinDisplay=$(".section_join").css("display");backup.footerWrapperDisplay=$(".footer__wrapper").css("display");backup.bodyOwerflow=$("body").css("overflow");$(".section_join").css("display","none");$(".footer__wrapper").css("display","none");$("body").css("overflow","hidden");if(window.addEventListener){window.addEventListener("message",onMessage,false);}else if(window.attachEvent){window.attachEvent("onmessage",onMessage);}
function onMessage(event){var data=event.data;if(typeof window[data.func]=="function"){window[data.func].call(null,data.message);}}
window.buyOrDownload=function(message){$("#buy-btn").click();};$(document).ready(function(){loadProduct("root-wireframe-system");});$scope.$on("$destroy",function(){$("body").css("overflow",backup.bodyOwerflow);$(".section_join").css("display",backup.sectionJoinDisplay);$(".footer__wrapper").css("display",backup.footerWrapperDisplay);if(window.addEventListener){window.removeEventListener("message",onMessage,false);}else if(window.attachEvent){window.dettachEvent("onmessage",onMessage);}});};function handleResponseError(error){console.error(error);FlashService.set("error","Unable to get the product.");}
function loadProduct(productId){if(typeof productId==="undefined"||productId==="undefined")return;productDataLoading=true;var host=window.location.origin;$.ajax(host+"/api/products/"+productId).done(function(res){if(res.error)return handleResponseError(res.error);updateProductData(res);productDataLoading=false;}).fail(function(_,status,error){productDataLoading=false;return handleResponseError(error);});}
function updateProductData(response){$scope.init(response.data);$scope.$apply();}
$scope.init=function(data,user,pass){if(user)$scope.user=user;if(user&&pass)$scope.user.pass_holder=pass;$scope.product=data.product;$scope.secondaryProduct=data.secondaryProduct;$scope.author=data.author;$scope.products=data.products;$scope.previews=data.previews;$scope.user_owns=data.user_owns;$scope.valid_pass=data.valid_pass;$scope.videoEmbed=$sce.trustAsHtml(unescape(data.videoEmbed));};ctrl.buyOrDownload=function(){var isAbleToDownload=ctrl.user&&(ctrl.user.pass_holder||ctrl.user.role==="admin");if(isAbleToDownload){ctrl.toggleDownloadModal();}else{ctrl.addToCart();}};ctrl.toggleDownloadModal=function(){if(!$scope.product&&window.UI8){$scope.product=window.UI8.product||null;$scope.secondaryProduct=window.UI8.secondaryProduct||null;$scope.userOwns=window.UI8.user_owns||false;$scope.userOwnsSecondary=window.UI8.user_owns_secondary||false;}
ctrl.showDownloadModal=!ctrl.showDownloadModal;};ctrl.addToCart=function(){CartService.addPassToCart(rootwireframekitId,1);if(ctrl.closeModal)$("body").removeClass("pass-pricing-modal");};},bindings:{closeModal:"<?",user:"<",},});angular.module("UI8.components").component("searchModal",{template:`<div class="search">
      <div class="search__head">
        <div class="search__container container">
          <div class="search__field">
            <input class="search__input" ng-model="$root.searchTerm" ng-model-options="{ debounce: { default: 500, blur: 0 } }" ng-change="$ctrl.onSearchInput()" ng-keydown="$ctrl.watchKeys($event)" id="search-input" type="search" placeholder="Type anything to search..." name="search" autocomplete="off" />
          </div>
          <button class="search__close" ng-click="$ctrl.closeSearch()">
            <svg viewBox="0 0 14 14"><path d="M1.988.585l.094.083L7 5.585 11.918.668a1 1 0 0 1 1.497 1.32l-.083.094L8.414 7l4.918 4.918a1 1 0 0 1-1.32 1.497l-.094-.083L7 8.414l-4.918 4.918a1 1 0 0 1-1.497-1.32l.083-.094L5.585 7 .668 2.082A1 1 0 0 1 1.886.515l.101.069z"/></svg>
          </button>
          <div class="search__filters filters">
            <div class="filters__container">
              <div class="filters__categories">
                <div class='filters__btns' on-load='$ctrl.changeHandler()'>
                  <button class='filters__btn' ng-repeat='category in $ctrl.categoryList track by category.slug' ng-click='$ctrl.updateCategoryFilter(category.slug)' ng-class='$ctrl.isCategoryActive(category.slug)'>
                    {{ ::category.name }}
                  </button>
                </div>
              </div>
              <div class="filters__select">
                <div class="filters__head">
                  <div class="filters__label">Format</div>
                  <div class="filters__arrow">
                    <img ng-src="/img/app-icons/{{$ctrl.isAppActiveSlug()}}.svg" alt="Select" />
                  </div>
                </div>
                <div class="filters__dropdown isWiderest">
                  <button class="filters__btn" ng-repeat="app in $ctrl.appList track by app.slug" ng-click="$ctrl.updateSoftwareFilter(app.name)" ng-class="$ctrl.isAppActive(app.name)">
                    <img ng-src="/img/app-icons/{{::app.slug}}.svg" alt="{{ ::app.name }}" />
                    <span>{{ app.new_name || app.name }}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="search__body">
        <div class="search__container container">
          <div class="search__empty" ng-if="$ctrl.empty">
            <div class="search__alert">
              <div class="search__title">No results...</div>
              <div class="search__text">We couldn’t find any results based on your search terms. Adjust your parameters and try again.</div>
            </div>
            <ul class="search__placeholders"><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>
          </div>
          <div class="search__catalog catalog" ng-if="!$ctrl.empty">
            <new-product-card ng-repeat='product in $ctrl.products track by product._id' product='product' user='$ctrl.user'></new-product-card>
          </div>
          <div class="loader" ng-class="{ loading: $ctrl.searching, faded: !$ctrl.loadingMore && !$ctrl.searching }" ui8-lazy-load when-visible="$ctrl.loadMore()" disable="$ctrl.disabled" container="$ctrl.container">
        </div>
      </div>
    </div>`,controller:function($rootScope,$location,ProductService,HistoryService){var ctrl=this;var productCount=24;var keywords=/(sketch|ui kit|wireframe kit|theme|icon|font|illustration|freebie)(s)?\:(\s)?/gi;var $searchInput;ctrl.appList=[{name:"Any Platform",slug:"any-prog",alt_name:"Any Software",new_name:"Any format",},{name:"Figma",slug:"figma-prog",},{name:"Sketch",slug:"sketch-prog",},{name:"XD",slug:"xd-prog",},{name:"Framer",slug:"framer-prog",},{name:"Cinema 4D",slug:"c4d-prog",},{name:"Blender",slug:"blender-prog",},{name:"3D Studio Max",slug:"3ds-prog",},{name:"Photoshop",slug:"ps-prog",},{name:"After Effects",slug:"ae-prog",},{name:"HTML",slug:"html-prog",new_name:"HTML/CSS",},{name:"Bootstrap",slug:"bootstrap-prog",new_name:"Bootstrap",},{name:"Keynote",slug:"keynote-prog",},{name:"PowerPoint",slug:"powerpoint-prog",},{name:"Illustrator",slug:"ai-prog",},{name:"Procreate",slug:"procreate-prog",},{name:"Xcode",slug:"xcode-prog",},{name:"Swift",slug:"swift-prog",},{name:"React",slug:"react-prog",},{name:"InDesign",slug:"aid-prog",},{name:"Android",slug:"android-prog",},];ctrl.categoryList=[{name:"All Products",slug:"all",},{name:"UI Kits",slug:"ui-kits",},{name:"Coded Templates",slug:"Coded Templates",},{name:"3D Assets",slug:"3D Assets",},{name:"Wireframe Kits",slug:"wireframe-kits",},{name:"Icons",slug:"icons",},{name:"Fonts",slug:"fonts",},{name:"Illustrations",slug:"illustrations",},{name:"Themes",slug:"themes",},];ctrl.products=[];ctrl.resultsCount=0;ctrl.disabled=false;ctrl.searching=false;ctrl.loadingMore=false;ctrl.requestNumber=1;ctrl.empty=false;ctrl.$onInit=function(){$searchInput=$("#search-input");if($(window).width()<768){$searchInput.attr("placeholder","Type to search...");}
ctrl.user=$rootScope.user;updateCategoryFilter($rootScope.categoryFilter||"all");updateAppFilter($rootScope.appFilter);$searchInput.focus();if($rootScope.searchTerm==null){$rootScope.searchTerm=restoreSearchTerm();}
ctrl.page=getPageNumber();ctrl.container=$(".search");runSearch(1,ctrl.page);function isGoingToProduct(oldPath,oldUrl){return oldUrl.includes("?search=1");}
HistoryService.rememberScrollPosition(isGoingToProduct,"search",function(){return document.querySelector(".search").scrollTop;});};ctrl.isAppActive=function(appName){return appName===$rootScope.appFilter?"active":"";};ctrl.isAppActiveSlug=function(){return ctrl.appList.find((filter)=>filter.name===$rootScope.appFilter).slug;};ctrl.isCategoryActive=function(categorySlug){return categorySlug===$rootScope.categoryFilter?"active":"";};ctrl.updateSoftwareFilter=function(appName){updateAppFilter(appName);runSearch(1);};ctrl.updateCategoryFilter=function(categorySlug){updateCategoryFilter(categorySlug);runSearch(1);};ctrl.onSearchInput=function(){runSearch(1);};ctrl.loadMore=function(){ctrl.loadingMore=true;runSearch(ctrl.page+1);};ctrl.closeSearch=function(){$rootScope.showSearch=false;$location.search("search",null);$("body").css("overflow-y","scroll");};ctrl.watchKeys=function(e){if(e.keyCode===27)return ctrl.closeSearch();};function resultsMessage(resultCount){return(resultCount>0?resultCount:"No")+" Products Found";}
function updateDisabled(resultsCount){ctrl.disabled=resultsCount<=ctrl.products.length;}
function runSearch(page,pages=0){const currentReq=++ctrl.requestNumber;ctrl.page=page;var category=keywords.exec($rootScope.searchTerm);updateSearchTerm($rootScope.searchTerm);if(category)
updateCategoryFilter(category[0].replace(/\s+/g,"-").toLowerCase());ctrl.searching=true;ctrl.disabled=true;if(page===1){ctrl.products=[];}
setPageNumber(page);var query={page:ctrl.page,search:$rootScope.searchTerm,count:productCount,getCount:true,sort:"popular",};if($rootScope.appFilter&&$rootScope.appFilter!=="Any Platform"){query.compatibility=$rootScope.appFilter;}
if($rootScope.categoryFilter&&$rootScope.categoryFilter!=="all"&&$rootScope.categoryFilter!=="freebies"){query.category=$rootScope.categoryFilter;}
if($rootScope.categoryFilter==="freebies"){query.freebie=true;}
return ProductService.list(query).then(function(response){if(ctrl.requestNumber!==currentReq){return;}
ctrl.products=ctrl.products.concat(response.products);ctrl.resultsMessage=resultsMessage(response.totalCount);updateDisabled(response.totalCount);ctrl.empty=!response.totalCount;if(page<pages){runSearch(++page,pages);}else if(pages!==0){setTimeout(function(){document.querySelector(".search").scrollTop=getTop();},0);}}).catch(function(e){console.error(e);updateDisabled(0);}).finally(function(){ctrl.searching=false;ctrl.loadingMore=false;});}
function updateCategoryFilter(val){val=val||sessionStorage.getItem("search:category-filter");$rootScope.categoryFilter=val||"any";sessionStorage.setItem("search:category-filter",$rootScope.categoryFilter);}
function updateAppFilter(val){val=val||sessionStorage.getItem("search:app-filter");$rootScope.appFilter=val||"Any Platform";sessionStorage.setItem("search:app-filter",$rootScope.appFilter);}
function restoreSearchTerm(){return sessionStorage.getItem("search:term")||"";}
function updateSearchTerm(val){sessionStorage.setItem("search:term",val);}
function setPageNumber(page){sessionStorage.setItem("search:page",page);}
function getPageNumber(){var page=sessionStorage.getItem("search:page")||1;sessionStorage.removeItem("search:page");return+page;}
function getTop(){var top=sessionStorage.getItem("top:search")||0;sessionStorage.removeItem("top:search");return parseInt(top,10);}},});angular.module("UI8.components").component("sessionModal",{template:`<div class="modal modal--auth" ng-class="$root.modalState" ui8-modal modal-body-class="session-modal" data-scroll-lock-scrollable>`+
`<button class="modal__close"></button>`+
`<div class="modal__container" ng-init="passwordHidden = true">`+
`<div class="auth" ng-if="$root.modalState === 'signup'">
      <div class="auth__background">
        <img src="/img/auth-sign-up.jpg" alt="Sign up" />
      </div>
      <div class="auth__container">
        <div class="auth__title" ng-if="!$ctrl.registrationSuccess">Create your account</div>
        <div class="auth__title" ng-if="$ctrl.registrationSuccess">Verify your email</div>
        <div class="auth__form" ng-if="!$ctrl.registrationSuccess">
          <input type="email" name="email-false" class="ng-hide">
          <input type="password" name="password-false" class="ng-hide">
          <div class="field">
            <div class="field__label">Full name</div>
            <input class="field__input" ng-class="{error: $ctrl.registerFullNameError}" placeholder="Jamie Davis" ng-keydown="$ctrl.registerFullNameError = false" type="text" name="full_name" ng-model="$ctrl.account.full_name" required>
          </div>
          <div class="field">
            <div class="field__label">Email</div>
            <input class="field__input" ng-class="{error: $ctrl.registerEmailError}" placeholder="designer@example.com" ng-keydown="$ctrl.registerEmailError = false" type="email" name="email" ng-model="$ctrl.account.email" ng-pattern="/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$/i" ng-disabled="$ctrl.disabled" required>
          </div>
          <div class="field">
            <div class="field__label">Password</div>
            <input class="field__input" ng-class="{error: $ctrl.registerPasswordError}" placeholder="password" ng-keydown="$ctrl.registerPasswordError = false" type="{{passwordHidden ? 'password' : 'text'}}" name="password" ng-model="$ctrl.account.password" ng-disabled="$ctrl.disabled" required>
              <button ng-click="passwordHidden = !passwordHidden" class="field__action">
              <svg ng-if="!passwordHidden" width="24" height="24"><path d="M12 4c4.517 0 7.994 2.902 10.426 6.753h0l.119.191.078.138.063.132a1.88 1.88 0 0 1 .112.339 2.16 2.16 0 0 1 0 .893 1.88 1.88 0 0 1-.112.339h0l-.063.132-.078.138-.119.192C19.994 17.098 16.517 20 12 20s-7.994-2.902-10.426-6.753h0l-.161-.264-.067-.129-.031-.068a1.88 1.88 0 0 1-.112-.339 2.16 2.16 0 0 1 0-.894 1.88 1.88 0 0 1 .112-.339 2.12 2.12 0 0 1 .063-.132h0l.078-.138.303-.479C4.181 6.759 7.597 4 12 4zm0 2c-3.646 0-6.633 2.494-8.735 5.821h0l-.111.178.293.463C5.538 15.647 8.459 18 12 18c3.646 0 6.634-2.494 8.735-5.821h0l.109-.181-.291-.46C18.463 8.353 15.542 6 12 6zm0 2a4 4 0 1 1 0 8 4 4 0 1 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"></path></svg>
              <svg ng-if="passwordHidden" width="24" height="24"><path d="M3.613 2.21l.094.083 3.652 3.649c.05.041.096.087.138.139l10.414 10.413c.058.046.112.1.16.16l3.636 3.639a1 1 0 0 1-1.32 1.497l-.094-.083-3.154-3.153C15.548 19.486 13.831 20 12 20c-4.404 0-7.819-2.759-10.241-6.466l-.303-.478-.078-.138a2.12 2.12 0 0 1-.063-.132 1.88 1.88 0 0 1-.112-.339 2.16 2.16 0 0 1 0-.894c.067-.293.141-.436.373-.802.947-1.499 2.153-2.952 3.618-4.143L2.293 3.707a1 1 0 0 1 1.32-1.497zm-.102 9.234l-.355.552V12l.111.179C5.367 15.506 8.355 18 12 18c1.282 0 2.504-.32 3.667-.918l-1.635-1.636A3.99 3.99 0 0 1 12 16a4 4 0 0 1-4-4 3.99 3.99 0 0 1 .554-2.031L6.617 8.032c-1.227.964-2.27 2.163-3.106 3.412zM12 4c4.517 0 7.994 2.902 10.426 6.753l.119.191.078.138.063.132a1.88 1.88 0 0 1 .112.339 2.16 2.16 0 0 1 0 .895c-.067.293-.142.436-.373.802a18.39 18.39 0 0 1-1.441 1.973 1 1 0 1 1-1.533-1.284c.397-.475.751-.951 1.061-1.414l.335-.52-.001-.007-.109-.177C18.634 8.494 15.646 6 12 6a7.59 7.59 0 0 0-1.111.082 1 1 0 1 1-.292-1.979C11.059 4.035 11.527 4 12 4zm-2 8a2 2 0 0 0 2 2c.178 0 .352-.023.518-.068l-2.451-2.45A2.01 2.01 0 0 0 10 12z"></path></svg>
            </button>
          </div>
          <button class="btn btn--submit" ng-if="!$ctrl.loading" ng-click="$ctrl.submitRegistration()">Create account</button>
          <div class="loader" ng-if="$ctrl.loading"></div>
        </div>
        <div class="auth__content auth__content--registered" ng-if="$ctrl.registrationSuccess">
          <p>Kindly verify your email address by checking your inbox and completing the setup of your account.</p>
          <p>Confirmation should arrive promptly, but in case of any delay, reach out to our support team for assistance.</p>
        </div>
        <div class="auth__hint">Already have an account? <button ng-click="$ctrl.updateState('login')">Sign in</button></div>
      </div>
    </div>`+
`<div class="auth" ng-if="$root.modalState === 'login' || $root.modalState === 'forgot'">
      <div class="auth__background">
        <img src="/img/auth-sign-in.jpg" alt="Sign in" />
      </div>
      <div class="auth__container" ng-if="$root.modalState === 'login'">
        <div class="auth__title">Sign in to your account</div>
        <div class="field">
          <div class="field__label">Email</div>
          <input class="field__input" ng-class="{error: $ctrl.loginEmailError}" placeholder="designer@example.com" ng-keydown="$ctrl.loginEmailError = false" type="email" name="email" ng-model="$ctrl.account.email" ng-pattern="/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$/i" required>
        </div>
        <div class="field">
          <div class="field__label">Password</div>
          <button class="field__link field__link--label" ng-click="$ctrl.updateState('forgot')">Forgot password?</button>
          <input class="field__input" ng-class="{error: $ctrl.loginPasswordError}" placeholder="password" ng-keydown="$ctrl.loginPasswordError = false" type="{{passwordHidden ? 'password' : 'text'}}" name="password" ng-model="$ctrl.account.password" required>
          <button ng-click="passwordHidden = !passwordHidden" class="field__action">
            <svg ng-if="!passwordHidden" width="24" height="24"><path d="M12 4c4.517 0 7.994 2.902 10.426 6.753h0l.119.191.078.138.063.132a1.88 1.88 0 0 1 .112.339 2.16 2.16 0 0 1 0 .893 1.88 1.88 0 0 1-.112.339h0l-.063.132-.078.138-.119.192C19.994 17.098 16.517 20 12 20s-7.994-2.902-10.426-6.753h0l-.161-.264-.067-.129-.031-.068a1.88 1.88 0 0 1-.112-.339 2.16 2.16 0 0 1 0-.894 1.88 1.88 0 0 1 .112-.339 2.12 2.12 0 0 1 .063-.132h0l.078-.138.303-.479C4.181 6.759 7.597 4 12 4zm0 2c-3.646 0-6.633 2.494-8.735 5.821h0l-.111.178.293.463C5.538 15.647 8.459 18 12 18c3.646 0 6.634-2.494 8.735-5.821h0l.109-.181-.291-.46C18.463 8.353 15.542 6 12 6zm0 2a4 4 0 1 1 0 8 4 4 0 1 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"></path></svg>
            <svg ng-if="passwordHidden" width="24" height="24"><path d="M3.613 2.21l.094.083 3.652 3.649c.05.041.096.087.138.139l10.414 10.413c.058.046.112.1.16.16l3.636 3.639a1 1 0 0 1-1.32 1.497l-.094-.083-3.154-3.153C15.548 19.486 13.831 20 12 20c-4.404 0-7.819-2.759-10.241-6.466l-.303-.478-.078-.138a2.12 2.12 0 0 1-.063-.132 1.88 1.88 0 0 1-.112-.339 2.16 2.16 0 0 1 0-.894c.067-.293.141-.436.373-.802.947-1.499 2.153-2.952 3.618-4.143L2.293 3.707a1 1 0 0 1 1.32-1.497zm-.102 9.234l-.355.552V12l.111.179C5.367 15.506 8.355 18 12 18c1.282 0 2.504-.32 3.667-.918l-1.635-1.636A3.99 3.99 0 0 1 12 16a4 4 0 0 1-4-4 3.99 3.99 0 0 1 .554-2.031L6.617 8.032c-1.227.964-2.27 2.163-3.106 3.412zM12 4c4.517 0 7.994 2.902 10.426 6.753l.119.191.078.138.063.132a1.88 1.88 0 0 1 .112.339 2.16 2.16 0 0 1 0 .895c-.067.293-.142.436-.373.802a18.39 18.39 0 0 1-1.441 1.973 1 1 0 1 1-1.533-1.284c.397-.475.751-.951 1.061-1.414l.335-.52-.001-.007-.109-.177C18.634 8.494 15.646 6 12 6a7.59 7.59 0 0 0-1.111.082 1 1 0 1 1-.292-1.979C11.059 4.035 11.527 4 12 4zm-2 8a2 2 0 0 0 2 2c.178 0 .352-.023.518-.068l-2.451-2.45A2.01 2.01 0 0 0 10 12z"></path></svg>
          </button>
        </div>
        <button class="btn btn--submit" ng-if="!$ctrl.loading" ng-click="$ctrl.submitLogin()">Sign in</button>
        <div class="loader" ng-if="$ctrl.loading"></div>
        <div class="auth__hint">Not registered? <button ng-click="$ctrl.updateState('signup')">Join us</button></div>
      </div>
      <div class="auth__container" ng-if="$root.modalState === 'forgot'">
        <div class="auth__title">Reset your password</div>
        <div class="auth__content">Your password reset link will be sent to the registered email address.</div>
        <div class="field">
          <div class="field__label">Email</div>
          <input class="field__input" ng-class="{ error: $ctrl.forgotEmailError }" placeholder="designer@example.com" ng-keydown="$ctrl.forgotEmailError = false" type="email" name="email" ng-model="$ctrl.account.email" ng-pattern="/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$/i" required>
        </div>
        <button class="btn btn--submit" ng-if="!$ctrl.loading" ng-click="$ctrl.submitForgot()">Reset password</button>
        <div class="loader" ng-if="$ctrl.loading"></div>
        <div class="auth__hint">Remembered your password? <button ng-click="$ctrl.updateState('login')">Sign in</button></div>
      </div>
    </div>`+
`</div><div class="modal__backdrop"></div></div>`,controller:function($rootScope,$window,$location,$http,FlashService){var ctrl=this;function validateEmail(email){var re=/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return re.test(email);}
function handleError(error){FlashService.set("error",error);}
function handleEnter(){switch($rootScope.modalState){case "signup":ctrl.submitRegistration();break;case "login":ctrl.submitLogin();break;case "forgot":ctrl.submitForgot();break;}}
ctrl.$onInit=function(){$rootScope.modalState=$rootScope.modalState||"login";ctrl.next=$location.path();ctrl.account=ctrl.account||{};$(document.body).on("keydown-enter",handleEnter);};ctrl.$onDestroy=function(){$(document.body).off("keydown-enter");};ctrl.updateState=function(newState){$rootScope.modalState=newState;};ctrl.submitLogin=function(){if(!validateEmail(ctrl.account.email))
return(ctrl.loginEmailError=true);if(!ctrl.account.password)return(ctrl.loginPasswordError=true);var rc=grecaptcha||window.grecaptcha;var rcKey=UI8.recaptchaSiteKey;if(!rc||!rcKey)
FlashService.set("error","Unable to process login. Please try again later.");rc.execute(rcKey,{action:"login"}).then(function(token){ctrl.loading=true;$http.post("/account/signin?json=1",{email:ctrl.account.email,password:ctrl.account.password,next:ctrl.next,rcToken:token,}).then(function(response){ctrl.loading=false;if(response.data.error)
return handleError(response.data.error);if(response.data.message)
FlashService.set("message",response.data.message);$window.location.reload();},function(error){ctrl.loading=false;if(error&&error.status===429){error="Too many login attempts. Wait 15 minutes and try again.";}
if(error&&error.message){return handleError(error.message);}else if(error&&typeof error==="string"){return handleError(error);}else{return handleError("Unable to login. Please try again.");}});}).catch(function(error){console.log(error);FlashService.set("error","Unable to process login. Please try again later.");});};ctrl.submitRegistration=function(){if(!ctrl.account.full_name)return(ctrl.registerFullNameError=true);if(!ctrl.account.email||!validateEmail(ctrl.account.email))
return(ctrl.registerEmailError=true);if(!ctrl.account.password)return(ctrl.registerPasswordError=true);var rc=grecaptcha||window.grecaptcha;var rcKey=UI8.recaptchaSiteKey;if(!rc||!rcKey)
FlashService.set("error","Unable to process registration. Please try again later.");ctrl.loading=true;rc.execute(rcKey,{action:"registration"}).then(function(token){var regexPattern=/\s+/g;var fullName=ctrl.account.full_name.trim().replace(regexPattern," ").split(" ");ctrl.account.first_name=fullName[0];ctrl.account.last_name=fullName[1]||"";$http.post("/account/register?json=1",{first_name:ctrl.account.first_name,last_name:ctrl.account.last_name,email:ctrl.account.email,password:ctrl.account.password,rcToken:token,}).then(function(response){ctrl.loading=false;if(response.data.error)
return handleError(response.data.error);ctrl.registrationSuccess=true;},function(error){ctrl.loading=false;handleError(error.data.error||error.error||"Unable to register. Please try again.");});}).catch(function(error){ctrl.loading=false;console.log(error);FlashService.set("error","Unable to process registration. Please try again later.");});};ctrl.submitForgot=function(){if(!ctrl.account.email||!validateEmail(ctrl.account.email))
return(ctrl.forgotEmailError=true);ctrl.loading=true;$http.post("/account/forgot?json=1",{email:ctrl.account.email,}).then(function(response){ctrl.loading=false;if(response.data.error)return handleError(response.data.error);$("body").removeClass("session-modal");FlashService.set("message","Check your inbox!");},function(error){ctrl.loading=false;handleError(error.data.error||error.error||"Unable to login. Please try again.");});};},});angular.module("UI8.components").component("topProducts",{template:`<div class="page page--featured">
      <div class="page__background">
         <img src="https://images.ui8.net/redesign/hero-featured.jpg" alt="Hero" />
      </div>
      <div class="page__container container">
        <div class="page__hero">
          <h1 class="page__title">Featured products</h1>
          <div class="page__description">Recently hand-picked resources with our seal of <span class="page__featured">approval</span></div>
        </div>
        <div class="layout">
          <div class="layout__sidebar">
            <div class="layout__nav">
              <button data-section='#{{ ::category.slug }}' class='layout__link' ng-repeat='category in ::$ctrl.data track by category.slug'>{{ ::category.name }}</button>
            </div>
          </div>
          <div class="layout__inner">
            <div class='featured' ng-repeat='category in ::$ctrl.data track by category.slug'>
              <div id='{{ ::category.slug }}' class='featured__anchor'></div>
              <div class='featured__head'>
                <h2 class='featured__subtitle'>{{ ::category.name }}</h2>
                <div class='featured__group'>
                   <div class='featured__content'>{{ $ctrl.content[category.slug] }}</div>
                   <a class='featured__btn btn' ng-href='/category/{{ ::category.slug }}'>View all</a>
                </div>
              </div>
              <div class="featured__catalog catalog catalog--three">
                <new-product-card ng-repeat="product in category.products track by product._id" product="::product" user="::$ctrl.user"></new-product-card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,controller:function($scope,HistoryService){var ctrl=this;this.$onInit=function(){document.title="Top UX & UI Design Resources — UI8";ctrl.content={"ui-kits":"Your ultimate design time-saver. With pre-made UI elements at your fingertips, you can focus on the creative side of your design work and not spend hours on the basics.","coded-templates":"Streamline your development process by providing a pre-existing structure that can be easily modified and reused, saving time and effort while promoting consistency, leading to more efficient development workflows.",illustrations:"The cherry on top of any boring project. Thoughtful illustrations add some much-needed personality and zing to your message, making your projects more memorable and way more fun.","3d-assets":"Need depth and spatial awareness in your designs? Our growing library of 3D assets can convey a sense of realism and tangibility that engages and immerses users in a whole new way.",mockups:"By showcasing your product or website in a tangible form, you can effectively communicate your vision to clients or stakeholders, making it easier for them to understand and appreciate your work.",icons:"Effective user interface design relies on a consistent visual language that can convey meaning quickly and clearly. Our extensive collection of icon sets can help you nail down this critical aspect of your design process.","wireframe-kits":"The superhero sidekick of design, that gives you the essential building blocks needed to quickly prototype and iterate, all while maintaining a consistent and professional visual aesthetic.",themes:"Stuck on a creative block? Get inspired by a wide selection of themes to help you effortlessly create polished digital experiences for a wide array of use cases, it’s like a Swiss army knife in your arsenal.",fonts:"Good design cannot exist without great typography. Our curated font collection provides a structure that saves you time and effort while promoting consistency, resulting in more efficient and cohesive flow in your designs.",};const $header=$(".header"),$sidebar=$(".layout__sidebar"),$layout=$(".layout");$(window).scroll(function(){const posScroll=$(window).scrollTop();if(posScroll+$header.outerHeight()>=$layout.offset().top){$sidebar.addClass("scrolled");}else{$sidebar.removeClass("scrolled");}});const top=getTop();$(document).ready(function(){window.scroll(0,top);const page=$(".page--featured"),link=page.find(".layout__link"),anchor=page.find(".featured__anchor");link.eq(0).addClass("active");link.on("click",function(e){e.preventDefault();const id=$(this).data("section");window.scroll(0,$(id).offset().top);});$(window).scroll(function(){const posScroll=$(window).scrollTop();anchor.each(function(i){const posTop=$(this).offset().top,height=$(this).parent().outerHeight(),windowHeight=$(window).height();if(posScroll+windowHeight/2>posTop&&posScroll+windowHeight/2<posTop+height){link.removeClass("active").eq(i).addClass("active");}});});});function isGoingToProduct(oldPath,oldUrl){return(oldPath.startsWith("/category/featured-products")&&!oldUrl.includes("?search=1"));}
HistoryService.rememberScrollPosition(isGoingToProduct,"featured");};function getTop(){const top=sessionStorage.getItem("top:featured")||0;sessionStorage.removeItem("top:featured");return parseInt(top,10);}},bindings:{data:"<",user:"<",},});angular.module("UI8.components").component("userProfile",{template:`<div class="profile" ng-if="!$ctrl.private && !$ctrl.not_found">
    <div class="profile__header">
      <div class="profile__container container">
        <div class="profile__inner">
          <div class="profile__avatar" ui8-avatar="$ctrl.data.profile"></div>
          <div class="profile__details">
            <div class="profile__line">
              <h1 class="profile__name" ng-if="$ctrl.data.profile.display_name">{{ $ctrl.data.profile.display_name }}</h1>
              <h1 class="profile__name" ng-if="!$ctrl.data.profile.display_name">{{ $ctrl.data.profile.first_name }} {{ $ctrl.data.profile.last_name }}</h1>
              <div class="profile__role profile__badge--admin" ng-if="$ctrl.data.profile.role === 'admin' && $ctrl.data.profile.display_name !== 'UI8'">Admin</div>
              <div class="profile__role" ng-if="$ctrl.data.products">Author</div>
              <div class="profile__role profile__role--follow" ng-if="$ctrl.data.follows_you">Follows you</div>
            </div>
            <div class="profile__bio" ng-bind-html="$ctrl.data.profile.biography"></div>
          </div>
        </div>
        <div class="profile__actions">
          <div class="profile__group ng-cloak">
            <button class="btn btn--stroke" ng-class="{active: $ctrl.tab === 'products'}" ng-if="$ctrl.data.products && $ctrl.data.products.length" ng-click="$ctrl.tab = 'products'">
              Products
              <span>{{ $ctrl.data.productCount || 0 }}</span>
            </button>
            <button class="btn btn--stroke" ng-class="{active: $ctrl.tab === 'followers'}" ng-if="$ctrl.data.profile.followers_sum !== 0" ng-click="$ctrl.tab = 'followers'">
              Followers
              <span>{{ $ctrl.data.profile.followers_sum || 0 }}</span>
            </button>
            <button class="btn btn--stroke" ng-class="{active: $ctrl.tab === 'following'}" ng-if="$ctrl.data.profile.following_sum !== 0" ng-click="$ctrl.tab = 'following'">
              Following
              <span>{{ $ctrl.data.profile.following_sum || 0 }}</span>
            </button>
            <button class="btn btn--stroke" ng-class="{active: $ctrl.tab === 'favorites'}" ng-if="$ctrl.data.profile.favorites_sum !== 0" ng-click="$ctrl.tab = 'favorites'">
              Favorites
              <span>{{ $ctrl.data.profile.favorites_sum || 0 }}</span>
            </button>
          </div>
          <div class="profile__group">
            <button class="btn btn--green" ng-if="!$ctrl.user && $ctrl.data.profile.for_hire" ng-click="$root.modalState = 'signup'" ui8-toggle-class="session-modal">Hire</button>
            <button class="btn btn--green" ng-if="$ctrl.user && !$ctrl.ownProfile && $ctrl.data.profile.for_hire" ui8-toggle-class="hire-modal" ui8-track-event="Open Hire Modal">Hire</button>
            <button class="btn" ng-if="$ctrl.user && !$ctrl.ownProfile" ui8-follow-button="{{$ctrl.data.profile._id}}">Follow</button>
            <button class="btn" ng-if="!$ctrl.user && !$ctrl.ownProfile" ng-click="$root.modalState = 'signup'" ui8-toggle-class="session-modal">Follow</button>
            <a class="btn btn--stroke" ng-if="$ctrl.user && $ctrl.ownProfile" href="/account/settings">Edit profile</a>
          </div>
        </div>
      </div>
    </div>
    <div class="profile__body">
      <div class="container">
        <div ng-if="$ctrl.tab === 'followers'">
          <div class="profile__message" ng-if="!$ctrl.data.profile.followers_sum">
            {{ $ctrl.ownProfile ? 'You do not' : 'This user does not' }} have any followers yet, here are some of our top designers...
          </div>
          <div class="users" ng-if="$ctrl.followers">
            <div class="users__inner">
              <div class="users__list">
                <list-user ng-repeat="f in $ctrl.followers track by $index" ng-hide="!f" profile="f" user="$ctrl.user"></list-user>
              </div>
            </div>
            <div class="users__foot" ng-if="$ctrl.followers.length < $ctrl.data.profile.followers_sum">
              <button class="btn btn--stroke" ng-click="$ctrl.moreFollowers()">Load more</button>
            </div>
          </div>
        </div>
        <div ng-if="$ctrl.tab === 'following'">
          <div class="profile__message" ng-if="!$ctrl.data.profile.following_sum">
            {{ $ctrl.ownProfile ? 'You are' : 'This user is' }} not following anyone yet, here are some of our top designers...
          </div>
          <div class="users" ng-if="$ctrl.following">
            <div class="users__inner">
              <div class="users__list">
                <list-user ng-repeat="f in $ctrl.following track by $index" profile="f" user="$ctrl.user"></list-user>
              </div>
            </div>
            <div class="users__foot" ng-if="$ctrl.following.length < $ctrl.data.profile.following_sum">
              <button class="btn btn--stroke" ng-click="$ctrl.moreFollowing()">Load more</button>
            </div>
          </div>
        </div>
        <div ng-if="$ctrl.data.favorites && $ctrl.tab === 'favorites'">
          <div class="profile__message" ng-if="!$ctrl.data.favoritesCount">
            {{ $ctrl.ownProfile ? 'You do not' : 'This user does not' }} have any favorites yet, here are some of our most popular products...
          </div>
          <div class="profile__catalog catalog">
            <new-product-card ng-repeat="product in $ctrl.data.favorites track by $index" product="product" user="$ctrl.user"></new-product-card>
          </div>
          <div class="profile__foot" ng-if="$ctrl.data.favorites.length < $ctrl.data.favoritesCount">
            <button class="btn" ng-if="!$ctrl.loading" ng-click="$ctrl.moreFavorites()">Load more</button>
            <div class="loader loader--small" ng-if="$ctrl.loading"></div>
          </div>
        </div>
        <div ng-if="$ctrl.data.products && $ctrl.tab === 'products'">
          <div class="profile__catalog catalog">
            <new-product-card ng-repeat="product in $ctrl.data.products track by $index" product="product" user="$ctrl.user" link-query="'?browse=author'"></new-product-card>
          </div>
          <div class="profile__foot" ng-if="$ctrl.data.products.length < $ctrl.data.productCount">
            <button class="btn" ng-if="!$ctrl.loading" ng-click="$ctrl.moreProducts()">Load more</button>
            <div class="loader loader--small" ng-if="$ctrl.loading">
          </div>
        </div>
      </div>
    </div>
    <hire-modal ng-if='$ctrl.data.profile.for_hire' author='$ctrl.data.profile' success='$ctrl.hire_message_success'></hire-modal>
  </div>`,controller:function(UserService,ProductService){var ctrl=this;ctrl.$onInit=function(){if(!ctrl.data.profile.biography)
ctrl.data.profile.biography="I haven&apos;t changed my bio yet!";ctrl.followersPage=1;ctrl.followingPage=1;ctrl.productsPage=1;ctrl.favoritesPage=1;ctrl.ownProfile=ctrl.user?ctrl.data.profile._id===ctrl.user._id:false;var urlParams=new URLSearchParams(window.location.search);var hashCollection=/#([a-z]+)/i.exec(window.location.hash);var hashValue=hashCollection&&Array.isArray(hashCollection)&&hashCollection[1];var hasProducts=ctrl.data.products&&ctrl.data.products.length;switch(hashValue){case "favorites":ctrl.tab="favorites";break;case "followers":ctrl.tab="followers";break;case "following":ctrl.tab="following";break;default:ctrl.tab=hasProducts?"products":"favorites";break;}
if(urlParams.has("success")){ctrl.hire_message_success=parseInt(urlParams.get("success"));$("body").addClass("hire-modal");}};ctrl.moreFollowers=function(){ctrl.followersPage+=1;UserService.followers(ctrl.data.profile._id,ctrl.followersPage).then(function(response){ctrl.followers=ctrl.followers.concat(response);});};ctrl.moreFollowing=function(){ctrl.followingPage+=1;UserService.following(ctrl.data.profile._id,ctrl.followingPage).then(function(response){ctrl.following=ctrl.following.concat(response);});};ctrl.moreProducts=function(){ctrl.loading=true;ctrl.productsPage+=1;ProductService.list({author:ctrl.data.profile._id,page:ctrl.productsPage,}).then(function(response){ctrl.loading=false;ctrl.data.products=ctrl.data.products.concat(response.products);if(response.products.length<24)
ctrl.data.productCount=ctrl.data.products.length;}).catch(function(){ctrl.loading=false;});};ctrl.moreFavorites=function(){ctrl.loading=true;ctrl.favoritesPage+=1;UserService.favorites(ctrl.data.profile._id,ctrl.favoritesPage).then(function(response){ctrl.loading=false;ctrl.data.favorites=ctrl.data.favorites.concat(response);if(response.length<48)
ctrl.data.favoritesCount=ctrl.data.favorites.length;}).catch(function(){ctrl.loading=false;});};},bindings:{data:"<",user:"<",following:"<",followers:"<",},});angular.module("UI8.components").component("accountPurchases",{template:`<div class="page page--additional" ng-if="$ctrl.hasPurchases">
      <div class="page__container container">
        <div class="page__hero">
          <h1 class="page__title">Your purchases</h1>
          <div class="page__description">Manage your subscriptions, downloads and invoices.</div>
        </div>
        <div class="purchases">
          <div class="purchases__list">
            <pass-tile ng-repeat="subscription in $ctrl.data.subscriptions" subscription="subscription" index="$index" settings="$ctrl.settings" on-card-remove="$ctrl.onCardRemove()"></pass-tile>
            <order-item ng-repeat="item in $ctrl.nonBundleItems" item="item" user="$ctrl.data.user"></order-item>
            <order-item ng-repeat="item in $ctrl.bundleItems" item="item" user="$ctrl.data.user"></order-item>
          </div>
        </div>
      </div>
    </div>
    <div class="spage" ng-if="!$ctrl.hasPurchases">
      <div class="spage__background">
        <img src="/img/no-purchases.jpg" alt="Oops!">
      </div>
      <div class="spage__container">
        <div class="spage__title">No purchases yet.</div>
        <div class="spage__content">Your products and subscriptions will appear on this page once you make any purchases.</div>
        <a href="/category/featured-products" class="btn btn--submit">Explore products</a>
      </div>
      <div class="spage__copyright">© 2023, UI8 LLC.</div>
    </div>`,controller:function($cookies,ProductService,PushService,CartService,AccountService,PaymentService,SessionService,FlashService){var ctrl=this;ctrl.$onInit=function(){ctrl.loading=false;ctrl.tab="products";ctrl.page=1;ctrl.hasPurchases=ctrl.data.subscriptions||ctrl.data.items||ctrl.data.jobs;ctrl.hasNonJobs=ctrl.data.subscriptions||ctrl.data.items;ctrl.hasJobs=ctrl.data.jobs;ctrl.nonBundleItems=ctrl.data.items?ctrl.data.items.filter(function(i){return i.product.type!=="bundle";}):null;ctrl.bundleItems=ctrl.data.items?ctrl.data.items.filter(function(i){return i.product.type==="bundle";}):null;ctrl.addPassToCart=function(){CartService.addPassToCart("55314fb422912718375a0196",1);};AccountService.settings().then((response)=>{ctrl.settings=response;});ctrl.showInviteModal=$cookies.get("showAddTeam");ctrl.onCardRemove=function(){PaymentService.stripeCardRemove(ctrl.settings.user.stripe_customer,ctrl.settings.defaultCard.id).then(()=>{ctrl.settings.defaultCard=null;SessionService.setCurrentUser();FlashService.set("message","Auto-renewal for the All-Access Pass has been canceled and you will no longer be billed");}).catch(()=>{FlashService.set("error","Unable to cancel auto-renewal. Please contact support");});};if(ctrl.showInviteModal){$("body").addClass("invite-team-modal");$cookies.remove("showAddTeam");}
initPushNotificationHandler();};ctrl.next=function(){ctrl.paginating=true;return getPage(ctrl.page+1);};function getPage(page){if(ctrl.loading){return;}
ctrl.loading=true;ctrl.page=page;if(page===1){ctrl.data.products=[];}
var options={sort:"recent",page:ctrl.page,};ProductService.list(options).then(function(response){ctrl.data.products=ctrl.data.products.concat(response.products);}).finally(function(){ctrl.loading=false;ctrl.paginating=false;});}
ctrl.getCardBackground=function(item){return{"background-image":"url("+item.product.card_image+")"};};function initPushNotificationHandler(){if(!("serviceWorker"in navigator))return;if(!("PushManager"in window))return;PushService.setUpPush().then(function(subscription){ctrl.pushSubscription=subscription;return new Promise(function(resolve){resolve(subscription);});}).then(function(subscription){if(!subscription){return PushService.subscribe();}else{return new Promise(function(resolve){resolve(subscription);});}}).then(function(subscription){ctrl.pushSubscription=subscription;}).catch(function(){ctrl.pushSubscription=null;});}},bindings:{data:"<",},});angular.module("UI8.components").component("accountSettings",{template:`<div class="page page--additional">
      <div class="page__container container">
        <div class="page__hero">
          <h1 class="page__title">Account settings</h1>
          <div class="page__description">Manage your profile, security, payment and notification settings.</div>
        </div>
        <div class="layout layout--static layout--small">
          <div class="layout__sidebar">
            <div class="layout__nav">
              <a href="/account/settings?open=profile" class="layout__link" ng-class="{ active: $ctrl.openPane === 'profile' }" ng-click="$ctrl.activeSection('profile')">Profile</a>
              <a href="/account/settings?open=password" class="layout__link" ng-class="{ active: $ctrl.openPane === 'password' }" ng-click="$ctrl.activeSection('password')">Security</a>
              <a href="/account/settings?open=payment" class="layout__link" ng-class="{ active: $ctrl.openPane === 'payment' }" ng-click="$ctrl.activeSection('payment')">Payment methods</a>
              <a href="/account/settings?open=notifications" class="layout__link" ng-class="{ active: $ctrl.openPane === 'notifications' }" ng-click="$ctrl.activeSection('notifications')">Notifications</a>
              <a href="/account/settings?open=deleting" class="layout__link" ng-class="{ active: $ctrl.openPane === 'deleting' }" ng-click="$ctrl.activeSection('deleting')">Delete account</a>
            </div>
          </div>
          <div class="layout__inner">
            <div class="account">
              <div class="account__section" ng-class="{ visible: $ctrl.openPane === 'profile' }">
                <form method="POST" action="/account/settings/update" ng-submit="$ctrl.isSubmitting = true" ui8-form-control novalidate>
                  <div class="account__title">Avatar</div>
                  <div class="account__content">Update your avatar by clicking the image below. 288x288 px size recommended in PNG or JPG format only.</div>
                  <div class="account__upload">
                    <input type="hidden" name="avatar_url" value="{{ $ctrl.upload.url || $ctrl.data.user.avatar_url || ''}}">
                    <div class="account__preview">
                      <svg width="56" height="56" ng-if="!$ctrl.upload.processing && (!$ctrl.upload.url || !$ctrl.data.user.avatar_url)">
                        <path d="M28 36.993c8.359 0 16.204 3.56 22.091 9.804a1.5 1.5 0 1 1-2.183 2.058C42.574 43.198 35.512 39.993 28 39.993s-14.574 3.205-19.909 8.862a1.5 1.5 0 1 1-2.183-2.058c5.888-6.245 13.733-9.804 22.091-9.804zM28 6.66c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm0 3a9 9 0 1 1 0 18 9 9 0 1 1 0-18z"/>
                      </svg>
                      <div class="account__avatar" ng-if="!$ctrl.upload.processing && ($ctrl.upload.url || $ctrl.data.user.avatar_url)">
                        <img ng-if="!$ctrl.upload.completed && !$ctrl.upload.url && $ctrl.data.user.avatar_url" ng-src="{{$ctrl.data.user.avatar_url}}" alt="Avatar"/>
                        <img ng-if="$ctrl.upload.completed && $ctrl.upload.url" ng-src="{{$ctrl.upload.url}}" alt="Avatar"/>
                      </div>
                      <div class="loader" ng-if="$ctrl.upload.processing"></div>
                      <div class="account__uploader" ng-model="$ctrl.upload" ui8-upload ui8-upload-max-size="10000" ui8-upload-complete="$ctrl.avatarComplete" accept=".png,.jpg"></div>
                      <button class="btn btn--stroke btn--icon-only" ng-if="$ctrl.data.user.avatar_url || $ctrl.upload.completed" ng-click="$ctrl.data.user.avatar_url = ''; $ctrl.upload = [];">
                        <svg><path d="M6.988 5.585l.094.083L12 10.585l4.918-4.917a1 1 0 0 1 1.497 1.32l-.083.094L13.415 12l4.917 4.918a1 1 0 0 1-1.32 1.497l-.094-.083L12 13.415l-4.918 4.917a1 1 0 0 1-1.497-1.32l.083-.094L10.585 12 5.668 7.082a1 1 0 0 1 1.219-1.567l.101.069z"/></svg>
                      </button>
                    </div>
                  </div>
                  <div class="account__title mb-34">Details</div>
                  <div class="field">
                    <div class="field__label">First name</div>
                    <input class="field__input tab-first-name" type="text" name="first_name" ng-model="$ctrl.data.user.first_name" required>
                  </div>
                  <div class="field">
                    <div class="field__label">Last name</div>
                    <input class="field__input" type="text" name="last_name" ng-model="$ctrl.data.user.last_name" required>
                  </div>
                  <div class="field">
                    <div class="field__label">Email</div>
                    <input class="field__input" type="email" name="email" ng-model="$ctrl.data.user.email" ng-pattern="/^[_a-z0-9-]+(.[_a-z0-9-]+)*@[a-z0-9-]+(.[a-z0-9-]+)*(.[a-z]{2,15})$/i" required>
                  </div>
                  <div class="field">
                    <div class="field__label">Display name</div>
                    <input class="field__input" type="text" name="display_name" ng-model="$ctrl.data.user.display_name">
                  </div>
                  <div class="field mb-48">
                    <div class="field__label">Short bio</div>
                    <textarea class="field__textarea" ng-model="$ctrl.data.user.biography" name="biography" ng-maxlength="65"></textarea>
                    <input type="text" ui8-go-tab=".tab-first-name" />
                  </div>
                  <div class="account__head">
                    <div class="account__title">Privacy</div>
                    <div class="toggle" ng-class="{active: $ctrl.data.user.private_profile}" ng-if="$ctrl.data.user.affiliate_type.indexOf('reseller') === -1" ng-click="$ctrl.data.user.private_profile = !$ctrl.data.user.private_profile">
                      Disabled
                    </div>
                    <input type="hidden" name="private_profile" value="{{$ctrl.data.user.private_profile}}">
                  </div>
                  <div class="account__content">Enabling privacy will hide your profile, only you will be able to see it. Not recommended if you’re an author.</div>
                  <div class="account__foot">
                    <button class="btn btn--submit" ng-if="!$ctrl.isSubmitting" type="submit">Save changes</button>
                    <div class="loader" ng-if="$ctrl.isSubmitting"></div>
                  </div>
                </form>
              </div>
              <div class="account__section" ng-class="{ visible: $ctrl.openPane === 'password' }">
                <div class="account__title">Update your password</div>
                <div class="account__content mb-34">You can update your password below. If you forgot your current password please contact support for assistance.</div>
                <form name="resetPassword" method="POST" action="/account/password/reset" ng-submit="$ctrl.isSubmitting = true" ui8-form-control novalidate>
                  <div class="field" ng-init="currentPasswordHidden = false">
                    <div class="field__label">Current password</div>
                    <input class="field__input tab-current-password" ng-class="{error: !byOrder && ($ctrl.currentPasswordError || (resetPassword.current.$invalid && resetPassword.$submitted))}" type="{{ currentPasswordHidden ? 'text' : 'password' }}" name="current" ng-model="$ctrl.password.current" placeholder="Current password" ng-required="!$ctrl.byOrder">
                    <button tabindex="-1" class="field__action" type="button" ng-click="currentPasswordHidden = !currentPasswordHidden">
                      <svg ng-if="currentPasswordHidden" width="24" height="24"><path d="M12 4c4.517 0 7.994 2.902 10.426 6.753h0l.119.191.078.138.063.132a1.88 1.88 0 0 1 .112.339 2.16 2.16 0 0 1 0 .893 1.88 1.88 0 0 1-.112.339h0l-.063.132-.078.138-.119.192C19.994 17.098 16.517 20 12 20s-7.994-2.902-10.426-6.753h0l-.161-.264-.067-.129-.031-.068a1.88 1.88 0 0 1-.112-.339 2.16 2.16 0 0 1 0-.894 1.88 1.88 0 0 1 .112-.339 2.12 2.12 0 0 1 .063-.132h0l.078-.138.303-.479C4.181 6.759 7.597 4 12 4zm0 2c-3.646 0-6.633 2.494-8.735 5.821h0l-.111.178.293.463C5.538 15.647 8.459 18 12 18c3.646 0 6.634-2.494 8.735-5.821h0l.109-.181-.291-.46C18.463 8.353 15.542 6 12 6zm0 2a4 4 0 1 1 0 8 4 4 0 1 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"/></svg>
                      <svg ng-if="!currentPasswordHidden" width="24" height="24"><path d="M3.613 2.21l.094.083 3.652 3.649c.05.041.096.087.138.139l10.414 10.413c.058.046.112.1.16.16l3.636 3.639a1 1 0 0 1-1.32 1.497l-.094-.083-3.154-3.153C15.548 19.486 13.831 20 12 20c-4.404 0-7.819-2.759-10.241-6.466l-.303-.478-.078-.138a2.12 2.12 0 0 1-.063-.132 1.88 1.88 0 0 1-.112-.339 2.16 2.16 0 0 1 0-.894c.067-.293.141-.436.373-.802.947-1.499 2.153-2.952 3.618-4.143L2.293 3.707a1 1 0 0 1 1.32-1.497zm-.102 9.234l-.355.552V12l.111.179C5.367 15.506 8.355 18 12 18c1.282 0 2.504-.32 3.667-.918l-1.635-1.636A3.99 3.99 0 0 1 12 16a4 4 0 0 1-4-4 3.99 3.99 0 0 1 .554-2.031L6.617 8.032c-1.227.964-2.27 2.163-3.106 3.412zM12 4c4.517 0 7.994 2.902 10.426 6.753l.119.191.078.138.063.132a1.88 1.88 0 0 1 .112.339 2.16 2.16 0 0 1 0 .895c-.067.293-.142.436-.373.802a18.39 18.39 0 0 1-1.441 1.973 1 1 0 1 1-1.533-1.284c.397-.475.751-.951 1.061-1.414l.335-.52-.001-.007-.109-.177C18.634 8.494 15.646 6 12 6a7.59 7.59 0 0 0-1.111.082 1 1 0 1 1-.292-1.979C11.059 4.035 11.527 4 12 4zm-2 8a2 2 0 0 0 2 2c.178 0 .352-.023.518-.068l-2.451-2.45A2.01 2.01 0 0 0 10 12z"/></svg>
                    </button>
                    <div class="field__error" ng-if="resetPassword.current.$invalid && resetPassword.$submitted">Required field</div>
                    <div class="field__error" ng-if="$ctrl.currentPasswordError">Incorrect password</div>
                  </div>
                  <div class="field" ng-init="newPasswordHidden = false">
                    <div class="field__label">New password</div>
                    <input class="field__input" ng-class="{error: resetPassword.new.$invalid && resetPassword.$submitted}" type="{{ newPasswordHidden ? 'text' : 'password' }}" name="new" ng-model="$ctrl.password.new" placeholder="New password" required>
                    <button tabindex="-1" class="field__action" type="button" ng-click="newPasswordHidden = !newPasswordHidden">
                      <svg ng-if="newPasswordHidden" width="24" height="24"><path d="M12 4c4.517 0 7.994 2.902 10.426 6.753h0l.119.191.078.138.063.132a1.88 1.88 0 0 1 .112.339 2.16 2.16 0 0 1 0 .893 1.88 1.88 0 0 1-.112.339h0l-.063.132-.078.138-.119.192C19.994 17.098 16.517 20 12 20s-7.994-2.902-10.426-6.753h0l-.161-.264-.067-.129-.031-.068a1.88 1.88 0 0 1-.112-.339 2.16 2.16 0 0 1 0-.894 1.88 1.88 0 0 1 .112-.339 2.12 2.12 0 0 1 .063-.132h0l.078-.138.303-.479C4.181 6.759 7.597 4 12 4zm0 2c-3.646 0-6.633 2.494-8.735 5.821h0l-.111.178.293.463C5.538 15.647 8.459 18 12 18c3.646 0 6.634-2.494 8.735-5.821h0l.109-.181-.291-.46C18.463 8.353 15.542 6 12 6zm0 2a4 4 0 1 1 0 8 4 4 0 1 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"/></svg>
                      <svg ng-if="!newPasswordHidden" width="24" height="24"><path d="M3.613 2.21l.094.083 3.652 3.649c.05.041.096.087.138.139l10.414 10.413c.058.046.112.1.16.16l3.636 3.639a1 1 0 0 1-1.32 1.497l-.094-.083-3.154-3.153C15.548 19.486 13.831 20 12 20c-4.404 0-7.819-2.759-10.241-6.466l-.303-.478-.078-.138a2.12 2.12 0 0 1-.063-.132 1.88 1.88 0 0 1-.112-.339 2.16 2.16 0 0 1 0-.894c.067-.293.141-.436.373-.802.947-1.499 2.153-2.952 3.618-4.143L2.293 3.707a1 1 0 0 1 1.32-1.497zm-.102 9.234l-.355.552V12l.111.179C5.367 15.506 8.355 18 12 18c1.282 0 2.504-.32 3.667-.918l-1.635-1.636A3.99 3.99 0 0 1 12 16a4 4 0 0 1-4-4 3.99 3.99 0 0 1 .554-2.031L6.617 8.032c-1.227.964-2.27 2.163-3.106 3.412zM12 4c4.517 0 7.994 2.902 10.426 6.753l.119.191.078.138.063.132a1.88 1.88 0 0 1 .112.339 2.16 2.16 0 0 1 0 .895c-.067.293-.142.436-.373.802a18.39 18.39 0 0 1-1.441 1.973 1 1 0 1 1-1.533-1.284c.397-.475.751-.951 1.061-1.414l.335-.52-.001-.007-.109-.177C18.634 8.494 15.646 6 12 6a7.59 7.59 0 0 0-1.111.082 1 1 0 1 1-.292-1.979C11.059 4.035 11.527 4 12 4zm-2 8a2 2 0 0 0 2 2c.178 0 .352-.023.518-.068l-2.451-2.45A2.01 2.01 0 0 0 10 12z"/></svg>
                    </button>
                    <div class="field__error" ng-if="resetPassword.new.$invalid && resetPassword.$submitted">Required field</div>
                  </div>
                  <div class="field" ng-init="confirmPasswordHidden = false">
                    <div class="field__label">Confirm new password</div>
                    <input class="field__input" ng-class="{error: resetPassword.new_confirm.$invalid && resetPassword.$submitted || resetPassword.new_confirm.$error.ui8Compare && resetPassword.new_confirm.$viewValue}" type="{{ confirmPasswordHidden ? 'text' : 'password' }}" name="new_confirm" ng-model="$ctrl.password.new_confirm" ui8-compare="$ctrl.password.new" placeholder="Confirm new password" required>
                    <input type="text" ui8-go-tab=".tab-current-password" />
                    <button tabindex="-1" class="field__action" type="button" ng-click="confirmPasswordHidden = !confirmPasswordHidden">
                      <svg ng-if="confirmPasswordHidden" width="24" height="24"><path d="M12 4c4.517 0 7.994 2.902 10.426 6.753h0l.119.191.078.138.063.132a1.88 1.88 0 0 1 .112.339 2.16 2.16 0 0 1 0 .893 1.88 1.88 0 0 1-.112.339h0l-.063.132-.078.138-.119.192C19.994 17.098 16.517 20 12 20s-7.994-2.902-10.426-6.753h0l-.161-.264-.067-.129-.031-.068a1.88 1.88 0 0 1-.112-.339 2.16 2.16 0 0 1 0-.894 1.88 1.88 0 0 1 .112-.339 2.12 2.12 0 0 1 .063-.132h0l.078-.138.303-.479C4.181 6.759 7.597 4 12 4zm0 2c-3.646 0-6.633 2.494-8.735 5.821h0l-.111.178.293.463C5.538 15.647 8.459 18 12 18c3.646 0 6.634-2.494 8.735-5.821h0l.109-.181-.291-.46C18.463 8.353 15.542 6 12 6zm0 2a4 4 0 1 1 0 8 4 4 0 1 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 1 0 0-4z"/></svg>
                      <svg ng-if="!confirmPasswordHidden" width="24" height="24"><path d="M3.613 2.21l.094.083 3.652 3.649c.05.041.096.087.138.139l10.414 10.413c.058.046.112.1.16.16l3.636 3.639a1 1 0 0 1-1.32 1.497l-.094-.083-3.154-3.153C15.548 19.486 13.831 20 12 20c-4.404 0-7.819-2.759-10.241-6.466l-.303-.478-.078-.138a2.12 2.12 0 0 1-.063-.132 1.88 1.88 0 0 1-.112-.339 2.16 2.16 0 0 1 0-.894c.067-.293.141-.436.373-.802.947-1.499 2.153-2.952 3.618-4.143L2.293 3.707a1 1 0 0 1 1.32-1.497zm-.102 9.234l-.355.552V12l.111.179C5.367 15.506 8.355 18 12 18c1.282 0 2.504-.32 3.667-.918l-1.635-1.636A3.99 3.99 0 0 1 12 16a4 4 0 0 1-4-4 3.99 3.99 0 0 1 .554-2.031L6.617 8.032c-1.227.964-2.27 2.163-3.106 3.412zM12 4c4.517 0 7.994 2.902 10.426 6.753l.119.191.078.138.063.132a1.88 1.88 0 0 1 .112.339 2.16 2.16 0 0 1 0 .895c-.067.293-.142.436-.373.802a18.39 18.39 0 0 1-1.441 1.973 1 1 0 1 1-1.533-1.284c.397-.475.751-.951 1.061-1.414l.335-.52-.001-.007-.109-.177C18.634 8.494 15.646 6 12 6a7.59 7.59 0 0 0-1.111.082 1 1 0 1 1-.292-1.979C11.059 4.035 11.527 4 12 4zm-2 8a2 2 0 0 0 2 2c.178 0 .352-.023.518-.068l-2.451-2.45A2.01 2.01 0 0 0 10 12z"/></svg>
                    </button>
                    <div class="field__error" ng-if="resetPassword.new_confirm.$invalid && resetPassword.$submitted">Required field</div>
                    <div class="field__error" ng-if="resetPassword.new_confirm.$error.ui8Compare && resetPassword.new_confirm.$viewValue">Passwords do not match</div>
                  </div>
                  <div class="account__foot">
                    <button class="btn btn--submit" ng-if="!$ctrl.isSubmitting" type="submit">Save changes</button>
                    <div class="loader" ng-if="$ctrl.isSubmitting"></div>
                  </div>
                </form>
              </div>
              <div class="account__section" ng-class="{ visible: $ctrl.openPane === 'payment' }">
                <div class="account__step" ng-if="!$ctrl.newCardActive && $ctrl.data.cards">
                  <div class="account__title">Saved cards</div>
                  <div class="account__content mb-34">Manage your stored cards for a more seamless shopping experience. Your card details are secured and encrypted by Stripe.</div>
                  <div class="field" ng-class="{ active: $index === 0 }" ng-repeat="card in $ctrl.data.cards track by $index">
                    <div class="field__label">Card {{ $index + 1 }}</div>
                    <form method="POST" action="/account/payment/remove">
                      <input type="hidden" name="customer" value="{{card.customer}}">
                      <input type="hidden" name="card" value="{{card.id}}">
                      <button class="field__link field__link--label" type="submit">Remove</button>
                    </form>
                    <div class="field__groups">
                      <div class="field__group field__group--first">
                        <div class="field__input">
                          <svg width="173" height="8" viewBox="0 0 173 8" fill="#929292">
                            <circle cx="4"></circle>
                            <circle cx="17"></circle>
                            <circle cx="30"></circle>
                            <circle cx="43"></circle>
                            <circle cx="67"></circle>
                            <circle cx="80"></circle>
                            <circle cx="93"></circle>
                            <circle cx="106"></circle>
                            <circle cx="130"></circle>
                            <circle cx="143"></circle>
                            <circle cx="156"></circle>
                            <circle cx="169"></circle>
                          </svg>
                          <span>{{ card.last4 }}</span>
                        </div>
                        <div class="field__system" ng-class="$ctrl.slugify(card.brand)"></div>
                      </div>
                      <div class="field__group field__group--expired">
                        <div class="field__input field__input--month">{{ card.exp_month }}</div>
                        <div class="field__input field__input--year">{{ card.exp_year.toString().slice(-2) }}</div>
                      </div>
                      <div class="field__group field__group--cvv">
                        <div class="field__input">
                          <a class="toggle" ng-class="{ active: $index === 0 }" ng-href="/account/payment/default/{{card.id}}" ng-click="$ctrl.savingDefaultCard = true">Default</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="account__foot">
                    <button class="btn btn--submit" ng-click="$ctrl.toggleNewCard()">Add a new card</button>
                  </div>
                </div>
                <div class="account__step" ng-if="$ctrl.newCardActive || !$ctrl.data.cards" name="PaymentForm" ui8-form-control no-action novalidate>
                  <div class="account__title">Add new card</div>
                  <div class="account__content mb-34">Add a new card for future purchases and enable a more seamless shopping experience. Your card details are secured and encrypted by Stripe.</div>
                  <div class="field">
                    <div class="field__label">Card information</div>
                    <input type="hidden" name="stripeToken" value="{{ $ctrl.stripeToken }}">
                    <div class="field__groups">
                      <div class="field__group field__group--first">
                        <input class="field__input tab-card-name" ng-class="{error: PaymentForm.name.$invalid && PaymentForm.$submitted}" type="text" name="name" ng-model="$ctrl.newCard.name" placeholder="Name on card" required>
                      </div>
                      <div class="field__group field__group--second">
                        <input class="field__input" type="text" name="number" ng-model="$ctrl.newCard.number" cc-number cc-type="$ctrl.newCard.cardType" cc-eager-type cc-format placeholder="1234 1234 1234 1234" required>
                        <div class="field__system" ng-class="PaymentForm.number.$ccEagerType.toLowerCase().replace(' ','-')"></div>
                      </div>
                      <div class="field__group field__group--expired hover" ng-class="{focus: focus, error: (PaymentForm.exp_month.$invalid || PaymentForm.exp_year.$invalid) && PaymentForm.$submitted}">
                        <input class="field__input field__input--month" ng-keyup="$ctrl.advanceCursor($event)" ng-focus="focus=true" ng-blur="focus=false" type="text" name="exp_month" ng-model="$ctrl.newCard.exp_month" cc-exp-month placeholder="MM" required>
                        <input class="field__input field__input--year" ng-keyup="$ctrl.advanceCursor($event)" ng-focus="focus=true" ng-blur="focus=false" type="text" name="exp_year" ng-model="$ctrl.newCard.exp_year" cc-exp-year placeholder="YY" required>
                      </div>
                      <div class="field__group field__group--cvv">
                        <input class="field__input" type="text" name="cvc" ng-model="$ctrl.newCard.cvc" cc-cvc placeholder="CVC" requred>
                        <input type="text" ui8-go-tab=".tab-card-name" />
                      </div>
                    </div>
                  </div>
                  <div class="account__foot">
                    <button class="btn btn--stroke btn--submit" ng-if="!$ctrl.savingCard && $ctrl.data.cards" ng-click="$ctrl.toggleNewCard()">Cancel</button>
                    <button class="btn btn--submit" ng-if="!$ctrl.savingCard" ng-click="$ctrl.saveCard()">Save card</button>
                    <div class="loader" ng-if="$ctrl.savingCard"></div>
                  </div>
                </div>
              </div>
              <div class="account__section" ng-class="{ visible: $ctrl.openPane === 'notifications' }">
                <div class="account__title">Email notifications</div>
                <div class="account__content">Trigger email notifications based on the following events:</div>
                <form class="account__notifications" method="POST" action="/account/emails" ng-submit="$ctrl.isSubmitting = true" name="notificationsForm" ui8-form-control novalidate>
                  <div class="toggle toggle--first" ng-class="{active: $ctrl.notifications.on_mention}" ng-click="$ctrl.notifications.on_mention = !$ctrl.notifications.on_mention">
                    Mentioned in comments
                    <input type="hidden" name="on_mention" value="{{$ctrl.notifications.on_mention}}">
                  </div>
                  <div class="toggle" ng-class="{active: $ctrl.notifications.on_comment}" ng-click="$ctrl.notifications.on_comment = !$ctrl.notifications.on_comment">
                    New comment in my product
                    <input type="hidden" name="on_comment" value="{{$ctrl.notifications.on_comment}}">
                  </div>
                  <div class="toggle" ng-class="{active: $ctrl.notifications.on_follow}" ng-click="$ctrl.notifications.on_follow = !$ctrl.notifications.on_follow">
                    New followers
                    <input type="hidden" name="on_follow" value="{{$ctrl.notifications.on_follow}}">
                  </div>
                  <div class="toggle" ng-class="{active: $ctrl.notifications.on_payout}" ng-click="$ctrl.notifications.on_payout = !$ctrl.notifications.on_payout">
                    Payout processed
                    <input type="hidden" name="on_payout" value="{{$ctrl.notifications.on_payout}}">
                  </div>
                  <div class="toggle" ng-class="{active: $ctrl.notifications.on_sale}" ng-click="$ctrl.notifications.on_sale = !$ctrl.notifications.on_sale">
                    Product sales
                    <input type="hidden" name="on_sale" value="{{$ctrl.notifications.on_sale}}">
                  </div>
                  <div class="toggle" ng-class="{active: $ctrl.notifications.on_new_product}" ng-click="$ctrl.notifications.on_new_product = !$ctrl.notifications.on_new_product">
                    New releases
                    <input type="hidden" name="on_new_product" value="{{$ctrl.notifications.on_new_product}}">
                  </div>
                  <div class="toggle toggle--last" ng-class="{active: $ctrl.notifications.site_notifications}" ng-click="$ctrl.notifications.site_notifications = !$ctrl.notifications.site_notifications">
                    Platform news and updates
                    <input type="hidden" name="site_notifications" value="{{$ctrl.notifications.site_notifications}}">
                  </div>
                  <div class="account__foot">
                    <button class="btn btn--submit" ng-if="!$ctrl.isSubmitting" type="submit">Save preferences</button>
                    <div class="loader" ng-if="$ctrl.isSubmitting"></div>
                  </div>
                </form>
              </div>
              <div class="account__section" ng-class="{ visible: $ctrl.openPane === 'deleting' }">
                <div class="account__title">Delete account</div>
                <div class="account__content">
                  <p>Permanently deleting your account and all data associated with it is a manual process performed on our end.</p>
                  <p>Please contact support with the email address associated with the account you wish to delete for assistance.</p>
                </div>
                <div class="account__foot">
                  <button class="btn btn--submit" onclick="Intercom('show')">Contact support</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`,controller:function($element,$http,FlashService,PushService){var ctrl=this;var panes=["profile","password","payment","notifications"];ctrl.$onInit=function(){window.scrollTo(0,0);ctrl.openPane=ctrl.data.openView||"profile";ctrl.byOrder=ctrl.data.user.created_by==="order";ctrl.removeCardObject={};ctrl.notifications={};ctrl.data.user.notifications.split(" ").forEach(function(n){ctrl.notifications[n]=1;});ctrl.newCard={};var searchParams=new URLSearchParams(window.location.search);var openParam=searchParams.get("open");if(openParam&&panes.includes(openParam)){ctrl.openPane=openParam;}
angular.element(".add-card-form").find('[type="submit"]').bind("click",function(e){e.preventDefault();ctrl.saveCard();});initPushNotificationHandler();};ctrl.$onDestroy=function(){};ctrl.activeSection=function(section){ctrl.openPane=section;};ctrl.avatarComplete=function(){if(ctrl.upload&&ctrl.upload.url){ctrl.data.user.avatar_url=ctrl.upload.url;ctrl.upload.processing=false;}};ctrl.slugify=function(input){return(input||"").toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"");};ctrl.toggleNewCard=function(){ctrl.newCardActive=!ctrl.newCardActive;};ctrl.advanceCursor=function(e){if(e.target.value.length<2)return;if(["TAB","SHIFT"].includes(e.key.toUpperCase()))return;if(e.target.name==="exp_month"){$("input[name='exp_year']").focus();}else if(e.target.name==="exp_year"){$("input[name='cvc").focus();}};ctrl.saveCard=function(){ctrl.savingCard=true;Stripe.card.createToken(ctrl.newCard,function(status,res){if(status!==200||res.error){if(res.error.param&&ctrl.PaymentForm[res.error.param]){ctrl.PaymentForm[res.error.param].$setValidity("required",false);}else{FlashService.set("error","There was an error processing your token");}
ctrl.savingCard=false;}
ctrl.newCard.stripeToken=res.id;var rc=grecaptcha||window.grecaptcha;var rcKey=UI8.recaptchaSiteKey;if(!rc||!rcKey)
FlashService.set("error","Unable to process transaction. Please try again later.");rc.execute(rcKey,{action:"addCard"}).then(function(token){ctrl.newCard.rcToken=token;$http.post("/api/account/payment/add",ctrl.newCard).then(function(response){if(response.data.status==="success"){location.reload();}else if(response.data.error){FlashService.set("error",response.data.error);}else{FlashService.set("error","There was an error adding the card");}
ctrl.savingCard=false;}).catch(function(){FlashService.set("error","There was an error adding the card");});});});};function initPushNotificationHandler(){if(!("serviceWorker"in navigator)){return;}
if(!("PushManager"in window)){return;}
PushService.setUpPush().then(function(subscription){ctrl.pushSubscription=subscription;return new Promise(function(resolve){resolve(subscription);});}).then(function(subscription){if(!subscription){return PushService.subscribe();}else{return new Promise(function(resolve){resolve(subscription);});}}).then(function(subscription){ctrl.pushSubscription=subscription;}).catch(function(){ctrl.pushSubscription=null;});}},bindings:{data:"<",},});angular.module("UI8.components").component("addSeatsModal",{template:'<div class="v6-modal add-seats">'+
'  <div ui8-toggle-class="add-seats-modal" element="body" ui8-track-event="Close Add Seats Modal" class="v6-modal__close"><svg-icon-close></svg-icon-close></div>'+
'  <div class="v6-modal__content">'+
'    <span class="headline">How many team members would you like to add?</span>'+
'    <span class="subhead">Get <strong>30% Off</strong> Per Seat</span>'+
'    <div class="seats-toggle">'+
"      <button class='seats-toggle__button' ng-click='$ctrl.removeSeat()'><svg-icon-remove></svg-icon-remove></button>"+
"      <span class='seats-toggle__count'>{{ $ctrl.seatsToAdd }}</span>"+
"      <button class='seats-toggle__button' ng-click='$ctrl.addSeat()'><svg-icon-add></svg-icon-add></button>"+
"    </div>"+
'    <span class="add-seats__price">${{ $ctrl.totalPrice }}</span>'+
'    <button class="v6-btn" ng-click="$ctrl.addSeatsToCart()">Add To Cart</button>'+
"  </div>"+
"</div>"+
'<div ui8-toggle-class="add-seats-modal" element="body" ui8-track-event="Close Add Seats Modal" class="v6-blocker add-seats"></div>',controller:function(CartService){var ctrl=this;function calculatePrice(seats){var unitPrice=ctrl.subscription.product.sale_price||ctrl.subscription.product.price;return Math.ceil((unitPrice*seats*0.7)/100);}
ctrl.$onInit=function(){ctrl.seatsToAdd=1;ctrl.totalPrice=calculatePrice(ctrl.seatsToAdd);};ctrl.addSeat=function(){ctrl.seatsToAdd=ctrl.seatsToAdd>=5?5:ctrl.seatsToAdd+1;ctrl.totalPrice=calculatePrice(ctrl.seatsToAdd);};ctrl.removeSeat=function(){ctrl.seatsToAdd=ctrl.seatsToAdd>=2?ctrl.seatsToAdd-1:1;ctrl.totalPrice=calculatePrice(ctrl.seatsToAdd);};ctrl.addSeatsToCart=function(){CartService.addPassToCart(ctrl.subscription.product._id,ctrl.seatsToAdd,function(err){if(!err)document.body.classList.remove("add-seats-modal");},true,ctrl.subscription.order);};},bindings:{subscription:"<",},});angular.module("UI8.components").component("inviteTeamModal",{template:'<div class="v6-modal invite-team">'+
'  <div ui8-toggle-class="invite-team-modal" element="body" ui8-track-event="Close Invite Team Modal" class="v6-modal__close"><svg-icon-close></svg-icon-close></div>'+
'  <div class="v6-modal__content">'+
'    <span class="headline">Invite your team</span>'+
'    <span class="subhead">You have {{ $ctrl.seatsAvailable }} seats available</span>'+
'    <div class="invite-inputs">'+
"      <div class='invite-input' ng-repeat='seat in $ctrl.seats track by $index'>"+
"        <span class='seat-number'>{{ $index + 1 }}</span>"+
"        <div class='field'>"+
"          <div class='field__wrap'>"+
"            <input type='text' ng-model='seat.name' class='seat-name field__input' placeholder='Full Name'>"+
"          </div>"+
"        </div>"+
"        <div class='field'>"+
"          <div class='field__wrap'>"+
"            <input type='email' ng-model='seat.email' class='seat-email field__input' placeholder='Email Address'>"+
"          </div>"+
"        </div>"+
"      </div>"+
"    </div>"+
'    <button class="v6-btn" ng-click="$ctrl.sendInvites()">Send Invites</button>'+
'    <a href="#" ui8-toggle-class="invite-team-modal" element="body" class="invite-later">I\'ll do this later</a>'+
"  </div>"+
"</div>"+
'<div ui8-toggle-class="invite-team-modal" element="body" ui8-track-event="Close Invite Team Modal" class="v6-blocker invite-team"></div>',controller:function(FlashService){var ctrl=this;ctrl.$onInit=function(){ctrl.seats=Array.apply(null,{length:ctrl.seatsAvailable}).map(function(){return{name:"",email:""};});};ctrl.sendInvites=function(){$.ajax({method:"post",url:"/api/invite-team",data:{team:ctrl.teamId,seats:ctrl.seats,},}).done(function(){$("body").removeClass("invite-team-modal");FlashService.set("message","Invites sent!");window.location.reload();}).fail(function(){FlashService.set("error","Error sending invites. Contact support!");});};},bindings:{seatsAvailable:"<",teamId:"<",},});angular.module("UI8.components").component("invoicesModal",{template:'<div class="v6-modal invoices">'+
'  <div class="v6-modal__content">'+
'    <span class="headline">Invoices</span>'+
'    <div class="invoices__list">'+
"      <div class='invoice' ng-repeat='item in $ctrl.items track by item._id'>"+
"        <span class='description'><strong>{{ item.seats }}-Seat Team License</strong> ({{ $ctrl.formatDate(item.created_at) }})</span>"+
"        <span class='price'>{{ $ctrl.formatPrice(item.tendered) }}</span>"+
"        <a ng-href='/account/invoice/{{ item.order }}' target='_blank'>View Invoice</a>"+
"      </div>"+
"    </div>"+
"  </div>"+
"</div>"+
'<div ui8-toggle-class="invoices-modal" element="body" ui8-track-event="Close Invoices Modal" class="v6-blocker invoices"></div>',controller:function(){var ctrl=this;ctrl.formatPrice=function(price){return "$"+Math.floor(price/100);};ctrl.formatDate=function(date){date=new Date(date);return date.toLocaleDateString("en-US");};},bindings:{items:"<",},});angular.module("UI8.components").component("manageUserModal",{template:'<div class="v6-modal manage-user">'+
'  <div ui8-toggle-class="manage-user-modal" element="body" ui8-track-event="Close Manage User Modal" class="v6-modal__close"><svg-icon-close></svg-icon-close></div>'+
'  <div class="v6-modal__content">'+
'    <span class="headline">Manage User</span>'+
'    <div class="invite-inputs">'+
"      <div class='invite-input'>"+
"        <div class='field'>"+
"          <div class='field__wrap'>"+
"            <input type='text' ng-model='$ctrl.user.name' class='seat-name field__input' placeholder='Full Name' disabled>"+
"          </div>"+
"        </div>"+
"        <div class='field'>"+
"          <div class='field__wrap'>"+
"            <input type='email' ng-model='$ctrl.user.email' class='seat-email field__input' placeholder='Email Address' disabled>"+
"          </div>"+
"        </div>"+
"      </div>"+
"    </div>"+
'    <p class="action-message">Do you want to remove this user and free up a seat?</p>'+
'    <a href="#" ng-click="$ctrl.removeUser()" class="invite-later">Remove User</a>'+
"  </div>"+
"</div>"+
'<div ui8-toggle-class="manage-user-modal" element="body" ui8-track-event="Close Manage User Modal" class="v6-blocker manage-user"></div>',controller:function(FlashService){var ctrl=this;ctrl.removeUser=function(){$.ajax({method:"post",url:"/api/team/remove-user",data:{teamId:ctrl.teamId,userId:ctrl.user._id,},}).done(function(){$("body").removeClass("manage-user-modal");FlashService.set("message","User removed!");window.location.reload();}).fail(function(){FlashService.set("error","Error removing user. Contact support!");});};},bindings:{user:"<",teamId:"<",},});angular.module("UI8.components").component("passTile",{template:`<div class="purchases__item">
    <a class="purchases__preview" ng-href="/product/{{ $ctrl.subscription.product.slug }}">
      <img ng-src="{{ $ctrl.subscription.product.card_image }}" alt="{{ $ctrl.subscription.product.cart_name || $ctrl.subscription.product.name }}">
    </a>
    <div class="purchases__inner">
      <div class="purchases__head">
        <a class="purchases__title" ng-href="/product/{{ $ctrl.subscription.product.slug }}">{{ $ctrl.subscription.product.cart_name || $ctrl.subscription.product.name }}</a>
        <div class="purchases__price">{{ $ctrl.subscription.product.price | ui8Currency }}</div>
      </div>
        <div class="purchases__description">
          <span ng-if="$ctrl.isOwner">{{ !$ctrl.singleLicense ? ($ctrl.seats + 1) + ' Seat License' : 'Single-user license' }}</span>
          <span ng-if="!$ctrl.isOwner">1-Seat Team License</span>
          <span ng-if="$ctrl.showCancelAutoRenew"> / </span>
          <span ng-if="$ctrl.showCancelAutoRenew && !$ctrl.subscription.expired && !$ctrl.index">{{ $ctrl.subscription.pass_expires }} days remaining</span>
          <span ng-if="$ctrl.subscription.expired || $ctrl.index">Pass expired</span>
        </div>
      <div class="purchases__actions">
        <a class="btn btn--stroke btn--icon-only" ng-if="$ctrl.isOwner && !$ctrl.multipleInvoices" ng-href="/account/invoice/{{ $ctrl.subscription.order }}" target="_blank">
          <svg><path fill-rule="evenodd" d="M15.241 1H8.759l-2.011.044c-.562.046-1.079.144-1.564.392a4 4 0 0 0-1.748 1.748c-.247.485-.346 1.002-.392 1.564C3 5.289 3 5.954 3 6.759v10.483l.044 2.011c.046.562.144 1.079.392 1.564a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392C7.289 23 7.954 23 8.759 23h6.483l2.01-.044c.562-.046 1.079-.145 1.564-.392a4 4 0 0 0 1.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.011V6.759l-.044-2.011c-.046-.562-.145-1.079-.392-1.564a4 4 0 0 0-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C16.711 1 16.046 1 15.241 1zM8 6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8zm-1 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1z"/></svg>
        </a>
        <a class="btn btn--stroke btn--icon-only" ng-if="$ctrl.isOwner && $ctrl.multipleInvoices" ui8-toggle-class='invoices-modal' ui8-track-event="Open Invoices Modal">
          <svg><path fill-rule="evenodd" d="M15.241 1H8.759l-2.011.044c-.562.046-1.079.144-1.564.392a4 4 0 0 0-1.748 1.748c-.247.485-.346 1.002-.392 1.564C3 5.289 3 5.954 3 6.759v10.483l.044 2.011c.046.562.144 1.079.392 1.564a4 4 0 0 0 1.748 1.748c.485.247 1.002.346 1.564.392C7.289 23 7.954 23 8.759 23h6.483l2.01-.044c.562-.046 1.079-.145 1.564-.392a4 4 0 0 0 1.748-1.748c.247-.485.346-1.002.392-1.564.044-.541.044-1.206.044-2.011V6.759l-.044-2.011c-.046-.562-.145-1.079-.392-1.564a4 4 0 0 0-1.748-1.748c-.485-.247-1.002-.346-1.564-.392C16.711 1 16.046 1 15.241 1zM8 6a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8zm-1 5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1zm0 4a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1z"/></svg>
        </a>
        <button class="btn btn--stroke" ng-if="$ctrl.showCancelAutoRenew && $ctrl.settings.defaultCard.id && !$ctrl.subscription.expired && !$ctrl.index" ng-click="$ctrl.onCardRemove()">Cancel subscription</button>
      </div>
    </div>
  </div>`,controller:function(){var ctrl=this;ctrl.$onInit=function(){var subscription=ctrl.subscription;var isOwner=!!subscription.owner;ctrl.showCancelAutoRenew=!subscription.product.subscription_lifetime;if(isOwner){ctrl.isOwner=true;ctrl.seats=subscription.licenses||1;ctrl.hasTeam=!!subscription.licenses;ctrl.singleLicense=!subscription.licenses;ctrl.availableInvites=subscription.invitesRemaining;ctrl.multipleInvoices=subscription.additionalOrders&&subscription.additionalOrders.length;if(ctrl.multipleInvoices){ctrl.allOrders=[ctrl.subscription].concat(subscription.additionalOrders).reverse();}
ctrl.users=[ctrl.subscription.owner].concat(subscription.teamMembers||[]).concat(subscription.outstandingInvites||[]);}};ctrl.openModalForUser=function(user,modalName){ctrl.modalUser=user;$("body").addClass(modalName+"-modal");};},bindings:{subscription:"<",settings:"<",index:"<",onCardRemove:"&",},});angular.module("UI8.components").component("pendingInviteModal",{template:'<div class="v6-modal pending-invite">'+
'  <div ui8-toggle-class="pending-invite-modal" element="body" ui8-track-event="Close Pending Invite Modal" class="v6-modal__close"><svg-icon-close></svg-icon-close></div>'+
'  <div class="v6-modal__content">'+
'    <span class="headline">Invite Pending</span>'+
'    <div class="invite-inputs">'+
"      <div class='invite-input'>"+
"        <div class='field'>"+
"          <div class='field__wrap'>"+
"            <input type='text' ng-model='$ctrl.user.name' class='seat-name field__input' placeholder='Full Name' disabled>"+
"          </div>"+
"        </div>"+
"        <div class='field'>"+
"          <div class='field__wrap'>"+
"            <input type='email' ng-model='$ctrl.user.email' class='seat-email field__input' placeholder='Email Address' disabled>"+
"          </div>"+
"        </div>"+
"      </div>"+
"    </div>"+
'    <button class="v6-btn" ng-click="$ctrl.resendInvite()">Resend Invite</button>'+
'    <a href="#" ng-click="$ctrl.cancelInvite()" class="invite-later">Cancel Invite</a>'+
"  </div>"+
"</div>"+
'<div ui8-toggle-class="pending-invite-modal" element="body" ui8-track-event="Close Pending Invite Modal" class="v6-blocker pending-invite"></div>',controller:function(FlashService){var ctrl=this;ctrl.resendInvite=function(){$.ajax({method:"post",url:"/api/team/resend-invite",data:{teamId:ctrl.teamId,email:ctrl.user.email,},}).done(function(){$("body").removeClass("pending-invite-modal");FlashService.set("message","Invite sent!");}).fail(function(){FlashService.set("error","Error sending invite. Contact support!");});};ctrl.cancelInvite=function(){$.ajax({method:"post",url:"/api/team/cancel-invite",data:{teamId:ctrl.teamId,email:ctrl.user.email,},}).done(function(){$("body").removeClass("pending-invite-modal");FlashService.set("message","Invite cancelled!");window.location.reload();}).fail(function(){FlashService.set("error","Error cancelling invite. Contact support!");});};},bindings:{user:"<",teamId:"<",},});angular.module("UI8.components").component("teamMember",{template:'<div class="team-member" ng-class="{ primary: $ctrl.user.isOwner }">'+
'  <div class="avatar" ng-style="$ctrl.avatar"></div>'+
"  <span class='username'>{{ $ctrl.user.name }}</span>"+
"  <span class='email'>{{ $ctrl.user.email }}</span>"+
"  <span ng-if='$ctrl.user.isOwner' class='status'>Primary User</span>"+
"  <span ng-if='!$ctrl.user.isOwner && !$ctrl.user.pass_expires' class='status invited'>Invite Sent</span>"+
"  <span ng-if='!$ctrl.user.isOwner && $ctrl.user.pass_expires' class='status active'>Active / {{ $ctrl.user.days_remaining }} days remaining</span>"+
'  <button ng-if="!$ctrl.user.isOwner && !$ctrl.user.pass_expires" ng-click="$ctrl.openModal(\'pending-invite\')" class="menu-button"><svg-icon-ellipsis></svg-icon-ellipsis></button>'+
'  <button ng-if="!$ctrl.user.isOwner && $ctrl.user.pass_expires" ng-click="$ctrl.openModal(\'manage-user\')" class="menu-button"><svg-icon-ellipsis></svg-icon-ellipsis></button>'+
"</div>",controller:function(){var ctrl=this;ctrl.$onInit=function(){ctrl.avatar={"background-image":"url('"+ctrl.user.avatar_url+"')",};};ctrl.openModal=function(modalName){return ctrl.onMenu(ctrl.user,modalName);};},bindings:{user:"<",onMenu:"<",},});angular.module("UI8.components").component("deadLoader",{template:'<div class="ui8-loader">'+
'   <div class="ball ball-1"></div>'+
'   <div class="ball ball-2"></div>'+
'   <div class="ball ball-3"></div>'+
'   <div class="ball ball-4"></div>'+
'   <div class="ball ball-5"></div>'+
'   <div class="ball ball-6"></div>'+
'   <div class="ball ball-7"></div>'+
'   <div class="ball ball-8"></div>'+
"</div>",});angular.module("UI8.components").component("verificationModal",{template:`<div class="modal modal--verify open" ng-if="$ctrl.display">
      <button class="modal__close" ng-click="$ctrl.display = false" ui8-track-event="Close Download Verfication Modal"></button>
      <div class="modal__container">
        <div class="verify">
          <div class="verify__title">Verify your account</div>
          <div class="verify__content">We have detected that you have logged in from an new location or device. Check your inbox and enter the 6-digit code in the field below to proceed with your download.</div>
          <div class="field">
            <input class="field__input" ng-class="{ error: $ctrl.error }" type="number" name="verification_code" ng-model="$ctrl.verificationCode" ng-keypress="$ctrl.error = false" ng-pattern="/^[0-9]{6}$/i" autocomplete="off" placeholder="Enter 6-digit code" required>
          </div>
          <button class="btn btn--submit" ng-click="$ctrl.verify()" ng-if="!$ctrl.pending">Submit</button>
          <div class="loader" ng-if="$ctrl.pending"></div>
          <div class="verify__foot">Need help? <a onclick="Intercom('show')">Contact support</a></div>
        </div>
      </div>
      <div class="modal__backdrop" ng-click="$ctrl.display = false" ui8-track-event="Close Download Verfication Modal"></div>
    </div>`,controller:function($http,$element,FlashService){var ctrl=this;ctrl.$onInit=function(){ctrl.error=false;ctrl.pending=false;$element.on("click",function(e){e.stopPropagation();});$element.find("input[name='verification_code']").on("keydown",function(e){if(e.key==="Enter")ctrl.verify();});};ctrl.$destroy=function(){$element.find("input[name='verification_code']").off();$element.off();};ctrl.verify=function(){ctrl.pending=true;$http.post("/api/device/verify",{verificationCode:ctrl.verificationCode}).then(function(res){if(res.data.error){ctrl.error=true;}else{ctrl.display=false;}
ctrl.pending=false;},function(){FlashService.set("error","Server error. Please contact support.");ctrl.error=true;ctrl.pending=false;});};},bindings:{display:"=?",},});angular.module("UI8.components").component("exclusiveFilter",{template:"<section class='exclusive-filter' on-load='$ctrl.changeHandler()'>"+
" <span ng-class='{ active: $ctrl.exclusive }'>Exclusives</span>"+
" <div class='checkbox-toggle' ng-click='$ctrl.toggleExclusive()' ng-class='{ active: $ctrl.exclusive }'>"+
"   <div class='toggle-switch'></div>"+
" </div>"+
"</section>",controller:function(){var ctrl=this;var slug;ctrl.changeHandler=function(){slug=location.pathname.split("/").pop();var storedFilter=sessionStorage.getItem(slug+":category-exclusive-filter");setExclusive(storedFilter==="true");document.body.addEventListener("toggle-featured",toggleListener);document.body.addEventListener("reset-category-filters",resetListener);};ctrl.$onDestroy=function(){document.body.removeEventListener("toggle-featured",toggleListener);document.body.removeEventListener("reset-category-filters",resetListener);};ctrl.toggleExclusive=function(){ctrl.exclusive=!ctrl.exclusive;applyUpdate();};function setExclusive(exclusive){ctrl.exclusive=exclusive;applyUpdate();}
function applyUpdate(){var event=new CustomEvent("toggle-exclusive",{detail:ctrl.exclusive,});document.body.dispatchEvent(event);sessionStorage.setItem(slug+":category-exclusive-filter",ctrl.exclusive);ctrl.onUpdate({value:ctrl.exclusive});}
function toggleListener(e){if(e.detail&&ctrl.exclusive)ctrl.toggleExclusive();}
function resetListener(){if(ctrl.exclusive)ctrl.toggleExclusive();}},bindings:{onUpdate:"&",},});angular.module("UI8.components").component("featuredFilter",{template:"<button class='filters__toggle' ng-class='{ active: $ctrl.featured }' ng-click='$ctrl.toggleFeatured()' on-load='$ctrl.changeHandler()'>Featured</button>",controller:function(){var ctrl=this;var slug;ctrl.changeHandler=function(){slug=location.pathname.split("/").pop();var storedFilter=sessionStorage.getItem(slug+":category-featured-filter");setFeatured(storedFilter==="true");document.body.addEventListener("toggle-exclusive",toggleListener);document.body.addEventListener("reset-category-filters",resetListener);};ctrl.$onDestroy=function(){document.body.removeEventListener("toggle-exclusive",toggleListener);document.body.removeEventListener("reset-category-filters",resetListener);};ctrl.toggleFeatured=function(){ctrl.featured=!ctrl.featured;applyUpdate();};function setFeatured(featured){ctrl.featured=featured;applyUpdate();}
function applyUpdate(){var event=new CustomEvent("toggle-featured",{detail:ctrl.featured});document.body.dispatchEvent(event);sessionStorage.setItem(slug+":category-featured-filter",ctrl.featured);ctrl.onUpdate({value:ctrl.featured});var header=$(".header"),trigger=$(".page__trigger"),filters=$(".page__filters--sticky");if(filters.hasClass("scrolled"))
window.scroll(0,trigger.offset().top-header.outerHeight());}
function toggleListener(e){if(e.detail&&ctrl.featured)ctrl.toggleFeatured();}
function resetListener(){if(ctrl.featured)ctrl.toggleFeatured();}},bindings:{onUpdate:"&",},});angular.module("UI8.components").component("productFilter",{template:'<div class="filters__select" on-load="$ctrl.changeHandler()">'+
"  <div class='filters__head'>"+
"    <div class='filters__arrow'>"+
'      <svg><path d="M7.414 10c-.891 0-1.337-1.077-.707-1.707l4.586-4.586a1 1 0 0 1 1.414 0l4.586 4.586c.63.63.184 1.707-.707 1.707H7.414zm8.882 5c.928 0 1.356 1.155.651 1.759l-4.297 3.683a1 1 0 0 1-1.302 0l-4.297-3.683C6.347 16.155 6.775 15 7.703 15h8.593z"/></svg>'+
"    </div>"+
"  </div>"+
"  <div class='filters__dropdown'>"+
'    <button class="filters__btn" ng-class="{ \'active\': $ctrl.sort === \'recent\' }" value="recent" ng-click="$ctrl.setActive($event)">Release date</button>'+
'    <button class="filters__btn" ng-class="{ \'active\': $ctrl.sort === \'popular\' }" value="popular" ng-click="$ctrl.setActive($event)">Popularity</button>'+
'    <button class="filters__btn" ng-if="$ctrl.priceFilter" ng-class="{ \'active\': $ctrl.sort === \'high\' }" value="high" ng-click="$ctrl.setActive($event)">Highest price</button>'+
'    <button class="filters__btn" ng-if="$ctrl.priceFilter" ng-class="{ \'active\': $ctrl.sort === \'low\' }" value="low" ng-click="$ctrl.setActive($event)">Lowest price</button>'+
'    <featured-filter on-update="$ctrl.applyFeatured(value)"></featured-filter>'+
"  </div>"+
"</div>",controller:function(){var ctrl=this;var slug;ctrl.changeHandler=function(){slug=location.pathname.split("/").pop();ctrl.sort=sessionStorage.getItem(slug+":category-sort");if(!ctrl.sort)ctrl.sort="recent";};ctrl.setActive=function($event){var $clicked=$($event.target);var value=$clicked.attr("value")||$clicked.text();ctrl.sort=value;sessionStorage.setItem(slug+":category-sort",ctrl.sort);ctrl.updateSort({value:value});var header=$(".header"),trigger=$(".page__trigger"),filters=$(".page__filters--sticky");if(filters.hasClass("scrolled"))
window.scroll(0,trigger.offset().top-header.outerHeight());};ctrl.applyFeatured=function(val){return ctrl.updateFeatured({value:val});};},bindings:{priceFilter:"<?",updateSort:"&",updateFeatured:"&",hasFeatured:"<",},});angular.module("UI8.components").component("softwareFilter",{template:"<div class='filters__select'>"+
"  <div class='filters__head'>"+
"    <div class='filters__label'>Format</div>"+
"    <div class='filters__arrow'>"+
'      <img ng-src="/img/app-icons/{{$ctrl.isActiveSlug()}}.svg" alt="Select" />'+
"    </div>"+
"  </div>"+
"  <div class='filters__dropdown' ng-class='{isWide: $ctrl.softwareFilters.length > 4, isWider: $ctrl.softwareFilters.length > 9}'>"+
"    <button class='filters__btn' ng-repeat='app in $ctrl.softwareFilters track by app.slug' ng-click='$ctrl.updateFilter(app.name)' ng-class='$ctrl.isActive(app.name)'>"+
"      <img ng-src='/img/app-icons/{{::app.slug}}.svg' ng-alt='{{ ::app.name }}' />"+
"      <span>{{ app.new_name || app.name }}</span>"+
"    </button>"+
"  </div>"+
"</div>",controller:function(){var ctrl=this;var slug;var filters={"Any Platform":{name:"Any Platform",slug:"any-prog",new_name:"Any format",alt_name:"Any Software",},Sketch:{name:"Sketch",slug:"sketch-prog",},XD:{name:"XD",slug:"xd-prog",},InVision:{name:"InVision",slug:"invision-prog",},Figma:{name:"Figma",slug:"figma-prog",},React:{name:"React",slug:"react-prog",},Xcode:{name:"Xcode",slug:"xcode-prog",},Html:{name:"HTML",slug:"html-prog",new_name:"HTML/CSS",},Swift:{name:"Swift",slug:"swift-prog",},Framer:{name:"Framer",slug:"framer-prog",},Photoshop:{name:"Photoshop",slug:"ps-prog",},Illustrator:{name:"Illustrator",slug:"ai-prog",},"After Effects":{name:"After Effects",slug:"ae-prog",},Keynote:{name:"Keynote",slug:"keynote-prog",},PowerPoint:{name:"PowerPoint",slug:"powerpoint-prog",},Blender:{name:"Blender",slug:"blender-prog",},"Cinema 4D":{name:"Cinema 4D",slug:"c4d-prog",},"3D Studio Max":{name:"3D Studio Max",slug:"3ds-prog",},Maya:{name:"Maya",slug:"maya-prog",},};function getCurrentFilter(){slug=location.pathname.split("/").pop();return(sessionStorage.getItem(slug+":category-software-filter")||"Any Platform");}
function filterApps(compatibleApps){var apps=compatibleApps.map(function(name){return filters[name];});apps.unshift(filters["Any Platform"]);apps=apps.filter(function(app){return!!app;});return apps;}
ctrl.$onInit=function(){if(ctrl.categoryName==="UI Kits"||ctrl.categoryName==="Wireframe Kits"||ctrl.categoryName==="Themes & Templates"){delete filters.Photoshop;}
if(ctrl.categoryName==="UI Kits"||ctrl.categoryName==="Themes & Templates"){delete filters.Illustrator;}
ctrl.currentFilter=getCurrentFilter();ctrl.updateFilter(ctrl.currentFilter);};ctrl.$onChanges=function(){if(ctrl.showApps&&ctrl.showApps.length){ctrl.softwareFilters=filterApps(ctrl.showApps);}else{var apps=Object.values(filters);ctrl.softwareFilters=ctrl.limitApps?apps.slice(0,6):apps;}
var validFilter=!!ctrl.softwareFilters.filter(function(f){return(f.name===ctrl.currentFilter||f.alt_name===ctrl.currentFilter);}).length;if(!validFilter)ctrl.updateFilter("Any Platform");};ctrl.updateFilter=function(app){sessionStorage.setItem(slug+":category-software-filter",app);ctrl.currentFilter=app;ctrl.onUpdate({value:app});var header=$(".header"),trigger=$(".page__trigger"),filters=$(".page__filters--sticky");if(filters.hasClass("scrolled"))
window.scroll(0,trigger.offset().top-header.outerHeight());};ctrl.isActive=function(app){return app===ctrl.currentFilter?"active":"";};ctrl.isActiveSlug=function(){return ctrl.softwareFilters.find((filter)=>filter.name===ctrl.currentFilter).slug;};},bindings:{categoryName:"<",showApps:"<?",limitApps:"<?",onUpdate:"&",},});angular.module("UI8.components").component("tagFilter",{template:"<div class='filters__btns' on-load='$ctrl.changeHandler()'>"+
"  <button class='filters__btn' ng-class='$ctrl.isActive(tag.value)' ng-click='$ctrl.updateFilter()'>All products</button>"+
"  <button class='filters__btn' ng-class='$ctrl.isActive(tag.value)' ng-if='tag' ng-click='$ctrl.updateFilter(tag.value)' ng-repeat='tag in ::$ctrl.filters track by tag.value'>"+
"    <span data-tag-id='{{ ::tag.value }}'>{{ ::$ctrl.capitalize(tag.text) }}</span>"+
"  </button>"+
"</div>",controller:function(){var ctrl=this;var slug;ctrl.changeHandler=function(){slug=location.pathname.split("/").pop();var filter=sessionStorage.getItem(slug+":tag-filter");ctrl.updateFilter(filter?filter:null);document.body.addEventListener("reset-category-filters",resetListener);};ctrl.$onInit=function(){if(/sale/i.test(ctrl.categoryName)||/trending/i.test(ctrl.categoryName)){ctrl.categoryName="Products";}};ctrl.$onDestroy=function(){document.body.removeEventListener("reset-category-filters",resetListener);};ctrl.updateFilter=function(tagId){tagId=tagId||null;if(tagId)sessionStorage.setItem(slug+":tag-filter",tagId);else sessionStorage.removeItem(slug+":tag-filter");ctrl.currentFilter=tagId;ctrl.onUpdate({value:tagId});var header=$(".header"),trigger=$(".page__trigger"),filters=$(".page__filters--sticky");if(filters.hasClass("scrolled"))
window.scroll(0,trigger.offset().top-header.outerHeight());};ctrl.isActive=function(tagId){if(!ctrl.currentFilter&&!tagId)return "active";return tagId===ctrl.currentFilter?"active":"";};ctrl.capitalize=function(text){return text.split(" ").map(function(word){if(/ios/i.test(word))return "iOS";if(/iphone/i.test(word))return "iPhone";if(/ipad/i.test(word))return "iPad";if(/imac/i.test(word))return "iMac";if(/macbook/i.test(word))return "MacBook";if(/html/i.test(word))return "HTML";return word.substring(0,1).toUpperCase()+word.substring(1);}).join(" ");};function resetListener(){if(ctrl.currentFilter)ctrl.updateFilter();}},bindings:{filters:"<",categoryName:"<",onUpdate:"&",},});angular.module("UI8.components").component("svgIconAdd",{template:'<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">'+
'  <g fill="none" fill- rule="evenodd" transform="translate(1 1)" >'+
'    <circle cx="18" cy="18" r="18" fill="#232323" stroke="#FFF" stroke-width="2" />'+
'    <path fill="#FFF" d="M25.602 18.883h-6.72v6.72h-1.765v-6.72h-6.72v-1.766h6.72v-6.72h1.766v6.72h6.72z" />'+
"  </g >"+
"</svg >",});angular.module("UI8.components").component("svgIconArrowDown",{template:'<svg width="16px" height="16px" viewbox="0 0 32 32" version="1.1">'+
'    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
'        <g fill="#303030">'+
'            <path d="M22,14 L12.001382,3.99666359 L8.00138199,7.99666359 L16.0004718,15.9995282 L8,24 L12,28 L24,16 L22,14 Z" transform="translate(16.000000, 15.998332) rotate(-270.000000) translate(-16.000000, -15.998332) "></path>'+
"        </g>"+
"    </g>"+
"</svg>",});angular.module("UI8.components").component("svgIconArrowLeft",{template:'<svg width="16px" height="16px" viewbox="0 0 32 32" version="1.1">'+
'   <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
'       <g fill="#303030">'+
'           <path d="M20,4 L24,8 L16,16 L24,24 L20,28 L8,16 L20,4 Z"></path>'+
"       </g>"+
"   </g>"+
"</svg>",});angular.module("UI8.components").component("svgIconArrowRightAlt",{template:'<svg width="16px" height="16px" viewbox="0 0 16 16" version="1.1">'+
'   <path fill="#FFF" fill-rule="evenodd" stroke-width="0.1" d="M7.903 0L16 8l-8.097 8L6.8 14.92l6.23-6.155H0v-1.53h13.03L6.8 1.08z"/>'+
"</svg>",});angular.module("UI8.components").component("svgIconArrowRight",{template:'<svg width="16px" height="16px" viewbox="0 0 32 32" version="1.1">'+
'   <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
'       <g fill="#333333">'+
'           <path d="M16,16 L8,8 L12,4 L24,16 L12,28 L8,24 L16,16 Z"></path>'+
"       </g>"+
"   </g>"+
"</svg>",});angular.module("UI8.components").component("svgIconCart",{template:'<svg width="16px" height="16px" viewbox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
'   <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
'       <g fill="#2F2F2F">'+
'           <path d="M13.9967562,23.9944391 C15.1006725,23.9944391 16.043153,24.3849697 16.8242259,25.1660426 C17.6052988,25.9471155 17.9958293,26.889596 17.9958293,27.9935123 C17.9958293,29.0974287 17.6052988,30.0399091 16.8242259,30.820982 C16.043153,31.6020549 15.1006725,31.9925855 13.9967562,31.9925855 C12.8928398,31.9925855 11.9503593,31.6020549 11.1692864,30.820982 C10.3882136,30.0399091 9.99768297,29.0974287 9.99768297,27.9935123 C9.99768297,26.889596 10.3882136,25.9471155 11.1692864,25.1660426 C11.9503593,24.3849697 12.8928398,23.9944391 13.9967562,23.9944391 L13.9967562,23.9944391 Z M23.9944391,23.9944391 C25.0983555,23.9944391 26.0408359,24.3849697 26.8219088,25.1660426 C27.6029817,25.9471155 27.9935123,26.889596 27.9935123,27.9935123 C27.9935123,29.0974287 27.6029817,30.0399091 26.8219088,30.820982 C26.0408359,31.6020549 25.0983555,31.9925855 23.9944391,31.9925855 C22.8905228,31.9925855 21.9480423,31.6020549 21.1669694,30.820982 C20.3858965,30.0399091 19.9953659,29.0974287 19.9953659,27.9935123 C19.9953659,26.889596 20.3858965,25.9471155 21.1669694,25.1660426 C21.9480423,24.3849697 22.8905228,23.9944391 23.9944391,23.9944391 L23.9944391,23.9944391 Z M31.6176724,6.8265429 C32.013416,7.37850107 32.1019362,7.97731464 31.8832358,8.62300156 L27.8841627,20.6202211 C27.7487767,21.0367933 27.5066477,21.3700461 27.1577685,21.6199894 C26.8088893,21.8699327 26.4209622,21.9949025 25.9939757,21.9949025 L11.9972196,21.9949025 C11.570233,21.9949025 11.1797025,21.8699327 10.8256161,21.6199894 C10.4715297,21.3700461 10.2267972,21.0367933 10.0914112,20.6202211 L4.56144285,3.99907319 L1.99953659,3.99907319 C1.44757842,3.99907319 0.97633818,3.80380789 0.585801736,3.41327145 C0.195265293,3.02273501 0,2.55149477 0,1.99953659 C0,1.44757842 0.195265293,0.97633818 0.585801736,0.585801736 C0.97633818,0.195265293 1.44757842,0 1.99953659,0 L5.99860978,0 C6.42559629,0 6.81352334,0.124969787 7.16240256,0.374913111 C7.51128179,0.624856435 7.75341075,0.958109202 7.88879672,1.37468141 L9.4353133,5.99860978 L29.9930489,5.99860978 C30.6699787,5.99860978 31.2115145,6.27458473 31.6176724,6.8265429 L31.6176724,6.8265429 Z"></path>'+
"       </g>"+
"   </g>"+
"</svg>",});angular.module("UI8.components").component("categoryIcon",{bindings:{slug:"<",},template:'<svg class="icon icon-v6" ng-class="$ctrl.slugClass()" viewBox="{{ $ctrl.viewBox() }}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
'  <path ng-if="$ctrl.slug === \'ui-kits\'" d="M1 2.405v11.19l1.335-.467.33.944L0 15.005V.995l2.665.933-.33.944L1 2.405zm14 11.19V2.405l-1.335.467-.33-.944L16 .995v14.01l-2.665-.933.33-.944 1.335.467zM12 0v16H4V0h8zm-1 1H5v14h6V1z" fill- rule="nonzero"></path>'+
'  <path ng-if="$ctrl.slug === \'wireframe-kits\'" d="M16 0v16H0V0h16zm-1 1H5v4h10V1zm0 5H5v9h10V6zM4 12H1v3h3v-3zm0-1V1H1v10h3z" fill-rule="evenodd"></path>'+
'  <g ng-if="$ctrl.slug === \'illustrations\'" stroke="none" stroke-width="0" fill="none" fill-rule="even-odd">'+
'    <path d="M16,6.005 L14,8 L13.294,7.294 L14.585,6.004 L10,1.414 L8.707,2.707 L8,2 L10,0 L16,6.005 Z M8.427,14.058 L1.927,14.779 L4.857,11.85 C5.053,11.943 5.269,12 5.5,12 C6.329,12 7,11.328 7,10.5 C7,9.672 6.329,9 5.5,9 C4.671,9 4,9.672 4,10.5 C4,10.732 4.057,10.947 4.15,11.143 L1.22,14.072 L1.942,7.573 L6.872,4.287 L11.713,9.132 L8.427,14.058 Z M1,7 L0,16 L9,15 L13,9.005 L7,3 L1,7 Z" id="icon" fill="#5A5A5A"></path>'+
"  </g>"+
'  <path ng-if="$ctrl.slug === \'mockups\'" d="M4 16a.5.5 0 1 1 0-1h8a.5.5 0 1 1 0 1H4zM15 0c.6 0 1 .4 1 1v11c0 .6-.4 1-1 1H1c-.6 0-1-.5-1-1V1c0-.6.4-1 1-1h14zm0 1H1v11h14V1zM8 8c.6 0 1 .4 1 1s-.4 1-1 1-1-.4-1-1 .4-1 1-1z" fill-rule="nonzero"></path>'+
'  <g ng-if="$ctrl.slug === \'themes\'" transform="translate(1 1)" fill-rule="evenodd">'+
'    <path stroke-width="2" fill="none" d="M0 0h30v30H0z"></path>'+
'    <path stroke-width="2" fill="none" d="M30 24v6H6l15-15z"></path>'+
'    <circle fill="currentColor" cx="11" cy="11" r="4"></circle>'+
"  </g>"+
'  <path ng-if="$ctrl.slug === \'icons\'" d="M8.874 2.942l-.948.316a4.535 4.535 0 0 0-.78-1.404C6.555 1.262 5.89 1 5 1c-.8 0-1.49.293-2.146.854a3.001 3.001 0 0 0 0 4.292c.292.293.764.563 1.332.79l-.372.928c-.682-.273-1.26-.603-1.668-1.01C.551 5.258.551 2.742 2.175 1.12 3.03.387 3.943 0 5 0c1.149 0 2.07.363 2.89 1.188.46.575.774 1.124.984 1.754zm5.212 4.922l-.372-.928c.568-.227 1.04-.497 1.332-.79 1.205-1.204 1.205-3.088.029-4.266C14.39 1.293 13.7 1 12.9 1c-.89 0-1.555.262-2.11.812-.39.488-.646.936-.816 1.446l-.948-.316c.21-.63.524-1.18 1.02-1.796C10.83.363 11.751 0 12.9 0c1.057 0 1.97.387 2.854 1.146a4.001 4.001 0 0 1 0 5.708c-.408.407-.986.737-1.668 1.01zm-4.96 5.194l.948-.316c.23.69.399.996.78 1.304.591.592 1.256.854 2.146.854.8 0 1.49-.293 2.146-.854a3.001 3.001 0 0 0 0-4.292c-.292-.293-.764-.563-1.332-.79l.372-.928c.682.273 1.26.603 1.668 1.01 1.595 1.596 1.595 4.112-.029 5.734-.855.733-1.768 1.12-2.825 1.12-1.149 0-2.07-.363-2.812-1.11-.527-.42-.777-.875-1.062-1.732zM3.942 8.126l.316.948c-.51.17-.958.426-1.404.78a3.001 3.001 0 0 0 0 4.292C3.445 14.738 4.11 15 5 15c.8 0 1.49-.293 2.146-.854.293-.292.563-.764.79-1.332l.928.372c-.273.682-.603 1.26-1.039 1.694C6.97 15.613 6.057 16 5 16c-1.149 0-2.07-.363-2.854-1.146-1.595-1.596-1.595-4.112.042-5.744.575-.46 1.124-.774 1.754-.984zM9 4c1 0 2 .4 2.8 1.1 1.6 1.6 1.6 4.1 0 5.7C11 11.6 10 12 9 12c-1 0-2-.4-2.8-1.1-1.6-1.6-1.6-4.1 0-5.7C7 4.4 8 4 9 4zm0 1c-.8 0-1.6.3-2.1.9C5.7 7 5.7 9 6.9 10.1c.5.6 1.3.9 2.1.9s1.6-.3 2.1-.9c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.1C10.6 5.3 9.8 5 9 5z" fill-rule="nonzero"></path>'+
'  <path ng-if="$ctrl.slug === \'fonts\'" d="M15 1v2H9v10h3v2H4v-2h3V3H1V1h14zm1-1H0v6h1V4h5v8H3v4h10v-4h-3V4h5v2h1V0z" fill-rule="nonzero"></path>'+
"</svg >",controller:function(){var ctrl=this;ctrl.slugClass=function(){return "icon-v6-"+ctrl.slug;};ctrl.viewBox=function(){if(ctrl.slug==="themes"){return "0 0 32 32";}else if(ctrl.slug==="icons"){return "0 0 18 16";}else{return "0 0 16 16";}};},});angular.module("UI8.components").component("svgIconCheck",{template:'<svg width="16px" height="16px" viewbox="0 0 32 32" version="1.1">'+
'   <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
'       <g fill="#303030">'+
'           <path d="M8,12 L12,16 L24,4 L30,10 L12,28 L2,18 L8,12 Z"></path>'+
"       </g>"+
"   </g>"+
"</svg>",});angular.module("UI8.components").component("svgIconClose",{template:'<svg width="16px" height="16px" viewbox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
'   <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
'       <g fill="#303030">'+
'           <path d="M18.0185378,16.0002802 L31.9875103,2.03894584 L29.9813969,0.000345421604 L16,13.9817423 L2.01860308,0.000345421604 L0.012489713,2.03894584 L13.9814622,16.0002802 L-0.00375381455,29.9854962 L2.01040741,31.9996574 L16,18.0177142 L29.9895926,31.9996574 L32.0037538,29.9854962 L18.0185378,16.0002802 Z"></path>'+
"       </g>"+
"   </g>"+
"</svg>",});angular.module("UI8.components").component("svgIconComment",{template:'<svg width="16px" height="16px" viewbox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
'   <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
'       <g fill="#2F2F2F">'+
'           <path d="M22,2 C23.8020923,2 25.4713465,2.44791219 27.0078125,3.34375 C28.5442785,4.23958781 29.7604122,5.45572148 30.65625,6.9921875 C31.5520878,8.52865352 32,10.1979077 32,12 L32,14 C32,15.8020923 31.5520878,17.4713465 30.65625,19.0078125 C29.7604122,20.5442785 28.5442785,21.7604122 27.0078125,22.65625 C25.4713465,23.5520878 23.8020923,24 22,24 L20,24 L10,30 L10,24 C8.19790766,24 6.52865352,23.5520878 4.9921875,22.65625 C3.45572148,21.7604122 2.23958781,20.5442785 1.34375,19.0078125 C0.447912188,17.4713465 0,15.8020923 0,14 L0,12 C0,10.1979077 0.447912188,8.52865352 1.34375,6.9921875 C2.23958781,5.45572148 3.45572148,4.23958781 4.9921875,3.34375 C6.52865352,2.44791219 8.19790766,2 10,2 L22,2 Z"></path>'+
"       </g>"+
"   </g>"+
"</svg>",});angular.module("UI8.components").component("svgIconContact",{template:'<svg width="16px" height="16px" viewbox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
'   <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
'       <g fill="#303030">'+
'           <path d="M31.992983,0.745532924 C32.0300119,0.523410564 31.9189252,0.264267811 31.6967517,0.116186237 C31.4745782,-0.0318953359 31.2153758,-0.0318953359 30.9932023,0.0791658441 L0.33326024,17.4047099 C0.111086747,17.5527915 0,17.7749139 0,18.0340566 C0,18.256179 0.148115662,18.4783013 0.370289155,18.5893625 L7.03549395,21.9211979 C7.10955178,21.9582183 7.22063853,21.9952387 7.33172527,21.9952387 C7.47984093,21.9952387 7.6279566,21.9582183 7.77607226,21.8471571 L26.6978481,5.52116366 L12.1454843,24.2534827 C12.0343975,24.3645439 11.9973686,24.5126254 11.9973686,24.660707 L11.9973686,31.3243778 C11.9973686,31.620541 12.1825132,31.8796837 12.4417156,31.9537245 C12.5157734,31.9907449 12.5898313,31.9907449 12.6638891,31.9907449 C12.8860626,31.9907449 13.0712072,31.8796837 13.1822939,31.7316021 L16.8481566,26.8449102 L27.0311083,31.9167041 C27.2162529,32.0277653 27.4384264,32.0277653 27.623571,31.9167041 C27.8457445,31.8056429 27.9568312,31.620541 27.9938601,31.3984186 L31.992983,0.745532924 Z"></path>'+
"       </g>"+
"   </g>"+
"</svg>",});angular.module("UI8.components").component("svgIconDownloadSmall",{template:'<svg width="12px" height="12px" viewbox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
'   <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
'       <g fill="#303030">'+
'           <path d="M15.2333333,19.586138 C15.4666667,19.7585512 15.7333333,19.8619991 16,19.8619991 C16.2666667,19.8619991 16.5333333,19.7585512 16.7666667,19.586138 C17,19.4137248 22.1333333,14.8275341 25.4666667,9.72410373 C25.7,9.34479472 25.7333333,8.82755516 25.5333333,8.41376351 C25.3,7.99997187 24.9,7.72411077 24.4333333,7.72411077 L20.1,7.72411077 C19.6333333,4.93101714 18.8333333,1.79309714 18.4666667,1.13792703 C18.0666667,0.413791648 17.2333333,0 16,0 C14.7666667,0 13.9333333,0.413791648 13.5333333,1.13792703 C13.1,1.89654505 12.3333333,4.93101714 11.9,7.72411077 L7.56666667,7.72411077 C7.1,7.72411077 6.7,7.99997187 6.46666667,8.41376351 C6.26666667,8.82755516 6.3,9.34479472 6.53333333,9.72410373 C9.83333333,14.8275341 15,19.4137248 15.2333333,19.586138 L15.2333333,19.586138 Z M26.8,16.5516659 C26.8,21.2413046 26.4333333,24.5516378 26.1666667,26.4826655 L5.83333333,26.4826655 C5.56666667,24.5861204 5.2,21.2757872 5.2,16.5516659 L0,16.5516659 C0,25.4481864 1.16666667,29.8274813 1.2,29.9998945 C1.53333333,31.1723042 2.56666667,31.9998875 3.76666667,31.9998875 L28.2,31.9998875 C29.4,31.9998875 30.4666667,31.1723042 30.8,29.9654119 C30.8333333,29.7929987 32,25.3792211 32,16.5516659 L26.8,16.5516659 Z"></path>'+
"       </g>"+
"   </g>"+
"</svg>",});angular.module("UI8.components").component("svgIconDownload",{template:'<svg width="16px" height="16px" viewbox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
'   <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
'       <g fill="#303030">'+
'           <path d="M15.2333333,19.586138 C15.4666667,19.7585512 15.7333333,19.8619991 16,19.8619991 C16.2666667,19.8619991 16.5333333,19.7585512 16.7666667,19.586138 C17,19.4137248 22.1333333,14.8275341 25.4666667,9.72410373 C25.7,9.34479472 25.7333333,8.82755516 25.5333333,8.41376351 C25.3,7.99997187 24.9,7.72411077 24.4333333,7.72411077 L20.1,7.72411077 C19.6333333,4.93101714 18.8333333,1.79309714 18.4666667,1.13792703 C18.0666667,0.413791648 17.2333333,0 16,0 C14.7666667,0 13.9333333,0.413791648 13.5333333,1.13792703 C13.1,1.89654505 12.3333333,4.93101714 11.9,7.72411077 L7.56666667,7.72411077 C7.1,7.72411077 6.7,7.99997187 6.46666667,8.41376351 C6.26666667,8.82755516 6.3,9.34479472 6.53333333,9.72410373 C9.83333333,14.8275341 15,19.4137248 15.2333333,19.586138 L15.2333333,19.586138 Z M26.8,16.5516659 C26.8,21.2413046 26.4333333,24.5516378 26.1666667,26.4826655 L5.83333333,26.4826655 C5.56666667,24.5861204 5.2,21.2757872 5.2,16.5516659 L0,16.5516659 C0,25.4481864 1.16666667,29.8274813 1.2,29.9998945 C1.53333333,31.1723042 2.56666667,31.9998875 3.76666667,31.9998875 L28.2,31.9998875 C29.4,31.9998875 30.4666667,31.1723042 30.8,29.9654119 C30.8333333,29.7929987 32,25.3792211 32,16.5516659 L26.8,16.5516659 Z"></path>'+
"       </g>"+
"   </g>"+
"</svg>",});angular.module("UI8.components").component("svgIconEllipsis",{template:'<svg width="25px" height="6px" viewBox="0 0 29 7" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
'  <g stroke="none" stroke-width="0" fill="none" fill-rule="evenodd">'+
'    <g fill="#AFAFAF">'+
'      <path d="M3.5,7 C1.56700338,7 0,5.43299662 0,3.5 C0,1.56700338 1.56700338,0 3.5,0 C5.43299662,0 7,1.56700338 7,3.5 C7,5.43299662 5.43299662,7 3.5,7 Z M14.5,7 C12.5670034,7 11,5.43299662 11,3.5 C11,1.56700338 12.5670034,0 14.5,0 C16.4329966,0 18,1.56700338 18,3.5 C18,5.43299662 16.4329966,7 14.5,7 Z M25.5,7 C23.5670034,7 22,5.43299662 22,3.5 C22,1.56700338 23.5670034,0 25.5,0 C27.4329966,0 29,1.56700338 29,3.5 C29,5.43299662 27.4329966,7 25.5,7 Z"></path>'+
"    </g>"+
"  </g >"+
"</svg >",});angular.module("UI8.components").component("svgIconFollowing",{template:'<svg width="16px" height="16px" viewbox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
'   <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
'       <g fill="#303030">'+
'           <path d="M31.5255123,13.3404234 L24.4960151,20.5105104 L26.1674733,30.6642285 L26.1674733,30.6954707 C26.2612004,31.2682474 26.1596643,31.6587711 25.8628618,31.8670536 C25.5660593,32.075336 25.1625182,32.0388871 24.6522262,31.7577058 L17.8570457,28.0086407 C17.3467537,27.7274594 16.7271227,27.5868709 15.9981342,27.5868709 C15.2691457,27.5868709 14.6495147,27.7274594 14.1392227,28.0086407 L7.3440422,31.7577058 C6.83375023,32.0388871 6.43020906,32.075336 6.13340659,31.8670536 C5.83660412,31.6587711 5.73506795,31.2682474 5.82879505,30.6954707 L7.50025325,20.5105104 L0.470756144,13.3404234 C0.0646053919,12.9238585 -0.0785866357,12.5359383 0.0411757656,12.1766511 C0.160938167,11.8173639 0.512409508,11.5908601 1.09560033,11.497133 L10.749443,10.0287492 L15.0921101,0.796676339 C15.3420491,0.265556124 15.6440541,0 15.9981342,0 C16.3522143,0 16.6542193,0.265556124 16.9041583,0.796676339 L21.2468254,10.0287492 L30.9006681,11.497133 C31.4838589,11.5908601 31.8353302,11.8173639 31.9550926,12.1766511 C32.074855,12.5359383 31.931663,12.9238585 31.5255123,13.3404234 L31.5255123,13.3404234 Z"></path>'+
"       </g>"+
"   </g>"+
"</svg>",});angular.module("UI8.components").component("svgIconInfo",{template:'<svg width="16px" height="16px" viewbox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
'   <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
'       <g fill="#303030">'+
'           <path d="M16,32 C24.836556,32 32,24.836556 32,16 C32,7.163444 24.836556,0 16,0 C7.163444,0 0,7.163444 0,16 C0,24.836556 7.163444,32 16,32 Z M14,14 L18,14 L18,26 L14,26 L14,14 Z M14,6 L18,6 L18,10 L14,10 L14,6 Z"></path>'+
"       </g>"+
"   </g>"+
"</svg>",});angular.module("UI8.components").component("svgIconLike",{template:'<svg width="16px" height="16px" viewbox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
'   <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
'       <g fill="#2F2F2F">'+
'           <path d="M27.5484923,18.7450495 C32.8431634,13.4356436 33.1763945,7.94059406 29.8070583,4.56188119 C26.4006964,1.1460396 20.9208969,1.1460396 17.5515607,4.56188119 C16.9221243,5.19306931 16.4037648,5.89851485 15.9964824,6.64108911 C15.5892,5.89851485 15.0708406,5.19306931 14.4414042,4.56188119 C11.072068,1.18316832 5.59226846,1.18316832 2.22293226,4.56188119 C-1.18342961,7.94059406 -0.850198555,13.4356436 4.44447262,18.7450495 L15.5151487,29.8836634 C15.6262257,29.9950495 15.8113541,30.0693069 15.9964824,30.0693069 C16.1816108,30.0693069 16.3297135,29.9950495 16.4778162,29.8836634 L27.5484923,18.7450495 Z"></path>'+
"       </g>"+
"   </g>"+
"</svg>",});angular.module("UI8.components").component("svgIconPlusBold",{template:'<svg width="16px" height="16px" viewbox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
'   <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
'       <g fill="#303030">'+
'           <path d="M12,12 L2,12 L2,20 L12,20 L12,30 L20,30 L20,20 L30,20 L30,12 L20,12 L20,2 L12,2 L12,12 Z"></path>'+
"       </g>"+
"   </g>"+
"</svg>",});angular.module("UI8.components").component("svgIconPlus",{template:'<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">'+
'  <path fill="#fff" d="M32 12.651v6.698h-12.651v12.651h-6.698v-12.651h-12.651v-6.698h12.651v-12.651h6.698v12.651z"></path>'+
"</svg>",});angular.module("UI8.components").component("svgIconRemove",{template:'<svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 38 38">'+
'  <g fill="none" fill- rule="evenodd" transform="translate(1 1)" >'+
'    <circle cx="18" cy="18" r="18" fill="#232323" stroke="#FFF" stroke-width="2"/>'+
'    <path fill="#FFF" d="M25.602 18.883H10.397v-1.766h15.206z" />'+
"  </g >"+
"</svg >",});angular.module("UI8.components").component("svgIconTagSmall",{template:'<svg width="12px" height="12px" viewBox="0 0 12 12" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
'    <g stroke="none" stroke-width=".1" fill="none" fill-rule="evenodd">'+
'        <g fill-rule="nonzero" fill="#FFFFFF">'+
'            <path d="M3.75,5.25 C2.92157288,5.25 2.25,4.57842712 2.25,3.75 C2.25,2.92157288 2.92157288,2.25 3.75,2.25 C4.57842712,2.25 5.25,2.92157288 5.25,3.75 C5.25,4.57842712 4.57842712,5.25 3.75,5.25 L3.75,5.25 L3.75,5.25 Z M10.5080248,6.37445859 C10.5034221,6.37906073 10.5034079,6.3762484 10.5059618,6.37880201 L5.95249719,1.8258816 C5.80256739,1.67596973 5.41414733,1.51466947 5.20360156,1.51364164 L1.48693696,1.49549789 C1.49440812,1.49553437 1.49571301,1.49422032 1.49567657,1.48675932 L1.51382249,5.20297972 C1.51485999,5.41545628 1.67691625,5.80262014 1.82609977,5.95178583 L6.37956441,10.5047062 C6.37894707,10.504089 6.37790225,10.5040876 6.37522047,10.506769 L10.5080248,6.37445859 L10.5080248,6.37445859 L10.5080248,6.37445859 L10.5080248,6.37445859 Z M7.43282347,11.5642456 C6.85075811,12.1462414 5.90479491,12.1449467 5.32196141,11.5621828 L0.768496771,7.00926243 C0.341074934,6.58189168 0.0211288832,5.81751794 0.0181638087,5.21028112 L1.78896261e-05,1.49406073 C-0.00399486533,0.672262627 0.66757264,-0.00401759462 1.49423923,1.79678807e-05 L5.21090384,0.0181617182 C5.81479252,0.0211097392 6.58089516,0.339251269 7.01010019,0.768405002 L11.5635648,5.32132542 C12.1427241,5.90041548 12.1475348,6.85009775 11.5656278,7.43193519 L7.43282347,11.5642456 L7.43282347,11.5642456 Z"></path>'+
"        </g>"+
"    </g>"+
"</svg>",});angular.module("UI8.components").component("svgIconView",{template:'<svg width="16px" height="16px" viewbox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+
'   <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">'+
'       <g fill="#303030">'+
'           <path d="M31.8888889,15.5833333 L31.8148148,15.4583333 C31.8148148,15.4583333 25,4 16,4 C7,4 0.111111111,15.5833333 0.111111111,15.5833333 C-0.037037037,15.8333333 -0.037037037,16.1666667 0.111111111,16.4166667 C0.111111111,16.4166667 7,28 16,28 C25,28 31.8888889,16.4166667 31.8888889,16.4166667 C32.037037,16.1666667 32.037037,15.8333333 31.8888889,15.5833333 L31.8888889,15.5833333 Z M16,22.3999318 C12.6666667,22.3999318 10,19.5199318 10,15.9199318 C10,12.3599318 12.6666667,9.43993181 16,9.43993181 C19.2962963,9.43993181 22,12.3599318 22,15.9199318 C22,19.5199318 19.2962963,22.3999318 16,22.3999318 L16,22.3999318 Z"></path>'+
"       </g>"+
"   </g>"+
"</svg>",});angular.module("UI8.components").component("passDetails",{template:`<div class="page page--passes">
      <div class="page__background">
        <img src="https://images.ui8.net/redesign/hero-home.jpg" alt="Hero" />
      </div>
      <div class="page__container container">
        <div class="page__hero">
          <h1 class="page__title">All-Access Pass</h1>
          <div class="page__description">Unlock instant access to all existing products and daily new releases.</div>
        </div>
        <pass-pricing subscriptions='::$ctrl.data.subscriptions' lifetime='::$ctrl.data.lifetime' promo='::$ctrl.data.promo'></pass-pricing>`+
`
        <div class="features">
          <h2 class="features__title">Get More, Do More with the All-Access Pass</h2>
          <div class="features__row">
            <div class="features__col">
              <div class="features__preview">
                <img srcset="/img/aap/all-access-pass-1@2x.jpg 2x" srcset="/img/aap/all-access-pass-1.jpg" alt="{{ ::$ctrl.data.total_savings | ui8Currency }} worth of assets" />
              </div>
            </div>
            <div class="features__col">
              <h3 class="features__subtitle">{{ ::$ctrl.data.total_savings | ui8Currency }} worth of assets</h3>
              <div class="features__content">
                <p>Think of this as a shortcut to design greatness - no more endless hours spent searching for the perfect graphic, no more sacrificing your budget for quality. It's time to level up and take your designs to new heights.</p>
                <p>So why wait when you can upgrade your designs from "meh" to "magnificent" in a matter of clicks.</p>
              </div>
            </div>
          </div>
          <div class="features__row">
            <div class="features__col">
              <div class="features__preview">
                <img srcset="/img/aap/all-access-pass-2@2x.jpg 2x" srcset="/img/aap/all-access-pass-2.jpg" alt="{{ ::$ctrl.data.total_products | ui8FormatNumber }} products, and counting..." />
              </div>
            </div>
            <div class="features__col">
              <h3 class="features__subtitle">{{ ::$ctrl.data.total_products | ui8FormatNumber }} products, and counting...</h3>
              <div class="features__content">
                <p>Your search for the ultimate resource library ends here. With our vast collection of premium resources, you'll have everything you need to elevate your design skills and stay ahead of the game.</p>
                <p>Powered by Amazon S3's lightning-fast download speeds, browsing and downloading what you need is effortless.</p>
              </div>
            </div>
          </div>
          <div class="features__row">
            <div class="features__col">
              <div class="features__preview">
                <img srcset="/img/aap/all-access-pass-3@2x.jpg 2x" srcset="/img/aap/all-access-pass-3.jpg" alt="New products curated daily" />
              </div>
            </div>
            <div class="features__col">
              <h3 class="features__subtitle">New products curated daily</h3>
              <div class="features__content">
                <p>Our team carefully selects and curates a new and diverse range of design resources every day, ensuring that you have access to the latest and greatest assets for any kind of creative project.</p>
              </div>
            </div>
          </div>
        </div>`+
`
        <div class="lib">
          <h3 class="lib__title">Your ever-expanding library of resources</h3>
          <ul class="lib__grid">`+
`
            <li class="lib__item">
              <a href="/category/ui-kits" class="lib__link">
                <div class="lib__icon">
                  <svg viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.879 0H5.121L4.104.022c-.297.023-.591.075-.875.216-.423.209-.768.543-.983.953-.145.275-.198.561-.222.849C2 2.312 2 2.643 2 3.026v9.947l.023.987c.024.287.078.573.222.849.216.411.56.744.983.954.284.14.579.192.875.216.281.022.622.022 1.017.022h5.758l1.017-.022c.297-.024.591-.075.875-.216a2.22 2.22 0 0 0 .983-.953c.145-.275.198-.561.222-.849.023-.272.023-.603.023-.986V3.027l-.023-.987c-.024-.288-.078-.573-.222-.849a2.22 2.22 0 0 0-.983-.953c-.284-.14-.579-.192-.875-.216C11.615 0 11.274 0 10.879 0zM8 10.909c-.621 0-1.125.488-1.125 1.091S7.379 13.091 8 13.091 9.125 12.603 9.125 12 8.621 10.909 8 10.909z"/></svg>
                </div>
                <div class="lib__value">{{ $ctrl.data.categoryCounts["ui-kits"] | ui8FormatNumber }}</div>
                <div class="lib__name">UI Kits</div>
                <div class="lib__foot">
                  <div class="lib__caption">Formats</div>
                  <ul class="formats">
                    <li data-title="Figma"><img src="/img/app-icons/figma-prog.svg" alt="Figma" /></li>
                    <li data-title="Sketch"><img src="/img/app-icons/sketch-prog.svg" alt="Sketch" /></li>
                    <li data-title="Framer"><img src="/img/app-icons/framer-prog.svg" alt="Framer" /></li>
                    <li data-title="Adobe XD"><img src="/img/app-icons/xd-prog.svg" alt="XD" /></li>
                  </ul>
                </div>
              </a>
            </li>`+
`
            <li class="lib__item">
              <a href="/category/illustrations" class="lib__link">
                <div class="lib__icon">
                  <svg viewBox="0 0 16 16"><path d="M2.819 15.763c-.647.19-.97.286-1.104.212-.115-.064-.187-.185-.188-.316-.001-.153.237-.391.714-.868l4.928-4.928a1.46 1.46 0 0 0 1.837-1.41 1.46 1.46 0 0 0-1.459-1.459 1.46 1.46 0 0 0-1.41 1.837l-4.928 4.928c-.477.477-.715.715-.868.714-.132-.001-.252-.073-.316-.188-.074-.133.021-.457.212-1.104l2.427-8.243c.048-.202.108-.456.248-.671a1.46 1.46 0 0 1 .474-.456c.221-.132.477-.182.68-.222l3.799-.76a1.46 1.46 0 0 1 .056-.665c.069-.211.185-.373.293-.501.099-.116.225-.243.356-.373L9.14.72l.373-.356c.128-.108.289-.225.501-.293a1.46 1.46 0 0 1 .902 0c.211.069.373.185.501.293a6.69 6.69 0 0 1 .373.356L15.28 4.21l.356.373c.108.128.225.289.293.501a1.46 1.46 0 0 1 0 .902c-.069.211-.185.373-.293.501-.099.116-.225.243-.356.373l-.571.571-.373.356c-.128.108-.29.225-.501.293a1.46 1.46 0 0 1-.665.056l-.76 3.799c-.04.204-.09.459-.222.68a1.46 1.46 0 0 1-.456.474c-.215.14-.469.201-.671.248l-8.243 2.427z"/></svg>
                </div>
                <div class="lib__value">{{ $ctrl.data.categoryCounts["illustrations"] | ui8FormatNumber }}</div>
                <div class="lib__name">Illustrations</div>
                <div class="lib__foot">
                  <div class="lib__caption">Formats</div>
                  <ul class="formats">
                    <li data-title="Figma"><img src="/img/app-icons/figma-prog.svg" alt="Figma" /></li>
                    <li data-title="Sketch"><img src="/img/app-icons/sketch-prog.svg" alt="Sketch" /></li>
                    <li data-title="Adobe XD"><img src="/img/app-icons/xd-prog.svg" alt="XD" /></li>
                    <li data-title="Photoshop"><img src="/img/app-icons/ps-prog.svg" alt="PS" /></li>
                    <li data-title="After Effects"><img src="/img/app-icons/ae-prog.svg" alt="AE" /></li>
                    <li data-title="Illustrator"><img src="/img/app-icons/ai-prog.svg" alt="AI" /></li>
                  </ul>
                </div>
              </a>
            </li>`+
`
            <li class="lib__item">
              <a href="/category/coded-templates" class="lib__link">
                <div class="lib__icon">
                  <svg viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 0a8 8 0 1 0 0 16A8 8 0 1 0 8 0zM6.696 6.332c.284-.284.284-.745 0-1.029s-.745-.284-1.029 0L3.486 7.486c-.284.284-.284.745 0 1.029l2.182 2.182c.284.284.745.284 1.029 0s.284-.745 0-1.029L5.029 8l1.668-1.668zm3.636-1.029c-.284-.284-.744-.284-1.028 0s-.284.745 0 1.029L10.972 8 9.304 9.668a.73.73 0 0 0 0 1.029c.284.284.744.284 1.028 0l2.182-2.182c.284-.284.284-.745 0-1.029l-2.182-2.182z"/></svg>
                </div>
                <div class="lib__value">{{ $ctrl.data.categoryCounts["coded-templates"] | ui8FormatNumber }}</div>
                <div class="lib__name">Coded Templates</div>
                <div class="lib__foot">
                  <div class="lib__caption">Formats</div>
                  <ul class="formats">
                    <li data-title="Framer"><img src="/img/app-icons/framer-prog.svg" alt="Framer" /></li>
                    <li data-title="HTML"><img src="/img/app-icons/html-prog.svg" alt="HTML" /></li>
                    <li data-title="React"><img src="/img/app-icons/react-prog.svg" alt="React" /></li>
                    <li data-title="Xcode"><img src="/img/app-icons/xcode-prog.svg" alt="Xcode" /></li>
                    <li data-title="Swift"><img src="/img/app-icons/swift-prog.svg" alt="Swift" /></li>
                    <li data-title="Android"><img src="/img/app-icons/android-prog.svg" alt="Android" /></li>
                  </ul>
                </div>
              </a>
            </li>`+
`
            <li class="lib__item">
              <a href="/category/3d-assets" class="lib__link">
                <div class="lib__icon">
                  <svg viewBox="0 0 16 16"><path d="M14.686 5.112c.098.012.187.068.245.155.066.099.066.269.067.609v.346l.001.786v.429l.001 1.36v.458L15 11.494c-.002.175-.013.374-.071.563a1.55 1.55 0 0 1-.3.552c-.156.184-.36.305-.522.402h0l-.044.026-4.533 2.728c-.273.164-.409.246-.521.232-.098-.012-.186-.069-.244-.155-.066-.099-.066-.269-.066-.608h0V9.033c0-.129 0-.194.018-.252.015-.051.041-.098.074-.138.038-.045.09-.076.194-.14h0l5.177-3.156c.274-.167.411-.251.523-.237zm-13.372 0c.112-.014.249.07.523.237h0l5.177 3.156c.104.063.156.095.194.14.033.04.059.087.074.138.017.058.017.122.017.252h0v6.202c0 .339 0 .509-.066.608-.057.087-.146.143-.244.155-.112.014-.248-.068-.521-.232l-4.533-2.728h0l-.044-.027c-.162-.097-.365-.218-.521-.402a1.55 1.55 0 0 1-.3-.552c-.072-.237-.071-.489-.071-.689l.001-2.113v-.458l.001-.915v-.445l.001-1.216h0v-.346c0-.34 0-.51.067-.609.058-.087.147-.143.244-.155zM7.718.031c.186-.041.378-.041.564 0 .215.048.407.165.56.257h0l.042.025 4.498 2.709c.286.172.429.258.476.372a.41.41 0 0 1 .001.312c-.047.114-.19.201-.475.375h0l-5.11 3.115c-.1.061-.15.092-.203.104-.047.011-.095.011-.142 0-.053-.012-.103-.042-.203-.104h0l-5.11-3.115c-.285-.174-.428-.261-.475-.375a.41.41 0 0 1 .001-.312c.048-.114.191-.2.476-.372L7.116.314h0l.042-.025c.153-.093.345-.209.56-.257z"/></svg>
                </div>
                <div class="lib__value">{{ $ctrl.data.categoryCounts["3d-assets"] | ui8FormatNumber }}</div>
                <div class="lib__name">3D Assets</div>
                <div class="lib__foot">
                  <div class="lib__caption">Formats</div>
                  <ul class="formats">
                    <li data-title="Ciname 4D"><img src="/img/app-icons/c4d-prog.svg" alt="Ciname 4D" /></li>
                    <li data-title="Blender"><img src="/img/app-icons/blender-prog.svg" alt="Blender" /></li>
                    <li data-title="Maya"><img src="/img/app-icons/maya-prog.svg" alt="Maya" /></li>
                  </ul>
                </div>
              </a>
            </li>`+
`
            <li class="lib__item">
              <a href="/category/icons" class="lib__link">
                <div class="lib__icon">
                  <svg viewBox="0 0 16 16"><path d="M6.91 1.354c1.986-1.805 5.018-1.805 7.003 0l.354.346.034.033.346.354c1.805 1.986 1.805 5.018 0 7.003-.13.143-.317.217-.51.217h-6.7c-.411 0-.744.333-.744.744s.333.744.744.744h4.078c.451 0 .676 0 .78.089.09.077.139.193.129.312-.011.137-.17.296-.489.615l-1.393 1.393-.027.027a2.08 2.08 0 0 1-.378.32c-.133.082-.278.142-.43.178-.175.042-.353.042-.494.041h-.038-5.034c-.188 0-.37 0-.525-.013-.086-.007-.18-.019-.278-.042L1.27 15.782c-.29.29-.761.29-1.052 0s-.29-.761 0-1.052l2.068-2.068c-.023-.098-.035-.192-.042-.278-.013-.155-.013-.338-.013-.525V6.825v-.038c0-.141-.001-.319.041-.494.036-.152.097-.297.178-.43.094-.153.22-.279.32-.378l.027-.027 3.758-3.758.354-.346z"/></svg>
                </div>
                <div class="lib__value">{{ $ctrl.data.categoryCounts["icons"] | ui8FormatNumber }}</div>
                <div class="lib__name">Icon Sets</div>
                <div class="lib__foot">
                  <div class="lib__caption">Formats</div>
                  <ul class="formats">
                    <li data-title="Figma"><img src="/img/app-icons/figma-prog.svg" alt="Figma" /></li>
                    <li data-title="Sketch"><img src="/img/app-icons/sketch-prog.svg" alt="Sketch" /></li>
                    <li data-title="Adobe XD"><img src="/img/app-icons/xd-prog.svg" alt="XD" /></li>
                    <li data-title="Illustrator"><img src="/img/app-icons/ai-prog.svg" alt="AI" /></li>
                  </ul>
                </div>
              </a>
            </li>`+
`
            <li class="lib__item">
              <a href="/category/mockups" class="lib__link">
                <div class="lib__icon">
                  <svg viewBox="0 0 16 16"><path d="M13.429 7.446c.083.006.155.046.297.128A4.51 4.51 0 0 1 11.491 16c-.646 0-1.259-.135-1.814-.38-.183-.08-.274-.12-.331-.199a.37.37 0 0 1-.07-.238c.006-.097.075-.201.212-.408a5.93 5.93 0 0 0 .979-3.014l.006-.254v-.017a5.98 5.98 0 0 0-.141-1.296l-.042-.178c1.103-.459 2.039-1.24 2.69-2.225.112-.169.168-.254.24-.297a.37.37 0 0 1 .21-.05zm-10.858 0a.37.37 0 0 1 .21.05c.072.043.128.127.24.297 1.067 1.615 2.899 2.68 4.979 2.68a6.01 6.01 0 0 0 .887-.066l.005.019c.082.341.126.697.126 1.065v.016l-.004.183A4.51 4.51 0 0 1 0 11.491a4.51 4.51 0 0 1 2.274-3.918c.142-.081.213-.122.297-.128zM8 0a4.51 4.51 0 0 1 4.509 4.509 4.49 4.49 0 0 1-.727 2.456c-.607.932-1.548 1.626-2.654 1.911l-.074.018c-.338.081-.69.124-1.054.124-1.251 0-2.383-.509-3.2-1.332-.809-.815-1.309-1.937-1.309-3.176A4.51 4.51 0 0 1 8 0z"/></svg>
                </div>
                <div class="lib__value">{{ $ctrl.data.categoryCounts["mockups"] | ui8FormatNumber }}</div>
                <div class="lib__name">Mockups</div>
                <div class="lib__foot">
                  <div class="lib__caption">Formats</div>
                  <ul class="formats">
                    <li data-title="Figma"><img src="/img/app-icons/figma-prog.svg" alt="Figma" /></li>
                    <li data-title="Sketch"><img src="/img/app-icons/sketch-prog.svg" alt="Sketch" /></li>
                    <li data-title="Photoshop"><img src="/img/app-icons/ps-prog.svg" alt="PS" /></li>
                    <li data-title="After Effects"><img src="/img/app-icons/ae-prog.svg" alt="AE" /></li>
                    <li data-title="Cinema 4D"><img src="/img/app-icons/c4d-prog.svg" alt="Cinema 4D" /></li>
                  </ul>
                </div>
              </a>
            </li>`+
`
            <li class="lib__item">
              <a href="/category/presentation" class="lib__link">
                <div class="lib__icon">
                  <svg viewBox="0 0 16 16"><path d="M7.845 6.443a5.89 5.89 0 0 1 .48.145l6.398 2.118.529.19c.135.059.405.184.575.461.192.311.226.695.09 1.035-.12.302-.364.472-.487.553a6.78 6.78 0 0 1-.488.279l-2.417 1.302-1.302 2.417-.279.488c-.081.123-.252.367-.553.487-.34.135-.724.102-1.035-.09-.277-.171-.402-.44-.461-.575-.064-.149-.127-.338-.19-.529L6.588 8.325l-.145-.48c-.033-.141-.083-.404.017-.685.117-.326.374-.583.7-.7.281-.101.544-.05.685-.017zM11.287 0l1.249.034c.434.035.832.111 1.207.302.581.296 1.053.768 1.348 1.348.191.374.267.773.302 1.207.034.417.034.93.034 1.551v1.343a.77.77 0 1 1-1.543 0h0V4.236l-.029-1.219c-.028-.338-.078-.511-.139-.632-.148-.29-.384-.526-.674-.674-.121-.061-.294-.112-.632-.139-.347-.028-.796-.029-1.457-.029H4.236l-1.219.029c-.338.028-.511.078-.632.139-.29.148-.526.384-.674.674-.061.121-.112.294-.139.632-.028.347-.029.796-.029 1.457v6.718l.029 1.219c.028.338.078.511.139.632.148.29.384.526.674.674.121.061.294.111.632.139.347.028.796.029 1.457.029h1.311a.77.77 0 1 1 0 1.543h0-1.645l-1.249-.034c-.434-.035-.832-.111-1.207-.302-.581-.296-1.053-.768-1.348-1.349-.191-.374-.267-.773-.302-1.207C0 12.119 0 11.607 0 10.986V4.141l.034-1.249c.035-.434.111-.832.302-1.207.296-.581.768-1.053 1.348-1.348.374-.191.773-.267 1.207-.302C3.309 0 3.821 0 4.442 0z"/></svg>
                </div>
                <div class="lib__value">{{ $ctrl.data.categoryCounts["presentation"] | ui8FormatNumber }}</div>
                <div class="lib__name">Presentation</div>
                <div class="lib__foot">
                  <div class="lib__caption">Formats</div>
                  <ul class="formats">
                    <li data-title="Figma"><img src="/img/app-icons/figma-prog.svg" alt="Figma" /></li>
                    <li data-title="Sketch"><img src="/img/app-icons/sketch-prog.svg" alt="Sketch" /></li>
                    <li data-title="Adobe XD"><img src="/img/app-icons/xd-prog.svg" alt="XD" /></li>
                    <li data-title="Keynote"><img src="/img/app-icons/keynote-prog.svg" alt="Keynote" /></li>
                    <li data-title="PowerPoint"><img src="/img/app-icons/powerpoint-prog.svg" alt="PowerPoint" /></li>
                  </ul>
                </div>
              </a>
            </li>`+
`
            <li class="lib__item">
              <a href="/category/themes" class="lib__link">
                <div class="lib__icon">
                  <svg viewBox="0 0 16 16"><path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0 2.91 2.91 0 0 1-2.909 2.909h-.364l-.553.012c-.653.086-1.166.6-1.252 1.252-.011.083-.012.193-.012.553v.364A2.91 2.91 0 0 1 8 16a8 8 0 0 1-8-8zm6.545-5.091c-.803 0-1.455.651-1.455 1.455s.651 1.455 1.455 1.455S8 5.167 8 4.364s-.651-1.455-1.455-1.455zm2.909 2.182c0-.803.651-1.455 1.455-1.455s1.454.651 1.454 1.455-.651 1.455-1.454 1.455-1.455-.651-1.455-1.455zM2.909 8c0-.803.651-1.455 1.455-1.455S5.818 7.197 5.818 8s-.651 1.455-1.455 1.455S2.909 8.803 2.909 8z"/></svg>
                </div>
                <div class="lib__value">{{ $ctrl.data.categoryCounts["themes"] | ui8FormatNumber }}</div>
                <div class="lib__name">Themes & Templates</div>
                <div class="lib__foot">
                  <div class="lib__caption">Formats</div>
                  <ul class="formats">
                    <li data-title="Figma"><img src="/img/app-icons/figma-prog.svg" alt="Figma" /></li>
                    <li data-title="Sketch"><img src="/img/app-icons/sketch-prog.svg" alt="Sketch" /></li>
                    <li data-title="Adobe XD"><img src="/img/app-icons/xd-prog.svg" alt="XD" /></li>
                    <li data-title="Photoshop"><img src="/img/app-icons/ps-prog.svg" alt="PS" /></li>
                    <li data-title="Illustrator"><img src="/img/app-icons/ai-prog.svg" alt="AI" /></li>
                    <li data-title="Procreate"><img src="/img/app-icons/procreate-prog.svg" alt="Procreate" /></li>
                  </ul>
                </div>
              </a>
            </li>`+
`
            <li class="lib__item">
              <a href="/category/wireframe-kits" class="lib__link">
                <div class="lib__icon">
                  <svg viewBox="0 0 16 16"><path d="M3.536 0h.1c.402 0 .727.326.727.727s-.326.727-.727.727l-1.104.05c-.502.135-.894.527-1.029 1.029-.043.162-.05.381-.05 1.104 0 .402-.326.727-.727.727S0 4.038 0 3.636v-.1c0-.578-.001-1.008.099-1.38A2.91 2.91 0 0 1 2.156.099c.372-.1.802-.099 1.38-.099zm9.931 1.504c-.162-.043-.38-.05-1.104-.05-.402 0-.727-.326-.727-.727S11.962 0 12.364 0h.1c.578 0 1.008-.001 1.38.099a2.91 2.91 0 0 1 2.057 2.057c.1.372.099.802.099 1.38v.1c0 .402-.326.727-.727.727s-.727-.326-.727-.727l-.05-1.104c-.134-.502-.526-.894-1.028-1.029zM5.818.727c0-.402.326-.727.727-.727h2.909c.402 0 .727.326.727.727s-.326.727-.727.727H6.545c-.402 0-.727-.326-.727-.727zM.727 5.818c.402 0 .727.326.727.727v1.117l.134-.073c.353-.18.729-.252 1.138-.285.394-.032.877-.032 1.462-.032h.351l1.462.032c.409.033.785.105 1.138.285A2.91 2.91 0 0 1 8.41 8.861c.18.353.252.729.285 1.138.032.394.032.877.032 1.462v.351l-.032 1.462c-.033.409-.105.785-.285 1.138l-.073.134h1.117c.402 0 .727.326.727.727S9.856 16 9.455 16H4.188c-.585 0-1.069 0-1.462-.032-.409-.033-.785-.105-1.138-.285a2.91 2.91 0 0 1-.943-.765c-.126-.156-.236-.326-.328-.506-.18-.353-.252-.729-.285-1.138C0 12.88 0 12.397 0 11.812v-.351-.226-4.689a.73.73 0 0 1 .727-.727zm14.545 0c.402 0 .727.326.727.727v2.909c0 .402-.326.727-.727.727s-.727-.326-.727-.727V6.545c0-.402.326-.727.727-.727zm0 5.818c.402 0 .727.326.727.727v.1c0 .578 0 1.008-.099 1.38a2.91 2.91 0 0 1-2.057 2.057c-.372.1-.802.099-1.38.099h-.1c-.402 0-.727-.326-.727-.727s.326-.727.727-.727l1.104-.05c.502-.134.894-.526 1.028-1.028.043-.162.05-.38.05-1.104 0-.402.326-.727.727-.727z"/></svg>
                </div>
                <div class="lib__value">{{ $ctrl.data.categoryCounts["wireframe-kits"] | ui8FormatNumber }}</div>
                <div class="lib__name">Wireframe Kits</div>
                <div class="lib__foot">
                  <div class="lib__caption">Formats</div>
                  <ul class="formats">
                    <li data-title="Figma"><img src="/img/app-icons/figma-prog.svg" alt="Figma" /></li>
                    <li data-title="Sketch"><img src="/img/app-icons/sketch-prog.svg" alt="Sketch" /></li>
                    <li data-title="Framer"><img src="/img/app-icons/framer-prog.svg" alt="Framer" /></li>
                    <li data-title="Adobe XD"><img src="/img/app-icons/xd-prog.svg" alt="XD" /></li>
                  </ul>
                </div>
              </a>
            </li>`+
`
            <li class="lib__item">
              <a href="/category/sketch" class="lib__link">
                <div class="lib__icon">
                  <svg viewBox="0 0 16 16"><path d="M.6 5.069l-.599.778H2.93l.223-4.084L.6 5.069zm11.938-3.641L8.375 1l4.392 4.6-.23-4.172zM3.341 6.822l-.363-.688H.03l7.28 8.178-3.968-7.491zm.065-.975h9.193L9.961 3.081l-1.955-2.05-4.6 4.816zm9.623.284l-4.334 8.181 7.277-8.178H13.03v-.003zm.126-3.975l-.304-.394.029.541.197 3.544h2.923l-2.845-3.691zm-9.772.766l-.149 2.675L7.63 1l-4.163.428-.084 1.494zm9.313 3.209H3.309l1.372 2.591L8.006 15l4.69-8.869z"/></svg>
                </div>
                <div class="lib__value">{{ $ctrl.data.categoryCounts["sketch"] | ui8FormatNumber }}</div>
                <div class="lib__name">For Sketch</div>
              </a>
            </li>`+
`
            <li class="lib__item">
              <a href="/category/figma" class="lib__link">
                <div class="lib__icon">
                  <svg viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.672 5.33c.705-.002 1.38-.282 1.878-.781s.781-1.178.781-1.884S13.05 1.28 12.55.781 11.373 0 10.666 0h-5.33c-.707 0-1.385.281-1.884.781s-.781 1.178-.781 1.884.281 1.385.781 1.884 1.178.781 1.884.781c-.707 0-1.385.281-1.884.781s-.781 1.178-.781 1.884.281 1.385.781 1.884 1.178.781 1.884.781c-.527 0-1.042.156-1.481.449s-.78.709-.982 1.196-.254 1.023-.152 1.54.357.992.729 1.365.848.627 1.365.729 1.053.05 1.54-.152.903-.543 1.196-.982.449-.953.449-1.481V5.33h2.656c-1.468.005-2.656 1.196-2.656 2.665s1.193 2.665 2.665 2.665 2.665-1.193 2.665-2.665-1.19-2.662-2.659-2.665z"/></svg>
                </div>
                <div class="lib__value">{{ $ctrl.data.categoryCounts["figma"] | ui8FormatNumber }}</div>
                <div class="lib__name">For Figma</div>
              </a>
            </li>`+
`
            <li class="lib__item">
              <a href="/category/fonts" class="lib__link">
                <div class="lib__icon">
                  <svg viewBox="0 0 16 16"><path fill-rule="evenodd" d="M4.607 0h6.786l1.608.035c.45.037.863.116 1.251.313a3.2 3.2 0 0 1 1.398 1.398c.198.388.277.802.313 1.251.035.433.035.964.035 1.608v6.786l-.035 1.608c-.037.45-.116.863-.313 1.251a3.2 3.2 0 0 1-1.398 1.398c-.388.198-.802.277-1.251.313-.433.035-.964.035-1.608.035H4.607c-.644 0-1.175 0-1.608-.035-.45-.037-.863-.116-1.251-.313a3.2 3.2 0 0 1-1.398-1.398c-.198-.388-.277-.802-.313-1.251C0 12.569 0 12.037 0 11.393V4.607l.035-1.608c.037-.45.116-.863.313-1.251A3.2 3.2 0 0 1 1.747.349c.388-.198.802-.277 1.251-.313C3.431 0 3.963 0 4.607 0zM4 4a.8.8 0 0 1 .8-.8h6.4a.8.8 0 0 1 0 1.6H8.8V12a.8.8 0 1 1-1.6 0V4.8H4.8A.8.8 0 0 1 4 4z"/></svg>
                </div>
                <div class="lib__value">{{ $ctrl.data.categoryCounts["fonts"] | ui8FormatNumber }}</div>
                <div class="lib__name">Fonts</div>
              </a>
            </li>
          </ul>
        </div>`+
`
        <div class="faq">
          <h2 class="faq__title">Frequently asked questions</h2>
          <div class="faq__list">
            <div class="faq__item">
              <div class="faq__head">What is the All-Access Pass?</div>
              <div class="faq__body">The All-Access pass is a subscription based membership offered in different tiers, giving you access to download any product on the platform as well as all future releases.</div>
            </div>
            <div class="faq__item">
              <div class="faq__head">How often do you release new products?</div>
              <div class="faq__body">We curate new products on a daily basis. The amount of approved daily releases will vary as our primary focus is quality over quantity.</div>
            </div>
            <div class="faq__item">
              <div class="faq__head">How can I cancel my subscription?</div>
              <div class="faq__body">You can cancel your subscription at any time from your purchases page and you may continue downloading products until your subscription expires.</div>
            </div>
            <div class="faq__item">
              <div class="faq__head">Do I have access to all products?</div>
              <div class="faq__body">Yes, you can download any product offered in the platform for as long as your subscription is active.</div>
            </div>
            <div class="faq__item">
              <div class="faq__head">Can I redownload products?</div>
              <div class="faq__body">You can redownload products as long as you have an active subscription. Downloading the same product within 24 hours will not consume additional download credits.</div>
            </div>
            <div class="faq__item">
              <div class="faq__head">What happens when I reach my daily download limit?</div>
              <div class="faq__body">You must wait 24 hours for your downloads to recharge after you’ve exceeded your daily allocated limit. However, upgrading to a higher tier will instantly reset your download credits.</div>
            </div>
            <div class="faq__item">
              <div class="faq__head">How does licensing work after the subscription is canceled or expired?</div>
              <div class="faq__body">You have permanent license to use any downloaded products even after your subscription is canceled or expired. However, you must have an active subscription if you wish to redownload products.</div>
            </div>
            <div class="faq__item">
              <div class="faq__head">Can multiple users download with the All-Access pass?</div>
              <div class="faq__body">The All-Access pass is meant to be for a single user. Account sharing is monitored and strictly prohibited. If you have a team and have multiple members needing access please contact support for assistance.</div>
            </div>
            <div class="faq__item">
              <div class="faq__head">Do you offer plans for teams?</div>
              <div class="faq__body">We can manually create All-Access Pass accounts for teams of up to 20 members. If you have a team, please contact support for assistance.</div>
            </div>
            <div class="faq__item">
              <div class="faq__head">Do you offer any discounts?</div>
              <div class="faq__body">We offer a 15% renewal discount on the Basic, Pro and Elite All-Access Pass tiers.</div>
            </div>
            <div class="faq__item">
              <div class="faq__head">How to I enter my VAT/TAX information?</div>
              <div class="faq__body">You can customize and download your invoices with the appropriate tax information immediately after purchase.</div>
            </div>
            <div class="faq__item">
              <div class="faq__head">What is your refund policy?</div>
              <div class="faq__body">All transactions are final and we do not offer refunds on All-Access Pass purchases.</div>
            </div>
          </div>
        </div>
      </div>
    </div>`,controller:function($location){var ctrl=this;var switchers;ctrl.$destroy=function(){if(switchers)switchers.off();$(".faq__head").off();};ctrl.$onInit=function(){window.scrollTo(0,0);if(!ctrl.data.promo&&window.UI8.promo){ctrl.data.promo=window.UI8.promo;}
if(!ctrl.data.isRenewal&&window.UI8.isRenewal){ctrl.data.isRenewal=window.UI8.isRenewal;}
if(!ctrl.data.lifetime&&window.UI8.lifetime){ctrl.data.lifetime=window.UI8.lifetime;}
if(!ctrl.data.subscriptions&&window.UI8.subscriptions){ctrl.data.subscriptions=window.UI8.subscriptions;}
if($location.search().order){$("html,body").animate({scrollTop:$(".pricing-heading").offset().top-180,},"fast");}
$(".faq__head").on("click",function(){$(this).toggleClass("active");$(this).next().slideToggle();});};},bindings:{data:"<",},});angular.module("UI8.components").component("passPricing",{template:`<div class="passes">
      <div class="passes__list">`+
`
        <div class="passes__item">
          <div class="passes__cell">
            <div class="passes__type">Starter</div>
            <div class="passes__price">{{ $ctrl.starterPrice | ui8Currency }}</div>
            <div class="passes__regular">paid per month</div>
          </div>
          <div class="passes__cell">
            <ul class="passes__details">
              <li>{{ $ctrl.starterPass.daily_download_allowance }} downloads per day</li>
              <li>Access to all products</li>
              <li>Access to new releases</li>
            </ul>
            <button class="btn btn--submit" ng-if="!$ctrl.currentPass($ctrl.starterPass._id)" ng-click="$ctrl.addToCart($ctrl.starterPass._id)" ng-disabled="$ctrl.userHasLifetime || $ctrl.lowLevelPass($ctrl.starterPass._id)">Add to cart</button>
            <div class="passes__current" ng-if="$ctrl.currentPass($ctrl.starterPass._id)">Current plan</div>
          </div>
        </div>`+
`
        <div class="passes__item">
          <div class="passes__cell">
            <div class="passes__type" style="color: #ffd480">Basic</div>
            <div class="passes__price">
              {{ $ctrl.basicPrice | ui8Currency }}
              <span ng-if="$ctrl.renewalDiscount && $ctrl.basicDiscount !== 0">{{ $ctrl.basicRegularPrice | ui8Currency }}</span>
            </div>
            <div class="passes__regular">paid every {{ $ctrl.subTerm($ctrl.basicPass) }}</div>
          </div>
          <div class="passes__cell">
            <ul class="passes__details">
              <li>{{ $ctrl.basicPass.daily_download_allowance }} downloads per day</li>
              <li>Access to all products</li>
              <li>Access to new releases</li>
              <li ng-if="!$ctrl.renewalDiscount && $ctrl.basicDiscount === 0">15% renewal discount</li>
              <li class="active" ng-if="$ctrl.renewalDiscount && $ctrl.basicDiscount !== 0">{{ $ctrl.basicDiscount }}% discount applied</li>
            </ul>
            <button class="btn btn--submit" ng-if="!$ctrl.currentPass($ctrl.basicPass._id)" ng-click="$ctrl.addToCart($ctrl.basicPass._id)" ng-disabled="$ctrl.userHasLifetime || $ctrl.lowLevelPass($ctrl.basicPass._id)">Add to cart</button>
            <div class="passes__current" ng-if="$ctrl.currentPass($ctrl.basicPass._id)" style="color: #ffd480">Current plan</div>
          </div>
        </div>`+
`
        <div class="passes__item">
          <div class="passes__cell">
            <div class="passes__type" style="color: #ff71b5">Pro</div>
            <div class="passes__price">
              {{ $ctrl.proPrice | ui8Currency }}
              <span ng-if="$ctrl.renewalDiscount && $ctrl.proDiscount !== 0">{{ $ctrl.proRegularPrice | ui8Currency }}</span>
            </div>
            <div class="passes__regular">paid every {{ $ctrl.subTerm($ctrl.proPass) }}</div>
          </div>
          <div class="passes__cell">
            <ul class="passes__details">
              <li>{{ $ctrl.proPass.daily_download_allowance }} downloads per day</li>
              <li>Access to all products</li>
              <li>Access to new releases</li>
              <li ng-if="!$ctrl.renewalDiscount && $ctrl.proDiscount === 0">15% renewal discount</li>
              <li class="active" ng-if="$ctrl.renewalDiscount && $ctrl.proDiscount !== 0">{{ $ctrl.proDiscount }}% discount applied</li>
            </ul>
            <button class="btn btn--submit" ng-if="!$ctrl.currentPass($ctrl.proPass._id)" ng-click="$ctrl.addToCart($ctrl.proPass._id)" ng-disabled="$ctrl.userHasLifetime || $ctrl.lowLevelPass($ctrl.proPass._id)">Add to cart</button>
            <div class="passes__current" ng-if="$ctrl.currentPass($ctrl.proPass._id)" style="color: #ff71b5">Current plan</div>
          </div>
        </div>`+
`
        <div class="passes__item">
          <div class="passes__cell">
            <div class="passes__type" style="color: #7583ff">Elite</div>
            <div class="passes__best">Best value</div>
            <div class="passes__price">
              {{ $ctrl.elitePrice | ui8Currency }}
              <span ng-if="$ctrl.renewalDiscount && $ctrl.eliteDiscount !== 0">{{ $ctrl.eliteRegularPrice | ui8Currency }}</span>
            </div>
            <div class="passes__regular">paid every {{ $ctrl.subTerm($ctrl.elitePass) }}</div>
          </div>
          <div class="passes__cell">
            <ul class="passes__details">
              <li>{{ $ctrl.elitePass.daily_download_allowance }} downloads per day</li>
              <li>Access to all products</li>
              <li>Access to new releases</li>
              <li ng-if="!$ctrl.renewalDiscount && $ctrl.eliteDiscount === 0">15% renewal discount</li>
              <li class="active" ng-if="$ctrl.renewalDiscount && $ctrl.eliteDiscount !== 0">{{ $ctrl.eliteDiscount }}% discount applied</li>
            </ul>
            <button class="btn btn--submit" ng-if="!$ctrl.currentPass($ctrl.elitePass._id)" ng-click="$ctrl.addToCart($ctrl.elitePass._id)" ng-disabled="$ctrl.userHasLifetime">Add to cart</button>
            <div class="passes__current" ng-if="$ctrl.currentPass($ctrl.elitePass._id)" style="color: #7583ff">Current plan</div>
          </div>
        </div>
      </div>
      <div class="passes__hint">All plans may be canceled at any time and you retain access to download until expired.</div>
    </div>`,controller:function(CartService){var ctrl=this;function basePrice(product,discount,isRenewal){var price;if(product.site_promo){price=product.seasonal_promo_price;}else if(product.on_sale){price=product.sale_price;}else{price=product.price;}
if(discount&&isRenewal){var discountedPrice=price-price*discount;if(discountedPrice<price){price=discountedPrice;}}
return Math.floor(price/100)*100;}
function discountPercent(regularPrice,currentPrice){return Math.floor(((regularPrice-currentPrice)/regularPrice)*100);}
function subscriptionTerm(sub){return sub.subscription_months+" months";}
ctrl.$onInit=function(){ctrl.userHasLifetime=window.UI8.userHasLifetime;ctrl.subTerm=subscriptionTerm;ctrl.permanentDiscount=!ctrl.promo||(ctrl.promo&&!ctrl.isRenewal);ctrl.starterPass=ctrl.subscriptions[0];ctrl.basicPass=ctrl.subscriptions[1];ctrl.proPass=ctrl.subscriptions[2];ctrl.elitePass=ctrl.subscriptions[3];calculatePrices();document.body.addEventListener("promo-updated",promoListener);};ctrl.$onDestroy=function(){document.body.removeEventListener("promo-updated",promoListener);};ctrl.currentPass=function(passId){return(window.UI8.userActivePass&&window.UI8.userActivePassId===passId);};ctrl.lowLevelPass=function(passId){const currentIndex=ctrl.subscriptions.findIndex((s)=>s._id===passId);const activeIndex=ctrl.subscriptions.findIndex((s)=>s._id===window.UI8.userActivePassId);return window.UI8.userActivePass&&currentIndex<activeIndex;};ctrl.addToCart=function(productId){CartService.addPassToCart(productId,1).then(function(){setTimeout(function(){window.scrollLock.disablePageScroll();var groupCart=$(".header__cell--cart"),groupNext=groupCart.find(".payup__sidebar .payup__btn"),groupLayout=groupCart.find(".payup__layout"),groupBack=groupCart.find(".payup__back");groupNext.on("click",function(){groupLayout.addClass("step-checkout");});groupBack.on("click",function(){groupLayout.removeClass("step-checkout");});},10);});if(ctrl.closeModal)$("body").removeClass("pass-pricing-modal");};function calculatePrices(){ctrl.renewalDiscount=ctrl.promo?ctrl.promo.discount/100:false;ctrl.starterPrice=basePrice(ctrl.starterPass,ctrl.renewalDiscount,false,ctrl.isRenewal);ctrl.basicPrice=basePrice(ctrl.basicPass,ctrl.renewalDiscount,true,ctrl.isRenewal);ctrl.proPrice=basePrice(ctrl.proPass,ctrl.renewalDiscount,true,ctrl.isRenewal);ctrl.elitePrice=basePrice(ctrl.elitePass,ctrl.renewalDiscount,true,ctrl.isRenewal);ctrl.basicRegularPrice=ctrl.basicPass.price;ctrl.proRegularPrice=ctrl.proPass.price;ctrl.eliteRegularPrice=ctrl.elitePass.price;ctrl.basicDiscount=discountPercent(ctrl.basicRegularPrice,ctrl.basicPrice);ctrl.proDiscount=discountPercent(ctrl.proRegularPrice,ctrl.proPrice);ctrl.eliteDiscount=discountPercent(ctrl.eliteRegularPrice,ctrl.elitePrice);}
function promoListener(){ctrl.promo=UI8.promo;ctrl.isRenewal=UI8.isRenewal;ctrl.permanentDiscount=ctrl.promo&&!ctrl.isRenewal;calculatePrices();}},bindings:{subscriptions:"<",lifetime:"<",promo:"<?",closeModal:"<?",},});angular.module("UI8.components").component("productPage",{template:'<pass-details data="$ctrl.data" user="$ctrl.user" comments="$ctrl.comments"></pass-details>',controller:function($scope){var ctrl=this;ctrl.$onInit=function(){if(/passrenew/.test(window.location.search)&&!ctrl.data.promo){window.location.reload();}
ctrl.path=location.pathname.replace("/","_");document.body.scrollTop=0;};$scope.$on("UPDATE_COMMENT_COUNT",function(event,comments){ctrl.comments=comments;});$scope.$on("UPDATE_TAB",function(event,tab){$scope.$broadcast("NEW_TAB",tab);});},bindings:{data:"<",user:"<",},});